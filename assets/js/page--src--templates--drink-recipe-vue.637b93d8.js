(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Hhqc:function(n,t,i){},cj2K:function(n,t,i){"use strict";i("Hhqc")},qNRa:function(n,t,i){"use strict";i.r(t);var e={metaInfo(){return{title:"Drink: "+this.$page.drink.name}}},a=(i("cj2K"),i("KHd+")),s=null,r=Object(a.a)(e,(function(){var n=this,t=n._self._c;return t("Layout",[t("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:n._s(n.$page.drink.name)}}),t("ul",{staticClass:"tags"},n._l(n.$page.drink.tags,(function(i){return t("li",{key:i.id},[t("g-link",{attrs:{to:i.path}},[n._v("#"+n._s(i.id))])],1)})),0),t("h2",[n._v("Ingredients")]),t("ul",{staticClass:"ingredient-list"},n._l(n.$page.drink.ingredients,(function(i){return t("li",{key:i.item.id},[n._v("\n         "+n._s(i.amount.value)+" "+n._s(i.amount.unit)+" "),t("g-link",{attrs:{to:i.item.path}},[n._v(n._s(i.name||i.item.name))])],1)})),0),n.$page.drink.garnish.length?t("div",[t("h2",[n._v("Garnish")]),t("ul",{staticClass:"garnish-list"},n._l(n.$page.drink.garnish,(function(i){return t("li",{key:i.item.id},[t("g-link",{attrs:{to:i.item.path}},[n._v(n._s(i.name||i.item.name))])],1)})),0)]):n._e()])}),[],!1,null,null,null);"function"==typeof s&&s(r);t.default=r.exports}}]);