/*
 * Copyright (c) 2018. Taimos GmbH http://www.taimos.de
 */

import { interfaces, ResponseEnvelope } from 'ask-sdk-model';
import { fail } from 'assert';
import { expect } from 'chai';
import { ResponseValidator, SequenceItem } from '../types';

export class DirectivesValidator extends ResponseValidator {
    public validate(currentItem : SequenceItem, response : ResponseEnvelope) : void {
        if (!currentItem.directives) {
            return;
        }
        expect(response.response.directives).to.deep.equal(currentItem.directives);
    }

}
