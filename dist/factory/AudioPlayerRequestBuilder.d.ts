import { interfaces, Request, RequestEnvelope } from 'ask-sdk-model';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
import PlayerActivity = interfaces.audioplayer.PlayerActivity;
declare type AudioPlayerType = 'AudioPlayer.PlaybackStarted' | 'AudioPlayer.PlaybackFinished' | 'AudioPlayer.PlaybackStopped' | 'AudioPlayer.PlaybackNearlyFinished' | 'AudioPlayer.PlaybackFailed';
export declare class AudioPlayerRequestBuilder extends RequestBuilder {
    private type;
    private token;
    private offset;
    private activity;
    constructor(settings: SkillSettings, type: AudioPlayerType);
    withToken(token: string): AudioPlayerRequestBuilder;
    withOffset(offset: number): AudioPlayerRequestBuilder;
    withCurrentActivity(activity: PlayerActivity): AudioPlayerRequestBuilder;
    protected modifyRequest(request: RequestEnvelope): void;
    protected buildRequest(): Request;
}
export {};
