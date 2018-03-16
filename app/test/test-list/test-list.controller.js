class TestListController {
    constructor(Test) {
        'ngInject';

        this._Test = Test;
    }

    $onInit() {
        this.items = this._Test.getItems();
    }
}

export default TestListController;
