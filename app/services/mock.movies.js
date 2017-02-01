System.register(["../model/movie"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_1;
    var MOVIES;
    return {
        setters:[
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }],
        execute: function() {
            exports_1("MOVIES", MOVIES = [
                new movie_1.Movie(1, "https://i.ytimg.com/vi/wB5h7VwW8GU/maxresdefault.jpg", "TRANSFORMERS 4", "Michael Bay", 2014),
                new movie_1.Movie(2, "http://cartoonbros.com/wp-content/uploads/2016/05/Batman-14.jpg", "BATMAN", "Michael Bay", 2015),
                new movie_1.Movie(3, "https://i.ytimg.com/vi/4ekm20rSGs8/maxresdefault.jpg", "TITANES DEL PACIFICO", "Michael Bay", 2016),
                new movie_1.Movie(4, "https://kinefilia.files.wordpress.com/2013/03/jack0.jpg?w=450&h=225", "JACK EL CAZA GIGANTES", "Michael Bay", 2017)
            ]);
        }
    }
});
//# sourceMappingURL=mock.movies.js.map