var CookieManager = (function () {
    function t() {
      var r = Utils.CookieManager.ReadCookie("Segmentation"),
        i,
        n,
        t,
        u;
      if (r == null) return !1;
      for (i = r.split("&"), n = 0; n < i.length; n++)
        if (
          ((t = i[n].split("=")),
          t.length == 2 &&
            t[0] == "dt" &&
            ((u = new Date(t[1])), u > new Date()))
        )
          return !0;
      return !1;
    }
    function i() {
      var i, r, u;
      n.EnableSegmentationCookie &&
        ((i = Utils.CookieManager.ReadCookie("TheseusCustomerNumber")),
        (r = Utils.CookieManager.ReadCookie("Segmentation")),
        i != null &&
          (r == null || (n.InitSegmentationCookie && !t())) &&
          ((u = JSON.stringify({ request: { CustomerNumber: i } })),
          $.ajax({
            url: "/servicemyaccountnosession/getmarketingprofile",
            async: !0,
            cache: !1,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: u,
            success: function (n) {
              var f = "",
                e,
                u,
                o;
              if (
                (n.d && (n = n.d),
                n.Classifications != null &&
                  n.Classifications &&
                  n.Classifications.length > 0)
              ) {
                for (
                  tc_vars.user_classification = n.Classifications,
                    f = "CI=" + i,
                    e = 0;
                  e < n.Classifications.length;
                  e++
                )
                  (u = n.Classifications[e]),
                    (f += "&" + u.Key + "=" + u.Value),
                    u.Key == "clusterNum" &&
                      (tc_vars.user_clusterNum = u.Value);
                (o = new Date(new Date().setHours(new Date().getHours() + 1))),
                  (f += "&dt=" + o),
                  Utils.CookieManager.CreateCookie("Segmentation", f, 365, !0);
              }
            },
          })));
    }
    function r() {
      var n = new Date(),
        t = n.getTimezoneOffset();
      Utils.CookieManager.CreateCookie(
        "BROWSERCOLORDEPTH",
        screen.colorDepth,
        1,
        !0
      ),
        Utils.CookieManager.CreateCookie(
          "BROWSERJAVAENABLED",
          navigator.javaEnabled(),
          1,
          !0
        ),
        Utils.CookieManager.CreateCookie(
          "BROWSERLANGUAGE",
          navigator.language,
          1,
          !0
        ),
        Utils.CookieManager.CreateCookie(
          "BROWSERSCREENHEIGHT",
          screen.height,
          1,
          !0
        ),
        Utils.CookieManager.CreateCookie(
          "BROWSERSCREENWIDTH",
          screen.width,
          1,
          !0
        ),
        Utils.CookieManager.CreateCookie("BROWSERTIMEZONE", t, 1, !0),
        Utils.CookieManager.CreateCookie(
          "BROWSERJAVASCRIPTENABLED",
          "true",
          1,
          !0,
          !0
        );
    }
    var n = {
      InitSegmentationCookie:
        contextInfo != null &&
        contextInfo.Configuration != null &&
        contextInfo.Configuration.ConfigCookieManager != null
          ? contextInfo.Configuration.ConfigCookieManager.InitSegmentationCookie
          : !0,
      EnableSegmentationCookie:
        contextInfo != null &&
        contextInfo.Configuration != null &&
        contextInfo.Configuration.ConfigCookieManager != null
          ? contextInfo.Configuration.ConfigCookieManager
              .EnableSegmentationCookie
          : !1,
    };
    return {
      Initialise: function () {
        r(), i();
      },
    };
  })(),
  siteSelector;
$(window).on("load", function () {
  CookieManager.Initialise();
});
(siteSelector = (function () {
  function n(n) {
    return "siteSelector-" + n;
  }
  function i() {
    return document.referrer === "" || document.referrer.indexOf("google") >= 0
      ? !1
      : typeof siteSelectorConfig != "undefined";
  }
  function r() {
    return Utils.CookieManager.ReadCookie(n("layerShown")) == null ? !1 : !0;
  }
  function u() {
    Utils.CookieManager.CreateCookie(n("layerShown"), 1, 0);
  }
  function f() {
    return siteSelectorConfig.VisitorCountryCode;
  }
  function t() {
    var t = f(),
      n;
    for (n in siteSelectorConfig.Countries)
      if (siteSelectorConfig.Countries[n].CountryCode == t)
        return siteSelectorConfig.Countries[n];
    return null;
  }
  function e() {
    var n = navigator.language || navigator.userLanguage,
      t,
      i;
    (n = n.split("-")[0]), (t = "en");
    for (i in siteSelectorConfig.SupportedLanguages)
      n.toLowerCase() == siteSelectorConfig.SupportedLanguages[i] &&
        (t = siteSelectorConfig.SupportedLanguages[i]);
    return t;
  }
  function o() {
    var i = t(),
      n;
    return i == null
      ? null
      : ((n = "nodelivery"),
        i == null && (n = "nodelivery"),
        (n = window.location.href.indexOf(i.SiteUrl) <= 0 ? i.LayerType : null),
        n == "nodelivery" &&
          window.location.href.indexOf("redoute.com") > 0 &&
          (n = null),
        n);
  }
  function s() {
    res = "";
    for (var n = window.location.host.split("."); n.length > 2; )
      res.length > 0 && (res = "." + res), (res = n.pop() + res);
    return res;
  }
  function h(n) {
    var f, r, i, u;
    if ((n.d != null && (n = n.d), (f = t()), f != null)) {
      (r = f.SiteUrl),
        (r = r.replace(/http:\/\//g, "")),
        (r = r.replace(/https:\/\//g, "")),
        (r = r.replace(/-preview\./g, "")),
        (r = r.replace(/-preprod\./g, "")),
        (r = r.replace(/uat\./g, "")),
        (r = r.replace(/localhost\./g, "")),
        (n = n.replace(/\[SiteNameExternal\]/g, r)),
        (i = window.location.hostname),
        (i = i.replace(/http:\/\//g, "")),
        (i = i.replace(/https:\/\//g, "")),
        (i = i.replace(/m-preview\./g, "")),
        (i = i.replace(/m-preprod\./g, "")),
        (i = i.replace(/localhost\./g, "")),
        (i = i.replace(/m\./g, "")),
        (i = i.replace(/uat\./g, "")),
        (n = n.replace(/\[SiteNameCurrent\]/g, i)),
        (u = $("<div>", {
          id: "siteSelectorContainer",
          class: "popin",
          html: n,
        }).appendTo("body")),
        u.popin();
      u.find("#btn-close").on("click", u.data("popin").close);
      u.data("popin").open();
    }
  }
  function c(i) {
    var u, r, f, e;
    i.preventDefault(),
      i.stopPropagation(),
      (u = t()),
      (r = u.SiteUrl),
      r.indexOf("https://") != 0 && (r = "https://" + r),
      (f = siteSelectorConfig.RedirectPreferenceDuration),
      (e = s()),
      (r = r + "?omniturecode=COR" + e + "LayerGEO&flag=1"),
      Utils.CookieManager.CreateCookie(n("RedirectPreference"), btoa(r), f),
      (window.location = r);
  }
  function l(n, t) {
    var i = { layerType: n, layerLanguage: t };
    $.ajax({
      url: "/servicegeneric/loadsiteselector",
      type: "GET",
      contentType: "application/json; charset=utf-8",
      data: i,
      success: function (n) {
        h(n);
      },
    });
  }
  function a() {
    var i = Utils.CookieManager.ReadCookie(n("RedirectPreference")),
      t = atob(i);
    return t != null && t.indexOf("http") == 0 && t.indexOf("https") == 0
      ? ((window.location = t), !0)
      : !1;
  }
  function v() {
    var i = a(),
      n,
      t;
    if (!i && !r() && ((n = o()), (t = e()), n != null && n != "")) {
      u(), Utils.OmnitureManager.addEvents("event101");
      $(document).on("click", "#btn-redirect", c);
      l(n, t);
    }
  }
  return {
    Initialise: function () {
      try {
        i() &&
          pageType != PageTypeEnum.ProductPage &&
          pageType != PageTypeEnum.MultiProductPage &&
          v();
      } catch (n) {
        console.error(n.message);
      }
    },
  };
})()),
  $(function () {
    $("body").hasClass("cfao") || siteSelector.Initialise();
  });
