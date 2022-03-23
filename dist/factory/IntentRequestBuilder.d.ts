import { DialogState, IntentConfirmationStatus, Request, SlotConfirmationStatus } from 'ask-sdk-model';
import { SkillSettings } from '../types';
import { RequestBuilder } from './RequestBuilder';
export declare class IntentRequestBuilder extends RequestBuilder {
    private intentName;
    private slots;
    private confirmationStatus;
    private dialogState;
    constructor(settings: SkillSettings, intentName: string);
    withEmptySlot(name: string): IntentRequestBuilder;
    withSlot(name: string, value: string): IntentRequestBuilder;
    withSlotConfirmation(name: string, confirmationStatus: SlotConfirmationStatus, value?: string): IntentRequestBuilder;
    withSlotResolution(name: string, value: string, slotType: string, id: string): IntentRequestBuilder;
    withSlotResolutionNoMatch(name: string, value: string, slotType: string): IntentRequestBuilder;
    withIntentConfirmation(confirmationStatus: IntentConfirmationStatus): IntentRequestBuilder;
    withDialogState(dialogState: DialogState): IntentRequestBuilder;
    protected buildRequest(): Request;
}
