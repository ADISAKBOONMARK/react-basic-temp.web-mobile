class DaterProvider {
    async timestamp() {
        const timestamp = new Date().getTime() - new Date().getTimezoneOffset() * 60000;

        return timestamp;
    }
}

export default DaterProvider;
