// IMPORT MODULES under test here:
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

    const actual = addExclamationPoints;

    expect.equal(actual, expected);
});

// import { 
//   multiplyBySeven  ,
// } from '../functions.js';

// // const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

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

// // const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });
