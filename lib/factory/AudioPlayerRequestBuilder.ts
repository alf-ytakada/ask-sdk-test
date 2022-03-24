/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */

import { interfaces, Request, RequestEnvelope } from 'ask-sdk-model';
import { v4 } from 'uuid';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
import PlayerActivity = interfaces.audioplayer.PlayerActivity;

type AudioPlayerType =
    'AudioPlayer.PlaybackStarted' |
    'AudioPlayer.PlaybackFinished' |
    'AudioPlayer.PlaybackStopped' |
    'AudioPlayer.PlaybackNearlyFinished' |
    'AudioPlayer.PlaybackFailed';

export class AudioPlayerRequestBuilder extends RequestBuilder {

    private type : AudioPlayerType;
    private token : string;
    private offset : number;
    private activity : interfaces.audioplayer.PlayerActivity;

    constructor(settings : SkillSettings, type : AudioPlayerType) {
        super(settings);
        this.type = type;
    }

    public withToken(token : string) : AudioPlayerRequestBuilder {
        this.token = token;
        return this;
    }

    public withOffset(offset : number) : AudioPlayerRequestBuilder {
        this.offset = offset;
        return this;
    }

    public withCurrentActivity(activity : PlayerActivity) : AudioPlayerRequestBuilder {
        this.activity = activity;
        return this;
    }

    protected modifyRequest(request : RequestEnvelope) : void {
        super.modifyRequest(request);
        if (!request.context.AudioPlayer) {
            request.context.AudioPlayer = {};
        }
        if (this.token) {
            request.context.AudioPlayer.token = this.token;
        }
        if (this.offset) {
            request.context.AudioPlayer.offsetInMilliseconds = this.offset;
        }
        if (this.activity) {
            request.context.AudioPlayer.playerActivity = this.activity;
        }
    }

    protected buildRequest() : Request {
        return {
            type: this.type,
            requestId: `EdwRequestId.${v4()}`,
            timestamp: new Date().toISOString(),
            locale: this.settings.locale,
        };
    }

}
