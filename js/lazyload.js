!function (e) {
    function t(e, t) {
        var n = new Image, r = e.getAttribute("data-src");
        n.onload = function () {
            e.parent ? e.parent.replaceChild(n, e) : e.src = r, t && t()
        }, n.src = r
    }

    var n = new Array;
    let r = [];
    console.log(screen.width);
    screen.width >= 540 && (r = function (e, t) {
        if (document.querySelectorAll) t = document.querySelectorAll(e); else {
            var n = document, r = n.styleSheets[0] || n.createStyleSheet();
            r.addRule(e, "f:b");
            for (var l = n.all, c = 0, o = [], i = l.length; c < i; c++) l[c].currentStyle.f && o.push(l[c]);
            r.removeRule(0), t = o
        }
        return t
    }("img.lazy")), processScroll = function () {
        for (var r = 0; r < n.length; r++) l = n[r], c = void 0, (c = l.getBoundingClientRect()).top >= 0 && c.left >= 0 && c.top <= (e.innerHeight || document.documentElement.clientHeight) && t(n[r], function () {
            n.splice(r, r)
        });
        var l, c
    };
    for (var l = 0; l < r.length; l++) n.push(r[l]);
    processScroll(), function (t, n) {
        e.addEventListener ? this.addEventListener(t, n, !1) : e.attachEvent ? this.attachEvent("on" + t, n) : this["on" + t] = n
    }("scroll", processScroll)
}(this);