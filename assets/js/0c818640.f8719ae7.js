"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[187],{3905:function(e,n,t){t.d(n,{kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),m=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=m(t),u=a,h=p["".concat(l,".").concat(u)]||p[u]||s[u]||o;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var m=2;m<o;m++)r[m]=t[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},475:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return p}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r=["components"],c={id:"bonus",title:"Bonus"},l=void 0,m={unversionedId:"bonus",id:"bonus",isDocsHomePage:!1,title:"Bonus",description:"This section contains additional config that might be helpful beyond the default bindings.",source:"@site/docs/bonus.md",sourceDirName:".",slug:"/bonus",permalink:"/docs/bonus",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/bonus.md",version:"current",frontMatter:{id:"bonus",title:"Bonus"},sidebar:"docs",previous:{title:"Major Mode",permalink:"/docs/major-mode"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},s=[{value:"Quick Window Navigation",id:"quick-window-navigation",children:[]},{value:"Easy List Navigation",id:"easy-list-navigation",children:[]},{value:"Rebind action menu for file-browser",id:"rebind-action-menu-for-file-browser",children:[]},{value:"Execute key combination or vim command",id:"execute-key-combination-or-vim-command",children:[{value:"Execute vim key combination",id:"execute-vim-key-combination",children:[]},{value:"Execute vim command",id:"execute-vim-command",children:[]}]},{value:"Use non-character keys",id:"use-non-character-keys",children:[]},{value:"Display menu with a delay",id:"display-menu-with-a-delay",children:[]},{value:"Style the menu with Customize UI",id:"style-the-menu-with-customize-ui",children:[]}],d={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section contains additional config that might be helpful beyond the default bindings."),(0,o.kt)("h2",{id:"quick-window-navigation"},"Quick Window Navigation"),(0,o.kt)("p",null,"To navigate all the windows including slide and bottom pane with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-h/j/k/l"),",\nyou can merge the following config system's key bindings to your ",(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json")," file."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'This config might be in conflict with "Easy List Navigation" below.'))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "key": "ctrl+h",\n        "command": "workbench.action.navigateLeft",\n        "when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible && !isInDiffEditor"\n    },\n    {\n        "key": "ctrl+j",\n        "command": "workbench.action.navigateDown",\n        "when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"\n    },\n    {\n        "key": "ctrl+k",\n        "command": "workbench.action.navigateUp",\n        "when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "workbench.action.navigateRight",\n        "when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible && !isInDiffEditor"\n    },\n    // Quick Navigation for diff view\n    {\n        "key": "ctrl+h",\n        "command": "workbench.action.compareEditor.focusSecondarySide",\n        "when": "isInDiffEditor && !isInDiffLeftEditor"\n    },\n    {\n        "key": "ctrl+h",\n        "command": "workbench.action.navigateLeft",\n        "when": "isInDiffEditor && isInDiffLeftEditor"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "workbench.action.compareEditor.focusPrimarySide",\n        "when": "isInDiffEditor && isInDiffLeftEditor"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "workbench.action.navigateRight",\n        "when": "isInDiffEditor && !isInDiffLeftEditor"\n    },\n]\n')),(0,o.kt)("h2",{id:"easy-list-navigation"},"Easy List Navigation"),(0,o.kt)("p",null,"Although ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/VSCodeVim/Vim/blob/v1.14.5/package.json#L124-L152"},"VSCode Vim already bound"),"\nthese to ",(0,o.kt)("inlineCode",{parentName:"p"},"h/j/k/l"),", however, they might not work in all lists like in the problem pane.\nYou can merge the following keybindings to ",(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json")," to bind ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+h/l/j/k")," for those situations."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'This config might be in conflict with "Quick Window Navigation" above.'))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "key": "ctrl+h",\n        "command": "list.collapse",\n        "when": "listFocus && !inputFocus"\n    },\n    {\n        "key": "ctrl+l",\n        "command": "list.expand",\n        "when": "listFocus && !inputFocus"\n    },\n    {\n        "key": "ctrl+j",\n        "command": "list.focusDown",\n        "when": "listFocus && !inputFocus"\n    },\n    {\n        "key": "ctrl+k",\n        "command": "list.focusUp",\n        "when": "listFocus && !inputFocus"\n    }\n]\n')),(0,o.kt)("h2",{id:"rebind-action-menu-for-file-browser"},"Rebind action menu for file-browser"),(0,o.kt)("p",null,"File browser, which is bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"<spc> f f")," by default, binds ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+a")," to open an action menu;\nhowever, ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+a")," can be used move the text cursor to the front.\nYour can merge the following example keybindings to ",(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+o")," instead of\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl+a")," in the file browser to open an action menu."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"keybindings.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "key": "ctrl+a",\n        "command": "-file-browser.actions",\n        "when": "inFileBrowser"\n    },\n    {\n        "key": "ctrl+o",\n        "command": "file-browser.actions",\n        "when": "inFileBrowser"\n    }\n]\n')),(0,o.kt)("h2",{id:"execute-key-combination-or-vim-command"},"Execute key combination or vim command"),(0,o.kt)("p",null,"You can execute a vim command (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},":noh"),") or a key combination (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"y y"),") from the which-key menu by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"vim.remap")," command from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/VSCodeVim/Vim"},"VSCodeVim"),".\nThe argument of ",(0,o.kt)("inlineCode",{parentName:"p"},"vim.remap")," is specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},'"args"')," field."),(0,o.kt)("h3",{id:"execute-vim-key-combination"},"Execute vim key combination"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},'"args"')," field contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"after")," key, the vim key combination specified in the value will be executed."),(0,o.kt)("p",null,"The following example json overrides ",(0,o.kt)("inlineCode",{parentName:"p"},"<spc> y")," to execute vim keys of ",(0,o.kt)("inlineCode",{parentName:"p"},"y y"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"vspacecode.bindingOverrides": [\n    {\n        "keys": ["y"],\n        "name": "yank",\n        "type": "command",\n        "command": "vim.remap",\n        "args": {\n            "after": ["y", "y"]\n        }\n    }\n]\n')),(0,o.kt)("h3",{id:"execute-vim-command"},"Execute vim command"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},'"args"')," field contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"commands")," key, the vim and vscode commands specified in the array will be executed."),(0,o.kt)("p",null,"The following example json overrides ",(0,o.kt)("inlineCode",{parentName:"p"},"<spc> c")," to execute the vim command ",(0,o.kt)("inlineCode",{parentName:"p"},":noh")," and the\nvscode command ",(0,o.kt)("inlineCode",{parentName:"p"},"editor.action.codeAction")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "kind": "refactor.extract" }')," as argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"vspacecode.bindingOverrides": [\n    {\n        "keys": ["c"],\n        "name": "Custom cmd",\n        "type": "command",\n        "command": "vim.remap",\n        "args": {\n            "commands":[\n                { "command": ":noh" },\n                {\n                    "command": "editor.action.codeAction",\n                    "args": { "kind": "refactor.extract" }\n                }\n            ]\n        }\n    }\n]\n')),(0,o.kt)("h2",{id:"use-non-character-keys"},"Use non-character keys"),(0,o.kt)("p",null,"See in ",(0,o.kt)("a",{parentName:"p",href:"./whichkey/extra#use-non-character-keys"},"Which Key")),(0,o.kt)("h2",{id:"display-menu-with-a-delay"},"Display menu with a delay"),(0,o.kt)("p",null,"See in ",(0,o.kt)("a",{parentName:"p",href:"./whichkey/extra#display-menu-with-a-delay"},"Which Key")),(0,o.kt)("h2",{id:"style-the-menu-with-customize-ui"},"Style the menu with Customize UI"),(0,o.kt)("p",null,"See in ",(0,o.kt)("a",{parentName:"p",href:"./whichkey/extra#style-the-menu-with-customize-ui"},"Which Key")))}p.isMDXComponent=!0}}]);