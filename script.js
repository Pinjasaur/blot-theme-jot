/* This template tag is replaced by JS when this file is rendered */
{{{appJS}}}

/*! mousetrap v1.6.2 craig.is/killing/mice */
(function(p,t,h){function u(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return m[a.which]?m[a.which]:q[a.which]?q[a.which]:String.fromCharCode(a.which).toLowerCase()}function E(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function z(a,b){var d,e=[];var c=a;"+"===c?c=["+"]:(c=c.replace(/\+{2}/g,"+plus"),c=c.split("+"));for(d=0;d<c.length;++d){var k=c[d];A[k]&&(k=A[k]);b&&"keypress"!=b&&B[k]&&(k=B[k],e.push("shift"));v(k)&&e.push(k)}c=k;d=b;if(!d){if(!n){n={};for(var h in m)95<h&&112>h||m.hasOwnProperty(h)&&(n[m[h]]=h)}d=n[c]?"keydown":"keypress"}"keypress"==d&&e.length&&(d="keydown");return{key:k,modifiers:e,action:d}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function e(a){function b(a){a=
a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(w=!1)}function d(a,b,r,g,F,e){var l,D=[],h=r.type;if(!f._callbacks[a])return[];"keyup"==h&&v(a)&&(b=[a]);for(l=0;l<f._callbacks[a].length;++l){var d=f._callbacks[a][l];if((g||!d.seq||n[d.seq]==d.level)&&h==d.action){var c;(c="keypress"==h&&!r.metaKey&&!r.ctrlKey)||(c=d.modifiers,c=b.sort().join(",")===c.sort().join(","));c&&(c=g&&d.seq==g&&d.level==e,(!g&&d.combo==F||c)&&f._callbacks[a].splice(l,1),D.push(d))}}return D}function h(a,b,d,g){f.stopCallback(b,
b.target||b.srcElement,d,g)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function c(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:f.handleKey(b,E(a),a))}function k(a,d,r,g){function l(d){return function(){w=d;++n[a];clearTimeout(p);p=setTimeout(b,1E3)}}function e(d){h(r,d,a);"keyup"!==g&&(x=y(d));setTimeout(b,10)}for(var c=n[a]=0;c<d.length;++c){var f=c+1===d.length?e:l(g||
z(d[c+1]).action);m(d[c],f,g,a,c)}}function m(a,b,c,g,e){f._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var h=a.split(" ");1<h.length?k(a,h,b,c):(c=z(a,c),f._callbacks[c.key]=f._callbacks[c.key]||[],d(c.key,c.modifiers,{type:c.action},g,a,e),f._callbacks[c.key][g?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:g,level:e,combo:a}))}var f=this;a=a||t;if(!(f instanceof e))return new e(a);f.target=a;f._callbacks={};f._directMap={};var n={},p,x=!1,q=!1,w=!1;f._handleKey=function(a,
c,e){var g=d(a,c,e),f;c={};var l=0,k=!1;for(f=0;f<g.length;++f)g[f].seq&&(l=Math.max(l,g[f].level));for(f=0;f<g.length;++f)g[f].seq?g[f].level==l&&(k=!0,c[g[f].seq]=1,h(g[f].callback,e,g[f].combo,g[f].seq)):k||h(g[f].callback,e,g[f].combo);g="keypress"==e.type&&q;e.type!=w||v(a)||g||b(c);q=k&&"keydown"==e.type};f._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};u(a,"keypress",c);u(a,"keydown",c);u(a,"keyup",c)}if(p){var m={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},q={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(h=1;20>h;++h)m[111+h]="f"+h;for(h=0;9>=h;++h)m[h+96]=h.toString();e.prototype.bind=function(a,b,d){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,d);return this};e.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};e.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};e.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};e.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};e.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};e.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(m[b]=a[b]);n=null};e.init=function(){var a=e(t),b;for(b in a)"_"!==b.charAt(0)&&(e[b]=function(b){return function(){return a[b].apply(a,
arguments)}}(b))};e.init();p.Mousetrap=e;"undefined"!==typeof module&&module.exports&&(module.exports=e);"function"===typeof define&&define.amd&&define(function(){return e})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

/*!
 *
 * J O T
 *
 * Custom scripts below:
 *
 */

(function() {

  // Thanks CodePen:
  // https://blog.codepen.io/2016/11/17/anchor-links-post-headers/
  function slugify (text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }

  var $headers = $(".entry :header:not(h1:first-child)");

  $headers.each(function(index) {

    var $el = $(this);

    var idToLink = slugify($el.text()) + '-' + index;

    var $headerLink = $("<a />", {
      html: "#",
      class: "header-hash",
      href: "#" + idToLink,
      id: idToLink
    });

    $el.prepend($headerLink);

  });

  // Add class for active menu links
  $('.header a.menu')
    .filter((i, el) => $(el).attr('href') === location.pathname)
    .addClass('is-active')

  var $theme = $('.js-theme')
  var $shortcuts = $('.js-shortcuts')
  var $html = $('html')

  // Initial CTA values
  if (localStorage.getItem('theme')) {
    $theme.find('option[value="' + localStorage.getItem('theme') + '"]').prop('selected', 'selected')
  }

  if (localStorage.getItem('shortcuts')) {
    $shortcuts.find('option[value="' + localStorage.getItem('shortcuts') + '"]').prop('selected', 'selected')
  }

  // Handle theme change
  $theme.on('change', function (event) {
    if ($(this).val()) {
      localStorage.setItem('theme', $(this).val())
      $html.attr('data-theme', $(this).val())
    } else {
      localStorage.removeItem('theme')
      $html.removeAttr('data-theme')
    }
  })

  // Handle shortcut change
  $shortcuts.on('change', function (event) {
    if (!$(this).val()) {
      localStorage.removeItem('shortcuts')
    } else {
      localStorage.setItem('shortcuts', true)
      shortcuts()
    }
  })

  function shortcuts () {
    var state = localStorage.getItem('shortcuts') ? 'enabled' : 'disabled'
    alert(
      'Shortcuts (' + state + '):\n\n' +
      'key \t | \t action\n' +
      '--- \t   \t ---\n' +
      'h \t | \t newer post(s)\n' +
      'j \t | \t scroll down\n' +
      'k \t | \t scroll up\n' +
      'l \t | \t older post(s)\n' +
      '? \t | \t help (this)'
    )
  }

  // h: newer post(s)
  Mousetrap.bind('h', function () {
    if (localStorage.getItem('shortcuts'))
      if ($('.js-newer').length)
        location.href = $('.js-newer').attr('href')
  })

  // j: scroll down
  Mousetrap.bind('j', function () {
    if (localStorage.getItem('shortcuts'))
      window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
      })
  })

  // k: scroll up
  Mousetrap.bind('k', function () {
    if (localStorage.getItem('shortcuts'))
      window.scrollBy({
        top: -100,
        left: 0,
        behavior: 'smooth'
      })
  })

  // l: older post(s)
  Mousetrap.bind('l', function () {
    if (localStorage.getItem('shortcuts'))
      if ($('.js-older').length)
        location.href = $('.js-older').attr('href')
  })

  // ?: help
  Mousetrap.bind('?', shortcuts)

  // For the luls
  console.log(
    '%cpaul.af',
    'display: inline-block; padding: .5rem; background-color: #000; color: #fff; border-radius: .25rem; font-family: monospace;'
  )

}());
