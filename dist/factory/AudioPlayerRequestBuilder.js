"use strict";
/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerRequestBuilder = void 0;
const uuid_1 = require("uuid");
const RequestBuilder_1 = require("./RequestBuilder");
class AudioPlayerRequestBuilder extends RequestBuilder_1.RequestBuilder {
    constructor(settings, type) {
        super(settings);
        this.type = type;
    }
    withToken(token) {
        this.token = token;
        return this;
    }
    withOffset(offset) {
        this.offset = offset;
        return this;
    }
    withCurrentActivity(activity) {
        this.activity = activity;
        return this;
    }
    modifyRequest(request) {
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
    buildRequest() {
        return {
            type: this.type,
            requestId: `EdwRequestId.${uuid_1.v4()}`,
            timestamp: new Date().toISOString(),
            locale: this.settings.locale,
        };
    }
}
exports.AudioPlayerRequestBuilder = AudioPlayerRequestBuilder;
//# sourceMappingURL=AudioPlayerRequestBuilder.js.map