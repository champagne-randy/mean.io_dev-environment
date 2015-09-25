angular.module("sampleApp",["ngRoute","appRoutes","homeController","nerdController","nerdService","semanticController"]),angular.module("appRoutes",[]).config(["$routeProvider","$locationProvider",function(e,r){e.when("/",{templateUrl:"/views/homeView.html",controller:"homeController"}).when("/nerds",{templateUrl:"/views/nerdView.html",controller:"nerdController"}).when("/semantic",{templateUrl:"/views/semanticView.html",controller:"semanticController"}),r.html5Mode(!0)}]),angular.module("homeController",[]).controller("homeController",["$scope",function(e){e.tagline="To the moon and back! Then back again bruh ^_^."}]),angular.module("nerdController",[]).controller("nerdController",["$scope",function(e){e.tagline="Nothing beats a pocket protector!"}]),angular.module("nerdService",[]).factory("Nerd",["$http",function(e){return{get:function(){return e.get("/api/nerds")},create:function(r){return e.post("/api/nerds",r)},"delete":function(r){return e["delete"]("/api/nerds/"+r)}}}]),angular.module("semanticController",[]).controller("semanticController",["$scope",function(e){e.tagline="Hellz yeah. Vive la Semantique!",e.updateActive=function(){}}]),$(function(){$("a.item").click(function(){$(".item").removeClass("active"),$(this).addClass("active")}),$(".accordion").accordion();var e={firstName:{identifier:"first-name",rules:[{type:"empty",prompt:"Please enter your first name"}]},lastName:{identifier:"last-name",rules:[{type:"empty",prompt:"Please enter your last name"}]},username:{identifier:"username",rules:[{type:"empty",prompt:"Please enter a username"}]},password:{identifier:"password",rules:[{type:"empty",prompt:"Please enter a password"},{type:"length[6]",prompt:"Your password must be at least 6 characters"},{type:"containsNumbers",prompt:"Need a number"}]}};$.fn.form.settings.rules.containsNumbers=function(e){var r=new RegExp("[0-9]");return r.test(e)},$(".form").form(e,{inline:!1,onSuccess:function(){$(".ui.modal").modal("show")}})});