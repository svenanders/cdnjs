(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={add:t,update:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[i].defaults[h],t)}function a(e){return e}function n(){c=!0,r=e[i]._c,s=e[i]._d,o=e[i]._e,r.add("header hasheader prev next title arrow"),d=e[i].glbl}var r,s,o,d,i="mmenu",h="header",c=!1;e[i].prototype["_init_"+h]=function(s){c||n();var i=this.vars[h+"_added"];this.vars[h+"_added"]=!0,i||(this.opts[h]=t(this.opts[h]),this.conf[h]=a(this.conf[h]));var f=this,l=this.opts[h];if(this.conf[h],!i&&l.add){var p=l.content?l.content:'<a class="'+r.prev+'" href="#"></a><span class="'+r.title+'"></span><a class="'+r.next+'" href="#"></a>';e('<div class="'+r.header+'" />').prependTo(this.$menu).append(p)}var u=e("div."+r.header,this.$menu);if(u.length&&(this.$menu.addClass(r.hasheader),l.update)){var v=u.find("."+r.title),x=u.find("."+r.prev),m=u.find("."+r.next),g=!1;d.$page&&(g="#"+d.$page.attr("id")),i||x.add(m).off(o.click).on(o.click,function(t){t.preventDefault(),t.stopPropagation();var a=e(this).attr("href");"#"!==a&&(g&&a==g?f.$menu.trigger(o.close):e(a,f.$menu).trigger(o.open))}),s.each(function(){var t=e(this),a=e("."+f.conf.classNames[h].panelHeader,t),n=e("."+f.conf.classNames[h].panelPrev,t),s=e("."+f.conf.classNames[h].panelNext,t),d=a.text(),i=n.attr("href"),c=s.attr("href");d||(d=e("."+r.subclose,t).text()),d||(d=l.title),i||(i=e("."+r.subclose,t).attr("href"));var p=n.text(),u=s.text(),g=function(){v[d?"show":"hide"](),v.text(d),x[i?"attr":"removeAttr"]("href",i),x[i||p?"show":"hide"](),x.text(p),m[c?"attr":"removeAttr"]("href",c),m[c||u?"show":"hide"](),m.text(u)};t.on(o.open,g),t.hasClass(r.current)&&g()})}},e[i].addons.push(h),e[i].defaults[h]={add:!1,content:!1,update:!1,title:"Menu"},e[i].configuration.classNames[h]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"}}(jQuery);
}));