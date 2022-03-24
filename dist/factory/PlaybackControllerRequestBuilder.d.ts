import { interfaces, Request, RequestEnvelope } from 'ask-sdk-model';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
import PlayerActivity = interfaces.audioplayer.PlayerActivity;
declare type PlaybackControllerType = 'PlaybackController.PlayCommandIssued' | 'PlaybackController.PauseCommandIssued' | 'PlaybackController.NextCommandIssued' | 'PlaybackController.PreviousCommandIssued';
export declare class PlaybackControllerRequestBuilder extends RequestBuilder {
    private type;
    private token;
    private offset;
    private activity;
    constructor(settings: SkillSettings, type: PlaybackControllerType);
    withToken(token: string): PlaybackControllerRequestBuilder;
    withOffset(offset: number): PlaybackControllerRequestBuilder;
    withCurrentActivity(activity: PlayerActivity): PlaybackControllerRequestBuilder;
    protected modifyRequest(request: RequestEnvelope): void;
    protected buildRequest(): Request;
}
export {};
