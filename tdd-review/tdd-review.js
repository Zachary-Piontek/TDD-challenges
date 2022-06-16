

export function thingy(array) {
    return array.length;
}

export function thirdThingy(array) {
    return array.length > 2 ? array[2] : 'empty';
}

export function firstKeyLastValue(obj) {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const lastKey = keys[keys.length - 1];
    const lastValue = obj[lastKey];
    return {
        firstKey: firstKey,
        lastValue: lastValue,
    };

}