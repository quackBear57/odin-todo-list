(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},365:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"body {\n    --blueShade1: rgb(53, 88, 102);\n    --greenShade1: rgb(47,79,79);\n    --greenShade2: rgb(67,99,99);\n    --greenShade3: rgb(117,149,149);\n    --lightGray: rgb(137,169,169);\n    \n    \n    background-color: var(--greenShade1);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    display: grid;\n    grid-template-rows: 80px auto;\n    color: rgb(225, 225, 225);\n    height: 100vh;\n    margin: 0;\n}\n\n#header {\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\n#divCurrentProject {\n    display: grid;\n    width: 250px;\n    grid-template-columns: auto, 1fr;\n}\n\n.projectTitle {\n    grid-row: 1;\n}\n\n#header button {\n    height: 1.5rem;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 200px auto;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    background-color: rgb(53, 88, 102);\n    padding-top: 20px;\n    gap: 20px;\n}\n\n#sidebar {\n    padding: 0 25px;\n}\n\n#sidebar > h2 {\n    margin: 0;\n    text-align: center;\n}\n\n.projectList {\n    margin-top: 15px;\n    display: grid;\n    gap: 15px;\n    text-align: center;\n}\n\n.projectContainer {\n    padding: 5px;\n}\n\n.projectContainer:hover {\n    background-color: var(--greenShade2);\n    cursor: pointer;\n}\n\n.divCreateProject {\n    color: rgb(21, 221, 221);\n}\n\n.divCreateProject:hover {\n    background-color: rgb(3, 80, 10);\n}\n\n#taskListContainer {\n    display: grid;\n    justify-content: center;\n    justify-self: center;\n    padding: 8px;\n    background-color: var(--greenShade1);\n    width: 500px;\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n\n#inputContainer{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 10px;\n}\n\n#inputLeft {\n    display: grid;\n    grid-template-columns: auto;\n}\n\n.taskInput {\n    background-color: var(--greenShade1);\n    border: solid 1px var(--greenShade2);\n    color: white;\n    transition:\n        border-color 150ms,\n        background-color 150ms;\n    padding-left: 5px;\n    border-radius: 6px;\n}\n\n.taskInput:hover {\n    border-color: var(--greenShade3);\n}\n\n.taskInput:focus {\n    outline:none;\n    background-color: var(--greenShade2);\n    border-color: var(--greenShade3);\n}\n\n.listContainer {\n    display:grid;\n    gap: 3px;\n}\n\n#toggleComplete {\n    font-size: 0.8rem;\n    color: var(--lightGray);\n    margin-top: -10px;\n}\n\n#listContainerComplete {\n    margin-top: -10px;\n}\n\n.taskContainer {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding-right: 5px;\n}\n\n.taskContainer:hover {\n    background-color: var(--greenShade2);\n}\n\n.taskContainer > label {\n    flex-grow: 1;\n}\n\n.checked > label {\n    text-decoration: line-through;\n    color: var(--greenShade3);\n}\n\n.taskContainer > img {\n    margin-right: 3px;\n}\n\n.taskContainer > img:last-of-type {\n    margin-right: 0;\n}\n.taskContainer > img:first-of-type {\n    margin-right: 0;\n}\n\n.taskImg {\n    width: 18px;\n    height: 18px;\n}\n\n.taskImg:hover {\n    cursor: pointer;\n}\n\n.divTaskIndex {\n    font-size: 0.7rem;\n    margin: 0 1px;\n    padding: 1px 6px;\n    border-radius: 6px;\n    color: var(--lightGray);\n    background-color: var(--greenShade2);\n}\n\n.flexBreak {\n    height: 0;\n    flex-basis: 100%;\n}\n\n.editDiv {\n    display: flex;\n    flex-grow: 1;\n    padding-right: 45px;\n    padding-left: 20px;\n    margin: 5px 0;\n    gap: 10px;\n}\n\n.editInputContainer {\n    flex-grow: 1;\n    display: flex;\n}\n\n.editInputContainer > .taskInput {\n    flex-grow: 1;\n}\n\n.editSaveButton {\n    color: var(--greenShade3);\n    border: 1px solid var(--greenShade3);\n    background-color: var(--greenShade1);\n    border-radius: 6px;\n}\n\n.editSaveButton:hover {\n    cursor: pointer;\n    border-width: 2px;\n    margin: -1px;\n    background-color: var(--greenShade2);\n}",""]);const c=i},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),s=n.n(c),d=n(56),l=n.n(d),p=n(540),u=n.n(p),m=n(113),g=n.n(m),f=n(365),h={};function v(){const e=localStorage.getItem("userData");let t=JSON.parse(e);return null===t&&(t=[]),t}h.styleTagTransform=g(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;const k=function(){let e=[];function t(t,n="Default",r=!1){const a={};a.title=t,a.project=n,a.completed=r,a.toggle=function(){a.completed=!1===a.completed},e.push(a)}return v().forEach((e=>{t(e.title,e.project,e.completed)})),{createTask:t,getTasks:function(){return[...e]},deleteTask:function(t){e.splice(t,1)},editTask:function(t,n,r,a){void 0===n||(e[t].title=n),void 0===r||(e[t].project=r),void 0===a||(e[t].completed=a)},bumpTask:function(t,n){const r=e.length-1,a=parseInt(t),o=parseInt(n);0===a&&-1===o||a===r&&o===r+1||e.splice(o,0,e.splice(a,1)[0])}}}();const C=n.p+"7dd3ee9ee6ab72553c4b.svg",x=n.p+"5c385765932226a472d9.svg",b=n.p+"92679207e27afd8a1748.svg",y=n.p+"6393fe40a9b70b44a724.svg";function E(){const e=document.querySelector("#taskInput");if(""===e.value)return alert("Task value cannot be blank"),void e.focus();let t=document.querySelector("#currentProject").textContent;"All Tasks"===t&&(t="Default"),k.createTask(e.value,t),e.value="",T()}function S(e){document.querySelector("#currentProject").textContent=e,T()}function I(e,t){const n=document.querySelector("#listContainerIncomplete"),r=document.querySelector("#listContainerComplete"),a=document.createElement("div");a.classList="taskContainer";const o=document.createElement("input"),i=`task${t}`;o.name=i,o.id=i,o.type="checkbox",o.setAttribute("taskIndex",t);const c=document.createElement("label");c.setAttribute("for",i),c.textContent=e.title,e.completed&&(a.classList.toggle("checked"),o.checked=e.completed);const s=document.createElement("img");s.src=C,s.classList="taskImg",s.addEventListener("click",(()=>{confirm("Delete task? (THIS IS PERMANENT)")&&(k.deleteTask(o.getAttribute("taskIndex")),T())}));const d=document.createElement("img");d.src=x,d.classList="taskImg",d.addEventListener("click",(()=>{!function(e){const t=e,n=document.querySelector(`#task${t}`).parentElement;if(n.lastChild.classList.contains("editDiv"))n.lastChild.remove();else{const e=document.createElement("div");e.classList="editDiv";const r=document.createElement("div");r.className="editInputContainer";const a=document.createElement("div");a.classList="flexBreak";const o=document.createElement("input");o.placeholder="Edit task name",o.classList="taskInput",o.addEventListener("keydown",(e=>{"Enter"===e.key&&(""===o.value?o.placeholder="Edit task name - cannot be blank":(k.editTask(t,o.value),T()))}));const i=document.createElement("button");i.classList="editSaveButton",i.addEventListener("click",(()=>{""===o.value?o.placeholder="Edit task name - cannot be blank":(k.editTask(t,o.value),T())})),i.textContent="Save",r.appendChild(o),e.appendChild(r),e.appendChild(i),n.appendChild(a),n.appendChild(e),o.focus()}}(t)}));const l=document.createElement("img");l.src=b,l.classList="taskImg",l.addEventListener("click",(()=>{k.bumpTask(o.getAttribute("taskIndex"),parseInt(o.getAttribute("taskIndex"))-1),T()}));const p=document.createElement("img");p.src=y,p.classList="taskImg",p.addEventListener("click",(()=>{k.bumpTask(o.getAttribute("taskIndex"),parseInt(o.getAttribute("taskIndex"))+1),T()})),o.addEventListener("change",(()=>{k.getTasks()[o.getAttribute("taskIndex")].toggle(),T()}));const u=document.createElement("div");u.classList="divTaskIndex",u.textContent=t,u.addEventListener("dblclick",(()=>{const e=parseInt(k.getTasks().length)-1,t=parseInt(prompt(`Enter new index 0 - ${e}:`));t>e|t<0?alert("Input invalid"):k.bumpTask(parseInt(o.getAttribute("taskIndex")),t),T()})),a.appendChild(o),a.appendChild(c),a.appendChild(l),a.appendChild(u),a.appendChild(p),a.appendChild(d),a.appendChild(s),e.completed?r.appendChild(a):n.appendChild(a)}function T(){const e=document.querySelector("#listContainerIncomplete");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.querySelector("#listContainerComplete");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.querySelector("#currentProject").textContent,r=k.getTasks();let a=[];a="All Tasks"===n?r:r.filter((e=>e.project===n));const o=a.filter((e=>!0===e.completed));a.filter((e=>!1===e.completed)).forEach((e=>{I(e,r.indexOf(e))})),o.forEach((e=>{I(e,r.indexOf(e))})),function(){const e=k.getTasks(),t=JSON.stringify(e);localStorage.setItem("userData",t)}()}!function(){const e=document.querySelector("#taskListContainer"),t=document.createElement("div");t.id="inputContainer";const n=document.createElement("input");n.type="text",n.name="taskInput",n.id="taskInput",n.classList="taskInput",n.placeholder="Task Name",n.addEventListener("keydown",(e=>{"Enter"===e.key&&E()}));const r=document.createElement("button");r.id="saveTask",r.textContent="Save",r.addEventListener("click",(()=>{E()}));const a=document.createElement("div"),o=document.createElement("div");a.id="inputLeft",a.appendChild(n),o.appendChild(r),t.appendChild(a),t.appendChild(o);const i=document.createElement("div");i.id="listContainerIncomplete",i.classList="listContainer";const c=document.createElement("div");c.id="listContainerComplete",c.classList="listContainer";const s=document.createElement("div");s.id="toggleComplete",s.textContent="Hide Completed Tasks",s.addEventListener("click",(()=>{"none"===c.style.display?(c.style.display="block",s.textContent="Hide Completed Tasks"):(c.style.display="none",s.textContent="Show Completed Tasks")})),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(c)}(),S("Default"),v(),T(),function e(){const t=document.querySelector("#projectList");for(;t.firstChild;)t.removeChild(t.firstChild);const n=k.getTasks(),r=[];n.forEach((e=>{r.push(e.project)}));const a=[...new Set(r)];a.push("Create Project"),a.forEach((n=>{if(0===a.indexOf(n)){const e=document.createElement("div");e.classList="projectContainer",e.textContent="All Tasks",e.addEventListener("click",(()=>{S(e.textContent)})),t.appendChild(e)}const r=document.createElement("div");r.classList="projectContainer",r.textContent=n,"Create Project"===n?(r.addEventListener("click",(()=>{!function(){const t=document.querySelector("#currentProject");let n=!1,r="";for(;!n;)r=prompt("Please enter new project name: "),"Create Project"!=r&&(n=!0);t.textContent=r,k.createTask("New project task!",r),T(),e()}()})),r.classList.add("divCreateProject")):r.addEventListener("click",(()=>{S(r.textContent)})),t.appendChild(r)}))}()})();