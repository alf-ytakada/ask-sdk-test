"use strict";
/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackControllerRequestBuilder = void 0;
const uuid_1 = require("uuid");
const RequestBuilder_1 = require("./RequestBuilder");
class PlaybackControllerRequestBuilder extends RequestBuilder_1.RequestBuilder {
    constructor(settings, type) {
        super(settings);
        this.type = type;
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
exports.PlaybackControllerRequestBuilder = PlaybackControllerRequestBuilder;
//# sourceMappingURL=PlaybackControllerRequestBuilder.js.map