import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Component, provide, Inject } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';
import { disableDeprecatedForms, provideForms } from '@angular/forms'

import StartPage from './components/start/start.component';
import CourseService from './services/course.service'



const routes: RouterConfig = [
    { path: 'start', component: StartPage },

];


@Component({
    selector: 'ex',
    template: `<ul>
            <li class="_module_menu_panel_li" *ngFor="let menuItem of menu;">
                <a [routerLink]="[menuItem.route]"> {{menuItem.title}}</a>
            </li>
      </ul>
      <router-outlet></router-outlet>
      `,
    directives: [StartPage, ROUTER_DIRECTIVES],

    providers: [provideRouter(routes)],
    precompile: [

        StartPage

    ]


})
export class AppComponent {

     menu = [{
         route:'start',
         title:'Start'

    }]

    constructor(
        private courseService: CourseService
    ) {


    }



}
bootstrap(AppComponent, [HTTP_PROVIDERS,

    disableDeprecatedForms(),
    provideForms(),
    CourseService

]);

