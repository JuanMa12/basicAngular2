/**
 * Created by JuanM on 22/12/2016.
 */
import {Component} from "angular2/core";
import {MoviesListComponent} from "./components/movies-list.component";
import {MoviesFooterComponent} from "./components/movies-footer.component";
import {ContactComponent} from "./components/contact.component";
import {AddMovieComponent} from "./components/addmovie.component";
import {ROUTER_DIRECTIVES , RouteConfig , Router} from "angular2/router";

@Component({
    //etiqueta
    selector: "mi-app",
    //url view
    templateUrl: "app/view/movie.html",
    //directives
    directives: [
        MoviesListComponent,
        MoviesFooterComponent,
        ContactComponent,
        AddMovieComponent,
        ROUTER_DIRECTIVES]

})

@RouteConfig([
    {path: "/movies" , name: "Movies" , component: MoviesListComponent, useAsDefault: true},
    {path: "/add-movie" , name: "AddMovie" , component: AddMovieComponent},
    {path: "/add-movie/:title/:image/:made/:year" , name: "AddMovieOfMovie" , component: AddMovieComponent},
    {path: "/contact" , name: "Contact" , component: ContactComponent}
])

export class AppComponent {
    public title:string = "Movies";

}