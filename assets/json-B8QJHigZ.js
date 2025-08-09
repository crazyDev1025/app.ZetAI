import { i as Gr } from "./index-6nMvIxqd.js";
import { r as Vr } from "./___vite-browser-external_commonjs-proxy-BO56SoU-.js";
var He = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var nr =
  function (r, n) {
    return (
      (nr =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (f, h) {
            f.__proto__ = h;
          }) ||
        function (f, h) {
          for (var g in h) h.hasOwnProperty(g) && (f[g] = h[g]);
        }),
      nr(r, n)
    );
  };
function Xr(r, n) {
  nr(r, n);
  function f() {
    this.constructor = r;
  }
  r.prototype =
    n === null ? Object.create(n) : ((f.prototype = n.prototype), new f());
}
var ir = function () {
  return (
    (ir =
      Object.assign ||
      function (n) {
        for (var f, h = 1, g = arguments.length; h < g; h++) {
          f = arguments[h];
          for (var d in f)
            Object.prototype.hasOwnProperty.call(f, d) && (n[d] = f[d]);
        }
        return n;
      }),
    ir.apply(this, arguments)
  );
};
function Qr(r, n) {
  var f = {};
  for (var h in r)
    Object.prototype.hasOwnProperty.call(r, h) &&
      n.indexOf(h) < 0 &&
      (f[h] = r[h]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var g = 0, h = Object.getOwnPropertySymbols(r); g < h.length; g++)
      n.indexOf(h[g]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, h[g]) &&
        (f[h[g]] = r[h[g]]);
  return f;
}
function Jr(r, n, f, h) {
  var g = arguments.length,
    d =
      g < 3 ? n : h === null ? (h = Object.getOwnPropertyDescriptor(n, f)) : h,
    _;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    d = Reflect.decorate(r, n, f, h);
  else
    for (var t = r.length - 1; t >= 0; t--)
      (_ = r[t]) && (d = (g < 3 ? _(d) : g > 3 ? _(n, f, d) : _(n, f)) || d);
  return g > 3 && d && Object.defineProperty(n, f, d), d;
}
function Zr(r, n) {
  return function (f, h) {
    n(f, h, r);
  };
}
function kr(r, n) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, n);
}
function et(r, n, f, h) {
  function g(d) {
    return d instanceof f
      ? d
      : new f(function (_) {
          _(d);
        });
  }
  return new (f || (f = Promise))(function (d, _) {
    function t(b) {
      try {
        s(h.next(b));
      } catch (S) {
        _(S);
      }
    }
    function a(b) {
      try {
        s(h.throw(b));
      } catch (S) {
        _(S);
      }
    }
    function s(b) {
      b.done ? d(b.value) : g(b.value).then(t, a);
    }
    s((h = h.apply(r, n || [])).next());
  });
}
function rt(r, n) {
  var f = {
      label: 0,
      sent: function () {
        if (d[0] & 1) throw d[1];
        return d[1];
      },
      trys: [],
      ops: [],
    },
    h,
    g,
    d,
    _;
  return (
    (_ = { next: t(0), throw: t(1), return: t(2) }),
    typeof Symbol == "function" &&
      (_[Symbol.iterator] = function () {
        return this;
      }),
    _
  );
  function t(s) {
    return function (b) {
      return a([s, b]);
    };
  }
  function a(s) {
    if (h) throw new TypeError("Generator is already executing.");
    for (; f; )
      try {
        if (
          ((h = 1),
          g &&
            (d =
              s[0] & 2
                ? g.return
                : s[0]
                ? g.throw || ((d = g.return) && d.call(g), 0)
                : g.next) &&
            !(d = d.call(g, s[1])).done)
        )
          return d;
        switch (((g = 0), d && (s = [s[0] & 2, d.value]), s[0])) {
          case 0:
          case 1:
            d = s;
            break;
          case 4:
            return f.label++, { value: s[1], done: !1 };
          case 5:
            f.label++, (g = s[1]), (s = [0]);
            continue;
          case 7:
            (s = f.ops.pop()), f.trys.pop();
            continue;
          default:
            if (
              ((d = f.trys),
              !(d = d.length > 0 && d[d.length - 1]) &&
                (s[0] === 6 || s[0] === 2))
            ) {
              f = 0;
              continue;
            }
            if (s[0] === 3 && (!d || (s[1] > d[0] && s[1] < d[3]))) {
              f.label = s[1];
              break;
            }
            if (s[0] === 6 && f.label < d[1]) {
              (f.label = d[1]), (d = s);
              break;
            }
            if (d && f.label < d[2]) {
              (f.label = d[2]), f.ops.push(s);
              break;
            }
            d[2] && f.ops.pop(), f.trys.pop();
            continue;
        }
        s = n.call(r, f);
      } catch (b) {
        (s = [6, b]), (g = 0);
      } finally {
        h = d = 0;
      }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function tt(r, n, f, h) {
  h === void 0 && (h = f), (r[h] = n[f]);
}
function nt(r, n) {
  for (var f in r) f !== "default" && !n.hasOwnProperty(f) && (n[f] = r[f]);
}
function ar(r) {
  var n = typeof Symbol == "function" && Symbol.iterator,
    f = n && r[n],
    h = 0;
  if (f) return f.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && h >= r.length && (r = void 0), { value: r && r[h++], done: !r }
        );
      },
    };
  throw new TypeError(
    n ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Hr(r, n) {
  var f = typeof Symbol == "function" && r[Symbol.iterator];
  if (!f) return r;
  var h = f.call(r),
    g,
    d = [],
    _;
  try {
    for (; (n === void 0 || n-- > 0) && !(g = h.next()).done; ) d.push(g.value);
  } catch (t) {
    _ = { error: t };
  } finally {
    try {
      g && !g.done && (f = h.return) && f.call(h);
    } finally {
      if (_) throw _.error;
    }
  }
  return d;
}
function it() {
  for (var r = [], n = 0; n < arguments.length; n++)
    r = r.concat(Hr(arguments[n]));
  return r;
}
function at() {
  for (var r = 0, n = 0, f = arguments.length; n < f; n++)
    r += arguments[n].length;
  for (var h = Array(r), g = 0, n = 0; n < f; n++)
    for (var d = arguments[n], _ = 0, t = d.length; _ < t; _++, g++)
      h[g] = d[_];
  return h;
}
function Ne(r) {
  return this instanceof Ne ? ((this.v = r), this) : new Ne(r);
}
function ut(r, n, f) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var h = f.apply(r, n || []),
    g,
    d = [];
  return (
    (g = {}),
    _("next"),
    _("throw"),
    _("return"),
    (g[Symbol.asyncIterator] = function () {
      return this;
    }),
    g
  );
  function _(m) {
    h[m] &&
      (g[m] = function (y) {
        return new Promise(function (p, A) {
          d.push([m, y, p, A]) > 1 || t(m, y);
        });
      });
  }
  function t(m, y) {
    try {
      a(h[m](y));
    } catch (p) {
      S(d[0][3], p);
    }
  }
  function a(m) {
    m.value instanceof Ne
      ? Promise.resolve(m.value.v).then(s, b)
      : S(d[0][2], m);
  }
  function s(m) {
    t("next", m);
  }
  function b(m) {
    t("throw", m);
  }
  function S(m, y) {
    m(y), d.shift(), d.length && t(d[0][0], d[0][1]);
  }
}
function ft(r) {
  var n, f;
  return (
    (n = {}),
    h("next"),
    h("throw", function (g) {
      throw g;
    }),
    h("return"),
    (n[Symbol.iterator] = function () {
      return this;
    }),
    n
  );
  function h(g, d) {
    n[g] = r[g]
      ? function (_) {
          return (f = !f)
            ? { value: Ne(r[g](_)), done: g === "return" }
            : d
            ? d(_)
            : _;
        }
      : d;
  }
}
function ot(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r[Symbol.asyncIterator],
    f;
  return n
    ? n.call(r)
    : ((r = typeof ar == "function" ? ar(r) : r[Symbol.iterator]()),
      (f = {}),
      h("next"),
      h("throw"),
      h("return"),
      (f[Symbol.asyncIterator] = function () {
        return this;
      }),
      f);
  function h(d) {
    f[d] =
      r[d] &&
      function (_) {
        return new Promise(function (t, a) {
          (_ = r[d](_)), g(t, a, _.done, _.value);
        });
      };
  }
  function g(d, _, t, a) {
    Promise.resolve(a).then(function (s) {
      d({ value: s, done: t });
    }, _);
  }
}
function st(r, n) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: n })
      : (r.raw = n),
    r
  );
}
function ht(r) {
  if (r && r.__esModule) return r;
  var n = {};
  if (r != null)
    for (var f in r) Object.hasOwnProperty.call(r, f) && (n[f] = r[f]);
  return (n.default = r), n;
}
function ct(r) {
  return r && r.__esModule ? r : { default: r };
}
function lt(r, n) {
  if (!n.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return n.get(r);
}
function Dt(r, n, f) {
  if (!n.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return n.set(r, f), f;
}
const dt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return ir;
        },
        __asyncDelegator: ft,
        __asyncGenerator: ut,
        __asyncValues: ot,
        __await: Ne,
        __awaiter: et,
        __classPrivateFieldGet: lt,
        __classPrivateFieldSet: Dt,
        __createBinding: tt,
        __decorate: Jr,
        __exportStar: nt,
        __extends: Xr,
        __generator: rt,
        __importDefault: ct,
        __importStar: ht,
        __makeTemplateObject: st,
        __metadata: kr,
        __param: Zr,
        __read: Hr,
        __rest: Qr,
        __spread: it,
        __spreadArrays: at,
        __values: ar,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Be = Gr(dt);
var Ke = {},
  pe = {},
  or;
function _t() {
  if (or) return pe;
  (or = 1),
    Object.defineProperty(pe, "__esModule", { value: !0 }),
    (pe.delay = void 0);
  function r(n) {
    return new Promise((f) => {
      setTimeout(() => {
        f(!0);
      }, n);
    });
  }
  return (pe.delay = r), pe;
}
var be = {},
  $e = {},
  we = {},
  sr;
function Et() {
  return (
    sr ||
      ((sr = 1),
      Object.defineProperty(we, "__esModule", { value: !0 }),
      (we.ONE_THOUSAND = we.ONE_HUNDRED = void 0),
      (we.ONE_HUNDRED = 100),
      (we.ONE_THOUSAND = 1e3)),
    we
  );
}
var ze = {},
  hr;
function bt() {
  return (
    hr ||
      ((hr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.ONE_YEAR =
            r.FOUR_WEEKS =
            r.THREE_WEEKS =
            r.TWO_WEEKS =
            r.ONE_WEEK =
            r.THIRTY_DAYS =
            r.SEVEN_DAYS =
            r.FIVE_DAYS =
            r.THREE_DAYS =
            r.ONE_DAY =
            r.TWENTY_FOUR_HOURS =
            r.TWELVE_HOURS =
            r.SIX_HOURS =
            r.THREE_HOURS =
            r.ONE_HOUR =
            r.SIXTY_MINUTES =
            r.THIRTY_MINUTES =
            r.TEN_MINUTES =
            r.FIVE_MINUTES =
            r.ONE_MINUTE =
            r.SIXTY_SECONDS =
            r.THIRTY_SECONDS =
            r.TEN_SECONDS =
            r.FIVE_SECONDS =
            r.ONE_SECOND =
              void 0),
          (r.ONE_SECOND = 1),
          (r.FIVE_SECONDS = 5),
          (r.TEN_SECONDS = 10),
          (r.THIRTY_SECONDS = 30),
          (r.SIXTY_SECONDS = 60),
          (r.ONE_MINUTE = r.SIXTY_SECONDS),
          (r.FIVE_MINUTES = r.ONE_MINUTE * 5),
          (r.TEN_MINUTES = r.ONE_MINUTE * 10),
          (r.THIRTY_MINUTES = r.ONE_MINUTE * 30),
          (r.SIXTY_MINUTES = r.ONE_MINUTE * 60),
          (r.ONE_HOUR = r.SIXTY_MINUTES),
          (r.THREE_HOURS = r.ONE_HOUR * 3),
          (r.SIX_HOURS = r.ONE_HOUR * 6),
          (r.TWELVE_HOURS = r.ONE_HOUR * 12),
          (r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24),
          (r.ONE_DAY = r.TWENTY_FOUR_HOURS),
          (r.THREE_DAYS = r.ONE_DAY * 3),
          (r.FIVE_DAYS = r.ONE_DAY * 5),
          (r.SEVEN_DAYS = r.ONE_DAY * 7),
          (r.THIRTY_DAYS = r.ONE_DAY * 30),
          (r.ONE_WEEK = r.SEVEN_DAYS),
          (r.TWO_WEEKS = r.ONE_WEEK * 2),
          (r.THREE_WEEKS = r.ONE_WEEK * 3),
          (r.FOUR_WEEKS = r.ONE_WEEK * 4),
          (r.ONE_YEAR = r.ONE_DAY * 365);
      })(ze)),
    ze
  );
}
var cr;
function Kr() {
  return (
    cr ||
      ((cr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = Be;
        n.__exportStar(Et(), r), n.__exportStar(bt(), r);
      })($e)),
    $e
  );
}
var lr;
function wt() {
  if (lr) return be;
  (lr = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.fromMiliseconds = be.toMiliseconds = void 0);
  const r = Kr();
  function n(h) {
    return h * r.ONE_THOUSAND;
  }
  be.toMiliseconds = n;
  function f(h) {
    return Math.floor(h / r.ONE_THOUSAND);
  }
  return (be.fromMiliseconds = f), be;
}
var Dr;
function gt() {
  return (
    Dr ||
      ((Dr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = Be;
        n.__exportStar(_t(), r), n.__exportStar(wt(), r);
      })(Ke)),
    Ke
  );
}
var ve = {},
  dr;
function yt() {
  if (dr) return ve;
  (dr = 1),
    Object.defineProperty(ve, "__esModule", { value: !0 }),
    (ve.Watch = void 0);
  class r {
    constructor() {
      this.timestamps = new Map();
    }
    start(f) {
      if (this.timestamps.has(f))
        throw new Error(`Watch already started for label: ${f}`);
      this.timestamps.set(f, { started: Date.now() });
    }
    stop(f) {
      const h = this.get(f);
      if (typeof h.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${f}`);
      const g = Date.now() - h.started;
      this.timestamps.set(f, { started: h.started, elapsed: g });
    }
    get(f) {
      const h = this.timestamps.get(f);
      if (typeof h > "u") throw new Error(`No timestamp found for label: ${f}`);
      return h;
    }
    elapsed(f) {
      const h = this.get(f);
      return h.elapsed || Date.now() - h.started;
    }
  }
  return (ve.Watch = r), (ve.default = r), ve;
}
var Ye = {},
  Ce = {},
  _r;
function vt() {
  if (_r) return Ce;
  (_r = 1),
    Object.defineProperty(Ce, "__esModule", { value: !0 }),
    (Ce.IWatch = void 0);
  class r {}
  return (Ce.IWatch = r), Ce;
}
var Er;
function mt() {
  return (
    Er ||
      ((Er = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          Be.__exportStar(vt(), r);
      })(Ye)),
    Ye
  );
}
var br;
function St() {
  return (
    br ||
      ((br = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = Be;
        n.__exportStar(gt(), r),
          n.__exportStar(yt(), r),
          n.__exportStar(mt(), r),
          n.__exportStar(Kr(), r);
      })(He)),
    He
  );
}
var xn = St(),
  V = {},
  wr;
function $r() {
  if (wr) return V;
  (wr = 1),
    Object.defineProperty(V, "__esModule", { value: !0 }),
    (V.getLocalStorage =
      V.getLocalStorageOrThrow =
      V.getCrypto =
      V.getCryptoOrThrow =
      V.getLocation =
      V.getLocationOrThrow =
      V.getNavigator =
      V.getNavigatorOrThrow =
      V.getDocument =
      V.getDocumentOrThrow =
      V.getFromWindowOrThrow =
      V.getFromWindow =
        void 0);
  function r(m) {
    let y;
    return typeof window < "u" && typeof window[m] < "u" && (y = window[m]), y;
  }
  V.getFromWindow = r;
  function n(m) {
    const y = r(m);
    if (!y) throw new Error(`${m} is not defined in Window`);
    return y;
  }
  V.getFromWindowOrThrow = n;
  function f() {
    return n("document");
  }
  V.getDocumentOrThrow = f;
  function h() {
    return r("document");
  }
  V.getDocument = h;
  function g() {
    return n("navigator");
  }
  V.getNavigatorOrThrow = g;
  function d() {
    return r("navigator");
  }
  V.getNavigator = d;
  function _() {
    return n("location");
  }
  V.getLocationOrThrow = _;
  function t() {
    return r("location");
  }
  V.getLocation = t;
  function a() {
    return n("crypto");
  }
  V.getCryptoOrThrow = a;
  function s() {
    return r("crypto");
  }
  V.getCrypto = s;
  function b() {
    return n("localStorage");
  }
  V.getLocalStorageOrThrow = b;
  function S() {
    return r("localStorage");
  }
  return (V.getLocalStorage = S), V;
}
var Ln = $r(),
  Oe = {},
  gr;
function pt() {
  if (gr) return Oe;
  (gr = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe.getWindowMetadata = void 0);
  const r = $r();
  function n() {
    let f, h;
    try {
      (f = r.getDocumentOrThrow()), (h = r.getLocationOrThrow());
    } catch {
      return null;
    }
    function g() {
      const y = f.getElementsByTagName("link"),
        p = [];
      for (let A = 0; A < y.length; A++) {
        const O = y[A],
          x = O.getAttribute("rel");
        if (x && x.toLowerCase().indexOf("icon") > -1) {
          const c = O.getAttribute("href");
          if (c)
            if (
              c.toLowerCase().indexOf("https:") === -1 &&
              c.toLowerCase().indexOf("http:") === -1 &&
              c.indexOf("//") !== 0
            ) {
              let v = h.protocol + "//" + h.host;
              if (c.indexOf("/") === 0) v += c;
              else {
                const o = h.pathname.split("/");
                o.pop();
                const l = o.join("/");
                v += l + "/" + c;
              }
              p.push(v);
            } else if (c.indexOf("//") === 0) {
              const v = h.protocol + c;
              p.push(v);
            } else p.push(c);
        }
      }
      return p;
    }
    function d(...y) {
      const p = f.getElementsByTagName("meta");
      for (let A = 0; A < p.length; A++) {
        const O = p[A],
          x = ["itemprop", "property", "name"]
            .map((c) => O.getAttribute(c))
            .filter((c) => (c ? y.includes(c) : !1));
        if (x.length && x) {
          const c = O.getAttribute("content");
          if (c) return c;
        }
      }
      return "";
    }
    function _() {
      let y = d("name", "og:site_name", "og:title", "twitter:title");
      return y || (y = f.title), y;
    }
    function t() {
      return d(
        "description",
        "og:description",
        "twitter:description",
        "keywords"
      );
    }
    const a = _(),
      s = t(),
      b = h.origin,
      S = g();
    return { description: s, url: b, icons: S, name: a };
  }
  return (Oe.getWindowMetadata = n), Oe;
}
var Mn = pt(),
  We = {},
  Ge,
  yr;
function Ct() {
  return (
    yr ||
      ((yr = 1),
      (Ge = (r) =>
        encodeURIComponent(r).replace(
          /[!'()*]/g,
          (n) => `%${n.charCodeAt(0).toString(16).toUpperCase()}`
        ))),
    Ge
  );
}
var Ve, vr;
function Ot() {
  if (vr) return Ve;
  vr = 1;
  var r = "%[a-f0-9]{2}",
    n = new RegExp("(" + r + ")|([^%]+?)", "gi"),
    f = new RegExp("(" + r + ")+", "gi");
  function h(_, t) {
    try {
      return [decodeURIComponent(_.join(""))];
    } catch {}
    if (_.length === 1) return _;
    t = t || 1;
    var a = _.slice(0, t),
      s = _.slice(t);
    return Array.prototype.concat.call([], h(a), h(s));
  }
  function g(_) {
    try {
      return decodeURIComponent(_);
    } catch {
      for (var t = _.match(n) || [], a = 1; a < t.length; a++)
        (_ = h(t, a).join("")), (t = _.match(n) || []);
      return _;
    }
  }
  function d(_) {
    for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, a = f.exec(_); a; ) {
      try {
        t[a[0]] = decodeURIComponent(a[0]);
      } catch {
        var s = g(a[0]);
        s !== a[0] && (t[a[0]] = s);
      }
      a = f.exec(_);
    }
    t["%C2"] = "�";
    for (var b = Object.keys(t), S = 0; S < b.length; S++) {
      var m = b[S];
      _ = _.replace(new RegExp(m, "g"), t[m]);
    }
    return _;
  }
  return (
    (Ve = function (_) {
      if (typeof _ != "string")
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof _ + "`"
        );
      try {
        return (_ = _.replace(/\+/g, " ")), decodeURIComponent(_);
      } catch {
        return d(_);
      }
    }),
    Ve
  );
}
var Xe, mr;
function At() {
  return (
    mr ||
      ((mr = 1),
      (Xe = (r, n) => {
        if (!(typeof r == "string" && typeof n == "string"))
          throw new TypeError("Expected the arguments to be of type `string`");
        if (n === "") return [r];
        const f = r.indexOf(n);
        return f === -1 ? [r] : [r.slice(0, f), r.slice(f + n.length)];
      })),
    Xe
  );
}
var Qe, Sr;
function Ut() {
  return (
    Sr ||
      ((Sr = 1),
      (Qe = function (r, n) {
        for (
          var f = {}, h = Object.keys(r), g = Array.isArray(n), d = 0;
          d < h.length;
          d++
        ) {
          var _ = h[d],
            t = r[_];
          (g ? n.indexOf(_) !== -1 : n(_, t, r)) && (f[_] = t);
        }
        return f;
      })),
    Qe
  );
}
var pr;
function Ft() {
  return (
    pr ||
      ((pr = 1),
      (function (r) {
        const n = Ct(),
          f = Ot(),
          h = At(),
          g = Ut(),
          d = (c) => c == null,
          _ = Symbol("encodeFragmentIdentifier");
        function t(c) {
          switch (c.arrayFormat) {
            case "index":
              return (v) => (o, l) => {
                const D = o.length;
                return l === void 0 ||
                  (c.skipNull && l === null) ||
                  (c.skipEmptyString && l === "")
                  ? o
                  : l === null
                  ? [...o, [b(v, c), "[", D, "]"].join("")]
                  : [...o, [b(v, c), "[", b(D, c), "]=", b(l, c)].join("")];
              };
            case "bracket":
              return (v) => (o, l) =>
                l === void 0 ||
                (c.skipNull && l === null) ||
                (c.skipEmptyString && l === "")
                  ? o
                  : l === null
                  ? [...o, [b(v, c), "[]"].join("")]
                  : [...o, [b(v, c), "[]=", b(l, c)].join("")];
            case "colon-list-separator":
              return (v) => (o, l) =>
                l === void 0 ||
                (c.skipNull && l === null) ||
                (c.skipEmptyString && l === "")
                  ? o
                  : l === null
                  ? [...o, [b(v, c), ":list="].join("")]
                  : [...o, [b(v, c), ":list=", b(l, c)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator": {
              const v = c.arrayFormat === "bracket-separator" ? "[]=" : "=";
              return (o) => (l, D) =>
                D === void 0 ||
                (c.skipNull && D === null) ||
                (c.skipEmptyString && D === "")
                  ? l
                  : ((D = D === null ? "" : D),
                    l.length === 0
                      ? [[b(o, c), v, b(D, c)].join("")]
                      : [[l, b(D, c)].join(c.arrayFormatSeparator)]);
            }
            default:
              return (v) => (o, l) =>
                l === void 0 ||
                (c.skipNull && l === null) ||
                (c.skipEmptyString && l === "")
                  ? o
                  : l === null
                  ? [...o, b(v, c)]
                  : [...o, [b(v, c), "=", b(l, c)].join("")];
          }
        }
        function a(c) {
          let v;
          switch (c.arrayFormat) {
            case "index":
              return (o, l, D) => {
                if (
                  ((v = /\[(\d*)\]$/.exec(o)),
                  (o = o.replace(/\[\d*\]$/, "")),
                  !v)
                ) {
                  D[o] = l;
                  return;
                }
                D[o] === void 0 && (D[o] = {}), (D[o][v[1]] = l);
              };
            case "bracket":
              return (o, l, D) => {
                if (
                  ((v = /(\[\])$/.exec(o)), (o = o.replace(/\[\]$/, "")), !v)
                ) {
                  D[o] = l;
                  return;
                }
                if (D[o] === void 0) {
                  D[o] = [l];
                  return;
                }
                D[o] = [].concat(D[o], l);
              };
            case "colon-list-separator":
              return (o, l, D) => {
                if (
                  ((v = /(:list)$/.exec(o)), (o = o.replace(/:list$/, "")), !v)
                ) {
                  D[o] = l;
                  return;
                }
                if (D[o] === void 0) {
                  D[o] = [l];
                  return;
                }
                D[o] = [].concat(D[o], l);
              };
            case "comma":
            case "separator":
              return (o, l, D) => {
                const e =
                    typeof l == "string" && l.includes(c.arrayFormatSeparator),
                  i =
                    typeof l == "string" &&
                    !e &&
                    S(l, c).includes(c.arrayFormatSeparator);
                l = i ? S(l, c) : l;
                const F =
                  e || i
                    ? l.split(c.arrayFormatSeparator).map((N) => S(N, c))
                    : l === null
                    ? l
                    : S(l, c);
                D[o] = F;
              };
            case "bracket-separator":
              return (o, l, D) => {
                const e = /(\[\])$/.test(o);
                if (((o = o.replace(/\[\]$/, "")), !e)) {
                  D[o] = l && S(l, c);
                  return;
                }
                const i =
                  l === null
                    ? []
                    : l.split(c.arrayFormatSeparator).map((F) => S(F, c));
                if (D[o] === void 0) {
                  D[o] = i;
                  return;
                }
                D[o] = [].concat(D[o], i);
              };
            default:
              return (o, l, D) => {
                if (D[o] === void 0) {
                  D[o] = l;
                  return;
                }
                D[o] = [].concat(D[o], l);
              };
          }
        }
        function s(c) {
          if (typeof c != "string" || c.length !== 1)
            throw new TypeError(
              "arrayFormatSeparator must be single character string"
            );
        }
        function b(c, v) {
          return v.encode ? (v.strict ? n(c) : encodeURIComponent(c)) : c;
        }
        function S(c, v) {
          return v.decode ? f(c) : c;
        }
        function m(c) {
          return Array.isArray(c)
            ? c.sort()
            : typeof c == "object"
            ? m(Object.keys(c))
                .sort((v, o) => Number(v) - Number(o))
                .map((v) => c[v])
            : c;
        }
        function y(c) {
          const v = c.indexOf("#");
          return v !== -1 && (c = c.slice(0, v)), c;
        }
        function p(c) {
          let v = "";
          const o = c.indexOf("#");
          return o !== -1 && (v = c.slice(o)), v;
        }
        function A(c) {
          c = y(c);
          const v = c.indexOf("?");
          return v === -1 ? "" : c.slice(v + 1);
        }
        function O(c, v) {
          return (
            v.parseNumbers &&
            !Number.isNaN(Number(c)) &&
            typeof c == "string" &&
            c.trim() !== ""
              ? (c = Number(c))
              : v.parseBooleans &&
                c !== null &&
                (c.toLowerCase() === "true" || c.toLowerCase() === "false") &&
                (c = c.toLowerCase() === "true"),
            c
          );
        }
        function x(c, v) {
          (v = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            v
          )),
            s(v.arrayFormatSeparator);
          const o = a(v),
            l = Object.create(null);
          if (
            typeof c != "string" ||
            ((c = c.trim().replace(/^[?#&]/, "")), !c)
          )
            return l;
          for (const D of c.split("&")) {
            if (D === "") continue;
            let [e, i] = h(v.decode ? D.replace(/\+/g, " ") : D, "=");
            (i =
              i === void 0
                ? null
                : ["comma", "separator", "bracket-separator"].includes(
                    v.arrayFormat
                  )
                ? i
                : S(i, v)),
              o(S(e, v), i, l);
          }
          for (const D of Object.keys(l)) {
            const e = l[D];
            if (typeof e == "object" && e !== null)
              for (const i of Object.keys(e)) e[i] = O(e[i], v);
            else l[D] = O(e, v);
          }
          return v.sort === !1
            ? l
            : (v.sort === !0
                ? Object.keys(l).sort()
                : Object.keys(l).sort(v.sort)
              ).reduce((D, e) => {
                const i = l[e];
                return (
                  i && typeof i == "object" && !Array.isArray(i)
                    ? (D[e] = m(i))
                    : (D[e] = i),
                  D
                );
              }, Object.create(null));
        }
        (r.extract = A),
          (r.parse = x),
          (r.stringify = (c, v) => {
            if (!c) return "";
            (v = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              v
            )),
              s(v.arrayFormatSeparator);
            const o = (i) =>
                (v.skipNull && d(c[i])) || (v.skipEmptyString && c[i] === ""),
              l = t(v),
              D = {};
            for (const i of Object.keys(c)) o(i) || (D[i] = c[i]);
            const e = Object.keys(D);
            return (
              v.sort !== !1 && e.sort(v.sort),
              e
                .map((i) => {
                  const F = c[i];
                  return F === void 0
                    ? ""
                    : F === null
                    ? b(i, v)
                    : Array.isArray(F)
                    ? F.length === 0 && v.arrayFormat === "bracket-separator"
                      ? b(i, v) + "[]"
                      : F.reduce(l(i), []).join("&")
                    : b(i, v) + "=" + b(F, v);
                })
                .filter((i) => i.length > 0)
                .join("&")
            );
          }),
          (r.parseUrl = (c, v) => {
            v = Object.assign({ decode: !0 }, v);
            const [o, l] = h(c, "#");
            return Object.assign(
              { url: o.split("?")[0] || "", query: x(A(c), v) },
              v && v.parseFragmentIdentifier && l
                ? { fragmentIdentifier: S(l, v) }
                : {}
            );
          }),
          (r.stringifyUrl = (c, v) => {
            v = Object.assign({ encode: !0, strict: !0, [_]: !0 }, v);
            const o = y(c.url).split("?")[0] || "",
              l = r.extract(c.url),
              D = r.parse(l, { sort: !1 }),
              e = Object.assign(D, c.query);
            let i = r.stringify(e, v);
            i && (i = `?${i}`);
            let F = p(c.url);
            return (
              c.fragmentIdentifier &&
                (F = `#${
                  v[_] ? b(c.fragmentIdentifier, v) : c.fragmentIdentifier
                }`),
              `${o}${i}${F}`
            );
          }),
          (r.pick = (c, v, o) => {
            o = Object.assign({ parseFragmentIdentifier: !0, [_]: !1 }, o);
            const {
              url: l,
              query: D,
              fragmentIdentifier: e,
            } = r.parseUrl(c, o);
            return r.stringifyUrl(
              { url: l, query: g(D, v), fragmentIdentifier: e },
              o
            );
          }),
          (r.exclude = (c, v, o) => {
            const l = Array.isArray(v)
              ? (D) => !v.includes(D)
              : (D, e) => !v(D, e);
            return r.pick(c, l, o);
          });
      })(We)),
    We
  );
}
var Rn = Ft(),
  Je = {},
  Ae = {},
  H = {},
  Ze = {},
  Cr;
function Tt() {
  return (
    Cr ||
      ((Cr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        function n(t, a) {
          var s = (t >>> 16) & 65535,
            b = t & 65535,
            S = (a >>> 16) & 65535,
            m = a & 65535;
          return (b * m + (((s * m + b * S) << 16) >>> 0)) | 0;
        }
        r.mul = Math.imul || n;
        function f(t, a) {
          return (t + a) | 0;
        }
        r.add = f;
        function h(t, a) {
          return (t - a) | 0;
        }
        r.sub = h;
        function g(t, a) {
          return (t << a) | (t >>> (32 - a));
        }
        r.rotl = g;
        function d(t, a) {
          return (t << (32 - a)) | (t >>> a);
        }
        r.rotr = d;
        function _(t) {
          return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
        }
        (r.isInteger = Number.isInteger || _),
          (r.MAX_SAFE_INTEGER = 9007199254740991),
          (r.isSafeInteger = function (t) {
            return (
              r.isInteger(t) &&
              t >= -r.MAX_SAFE_INTEGER &&
              t <= r.MAX_SAFE_INTEGER
            );
          });
      })(Ze)),
    Ze
  );
}
var Or;
function Ie() {
  if (Or) return H;
  (Or = 1), Object.defineProperty(H, "__esModule", { value: !0 });
  var r = Tt();
  function n(w, u) {
    return u === void 0 && (u = 0), (((w[u + 0] << 8) | w[u + 1]) << 16) >> 16;
  }
  H.readInt16BE = n;
  function f(w, u) {
    return u === void 0 && (u = 0), ((w[u + 0] << 8) | w[u + 1]) >>> 0;
  }
  H.readUint16BE = f;
  function h(w, u) {
    return u === void 0 && (u = 0), (((w[u + 1] << 8) | w[u]) << 16) >> 16;
  }
  H.readInt16LE = h;
  function g(w, u) {
    return u === void 0 && (u = 0), ((w[u + 1] << 8) | w[u]) >>> 0;
  }
  H.readUint16LE = g;
  function d(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(2)),
      E === void 0 && (E = 0),
      (u[E + 0] = w >>> 8),
      (u[E + 1] = w >>> 0),
      u
    );
  }
  (H.writeUint16BE = d), (H.writeInt16BE = d);
  function _(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(2)),
      E === void 0 && (E = 0),
      (u[E + 0] = w >>> 0),
      (u[E + 1] = w >>> 8),
      u
    );
  }
  (H.writeUint16LE = _), (H.writeInt16LE = _);
  function t(w, u) {
    return (
      u === void 0 && (u = 0),
      (w[u] << 24) | (w[u + 1] << 16) | (w[u + 2] << 8) | w[u + 3]
    );
  }
  H.readInt32BE = t;
  function a(w, u) {
    return (
      u === void 0 && (u = 0),
      ((w[u] << 24) | (w[u + 1] << 16) | (w[u + 2] << 8) | w[u + 3]) >>> 0
    );
  }
  H.readUint32BE = a;
  function s(w, u) {
    return (
      u === void 0 && (u = 0),
      (w[u + 3] << 24) | (w[u + 2] << 16) | (w[u + 1] << 8) | w[u]
    );
  }
  H.readInt32LE = s;
  function b(w, u) {
    return (
      u === void 0 && (u = 0),
      ((w[u + 3] << 24) | (w[u + 2] << 16) | (w[u + 1] << 8) | w[u]) >>> 0
    );
  }
  H.readUint32LE = b;
  function S(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(4)),
      E === void 0 && (E = 0),
      (u[E + 0] = w >>> 24),
      (u[E + 1] = w >>> 16),
      (u[E + 2] = w >>> 8),
      (u[E + 3] = w >>> 0),
      u
    );
  }
  (H.writeUint32BE = S), (H.writeInt32BE = S);
  function m(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(4)),
      E === void 0 && (E = 0),
      (u[E + 0] = w >>> 0),
      (u[E + 1] = w >>> 8),
      (u[E + 2] = w >>> 16),
      (u[E + 3] = w >>> 24),
      u
    );
  }
  (H.writeUint32LE = m), (H.writeInt32LE = m);
  function y(w, u) {
    u === void 0 && (u = 0);
    var E = t(w, u),
      U = t(w, u + 4);
    return E * 4294967296 + U - (U >> 31) * 4294967296;
  }
  H.readInt64BE = y;
  function p(w, u) {
    u === void 0 && (u = 0);
    var E = a(w, u),
      U = a(w, u + 4);
    return E * 4294967296 + U;
  }
  H.readUint64BE = p;
  function A(w, u) {
    u === void 0 && (u = 0);
    var E = s(w, u),
      U = s(w, u + 4);
    return U * 4294967296 + E - (E >> 31) * 4294967296;
  }
  H.readInt64LE = A;
  function O(w, u) {
    u === void 0 && (u = 0);
    var E = b(w, u),
      U = b(w, u + 4);
    return U * 4294967296 + E;
  }
  H.readUint64LE = O;
  function x(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(8)),
      E === void 0 && (E = 0),
      S((w / 4294967296) >>> 0, u, E),
      S(w >>> 0, u, E + 4),
      u
    );
  }
  (H.writeUint64BE = x), (H.writeInt64BE = x);
  function c(w, u, E) {
    return (
      u === void 0 && (u = new Uint8Array(8)),
      E === void 0 && (E = 0),
      m(w >>> 0, u, E),
      m((w / 4294967296) >>> 0, u, E + 4),
      u
    );
  }
  (H.writeUint64LE = c), (H.writeInt64LE = c);
  function v(w, u, E) {
    if ((E === void 0 && (E = 0), w % 8 !== 0))
      throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (w / 8 > u.length - E)
      throw new Error("readUintBE: array is too short for the given bitLength");
    for (var U = 0, B = 1, R = w / 8 + E - 1; R >= E; R--)
      (U += u[R] * B), (B *= 256);
    return U;
  }
  H.readUintBE = v;
  function o(w, u, E) {
    if ((E === void 0 && (E = 0), w % 8 !== 0))
      throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (w / 8 > u.length - E)
      throw new Error("readUintLE: array is too short for the given bitLength");
    for (var U = 0, B = 1, R = E; R < E + w / 8; R++)
      (U += u[R] * B), (B *= 256);
    return U;
  }
  H.readUintLE = o;
  function l(w, u, E, U) {
    if (
      (E === void 0 && (E = new Uint8Array(w / 8)),
      U === void 0 && (U = 0),
      w % 8 !== 0)
    )
      throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!r.isSafeInteger(u))
      throw new Error("writeUintBE value must be an integer");
    for (var B = 1, R = w / 8 + U - 1; R >= U; R--)
      (E[R] = (u / B) & 255), (B *= 256);
    return E;
  }
  H.writeUintBE = l;
  function D(w, u, E, U) {
    if (
      (E === void 0 && (E = new Uint8Array(w / 8)),
      U === void 0 && (U = 0),
      w % 8 !== 0)
    )
      throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!r.isSafeInteger(u))
      throw new Error("writeUintLE value must be an integer");
    for (var B = 1, R = U; R < U + w / 8; R++)
      (E[R] = (u / B) & 255), (B *= 256);
    return E;
  }
  H.writeUintLE = D;
  function e(w, u) {
    u === void 0 && (u = 0);
    var E = new DataView(w.buffer, w.byteOffset, w.byteLength);
    return E.getFloat32(u);
  }
  H.readFloat32BE = e;
  function i(w, u) {
    u === void 0 && (u = 0);
    var E = new DataView(w.buffer, w.byteOffset, w.byteLength);
    return E.getFloat32(u, !0);
  }
  H.readFloat32LE = i;
  function F(w, u) {
    u === void 0 && (u = 0);
    var E = new DataView(w.buffer, w.byteOffset, w.byteLength);
    return E.getFloat64(u);
  }
  H.readFloat64BE = F;
  function N(w, u) {
    u === void 0 && (u = 0);
    var E = new DataView(w.buffer, w.byteOffset, w.byteLength);
    return E.getFloat64(u, !0);
  }
  H.readFloat64LE = N;
  function j(w, u, E) {
    u === void 0 && (u = new Uint8Array(4)), E === void 0 && (E = 0);
    var U = new DataView(u.buffer, u.byteOffset, u.byteLength);
    return U.setFloat32(E, w), u;
  }
  H.writeFloat32BE = j;
  function P(w, u, E) {
    u === void 0 && (u = new Uint8Array(4)), E === void 0 && (E = 0);
    var U = new DataView(u.buffer, u.byteOffset, u.byteLength);
    return U.setFloat32(E, w, !0), u;
  }
  H.writeFloat32LE = P;
  function q(w, u, E) {
    u === void 0 && (u = new Uint8Array(8)), E === void 0 && (E = 0);
    var U = new DataView(u.buffer, u.byteOffset, u.byteLength);
    return U.setFloat64(E, w), u;
  }
  H.writeFloat64BE = q;
  function M(w, u, E) {
    u === void 0 && (u = new Uint8Array(8)), E === void 0 && (E = 0);
    var U = new DataView(u.buffer, u.byteOffset, u.byteLength);
    return U.setFloat64(E, w, !0), u;
  }
  return (H.writeFloat64LE = M), H;
}
var Me = {},
  Ar;
function _e() {
  if (Ar) return Me;
  (Ar = 1), Object.defineProperty(Me, "__esModule", { value: !0 });
  function r(n) {
    for (var f = 0; f < n.length; f++) n[f] = 0;
    return n;
  }
  return (Me.wipe = r), Me;
}
var Ur;
function Nt() {
  if (Ur) return Ae;
  (Ur = 1), Object.defineProperty(Ae, "__esModule", { value: !0 });
  var r = Ie(),
    n = _e(),
    f = 20;
  function h(t, a, s) {
    for (
      var b = 1634760805,
        S = 857760878,
        m = 2036477234,
        y = 1797285236,
        p = (s[3] << 24) | (s[2] << 16) | (s[1] << 8) | s[0],
        A = (s[7] << 24) | (s[6] << 16) | (s[5] << 8) | s[4],
        O = (s[11] << 24) | (s[10] << 16) | (s[9] << 8) | s[8],
        x = (s[15] << 24) | (s[14] << 16) | (s[13] << 8) | s[12],
        c = (s[19] << 24) | (s[18] << 16) | (s[17] << 8) | s[16],
        v = (s[23] << 24) | (s[22] << 16) | (s[21] << 8) | s[20],
        o = (s[27] << 24) | (s[26] << 16) | (s[25] << 8) | s[24],
        l = (s[31] << 24) | (s[30] << 16) | (s[29] << 8) | s[28],
        D = (a[3] << 24) | (a[2] << 16) | (a[1] << 8) | a[0],
        e = (a[7] << 24) | (a[6] << 16) | (a[5] << 8) | a[4],
        i = (a[11] << 24) | (a[10] << 16) | (a[9] << 8) | a[8],
        F = (a[15] << 24) | (a[14] << 16) | (a[13] << 8) | a[12],
        N = b,
        j = S,
        P = m,
        q = y,
        M = p,
        w = A,
        u = O,
        E = x,
        U = c,
        B = v,
        R = o,
        K = l,
        I = D,
        C = e,
        T = i,
        L = F,
        $ = 0;
      $ < f;
      $ += 2
    )
      (N = (N + M) | 0),
        (I ^= N),
        (I = (I >>> 16) | (I << 16)),
        (U = (U + I) | 0),
        (M ^= U),
        (M = (M >>> 20) | (M << 12)),
        (j = (j + w) | 0),
        (C ^= j),
        (C = (C >>> 16) | (C << 16)),
        (B = (B + C) | 0),
        (w ^= B),
        (w = (w >>> 20) | (w << 12)),
        (P = (P + u) | 0),
        (T ^= P),
        (T = (T >>> 16) | (T << 16)),
        (R = (R + T) | 0),
        (u ^= R),
        (u = (u >>> 20) | (u << 12)),
        (q = (q + E) | 0),
        (L ^= q),
        (L = (L >>> 16) | (L << 16)),
        (K = (K + L) | 0),
        (E ^= K),
        (E = (E >>> 20) | (E << 12)),
        (P = (P + u) | 0),
        (T ^= P),
        (T = (T >>> 24) | (T << 8)),
        (R = (R + T) | 0),
        (u ^= R),
        (u = (u >>> 25) | (u << 7)),
        (q = (q + E) | 0),
        (L ^= q),
        (L = (L >>> 24) | (L << 8)),
        (K = (K + L) | 0),
        (E ^= K),
        (E = (E >>> 25) | (E << 7)),
        (j = (j + w) | 0),
        (C ^= j),
        (C = (C >>> 24) | (C << 8)),
        (B = (B + C) | 0),
        (w ^= B),
        (w = (w >>> 25) | (w << 7)),
        (N = (N + M) | 0),
        (I ^= N),
        (I = (I >>> 24) | (I << 8)),
        (U = (U + I) | 0),
        (M ^= U),
        (M = (M >>> 25) | (M << 7)),
        (N = (N + w) | 0),
        (L ^= N),
        (L = (L >>> 16) | (L << 16)),
        (R = (R + L) | 0),
        (w ^= R),
        (w = (w >>> 20) | (w << 12)),
        (j = (j + u) | 0),
        (I ^= j),
        (I = (I >>> 16) | (I << 16)),
        (K = (K + I) | 0),
        (u ^= K),
        (u = (u >>> 20) | (u << 12)),
        (P = (P + E) | 0),
        (C ^= P),
        (C = (C >>> 16) | (C << 16)),
        (U = (U + C) | 0),
        (E ^= U),
        (E = (E >>> 20) | (E << 12)),
        (q = (q + M) | 0),
        (T ^= q),
        (T = (T >>> 16) | (T << 16)),
        (B = (B + T) | 0),
        (M ^= B),
        (M = (M >>> 20) | (M << 12)),
        (P = (P + E) | 0),
        (C ^= P),
        (C = (C >>> 24) | (C << 8)),
        (U = (U + C) | 0),
        (E ^= U),
        (E = (E >>> 25) | (E << 7)),
        (q = (q + M) | 0),
        (T ^= q),
        (T = (T >>> 24) | (T << 8)),
        (B = (B + T) | 0),
        (M ^= B),
        (M = (M >>> 25) | (M << 7)),
        (j = (j + u) | 0),
        (I ^= j),
        (I = (I >>> 24) | (I << 8)),
        (K = (K + I) | 0),
        (u ^= K),
        (u = (u >>> 25) | (u << 7)),
        (N = (N + w) | 0),
        (L ^= N),
        (L = (L >>> 24) | (L << 8)),
        (R = (R + L) | 0),
        (w ^= R),
        (w = (w >>> 25) | (w << 7));
    r.writeUint32LE((N + b) | 0, t, 0),
      r.writeUint32LE((j + S) | 0, t, 4),
      r.writeUint32LE((P + m) | 0, t, 8),
      r.writeUint32LE((q + y) | 0, t, 12),
      r.writeUint32LE((M + p) | 0, t, 16),
      r.writeUint32LE((w + A) | 0, t, 20),
      r.writeUint32LE((u + O) | 0, t, 24),
      r.writeUint32LE((E + x) | 0, t, 28),
      r.writeUint32LE((U + c) | 0, t, 32),
      r.writeUint32LE((B + v) | 0, t, 36),
      r.writeUint32LE((R + o) | 0, t, 40),
      r.writeUint32LE((K + l) | 0, t, 44),
      r.writeUint32LE((I + D) | 0, t, 48),
      r.writeUint32LE((C + e) | 0, t, 52),
      r.writeUint32LE((T + i) | 0, t, 56),
      r.writeUint32LE((L + F) | 0, t, 60);
  }
  function g(t, a, s, b, S) {
    if ((S === void 0 && (S = 0), t.length !== 32))
      throw new Error("ChaCha: key size must be 32 bytes");
    if (b.length < s.length)
      throw new Error("ChaCha: destination is shorter than source");
    var m, y;
    if (S === 0) {
      if (a.length !== 8 && a.length !== 12)
        throw new Error("ChaCha nonce must be 8 or 12 bytes");
      (m = new Uint8Array(16)), (y = m.length - a.length), m.set(a, y);
    } else {
      if (a.length !== 16)
        throw new Error("ChaCha nonce with counter must be 16 bytes");
      (m = a), (y = S);
    }
    for (var p = new Uint8Array(64), A = 0; A < s.length; A += 64) {
      h(p, m, t);
      for (var O = A; O < A + 64 && O < s.length; O++) b[O] = s[O] ^ p[O - A];
      _(m, 0, y);
    }
    return n.wipe(p), S === 0 && n.wipe(m), b;
  }
  Ae.streamXOR = g;
  function d(t, a, s, b) {
    return b === void 0 && (b = 0), n.wipe(s), g(t, a, s, s, b);
  }
  Ae.stream = d;
  function _(t, a, s) {
    for (var b = 1; s--; )
      (b = (b + (t[a] & 255)) | 0), (t[a] = b & 255), (b >>>= 8), a++;
    if (b > 0) throw new Error("ChaCha: counter overflow");
  }
  return Ae;
}
var ke = {},
  ge = {},
  Fr;
function ur() {
  if (Fr) return ge;
  (Fr = 1), Object.defineProperty(ge, "__esModule", { value: !0 });
  function r(g, d, _) {
    return (~(g - 1) & d) | ((g - 1) & _);
  }
  ge.select = r;
  function n(g, d) {
    return (((g | 0) - (d | 0) - 1) >>> 31) & 1;
  }
  ge.lessOrEqual = n;
  function f(g, d) {
    if (g.length !== d.length) return 0;
    for (var _ = 0, t = 0; t < g.length; t++) _ |= g[t] ^ d[t];
    return 1 & ((_ - 1) >>> 8);
  }
  ge.compare = f;
  function h(g, d) {
    return g.length === 0 || d.length === 0 ? !1 : f(g, d) !== 0;
  }
  return (ge.equal = h), ge;
}
var Tr;
function xt() {
  return (
    Tr ||
      ((Tr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = ur(),
          f = _e();
        r.DIGEST_LENGTH = 16;
        var h = (function () {
          function _(t) {
            (this.digestLength = r.DIGEST_LENGTH),
              (this._buffer = new Uint8Array(16)),
              (this._r = new Uint16Array(10)),
              (this._h = new Uint16Array(10)),
              (this._pad = new Uint16Array(8)),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !1);
            var a = t[0] | (t[1] << 8);
            this._r[0] = a & 8191;
            var s = t[2] | (t[3] << 8);
            this._r[1] = ((a >>> 13) | (s << 3)) & 8191;
            var b = t[4] | (t[5] << 8);
            this._r[2] = ((s >>> 10) | (b << 6)) & 7939;
            var S = t[6] | (t[7] << 8);
            this._r[3] = ((b >>> 7) | (S << 9)) & 8191;
            var m = t[8] | (t[9] << 8);
            (this._r[4] = ((S >>> 4) | (m << 12)) & 255),
              (this._r[5] = (m >>> 1) & 8190);
            var y = t[10] | (t[11] << 8);
            this._r[6] = ((m >>> 14) | (y << 2)) & 8191;
            var p = t[12] | (t[13] << 8);
            this._r[7] = ((y >>> 11) | (p << 5)) & 8065;
            var A = t[14] | (t[15] << 8);
            (this._r[8] = ((p >>> 8) | (A << 8)) & 8191),
              (this._r[9] = (A >>> 5) & 127),
              (this._pad[0] = t[16] | (t[17] << 8)),
              (this._pad[1] = t[18] | (t[19] << 8)),
              (this._pad[2] = t[20] | (t[21] << 8)),
              (this._pad[3] = t[22] | (t[23] << 8)),
              (this._pad[4] = t[24] | (t[25] << 8)),
              (this._pad[5] = t[26] | (t[27] << 8)),
              (this._pad[6] = t[28] | (t[29] << 8)),
              (this._pad[7] = t[30] | (t[31] << 8));
          }
          return (
            (_.prototype._blocks = function (t, a, s) {
              for (
                var b = this._fin ? 0 : 2048,
                  S = this._h[0],
                  m = this._h[1],
                  y = this._h[2],
                  p = this._h[3],
                  A = this._h[4],
                  O = this._h[5],
                  x = this._h[6],
                  c = this._h[7],
                  v = this._h[8],
                  o = this._h[9],
                  l = this._r[0],
                  D = this._r[1],
                  e = this._r[2],
                  i = this._r[3],
                  F = this._r[4],
                  N = this._r[5],
                  j = this._r[6],
                  P = this._r[7],
                  q = this._r[8],
                  M = this._r[9];
                s >= 16;

              ) {
                var w = t[a + 0] | (t[a + 1] << 8);
                S += w & 8191;
                var u = t[a + 2] | (t[a + 3] << 8);
                m += ((w >>> 13) | (u << 3)) & 8191;
                var E = t[a + 4] | (t[a + 5] << 8);
                y += ((u >>> 10) | (E << 6)) & 8191;
                var U = t[a + 6] | (t[a + 7] << 8);
                p += ((E >>> 7) | (U << 9)) & 8191;
                var B = t[a + 8] | (t[a + 9] << 8);
                (A += ((U >>> 4) | (B << 12)) & 8191), (O += (B >>> 1) & 8191);
                var R = t[a + 10] | (t[a + 11] << 8);
                x += ((B >>> 14) | (R << 2)) & 8191;
                var K = t[a + 12] | (t[a + 13] << 8);
                c += ((R >>> 11) | (K << 5)) & 8191;
                var I = t[a + 14] | (t[a + 15] << 8);
                (v += ((K >>> 8) | (I << 8)) & 8191), (o += (I >>> 5) | b);
                var C = 0,
                  T = C;
                (T += S * l),
                  (T += m * (5 * M)),
                  (T += y * (5 * q)),
                  (T += p * (5 * P)),
                  (T += A * (5 * j)),
                  (C = T >>> 13),
                  (T &= 8191),
                  (T += O * (5 * N)),
                  (T += x * (5 * F)),
                  (T += c * (5 * i)),
                  (T += v * (5 * e)),
                  (T += o * (5 * D)),
                  (C += T >>> 13),
                  (T &= 8191);
                var L = C;
                (L += S * D),
                  (L += m * l),
                  (L += y * (5 * M)),
                  (L += p * (5 * q)),
                  (L += A * (5 * P)),
                  (C = L >>> 13),
                  (L &= 8191),
                  (L += O * (5 * j)),
                  (L += x * (5 * N)),
                  (L += c * (5 * F)),
                  (L += v * (5 * i)),
                  (L += o * (5 * e)),
                  (C += L >>> 13),
                  (L &= 8191);
                var $ = C;
                ($ += S * e),
                  ($ += m * D),
                  ($ += y * l),
                  ($ += p * (5 * M)),
                  ($ += A * (5 * q)),
                  (C = $ >>> 13),
                  ($ &= 8191),
                  ($ += O * (5 * P)),
                  ($ += x * (5 * j)),
                  ($ += c * (5 * N)),
                  ($ += v * (5 * F)),
                  ($ += o * (5 * i)),
                  (C += $ >>> 13),
                  ($ &= 8191);
                var z = C;
                (z += S * i),
                  (z += m * e),
                  (z += y * D),
                  (z += p * l),
                  (z += A * (5 * M)),
                  (C = z >>> 13),
                  (z &= 8191),
                  (z += O * (5 * q)),
                  (z += x * (5 * P)),
                  (z += c * (5 * j)),
                  (z += v * (5 * N)),
                  (z += o * (5 * F)),
                  (C += z >>> 13),
                  (z &= 8191);
                var Y = C;
                (Y += S * F),
                  (Y += m * i),
                  (Y += y * e),
                  (Y += p * D),
                  (Y += A * l),
                  (C = Y >>> 13),
                  (Y &= 8191),
                  (Y += O * (5 * M)),
                  (Y += x * (5 * q)),
                  (Y += c * (5 * P)),
                  (Y += v * (5 * j)),
                  (Y += o * (5 * N)),
                  (C += Y >>> 13),
                  (Y &= 8191);
                var W = C;
                (W += S * N),
                  (W += m * F),
                  (W += y * i),
                  (W += p * e),
                  (W += A * D),
                  (C = W >>> 13),
                  (W &= 8191),
                  (W += O * l),
                  (W += x * (5 * M)),
                  (W += c * (5 * q)),
                  (W += v * (5 * P)),
                  (W += o * (5 * j)),
                  (C += W >>> 13),
                  (W &= 8191);
                var G = C;
                (G += S * j),
                  (G += m * N),
                  (G += y * F),
                  (G += p * i),
                  (G += A * e),
                  (C = G >>> 13),
                  (G &= 8191),
                  (G += O * D),
                  (G += x * l),
                  (G += c * (5 * M)),
                  (G += v * (5 * q)),
                  (G += o * (5 * P)),
                  (C += G >>> 13),
                  (G &= 8191);
                var X = C;
                (X += S * P),
                  (X += m * j),
                  (X += y * N),
                  (X += p * F),
                  (X += A * i),
                  (C = X >>> 13),
                  (X &= 8191),
                  (X += O * e),
                  (X += x * D),
                  (X += c * l),
                  (X += v * (5 * M)),
                  (X += o * (5 * q)),
                  (C += X >>> 13),
                  (X &= 8191);
                var Q = C;
                (Q += S * q),
                  (Q += m * P),
                  (Q += y * j),
                  (Q += p * N),
                  (Q += A * F),
                  (C = Q >>> 13),
                  (Q &= 8191),
                  (Q += O * i),
                  (Q += x * e),
                  (Q += c * D),
                  (Q += v * l),
                  (Q += o * (5 * M)),
                  (C += Q >>> 13),
                  (Q &= 8191);
                var J = C;
                (J += S * M),
                  (J += m * q),
                  (J += y * P),
                  (J += p * j),
                  (J += A * N),
                  (C = J >>> 13),
                  (J &= 8191),
                  (J += O * F),
                  (J += x * i),
                  (J += c * e),
                  (J += v * D),
                  (J += o * l),
                  (C += J >>> 13),
                  (J &= 8191),
                  (C = ((C << 2) + C) | 0),
                  (C = (C + T) | 0),
                  (T = C & 8191),
                  (C = C >>> 13),
                  (L += C),
                  (S = T),
                  (m = L),
                  (y = $),
                  (p = z),
                  (A = Y),
                  (O = W),
                  (x = G),
                  (c = X),
                  (v = Q),
                  (o = J),
                  (a += 16),
                  (s -= 16);
              }
              (this._h[0] = S),
                (this._h[1] = m),
                (this._h[2] = y),
                (this._h[3] = p),
                (this._h[4] = A),
                (this._h[5] = O),
                (this._h[6] = x),
                (this._h[7] = c),
                (this._h[8] = v),
                (this._h[9] = o);
            }),
            (_.prototype.finish = function (t, a) {
              a === void 0 && (a = 0);
              var s = new Uint16Array(10),
                b,
                S,
                m,
                y;
              if (this._leftover) {
                for (y = this._leftover, this._buffer[y++] = 1; y < 16; y++)
                  this._buffer[y] = 0;
                (this._fin = 1), this._blocks(this._buffer, 0, 16);
              }
              for (
                b = this._h[1] >>> 13, this._h[1] &= 8191, y = 2;
                y < 10;
                y++
              )
                (this._h[y] += b),
                  (b = this._h[y] >>> 13),
                  (this._h[y] &= 8191);
              for (
                this._h[0] += b * 5,
                  b = this._h[0] >>> 13,
                  this._h[0] &= 8191,
                  this._h[1] += b,
                  b = this._h[1] >>> 13,
                  this._h[1] &= 8191,
                  this._h[2] += b,
                  s[0] = this._h[0] + 5,
                  b = s[0] >>> 13,
                  s[0] &= 8191,
                  y = 1;
                y < 10;
                y++
              )
                (s[y] = this._h[y] + b), (b = s[y] >>> 13), (s[y] &= 8191);
              for (s[9] -= 8192, S = (b ^ 1) - 1, y = 0; y < 10; y++) s[y] &= S;
              for (S = ~S, y = 0; y < 10; y++)
                this._h[y] = (this._h[y] & S) | s[y];
              for (
                this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                  this._h[1] =
                    ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                  this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                  this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                  this._h[4] =
                    ((this._h[4] >>> 12) |
                      (this._h[5] << 1) |
                      (this._h[6] << 14)) &
                    65535,
                  this._h[5] =
                    ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                  this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                  this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                  m = this._h[0] + this._pad[0],
                  this._h[0] = m & 65535,
                  y = 1;
                y < 8;
                y++
              )
                (m = (((this._h[y] + this._pad[y]) | 0) + (m >>> 16)) | 0),
                  (this._h[y] = m & 65535);
              return (
                (t[a + 0] = this._h[0] >>> 0),
                (t[a + 1] = this._h[0] >>> 8),
                (t[a + 2] = this._h[1] >>> 0),
                (t[a + 3] = this._h[1] >>> 8),
                (t[a + 4] = this._h[2] >>> 0),
                (t[a + 5] = this._h[2] >>> 8),
                (t[a + 6] = this._h[3] >>> 0),
                (t[a + 7] = this._h[3] >>> 8),
                (t[a + 8] = this._h[4] >>> 0),
                (t[a + 9] = this._h[4] >>> 8),
                (t[a + 10] = this._h[5] >>> 0),
                (t[a + 11] = this._h[5] >>> 8),
                (t[a + 12] = this._h[6] >>> 0),
                (t[a + 13] = this._h[6] >>> 8),
                (t[a + 14] = this._h[7] >>> 0),
                (t[a + 15] = this._h[7] >>> 8),
                (this._finished = !0),
                this
              );
            }),
            (_.prototype.update = function (t) {
              var a = 0,
                s = t.length,
                b;
              if (this._leftover) {
                (b = 16 - this._leftover), b > s && (b = s);
                for (var S = 0; S < b; S++)
                  this._buffer[this._leftover + S] = t[a + S];
                if (
                  ((s -= b),
                  (a += b),
                  (this._leftover += b),
                  this._leftover < 16)
                )
                  return this;
                this._blocks(this._buffer, 0, 16), (this._leftover = 0);
              }
              if (
                (s >= 16 &&
                  ((b = s - (s % 16)),
                  this._blocks(t, a, b),
                  (a += b),
                  (s -= b)),
                s)
              ) {
                for (var S = 0; S < s; S++)
                  this._buffer[this._leftover + S] = t[a + S];
                this._leftover += s;
              }
              return this;
            }),
            (_.prototype.digest = function () {
              if (this._finished) throw new Error("Poly1305 was finished");
              var t = new Uint8Array(16);
              return this.finish(t), t;
            }),
            (_.prototype.clean = function () {
              return (
                f.wipe(this._buffer),
                f.wipe(this._r),
                f.wipe(this._h),
                f.wipe(this._pad),
                (this._leftover = 0),
                (this._fin = 0),
                (this._finished = !0),
                this
              );
            }),
            _
          );
        })();
        r.Poly1305 = h;
        function g(_, t) {
          var a = new h(_);
          a.update(t);
          var s = a.digest();
          return a.clean(), s;
        }
        r.oneTimeAuth = g;
        function d(_, t) {
          return _.length !== r.DIGEST_LENGTH || t.length !== r.DIGEST_LENGTH
            ? !1
            : n.equal(_, t);
        }
        r.equal = d;
      })(ke)),
    ke
  );
}
var Nr;
function Lt() {
  return (
    Nr ||
      ((Nr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = Nt(),
          f = xt(),
          h = _e(),
          g = Ie(),
          d = ur();
        (r.KEY_LENGTH = 32), (r.NONCE_LENGTH = 12), (r.TAG_LENGTH = 16);
        var _ = new Uint8Array(16),
          t = (function () {
            function a(s) {
              if (
                ((this.nonceLength = r.NONCE_LENGTH),
                (this.tagLength = r.TAG_LENGTH),
                s.length !== r.KEY_LENGTH)
              )
                throw new Error("ChaCha20Poly1305 needs 32-byte key");
              this._key = new Uint8Array(s);
            }
            return (
              (a.prototype.seal = function (s, b, S, m) {
                if (s.length > 16)
                  throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var y = new Uint8Array(16);
                y.set(s, y.length - s.length);
                var p = new Uint8Array(32);
                n.stream(this._key, y, p, 4);
                var A = b.length + this.tagLength,
                  O;
                if (m) {
                  if (m.length !== A)
                    throw new Error(
                      "ChaCha20Poly1305: incorrect destination length"
                    );
                  O = m;
                } else O = new Uint8Array(A);
                return (
                  n.streamXOR(this._key, y, b, O, 4),
                  this._authenticate(
                    O.subarray(O.length - this.tagLength, O.length),
                    p,
                    O.subarray(0, O.length - this.tagLength),
                    S
                  ),
                  h.wipe(y),
                  O
                );
              }),
              (a.prototype.open = function (s, b, S, m) {
                if (s.length > 16)
                  throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (b.length < this.tagLength) return null;
                var y = new Uint8Array(16);
                y.set(s, y.length - s.length);
                var p = new Uint8Array(32);
                n.stream(this._key, y, p, 4);
                var A = new Uint8Array(this.tagLength);
                if (
                  (this._authenticate(
                    A,
                    p,
                    b.subarray(0, b.length - this.tagLength),
                    S
                  ),
                  !d.equal(A, b.subarray(b.length - this.tagLength, b.length)))
                )
                  return null;
                var O = b.length - this.tagLength,
                  x;
                if (m) {
                  if (m.length !== O)
                    throw new Error(
                      "ChaCha20Poly1305: incorrect destination length"
                    );
                  x = m;
                } else x = new Uint8Array(O);
                return (
                  n.streamXOR(
                    this._key,
                    y,
                    b.subarray(0, b.length - this.tagLength),
                    x,
                    4
                  ),
                  h.wipe(y),
                  x
                );
              }),
              (a.prototype.clean = function () {
                return h.wipe(this._key), this;
              }),
              (a.prototype._authenticate = function (s, b, S, m) {
                var y = new f.Poly1305(b);
                m &&
                  (y.update(m),
                  m.length % 16 > 0 && y.update(_.subarray(m.length % 16))),
                  y.update(S),
                  S.length % 16 > 0 && y.update(_.subarray(S.length % 16));
                var p = new Uint8Array(8);
                m && g.writeUint64LE(m.length, p),
                  y.update(p),
                  g.writeUint64LE(S.length, p),
                  y.update(p);
                for (var A = y.digest(), O = 0; O < A.length; O++) s[O] = A[O];
                y.clean(), h.wipe(A), h.wipe(p);
              }),
              a
            );
          })();
        r.ChaCha20Poly1305 = t;
      })(Je)),
    Je
  );
}
var jn = Lt(),
  Re = {},
  me = {},
  je = {},
  xr;
function Mt() {
  if (xr) return je;
  (xr = 1), Object.defineProperty(je, "__esModule", { value: !0 });
  function r(n) {
    return (
      typeof n.saveState < "u" &&
      typeof n.restoreState < "u" &&
      typeof n.cleanSavedState < "u"
    );
  }
  return (je.isSerializableHash = r), je;
}
var Lr;
function Rt() {
  if (Lr) return me;
  (Lr = 1), Object.defineProperty(me, "__esModule", { value: !0 });
  var r = Mt(),
    n = ur(),
    f = _e(),
    h = (function () {
      function d(_, t) {
        (this._finished = !1),
          (this._inner = new _()),
          (this._outer = new _()),
          (this.blockSize = this._outer.blockSize),
          (this.digestLength = this._outer.digestLength);
        var a = new Uint8Array(this.blockSize);
        t.length > this.blockSize
          ? this._inner.update(t).finish(a).clean()
          : a.set(t);
        for (var s = 0; s < a.length; s++) a[s] ^= 54;
        this._inner.update(a);
        for (var s = 0; s < a.length; s++) a[s] ^= 106;
        this._outer.update(a),
          r.isSerializableHash(this._inner) &&
            r.isSerializableHash(this._outer) &&
            ((this._innerKeyedState = this._inner.saveState()),
            (this._outerKeyedState = this._outer.saveState())),
          f.wipe(a);
      }
      return (
        (d.prototype.reset = function () {
          if (
            !r.isSerializableHash(this._inner) ||
            !r.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't reset() because hash doesn't implement restoreState()"
            );
          return (
            this._inner.restoreState(this._innerKeyedState),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (d.prototype.clean = function () {
          r.isSerializableHash(this._inner) &&
            this._inner.cleanSavedState(this._innerKeyedState),
            r.isSerializableHash(this._outer) &&
              this._outer.cleanSavedState(this._outerKeyedState),
            this._inner.clean(),
            this._outer.clean();
        }),
        (d.prototype.update = function (_) {
          return this._inner.update(_), this;
        }),
        (d.prototype.finish = function (_) {
          return this._finished
            ? (this._outer.finish(_), this)
            : (this._inner.finish(_),
              this._outer.update(_.subarray(0, this.digestLength)).finish(_),
              (this._finished = !0),
              this);
        }),
        (d.prototype.digest = function () {
          var _ = new Uint8Array(this.digestLength);
          return this.finish(_), _;
        }),
        (d.prototype.saveState = function () {
          if (!r.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't saveState() because hash doesn't implement it"
            );
          return this._inner.saveState();
        }),
        (d.prototype.restoreState = function (_) {
          if (
            !r.isSerializableHash(this._inner) ||
            !r.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't restoreState() because hash doesn't implement it"
            );
          return (
            this._inner.restoreState(_),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (d.prototype.cleanSavedState = function (_) {
          if (!r.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't cleanSavedState() because hash doesn't implement it"
            );
          this._inner.cleanSavedState(_);
        }),
        d
      );
    })();
  me.HMAC = h;
  function g(d, _, t) {
    var a = new h(d, _);
    a.update(t);
    var s = a.digest();
    return a.clean(), s;
  }
  return (me.hmac = g), (me.equal = n.equal), me;
}
var Mr;
function jt() {
  if (Mr) return Re;
  (Mr = 1), Object.defineProperty(Re, "__esModule", { value: !0 });
  var r = Rt(),
    n = _e(),
    f = (function () {
      function h(g, d, _, t) {
        _ === void 0 && (_ = new Uint8Array(0)),
          (this._counter = new Uint8Array(1)),
          (this._hash = g),
          (this._info = t);
        var a = r.hmac(this._hash, _, d);
        (this._hmac = new r.HMAC(g, a)),
          (this._buffer = new Uint8Array(this._hmac.digestLength)),
          (this._bufpos = this._buffer.length);
      }
      return (
        (h.prototype._fillBuffer = function () {
          this._counter[0]++;
          var g = this._counter[0];
          if (g === 0) throw new Error("hkdf: cannot expand more");
          this._hmac.reset(),
            g > 1 && this._hmac.update(this._buffer),
            this._info && this._hmac.update(this._info),
            this._hmac.update(this._counter),
            this._hmac.finish(this._buffer),
            (this._bufpos = 0);
        }),
        (h.prototype.expand = function (g) {
          for (var d = new Uint8Array(g), _ = 0; _ < d.length; _++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
              (d[_] = this._buffer[this._bufpos++]);
          return d;
        }),
        (h.prototype.clean = function () {
          this._hmac.clean(),
            n.wipe(this._buffer),
            n.wipe(this._counter),
            (this._bufpos = 0);
        }),
        h
      );
    })();
  return (Re.HKDF = f), Re;
}
var Bn = jt(),
  er = {},
  Ue = {},
  Fe = {},
  Rr;
function Bt() {
  if (Rr) return Fe;
  (Rr = 1),
    Object.defineProperty(Fe, "__esModule", { value: !0 }),
    (Fe.BrowserRandomSource = void 0);
  const r = 65536;
  class n {
    constructor() {
      (this.isAvailable = !1), (this.isInstantiated = !1);
      const h = typeof self < "u" ? self.crypto || self.msCrypto : null;
      h &&
        h.getRandomValues !== void 0 &&
        ((this._crypto = h),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
    randomBytes(h) {
      if (!this.isAvailable || !this._crypto)
        throw new Error("Browser random byte generator is not available.");
      const g = new Uint8Array(h);
      for (let d = 0; d < g.length; d += r)
        this._crypto.getRandomValues(
          g.subarray(d, d + Math.min(g.length - d, r))
        );
      return g;
    }
  }
  return (Fe.BrowserRandomSource = n), Fe;
}
function It(r) {
  throw new Error(
    'Could not dynamically require "' +
      r +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Te = {},
  jr;
function Pt() {
  if (jr) return Te;
  (jr = 1),
    Object.defineProperty(Te, "__esModule", { value: !0 }),
    (Te.NodeRandomSource = void 0);
  const r = _e();
  class n {
    constructor() {
      if (
        ((this.isAvailable = !1), (this.isInstantiated = !1), typeof It < "u")
      ) {
        const h = Vr;
        h &&
          h.randomBytes &&
          ((this._crypto = h),
          (this.isAvailable = !0),
          (this.isInstantiated = !0));
      }
    }
    randomBytes(h) {
      if (!this.isAvailable || !this._crypto)
        throw new Error("Node.js random byte generator is not available.");
      let g = this._crypto.randomBytes(h);
      if (g.length !== h)
        throw new Error("NodeRandomSource: got fewer bytes than requested");
      const d = new Uint8Array(h);
      for (let _ = 0; _ < d.length; _++) d[_] = g[_];
      return (0, r.wipe)(g), d;
    }
  }
  return (Te.NodeRandomSource = n), Te;
}
var Br;
function qt() {
  if (Br) return Ue;
  (Br = 1),
    Object.defineProperty(Ue, "__esModule", { value: !0 }),
    (Ue.SystemRandomSource = void 0);
  const r = Bt(),
    n = Pt();
  class f {
    constructor() {
      if (
        ((this.isAvailable = !1),
        (this.name = ""),
        (this._source = new r.BrowserRandomSource()),
        this._source.isAvailable)
      ) {
        (this.isAvailable = !0), (this.name = "Browser");
        return;
      }
      if (
        ((this._source = new n.NodeRandomSource()), this._source.isAvailable)
      ) {
        (this.isAvailable = !0), (this.name = "Node");
        return;
      }
    }
    randomBytes(g) {
      if (!this.isAvailable)
        throw new Error("System random byte generator is not available.");
      return this._source.randomBytes(g);
    }
  }
  return (Ue.SystemRandomSource = f), Ue;
}
var Ir;
function zr() {
  return (
    Ir ||
      ((Ir = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.randomStringForEntropy =
            r.randomString =
            r.randomUint32 =
            r.randomBytes =
            r.defaultRandomSource =
              void 0);
        const n = qt(),
          f = Ie(),
          h = _e();
        r.defaultRandomSource = new n.SystemRandomSource();
        function g(s, b = r.defaultRandomSource) {
          return b.randomBytes(s);
        }
        r.randomBytes = g;
        function d(s = r.defaultRandomSource) {
          const b = g(4, s),
            S = (0, f.readUint32LE)(b);
          return (0, h.wipe)(b), S;
        }
        r.randomUint32 = d;
        const _ =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        function t(s, b = _, S = r.defaultRandomSource) {
          if (b.length < 2)
            throw new Error("randomString charset is too short");
          if (b.length > 256)
            throw new Error("randomString charset is too long");
          let m = "";
          const y = b.length,
            p = 256 - (256 % y);
          for (; s > 0; ) {
            const A = g(Math.ceil((s * 256) / p), S);
            for (let O = 0; O < A.length && s > 0; O++) {
              const x = A[O];
              x < p && ((m += b.charAt(x % y)), s--);
            }
            (0, h.wipe)(A);
          }
          return m;
        }
        r.randomString = t;
        function a(s, b = _, S = r.defaultRandomSource) {
          const m = Math.ceil(s / (Math.log(b.length) / Math.LN2));
          return t(m, b, S);
        }
        r.randomStringForEntropy = a;
      })(er)),
    er
  );
}
var In = zr(),
  rr = {},
  Pr;
function Ht() {
  return (
    Pr ||
      ((Pr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = Ie(),
          f = _e();
        (r.DIGEST_LENGTH = 32), (r.BLOCK_SIZE = 64);
        var h = (function () {
          function t() {
            (this.digestLength = r.DIGEST_LENGTH),
              (this.blockSize = r.BLOCK_SIZE),
              (this._state = new Int32Array(8)),
              (this._temp = new Int32Array(64)),
              (this._buffer = new Uint8Array(128)),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this.reset();
          }
          return (
            (t.prototype._initState = function () {
              (this._state[0] = 1779033703),
                (this._state[1] = 3144134277),
                (this._state[2] = 1013904242),
                (this._state[3] = 2773480762),
                (this._state[4] = 1359893119),
                (this._state[5] = 2600822924),
                (this._state[6] = 528734635),
                (this._state[7] = 1541459225);
            }),
            (t.prototype.reset = function () {
              return (
                this._initState(),
                (this._bufferLength = 0),
                (this._bytesHashed = 0),
                (this._finished = !1),
                this
              );
            }),
            (t.prototype.clean = function () {
              f.wipe(this._buffer), f.wipe(this._temp), this.reset();
            }),
            (t.prototype.update = function (a, s) {
              if ((s === void 0 && (s = a.length), this._finished))
                throw new Error(
                  "SHA256: can't update because hash was finished."
                );
              var b = 0;
              if (((this._bytesHashed += s), this._bufferLength > 0)) {
                for (; this._bufferLength < this.blockSize && s > 0; )
                  (this._buffer[this._bufferLength++] = a[b++]), s--;
                this._bufferLength === this.blockSize &&
                  (d(this._temp, this._state, this._buffer, 0, this.blockSize),
                  (this._bufferLength = 0));
              }
              for (
                s >= this.blockSize &&
                ((b = d(this._temp, this._state, a, b, s)),
                (s %= this.blockSize));
                s > 0;

              )
                (this._buffer[this._bufferLength++] = a[b++]), s--;
              return this;
            }),
            (t.prototype.finish = function (a) {
              if (!this._finished) {
                var s = this._bytesHashed,
                  b = this._bufferLength,
                  S = (s / 536870912) | 0,
                  m = s << 3,
                  y = s % 64 < 56 ? 64 : 128;
                this._buffer[b] = 128;
                for (var p = b + 1; p < y - 8; p++) this._buffer[p] = 0;
                n.writeUint32BE(S, this._buffer, y - 8),
                  n.writeUint32BE(m, this._buffer, y - 4),
                  d(this._temp, this._state, this._buffer, 0, y),
                  (this._finished = !0);
              }
              for (var p = 0; p < this.digestLength / 4; p++)
                n.writeUint32BE(this._state[p], a, p * 4);
              return this;
            }),
            (t.prototype.digest = function () {
              var a = new Uint8Array(this.digestLength);
              return this.finish(a), a;
            }),
            (t.prototype.saveState = function () {
              if (this._finished)
                throw new Error("SHA256: cannot save finished state");
              return {
                state: new Int32Array(this._state),
                buffer:
                  this._bufferLength > 0
                    ? new Uint8Array(this._buffer)
                    : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed,
              };
            }),
            (t.prototype.restoreState = function (a) {
              return (
                this._state.set(a.state),
                (this._bufferLength = a.bufferLength),
                a.buffer && this._buffer.set(a.buffer),
                (this._bytesHashed = a.bytesHashed),
                (this._finished = !1),
                this
              );
            }),
            (t.prototype.cleanSavedState = function (a) {
              f.wipe(a.state),
                a.buffer && f.wipe(a.buffer),
                (a.bufferLength = 0),
                (a.bytesHashed = 0);
            }),
            t
          );
        })();
        r.SHA256 = h;
        var g = new Int32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]);
        function d(t, a, s, b, S) {
          for (; S >= 64; ) {
            for (
              var m = a[0],
                y = a[1],
                p = a[2],
                A = a[3],
                O = a[4],
                x = a[5],
                c = a[6],
                v = a[7],
                o = 0;
              o < 16;
              o++
            ) {
              var l = b + o * 4;
              t[o] = n.readUint32BE(s, l);
            }
            for (var o = 16; o < 64; o++) {
              var D = t[o - 2],
                e =
                  ((D >>> 17) | (D << 15)) ^
                  ((D >>> 19) | (D << 13)) ^
                  (D >>> 10);
              D = t[o - 15];
              var i =
                ((D >>> 7) | (D << 25)) ^ ((D >>> 18) | (D << 14)) ^ (D >>> 3);
              t[o] = ((e + t[o - 7]) | 0) + ((i + t[o - 16]) | 0);
            }
            for (var o = 0; o < 64; o++) {
              var e =
                  ((((((O >>> 6) | (O << 26)) ^
                    ((O >>> 11) | (O << 21)) ^
                    ((O >>> 25) | (O << 7))) +
                    ((O & x) ^ (~O & c))) |
                    0) +
                    ((v + ((g[o] + t[o]) | 0)) | 0)) |
                  0,
                i =
                  ((((m >>> 2) | (m << 30)) ^
                    ((m >>> 13) | (m << 19)) ^
                    ((m >>> 22) | (m << 10))) +
                    ((m & y) ^ (m & p) ^ (y & p))) |
                  0;
              (v = c),
                (c = x),
                (x = O),
                (O = (A + e) | 0),
                (A = p),
                (p = y),
                (y = m),
                (m = (e + i) | 0);
            }
            (a[0] += m),
              (a[1] += y),
              (a[2] += p),
              (a[3] += A),
              (a[4] += O),
              (a[5] += x),
              (a[6] += c),
              (a[7] += v),
              (b += 64),
              (S -= 64);
          }
          return b;
        }
        function _(t) {
          var a = new h();
          a.update(t);
          var s = a.digest();
          return a.clean(), s;
        }
        r.hash = _;
      })(rr)),
    rr
  );
}
var Pn = Ht(),
  tr = {},
  qr;
function Kt() {
  return (
    qr ||
      ((qr = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.sharedKey =
            r.generateKeyPair =
            r.generateKeyPairFromSeed =
            r.scalarMultBase =
            r.scalarMult =
            r.SHARED_KEY_LENGTH =
            r.SECRET_KEY_LENGTH =
            r.PUBLIC_KEY_LENGTH =
              void 0);
        const n = zr(),
          f = _e();
        (r.PUBLIC_KEY_LENGTH = 32),
          (r.SECRET_KEY_LENGTH = 32),
          (r.SHARED_KEY_LENGTH = 32);
        function h(o) {
          const l = new Float64Array(16);
          if (o) for (let D = 0; D < o.length; D++) l[D] = o[D];
          return l;
        }
        const g = new Uint8Array(32);
        g[0] = 9;
        const d = h([56129, 1]);
        function _(o) {
          let l = 1;
          for (let D = 0; D < 16; D++) {
            let e = o[D] + l + 65535;
            (l = Math.floor(e / 65536)), (o[D] = e - l * 65536);
          }
          o[0] += l - 1 + 37 * (l - 1);
        }
        function t(o, l, D) {
          const e = ~(D - 1);
          for (let i = 0; i < 16; i++) {
            const F = e & (o[i] ^ l[i]);
            (o[i] ^= F), (l[i] ^= F);
          }
        }
        function a(o, l) {
          const D = h(),
            e = h();
          for (let i = 0; i < 16; i++) e[i] = l[i];
          _(e), _(e), _(e);
          for (let i = 0; i < 2; i++) {
            D[0] = e[0] - 65517;
            for (let N = 1; N < 15; N++)
              (D[N] = e[N] - 65535 - ((D[N - 1] >> 16) & 1)),
                (D[N - 1] &= 65535);
            D[15] = e[15] - 32767 - ((D[14] >> 16) & 1);
            const F = (D[15] >> 16) & 1;
            (D[14] &= 65535), t(e, D, 1 - F);
          }
          for (let i = 0; i < 16; i++)
            (o[2 * i] = e[i] & 255), (o[2 * i + 1] = e[i] >> 8);
        }
        function s(o, l) {
          for (let D = 0; D < 16; D++) o[D] = l[2 * D] + (l[2 * D + 1] << 8);
          o[15] &= 32767;
        }
        function b(o, l, D) {
          for (let e = 0; e < 16; e++) o[e] = l[e] + D[e];
        }
        function S(o, l, D) {
          for (let e = 0; e < 16; e++) o[e] = l[e] - D[e];
        }
        function m(o, l, D) {
          let e,
            i,
            F = 0,
            N = 0,
            j = 0,
            P = 0,
            q = 0,
            M = 0,
            w = 0,
            u = 0,
            E = 0,
            U = 0,
            B = 0,
            R = 0,
            K = 0,
            I = 0,
            C = 0,
            T = 0,
            L = 0,
            $ = 0,
            z = 0,
            Y = 0,
            W = 0,
            G = 0,
            X = 0,
            Q = 0,
            J = 0,
            Ee = 0,
            ye = 0,
            Se = 0,
            Le = 0,
            qe = 0,
            fr = 0,
            k = D[0],
            ee = D[1],
            re = D[2],
            te = D[3],
            ne = D[4],
            ie = D[5],
            ae = D[6],
            ue = D[7],
            fe = D[8],
            oe = D[9],
            se = D[10],
            he = D[11],
            ce = D[12],
            le = D[13],
            De = D[14],
            de = D[15];
          (e = l[0]),
            (F += e * k),
            (N += e * ee),
            (j += e * re),
            (P += e * te),
            (q += e * ne),
            (M += e * ie),
            (w += e * ae),
            (u += e * ue),
            (E += e * fe),
            (U += e * oe),
            (B += e * se),
            (R += e * he),
            (K += e * ce),
            (I += e * le),
            (C += e * De),
            (T += e * de),
            (e = l[1]),
            (N += e * k),
            (j += e * ee),
            (P += e * re),
            (q += e * te),
            (M += e * ne),
            (w += e * ie),
            (u += e * ae),
            (E += e * ue),
            (U += e * fe),
            (B += e * oe),
            (R += e * se),
            (K += e * he),
            (I += e * ce),
            (C += e * le),
            (T += e * De),
            (L += e * de),
            (e = l[2]),
            (j += e * k),
            (P += e * ee),
            (q += e * re),
            (M += e * te),
            (w += e * ne),
            (u += e * ie),
            (E += e * ae),
            (U += e * ue),
            (B += e * fe),
            (R += e * oe),
            (K += e * se),
            (I += e * he),
            (C += e * ce),
            (T += e * le),
            (L += e * De),
            ($ += e * de),
            (e = l[3]),
            (P += e * k),
            (q += e * ee),
            (M += e * re),
            (w += e * te),
            (u += e * ne),
            (E += e * ie),
            (U += e * ae),
            (B += e * ue),
            (R += e * fe),
            (K += e * oe),
            (I += e * se),
            (C += e * he),
            (T += e * ce),
            (L += e * le),
            ($ += e * De),
            (z += e * de),
            (e = l[4]),
            (q += e * k),
            (M += e * ee),
            (w += e * re),
            (u += e * te),
            (E += e * ne),
            (U += e * ie),
            (B += e * ae),
            (R += e * ue),
            (K += e * fe),
            (I += e * oe),
            (C += e * se),
            (T += e * he),
            (L += e * ce),
            ($ += e * le),
            (z += e * De),
            (Y += e * de),
            (e = l[5]),
            (M += e * k),
            (w += e * ee),
            (u += e * re),
            (E += e * te),
            (U += e * ne),
            (B += e * ie),
            (R += e * ae),
            (K += e * ue),
            (I += e * fe),
            (C += e * oe),
            (T += e * se),
            (L += e * he),
            ($ += e * ce),
            (z += e * le),
            (Y += e * De),
            (W += e * de),
            (e = l[6]),
            (w += e * k),
            (u += e * ee),
            (E += e * re),
            (U += e * te),
            (B += e * ne),
            (R += e * ie),
            (K += e * ae),
            (I += e * ue),
            (C += e * fe),
            (T += e * oe),
            (L += e * se),
            ($ += e * he),
            (z += e * ce),
            (Y += e * le),
            (W += e * De),
            (G += e * de),
            (e = l[7]),
            (u += e * k),
            (E += e * ee),
            (U += e * re),
            (B += e * te),
            (R += e * ne),
            (K += e * ie),
            (I += e * ae),
            (C += e * ue),
            (T += e * fe),
            (L += e * oe),
            ($ += e * se),
            (z += e * he),
            (Y += e * ce),
            (W += e * le),
            (G += e * De),
            (X += e * de),
            (e = l[8]),
            (E += e * k),
            (U += e * ee),
            (B += e * re),
            (R += e * te),
            (K += e * ne),
            (I += e * ie),
            (C += e * ae),
            (T += e * ue),
            (L += e * fe),
            ($ += e * oe),
            (z += e * se),
            (Y += e * he),
            (W += e * ce),
            (G += e * le),
            (X += e * De),
            (Q += e * de),
            (e = l[9]),
            (U += e * k),
            (B += e * ee),
            (R += e * re),
            (K += e * te),
            (I += e * ne),
            (C += e * ie),
            (T += e * ae),
            (L += e * ue),
            ($ += e * fe),
            (z += e * oe),
            (Y += e * se),
            (W += e * he),
            (G += e * ce),
            (X += e * le),
            (Q += e * De),
            (J += e * de),
            (e = l[10]),
            (B += e * k),
            (R += e * ee),
            (K += e * re),
            (I += e * te),
            (C += e * ne),
            (T += e * ie),
            (L += e * ae),
            ($ += e * ue),
            (z += e * fe),
            (Y += e * oe),
            (W += e * se),
            (G += e * he),
            (X += e * ce),
            (Q += e * le),
            (J += e * De),
            (Ee += e * de),
            (e = l[11]),
            (R += e * k),
            (K += e * ee),
            (I += e * re),
            (C += e * te),
            (T += e * ne),
            (L += e * ie),
            ($ += e * ae),
            (z += e * ue),
            (Y += e * fe),
            (W += e * oe),
            (G += e * se),
            (X += e * he),
            (Q += e * ce),
            (J += e * le),
            (Ee += e * De),
            (ye += e * de),
            (e = l[12]),
            (K += e * k),
            (I += e * ee),
            (C += e * re),
            (T += e * te),
            (L += e * ne),
            ($ += e * ie),
            (z += e * ae),
            (Y += e * ue),
            (W += e * fe),
            (G += e * oe),
            (X += e * se),
            (Q += e * he),
            (J += e * ce),
            (Ee += e * le),
            (ye += e * De),
            (Se += e * de),
            (e = l[13]),
            (I += e * k),
            (C += e * ee),
            (T += e * re),
            (L += e * te),
            ($ += e * ne),
            (z += e * ie),
            (Y += e * ae),
            (W += e * ue),
            (G += e * fe),
            (X += e * oe),
            (Q += e * se),
            (J += e * he),
            (Ee += e * ce),
            (ye += e * le),
            (Se += e * De),
            (Le += e * de),
            (e = l[14]),
            (C += e * k),
            (T += e * ee),
            (L += e * re),
            ($ += e * te),
            (z += e * ne),
            (Y += e * ie),
            (W += e * ae),
            (G += e * ue),
            (X += e * fe),
            (Q += e * oe),
            (J += e * se),
            (Ee += e * he),
            (ye += e * ce),
            (Se += e * le),
            (Le += e * De),
            (qe += e * de),
            (e = l[15]),
            (T += e * k),
            (L += e * ee),
            ($ += e * re),
            (z += e * te),
            (Y += e * ne),
            (W += e * ie),
            (G += e * ae),
            (X += e * ue),
            (Q += e * fe),
            (J += e * oe),
            (Ee += e * se),
            (ye += e * he),
            (Se += e * ce),
            (Le += e * le),
            (qe += e * De),
            (fr += e * de),
            (F += 38 * L),
            (N += 38 * $),
            (j += 38 * z),
            (P += 38 * Y),
            (q += 38 * W),
            (M += 38 * G),
            (w += 38 * X),
            (u += 38 * Q),
            (E += 38 * J),
            (U += 38 * Ee),
            (B += 38 * ye),
            (R += 38 * Se),
            (K += 38 * Le),
            (I += 38 * qe),
            (C += 38 * fr),
            (i = 1),
            (e = F + i + 65535),
            (i = Math.floor(e / 65536)),
            (F = e - i * 65536),
            (e = N + i + 65535),
            (i = Math.floor(e / 65536)),
            (N = e - i * 65536),
            (e = j + i + 65535),
            (i = Math.floor(e / 65536)),
            (j = e - i * 65536),
            (e = P + i + 65535),
            (i = Math.floor(e / 65536)),
            (P = e - i * 65536),
            (e = q + i + 65535),
            (i = Math.floor(e / 65536)),
            (q = e - i * 65536),
            (e = M + i + 65535),
            (i = Math.floor(e / 65536)),
            (M = e - i * 65536),
            (e = w + i + 65535),
            (i = Math.floor(e / 65536)),
            (w = e - i * 65536),
            (e = u + i + 65535),
            (i = Math.floor(e / 65536)),
            (u = e - i * 65536),
            (e = E + i + 65535),
            (i = Math.floor(e / 65536)),
            (E = e - i * 65536),
            (e = U + i + 65535),
            (i = Math.floor(e / 65536)),
            (U = e - i * 65536),
            (e = B + i + 65535),
            (i = Math.floor(e / 65536)),
            (B = e - i * 65536),
            (e = R + i + 65535),
            (i = Math.floor(e / 65536)),
            (R = e - i * 65536),
            (e = K + i + 65535),
            (i = Math.floor(e / 65536)),
            (K = e - i * 65536),
            (e = I + i + 65535),
            (i = Math.floor(e / 65536)),
            (I = e - i * 65536),
            (e = C + i + 65535),
            (i = Math.floor(e / 65536)),
            (C = e - i * 65536),
            (e = T + i + 65535),
            (i = Math.floor(e / 65536)),
            (T = e - i * 65536),
            (F += i - 1 + 37 * (i - 1)),
            (i = 1),
            (e = F + i + 65535),
            (i = Math.floor(e / 65536)),
            (F = e - i * 65536),
            (e = N + i + 65535),
            (i = Math.floor(e / 65536)),
            (N = e - i * 65536),
            (e = j + i + 65535),
            (i = Math.floor(e / 65536)),
            (j = e - i * 65536),
            (e = P + i + 65535),
            (i = Math.floor(e / 65536)),
            (P = e - i * 65536),
            (e = q + i + 65535),
            (i = Math.floor(e / 65536)),
            (q = e - i * 65536),
            (e = M + i + 65535),
            (i = Math.floor(e / 65536)),
            (M = e - i * 65536),
            (e = w + i + 65535),
            (i = Math.floor(e / 65536)),
            (w = e - i * 65536),
            (e = u + i + 65535),
            (i = Math.floor(e / 65536)),
            (u = e - i * 65536),
            (e = E + i + 65535),
            (i = Math.floor(e / 65536)),
            (E = e - i * 65536),
            (e = U + i + 65535),
            (i = Math.floor(e / 65536)),
            (U = e - i * 65536),
            (e = B + i + 65535),
            (i = Math.floor(e / 65536)),
            (B = e - i * 65536),
            (e = R + i + 65535),
            (i = Math.floor(e / 65536)),
            (R = e - i * 65536),
            (e = K + i + 65535),
            (i = Math.floor(e / 65536)),
            (K = e - i * 65536),
            (e = I + i + 65535),
            (i = Math.floor(e / 65536)),
            (I = e - i * 65536),
            (e = C + i + 65535),
            (i = Math.floor(e / 65536)),
            (C = e - i * 65536),
            (e = T + i + 65535),
            (i = Math.floor(e / 65536)),
            (T = e - i * 65536),
            (F += i - 1 + 37 * (i - 1)),
            (o[0] = F),
            (o[1] = N),
            (o[2] = j),
            (o[3] = P),
            (o[4] = q),
            (o[5] = M),
            (o[6] = w),
            (o[7] = u),
            (o[8] = E),
            (o[9] = U),
            (o[10] = B),
            (o[11] = R),
            (o[12] = K),
            (o[13] = I),
            (o[14] = C),
            (o[15] = T);
        }
        function y(o, l) {
          m(o, l, l);
        }
        function p(o, l) {
          const D = h();
          for (let e = 0; e < 16; e++) D[e] = l[e];
          for (let e = 253; e >= 0; e--)
            y(D, D), e !== 2 && e !== 4 && m(D, D, l);
          for (let e = 0; e < 16; e++) o[e] = D[e];
        }
        function A(o, l) {
          const D = new Uint8Array(32),
            e = new Float64Array(80),
            i = h(),
            F = h(),
            N = h(),
            j = h(),
            P = h(),
            q = h();
          for (let E = 0; E < 31; E++) D[E] = o[E];
          (D[31] = (o[31] & 127) | 64), (D[0] &= 248), s(e, l);
          for (let E = 0; E < 16; E++) F[E] = e[E];
          i[0] = j[0] = 1;
          for (let E = 254; E >= 0; --E) {
            const U = (D[E >>> 3] >>> (E & 7)) & 1;
            t(i, F, U),
              t(N, j, U),
              b(P, i, N),
              S(i, i, N),
              b(N, F, j),
              S(F, F, j),
              y(j, P),
              y(q, i),
              m(i, N, i),
              m(N, F, P),
              b(P, i, N),
              S(i, i, N),
              y(F, i),
              S(N, j, q),
              m(i, N, d),
              b(i, i, j),
              m(N, N, i),
              m(i, j, q),
              m(j, F, e),
              y(F, P),
              t(i, F, U),
              t(N, j, U);
          }
          for (let E = 0; E < 16; E++)
            (e[E + 16] = i[E]),
              (e[E + 32] = N[E]),
              (e[E + 48] = F[E]),
              (e[E + 64] = j[E]);
          const M = e.subarray(32),
            w = e.subarray(16);
          p(M, M), m(w, w, M);
          const u = new Uint8Array(32);
          return a(u, w), u;
        }
        r.scalarMult = A;
        function O(o) {
          return A(o, g);
        }
        r.scalarMultBase = O;
        function x(o) {
          if (o.length !== r.SECRET_KEY_LENGTH)
            throw new Error(
              `x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`
            );
          const l = new Uint8Array(o);
          return { publicKey: O(l), secretKey: l };
        }
        r.generateKeyPairFromSeed = x;
        function c(o) {
          const l = (0, n.randomBytes)(32, o),
            D = x(l);
          return (0, f.wipe)(l), D;
        }
        r.generateKeyPair = c;
        function v(o, l, D = !1) {
          if (o.length !== r.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect secret key length");
          if (l.length !== r.PUBLIC_KEY_LENGTH)
            throw new Error("X25519: incorrect public key length");
          const e = A(o, l);
          if (D) {
            let i = 0;
            for (let F = 0; F < e.length; F++) i |= e[F];
            if (i === 0) throw new Error("X25519: invalid shared key");
          }
          return e;
        }
        r.sharedKey = v;
      })(tr)),
    tr
  );
}
var qn = Kt();
function $t(r, n) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var f = new Uint8Array(256), h = 0; h < f.length; h++) f[h] = 255;
  for (var g = 0; g < r.length; g++) {
    var d = r.charAt(g),
      _ = d.charCodeAt(0);
    if (f[_] !== 255) throw new TypeError(d + " is ambiguous");
    f[_] = g;
  }
  var t = r.length,
    a = r.charAt(0),
    s = Math.log(t) / Math.log(256),
    b = Math.log(256) / Math.log(t);
  function S(p) {
    if (
      (p instanceof Uint8Array ||
        (ArrayBuffer.isView(p)
          ? (p = new Uint8Array(p.buffer, p.byteOffset, p.byteLength))
          : Array.isArray(p) && (p = Uint8Array.from(p))),
      !(p instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (p.length === 0) return "";
    for (var A = 0, O = 0, x = 0, c = p.length; x !== c && p[x] === 0; )
      x++, A++;
    for (var v = ((c - x) * b + 1) >>> 0, o = new Uint8Array(v); x !== c; ) {
      for (
        var l = p[x], D = 0, e = v - 1;
        (l !== 0 || D < O) && e !== -1;
        e--, D++
      )
        (l += (256 * o[e]) >>> 0), (o[e] = l % t >>> 0), (l = (l / t) >>> 0);
      if (l !== 0) throw new Error("Non-zero carry");
      (O = D), x++;
    }
    for (var i = v - O; i !== v && o[i] === 0; ) i++;
    for (var F = a.repeat(A); i < v; ++i) F += r.charAt(o[i]);
    return F;
  }
  function m(p) {
    if (typeof p != "string") throw new TypeError("Expected String");
    if (p.length === 0) return new Uint8Array();
    var A = 0;
    if (p[A] !== " ") {
      for (var O = 0, x = 0; p[A] === a; ) O++, A++;
      for (
        var c = ((p.length - A) * s + 1) >>> 0, v = new Uint8Array(c);
        p[A];

      ) {
        var o = f[p.charCodeAt(A)];
        if (o === 255) return;
        for (var l = 0, D = c - 1; (o !== 0 || l < x) && D !== -1; D--, l++)
          (o += (t * v[D]) >>> 0),
            (v[D] = o % 256 >>> 0),
            (o = (o / 256) >>> 0);
        if (o !== 0) throw new Error("Non-zero carry");
        (x = l), A++;
      }
      if (p[A] !== " ") {
        for (var e = c - x; e !== c && v[e] === 0; ) e++;
        for (var i = new Uint8Array(O + (c - e)), F = O; e !== c; )
          i[F++] = v[e++];
        return i;
      }
    }
  }
  function y(p) {
    var A = m(p);
    if (A) return A;
    throw new Error(`Non-${n} character`);
  }
  return { encode: S, decodeUnsafe: m, decode: y };
}
var zt = $t,
  Yt = zt;
const Wt = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Gt = (r) => new TextEncoder().encode(r),
  Vt = (r) => new TextDecoder().decode(r);
class Xt {
  constructor(n, f, h) {
    (this.name = n), (this.prefix = f), (this.baseEncode = h);
  }
  encode(n) {
    if (n instanceof Uint8Array) return `${this.prefix}${this.baseEncode(n)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Qt {
  constructor(n, f, h) {
    if (((this.name = n), (this.prefix = f), f.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = f.codePointAt(0)), (this.baseDecode = h);
  }
  decode(n) {
    if (typeof n == "string") {
      if (n.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(n)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(n.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(n) {
    return Yr(this, n);
  }
}
class Jt {
  constructor(n) {
    this.decoders = n;
  }
  or(n) {
    return Yr(this, n);
  }
  decode(n) {
    const f = n[0],
      h = this.decoders[f];
    if (h) return h.decode(n);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        n
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Yr = (r, n) =>
  new Jt({
    ...(r.decoders || { [r.prefix]: r }),
    ...(n.decoders || { [n.prefix]: n }),
  });
class Zt {
  constructor(n, f, h, g) {
    (this.name = n),
      (this.prefix = f),
      (this.baseEncode = h),
      (this.baseDecode = g),
      (this.encoder = new Xt(n, f, h)),
      (this.decoder = new Qt(n, f, g));
  }
  encode(n) {
    return this.encoder.encode(n);
  }
  decode(n) {
    return this.decoder.decode(n);
  }
}
const Pe = ({ name: r, prefix: n, encode: f, decode: h }) => new Zt(r, n, f, h),
  xe = ({ prefix: r, name: n, alphabet: f }) => {
    const { encode: h, decode: g } = Yt(f, n);
    return Pe({ prefix: r, name: n, encode: h, decode: (d) => Wt(g(d)) });
  },
  kt = (r, n, f, h) => {
    const g = {};
    for (let b = 0; b < n.length; ++b) g[n[b]] = b;
    let d = r.length;
    for (; r[d - 1] === "="; ) --d;
    const _ = new Uint8Array(((d * f) / 8) | 0);
    let t = 0,
      a = 0,
      s = 0;
    for (let b = 0; b < d; ++b) {
      const S = g[r[b]];
      if (S === void 0) throw new SyntaxError(`Non-${h} character`);
      (a = (a << f) | S),
        (t += f),
        t >= 8 && ((t -= 8), (_[s++] = 255 & (a >> t)));
    }
    if (t >= f || 255 & (a << (8 - t)))
      throw new SyntaxError("Unexpected end of data");
    return _;
  },
  en = (r, n, f) => {
    const h = n[n.length - 1] === "=",
      g = (1 << f) - 1;
    let d = "",
      _ = 0,
      t = 0;
    for (let a = 0; a < r.length; ++a)
      for (t = (t << 8) | r[a], _ += 8; _ > f; )
        (_ -= f), (d += n[g & (t >> _)]);
    if ((_ && (d += n[g & (t << (f - _))]), h))
      for (; (d.length * f) & 7; ) d += "=";
    return d;
  },
  Z = ({ name: r, prefix: n, bitsPerChar: f, alphabet: h }) =>
    Pe({
      prefix: n,
      name: r,
      encode(g) {
        return en(g, h, f);
      },
      decode(g) {
        return kt(g, h, f, r);
      },
    }),
  rn = Pe({
    prefix: "\0",
    name: "identity",
    encode: (r) => Vt(r),
    decode: (r) => Gt(r),
  }),
  Hn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: rn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tn = Z({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  Kn = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: tn }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  nn = Z({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  $n = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: nn }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  an = xe({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  zn = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: an }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  un = Z({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  fn = Z({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  Yn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: un, base16upper: fn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  on = Z({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  sn = Z({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  hn = Z({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  cn = Z({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  ln = Z({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  Dn = Z({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  dn = Z({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  _n = Z({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  En = Z({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  Wn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: on,
        base32hex: ln,
        base32hexpad: dn,
        base32hexpadupper: _n,
        base32hexupper: Dn,
        base32pad: hn,
        base32padupper: cn,
        base32upper: sn,
        base32z: En,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  bn = xe({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  wn = xe({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  Gn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: bn, base36upper: wn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gn = xe({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  yn = xe({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  Vn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: gn, base58flickr: yn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vn = Z({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  mn = Z({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Sn = Z({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  pn = Z({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  Xn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: vn,
        base64pad: mn,
        base64url: Sn,
        base64urlpad: pn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wr = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Cn = Wr.reduce((r, n, f) => ((r[f] = n), r), []),
  On = Wr.reduce((r, n, f) => ((r[n.codePointAt(0)] = f), r), []);
function An(r) {
  return r.reduce((n, f) => ((n += Cn[f]), n), "");
}
function Un(r) {
  const n = [];
  for (const f of r) {
    const h = On[f.codePointAt(0)];
    if (h === void 0) throw new Error(`Non-base256emoji character: ${f}`);
    n.push(h);
  }
  return new Uint8Array(n);
}
const Fn = Pe({ prefix: "🚀", name: "base256emoji", encode: An, decode: Un }),
  Qn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: Fn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
export {
  $n as a,
  Kn as b,
  zn as c,
  Yn as d,
  Wn as e,
  Gn as f,
  Vn as g,
  Xn as h,
  Hn as i,
  Qn as j,
  xn as k,
  _e as l,
  zr as m,
  In as n,
  Mn as o,
  Ln as p,
  Bn as q,
  Ie as r,
  Pn as s,
  jn as t,
  Rn as u,
  qn as x,
};
