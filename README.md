### Welcome to angular-tables
angular-tables provides a directive that brings power of [Datatables.net](https://datatables.net/reference/option/) in [Angular’s](https://angularjs.org) scope
Try [zero-config Demo here](http://demo.simars.io/angular-tables/),

### Features
+ Manage Datables options and data for DataTables declaratively in table element (HTML)
+ Assigning attributes to table element binding to options wih Objects, and data in 2D Array of [row][column] in angular's current controller's scope
+ Watches over the data (array[row][column]) bound to the table from scope, and re-renders automatically on change
+ Use angular aware elements in data values. Values first $compile with angular's current scope then $eval


### How to use?
+ Follow [example](https://github.com/simars/angular-tables/blob/master/examples)
+ Follow [Datatables options](https://datatables.net/reference/option/) for configurable table options that can be used