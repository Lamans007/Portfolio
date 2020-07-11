(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(25),r=a.n(s),o=(a(32),a(13)),l=a(2),c=a(3),u=a(14),h=a(15),d=a(18),m=a(16),p={d:{color:"#fff"}},f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).adjacencyList={},n.values=[],n.handleAddVertex=function(){n.addVertex(n.props.num)},n.handleAddEdge=function(){var e=n.props,t=e.start,a=e.finish,i=e.distance;n.addVertex(t),n.addVertex(a),n.addEdge(t,a,i),console.log(n.adjacencyList)},n.handleEnqueue=function(){},n.handleDijkstra=function(){n.Dijkstra(n.state.start,n.state.finish)},n.handleChangeStartDijskstra=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},{startD:e.target.value}))},n.handleChangeFinishDijkstra=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},{finishD:e.target.value}))},n.handleSubmitDijkstra=function(e){var t=n.state,a=t.startD,i=t.finishD;a&&i&&n.Dijkstra(a,i),e.preventDefault()},n.state={PATH:"",vertex:"",edge:"",start:"",finish:""},n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e){e.distance!==this.props.distance&&this.handleAddEdge()}},{key:"enqueue",value:function(e,t){this.values.push({val:e,priority:t}),this.values.sort((function(e,t){return e.priority-t.priority}))}},{key:"addVertex",value:function(e){this.adjacencyList[e]||(this.adjacencyList[e]=[],console.log(this.adjacencyList))}},{key:"addEdge",value:function(e,t,a){this.adjacencyList[e].push({node:t,weight:a}),this.adjacencyList[t].push({node:e,weight:a})}},{key:"dequeue",value:function(){return this.values.shift()}},{key:"Dijkstra",value:function(e,t){var a,n={},i={},s=[];for(var r in this.adjacencyList)r===e?(n[r]=0,this.enqueue(r,0)):(n[r]=1/0,this.enqueue(r,1/0)),i[r]=null;for(;this.values.length;){if((a=this.dequeue().val)===t){for(;i[a];)s.push(a),a=i[a],console.log(s);break}if(a||n[a]!==1/0)for(var o in this.adjacencyList[a]){var l=this.adjacencyList[a][o],u=n[a]+l.weight,h=l.node;u<n[h]&&(n[h]=u,i[h]=a,this.enqueue(h,u))}}var d=s.concat(a).reverse();this.setState(Object(c.a)(Object(c.a)({},this.state),{},{PATH:d}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmitDijkstra},i.a.createElement("p",{style:p.d},"Type in starting and finishing point "),i.a.createElement("input",{type:"text",value:this.state.startD,onChange:this.handleChangeStartDijskstra}),i.a.createElement("input",{type:"text",value:this.state.finishD,onChange:this.handleChangeFinishDijkstra}),i.a.createElement("input",{type:"submit",value:"Submit"}),i.a.createElement("h4",{style:p.d},this.state.PATH&&"The shortest path is: ".concat(this.state.PATH))))}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleMouseDown=function(e){n.setXY(n.refs.canvas,e)},n.handleSubmit=function(e){var t=n.state,a=t.start,i=t.finish;a&&i&&n.drawRoad(n.state.start,n.state.finish),e.preventDefault()},n.handleChangeStart=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},{start:e.target.value}))},n.handleChangeFinish=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},{finish:e.target.value}))},n.state={x:"",y:"",num:0,start:"",finish:"",points:[],distance:""},n}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.num;e.points.length<t&&this.plotCity()}},{key:"drawRoad",value:function(e,t){var a=this.state.points[e-1].x,n=this.state.points[e-1].y,i=this.state.points[t-1].x,s=this.state.points[t-1].y,r=Math.round(Math.sqrt(Math.pow(i-a,2)+Math.pow(s-n,2))),o=(a+i)/2,l=(n+s)/2,u=this.refs.canvas.getContext("2d");u.beginPath(),u.moveTo(a,n),u.lineTo(i,s),u.stroke(),u.font="12px Courier",u.fillStyle="red",u.fill(),u.fillText(r+"km",o,l),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{distance:r}))}},{key:"plotCity",value:function(){var e=this.state,t=e.x,a=e.y,n=e.num,i=e.points,s=this.refs.canvas.getContext("2d");s.beginPath(),s.arc(t,a,3,0,2*Math.PI),s.font="15px Courier",s.fillStyle="blue",s.fill(),s.fillText("City"+n,t,a),console.log(i[i.length-1]),i.push({x:t,y:a})}},{key:"setXY",value:function(e,t){var a=e.getBoundingClientRect();this.setState(Object(c.a)(Object(c.a)({},this.state),{},{x:t.clientX-a.left,y:t.clientY-a.top,num:this.state.num+1}))}},{key:"clearState",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{x:"",y:"",start:"",finish:""}))}},{key:"render",value:function(){var e=this.state,t=e.num,a=e.start,n=e.finish,s=e.distance;return i.a.createElement("div",null,i.a.createElement("h3",{style:p.d},"Travelling Salesman Graph"),i.a.createElement("p",{style:p.d},"Click to add cities"),i.a.createElement("canvas",{onMouseDown:this.handleMouseDown,ref:"canvas",style:{border:"2px solid black",backgroundColor:"#fff"},width:450,height:450},"Travelling salesman graph"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("p",{style:p.d},"Type in city numbers to connect them "),i.a.createElement("input",{type:"text",value:this.state.start,onChange:this.handleChangeStart}),i.a.createElement("input",{type:"text",value:this.state.finish,onChange:this.handleChangeFinish}),i.a.createElement("input",{type:"submit",value:"Submit"}),i.a.createElement(f,{num:t,start:a,finish:n,distance:s})))}}]),a}(n.Component),b=a(17),g={navbar:{display:"flex",flexDirection:"column",border:"none",overflow:"visible",paddingLeft:"auto",marginTop:"55px",minHeight:"90px",width:"100%",flexBasis:"max-content",backgroundColor:"#f5fafa",fontSize:"1rem",alignSelf:"stretch",alignContent:"flex-start",justifyContent:"stretch",whiteSpace:"wrap"},sp:{fontSize:"2rem"}};var x=function(e){return i.a.createElement("div",{style:g.navbar},i.a.createElement("p",null,"Hi there "))},j=a(9),y=function(e){return"@media (min-width: ".concat({xl:"1601px"}[e],")")},E=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},k=a(11),O=Object(k.b)({sideBar:Object(j.a)({display:"flex",flexDirection:"column",flex:"0 0 200px",flexWrap:"wrap",height:"700px",alignItems:"center",backgroundColor:"#f1f1f1"},E("sm"),{flex:"0 0 100%"}),navLink:{textDecoration:"none"}});var w=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=(t[0],t[1],O());return i.a.createElement("aside",{className:a.sideBar},i.a.createElement("p",null,"My projects"),i.a.createElement(o.b,{to:"/Portfolio/project1",className:a.navLink},"Dijkstra's Algorithm Graph"))},S=Object(k.b)((function(e){return{MainPage:Object(j.a)({boxSizing:"border-box",display:"flex",overflowY:"visible",flexWrap:"wrap",backgroundColor:e.color,fontSize:"1.5rem",height:"700px",textIndent:"50px",padding:"0 25px",width:"100%",paddingTop:"20px",minHeight:"600px"},E("sm"),{display:"none"}),sp:{fontSize:"2rem"}}}));var C,D=function(e){var t=Object(k.c)(),a=S(Object(c.a)(Object(c.a)({},e),{},{theme:t}));return i.a.createElement("article",{className:a.MainPage},i.a.createElement("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi veritatis asperiores earum iure. Similique unde voluptates soluta. Repellat impedit ducimus at, quod sapiente sint et rem magnam dolore veritatis maxime commodi aliquam consequatur quisquam repellendus expedita quam ullam? Accusamus, voluptate. Totam, provident quidem commodi repellat nisi quasi nostrum ipsam neque nam iusto ipsa eveniet placeat dolorem dolore non, nobis cumque exercitationem numquam temporibus molestiae quod ratione deleniti sint libero. Odio nobis voluptate dolor amet deleniti corrupti aut a exercitationem impedit?"))},q=Object(k.b)({app:(C={boder:"2px solid black",position:"absolute",display:"flex",overflowY:"",flexDirection:"column",flex:"1 5 95%",boxSizing:"content-box",backgroundColor:"inherit",height:"100%",justifyContent:"center"},Object(j.a)(C,y("xl"),{width:"60%"}),Object(j.a)(C,E("xl"),{width:"70%"}),Object(j.a)(C,E("lg"),{width:"80%"}),Object(j.a)(C,E("md"),{width:"90%"}),Object(j.a)(C,E("sm"),{width:"96%"}),C)}),T={color:"#fafad2"};var L=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),a=t[0],s=t[1],r=q();return i.a.createElement("div",{className:r.app},i.a.createElement(x,null),i.a.createElement("main",{style:q.main},i.a.createElement(w,null),i.a.createElement(k.a,{theme:T},a&&i.a.createElement(D,{onClick:function(){return s(!a)}}))))};function P(){return i.a.createElement("div",null,i.a.createElement("p",null,"Something went wrong..."))}var M=function(){return i.a.createElement(o.a,null,i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/Portfolio/Project1",component:v}),i.a.createElement(l.a,{exact:!0,path:"/Portfolio/",component:L}),i.a.createElement(l.a,{component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e127cca8.chunk.js.map