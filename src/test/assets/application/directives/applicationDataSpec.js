describe("Application module", function() {

    var scope;

    beforeEach(angular.mock.module("application", function($controllerProvider) {
        $controllerProvider.register('IndexController', function($scope) {
        });
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("applicationData directive", function() {

        var element;

        beforeEach(angular.mock.inject(function ($compile, $rootScope, $templateCache) {
            $templateCache.put('/application/applicationData.html', 'Test');
            element = angular.element('<application-data></application-data>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(element[0].innerHTML).toEqual("Test");
        });

    });

});

