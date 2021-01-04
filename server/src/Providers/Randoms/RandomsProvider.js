class RandomsProvider {
    async number(start, end) {
        // EX: start = 0; end = 5; The set of answer is { 0, 1, 2, 3, 4, 5 }
        return (await Math.floor(Math.random() * end)) + start;
    }

    async numberToString(start, end) {
        // EX: start = 0; end = 5; The set of answer is { '0', '1', '2', '3', '4', '5' }
        const num = (await Math.floor(Math.random() * end)) + start;
        return num.toString();
    }

    async characterLowercase() {
        // EX: The set of answer is { 'a', 'b', 'c', ... , 'z' }
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        return await characters.charAt(await this.number(0, 25));
    }

    async characterUppercase() {
        // EX: The set of answer is { 'A', 'B', 'C', ... , 'Z' }
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return await characters.charAt(await this.number(0, 25));
    }

    async boolean() {
        // EX: The set of answer is { true, false }
        let result = true;
        if ((await this.number(0, 10)) > 5) {
            result = false;
        }
        return result;
    }
}

export default RandomsProvider;
