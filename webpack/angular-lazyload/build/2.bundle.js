webpackJsonp([2],{1:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e),this._messages=[{text:"Hello, World!",date:new Date}]}return r(e,[{key:"add",value:function(e){this._messages.push({text:e,date:new Date})}},{key:"all",value:function(){return this._messages}}]),e}();t["default"]=angular.module("msg-store.service",[]).service("msgStore",o),e.exports=t["default"]},13:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){r(this,e),this.text="",this._msgStore=t}return e.$inject=["msgStore"],o(e,[{key:"create",value:function(){this._msgStore.add(this.text),this.text=""}}]),e}();t["default"]=angular.module("messages.new.controller",[n(1).name]).controller("MessagesNewController",a),e.exports=t["default"]}});