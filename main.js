(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},365:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body {\n    background-color: rgb(47,79,79);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    display: grid;\n    grid-template-rows: 80px auto;\n    color: rgb(225, 225, 225);\n    height: 100vh;\n    margin: 0;\n}\n\n#header {\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n#divCurrentProject {\n    display: grid;\n    width: 250px;\n    grid-template-columns: auto, 1fr;\n}\n\n.projectTitle {\n    grid-row: 1;\n}\n\n#header button {\n    height: 1.5rem;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 200px auto;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    background-color: rgb(53, 88, 102);\n    padding-top: 20px;\n    gap: 20px;\n}\n\n#sidebar {\n    padding: 0 25px;\n}\n\n#sidebar > h2 {\n    margin: 0;\n    text-align: center;\n}\n\n.projectList {\n    margin-top: 15px;\n    display: grid;\n    gap: 15px;\n    text-align: center;\n}\n\n.projectContainer {\n    padding: 5px;\n}\n\n.projectContainer:hover {\n    background-color: rgb(67,99,99);\n    cursor: pointer;\n}\n\n.divCreateProject {\n    color: rgb(21, 221, 221);\n}\n\n.divCreateProject:hover {\n    background-color: rgb(3, 80, 10);\n}\n\n#taskListContainer {\n    display: grid;\n    justify-content: center;\n    justify-self: center;\n    padding: 8px;\n    background-color: rgb(47,79,79);\n    width: 500px;\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n\n#inputContainer{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n}\n\n#inputLeft {\n    display: grid;\n    grid-template-columns: auto;\n}\n\n#taskInput {\n    background-color: rgb(47,79,79);\n    border: solid 1px rgb(67,99,99);\n    color: white;\n    transition:\n        border-color 150ms,\n        background-color 150ms;\n}\n\n#taskInput:hover {\n    border-color: rgb(117,149,149);\n}\n\n#taskInput:focus {\n    outline:none;\n    background-color: rgb(67,99,99);\n    border-color: rgb(117,149,149);\n}\n\n.listContainer {\n    display:grid;\n    gap: 3px;\n}\n\n#toggleComplete {\n    font-size: 0.8rem;\n    color: rgb(137,169,169);\n    margin-top: -10px;\n}\n\n#listContainerComplete {\n    margin-top: -10px;\n}\n\n.taskContainer {\n    display: flex;\n    align-items: center;\n    padding-right: 5px;\n}\n\n.taskContainer:hover {\n    background-color: rgb(67,99,99);\n}\n\n.taskContainer > label {\n    flex-grow: 1;\n}\n\n.checked > label {\n    text-decoration: line-through;\n    color: rgb(117,149,149);\n}\n\n.taskContainer>img:first-of-type {\n    margin-right: 3px;\n}\n\n.taskImg {\n    width: 18px;\n    height: 18px;\n}\n\n.taskImg:hover {\n    cursor: pointer;\n}",""]);const c=i},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),l=n(56),d=n.n(l),p=n(540),u=n.n(p),m=n(113),f=n.n(m),g=n(365),h={};function v(){const e=localStorage.getItem("userData");return JSON.parse(e)}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;const C=function(){let e=[];function t(t,n="Default",r=!1){const o={};o.title=t,o.project=n,o.completed=r,o.toggle=function(){o.completed=!1===o.completed},e.push(o)}return v().forEach((e=>{t(e.title,e.project,e.completed)})),{createTask:t,getTasks:function(){return[...e]},deleteTask:function(t){e.splice(t,1)}}}();const b=n.p+"7dd3ee9ee6ab72553c4b.svg",y=n.p+"5c385765932226a472d9.svg";function k(){const e=document.querySelector("#taskInput");if(""===e.value)return alert("Task value cannot be blank"),void e.focus();let t=document.querySelector("#currentProject").textContent;"All Tasks"===t&&(t="Default"),C.createTask(e.value,t),e.value="",T()}function x(e){document.querySelector("#currentProject").textContent=e,T()}function E(e,t){const n=document.querySelector("#listContainerIncomplete"),r=document.querySelector("#listContainerComplete"),o=document.createElement("div");o.classList="taskContainer";const a=document.createElement("input"),i=`task${t}`;a.name=i,a.id=i,a.type="checkbox",a.setAttribute("taskIndex",t);const c=document.createElement("label");c.setAttribute("for",i),c.textContent=e.title,e.completed&&(o.classList.toggle("checked"),a.checked=e.completed);const s=document.createElement("img");s.src=b,s.classList="taskImg",s.addEventListener("click",(()=>{confirm("Delete task? (THIS IS PERMANENT)")&&(C.deleteTask(a.getAttribute("taskIndex")),T())}));const l=document.createElement("img");l.src=y,l.classList="taskImg",a.addEventListener("change",(()=>{C.getTasks()[a.getAttribute("taskIndex")].toggle(),T()})),o.appendChild(a),o.appendChild(c),o.appendChild(l),o.appendChild(s),e.completed?r.appendChild(o):n.appendChild(o)}function T(){const e=document.querySelector("#listContainerIncomplete");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.querySelector("#listContainerComplete");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.querySelector("#currentProject").textContent,r=C.getTasks();let o=[];o="All Tasks"===n?r:r.filter((e=>e.project===n));const a=o.filter((e=>!0===e.completed));o.filter((e=>!1===e.completed)).forEach((e=>{E(e,r.indexOf(e))})),a.forEach((e=>{E(e,r.indexOf(e))})),function(){const e=C.getTasks(),t=JSON.stringify(e);localStorage.setItem("userData",t)}()}!function(){const e=document.querySelector("#taskListContainer"),t=document.createElement("div");t.id="inputContainer";const n=document.createElement("input");n.type="text",n.name="taskInput",n.id="taskInput",n.placeholder="Task Name",n.addEventListener("keydown",(e=>{"Enter"===e.key&&k()}));const r=document.createElement("button");r.id="saveTask",r.textContent="Save",r.addEventListener("click",(()=>{k()}));const o=document.createElement("div"),a=document.createElement("div");o.id="inputLeft",o.appendChild(n),a.appendChild(r),t.appendChild(o),t.appendChild(a);const i=document.createElement("div");i.id="listContainerIncomplete",i.classList="listContainer";const c=document.createElement("div");c.id="listContainerComplete",c.classList="listContainer";const s=document.createElement("div");s.id="toggleComplete",s.textContent="Hide Completed Tasks",s.addEventListener("click",(()=>{"none"===c.style.display?(c.style.display="block",s.textContent="Hide Completed Tasks"):(c.style.display="none",s.textContent="Show Completed Tasks")})),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(c)}(),x("Default"),v(),T(),function e(){const t=document.querySelector("#projectList");for(;t.firstChild;)t.removeChild(t.firstChild);const n=C.getTasks(),r=[];n.forEach((e=>{r.push(e.project)}));const o=[...new Set(r)];o.push("Create Project"),o.forEach((n=>{if(0===o.indexOf(n)){const e=document.createElement("div");e.classList="projectContainer",e.textContent="All Tasks",e.addEventListener("click",(()=>{x(e.textContent)})),t.appendChild(e)}const r=document.createElement("div");r.classList="projectContainer",r.textContent=n,"Create Project"===n?(r.addEventListener("click",(()=>{!function(){const t=document.querySelector("#currentProject");let n=!1,r="";for(;!n;)r=prompt("Please enter new project name: "),"Create Project"!=r&&(n=!0);t.textContent=r,C.createTask("New project task!",r),T(),e()}()})),r.classList.add("divCreateProject")):r.addEventListener("click",(()=>{x(r.textContent)})),t.appendChild(r)}))}()})();