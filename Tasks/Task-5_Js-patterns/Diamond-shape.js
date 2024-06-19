function diamondPattern(n) {
    let pattern = '';

    // Upper part
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        pattern += '\n';
    }

    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern += '*';
        }
        pattern += '\n';
    }

    console.log(pattern);
}

diamondPattern(5);