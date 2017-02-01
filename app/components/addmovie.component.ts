import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Movie} from "../model/movie";
import {Router , RouteParams} from "angular2/router";
import {MoviesService} from "../services/movies.service";

@Component({
    templateUrl: "app/view/add_movie.html",
    providers: [MoviesService]
})

export class AddMovieComponent implements OnInit{

    public TitleMovie = "";
    public newMovie: Movie;

    constructor(private _moviesService: MoviesService,
                private _router: Router,
                private _routeParams: RouteParams){

    }
    onSubmit(){
        this._moviesService.insertMovie(this.newMovie);
        this._router.navigate(['Movies']);
    }

    ngOnInit():any{
        this.TitleMovie = this._routeParams.get("title");
        this.newMovie = new Movie(
            0,
            this._routeParams.get("image"),
            this._routeParams.get("title"),
            this._routeParams.get("made"),
            <number>this._routeParams.get("year")
            );
    }
}