System.register([], function(exports_1) {
    var NameList;
    return {
        setters:[],
        execute: function() {
            NameList = (function () {
                function NameList() {
                    this.names = ['Brazil', 'Russia', 'India', 'China'];
                }
                NameList.prototype.getList = function () {
                    return this.names;
                };
                return NameList;
            })();
            exports_1("NameList", NameList);
            ;
        }
    }
});
