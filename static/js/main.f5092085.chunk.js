(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(t,e,n){t.exports=n(504)},243:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},391:function(t,e){},394:function(t,e){},396:function(t,e){},472:function(t,e){},503:function(t,e,n){},504:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(42),o=n.n(c),i=(n(242),n(243),n(16)),s=n.n(i),u=n(28),l=n(33),h=n(34),f=n(91),p=n(89),m=n(92),d=n(69),b=(n(246),function(t){var e=t.children;return r.a.createElement("div",{className:"PostWrapper"},e)}),v=(n(247),function(){return r.a.createElement("div",{className:"Header"},"POSTS")}),g=n(508),w=(n(248),function(t){var e=t.sponsor,n=t.body,a=t.imgUrl;return r.a.createElement("div",{className:"EventPost"},r.a.createElement("h1",null,e," x EOS Knights"),r.a.createElement("p",null,n),r.a.createElement("p",null,r.a.createElement("img",{src:a,className:"itemIcon"})),r.a.createElement(g.a,{color:"teal",content:"Next",icon:"right arrow",labelPosition:"right",className:"Navigate-right-button"}))}),k=n(227),O=n.n(k),j={sponsor:"EOS Authority",message:"Get Authority Sword!",network:{blockchain:"eos",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",host:"api.eoseoul.io",port:443,protocol:"https"}},y=function(){function t(e){Object(l.a)(this,t)}return Object(h.a)(t,[{key:"getTableUrl",value:function(){var t=j.network,e=t.protocol,n=t.host,a=t.port;return"".concat(e,"://").concat(n,":").concat(a,"/v1/chain/get_table_rows")}},{key:"readTable",value:function(){var t=Object(u.a)(s.a.mark(function t(e,n){var a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.getTableUrl(),r={scope:e,code:e,table:n,json:!0},t.next=4,O.a.post(a,r,{headers:{"content-type":"text/plain"}});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),E=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(f.a)(this,Object(p.a)(e).call(this))).fetchItemEventInfo=Object(u.a)(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({fetching:!0}),t.next=3,n.chain.readTable("eosknightsio","itemevt");case 3:e=t.sent,console.log(e.data),n.setState({info:e.data.rows[0],fetching:!1,imgUrl:"https://eosknights.io/img/resource/origin/item/item_".concat(e.data.rows[0].code,".png")});case 6:case"end":return t.stop()}},t)})),n.state={fetching:!1,info:{id:0,code:0,from:0,duration:0},sponsor:j.sponsor,body:j.message,imgUrl:""},n.chain=new y(j.network),n}return Object(m.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.fetchItemEventInfo()}},{key:"render",value:function(){var t=this.state,e=(t.fetching,t.body),n=(t.info,t.imgUrl),a=t.sponsor;return r.a.createElement(b,null,r.a.createElement(w,{body:e,sponsor:a,imgUrl:n}))}}]),e}(a.Component),x=n(29),C=n.n(x),N=n(228),I=n.n(N),S=n(229),U=n.n(S),A=function(){function t(e,n){Object(l.a)(this,t),this.appName=n,C.a.plugins(new I.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.net=C.a.Network.fromJson(e),this.auth=null}return Object(h.a)(t,[{key:"connect",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e,n=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.net,t.next=3,C.a.connect(this.appName,{network:e});case 3:if(this.isConnected=t.sent,this.isConnected){t.next=6;break}return t.abrupt("return",console.error("connection failed"));case 6:return this.eosApi=C.a.eos(this.net,U.a),t.next=9,C.a.login().then(function(t){if(!t)return console.error("no identity");n.account=C.a.account("eos"),n.auth={authorization:["".concat(n.account.name,"@").concat(n.account.authority)]}});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadContract",value:function(){var t=Object(u.a)(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.eosApi.contract(e);case 2:this.contract=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),T=(n(503),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(f.a)(this,Object(p.a)(e).call(this,t))).state={},n.scatter=new A(j.network,"EK Event"),n.onClick=n.onClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(e,t),Object(h.a)(e,[{key:"onClick",value:function(){var t=Object(u.a)(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.scatter,t.next=3,e.connect();case 3:return t.next=5,e.loadContract("eosknightsio");case 5:return t.next=7,e.contract.signup(e.account.name,e.auth);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(E,null))}}]),e}(a.Component));o.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.f5092085.chunk.js.map