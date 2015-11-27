System.register(['angular2/angular2', 'services/Validators'], function(exports_1) {
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
    var angular2_1, Validators_1;
    var SampleForm;
    function main() {
        angular2_1.bootstrap(SampleForm);
    }
    exports_1("main", main);
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (Validators_1_1) {
                Validators_1 = Validators_1_1;
            }],
        execute: function() {
            SampleForm = (function () {
                function SampleForm(builder) {
                    this.username = new angular2_1.Control("larry", angular2_1.Validators.required);
                    this.email = new angular2_1.Control("", Validators_1.EmailValidator.email);
                    this.form = builder.group({
                        username: this.username,
                        email: this.email
                    });
                }
                SampleForm = __decorate([
                    angular2_1.Component({
                        selector: 'sample-form',
                        viewBindings: [angular2_1.FormBuilder],
                        templateUrl: './templates/sample-form.html',
                        directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [angular2_1.FormBuilder])
                ], SampleForm);
                return SampleForm;
            })();
        }
    }
});
