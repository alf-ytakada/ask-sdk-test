"use strict";
/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResumedRequestBuilder = void 0;
const uuid_1 = require("uuid");
const RequestBuilder_1 = require("./RequestBuilder");
class SessionResumedRequestBuilder extends RequestBuilder_1.RequestBuilder {
    constructor(settings, cause) {
        super(settings);
        this.cause = cause;
    }
    buildRequest() {
        return {
            type: 'SessionResumedRequest',
            requestId: `EdwRequestId.${uuid_1.v4()}`,
            timestamp: new Date().toISOString(),
            locale: this.settings.locale,
            cause: this.cause,
        };
    }
}
exports.SessionResumedRequestBuilder = SessionResumedRequestBuilder;
//# sourceMappingURL=SessionResumedRequestBuilder.js.map