(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n\n<div class=\"wrapper\">\n    <nav class = \"d-none d-sm-block\" id=\"sidebar\" [ngClass] = \"{ 'active': navbarOpen }\">\n        <div id=\"dismiss\">\n            <i (click) = \"toggleNavbar()\" class=\"fa fa-arrow-left fa-align-justify\"></i>\n        </div>\n        <div ng class=\"sidebar-header\">\n            <h3>RC</h3>\n        </div>\n        <ul class=\"list-unstyled components\">\n\n        <!--\n        <div *ngIf = \"session\">\n            <p style = \"margin: 0px; padding-bottom: 0px;\">Welcome!</p>\n            <p>{{session.username}}</p>\n        </div>\n\n        -->\n\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['home']\">Home</a>\n        </li>\n\n        <li [routerLinkActive] = \"['active']\">\n            <a> Blog </a>\n        </li>\n\n        <li [routerLinkActive] = \"['active']\">\n            <a> About Us </a>\n        </li>\n        \n        <!--\n        \n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['admin']\">Admin</a>\n        </li>\n        \n        \n        <div>\n            <button style=\"position: absolute; left: 0; bottom: 0;\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n        </div>\n\n        -->\n\n        </ul>\n    </nav>\n    <div id = \"content\">\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n            <div class=\"container-fluid\">\n                <button (click) = \"toggleNavbar()\" type=\"button\" id=\"sidebarNotCollapse\" class=\"btn d-none d-sm-block\">\n                    <i class=\"fa fa-arrow-right fa-align-justify\"></i>\n                </button>\n                <button [attr.aria-expanded] = \"hamburgerOpen\" class=\"btn btn-dark d-inline-block d-sm-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <i (click) = \"toggleHamburger()\" class=\"fa fa-bars fa-align-justify\"></i>\n                </button>\n                <div [ngClass] = \"{ 'show': hamburgerOpen }\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n                    <!--\n                    <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                        <p>{{session.username}}</p>\n                    </div>\n                    -->\n\n                    <ul class=\"nav navbar-nav ml-auto\">\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['home']\">Home</a>\n                        </li>\n\n                        <li  class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\">Blog</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\">About Us</a>\n                        </li>\n\n                        <!--\n\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['videos']\">Videos</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['about']\">About</a>\n                        </li>\n\n                        \n                        \n                        <li class = nav-item>\n                            <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                                <button id = \"logout-button-block\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n                            </div>\n                        </li>\n\n                        -->\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <router-outlet></router-outlet>\n        <footer class = \"footer\">\n            <div class = \"row\">\n                <div class = \"text-center col-12\">\n                    <h3>Renaissance Consulting Group</h3>\n                </div>\n            </div>\n            <div class = \"row\">\n                <div class = \"text-center col-12\">\n                    <h5>info@renaissancecg.com</h5>\n                </div>\n            </div>\n            <div class = \"row\">\n                <div class = \"text-center col-12\">\n                    <h5>Santa Clara, CA</h5>\n                </div>\n            </div>\n            <div class = \"row\">\n                <div id = \"footer-text\" class = \"d-flex justify-content-center container col-6\">\n                    <span class = \"text-muted\">Copyright 2020</span>\n                </div>\n                <div class = \"d-flex justify-content-center container col-6\">\n                    <a class = \"icons\" href = \"https://twitter.com/themyraithon\" target = \"_blank\">\n                        <img src = \"assets/img/twitter_icon.png\">\n                    </a>\n                    <a class = \"icons\" href = \"https://www.twitch.tv/themyriathon\" target = \"_blank\">\n                        <img src = \"assets/img/twitch_icon.png\">\n                    </a>\n                    <a class = \"icons\" href = \"https://discord.gg/XRFranq\" target = \"_blank\">\n                        <img src = \"assets/img/discord_icon.png\">\n                    </a>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n<div class=\"overlay\"></div>\n\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>\n<script type=\"text/javascript\">\n    $(document).ready(function () {\n        $(\"#sidebar\").mCustomScrollbar({\n            theme: \"minimal\"\n        });\n\n        $('#dismiss, .overlay').on('click', function () {\n            $('#sidebar').removeClass('active');\n            $('.overlay').removeClass('active');\n        });\n\n        $('#sidebarCollapse').on('click', function () {\n            $('#sidebar').addClass('active');\n            $('.overlay').addClass('active');\n            $('.collapse.in').toggleClass('in');\n            $('a[aria-expanded=true]').attr('aria-expanded', 'false');\n        });\n    });\n</script>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"description\" content=\"Myriathon is a group of gamers who run bi-annual gaming marathons, raising money for a variety of charity organizations.\">\n    <meta name=\"keywords\" content=\"Charity, Gaming, Video Games, Games, Game Marathons, Myriathon, Marathon, Marathons, Raising Money, Fundraise, Fundraising\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"row\">\n        <div class=\"darken-pseudo d-none d-sm-block\" id = \"test-block-1-large\">\n            <div id = \"overlay-large\">\n                <p class = \"text-light\">\n                    At Renaissance Consulting Group, we understand that change is not always easy. \n                    Since 2000, we’ve been helping technology companies of all sizes respond to industry transitions \n                    in order to stay competitive.\n                </p>\n            </div>\n        </div>\n        <div class=\"darken-pseudo d-block d-sm-none\" id = \"test-block-1-small\">\n            <div id = \"overlay-small\">\n                <p class = \"text-light\">\n                    At Renaissance Consulting Group, we understand that change is not always easy. \n                    Since 2000, we’ve been helping technology companies of all sizes respond to industry transitions \n                    in order to stay competitive.\n                </p>\n            </div>\n        </div>\n    </div>\n    <div id = \"test-block-2\" class = \"row\">\n        <div class = \"col\">\n            <div class=\"card-deck\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Card title</h5>\n                        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Card title</h5>\n                        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Card title</h5>\n                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class = \"row\">\n        <div class = \"col\">\n            <div id = \"test-block-3\"></div>\n        </div>\n    </div>\n    <div class = \"row\">\n        <div class = \"col\">\n            <div id = \"test-block-4\"></div>\n        </div>\n    </div>\n    <div class = \"row\">\n        <div class = \"col\">\n            <div id = \"test-block-5\"></div>\n        </div>\n    </div>\n    <div class = \"row\">\n        <div class = \"col\">\n            <div id = \"test-block-6\"></div>\n        </div>\n    </div>\n</body>\n    "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: '**', redirectTo: 'home' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n/*\n    DEMO STYLE\n*/\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.navbar {\n    background: #fff;\n    border: none;\n    min-height: 57px;\n    border-radius: 0;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n    width: 250px;\n    position: fixed;\n    top: 0;\n    left: -250px;\n    height: 100vh;\n    z-index: 999;\n    background: #2e8bdb;\n    color: #fff;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n#sidebar.active {\n    left: 0;\n}\n#dismiss {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    background: #2E8BFE;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n#dismiss:hover {\n    background: #fff;\n    color: #2e8bdb;\n}\n.overlay {\n    display: none;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 998;\n    opacity: 0;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n}\n.overlay.active {\n    display: block;\n    opacity: 1;\n}\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #2e8bdb;\n}\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #2e8bdb;\n    background: #fff;\n}\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #2E8BFE;\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #2E8BFE;\n}\nul.CTAs {\n    padding: 20px;\n}\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\na.download {\n    background: #fff;\n    color: #2e8bdb;\n}\na.article,\na.article:hover {\n    background: #2E8BFE !important;\n    color: #fff !important;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    min-height: 100vh;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n#sidebarNotCollapse\n{\n    position: absolute;\n    left: 0;\n    height: 100%;\n    border-radius: 0px;\n    width: 50px;\n    background-color: #2E8BFE;\n    color: white;\n}\n#sidebarCollapse\n{\n    background-color: #2E8BFE;\n    color: white;\n}\n.footer\n{\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 50px;\n    line-height: 50px;\n    background: rgb(248, 249, 250)\n}\n.footer #footer-text\n    {\n        -webkit-box-align: center;\n                align-items: center;\n    }\n.footer img\n    {\n        width: 35px;\n        height: 35px;\n        margin: 1rem 0rem 1rem 1rem;\n    }\n#logout-button-block\n{\n    position: static;\n}\n.icons:hover\n{\n    filter: none;\n    -webkit-filter: grayscale(100%);\n}\n.row\n{\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw2RUFBNkU7QUFKN0U7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7QUFFQTs7dURBRXVEO0FBRXZEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLE9BQU87QUFDWDtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsNEJBQTRCO0lBRTVCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFVBQVU7SUFDVix3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjtBQUVBOzt1REFFdUQ7QUFFdkQ7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0FBQ1o7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSjtBQUVJOztRQUVJLHlCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0FBRUE7O1FBRUksV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7SUFDL0I7QUFFSjs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7O0lBRUksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERFTU8gU1RZTEVcbiovXG5cbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IDU3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXZiYXItYnRuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNzaWRlYmFyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYmFja2dyb3VuZDogIzJlOGJkYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xufVxuXG4jZGlzbWlzcyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMkU4QkZFO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNkaXNtaXNzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMmU4YmRiO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHotaW5kZXg6IDk5ODtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzJlOGJkYjtcbn1cblxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xufVxuXG4jc2lkZWJhciB1bCBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMmU4YmRiO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzJFOEJGRTtcbn1cblxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG51bCB1bCBhIHtcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzJFOEJGRTtcbn1cblxudWwuQ1RBcyB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxudWwuQ1RBcyBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmEuZG93bmxvYWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMyZThiZGI7XG59XG5cbmEuYXJ0aWNsZSxcbmEuYXJ0aWNsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzJFOEJGRSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENPTlRFTlQgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4jc2lkZWJhck5vdENvbGxhcHNlXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkU4QkZFO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3NpZGViYXJDb2xsYXBzZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRThCRkU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ5LCAyNTApXG59XG5cbiAgICAuZm9vdGVyICNmb290ZXItdGV4dFxuICAgIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZm9vdGVyIGltZ1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDByZW0gMXJlbSAxcmVtO1xuICAgIH1cblxuI2xvZ291dC1idXR0b24tYmxvY2tcbntcbiAgICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4uaWNvbnM6aG92ZXJcbntcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cblxuLnJvd1xue1xuICAgIG1hcmdpbjogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/*
  ||--------------------------------||
  ||   Main Component for Website   ||
  ||--------------------------------||
*/


Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();



let AppComponent = class AppComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.title = "RC";
        this.navbarOpen = false;
        this.hamburgerOpen = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    /*
      ||--------------------------------||
      ||       On Init Functions        ||
      ||--------------------------------||
    */
    ngOnInit() {
        this.setTitle("RC | Home");
        //this.receiveMessage(this.session);
    }
    /* Set Title for document header for browser */
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    /* This will toggle the side navbar for the browser */
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    /* This will toggle the hamburger menu on smaller screens */
    toggleHamburger() {
        this.hamburgerOpen = !this.hamburgerOpen;
    }
    /* This is for passing session data accross the angular components */
    receiveMessage(session) {
        this.session = session;
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col\n{\n    padding: 0px;\n}\n\n.row\n{\n    padding: 0px;\n    margin: 0px;\n}\n\n#test-block-1-large\n{\n    background-image: url(\"https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p\");\n    width: 100%;\n    min-height: 675px;\n    padding: 1rem;\n    position: relative;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n#test-block-1-small\n{\n    background-image: url(\"https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/grand-marais-honeymoon-bluff-woman-hiking_roy-son.jpg?h=0c047d17&itok=N8GTdR1p\");\n    width: 100%;\n    min-height: 700px;\n    padding: 1rem;\n    position: relative;\n    background-position-x: 15%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.darken-pseudo:after \n    {\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: block;\n        background-color: rgba(0, 0, 0, 0.25);\n    }\n\n#overlay-large\n{\n    z-index: 2;\n    padding: 15px;\n    border-radius: 8px;\n    opacity: 1;\n    position: absolute;\n    top: 55px;\n    left: 0px;\n    width: 500px;\n}\n\n#overlay-small\n{\n    z-index: 2;\n    padding: 15px;\n    border-radius: 8px;\n    opacity: 1;\n    position: absolute;\n    top: 35px;\n    left: 0px;\n}\n\n#overlay-large p\n{\n    font-size: 32px;\n}\n\n#overlay-small p\n{\n    font-size: 24px;\n}\n\n#test-block-2\n{\n    background-color: #cbe7eb;\n}\n\n.card-deck\n{\n\tmargin: auto;\n}\n\n.card-deck .card\n{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n#test-block-3\n{\n    background-color: green;\n    height: 450px;\n}\n\n#test-block-4\n{\n    background-color: blue;\n    height: 600px;\n}\n\n#test-block-5\n{\n    background-color: yellow;\n    height: 450px;\n}\n\n#test-block-6\n{\n    background-color: orange;\n    height: 450px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksOExBQThMO0lBQzlMLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksOExBQThMO0lBQzlMLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVJOztRQUVJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLGNBQWM7UUFDZCxxQ0FBcUM7SUFDekM7O0FBRUo7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0NBRUMsWUFBWTtBQUNiOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbFxue1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvd1xue1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuI3Rlc3QtYmxvY2stMS1sYXJnZVxue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmV4cGxvcmVtaW5uZXNvdGEuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvc3R5bGVzL3NoYXJlX2ltYWdlL3B1YmxpYy8yMDE5LTEwL2dyYW5kLW1hcmFpcy1ob25leW1vb24tYmx1ZmYtd29tYW4taGlraW5nX3JveS1zb24uanBnP2g9MGMwNDdkMTcmaXRvaz1OOEdUZFIxcFwiKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2NzVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0ZXN0LWJsb2NrLTEtc21hbGxcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5leHBsb3JlbWlubmVzb3RhLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3N0eWxlcy9zaGFyZV9pbWFnZS9wdWJsaWMvMjAxOS0xMC9ncmFuZC1tYXJhaXMtaG9uZXltb29uLWJsdWZmLXdvbWFuLWhpa2luZ19yb3ktc29uLmpwZz9oPTBjMDQ3ZDE3Jml0b2s9TjhHVGRSMXBcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNzAwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxNSU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4gICAgLmRhcmtlbi1wc2V1ZG86YWZ0ZXIgXG4gICAge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIH1cblxuI292ZXJsYXktbGFyZ2VcbntcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xufVxuXG4jb3ZlcmxheS1zbWFsbFxue1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNXB4O1xuICAgIGxlZnQ6IDBweDtcbn1cblxuI292ZXJsYXktbGFyZ2UgcFxue1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuI292ZXJsYXktc21hbGwgcFxue1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuI3Rlc3QtYmxvY2stMlxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmU3ZWI7XG59XG5cbi5jYXJkLWRlY2tcbntcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4uY2FyZC1kZWNrIC5jYXJkXG57XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jdGVzdC1ibG9jay0zXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgaGVpZ2h0OiA0NTBweDtcbn1cblxuI3Rlc3QtYmxvY2stNFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbn1cblxuI3Rlc3QtYmxvY2stNVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4jdGVzdC1ibG9jay02XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIGhlaWdodDogNDUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/*
  ||--------------------------------||
  || Homepage Component for Website ||
  ||--------------------------------||
*/





let HomepageComponent = class HomepageComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.admin = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    /*
      ||--------------------------------||
      ||       On Init Functions        ||
      ||--------------------------------||
    */
    ngOnInit() {
        this.setTitle("RC | Home");
        //this.checkSession();
        //this.checkAdmin();
        //this.receiveMessage(this.session);
    }
    /* Set Title for document header for browser */
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    /* This will check the user's session information.  If session is null from server, nothing will happen.  If session is available, then it'll store */
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            this.session = data['user'];
            this._httpService.send(this.session);
        });
    }
    /* This will check the session's data from the server, and if the data returned has the user admin equal to true, Angular will store admin as the user. */
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log(" ");
            }
            else {
                this.admin = data['user'];
            }
        });
    }
    /* This is for passing session data accross the angular components */
    receiveMessage(session) {
        this.session = session;
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);




let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
        this._stream$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
        this.stream$ = this._stream$.asObservable();
    }
    send(session) {
        this._stream$.next(session);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Automaton/Desktop/Coding Stuff/CodingDojo/MEAN/Other Angular Projects/RC/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map