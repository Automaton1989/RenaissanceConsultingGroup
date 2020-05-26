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

/***/ "./node_modules/raw-loader/index.js!./src/app/about-page/about-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-page/about-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class = \"row\">\n            <div class=\"jumbotron jumbotron-fluid\">\n                <div class=\"text-center container\">\n                    <h1 class=\"display-4\">Gaming for Good</h1>\n                    <p class=\"lead\">We're a group of friends who play games and give to charity</p>\n                </div>\n            </div>\n        </div>\n        <div class = \"row\">\n            <div id = \"mission-text\">\n                <p>\n                    Myriathon was founded by Matt “abandon” Rossi in 2013 after being inspired by a number of online marathons \n                    and meeting with members of Team World Vision to support their efforts for clean water in third-world countries. \n                    Since then, the Myriathon team has expanded in both scope and size, continuing to work with new charities, \n                    welcoming new members to the community, and exploring new forms of media to foster an environment where everyone \n                    can share in fun activities during their big events and their off-season streams. \n                </p>\n            </div>\n        </div>\n        <div class = \"text-center justify-content-center row\">\n            <h3>Team</h3>\n        </div>\n        <section>\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!--Abandon-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"ABBackground\" src=\"assets/img/AB_background.gif\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/AB_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Abandon<small>Leader, Memer</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/SnarkyTrad\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/abandonthemyriad\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Erin-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"JPBackground\" src=\"assets/img/JP_background.jpg\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/JP_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>TheJediPikachu<small>Leader, Dreamer</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/TheJediPikachu\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/thejedipikachu\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Mason-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"MSBackground\" src=\"assets/img/MS_background.jpg\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/MS_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Epicshiku<small>Leader, Tech</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/EpicIshiku\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/epicishiku\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Russell-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"RSBackground\" src=\"assets/img/RS_background.png\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/RS_icon.png\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Russty1123<small>Scheduler</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/Russty1123\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Daj-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"DJBackground\" src=\"assets/img/DJ_background.png\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/DJ_icon.gif\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Dajman27<small>Graphics</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/JonVanRyckeghem\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/dajman27\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Spoon-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id=\"SPTBackground\" src=\"assets/img/SPT_background.png\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/SPT_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>SPTspoon<small>Doctor</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/sptspoon\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/sptspoon\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Whale-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"ATBackground\" src=\"assets/img/Auto_background.gif\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/logo_auto.jpeg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Automaton<small>Coder</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/Automaton89\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"https://www.twitch.tv/automaton1989\" target = \"_blank\"> <i class=\"fa fa-twitch\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Deviant-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"CDBackground\" src=\"assets/img/CD_background.jpg\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img id = \"CDIcon\" src=\"assets/img/CD_icon.gif\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Casual_Deviant<small>Member</small></h2>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Waldens-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"WDBackground\" src=\"assets/img/WD_background.jpg\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/WD_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Waldens<small>Member</small></h2>\n                            <div class=\"icon-block\">\n                                <a href=\"https://twitter.com/Waldens002\" target = \"_blank\"> <i class=\"fa fa-twitter\"></i></a>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Mikal-->\n                    <div class=\"card-wrapper col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n                        <div class=\"card profile-card-3\">\n                            <div class=\"background-block\">\n                                <img id = \"MKBackground\" src=\"assets/img/MK_background.jpeg\" alt=\"profile-sample1\" class=\"background\"/>\n                            </div>\n                            <div class=\"profile-thumb-block\">\n                                <img src=\"assets/img/MK_icon.jpg\" alt=\"profile-image\" class=\"profile\"/>\n                            </div>\n                            <div class=\"card-content\">\n                            <h2>Mikal<small>Member</small></h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</body>\n    \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-video-page/add-video-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-video-page/add-video-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link active\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div *ngIf=\"displayFalseMessage\" class = \"container\">\n            <div class = \"row d-flex justify-content-center invalid\">\n                <div class = \"text-center col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n                    <p>{{falseMessage}}</p>\n                </div>\n            </div>\n            <div class = \"row d-flex justify-content-center invalid\">\n                <div class = \"text-center col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n                    <p>{{serverError}}</p>\n                </div>\n            </div>\n        </div>\n        <div class = \"row d-flex justify-content-center\">\n            <h3>Add New Season</h3>\n        </div>\n        <div class = \"row d-flex justify-content-center\">\n            <form (submit) = \"createSeason()\">\n                <div class = \"form-group\">\n                    <label>Name: </label>\n                    <input \n                    type = \"text\"\n                    class = \"form-control\"\n                    placeholder=\"Enter Season Name\"\n                    name = \"newSeason.newSeasonName\"\n                    required \n                    minlength = \"3\"\n                    [(ngModel)] = \"newSeason.newSeasonName\"\n                    #newSeasonName = \"ngModel\"\n                    />\n                    <div class = \"invalid\" *ngIf=\"newSeasonName.errors && (newSeasonName.dirty || newSeasonName.touched)\">Season Name is Required!</div>\n                </div>\n                <div class = \"form-group\">\n                    <label>Season Number: </label>\n                    <input \n                    type = \"number\"\n                    class = \"form-control\"\n                    name = \"newSeason.newSeasonNumber\"\n                    required\n                    [(ngModel)] = \"newSeason.newSeasonNumber\"\n                    #newSeasonNumber = \"ngModel\"\n                    />\n                </div>\n                <button [disabled] = \"!newSeasonName.valid || !newSeasonNumber.valid\" type = \"submit\" class = \"btn btn-primary\">Submit</button>\n            </form>\n        </div>\n        <hr my-4>\n        <div class = \"row d-flex justify-content-center\">\n            <form (submit) = \"createVideo()\">\n                <div class = \"form-group\">\n                    <label>Title: </label>\n                    <input\n                    type = \"text\"\n                    class = \"form-control\"\n                    placeholder=\"Enter Video Title\"\n                    name = \"newVideo.newVideoTitle\"\n                    required\n                    minlength = \"3\"\n                    [(ngModel)] = \"newVideo.newVideoTitle\"\n                    #newVideoTitle = \"ngModel\"\n                    />\n                    <div class = \"invalid\" *ngIf=\"newVideoTitle.errors && (newVideoTitle.dirty || newVideoTitle.touched)\">Video Title is Required!</div>\n                </div>\n                <div class = \"form-group\">\n                    <label>Description: </label>\n                    <textarea\n                    class = \"form-control\"\n                    placeholder=\"Enter Video Description (Not Required!)\"\n                    rows = \"3\"\n                    name = \"newVideo.newVideoDescription\"\n                    [(ngModel)] = \"newVideo.newVideoDescription\"\n                    #newVideoDescription = \"ngModel\"\n                    ></textarea>\n                </div>\n                <div class = \"form-group\">\n                    <label>Img URL: </label>\n                    <input\n                    type = \"text\"\n                    class = \"form-control\"\n                    placeholder=\"Enter IMG URL\"\n                    name = \"newVideo.newVideoImg\"\n                    required\n                    minlength=\"3\"\n                    [(ngModel)] = \"newVideo.newVideoImg\"\n                    #newVideoImg = \"ngModel\"\n                    />\n                    <div class = \"invalid\" *ngIf=\"newVideoImg.errors && (newVideoImg.dirty || newVideoImg.touched)\">Video IMG URL is Required!</div>\n                </div>\n                <div class = \"form-group\">\n                    <label>URL: </label>\n                    <input\n                    type = \"text\"\n                    class = \"form-control\"\n                    placeholder=\"Enter a Video URL\"\n                    name = \"newVideo.newVideoURL\"\n                    required\n                    minlength=\"3\"\n                    [(ngModel)] = \"newVideo.newVideoURL\"\n                    #newVideoURL = \"ngModel\"\n                    />\n                    <div class = \"invalid\" *ngIf=\"newVideoURL.errors && (newVideoURL.dirty || newVideoURL.touched)\">Video URL is Required!</div>\n                </div>\n                <div class = \"form-group\">\n                    <label>Season: </label>\n                    <input \n                    type = \"number\"\n                    class = \"form-control\"\n                    name = \"newVideo.newVideoSeason\"\n                    required\n                    [(ngModel)] = \"newVideo.newVideoSeason\"\n                    #newVideoSeason = \"ngModel\"\n                    />\n                <div class = \"invalid\" *ngIf=\"newVideoSeason.errors && (newVideoSeason.dirty || newVideoSeason.touched)\">Video Season is Required!</div>\n                </div>\n                <button [disabled] = \"!newVideoTitle.valid || !newVideoURL.valid || !newVideoImg.valid\" type = \"submit\" class = \"btn btn-primary\">Submit</button>\n            </form>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-dashboard/admin-dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div class = \"row\">\n            <div class = \"col\">\n                <h3 class = \"text-center\">Users</h3>\n                <table class=\"table table-hover table-dark\">\n                    <thead>\n                        <tr>\n                        <th scope=\"col\">Username</th>\n                        <th scope=\"col\">Email</th>\n                        <th scope=\"col\">Status</th>\n                        <th scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor = \"let user of users\">\n                        <td>{{user.username}}</td>\n                        <td>{{user.email}}</td>\n                        <td>{{user.admin}}</td>\n                        <td>\n                            <a [routerLink] = \"['/', 'user', user.username]\">\n                                <button type = \"submit\" class = \"btn btn-primary\">User Page</button>\n                            </a>\n                        </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <hr my-4>\n        <div class = \"row\">\n            <div class = \"col\">\n                <h3 class = \"text-center\">Seasons</h3>\n                <table class=\"table table-hover table-dark\">\n                    <thead>\n                        <tr>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Number</th>\n                        <th scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor = \"let season of seasons\">\n                        <td>{{season.name}}</td>\n                        <td>{{season.number}}</td>\n                        <td>\n                            <a [routerLink] = \"['/', 'season', 'edit', season.name]\">\n                                <button type = \"submit\" class = \"btn btn-primary\">Edit Season</button>\n                            </a>\n                        </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-page/admin-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-page/admin-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf=\"displayFalseMessage\" class = \"container\">\n            <div class = \"row invalid d-flex justify-content-center text-center\">\n                <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                    <p>{{falseMessage}}</p>\n                </div>\n            </div>\n            <div class = \"row invalid d-flex justify-content-center text-center\">\n                <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                    <p>{{serverError}}</p>\n                </div>\n            </div>\n        </div>\n        <div class = \"row d-flex justify-content-center text-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                <h3>Admin Login: </h3>\n            </div>\n        </div>\n        <div class = \"row d-flex justify-content-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                <form (submit) = \"onLogin()\">\n                    <div class = \"form-group\">\n                        <label>Email</label>\n                        <input \n                        type = \"email\" \n                        class = \"form-control\" \n                        placeholder=\"Enter Email\"\n                        name = \"loginUser.email\"\n                        required\n                        minlength = \"7\"\n                        [(ngModel)] = \"loginUser.email\"\n                        #loginEmail = \"ngModel\"\n                        />\n                    <div class=\"invalid\" *ngIf=\"loginEmail.errors && (loginEmail.dirty || loginEmail.touched)\">email is required!</div>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Password</label>\n                        <input \n                        type = \"password\" \n                        class = \"form-control\" \n                        placeholder=\"Enter Password\"\n                        name = \"loginUser.password\"\n                        required\n                        minlength = \"7\"\n                        [(ngModel)] = \"loginUser.password\"\n                        #loginPassword = \"ngModel\"\n                        />\n                    <div class=\"invalid\" *ngIf=\"loginPassword.errors && (loginPassword.dirty || loginPassword.touched)\">password is required!</div>\n                    </div>\n                    <button [disabled] = \"!loginEmail.valid || !loginPassword.valid\" type = \"submit\" class = \"btn btn-block btn-primary\">Submit</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <hr my-4>\n    <div class = \"container-fluid\">\n        <div class = \"row d-flex justify-content-center text-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                <h3>Register: </h3>           \n            </div>\n        </div>\n        <div class = \"row d-flex justify-content-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-4 col-xl-4\">\n                <form (submit) = \"onRegister()\">\n                    <div class = \"form-group\">\n                        <label>Username</label>\n                        <input \n                        type = \"text\" \n                        class = \"form-control\" \n                        placeholder=\"Enter Username\"\n                        name = \"newUser.newUsername\"\n                        required\n                        minlength = \"5\"\n                        [(ngModel)] = \"newUser.newUsername\"\n                        #newUsername = \"ngModel\"\n                        />\n                        <div class=\"invalid\" *ngIf=\"newUsername.errors && (newUsername.dirty || newUsername.touched)\">Username must be at least 5 characters long!</div>\n                        <div class=\"valid\" *ngIf=\"newUsername.valid\">This is a valid Username</div>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Email</label>\n                        <input \n                        type = \"email\" \n                        class = \"form-control\" \n                        placeholder=\"Enter Email\"\n                        name = \"newUser.newEmail\"\n                        required\n                        minlength = \"7\"\n                        [(ngModel)] = \"newUser.newEmail\"\n                        #newEmail = \"ngModel\"\n                        />\n                        <div class=\"invalid\" *ngIf=\"newEmail.errors && (newEmail.dirty || newEmail.touched)\">email is required with length at least 7!</div>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Password</label>\n                        <input \n                        type = \"password\" \n                        class = \"form-control\" \n                        placeholder=\"Enter Password\"\n                        name = newUser.newPassword\n                        required\n                        minlength = \"7\"\n                        [(ngModel)] = 'newUser.newPassword'\n                        #newPassword = \"ngModel\"\n                        />\n                        <div class=\"invalid\" *ngIf=\"newPassword.errors && (newPassword.dirty || newPassword.touched)\">Password must be at least 7 characters long!</div>\n                        <div class=\"valid\" *ngIf=\"newPassword.valid\">This is a valid Password</div>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Confirm Password</label>\n                        <input \n                        type = \"password\" \n                        class = \"form-control\" \n                        placeholder=\"Confirm Password\"\n                        name = newUser.conPassword\n                        required\n                        pattern = \"{{newPassword.value}}\"\n                        [(ngModel)] = 'newUser.conPassword'\n                        #conPassword = \"ngModel\"\n                        />\n                        <div class=\"invalid\" *ngIf=\"conPassword.errors && (conPassword.dirty || conPassword.touched)\">Passwords do not match!!!</div>\n                        <div class=\"valid\" *ngIf=\"conPassword.valid\">This is a valid Confirm Password</div>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Secret Message</label>\n                        <input \n                        type = text \n                        class = \"form-control\" \n                        placeholder=\"Enter the Secret Message\"\n                        name = \"newUser.newSecretMessage\"\n                        required\n                        [(ngModel)] = \"newUser.newSecretMessage\"\n                        #newSecretMessage = \"ngModel\"\n                        />\n                    </div>\n                    <button [disabled] = \"!newEmail.valid || !newPassword.valid || !conPassword.valid || !newUsername.valid || !newSecretMessage.valid\"  type = \"submit\" class = \"btn btn-block btn-primary\">Submit</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <hr my-4 id = \"admin-bottom\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/all-videos/all-videos.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-videos/all-videos.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class = \"row\">\n            <div align = \"center\" id = \"image-wrapper\">\n                <div *ngIf = \"recentVideo\" class=\"d-none d-lg-block\" id=\"homeText\">\n                    \n                    <h3>{{recentVideo.title}}</h3>\n                    <p>{{recentVideo.description}}</p>\n                    <a [routerLink] = \"['/', 'video', recentVideo.title]\">\n                        <button class=\"btn\">Watch Video</button>\n                    </a>\n                    \n                </div>\n                <div *ngIf = \"recentVideo\" class=\"d-block d-sm-block d-md-block d-lg-none\" id=\"homeSmallText\">\n                    \n                    <h3>{{recentVideo.title}}</h3>\n                    <p>{{recentVideo.description}}</p>\n                    <a [routerLink] = \"['/', 'video', recentVideo.title]\">\n                        <button class=\"btn\">Watch Video</button>\n                    </a>\n                    \n                </div>\n            </div>\n        </div>\n        <div class = \"row\">\n            <div id = \"dropdownCol\" class = \"col\">\n                <div class=\"dropdown\">\n                    <button [attr.aria-expanded] = \"dropdownOpen\" (click) = \"toggleDropdown()\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Choose Season\n                    </button>\n                    <div [ngClass] = \"{'show': dropdownOpen }\" class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <a *ngFor = \"let season of seasons\" (click) = \"activeSeason(season.number)\" class=\"dropdown-item\" >{{season.name}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf = \"activeSeasonNumber\" id = \"seasonTitle\" class = \"text-center row\">\n            <div class = \"col\">\n                <h3>{{seasons[activeSeasonNumber-1].name}}</h3>\n            </div>\n        </div>\n        <div id = \"videoCardsRow\" class = \"row\">\n            <div id = \"activeSeasonBlock\" *ngIf = \"activeSeasonNumber\">\n                <div *ngFor = \"let video of seasons[activeSeasonNumber-1].videos\" class = \"col-sm-12 col-md-6 col-lg-4 col-xl-3 cardBlock\">\n                    <div class=\"card\" style=\"width: 100%;\">\n                        <img src=\"{{video.img}}\" class=\"card-img-top\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title text-center\">{{video.title}}</h5>\n                            <p class=\"card-text\">{{video.description}}</p>\n                        </div>\n                        <a [routerLink] = \"['/', 'video', video.title]\" class=\"btn btn-block btn-primary\">Watch Video</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n\n<div class=\"wrapper\">\n    <nav class = \"d-none d-sm-block\" id=\"sidebar\" [ngClass] = \"{ 'active': navbarOpen }\">\n        <div id=\"dismiss\">\n            <i (click) = \"toggleNavbar()\" class=\"fa fa-arrow-left fa-align-justify\"></i>\n        </div>\n        <div ng class=\"sidebar-header\">\n            <h3>Myriathon</h3>\n        </div>\n        <ul class=\"list-unstyled components\">\n        <div *ngIf = \"session\">\n            <p style = \"margin: 0px; padding-bottom: 0px;\">Welcome!</p>\n            <p>{{session.username}}</p>\n        </div>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['home']\">Home</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['marathons']\">Marathons</a>\n        </li>\n\n        <!--\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['rescue']\">Rescue</a>\n        </li>\n        -->\n        \n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['videos']\">Videos</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['about']\">About</a>\n        </li>\n        <li [routerLinkActive] = \"['active']\">\n            <a [routerLink] = \"['admin']\">Admin</a>\n        </li>\n        <div>\n            <button style=\"position: absolute; left: 0; bottom: 0;\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n        </div>\n        </ul>\n    </nav>\n    <div id = \"content\">\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n            <div class=\"container-fluid\">\n                <button (click) = \"toggleNavbar()\" type=\"button\" id=\"sidebarNotCollapse\" class=\"btn d-none d-sm-block\">\n                    <i class=\"fa fa-arrow-right fa-align-justify\"></i>\n                </button>\n                <button [attr.aria-expanded] = \"hamburgerOpen\" class=\"btn btn-dark d-inline-block d-sm-none ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <i (click) = \"toggleHamburger()\" class=\"fa fa-bars fa-align-justify\"></i>\n                </button>\n                <div [ngClass] = \"{ 'show': hamburgerOpen }\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                        <p>{{session.username}}</p>\n                    </div>\n                    <ul class=\"nav navbar-nav ml-auto\">\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['home']\">Home</a>\n                        </li>\n                        <li  class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['marathons']\">Marathons</a>\n                        </li>\n\n                        <!--\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['rescue']\">Rescue</a>\n                        </li>\n                        -->\n\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['videos']\">Videos</a>\n                        </li>\n                        <li class=\"nav-item\" [routerLinkActive] = \"['active']\">\n                            <a class=\"nav-link\" [routerLink] = \"['about']\">About</a>\n                        </li>\n                        <li class = nav-item>\n                            <div *ngIf = \"session\" class = \"d-block d-sm-block d-md-none\">\n                                <button id = \"logout-button-block\" class=\"btn btn-danger btn-block\" *ngIf=\"session\" (click) = \"logout()\">Logout</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <router-outlet></router-outlet>\n        <footer class = \"d-flex justify-content-center footer\">\n            <div id = \"footer-text\" class = \"d-flex justify-content-center container\">\n                <span class = \"text-muted\">Copyright 2020</span>\n            </div>\n            <div class = \"d-flex justify-content-center container\">\n                <a class = \"icons\" href = \"https://twitter.com/themyraithon\" target = \"_blank\">\n                    <img src = \"assets/img/twitter_icon.png\">\n                </a>\n                <a class = \"icons\" href = \"https://www.twitch.tv/themyriathon\" target = \"_blank\">\n                    <img src = \"assets/img/twitch_icon.png\">\n                </a>\n                <a class = \"icons\" href = \"https://discord.gg/XRFranq\" target = \"_blank\">\n                    <img src = \"assets/img/discord_icon.png\">\n                </a>\n            </div>\n        </footer>\n    </div>\n</div>\n<div class=\"overlay\"></div>\n\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>\n<script type=\"text/javascript\">\n    $(document).ready(function () {\n        $(\"#sidebar\").mCustomScrollbar({\n            theme: \"minimal\"\n        });\n\n        $('#dismiss, .overlay').on('click', function () {\n            $('#sidebar').removeClass('active');\n            $('.overlay').removeClass('active');\n        });\n\n        $('#sidebarCollapse').on('click', function () {\n            $('#sidebar').addClass('active');\n            $('.overlay').addClass('active');\n            $('.collapse.in').toggleClass('in');\n            $('a[aria-expanded=true]').attr('aria-expanded', 'false');\n        });\n    });\n</script>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<!-- carousel -->\n<div *ngFor = \"let slide of bigSlides; let i = index\" class = \"row justify-content-center\">\n    <h3 class = \"text-center\"\n    *ngIf = \"i === currentTitle\"\n    >\n    {{title[i]}}\n    </h3>\n</div>\n<div class= \"d-none d-sm-none d-md-block carousel\">\n    <ng-container *ngFor=\"let slide of bigSlides; let i = index\">\n        <img\n        *ngIf = \"i === currentSlide\"\n        [src]=\"slide.src\"\n        class=\"darken-psuedo slide\"\n        @carouselAnimation\n        />\n    </ng-container>\n    \n    <!-- controls -->\n    <button class=\"control prev\" (click) = \"onPreviousClick()\">\n        <span class=\"arrow left\"></span>\n    </button>\n    <button class=\"control next\" (click) = \"onNextClick()\">\n        <span class=\"arrow right\"></span>\n    </button>\n</div>\n\n<div class= \"d-block d-sm-block d-md-none carousel\">\n    <ng-container *ngFor=\"let slide of littleSlides; let i = index\">\n        <img\n        *ngIf = \"i === currentSlide\"\n        [src]=\"slide.src\"\n        class=\"darken-psuedo slide\"\n        @carouselAnimation\n        />\n    </ng-container>\n    \n    <!-- controls -->\n    <button class=\"control prev\" (click) = \"onPreviousClick()\">\n        <span class=\"arrow left\"></span>\n    </button>\n    <button class=\"control next\" (click) = \"onNextClick()\">\n        <span class=\"arrow right\"></span>\n    </button>\n</div>\n\n<hr my-4>\n<div id = \"carousel-text\" *ngFor = \"let slide of bigSlides; let i = index\" class = \"justify-content-center row\">\n    <p class = text-center\n    *ngIf = \"i === currentText\"\n    >{{txt[i]}}\n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-season/edit-season.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-season/edit-season.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div class = \"row d-flex justify-content-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n                <form *ngIf = \"singleSeason\" (submit) = \"updateSingleSeason()\">\n                    <h3 class = \"text-center\">Update {{singleSeason.name}}</h3>\n                    <div class = \"form-group\">\n                        <label>Name: </label>\n                        <input\n                        class = \"form-control\"\n                        type = \"text\"\n                        name = \"updateSeason.name\"\n                        required\n                        minlength = \"3\"\n                        [(ngModel)] = \"updateSeason.name\"\n                        #name = \"ngModel\"\n                        [value] = \"singleSeason.name\"\n                        />\n                    </div>\n                    <button type = \"submit\" class = \"btn btn-block btn-primary\">Update</button>\n                    <button [routerLink] = \"['home']\" class = \"btn btn-block btn-danger\">Cancel</button>\n                </form>\n            </div>\n        </div>\n        <hr my-4>\n        <div *ngIf = \"singleSeason\" class = \"row\">\n            <div class = \"col\">\n                <table class=\"table table-fit table-responsive-md table-hover table-dark\">\n                    <thead>\n                        <tr>\n                        <th scope=\"col\">Title</th>\n                        <th scope=\"col\">Img URL</th>\n                        <th scope=\"col\">Video URL</th>\n                        <th scope=\"col\">Options</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor = \"let video of singleSeason.videos\">\n                        <th>{{video.title}}</th>\n                        <td>{{video.img}}</td>\n                        <td>{{video.videoURL}}</td>\n                        <td><button [routerLink] = \"['/', 'video', 'edit', video.title]\" class = \"btn btn-primary\">Edit</button></td>\n                        </tr>\n                    </tbody>\n                    </table>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-video/edit-video.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-video/edit-video.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div class = \"row d-flex justify-content-center\">\n            <div class = \"col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n                <form *ngIf = \"singleVideo\" (submit) = \"updateSingleVideo()\">\n                    <h3 class = \"text-center\">Update {{singleVideo.title}}</h3>\n                    <div class = \"form-group\">\n                        <label>Title: </label>\n                        <input \n                        class = \"form-control\"\n                        type = \"text\"\n                        name = \"updateVideo.title\"\n                        required\n                        minlength = \"3\"\n                        [(ngModel)] = \"updateVideo.title\"\n                        #title = \"ngModel\"\n                        [value] = \"singleVideo.title\"\n                        />\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Description: </label>\n                        <textarea\n                        class = \"form-control\"\n                        rows = \"3\"\n                        name = \"updateVideo.description\"\n                        [(ngModel)] = \"updateVideo.description\"\n                        #description = \"ngModel\"\n                        >{{singleVideo.description}}</textarea>\n                    </div>\n                    <div class = \"form-group\">\n                        <label>Img URL: </label>\n                        <input\n                        type = \"text\"\n                        class = \"form-control\"\n                        placeholder=\"Enter IMG URL\"\n                        name = \"updateVideo.img\"\n                        required\n                        minlength=\"3\"\n                        [(ngModel)] = \"updateVideo.img\"\n                        #img = \"ngModel\"\n                        [value] = \"singleVideo.img\"\n                        />\n                    </div>\n                    <div class = \"form-group\">\n                        <label>URL: </label>\n                        <input\n                        type = \"text\"\n                        class = \"form-control\"\n                        placeholder=\"Enter a Video URL\"\n                        name = \"updateVideo.videoURL\"\n                        required\n                        minlength=\"3\"\n                        [(ngModel)] = \"updateVideo.videoURL\"\n                        #videoURL = \"ngModel\"\n                        [value] = \"singleVideo.videoURL\"\n                        />\n                    </div>\n                    <button type = \"submit\" class = \"btn btn-block btn-primary\">Update</button>\n                    <button [routerLink] = \"['home']\" class = \"btn btn-block btn-danger\">Cancel</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class=\"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"row\">\n            <div align=\"center\" id = \"image-wrapper\">\n                <div class=\"d-none d-md-block\" id=\"homeText\">\n                    <h3>Myriathon</h3>\n                    <p>Placeholder text goes here</p>\n                    <a herf=\"#\">\n                        <button class=\"btn\">Link Here</button>\n                    </a>\n                </div>\n                <div class=\"d-block d-md-none\" id=\"homeSmallText\">\n                    <h3>Myriathon</h3>\n                    <p>Placeholder text goes here</p>\n                    <a herf=\"#\">\n                        <button class=\"btn\">Link Here</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <hr my-4>\n        <div class = \"row\">\n            <div class=\"darken-pseudo\" id = \"values-wrapper\">\n                <div id = \"image-values-wrapper\">\n                    <div align = \"center\" id = \"values-header-block\">\n                        <h3>Values</h3>\n                    </div>\n                    <div align = \"center\" id = \"values-content-block-first\">\n                        <p>\n                            We’re the Myriathon Team! Since our foundation in 2013, we’ve raised over $25,000 for various causes around the world. \n                            We’re here to provide family-friendly fun and entertainment while playing some of our favorite games, old and new alike!\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr my-4>\n        <div class = \"row\">\n            <div id = \"impact-wrapper\">\n                <div align = \"center\" id = \"impact-header-block\">\n                    <h3>Impact</h3>\n                </div>\n                <div align = \"center\" id = \"impact-amount-block\">\n                    <h3>$25,321</h3>\n                    <h5>Raised for Charity</h5>\n                </div>\n                <div align = \"center\" id = \"impact-charities-block\">\n                    <h5>Charities we've supported: </h5>\n                    <div id = \"charity-logo-block\">\n                        <img src = \"assets/img/checkpoint.png\">\n                        <img src = \"assets/img/The_Exodus_Road.png\">\n                        <img src = \"assets/img/charity_water.png\">\n                        <img src = \"assets/img/extra_life.png\">\n                        <img src = \"assets/img/st_jude.png\">\n                        <img src = \"assets/img/world_vision.png\">\n                        <img style = \"width: 250px\" src = \"assets/img/direct_relief.png\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marathons-page/marathons-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marathons-page/marathons-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n    <div id = \"carousel-container-wrapper\">\n        <div class=\"row\" id = \"carousel-row\">\n            <div class = \"container-carousel\">\n                <app-carousel [littleSlides] = \"littleSlides\" [bigSlides] = \"bigSlides\"></app-carousel>\n            </div>\n        </div>\n    </div>\n</body>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myriathon-page/myriathon-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myriathon-page/myriathon-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n    </head>\n    <body>\n        <p>myriathon-page-module works!</p>\n    </body>\n    \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-video/single-video.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-video/single-video.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div class = \"row\">\n            <div class = \"col\">\n                <div id = \"jumboPackage\" >\n                    <div *ngIf = \"singleVideo\" class = \"text-center container\">\n                        <h3 id = \"leadText\">{{singleVideo.title}}</h3>\n                        <p>{{singleVideo.description}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class = \"row\">\n            <div  class = \"d-none d-sm-none d-md-none d-lg-block col-12 videoBackground\">\n                <iframe \n                id = \"iframeLarge\"\n                width=\"100%\" \n                height=\"100%\" \n                style = \"height: 500px;\"\n                [src]=\"url\"\n                frameborder=\"0\" \n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n                allowfullscreen>\n                </iframe>\n            </div>\n            <div class = \"d-block d-sm-block d-md-block d-lg-none d-xl-none col-12 videoBackground\">\n                <iframe \n                id = \"iframeSmall\"\n                width=\"100%\" \n                height=\"100%\" \n                style = \"height: 350px;\"\n                [src]=\"url\"\n                frameborder=\"0\" \n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n                allowfullscreen>\n                </iframe>\n            </div>\n        </div>\n        <div id = \"buttonRow\" class = \"row\">\n            <div *ngIf = \"previousVideo\" class = \"d-flex justify-content-start col\">\n                <a [routerLink] = \"['/', 'video', previousVideo.title]\" ><button class = \"btn btn-primary\"> << Previous Video</button></a>\n            </div>\n            <div *ngIf = \"nextVideo\" class = \"d-flex justify-content-end col\">\n                    <a [routerLink] = \"['/', 'video', nextVideo.title]\" ><button class = \"btn btn-primary\">Next Video >> </button></a>\n            </div>\n        </div>\n    </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-info/user-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-info/user-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class = \"container-fluid\">\n        <div *ngIf = \"admin\" class = \"row\">\n            <nav class=\"navbar navbar-light bg-light\">\n                <span class=\"navbar-brand mb-0 h1\">Admin</span>\n                <ul class = \"nav\">\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'admin', 'dashboard']\">Admin Dash</a>\n                    </li>\n                    <li class = \"nav-item\">\n                        <a class = \"nav-link\" [routerLink] = \"['/', 'addvideo']\">Add Video/Season</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n        <div *ngIf = \"admin\" class = \"row\">\n            <div class = \"col\">\n                <h3>{{user.username}}</h3>\n                <p>{{user.email}}</p>\n                <form *ngIf = \"user.admin\" (click) = \"removeAdmin()\">\n                    <input type = \"hidden\" value = \"false\" name = \"updateFalseUser.admin\" [(ngModel)] = \"updateUser.admin\" #updateUser = \"ngModel\"> \n                    <button type = \"submit\" class = \"btn btn-danger\">Remove Admin</button>\n                </form>\n                <form *ngIf = \"!user.admin\" (click) = \"addAdmin()\">\n                    <input type = \"hidden\" value = \"true\" name = updateTrueUser.admin [(ngModel)] = \"updateUser.admin\" #updateUser = \"ngModel\">\n                    <button type = \"submit\" class = \"btn btn-success\">Add Admin</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\n{\n    padding: 0px;\n}\n\n.row\n{\n    margin: 0px;\n}\n\n.jumbotron\n{\n    width: 100%;\n}\n\n#mission-text\n{\n    padding: 1rem;\n}\n\nsection{\n    float:left;\n    width:100%;\n    background: #fff;  /* fallback for old browsers */\n    padding:30px 0;\n    min-height: 550px;\n}\n\n#ABBackground\n{\n    top: 5px;\n    height: 50%;\n}\n\n#JPBackground\n{\n    top: 50px;\n    height: 38%;\n}\n\n#MSBackground\n{\n    top: 50px;\n    height: 37%;\n}\n\n#RSBackground\n{\n    top: 61px;\n    height: 45%;\n}\n\n#DJBackground\n{\n    top: 50px;\n    height: 36%;\n}\n\n#SPTBackground\n{\n    top: 75px;\n    height: 50%;\n}\n\n#ATBackground\n{\n    top: 50px;\n    height: 37%\n}\n\n#CDBackground\n{\n    top: 55px;\n    height: 37%;\n}\n\n#CDIcon\n{\n    height: 100px;\n    width: 100px;\n}\n\n#WDBackground\n{\n    top: 37%;\n    height: 43%;\n}\n\n#MKBackground\n{\n    top: 55px;\n    height: 37%;\n}\n\n/*Profile Card 3*/\n\n.profile-card-3 {\n    font-family: 'Open Sans', Arial, sans-serif;\n    position: relative;\n    float: left;\n    overflow: hidden;\n    width: 100%;\n    text-align: center;\n    height:368px;\n    border:none;\n}\n\n.profile-card-3 .background-block {\n        float: left;\n        width: 100%;\n        height: 200px;\n        overflow: hidden;\n    }\n\n.profile-card-3 .background-block .background {\n        position: relative;\n        top: 130px;\n        height: 100%;\n        width: 37%;\n        opacity: 0.9;\n            -webkit-transform: scale(1.8);\n        transform: scale(2.8);\n    }\n\n.profile-card-3 .card-content {\n    width: 100%;\n    padding: 15px 25px;\n    color:#232323;\n    float:left;\n    background:#efefef;\n    height:50%;\n    border-radius:0 0 5px 5px;\n    position: relative;\n    z-index: 1;\n    }\n\n.profile-card-3 .card-content::before {\n        content: '';\n        background: #efefef;\n        width: 120%;\n        height: 100%;\n        left: 11px;\n        bottom: 51px;\n        position: absolute;\n        z-index: -1;\n        -webkit-transform: rotate(-13deg);\n                transform: rotate(-13deg);\n    }\n\n.profile-card-3 .profile {\n    border-radius: 50%;\n    position: absolute;\n    bottom: 50%;\n    left: 50%;\n    min-height: 100px;\n    max-width: 100px;\n    opacity: 1;\n    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);\n    border: 2px solid rgba(255, 255, 255, 1);\n    -webkit-transform: translate(-50%, 0%);\n    transform: translate(-50%, 0%);\n    z-index:2;\n    }\n\n.profile-card-3 h2 {\n    margin: 0 0 5px;\n    font-weight: 600;\n    font-size:25px;\n    }\n\n.profile-card-3 h2 small {\n    display: block;\n    font-size: 15px;\n    margin-top:10px;\n    }\n\n.profile-card-3 i {\n    display: inline-block;\n        font-size: 16px;\n        color: #232323;\n        text-align: center;\n        border: 1px solid #232323;\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        border-radius: 50%;\n        margin:0 5px;\n    }\n\n.profile-card-3 .icon-block{\n        float:left;\n        width:100%;\n        margin-top:15px;\n    }\n\n.profile-card-3 .icon-block a{\n        text-decoration:none;\n    }\n\n.profile-card-3 i:hover {\n    background-color:#232323;\n    color:#fff;\n    text-decoration:none;\n    }\n\n.card-wrapper\n{\n    margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQixHQUFHLDhCQUE4QjtJQUNqRCxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBOztJQUVJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBOztJQUVJLFNBQVM7SUFDVDtBQUNKOztBQUVBOztJQUVJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztBQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7WUFDUiw2QkFBNkI7UUFDakMscUJBQXFCO0lBQ3pCOztBQUVBO0lBQ0EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7O0FBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGlDQUF5QjtnQkFBekIseUJBQXlCO0lBQzdCOztBQUNBO0lBQ0Esa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Q7O0FBQ0E7SUFDQSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZDs7QUFDQTtJQUNBLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmOztBQUNBO0lBQ0EscUJBQXFCO1FBQ2pCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjs7QUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7QUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7QUFDQTtJQUNBLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCOztBQUVKOztJQUVJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZFxue1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvd1xue1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uanVtYm90cm9uXG57XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNtaXNzaW9uLXRleHRcbntcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5zZWN0aW9ue1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIHBhZGRpbmc6MzBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xufVxuXG4jQUJCYWNrZ3JvdW5kXG57XG4gICAgdG9wOiA1cHg7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbiNKUEJhY2tncm91bmRcbntcbiAgICB0b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiAzOCU7XG59XG5cbiNNU0JhY2tncm91bmRcbntcbiAgICB0b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiAzNyU7XG59XG5cbiNSU0JhY2tncm91bmRcbntcbiAgICB0b3A6IDYxcHg7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG5cbiNESkJhY2tncm91bmRcbntcbiAgICB0b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiAzNiU7XG59XG5cbiNTUFRCYWNrZ3JvdW5kXG57XG4gICAgdG9wOiA3NXB4O1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4jQVRCYWNrZ3JvdW5kXG57XG4gICAgdG9wOiA1MHB4O1xuICAgIGhlaWdodDogMzclXG59XG5cbiNDREJhY2tncm91bmRcbntcbiAgICB0b3A6IDU1cHg7XG4gICAgaGVpZ2h0OiAzNyU7XG59XG5cbiNDREljb25cbntcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuI1dEQmFja2dyb3VuZFxue1xuICAgIHRvcDogMzclO1xuICAgIGhlaWdodDogNDMlO1xufVxuXG4jTUtCYWNrZ3JvdW5kXG57XG4gICAgdG9wOiA1NXB4O1xuICAgIGhlaWdodDogMzclO1xufVxuXG4vKlByb2ZpbGUgQ2FyZCAzKi9cbi5wcm9maWxlLWNhcmQtMyB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OjM2OHB4O1xuICAgIGJvcmRlcjpub25lO1xufVxuICAgIC5wcm9maWxlLWNhcmQtMyAuYmFja2dyb3VuZC1ibG9jayB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucHJvZmlsZS1jYXJkLTMgLmJhY2tncm91bmQtYmxvY2sgLmJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDM3JTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuOCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi44KTtcbiAgICB9XG5cbiAgICAucHJvZmlsZS1jYXJkLTMgLmNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGNvbG9yOiMyMzIzMjM7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBiYWNrZ3JvdW5kOiNlZmVmZWY7XG4gICAgaGVpZ2h0OjUwJTtcbiAgICBib3JkZXItcmFkaXVzOjAgMCA1cHggNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAucHJvZmlsZS1jYXJkLTMgLmNhcmQtY29udGVudDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDExcHg7XG4gICAgICAgIGJvdHRvbTogNTFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzZGVnKTtcbiAgICB9XG4gICAgLnByb2ZpbGUtY2FyZC0zIC5wcm9maWxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB6LWluZGV4OjI7XG4gICAgfVxuICAgIC5wcm9maWxlLWNhcmQtMyBoMiB7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOjI1cHg7XG4gICAgfVxuICAgIC5wcm9maWxlLWNhcmQtMyBoMiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG4gICAgLnByb2ZpbGUtY2FyZC0zIGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjMyMzIzO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46MCA1cHg7XG4gICAgfVxuICAgIC5wcm9maWxlLWNhcmQtMyAuaWNvbi1ibG9ja3tcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1jYXJkLTMgLmljb24tYmxvY2sgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgfVxuICAgIC5wcm9maWxlLWNhcmQtMyBpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMzIzMjM7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB9XG5cbi5jYXJkLXdyYXBwZXJcbntcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AboutPageComponent = class AboutPageComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.setTitle("Myriathon | About Us");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
AboutPageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        template: __webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-page/about-page.component.html"),
        styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
    })
], AboutPageComponent);



/***/ }),

/***/ "./src/app/add-video-page/add-video-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/add-video-page/add-video-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".valid \n{\n    color: green;\n}\n\n.invalid\n{\n    color: red;\n}\n\n.container\n{\n    padding: 0px;\n    margin: 0px;\n}\n\n.container-fluid\n{\n    margin-bottom: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXZpZGVvLXBhZ2UvYWRkLXZpZGVvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkZC12aWRlby1wYWdlL2FkZC12aWRlby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWQgXG57XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW52YWxpZFxue1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jb250YWluZXJcbntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWRcbntcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-video-page/add-video-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-video-page/add-video-page.component.ts ***!
  \************************************************************/
/*! exports provided: AddVideoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPageComponent", function() { return AddVideoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddVideoPageComponent = class AddVideoPageComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.falseMessage = "-- ERROR: You've encountered an issue --";
        this.serverError = "";
        this.displayFalseMessage = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.newSeason = { newSeasonName: "", newSeasonNumber: null };
        this.newVideo = { newVideoTitle: "", newVideoDescription: "", newVideoImg: "", newVideoURL: "", newVideoSeason: null };
        this.displayFalseMessage = false;
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
    }
    createSeason() {
        let observable = this._httpService.addSeason(this.newSeason);
        observable.subscribe(data => {
            if (data['success'] == false) {
                this.displayFalseMessage = true;
                this.serverError = data['msg'];
                this.newSeason = { newSeasonName: "", newSeasonNumber: null };
            }
            else {
                this.newSeason = { newSeasonName: "", newSeasonNumber: null };
                this.router.navigateByUrl('home');
            }
        });
    }
    createVideo() {
        let observable = this._httpService.addVideo(this.newVideo);
        observable.subscribe(data => {
            if (data['success'] == false) {
                this.displayFalseMessage = true;
                this.serverError = data['msg'];
                this.newVideo = { newVideoTitle: "", newVideoDescription: "", newVideoImg: "", newVideoURL: "", newVideoSeason: null };
            }
            else {
                this.newVideo = { newVideoTitle: "", newVideoDescription: "", newVideoImg: "", newVideoURL: "", newVideoSeason: null };
                this.router.navigateByUrl('home');
            }
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == true) {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                this.router.navigateByUrl("home");
            }
            else {
                this.admin = data['user'];
            }
        });
    }
};
AddVideoPageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddVideoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-video-page',
        template: __webpack_require__(/*! raw-loader!./add-video-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-video-page/add-video-page.component.html"),
        styles: [__webpack_require__(/*! ./add-video-page.component.css */ "./src/app/add-video-page/add-video-page.component.css")]
    })
], AddVideoPageComponent);



/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, .table th\n{\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCwgLnRhYmxlIHRoXG57XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.checkAdmin();
        this.setTitle("Myriathon | Admin Dashboard");
        this.getAllUsers();
        this.getAllSeasons();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    getAllSeasons() {
        let observable = this._httpService.getSeasons();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("We didn't get the data we wanted!");
            }
            else {
                this.seasons = data['seasons'];
            }
        });
    }
    getAllUsers() {
        let observable = this._httpService.getUsersData();
        observable.subscribe(data => {
            console.log("Got the user data!", data);
            this.users = data['users'];
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            this.session = data['user'];
            this._httpService.send(this.session);
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
                this.router.navigateByUrl("home");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
AdminDashboardComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".valid \n{\n    color: green;\n}\n\n.invalid\n{\n    color: red;\n}\n\n.container\n{\n    padding: 0px;\n    margin: 0px;\n}\n\n#admin-bottom\n{\n    margin-bottom: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZCBcbntcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbnZhbGlkXG57XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmNvbnRhaW5lclxue1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuI2FkbWluLWJvdHRvbVxue1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AdminPageComponent = class AdminPageComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.falseMessage = "-- ERROR: You've encountered an issue --";
        this.serverError = "";
        this.displayFalseMessage = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.newUser = { newUsername: "", newEmail: "", newPassword: "", conPassword: "", newSecretMessage: "" };
        this.loginUser = { email: "", password: "" };
        this.displayFalseMessage = false;
        this.setTitle("Myriathon | Admin");
        this.checkSession();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    onLogin() {
        console.log("We are in the login function!");
        console.log(this.loginUser);
        let observable = this._httpService.loginUser(this.loginUser);
        observable.subscribe(data => {
            console.log("We are returning with login data!", data);
            if (data["success"] == false) {
                this.displayFalseMessage = true;
                this.serverError = data['msg'];
                this.loginUser = { email: "", password: "" };
            }
            else {
                this.session = data['user'];
                this.loginUser = { email: "", password: "" };
                this.router.navigateByUrl("home");
            }
        });
    }
    onRegister() {
        console.log("We are in the register function!");
        let observable = this._httpService.addUser(this.newUser);
        observable.subscribe(data => {
            console.log("We are returning with register data", data);
            if (data['success'] == false) {
                this.displayFalseMessage = true;
                this.serverError = data['msg'];
                this.newUser = { newUsername: "", newEmail: "", newPassword: "", conPassword: "", newSecretMessage: "" };
            }
            else {
                console.log("Success!", data);
                this.session = data['user'];
                this.newUser = { newUsername: "", newEmail: "", newPassword: "", conPassword: "", newSecretMessage: "" };
                this.router.navigateByUrl('home');
            }
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
};
AdminPageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: __webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-page/admin-page.component.html"),
        styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/all-videos/all-videos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-videos/all-videos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\n{\n    margin-bottom: 10rem;\n}\n\n.row\n{\n    margin-bottom: 1rem;\n}\n\n#image-wrapper\n{\n    width: 100%;\n    min-height: 600px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    background-image: url(\"https://wallpapercave.com/wp/wp1980778.jpg\");\n}\n\n#homeText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 300px;\n    margin-bottom: 100px;\n    z-index: 2;\n    background: rgba(128,128,128, 0.7);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#homeText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeText button\n    {\n        background-color: #6d7fcc;\n        color: white;\n        opacity: 1;\n    }\n\n#homeText button:hover\n        {\n            color: #6d7fcc;\n            background-color: white;\n            border: 1px solid #6d7fcc;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#homeSmallText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 50px;\n    margin-bottom: 100px;\n    z-index: 2;\n    background: rgba(128,128,128, 0.7);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#homeSmallText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeSmallText button\n    {\n        background-color: #6d7fcc;\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText button:hover\n        {\n            color: #6d7fcc;\n            background-color: white;\n            border: 1px solid #6d7fcc;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeSmallText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#dropdownCol\n{\n    padding: 0rem;\n}\n\n#videoCardsRow\n{\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    margin-left: 0rem;\n    margin-right: 0rem;\n    width: 100%;\n}\n\n#activeSeasonBlock\n{\n    width: 100%;\n}\n\n.card\n{\n    margin-bottom: 1rem;\n    min-height: 400px;\n}\n\n.card img\n    {\n        height: 200px;\n    }\n\n.card-body p\n{\n    color: black;\n}\n\n.cardBlock\n{\n    display: inline-block;\n    vertical-align: top;\n}\n\n#seasonTitle\n{\n    margin-top: 5rem;\n}\n\n#dropdownMenuButton\n{\n    width: 335px;\n    border-radius: 0px;\n}\n\n#dropdownMenuButton:hover\n    {\n        cursor: pointer;\n    }\n\n.dropdown-menu\n{\n    width: 335px;\n    top: 96%;\n    border-radius: 0px;\n}\n\n.dropdown-menu a:hover\n    {\n        cursor: pointer;\n    }\n\n.btn-block\n{\n    border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXZpZGVvcy9hbGwtdmlkZW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtRUFBbUU7QUFDdkU7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUk7O1FBRUksWUFBWTtRQUNaLFVBQVU7SUFDZDs7QUFFQTs7UUFFSSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQzs7QUFFQTs7UUFFSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFVBQVU7SUFDZDs7QUFFSTs7WUFFSSxjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QixtQ0FBMkI7b0JBQTNCLDJCQUEyQjtZQUMzQiw4QkFBOEI7UUFDbEM7O0FBRUE7O1lBRUksOEJBQThCO1lBQzlCLGtDQUEwQjtvQkFBMUIsMEJBQTBCO1FBQzlCOztBQUVSOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVJOztRQUVJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUE7O1FBRUksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7O0FBRUE7O1FBRUkseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUk7O1lBRUksY0FBYztZQUNkLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsbUNBQTJCO29CQUEzQiwyQkFBMkI7WUFDM0IsOEJBQThCO1FBQ2xDOztBQUVBOztZQUVJLDhCQUE4QjtZQUM5QixrQ0FBMEI7b0JBQTFCLDBCQUEwQjtRQUM5Qjs7QUFFUjs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUk7O1FBRUksYUFBYTtJQUNqQjs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUk7O1FBRUksZUFBZTtJQUNuQjs7QUFFSjs7SUFFSSxZQUFZO0lBQ1osUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFSTs7UUFFSSxlQUFlO0lBQ25COztBQUVKOztJQUVJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FsbC12aWRlb3MvYWxsLXZpZGVvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keVxue1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufVxuXG4ucm93XG57XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2ltYWdlLXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMTk4MDc3OC5qcGdcIik7XG59XG5cbiNob21lVGV4dFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LCAwLjcpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggYmxhY2s7XG59XG5cbiAgICAjaG9tZVRleHQgaDMsIHBcbiAgICB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjaG9tZVRleHQgYVxuICAgIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjaG9tZVRleHQgYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ3ZmNjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgICAgICNob21lVGV4dCBidXR0b246aG92ZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDdmY2M7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAjaG9tZVRleHQgYnV0dG9uOmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuXG4jaG9tZVNtYWxsVGV4dFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNyk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbn1cblxuICAgICNob21lU21hbGxUZXh0IGgzLCBwXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2hvbWVTbWFsbFRleHQgYVxuICAgIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjaG9tZVNtYWxsVGV4dCBidXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ3ZmNjO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmQ3ZmNjO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuXG4jZHJvcGRvd25Db2xcbntcbiAgICBwYWRkaW5nOiAwcmVtO1xufVxuXG4jdmlkZW9DYXJkc1Jvd1xue1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNhY3RpdmVTZWFzb25CbG9ja1xue1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZFxue1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbiAgICAuY2FyZCBpbWdcbiAgICB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4uY2FyZC1ib2R5IHBcbntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkQmxvY2tcbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI3NlYXNvblRpdGxlXG57XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuI2Ryb3Bkb3duTWVudUJ1dHRvblxue1xuICAgIHdpZHRoOiAzMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbiAgICAjZHJvcGRvd25NZW51QnV0dG9uOmhvdmVyXG4gICAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4uZHJvcGRvd24tbWVudVxue1xuICAgIHdpZHRoOiAzMzVweDtcbiAgICB0b3A6IDk2JTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbiAgICAuZHJvcGRvd24tbWVudSBhOmhvdmVyXG4gICAge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4uYnRuLWJsb2NrXG57XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/all-videos/all-videos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-videos/all-videos.component.ts ***!
  \****************************************************/
/*! exports provided: AllVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllVideosComponent", function() { return AllVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AllVideosComponent = class AllVideosComponent {
    constructor(_httpService, router, sanitizer, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.seasons = [];
        this.dropdownOpen = false;
        this.clearSeason = {
            _id: null,
            name: "Clear season",
            number: 0,
            videos: [],
        };
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.setTitle("Myriathon | All Videos");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
        this.getRecentVideo();
        this.getAllSeasons();
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        console.log(this.dropdownOpen);
    }
    getAllSeasons() {
        console.log("We are getting all the season's data!");
        let observable = this._httpService.getSeasons();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("We didn't get the data we wanted!");
            }
            else {
                this.seasons = data['seasons'];
                this.seasons.push(this.clearSeason);
                console.log(this.seasons);
            }
        });
    }
    getRecentVideo() {
        console.log("We are getting the most recent video's data!");
        let observable = this._httpService.getLastVideo();
        observable.subscribe(data => {
            console.log("Got the recent video's data!", data);
            this.recentVideo = data['video'];
        });
    }
    activeSeason(seasonNumber) {
        if (seasonNumber == 0) {
            this.activeSeasonNumber = null;
        }
        this.activeSeasonNumber = seasonNumber;
        console.log(seasonNumber);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
AllVideosComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AllVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-videos',
        template: __webpack_require__(/*! raw-loader!./all-videos.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-videos/all-videos.component.html"),
        styles: [__webpack_require__(/*! ./all-videos.component.css */ "./src/app/all-videos/all-videos.component.css")]
    })
], AllVideosComponent);



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
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _add_video_page_add_video_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-video-page/add-video-page.component */ "./src/app/add-video-page/add-video-page.component.ts");
/* harmony import */ var _marathons_page_marathons_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marathons-page/marathons-page.component */ "./src/app/marathons-page/marathons-page.component.ts");
/* harmony import */ var _myriathon_page_myriathon_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myriathon-page/myriathon-page.component */ "./src/app/myriathon-page/myriathon-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-videos/all-videos.component */ "./src/app/all-videos/all-videos.component.ts");
/* harmony import */ var _single_video_single_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-video/single-video.component */ "./src/app/single-video/single-video.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-video/edit-video.component */ "./src/app/edit-video/edit-video.component.ts");
/* harmony import */ var _edit_season_edit_season_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-season/edit-season.component */ "./src/app/edit-season/edit-season.component.ts");















const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'admin', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_4__["AdminPageComponent"] },
    { path: 'addvideo', component: _add_video_page_add_video_page_component__WEBPACK_IMPORTED_MODULE_5__["AddVideoPageComponent"] },
    { path: 'marathons', component: _marathons_page_marathons_page_component__WEBPACK_IMPORTED_MODULE_6__["MarathonsPageComponent"] },
    { path: 'rescue', component: _myriathon_page_myriathon_page_component__WEBPACK_IMPORTED_MODULE_7__["MyriathonPageComponent"] },
    { path: 'about', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"] },
    { path: 'videos', component: _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_9__["AllVideosComponent"] },
    { path: 'video/:title', component: _single_video_single_video_component__WEBPACK_IMPORTED_MODULE_10__["SingleVideoComponent"] },
    { path: 'admin/dashboard', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"] },
    { path: 'user/:username', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"] },
    { path: 'video/edit/:title', component: _edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_13__["EditVideoComponent"] },
    { path: 'season/edit/:name', component: _edit_season_edit_season_component__WEBPACK_IMPORTED_MODULE_14__["EditSeasonComponent"] },
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

module.exports = "\n\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n/*\n    DEMO STYLE\n*/\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\na,\na:hover,\na:focus {\n    color: inherit;\n    text-decoration: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 10px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n#sidebar {\n    width: 250px;\n    position: fixed;\n    top: 0;\n    left: -250px;\n    height: 100vh;\n    z-index: 999;\n    background: #7386D5;\n    color: #fff;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n#sidebar.active {\n    left: 0;\n}\n#dismiss {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    background: #7386D5;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n#dismiss:hover {\n    background: #fff;\n    color: #7386D5;\n}\n.overlay {\n    display: none;\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 998;\n    opacity: 0;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n}\n.overlay.active {\n    display: block;\n    opacity: 1;\n}\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n}\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n#sidebar ul li.active>a,\na[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\nul.CTAs {\n    padding: 20px;\n}\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\na.download {\n    background: #fff;\n    color: #7386D5;\n}\na.article,\na.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    width: 100%;\n    padding: 20px;\n    min-height: 100vh;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n#sidebarNotCollapse\n{\n    background-color: #6d7fcc;\n    color: white;\n}\n#sidebarCollapse\n{\n    background-color: #6d7fcc;\n    color: white;\n}\n.footer\n{\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    min-height: 50px;\n    line-height: 50px;\n    background: rgb(248, 249, 250)\n}\n.footer #footer-text\n    {\n        -webkit-box-align: center;\n                align-items: center;\n    }\n.footer img\n    {\n        width: 35px;\n        height: 35px;\n        margin: 1rem 0rem 1rem 1rem;\n    }\n#logout-button-block\n{\n    position: static;\n}\n.icons:hover\n{\n    filter: none;\n    -webkit-filter: grayscale(100%);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSw2RUFBNkU7QUFKN0U7O0NBRUM7QUFHRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBRUE7O3VEQUV1RDtBQUV2RDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxPQUFPO0FBQ1g7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtJQUU1QixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0NBQWdDO0lBQWhDLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7QUFFQTs7dURBRXVEO0FBRXZEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7QUFDWjtBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSjtBQUVJOztRQUVJLHlCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0FBRUE7O1FBRUksV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7SUFDL0I7QUFFSjs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERFTU8gU1RZTEVcbiovXG5cbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2YmFyLWJ0biB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xuICAgIG1hcmdpbjogNDBweCAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jc2lkZWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTI1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJhY2tncm91bmQ6ICM3Mzg2RDU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbn1cblxuI2Rpc21pc3Mge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzczODZENTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jZGlzbWlzczpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzczODZENTtcbn1cblxuLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB6LWluZGV4OiA5OTg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5vdmVybGF5LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XG59XG5cbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NzQ4Yjtcbn1cblxuI3NpZGViYXIgdWwgcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzczODZENTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jc2lkZWJhciB1bCBsaS5hY3RpdmU+YSxcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XG59XG5cbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxudWwgdWwgYSB7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XG59XG5cbnVsLkNUQXMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsLkNUQXMgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5hLmRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjNzM4NkQ1O1xufVxuXG5hLmFydGljbGUsXG5hLmFydGljbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2MgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4jc2lkZWJhck5vdENvbGxhcHNlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkN2ZjYztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNzaWRlYmFyQ29sbGFwc2VcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ3ZmNjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3Rlclxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OSwgMjUwKVxufVxuXG4gICAgLmZvb3RlciAjZm9vdGVyLXRleHRcbiAgICB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZvb3RlciBpbWdcbiAgICB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMXJlbTtcbiAgICB9XG5cbiNsb2dvdXQtYnV0dG9uLWJsb2NrXG57XG4gICAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmljb25zOmhvdmVyXG57XG4gICAgZmlsdGVyOiBub25lO1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbiJdfQ== */"

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





let AppComponent = class AppComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.title = "Myriathon";
        this.navbarOpen = false;
        this.hamburgerOpen = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.setTitle("Myriathon | Home");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    toggleHamburger() {
        this.hamburgerOpen = !this.hamburgerOpen;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            this.session = data['user'];
            this._httpService.send(this.session);
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            console.log("Admin is true", data);
            this.admin = data['user'];
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    logout() {
        let observable = this._httpService.logout();
        observable.subscribe(data => {
            console.log("coming back", data);
            this.checkSession();
            this.admin = false;
            this._httpService.send(this.session);
            location.reload();
        });
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
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _add_video_page_add_video_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-video-page/add-video-page.component */ "./src/app/add-video-page/add-video-page.component.ts");
/* harmony import */ var _marathons_page_marathons_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marathons-page/marathons-page.component */ "./src/app/marathons-page/marathons-page.component.ts");
/* harmony import */ var _myriathon_page_myriathon_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myriathon-page/myriathon-page.component */ "./src/app/myriathon-page/myriathon-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-videos/all-videos.component */ "./src/app/all-videos/all-videos.component.ts");
/* harmony import */ var _single_video_single_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./single-video/single-video.component */ "./src/app/single-video/single-video.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-video/edit-video.component */ "./src/app/edit-video/edit-video.component.ts");
/* harmony import */ var _edit_season_edit_season_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-season/edit-season.component */ "./src/app/edit-season/edit-season.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
            _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_10__["AdminPageComponent"],
            _add_video_page_add_video_page_component__WEBPACK_IMPORTED_MODULE_11__["AddVideoPageComponent"],
            _marathons_page_marathons_page_component__WEBPACK_IMPORTED_MODULE_12__["MarathonsPageComponent"],
            _myriathon_page_myriathon_page_component__WEBPACK_IMPORTED_MODULE_13__["MyriathonPageComponent"],
            _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_14__["AboutPageComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"],
            _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_16__["AllVideosComponent"],
            _single_video_single_video_component__WEBPACK_IMPORTED_MODULE_17__["SingleVideoComponent"],
            _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["AdminDashboardComponent"],
            _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_19__["UserInfoComponent"],
            _edit_video_edit_video_component__WEBPACK_IMPORTED_MODULE_20__["EditVideoComponent"],
            _edit_season_edit_season_component__WEBPACK_IMPORTED_MODULE_21__["EditSeasonComponent"],
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

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    -webkit-box-flex: 1;\n            flex: 1;\n    }\n    \n    .carousel {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 0.5em;\n    min-height: 550px;\n    }\n    \n    .slide {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-transition: -webkit-transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    transition: -webkit-transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84), -webkit-transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    border-radius: 0.5em;\n    }\n    \n    .slide:hover {\n    -webkit-transform: scale(1.025);\n            transform: scale(1.025);\n    }\n    \n    .control {\n    border: none;\n    background-color: black;\n    outline: 0; \n    position: absolute;\n    cursor: pointer;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 0.3em;\n    color: white;\n    font-weight: bold;\n    font-size: 3em;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    height: 100%;\n    opacity: 20%;\n    -webkit-transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n    }\n    \n    .control:hover {\n        opacity: 1;\n        cursor: pointer;\n    }\n    \n    /* Position the buttons */\n    \n    .next {\n        right: 0;\n    }\n    \n    .prev {\n        left: 0;\n    }\n    \n    /* style the arrows */\n    \n    .arrow {\n    display: block;\n    border-left: 0.1em solid white;\n    border-bottom: 0.1em solid white;\n    width: 0.5em;\n    height: 0.5em;\n    }\n    \n    .left {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        }\n    \n    .right {\n        -webkit-transform: rotate(225deg);\n                transform: rotate(225deg);\n    }\n    \n    .carousel-text\n    {\n        margin-bottom: 1rem;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFPO1lBQVAsT0FBTztJQUNQOztJQUVBO0lBQ0Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakI7O0lBRUE7SUFDQSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsZ0ZBQWdFO0lBQWhFLHdFQUFnRTtJQUFoRSxnRUFBZ0U7SUFBaEUsOEhBQWdFO0lBQ2hFLG9CQUFvQjtJQUNwQjs7SUFFQTtJQUNBLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkI7O0lBRUE7SUFDQSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLHNFQUE4RDtJQUE5RCw4REFBOEQ7SUFDOUQ7O0lBSUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQSx5QkFBeUI7O0lBQ3pCO1FBQ0ksUUFBUTtJQUNaOztJQUNBO1FBQ0ksT0FBTztJQUNYOztJQUdBLHFCQUFxQjs7SUFDckI7SUFDQSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtJQUNiOztJQUVBO1FBQ0ksZ0NBQXdCO2dCQUF4Qix3QkFBd0I7UUFDeEI7O0lBQ0o7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtJQUM3Qjs7SUFFQTs7UUFFSSxtQkFBbUI7SUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIFxuICAgIC5jYXJvdXNlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRyb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvdXRsaW5lOiAwOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDIwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgICB9XG4gICAgXG5cblxuICAgIC5jb250cm9sOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAvKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xuICAgIC5uZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyogc3R5bGUgdGhlIGFycm93cyAqL1xuICAgIC5hcnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDAuMWVtIHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiAwLjVlbTtcbiAgICBoZWlnaHQ6IDAuNWVtO1xuICAgIH1cbiAgICBcbiAgICAubGVmdCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgIC5yaWdodCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJvdXNlbC10ZXh0XG4gICAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let CarouselComponent = class CarouselComponent {
    constructor() {
        this.txt = [
            "Myriathon Assist ran in the summer of 2018, in support of Direct Relief.  We raised over $1,600 during the marathon!",
            "Myriathon 1 Up ran in the winter of 2018, in support of Extra Life.  We raised over $1,300 during the marathon!",
            "Myriathon Checkpoint ran in the summer of 2019, in support of Checkpoint Org.  We raised over $1,500 during the marathon!",
            "Myriathon Home is an upcoming marathon slated for summer 2020, in support of Direct Relief.  The event will run from June 8th to June 14th."
        ];
        this.title = [
            "Myriathon Assist - Summer 2018",
            "Myriathon 1-Up - Winter 2018",
            "Myriathon Checkpoint - Summer 2019",
            "Myriathon Home - Summer 2020"
        ];
        this.currentSlide = 0;
        this.currentText = 0;
        this.currentTitle = 0;
    }
    ngOnInit() {
        this.preloadImages();
    }
    preloadImages() {
        for (const slide of this.bigSlides) {
            new Image().src = slide.src;
        }
        for (const slide of this.littleSlides) {
            new Image().src = slide.src;
        }
    }
    onPreviousClick() {
        const previousSlide = this.currentSlide - 1;
        const previousText = this.currentText - 1;
        const previousTitle = this.currentTitle - 1;
        this.currentSlide = previousSlide < 0 ? this.bigSlides.length - 1 : previousSlide;
        this.currentText = previousText < 0 ? this.txt.length - 1 : previousText;
        this.currentTitle = previousTitle < 0 ? this.title.length - 1 : previousTitle;
    }
    onNextClick() {
        const nextSlide = this.currentSlide + 1;
        const nextText = this.currentText + 1;
        const nextTitle = this.currentTitle + 1;
        this.currentText = nextText === this.txt.length ? 0 : nextText;
        this.currentSlide = nextSlide === this.bigSlides.length ? 0 : nextSlide;
        this.currentTitle = nextTitle === this.title.length ? 0 : nextTitle;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CarouselComponent.prototype, "bigSlides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CarouselComponent.prototype, "littleSlides", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/edit-season/edit-season.component.css":
/*!*******************************************************!*\
  !*** ./src/app/edit-season/edit-season.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, .table th\n{\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zZWFzb24vZWRpdC1zZWFzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXNlYXNvbi9lZGl0LXNlYXNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRkLCAudGFibGUgdGhcbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-season/edit-season.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-season/edit-season.component.ts ***!
  \******************************************************/
/*! exports provided: EditSeasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSeasonComponent", function() { return EditSeasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let EditSeasonComponent = class EditSeasonComponent {
    constructor(_httpService, router, route, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
        this.route.params.subscribe((params) => {
            this.getSingleSeasonName(params['name']);
        });
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    updateSingleSeason() {
        console.log("You pressed the button!");
        let observable = this._httpService.updateSeasonDetails(this.updateSeason);
        observable.subscribe(data => {
            console.log("We updated the data!", data);
            if (data['success'] == false) {
                console.log(data['success']);
            }
            else {
                console.log(data['success']);
                this.router.navigateByUrl('home');
            }
        });
    }
    getSingleSeasonName(name) {
        let observable = this._httpService.getSeasonDetails(name);
        observable.subscribe(data => {
            console.log("We got the data!", data);
            this.singleSeason = data['season'];
            this.updateSeason = data['season'];
            this.setTitle("Myriathon | Edit Season: " + this.singleSeason.name);
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
                //this.router.navigateByUrl('home');
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
EditSeasonComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
EditSeasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-season',
        template: __webpack_require__(/*! raw-loader!./edit-season.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-season/edit-season.component.html"),
        styles: [__webpack_require__(/*! ./edit-season.component.css */ "./src/app/edit-season/edit-season.component.css")]
    })
], EditSeasonComponent);



/***/ }),

/***/ "./src/app/edit-video/edit-video.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-video/edit-video.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdmlkZW8vZWRpdC12aWRlby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-video/edit-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-video/edit-video.component.ts ***!
  \****************************************************/
/*! exports provided: EditVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVideoComponent", function() { return EditVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let EditVideoComponent = class EditVideoComponent {
    constructor(_httpService, router, route, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
        this.route.params.subscribe((params) => {
            this.getSingleVideoTitle(params['title']);
        });
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    updateSingleVideo() {
        console.log("You pressed the button!");
        let observable = this._httpService.updateVideo(this.updateVideo);
        observable.subscribe(data => {
            console.log("We are getting new data", data);
            if (data['success'] == false) {
                console.log(data['success']);
            }
            else {
                console.log(data['success']);
                this.router.navigateByUrl('home');
            }
        });
    }
    getSingleVideoTitle(title) {
        let observable = this._httpService.getVideoDetails(title);
        observable.subscribe(data => {
            console.log("We got the data!", data);
            this.singleVideo = data['video'][0];
            this.updateVideo = data['video'][0];
            this.setTitle("Myriathon | Edit Video: " + this.singleVideo.title);
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
                this.router.navigateByUrl('home');
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
EditVideoComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
EditVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-video',
        template: __webpack_require__(/*! raw-loader!./edit-video.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-video/edit-video.component.html"),
        styles: [__webpack_require__(/*! ./edit-video.component.css */ "./src/app/edit-video/edit-video.component.css")]
    })
], EditVideoComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\n{\n    margin-bottom: 1rem;\n}\n\n#image-wrapper\n{\n    width: 100%;\n    min-height: 575px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    background-image: url(\"https://wallpapercave.com/wp/wp1980778.jpg\");\n}\n\n#homeText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 300px;\n    margin-bottom: 100px;\n    z-index: 2;\n    background: rgba(128,128,128, 0.7);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#homeText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeText button\n    {\n        background-color: #6d7fcc;\n        color: white;\n        opacity: 1;\n    }\n\n#homeText button:hover\n        {\n            color: #6d7fcc;\n            background-color: white;\n            border: 1px solid #6d7fcc;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#homeSmallText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 75px;\n    margin-bottom: 100px;\n    z-index: 2;\n    background: rgba(128,128,128, 0.7);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#homeSmallText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#homeSmallText button\n    {\n        background-color: #6d7fcc;\n        color: white;\n        opacity: 1;\n    }\n\n#homeSmallText button:hover\n        {\n            color: #6d7fcc;\n            background-color: white;\n            border: 1px solid #6d7fcc;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#homeSmallText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#values-wrapper\n{\n    width: 100%;\n    min-height: 700px;\n    padding: 1rem;\n    position: relative;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background-image: url('/assets/img/myriathon_background2.png');\n}\n\n.darken-pseudo:after \n    {\n        content: '';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        display: block;\n        background-color: rgba(0, 0, 0, 0.5);\n    }\n\n#image-values-wrapper\n    {\n        z-index: 2;\n        background: rgba(128,128,128, 0.90);\n        padding: 15px;\n        border-radius: 8px;\n        box-shadow: 10px 10px 5px black;\n        opacity: 1;\n    }\n\n#values-wrapper #values-header-block\n    {\n        margin: 0.5rem;\n        margin-top: 1rem;\n        color: white;\n    }\n\n#values-wrapper #values-content-block-first\n    {\n        margin: 1rem;\n\n    }\n\n#impact-wrapper\n{\n    width: 100%;\n    min-height: 500px;\n    background-color: white;\n    padding: 0rem 2rem 2rem 2rem;\n}\n\n#impact-wrapper #impact-header-block\n    {\n        margin: 1rem;\n    }\n\n#impact-wrapper #impact-amount-block\n    {\n        margin: 1rem;\n    }\n\n#impact-wrapper #impact-charities-block\n    {\n        margin: 1rem;\n    }\n\n#impact-charities-block #charity-logo-block img\n        {\n            width: 160px;\n            height: 90px;\n            margin: 1rem;\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUVBQW1FO0FBQ3ZFOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVJOztRQUVJLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUE7O1FBRUksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7O0FBRUE7O1FBRUkseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0FBRUk7O1lBRUksY0FBYztZQUNkLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsbUNBQTJCO29CQUEzQiwyQkFBMkI7WUFDM0IsOEJBQThCO1FBQ2xDOztBQUVBOztZQUVJLDhCQUE4QjtZQUM5QixrQ0FBMEI7b0JBQTFCLDBCQUEwQjtRQUM5Qjs7QUFFUjs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQzs7QUFFSTs7UUFFSSxZQUFZO1FBQ1osVUFBVTtJQUNkOztBQUVBOztRQUVJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDOztBQUVBOztRQUVJLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osVUFBVTtJQUNkOztBQUVJOztZQUVJLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLG1DQUEyQjtvQkFBM0IsMkJBQTJCO1lBQzNCLDhCQUE4QjtRQUNsQzs7QUFFQTs7WUFFSSw4QkFBOEI7WUFDOUIsa0NBQTBCO29CQUExQiwwQkFBMEI7UUFDOUI7O0FBRVI7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw4REFBOEQ7QUFDbEU7O0FBRUk7O1FBRUksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO1FBQ1IsY0FBYztRQUNkLG9DQUFvQztJQUN4Qzs7QUFFQTs7UUFFSSxVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLFVBQVU7SUFDZDs7QUFFQTs7UUFFSSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0FBRUE7O1FBRUksWUFBWTs7SUFFaEI7O0FBRUo7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVJOztRQUVJLFlBQVk7SUFDaEI7O0FBRUE7O1FBRUksWUFBWTtJQUNoQjs7QUFFQTs7UUFFSSxZQUFZO0lBQ2hCOztBQUVJOztZQUVJLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtRQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93XG57XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI2ltYWdlLXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1NzVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwMTk4MDc3OC5qcGdcIik7XG59XG5cbiNob21lVGV4dFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LCAwLjcpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggYmxhY2s7XG59XG5cbiAgICAjaG9tZVRleHQgaDMsIHBcbiAgICB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjaG9tZVRleHQgYVxuICAgIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjaG9tZVRleHQgYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ3ZmNjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgICAgICNob21lVGV4dCBidXR0b246aG92ZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDdmY2M7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAjaG9tZVRleHQgYnV0dG9uOmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuXG4jaG9tZVNtYWxsVGV4dFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNyk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbn1cblxuICAgICNob21lU21hbGxUZXh0IGgzLCBwXG4gICAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2hvbWVTbWFsbFRleHQgYVxuICAgIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjaG9tZVNtYWxsVGV4dCBidXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmhvdmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ3ZmNjO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmQ3ZmNjO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hvbWVTbWFsbFRleHQgYnV0dG9uOmFjdGl2ZVxuICAgICAgICB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuXG4jdmFsdWVzLXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL215cmlhdGhvbl9iYWNrZ3JvdW5kMi5wbmcnKTtcbn0gICBcblxuICAgIC5kYXJrZW4tcHNldWRvOmFmdGVyIFxuICAgIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIH1cblxuICAgICNpbWFnZS12YWx1ZXMtd3JhcHBlclxuICAgIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjgsMTI4LDEyOCwgMC45MCk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjdmFsdWVzLXdyYXBwZXIgI3ZhbHVlcy1oZWFkZXItYmxvY2tcbiAgICB7XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI3ZhbHVlcy13cmFwcGVyICN2YWx1ZXMtY29udGVudC1ibG9jay1maXJzdFxuICAgIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuXG4gICAgfVxuXG4jaW1wYWN0LXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xufVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtaGVhZGVyLWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtYW1vdW50LWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgI2ltcGFjdC13cmFwcGVyICNpbXBhY3QtY2hhcml0aWVzLWJsb2NrXG4gICAge1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxuXG4gICAgICAgICNpbXBhY3QtY2hhcml0aWVzLWJsb2NrICNjaGFyaXR5LWxvZ28tYmxvY2sgaW1nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgfSJdfQ== */"

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





let HomepageComponent = class HomepageComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.admin = false;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.setTitle("Myriathon | Home");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            this.session = data['user'];
            this._httpService.send(this.session);
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
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
    addUser(newUser) {
        return this._http.post('/myriathon/new/user', { newUser: newUser });
    }
    loginUser(loginUser) {
        return this._http.post('/myriathon/login/user', { loginUser: loginUser });
    }
    addSeason(newSeason) {
        return this._http.post('myriathon/new/season', { newSeason: newSeason });
    }
    addVideo(newVideo) {
        return this._http.post('myriathon/new/video', { newVideo: newVideo });
    }
    getSeasons() {
        return this._http.get('/myriathon/all/seasons');
    }
    getLastVideo() {
        return this._http.get('/myriathon/last/video');
    }
    getVideoDetails(title) {
        return this._http.get('/myriathon/single/' + title);
    }
    getSeasonDetails(name) {
        return this._http.get('/myriathon/season/' + name);
    }
    getPreviousVideoDetails(singleVideoTitle, singleSeasonNumber) {
        return this._http.get('/myriathon/prev/video/' + singleVideoTitle + '/' + singleSeasonNumber);
    }
    getNextVideoDetails(singleVideoTitle, singleSeasonNumber) {
        return this._http.get('/myriathon/next/video/' + singleVideoTitle + '/' + singleSeasonNumber);
    }
    updateVideo(updateVideo) {
        return this._http.put('/myriathon/update/video/' + updateVideo._id, { updateVideo: updateVideo });
    }
    updateSeasonDetails(updateSeason) {
        return this._http.put('/myriathon/update/season/' + updateSeason._id, { updateSeason: updateSeason });
    }
    getUsersData() {
        return this._http.get('/myriathon/all/users');
    }
    getUserData(username) {
        return this._http.get('/myriathon/user/data/' + username);
    }
    removeAdminPrivilages(username, updateUser) {
        return this._http.put('/myriathon/remove/admin/' + username, { updateUser: updateUser });
    }
    addAdminPrivilages(username, updateUser) {
        return this._http.put('/myriathon/add/admin/' + username, { updateUser: updateUser });
    }
    send(session) {
        this._stream$.next(session);
    }
    checkSession() {
        return this._http.get('/myriathon/session');
    }
    checkAdmin() {
        return this._http.get('/myriathon/admin');
    }
    logout() {
        return this._http.get('/myriathon/logout');
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

/***/ "./src/app/marathons-page/marathons-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/marathons-page/marathons-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#image-wrapper\n{\n    width: 100%;\n    min-height: 650px;\n    background-position: center;\n    background-repeat: none;\n    background-size: cover;\n    position: relative;\n    background-image: url(\"https://wallpapercave.com/wp/wp1980778.jpg\");\n}\n\n#marathonText\n{\n    position: absolute;\n    bottom: 0px;\n    margin-left: 300px;\n    margin-bottom: 100px;\n    z-index: 2;\n    background: rgba(128,128,128, 0.7);\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px black;\n}\n\n#marathonText h3, p\n    {\n        color: white;\n        opacity: 1;\n    }\n\n#marathonText a\n    {\n        color: lightblue;\n        text-decoration: none;\n        background-color: transparent;\n    }\n\n#marathonText button\n    {\n        background-color: #6d7fcc;\n        color: white;\n        opacity: 1;\n    }\n\n#marathonText button:hover\n        {\n            color: #6d7fcc;\n            background-color: white;\n            border: 1px solid #6d7fcc;\n            -webkit-transform: translateY(-3px);\n                    transform: translateY(-3px);\n            box-shadow: 3px 3px 10px black;\n        }\n\n#marathonText button:active\n        {\n            box-shadow: 3px 3px 10px black;\n            -webkit-transform: translateY(2px);\n                    transform: translateY(2px);\n        }\n\n#carousel-container-wrapper\n{\n    min-height: 780px;\n}\n\n#carousel-row\n{\n    margin: 0px;\n}\n\n.container-carousel {\n    display: block;\n    height: 500px;\n    width: 100%;\n    margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFyYXRob25zLXBhZ2UvbWFyYXRob25zLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtRUFBbUU7QUFDdkU7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUk7O1FBRUksWUFBWTtRQUNaLFVBQVU7SUFDZDs7QUFFQTs7UUFFSSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQzs7QUFFQTs7UUFFSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFVBQVU7SUFDZDs7QUFFSTs7WUFFSSxjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6QixtQ0FBMkI7b0JBQTNCLDJCQUEyQjtZQUMzQiw4QkFBOEI7UUFDbEM7O0FBRUE7O1lBRUksOEJBQThCO1lBQzlCLGtDQUEwQjtvQkFBMUIsMEJBQTBCO1FBQzlCOztBQUVSOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYXJhdGhvbnMtcGFnZS9tYXJhdGhvbnMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlLXdyYXBwZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDE5ODA3NzguanBnXCIpO1xufVxuXG4jbWFyYXRob25UZXh0XG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDEyOCwxMjgsIDAuNyk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBibGFjaztcbn1cblxuICAgICNtYXJhdGhvblRleHQgaDMsIHBcbiAgICB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjbWFyYXRob25UZXh0IGFcbiAgICB7XG4gICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgI21hcmF0aG9uVGV4dCBidXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAgICAgI21hcmF0aG9uVGV4dCBidXR0b246aG92ZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICM2ZDdmY2M7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZDdmY2M7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAjbWFyYXRob25UZXh0IGJ1dHRvbjphY3RpdmVcbiAgICAgICAge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgICAgIH1cblxuI2Nhcm91c2VsLWNvbnRhaW5lci13cmFwcGVyXG57XG4gICAgbWluLWhlaWdodDogNzgwcHg7XG59XG5cbiNjYXJvdXNlbC1yb3dcbntcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRhaW5lci1jYXJvdXNlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/marathons-page/marathons-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marathons-page/marathons-page.component.ts ***!
  \************************************************************/
/*! exports provided: MarathonsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarathonsPageComponent", function() { return MarathonsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let MarathonsPageComponent = class MarathonsPageComponent {
    constructor(_httpService, router, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.titleService = titleService;
        this.bigSlides = [
            { src: "/assets/img/M_Assist_Large.jpg" },
            { src: "/assets/img/M_1UP_Large.jpg" },
            { src: "/assets/img/M_Checkpoint_Large.png" },
            { src: "https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg" },
        ];
        this.littleSlides = [
            { src: "/assets/img/M_Assist_Small.png" },
            { src: "/assets/img/M_1UP_Small.png" },
            { src: "/assets/img/M_Checkpoint_Small.png" },
            { src: "https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg" },
        ];
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.setTitle("Myriathon | Marathons");
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
MarathonsPageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
MarathonsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marathons-page',
        template: __webpack_require__(/*! raw-loader!./marathons-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/marathons-page/marathons-page.component.html"),
        styles: [__webpack_require__(/*! ./marathons-page.component.css */ "./src/app/marathons-page/marathons-page.component.css")]
    })
], MarathonsPageComponent);



/***/ }),

/***/ "./src/app/myriathon-page/myriathon-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/myriathon-page/myriathon-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* not empty */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlyaWF0aG9uLXBhZ2UvbXlyaWF0aG9uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjIiwiZmlsZSI6InNyYy9hcHAvbXlyaWF0aG9uLXBhZ2UvbXlyaWF0aG9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG5vdCBlbXB0eSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/myriathon-page/myriathon-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/myriathon-page/myriathon-page.component.ts ***!
  \************************************************************/
/*! exports provided: MyriathonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyriathonPageComponent", function() { return MyriathonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MyriathonPageComponent = class MyriathonPageComponent {
    constructor(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.receiveMessage(this.session);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
};
MyriathonPageComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MyriathonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myriathon-page',
        template: __webpack_require__(/*! raw-loader!./myriathon-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/myriathon-page/myriathon-page.component.html"),
        styles: [__webpack_require__(/*! ./myriathon-page.component.css */ "./src/app/myriathon-page/myriathon-page.component.css")]
    })
], MyriathonPageComponent);



/***/ }),

/***/ "./src/app/single-video/single-video.component.css":
/*!*********************************************************!*\
  !*** ./src/app/single-video/single-video.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jumboPackage\n{\n    background-color: #e9ecef;\n    height: 100px;\n    width: 100%;\n}\n\n#leadText\n{\n    padding-top: 1rem;\n}\n\n#iframeLarge\n{\n    padding: 0rem 2rem 0rem 2rem;\n    \n}\n\n#buttonRow\n{\n    margin-bottom: 5rem;\n}\n\n.col\n{\n    padding: 0rem;\n}\n\n.videoBackground \n{\n    background-color: black;\n}\n\n#buttonRow\n{\n    margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXZpZGVvL3NpbmdsZS12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw0QkFBNEI7O0FBRWhDOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtdmlkZW8vc2luZ2xlLXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjanVtYm9QYWNrYWdlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jbGVhZFRleHRcbntcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI2lmcmFtZUxhcmdlXG57XG4gICAgcGFkZGluZzogMHJlbSAycmVtIDByZW0gMnJlbTtcbiAgICBcbn1cblxuI2J1dHRvblJvd1xue1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5jb2xcbntcbiAgICBwYWRkaW5nOiAwcmVtO1xufVxuXG4udmlkZW9CYWNrZ3JvdW5kIFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4jYnV0dG9uUm93XG57XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/single-video/single-video.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-video/single-video.component.ts ***!
  \********************************************************/
/*! exports provided: SingleVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleVideoComponent", function() { return SingleVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let SingleVideoComponent = class SingleVideoComponent {
    constructor(_httpService, router, route, sanitizer, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.titleService = titleService;
        this.title = "";
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
        this.route.params.subscribe((params) => {
            this.getSingleVideoTitle(params['title']);
        });
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    getPreviousVideo(singleVideoTitle, singleSeasonNumber) {
        let observable = this._httpService.getPreviousVideoDetails(singleVideoTitle, singleSeasonNumber);
        observable.subscribe(data => {
            console.log("We got the previous video data!", data);
            this.previousVideo = data['video'];
        });
    }
    getNextVideo(singleVideoTitle, singleSeasonNumber) {
        let observable = this._httpService.getNextVideoDetails(singleVideoTitle, singleSeasonNumber);
        observable.subscribe(data => {
            console.log("We got the next video data!", data);
            this.nextVideo = data['video'];
        });
    }
    getSingleVideoTitle(title) {
        let observable = this._httpService.getVideoDetails(title);
        observable.subscribe(data => {
            this.singleVideo = data['video'][0];
            this.getSafeUrl(this.singleVideo.videoURL);
            this.getNextVideo(this.singleVideo.title, this.singleVideo.seasonNumber);
            this.getPreviousVideo(this.singleVideo.title, this.singleVideo.seasonNumber);
            this.setTitle("Myriathon | " + this.singleVideo.title);
        });
    }
    getSafeUrl(url) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("No session found!");
            }
            else {
                this.session = data['user'];
                this._httpService.send(this.session);
            }
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
SingleVideoComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
SingleVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-video',
        template: __webpack_require__(/*! raw-loader!./single-video.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-video/single-video.component.html"),
        styles: [__webpack_require__(/*! ./single-video.component.css */ "./src/app/single-video/single-video.component.css")]
    })
], SingleVideoComponent);



/***/ }),

/***/ "./src/app/user-info/user-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-info/user-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let UserInfoComponent = class UserInfoComponent {
    constructor(_httpService, router, route, titleService) {
        this._httpService = _httpService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.updateFalseUser = { admin: false };
        this.updateTrueUser = { admin: true };
        this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
    }
    ngOnInit() {
        this.checkSession();
        this.checkAdmin();
        this.receiveMessage(this.session);
        this.route.params.subscribe((params) => {
            this.getUserInfo(params['username']);
        });
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    getUserInfo(username) {
        let observable = this._httpService.getUserData(username);
        observable.subscribe(data => {
            if (data['success'] == true) {
                console.log("Got the user data!", data);
                this.user = data['user'];
                this.setTitle("Myriathon | User: " + this.user.username);
            }
            else {
                console.log("ERROR!");
                this.router.navigateByUrl('home');
            }
        });
    }
    removeAdmin() {
        let observable = this._httpService.removeAdminPrivilages(this.user.username, this.updateFalseUser);
        observable.subscribe(data => {
            console.log("User data updated: ", data);
        });
    }
    addAdmin() {
        let observable = this._httpService.addAdminPrivilages(this.user.username, this.updateTrueUser);
        observable.subscribe(data => {
            console.log("User data updated: ", data);
        });
    }
    receiveMessage(session) {
        this.session = session;
    }
    checkSession() {
        let observable = this._httpService.checkSession();
        observable.subscribe(data => {
            this.session = data['user'];
            this._httpService.send(this.session);
        });
    }
    checkAdmin() {
        let observable = this._httpService.checkAdmin();
        observable.subscribe(data => {
            if (data['success'] == false) {
                console.log("Admin is false");
            }
            else {
                console.log("Admin is true");
                this.admin = data['user'];
            }
        });
    }
};
UserInfoComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: __webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-info/user-info.component.html"),
        styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")]
    })
], UserInfoComponent);



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

module.exports = __webpack_require__(/*! /Users/Automaton/Desktop/Coding Stuff/CodingDojo/MEAN/Other Angular Projects/NewMyriathon/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map