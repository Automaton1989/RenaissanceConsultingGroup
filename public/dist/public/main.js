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

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n\n<div class=\"wrapper\">\n    <nav class = \"d-none d-sm-block\" id=\"sidebar\" [ngClass] = \"{ 'active': navbarOpen }\">\n        <div id=\"dismiss\">\n            <i (click) = \"toggleNavbar()\" class=\"fa fa-arrow-left fa-align-justify\"></i>\n        </div>\n        <div ng class=\"sidebar-header\">\n            <h3>RC</h3>\n        </div>\n        <ul class=\"list-unstyled components\">\n\n        <!--\n        <div *ngIf = \"session\">\n            <p style = \"margin: 0px; padding-bottom: 0px;\">Welcome!</p>\n            <p>{{session.username}}</p>\n        </div>\n\n        -->\n\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['home']\">Home</a>\n        </li>\n\n        <!--\n\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['marathons']\">Marathons</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['rmyriathon-home']\">Myriathon Home</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['videos']\">Videos</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['about']\">About</a>\n        </li>\n\n        \n\n        \n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['admin']\">Admin</a>\n        </li>\n        \n        \n        <div>\n            <button style=\"position: absolute; left: 0; bottom: 0;\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n        </div>\n\n        -->\n\n        </ul>\n    </nav>\n    <div id = \"content\">\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n            <div class=\"container-fluid\">\n                <button (click) = \"toggleNavbar()\" type=\"button\" id=\"sidebarNotCollapse\" class=\"btn d-none d-sm-block\">\n                    <i class=\"fa fa-arrow-right fa-align-justify\"></i>\n                </button>\n                <button [attr.aria-expanded] = \"hamburgerOpen\" class=\"btn btn-dark d-inline-block d-sm-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <i (click) = \"toggleHamburger()\" class=\"fa fa-bars fa-align-justify\"></i>\n                </button>\n                <div [ngClass] = \"{ 'show': hamburgerOpen }\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n                    <!--\n                    <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                        <p>{{session.username}}</p>\n                    </div>\n                    -->\n\n                    <ul class=\"nav navbar-nav ml-auto\">\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['home']\">Home</a>\n                        </li>\n\n                        <!--\n\n                        <li  class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['marathons']\">Marathons</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['myriathon-home']\">Myriathon Home</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['videos']\">Videos</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['about']\">About</a>\n                        </li>\n\n                        \n                        \n                        <li class = nav-item>\n                            <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                                <button id = \"logout-button-block\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n                            </div>\n                        </li>\n\n                        -->\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <router-outlet></router-outlet>\n        <footer class = \"d-flex justify-content-center footer\">\n            <div id = \"footer-text\" class = \"d-flex justify-content-center container\">\n                <span class = \"text-muted\">Copyright 2020</span>\n            </div>\n            <div class = \"d-flex justify-content-center container\">\n                <a class = \"icons\" href = \"https://twitter.com/themyraithon\" target = \"_blank\">\n                    <img src = \"assets/img/twitter_icon.png\">\n                </a>\n                <a class = \"icons\" href = \"https://www.twitch.tv/themyriathon\" target = \"_blank\">\n                    <img src = \"assets/img/twitch_icon.png\">\n                </a>\n                <a class = \"icons\" href = \"https://discord.gg/XRFranq\" target = \"_blank\">\n                    <img src = \"assets/img/discord_icon.png\">\n                </a>\n            </div>\n        </footer>\n    </div>\n</div>\n<div class=\"overlay\"></div>\n\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>\n<script type=\"text/javascript\">\n    $(document).ready(function () {\n        $(\"#sidebar\").mCustomScrollbar({\n            theme: \"minimal\"\n        });\n\n        $('#dismiss, .overlay').on('click', function () {\n            $('#sidebar').removeClass('active');\n            $('.overlay').removeClass('active');\n        });\n\n        $('#sidebarCollapse').on('click', function () {\n            $('#sidebar').addClass('active');\n            $('.overlay').addClass('active');\n            $('.collapse.in').toggleClass('in');\n            $('a[aria-expanded=true]').attr('aria-expanded', 'false');\n        });\n    });\n</script>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"description\" content=\"Myriathon is a group of gamers who run bi-annual gaming marathons, raising money for a variety of charity organizations.\">\n    <meta name=\"keywords\" content=\"Charity, Gaming, Video Games, Games, Game Marathons, Myriathon, Marathon, Marathons, Raising Money, Fundraise, Fundraising\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav id = \"admin-navbar\" class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"row\">\n            <div align=\"center\" class = \"d-none d-sm-block\" id = \"image-wrapper-large\">\n                <div class=\"d-none d-sm-block\" id=\"homeText\">\n                    <h3>Myriathon</h3>\n                    <p>View our most recent videos!</p>\n                    <a [routerLink] = \"['/', 'videos']\">\n                        <button class=\"btn\">All Videos</button>\n                    </a>\n                </div>\n            </div>\n            <div align=\"center\" class = \"d-block d-sm-none\" id = \"image-wrapper-small\">\n                <div class=\"d-block d-sm-none\" id=\"homeSmallText\">\n                    <h3>Myriathon</h3>\n                    <p>View our most recent videos!</p>\n                    <a [routerLink] = \"['/', 'videos']\">\n                        <button class=\"btn\">All Videos</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <hr my-4>\n        <div class = \"row\">\n            <div class=\"darken-pseudo\" id = \"values-wrapper\">\n                <div id = \"image-values-wrapper\">\n                    <div align = \"center\" id = \"values-header-block\">\n                        <h3>Values</h3>\n                    </div>\n                    <div align = \"center\" id = \"values-content-block-first\">\n                        <p>\n                            We’re the Myriathon Team! Since our foundation in 2013, we’ve raised over $25,000 for various causes around the world. \n                            We’re here to provide family-friendly fun and entertainment while playing some of our favorite games, old and new alike!\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr my-4>\n        <div class = \"row\">\n            <div id = \"impact-wrapper\">\n                <div align = \"center\" id = \"impact-header-block\">\n                    <h3>Impact</h3>\n                </div>\n                <div align = \"center\" id = \"impact-amount-block\">\n                    <h3>$25,321</h3>\n                    <h5>Raised for Charity</h5>\n                </div>\n                <div align = \"center\" id = \"impact-charities-block\">\n                    <h5>Charities we've supported: </h5>\n                    <div id = \"charity-logo-block\">\n                        <img src = \"assets/img/checkpoint.png\" alt = \"Checkpoint organization logo\">\n                        <img src = \"assets/img/The_Exodus_Road.png\" alt = \"Exodus Road organization logo\">\n                        <img src = \"assets/img/charity_water.png\" alt = \"Charity Water organization logo\">\n                        <img src = \"assets/img/extra_life.png\" alt = \"Extra Life organization logo\">\n                        <img src = \"assets/img/st_jude.png\" alt = \"St Jude organization logo\">\n                        <img src = \"assets/img/world_vision.png\" alt = \"World Vision organization logo\">\n                        <img style = \"width: 250px\" src = \"assets/img/direct_relief.png\" alt = \"Direct Relief organization logo\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n    "

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

module.exports = "\n\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n/*\n    DEMO STYLE\n*/\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 10px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n    width: 250px;\n    position: fixed;\n    top: 0;\n    left: -250px;\n    height: 100vh;\n    z-index: 999;\n    background: #2e8bdb;\n    color: #fff;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n#sidebar.active {\n    left: 0;\n}\n#dismiss {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    background: #2E8BFE;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n#dismiss:hover {\n    background: #fff;\n    color: #2e8bdb;\n}\n.overlay {\n    display: none;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 998;\n    opacity: 0;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n}\n.overlay.active {\n    display: block;\n    opacity: 1;\n}\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #2e8bdb;\n}\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #2e8bdb;\n    background: #fff;\n}\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #2E8BFE;\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #2E8BFE;\n}\nul.CTAs {\n    padding: 20px;\n}\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\na.download {\n    background: #fff;\n    color: #2e8bdb;\n}\na.article,\na.article:hover {\n    background: #2E8BFE !important;\n    color: #fff !important;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    padding: 20px;\n    min-height: 100vh;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n#sidebarNotCollapse\n{\n    background-color: #2E8BFE;\n    color: white;\n}\n#sidebarCollapse\n{\n    background-color: #2E8BFE;\n    color: white;\n}\n.footer\n{\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 50px;\n    line-height: 50px;\n    background: rgb(248, 249, 250)\n}\n.footer #footer-text\n    {\n        -webkit-box-align: center;\n                align-items: center;\n    }\n.footer img\n    {\n        width: 35px;\n        height: 35px;\n        margin: 1rem 0rem 1rem 1rem;\n    }\n#logout-button-block\n{\n    position: static;\n}\n.icons:hover\n{\n    filter: none;\n    -webkit-filter: grayscale(100%);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw2RUFBNkU7QUFKN0U7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O3VEQUV1RDtBQUV2RDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxPQUFPO0FBQ1g7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtJQUU1QixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0NBQWdDO0lBQWhDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7QUFFQTs7dURBRXVEO0FBRXZEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7QUFDWjtBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSjtBQUVJOztRQUVJLHlCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0FBRUE7O1FBRUksV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7SUFDL0I7QUFFSjs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERFTU8gU1RZTEVcbiovXG5cbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICAgIG1hcmdpbjogNDBweCAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jc2lkZWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTI1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJhY2tncm91bmQ6ICMyZThiZGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbn1cblxuI2Rpc21pc3Mge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzJFOEJGRTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jZGlzbWlzczpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzJlOGJkYjtcbn1cblxuLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5vdmVybGF5LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyZThiZGI7XG59XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4Yjtcbn1cblxuI3NpZGViYXIgdWwgcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzJlOGJkYjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMyRThCRkU7XG59XG5cbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxudWwgdWwgYSB7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMyRThCRkU7XG59XG5cbnVsLkNUQXMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsLkNUQXMgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5hLmRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjMmU4YmRiO1xufVxuXG5hLmFydGljbGUsXG5hLmFydGljbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyRThCRkUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4jc2lkZWJhck5vdENvbGxhcHNlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFOEJGRTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNzaWRlYmFyQ29sbGFwc2VcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkU4QkZFO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3Rlclxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OSwgMjUwKVxufVxuXG4gICAgLmZvb3RlciAjZm9vdGVyLXRleHRcbiAgICB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZvb3RlciBpbWdcbiAgICB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMXJlbTtcbiAgICB9XG5cbiNsb2dvdXQtYnV0dG9uLWJsb2NrXG57XG4gICAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmljb25zOmhvdmVyXG57XG4gICAgZmlsdGVyOiBub25lO1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbiJdfQ== */"

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
        this.receiveMessage(this.session);
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

module.exports = ".row\n{\n    margin-bottom: 1rem;\n}\n\n#image-wrapper-large\n{\n    width: 100%;\n    height: 620px;\n    /* background-position: center; */\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    background-image: url(\"/assets/img/Myriathon_Home_Blank.gif\");\n}\n\n#image-wrapper-small\n{\n    width: 100%;\n    height: 600px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    background-image: url(\"/assets/img/Myriathon_Home_tall.png\");\n}\n\n#homeText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 150px;\n    margin-bottom: 80px;\n    z-index: 2;\n    background: rgba(0,0,0, 1);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#homeText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeText button\n    {\n        background-color: #2e8bdb;\n        color: white;\n        opacity: 1;\n    }\n\n#homeText button:hover\n        {\n            color: #2e8bdb;\n            background-color: white;\n            border: 1px solid #2e8bdb;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#homeSmallText\n{\n    width: 95%;\n    position: absolute;\n    bottom: 0px;\n    margin-left: 7px;\n    margin-bottom: 10px;\n    z-index: 2;\n    background: rgba(0,0,0, 1);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 5px 5px 5px black;\n}\n\n#homeSmallText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeSmallText button\n    {\n        background-color: #2e8bdb;\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText button:hover\n        {\n            color: #2e8bdb;\n            background-color: white;\n            border: 1px solid #2e8bdb;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeSmallText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#values-wrapper\n{\n    width: 100%;\n    min-height: 700px;\n    padding: 1rem;\n    position: relative;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background-image: url('/assets/img/myriathon_background2.png');\n}\n\n.darken-pseudo:after \n    {\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: block;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n#image-values-wrapper\n    {\n        z-index: 2;\n        background: rgba(0,0,0, 1);\n        padding: 15px;\n        border-radius: 8px;\n        box-shadow: 10px 10px 5px black;\n        opacity: 1;\n    }\n\n#values-wrapper #values-header-block\n    {\n        margin: 0.5rem;\n        margin-top: 1rem;\n        color: white;\n    }\n\n#values-wrapper #values-content-block-first\n    {\n        margin: 1rem;\n\n    }\n\n#impact-wrapper\n{\n    width: 100%;\n    min-height: 500px;\n    background-color: white;\n    padding: 0rem 2rem 2rem 2rem;\n}\n\n#impact-wrapper #impact-header-block\n    {\n        margin: 1rem;\n    }\n\n#impact-wrapper #impact-amount-block\n    {\n        margin: 1rem;\n    }\n\n#impact-wrapper #impact-charities-block\n    {\n        margin: 1rem;\n    }\n\n#impact-charities-block #charity-logo-block img\n        {\n            width: 160px;\n            height: 90px;\n            margin: 1rem;\n        }\n\n#admin-navbar\n{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkRBQTZEO0FBQ2pFOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDREQUE0RDtBQUNoRTs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFSTs7UUFFSSxZQUFZO1FBQ1osVUFBVTtJQUNkOztBQUVBOztRQUVJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDOztBQUVBOztRQUVJLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osVUFBVTtJQUNkOztBQUVJOztZQUVJLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLG1DQUEyQjtvQkFBM0IsMkJBQTJCO1lBQzNCLDhCQUE4QjtRQUNsQzs7QUFFQTs7WUFFSSw4QkFBOEI7WUFDOUIsa0NBQTBCO29CQUExQiwwQkFBMEI7UUFDOUI7O0FBRVI7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVJOztRQUVJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUE7O1FBRUksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7O0FBRUE7O1FBRUkseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUk7O1lBRUksY0FBYztZQUNkLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsbUNBQTJCO29CQUEzQiwyQkFBMkI7WUFDM0IsOEJBQThCO1FBQ2xDOztBQUVBOztZQUVJLDhCQUE4QjtZQUM5QixrQ0FBMEI7b0JBQTFCLDBCQUEwQjtRQUM5Qjs7QUFFUjs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhEQUE4RDtBQUNsRTs7QUFFSTs7UUFFSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTO1FBQ1QsT0FBTztRQUNQLFFBQVE7UUFDUixjQUFjO1FBQ2Qsb0NBQW9DO0lBQ3hDOztBQUVBOztRQUVJLFVBQVU7UUFDViwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQiwrQkFBK0I7UUFDL0IsVUFBVTtJQUNkOztBQUVBOztRQUVJLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7QUFFQTs7UUFFSSxZQUFZOztJQUVoQjs7QUFFSjs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7O0FBRUk7O1FBRUksWUFBWTtJQUNoQjs7QUFFQTs7UUFFSSxZQUFZO0lBQ2hCOztBQUVBOztRQUVJLFlBQVk7SUFDaEI7O0FBRUk7O1lBRUksWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1FBQ2hCOztBQUVSOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93XG57XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2ltYWdlLXdyYXBwZXItbGFyZ2VcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL015cmlhdGhvbl9Ib21lX0JsYW5rLmdpZlwiKTtcbn1cblxuI2ltYWdlLXdyYXBwZXItc21hbGxcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL015cmlhdGhvbl9Ib21lX3RhbGwucG5nXCIpO1xufVxuXG4jaG9tZVRleHRcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAxKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGJsYWNrO1xufVxuXG4gICAgI2hvbWVUZXh0IGgzLCBwXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2hvbWVUZXh0IGFcbiAgICB7XG4gICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgI2hvbWVUZXh0IGJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlOGJkYjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICAgICAjaG9tZVRleHQgYnV0dG9uOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMmU4YmRiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmU4YmRiO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hvbWVUZXh0IGJ1dHRvbjphY3RpdmVcbiAgICAgICAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgICAgIH1cblxuI2hvbWVTbWFsbFRleHRcbntcbiAgICB3aWR0aDogOTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAxKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcbn1cblxuICAgICNob21lU21hbGxUZXh0IGgzLCBwXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2hvbWVTbWFsbFRleHQgYVxuICAgIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjaG9tZVNtYWxsVGV4dCBidXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZThiZGI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMmU4YmRiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmU4YmRiO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuXG4jdmFsdWVzLXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL215cmlhdGhvbl9iYWNrZ3JvdW5kMi5wbmcnKTtcbn0gICBcblxuICAgIC5kYXJrZW4tcHNldWRvOmFmdGVyIFxuICAgIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cblxuICAgICNpbWFnZS12YWx1ZXMtd3JhcHBlclxuICAgIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMSk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjdmFsdWVzLXdyYXBwZXIgI3ZhbHVlcy1oZWFkZXItYmxvY2tcbiAgICB7XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI3ZhbHVlcy13cmFwcGVyICN2YWx1ZXMtY29udGVudC1ibG9jay1maXJzdFxuICAgIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuXG4gICAgfVxuXG4jaW1wYWN0LXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xufVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtaGVhZGVyLWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtYW1vdW50LWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtY2hhcml0aWVzLWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgICAgICNpbXBhY3QtY2hhcml0aWVzLWJsb2NrICNjaGFyaXR5LWxvZ28tYmxvY2sgaW1nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgfVxuXG4jYWRtaW4tbmF2YmFyXG57XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
        this.setTitle("Myriathon | Home");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
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