"use strict";
exports.__esModule = true;
var TsDemo;
(function (TsDemo) {
    function greeter(person) {
        return 'hello,' + person;
    }
    var user = { firstName: 'David', lastName: 'DDD' };
    document.body.innerHTML = greeter(user);
})(TsDemo = exports.TsDemo || (exports.TsDemo = {}));
