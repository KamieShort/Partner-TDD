// IMPORT MODULES under test here:
// import { 
//     addExclamationPoints,
// } from '../functions.js';

// const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = 'bunny rabbit!!!';

//     const actual = addExclamationPoints('bunny rabbit');

//     expect.equal(actual, expected);
// });

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

// import { 
//     multiplyBySeven,
// } from '../functions.js';

// const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = 35;
//     // const expected = 28;

//     const actual = multiplyBySeven(5);

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

// import { 
//     multiplyBy12ThenHalve,
// } from '../functions.js';

// const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = 10;

//     const actual = multiplyBy12ThenHalve(8, 4, 5);

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

import { 
        divideThenMultiply,
    } from '../functions.js';
    
    const { test, skip } = QUnit;
    
    test('this test should pass', (expect) => {
        const expected = [8, 4, 5];
       
        const actual = divideThenMultiply(8, 4, 5);
    
        expect.deepequal(actual, expected);
    });