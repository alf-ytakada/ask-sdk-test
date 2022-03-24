/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */

import { interfaces, Request, RequestEnvelope } from 'ask-sdk-model';
import { v4 } from 'uuid';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
import PlayerActivity = interfaces.audioplayer.PlayerActivity;

type PlaybackControllerType =
    'PlaybackController.PlayCommandIssued' |
    'PlaybackController.PauseCommandIssued' |
    'PlaybackController.NextCommandIssued' |
    'PlaybackController.PreviousCommandIssued';

export class PlaybackControllerRequestBuilder extends RequestBuilder {

    private type : PlaybackControllerType;
    private token : string;
    private offset : number;
    private activity : interfaces.audioplayer.PlayerActivity;

    constructor(settings : SkillSettings, type : PlaybackControllerType) {
        super(settings);
        this.type = type;
    }

    public withToken(token : string) : PlaybackControllerRequestBuilder {
        this.token = token;
        return this;
    }

    public withOffset(offset : number) : PlaybackControllerRequestBuilder {
        this.offset = offset;
        return this;
    }

    public withCurrentActivity(activity : PlayerActivity) : PlaybackControllerRequestBuilder {
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
