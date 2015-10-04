var _ = require('lodash');
var ngmodule = require('../module');
module.exports = ngmodule.directive('datatable',
    ['$compile', function ($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                function rowCompiler(row) {
                    row = $compile(row)(scope);
                    return row;
                }

                var options = {};

                if (attrs.options !== undefined) {
                    _.each(scope.$eval(attrs.options), function (opts) {
                        return _(options).extend(opts)
                    })
                }


                if (attrs.columns) {
                    var columns = scope.$eval(attrs.columns);
                    options['columns'] = _.map(columns, function (column) {
                        if( typeof column === 'object' )
                        {
                            return column;
                        } else {
                            return {'title': column };
                        }
                    });
                }
                if (attrs.columnDefs !== undefined) {
                    options['columnDefs'] = scope.$eval(attrs.columnDefs);
                }

                options['rowCallback'] = rowCompiler;

                var datatable = element.DataTable(options);

                scope.$watch(attrs.data, function (value) {
                    var val = value || null;
                    if (val) {

                        datatable.clear();
                        datatable.rows.add(scope.$eval(attrs.data));
                        datatable.draw();
                    }
                }, true);
            }
        };
    }]);
