/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */

import { Cause, Request, Session } from 'ask-sdk-model';
import { v4 } from 'uuid';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';

export class SessionResumedRequestBuilder extends RequestBuilder {

    private cause : Cause;
    constructor(settings : SkillSettings, cause : Cause) {
        super(settings);
        this.cause = cause;
    }

    protected buildRequest() : Request {
        return {
            type: 'SessionResumedRequest',
            requestId: `EdwRequestId.${v4()}`,
            timestamp: new Date().toISOString(),
            locale: this.settings.locale,
            cause: this.cause,
        };
    }

}
