(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,n){t.exports=n(262)},135:function(t,e,n){},138:function(t,e,n){},147:function(t,e){},150:function(t,e){},152:function(t,e){},231:function(t,e){},262:function(t,e,n){"use strict";n.r(e);var c=n(12),r=n.n(c),a=n(125),i=n.n(a),o=(n(135),n(4)),s=n.n(o),u=n(26),h=n(48),p=n(49),f=n(128),l=n(126),d=n(129),k=n(39),b=(n(138),n(38)),v=n.n(b),w=n(127),m=n.n(w),y=n(80),O=n.n(y),x=function(){function t(e,n){Object(h.a)(this,t),this.appName=n,v.a.plugins(new m.a),this.scatter=v.a.scatter,this.network=e,this.currentAccount=null,this.reqFields={accounts:[e]},this.eosOptions={expireInSeconds:60},this.eosApi=this.scatter.eos(e,O.a,this.eosOptions),this.isConnected=!1}return Object(p.a)(t,[{key:"connect",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scatter.connect(this.appName).then(function(t){e.isConnected=t,console.log("connected:"+t)});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getIdentity",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConnected){t.next=5;break}return t.next=3,this.scatter.getIdentity(this.reqFields).then(function(){e.currentAccount=e.scatter.identity.accounts.find(function(t){return"eos"===t.blockchain})});case 3:t.next=6;break;case 5:console.log("check connection first!");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"sendTx",value:function(){var t=Object(u.a)(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.length){t.next=3;break}return t.next=3,this.eosApi.transact({actions:e},{blocksBehind:3,expireSeconds:30});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateNetwork",value:function(t){this.eosApi=this.scatter.eos(t,O.a,this.eosOptions)}},{key:"makeAction",value:function(t,e,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.currentAccount.authority;return{account:t,name:e,authorization:[{actor:this.currentAccount.name,permission:c}],data:n}}}]),t}(),j=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(f.a)(this,Object(l.a)(e).call(this,t))).network={blockchain:"eos",protocol:"https",host:"api.eoseoul.io",port:443,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"},n.scatter=new x(n.network,"EOS Knight Event"),n.onClick=n.onClick.bind(Object(k.a)(Object(k.a)(n))),n}return Object(d.a)(e,t),Object(p.a)(e,[{key:"onClick",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scatter.connect();case 2:return t.next=4,this.scatter.getIdentity();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("button",{onClick:this.onClick},"Test")))}}]),e}(c.Component);i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.27425c49.chunk.js.map