webpackJsonp([3],{1:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e),this._messages=[{text:"Hello, World!",date:new Date}]}return a(e,[{key:"add",value:function(e){this._messages.push({text:e,date:new Date})}},{key:"all",value:function(){return this._messages}}]),e}();t["default"]=angular.module("msg-store.service",[]).service("msgStore",r),e.exports=t["default"]},11:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(e){a(this,o),this.msgs=e.all()};r.$inject=["msgStore"],t["default"]=angular.module("messages.all.controller",[n(1).name]).controller("MessagesAllController",r),e.exports=t["default"]}});