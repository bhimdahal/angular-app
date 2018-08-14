describe('Testing UI Router', function () {
    beforeEach(module('common'));
    //beforeEach(module('ui.router'));

    var $state;
    var $componentController;

    beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        //controller = $componentController('home');
        $state = $injector.get('$state');
    }));

    describe('Home Page', function () {
        var state;

        it('should get correct url', function () {
            state = $state.get('home');
            expect(state.url).toEqual('/');
        });
        // it('should use correct template', function () {
        //     state = $state.get('home');
        //     expect(state.templateUrl).toEqual('');
        // });
    });

    //   it('should increment the value to 1', function() {
    //       controller.increment();
    //      expect(controller.count).toEqual(1);
    //    });
    //    it('should decrement the value to -1', function() {
    //     controller.decrement();
    //    expect(controller.count).toEqual(-1);
    //  });


});