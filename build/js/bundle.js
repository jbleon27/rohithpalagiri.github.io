!function e(t,n,i){function o(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){var n=t[r][1][e];return o(n?n:e)},d,d.exports,e,t,n,i)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(e,t,n){(function(e){!function(e,i){"function"==typeof define&&define.amd?define([],i(e)):"object"==typeof n?t.exports=i(e):e.smoothScroll=i(e)}("undefined"!=typeof e?e:this.window||this.global,function(e){"use strict";var t,n,i,o,a,r,s,l={},c="querySelector"in document&&"addEventListener"in e,d={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},u=function(){var e={},t=!1,n=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=u(!0,e[i],n[i]):e[i]=n[i])};n<i;n++){var a=arguments[n];o(a)}return e},h=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,i,o=t.charAt(0),a="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===o)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!i)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},p=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),i=n.length,o=-1,a="",r=n.charCodeAt(0);++o<i;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&t<=31||127==t||0===o&&t>=48&&t<=57||1===o&&t>=48&&t<=57&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+a},m=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},g=function(e,t,n){var i=0;if(e.offsetParent)do i+=e.offsetTop,e=e.offsetParent;while(e);return i=Math.max(i-t-n,0),Math.min(i,v()-w())},w=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},b=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},y=function(e){return e?h(e)+e.offsetTop:0},I=function(t,n,i){i||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};l.animateScroll=function(n,i,r){var l=b(i?i.getAttribute("data-options"):null),c=u(t||d,r||{},l),h="[object Number]"===Object.prototype.toString.call(n),f=h||!n.tagName?null:n;if(h||f){var p=e.pageYOffset;c.selectorHeader&&!o&&(o=document.querySelector(c.selectorHeader)),a||(a=y(o));var w,S,k=h?n:g(f,a,parseInt(c.offset,10)),L=k-p,A=v(),E=0,T=function(t,o,a){var r=e.pageYOffset;(t==o||r==o||e.innerHeight+r>=A)&&(clearInterval(a),I(n,o,h),c.callback(n,i))},H=function(){E+=16,w=E/parseInt(c.speed,10),w=w>1?1:w,S=p+L*m(c.easing,w),e.scrollTo(0,Math.floor(S)),T(S,k,s)},O=function(){clearInterval(s),s=setInterval(H,16)};0===e.pageYOffset&&e.scrollTo(0,0),O()}};var S=function(t){e.location.hash,n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,i),n=null,i=null)},k=function(o){if(0===o.button&&!o.metaKey&&!o.ctrlKey&&(i=f(o.target,t.selector),i&&"a"===i.tagName.toLowerCase()&&i.hostname===e.location.hostname&&i.pathname===e.location.pathname&&/#/.test(i.href))){var a=p(i.hash);if("#"===a){o.preventDefault(),n=document.body;var r=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",r),n.id="",void(e.location.hash.substring(1)===r?S():e.location.hash=r)}n=document.querySelector(a),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",i.hash===e.location.hash&&(o.preventDefault(),S()))}},L=function(e){r||(r=setTimeout(function(){r=null,a=y(o)},66))};return l.destroy=function(){t&&(document.removeEventListener("click",k,!1),e.removeEventListener("resize",L,!1),t=null,n=null,i=null,o=null,a=null,r=null,s=null)},l.init=function(n){c&&(l.destroy(),t=u(d,n||{}),o=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=y(o),document.addEventListener("click",k,!1),e.addEventListener("hashchange",S,!1),o&&e.addEventListener("resize",L,!1))},l})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){var i=function(t,n){function i(e){return n.querySelector(e)}function o(e){return[].slice.call(n.querySelectorAll(e))}function a(){k.items.forEach(function(e,t){e.addEventListener("click",l.bind(null,t))}),L.closeBtn.forEach(function(e){e.addEventListener("click",function(){t.history.back(),r()})}),t.addEventListener("popstate",function(e){g(),r()})}function r(){n.title="Arjan Jassal | Front-end Developer Vancouver"}function s(e){L.title.innerHTML=I[e].title,L.client.innerHTML=I[e].client,L.whatIDid.innerHTML=I[e].whatIDid,L.tagline.innerHTML=I[e].tagline,L.tag.innerHTML=I[e].tag,L.description.innerHTML=I[e].description,L.process.innerHTML=I[e].process;var t=I[e].tech.map(function(e){return'<li class="c-list__item">'+e+"</li>"}).join("");L.tech.innerHTML=t}function l(e){t.requestAnimationFrame(c.bind(null,e))}function c(e){k.items[e].classList.add("active"),k.activeItem=k.items[e],k.activeBg=k.bgs[e],k.tagline[e].classList.add("hide");var i=k.activeItem.getAttribute("data-work");t.history.pushState({title:i},i,i),i=i.replace(/\_/g," "),n.title="Arjan Jassal | "+i[0].toUpperCase()+i.substr(1,i.length-1),s(k.activeItem.getAttribute("data-work")),d(k.activeItem,k.activeBg),L.container.classList.remove("theme-1","theme-2","theme-3","theme-4"),L.container.classList.add("theme-"+parseInt(e+1)),h(k.activeItem.querySelector(".work__item-heading")),f(k.activeItem.querySelector(".work__item-tag")),u()}function d(e,n){var i=t.getComputedStyle(e,null),o=i.getPropertyValue("background-color");L.container.style.backgroundColor=o,n.style[E]=m(n),v(n,function(){L.container.classList.add("active"),b()})}function u(){S.header.classList.toggle("hide")}function h(e){var t=L.title,n=p(t,e),i="translate("+n.x+"px, "+n.y+"px)";e.style[E]=i}function f(e){var t=L.tag,n=p(t,e),i="translate("+n.x+"px, "+n.y+"px)";e.style[E]=i}function p(e,t){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:n.left-i.left,y:n.top-i.top}}function m(e){var n=t.innerWidth,i=t.innerHeight,o=n/2,a=i/2,r=(t.pageYOffset,e.getBoundingClientRect()),s=r.width,l=r.height,c=s/2,d=l/2,u=Math.round(o-r.left-c),h=Math.round(0+a-r.top-d),f=n/s,p=i/l,m="translate("+u+"px,"+h+"px) scale("+f+","+p+")";return m}function g(){t.requestAnimationFrame(w)}function w(){function e(){k.activeBg.removeAttribute("style"),t.removeAttribute("style"),i.removeAttribute("style"),L.container.classList.remove("active","hide"),u(),y(),v(k.activeBg,function(){k.activeItem.classList.remove("active"),k.activeItem={},k.activeBg={},n.classList.remove("hide"),L.container.scrollTop=0})}var t=k.activeItem.querySelector(".work__item-heading"),n=k.activeItem.querySelector(".work__item-tagline"),i=k.activeItem.querySelector(".work__item-tag");L.container.classList.add("hide"),v(L.container,e,350)}function v(e,t,n){var i=function(){setTimeout(function(){t()},n||0),e.removeEventListener(C,i)};e.addEventListener(C,i)}function b(){n.body.style.overflow="hidden"}function y(){n.body.removeAttribute("style")}var I=e("./workData"),S={header:i("header.header")},k={items:o(".work__item"),bgs:o(".work__item-bg"),tagline:o(".work__item-tagline"),tag:o(".work__item-tag"),activeItem:{},activeBg:{}},L={title:i("[data-work-title]"),client:i("[data-work-client]"),whatIDid:i("[data-work-what-i-did]"),tagline:i("[data-work-tagline]"),tag:i("[data-work-tag]"),description:i("[data-work-description]"),tech:i("[data-work-tech]"),process:i("[data-work-process]"),closeBtn:o(".work-details-close"),container:i(".work-details")},A=!1,E="transform",T="Webkit Moz ms".split(" "),H="",O=n.createElement("div");if(void 0!==O.style[E]&&(A=!0),A===!1)for(var x=0;x<T.length;x++)if(void 0!==O.style[T[x]+"Transform"]){H=T[x],E=H+"Transform",A=!0;break}var C,q={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},O=n.createElement("div");for(var M in q)if("undefined"!=typeof O.style[M]){C=q[M];break}return{init:a}}(window,document);t.exports=i},{"./workData":10}],3:[function(e,t,n){var i=function(){function e(){window.addEventListener("scroll",t)}function t(){window.requestAnimationFrame(n)}function n(){var e=window.pageYOffset,t=window.innerHeight-o;e>t&&!i.classList.contains(a)&&i.classList.add(a),e<t&&i.classList.contains(a)&&i.classList.remove(a)}var i=document.querySelector("header.header"),o=i.offsetHeight,a="header--scrolled";return{init:e}}();t.exports=i},{}],4:[function(e,t,n){var i=function(){function e(){window.innerWidth>=768&&window.addEventListener("scroll",t)}function t(){window.pageYOffset<window.innerHeight&&window.requestAnimationFrame(n)}function n(){var e=window.pageYOffset,t=e/2,n=1-e/700;i.style.transform="translateY("+t+"px)",i.style.opacity=n}var i=document.querySelector(".home__wrapper");return{init:e}}();t.exports=i},{}],5:[function(e,t,n){var i=function(e){function t(t){t.preventDefault(),a.classList.toggle("c-hamburger--close"),r.classList.toggle("nav--active"),setTimeout(function(){s.forEach(function(t){e.requestAnimationFrame(i.bind(null,t))})},75),o()}function n(){a.addEventListener("click",t),l.forEach(function(e){e.addEventListener("click",t)})}function i(e){e.classList.toggle("nav__item--active")}function o(){a&&r&&(r.classList.contains("nav--active")?(a.setAttribute("aria-expanded","true"),r.setAttribute("aria-hidden","false")):(a.setAttribute("aria-expanded","false"),r.setAttribute("aria-hidden","true")))}var a=document.querySelector("button.c-hamburger"),r=document.querySelector("nav.nav"),s=[].slice.call(r.querySelectorAll("li.nav__item")),l=[].slice.call(r.querySelectorAll("[data-link]"));return{init:n}}(window);t.exports=i},{}],6:[function(e,t,n){var i=e("./isInViewport"),o=function(){function e(){window.addEventListener("scroll",t),window.addEventListener("load",t)}function t(){window.requestAnimationFrame(n)}function n(){o.forEach(function(e){i(e,e.getAttribute("data-add-class-offset")||0)&&e.classList.add(e.getAttribute("data-add-class"))})}var o=[].slice.call(document.querySelectorAll("[data-add-class]"));window;return{init:e}}();t.exports=o},{"./isInViewport":9}],7:[function(e,t,n){var i=function(){function e(){t(),window.addEventListener("resize",i(n,200))}function t(){for(var e=window.innerHeight,t=0;t<a.length;t++)a[t].style.minHeight=e+"px"}function n(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(o)||t()}function i(e,t,n){var i;return function(){var o=this,a=arguments,r=function(){i=null,n||e.apply(o,a)},s=n&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(o,a)}}var o=navigator.userAgent,a=document.querySelectorAll("[data-full-height]");return{init:e}}();t.exports=i},{}],8:[function(e,t,n){var i=e("./HeadingScrollAnimation"),o=e("smooth-scroll"),a=e("./Nav"),r=e("./addClassWhenInViewport"),s=e("./ExpandProject"),l=e("./HeaderScroll"),c=e("./fullHeight");document.addEventListener("DOMContentLoaded",function(){i.init(),a.init(),r.init(),s.init(),o.init({speed:500,offset:54}),l.init(),c.init()})},{"./ExpandProject":2,"./HeaderScroll":3,"./HeadingScrollAnimation":4,"./Nav":5,"./addClassWhenInViewport":6,"./fullHeight":7,"smooth-scroll":1}],9:[function(e,t,n){function i(e,t){t=t?t:0;var n=e.getBoundingClientRect(),i=n.top>=0&&n.top<window.innerHeight-t,o=n.bottom>0&&n.bottom<=window.innerHeight-t;return!(!i&&!o)}t.exports=i},{}],10:[function(e,t,n){t.exports={bricks:{title:"MetLife",tagline:"Modernized the MetLife employee home page",tag:"Front End Developer",client:"Raleigh, NC",whatIDid:"Redesigned the internal employee home page from the bottom up. I took what was once an IE8-only site and rebuilt it using a modern tool stack with responsive design and browser compatibility in mind.",description:"The MetLife employee home page was initially designed for the IE8 enivornment almost a decade ago. With a redesign desperately needed, I was tasked with rebuilding the page from the bottom up. After gathering requirements and mocking up UI designs in Adobe Photoshop I got to work.",tech:["HTML5","CSS3, SCSS","Bootstrap","JavaScript (ECMAScript 6)","jQuery","Gulp"],process:['<h3 class="u-heading-6">01. Research</h3>','<p>After receiving word I would be heading up this project I went ahead and looked up the web page I would be working on. The first flaw I noticed was that this was a static page and was therefore not responsive. MetLife was entering a "mobile first" development strategy so I knew that would be a focus of my efforts.</p>','<h3 class="u-heading-6">02. Setup</h3>',"<p>For projects like this I believe preparation and having a proper setup is critical to completing tasks efficiently and producing a quality product.</p>","<p>I have a goal of learning at least one new technology with each project I start, for this one it was ECMAScript 6. I had read some documentation on ES6 and fiddled around with it when I had free time, but nothing intensive. There was no better time than now. After gathering the requirements from our development team I mocked up the protoype in Adobe Photoshop in order to visualize what technologies I would need to incorporate. In order to produce efficient code I used Gulp as my task-runner. I love Gulp because because there is a plugin for everything (i.e. compiling SCSS to CSS, ES6 to ES5, minifying, etc...)</p>",'<h3 class="u-heading-6">03. Development</h3>',"<p>The requirements for the site were simple enough. The site needed to be responsive so it could work on a variety of devices, especially mobile and it needed to be compatible with modern browsers such as Chrome and Firefox. I decided to use Bootstrap as it would provide the functionality that users would need.</p>","<p>After getting the layout completed and tested on multiple devices and browsers I moved on to the interface. I adopted a simple flat design along with a color scheme that fell in line with the company brand guidelines. When used prudently, animations can provide a sense of intuition and interactivty that augments UX. I used jQuery to add effects for elements like buttons and menus.</p>","<p>Using Gulp I improved the efficiency of the code by minifying the CSS and HTML, uglifying the JavaScript and then bundling the code together.</p>",'<h3 class="u-heading-6">04. Launch</h3>',"<p>For the launch, I had the site tested by our Quality Assurance and User Acceptance Testing teams before it was deployed. I developed several test cases that the teams would use to check for bugs.</p>"].join("")},abby:{title:"Apple",tagline:"Delivered hardware and software solutions for devices running iOS",tag:"iOS Advisor",client:"Gainesville, FL",whatIDid:"Interacted with small and large companies to integrate iOS into their workplace. I was also a Beta tester for iOS 6.",description:"As an iOS Advisor I worked with companies to streamline the process of integrating iOS devices (iPhone & iPad) into their place of business. I consulted with companies such as Nordstrom, JCPenney and Texas Instruments",tech:["iOS","MacOS"],process:['<h3 class="u-heading-6">01. Background</h3>',"<p>I worked as an iOS Advisor for companies who were integrating iOS devices into their workplace. I would be needed in situations where the products were not linking up with IT ecosystem. It was my job to work with IT and go through troubleshooting steps in order to resolve these issues. I worked with many clients ranging from small startups to Fortune 500 companies.</p>",'<h3 class="u-heading-6">02. Lessons Learned</h3>',"<p>This was one of the more unique jobs I had but was also one of my favorites. I learned a lot about communication, especially over the phone. Communication is something that is already difficult when you are face to face and when you remove body language from the equation, the message can get even more muddled. I learned how to interact with people who may not be having the best day, managing expecations and working with them to deliver solutions. I met great people all around the country, even the world and it is an experience I will carry with me the rest of my life.</p>"].join("")},readit:{title:"General Electric",tagline:"Developed a web site that streamlined the purchase of jet engine turbines",tag:"Software Developer",client:"Cincinnati, OH",whatIDid:"Created a site that documented all of the details on specific GE turbines so clients could compare products",description:"The GE Turbine Site allowed both employees as well as clients to look up tech specs, images and prices on turbines",tech:["HTML5","CSS3, SCSS","Bootstrap","JavaScript","jQuery"],process:["<p>This project came about during my internship at General Electric Aviation. Initially my job was to provide information on different engines and turbines for my team so they could provide them to their clients. I was having a lot of trouble because this information was not easy to find with me ending up messaging individual people to see if they had an Excel spreadsheet with the information I needed. Like many projects, this site was conceived in order to make the process more efficient by centralizing information.</p>",'<h3 class="u-heading-6">01. Setup</h3>',"<p>The first thing I needed to do was gather all of the information I could. That meant sending out emails to our Product team to ask for all of the spreadsheets, images and links I could get. We had several interns whose job it was to sort through this info and create profiles for each of the turbines. My job was to design the site and after creating some UI mockups in PhotoShop we were set on a layout.</p>",'<h3 class="u-heading-6">Development</h3>',"<p>After all of the data was gathered and then organized by product, I took the information and stored it in a JavaScript file. It contained all the information anyone would ever need on a specific turbine. A process was setup where an event listener would pull up the info of the turbine name that was clicked. Bootstrap was used as it had a grid layout that was extremely useful for presenting this kind of information as well as for being responsive.</p>",'<h3 class="u-heading-6">04. Launch</h3>',"<p>The reception of the site was overwhelming. Not only did my team and their clients use it to look up information, but it was also used by our product, development and accounting teams. I learned a lot from this project about striking a balance between form and function.</p>"].join("")},social_circles:{title:"University of Florida",tagline:"Built websites from UI designs created in Adobe Photoshop",tag:"Web Developer",client:"Gainesville, FL",whatIDid:"Gathered requirements from different teams at the University of Florida Shands Hospital to create Photoshop mockups which I then used to create team pages.",description:"There was a push for different teams with UF & Shands Hospital to have web pages that would provide information on what they do, profiles on team members etc. I would work with a different team every couple of weeks to develop a page for them on the internal site. After designing mockups in Photoshop I would get approval from the team and get to work",tech:["HTML5","CSS3, SCSS","JavaScript","Git"],process:['<h3 class="u-heading-6">Lessons Learned</h3>',"<p>This was my first job as a Web Developer and I learned a lot about the importance of preparation and setting up your environment to work efficiently. A lot of the pages had common elements between them so when I was developing a team page, I split the code up into modules so they could be resused. This saved me a lot of time and effort I could then use to fine tune the sites even further."].join("")}}},{}]},{},[8]);
//# sourceMappingURL=bundle.js.map
