import { Request } from 'ask-sdk-model';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
declare type PlaybackControllerType = 'PlaybackController.PlayCommandIssued' | 'PlaybackController.PauseCommandIssued' | 'PlaybackController.NextCommandIssued' | 'PlaybackController.PreviousCommandIssued';
export declare class PlaybackControllerRequestBuilder extends RequestBuilder {
    private type;
    constructor(settings: SkillSettings, type: PlaybackControllerType);
    protected buildRequest(): Request;
}
export {};
