/**
 * Created by JuanM on 28/12/2016.
 */
import {Component} from "angular2/core";
import {Movie} from "../model/movie";
import {MoviesService} from "../services/movies.service";
import {ROUTER_DIRECTIVES , RouteConfig , Router} from "angular2/router";

@Component({
    //etiqueta
    selector: "movies-list",
    //url view
    templateUrl: "app/view/movies-list.html",
    //service
    providers: [MoviesService],
    //directive
    directives:[ROUTER_DIRECTIVES]
})

export class MoviesListComponent {
    public movie:Movie;
    public viewMovie:boolean;
    public movies;

    constructor(private _moviesService: MoviesService){
        this.movies = this._moviesService.getMovies();
        this.viewMovie = false;
        this.movie = new Movie(1,"https://i.ytimg.com/vi/wB5h7VwW8GU/maxresdefault.jpg","TRANSFORMERS 4","Michael Bay",2014);
    }

    onShowMovie(value){this.viewMovie = value;}
    onChangeMovie(movie){this.movie = movie;}
}