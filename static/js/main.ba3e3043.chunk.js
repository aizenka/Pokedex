(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,,,,,function(e,n,t){var r=t(6),o=t(34);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},,,,,,,,,function(e,n,t){var r=t(6),o=t(54);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},,,,,function(e,n,t){"use strict";n.a=t.p+"static/media/background-pokemon.39ca29f7.png"},,,,,function(e,n,t){var r=t(6),o=t(31);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,"*{padding:0;margin:0;border:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}input,button,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace}","",{version:3,sources:["webpack://src/index.styl"],names:[],mappings:"AAEA,EACE,SAAS,CACT,QAAQ,CACR,QAAQ,CAGV,KACE,mJAA0B,CAG1B,kCAAwB,CACxB,iCACA,CAUF,iBAEE,0BAAiB,CACjB,6BAAoB,CACpB,qBAAY,CAGd,sBAGE,mBAAa,CAGf,iBACE,YAAS,CAEX,OACE,cAAQ,CAEV,yBACE,SAAS,CACT,QAAQ,CAEV,YAEE,oBAAiB,CAEnB,QACE,oBAAiB,CAEnB,MACE,eAAY,CAEd,IACE,kBAAgB,CAGlB,KACE,yEAA4B",sourcesContent:["/* @import-normalize; */\n\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; */\n}\n\n*:before,\n*:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\nbutton {\n  cursor: pointer;\n}\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\na,\na:visited {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: none;\n}\nul li {\n  list-style: none;\n}\nimg {\n  vertical-align: top;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],sourceRoot:""}]),n.default=o},function(e,n,t){var r=t(6),o=t(33);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,".header{width:70%;height:auto;margin:30px auto 15px auto;padding:20px 0;background-color:#c10000;text-align:center;color:#fff}","",{version:3,sources:["webpack://src/components/header/header.styl"],names:[],mappings:"AAAA,QACE,SAAO,CACP,WAAQ,CACR,0BAAQ,CACR,cAAS,CACT,wBAAkB,CAClB,iBAAY,CACZ,UAAO",sourcesContent:[".header {\r\n  width: 70%;\r\n  height: auto;\r\n  margin: 30px auto 15px auto;\r\n  padding: 20px 0;\r\n  background-color: #c10000;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n"],sourceRoot:""}]),n.default=o},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,".pokemon-list{border:3px solid #000;margin-right:30px;padding:15px;max-width:70%;height:370px;background-color:#d40000;border-radius:25px}.pokemon-list h2{font-family:'Courier New',Courier,monospace}.pokemon-list .pokemons{font-family:'Courier New',Courier,monospace;border:3px solid #000;background-color:#00bfff;cursor:pointer;width:100%;height:200px;overflow:auto}.pokemon-list .go-back-button{outline:none;background-color:#000;color:#fff;padding:3px 16px;cursor:pointer;width:100%}.pokemon-list .pagination-menu .pagination-arrow{margin-top:5px;width:100%;display:flex;justify-content:space-around}.pokemon-list .pagination-menu .pagination-arrow .pagination-button{width:auto;outline:none;border:1px solid #fff;border-radius:20%;cursor:pointer;padding:3px 16px;margin:30px 20px;background-color:#000;color:#fff}.pokemon-list .pagination-menu .pagination-list{display:flex;justify-content:space-around}.pokemon-list .pagination-menu .pagination-list .limit-list-item{outline:none;border:1px solid #fff;border-radius:20%;padding:5px;cursor:pointer;background-color:#000;color:#fff}","",{version:3,sources:["webpack://src/components/pokeList/pokeList.styl"],names:[],mappings:"AAKA,cACE,qBAAQ,CACR,iBAAc,CACd,YAAS,CACT,aAAW,CACX,YAAQ,CACR,wBAAkB,CAClB,kBAAe,CAEf,iBACE,2CAAa,CAGf,wBACE,2CAAa,CACb,qBAAQ,CAGR,wBAAkB,CAClB,cAAQ,CACR,UAAO,CACP,YAAQ,CACR,aAAU,CAGZ,8BACE,YAAS,CACT,qBAAkB,CAClB,UAAO,CACP,gBAAS,CACT,cAAQ,CACR,UAAO,CAIP,iDACE,cAAY,CACZ,UAAO,CACP,YAAS,CACT,4BAAiB,CACjB,oEACE,UAAM,CACN,YAAS,CACT,qBAAQ,CACR,iBAAe,CACf,cAAQ,CACR,gBAAS,CACT,gBAAQ,CACR,qBAAkB,CAClB,UAAO,CAGX,gDACE,YAAS,CACT,4BAAiB,CACjB,iEACE,YAAS,CACT,qBAAQ,CACR,iBAAe,CACf,WAAS,CACT,cAAQ,CACR,qBAAkB,CAClB,UAAO",sourcesContent:["white = #fff;\r\nblack = #000;\r\np = pointer;\r\nfont = 'Courier New', Courier, monospace;\r\n\r\n.pokemon-list {\r\n  border: 3px solid black;\r\n  margin-right: 30px;\r\n  padding: 15px;\r\n  max-width: 70%;\r\n  height: 370px;\r\n  background-color: #d40000;\r\n  border-radius: 25px;\r\n\r\n  h2 {\r\n    font-family: font;\r\n  }\r\n\r\n  .pokemons {\r\n    font-family: font;\r\n    border: 3px solid black;\r\n    // box-shadow: 0 0 0 2px #000000 inset, 0 0 0 4px white inset;\r\n    // border-top-right-radius: 50px;\r\n    background-color: deepskyblue;\r\n    cursor: p;\r\n    width: 100%;\r\n    height: 200px;\r\n    overflow: auto;\r\n  }\r\n\r\n  .go-back-button {\r\n    outline: none;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 3px 16px;\r\n    cursor: p;\r\n    width: 100%;\r\n  }\r\n\r\n  .pagination-menu {\r\n    .pagination-arrow {\r\n      margin-top: 5px;\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: space-around;\r\n      .pagination-button {\r\n        width auto;\r\n        outline: none;\r\n        border: 1px solid white;\r\n        border-radius: 20%;\r\n        cursor: p;\r\n        padding: 3px 16px;\r\n        margin: 30px 20px;\r\n        background-color: black;\r\n        color: white;\r\n      }\r\n    }\r\n    .pagination-list {\r\n      display: flex;\r\n      justify-content: space-around;\r\n      .limit-list-item {\r\n        outline: none;\r\n        border: 1px solid white;\r\n        border-radius: 20%;\r\n        padding: 5px;\r\n        cursor: p;\r\n        background-color: black;\r\n        color: white;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.default=o},,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,".poke-info{border:4px solid #000;box-shadow:55px;padding:15px;font-family:'Courier New',Courier,monospace;background-color:#d40000;color:#fff}.poke-info .wrapper{padding:10px;border:1px solid #000}","",{version:3,sources:["webpack://src/components/pokeDetails/pokeDetails.styl"],names:[],mappings:"AAEA,WACE,qBAAQ,CACR,eAAY,CACZ,YAAS,CACT,2CAAa,CACb,wBAAkB,CAClB,UAAO,CAEP,oBACE,YAAS,CACT,qBAAQ",sourcesContent:["font = 'Courier New', Courier, monospace;\r\n\r\n.poke-info {\r\n  border: 4px solid black;\r\n  box-shadow: 55px;\r\n  padding: 15px;\r\n  font-family: font;\r\n  background-color: #d40000;\r\n  color: #fff;\r\n\r\n  .wrapper {\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.default=o},function(e,n,t){var r=t(6),o=t(56);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,".poke-options select{background-color:transparent;outline:none;border:none;color:#fff}.poke-options select:hover{cursor:pointer}.poke-options select option{background:#c10000}.poke-options span{color:#fff}","",{version:3,sources:["webpack://src/components/pokeTypeOptions/pokeTypeOptions.styl"],names:[],mappings:"AACE,qBACE,4BAAkB,CAClB,YAAS,CACT,WAAQ,CACR,UAAO,CACP,2BACE,cAAQ,CAEV,4BACE,kBAAY,CAGhB,mBACE,UAAO",sourcesContent:[".poke-options {\r\n  select {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    color: #fff;\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n    option {\r\n      background: #c10000;\r\n    }\r\n  }\r\n  span {\r\n    color: #fff;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.default=o},function(e,n,t){var r=t(6),o=t(58);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r)()(!0);o.push([e.i,".filter-panel{margin-right:20px}.filter-panel .filter-input{width:100%;height:20px;padding-left:10px;font-size:16px;border-radius:2px;outline:none;background:#f9f0da;color:#000}","",{version:3,sources:["webpack://src/components/searchPanel/searchPanel.styl"],names:[],mappings:"AAAA,cACE,iBAAc,CACd,4BACE,UAAO,CACP,WAAQ,CACR,iBAAc,CACd,cAAW,CACX,iBAAe,CACf,YAAS,CACT,kBAAY,CACZ,UAAO",sourcesContent:[".filter-panel {\r\n  margin-right: 20px;\r\n  .filter-input {\r\n    width: 100%;\r\n    height: 20px;\r\n    padding-left: 10px;\r\n    font-size: 16px;\r\n    border-radius: 2px;\r\n    outline: none;\r\n    background: #f9f0da;\r\n    color: #000;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.default=o},function(e,n,t){var r=t(6),o=t(60);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r),a=t(24),i=t.n(a),s=t(25),l=o()(!0),c=i()(s.a);l.push([e.i,"body{background:url("+c+");background-size:100%;font-family:Questrial,sans-serif;font-size:17px}.filter{display:flex;margin:0 auto 30px auto;padding:20px 0;width:70%;height:auto;justify-content:center;flex-wrap:wrap;background-color:#d40000}.main-menu{display:flex;justify-content:center;flex-wrap:wrap;margin:0 auto;width:70%;height:auto}.App{max-width:1200px;margin:0 auto}@media (max-width:1200px){.App{max-width:970px}}@media (max-width:992px){.App{max-width:750px}.main-menu .pokemon-list{margin:0 30px 30px}}@media (max-width:764px){.App{max-width:none}.filter .filter-panel{margin-bottom:10px}.main-menu .pokemon-list{margin:0 30px 30px}}","",{version:3,sources:["webpack://src/components/app/app.styl"],names:[],mappings:"AAAA,KACE,kDAAgD,CAChD,oBAAiB,CACjB,gCAAsB,CACtB,cAAW,CAYb,QACE,YAAS,CACT,uBAAQ,CACR,cAAS,CAXT,SAAO,CACP,WAAQ,CAYR,sBAAiB,CACjB,cAAW,CACX,wBAAkB,CAGpB,WACE,YAAS,CACT,sBAAiB,CACjB,cAAW,CACX,aAAQ,CAtBR,SAAO,CACP,WAAQ,CAyBV,KACE,gBAAW,CACX,aAAQ,CAGe,0BACvB,KACE,eAAW,CAAA,CAIS,yBACtB,KACE,eAAW,CAGX,yBArCF,kBAAQ,CAAA,CA2Cc,yBACtB,KACE,cAAW,CAGX,sBACE,kBAAe,CAIjB,yBArDF,kBAAQ,CAAA",sourcesContent:["body {\n  background: url(../../img/background-pokemon.png);\n  background-size: 100%;\n  font-family: Questrial, sans-serif;\n  font-size: 17px;\n}\n\nsizes() {\n  width: 70%;\n  height: auto;\n}\n\nmarg() {\n  margin: 0px 30px 30px;\n}\n\n.filter {\n  display: flex;\n  margin: 0px auto 30px auto;\n  padding: 20px 0;\n  sizes();\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #d40000;\n}\n\n.main-menu {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  sizes();\n}\n\n.App {\n  max-width: 1200px;\n  margin: 0px auto;\n}\n\n@media (max-width: 1200px) {\n  .App {\n    max-width: 970px;\n  }\n}\n\n@media (max-width: 992px) {\n  .App {\n    max-width: 750px;\n  }\n  .main-menu {\n    .pokemon-list {\n      marg();\n    }\n  }\n}\n\n@media (max-width: 764px) {\n  .App {\n    max-width: none;\n  }\n  .filter {\n    .filter-panel {\n      margin-bottom: 10px;\n    }\n  }\n  .main-menu {\n    .pokemon-list {\n      marg();\n    }\n  }\n}\n"],sourceRoot:""}]),n.default=l},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(21),i=t.n(a),s=(t(30),t(3)),l=(t(32),function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",null,"Pokedex"),o.a.createElement("h4",null,"pokemon database")))}),c=(t(11),Object(s.a)((function(e){var n=e.store,t=Object(r.useCallback)((function(e,t){n.filter.length||(t>0&&n.setLimit(t),1===e&&n.setOffset(n.limit,1),-1===e&&n.setOffset(n.limit,-1),n.offset<0&&n.setOffset(n.offset,0),n.getAllPokemons(n.limit,n.offset).then((function(e){n.setPokeList(e)})).catch((function(e){return console.log(e)})))}),[n.pokeList]);Object(r.useEffect)((function(){t()}),[]);var a=function(e){if(e.length)return e.map((function(e,t){var r=e.id,a=e.name,i=a[0].toUpperCase()+a.slice(1),s="".concat(r.slice(1),". ").concat(i);return o.a.createElement("li",{key:r,className:"pokelist-item",onClick:function(){return n.onPokemonSelected(r.slice(1))}},s)}))},i=n.filter.length?a(n.filteredFullList):a(n.pokeList);return o.a.createElement("div",{className:"pokemon-list"},o.a.createElement("h2",null,"Select pokemon"),o.a.createElement("div",{className:"pokemons"},!n.pokeList.length&&o.a.createElement("span",null,"Loading..."),o.a.createElement("ul",null,i)),o.a.createElement("div",{className:"pagination-menu"},o.a.createElement("div",{className:"pagination-arrow"},o.a.createElement("button",{className:"pagination-button",onClick:function(){return t(-1,0)}},o.a.createElement("i",{className:"fa fa-long-arrow-left","aria-hidden":"true"})),o.a.createElement("button",{className:"pagination-button",onClick:function(){return t(1,0)}},o.a.createElement("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"}))),o.a.createElement("div",{className:"pagination-list"},o.a.createElement("button",{className:"limit-list-item",onClick:function(){return t(0,10)}},"10"),o.a.createElement("button",{className:"limit-list-item",onClick:function(){return t(0,20)}},"20"),o.a.createElement("button",{className:"limit-list-item",onClick:function(){return t(0,50)}},"50"))))}))),p=Object(s.a)((function(e){var n=e.store;Object(r.useEffect)((function(){n.getPokemonWithCurrentType(n.pokeTypeID).then((function(e){n.setPokeTypeList(e)})).catch((function(e){return console.log(e)}))}),[n.pokeTypeID]);var t=function(e){if(e.length)return e.map((function(e){var t=function(e){return e.url.slice(0,-1).match(/\/([0-9]*)$/)[0]}(e.pokemon),r=e.pokemon.name[0].toUpperCase()+e.pokemon.name.slice(1);return o.a.createElement("li",{className:"pokelist-item",key:t,onClick:function(){return n.onPokemonSelected(t.slice(1))}},t.slice(1),".",r)}))}(n.filteredTypesList);return o.a.createElement("div",{className:"pokemon-list"},o.a.createElement("h2",null,"Poke list"),o.a.createElement("div",{className:"pokemons"},!n.filteredList.length&&o.a.createElement("span",null,"Loading..."),o.a.createElement("ul",null,t)),o.a.createElement("button",{className:"go-back-button",onClick:function(){return n.onTypeSelected("")}},"Go to full list ",o.a.createElement("i",{className:"fa fa-home"})))})),u=t(5),A=t.n(u),f=t(7),m=t(22),d=t(23),C=t(1),g=t(9),k=t.n(g);Object(C.h)({enforceActions:"observed"});var h="https://pokeapi.co/api/v2",b=new(function(){function e(){var n=this;Object(m.a)(this,e),this.getResource=function(){var e=Object(f.a)(A.a.mark((function e(n){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(h).concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),this.getCurrentResource=function(){var e=Object(f.a)(A.a.mark((function e(n){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(h).concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),this.getAllPokemons=function(){var e=Object(f.a)(A.a.mark((function e(t,r){var o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getResource("/pokemon?limit=".concat(t,"&offset=").concat(r));case 2:return o=e.sent,e.abrupt("return",o.map(n.transformPokeList));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),this.getPokemon=function(){var e=Object(f.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getCurrentResource("/pokemon/".concat(t));case 2:return r=e.sent,e.abrupt("return",n.transformPokemon(r));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.getAllTypes=Object(f.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getResource("/type/");case 3:return t=e.sent,e.abrupt("return",t.map(n.transformPokeList));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getPokemonWithCurrentType=function(){var e=Object(f.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getCurrentResource("/type/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.pokemon);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),this.setLimit=function(e){n.limit=e},this.setOffset=function(e,t){1===t?n.offset+=e:-1===t?n.offset-=e:0===t&&(n.offset=0)},this.setFilteredFullList=function(e){n.filteredList=e},this.updateFilter=function(e){n.filter=e},this.setPokeStats=function(e){n.pokeStats=e},this.setPokeTypeList=function(e){n.pokeTypeList=e},this.setPokeTypesOptions=function(e){n.pokeTypesOptions=e},this.setPokeList=function(e){n.pokeList=e},this.onTypeSelected=function(e){n.pokeTypeID=e},this.onPokemonSelected=function(e){n.pokeID=e},this.extractId=function(e){return e.url.slice(0,-1).match(/\/([0-9]*)$/)[0]},this.transformPokemon=function(e){return{name:e.name,id:e.id,sprite:e.sprites.front_default,abilities:e.abilities,types:e.types,height:e.height,weight:e.weight}},this.transformPokeList=function(e){return{id:n.extractId(e),name:e.name}},this.pokeList=[],this.pokeStats=[],this.pokeTypesOptions=[],this.pokeTypeList=[],this.pokeTypeID="",this.pokeID="",this.filteredList=[],this.limit=10,this.offset=0,this.filter="",Object(C.n)(this,{filteredList:C.o,pokeList:C.o,pokeID:C.o,pokeTypeID:C.o,pokeStats:C.o,filter:C.o,pokeTypesOptions:C.o,pokeTypeList:C.o,limit:C.o,offset:C.o,onPokemonSelected:C.f,setPokeStats:C.f,setPokeTypeList:C.f,setPokeList:C.f,setPokeTypesOptions:C.f,onTypeSelected:C.f,setLimit:C.f,setOffset:C.f,updateFilter:C.f,setFilteredFullList:C.f,filteredFullList:C.g,filteredTypesList:C.g})}return Object(d.a)(e,[{key:"filteredFullList",get:function(){var e=this,n=new RegExp(this.filter,"i");return this.filteredList.filter((function(t){var r=t.name;return!e.filter||n.test(r)}))}},{key:"filteredTypesList",get:function(){var e=this,n=new RegExp(this.filter,"i");return this.pokeTypeList.filter((function(t){var r=t.pokemon.name;return!e.filter||n.test(r)}))}}]),e}());b.getAllPokemons(1050,0).then((function(e){b.setFilteredFullList(e)}));var x=b,E=(t(20),Object(s.a)((function(e){var n=e.store;Object(r.useEffect)((function(){n.pokeID&&n.getPokemon(n.pokeID).then((function(e){return n.setPokeStats(e)})).catch((function(e){return console.log(e)}))}),[n.pokeID]);var t=n.pokeStats,a=t.name,i=t.abilities,s=t.types,l=t.height,c=t.weight,p=t.sprite,u=function(){if(s)return s.map((function(e){return o.a.createElement("li",{key:e.type.url,className:"pokelist-item"},"- ",e.type.name)}))}(),A=function(){if(i)return i.map((function(e){return o.a.createElement("li",{key:e.ability.url},"- ",e.ability.name)}))}();return o.a.createElement("div",{className:"poke-info"},n.pokeStats.length&&o.a.createElement("span",null,"Loading..."),o.a.createElement("h2",null,a," card"),o.a.createElement("p",null,"Height: ",l),o.a.createElement("p",null,"Weight: ",c),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",null,"Types:",u)),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",null,"Abilities: ",A)),o.a.createElement("img",{src:p,alt:""}))}))),y=Object(s.a)((function(e){var n=e.store,t=function(){var e=Math.floor(160*Math.random()+50);n.getPokemon(e).then((function(e){return n.setPokeStats(e)})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){t();var e=setInterval((function(){return t()}),5e3);return function(){clearInterval(e)}}),[]);var a=n.pokeStats,i=a.name,s=a.abilities,l=a.types,c=a.height,p=a.weight,u=a.sprite,A=function(){if(l)return l.map((function(e){return o.a.createElement("li",{key:e.type.url,className:"pokelist-item"},"- ",e.type.name)}))}(),f=function(){if(s)return s.map((function(e){return o.a.createElement("li",{key:e.ability.url,className:"pokelist-item"},"- ",e.ability.name)}))}();return o.a.createElement("div",{className:"poke-info"},n.pokeStats.length&&o.a.createElement("span",null,"Loading..."),o.a.createElement("div",{className:"wrapper-info"},o.a.createElement("h2",null,i," card"),o.a.createElement("p",null,"Height: ",c),o.a.createElement("p",null,"Weight: ",p),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",null,"Types:",A)),o.a.createElement("br",null),o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",null,"Abilities: ",f)),o.a.createElement("img",{src:u,alt:""})))})),v=(t(55),Object(s.a)((function(e){var n=e.store;Object(r.useEffect)((function(){n.getAllTypes().then((function(e){n.setPokeTypesOptions(e)}))}),[]);var t=function(e){if(e.length&&0!==n.pokeTypeId)return e.map((function(e,n){var t=e.id,r=e.name;return o.a.createElement("option",{value:t.slice(1),key:n},r)}))}(n.pokeTypesOptions);return o.a.createElement("div",{className:"poke-options"},o.a.createElement("span",null,"Type: "),o.a.createElement("select",{onChange:function(e){return n.onTypeSelected(e.target.value)}},t))}))),B=(t(57),Object(s.a)((function(e){var n=e.store;return o.a.createElement("div",{className:"filter-panel"},o.a.createElement("input",{className:"filter-input",value:n.filter,onChange:function(e){return t=e.target.value,void n.updateFilter(t);var t},type:"text",placeholder:"Enter pokemon name"}))}))),w=(t(59),Object(s.a)((function(){var e=x.pokeID?o.a.createElement(E,{store:x}):o.a.createElement(y,{store:x}),n=x.pokeTypeID?o.a.createElement(p,{store:x}):o.a.createElement(c,{store:x});return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement("div",{className:"filter"},o.a.createElement(B,{store:x}),o.a.createElement(v,{store:x})),o.a.createElement("div",{className:"main-menu"},n,e))})));i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null)),document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.ba3e3043.chunk.js.map