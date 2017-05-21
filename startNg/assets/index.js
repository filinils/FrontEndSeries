"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var start_component_1 = require('./components/start/start.component');
var course_service_1 = require('./services/course.service');
var routes = [
    { path: 'start', component: start_component_1.default },
];
var AppComponent = (function () {
    function AppComponent(courseService) {
        this.courseService = courseService;
        this.menu = [{
                route: 'start',
                title: 'Start'
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ex',
            template: "<ul>\n            <li class=\"_module_menu_panel_li\" *ngFor=\"let menuItem of menu;\">\n                <a [routerLink]=\"[menuItem.route]\"> {{menuItem.title}}</a>\n            </li>\n      </ul>\n      <router-outlet></router-outlet>\n      ",
            directives: [start_component_1.default, router_1.ROUTER_DIRECTIVES],
            providers: [router_1.provideRouter(routes)],
            precompile: [
                start_component_1.default
            ]
        }), 
        __metadata('design:paramtypes', [course_service_1.default])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    course_service_1.default
]);
//# sourceMappingURL=index.js.map