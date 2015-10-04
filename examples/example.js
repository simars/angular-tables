'use strict';

// Declare app level module which depends on views, and components
angular.module('exampleAngularTables', [
    'angularTables'
]).controller('ExmapleCtrl', ['$scope', function ($scope) {
    $scope.exampleCols =
        [
            'Column 1',
            {title: 'Column 2', width: 20},
            'Column 3',
            'Column 4'
        ];

    $scope.exampleColDefs = [
        {
            "targets": [0,3],
            "searchable": true,
            "width": 5
        }];


    $scope.exampleData = [
        ["X", "A", "B", "C"],
        ["2", "D", "E", "F"],
        ["3", "H", "I", "J"]
    ];


    $scope.addRow = function () {
        var row = [$scope.value1, $scope.value2, $scope.value3, $scope.value4];
        console.log(row);
        $scope.exampleData.push(row);
    };

    $scope.click = function() {
        alert('function defined in example controller scope was clicked');
    };


}]);
