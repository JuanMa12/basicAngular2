System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters:[],
        execute: function() {
            Movie = (function () {
                function Movie(id, image, title, made, year) {
                    this.id = id;
                    this.image = image;
                    this.title = title;
                    this.made = made;
                    this.year = year;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    }
});
//# sourceMappingURL=movie.js.map