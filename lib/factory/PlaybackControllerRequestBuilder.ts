/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */

import { Request, SessionEndedReason } from 'ask-sdk-model';
import { v4 } from 'uuid';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';

type PlaybackControllerType =
    'PlaybackController.PlayCommandIssued' |
    'PlaybackController.PauseCommandIssued' |
    'PlaybackController.NextCommandIssued' |
    'PlaybackController.PreviousCommandIssued';

export class PlaybackControllerRequestBuilder extends RequestBuilder {

    private type : PlaybackControllerType;

    constructor(settings : SkillSettings, type : PlaybackControllerType) {
        super(settings);
        this.type = type;
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
