class TestService {
    constructor() {
        this.items = [
            {id: 1, name: 'item 1'},
            {id: 2, name: 'item 2'},
            {id: 3, name: 'item 3'},
        ];
    }

    getItems() {
        return this.items;
    }
}

export default TestService;