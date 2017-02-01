System.register(["angular2/core", "../model/movie", "../services/movies.service", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_1, movies_service_1, router_1;
    var MoviesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MoviesListComponent = (function () {
                function MoviesListComponent(_moviesService) {
                    this._moviesService = _moviesService;
                    this.movies = this._moviesService.getMovies();
                    this.viewMovie = false;
                    this.movie = new movie_1.Movie(1, "https://i.ytimg.com/vi/wB5h7VwW8GU/maxresdefault.jpg", "TRANSFORMERS 4", "Michael Bay", 2014);
                }
                MoviesListComponent.prototype.onShowMovie = function (value) { this.viewMovie = value; };
                MoviesListComponent.prototype.onChangeMovie = function (movie) { this.movie = movie; };
                MoviesListComponent = __decorate([
                    core_1.Component({
                        //etiqueta
                        selector: "movies-list",
                        //url view
                        templateUrl: "app/view/movies-list.html",
                        //service
                        providers: [movies_service_1.MoviesService],
                        //directive
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [movies_service_1.MoviesService])
                ], MoviesListComponent);
                return MoviesListComponent;
            }());
            exports_1("MoviesListComponent", MoviesListComponent);
        }
    }
});
//# sourceMappingURL=movies-list.component.js.map