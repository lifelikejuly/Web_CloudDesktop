(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{292:function(e,t,i){var a=i(445);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(44).default)("2f5f2e86",a,!1,{sourceMap:!1})},444:function(e,t,i){"use strict";i(292)},445:function(e,t,i){(e.exports=i(43)(!1)).push([e.i,".base-menu-child-cell{border:2px solid grey;border-radius:5px;padding:60% 2px 2px}.base-menu-child-box,.base-menu-child-cell{margin-top:20%;margin-left:20%;margin-right:20%;text-align:center;width:60%;height:0}.base-menu-child-box{background-color:#404040;padding-top:60%}",""])},498:function(e,t,i){"use strict";i.r(t);i(45);var a={layout:"app_layout",data:function(){return{mediaStreamTrack:{}}},beforeDestroy:function(){this.mediaStreamTrack&&this.mediaStreamTrack.stop()},mounted:function(){var e=this;this.canvasBox=document.getElementById("videoBg"),this.canvasSize=document.getElementById("videoSize");var t=document.getElementById("video");this.canvasSize.style.paddingTop=0,this.canvasSize.style.height=this.canvasSize.clientWidth+"px",this.canvasBox.style.paddingTop=0,this.canvasBox.style.height=this.canvasSize.clientWidth+"px",t.height=this.canvasSize.clientWidth,t.width=this.canvasSize.clientWidth;if(navigator.mediaDevices.getUserMedia)(i=navigator.mediaDevices.getUserMedia({video:!0})).then((function(i){try{t.srcObject=i,e.mediaStreamTrack="function"==typeof i.stop?i:i.getTracks()[0]}catch(e){console.log(" .... "+e)}t.onloadedmetadata=function(e){t.play()}})),i.catch((function(e){console.log(e.name)}));else if(navigator.mediaDevices.webkitGetUserMedia){var i;(i=navigator.mediaDevices.webkitGetUserMedia({video:!0})).then((function(i){t.src=window.URL.createObjectURL(i),t.onloadedmetadata=function(e){t.play()},e.mediaStreamTrack="function"==typeof i.stop?i:i.getTracks()[0]})),i.catch((function(e){console.log(e.name)}))}}},n=(i(444),i(19)),o=Object(n.a)(a,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"base-menu-child-box",attrs:{id:"videoBg"}},[e("div",{staticClass:"base-menu-child-cell",attrs:{id:"videoSize"}},[e("video",{attrs:{id:"video",autoplay:""}})])])}],!1,null,null,null);t.default=o.exports}}]);