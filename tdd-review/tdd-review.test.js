import {
    firstKeyLastValue,
    thingy, thirdThingy
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

// write a function that takes an array and returns the length of that array

test('test name', (expect) => {
    const array = [];
    const expected = 0;

    // Act: turn the gumball crank at store what come out
    const actual = thingy(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
});

test('returns 3rd item in an array', (expect) => {
    // Arrange: what goes in and out of the gumball machine
    // in:
    /* ? */
    // out:
    const array = [1, 2, 3];
    const expected = '3';

    // Act: turn the gumball crank at store what comes out
    const actual = thirdThingy(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
});

test('Object keys returns array of keys', (expect) => {
    const cat = {
        name: 'duchess',
        type: 'persian'
    };
    const keys = ['name', 'type'];

    const actual = Object.keys(cat);

    expect.deepEqual(actual, keys);

    expect.equal(keys[0], 'name');

    const lastKey = keys[keys.length - 1];
    expect.equal(lastKey, 'type');

    expect.equal(cat[lastKey], 'persian');
});

test('first key, last value', (expect) => {
    const input = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };

    const expected = {
        firstKey: 'name',
        lastValue: 6
    };

    


    
    const actual = firstKeyLastValue(input);

    expect.deepEqual(actual, expected);
});


























