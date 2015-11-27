System.register(['angular2/angular2'], function(exports_1) {
    var angular2_1;
    var EmailValidator;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            EmailValidator = (function () {
                function EmailValidator() {
                }
                // custom email validator
                EmailValidator.email = function (control) {
                    var requireResult = angular2_1.Validators.required(control);
                    if (requireResult != null) {
                        return requireResult;
                    }
                    var mailRegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    if (control.value != "" && !mailRegExp.test(control.value)) {
                        return { "email": true };
                    }
                    return null;
                };
                return EmailValidator;
            })();
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
