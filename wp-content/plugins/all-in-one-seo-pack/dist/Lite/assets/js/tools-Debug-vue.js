(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["tools-Debug-vue"],{"1c6d":function(e,a,t){"use strict";t.r(a);var c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aioseo-tools-debug"},[t("core-card",{attrs:{slug:"debug","header-text":"Debug"}},[e.$aioseo.data.isDev?t("base-button",{staticClass:"clear-cache",attrs:{type:"blue",size:"medium",loading:e.clearingCache},on:{click:e.processClearCache}},[e._v(" Clear AIOSEO Cache ")]):e._e()],1)],1)},s=[],r=t("5530"),n=t("2f62"),o={data:function(){return{clearingCache:!1}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])(["clearCache"])),{},{processClearCache:function(){var e=this;this.clearingCache=!0,this.clearCache().then((function(){return e.clearingCache=!1}))}})},i=o,l=t("2877"),u=Object(l["a"])(i,c,s,!1,null,null,null);a["default"]=u.exports}}]);