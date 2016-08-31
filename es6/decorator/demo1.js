/**
 * Created by Rayr Lee on 16/8/31.
 */

//增加防御值
function decorateArmour(target, key, descriptor) {
    const method = descriptor.value;
    let moreDef = 100;
    let ret;
    descriptor.value = (...args) => {
        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor;
};
//增加攻击力
function decorateLight(target, key, descriptor) {
    const method = descriptor.value;
    let moreAtk = 50;
    let ret;
    descriptor.value = (...args) => {
        args[1] += moreAtk;
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor;
};
//增加飞行方法
function addFly(canFly) {
    return function (target) {
        target.canFly = canFly;
        let extra = canFly ? '(技能加成:飞行能力)' : '',
            method = target.prototype.toString;
        target.prototype.toString = (...args) => {
            return method.apply(target.prototype, args) + extra;
        }
        return target;
    }
};

@addFly(true)
class Man {

    constructor(def = 2, atk = 3, hp = 3) {
        this.init(def, atk, hp);
    }

    @decorateArmour
    @decorateLight
    init(def, atk, hp) {
        this.def = def; // 防御值
        this.atk = atk;  // 攻击力
        this.hp = hp;  // 血量
    }

    toString() {
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

var tony = new Man();

document.getElementById('div1').innerHTML = `当前状态 ===> ${tony}`;

console.log(`当前状态 ===> ${tony}`);