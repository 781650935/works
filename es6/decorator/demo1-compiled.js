'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

/**
 * Created by Rayr Lee on 16/8/31.
 */

//增加防御值
function decorateArmour(target, key, descriptor) {
    var method = descriptor.value;
    var moreDef = 100;
    var ret = void 0;
    descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    };
    return descriptor;
};
//增加攻击力
function decorateLight(target, key, descriptor) {
    var method = descriptor.value;
    var moreAtk = 50;
    var ret = void 0;
    descriptor.value = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        args[1] += moreAtk;
        ret = method.apply(target, args);
        return ret;
    };
    return descriptor;
};
//增加飞行方法
function addFly(canFly) {
    return function (target) {
        target.canFly = canFly;
        var extra = canFly ? '(技能加成:飞行能力)' : '',
            method = target.prototype.toString;
        target.prototype.toString = function () {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return method.apply(target.prototype, args) + extra;
        };
        return target;
    };
};

var Man = (_dec = addFly(true), _dec(_class = (_class2 = function () {
    function Man() {
        var def = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];
        var atk = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
        var hp = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];

        _classCallCheck(this, Man);

        this.init(def, atk, hp);
    }

    _createClass(Man, [{
        key: 'init',
        value: function init(def, atk, hp) {
            this.def = def; // 防御值
            this.atk = atk; // 攻击力
            this.hp = hp; // 血量
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '防御力:' + this.def + ',攻击力:' + this.atk + ',血量:' + this.hp;
        }
    }]);

    return Man;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'init', [decorateArmour, decorateLight], Object.getOwnPropertyDescriptor(_class2.prototype, 'init'), _class2.prototype)), _class2)) || _class);


var tony = new Man();

document.getElementById('div1').innerHTML = '当前状态 ===> ' + tony;

console.log('当前状态 ===> ' + tony);
