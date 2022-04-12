import { Cause, Request } from 'ask-sdk-model';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
export declare class SessionResumedRequestBuilder extends RequestBuilder {
    private cause;
    constructor(settings: SkillSettings, cause: Cause);
    protected buildRequest(): Request;
}
