'use strict';

describe('Main controller', function () {

    var controller;

    beforeEach(module('footer'));
    beforeEach(module('navbar'));
    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();
		$controller = _$controller_('MainController', { $scope: $scope });
    }));

    it('should define a title', function () {
        expect(controller.title).toBeDefined();
    });
});