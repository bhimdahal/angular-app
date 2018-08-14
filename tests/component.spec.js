describe('Testing Component', function () {
    beforeEach(module('common'));
    //beforeEach(module('ui.router'));
  
    var controller;
    var $componentController;
  
      beforeEach(inject(function ($injector) {
        $componentController = $injector.get('$componentController');
        controller = $componentController('home');
      }));
  
      it('should return the inital value to be 0', function() {
       
        expect(controller.count).toEqual(0);
      });

      it('should increment the value to 1', function() {
          controller.increment();
         expect(controller.count).toEqual(1);
       });
       it('should decrement the value to -1', function() {
        controller.decrement();
       expect(controller.count).toEqual(-1);
     });
  
    
  });
