(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(7),i=a.n(r),l=(a(12),a(2)),o=a(3),c=a(5),d=a(4),u=(a(13),a(14),a(0)),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handlePriority=function(e,t){0===e?n.setState({level:1}):1===e&&n.setState({level:0}),console.log("todo: ",n.state.level),n.props.handlePriority(t,n.state.level)},n.handleDone=function(e){n.setState({done:!e})},n.state={id:e.id,value:e.value,done:e.done,level:1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t="";t=this.props.level?"fa fa-star loca ":"fa fa-star-o loca ";var a="",n="",r="";return this.state.done?(a="fa fa-check-circle left   ",n="completed ",r="edit decor"):(a="fa fa-circle-thin left ",n="",r="edit"),Object(u.jsx)(s.a.Fragment,{children:Object(u.jsxs)("label",{className:n,for:this.props.id,children:[Object(u.jsx)("input",{className:r,type:"text",value:this.props.value,onChange:function(t){e.props.handleUpdate(t.target.value,e.state.id)},name:"content"}),Object(u.jsx)("i",{onClick:function(){return e.handleDone(e.state.done)},className:a,"aria-hidden":"true"}),Object(u.jsx)("i",{className:t,onClick:function(){return e.handlePriority(e.state.level,e.state.id)},"aria-hidden":"true"}),Object(u.jsx)("i",{onClick:function(){return e.props.handleDelete(e.props.id)},className:"fa fa-times","aria-hidden":"true"})]})})}}]),a}(s.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({taskName:e.target.value})},n.handleKeyPress=function(e){if("Enter"===e.key){if(""===n.state.taskName)return;var t=n.state.ArrayTask.length,a=n.state.taskName,s=n.state.done;n.state.ArrayTask.push({id:t,name:a,done:s,level:0}),n.setState({taskName:""}),e.preventDefault()}},n.addTask=function(){if(""!==n.state.taskName){var e=n.state.ArrayTask.length,t=n.state.taskName,a=n.state.done;n.state.ArrayTask.push({id:e,name:t,done:a,level:0}),n.setState({taskName:"",done:!1})}},n.handleDelete=function(e){var t=n.state.ArrayTask.filter((function(t){return t.id!==e}));n.setState({ArrayTask:t})},n.handlePriority=function(e,t){var a=n.state.ArrayTask.map((function(a){return a.id===e&&(a.level=t),a}));n.setState({ArrayTask:a}),n.handleSortdefault()},n.handleSortdefault=function(){var e=n.state.ArrayTask.sort((function(e,t){return t.level-e.level}));n.setState({ArrayTask:e})},n.handleUpdate=function(e,t){var a=n.state.ArrayTask;a.map((function(a){return a.id===t&&(a.name=e),a})),n.setState({ArrayTask:a})},n.state={taskName:"",level:0,ArrayTask:[],done:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"container mx-auto",children:[Object(u.jsx)("h1",{children:"To-Do List"}),Object(u.jsxs)("form",{className:"add text-center my-4",children:[Object(u.jsx)("input",{type:"text",value:this.state.taskName,className:"form-control m-auto",name:"content",onChange:this.handleChange,onKeyPress:this.handleKeyPress,placeholder:"Add new Task..."}),Object(u.jsx)("i",{className:"fa fa-plus right-input ","aria-hidden":"true",onClick:this.addTask})]}),Object(u.jsxs)("div",{className:"items",children:[this.state.ArrayTask.map((function(t){return Object(u.jsx)(h,{id:t.id,value:t.name,done:t.done,level:t.level,handleDelete:e.handleDelete,handlePriority:e.handlePriority,handleSortdefault:e.handleSortdefault,handleUpdate:e.handleUpdate},t.id)})),Object(u.jsx)("h2",{className:"done","aria-hidden":"true",children:"Completed"}),Object(u.jsx)("h2",{className:"undone","aria-hidden":"true"})]})]})}}]),a}(s.a.Component),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.8a2ab27f.chunk.js.map