System.register(['angular2/angular2', 'services/NameList'], function(exports_1) {
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
    var angular2_1, NameList_1;
    var SampleApp;
    function main() {
        angular2_1.bootstrap(SampleApp);
    }
    exports_1("main", main);
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (NameList_1_1) {
                NameList_1 = NameList_1_1;
            }],
        execute: function() {
            SampleApp = (function () {
                function SampleApp(service) {
                    this.names = service.getList();
                    this.name = '';
                }
                SampleApp.prototype.addName = function (name) {
                    this.names.push(name);
                    this.name = "";
                };
                SampleApp.prototype.removeName = function (name) {
                    var index = this.names.indexOf(name);
                    index !== -1 && this.names.splice(index, 1);
                };
                SampleApp = __decorate([
                    angular2_1.Component({
                        selector: 'sample-app',
                        viewProviders: [NameList_1.NameList],
                        templateUrl: './templates/sample-app.html',
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [NameList_1.NameList])
                ], SampleApp);
                return SampleApp;
            })();
        }
    }
});
