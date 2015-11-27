System.register(["angular2/angular2", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, router_1;
    var Video, Music, App;
    function main() {
        angular2_1.bootstrap(App, [
            router_1.ROUTER_PROVIDERS,
            angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
        ]);
    }
    exports_1("main", main);
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Video组件
            Video = (function () {
                function Video() {
                }
                Video = __decorate([
                    angular2_1.Component({
                        selector: "my-video",
                        template: "\n            <h1>I LOVE THIS VIDEO!</h1>\n        ",
                        styles: ["h1{background:#0f0;}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Video);
                return Video;
            })();
            //Music 组件
            Music = (function () {
                function Music(params) {
                    this.id = params.get('id');
                }
                Music = __decorate([
                    angular2_1.Component({
                        selector: "my-music",
                        template: "\n            <h1>THAT'S FANTASTIC MUSIC!, RoutParams: {{id}}</h1>\n        ",
                        styles: ["h1{background:#f00;}"]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Music);
                return Music;
            })();
            //App组件
            App = (function () {
                function App(location) {
                    location.go('/video');
                }
                App = __decorate([
                    angular2_1.Component({
                        selector: "my-app",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <!--\u58F0\u660E\u8DEF\u7531\u5165\u53E3-->\n        <nav>\n            <b [router-link]=\"['/Video']\">video</b> | \n            <b [router-link]=\"['/Music', {id:'xx'}]\">music</b>\n        </nav>\n        <main>\n            <!--\u58F0\u660E\u8DEF\u7531\u51FA\u53E3-->\n            <router-outlet></router-outlet>\n        </main>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: "/video", component: Video, as: "Video" },
                        { path: "/music/:id", component: Music, as: "Music" }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], App);
                return App;
            })();
        }
    }
});
