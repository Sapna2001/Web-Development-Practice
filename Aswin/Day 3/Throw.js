
function isPositive(a) {
    switch (true) {
        case a > 0:
            return 'YES';
        case a === 0:
            throw Error('Zero Error');
        case a < 0:
            throw Error('Negative Error');
    }
}

