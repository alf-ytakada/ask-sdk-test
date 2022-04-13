"use strict";
/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectivesValidator = void 0;
const chai_1 = require("chai");
const types_1 = require("../types");
class DirectivesValidator extends types_1.ResponseValidator {
    validate(currentItem, response) {
        if (!currentItem.directives) {
            return;
        }
        chai_1.expect(response.response.directives).to.deep.equal(currentItem.directives);
    }
}
exports.DirectivesValidator = DirectivesValidator;
//# sourceMappingURL=DirectivesValidator.js.map