//// [tests/cases/conformance/decorators/class/constructor/decoratorOnClassConstructor2.ts] ////

//// [0.ts]

export class base { }
export function foo(target: Object, propertyKey: string | symbol, parameterIndex: number) { }

//// [2.ts]
import {base} from "./0.ts"
import {foo} from "./0.ts"
export class C  extends base{
    constructor(@foo prop: any) {
        super();
    }
}

//// [0.js]
"use strict";
var base = (function () {
    function base() {
    }
    return base;
}());
exports.base = base;
function foo(target, propertyKey, parameterIndex) { }
exports.foo = foo;
//// [2.js]
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _0_ts_1 = require("./0.ts");
var _0_ts_2 = require("./0.ts");
var C = (function (_super) {
    __extends(C, _super);
    function C(prop) {
        _super.call(this);
    }
    return C;
}(_0_ts_1.base));
C = __decorate([
    __param(0, _0_ts_2.foo)
], C);
exports.C = C;
