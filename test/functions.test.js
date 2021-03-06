IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

import { 
    multiplyBySeven,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 35;
    // const expected = 28;

    const actual = multiplyBySeven(5);

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

import { 
    multiplyByTwelveThenHalve,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 24;

    const actual = multiplyByTwelveThenHalve(24);

    expect.equal(actual, expected);
});

import { 
    divideThenMultiply,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

import { 
        returnAsAnArray,
    } from '../functions.js';
    
    const { test, skip } = QUnit;
    
    test('this test should pass', (expect) => {
            const expected = [8, 4, 5];
        
            const actual = divideThenMultiply(8, 4, 5);
        
            expect.deepEqual(actual, expected);
        });

skip('this test should be skipped', (expect) => {
            const expected = true;
        
            const actual = true;
        
            expect.equal(actual, expected);
        });

import {
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test ('this test should pass', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);
});

import {
    makeLuckyGreeting,
} from '../functions.js';

const { test, skip } = QUnit;

test ('this test should pass', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';
    const actual = makeLuckyGreeting(8,4);

    expect.equal(actual, expected);
});

import {
    getSecondItem,
} from '../functions.js';

const { test, skip } = QUnit;

test ('this test should pass', (expect) => {
    const expected = 'apple';
    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);
});


import {
    getLastItem,
} from '../functions.js';

const { test, skip } = QUnit;

test ('this test should pass', (expect) => {
    const expected = 'plum';
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);
});

