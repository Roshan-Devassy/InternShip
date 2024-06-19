function pyramidPattern(rows) {
    let pattern = '';

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            pattern += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        pattern += '\n';
    }

    console.log(pattern);
}

pyramidPattern(5);