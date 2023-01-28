import { _ as __commonJS, a as __toESM, m as memoize } from "./chunk-MA2MUXQN.648116b1.js";
import "./iframe.4bd8a3e9.js";
import "../sb-preview/runtime.mjs";
import "./index.2e2f892a.js";
import "./_commonjsHelpers.712cc82f.js";
import "./index.31ab949d.js";
import "./_getTag.d1b75f35.js";
import "./index.e850844b.js";
var require_parser_html = __commonJS({ "node_modules/prettier/parser-html.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var i = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.html = e();
    }
  })(function() {
    var S = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), ee = S((cc, Kr) => {
      var Ne = function(e) {
        return e && e.Math == Math && e;
      };
      Kr.exports = Ne(typeof globalThis == "object" && globalThis) || Ne(typeof window == "object" && window) || Ne(typeof self == "object" && self) || Ne(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), se = S((hc, Jr) => {
      Jr.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), ae = S((pc, Zr) => {
      var qs = se();
      Zr.exports = !qs(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Oe = S((fc, eu) => {
      var Is = se();
      eu.exports = !Is(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), De = S((dc, ru) => {
      var Rs = Oe(), qe = Function.prototype.call;
      ru.exports = Rs ? qe.bind(qe) : function() {
        return qe.apply(qe, arguments);
      };
    }), su = S((nu) => {
      var uu = {}.propertyIsEnumerable, tu = Object.getOwnPropertyDescriptor, xs = tu && !uu.call({ 1: 2 }, 1);
      nu.f = xs ? function(r) {
        var u = tu(this, r);
        return !!u && u.enumerable;
      } : uu;
    }), Ie = S((Cc, iu) => {
      iu.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    }), re = S((mc, Du) => {
      var au = Oe(), ou = Function.prototype, er = ou.call, Ps = au && ou.bind.bind(er, er);
      Du.exports = au ? Ps : function(e) {
        return function() {
          return er.apply(e, arguments);
        };
      };
    }), me = S((gc, cu) => {
      var lu = re(), ks = lu({}.toString), Ls = lu("".slice);
      cu.exports = function(e) {
        return Ls(ks(e), 8, -1);
      };
    }), pu = S((Fc, hu) => {
      var $s = re(), Ms = se(), js = me(), rr = Object, Us = $s("".split);
      hu.exports = Ms(function() {
        return !rr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return js(e) == "String" ? Us(e, "") : rr(e);
      } : rr;
    }), Re = S((Ac, fu) => {
      fu.exports = function(e) {
        return e == null;
      };
    }), ur = S((vc, du) => {
      var Gs = Re(), Vs = TypeError;
      du.exports = function(e) {
        if (Gs(e))
          throw Vs("Can't call method on " + e);
        return e;
      };
    }), xe = S((_c, Eu) => {
      var Xs = pu(), Hs = ur();
      Eu.exports = function(e) {
        return Xs(Hs(e));
      };
    }), nr = S((Sc, Cu) => {
      var tr = typeof document == "object" && document.all, zs = typeof tr > "u" && tr !== void 0;
      Cu.exports = { all: tr, IS_HTMLDDA: zs };
    }), Y = S((yc, gu) => {
      var mu = nr(), Ws = mu.all;
      gu.exports = mu.IS_HTMLDDA ? function(e) {
        return typeof e == "function" || e === Ws;
      } : function(e) {
        return typeof e == "function";
      };
    }), le = S((Tc, vu) => {
      var Fu = Y(), Au = nr(), Ys = Au.all;
      vu.exports = Au.IS_HTMLDDA ? function(e) {
        return typeof e == "object" ? e !== null : Fu(e) || e === Ys;
      } : function(e) {
        return typeof e == "object" ? e !== null : Fu(e);
      };
    }), ge = S((Bc, _u) => {
      var sr = ee(), Qs = Y(), Ks = function(e) {
        return Qs(e) ? e : void 0;
      };
      _u.exports = function(e, r) {
        return arguments.length < 2 ? Ks(sr[e]) : sr[e] && sr[e][r];
      };
    }), ir = S((bc, Su) => {
      var Js = re();
      Su.exports = Js({}.isPrototypeOf);
    }), Tu = S((wc, yu) => {
      var Zs = ge();
      yu.exports = Zs("navigator", "userAgent") || "";
    }), Iu = S((Nc, qu) => {
      var Ou = ee(), ar = Tu(), Bu = Ou.process, bu = Ou.Deno, wu = Bu && Bu.versions || bu && bu.version, Nu = wu && wu.v8, ue, Pe;
      Nu && (ue = Nu.split("."), Pe = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1])), !Pe && ar && (ue = ar.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = ar.match(/Chrome\/(\d+)/), ue && (Pe = +ue[1]))), qu.exports = Pe;
    }), or = S((Oc, xu) => {
      var Ru = Iu(), ei = se();
      xu.exports = !!Object.getOwnPropertySymbols && !ei(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ru && Ru < 41;
      });
    }), Dr = S((qc, Pu) => {
      var ri = or();
      Pu.exports = ri && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), lr = S((Ic, ku) => {
      var ui = ge(), ti = Y(), ni = ir(), si = Dr(), ii = Object;
      ku.exports = si ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = ui("Symbol");
        return ti(r) && ni(r.prototype, ii(e));
      };
    }), ke = S((Rc, Lu) => {
      var ai = String;
      Lu.exports = function(e) {
        try {
          return ai(e);
        } catch {
          return "Object";
        }
      };
    }), Fe = S((xc, $u) => {
      var oi = Y(), Di = ke(), li = TypeError;
      $u.exports = function(e) {
        if (oi(e))
          return e;
        throw li(Di(e) + " is not a function");
      };
    }), Le = S((Pc, Mu) => {
      var ci = Fe(), hi = Re();
      Mu.exports = function(e, r) {
        var u = e[r];
        return hi(u) ? void 0 : ci(u);
      };
    }), Uu = S((kc, ju) => {
      var cr = De(), hr = Y(), pr = le(), pi = TypeError;
      ju.exports = function(e, r) {
        var u, n;
        if (r === "string" && hr(u = e.toString) && !pr(n = cr(u, e)) || hr(u = e.valueOf) && !pr(n = cr(u, e)) || r !== "string" && hr(u = e.toString) && !pr(n = cr(u, e)))
          return n;
        throw pi("Can't convert object to primitive value");
      };
    }), Vu = S((Lc, Gu) => {
      Gu.exports = false;
    }), $e = S(($c, Hu) => {
      var Xu = ee(), fi = Object.defineProperty;
      Hu.exports = function(e, r) {
        try {
          fi(Xu, e, { value: r, configurable: true, writable: true });
        } catch {
          Xu[e] = r;
        }
        return r;
      };
    }), Me = S((Mc, Wu) => {
      var di = ee(), Ei = $e(), zu = "__core-js_shared__", Ci = di[zu] || Ei(zu, {});
      Wu.exports = Ci;
    }), fr = S((jc, Qu) => {
      var mi = Vu(), Yu = Me();
      (Qu.exports = function(e, r) {
        return Yu[e] || (Yu[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.26.1", mode: mi ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), dr = S((Uc, Ku) => {
      var gi = ur(), Fi = Object;
      Ku.exports = function(e) {
        return Fi(gi(e));
      };
    }), oe = S((Gc, Ju) => {
      var Ai = re(), vi = dr(), _i = Ai({}.hasOwnProperty);
      Ju.exports = Object.hasOwn || function(r, u) {
        return _i(vi(r), u);
      };
    }), Er = S((Vc, Zu) => {
      var Si = re(), yi = 0, Ti = Math.random(), Bi = Si(1 .toString);
      Zu.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Bi(++yi + Ti, 36);
      };
    }), he = S((Xc, nt) => {
      var bi = ee(), wi = fr(), et = oe(), Ni = Er(), rt = or(), tt = Dr(), fe = wi("wks"), ce = bi.Symbol, ut = ce && ce.for, Oi = tt ? ce : ce && ce.withoutSetter || Ni;
      nt.exports = function(e) {
        if (!et(fe, e) || !(rt || typeof fe[e] == "string")) {
          var r = "Symbol." + e;
          rt && et(ce, e) ? fe[e] = ce[e] : tt && ut ? fe[e] = ut(r) : fe[e] = Oi(r);
        }
        return fe[e];
      };
    }), ot = S((Hc, at) => {
      var qi = De(), st = le(), it = lr(), Ii = Le(), Ri = Uu(), xi = he(), Pi = TypeError, ki = xi("toPrimitive");
      at.exports = function(e, r) {
        if (!st(e) || it(e))
          return e;
        var u = Ii(e, ki), n;
        if (u) {
          if (r === void 0 && (r = "default"), n = qi(u, e, r), !st(n) || it(n))
            return n;
          throw Pi("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), Ri(e, r);
      };
    }), je = S((zc, Dt) => {
      var Li = ot(), $i = lr();
      Dt.exports = function(e) {
        var r = Li(e, "string");
        return $i(r) ? r : r + "";
      };
    }), ht = S((Wc, ct) => {
      var Mi = ee(), lt = le(), Cr = Mi.document, ji = lt(Cr) && lt(Cr.createElement);
      ct.exports = function(e) {
        return ji ? Cr.createElement(e) : {};
      };
    }), mr = S((Yc, pt) => {
      var Ui = ae(), Gi = se(), Vi = ht();
      pt.exports = !Ui && !Gi(function() {
        return Object.defineProperty(Vi("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), gr = S((dt) => {
      var Xi = ae(), Hi = De(), zi = su(), Wi = Ie(), Yi = xe(), Qi = je(), Ki = oe(), Ji = mr(), ft = Object.getOwnPropertyDescriptor;
      dt.f = Xi ? ft : function(r, u) {
        if (r = Yi(r), u = Qi(u), Ji)
          try {
            return ft(r, u);
          } catch {
          }
        if (Ki(r, u))
          return Wi(!Hi(zi.f, r, u), r[u]);
      };
    }), Ct = S((Kc, Et) => {
      var Zi = ae(), ea = se();
      Et.exports = Zi && ea(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), de = S((Jc, mt) => {
      var ra = le(), ua = String, ta = TypeError;
      mt.exports = function(e) {
        if (ra(e))
          return e;
        throw ta(ua(e) + " is not an object");
      };
    }), Ae = S((Ft) => {
      var na = ae(), sa = mr(), ia = Ct(), Ue = de(), gt = je(), aa = TypeError, Fr = Object.defineProperty, oa = Object.getOwnPropertyDescriptor, Ar = "enumerable", vr = "configurable", _r = "writable";
      Ft.f = na ? ia ? function(r, u, n) {
        if (Ue(r), u = gt(u), Ue(n), typeof r == "function" && u === "prototype" && "value" in n && _r in n && !n[_r]) {
          var D = oa(r, u);
          D && D[_r] && (r[u] = n.value, n = { configurable: vr in n ? n[vr] : D[vr], enumerable: Ar in n ? n[Ar] : D[Ar], writable: false });
        }
        return Fr(r, u, n);
      } : Fr : function(r, u, n) {
        if (Ue(r), u = gt(u), Ue(n), sa)
          try {
            return Fr(r, u, n);
          } catch {
          }
        if ("get" in n || "set" in n)
          throw aa("Accessors not supported");
        return "value" in n && (r[u] = n.value), r;
      };
    }), Sr = S((e2, At) => {
      var Da = ae(), la = Ae(), ca = Ie();
      At.exports = Da ? function(e, r, u) {
        return la.f(e, r, ca(1, u));
      } : function(e, r, u) {
        return e[r] = u, e;
      };
    }), St = S((r2, _t) => {
      var yr = ae(), ha = oe(), vt = Function.prototype, pa = yr && Object.getOwnPropertyDescriptor, Tr = ha(vt, "name"), fa = Tr && function() {
      }.name === "something", da = Tr && (!yr || yr && pa(vt, "name").configurable);
      _t.exports = { EXISTS: Tr, PROPER: fa, CONFIGURABLE: da };
    }), br = S((u2, yt) => {
      var Ea = re(), Ca = Y(), Br = Me(), ma = Ea(Function.toString);
      Ca(Br.inspectSource) || (Br.inspectSource = function(e) {
        return ma(e);
      }), yt.exports = Br.inspectSource;
    }), bt = S((t2, Bt) => {
      var ga = ee(), Fa = Y(), Tt = ga.WeakMap;
      Bt.exports = Fa(Tt) && /native code/.test(String(Tt));
    }), Ot = S((n2, Nt) => {
      var Aa = fr(), va = Er(), wt = Aa("keys");
      Nt.exports = function(e) {
        return wt[e] || (wt[e] = va(e));
      };
    }), wr = S((s2, qt) => {
      qt.exports = {};
    }), Pt = S((i2, xt) => {
      var _a = bt(), Rt = ee(), Sa = le(), ya = Sr(), Nr = oe(), Or = Me(), Ta = Ot(), Ba = wr(), It = "Object already initialized", qr = Rt.TypeError, ba = Rt.WeakMap, Ge, ve, Ve, wa = function(e) {
        return Ve(e) ? ve(e) : Ge(e, {});
      }, Na = function(e) {
        return function(r) {
          var u;
          if (!Sa(r) || (u = ve(r)).type !== e)
            throw qr("Incompatible receiver, " + e + " required");
          return u;
        };
      };
      _a || Or.state ? (te = Or.state || (Or.state = new ba()), te.get = te.get, te.has = te.has, te.set = te.set, Ge = function(e, r) {
        if (te.has(e))
          throw qr(It);
        return r.facade = e, te.set(e, r), r;
      }, ve = function(e) {
        return te.get(e) || {};
      }, Ve = function(e) {
        return te.has(e);
      }) : (pe = Ta("state"), Ba[pe] = true, Ge = function(e, r) {
        if (Nr(e, pe))
          throw qr(It);
        return r.facade = e, ya(e, pe, r), r;
      }, ve = function(e) {
        return Nr(e, pe) ? e[pe] : {};
      }, Ve = function(e) {
        return Nr(e, pe);
      });
      var te, pe;
      xt.exports = { set: Ge, get: ve, has: Ve, enforce: wa, getterFor: Na };
    }), $t = S((a2, Lt) => {
      var Oa = se(), qa = Y(), Xe = oe(), Ir = ae(), Ia = St().CONFIGURABLE, Ra = br(), kt = Pt(), xa = kt.enforce, Pa = kt.get, He = Object.defineProperty, ka = Ir && !Oa(function() {
        return He(function() {
        }, "length", { value: 8 }).length !== 8;
      }), La = String(String).split("String"), $a = Lt.exports = function(e, r, u) {
        String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), u && u.getter && (r = "get " + r), u && u.setter && (r = "set " + r), (!Xe(e, "name") || Ia && e.name !== r) && (Ir ? He(e, "name", { value: r, configurable: true }) : e.name = r), ka && u && Xe(u, "arity") && e.length !== u.arity && He(e, "length", { value: u.arity });
        try {
          u && Xe(u, "constructor") && u.constructor ? Ir && He(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
        } catch {
        }
        var n = xa(e);
        return Xe(n, "source") || (n.source = La.join(typeof r == "string" ? r : "")), e;
      };
      Function.prototype.toString = $a(function() {
        return qa(this) && Pa(this).source || Ra(this);
      }, "toString");
    }), jt = S((o2, Mt) => {
      var Ma = Y(), ja = Ae(), Ua = $t(), Ga = $e();
      Mt.exports = function(e, r, u, n) {
        n || (n = {});
        var D = n.enumerable, s = n.name !== void 0 ? n.name : r;
        if (Ma(u) && Ua(u, s, n), n.global)
          D ? e[r] = u : Ga(r, u);
        else {
          try {
            n.unsafe ? e[r] && (D = true) : delete e[r];
          } catch {
          }
          D ? e[r] = u : ja.f(e, r, { value: u, enumerable: false, configurable: !n.nonConfigurable, writable: !n.nonWritable });
        }
        return e;
      };
    }), Gt = S((D2, Ut) => {
      var Va = Math.ceil, Xa = Math.floor;
      Ut.exports = Math.trunc || function(r) {
        var u = +r;
        return (u > 0 ? Xa : Va)(u);
      };
    }), Rr = S((l2, Vt) => {
      var Ha = Gt();
      Vt.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : Ha(r);
      };
    }), Ht = S((c2, Xt) => {
      var za = Rr(), Wa = Math.max, Ya = Math.min;
      Xt.exports = function(e, r) {
        var u = za(e);
        return u < 0 ? Wa(u + r, 0) : Ya(u, r);
      };
    }), Wt = S((h2, zt) => {
      var Qa = Rr(), Ka = Math.min;
      zt.exports = function(e) {
        return e > 0 ? Ka(Qa(e), 9007199254740991) : 0;
      };
    }), _e = S((p2, Yt) => {
      var Ja = Wt();
      Yt.exports = function(e) {
        return Ja(e.length);
      };
    }), Jt = S((f2, Kt) => {
      var Za = xe(), eo = Ht(), ro = _e(), Qt = function(e) {
        return function(r, u, n) {
          var D = Za(r), s = ro(D), i = eo(n, s), f;
          if (e && u != u) {
            for (; s > i; )
              if (f = D[i++], f != f)
                return true;
          } else
            for (; s > i; i++)
              if ((e || i in D) && D[i] === u)
                return e || i || 0;
          return !e && -1;
        };
      };
      Kt.exports = { includes: Qt(true), indexOf: Qt(false) };
    }), rn = S((d2, en) => {
      var uo = re(), xr = oe(), to = xe(), no = Jt().indexOf, so = wr(), Zt = uo([].push);
      en.exports = function(e, r) {
        var u = to(e), n = 0, D = [], s;
        for (s in u)
          !xr(so, s) && xr(u, s) && Zt(D, s);
        for (; r.length > n; )
          xr(u, s = r[n++]) && (~no(D, s) || Zt(D, s));
        return D;
      };
    }), tn = S((E2, un) => {
      un.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), sn = S((nn) => {
      var io = rn(), ao = tn(), oo = ao.concat("length", "prototype");
      nn.f = Object.getOwnPropertyNames || function(r) {
        return io(r, oo);
      };
    }), on = S((an) => {
      an.f = Object.getOwnPropertySymbols;
    }), ln = S((g2, Dn) => {
      var Do = ge(), lo = re(), co = sn(), ho = on(), po = de(), fo = lo([].concat);
      Dn.exports = Do("Reflect", "ownKeys") || function(r) {
        var u = co.f(po(r)), n = ho.f;
        return n ? fo(u, n(r)) : u;
      };
    }), pn = S((F2, hn) => {
      var cn = oe(), Eo = ln(), Co = gr(), mo = Ae();
      hn.exports = function(e, r, u) {
        for (var n = Eo(r), D = mo.f, s = Co.f, i = 0; i < n.length; i++) {
          var f = n[i];
          !cn(e, f) && !(u && cn(u, f)) && D(e, f, s(r, f));
        }
      };
    }), dn = S((A2, fn) => {
      var go = se(), Fo = Y(), Ao = /#|\.prototype\./, Se = function(e, r) {
        var u = _o[vo(e)];
        return u == yo ? true : u == So ? false : Fo(r) ? go(r) : !!r;
      }, vo = Se.normalize = function(e) {
        return String(e).replace(Ao, ".").toLowerCase();
      }, _o = Se.data = {}, So = Se.NATIVE = "N", yo = Se.POLYFILL = "P";
      fn.exports = Se;
    }), ze = S((v2, En) => {
      var Pr = ee(), To = gr().f, Bo = Sr(), bo = jt(), wo = $e(), No = pn(), Oo = dn();
      En.exports = function(e, r) {
        var u = e.target, n = e.global, D = e.stat, s, i, f, c, F, a;
        if (n ? i = Pr : D ? i = Pr[u] || wo(u, {}) : i = (Pr[u] || {}).prototype, i)
          for (f in r) {
            if (F = r[f], e.dontCallGetSet ? (a = To(i, f), c = a && a.value) : c = i[f], s = Oo(n ? f : u + (D ? "." : "#") + f, e.forced), !s && c !== void 0) {
              if (typeof F == typeof c)
                continue;
              No(F, c);
            }
            (e.sham || c && c.sham) && Bo(F, "sham", true), bo(i, f, F, e);
          }
      };
    }), Cn = S(() => {
      var qo = ze(), kr = ee();
      qo({ global: true, forced: kr.globalThis !== kr }, { globalThis: kr });
    }), mn = S(() => {
      Cn();
    }), Lr = S((B2, gn) => {
      var Io = me();
      gn.exports = Array.isArray || function(r) {
        return Io(r) == "Array";
      };
    }), An = S((b2, Fn) => {
      var Ro = TypeError, xo = 9007199254740991;
      Fn.exports = function(e) {
        if (e > xo)
          throw Ro("Maximum allowed index exceeded");
        return e;
      };
    }), _n = S((w2, vn) => {
      var Po = me(), ko = re();
      vn.exports = function(e) {
        if (Po(e) === "Function")
          return ko(e);
      };
    }), $r = S((N2, yn) => {
      var Sn = _n(), Lo = Fe(), $o = Oe(), Mo = Sn(Sn.bind);
      yn.exports = function(e, r) {
        return Lo(e), r === void 0 ? e : $o ? Mo(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    }), bn = S((O2, Bn) => {
      var jo = Lr(), Uo = _e(), Go = An(), Vo = $r(), Tn = function(e, r, u, n, D, s, i, f) {
        for (var c = D, F = 0, a = i ? Vo(i, f) : false, l, h; F < n; )
          F in u && (l = a ? a(u[F], F, r) : u[F], s > 0 && jo(l) ? (h = Uo(l), c = Tn(e, r, l, h, c, s - 1) - 1) : (Go(c + 1), e[c] = l), c++), F++;
        return c;
      };
      Bn.exports = Tn;
    }), On = S((q2, Nn) => {
      var Xo = he(), Ho = Xo("toStringTag"), wn = {};
      wn[Ho] = "z", Nn.exports = String(wn) === "[object z]";
    }), Mr = S((I2, qn) => {
      var zo = On(), Wo = Y(), We = me(), Yo = he(), Qo = Yo("toStringTag"), Ko = Object, Jo = We(function() {
        return arguments;
      }()) == "Arguments", Zo = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      qn.exports = zo ? We : function(e) {
        var r, u, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Zo(r = Ko(e), Qo)) == "string" ? u : Jo ? We(r) : (n = We(r)) == "Object" && Wo(r.callee) ? "Arguments" : n;
      };
    }), Ln = S((R2, kn) => {
      var eD = re(), rD = se(), In = Y(), uD = Mr(), tD = ge(), nD = br(), Rn = function() {
      }, sD = [], xn = tD("Reflect", "construct"), jr = /^\s*(?:class|function)\b/, iD = eD(jr.exec), aD = !jr.exec(Rn), ye = function(r) {
        if (!In(r))
          return false;
        try {
          return xn(Rn, sD, r), true;
        } catch {
          return false;
        }
      }, Pn = function(r) {
        if (!In(r))
          return false;
        switch (uD(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return aD || !!iD(jr, nD(r));
        } catch {
          return true;
        }
      };
      Pn.sham = true, kn.exports = !xn || rD(function() {
        var e;
        return ye(ye.call) || !ye(Object) || !ye(function() {
          e = true;
        }) || e;
      }) ? Pn : ye;
    }), Un = S((x2, jn) => {
      var $n = Lr(), oD = Ln(), DD = le(), lD = he(), cD = lD("species"), Mn = Array;
      jn.exports = function(e) {
        var r;
        return $n(e) && (r = e.constructor, oD(r) && (r === Mn || $n(r.prototype)) ? r = void 0 : DD(r) && (r = r[cD], r === null && (r = void 0))), r === void 0 ? Mn : r;
      };
    }), Vn = S((P2, Gn) => {
      var hD = Un();
      Gn.exports = function(e, r) {
        return new (hD(e))(r === 0 ? 0 : r);
      };
    }), Xn = S(() => {
      var pD = ze(), fD = bn(), dD = Fe(), ED = dr(), CD = _e(), mD = Vn();
      pD({ target: "Array", proto: true }, { flatMap: function(r) {
        var u = ED(this), n = CD(u), D;
        return dD(r), D = mD(u, 0), D.length = fD(D, u, u, n, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
      } });
    }), Ur = S(($2, Hn) => {
      Hn.exports = {};
    }), Wn = S((M2, zn) => {
      var gD = he(), FD = Ur(), AD = gD("iterator"), vD = Array.prototype;
      zn.exports = function(e) {
        return e !== void 0 && (FD.Array === e || vD[AD] === e);
      };
    }), Gr = S((j2, Qn) => {
      var _D = Mr(), Yn = Le(), SD = Re(), yD = Ur(), TD = he(), BD = TD("iterator");
      Qn.exports = function(e) {
        if (!SD(e))
          return Yn(e, BD) || Yn(e, "@@iterator") || yD[_D(e)];
      };
    }), Jn = S((U2, Kn) => {
      var bD = De(), wD = Fe(), ND = de(), OD = ke(), qD = Gr(), ID = TypeError;
      Kn.exports = function(e, r) {
        var u = arguments.length < 2 ? qD(e) : r;
        if (wD(u))
          return ND(bD(u, e));
        throw ID(OD(e) + " is not iterable");
      };
    }), rs = S((G2, es) => {
      var RD = De(), Zn = de(), xD = Le();
      es.exports = function(e, r, u) {
        var n, D;
        Zn(e);
        try {
          if (n = xD(e, "return"), !n) {
            if (r === "throw")
              throw u;
            return u;
          }
          n = RD(n, e);
        } catch (s) {
          D = true, n = s;
        }
        if (r === "throw")
          throw u;
        if (D)
          throw n;
        return Zn(n), u;
      };
    }), is = S((V2, ss) => {
      var PD = $r(), kD = De(), LD = de(), $D = ke(), MD = Wn(), jD = _e(), us = ir(), UD = Jn(), GD = Gr(), ts = rs(), VD = TypeError, Ye = function(e, r) {
        this.stopped = e, this.result = r;
      }, ns = Ye.prototype;
      ss.exports = function(e, r, u) {
        var n = u && u.that, D = !!(u && u.AS_ENTRIES), s = !!(u && u.IS_RECORD), i = !!(u && u.IS_ITERATOR), f = !!(u && u.INTERRUPTED), c = PD(r, n), F, a, l, h, C, d, m, T = function(g) {
          return F && ts(F, "normal", g), new Ye(true, g);
        }, w = function(g) {
          return D ? (LD(g), f ? c(g[0], g[1], T) : c(g[0], g[1])) : f ? c(g, T) : c(g);
        };
        if (s)
          F = e.iterator;
        else if (i)
          F = e;
        else {
          if (a = GD(e), !a)
            throw VD($D(e) + " is not iterable");
          if (MD(a)) {
            for (l = 0, h = jD(e); h > l; l++)
              if (C = w(e[l]), C && us(ns, C))
                return C;
            return new Ye(false);
          }
          F = UD(e, a);
        }
        for (d = s ? e.next : F.next; !(m = kD(d, F)).done; ) {
          try {
            C = w(m.value);
          } catch (g) {
            ts(F, "throw", g);
          }
          if (typeof C == "object" && C && us(ns, C))
            return C;
        }
        return new Ye(false);
      };
    }), os = S((X2, as) => {
      var XD = je(), HD = Ae(), zD = Ie();
      as.exports = function(e, r, u) {
        var n = XD(r);
        n in e ? HD.f(e, n, zD(0, u)) : e[n] = u;
      };
    }), Ds = S(() => {
      var WD = ze(), YD = is(), QD = os();
      WD({ target: "Object", stat: true }, { fromEntries: function(r) {
        var u = {};
        return YD(r, function(n, D) {
          QD(u, n, D);
        }, { AS_ENTRIES: true }), u;
      } });
    }), Dc = S((W2, Os) => {
      var KD = ["cliName", "cliCategory", "cliDescription"];
      function JD(e, r) {
        if (e == null)
          return {};
        var u = ZD(e, r), n, D;
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (D = 0; D < s.length; D++)
            n = s[D], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]);
        }
        return u;
      }
      function ZD(e, r) {
        if (e == null)
          return {};
        var u = {}, n = Object.keys(e), D, s;
        for (s = 0; s < n.length; s++)
          D = n[s], !(r.indexOf(D) >= 0) && (u[D] = e[D]);
        return u;
      }
      mn(), Xn(), Ds();
      var el = Object.create, Je = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyNames, ul = Object.getPrototypeOf, tl = Object.prototype.hasOwnProperty, Ee = (e, r) => function() {
        return e && (r = (0, e[Xr(e)[0]])(e = 0)), r;
      }, I = (e, r) => function() {
        return r || (0, e[Xr(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, ps = (e, r) => {
        for (var u in r)
          Je(e, u, { get: r[u], enumerable: true });
      }, fs = (e, r, u, n) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let D of Xr(r))
            !tl.call(e, D) && D !== u && Je(e, D, { get: () => r[D], enumerable: !(n = rl(r, D)) || n.enumerable });
        return e;
      }, nl = (e, r, u) => (u = e != null ? el(ul(e)) : {}, fs(r || !e || !e.__esModule ? Je(u, "default", { value: e, enumerable: true }) : u, e)), ds = (e) => fs(Je({}, "__esModule", { value: true }), e), Te, q = Ee({ "<define:process>"() {
        Te = { env: {}, argv: [] };
      } }), Es = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(f) {
          return f >= e.$TAB && f <= e.$SPACE || f == e.$NBSP;
        }
        e.isWhitespace = r;
        function u(f) {
          return e.$0 <= f && f <= e.$9;
        }
        e.isDigit = u;
        function n(f) {
          return f >= e.$a && f <= e.$z || f >= e.$A && f <= e.$Z;
        }
        e.isAsciiLetter = n;
        function D(f) {
          return f >= e.$a && f <= e.$f || f >= e.$A && f <= e.$F || u(f);
        }
        e.isAsciiHexDigit = D;
        function s(f) {
          return f === e.$LF || f === e.$CR;
        }
        e.isNewLine = s;
        function i(f) {
          return e.$0 <= f && f <= e.$7;
        }
        e.isOctalDigit = i;
      } }), sl = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(n, D, s) {
            this.filePath = n, this.name = D, this.members = s;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = r;
        var u = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(n, D, s) {
            s = s || [];
            let i = s.length ? `.${s.join(".")}` : "", f = `"${n}".${D}${i}`, c = this.cache.get(f);
            return c || (c = new r(n, D, s), this.cache.set(f, c)), c;
          }
        };
        e.StaticSymbolCache = u;
      } }), il = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function u(o) {
          return o.replace(r, function() {
            for (var E = arguments.length, p = new Array(E), A = 0; A < E; A++)
              p[A] = arguments[A];
            return p[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = u;
        function n(o, E) {
          return s(o, ":", E);
        }
        e.splitAtColon = n;
        function D(o, E) {
          return s(o, ".", E);
        }
        e.splitAtPeriod = D;
        function s(o, E, p) {
          let A = o.indexOf(E);
          return A == -1 ? p : [o.slice(0, A).trim(), o.slice(A + 1).trim()];
        }
        function i(o, E, p) {
          return Array.isArray(o) ? E.visitArray(o, p) : g(o) ? E.visitStringMap(o, p) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? E.visitPrimitive(o, p) : E.visitOther(o, p);
        }
        e.visitValue = i;
        function f(o) {
          return o != null;
        }
        e.isDefined = f;
        function c(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = c;
        var F = class {
          visitArray(o, E) {
            return o.map((p) => i(p, this, E));
          }
          visitStringMap(o, E) {
            let p = {};
            return Object.keys(o).forEach((A) => {
              p[A] = i(o[A], this, E);
            }), p;
          }
          visitPrimitive(o, E) {
            return o;
          }
          visitOther(o, E) {
            return o;
          }
        };
        e.ValueTransformer = F, e.SyncAsync = { assertSync: (o) => {
          if (_(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, E) => _(o) ? o.then(E) : E(o), all: (o) => o.some(_) ? Promise.all(o) : o };
        function a(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = a;
        function l(o, E) {
          let p = Error(o);
          return p[h] = true, E && (p[C] = E), p;
        }
        e.syntaxError = l;
        var h = "ngSyntaxError", C = "ngParseErrors";
        function d(o) {
          return o[h];
        }
        e.isSyntaxError = d;
        function m(o) {
          return o[C] || [];
        }
        e.getParseErrors = m;
        function T(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = T;
        var w = Object.getPrototypeOf({});
        function g(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w;
        }
        function N(o) {
          let E = "";
          for (let p = 0; p < o.length; p++) {
            let A = o.charCodeAt(p);
            if (A >= 55296 && A <= 56319 && o.length > p + 1) {
              let P = o.charCodeAt(p + 1);
              P >= 56320 && P <= 57343 && (p++, A = (A - 55296 << 10) + P - 56320 + 65536);
            }
            A <= 127 ? E += String.fromCharCode(A) : A <= 2047 ? E += String.fromCharCode(A >> 6 & 31 | 192, A & 63 | 128) : A <= 65535 ? E += String.fromCharCode(A >> 12 | 224, A >> 6 & 63 | 128, A & 63 | 128) : A <= 2097151 && (E += String.fromCharCode(A >> 18 & 7 | 240, A >> 12 & 63 | 128, A >> 6 & 63 | 128, A & 63 | 128));
          }
          return E;
        }
        e.utf8Encode = N;
        function R(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(R).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let E = o.toString();
          if (E == null)
            return "" + E;
          let p = E.indexOf(`
`);
          return p === -1 ? E : E.substring(0, p);
        }
        e.stringify = R;
        function j(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = j;
        function _(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = _;
        var O = class {
          constructor(o) {
            this.full = o;
            let E = o.split(".");
            this.major = E[0], this.minor = E[1], this.patch = E.slice(2).join(".");
          }
        };
        e.Version = O;
        var x = typeof window < "u" && window, k = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, $ = typeof globalThis < "u" && globalThis, t = $ || x || k;
        e.global = t;
      } }), al = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = sl(), u = il(), n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function D(p) {
          return p.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = D;
        var s = 0;
        function i(p) {
          if (!p || !p.reference)
            return null;
          let A = p.reference;
          if (A instanceof r.StaticSymbol)
            return A.name;
          if (A.__anonymousType)
            return A.__anonymousType;
          let P = u.stringify(A);
          return P.indexOf("(") >= 0 ? (P = `anonymous_${s++}`, A.__anonymousType = P) : P = D(P), P;
        }
        e.identifierName = i;
        function f(p) {
          let A = p.reference;
          return A instanceof r.StaticSymbol ? A.filePath : `./${u.stringify(A)}`;
        }
        e.identifierModuleUrl = f;
        function c(p, A) {
          return `View_${i({ reference: p })}_${A}`;
        }
        e.viewClassName = c;
        function F(p) {
          return `RenderType_${i({ reference: p })}`;
        }
        e.rendererTypeName = F;
        function a(p) {
          return `HostView_${i({ reference: p })}`;
        }
        e.hostViewClassName = a;
        function l(p) {
          return `${i({ reference: p })}NgFactory`;
        }
        e.componentFactoryName = l;
        var h;
        (function(p) {
          p[p.Pipe = 0] = "Pipe", p[p.Directive = 1] = "Directive", p[p.NgModule = 2] = "NgModule", p[p.Injectable = 3] = "Injectable";
        })(h = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function C(p) {
          return p.value != null ? D(p.value) : i(p.identifier);
        }
        e.tokenName = C;
        function d(p) {
          return p.identifier != null ? p.identifier.reference : p.value;
        }
        e.tokenReference = d;
        var m = class {
          constructor() {
            let { moduleUrl: p, styles: A, styleUrls: P } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = p || null, this.styles = _(A), this.styleUrls = _(P);
          }
        };
        e.CompileStylesheetMetadata = m;
        var T = class {
          constructor(p) {
            let { encapsulation: A, template: P, templateUrl: M, htmlAst: z, styles: V, styleUrls: X, externalStylesheets: H, animations: Q, ngContentSelectors: K, interpolation: J, isInline: v, preserveWhitespaces: y } = p;
            if (this.encapsulation = A, this.template = P, this.templateUrl = M, this.htmlAst = z, this.styles = _(V), this.styleUrls = _(X), this.externalStylesheets = _(H), this.animations = Q ? x(Q) : [], this.ngContentSelectors = K || [], J && J.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = J, this.isInline = v, this.preserveWhitespaces = y;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = T;
        var w = class {
          static create(p) {
            let { isHost: A, type: P, isComponent: M, selector: z, exportAs: V, changeDetection: X, inputs: H, outputs: Q, host: K, providers: J, viewProviders: v, queries: y, guards: B, viewQueries: b, entryComponents: L, template: U, componentViewType: G, rendererType: W, componentFactory: ne } = p, be = {}, we = {}, Wr = {};
            K != null && Object.keys(K).forEach((Z) => {
              let ie = K[Z], Ce = Z.match(n);
              Ce === null ? Wr[Z] = ie : Ce[1] != null ? we[Ce[1]] = ie : Ce[2] != null && (be[Ce[2]] = ie);
            });
            let Yr = {};
            H == null ? void 0 : H.forEach((Z) => {
              let ie = u.splitAtColon(Z, [Z, Z]);
              Yr[ie[0]] = ie[1];
            });
            let Qr = {};
            return Q == null ? void 0 : Q.forEach((Z) => {
              let ie = u.splitAtColon(Z, [Z, Z]);
              Qr[ie[0]] = ie[1];
            }), new w({ isHost: A, type: P, isComponent: !!M, selector: z, exportAs: V, changeDetection: X, inputs: Yr, outputs: Qr, hostListeners: be, hostProperties: we, hostAttributes: Wr, providers: J, viewProviders: v, queries: y, guards: B, viewQueries: b, entryComponents: L, template: U, componentViewType: G, rendererType: W, componentFactory: ne });
          }
          constructor(p) {
            let { isHost: A, type: P, isComponent: M, selector: z, exportAs: V, changeDetection: X, inputs: H, outputs: Q, hostListeners: K, hostProperties: J, hostAttributes: v, providers: y, viewProviders: B, queries: b, guards: L, viewQueries: U, entryComponents: G, template: W, componentViewType: ne, rendererType: be, componentFactory: we } = p;
            this.isHost = !!A, this.type = P, this.isComponent = M, this.selector = z, this.exportAs = V, this.changeDetection = X, this.inputs = H, this.outputs = Q, this.hostListeners = K, this.hostProperties = J, this.hostAttributes = v, this.providers = _(y), this.viewProviders = _(B), this.queries = _(b), this.guards = L, this.viewQueries = _(U), this.entryComponents = _(G), this.template = W, this.componentViewType = ne, this.rendererType = be, this.componentFactory = we;
          }
          toSummary() {
            return { summaryKind: h.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = w;
        var g = class {
          constructor(p) {
            let { type: A, name: P, pure: M } = p;
            this.type = A, this.name = P, this.pure = !!M;
          }
          toSummary() {
            return { summaryKind: h.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = g;
        var N = class {
        };
        e.CompileShallowModuleMetadata = N;
        var R = class {
          constructor(p) {
            let { type: A, providers: P, declaredDirectives: M, exportedDirectives: z, declaredPipes: V, exportedPipes: X, entryComponents: H, bootstrapComponents: Q, importedModules: K, exportedModules: J, schemas: v, transitiveModule: y, id: B } = p;
            this.type = A || null, this.declaredDirectives = _(M), this.exportedDirectives = _(z), this.declaredPipes = _(V), this.exportedPipes = _(X), this.providers = _(P), this.entryComponents = _(H), this.bootstrapComponents = _(Q), this.importedModules = _(K), this.exportedModules = _(J), this.schemas = _(v), this.id = B || null, this.transitiveModule = y || null;
          }
          toSummary() {
            let p = this.transitiveModule;
            return { summaryKind: h.NgModule, type: this.type, entryComponents: p.entryComponents, providers: p.providers, modules: p.modules, exportedDirectives: p.exportedDirectives, exportedPipes: p.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = R;
        var j = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(p, A) {
            this.providers.push({ provider: p, module: A });
          }
          addDirective(p) {
            this.directivesSet.has(p.reference) || (this.directivesSet.add(p.reference), this.directives.push(p));
          }
          addExportedDirective(p) {
            this.exportedDirectivesSet.has(p.reference) || (this.exportedDirectivesSet.add(p.reference), this.exportedDirectives.push(p));
          }
          addPipe(p) {
            this.pipesSet.has(p.reference) || (this.pipesSet.add(p.reference), this.pipes.push(p));
          }
          addExportedPipe(p) {
            this.exportedPipesSet.has(p.reference) || (this.exportedPipesSet.add(p.reference), this.exportedPipes.push(p));
          }
          addModule(p) {
            this.modulesSet.has(p.reference) || (this.modulesSet.add(p.reference), this.modules.push(p));
          }
          addEntryComponent(p) {
            this.entryComponentsSet.has(p.componentType) || (this.entryComponentsSet.add(p.componentType), this.entryComponents.push(p));
          }
        };
        e.TransitiveCompileNgModuleMetadata = j;
        function _(p) {
          return p || [];
        }
        var O = class {
          constructor(p, A) {
            let { useClass: P, useValue: M, useExisting: z, useFactory: V, deps: X, multi: H } = A;
            this.token = p, this.useClass = P || null, this.useValue = M, this.useExisting = z, this.useFactory = V || null, this.dependencies = X || null, this.multi = !!H;
          }
        };
        e.ProviderMeta = O;
        function x(p) {
          return p.reduce((A, P) => {
            let M = Array.isArray(P) ? x(P) : P;
            return A.concat(M);
          }, []);
        }
        e.flatten = x;
        function k(p) {
          return p.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function $(p, A, P) {
          let M;
          return P.isInline ? A.type.reference instanceof r.StaticSymbol ? M = `${A.type.reference.filePath}.${A.type.reference.name}.html` : M = `${i(p)}/${i(A.type)}.html` : M = P.templateUrl, A.type.reference instanceof r.StaticSymbol ? M : k(M);
        }
        e.templateSourceUrl = $;
        function t(p, A) {
          let P = p.moduleUrl.split(/\/\\/g), M = P[P.length - 1];
          return k(`css/${A}${M}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = t;
        function o(p) {
          return k(`${i(p.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function E(p, A) {
          return k(`${i(p)}/${i(A.type)}.ngfactory.js`);
        }
        e.templateJitUrl = E;
      } }), Be = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Es(), u = al(), n = class {
          constructor(a, l, h, C) {
            this.file = a, this.offset = l, this.line = h, this.col = C;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(a) {
            let l = this.file.content, h = l.length, C = this.offset, d = this.line, m = this.col;
            for (; C > 0 && a < 0; )
              if (C--, a++, l.charCodeAt(C) == r.$LF) {
                d--;
                let w = l.substr(0, C - 1).lastIndexOf(String.fromCharCode(r.$LF));
                m = w > 0 ? C - w : C;
              } else
                m--;
            for (; C < h && a > 0; ) {
              let T = l.charCodeAt(C);
              C++, a--, T == r.$LF ? (d++, m = 0) : m++;
            }
            return new n(this.file, C, d, m);
          }
          getContext(a, l) {
            let h = this.file.content, C = this.offset;
            if (C != null) {
              C > h.length - 1 && (C = h.length - 1);
              let d = C, m = 0, T = 0;
              for (; m < a && C > 0 && (C--, m++, !(h[C] == `
` && ++T == l)); )
                ;
              for (m = 0, T = 0; m < a && d < h.length - 1 && (d++, m++, !(h[d] == `
` && ++T == l)); )
                ;
              return { before: h.substring(C, this.offset), after: h.substring(this.offset, d + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = n;
        var D = class {
          constructor(a, l) {
            this.content = a, this.url = l;
          }
        };
        e.ParseSourceFile = D;
        var s = class {
          constructor(a, l) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = a, this.end = l, this.details = h;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = s, e.EMPTY_PARSE_LOCATION = new n(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new s(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var i;
        (function(a) {
          a[a.WARNING = 0] = "WARNING", a[a.ERROR = 1] = "ERROR";
        })(i = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var f = class {
          constructor(a, l) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.ERROR;
            this.span = a, this.msg = l, this.level = h;
          }
          contextualMessage() {
            let a = this.span.start.getContext(100, 3);
            return a ? `${this.msg} ("${a.before}[${i[this.level]} ->]${a.after}")` : this.msg;
          }
          toString() {
            let a = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${a}`;
          }
        };
        e.ParseError = f;
        function c(a, l) {
          let h = u.identifierModuleUrl(l), C = h != null ? `in ${a} ${u.identifierName(l)} in ${h}` : `in ${a} ${u.identifierName(l)}`, d = new D("", C);
          return new s(new n(d, -1, -1, -1), new n(d, -1, -1, -1));
        }
        e.typeSourceSpan = c;
        function F(a, l, h) {
          let C = `in ${a} ${l} in ${h}`, d = new D("", C);
          return new s(new n(d, -1, -1, -1), new n(d, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = F;
      } }), ol = I({ "src/utils/front-matter/parse.js"(e, r) {
        q();
        var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function n(D) {
          let s = D.match(u);
          if (!s)
            return { content: D };
          let { startDelimiter: i, language: f, value: c = "", endDelimiter: F } = s.groups, a = f.trim() || "yaml";
          if (i === "+++" && (a = "toml"), a !== "yaml" && i !== F)
            return { content: D };
          let [l] = s;
          return { frontMatter: { type: "front-matter", lang: a, value: c, startDelimiter: i, endDelimiter: F, raw: l.replace(/\n$/, "") }, content: l.replace(/[^\n]/g, " ") + D.slice(l.length) };
        }
        r.exports = n;
      } }), Cs = I({ "src/utils/get-last.js"(e, r) {
        q();
        var u = (n) => n[n.length - 1];
        r.exports = u;
      } }), Dl = I({ "src/common/parser-create-error.js"(e, r) {
        q();
        function u(n, D) {
          let s = new SyntaxError(n + " (" + D.start.line + ":" + D.start.column + ")");
          return s.loc = D, s;
        }
        r.exports = u;
      } }), ms = {};
      ps(ms, { default: () => ll });
      function ll(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var cl = Ee({ "node_modules/escape-string-regexp/index.js"() {
        q();
      } }), gs = I({ "node_modules/semver/internal/debug.js"(e, r) {
        q();
        var u = typeof Te == "object" && Te.env && Te.env.NODE_DEBUG && /\bsemver\b/i.test(Te.env.NODE_DEBUG) ? function() {
          for (var n = arguments.length, D = new Array(n), s = 0; s < n; s++)
            D[s] = arguments[s];
          return console.error("SEMVER", ...D);
        } : () => {
        };
        r.exports = u;
      } }), Fs = I({ "node_modules/semver/internal/constants.js"(e, r) {
        q();
        var u = "2.0.0", n = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, s = 16;
        r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: n, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: s };
      } }), hl = I({ "node_modules/semver/internal/re.js"(e, r) {
        q();
        var { MAX_SAFE_COMPONENT_LENGTH: u } = Fs(), n = gs();
        e = r.exports = {};
        var D = e.re = [], s = e.src = [], i = e.t = {}, f = 0, c = (F, a, l) => {
          let h = f++;
          n(F, h, a), i[F] = h, s[h] = a, D[h] = new RegExp(a, l ? "g" : void 0);
        };
        c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", `(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${s[i.NUMERICIDENTIFIER]}|${s[i.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${s[i.NUMERICIDENTIFIERLOOSE]}|${s[i.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${s[i.PRERELEASEIDENTIFIER]}(?:\\.${s[i.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${s[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[i.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${s[i.BUILDIDENTIFIER]}(?:\\.${s[i.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${s[i.MAINVERSION]}${s[i.PRERELEASE]}?${s[i.BUILD]}?`), c("FULL", `^${s[i.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${s[i.MAINVERSIONLOOSE]}${s[i.PRERELEASELOOSE]}?${s[i.BUILD]}?`), c("LOOSE", `^${s[i.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${s[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c("XRANGEIDENTIFIER", `${s[i.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:${s[i.PRERELEASE]})?${s[i.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:${s[i.PRERELEASELOOSE]})?${s[i.BUILD]}?)?)?`), c("XRANGE", `^${s[i.GTLT]}\\s*${s[i.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${s[i.GTLT]}\\s*${s[i.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`), c("COERCERTL", s[i.COERCE], true), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${s[i.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", c("TILDE", `^${s[i.LONETILDE]}${s[i.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${s[i.LONETILDE]}${s[i.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${s[i.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", c("CARET", `^${s[i.LONECARET]}${s[i.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${s[i.LONECARET]}${s[i.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${s[i.GTLT]}\\s*(${s[i.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]}|${s[i.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${s[i.XRANGEPLAIN]})\\s+-\\s+(${s[i.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${s[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[i.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), pl = I({ "node_modules/semver/internal/parse-options.js"(e, r) {
        q();
        var u = ["includePrerelease", "loose", "rtl"], n = (D) => D ? typeof D != "object" ? { loose: true } : u.filter((s) => D[s]).reduce((s, i) => (s[i] = true, s), {}) : {};
        r.exports = n;
      } }), fl = I({ "node_modules/semver/internal/identifiers.js"(e, r) {
        q();
        var u = /^[0-9]+$/, n = (s, i) => {
          let f = u.test(s), c = u.test(i);
          return f && c && (s = +s, i = +i), s === i ? 0 : f && !c ? -1 : c && !f ? 1 : s < i ? -1 : 1;
        }, D = (s, i) => n(i, s);
        r.exports = { compareIdentifiers: n, rcompareIdentifiers: D };
      } }), dl = I({ "node_modules/semver/classes/semver.js"(e, r) {
        q();
        var u = gs(), { MAX_LENGTH: n, MAX_SAFE_INTEGER: D } = Fs(), { re: s, t: i } = hl(), f = pl(), { compareIdentifiers: c } = fl(), F = class {
          constructor(a, l) {
            if (l = f(l), a instanceof F) {
              if (a.loose === !!l.loose && a.includePrerelease === !!l.includePrerelease)
                return a;
              a = a.version;
            } else if (typeof a != "string")
              throw new TypeError(`Invalid Version: ${a}`);
            if (a.length > n)
              throw new TypeError(`version is longer than ${n} characters`);
            u("SemVer", a, l), this.options = l, this.loose = !!l.loose, this.includePrerelease = !!l.includePrerelease;
            let h = a.trim().match(l.loose ? s[i.LOOSE] : s[i.FULL]);
            if (!h)
              throw new TypeError(`Invalid Version: ${a}`);
            if (this.raw = a, this.major = +h[1], this.minor = +h[2], this.patch = +h[3], this.major > D || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > D || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > D || this.patch < 0)
              throw new TypeError("Invalid patch version");
            h[4] ? this.prerelease = h[4].split(".").map((C) => {
              if (/^[0-9]+$/.test(C)) {
                let d = +C;
                if (d >= 0 && d < D)
                  return d;
              }
              return C;
            }) : this.prerelease = [], this.build = h[5] ? h[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(a) {
            if (u("SemVer.compare", this.version, this.options, a), !(a instanceof F)) {
              if (typeof a == "string" && a === this.version)
                return 0;
              a = new F(a, this.options);
            }
            return a.version === this.version ? 0 : this.compareMain(a) || this.comparePre(a);
          }
          compareMain(a) {
            return a instanceof F || (a = new F(a, this.options)), c(this.major, a.major) || c(this.minor, a.minor) || c(this.patch, a.patch);
          }
          comparePre(a) {
            if (a instanceof F || (a = new F(a, this.options)), this.prerelease.length && !a.prerelease.length)
              return -1;
            if (!this.prerelease.length && a.prerelease.length)
              return 1;
            if (!this.prerelease.length && !a.prerelease.length)
              return 0;
            let l = 0;
            do {
              let h = this.prerelease[l], C = a.prerelease[l];
              if (u("prerelease compare", l, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return c(h, C);
            } while (++l);
          }
          compareBuild(a) {
            a instanceof F || (a = new F(a, this.options));
            let l = 0;
            do {
              let h = this.build[l], C = a.build[l];
              if (u("prerelease compare", l, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return c(h, C);
            } while (++l);
          }
          inc(a, l) {
            switch (a) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", l);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", l);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", l), this.inc("pre", l);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", l), this.inc("pre", l);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let h = this.prerelease.length;
                  for (; --h >= 0; )
                    typeof this.prerelease[h] == "number" && (this.prerelease[h]++, h = -2);
                  h === -1 && this.prerelease.push(0);
                }
                l && (c(this.prerelease[0], l) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [l, 0]) : this.prerelease = [l, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${a}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = F;
      } }), Hr = I({ "node_modules/semver/functions/compare.js"(e, r) {
        q();
        var u = dl(), n = (D, s, i) => new u(D, i).compare(new u(s, i));
        r.exports = n;
      } }), El = I({ "node_modules/semver/functions/lt.js"(e, r) {
        q();
        var u = Hr(), n = (D, s, i) => u(D, s, i) < 0;
        r.exports = n;
      } }), Cl = I({ "node_modules/semver/functions/gte.js"(e, r) {
        q();
        var u = Hr(), n = (D, s, i) => u(D, s, i) >= 0;
        r.exports = n;
      } }), ml = I({ "src/utils/arrayify.js"(e, r) {
        q(), r.exports = (u, n) => Object.entries(u).map((D) => {
          let [s, i] = D;
          return Object.assign({ [n]: s }, i);
        });
      } }), gl = I({ "package.json"(e, r) {
        r.exports = { version: "2.8.2" };
      } }), Fl = I({ "node_modules/outdent/lib/index.js"(e, r) {
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function u() {
          for (var g = [], N = 0; N < arguments.length; N++)
            g[N] = arguments[N];
        }
        function n() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
        }
        function D() {
          return { add: u, delete: u, get: u, set: u, has: function(g) {
            return false;
          } };
        }
        var s = Object.prototype.hasOwnProperty, i = function(g, N) {
          return s.call(g, N);
        };
        function f(g, N) {
          for (var R in N)
            i(N, R) && (g[R] = N[R]);
          return g;
        }
        var c = /^[ \t]*(?:\r\n|\r|\n)/, F = /(?:\r\n|\r|\n)[ \t]*$/, a = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, h = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function C(g, N, R) {
          var j = 0, _ = g[0].match(l);
          _ && (j = _[1].length);
          var O = "(\\r\\n|\\r|\\n).{0," + j + "}", x = new RegExp(O, "g");
          N && (g = g.slice(1));
          var k = R.newline, $ = R.trimLeadingNewline, t = R.trimTrailingNewline, o = typeof k == "string", E = g.length, p = g.map(function(A, P) {
            return A = A.replace(x, "$1"), P === 0 && $ && (A = A.replace(c, "")), P === E - 1 && t && (A = A.replace(F, "")), o && (A = A.replace(/\r\n|\n|\r/g, function(M) {
              return k;
            })), A;
          });
          return p;
        }
        function d(g, N) {
          for (var R = "", j = 0, _ = g.length; j < _; j++)
            R += g[j], j < _ - 1 && (R += N[j]);
          return R;
        }
        function m(g) {
          return i(g, "raw") && i(g, "length");
        }
        function T(g) {
          var N = n(), R = n();
          function j(O) {
            for (var x = [], k = 1; k < arguments.length; k++)
              x[k - 1] = arguments[k];
            if (m(O)) {
              var $ = O, t = (x[0] === j || x[0] === w) && h.test($[0]) && a.test($[1]), o = t ? R : N, E = o.get($);
              if (E || (E = C($, t, g), o.set($, E)), x.length === 0)
                return E[0];
              var p = d(E, t ? x.slice(1) : x);
              return p;
            } else
              return T(f(f({}, g), O || {}));
          }
          var _ = f(j, { string: function(O) {
            return C([O], false, g)[0];
          } });
          return _;
        }
        var w = T({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = w, e.default = w, typeof r < "u")
          try {
            r.exports = w, Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.outdent = w;
          } catch {
          }
      } }), Al = I({ "src/main/core-options.js"(e, r) {
        q();
        var { outdent: u } = Fl(), n = "Config", D = "Editor", s = "Format", i = "Other", f = "Output", c = "Global", F = "Special", a = { cursorOffset: { since: "1.4.0", category: F, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: D }, endOfLine: { since: "1.15.0", category: c, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: F, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: i, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: F, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: i }, parser: { since: "0.0.10", category: c, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (l) => typeof l == "string" || typeof l == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: c, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin", cliCategory: n }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: c, description: u`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin-search-dir", cliCategory: n }, printWidth: { since: "0.0.0", category: c, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: F, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, rangeStart: { since: "1.4.0", category: F, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, requirePragma: { since: "1.7.0", category: F, type: "boolean", default: false, description: u`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: i }, tabWidth: { type: "int", category: c, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: c, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: c, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: n, CATEGORY_EDITOR: D, CATEGORY_FORMAT: s, CATEGORY_OTHER: i, CATEGORY_OUTPUT: f, CATEGORY_GLOBAL: c, CATEGORY_SPECIAL: F, options: a };
      } }), vl = I({ "src/main/support.js"(e, r) {
        q();
        var u = { compare: Hr(), lt: El(), gte: Cl() }, n = ml(), D = gl().version, s = Al().options;
        function i() {
          let { plugins: c = [], showUnreleased: F = false, showDeprecated: a = false, showInternal: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = D.split("-", 1)[0], C = c.flatMap((g) => g.languages || []).filter(m), d = n(Object.assign({}, ...c.map((g) => {
            let { options: N } = g;
            return N;
          }), s), "name").filter((g) => m(g) && T(g)).sort((g, N) => g.name === N.name ? 0 : g.name < N.name ? -1 : 1).map(w).map((g) => {
            g = Object.assign({}, g), Array.isArray(g.default) && (g.default = g.default.length === 1 ? g.default[0].value : g.default.filter(m).sort((R, j) => u.compare(j.since, R.since))[0].value), Array.isArray(g.choices) && (g.choices = g.choices.filter((R) => m(R) && T(R)), g.name === "parser" && f(g, C, c));
            let N = Object.fromEntries(c.filter((R) => R.defaultOptions && R.defaultOptions[g.name] !== void 0).map((R) => [R.name, R.defaultOptions[g.name]]));
            return Object.assign(Object.assign({}, g), {}, { pluginDefaults: N });
          });
          return { languages: C, options: d };
          function m(g) {
            return F || !("since" in g) || g.since && u.gte(h, g.since);
          }
          function T(g) {
            return a || !("deprecated" in g) || g.deprecated && u.lt(h, g.deprecated);
          }
          function w(g) {
            if (l)
              return g;
            return JD(g, KD);
          }
        }
        function f(c, F, a) {
          let l = new Set(c.choices.map((h) => h.value));
          for (let h of F)
            if (h.parsers) {
              for (let C of h.parsers)
                if (!l.has(C)) {
                  l.add(C);
                  let d = a.find((T) => T.parsers && T.parsers[C]), m = h.name;
                  d && d.name && (m += ` (plugin: ${d.name})`), c.choices.push({ value: C, description: m });
                }
            }
        }
        r.exports = { getSupportInfo: i };
      } }), _l = I({ "src/utils/is-non-empty-array.js"(e, r) {
        q();
        function u(n) {
          return Array.isArray(n) && n.length > 0;
        }
        r.exports = u;
      } });
      function Sl() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      }
      var yl = Ee({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        q();
      } });
      function Tl(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(Sl(), "");
      }
      var Bl = Ee({ "node_modules/strip-ansi/index.js"() {
        q(), yl();
      } });
      function bl(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var wl = Ee({ "node_modules/is-fullwidth-code-point/index.js"() {
        q();
      } }), Nl = I({ "node_modules/emoji-regex/index.js"(e, r) {
        q(), r.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), As = {};
      ps(As, { default: () => Ol });
      function Ol(e) {
        if (typeof e != "string" || e.length === 0 || (e = Tl(e), e.length === 0))
          return 0;
        e = e.replace((0, vs.default)(), "  ");
        let r = 0;
        for (let u = 0; u < e.length; u++) {
          let n = e.codePointAt(u);
          n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (n > 65535 && u++, r += bl(n) ? 2 : 1);
        }
        return r;
      }
      var vs, ql = Ee({ "node_modules/string-width/index.js"() {
        q(), Bl(), wl(), vs = nl(Nl());
      } }), Il = I({ "src/utils/get-string-width.js"(e, r) {
        q();
        var u = (ql(), ds(As)).default, n = /[^\x20-\x7F]/;
        function D(s) {
          return s ? n.test(s) ? u(s) : s.length : 0;
        }
        r.exports = D;
      } }), zr = I({ "src/utils/text/skip.js"(e, r) {
        q();
        function u(f) {
          return (c, F, a) => {
            let l = a && a.backwards;
            if (F === false)
              return false;
            let { length: h } = c, C = F;
            for (; C >= 0 && C < h; ) {
              let d = c.charAt(C);
              if (f instanceof RegExp) {
                if (!f.test(d))
                  return C;
              } else if (!f.includes(d))
                return C;
              l ? C-- : C++;
            }
            return C === -1 || C === h ? C : false;
          };
        }
        var n = u(/\s/), D = u(" 	"), s = u(",; 	"), i = u(/[^\n\r]/);
        r.exports = { skipWhitespace: n, skipSpaces: D, skipToLineEnd: s, skipEverythingButNewLine: i };
      } }), _s = I({ "src/utils/text/skip-inline-comment.js"(e, r) {
        q();
        function u(n, D) {
          if (D === false)
            return false;
          if (n.charAt(D) === "/" && n.charAt(D + 1) === "*") {
            for (let s = D + 2; s < n.length; ++s)
              if (n.charAt(s) === "*" && n.charAt(s + 1) === "/")
                return s + 2;
          }
          return D;
        }
        r.exports = u;
      } }), Ss = I({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        q();
        var { skipEverythingButNewLine: u } = zr();
        function n(D, s) {
          return s === false ? false : D.charAt(s) === "/" && D.charAt(s + 1) === "/" ? u(D, s) : s;
        }
        r.exports = n;
      } }), ys = I({ "src/utils/text/skip-newline.js"(e, r) {
        q();
        function u(n, D, s) {
          let i = s && s.backwards;
          if (D === false)
            return false;
          let f = n.charAt(D);
          if (i) {
            if (n.charAt(D - 1) === "\r" && f === `
`)
              return D - 2;
            if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
              return D - 1;
          } else {
            if (f === "\r" && n.charAt(D + 1) === `
`)
              return D + 2;
            if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
              return D + 1;
          }
          return D;
        }
        r.exports = u;
      } }), Rl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        q();
        var u = _s(), n = ys(), D = Ss(), { skipSpaces: s } = zr();
        function i(f, c) {
          let F = null, a = c;
          for (; a !== F; )
            F = a, a = s(f, a), a = u(f, a), a = D(f, a), a = n(f, a);
          return a;
        }
        r.exports = i;
      } }), xl = I({ "src/common/util.js"(e, r) {
        q();
        var { default: u } = (cl(), ds(ms)), n = Cs(), { getSupportInfo: D } = vl(), s = _l(), i = Il(), { skipWhitespace: f, skipSpaces: c, skipToLineEnd: F, skipEverythingButNewLine: a } = zr(), l = _s(), h = Ss(), C = ys(), d = Rl(), m = (v) => v[v.length - 2];
        function T(v) {
          return (y, B, b) => {
            let L = b && b.backwards;
            if (B === false)
              return false;
            let { length: U } = y, G = B;
            for (; G >= 0 && G < U; ) {
              let W = y.charAt(G);
              if (v instanceof RegExp) {
                if (!v.test(W))
                  return G;
              } else if (!v.includes(W))
                return G;
              L ? G-- : G++;
            }
            return G === -1 || G === U ? G : false;
          };
        }
        function w(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = c(v, B.backwards ? y - 1 : y, B), L = C(v, b, B);
          return b !== L;
        }
        function g(v, y, B) {
          for (let b = y; b < B; ++b)
            if (v.charAt(b) === `
`)
              return true;
          return false;
        }
        function N(v, y, B) {
          let b = B(y) - 1;
          b = c(v, b, { backwards: true }), b = C(v, b, { backwards: true }), b = c(v, b, { backwards: true });
          let L = C(v, b, { backwards: true });
          return b !== L;
        }
        function R(v, y) {
          let B = null, b = y;
          for (; b !== B; )
            B = b, b = F(v, b), b = l(v, b), b = c(v, b);
          return b = h(v, b), b = C(v, b), b !== false && w(v, b);
        }
        function j(v, y, B) {
          return R(v, B(y));
        }
        function _(v, y, B) {
          return d(v, B(y));
        }
        function O(v, y, B) {
          return v.charAt(_(v, y, B));
        }
        function x(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return c(v, B.backwards ? y - 1 : y, B) !== y;
        }
        function k(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, b = 0;
          for (let L = B; L < v.length; ++L)
            v[L] === "	" ? b = b + y - b % y : b++;
          return b;
        }
        function $(v, y) {
          let B = v.lastIndexOf(`
`);
          return B === -1 ? 0 : k(v.slice(B + 1).match(/^[\t ]*/)[0], y);
        }
        function t(v, y) {
          let B = { quote: '"', regex: /"/g, escaped: "&quot;" }, b = { quote: "'", regex: /'/g, escaped: "&apos;" }, L = y === "'" ? b : B, U = L === b ? B : b, G = L;
          if (v.includes(L.quote) || v.includes(U.quote)) {
            let W = (v.match(L.regex) || []).length, ne = (v.match(U.regex) || []).length;
            G = W > ne ? U : L;
          }
          return G;
        }
        function o(v, y) {
          let B = v.slice(1, -1), b = y.parser === "json" || y.parser === "json5" && y.quoteProps === "preserve" && !y.singleQuote ? '"' : y.__isInHtmlAttribute ? "'" : t(B, y.singleQuote ? "'" : '"').quote;
          return E(B, b, !(y.parser === "css" || y.parser === "less" || y.parser === "scss" || y.__embeddedInHtml));
        }
        function E(v, y, B) {
          let b = y === '"' ? "'" : '"', L = /\\(.)|(["'])/gs, U = v.replace(L, (G, W, ne) => W === b ? W : ne === y ? "\\" + ne : ne || (B && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(W) ? W : "\\" + W));
          return y + U + y;
        }
        function p(v) {
          return v.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function A(v, y) {
          let B = v.match(new RegExp(`(${u(y)})+`, "g"));
          return B === null ? 0 : B.reduce((b, L) => Math.max(b, L.length / y.length), 0);
        }
        function P(v, y) {
          let B = v.match(new RegExp(`(${u(y)})+`, "g"));
          if (B === null)
            return 0;
          let b = /* @__PURE__ */ new Map(), L = 0;
          for (let U of B) {
            let G = U.length / y.length;
            b.set(G, true), G > L && (L = G);
          }
          for (let U = 1; U < L; U++)
            if (!b.get(U))
              return U;
          return L + 1;
        }
        function M(v, y) {
          (v.comments || (v.comments = [])).push(y), y.printed = false, y.nodeDescription = J(v);
        }
        function z(v, y) {
          y.leading = true, y.trailing = false, M(v, y);
        }
        function V(v, y, B) {
          y.leading = false, y.trailing = false, B && (y.marker = B), M(v, y);
        }
        function X(v, y) {
          y.leading = false, y.trailing = true, M(v, y);
        }
        function H(v, y) {
          let { languages: B } = D({ plugins: y.plugins }), b = B.find((L) => {
            let { name: U } = L;
            return U.toLowerCase() === v;
          }) || B.find((L) => {
            let { aliases: U } = L;
            return Array.isArray(U) && U.includes(v);
          }) || B.find((L) => {
            let { extensions: U } = L;
            return Array.isArray(U) && U.includes(`.${v}`);
          });
          return b && b.parsers[0];
        }
        function Q(v) {
          return v && v.type === "front-matter";
        }
        function K(v) {
          let y = /* @__PURE__ */ new WeakMap();
          return function(B) {
            return y.has(B) || y.set(B, Symbol(v)), y.get(B);
          };
        }
        function J(v) {
          let y = v.type || v.kind || "(unknown type)", B = String(v.name || v.id && (typeof v.id == "object" ? v.id.name : v.id) || v.key && (typeof v.key == "object" ? v.key.name : v.key) || v.value && (typeof v.value == "object" ? "" : String(v.value)) || v.operator || "");
          return B.length > 20 && (B = B.slice(0, 19) + "\u2026"), y + (B ? " " + B : "");
        }
        r.exports = { inferParserByLanguage: H, getStringWidth: i, getMaxContinuousCount: A, getMinNotPresentContinuousCount: P, getPenultimate: m, getLast: n, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: d, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: O, skip: T, skipWhitespace: f, skipSpaces: c, skipToLineEnd: F, skipEverythingButNewLine: a, skipInlineComment: l, skipTrailingComment: h, skipNewline: C, isNextLineEmptyAfterIndex: R, isNextLineEmpty: j, isPreviousLineEmpty: N, hasNewline: w, hasNewlineInRange: g, hasSpaces: x, getAlignmentSize: k, getIndentSize: $, getPreferredQuote: t, printString: o, printNumber: p, makeString: E, addLeadingComment: z, addDanglingComment: V, addTrailingComment: X, isFrontMatterNode: Q, isNonEmptyArray: s, createGroupIdMapper: K };
      } }), Pl = I({ "vendors/html-tag-names.json"(e, r) {
        r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), Ts = I({ "src/language-html/utils/array-to-map.js"(e, r) {
        q();
        function u(n) {
          let D = /* @__PURE__ */ Object.create(null);
          for (let s of n)
            D[s] = true;
          return D;
        }
        r.exports = u;
      } }), kl = I({ "src/language-html/utils/html-tag-names.js"(e, r) {
        q();
        var { htmlTagNames: u } = Pl(), n = Ts(), D = n(u);
        r.exports = D;
      } }), Ll = I({ "vendors/html-element-attributes.json"(e, r) {
        r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), $l = I({ "src/language-html/utils/map-object.js"(e, r) {
        q();
        function u(n, D) {
          let s = /* @__PURE__ */ Object.create(null);
          for (let [i, f] of Object.entries(n))
            s[i] = D(f, i);
          return s;
        }
        r.exports = u;
      } }), Ml = I({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
        q();
        var { htmlElementAttributes: u } = Ll(), n = $l(), D = Ts(), s = n(u, D);
        r.exports = s;
      } }), jl = I({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        q();
        function u(n) {
          return n.type === "element" && !n.hasExplicitNamespace && !["html", "svg"].includes(n.namespace);
        }
        r.exports = u;
      } }), Ul = I({ "src/language-html/pragma.js"(e, r) {
        q();
        function u(D) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
        }
        function n(D) {
          return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: u, insertPragma: n };
      } }), Gl = I({ "src/language-html/ast.js"(e, r) {
        q();
        var u = { attrs: true, children: true }, n = /* @__PURE__ */ new Set(["parent"]), D = class {
          constructor() {
            let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let f of /* @__PURE__ */ new Set([...n, ...Object.keys(i)]))
              this.setProperty(f, i[f]);
          }
          setProperty(i, f) {
            if (this[i] !== f) {
              if (i in u && (f = f.map((c) => this.createChild(c))), !n.has(i)) {
                this[i] = f;
                return;
              }
              Object.defineProperty(this, i, { value: f, enumerable: false, configurable: true });
            }
          }
          map(i) {
            let f;
            for (let c in u) {
              let F = this[c];
              if (F) {
                let a = s(F, (l) => l.map(i));
                f !== F && (f || (f = new D({ parent: this.parent })), f.setProperty(c, a));
              }
            }
            if (f)
              for (let c in this)
                c in u || (f[c] = this[c]);
            return i(f || this);
          }
          walk(i) {
            for (let f in u) {
              let c = this[f];
              if (c)
                for (let F = 0; F < c.length; F++)
                  c[F].walk(i);
            }
            i(this);
          }
          createChild(i) {
            let f = i instanceof D ? i.clone() : new D(i);
            return f.setProperty("parent", this), f;
          }
          insertChildBefore(i, f) {
            this.children.splice(this.children.indexOf(i), 0, this.createChild(f));
          }
          removeChild(i) {
            this.children.splice(this.children.indexOf(i), 1);
          }
          replaceChild(i, f) {
            this.children[this.children.indexOf(i)] = this.createChild(f);
          }
          clone() {
            return new D(this);
          }
          get firstChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[0];
          }
          get lastChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[this.children.length - 1];
          }
          get prev() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) + 1];
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
          get attrMap() {
            return Object.fromEntries(this.attrs.map((i) => [i.fullName, i.value]));
          }
        };
        function s(i, f) {
          let c = i.map(f);
          return c.some((F, a) => F !== i[a]) ? c : i;
        }
        r.exports = { Node: D };
      } }), Vl = I({ "src/language-html/conditional-comment.js"(e, r) {
        q();
        var { ParseSourceSpan: u } = Be(), n = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: s }, { regex: /^\[if([^\]]*)]><!$/, parse: i }, { regex: /^<!\s*\[endif]$/, parse: f }];
        function D(c, F) {
          if (c.value)
            for (let { regex: a, parse: l } of n) {
              let h = c.value.match(a);
              if (h)
                return l(c, F, h);
            }
          return null;
        }
        function s(c, F, a) {
          let [, l, h, C] = a, d = 4 + l.length, m = c.sourceSpan.start.moveBy(d), T = m.moveBy(C.length), [w, g] = (() => {
            try {
              return [true, F(C, m).children];
            } catch {
              return [false, [{ type: "text", value: C, sourceSpan: new u(m, T) }]];
            }
          })();
          return { type: "ieConditionalComment", complete: w, children: g, condition: h.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan, startSourceSpan: new u(c.sourceSpan.start, m), endSourceSpan: new u(T, c.sourceSpan.end) };
        }
        function i(c, F, a) {
          let [, l] = a;
          return { type: "ieConditionalStartComment", condition: l.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan };
        }
        function f(c) {
          return { type: "ieConditionalEndComment", sourceSpan: c.sourceSpan };
        }
        r.exports = { parseIeConditionalComment: D };
      } }), Xl = I({ "src/language-html/loc.js"(e, r) {
        q();
        function u(D) {
          return D.sourceSpan.start.offset;
        }
        function n(D) {
          return D.sourceSpan.end.offset;
        }
        r.exports = { locStart: u, locEnd: n };
      } }), Ze = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        (function(c) {
          c[c.RAW_TEXT = 0] = "RAW_TEXT", c[c.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", c[c.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        })(e.TagContentType || (e.TagContentType = {}));
        function u(c) {
          if (c[0] != ":")
            return [null, c];
          let F = c.indexOf(":", 1);
          if (F == -1)
            throw new Error(`Unsupported format "${c}" expecting ":namespace:name"`);
          return [c.slice(1, F), c.slice(F + 1)];
        }
        e.splitNsName = u;
        function n(c) {
          return u(c)[1] === "ng-container";
        }
        e.isNgContainer = n;
        function D(c) {
          return u(c)[1] === "ng-content";
        }
        e.isNgContent = D;
        function s(c) {
          return u(c)[1] === "ng-template";
        }
        e.isNgTemplate = s;
        function i(c) {
          return c === null ? null : u(c)[0];
        }
        e.getNsPrefix = i;
        function f(c, F) {
          return c ? `:${c}:${F}` : F;
        }
        e.mergeNsAndName = f, e.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, e.NGSP_UNICODE = "\uE500", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
      } }), Bs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ze(), u = class {
          constructor() {
            let { closedByChildren: i, implicitNamespacePrefix: f, contentType: c = r.TagContentType.PARSABLE_DATA, closedByParent: F = false, isVoid: a = false, ignoreFirstLf: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, i && i.length > 0 && i.forEach((h) => this.closedByChildren[h] = true), this.isVoid = a, this.closedByParent = F || a, this.implicitNamespacePrefix = f || null, this.contentType = c, this.ignoreFirstLf = l;
          }
          isClosedByChild(i) {
            return this.isVoid || i.toLowerCase() in this.closedByChildren;
          }
        };
        e.HtmlTagDefinition = u;
        var n, D;
        function s(i) {
          return D || (n = new u(), D = { base: new u({ isVoid: true }), meta: new u({ isVoid: true }), area: new u({ isVoid: true }), embed: new u({ isVoid: true }), link: new u({ isVoid: true }), img: new u({ isVoid: true }), input: new u({ isVoid: true }), param: new u({ isVoid: true }), hr: new u({ isVoid: true }), br: new u({ isVoid: true }), source: new u({ isVoid: true }), track: new u({ isVoid: true }), wbr: new u({ isVoid: true }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: true }), tr: new u({ closedByChildren: ["tr"], closedByParent: true }), td: new u({ closedByChildren: ["td", "th"], closedByParent: true }), th: new u({ closedByChildren: ["td", "th"], closedByParent: true }), col: new u({ isVoid: true }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: true }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: true }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new u({ ignoreFirstLf: true }), listing: new u({ ignoreFirstLf: true }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[i] || n;
        }
        e.getHtmlTagDefinition = s;
      } }), Hl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(u) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = u, this.position = n;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(u) {
            return u && this.path[this.path.indexOf(u) - 1];
          }
          childOf(u) {
            return this.path[this.path.indexOf(u) + 1];
          }
          first(u) {
            for (let n = this.path.length - 1; n >= 0; n--) {
              let D = this.path[n];
              if (D instanceof u)
                return D;
            }
          }
          push(u) {
            this.path.push(u);
          }
          pop() {
            return this.path.pop();
          }
        };
        e.AstPath = r;
      } }), bs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Hl(), u = class {
          constructor(d, m, T) {
            this.value = d, this.sourceSpan = m, this.i18n = T, this.type = "text";
          }
          visit(d, m) {
            return d.visitText(this, m);
          }
        };
        e.Text = u;
        var n = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "cdata";
          }
          visit(d, m) {
            return d.visitCdata(this, m);
          }
        };
        e.CDATA = n;
        var D = class {
          constructor(d, m, T, w, g, N) {
            this.switchValue = d, this.type = m, this.cases = T, this.sourceSpan = w, this.switchValueSourceSpan = g, this.i18n = N;
          }
          visit(d, m) {
            return d.visitExpansion(this, m);
          }
        };
        e.Expansion = D;
        var s = class {
          constructor(d, m, T, w, g) {
            this.value = d, this.expression = m, this.sourceSpan = T, this.valueSourceSpan = w, this.expSourceSpan = g;
          }
          visit(d, m) {
            return d.visitExpansionCase(this, m);
          }
        };
        e.ExpansionCase = s;
        var i = class {
          constructor(d, m, T) {
            let w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = d, this.value = m, this.sourceSpan = T, this.valueSpan = w, this.nameSpan = g, this.i18n = N, this.type = "attribute";
          }
          visit(d, m) {
            return d.visitAttribute(this, m);
          }
        };
        e.Attribute = i;
        var f = class {
          constructor(d, m, T, w) {
            let g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, R = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, j = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = d, this.attrs = m, this.children = T, this.sourceSpan = w, this.startSourceSpan = g, this.endSourceSpan = N, this.nameSpan = R, this.i18n = j, this.type = "element";
          }
          visit(d, m) {
            return d.visitElement(this, m);
          }
        };
        e.Element = f;
        var c = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "comment";
          }
          visit(d, m) {
            return d.visitComment(this, m);
          }
        };
        e.Comment = c;
        var F = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "docType";
          }
          visit(d, m) {
            return d.visitDocType(this, m);
          }
        };
        e.DocType = F;
        function a(d, m) {
          let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, w = [], g = d.visit ? (N) => d.visit(N, T) || N.visit(d, T) : (N) => N.visit(d, T);
          return m.forEach((N) => {
            let R = g(N);
            R && w.push(R);
          }), w;
        }
        e.visitAll = a;
        var l = class {
          constructor() {
          }
          visitElement(d, m) {
            this.visitChildren(m, (T) => {
              T(d.attrs), T(d.children);
            });
          }
          visitAttribute(d, m) {
          }
          visitText(d, m) {
          }
          visitCdata(d, m) {
          }
          visitComment(d, m) {
          }
          visitDocType(d, m) {
          }
          visitExpansion(d, m) {
            return this.visitChildren(m, (T) => {
              T(d.cases);
            });
          }
          visitExpansionCase(d, m) {
          }
          visitChildren(d, m) {
            let T = [], w = this;
            function g(N) {
              N && T.push(a(w, N, d));
            }
            return m(g), Array.prototype.concat.apply([], T);
          }
        };
        e.RecursiveVisitor = l;
        function h(d) {
          let m = d.sourceSpan.start.offset, T = d.sourceSpan.end.offset;
          return d instanceof f && (d.endSourceSpan ? T = d.endSourceSpan.end.offset : d.children && d.children.length && (T = h(d.children[d.children.length - 1]).end)), { start: m, end: T };
        }
        function C(d, m) {
          let T = [], w = new class extends l {
            visit(g, N) {
              let R = h(g);
              if (R.start <= m && m < R.end)
                T.push(g);
              else
                return true;
            }
          }();
          return a(w, d), new r.AstPath(T, m);
        }
        e.findNode = C;
      } }), zl = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        function r(D, s) {
          if (s != null) {
            if (!Array.isArray(s))
              throw new Error(`Expected '${D}' to be an array of strings.`);
            for (let i = 0; i < s.length; i += 1)
              if (typeof s[i] != "string")
                throw new Error(`Expected '${D}' to be an array of strings.`);
          }
        }
        e.assertArrayOfStrings = r;
        var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function n(D, s) {
          if (s != null && !(Array.isArray(s) && s.length == 2))
            throw new Error(`Expected '${D}' to be an array, [start, end].`);
          if (s != null) {
            let i = s[0], f = s[1];
            u.forEach((c) => {
              if (c.test(i) || c.test(f))
                throw new Error(`['${i}', '${f}'] contains unusable interpolation symbol.`);
            });
          }
        }
        e.assertInterpolationSymbols = n;
      } }), Wl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = zl(), u = class {
          constructor(n, D) {
            this.start = n, this.end = D;
          }
          static fromArray(n) {
            return n ? (r.assertInterpolationSymbols("interpolation", n), new u(n[0], n[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
      } }), Yl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Es(), u = Be(), n = Wl(), D = Ze(), s;
        (function(t) {
          t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF";
        })(s = e.TokenType || (e.TokenType = {}));
        var i = class {
          constructor(t, o, E) {
            this.type = t, this.parts = o, this.sourceSpan = E;
          }
        };
        e.Token = i;
        var f = class extends u.ParseError {
          constructor(t, o, E) {
            super(E, t), this.tokenType = o;
          }
        };
        e.TokenError = f;
        var c = class {
          constructor(t, o) {
            this.tokens = t, this.errors = o;
          }
        };
        e.TokenizeResult = c;
        function F(t, o, E) {
          let p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new d(new u.ParseSourceFile(t, o), E, p).tokenize();
        }
        e.tokenize = F;
        var a = /\r\n?/g;
        function l(t) {
          return `Unexpected character "${t === r.$EOF ? "EOF" : String.fromCharCode(t)}"`;
        }
        function h(t) {
          return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        var C = class {
          constructor(t) {
            this.error = t;
          }
        }, d = class {
          constructor(t, o, E) {
            this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = E.tokenizeExpansionForms || false, this._interpolationConfig = E.interpolationConfig || n.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = E.leadingTriviaChars && E.leadingTriviaChars.map((A) => A.codePointAt(0) || 0), this._canSelfClose = E.canSelfClose || false, this._allowHtmComponentClosingTags = E.allowHtmComponentClosingTags || false;
            let p = E.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = E.escapedString ? new k(t, p) : new x(t, p);
            try {
              this._cursor.init();
            } catch (A) {
              this.handleError(A);
            }
          }
          _processCarriageReturns(t) {
            return t.replace(a, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== r.$EOF; ) {
              let t = this._cursor.clone();
              try {
                if (this._attemptCharCode(r.$LT))
                  if (this._attemptCharCode(r.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
                  else if (this._attemptCharCode(r.$SLASH))
                    this._consumeTagClose(t);
                  else {
                    let o = this._cursor.clone();
                    this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (o) {
                this.handleError(o);
              }
            }
            return this._beginToken(s.EOF), this._endToken([]), new c(O(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), true;
            if (R(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), true;
            if (this._cursor.peek() === r.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), true;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), true;
            }
            return false;
          }
          _beginToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = o, this._currentTokenType = t;
          }
          _endToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new f("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o));
            if (this._currentTokenType === null)
              throw new f("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let E = new i(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(E), this._currentTokenStart = null, this._currentTokenType = null, E;
          }
          _createError(t, o) {
            this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let E = new f(t, this._currentTokenType, o);
            return this._currentTokenStart = null, this._currentTokenType = null, new C(E);
          }
          handleError(t) {
            if (t instanceof $ && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof C)
              this.errors.push(t.error);
            else
              throw t;
          }
          _attemptCharCode(t) {
            return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
          }
          _attemptCharCodeCaseInsensitive(t) {
            return j(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
          }
          _requireCharCode(t) {
            let o = this._cursor.clone();
            if (!this._attemptCharCode(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptStr(t) {
            let o = t.length;
            if (this._cursor.charsLeft() < o)
              return false;
            let E = this._cursor.clone();
            for (let p = 0; p < o; p++)
              if (!this._attemptCharCode(t.charCodeAt(p)))
                return this._cursor = E, false;
            return true;
          }
          _attemptStrCaseInsensitive(t) {
            for (let o = 0; o < t.length; o++)
              if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
                return false;
            return true;
          }
          _requireStr(t) {
            let o = this._cursor.clone();
            if (!this._attemptStr(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _requireStrCaseInsensitive(t) {
            let o = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptCharCodeUntilFn(t) {
            for (; !t(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(t, o) {
            let E = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(E) < o)
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(E));
          }
          _attemptUntilChar(t) {
            for (; this._cursor.peek() !== t; )
              this._cursor.advance();
          }
          _readChar(t) {
            if (t && this._cursor.peek() === r.$AMPERSAND)
              return this._decodeEntity();
            {
              let o = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), o;
            }
          }
          _decodeEntity() {
            let t = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
              let o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), E = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(g), this._cursor.peek() != r.$SEMICOLON)
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan());
              let p = this._cursor.getChars(E);
              this._cursor.advance();
              try {
                let A = parseInt(p, o ? 16 : 10);
                return String.fromCharCode(A);
              } catch {
                throw this._createError(h(this._cursor.getChars(t)), this._cursor.getSpan());
              }
            } else {
              let o = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(N), this._cursor.peek() != r.$SEMICOLON)
                return this._cursor = o, "&";
              let E = this._cursor.getChars(o);
              this._cursor.advance();
              let p = D.NAMED_ENTITIES[E];
              if (!p)
                throw this._createError(h(E), this._cursor.getSpan(t));
              return p;
            }
          }
          _consumeRawText(t, o) {
            this._beginToken(t ? s.ESCAPABLE_RAW_TEXT : s.RAW_TEXT);
            let E = [];
            for (; ; ) {
              let p = this._cursor.clone(), A = o();
              if (this._cursor = p, A)
                break;
              E.push(this._readChar(t));
            }
            return this._endToken([this._processCarriageReturns(E.join(""))]);
          }
          _consumeComment(t) {
            this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(s.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(t) {
            this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(t) {
            this._beginToken(s.CDATA_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(s.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(t) {
            this._beginToken(s.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let t = this._cursor.clone(), o = "";
            for (; this._cursor.peek() !== r.$COLON && !w(this._cursor.peek()); )
              this._cursor.advance();
            let E;
            this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), E = this._cursor.clone()) : E = t, this._requireCharCodeUntilFn(T, o === "" ? 0 : 1);
            let p = this._cursor.getChars(E);
            return [o, p];
          }
          _consumeTagOpen(t) {
            let o, E, p, A = this.tokens.length, P = this._cursor.clone(), M = [];
            try {
              if (!r.isAsciiLetter(this._cursor.peek()))
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(t));
              for (p = this._consumeTagOpenStart(t), E = p.parts[0], o = p.parts[1], this._attemptCharCodeUntilFn(m); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
                let [V, X] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$EQ)) {
                  this._attemptCharCodeUntilFn(m);
                  let H = this._consumeAttributeValue();
                  M.push({ prefix: V, name: X, value: H });
                } else
                  M.push({ prefix: V, name: X });
                this._attemptCharCodeUntilFn(m);
              }
              this._consumeTagOpenEnd();
            } catch (V) {
              if (V instanceof C) {
                this._cursor = P, p && (this.tokens.length = A), this._beginToken(s.TEXT, t), this._endToken(["<"]);
                return;
              }
              throw V;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === s.TAG_OPEN_END_VOID)
              return;
            let z = this._getTagContentType(o, E, this._fullNameStack.length > 0, M);
            this._handleFullNameStackForTagOpen(E, o), z === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(E, o, false) : z === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(E, o, true);
          }
          _consumeRawTextWithTagClose(t, o, E) {
            this._consumeRawText(E, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(m), !this._attemptStrCaseInsensitive(t ? `${t}:${o}` : o)) ? false : (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$GT)));
            this._beginToken(s.TAG_CLOSE), this._requireCharCodeUntilFn((A) => A === r.$GT, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
          }
          _consumeTagOpenStart(t) {
            this._beginToken(s.TAG_OPEN_START, t);
            let o = this._consumePrefixAndName();
            return this._endToken(o);
          }
          _consumeAttributeName() {
            let t = this._cursor.peek();
            if (t === r.$SQ || t === r.$DQ)
              throw this._createError(l(t), this._cursor.getSpan());
            this._beginToken(s.ATTR_NAME);
            let o = this._consumePrefixAndName();
            return this._endToken(o), o;
          }
          _consumeAttributeValue() {
            let t;
            if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
              this._beginToken(s.ATTR_QUOTE);
              let o = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(s.ATTR_VALUE);
              let E = [];
              for (; this._cursor.peek() !== o; )
                E.push(this._readChar(true));
              t = this._processCarriageReturns(E.join("")), this._endToken([t]), this._beginToken(s.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
            } else {
              this._beginToken(s.ATTR_VALUE);
              let o = this._cursor.clone();
              this._requireCharCodeUntilFn(T, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
            }
            return t;
          }
          _consumeTagOpenEnd() {
            let t = this._attemptCharCode(r.$SLASH) ? s.TAG_OPEN_END_VOID : s.TAG_OPEN_END;
            this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]);
          }
          _consumeTagClose(t) {
            if (this._beginToken(s.TAG_CLOSE, t), this._attemptCharCodeUntilFn(m), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([]);
            else {
              let [o, E] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([o, E]), this._handleFullNameStackForTagClose(o, E);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(s.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(s.EXPANSION_FORM_START), this._beginToken(s.RAW_TEXT);
            let t = this._readUntil(r.$COMMA);
            this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m), this._beginToken(s.RAW_TEXT);
            let o = this._readUntil(r.$COMMA);
            this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(s.EXPANSION_CASE_VALUE);
            let t = this._readUntil(r.$LBRACE).trim();
            this._endToken([t]), this._attemptCharCodeUntilFn(m), this._beginToken(s.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.push(s.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(s.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(s.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let t = this._cursor.clone();
            this._beginToken(s.TEXT, t);
            let o = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = false) : o.push(this._readChar(true));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(o.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(t) {
            let o = this._cursor.clone();
            return this._attemptUntilChar(t), this._cursor.getChars(o);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== r.$LBRACE)
              return false;
            if (this._interpolationConfig) {
              let t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = t, !o;
            }
            return true;
          }
          _handleFullNameStackForTagOpen(t, o) {
            let E = D.mergeNsAndName(t, o);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === E) && this._fullNameStack.push(E);
          }
          _handleFullNameStackForTagClose(t, o) {
            let E = D.mergeNsAndName(t, o);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === E && this._fullNameStack.pop();
          }
        };
        function m(t) {
          return !r.isWhitespace(t) || t === r.$EOF;
        }
        function T(t) {
          return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ;
        }
        function w(t) {
          return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9);
        }
        function g(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t);
        }
        function N(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t);
        }
        function R(t) {
          return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t);
        }
        function j(t, o) {
          return _(t) == _(o);
        }
        function _(t) {
          return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t;
        }
        function O(t) {
          let o = [], E;
          for (let p = 0; p < t.length; p++) {
            let A = t[p];
            E && E.type == s.TEXT && A.type == s.TEXT ? (E.parts[0] += A.parts[0], E.sourceSpan.end = A.sourceSpan.end) : (E = A, o.push(E));
          }
          return o;
        }
        var x = class {
          constructor(t, o) {
            if (t instanceof x)
              this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
            else {
              if (!o)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
            }
          }
          clone() {
            return new x(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(t) {
            return this.state.offset - t.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(t, o) {
            if (t = t || this, o)
              for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1; )
                t.advance();
            return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(t) {
            return this.input.substring(t.state.offset, this.state.offset);
          }
          charAt(t) {
            return this.input.charCodeAt(t);
          }
          advanceState(t) {
            if (t.offset >= this.end)
              throw this.state = t, new $('Unexpected character "EOF"', this);
            let o = this.charAt(t.offset);
            o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t);
          }
          updatePeek(t) {
            t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset);
          }
        }, k = class extends x {
          constructor(t, o) {
            t instanceof k ? (super(t), this.internalState = Object.assign({}, t.internalState)) : (super(t, o), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new k(this);
          }
          getChars(t) {
            let o = t.clone(), E = "";
            for (; o.internalState.offset < this.internalState.offset; )
              E += String.fromCodePoint(o.peek()), o.advance();
            return E;
          }
          processEscapeSequence() {
            let t = () => this.internalState.peek;
            if (t() === r.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
                this.state.peek = r.$LF;
              else if (t() === r.$r)
                this.state.peek = r.$CR;
              else if (t() === r.$v)
                this.state.peek = r.$VTAB;
              else if (t() === r.$t)
                this.state.peek = r.$TAB;
              else if (t() === r.$b)
                this.state.peek = r.$BSPACE;
              else if (t() === r.$f)
                this.state.peek = r.$FF;
              else if (t() === r.$u)
                if (this.advanceState(this.internalState), t() === r.$LBRACE) {
                  this.advanceState(this.internalState);
                  let o = this.clone(), E = 0;
                  for (; t() !== r.$RBRACE; )
                    this.advanceState(this.internalState), E++;
                  this.state.peek = this.decodeHexDigits(o, E);
                } else {
                  let o = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
                }
              else if (t() === r.$x) {
                this.advanceState(this.internalState);
                let o = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
              } else if (r.isOctalDigit(t())) {
                let o = "", E = 0, p = this.clone();
                for (; r.isOctalDigit(t()) && E < 3; )
                  p = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), E++;
                this.state.peek = parseInt(o, 8), this.internalState = p.internalState;
              } else
                r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(t, o) {
            let E = this.input.substr(t.internalState.offset, o), p = parseInt(E, 16);
            if (isNaN(p))
              throw t.state = t.internalState, new $("Invalid hexadecimal escape sequence", t);
            return p;
          }
        }, $ = class {
          constructor(t, o) {
            this.msg = t, this.cursor = o;
          }
        };
        e.CursorError = $;
      } }), ls = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Be(), u = bs(), n = Yl(), D = Ze(), s = class extends r.ParseError {
          constructor(a, l, h) {
            super(l, h), this.elementName = a;
          }
          static create(a, l, h) {
            return new s(a, l, h);
          }
        };
        e.TreeError = s;
        var i = class {
          constructor(a, l) {
            this.rootNodes = a, this.errors = l;
          }
        };
        e.ParseTreeResult = i;
        var f = class {
          constructor(a) {
            this.getTagDefinition = a;
          }
          parse(a, l, h) {
            let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, d = arguments.length > 4 ? arguments[4] : void 0, m = (x) => function(k) {
              for (var $ = arguments.length, t = new Array($ > 1 ? $ - 1 : 0), o = 1; o < $; o++)
                t[o - 1] = arguments[o];
              return x(k.toLowerCase(), ...t);
            }, T = C ? this.getTagDefinition : m(this.getTagDefinition), w = (x) => T(x).contentType, g = C ? d : m(d), N = d ? (x, k, $, t) => {
              let o = g(x, k, $, t);
              return o !== void 0 ? o : w(x);
            } : w, R = n.tokenize(a, l, N, h), j = h && h.canSelfClose || false, _ = h && h.allowHtmComponentClosingTags || false, O = new c(R.tokens, T, j, _, C).build();
            return new i(O.rootNodes, R.errors.concat(O.errors));
          }
        };
        e.Parser = f;
        var c = class {
          constructor(a, l, h, C, d) {
            this.tokens = a, this.getTagDefinition = l, this.canSelfClose = h, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = d, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== n.TokenType.EOF; )
              this._peek.type === n.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === n.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === n.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === n.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === n.TokenType.TEXT || this._peek.type === n.TokenType.RAW_TEXT || this._peek.type === n.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === n.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === n.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new i(this._rootNodes, this._errors);
          }
          _advance() {
            let a = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], a;
          }
          _advanceIf(a) {
            return this._peek.type === a ? this._advance() : null;
          }
          _consumeCdata(a) {
            let l = this._advance(), h = this._getText(l), C = this._advanceIf(n.TokenType.CDATA_END);
            this._addToParent(new u.CDATA(h, new r.ParseSourceSpan(a.sourceSpan.start, (C || l).sourceSpan.end)));
          }
          _consumeComment(a) {
            let l = this._advanceIf(n.TokenType.RAW_TEXT), h = this._advanceIf(n.TokenType.COMMENT_END), C = l != null ? l.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || l || a).sourceSpan.end);
            this._addToParent(new u.Comment(C, d));
          }
          _consumeDocType(a) {
            let l = this._advanceIf(n.TokenType.RAW_TEXT), h = this._advanceIf(n.TokenType.DOC_TYPE_END), C = l != null ? l.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || l || a).sourceSpan.end);
            this._addToParent(new u.DocType(C, d));
          }
          _consumeExpansion(a) {
            let l = this._advance(), h = this._advance(), C = [];
            for (; this._peek.type === n.TokenType.EXPANSION_CASE_VALUE; ) {
              let m = this._parseExpansionCase();
              if (!m)
                return;
              C.push(m);
            }
            if (this._peek.type !== n.TokenType.EXPANSION_FORM_END) {
              this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let d = new r.ParseSourceSpan(a.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new u.Expansion(l.parts[0], h.parts[0], C, d, l.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let a = this._advance();
            if (this._peek.type !== n.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let l = this._advance(), h = this._collectExpansionExpTokens(l);
            if (!h)
              return null;
            let C = this._advance();
            h.push(new n.Token(n.TokenType.EOF, [], C.sourceSpan));
            let d = new c(h, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (d.errors.length > 0)
              return this._errors = this._errors.concat(d.errors), null;
            let m = new r.ParseSourceSpan(a.sourceSpan.start, C.sourceSpan.end), T = new r.ParseSourceSpan(l.sourceSpan.start, C.sourceSpan.end);
            return new u.ExpansionCase(a.parts[0], d.rootNodes, m, a.sourceSpan, T);
          }
          _collectExpansionExpTokens(a) {
            let l = [], h = [n.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === n.TokenType.EXPANSION_FORM_START || this._peek.type === n.TokenType.EXPANSION_CASE_EXP_START) && h.push(this._peek.type), this._peek.type === n.TokenType.EXPANSION_CASE_EXP_END)
                if (F(h, n.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (h.pop(), h.length == 0)
                    return l;
                } else
                  return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === n.TokenType.EXPANSION_FORM_END)
                if (F(h, n.TokenType.EXPANSION_FORM_START))
                  h.pop();
                else
                  return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === n.TokenType.EOF)
                return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              l.push(this._advance());
            }
          }
          _getText(a) {
            let l = a.parts[0];
            if (l.length > 0 && l[0] == `
`) {
              let h = this._getParentElement();
              h != null && h.children.length == 0 && this.getTagDefinition(h.name).ignoreFirstLf && (l = l.substring(1));
            }
            return l;
          }
          _consumeText(a) {
            let l = this._getText(a);
            l.length > 0 && this._addToParent(new u.Text(l, a.sourceSpan));
          }
          _closeVoidElement() {
            let a = this._getParentElement();
            a && this.getTagDefinition(a.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(a) {
            let l = a.parts[0], h = a.parts[1], C = [];
            for (; this._peek.type === n.TokenType.ATTR_NAME; )
              C.push(this._consumeAttr(this._advance()));
            let d = this._getElementFullName(l, h, this._getParentElement()), m = false;
            if (this._peek.type === n.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), m = true;
              let R = this.getTagDefinition(d);
              this.canSelfClose || R.canSelfClose || D.getNsPrefix(d) !== null || R.isVoid || this._errors.push(s.create(d, a.sourceSpan, `Only void and foreign elements can be self closed "${a.parts[1]}"`));
            } else
              this._peek.type === n.TokenType.TAG_OPEN_END && (this._advance(), m = false);
            let T = this._peek.sourceSpan.start, w = new r.ParseSourceSpan(a.sourceSpan.start, T), g = new r.ParseSourceSpan(a.sourceSpan.start.moveBy(1), a.sourceSpan.end), N = new u.Element(d, C, [], w, w, void 0, g);
            this._pushElement(N), m && (this._popElement(d), N.endSourceSpan = w);
          }
          _pushElement(a) {
            let l = this._getParentElement();
            l && this.getTagDefinition(l.name).isClosedByChild(a.name) && this._elementStack.pop(), this._addToParent(a), this._elementStack.push(a);
          }
          _consumeEndTag(a) {
            let l = this.allowHtmComponentClosingTags && a.parts.length === 0 ? null : this._getElementFullName(a.parts[0], a.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = a.sourceSpan), l && this.getTagDefinition(l).isVoid)
              this._errors.push(s.create(l, a.sourceSpan, `Void elements do not have end tags "${a.parts[1]}"`));
            else if (!this._popElement(l)) {
              let h = `Unexpected closing tag "${l}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this._errors.push(s.create(l, a.sourceSpan, h));
            }
          }
          _popElement(a) {
            for (let l = this._elementStack.length - 1; l >= 0; l--) {
              let h = this._elementStack[l];
              if (!a || (D.getNsPrefix(h.name) ? h.name == a : h.name.toLowerCase() == a.toLowerCase()))
                return this._elementStack.splice(l, this._elementStack.length - l), true;
              if (!this.getTagDefinition(h.name).closedByParent)
                return false;
            }
            return false;
          }
          _consumeAttr(a) {
            let l = D.mergeNsAndName(a.parts[0], a.parts[1]), h = a.sourceSpan.end, C = "", d, m;
            if (this._peek.type === n.TokenType.ATTR_QUOTE && (m = this._advance().sourceSpan.start), this._peek.type === n.TokenType.ATTR_VALUE) {
              let T = this._advance();
              C = T.parts[0], h = T.sourceSpan.end, d = T.sourceSpan;
            }
            return this._peek.type === n.TokenType.ATTR_QUOTE && (h = this._advance().sourceSpan.end, d = new r.ParseSourceSpan(m, h)), new u.Attribute(l, C, new r.ParseSourceSpan(a.sourceSpan.start, h), d, a.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let a = null;
            for (let l = this._elementStack.length - 1; l >= 0; l--) {
              if (!D.isNgContainer(this._elementStack[l].name))
                return { parent: this._elementStack[l], container: a };
              a = this._elementStack[l];
            }
            return { parent: null, container: a };
          }
          _addToParent(a) {
            let l = this._getParentElement();
            l != null ? l.children.push(a) : this._rootNodes.push(a);
          }
          _insertBeforeContainer(a, l, h) {
            if (!l)
              this._addToParent(h), this._elementStack.push(h);
            else {
              if (a) {
                let C = a.children.indexOf(l);
                a.children[C] = h;
              } else
                this._rootNodes.push(h);
              h.children.push(l), this._elementStack.splice(this._elementStack.indexOf(l), 0, h);
            }
          }
          _getElementFullName(a, l, h) {
            return a === "" && (a = this.getTagDefinition(l).implicitNamespacePrefix || "", a === "" && h != null && (a = D.getNsPrefix(h.name))), D.mergeNsAndName(a, l);
          }
        };
        function F(a, l) {
          return a.length > 0 && a[a.length - 1] === l;
        }
      } }), Ql = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Bs(), u = ls(), n = ls();
        e.ParseTreeResult = n.ParseTreeResult, e.TreeError = n.TreeError;
        var D = class extends u.Parser {
          constructor() {
            super(r.getHtmlTagDefinition);
          }
          parse(s, i, f) {
            let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, F = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(s, i, f, c, F);
          }
        };
        e.HtmlParser = D;
      } }), ws = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ql(), u = Ze();
        e.TagContentType = u.TagContentType;
        var n = null, D = () => (n || (n = new r.HtmlParser()), n);
        function s(i) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: c = false, allowHtmComponentClosingTags: F = false, isTagNameCaseSensitive: a = false, getTagContentType: l } = f;
          return D().parse(i, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: c, allowHtmComponentClosingTags: F }, a, l);
        }
        e.parse = s;
      } });
      q();
      var { ParseSourceSpan: Qe, ParseLocation: cs, ParseSourceFile: Kl } = Be(), Jl = ol(), Zl = Cs(), ec = Dl(), { inferParserByLanguage: rc } = xl(), uc = kl(), Vr = Ml(), hs = jl(), { hasPragma: tc } = Ul(), { Node: nc } = Gl(), { parseIeConditionalComment: sc } = Vl(), { locStart: ic, locEnd: ac } = Xl();
      function oc(e, r, u) {
        let { recognizeSelfClosing: n, normalizeTagName: D, normalizeAttributeName: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f, getTagContentType: c } = r, F = ws(), { RecursiveVisitor: a, visitAll: l } = bs(), { ParseSourceSpan: h } = Be(), { getHtmlTagDefinition: C } = Bs(), { rootNodes: d, errors: m } = F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f, getTagContentType: c });
        if (u.parser === "vue")
          if (d.some((O) => O.type === "docType" && O.value === "html" || O.type === "element" && O.name.toLowerCase() === "html")) {
            n = true, D = true, s = true, i = true, f = false;
            let O = F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f });
            d = O.rootNodes, m = O.errors;
          } else {
            let O = (x) => {
              if (!x || x.type !== "element" || x.name !== "template")
                return false;
              let k = x.attrs.find((t) => t.name === "lang"), $ = k && k.value;
              return !$ || rc($, u) === "html";
            };
            if (d.some(O)) {
              let x, k = () => F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f }), $ = () => x || (x = k()), t = (o) => $().rootNodes.find((E) => {
                let { startSourceSpan: p } = E;
                return p && p.start.offset === o.startSourceSpan.start.offset;
              });
              for (let o = 0; o < d.length; o++) {
                let E = d[o], { endSourceSpan: p, startSourceSpan: A } = E;
                if (p === null)
                  m = $().errors, d[o] = t(E) || E;
                else if (O(E)) {
                  let M = $(), z = A.end.offset, V = p.start.offset;
                  for (let X of M.errors) {
                    let { offset: H } = X.span.start;
                    if (z < H && H < V) {
                      m = [X];
                      break;
                    }
                  }
                  d[o] = t(E) || E;
                }
              }
            }
          }
        if (m.length > 0) {
          let { msg: _, span: { start: O, end: x } } = m[0];
          throw ec(_, { start: { line: O.line + 1, column: O.col + 1 }, end: { line: x.line + 1, column: x.col + 1 } });
        }
        let T = (_) => {
          let O = _.name.startsWith(":") ? _.name.slice(1).split(":")[0] : null, x = _.nameSpan.toString(), k = O !== null && x.startsWith(`${O}:`), $ = k ? x.slice(O.length + 1) : x;
          _.name = $, _.namespace = O, _.hasExplicitNamespace = k;
        }, w = (_) => {
          switch (_.type) {
            case "element":
              T(_);
              for (let O of _.attrs)
                T(O), O.valueSpan ? (O.value = O.valueSpan.toString(), /["']/.test(O.value[0]) && (O.value = O.value.slice(1, -1))) : O.value = null;
              break;
            case "comment":
              _.value = _.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              _.value = _.sourceSpan.toString();
              break;
          }
        }, g = (_, O) => {
          let x = _.toLowerCase();
          return O(x) ? x : _;
        }, N = (_) => {
          if (_.type === "element" && (D && (!_.namespace || _.namespace === _.tagDefinition.implicitNamespacePrefix || hs(_)) && (_.name = g(_.name, (O) => O in uc)), s)) {
            let O = Vr[_.name] || /* @__PURE__ */ Object.create(null);
            for (let x of _.attrs)
              x.namespace || (x.name = g(x.name, (k) => _.name in Vr && (k in Vr["*"] || k in O)));
          }
        }, R = (_) => {
          _.sourceSpan && _.endSourceSpan && (_.sourceSpan = new h(_.sourceSpan.start, _.endSourceSpan.end));
        }, j = (_) => {
          if (_.type === "element") {
            let O = C(f ? _.name : _.name.toLowerCase());
            !_.namespace || _.namespace === O.implicitNamespacePrefix || hs(_) ? _.tagDefinition = O : _.tagDefinition = C("");
          }
        };
        return l(new class extends a {
          visit(_) {
            w(_), j(_), N(_), R(_);
          }
        }(), d), d;
      }
      function Ns(e, r, u) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: D, content: s } = n ? Jl(e) : { frontMatter: null, content: e }, i = new Kl(e, r.filepath), f = new cs(i, 0, 0, 0), c = f.moveBy(e.length), F = { type: "root", sourceSpan: new Qe(f, c), children: oc(s, u, r) };
        if (D) {
          let h = new cs(i, 0, 0, 0), C = h.moveBy(D.raw.length);
          D.sourceSpan = new Qe(h, C), F.children.unshift(D);
        }
        let a = new nc(F), l = (h, C) => {
          let { offset: d } = C, m = e.slice(0, d).replace(/[^\n\r]/g, " "), w = Ns(m + h, r, u, false);
          w.sourceSpan = new Qe(C, Zl(w.children).sourceSpan.end);
          let g = w.children[0];
          return g.length === d ? w.children.shift() : (g.sourceSpan = new Qe(g.sourceSpan.start.moveBy(d), g.sourceSpan.end), g.value = g.value.slice(d)), w;
        };
        return a.walk((h) => {
          if (h.type === "comment") {
            let C = sc(h, l);
            C && h.parent.replaceChild(h, C);
          }
        }), a;
      }
      function Ke() {
        let { name: e, recognizeSelfClosing: r = false, normalizeTagName: u = false, normalizeAttributeName: n = false, allowHtmComponentClosingTags: D = false, isTagNameCaseSensitive: s = false, getTagContentType: i } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (f, c, F) => Ns(f, Object.assign({ parser: e }, F), { recognizeSelfClosing: r, normalizeTagName: u, normalizeAttributeName: n, allowHtmComponentClosingTags: D, isTagNameCaseSensitive: s, getTagContentType: i }), hasPragma: tc, astFormat: "html", locStart: ic, locEnd: ac };
      }
      Os.exports = { parsers: { html: Ke({ name: "html", recognizeSelfClosing: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Ke({ name: "angular" }), vue: Ke({ name: "vue", recognizeSelfClosing: true, isTagNameCaseSensitive: true, getTagContentType: (e, r, u, n) => {
        if (e.toLowerCase() !== "html" && !u && (e !== "template" || n.some((D) => {
          let { name: s, value: i } = D;
          return s === "lang" && i !== "html" && i !== "" && i !== void 0;
        })))
          return ws().TagContentType.RAW_TEXT;
      } }), lwc: Ke({ name: "lwc" }) } };
    });
    return Dc();
  });
} });
var require_standalone = __commonJS({ "node_modules/prettier/standalone.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var f = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      f.prettier = e();
    }
  })(function() {
    var xe = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), pt = xe((t0, pu) => {
      var ir = function(e) {
        return e && e.Math == Math && e;
      };
      pu.exports = ir(typeof globalThis == "object" && globalThis) || ir(typeof window == "object" && window) || ir(typeof self == "object" && self) || ir(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), Dt = xe((r0, fu) => {
      fu.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), yt = xe((n0, Du) => {
      var Mo = Dt();
      Du.exports = !Mo(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), ar = xe((u0, mu) => {
      var Ro = Dt();
      mu.exports = !Ro(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), At = xe((s0, du) => {
      var $o = ar(), or = Function.prototype.call;
      du.exports = $o ? or.bind(or) : function() {
        return or.apply(or, arguments);
      };
    }), vu = xe((hu) => {
      var gu = {}.propertyIsEnumerable, yu = Object.getOwnPropertyDescriptor, Vo = yu && !gu.call({ 1: 2 }, 1);
      hu.f = Vo ? function(r) {
        var t = yu(this, r);
        return !!t && t.enumerable;
      } : gu;
    }), lr = xe((a0, Cu) => {
      Cu.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    }), mt = xe((o0, Au) => {
      var Eu = ar(), Fu = Function.prototype, Wr = Fu.call, Wo = Eu && Fu.bind.bind(Wr, Wr);
      Au.exports = Eu ? Wo : function(e) {
        return function() {
          return Wr.apply(e, arguments);
        };
      };
    }), Vt = xe((l0, xu) => {
      var Su = mt(), Ho = Su({}.toString), Go = Su("".slice);
      xu.exports = function(e) {
        return Go(Ho(e), 8, -1);
      };
    }), Tu = xe((c0, bu) => {
      var Uo = mt(), Jo = Dt(), zo = Vt(), Hr = Object, Xo = Uo("".split);
      bu.exports = Jo(function() {
        return !Hr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return zo(e) == "String" ? Xo(e, "") : Hr(e);
      } : Hr;
    }), cr = xe((p0, Bu) => {
      Bu.exports = function(e) {
        return e == null;
      };
    }), Gr = xe((f0, Nu) => {
      var Ko = cr(), Yo = TypeError;
      Nu.exports = function(e) {
        if (Ko(e))
          throw Yo("Can't call method on " + e);
        return e;
      };
    }), pr = xe((D0, wu) => {
      var Qo = Tu(), Zo = Gr();
      wu.exports = function(e) {
        return Qo(Zo(e));
      };
    }), Jr = xe((m0, _u) => {
      var Ur = typeof document == "object" && document.all, el = typeof Ur > "u" && Ur !== void 0;
      _u.exports = { all: Ur, IS_HTMLDDA: el };
    }), ot = xe((d0, Iu) => {
      var Pu = Jr(), tl = Pu.all;
      Iu.exports = Pu.IS_HTMLDDA ? function(e) {
        return typeof e == "function" || e === tl;
      } : function(e) {
        return typeof e == "function";
      };
    }), St = xe((g0, Ou) => {
      var ku = ot(), Lu = Jr(), rl = Lu.all;
      Ou.exports = Lu.IS_HTMLDDA ? function(e) {
        return typeof e == "object" ? e !== null : ku(e) || e === rl;
      } : function(e) {
        return typeof e == "object" ? e !== null : ku(e);
      };
    }), Wt = xe((y0, ju) => {
      var zr = pt(), nl = ot(), ul = function(e) {
        return nl(e) ? e : void 0;
      };
      ju.exports = function(e, r) {
        return arguments.length < 2 ? ul(zr[e]) : zr[e] && zr[e][r];
      };
    }), Xr = xe((h0, qu) => {
      var sl = mt();
      qu.exports = sl({}.isPrototypeOf);
    }), Ru = xe((v0, Mu) => {
      var il = Wt();
      Mu.exports = il("navigator", "userAgent") || "";
    }), Ju = xe((C0, Uu) => {
      var Gu = pt(), Kr = Ru(), $u = Gu.process, Vu = Gu.Deno, Wu = $u && $u.versions || Vu && Vu.version, Hu = Wu && Wu.v8, dt, fr;
      Hu && (dt = Hu.split("."), fr = dt[0] > 0 && dt[0] < 4 ? 1 : +(dt[0] + dt[1])), !fr && Kr && (dt = Kr.match(/Edge\/(\d+)/), (!dt || dt[1] >= 74) && (dt = Kr.match(/Chrome\/(\d+)/), dt && (fr = +dt[1]))), Uu.exports = fr;
    }), Yr = xe((E0, Xu) => {
      var zu = Ju(), al = Dt();
      Xu.exports = !!Object.getOwnPropertySymbols && !al(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && zu && zu < 41;
      });
    }), Qr = xe((F0, Ku) => {
      var ol = Yr();
      Ku.exports = ol && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Zr = xe((A0, Yu) => {
      var ll = Wt(), cl = ot(), pl = Xr(), fl = Qr(), Dl = Object;
      Yu.exports = fl ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = ll("Symbol");
        return cl(r) && pl(r.prototype, Dl(e));
      };
    }), Dr = xe((S0, Qu) => {
      var ml = String;
      Qu.exports = function(e) {
        try {
          return ml(e);
        } catch {
          return "Object";
        }
      };
    }), Ht = xe((x0, Zu) => {
      var dl = ot(), gl = Dr(), yl = TypeError;
      Zu.exports = function(e) {
        if (dl(e))
          return e;
        throw yl(gl(e) + " is not a function");
      };
    }), mr = xe((b0, es) => {
      var hl = Ht(), vl = cr();
      es.exports = function(e, r) {
        var t = e[r];
        return vl(t) ? void 0 : hl(t);
      };
    }), rs = xe((T0, ts) => {
      var en = At(), tn = ot(), rn = St(), Cl = TypeError;
      ts.exports = function(e, r) {
        var t, s;
        if (r === "string" && tn(t = e.toString) && !rn(s = en(t, e)) || tn(t = e.valueOf) && !rn(s = en(t, e)) || r !== "string" && tn(t = e.toString) && !rn(s = en(t, e)))
          return s;
        throw Cl("Can't convert object to primitive value");
      };
    }), us = xe((B0, ns) => {
      ns.exports = false;
    }), dr = xe((N0, is) => {
      var ss = pt(), El = Object.defineProperty;
      is.exports = function(e, r) {
        try {
          El(ss, e, { value: r, configurable: true, writable: true });
        } catch {
          ss[e] = r;
        }
        return r;
      };
    }), gr = xe((w0, os) => {
      var Fl = pt(), Al = dr(), as = "__core-js_shared__", Sl = Fl[as] || Al(as, {});
      os.exports = Sl;
    }), nn = xe((_0, cs) => {
      var xl = us(), ls = gr();
      (cs.exports = function(e, r) {
        return ls[e] || (ls[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.26.1", mode: xl ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), yr = xe((P0, ps) => {
      var bl = Gr(), Tl = Object;
      ps.exports = function(e) {
        return Tl(bl(e));
      };
    }), Ct = xe((I0, fs) => {
      var Bl = mt(), Nl = yr(), wl = Bl({}.hasOwnProperty);
      fs.exports = Object.hasOwn || function(r, t) {
        return wl(Nl(r), t);
      };
    }), un = xe((k0, Ds) => {
      var _l = mt(), Pl = 0, Il = Math.random(), kl = _l(1 .toString);
      Ds.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + kl(++Pl + Il, 36);
      };
    }), bt = xe((L0, hs) => {
      var Ll = pt(), Ol = nn(), ms = Ct(), jl = un(), ds = Yr(), ys = Qr(), Pt = Ol("wks"), xt = Ll.Symbol, gs = xt && xt.for, ql = ys ? xt : xt && xt.withoutSetter || jl;
      hs.exports = function(e) {
        if (!ms(Pt, e) || !(ds || typeof Pt[e] == "string")) {
          var r = "Symbol." + e;
          ds && ms(xt, e) ? Pt[e] = xt[e] : ys && gs ? Pt[e] = gs(r) : Pt[e] = ql(r);
        }
        return Pt[e];
      };
    }), Fs = xe((O0, Es) => {
      var Ml = At(), vs = St(), Cs = Zr(), Rl = mr(), $l = rs(), Vl = bt(), Wl = TypeError, Hl = Vl("toPrimitive");
      Es.exports = function(e, r) {
        if (!vs(e) || Cs(e))
          return e;
        var t = Rl(e, Hl), s;
        if (t) {
          if (r === void 0 && (r = "default"), s = Ml(t, e, r), !vs(s) || Cs(s))
            return s;
          throw Wl("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), $l(e, r);
      };
    }), hr = xe((j0, As) => {
      var Gl = Fs(), Ul = Zr();
      As.exports = function(e) {
        var r = Gl(e, "string");
        return Ul(r) ? r : r + "";
      };
    }), bs = xe((q0, xs) => {
      var Jl = pt(), Ss = St(), sn = Jl.document, zl = Ss(sn) && Ss(sn.createElement);
      xs.exports = function(e) {
        return zl ? sn.createElement(e) : {};
      };
    }), an = xe((M0, Ts) => {
      var Xl = yt(), Kl = Dt(), Yl = bs();
      Ts.exports = !Xl && !Kl(function() {
        return Object.defineProperty(Yl("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), on = xe((Ns) => {
      var Ql = yt(), Zl = At(), ec = vu(), tc = lr(), rc = pr(), nc = hr(), uc = Ct(), sc = an(), Bs = Object.getOwnPropertyDescriptor;
      Ns.f = Ql ? Bs : function(r, t) {
        if (r = rc(r), t = nc(t), sc)
          try {
            return Bs(r, t);
          } catch {
          }
        if (uc(r, t))
          return tc(!Zl(ec.f, r, t), r[t]);
      };
    }), _s = xe(($0, ws) => {
      var ic = yt(), ac = Dt();
      ws.exports = ic && ac(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), Tt = xe((V0, Ps) => {
      var oc = St(), lc = String, cc = TypeError;
      Ps.exports = function(e) {
        if (oc(e))
          return e;
        throw cc(lc(e) + " is not an object");
      };
    }), It = xe((ks) => {
      var pc = yt(), fc = an(), Dc = _s(), vr = Tt(), Is = hr(), mc = TypeError, ln = Object.defineProperty, dc = Object.getOwnPropertyDescriptor, cn = "enumerable", pn = "configurable", fn = "writable";
      ks.f = pc ? Dc ? function(r, t, s) {
        if (vr(r), t = Is(t), vr(s), typeof r == "function" && t === "prototype" && "value" in s && fn in s && !s[fn]) {
          var a = dc(r, t);
          a && a[fn] && (r[t] = s.value, s = { configurable: pn in s ? s[pn] : a[pn], enumerable: cn in s ? s[cn] : a[cn], writable: false });
        }
        return ln(r, t, s);
      } : ln : function(r, t, s) {
        if (vr(r), t = Is(t), vr(s), fc)
          try {
            return ln(r, t, s);
          } catch {
          }
        if ("get" in s || "set" in s)
          throw mc("Accessors not supported");
        return "value" in s && (r[t] = s.value), r;
      };
    }), Dn = xe((H0, Ls) => {
      var gc = yt(), yc = It(), hc = lr();
      Ls.exports = gc ? function(e, r, t) {
        return yc.f(e, r, hc(1, t));
      } : function(e, r, t) {
        return e[r] = t, e;
      };
    }), qs = xe((G0, js) => {
      var mn = yt(), vc = Ct(), Os = Function.prototype, Cc = mn && Object.getOwnPropertyDescriptor, dn = vc(Os, "name"), Ec = dn && function() {
      }.name === "something", Fc = dn && (!mn || mn && Cc(Os, "name").configurable);
      js.exports = { EXISTS: dn, PROPER: Ec, CONFIGURABLE: Fc };
    }), yn = xe((U0, Ms) => {
      var Ac = mt(), Sc = ot(), gn = gr(), xc = Ac(Function.toString);
      Sc(gn.inspectSource) || (gn.inspectSource = function(e) {
        return xc(e);
      }), Ms.exports = gn.inspectSource;
    }), Vs = xe((J0, $s) => {
      var bc = pt(), Tc = ot(), Rs = bc.WeakMap;
      $s.exports = Tc(Rs) && /native code/.test(String(Rs));
    }), Gs = xe((z0, Hs) => {
      var Bc = nn(), Nc = un(), Ws = Bc("keys");
      Hs.exports = function(e) {
        return Ws[e] || (Ws[e] = Nc(e));
      };
    }), hn = xe((X0, Us) => {
      Us.exports = {};
    }), Ks = xe((K0, Xs) => {
      var wc = Vs(), zs = pt(), _c = St(), Pc = Dn(), vn = Ct(), Cn = gr(), Ic = Gs(), kc = hn(), Js = "Object already initialized", En = zs.TypeError, Lc = zs.WeakMap, Cr, Gt, Er, Oc = function(e) {
        return Er(e) ? Gt(e) : Cr(e, {});
      }, jc = function(e) {
        return function(r) {
          var t;
          if (!_c(r) || (t = Gt(r)).type !== e)
            throw En("Incompatible receiver, " + e + " required");
          return t;
        };
      };
      wc || Cn.state ? (gt = Cn.state || (Cn.state = new Lc()), gt.get = gt.get, gt.has = gt.has, gt.set = gt.set, Cr = function(e, r) {
        if (gt.has(e))
          throw En(Js);
        return r.facade = e, gt.set(e, r), r;
      }, Gt = function(e) {
        return gt.get(e) || {};
      }, Er = function(e) {
        return gt.has(e);
      }) : (Bt = Ic("state"), kc[Bt] = true, Cr = function(e, r) {
        if (vn(e, Bt))
          throw En(Js);
        return r.facade = e, Pc(e, Bt, r), r;
      }, Gt = function(e) {
        return vn(e, Bt) ? e[Bt] : {};
      }, Er = function(e) {
        return vn(e, Bt);
      });
      var gt, Bt;
      Xs.exports = { set: Cr, get: Gt, has: Er, enforce: Oc, getterFor: jc };
    }), An = xe((Y0, Qs) => {
      var qc = Dt(), Mc = ot(), Fr = Ct(), Fn = yt(), Rc = qs().CONFIGURABLE, $c = yn(), Ys = Ks(), Vc = Ys.enforce, Wc = Ys.get, Ar = Object.defineProperty, Hc = Fn && !qc(function() {
        return Ar(function() {
        }, "length", { value: 8 }).length !== 8;
      }), Gc = String(String).split("String"), Uc = Qs.exports = function(e, r, t) {
        String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Fr(e, "name") || Rc && e.name !== r) && (Fn ? Ar(e, "name", { value: r, configurable: true }) : e.name = r), Hc && t && Fr(t, "arity") && e.length !== t.arity && Ar(e, "length", { value: t.arity });
        try {
          t && Fr(t, "constructor") && t.constructor ? Fn && Ar(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
        } catch {
        }
        var s = Vc(e);
        return Fr(s, "source") || (s.source = Gc.join(typeof r == "string" ? r : "")), e;
      };
      Function.prototype.toString = Uc(function() {
        return Mc(this) && Wc(this).source || $c(this);
      }, "toString");
    }), ei = xe((Q0, Zs) => {
      var Jc = ot(), zc = It(), Xc = An(), Kc = dr();
      Zs.exports = function(e, r, t, s) {
        s || (s = {});
        var a = s.enumerable, n = s.name !== void 0 ? s.name : r;
        if (Jc(t) && Xc(t, n, s), s.global)
          a ? e[r] = t : Kc(r, t);
        else {
          try {
            s.unsafe ? e[r] && (a = true) : delete e[r];
          } catch {
          }
          a ? e[r] = t : zc.f(e, r, { value: t, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
        }
        return e;
      };
    }), ri = xe((Z0, ti) => {
      var Yc = Math.ceil, Qc = Math.floor;
      ti.exports = Math.trunc || function(r) {
        var t = +r;
        return (t > 0 ? Qc : Yc)(t);
      };
    }), Sr = xe((ey, ni) => {
      var Zc = ri();
      ni.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : Zc(r);
      };
    }), si = xe((ty, ui) => {
      var ep = Sr(), tp = Math.max, rp = Math.min;
      ui.exports = function(e, r) {
        var t = ep(e);
        return t < 0 ? tp(t + r, 0) : rp(t, r);
      };
    }), ai = xe((ry, ii) => {
      var np = Sr(), up = Math.min;
      ii.exports = function(e) {
        return e > 0 ? up(np(e), 9007199254740991) : 0;
      };
    }), kt = xe((ny, oi) => {
      var sp = ai();
      oi.exports = function(e) {
        return sp(e.length);
      };
    }), pi = xe((uy, ci) => {
      var ip = pr(), ap = si(), op = kt(), li = function(e) {
        return function(r, t, s) {
          var a = ip(r), n = op(a), u = ap(s, n), i;
          if (e && t != t) {
            for (; n > u; )
              if (i = a[u++], i != i)
                return true;
          } else
            for (; n > u; u++)
              if ((e || u in a) && a[u] === t)
                return e || u || 0;
          return !e && -1;
        };
      };
      ci.exports = { includes: li(true), indexOf: li(false) };
    }), mi = xe((sy, Di) => {
      var lp = mt(), Sn = Ct(), cp = pr(), pp = pi().indexOf, fp = hn(), fi = lp([].push);
      Di.exports = function(e, r) {
        var t = cp(e), s = 0, a = [], n;
        for (n in t)
          !Sn(fp, n) && Sn(t, n) && fi(a, n);
        for (; r.length > s; )
          Sn(t, n = r[s++]) && (~pp(a, n) || fi(a, n));
        return a;
      };
    }), gi = xe((iy, di) => {
      di.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), hi = xe((yi) => {
      var Dp = mi(), mp = gi(), dp = mp.concat("length", "prototype");
      yi.f = Object.getOwnPropertyNames || function(r) {
        return Dp(r, dp);
      };
    }), Ci = xe((vi) => {
      vi.f = Object.getOwnPropertySymbols;
    }), Fi = xe((ly, Ei) => {
      var gp = Wt(), yp = mt(), hp = hi(), vp = Ci(), Cp = Tt(), Ep = yp([].concat);
      Ei.exports = gp("Reflect", "ownKeys") || function(r) {
        var t = hp.f(Cp(r)), s = vp.f;
        return s ? Ep(t, s(r)) : t;
      };
    }), xi = xe((cy, Si) => {
      var Ai = Ct(), Fp = Fi(), Ap = on(), Sp = It();
      Si.exports = function(e, r, t) {
        for (var s = Fp(r), a = Sp.f, n = Ap.f, u = 0; u < s.length; u++) {
          var i = s[u];
          !Ai(e, i) && !(t && Ai(t, i)) && a(e, i, n(r, i));
        }
      };
    }), Ti = xe((py, bi) => {
      var xp = Dt(), bp = ot(), Tp = /#|\.prototype\./, Ut = function(e, r) {
        var t = Np[Bp(e)];
        return t == _p ? true : t == wp ? false : bp(r) ? xp(r) : !!r;
      }, Bp = Ut.normalize = function(e) {
        return String(e).replace(Tp, ".").toLowerCase();
      }, Np = Ut.data = {}, wp = Ut.NATIVE = "N", _p = Ut.POLYFILL = "P";
      bi.exports = Ut;
    }), Jt = xe((fy, Bi) => {
      var xn = pt(), Pp = on().f, Ip = Dn(), kp = ei(), Lp = dr(), Op = xi(), jp = Ti();
      Bi.exports = function(e, r) {
        var t = e.target, s = e.global, a = e.stat, n, u, i, l, p, d;
        if (s ? u = xn : a ? u = xn[t] || Lp(t, {}) : u = (xn[t] || {}).prototype, u)
          for (i in r) {
            if (p = r[i], e.dontCallGetSet ? (d = Pp(u, i), l = d && d.value) : l = u[i], n = jp(s ? i : t + (a ? "." : "#") + i, e.forced), !n && l !== void 0) {
              if (typeof p == typeof l)
                continue;
              Op(p, l);
            }
            (e.sham || l && l.sham) && Ip(p, "sham", true), kp(u, i, p, e);
          }
      };
    }), bn = xe((Dy, Ni) => {
      var qp = Vt();
      Ni.exports = Array.isArray || function(r) {
        return qp(r) == "Array";
      };
    }), _i = xe((my, wi) => {
      var Mp = TypeError, Rp = 9007199254740991;
      wi.exports = function(e) {
        if (e > Rp)
          throw Mp("Maximum allowed index exceeded");
        return e;
      };
    }), Ii = xe((dy, Pi) => {
      var $p = Vt(), Vp = mt();
      Pi.exports = function(e) {
        if ($p(e) === "Function")
          return Vp(e);
      };
    }), Tn = xe((gy, Li) => {
      var ki = Ii(), Wp = Ht(), Hp = ar(), Gp = ki(ki.bind);
      Li.exports = function(e, r) {
        return Wp(e), r === void 0 ? e : Hp ? Gp(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    }), Bn = xe((yy, ji) => {
      var Up = bn(), Jp = kt(), zp = _i(), Xp = Tn(), Oi = function(e, r, t, s, a, n, u, i) {
        for (var l = a, p = 0, d = u ? Xp(u, i) : false, y, g; p < s; )
          p in t && (y = d ? d(t[p], p, r) : t[p], n > 0 && Up(y) ? (g = Jp(y), l = Oi(e, r, y, g, l, n - 1) - 1) : (zp(l + 1), e[l] = y), l++), p++;
        return l;
      };
      ji.exports = Oi;
    }), Ri = xe((hy, Mi) => {
      var Kp = bt(), Yp = Kp("toStringTag"), qi = {};
      qi[Yp] = "z", Mi.exports = String(qi) === "[object z]";
    }), Nn = xe((vy, $i) => {
      var Qp = Ri(), Zp = ot(), xr = Vt(), ef = bt(), tf = ef("toStringTag"), rf = Object, nf = xr(function() {
        return arguments;
      }()) == "Arguments", uf = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      $i.exports = Qp ? xr : function(e) {
        var r, t, s;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = uf(r = rf(e), tf)) == "string" ? t : nf ? xr(r) : (s = xr(r)) == "Object" && Zp(r.callee) ? "Arguments" : s;
      };
    }), Ji = xe((Cy, Ui) => {
      var sf = mt(), af = Dt(), Vi = ot(), of = Nn(), lf = Wt(), cf = yn(), Wi = function() {
      }, pf = [], Hi = lf("Reflect", "construct"), wn = /^\s*(?:class|function)\b/, ff = sf(wn.exec), Df = !wn.exec(Wi), zt = function(r) {
        if (!Vi(r))
          return false;
        try {
          return Hi(Wi, pf, r), true;
        } catch {
          return false;
        }
      }, Gi = function(r) {
        if (!Vi(r))
          return false;
        switch (of(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Df || !!ff(wn, cf(r));
        } catch {
          return true;
        }
      };
      Gi.sham = true, Ui.exports = !Hi || af(function() {
        var e;
        return zt(zt.call) || !zt(Object) || !zt(function() {
          e = true;
        }) || e;
      }) ? Gi : zt;
    }), Yi = xe((Ey, Ki) => {
      var zi = bn(), mf = Ji(), df = St(), gf = bt(), yf = gf("species"), Xi = Array;
      Ki.exports = function(e) {
        var r;
        return zi(e) && (r = e.constructor, mf(r) && (r === Xi || zi(r.prototype)) ? r = void 0 : df(r) && (r = r[yf], r === null && (r = void 0))), r === void 0 ? Xi : r;
      };
    }), _n = xe((Fy, Qi) => {
      var hf = Yi();
      Qi.exports = function(e, r) {
        return new (hf(e))(r === 0 ? 0 : r);
      };
    }), Zi = xe(() => {
      var vf = Jt(), Cf = Bn(), Ef = Ht(), Ff = yr(), Af = kt(), Sf = _n();
      vf({ target: "Array", proto: true }, { flatMap: function(r) {
        var t = Ff(this), s = Af(t), a;
        return Ef(r), a = Sf(t, 0), a.length = Cf(a, t, t, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), a;
      } });
    }), Pn = xe((xy, ea) => {
      ea.exports = {};
    }), ra = xe((by, ta) => {
      var xf = bt(), bf = Pn(), Tf = xf("iterator"), Bf = Array.prototype;
      ta.exports = function(e) {
        return e !== void 0 && (bf.Array === e || Bf[Tf] === e);
      };
    }), In = xe((Ty, ua) => {
      var Nf = Nn(), na = mr(), wf = cr(), _f = Pn(), Pf = bt(), If = Pf("iterator");
      ua.exports = function(e) {
        if (!wf(e))
          return na(e, If) || na(e, "@@iterator") || _f[Nf(e)];
      };
    }), ia = xe((By, sa) => {
      var kf = At(), Lf = Ht(), Of = Tt(), jf = Dr(), qf = In(), Mf = TypeError;
      sa.exports = function(e, r) {
        var t = arguments.length < 2 ? qf(e) : r;
        if (Lf(t))
          return Of(kf(t, e));
        throw Mf(jf(e) + " is not iterable");
      };
    }), la = xe((Ny, oa) => {
      var Rf = At(), aa = Tt(), $f = mr();
      oa.exports = function(e, r, t) {
        var s, a;
        aa(e);
        try {
          if (s = $f(e, "return"), !s) {
            if (r === "throw")
              throw t;
            return t;
          }
          s = Rf(s, e);
        } catch (n) {
          a = true, s = n;
        }
        if (r === "throw")
          throw t;
        if (a)
          throw s;
        return aa(s), t;
      };
    }), ma = xe((wy, Da) => {
      var Vf = Tn(), Wf = At(), Hf = Tt(), Gf = Dr(), Uf = ra(), Jf = kt(), ca = Xr(), zf = ia(), Xf = In(), pa = la(), Kf = TypeError, br = function(e, r) {
        this.stopped = e, this.result = r;
      }, fa = br.prototype;
      Da.exports = function(e, r, t) {
        var s = t && t.that, a = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), u = !!(t && t.IS_ITERATOR), i = !!(t && t.INTERRUPTED), l = Vf(r, s), p, d, y, g, c, D, E, _ = function(F) {
          return p && pa(p, "normal", F), new br(true, F);
        }, w = function(F) {
          return a ? (Hf(F), i ? l(F[0], F[1], _) : l(F[0], F[1])) : i ? l(F, _) : l(F);
        };
        if (n)
          p = e.iterator;
        else if (u)
          p = e;
        else {
          if (d = Xf(e), !d)
            throw Kf(Gf(e) + " is not iterable");
          if (Uf(d)) {
            for (y = 0, g = Jf(e); g > y; y++)
              if (c = w(e[y]), c && ca(fa, c))
                return c;
            return new br(false);
          }
          p = zf(e, d);
        }
        for (D = n ? e.next : p.next; !(E = Wf(D, p)).done; ) {
          try {
            c = w(E.value);
          } catch (F) {
            pa(p, "throw", F);
          }
          if (typeof c == "object" && c && ca(fa, c))
            return c;
        }
        return new br(false);
      };
    }), ga = xe((_y, da) => {
      var Yf = hr(), Qf = It(), Zf = lr();
      da.exports = function(e, r, t) {
        var s = Yf(r);
        s in e ? Qf.f(e, s, Zf(0, t)) : e[s] = t;
      };
    }), ya = xe(() => {
      var eD = Jt(), tD = ma(), rD = ga();
      eD({ target: "Object", stat: true }, { fromEntries: function(r) {
        var t = {};
        return tD(r, function(s, a) {
          rD(t, s, a);
        }, { AS_ENTRIES: true }), t;
      } });
    }), Ca = xe((ky, va) => {
      var ha = An(), nD = It();
      va.exports = function(e, r, t) {
        return t.get && ha(t.get, r, { getter: true }), t.set && ha(t.set, r, { setter: true }), nD.f(e, r, t);
      };
    }), Fa = xe((Ly, Ea) => {
      var uD = Tt();
      Ea.exports = function() {
        var e = uD(this), r = "";
        return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
      };
    }), xa = xe(() => {
      var sD = pt(), iD = yt(), aD = Ca(), oD = Fa(), lD = Dt(), Aa = sD.RegExp, Sa = Aa.prototype, cD = iD && lD(function() {
        var e = true;
        try {
          Aa(".", "d");
        } catch {
          e = false;
        }
        var r = {}, t = "", s = e ? "dgimsy" : "gimsy", a = function(l, p) {
          Object.defineProperty(r, l, { get: function() {
            return t += p, true;
          } });
        }, n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        e && (n.hasIndices = "d");
        for (var u in n)
          a(u, n[u]);
        var i = Object.getOwnPropertyDescriptor(Sa, "flags").get.call(r);
        return i !== s || t !== s;
      });
      cD && aD(Sa, "flags", { configurable: true, get: oD });
    }), ba = xe(() => {
      var pD = Jt(), kn = pt();
      pD({ global: true, forced: kn.globalThis !== kn }, { globalThis: kn });
    }), Ta = xe(() => {
      ba();
    }), Ba = xe(() => {
      var fD = Jt(), DD = Bn(), mD = yr(), dD = kt(), gD = Sr(), yD = _n();
      fD({ target: "Array", proto: true }, { flat: function() {
        var r = arguments.length ? arguments[0] : void 0, t = mD(this), s = dD(t), a = yD(t, 0);
        return a.length = DD(a, t, t, s, 0, r === void 0 ? 1 : gD(r)), a;
      } });
    }), Zg = xe((Gy, jo) => {
      var hD = ["cliName", "cliCategory", "cliDescription"], vD = ["_"], CD = ["languageId"];
      function Hn(e, r) {
        if (e == null)
          return {};
        var t = ED(e, r), s, a;
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++)
            s = n[a], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (t[s] = e[s]);
        }
        return t;
      }
      function ED(e, r) {
        if (e == null)
          return {};
        var t = {}, s = Object.keys(e), a, n;
        for (n = 0; n < s.length; n++)
          a = s[n], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
        return t;
      }
      Zi(), ya(), xa(), Ta(), Ba();
      var FD = Object.create, _r = Object.defineProperty, AD = Object.getOwnPropertyDescriptor, Gn = Object.getOwnPropertyNames, SD = Object.getPrototypeOf, xD = Object.prototype.hasOwnProperty, ht = (e, r) => function() {
        return e && (r = (0, e[Gn(e)[0]])(e = 0)), r;
      }, Z = (e, r) => function() {
        return r || (0, e[Gn(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, Kt = (e, r) => {
        for (var t in r)
          _r(e, t, { get: r[t], enumerable: true });
      }, Pa = (e, r, t, s) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let a of Gn(r))
            !xD.call(e, a) && a !== t && _r(e, a, { get: () => r[a], enumerable: !(s = AD(r, a)) || s.enumerable });
        return e;
      }, bD = (e, r, t) => (t = e != null ? FD(SD(e)) : {}, Pa(r || !e || !e.__esModule ? _r(t, "default", { value: e, enumerable: true }) : t, e)), ft = (e) => Pa(_r({}, "__esModule", { value: true }), e), wt, ne = ht({ "<define:process>"() {
        wt = { env: {}, argv: [] };
      } }), Ia = Z({ "package.json"(e, r) {
        r.exports = { version: "2.8.2" };
      } }), TD = Z({ "node_modules/diff/lib/diff/base.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.default = r;
        function r() {
        }
        r.prototype = { diff: function(n, u) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback;
          typeof i == "function" && (l = i, i = {}), this.options = i;
          var p = this;
          function d(A) {
            return l ? (setTimeout(function() {
              l(void 0, A);
            }, 0), true) : A;
          }
          n = this.castInput(n), u = this.castInput(u), n = this.removeEmpty(this.tokenize(n)), u = this.removeEmpty(this.tokenize(u));
          var y = u.length, g = n.length, c = 1, D = y + g, E = [{ newPos: -1, components: [] }], _ = this.extractCommon(E[0], u, n, 0);
          if (E[0].newPos + 1 >= y && _ + 1 >= g)
            return d([{ value: this.join(u), count: u.length }]);
          function w() {
            for (var A = -1 * c; A <= c; A += 2) {
              var N = void 0, I = E[A - 1], P = E[A + 1], H = (P ? P.newPos : 0) - A;
              I && (E[A - 1] = void 0);
              var f = I && I.newPos + 1 < y, b = P && 0 <= H && H < g;
              if (!f && !b) {
                E[A] = void 0;
                continue;
              }
              if (!f || b && I.newPos < P.newPos ? (N = s(P), p.pushComponent(N.components, void 0, true)) : (N = I, N.newPos++, p.pushComponent(N.components, true, void 0)), H = p.extractCommon(N, u, n, A), N.newPos + 1 >= y && H + 1 >= g)
                return d(t(p, N.components, u, n, p.useLongestToken));
              E[A] = N;
            }
            c++;
          }
          if (l)
            (function A() {
              setTimeout(function() {
                if (c > D)
                  return l();
                w() || A();
              }, 0);
            })();
          else
            for (; c <= D; ) {
              var F = w();
              if (F)
                return F;
            }
        }, pushComponent: function(n, u, i) {
          var l = n[n.length - 1];
          l && l.added === u && l.removed === i ? n[n.length - 1] = { count: l.count + 1, added: u, removed: i } : n.push({ count: 1, added: u, removed: i });
        }, extractCommon: function(n, u, i, l) {
          for (var p = u.length, d = i.length, y = n.newPos, g = y - l, c = 0; y + 1 < p && g + 1 < d && this.equals(u[y + 1], i[g + 1]); )
            y++, g++, c++;
          return c && n.components.push({ count: c }), n.newPos = y, g;
        }, equals: function(n, u) {
          return this.options.comparator ? this.options.comparator(n, u) : n === u || this.options.ignoreCase && n.toLowerCase() === u.toLowerCase();
        }, removeEmpty: function(n) {
          for (var u = [], i = 0; i < n.length; i++)
            n[i] && u.push(n[i]);
          return u;
        }, castInput: function(n) {
          return n;
        }, tokenize: function(n) {
          return n.split("");
        }, join: function(n) {
          return n.join("");
        } };
        function t(a, n, u, i, l) {
          for (var p = 0, d = n.length, y = 0, g = 0; p < d; p++) {
            var c = n[p];
            if (c.removed) {
              if (c.value = a.join(i.slice(g, g + c.count)), g += c.count, p && n[p - 1].added) {
                var E = n[p - 1];
                n[p - 1] = n[p], n[p] = E;
              }
            } else {
              if (!c.added && l) {
                var D = u.slice(y, y + c.count);
                D = D.map(function(w, F) {
                  var A = i[g + F];
                  return A.length > w.length ? A : w;
                }), c.value = a.join(D);
              } else
                c.value = a.join(u.slice(y, y + c.count));
              y += c.count, c.added || (g += c.count);
            }
          }
          var _ = n[d - 1];
          return d > 1 && typeof _.value == "string" && (_.added || _.removed) && a.equals("", _.value) && (n[d - 2].value += _.value, n.pop()), n;
        }
        function s(a) {
          return { newPos: a.newPos, components: a.components.slice(0) };
        }
      } }), BD = Z({ "node_modules/diff/lib/diff/array.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.diffArrays = a, e.arrayDiff = void 0;
        var r = t(TD());
        function t(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var s = new r.default();
        e.arrayDiff = s, s.tokenize = function(n) {
          return n.slice();
        }, s.join = s.removeEmpty = function(n) {
          return n;
        };
        function a(n, u, i) {
          return s.diff(n, u, i);
        }
      } }), Un = Z({ "src/document/doc-builders.js"(e, r) {
        ne();
        function t(v) {
          return { type: "concat", parts: v };
        }
        function s(v) {
          return { type: "indent", contents: v };
        }
        function a(v, o) {
          return { type: "align", contents: o, n: v };
        }
        function n(v) {
          let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: o.id, contents: v, break: Boolean(o.shouldBreak), expandedStates: o.expandedStates };
        }
        function u(v) {
          return a(Number.NEGATIVE_INFINITY, v);
        }
        function i(v) {
          return a({ type: "root" }, v);
        }
        function l(v) {
          return a(-1, v);
        }
        function p(v, o) {
          return n(v[0], Object.assign(Object.assign({}, o), {}, { expandedStates: v }));
        }
        function d(v) {
          return { type: "fill", parts: v };
        }
        function y(v, o) {
          let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: v, flatContents: o, groupId: h.groupId };
        }
        function g(v, o) {
          return { type: "indent-if-break", contents: v, groupId: o.groupId, negate: o.negate };
        }
        function c(v) {
          return { type: "line-suffix", contents: v };
        }
        var D = { type: "line-suffix-boundary" }, E = { type: "break-parent" }, _ = { type: "trim" }, w = { type: "line", hard: true }, F = { type: "line", hard: true, literal: true }, A = { type: "line" }, N = { type: "line", soft: true }, I = t([w, E]), P = t([F, E]), H = { type: "cursor", placeholder: Symbol("cursor") };
        function f(v, o) {
          let h = [];
          for (let C = 0; C < o.length; C++)
            C !== 0 && h.push(v), h.push(o[C]);
          return t(h);
        }
        function b(v, o, h) {
          let C = v;
          if (o > 0) {
            for (let S = 0; S < Math.floor(o / h); ++S)
              C = s(C);
            C = a(o % h, C), C = a(Number.NEGATIVE_INFINITY, C);
          }
          return C;
        }
        function m(v, o) {
          return { type: "label", label: v, contents: o };
        }
        r.exports = { concat: t, join: f, line: A, softline: N, hardline: I, literalline: P, group: n, conditionalGroup: p, fill: d, lineSuffix: c, lineSuffixBoundary: D, cursor: H, breakParent: E, ifBreak: y, trim: _, indent: s, indentIfBreak: g, align: a, addAlignmentToDoc: b, markAsRoot: i, dedentToRoot: u, dedent: l, hardlineWithoutBreakParent: w, literallineWithoutBreakParent: F, label: m };
      } }), Jn = Z({ "src/common/end-of-line.js"(e, r) {
        ne();
        function t(u) {
          let i = u.indexOf("\r");
          return i >= 0 ? u.charAt(i + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function s(u) {
          switch (u) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function a(u, i) {
          let l;
          switch (i) {
            case `
`:
              l = /\n/g;
              break;
            case "\r":
              l = /\r/g;
              break;
            case `\r
`:
              l = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(i)}.`);
          }
          let p = u.match(l);
          return p ? p.length : 0;
        }
        function n(u) {
          return u.replace(/\r\n?/g, `
`);
        }
        r.exports = { guessEndOfLine: t, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: n };
      } }), lt = Z({ "src/utils/get-last.js"(e, r) {
        ne();
        var t = (s) => s[s.length - 1];
        r.exports = t;
      } });
      function ND() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      }
      var wD = ht({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        ne();
      } });
      function _D(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(ND(), "");
      }
      var PD = ht({ "node_modules/strip-ansi/index.js"() {
        ne(), wD();
      } });
      function ID(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var kD = ht({ "node_modules/is-fullwidth-code-point/index.js"() {
        ne();
      } }), LD = Z({ "node_modules/emoji-regex/index.js"(e, r) {
        ne(), r.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), ka = {};
      Kt(ka, { default: () => OD });
      function OD(e) {
        if (typeof e != "string" || e.length === 0 || (e = _D(e), e.length === 0))
          return 0;
        e = e.replace((0, La.default)(), "  ");
        let r = 0;
        for (let t = 0; t < e.length; t++) {
          let s = e.codePointAt(t);
          s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t++, r += ID(s) ? 2 : 1);
        }
        return r;
      }
      var La, jD = ht({ "node_modules/string-width/index.js"() {
        ne(), PD(), kD(), La = bD(LD());
      } }), Oa = Z({ "src/utils/get-string-width.js"(e, r) {
        ne();
        var t = (jD(), ft(ka)).default, s = /[^\x20-\x7F]/;
        function a(n) {
          return n ? s.test(n) ? t(n) : n.length : 0;
        }
        r.exports = a;
      } }), Yt = Z({ "src/document/doc-utils.js"(e, r) {
        ne();
        var t = lt(), { literalline: s, join: a } = Un(), n = (o) => Array.isArray(o) || o && o.type === "concat", u = (o) => {
          if (Array.isArray(o))
            return o;
          if (o.type !== "concat" && o.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return o.parts;
        }, i = {};
        function l(o, h, C, S) {
          let x = [o];
          for (; x.length > 0; ) {
            let T = x.pop();
            if (T === i) {
              C(x.pop());
              continue;
            }
            if (C && x.push(T, i), !h || h(T) !== false)
              if (n(T) || T.type === "fill") {
                let k = u(T);
                for (let M = k.length, R = M - 1; R >= 0; --R)
                  x.push(k[R]);
              } else if (T.type === "if-break")
                T.flatContents && x.push(T.flatContents), T.breakContents && x.push(T.breakContents);
              else if (T.type === "group" && T.expandedStates)
                if (S)
                  for (let k = T.expandedStates.length, M = k - 1; M >= 0; --M)
                    x.push(T.expandedStates[M]);
                else
                  x.push(T.contents);
              else
                T.contents && x.push(T.contents);
          }
        }
        function p(o, h) {
          let C = /* @__PURE__ */ new Map();
          return S(o);
          function S(T) {
            if (C.has(T))
              return C.get(T);
            let k = x(T);
            return C.set(T, k), k;
          }
          function x(T) {
            if (Array.isArray(T))
              return h(T.map(S));
            if (T.type === "concat" || T.type === "fill") {
              let k = T.parts.map(S);
              return h(Object.assign(Object.assign({}, T), {}, { parts: k }));
            }
            if (T.type === "if-break") {
              let k = T.breakContents && S(T.breakContents), M = T.flatContents && S(T.flatContents);
              return h(Object.assign(Object.assign({}, T), {}, { breakContents: k, flatContents: M }));
            }
            if (T.type === "group" && T.expandedStates) {
              let k = T.expandedStates.map(S), M = k[0];
              return h(Object.assign(Object.assign({}, T), {}, { contents: M, expandedStates: k }));
            }
            if (T.contents) {
              let k = S(T.contents);
              return h(Object.assign(Object.assign({}, T), {}, { contents: k }));
            }
            return h(T);
          }
        }
        function d(o, h, C) {
          let S = C, x = false;
          function T(k) {
            let M = h(k);
            if (M !== void 0 && (x = true, S = M), x)
              return false;
          }
          return l(o, T), S;
        }
        function y(o) {
          if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent")
            return true;
        }
        function g(o) {
          return d(o, y, false);
        }
        function c(o) {
          if (o.length > 0) {
            let h = t(o);
            !h.expandedStates && !h.break && (h.break = "propagated");
          }
          return null;
        }
        function D(o) {
          let h = /* @__PURE__ */ new Set(), C = [];
          function S(T) {
            if (T.type === "break-parent" && c(C), T.type === "group") {
              if (C.push(T), h.has(T))
                return false;
              h.add(T);
            }
          }
          function x(T) {
            T.type === "group" && C.pop().break && c(C);
          }
          l(o, S, x, true);
        }
        function E(o) {
          return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o;
        }
        function _(o) {
          return p(o, E);
        }
        var w = (o, h) => o && o.type === "line" && o.hard && h && h.type === "break-parent";
        function F(o) {
          if (!o)
            return o;
          if (n(o) || o.type === "fill") {
            let h = u(o);
            for (; h.length > 1 && w(...h.slice(-2)); )
              h.length -= 2;
            if (h.length > 0) {
              let C = F(t(h));
              h[h.length - 1] = C;
            }
            return Array.isArray(o) ? h : Object.assign(Object.assign({}, o), {}, { parts: h });
          }
          switch (o.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let h = F(o.contents);
              return Object.assign(Object.assign({}, o), {}, { contents: h });
            }
            case "if-break": {
              let h = F(o.breakContents), C = F(o.flatContents);
              return Object.assign(Object.assign({}, o), {}, { breakContents: h, flatContents: C });
            }
          }
          return o;
        }
        function A(o) {
          return F(I(o));
        }
        function N(o) {
          switch (o.type) {
            case "fill":
              if (o.parts.every((C) => C === ""))
                return "";
              break;
            case "group":
              if (!o.contents && !o.id && !o.break && !o.expandedStates)
                return "";
              if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates)
                return o.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!o.contents)
                return "";
              break;
            case "if-break":
              if (!o.flatContents && !o.breakContents)
                return "";
              break;
          }
          if (!n(o))
            return o;
          let h = [];
          for (let C of u(o)) {
            if (!C)
              continue;
            let [S, ...x] = n(C) ? u(C) : [C];
            typeof S == "string" && typeof t(h) == "string" ? h[h.length - 1] += S : h.push(S), h.push(...x);
          }
          return h.length === 0 ? "" : h.length === 1 ? h[0] : Array.isArray(o) ? h : Object.assign(Object.assign({}, o), {}, { parts: h });
        }
        function I(o) {
          return p(o, (h) => N(h));
        }
        function P(o) {
          let h = [], C = o.filter(Boolean);
          for (; C.length > 0; ) {
            let S = C.shift();
            if (S) {
              if (n(S)) {
                C.unshift(...u(S));
                continue;
              }
              if (h.length > 0 && typeof t(h) == "string" && typeof S == "string") {
                h[h.length - 1] += S;
                continue;
              }
              h.push(S);
            }
          }
          return h;
        }
        function H(o) {
          return p(o, (h) => Array.isArray(h) ? P(h) : h.parts ? Object.assign(Object.assign({}, h), {}, { parts: P(h.parts) }) : h);
        }
        function f(o) {
          return p(o, (h) => typeof h == "string" && h.includes(`
`) ? b(h) : h);
        }
        function b(o) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
          return a(h, o.split(`
`)).parts;
        }
        function m(o) {
          if (o.type === "line")
            return true;
        }
        function v(o) {
          return d(o, m, false);
        }
        r.exports = { isConcat: n, getDocParts: u, willBreak: g, traverseDoc: l, findInDoc: d, mapDoc: p, propagateBreaks: D, removeLines: _, stripTrailingHardline: A, normalizeParts: P, normalizeDoc: H, cleanDoc: I, replaceTextEndOfLine: b, replaceEndOfLine: f, canBreak: v };
      } }), qD = Z({ "src/document/doc-printer.js"(e, r) {
        ne();
        var { convertEndOfLineToChars: t } = Jn(), s = lt(), a = Oa(), { fill: n, cursor: u, indent: i } = Un(), { isConcat: l, getDocParts: p } = Yt(), d, y = 1, g = 2;
        function c() {
          return { value: "", length: 0, queue: [] };
        }
        function D(N, I) {
          return _(N, { type: "indent" }, I);
        }
        function E(N, I, P) {
          return I === Number.NEGATIVE_INFINITY ? N.root || c() : I < 0 ? _(N, { type: "dedent" }, P) : I ? I.type === "root" ? Object.assign(Object.assign({}, N), {}, { root: N }) : _(N, { type: typeof I == "string" ? "stringAlign" : "numberAlign", n: I }, P) : N;
        }
        function _(N, I, P) {
          let H = I.type === "dedent" ? N.queue.slice(0, -1) : [...N.queue, I], f = "", b = 0, m = 0, v = 0;
          for (let k of H)
            switch (k.type) {
              case "indent":
                C(), P.useTabs ? o(1) : h(P.tabWidth);
                break;
              case "stringAlign":
                C(), f += k.n, b += k.n.length;
                break;
              case "numberAlign":
                m += 1, v += k.n;
                break;
              default:
                throw new Error(`Unexpected type '${k.type}'`);
            }
          return x(), Object.assign(Object.assign({}, N), {}, { value: f, length: b, queue: H });
          function o(k) {
            f += "	".repeat(k), b += P.tabWidth * k;
          }
          function h(k) {
            f += " ".repeat(k), b += k;
          }
          function C() {
            P.useTabs ? S() : x();
          }
          function S() {
            m > 0 && o(m), T();
          }
          function x() {
            v > 0 && h(v), T();
          }
          function T() {
            m = 0, v = 0;
          }
        }
        function w(N) {
          if (N.length === 0)
            return 0;
          let I = 0;
          for (; N.length > 0 && typeof s(N) == "string" && /^[\t ]*$/.test(s(N)); )
            I += N.pop().length;
          if (N.length > 0 && typeof s(N) == "string") {
            let P = s(N).replace(/[\t ]*$/, "");
            I += s(N).length - P.length, N[N.length - 1] = P;
          }
          return I;
        }
        function F(N, I, P, H, f) {
          let b = I.length, m = [N], v = [];
          for (; P >= 0; ) {
            if (m.length === 0) {
              if (b === 0)
                return true;
              m.push(I[--b]);
              continue;
            }
            let { mode: o, doc: h } = m.pop();
            if (typeof h == "string")
              v.push(h), P -= a(h);
            else if (l(h) || h.type === "fill") {
              let C = p(h);
              for (let S = C.length - 1; S >= 0; S--)
                m.push({ mode: o, doc: C[S] });
            } else
              switch (h.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  m.push({ mode: o, doc: h.contents });
                  break;
                case "trim":
                  P += w(v);
                  break;
                case "group": {
                  if (f && h.break)
                    return false;
                  let C = h.break ? y : o, S = h.expandedStates && C === y ? s(h.expandedStates) : h.contents;
                  m.push({ mode: C, doc: S });
                  break;
                }
                case "if-break": {
                  let S = (h.groupId ? d[h.groupId] || g : o) === y ? h.breakContents : h.flatContents;
                  S && m.push({ mode: o, doc: S });
                  break;
                }
                case "line":
                  if (o === y || h.hard)
                    return true;
                  h.soft || (v.push(" "), P--);
                  break;
                case "line-suffix":
                  H = true;
                  break;
                case "line-suffix-boundary":
                  if (H)
                    return false;
                  break;
              }
          }
          return false;
        }
        function A(N, I) {
          d = {};
          let P = I.printWidth, H = t(I.endOfLine), f = 0, b = [{ ind: c(), mode: y, doc: N }], m = [], v = false, o = [];
          for (; b.length > 0; ) {
            let { ind: C, mode: S, doc: x } = b.pop();
            if (typeof x == "string") {
              let T = H !== `
` ? x.replace(/\n/g, H) : x;
              m.push(T), f += a(T);
            } else if (l(x)) {
              let T = p(x);
              for (let k = T.length - 1; k >= 0; k--)
                b.push({ ind: C, mode: S, doc: T[k] });
            } else
              switch (x.type) {
                case "cursor":
                  m.push(u.placeholder);
                  break;
                case "indent":
                  b.push({ ind: D(C, I), mode: S, doc: x.contents });
                  break;
                case "align":
                  b.push({ ind: E(C, x.n, I), mode: S, doc: x.contents });
                  break;
                case "trim":
                  f -= w(m);
                  break;
                case "group":
                  switch (S) {
                    case g:
                      if (!v) {
                        b.push({ ind: C, mode: x.break ? y : g, doc: x.contents });
                        break;
                      }
                    case y: {
                      v = false;
                      let T = { ind: C, mode: g, doc: x.contents }, k = P - f, M = o.length > 0;
                      if (!x.break && F(T, b, k, M))
                        b.push(T);
                      else if (x.expandedStates) {
                        let R = s(x.expandedStates);
                        if (x.break) {
                          b.push({ ind: C, mode: y, doc: R });
                          break;
                        } else
                          for (let q = 1; q < x.expandedStates.length + 1; q++)
                            if (q >= x.expandedStates.length) {
                              b.push({ ind: C, mode: y, doc: R });
                              break;
                            } else {
                              let U = x.expandedStates[q], L = { ind: C, mode: g, doc: U };
                              if (F(L, b, k, M)) {
                                b.push(L);
                                break;
                              }
                            }
                      } else
                        b.push({ ind: C, mode: y, doc: x.contents });
                      break;
                    }
                  }
                  x.id && (d[x.id] = s(b).mode);
                  break;
                case "fill": {
                  let T = P - f, { parts: k } = x;
                  if (k.length === 0)
                    break;
                  let [M, R] = k, q = { ind: C, mode: g, doc: M }, U = { ind: C, mode: y, doc: M }, L = F(q, [], T, o.length > 0, true);
                  if (k.length === 1) {
                    L ? b.push(q) : b.push(U);
                    break;
                  }
                  let Y = { ind: C, mode: g, doc: R }, V = { ind: C, mode: y, doc: R };
                  if (k.length === 2) {
                    L ? b.push(Y, q) : b.push(V, U);
                    break;
                  }
                  k.splice(0, 2);
                  let j = { ind: C, mode: S, doc: n(k) }, K = k[0];
                  F({ ind: C, mode: g, doc: [M, R, K] }, [], T, o.length > 0, true) ? b.push(j, Y, q) : L ? b.push(j, V, q) : b.push(j, V, U);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let T = x.groupId ? d[x.groupId] : S;
                  if (T === y) {
                    let k = x.type === "if-break" ? x.breakContents : x.negate ? x.contents : i(x.contents);
                    k && b.push({ ind: C, mode: S, doc: k });
                  }
                  if (T === g) {
                    let k = x.type === "if-break" ? x.flatContents : x.negate ? i(x.contents) : x.contents;
                    k && b.push({ ind: C, mode: S, doc: k });
                  }
                  break;
                }
                case "line-suffix":
                  o.push({ ind: C, mode: S, doc: x.contents });
                  break;
                case "line-suffix-boundary":
                  o.length > 0 && b.push({ ind: C, mode: S, doc: { type: "line", hard: true } });
                  break;
                case "line":
                  switch (S) {
                    case g:
                      if (x.hard)
                        v = true;
                      else {
                        x.soft || (m.push(" "), f += 1);
                        break;
                      }
                    case y:
                      if (o.length > 0) {
                        b.push({ ind: C, mode: S, doc: x }, ...o.reverse()), o.length = 0;
                        break;
                      }
                      x.literal ? C.root ? (m.push(H, C.root.value), f = C.root.length) : (m.push(H), f = 0) : (f -= w(m), m.push(H + C.value), f = C.length);
                      break;
                  }
                  break;
                case "label":
                  b.push({ ind: C, mode: S, doc: x.contents });
                  break;
              }
            b.length === 0 && o.length > 0 && (b.push(...o.reverse()), o.length = 0);
          }
          let h = m.indexOf(u.placeholder);
          if (h !== -1) {
            let C = m.indexOf(u.placeholder, h + 1), S = m.slice(0, h).join(""), x = m.slice(h + 1, C).join(""), T = m.slice(C + 1).join("");
            return { formatted: S + x + T, cursorNodeStart: S.length, cursorNodeText: x };
          }
          return { formatted: m.join("") };
        }
        r.exports = { printDocToString: A };
      } }), MD = Z({ "src/document/doc-debug.js"(e, r) {
        ne();
        var { isConcat: t, getDocParts: s } = Yt();
        function a(u) {
          if (!u)
            return "";
          if (t(u)) {
            let i = [];
            for (let l of s(u))
              if (t(l))
                i.push(...a(l).parts);
              else {
                let p = a(l);
                p !== "" && i.push(p);
              }
            return { type: "concat", parts: i };
          }
          return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, { breakContents: a(u.breakContents), flatContents: a(u.flatContents) }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a) }) : u.type === "fill" ? { type: "fill", parts: u.parts.map(a) } : u.contents ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents) }) : u;
        }
        function n(u) {
          let i = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Set();
          return p(a(u));
          function p(y, g, c) {
            if (typeof y == "string")
              return JSON.stringify(y);
            if (t(y)) {
              let D = s(y).map(p).filter(Boolean);
              return D.length === 1 ? D[0] : `[${D.join(", ")}]`;
            }
            if (y.type === "line") {
              let D = Array.isArray(c) && c[g + 1] && c[g + 1].type === "break-parent";
              return y.literal ? D ? "literalline" : "literallineWithoutBreakParent" : y.hard ? D ? "hardline" : "hardlineWithoutBreakParent" : y.soft ? "softline" : "line";
            }
            if (y.type === "break-parent")
              return Array.isArray(c) && c[g - 1] && c[g - 1].type === "line" && c[g - 1].hard ? void 0 : "breakParent";
            if (y.type === "trim")
              return "trim";
            if (y.type === "indent")
              return "indent(" + p(y.contents) + ")";
            if (y.type === "align")
              return y.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + p(y.contents) + ")" : y.n < 0 ? "dedent(" + p(y.contents) + ")" : y.n.type === "root" ? "markAsRoot(" + p(y.contents) + ")" : "align(" + JSON.stringify(y.n) + ", " + p(y.contents) + ")";
            if (y.type === "if-break")
              return "ifBreak(" + p(y.breakContents) + (y.flatContents ? ", " + p(y.flatContents) : "") + (y.groupId ? (y.flatContents ? "" : ', ""') + `, { groupId: ${d(y.groupId)} }` : "") + ")";
            if (y.type === "indent-if-break") {
              let D = [];
              y.negate && D.push("negate: true"), y.groupId && D.push(`groupId: ${d(y.groupId)}`);
              let E = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return `indentIfBreak(${p(y.contents)}${E})`;
            }
            if (y.type === "group") {
              let D = [];
              y.break && y.break !== "propagated" && D.push("shouldBreak: true"), y.id && D.push(`id: ${d(y.id)}`);
              let E = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return y.expandedStates ? `conditionalGroup([${y.expandedStates.map((_) => p(_)).join(",")}]${E})` : `group(${p(y.contents)}${E})`;
            }
            if (y.type === "fill")
              return `fill([${y.parts.map((D) => p(D)).join(", ")}])`;
            if (y.type === "line-suffix")
              return "lineSuffix(" + p(y.contents) + ")";
            if (y.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (y.type === "label")
              return `label(${JSON.stringify(y.label)}, ${p(y.contents)})`;
            throw new Error("Unknown doc type " + y.type);
          }
          function d(y) {
            if (typeof y != "symbol")
              return JSON.stringify(String(y));
            if (y in i)
              return i[y];
            let g = String(y).slice(7, -1) || "symbol";
            for (let c = 0; ; c++) {
              let D = g + (c > 0 ? ` #${c}` : "");
              if (!l.has(D))
                return l.add(D), i[y] = `Symbol.for(${JSON.stringify(D)})`;
            }
          }
        }
        r.exports = { printDocToDebug: n };
      } }), Me = Z({ "src/document/index.js"(e, r) {
        ne(), r.exports = { builders: Un(), printer: qD(), utils: Yt(), debug: MD() };
      } }), ja = {};
      Kt(ja, { default: () => RD });
      function RD(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var $D = ht({ "node_modules/escape-string-regexp/index.js"() {
        ne();
      } }), qa = Z({ "node_modules/semver/internal/debug.js"(e, r) {
        ne();
        var t = typeof wt == "object" && wt.env && wt.env.NODE_DEBUG && /\bsemver\b/i.test(wt.env.NODE_DEBUG) ? function() {
          for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++)
            a[n] = arguments[n];
          return console.error("SEMVER", ...a);
        } : () => {
        };
        r.exports = t;
      } }), Ma = Z({ "node_modules/semver/internal/constants.js"(e, r) {
        ne();
        var t = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
        r.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: n };
      } }), VD = Z({ "node_modules/semver/internal/re.js"(e, r) {
        ne();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = Ma(), s = qa();
        e = r.exports = {};
        var a = e.re = [], n = e.src = [], u = e.t = {}, i = 0, l = (p, d, y) => {
          let g = i++;
          s(p, g, d), u[p] = g, n[g] = d, a[g] = new RegExp(d, y ? "g" : void 0);
        };
        l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${n[u.NUMERICIDENTIFIER]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${n[u.NUMERICIDENTIFIERLOOSE]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${n[u.PRERELEASEIDENTIFIER]}(?:\\.${n[u.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${n[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[u.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${n[u.BUILDIDENTIFIER]}(?:\\.${n[u.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${n[u.MAINVERSION]}${n[u.PRERELEASE]}?${n[u.BUILD]}?`), l("FULL", `^${n[u.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${n[u.MAINVERSIONLOOSE]}${n[u.PRERELEASELOOSE]}?${n[u.BUILD]}?`), l("LOOSE", `^${n[u.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${n[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${n[u.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:${n[u.PRERELEASE]})?${n[u.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:${n[u.PRERELEASELOOSE]})?${n[u.BUILD]}?)?)?`), l("XRANGE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), l("COERCERTL", n[u.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${n[u.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${n[u.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${n[u.LONECARET]}${n[u.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${n[u.LONECARET]}${n[u.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${n[u.GTLT]}\\s*(${n[u.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]}|${n[u.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${n[u.XRANGEPLAIN]})\\s+-\\s+(${n[u.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${n[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[u.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), WD = Z({ "node_modules/semver/internal/parse-options.js"(e, r) {
        ne();
        var t = ["includePrerelease", "loose", "rtl"], s = (a) => a ? typeof a != "object" ? { loose: true } : t.filter((n) => a[n]).reduce((n, u) => (n[u] = true, n), {}) : {};
        r.exports = s;
      } }), HD = Z({ "node_modules/semver/internal/identifiers.js"(e, r) {
        ne();
        var t = /^[0-9]+$/, s = (n, u) => {
          let i = t.test(n), l = t.test(u);
          return i && l && (n = +n, u = +u), n === u ? 0 : i && !l ? -1 : l && !i ? 1 : n < u ? -1 : 1;
        }, a = (n, u) => s(u, n);
        r.exports = { compareIdentifiers: s, rcompareIdentifiers: a };
      } }), GD = Z({ "node_modules/semver/classes/semver.js"(e, r) {
        ne();
        var t = qa(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: a } = Ma(), { re: n, t: u } = VD(), i = WD(), { compareIdentifiers: l } = HD(), p = class {
          constructor(d, y) {
            if (y = i(y), d instanceof p) {
              if (d.loose === !!y.loose && d.includePrerelease === !!y.includePrerelease)
                return d;
              d = d.version;
            } else if (typeof d != "string")
              throw new TypeError(`Invalid Version: ${d}`);
            if (d.length > s)
              throw new TypeError(`version is longer than ${s} characters`);
            t("SemVer", d, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
            let g = d.trim().match(y.loose ? n[u.LOOSE] : n[u.FULL]);
            if (!g)
              throw new TypeError(`Invalid Version: ${d}`);
            if (this.raw = d, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > a || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0)
              throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map((c) => {
              if (/^[0-9]+$/.test(c)) {
                let D = +c;
                if (D >= 0 && D < a)
                  return D;
              }
              return c;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(d) {
            if (t("SemVer.compare", this.version, this.options, d), !(d instanceof p)) {
              if (typeof d == "string" && d === this.version)
                return 0;
              d = new p(d, this.options);
            }
            return d.version === this.version ? 0 : this.compareMain(d) || this.comparePre(d);
          }
          compareMain(d) {
            return d instanceof p || (d = new p(d, this.options)), l(this.major, d.major) || l(this.minor, d.minor) || l(this.patch, d.patch);
          }
          comparePre(d) {
            if (d instanceof p || (d = new p(d, this.options)), this.prerelease.length && !d.prerelease.length)
              return -1;
            if (!this.prerelease.length && d.prerelease.length)
              return 1;
            if (!this.prerelease.length && !d.prerelease.length)
              return 0;
            let y = 0;
            do {
              let g = this.prerelease[y], c = d.prerelease[y];
              if (t("prerelease compare", y, g, c), g === void 0 && c === void 0)
                return 0;
              if (c === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== c)
                return l(g, c);
            } while (++y);
          }
          compareBuild(d) {
            d instanceof p || (d = new p(d, this.options));
            let y = 0;
            do {
              let g = this.build[y], c = d.build[y];
              if (t("prerelease compare", y, g, c), g === void 0 && c === void 0)
                return 0;
              if (c === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== c)
                return l(g, c);
            } while (++y);
          }
          inc(d, y) {
            switch (d) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", y), this.inc("pre", y);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", y), this.inc("pre", y);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let g = this.prerelease.length;
                  for (; --g >= 0; )
                    typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                  g === -1 && this.prerelease.push(0);
                }
                y && (l(this.prerelease[0], y) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [y, 0]) : this.prerelease = [y, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${d}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = p;
      } }), zn = Z({ "node_modules/semver/functions/compare.js"(e, r) {
        ne();
        var t = GD(), s = (a, n, u) => new t(a, u).compare(new t(n, u));
        r.exports = s;
      } }), UD = Z({ "node_modules/semver/functions/lt.js"(e, r) {
        ne();
        var t = zn(), s = (a, n, u) => t(a, n, u) < 0;
        r.exports = s;
      } }), JD = Z({ "node_modules/semver/functions/gte.js"(e, r) {
        ne();
        var t = zn(), s = (a, n, u) => t(a, n, u) >= 0;
        r.exports = s;
      } }), zD = Z({ "src/utils/arrayify.js"(e, r) {
        ne(), r.exports = (t, s) => Object.entries(t).map((a) => {
          let [n, u] = a;
          return Object.assign({ [s]: n }, u);
        });
      } }), XD = Z({ "node_modules/outdent/lib/index.js"(e, r) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function t() {
          for (var F = [], A = 0; A < arguments.length; A++)
            F[A] = arguments[A];
        }
        function s() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : a();
        }
        function a() {
          return { add: t, delete: t, get: t, set: t, has: function(F) {
            return false;
          } };
        }
        var n = Object.prototype.hasOwnProperty, u = function(F, A) {
          return n.call(F, A);
        };
        function i(F, A) {
          for (var N in A)
            u(A, N) && (F[N] = A[N]);
          return F;
        }
        var l = /^[ \t]*(?:\r\n|\r|\n)/, p = /(?:\r\n|\r|\n)[ \t]*$/, d = /^(?:[\r\n]|$)/, y = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function c(F, A, N) {
          var I = 0, P = F[0].match(y);
          P && (I = P[1].length);
          var H = "(\\r\\n|\\r|\\n).{0," + I + "}", f = new RegExp(H, "g");
          A && (F = F.slice(1));
          var b = N.newline, m = N.trimLeadingNewline, v = N.trimTrailingNewline, o = typeof b == "string", h = F.length, C = F.map(function(S, x) {
            return S = S.replace(f, "$1"), x === 0 && m && (S = S.replace(l, "")), x === h - 1 && v && (S = S.replace(p, "")), o && (S = S.replace(/\r\n|\n|\r/g, function(T) {
              return b;
            })), S;
          });
          return C;
        }
        function D(F, A) {
          for (var N = "", I = 0, P = F.length; I < P; I++)
            N += F[I], I < P - 1 && (N += A[I]);
          return N;
        }
        function E(F) {
          return u(F, "raw") && u(F, "length");
        }
        function _(F) {
          var A = s(), N = s();
          function I(H) {
            for (var f = [], b = 1; b < arguments.length; b++)
              f[b - 1] = arguments[b];
            if (E(H)) {
              var m = H, v = (f[0] === I || f[0] === w) && g.test(m[0]) && d.test(m[1]), o = v ? N : A, h = o.get(m);
              if (h || (h = c(m, v, F), o.set(m, h)), f.length === 0)
                return h[0];
              var C = D(h, v ? f.slice(1) : f);
              return C;
            } else
              return _(i(i({}, F), H || {}));
          }
          var P = i(I, { string: function(H) {
            return c([H], false, F)[0];
          } });
          return P;
        }
        var w = _({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = w, e.default = w, typeof r < "u")
          try {
            r.exports = w, Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.outdent = w;
          } catch {
          }
      } }), KD = Z({ "src/main/core-options.js"(e, r) {
        ne();
        var { outdent: t } = XD(), s = "Config", a = "Editor", n = "Format", u = "Other", i = "Output", l = "Global", p = "Special", d = { cursorOffset: { since: "1.4.0", category: p, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: a }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: p, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: p, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (y) => typeof y == "string" || typeof y == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (y) => typeof y == "string" || typeof y == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: t`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (y) => typeof y == "string" || typeof y == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: p, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, rangeStart: { since: "1.4.0", category: p, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, requirePragma: { since: "1.7.0", category: p, type: "boolean", default: false, description: t`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: u }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: n, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: p, options: d };
      } }), Xn = Z({ "src/main/support.js"(e, r) {
        ne();
        var t = { compare: zn(), lt: UD(), gte: JD() }, s = zD(), a = Ia().version, n = KD().options;
        function u() {
          let { plugins: l = [], showUnreleased: p = false, showDeprecated: d = false, showInternal: y = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = a.split("-", 1)[0], c = l.flatMap((F) => F.languages || []).filter(E), D = s(Object.assign({}, ...l.map((F) => {
            let { options: A } = F;
            return A;
          }), n), "name").filter((F) => E(F) && _(F)).sort((F, A) => F.name === A.name ? 0 : F.name < A.name ? -1 : 1).map(w).map((F) => {
            F = Object.assign({}, F), Array.isArray(F.default) && (F.default = F.default.length === 1 ? F.default[0].value : F.default.filter(E).sort((N, I) => t.compare(I.since, N.since))[0].value), Array.isArray(F.choices) && (F.choices = F.choices.filter((N) => E(N) && _(N)), F.name === "parser" && i(F, c, l));
            let A = Object.fromEntries(l.filter((N) => N.defaultOptions && N.defaultOptions[F.name] !== void 0).map((N) => [N.name, N.defaultOptions[F.name]]));
            return Object.assign(Object.assign({}, F), {}, { pluginDefaults: A });
          });
          return { languages: c, options: D };
          function E(F) {
            return p || !("since" in F) || F.since && t.gte(g, F.since);
          }
          function _(F) {
            return d || !("deprecated" in F) || F.deprecated && t.lt(g, F.deprecated);
          }
          function w(F) {
            if (y)
              return F;
            return Hn(F, hD);
          }
        }
        function i(l, p, d) {
          let y = new Set(l.choices.map((g) => g.value));
          for (let g of p)
            if (g.parsers) {
              for (let c of g.parsers)
                if (!y.has(c)) {
                  y.add(c);
                  let D = d.find((_) => _.parsers && _.parsers[c]), E = g.name;
                  D && D.name && (E += ` (plugin: ${D.name})`), l.choices.push({ value: c, description: E });
                }
            }
        }
        r.exports = { getSupportInfo: u };
      } }), Kn = Z({ "src/utils/is-non-empty-array.js"(e, r) {
        ne();
        function t(s) {
          return Array.isArray(s) && s.length > 0;
        }
        r.exports = t;
      } }), Pr = Z({ "src/utils/text/skip.js"(e, r) {
        ne();
        function t(i) {
          return (l, p, d) => {
            let y = d && d.backwards;
            if (p === false)
              return false;
            let { length: g } = l, c = p;
            for (; c >= 0 && c < g; ) {
              let D = l.charAt(c);
              if (i instanceof RegExp) {
                if (!i.test(D))
                  return c;
              } else if (!i.includes(D))
                return c;
              y ? c-- : c++;
            }
            return c === -1 || c === g ? c : false;
          };
        }
        var s = t(/\s/), a = t(" 	"), n = t(",; 	"), u = t(/[^\n\r]/);
        r.exports = { skipWhitespace: s, skipSpaces: a, skipToLineEnd: n, skipEverythingButNewLine: u };
      } }), Ra = Z({ "src/utils/text/skip-inline-comment.js"(e, r) {
        ne();
        function t(s, a) {
          if (a === false)
            return false;
          if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
            for (let n = a + 2; n < s.length; ++n)
              if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                return n + 2;
          }
          return a;
        }
        r.exports = t;
      } }), $a = Z({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        ne();
        var { skipEverythingButNewLine: t } = Pr();
        function s(a, n) {
          return n === false ? false : a.charAt(n) === "/" && a.charAt(n + 1) === "/" ? t(a, n) : n;
        }
        r.exports = s;
      } }), Va = Z({ "src/utils/text/skip-newline.js"(e, r) {
        ne();
        function t(s, a, n) {
          let u = n && n.backwards;
          if (a === false)
            return false;
          let i = s.charAt(a);
          if (u) {
            if (s.charAt(a - 1) === "\r" && i === `
`)
              return a - 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a - 1;
          } else {
            if (i === "\r" && s.charAt(a + 1) === `
`)
              return a + 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a + 1;
          }
          return a;
        }
        r.exports = t;
      } }), YD = Z({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        ne();
        var t = Ra(), s = Va(), a = $a(), { skipSpaces: n } = Pr();
        function u(i, l) {
          let p = null, d = l;
          for (; d !== p; )
            p = d, d = n(i, d), d = t(i, d), d = a(i, d), d = s(i, d);
          return d;
        }
        r.exports = u;
      } }), Ue = Z({ "src/common/util.js"(e, r) {
        ne();
        var { default: t } = ($D(), ft(ja)), s = lt(), { getSupportInfo: a } = Xn(), n = Kn(), u = Oa(), { skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: d } = Pr(), y = Ra(), g = $a(), c = Va(), D = YD(), E = (V) => V[V.length - 2];
        function _(V) {
          return (j, K, se) => {
            let Q = se && se.backwards;
            if (K === false)
              return false;
            let { length: ce } = j, W = K;
            for (; W >= 0 && W < ce; ) {
              let X = j.charAt(W);
              if (V instanceof RegExp) {
                if (!V.test(X))
                  return W;
              } else if (!V.includes(X))
                return W;
              Q ? W-- : W++;
            }
            return W === -1 || W === ce ? W : false;
          };
        }
        function w(V, j) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, se = l(V, K.backwards ? j - 1 : j, K), Q = c(V, se, K);
          return se !== Q;
        }
        function F(V, j, K) {
          for (let se = j; se < K; ++se)
            if (V.charAt(se) === `
`)
              return true;
          return false;
        }
        function A(V, j, K) {
          let se = K(j) - 1;
          se = l(V, se, { backwards: true }), se = c(V, se, { backwards: true }), se = l(V, se, { backwards: true });
          let Q = c(V, se, { backwards: true });
          return se !== Q;
        }
        function N(V, j) {
          let K = null, se = j;
          for (; se !== K; )
            K = se, se = p(V, se), se = y(V, se), se = l(V, se);
          return se = g(V, se), se = c(V, se), se !== false && w(V, se);
        }
        function I(V, j, K) {
          return N(V, K(j));
        }
        function P(V, j, K) {
          return D(V, K(j));
        }
        function H(V, j, K) {
          return V.charAt(P(V, j, K));
        }
        function f(V, j) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return l(V, K.backwards ? j - 1 : j, K) !== j;
        }
        function b(V, j) {
          let K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, se = 0;
          for (let Q = K; Q < V.length; ++Q)
            V[Q] === "	" ? se = se + j - se % j : se++;
          return se;
        }
        function m(V, j) {
          let K = V.lastIndexOf(`
`);
          return K === -1 ? 0 : b(V.slice(K + 1).match(/^[\t ]*/)[0], j);
        }
        function v(V, j) {
          let K = { quote: '"', regex: /"/g, escaped: "&quot;" }, se = { quote: "'", regex: /'/g, escaped: "&apos;" }, Q = j === "'" ? se : K, ce = Q === se ? K : se, W = Q;
          if (V.includes(Q.quote) || V.includes(ce.quote)) {
            let X = (V.match(Q.regex) || []).length, de = (V.match(ce.regex) || []).length;
            W = X > de ? ce : Q;
          }
          return W;
        }
        function o(V, j) {
          let K = V.slice(1, -1), se = j.parser === "json" || j.parser === "json5" && j.quoteProps === "preserve" && !j.singleQuote ? '"' : j.__isInHtmlAttribute ? "'" : v(K, j.singleQuote ? "'" : '"').quote;
          return h(K, se, !(j.parser === "css" || j.parser === "less" || j.parser === "scss" || j.__embeddedInHtml));
        }
        function h(V, j, K) {
          let se = j === '"' ? "'" : '"', Q = /\\(.)|(["'])/gs, ce = V.replace(Q, (W, X, de) => X === se ? X : de === j ? "\\" + de : de || (K && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(X) ? X : "\\" + X));
          return j + ce + j;
        }
        function C(V) {
          return V.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function S(V, j) {
          let K = V.match(new RegExp(`(${t(j)})+`, "g"));
          return K === null ? 0 : K.reduce((se, Q) => Math.max(se, Q.length / j.length), 0);
        }
        function x(V, j) {
          let K = V.match(new RegExp(`(${t(j)})+`, "g"));
          if (K === null)
            return 0;
          let se = /* @__PURE__ */ new Map(), Q = 0;
          for (let ce of K) {
            let W = ce.length / j.length;
            se.set(W, true), W > Q && (Q = W);
          }
          for (let ce = 1; ce < Q; ce++)
            if (!se.get(ce))
              return ce;
          return Q + 1;
        }
        function T(V, j) {
          (V.comments || (V.comments = [])).push(j), j.printed = false, j.nodeDescription = Y(V);
        }
        function k(V, j) {
          j.leading = true, j.trailing = false, T(V, j);
        }
        function M(V, j, K) {
          j.leading = false, j.trailing = false, K && (j.marker = K), T(V, j);
        }
        function R(V, j) {
          j.leading = false, j.trailing = true, T(V, j);
        }
        function q(V, j) {
          let { languages: K } = a({ plugins: j.plugins }), se = K.find((Q) => {
            let { name: ce } = Q;
            return ce.toLowerCase() === V;
          }) || K.find((Q) => {
            let { aliases: ce } = Q;
            return Array.isArray(ce) && ce.includes(V);
          }) || K.find((Q) => {
            let { extensions: ce } = Q;
            return Array.isArray(ce) && ce.includes(`.${V}`);
          });
          return se && se.parsers[0];
        }
        function U(V) {
          return V && V.type === "front-matter";
        }
        function L(V) {
          let j = /* @__PURE__ */ new WeakMap();
          return function(K) {
            return j.has(K) || j.set(K, Symbol(V)), j.get(K);
          };
        }
        function Y(V) {
          let j = V.type || V.kind || "(unknown type)", K = String(V.name || V.id && (typeof V.id == "object" ? V.id.name : V.id) || V.key && (typeof V.key == "object" ? V.key.name : V.key) || V.value && (typeof V.value == "object" ? "" : String(V.value)) || V.operator || "");
          return K.length > 20 && (K = K.slice(0, 19) + "\u2026"), j + (K ? " " + K : "");
        }
        r.exports = { inferParserByLanguage: q, getStringWidth: u, getMaxContinuousCount: S, getMinNotPresentContinuousCount: x, getPenultimate: E, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: D, getNextNonSpaceNonCommentCharacterIndex: P, getNextNonSpaceNonCommentCharacter: H, skip: _, skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: d, skipInlineComment: y, skipTrailingComment: g, skipNewline: c, isNextLineEmptyAfterIndex: N, isNextLineEmpty: I, isPreviousLineEmpty: A, hasNewline: w, hasNewlineInRange: F, hasSpaces: f, getAlignmentSize: b, getIndentSize: m, getPreferredQuote: v, printString: o, printNumber: C, makeString: h, addLeadingComment: k, addDanglingComment: M, addTrailingComment: R, isFrontMatterNode: U, isNonEmptyArray: n, createGroupIdMapper: L };
      } }), Wa = {};
      Kt(Wa, { basename: () => za, default: () => Ka, delimiter: () => Mn, dirname: () => Ja, extname: () => Xa, isAbsolute: () => Qn, join: () => Ga, normalize: () => Yn, relative: () => Ua, resolve: () => wr, sep: () => qn });
      function Ha(e, r) {
        for (var t = 0, s = e.length - 1; s >= 0; s--) {
          var a = e[s];
          a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
        }
        if (r)
          for (; t--; t)
            e.unshift("..");
        return e;
      }
      function wr() {
        for (var e = "", r = false, t = arguments.length - 1; t >= -1 && !r; t--) {
          var s = t >= 0 ? arguments[t] : "/";
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          s && (e = s + "/" + e, r = s.charAt(0) === "/");
        }
        return e = Ha(Zn(e.split("/"), function(a) {
          return !!a;
        }), !r).join("/"), (r ? "/" : "") + e || ".";
      }
      function Yn(e) {
        var r = Qn(e), t = Ya(e, -1) === "/";
        return e = Ha(Zn(e.split("/"), function(s) {
          return !!s;
        }), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      }
      function Qn(e) {
        return e.charAt(0) === "/";
      }
      function Ga() {
        var e = Array.prototype.slice.call(arguments, 0);
        return Yn(Zn(e, function(r, t) {
          if (typeof r != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return r;
        }).join("/"));
      }
      function Ua(e, r) {
        e = wr(e).substr(1), r = wr(r).substr(1);
        function t(p) {
          for (var d = 0; d < p.length && p[d] === ""; d++)
            ;
          for (var y = p.length - 1; y >= 0 && p[y] === ""; y--)
            ;
          return d > y ? [] : p.slice(d, y - d + 1);
        }
        for (var s = t(e.split("/")), a = t(r.split("/")), n = Math.min(s.length, a.length), u = n, i = 0; i < n; i++)
          if (s[i] !== a[i]) {
            u = i;
            break;
          }
        for (var l = [], i = u; i < s.length; i++)
          l.push("..");
        return l = l.concat(a.slice(u)), l.join("/");
      }
      function Ja(e) {
        var r = Ir(e), t = r[0], s = r[1];
        return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s);
      }
      function za(e, r) {
        var t = Ir(e)[2];
        return r && t.substr(-1 * r.length) === r && (t = t.substr(0, t.length - r.length)), t;
      }
      function Xa(e) {
        return Ir(e)[3];
      }
      function Zn(e, r) {
        if (e.filter)
          return e.filter(r);
        for (var t = [], s = 0; s < e.length; s++)
          r(e[s], s, e) && t.push(e[s]);
        return t;
      }
      var Na, Ir, qn, Mn, Ka, Ya, QD = ht({ "node-modules-polyfills:path"() {
        ne(), Na = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Ir = function(e) {
          return Na.exec(e).slice(1);
        }, qn = "/", Mn = ":", Ka = { extname: Xa, basename: za, dirname: Ja, sep: qn, delimiter: Mn, relative: Ua, join: Ga, isAbsolute: Qn, normalize: Yn, resolve: wr }, Ya = "ab".substr(-1) === "b" ? function(e, r, t) {
          return e.substr(r, t);
        } : function(e, r, t) {
          return r < 0 && (r = e.length + r), e.substr(r, t);
        };
      } }), ZD = Z({ "node-modules-polyfills-commonjs:path"(e, r) {
        ne();
        var t = (QD(), ft(Wa));
        if (t && t.default) {
          r.exports = t.default;
          for (let s in t)
            r.exports[s] = t[s];
        } else
          t && (r.exports = t);
      } }), Qt = Z({ "src/common/errors.js"(e, r) {
        ne();
        var t = class extends Error {
        }, s = class extends Error {
        }, a = class extends Error {
        }, n = class extends Error {
        };
        r.exports = { ConfigError: t, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: n };
      } }), vt = {};
      Kt(vt, { __assign: () => Nr, __asyncDelegator: () => fm, __asyncGenerator: () => pm, __asyncValues: () => Dm, __await: () => Xt, __awaiter: () => sm, __classPrivateFieldGet: () => ym, __classPrivateFieldSet: () => hm, __createBinding: () => am, __decorate: () => rm, __exportStar: () => om, __extends: () => em, __generator: () => im, __importDefault: () => gm, __importStar: () => dm, __makeTemplateObject: () => mm, __metadata: () => um, __param: () => nm, __read: () => Qa, __rest: () => tm, __spread: () => lm, __spreadArrays: () => cm, __values: () => Rn });
      function em(e, r) {
        Br(e, r);
        function t() {
          this.constructor = e;
        }
        e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
      }
      function tm(e, r) {
        var t = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
            r.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]]);
        return t;
      }
      function rm(e, r, t, s) {
        var a = arguments.length, n = a < 3 ? r : s === null ? s = Object.getOwnPropertyDescriptor(r, t) : s, u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          n = Reflect.decorate(e, r, t, s);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (u = e[i]) && (n = (a < 3 ? u(n) : a > 3 ? u(r, t, n) : u(r, t)) || n);
        return a > 3 && n && Object.defineProperty(r, t, n), n;
      }
      function nm(e, r) {
        return function(t, s) {
          r(t, s, e);
        };
      }
      function um(e, r) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(e, r);
      }
      function sm(e, r, t, s) {
        function a(n) {
          return n instanceof t ? n : new t(function(u) {
            u(n);
          });
        }
        return new (t || (t = Promise))(function(n, u) {
          function i(d) {
            try {
              p(s.next(d));
            } catch (y) {
              u(y);
            }
          }
          function l(d) {
            try {
              p(s.throw(d));
            } catch (y) {
              u(y);
            }
          }
          function p(d) {
            d.done ? n(d.value) : a(d.value).then(i, l);
          }
          p((s = s.apply(e, r || [])).next());
        });
      }
      function im(e, r) {
        var t = { label: 0, sent: function() {
          if (n[0] & 1)
            throw n[1];
          return n[1];
        }, trys: [], ops: [] }, s, a, n, u;
        return u = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
          return this;
        }), u;
        function i(p) {
          return function(d) {
            return l([p, d]);
          };
        }
        function l(p) {
          if (s)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (s = 1, a && (n = p[0] & 2 ? a.return : p[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, p[1])).done)
                return n;
              switch (a = 0, n && (p = [p[0] & 2, n.value]), p[0]) {
                case 0:
                case 1:
                  n = p;
                  break;
                case 4:
                  return t.label++, { value: p[1], done: false };
                case 5:
                  t.label++, a = p[1], p = [0];
                  continue;
                case 7:
                  p = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (p[0] === 3 && (!n || p[1] > n[0] && p[1] < n[3])) {
                    t.label = p[1];
                    break;
                  }
                  if (p[0] === 6 && t.label < n[1]) {
                    t.label = n[1], n = p;
                    break;
                  }
                  if (n && t.label < n[2]) {
                    t.label = n[2], t.ops.push(p);
                    break;
                  }
                  n[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              p = r.call(e, t);
            } catch (d) {
              p = [6, d], a = 0;
            } finally {
              s = n = 0;
            }
          if (p[0] & 5)
            throw p[1];
          return { value: p[0] ? p[1] : void 0, done: true };
        }
      }
      function am(e, r, t, s) {
        s === void 0 && (s = t), e[s] = r[t];
      }
      function om(e, r) {
        for (var t in e)
          t !== "default" && !r.hasOwnProperty(t) && (r[t] = e[t]);
      }
      function Rn(e) {
        var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], s = 0;
        if (t)
          return t.call(e);
        if (e && typeof e.length == "number")
          return { next: function() {
            return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
          } };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function Qa(e, r) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t)
          return e;
        var s = t.call(e), a, n = [], u;
        try {
          for (; (r === void 0 || r-- > 0) && !(a = s.next()).done; )
            n.push(a.value);
        } catch (i) {
          u = { error: i };
        } finally {
          try {
            a && !a.done && (t = s.return) && t.call(s);
          } finally {
            if (u)
              throw u.error;
          }
        }
        return n;
      }
      function lm() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e = e.concat(Qa(arguments[r]));
        return e;
      }
      function cm() {
        for (var e = 0, r = 0, t = arguments.length; r < t; r++)
          e += arguments[r].length;
        for (var s = Array(e), a = 0, r = 0; r < t; r++)
          for (var n = arguments[r], u = 0, i = n.length; u < i; u++, a++)
            s[a] = n[u];
        return s;
      }
      function Xt(e) {
        return this instanceof Xt ? (this.v = e, this) : new Xt(e);
      }
      function pm(e, r, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var s = t.apply(e, r || []), a, n = [];
        return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
          return this;
        }, a;
        function u(g) {
          s[g] && (a[g] = function(c) {
            return new Promise(function(D, E) {
              n.push([g, c, D, E]) > 1 || i(g, c);
            });
          });
        }
        function i(g, c) {
          try {
            l(s[g](c));
          } catch (D) {
            y(n[0][3], D);
          }
        }
        function l(g) {
          g.value instanceof Xt ? Promise.resolve(g.value.v).then(p, d) : y(n[0][2], g);
        }
        function p(g) {
          i("next", g);
        }
        function d(g) {
          i("throw", g);
        }
        function y(g, c) {
          g(c), n.shift(), n.length && i(n[0][0], n[0][1]);
        }
      }
      function fm(e) {
        var r, t;
        return r = {}, s("next"), s("throw", function(a) {
          throw a;
        }), s("return"), r[Symbol.iterator] = function() {
          return this;
        }, r;
        function s(a, n) {
          r[a] = e[a] ? function(u) {
            return (t = !t) ? { value: Xt(e[a](u)), done: a === "return" } : n ? n(u) : u;
          } : n;
        }
      }
      function Dm(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = e[Symbol.asyncIterator], t;
        return r ? r.call(e) : (e = typeof Rn == "function" ? Rn(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function s(n) {
          t[n] = e[n] && function(u) {
            return new Promise(function(i, l) {
              u = e[n](u), a(i, l, u.done, u.value);
            });
          };
        }
        function a(n, u, i, l) {
          Promise.resolve(l).then(function(p) {
            n({ value: p, done: i });
          }, u);
        }
      }
      function mm(e, r) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
      }
      function dm(e) {
        if (e && e.__esModule)
          return e;
        var r = {};
        if (e != null)
          for (var t in e)
            Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
        return r.default = e, r;
      }
      function gm(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function ym(e, r) {
        if (!r.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return r.get(e);
      }
      function hm(e, r, t) {
        if (!r.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return r.set(e, t), t;
      }
      var Br, Nr, Et = ht({ "node_modules/tslib/tslib.es6.js"() {
        ne(), Br = function(e, r) {
          return Br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var a in s)
              s.hasOwnProperty(a) && (t[a] = s[a]);
          }, Br(e, r);
        }, Nr = function() {
          return Nr = Object.assign || function(r) {
            for (var t, s = 1, a = arguments.length; s < a; s++) {
              t = arguments[s];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
            }
            return r;
          }, Nr.apply(this, arguments);
        };
      } }), Za = Z({ "node_modules/vnopts/lib/descriptors/api.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.apiDescriptor = { key: (r) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(r) ? r : JSON.stringify(r), value(r) {
          if (r === null || typeof r != "object")
            return JSON.stringify(r);
          if (Array.isArray(r))
            return `[${r.map((s) => e.apiDescriptor.value(s)).join(", ")}]`;
          let t = Object.keys(r);
          return t.length === 0 ? "{}" : `{ ${t.map((s) => `${e.apiDescriptor.key(s)}: ${e.apiDescriptor.value(r[s])}`).join(", ")} }`;
        }, pair: (r) => {
          let { key: t, value: s } = r;
          return e.apiDescriptor.value({ [t]: s });
        } };
      } }), vm = Z({ "node_modules/vnopts/lib/descriptors/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Za(), e);
      } }), kr = Z({ "scripts/build/shims/chalk.cjs"(e, r) {
        ne();
        var t = (s) => s;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, r.exports = t;
      } }), eo = Z({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr();
        e.commonDeprecatedHandler = (t, s, a) => {
          let { descriptor: n } = a, u = [`${r.default.yellow(typeof t == "string" ? n.key(t) : n.pair(t))} is deprecated`];
          return s && u.push(`we now treat it as ${r.default.blue(typeof s == "string" ? n.key(s) : n.pair(s))}`), u.join("; ") + ".";
        };
      } }), Cm = Z({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(eo(), e);
      } }), Em = Z({ "node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr();
        e.commonInvalidHandler = (t, s, a) => [`Invalid ${r.default.red(a.descriptor.key(t))} value.`, `Expected ${r.default.blue(a.schemas[t].expected(a))},`, `but received ${r.default.red(a.descriptor.value(s))}.`].join(" ");
      } }), to = Z({ "node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Em(), e);
      } }), Fm = Z({ "node_modules/vnopts/node_modules/leven/index.js"(e, r) {
        ne();
        var t = [], s = [];
        r.exports = function(a, n) {
          if (a === n)
            return 0;
          var u = a;
          a.length > n.length && (a = n, n = u);
          var i = a.length, l = n.length;
          if (i === 0)
            return l;
          if (l === 0)
            return i;
          for (; i > 0 && a.charCodeAt(~-i) === n.charCodeAt(~-l); )
            i--, l--;
          if (i === 0)
            return l;
          for (var p = 0; p < i && a.charCodeAt(p) === n.charCodeAt(p); )
            p++;
          if (i -= p, l -= p, i === 0)
            return l;
          for (var d, y, g, c, D = 0, E = 0; D < i; )
            s[p + D] = a.charCodeAt(p + D), t[D] = ++D;
          for (; E < l; )
            for (d = n.charCodeAt(p + E), g = E++, y = E, D = 0; D < i; D++)
              c = d === s[p + D] ? g : g + 1, g = t[D], y = t[D] = g > y ? c > y ? y + 1 : c : c > g ? g + 1 : c;
          return y;
        };
      } }), ro = Z({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr(), t = Fm();
        e.levenUnknownHandler = (s, a, n) => {
          let { descriptor: u, logger: i, schemas: l } = n, p = [`Ignored unknown option ${r.default.yellow(u.pair({ key: s, value: a }))}.`], d = Object.keys(l).sort().find((y) => t(s, y) < 3);
          d && p.push(`Did you mean ${r.default.blue(u.key(d))}?`), i.warn(p.join(" "));
        };
      } }), Am = Z({ "node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(ro(), e);
      } }), Sm = Z({ "node_modules/vnopts/lib/handlers/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Cm(), e), r.__exportStar(to(), e), r.__exportStar(Am(), e);
      } }), Ft = Z({ "node_modules/vnopts/lib/schema.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(n, u) {
          let i = new n(u), l = Object.create(i);
          for (let p of r)
            p in u && (l[p] = a(u[p], i, s.prototype[p].length));
          return l;
        }
        e.createSchema = t;
        var s = class {
          constructor(n) {
            this.name = n.name;
          }
          static create(n) {
            return t(this, n);
          }
          default(n) {
          }
          expected(n) {
            return "nothing";
          }
          validate(n, u) {
            return false;
          }
          deprecated(n, u) {
            return false;
          }
          forward(n, u) {
          }
          redirect(n, u) {
          }
          overlap(n, u, i) {
            return n;
          }
          preprocess(n, u) {
            return n;
          }
          postprocess(n, u) {
            return n;
          }
        };
        e.Schema = s;
        function a(n, u, i) {
          return typeof n == "function" ? function() {
            for (var l = arguments.length, p = new Array(l), d = 0; d < l; d++)
              p[d] = arguments[d];
            return n(...p.slice(0, i - 1), u, ...p.slice(i - 1));
          } : () => n;
        }
      } }), xm = Z({ "node_modules/vnopts/lib/schemas/alias.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          constructor(s) {
            super(s), this._sourceName = s.sourceName;
          }
          expected(s) {
            return s.schemas[this._sourceName].expected(s);
          }
          validate(s, a) {
            return a.schemas[this._sourceName].validate(s, a);
          }
          redirect(s, a) {
            return this._sourceName;
          }
        };
        e.AliasSchema = t;
      } }), bm = Z({ "node_modules/vnopts/lib/schemas/any.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return true;
          }
        };
        e.AnySchema = t;
      } }), Tm = Z({ "node_modules/vnopts/lib/schemas/array.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt)), t = Ft(), s = class extends t.Schema {
          constructor(n) {
            var { valueSchema: u, name: i = u.name } = n, l = r.__rest(n, ["valueSchema", "name"]);
            super(Object.assign({}, l, { name: i })), this._valueSchema = u;
          }
          expected(n) {
            return `an array of ${this._valueSchema.expected(n)}`;
          }
          validate(n, u) {
            if (!Array.isArray(n))
              return false;
            let i = [];
            for (let l of n) {
              let p = u.normalizeValidateResult(this._valueSchema.validate(l, u), l);
              p !== true && i.push(p.value);
            }
            return i.length === 0 ? true : { value: i };
          }
          deprecated(n, u) {
            let i = [];
            for (let l of n) {
              let p = u.normalizeDeprecatedResult(this._valueSchema.deprecated(l, u), l);
              p !== false && i.push(...p.map((d) => {
                let { value: y } = d;
                return { value: [y] };
              }));
            }
            return i;
          }
          forward(n, u) {
            let i = [];
            for (let l of n) {
              let p = u.normalizeForwardResult(this._valueSchema.forward(l, u), l);
              i.push(...p.map(a));
            }
            return i;
          }
          redirect(n, u) {
            let i = [], l = [];
            for (let p of n) {
              let d = u.normalizeRedirectResult(this._valueSchema.redirect(p, u), p);
              "remain" in d && i.push(d.remain), l.push(...d.redirect.map(a));
            }
            return i.length === 0 ? { redirect: l } : { redirect: l, remain: i };
          }
          overlap(n, u) {
            return n.concat(u);
          }
        };
        e.ArraySchema = s;
        function a(n) {
          let { from: u, to: i } = n;
          return { from: [u], to: i };
        }
      } }), Bm = Z({ "node_modules/vnopts/lib/schemas/boolean.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "true or false";
          }
          validate(s) {
            return typeof s == "boolean";
          }
        };
        e.BooleanSchema = t;
      } }), eu = Z({ "node_modules/vnopts/lib/utils.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        function r(c, D) {
          let E = /* @__PURE__ */ Object.create(null);
          for (let _ of c) {
            let w = _[D];
            if (E[w])
              throw new Error(`Duplicate ${D} ${JSON.stringify(w)}`);
            E[w] = _;
          }
          return E;
        }
        e.recordFromArray = r;
        function t(c, D) {
          let E = /* @__PURE__ */ new Map();
          for (let _ of c) {
            let w = _[D];
            if (E.has(w))
              throw new Error(`Duplicate ${D} ${JSON.stringify(w)}`);
            E.set(w, _);
          }
          return E;
        }
        e.mapFromArray = t;
        function s() {
          let c = /* @__PURE__ */ Object.create(null);
          return (D) => {
            let E = JSON.stringify(D);
            return c[E] ? true : (c[E] = true, false);
          };
        }
        e.createAutoChecklist = s;
        function a(c, D) {
          let E = [], _ = [];
          for (let w of c)
            D(w) ? E.push(w) : _.push(w);
          return [E, _];
        }
        e.partition = a;
        function n(c) {
          return c === Math.floor(c);
        }
        e.isInt = n;
        function u(c, D) {
          if (c === D)
            return 0;
          let E = typeof c, _ = typeof D, w = ["undefined", "object", "boolean", "number", "string"];
          return E !== _ ? w.indexOf(E) - w.indexOf(_) : E !== "string" ? Number(c) - Number(D) : c.localeCompare(D);
        }
        e.comparePrimitive = u;
        function i(c) {
          return c === void 0 ? {} : c;
        }
        e.normalizeDefaultResult = i;
        function l(c, D) {
          return c === true ? true : c === false ? { value: D } : c;
        }
        e.normalizeValidateResult = l;
        function p(c, D) {
          let E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          return c === false ? false : c === true ? E ? true : [{ value: D }] : "value" in c ? [c] : c.length === 0 ? false : c;
        }
        e.normalizeDeprecatedResult = p;
        function d(c, D) {
          return typeof c == "string" || "key" in c ? { from: D, to: c } : "from" in c ? { from: c.from, to: c.to } : { from: D, to: c.to };
        }
        e.normalizeTransferResult = d;
        function y(c, D) {
          return c === void 0 ? [] : Array.isArray(c) ? c.map((E) => d(E, D)) : [d(c, D)];
        }
        e.normalizeForwardResult = y;
        function g(c, D) {
          let E = y(typeof c == "object" && "redirect" in c ? c.redirect : c, D);
          return E.length === 0 ? { remain: D, redirect: E } : typeof c == "object" && "remain" in c ? { remain: c.remain, redirect: E } : { redirect: E };
        }
        e.normalizeRedirectResult = g;
      } }), Nm = Z({ "node_modules/vnopts/lib/schemas/choice.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = eu(), s = class extends r.Schema {
          constructor(a) {
            super(a), this._choices = t.mapFromArray(a.choices.map((n) => n && typeof n == "object" ? n : { value: n }), "value");
          }
          expected(a) {
            let { descriptor: n } = a, u = Array.from(this._choices.keys()).map((p) => this._choices.get(p)).filter((p) => !p.deprecated).map((p) => p.value).sort(t.comparePrimitive).map(n.value), i = u.slice(0, -2), l = u.slice(-2);
            return i.concat(l.join(" or ")).join(", ");
          }
          validate(a) {
            return this._choices.has(a);
          }
          deprecated(a) {
            let n = this._choices.get(a);
            return n && n.deprecated ? { value: a } : false;
          }
          forward(a) {
            let n = this._choices.get(a);
            return n ? n.forward : void 0;
          }
          redirect(a) {
            let n = this._choices.get(a);
            return n ? n.redirect : void 0;
          }
        };
        e.ChoiceSchema = s;
      } }), no = Z({ "node_modules/vnopts/lib/schemas/number.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "a number";
          }
          validate(s, a) {
            return typeof s == "number";
          }
        };
        e.NumberSchema = t;
      } }), wm = Z({ "node_modules/vnopts/lib/schemas/integer.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = eu(), t = no(), s = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(a, n) {
            return n.normalizeValidateResult(super.validate(a, n), a) === true && r.isInt(a);
          }
        };
        e.IntegerSchema = s;
      } }), _m = Z({ "node_modules/vnopts/lib/schemas/string.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "a string";
          }
          validate(s) {
            return typeof s == "string";
          }
        };
        e.StringSchema = t;
      } }), Pm = Z({ "node_modules/vnopts/lib/schemas/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(xm(), e), r.__exportStar(bm(), e), r.__exportStar(Tm(), e), r.__exportStar(Bm(), e), r.__exportStar(Nm(), e), r.__exportStar(wm(), e), r.__exportStar(no(), e), r.__exportStar(_m(), e);
      } }), Im = Z({ "node_modules/vnopts/lib/defaults.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Za(), t = eo(), s = to(), a = ro();
        e.defaultDescriptor = r.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      } }), km = Z({ "node_modules/vnopts/lib/normalize.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Im(), t = eu();
        e.normalize = (a, n, u) => new s(n, u).normalize(a);
        var s = class {
          constructor(a, n) {
            let { logger: u = console, descriptor: i = r.defaultDescriptor, unknown: l = r.defaultUnknownHandler, invalid: p = r.defaultInvalidHandler, deprecated: d = r.defaultDeprecatedHandler } = n || {};
            this._utils = { descriptor: i, logger: u || { warn: () => {
            } }, schemas: t.recordFromArray(a, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = l, this._invalidHandler = p, this._deprecatedHandler = d, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(a) {
            let n = {}, u = [a], i = () => {
              for (; u.length !== 0; ) {
                let l = u.shift(), p = this._applyNormalization(l, n);
                u.push(...p);
              }
            };
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let p = this._utils.schemas[l];
              if (!(l in n)) {
                let d = t.normalizeDefaultResult(p.default(this._utils));
                "value" in d && u.push({ [l]: d.value });
              }
            }
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let p = this._utils.schemas[l];
              l in n && (n[l] = p.postprocess(n[l], this._utils));
            }
            return n;
          }
          _applyNormalization(a, n) {
            let u = [], [i, l] = t.partition(Object.keys(a), (p) => p in this._utils.schemas);
            for (let p of i) {
              let d = this._utils.schemas[p], y = d.preprocess(a[p], this._utils), g = t.normalizeValidateResult(d.validate(y, this._utils), y);
              if (g !== true) {
                let { value: w } = g, F = this._invalidHandler(p, w, this._utils);
                throw typeof F == "string" ? new Error(F) : F;
              }
              let c = (w) => {
                let { from: F, to: A } = w;
                u.push(typeof A == "string" ? { [A]: F } : { [A.key]: A.value });
              }, D = (w) => {
                let { value: F, redirectTo: A } = w, N = t.normalizeDeprecatedResult(d.deprecated(F, this._utils), y, true);
                if (N !== false)
                  if (N === true)
                    this._hasDeprecationWarned(p) || this._utils.logger.warn(this._deprecatedHandler(p, A, this._utils));
                  else
                    for (let { value: I } of N) {
                      let P = { key: p, value: I };
                      if (!this._hasDeprecationWarned(P)) {
                        let H = typeof A == "string" ? { key: A, value: I } : A;
                        this._utils.logger.warn(this._deprecatedHandler(P, H, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(d.forward(y, this._utils), y).forEach(c);
              let _ = t.normalizeRedirectResult(d.redirect(y, this._utils), y);
              if (_.redirect.forEach(c), "remain" in _) {
                let w = _.remain;
                n[p] = p in n ? d.overlap(n[p], w, this._utils) : w, D({ value: w });
              }
              for (let { from: w, to: F } of _.redirect)
                D({ value: w, redirectTo: F });
            }
            for (let p of l) {
              let d = a[p], y = this._unknownHandler(p, d, this._utils);
              if (y)
                for (let g of Object.keys(y)) {
                  let c = { [g]: y[g] };
                  g in this._utils.schemas ? u.push(c) : Object.assign(n, c);
                }
            }
            return u;
          }
        };
        e.Normalizer = s;
      } }), Lm = Z({ "node_modules/vnopts/lib/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(vm(), e), r.__exportStar(Sm(), e), r.__exportStar(Pm(), e), r.__exportStar(km(), e), r.__exportStar(Ft(), e);
      } }), Om = Z({ "src/main/options-normalizer.js"(e, r) {
        ne();
        var t = Lm(), s = lt(), a = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t.apiDescriptor.value(g), pair: (g) => {
          let { key: c, value: D } = g;
          return D === false ? `--no-${c}` : D === true ? a.key(c) : D === "" ? `${a.key(c)} without an argument` : `${a.key(c)}=${D}`;
        } }, n = (g) => {
          let { colorsModule: c, levenshteinDistance: D } = g;
          return class extends t.ChoiceSchema {
            constructor(_) {
              let { name: w, flags: F } = _;
              super({ name: w, choices: F }), this._flags = [...F].sort();
            }
            preprocess(_, w) {
              if (typeof _ == "string" && _.length > 0 && !this._flags.includes(_)) {
                let F = this._flags.find((A) => D(A, _) < 3);
                if (F)
                  return w.logger.warn([`Unknown flag ${c.yellow(w.descriptor.value(_))},`, `did you mean ${c.blue(w.descriptor.value(F))}?`].join(" ")), F;
              }
              return _;
            }
            expected() {
              return "a flag";
            }
          };
        }, u;
        function i(g, c) {
          let { logger: D = false, isCLI: E = false, passThrough: _ = false, colorsModule: w = null, levenshteinDistance: F = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, A = _ ? Array.isArray(_) ? (b, m) => _.includes(b) ? { [b]: m } : void 0 : (b, m) => ({ [b]: m }) : (b, m, v) => {
            let o = v.schemas, C = Hn(o, vD);
            return t.levenUnknownHandler(b, m, Object.assign(Object.assign({}, v), {}, { schemas: C }));
          }, N = E ? a : t.apiDescriptor, I = l(c, { isCLI: E, colorsModule: w, levenshteinDistance: F }), P = new t.Normalizer(I, { logger: D, unknown: A, descriptor: N }), H = D !== false;
          H && u && (P._hasDeprecationWarned = u);
          let f = P.normalize(g);
          return H && (u = P._hasDeprecationWarned), E && f["plugin-search"] === false && (f["plugin-search-dir"] = false), f;
        }
        function l(g, c) {
          let { isCLI: D, colorsModule: E, levenshteinDistance: _ } = c, w = [];
          D && w.push(t.AnySchema.create({ name: "_" }));
          for (let F of g)
            w.push(p(F, { isCLI: D, optionInfos: g, colorsModule: E, levenshteinDistance: _ })), F.alias && D && w.push(t.AliasSchema.create({ name: F.alias, sourceName: F.name }));
          return w;
        }
        function p(g, c) {
          let { isCLI: D, optionInfos: E, colorsModule: _, levenshteinDistance: w } = c, { name: F } = g;
          if (F === "plugin-search-dir" || F === "pluginSearchDirs")
            return t.AnySchema.create({ name: F, preprocess(P) {
              return P === false || (P = Array.isArray(P) ? P : [P]), P;
            }, validate(P) {
              return P === false ? true : P.every((H) => typeof H == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let A = { name: F }, N, I = {};
          switch (g.type) {
            case "int":
              N = t.IntegerSchema, D && (A.preprocess = Number);
              break;
            case "string":
              N = t.StringSchema;
              break;
            case "choice":
              N = t.ChoiceSchema, A.choices = g.choices.map((P) => typeof P == "object" && P.redirect ? Object.assign(Object.assign({}, P), {}, { redirect: { to: { key: g.name, value: P.redirect } } }) : P);
              break;
            case "boolean":
              N = t.BooleanSchema;
              break;
            case "flag":
              N = n({ colorsModule: _, levenshteinDistance: w }), A.flags = E.flatMap((P) => [P.alias, P.description && P.name, P.oppositeDescription && `no-${P.name}`].filter(Boolean));
              break;
            case "path":
              N = t.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${g.type}`);
          }
          if (g.exception ? A.validate = (P, H, f) => g.exception(P) || H.validate(P, f) : A.validate = (P, H, f) => P === void 0 || H.validate(P, f), g.redirect && (I.redirect = (P) => P ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (I.deprecated = true), D && !g.array) {
            let P = A.preprocess || ((H) => H);
            A.preprocess = (H, f, b) => f.preprocess(P(Array.isArray(H) ? s(H) : H), b);
          }
          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, D ? { preprocess: (P) => Array.isArray(P) ? P : [P] } : {}), I), {}, { valueSchema: N.create(A) })) : N.create(Object.assign(Object.assign({}, A), I));
        }
        function d(g, c, D) {
          return i(g, c, D);
        }
        function y(g, c, D) {
          return i(g, c, Object.assign({ isCLI: true }, D));
        }
        r.exports = { normalizeApiOptions: d, normalizeCliOptions: y };
      } }), ut = Z({ "src/language-js/loc.js"(e, r) {
        ne();
        var t = Kn();
        function s(l) {
          var p, d;
          let y = l.range ? l.range[0] : l.start, g = (p = (d = l.declaration) === null || d === void 0 ? void 0 : d.decorators) !== null && p !== void 0 ? p : l.decorators;
          return t(g) ? Math.min(s(g[0]), y) : y;
        }
        function a(l) {
          return l.range ? l.range[1] : l.end;
        }
        function n(l, p) {
          let d = s(l);
          return Number.isInteger(d) && d === s(p);
        }
        function u(l, p) {
          let d = a(l);
          return Number.isInteger(d) && d === a(p);
        }
        function i(l, p) {
          return n(l, p) && u(l, p);
        }
        r.exports = { locStart: s, locEnd: a, hasSameLocStart: n, hasSameLoc: i };
      } }), jm = Z({ "src/main/load-parser.js"(e, r) {
        ne(), r.exports = () => {
        };
      } }), qm = Z({ "scripts/build/shims/babel-highlight.cjs"(e, r) {
        ne();
        var t = kr(), s = { shouldHighlight: () => false, getChalk: () => t };
        r.exports = s;
      } }), Mm = Z({ "node_modules/@babel/code-frame/lib/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.codeFrameColumns = u, e.default = i;
        var r = qm(), t = false;
        function s(l) {
          return { gutter: l.grey, marker: l.red.bold, message: l.red.bold };
        }
        var a = /\r\n|[\n\r\u2028\u2029]/;
        function n(l, p, d) {
          let y = Object.assign({ column: 0, line: -1 }, l.start), g = Object.assign({}, y, l.end), { linesAbove: c = 2, linesBelow: D = 3 } = d || {}, E = y.line, _ = y.column, w = g.line, F = g.column, A = Math.max(E - (c + 1), 0), N = Math.min(p.length, w + D);
          E === -1 && (A = 0), w === -1 && (N = p.length);
          let I = w - E, P = {};
          if (I)
            for (let H = 0; H <= I; H++) {
              let f = H + E;
              if (!_)
                P[f] = true;
              else if (H === 0) {
                let b = p[f - 1].length;
                P[f] = [_, b - _ + 1];
              } else if (H === I)
                P[f] = [0, F];
              else {
                let b = p[f - H].length;
                P[f] = [0, b];
              }
            }
          else
            _ === F ? _ ? P[E] = [_, 0] : P[E] = true : P[E] = [_, F - _];
          return { start: A, end: N, markerLines: P };
        }
        function u(l, p) {
          let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = (d.highlightCode || d.forceColor) && (0, r.shouldHighlight)(d), g = (0, r.getChalk)(d), c = s(g), D = (H, f) => y ? H(f) : f, E = l.split(a), { start: _, end: w, markerLines: F } = n(p, E, d), A = p.start && typeof p.start.column == "number", N = String(w).length, P = (y ? (0, r.default)(l, d) : l).split(a, w).slice(_, w).map((H, f) => {
            let b = _ + 1 + f, v = ` ${` ${b}`.slice(-N)} |`, o = F[b], h = !F[b + 1];
            if (o) {
              let C = "";
              if (Array.isArray(o)) {
                let S = H.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "), x = o[1] || 1;
                C = [`
 `, D(c.gutter, v.replace(/\d/g, " ")), " ", S, D(c.marker, "^").repeat(x)].join(""), h && d.message && (C += " " + D(c.message, d.message));
              }
              return [D(c.marker, ">"), D(c.gutter, v), H.length > 0 ? ` ${H}` : "", C].join("");
            } else
              return ` ${D(c.gutter, v)}${H.length > 0 ? ` ${H}` : ""}`;
          }).join(`
`);
          return d.message && !A && (P = `${" ".repeat(N + 1)}${d.message}
${P}`), y ? g.reset(P) : P;
        }
        function i(l, p, d) {
          let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = true;
            let c = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (wt.emitWarning)
              wt.emitWarning(c, "DeprecationWarning");
            else {
              let D = new Error(c);
              D.name = "DeprecationWarning", console.warn(new Error(c));
            }
          }
          return d = Math.max(d, 0), u(l, { start: { column: d, line: p } }, y);
        }
      } }), tu = Z({ "src/main/parser.js"(e, r) {
        ne();
        var { ConfigError: t } = Qt(), s = ut();
        jm();
        var { locStart: n, locEnd: u } = s, i = Object.getOwnPropertyNames, l = Object.getOwnPropertyDescriptor;
        function p(g) {
          let c = {};
          for (let D of g.plugins)
            if (D.parsers)
              for (let E of i(D.parsers))
                Object.defineProperty(c, E, l(D.parsers, E));
          return c;
        }
        function d(g) {
          let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p(g);
          if (typeof g.parser == "function")
            return { parse: g.parser, astFormat: "estree", locStart: n, locEnd: u };
          if (typeof g.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(c, g.parser))
              return c[g.parser];
            throw new t(`Couldn't resolve parser "${g.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function y(g, c) {
          let D = p(c), E = Object.defineProperties({}, Object.fromEntries(Object.keys(D).map((w) => [w, { enumerable: true, get() {
            return D[w].parse;
          } }]))), _ = d(c, D);
          try {
            return _.preprocess && (g = _.preprocess(g, c)), { text: g, ast: _.parse(g, E, c) };
          } catch (w) {
            let { loc: F } = w;
            if (F) {
              let { codeFrameColumns: A } = Mm();
              throw w.codeFrame = A(g, F, { highlightCode: true }), w.message += `
` + w.codeFrame, w;
            }
            throw w;
          }
        }
        r.exports = { parse: y, resolveParser: d };
      } }), uo = Z({ "src/main/options.js"(e, r) {
        ne();
        var t = ZD(), { UndefinedParserError: s } = Qt(), { getSupportInfo: a } = Xn(), n = Om(), { resolveParser: u } = tu(), i = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function l(y) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = Object.assign({}, y), D = a({ plugins: y.plugins, showUnreleased: true, showDeprecated: true }).options, E = Object.assign(Object.assign({}, i), Object.fromEntries(D.filter((N) => N.default !== void 0).map((N) => [N.name, N.default])));
          if (!c.parser) {
            if (!c.filepath)
              (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), c.parser = "babel";
            else if (c.parser = d(c.filepath, c.plugins), !c.parser)
              throw new s(`No parser could be inferred for file: ${c.filepath}`);
          }
          let _ = u(n.normalizeApiOptions(c, [D.find((N) => N.name === "parser")], { passThrough: true, logger: false }));
          c.astFormat = _.astFormat, c.locEnd = _.locEnd, c.locStart = _.locStart;
          let w = p(c);
          c.printer = w.printers[c.astFormat];
          let F = Object.fromEntries(D.filter((N) => N.pluginDefaults && N.pluginDefaults[w.name] !== void 0).map((N) => [N.name, N.pluginDefaults[w.name]])), A = Object.assign(Object.assign({}, E), F);
          for (let [N, I] of Object.entries(A))
            (c[N] === null || c[N] === void 0) && (c[N] = I);
          return c.parser === "json" && (c.trailingComma = "none"), n.normalizeApiOptions(c, D, Object.assign({ passThrough: Object.keys(i) }, g));
        }
        function p(y) {
          let { astFormat: g } = y;
          if (!g)
            throw new Error("getPlugin() requires astFormat to be set");
          let c = y.plugins.find((D) => D.printers && D.printers[g]);
          if (!c)
            throw new Error(`Couldn't find plugin for AST format "${g}"`);
          return c;
        }
        function d(y, g) {
          let c = t.basename(y).toLowerCase(), E = a({ plugins: g }).languages.filter((_) => _.since !== null).find((_) => _.extensions && _.extensions.some((w) => c.endsWith(w)) || _.filenames && _.filenames.some((w) => w.toLowerCase() === c));
          return E && E.parsers[0];
        }
        r.exports = { normalize: l, hiddenDefaults: i, inferParser: d };
      } }), Rm = Z({ "src/main/massage-ast.js"(e, r) {
        ne();
        function t(s, a, n) {
          if (Array.isArray(s))
            return s.map((p) => t(p, a, n)).filter(Boolean);
          if (!s || typeof s != "object")
            return s;
          let u = a.printer.massageAstNode, i;
          u && u.ignoredProperties ? i = u.ignoredProperties : i = /* @__PURE__ */ new Set();
          let l = {};
          for (let [p, d] of Object.entries(s))
            !i.has(p) && typeof d != "function" && (l[p] = t(d, a, s));
          if (u) {
            let p = u(s, l, n);
            if (p === null)
              return;
            if (p)
              return p;
          }
          return l;
        }
        r.exports = t;
      } }), Zt = Z({ "scripts/build/shims/assert.cjs"(e, r) {
        ne();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, r.exports = t;
      } }), et = Z({ "src/main/comments.js"(e, r) {
        ne();
        var t = Zt(), { builders: { line: s, hardline: a, breakParent: n, indent: u, lineSuffix: i, join: l, cursor: p } } = Me(), { hasNewline: d, skipNewline: y, skipSpaces: g, isPreviousLineEmpty: c, addLeadingComment: D, addDanglingComment: E, addTrailingComment: _ } = Ue(), w = /* @__PURE__ */ new WeakMap();
        function F(k, M, R) {
          if (!k)
            return;
          let { printer: q, locStart: U, locEnd: L } = M;
          if (R) {
            if (q.canAttachComment && q.canAttachComment(k)) {
              let V;
              for (V = R.length - 1; V >= 0 && !(U(R[V]) <= U(k) && L(R[V]) <= L(k)); --V)
                ;
              R.splice(V + 1, 0, k);
              return;
            }
          } else if (w.has(k))
            return w.get(k);
          let Y = q.getCommentChildNodes && q.getCommentChildNodes(k, M) || typeof k == "object" && Object.entries(k).filter((V) => {
            let [j] = V;
            return j !== "enclosingNode" && j !== "precedingNode" && j !== "followingNode" && j !== "tokens" && j !== "comments" && j !== "parent";
          }).map((V) => {
            let [, j] = V;
            return j;
          });
          if (Y) {
            R || (R = [], w.set(k, R));
            for (let V of Y)
              F(V, M, R);
            return R;
          }
        }
        function A(k, M, R, q) {
          let { locStart: U, locEnd: L } = R, Y = U(M), V = L(M), j = F(k, R), K, se, Q = 0, ce = j.length;
          for (; Q < ce; ) {
            let W = Q + ce >> 1, X = j[W], de = U(X), ie = L(X);
            if (de <= Y && V <= ie)
              return A(X, M, R, X);
            if (ie <= Y) {
              K = X, Q = W + 1;
              continue;
            }
            if (V <= de) {
              se = X, ce = W;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (q && q.type === "TemplateLiteral") {
            let { quasis: W } = q, X = v(W, M, R);
            K && v(W, K, R) !== X && (K = null), se && v(W, se, R) !== X && (se = null);
          }
          return { enclosingNode: q, precedingNode: K, followingNode: se };
        }
        var N = () => false;
        function I(k, M, R, q) {
          if (!Array.isArray(k))
            return;
          let U = [], { locStart: L, locEnd: Y, printer: { handleComments: V = {} } } = q, { avoidAstMutation: j, ownLine: K = N, endOfLine: se = N, remaining: Q = N } = V, ce = k.map((W, X) => Object.assign(Object.assign({}, A(M, W, q)), {}, { comment: W, text: R, options: q, ast: M, isLastComment: k.length - 1 === X }));
          for (let [W, X] of ce.entries()) {
            let { comment: de, precedingNode: ie, enclosingNode: Ee, followingNode: z, text: ue, options: J, ast: le, isLastComment: ge } = X;
            if (J.parser === "json" || J.parser === "json5" || J.parser === "__js_expression" || J.parser === "__vue_expression" || J.parser === "__vue_ts_expression") {
              if (L(de) - L(le) <= 0) {
                D(le, de);
                continue;
              }
              if (Y(de) - Y(le) >= 0) {
                _(le, de);
                continue;
              }
            }
            let pe;
            if (j ? pe = [X] : (de.enclosingNode = Ee, de.precedingNode = ie, de.followingNode = z, pe = [de, ue, J, le, ge]), H(ue, J, ce, W))
              de.placement = "ownLine", K(...pe) || (z ? D(z, de) : ie ? _(ie, de) : E(Ee || le, de));
            else if (f(ue, J, ce, W))
              de.placement = "endOfLine", se(...pe) || (ie ? _(ie, de) : z ? D(z, de) : E(Ee || le, de));
            else if (de.placement = "remaining", !Q(...pe))
              if (ie && z) {
                let Ae = U.length;
                Ae > 0 && U[Ae - 1].followingNode !== z && b(U, ue, J), U.push(X);
              } else
                ie ? _(ie, de) : z ? D(z, de) : E(Ee || le, de);
          }
          if (b(U, R, q), !j)
            for (let W of k)
              delete W.precedingNode, delete W.enclosingNode, delete W.followingNode;
        }
        var P = (k) => !/[\S\n\u2028\u2029]/.test(k);
        function H(k, M, R, q) {
          let { comment: U, precedingNode: L } = R[q], { locStart: Y, locEnd: V } = M, j = Y(U);
          if (L)
            for (let K = q - 1; K >= 0; K--) {
              let { comment: se, precedingNode: Q } = R[K];
              if (Q !== L || !P(k.slice(V(se), j)))
                break;
              j = Y(se);
            }
          return d(k, j, { backwards: true });
        }
        function f(k, M, R, q) {
          let { comment: U, followingNode: L } = R[q], { locStart: Y, locEnd: V } = M, j = V(U);
          if (L)
            for (let K = q + 1; K < R.length; K++) {
              let { comment: se, followingNode: Q } = R[K];
              if (Q !== L || !P(k.slice(j, Y(se))))
                break;
              j = V(se);
            }
          return d(k, j);
        }
        function b(k, M, R) {
          let q = k.length;
          if (q === 0)
            return;
          let { precedingNode: U, followingNode: L, enclosingNode: Y } = k[0], V = R.printer.getGapRegex && R.printer.getGapRegex(Y) || /^[\s(]*$/, j = R.locStart(L), K;
          for (K = q; K > 0; --K) {
            let { comment: se, precedingNode: Q, followingNode: ce } = k[K - 1];
            t.strictEqual(Q, U), t.strictEqual(ce, L);
            let W = M.slice(R.locEnd(se), j);
            if (V.test(W))
              j = R.locStart(se);
            else
              break;
          }
          for (let [se, { comment: Q }] of k.entries())
            se < K ? _(U, Q) : D(L, Q);
          for (let se of [U, L])
            se.comments && se.comments.length > 1 && se.comments.sort((Q, ce) => R.locStart(Q) - R.locStart(ce));
          k.length = 0;
        }
        function m(k, M) {
          let R = k.getValue();
          return R.printed = true, M.printer.printComment(k, M);
        }
        function v(k, M, R) {
          let q = R.locStart(M) - 1;
          for (let U = 1; U < k.length; ++U)
            if (q < R.locStart(k[U]))
              return U - 1;
          return 0;
        }
        function o(k, M) {
          let R = k.getValue(), q = [m(k, M)], { printer: U, originalText: L, locStart: Y, locEnd: V } = M;
          if (U.isBlockComment && U.isBlockComment(R)) {
            let se = d(L, V(R)) ? d(L, Y(R), { backwards: true }) ? a : s : " ";
            q.push(se);
          } else
            q.push(a);
          let K = y(L, g(L, V(R)));
          return K !== false && d(L, K) && q.push(a), q;
        }
        function h(k, M) {
          let R = k.getValue(), q = m(k, M), { printer: U, originalText: L, locStart: Y } = M, V = U.isBlockComment && U.isBlockComment(R);
          if (d(L, Y(R), { backwards: true })) {
            let K = c(L, R, Y);
            return i([a, K ? a : "", q]);
          }
          let j = [" ", q];
          return V || (j = [i(j), n]), j;
        }
        function C(k, M, R, q) {
          let U = [], L = k.getValue();
          return !L || !L.comments || (k.each(() => {
            let Y = k.getValue();
            !Y.leading && !Y.trailing && (!q || q(Y)) && U.push(m(k, M));
          }, "comments"), U.length === 0) ? "" : R ? l(a, U) : u([a, l(a, U)]);
        }
        function S(k, M, R) {
          let q = k.getValue();
          if (!q)
            return {};
          let U = q.comments || [];
          R && (U = U.filter((j) => !R.has(j)));
          let L = q === M.cursorNode;
          if (U.length === 0) {
            let j = L ? p : "";
            return { leading: j, trailing: j };
          }
          let Y = [], V = [];
          return k.each(() => {
            let j = k.getValue();
            if (R && R.has(j))
              return;
            let { leading: K, trailing: se } = j;
            K ? Y.push(o(k, M)) : se && V.push(h(k, M));
          }, "comments"), L && (Y.unshift(p), V.push(p)), { leading: Y, trailing: V };
        }
        function x(k, M, R, q) {
          let { leading: U, trailing: L } = S(k, R, q);
          return !U && !L ? M : [U, M, L];
        }
        function T(k) {
          if (k)
            for (let M of k) {
              if (!M.printed)
                throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
              delete M.printed;
            }
        }
        r.exports = { attach: I, printComments: x, printCommentsSeparately: S, printDanglingComments: C, getSortedChildNodes: F, ensureAllCommentsPrinted: T };
      } }), $m = Z({ "src/common/ast-path.js"(e, r) {
        ne();
        var t = lt();
        function s(u, i) {
          let l = a(u.stack, i);
          return l === -1 ? null : u.stack[l];
        }
        function a(u, i) {
          for (let l = u.length - 1; l >= 0; l -= 2) {
            let p = u[l];
            if (p && !Array.isArray(p) && --i < 0)
              return l;
          }
          return -1;
        }
        var n = class {
          constructor(u) {
            this.stack = [u];
          }
          getName() {
            let { stack: u } = this, { length: i } = u;
            return i > 1 ? u[i - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u);
          }
          getParentNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u + 1);
          }
          call(u) {
            let { stack: i } = this, { length: l } = i, p = t(i);
            for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
              y[g - 1] = arguments[g];
            for (let D of y)
              p = p[D], i.push(D, p);
            let c = u(this);
            return i.length = l, c;
          }
          callParent(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = a(this.stack, i + 1), p = this.stack.splice(l + 1), d = u(this);
            return this.stack.push(...p), d;
          }
          each(u) {
            let { stack: i } = this, { length: l } = i, p = t(i);
            for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
              y[g - 1] = arguments[g];
            for (let c of y)
              p = p[c], i.push(c, p);
            for (let c = 0; c < p.length; ++c)
              i.push(c, p[c]), u(this, c, p), i.length -= 2;
            i.length = l;
          }
          map(u) {
            let i = [];
            for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
              p[d - 1] = arguments[d];
            return this.each((y, g, c) => {
              i[g] = u(y, g, c);
            }, ...p), i;
          }
          try(u) {
            let { stack: i } = this, l = [...i];
            try {
              return u();
            } finally {
              i.length = 0, i.push(...l);
            }
          }
          match() {
            let u = this.stack.length - 1, i = null, l = this.stack[u--];
            for (var p = arguments.length, d = new Array(p), y = 0; y < p; y++)
              d[y] = arguments[y];
            for (let g of d) {
              if (l === void 0)
                return false;
              let c = null;
              if (typeof i == "number" && (c = i, i = this.stack[u--], l = this.stack[u--]), g && !g(l, i, c))
                return false;
              i = this.stack[u--], l = this.stack[u--];
            }
            return true;
          }
          findAncestor(u) {
            let i = this.stack.length - 1, l = null, p = this.stack[i--];
            for (; p; ) {
              let d = null;
              if (typeof l == "number" && (d = l, l = this.stack[i--], p = this.stack[i--]), l !== null && u(p, l, d))
                return p;
              l = this.stack[i--], p = this.stack[i--];
            }
          }
        };
        r.exports = n;
      } }), Vm = Z({ "src/main/multiparser.js"(e, r) {
        ne();
        var { utils: { stripTrailingHardline: t } } = Me(), { normalize: s } = uo(), a = et();
        function n(i, l, p, d) {
          if (p.printer.embed && p.embeddedLanguageFormatting === "auto")
            return p.printer.embed(i, l, (y, g, c) => u(y, g, p, d, c), p);
        }
        function u(i, l, p, d) {
          let { stripTrailingHardline: y = false } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = s(Object.assign(Object.assign(Object.assign({}, p), l), {}, { parentParser: p.parser, originalText: i }), { passThrough: true }), c = tu().parse(i, g), { ast: D } = c;
          i = c.text;
          let E = D.comments;
          delete D.comments, a.attach(E, D, i, g), g[Symbol.for("comments")] = E || [], g[Symbol.for("tokens")] = D.tokens || [];
          let _ = d(D, g);
          return a.ensureAllCommentsPrinted(E), y ? typeof _ == "string" ? _.replace(/(?:\r?\n)*$/, "") : t(_) : _;
        }
        r.exports = { printSubtree: n };
      } }), Wm = Z({ "src/main/ast-to-doc.js"(e, r) {
        ne();
        var t = $m(), { builders: { hardline: s, addAlignmentToDoc: a }, utils: { propagateBreaks: n } } = Me(), { printComments: u } = et(), i = Vm();
        function l(y, g) {
          let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: D } = g;
          D.preprocess && (y = D.preprocess(y, g));
          let E = /* @__PURE__ */ new Map(), _ = new t(y), w = F();
          return c > 0 && (w = a([s, w], c, g.tabWidth)), n(w), w;
          function F(N, I) {
            return N === void 0 || N === _ ? A(I) : Array.isArray(N) ? _.call(() => A(I), ...N) : _.call(() => A(I), N);
          }
          function A(N) {
            let I = _.getValue(), P = I && typeof I == "object" && N === void 0;
            if (P && E.has(I))
              return E.get(I);
            let H = d(_, g, F, N);
            return P && E.set(I, H), H;
          }
        }
        function p(y, g) {
          let { originalText: c, [Symbol.for("comments")]: D, locStart: E, locEnd: _ } = g, w = E(y), F = _(y), A = /* @__PURE__ */ new Set();
          for (let N of D)
            E(N) >= w && _(N) <= F && (N.printed = true, A.add(N));
          return { doc: c.slice(w, F), printedComments: A };
        }
        function d(y, g, c, D) {
          let E = y.getValue(), { printer: _ } = g, w, F;
          if (_.hasPrettierIgnore && _.hasPrettierIgnore(y))
            ({ doc: w, printedComments: F } = p(E, g));
          else {
            if (E)
              try {
                w = i.printSubtree(y, c, g, l);
              } catch (A) {
                if (globalThis.PRETTIER_DEBUG)
                  throw A;
              }
            w || (w = _.print(y, g, c, D));
          }
          return (!_.willPrintOwnComments || !_.willPrintOwnComments(y, g)) && (w = u(y, w, g, F)), w;
        }
        r.exports = l;
      } }), Hm = Z({ "src/main/range-util.js"(e, r) {
        ne();
        var t = Zt(), s = et(), a = (D) => {
          let { parser: E } = D;
          return E === "json" || E === "json5" || E === "json-stringify";
        };
        function n(D, E) {
          let _ = [D.node, ...D.parentNodes], w = /* @__PURE__ */ new Set([E.node, ...E.parentNodes]);
          return _.find((F) => d.has(F.type) && w.has(F));
        }
        function u(D) {
          let E = D.length - 1;
          for (; ; ) {
            let _ = D[E];
            if (_ && (_.type === "Program" || _.type === "File"))
              E--;
            else
              break;
          }
          return D.slice(0, E + 1);
        }
        function i(D, E, _) {
          let { locStart: w, locEnd: F } = _, A = D.node, N = E.node;
          if (A === N)
            return { startNode: A, endNode: N };
          let I = w(D.node);
          for (let H of u(E.parentNodes))
            if (w(H) >= I)
              N = H;
            else
              break;
          let P = F(E.node);
          for (let H of u(D.parentNodes)) {
            if (F(H) <= P)
              A = H;
            else
              break;
            if (A === N)
              break;
          }
          return { startNode: A, endNode: N };
        }
        function l(D, E, _, w) {
          let F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], A = arguments.length > 5 ? arguments[5] : void 0, { locStart: N, locEnd: I } = _, P = N(D), H = I(D);
          if (!(E > H || E < P || A === "rangeEnd" && E === P || A === "rangeStart" && E === H)) {
            for (let f of s.getSortedChildNodes(D, _)) {
              let b = l(f, E, _, w, [D, ...F], A);
              if (b)
                return b;
            }
            if (!w || w(D, F[0]))
              return { node: D, parentNodes: F };
          }
        }
        function p(D, E) {
          return E !== "DeclareExportDeclaration" && D !== "TypeParameterDeclaration" && (D === "Directive" || D === "TypeAlias" || D === "TSExportAssignment" || D.startsWith("Declare") || D.startsWith("TSDeclare") || D.endsWith("Statement") || D.endsWith("Declaration"));
        }
        var d = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), y = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(D, E, _) {
          if (!E)
            return false;
          switch (D.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return p(E.type, _ && _.type);
            case "json":
            case "json5":
            case "json-stringify":
              return d.has(E.type);
            case "graphql":
              return y.has(E.kind);
            case "vue":
              return E.tag !== "root";
          }
          return false;
        }
        function c(D, E, _) {
          let { rangeStart: w, rangeEnd: F, locStart: A, locEnd: N } = E;
          t.ok(F > w);
          let I = D.slice(w, F).search(/\S/), P = I === -1;
          if (!P)
            for (w += I; F > w && !/\S/.test(D[F - 1]); --F)
              ;
          let H = l(_, w, E, (v, o) => g(E, v, o), [], "rangeStart"), f = P ? H : l(_, F, E, (v) => g(E, v), [], "rangeEnd");
          if (!H || !f)
            return { rangeStart: 0, rangeEnd: 0 };
          let b, m;
          if (a(E)) {
            let v = n(H, f);
            b = v, m = v;
          } else
            ({ startNode: b, endNode: m } = i(H, f, E));
          return { rangeStart: Math.min(A(b), A(m)), rangeEnd: Math.max(N(b), N(m)) };
        }
        r.exports = { calculateRange: c, findNodeAtOffset: l };
      } }), Gm = Z({ "src/main/core.js"(e, r) {
        ne();
        var { diffArrays: t } = BD(), { printer: { printDocToString: s }, debug: { printDocToDebug: a } } = Me(), { getAlignmentSize: n } = Ue(), { guessEndOfLine: u, convertEndOfLineToChars: i, countEndOfLineChars: l, normalizeEndOfLine: p } = Jn(), d = uo().normalize, y = Rm(), g = et(), c = tu(), D = Wm(), E = Hm(), _ = "\uFEFF", w = Symbol("cursor");
        function F(m, v, o) {
          let h = v.comments;
          return h && (delete v.comments, g.attach(h, v, m, o)), o[Symbol.for("comments")] = h || [], o[Symbol.for("tokens")] = v.tokens || [], o.originalText = m, h;
        }
        function A(m, v) {
          let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!m || m.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: h, text: C } = c.parse(m, v);
          if (v.cursorOffset >= 0) {
            let k = E.findNodeAtOffset(h, v.cursorOffset, v);
            k && k.node && (v.cursorNode = k.node);
          }
          let S = F(C, h, v), x = D(h, v, o), T = s(x, v);
          if (g.ensureAllCommentsPrinted(S), o > 0) {
            let k = T.formatted.trim();
            T.cursorNodeStart !== void 0 && (T.cursorNodeStart -= T.formatted.indexOf(k)), T.formatted = k + i(v.endOfLine);
          }
          if (v.cursorOffset >= 0) {
            let k, M, R, q, U;
            if (v.cursorNode && T.cursorNodeText ? (k = v.locStart(v.cursorNode), M = C.slice(k, v.locEnd(v.cursorNode)), R = v.cursorOffset - k, q = T.cursorNodeStart, U = T.cursorNodeText) : (k = 0, M = C, R = v.cursorOffset, q = 0, U = T.formatted), M === U)
              return { formatted: T.formatted, cursorOffset: q + R, comments: S };
            let L = [...M];
            L.splice(R, 0, w);
            let Y = [...U], V = t(L, Y), j = q;
            for (let K of V)
              if (K.removed) {
                if (K.value.includes(w))
                  break;
              } else
                j += K.count;
            return { formatted: T.formatted, cursorOffset: j, comments: S };
          }
          return { formatted: T.formatted, cursorOffset: -1, comments: S };
        }
        function N(m, v) {
          let { ast: o, text: h } = c.parse(m, v), { rangeStart: C, rangeEnd: S } = E.calculateRange(h, v, o), x = h.slice(C, S), T = Math.min(C, h.lastIndexOf(`
`, C) + 1), k = h.slice(T, C).match(/^\s*/)[0], M = n(k, v.tabWidth), R = A(x, Object.assign(Object.assign({}, v), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: v.cursorOffset > C && v.cursorOffset <= S ? v.cursorOffset - C : -1, endOfLine: "lf" }), M), q = R.formatted.trimEnd(), { cursorOffset: U } = v;
          U > S ? U += q.length - x.length : R.cursorOffset >= 0 && (U = R.cursorOffset + C);
          let L = h.slice(0, C) + q + h.slice(S);
          if (v.endOfLine !== "lf") {
            let Y = i(v.endOfLine);
            U >= 0 && Y === `\r
` && (U += l(L.slice(0, U), `
`)), L = L.replace(/\n/g, Y);
          }
          return { formatted: L, cursorOffset: U, comments: R.comments };
        }
        function I(m, v, o) {
          return typeof v != "number" || Number.isNaN(v) || v < 0 || v > m.length ? o : v;
        }
        function P(m, v) {
          let { cursorOffset: o, rangeStart: h, rangeEnd: C } = v;
          return o = I(m, o, -1), h = I(m, h, 0), C = I(m, C, m.length), Object.assign(Object.assign({}, v), {}, { cursorOffset: o, rangeStart: h, rangeEnd: C });
        }
        function H(m, v) {
          let { cursorOffset: o, rangeStart: h, rangeEnd: C, endOfLine: S } = P(m, v), x = m.charAt(0) === _;
          if (x && (m = m.slice(1), o--, h--, C--), S === "auto" && (S = u(m)), m.includes("\r")) {
            let T = (k) => l(m.slice(0, Math.max(k, 0)), `\r
`);
            o -= T(o), h -= T(h), C -= T(C), m = p(m);
          }
          return { hasBOM: x, text: m, options: P(m, Object.assign(Object.assign({}, v), {}, { cursorOffset: o, rangeStart: h, rangeEnd: C, endOfLine: S })) };
        }
        function f(m, v) {
          let o = c.resolveParser(v);
          return !o.hasPragma || o.hasPragma(m);
        }
        function b(m, v) {
          let { hasBOM: o, text: h, options: C } = H(m, d(v));
          if (C.rangeStart >= C.rangeEnd && h !== "" || C.requirePragma && !f(h, C))
            return { formatted: m, cursorOffset: v.cursorOffset, comments: [] };
          let S;
          return C.rangeStart > 0 || C.rangeEnd < h.length ? S = N(h, C) : (!C.requirePragma && C.insertPragma && C.printer.insertPragma && !f(h, C) && (h = C.printer.insertPragma(h)), S = A(h, C)), o && (S.formatted = _ + S.formatted, S.cursorOffset >= 0 && S.cursorOffset++), S;
        }
        r.exports = { formatWithCursor: b, parse(m, v, o) {
          let { text: h, options: C } = H(m, d(v)), S = c.parse(h, C);
          return o && (S.ast = y(S.ast, C)), S;
        }, formatAST(m, v) {
          v = d(v);
          let o = D(m, v);
          return s(o, v);
        }, formatDoc(m, v) {
          return b(a(m), Object.assign(Object.assign({}, v), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(m, v) {
          v = d(v);
          let { ast: o, text: h } = c.parse(m, v);
          return F(h, o, v), D(o, v);
        }, printDocToString(m, v) {
          return s(m, d(v));
        } };
      } }), Um = Z({ "src/common/util-shared.js"(e, r) {
        ne();
        var { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: d, skipEverythingButNewLine: y, skipInlineComment: g, skipTrailingComment: c, hasNewline: D, hasNewlineInRange: E, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: F, isPreviousLineEmpty: A, getNextNonSpaceNonCommentCharacterIndex: N, makeString: I, addLeadingComment: P, addDanglingComment: H, addTrailingComment: f } = Ue();
        r.exports = { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: d, skipEverythingButNewLine: y, skipInlineComment: g, skipTrailingComment: c, hasNewline: D, hasNewlineInRange: E, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: F, isPreviousLineEmpty: A, getNextNonSpaceNonCommentCharacterIndex: N, makeString: I, addLeadingComment: P, addDanglingComment: H, addTrailingComment: f };
      } }), _t = Z({ "src/utils/create-language.js"(e, r) {
        ne(), r.exports = function(t, s) {
          let { languageId: a } = t, n = Hn(t, CD);
          return Object.assign(Object.assign({ linguistLanguageId: a }, n), s(t));
        };
      } }), Jm = Z({ "node_modules/esutils/lib/ast.js"(e, r) {
        ne(), function() {
          function t(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return true;
            }
            return false;
          }
          function s(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return true;
            }
            return false;
          }
          function a(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return true;
            }
            return false;
          }
          function n(l) {
            return a(l) || l != null && l.type === "FunctionDeclaration";
          }
          function u(l) {
            switch (l.type) {
              case "IfStatement":
                return l.alternate != null ? l.alternate : l.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return l.body;
            }
            return null;
          }
          function i(l) {
            var p;
            if (l.type !== "IfStatement" || l.alternate == null)
              return false;
            p = l.consequent;
            do {
              if (p.type === "IfStatement" && p.alternate == null)
                return true;
              p = u(p);
            } while (p);
            return false;
          }
          r.exports = { isExpression: t, isStatement: a, isIterationStatement: s, isSourceElement: n, isProblematicIfStatement: i, trailingStatement: u };
        }();
      } }), so = Z({ "node_modules/esutils/lib/code.js"(e, r) {
        ne(), function() {
          var t, s, a, n, u, i;
          s = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function l(F) {
            return 48 <= F && F <= 57;
          }
          function p(F) {
            return 48 <= F && F <= 57 || 97 <= F && F <= 102 || 65 <= F && F <= 70;
          }
          function d(F) {
            return F >= 48 && F <= 55;
          }
          a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function y(F) {
            return F === 32 || F === 9 || F === 11 || F === 12 || F === 160 || F >= 5760 && a.indexOf(F) >= 0;
          }
          function g(F) {
            return F === 10 || F === 13 || F === 8232 || F === 8233;
          }
          function c(F) {
            if (F <= 65535)
              return String.fromCharCode(F);
            var A = String.fromCharCode(Math.floor((F - 65536) / 1024) + 55296), N = String.fromCharCode((F - 65536) % 1024 + 56320);
            return A + N;
          }
          for (n = new Array(128), i = 0; i < 128; ++i)
            n[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
          for (u = new Array(128), i = 0; i < 128; ++i)
            u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
          function D(F) {
            return F < 128 ? n[F] : s.NonAsciiIdentifierStart.test(c(F));
          }
          function E(F) {
            return F < 128 ? u[F] : s.NonAsciiIdentifierPart.test(c(F));
          }
          function _(F) {
            return F < 128 ? n[F] : t.NonAsciiIdentifierStart.test(c(F));
          }
          function w(F) {
            return F < 128 ? u[F] : t.NonAsciiIdentifierPart.test(c(F));
          }
          r.exports = { isDecimalDigit: l, isHexDigit: p, isOctalDigit: d, isWhiteSpace: y, isLineTerminator: g, isIdentifierStartES5: D, isIdentifierPartES5: E, isIdentifierStartES6: _, isIdentifierPartES6: w };
        }();
      } }), zm = Z({ "node_modules/esutils/lib/keyword.js"(e, r) {
        ne(), function() {
          var t = so();
          function s(D) {
            switch (D) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return true;
              default:
                return false;
            }
          }
          function a(D, E) {
            return !E && D === "yield" ? false : n(D, E);
          }
          function n(D, E) {
            if (E && s(D))
              return true;
            switch (D.length) {
              case 2:
                return D === "if" || D === "in" || D === "do";
              case 3:
                return D === "var" || D === "for" || D === "new" || D === "try";
              case 4:
                return D === "this" || D === "else" || D === "case" || D === "void" || D === "with" || D === "enum";
              case 5:
                return D === "while" || D === "break" || D === "catch" || D === "throw" || D === "const" || D === "yield" || D === "class" || D === "super";
              case 6:
                return D === "return" || D === "typeof" || D === "delete" || D === "switch" || D === "export" || D === "import";
              case 7:
                return D === "default" || D === "finally" || D === "extends";
              case 8:
                return D === "function" || D === "continue" || D === "debugger";
              case 10:
                return D === "instanceof";
              default:
                return false;
            }
          }
          function u(D, E) {
            return D === "null" || D === "true" || D === "false" || a(D, E);
          }
          function i(D, E) {
            return D === "null" || D === "true" || D === "false" || n(D, E);
          }
          function l(D) {
            return D === "eval" || D === "arguments";
          }
          function p(D) {
            var E, _, w;
            if (D.length === 0 || (w = D.charCodeAt(0), !t.isIdentifierStartES5(w)))
              return false;
            for (E = 1, _ = D.length; E < _; ++E)
              if (w = D.charCodeAt(E), !t.isIdentifierPartES5(w))
                return false;
            return true;
          }
          function d(D, E) {
            return (D - 55296) * 1024 + (E - 56320) + 65536;
          }
          function y(D) {
            var E, _, w, F, A;
            if (D.length === 0)
              return false;
            for (A = t.isIdentifierStartES6, E = 0, _ = D.length; E < _; ++E) {
              if (w = D.charCodeAt(E), 55296 <= w && w <= 56319) {
                if (++E, E >= _ || (F = D.charCodeAt(E), !(56320 <= F && F <= 57343)))
                  return false;
                w = d(w, F);
              }
              if (!A(w))
                return false;
              A = t.isIdentifierPartES6;
            }
            return true;
          }
          function g(D, E) {
            return p(D) && !u(D, E);
          }
          function c(D, E) {
            return y(D) && !i(D, E);
          }
          r.exports = { isKeywordES5: a, isKeywordES6: n, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: l, isIdentifierNameES5: p, isIdentifierNameES6: y, isIdentifierES5: g, isIdentifierES6: c };
        }();
      } }), Xm = Z({ "node_modules/esutils/lib/utils.js"(e) {
        ne(), function() {
          e.ast = Jm(), e.code = so(), e.keyword = zm();
        }();
      } }), Ot = Z({ "src/language-js/utils/is-block-comment.js"(e, r) {
        ne();
        var t = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), s = (a) => t.has(a == null ? void 0 : a.type);
        r.exports = s;
      } }), Km = Z({ "src/language-js/utils/is-node-matches.js"(e, r) {
        ne();
        function t(a, n) {
          let u = n.split(".");
          for (let i = u.length - 1; i >= 0; i--) {
            let l = u[i];
            if (i === 0)
              return a.type === "Identifier" && a.name === l;
            if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== l)
              return false;
            a = a.object;
          }
        }
        function s(a, n) {
          return n.some((u) => t(a, u));
        }
        r.exports = s;
      } }), Ke = Z({ "src/language-js/utils/index.js"(e, r) {
        ne();
        var t = Xm().keyword.isIdentifierNameES5, { getLast: s, hasNewline: a, skipWhitespace: n, isNonEmptyArray: u, isNextLineEmptyAfterIndex: i, getStringWidth: l } = Ue(), { locStart: p, locEnd: d, hasSameLocStart: y } = ut(), g = Ot(), c = Km(), D = "(?:(?=.)\\s)", E = new RegExp(`^${D}*:`), _ = new RegExp(`^${D}*::`);
        function w(O) {
          var me, Pe;
          return ((me = O.extra) === null || me === void 0 ? void 0 : me.parenthesized) && g((Pe = O.trailingComments) === null || Pe === void 0 ? void 0 : Pe[0]) && E.test(O.trailingComments[0].value);
        }
        function F(O) {
          let me = O == null ? void 0 : O[0];
          return g(me) && _.test(me.value);
        }
        function A(O, me) {
          if (!O || typeof O != "object")
            return false;
          if (Array.isArray(O))
            return O.some((He) => A(He, me));
          let Pe = me(O);
          return typeof Pe == "boolean" ? Pe : Object.values(O).some((He) => A(He, me));
        }
        function N(O) {
          return O.type === "AssignmentExpression" || O.type === "BinaryExpression" || O.type === "LogicalExpression" || O.type === "NGPipeExpression" || O.type === "ConditionalExpression" || de(O) || ie(O) || O.type === "SequenceExpression" || O.type === "TaggedTemplateExpression" || O.type === "BindExpression" || O.type === "UpdateExpression" && !O.prefix || st(O) || O.type === "TSNonNullExpression";
        }
        function I(O) {
          var me, Pe, He, Ge, it, Qe;
          return O.expressions ? O.expressions[0] : (me = (Pe = (He = (Ge = (it = (Qe = O.left) !== null && Qe !== void 0 ? Qe : O.test) !== null && it !== void 0 ? it : O.callee) !== null && Ge !== void 0 ? Ge : O.object) !== null && He !== void 0 ? He : O.tag) !== null && Pe !== void 0 ? Pe : O.argument) !== null && me !== void 0 ? me : O.expression;
        }
        function P(O, me) {
          if (me.expressions)
            return ["expressions", 0];
          if (me.left)
            return ["left"];
          if (me.test)
            return ["test"];
          if (me.object)
            return ["object"];
          if (me.callee)
            return ["callee"];
          if (me.tag)
            return ["tag"];
          if (me.argument)
            return ["argument"];
          if (me.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function H(O) {
          return O = new Set(O), (me) => O.has(me == null ? void 0 : me.type);
        }
        var f = H(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), b = H(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function m(O) {
          let me = O.getParentNode();
          return O.getName() === "declaration" && b(me) ? me : null;
        }
        var v = H(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function o(O) {
          return O.type === "NumericLiteral" || O.type === "Literal" && typeof O.value == "number";
        }
        function h(O) {
          return O.type === "UnaryExpression" && (O.operator === "+" || O.operator === "-") && o(O.argument);
        }
        function C(O) {
          return O.type === "StringLiteral" || O.type === "Literal" && typeof O.value == "string";
        }
        var S = H(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), x = H(["FunctionExpression", "ArrowFunctionExpression"]);
        function T(O) {
          return O.type === "FunctionExpression" || O.type === "ArrowFunctionExpression" && O.body.type === "BlockStatement";
        }
        function k(O) {
          return de(O) && O.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O.callee.name);
        }
        var M = H(["JSXElement", "JSXFragment"]);
        function R(O, me) {
          if (O.parentParser !== "markdown" && O.parentParser !== "mdx")
            return false;
          let Pe = me.getNode();
          if (!Pe.expression || !M(Pe.expression))
            return false;
          let He = me.getParentNode();
          return He.type === "Program" && He.body.length === 1;
        }
        function q(O) {
          return O.kind === "get" || O.kind === "set";
        }
        function U(O) {
          return q(O) || y(O, O.value);
        }
        function L(O) {
          return (O.type === "ObjectTypeProperty" || O.type === "ObjectTypeInternalSlot") && O.value.type === "FunctionTypeAnnotation" && !O.static && !U(O);
        }
        function Y(O) {
          return (O.type === "TypeAnnotation" || O.type === "TSTypeAnnotation") && O.typeAnnotation.type === "FunctionTypeAnnotation" && !O.static && !y(O, O.typeAnnotation);
        }
        var V = H(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function j(O) {
          return ie(O) || O.type === "BindExpression" && Boolean(O.object);
        }
        var K = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function se(O) {
          return O ? !!((O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference") && !O.typeParameters || K.has(O.type)) : false;
        }
        function Q(O) {
          let me = /^(?:before|after)(?:Each|All)$/;
          return O.callee.type === "Identifier" && me.test(O.callee.name) && O.arguments.length === 1;
        }
        var ce = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function W(O) {
          return c(O, ce);
        }
        function X(O, me) {
          if (O.type !== "CallExpression")
            return false;
          if (O.arguments.length === 1) {
            if (k(O) && me && X(me))
              return x(O.arguments[0]);
            if (Q(O))
              return k(O.arguments[0]);
          } else if ((O.arguments.length === 2 || O.arguments.length === 3) && (O.arguments[0].type === "TemplateLiteral" || C(O.arguments[0])) && W(O.callee))
            return O.arguments[2] && !o(O.arguments[2]) ? false : (O.arguments.length === 2 ? x(O.arguments[1]) : T(O.arguments[1]) && he(O.arguments[1]).length <= 1) || k(O.arguments[1]);
          return false;
        }
        var de = H(["CallExpression", "OptionalCallExpression"]), ie = H(["MemberExpression", "OptionalMemberExpression"]);
        function Ee(O) {
          let me = "expressions";
          O.type === "TSTemplateLiteralType" && (me = "types");
          let Pe = O[me];
          return Pe.length === 0 ? false : Pe.every((He) => {
            if (Re(He))
              return false;
            if (He.type === "Identifier" || He.type === "ThisExpression")
              return true;
            if (ie(He)) {
              let Ge = He;
              for (; ie(Ge); )
                if (Ge.property.type !== "Identifier" && Ge.property.type !== "Literal" && Ge.property.type !== "StringLiteral" && Ge.property.type !== "NumericLiteral" || (Ge = Ge.object, Re(Ge)))
                  return false;
              return Ge.type === "Identifier" || Ge.type === "ThisExpression";
            }
            return false;
          });
        }
        function z(O, me) {
          return O === "+" || O === "-" ? O + me : me;
        }
        function ue(O, me) {
          let Pe = p(me), He = n(O, d(me));
          return He !== false && O.slice(Pe, Pe + 2) === "/*" && O.slice(He, He + 2) === "*/";
        }
        function J(O, me) {
          return M(me) ? je(me) : Re(me, Be.Leading, (Pe) => a(O, d(Pe)));
        }
        function le(O, me) {
          return me.parser !== "json" && C(O.key) && De(O.key).slice(1, -1) === O.key.value && (t(O.key.value) && !(me.parser === "babel-ts" && O.type === "ClassProperty" || me.parser === "typescript" && O.type === "PropertyDefinition") || ge(O.key.value) && String(Number(O.key.value)) === O.key.value && (me.parser === "babel" || me.parser === "acorn" || me.parser === "espree" || me.parser === "meriyah" || me.parser === "__babel_estree"));
        }
        function ge(O) {
          return /^(?:\d+|\d+\.\d+)$/.test(O);
        }
        function pe(O, me) {
          let Pe = /^[fx]?(?:describe|it|test)$/;
          return me.type === "TaggedTemplateExpression" && me.quasi === O && me.tag.type === "MemberExpression" && me.tag.property.type === "Identifier" && me.tag.property.name === "each" && (me.tag.object.type === "Identifier" && Pe.test(me.tag.object.name) || me.tag.object.type === "MemberExpression" && me.tag.object.property.type === "Identifier" && (me.tag.object.property.name === "only" || me.tag.object.property.name === "skip") && me.tag.object.object.type === "Identifier" && Pe.test(me.tag.object.object.name));
        }
        function Ae(O) {
          return O.quasis.some((me) => me.value.raw.includes(`
`));
        }
        function Ce(O, me) {
          return (O.type === "TemplateLiteral" && Ae(O) || O.type === "TaggedTemplateExpression" && Ae(O.quasi)) && !a(me, p(O), { backwards: true });
        }
        function Oe(O) {
          if (!Re(O))
            return false;
          let me = s(ae(O, Be.Dangling));
          return me && !g(me);
        }
        function Ie(O) {
          if (O.length <= 1)
            return false;
          let me = 0;
          for (let Pe of O)
            if (x(Pe)) {
              if (me += 1, me > 1)
                return true;
            } else if (de(Pe)) {
              for (let He of Pe.arguments)
                if (x(He))
                  return true;
            }
          return false;
        }
        function we(O) {
          let me = O.getValue(), Pe = O.getParentNode();
          return de(me) && de(Pe) && Pe.callee === me && me.arguments.length > Pe.arguments.length && Pe.arguments.length > 0;
        }
        function _e(O, me) {
          if (me >= 2)
            return false;
          let Pe = (Qe) => _e(Qe, me + 1), He = O.type === "Literal" && "regex" in O && O.regex.pattern || O.type === "RegExpLiteral" && O.pattern;
          if (He && l(He) > 5)
            return false;
          if (O.type === "Literal" || O.type === "BigIntLiteral" || O.type === "DecimalLiteral" || O.type === "BooleanLiteral" || O.type === "NullLiteral" || O.type === "NumericLiteral" || O.type === "RegExpLiteral" || O.type === "StringLiteral" || O.type === "Identifier" || O.type === "ThisExpression" || O.type === "Super" || O.type === "PrivateName" || O.type === "PrivateIdentifier" || O.type === "ArgumentPlaceholder" || O.type === "Import")
            return true;
          if (O.type === "TemplateLiteral")
            return O.quasis.every((Qe) => !Qe.value.raw.includes(`
`)) && O.expressions.every(Pe);
          if (O.type === "ObjectExpression")
            return O.properties.every((Qe) => !Qe.computed && (Qe.shorthand || Qe.value && Pe(Qe.value)));
          if (O.type === "ArrayExpression")
            return O.elements.every((Qe) => Qe === null || Pe(Qe));
          if (tt(O))
            return (O.type === "ImportExpression" || _e(O.callee, me)) && Ye(O).every(Pe);
          if (ie(O))
            return _e(O.object, me) && _e(O.property, me);
          let Ge = { "!": true, "-": true, "+": true, "~": true };
          if (O.type === "UnaryExpression" && Ge[O.operator])
            return _e(O.argument, me);
          let it = { "++": true, "--": true };
          return O.type === "UpdateExpression" && it[O.operator] ? _e(O.argument, me) : O.type === "TSNonNullExpression" ? _e(O.expression, me) : false;
        }
        function De(O) {
          var me, Pe;
          return (me = (Pe = O.extra) === null || Pe === void 0 ? void 0 : Pe.raw) !== null && me !== void 0 ? me : O.raw;
        }
        function G(O) {
          return O;
        }
        function oe(O) {
          return O.filepath && /\.tsx$/i.test(O.filepath);
        }
        function ee(O) {
          let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return O.trailingComma === "es5" && me === "es5" || O.trailingComma === "all" && (me === "all" || me === "es5");
        }
        function re(O, me) {
          switch (O.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression":
              return re(O.left, me);
            case "MemberExpression":
            case "OptionalMemberExpression":
              return re(O.object, me);
            case "TaggedTemplateExpression":
              return O.tag.type === "FunctionExpression" ? false : re(O.tag, me);
            case "CallExpression":
            case "OptionalCallExpression":
              return O.callee.type === "FunctionExpression" ? false : re(O.callee, me);
            case "ConditionalExpression":
              return re(O.test, me);
            case "UpdateExpression":
              return !O.prefix && re(O.argument, me);
            case "BindExpression":
              return O.object && re(O.object, me);
            case "SequenceExpression":
              return re(O.expressions[0], me);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return re(O.expression, me);
            default:
              return me(O);
          }
        }
        var be = { "==": true, "!=": true, "===": true, "!==": true }, ve = { "*": true, "/": true, "%": true }, fe = { ">>": true, ">>>": true, "<<": true };
        function B(O, me) {
          return !(te(me) !== te(O) || O === "**" || be[O] && be[me] || me === "%" && ve[O] || O === "%" && ve[me] || me !== O && ve[me] && ve[O] || fe[O] && fe[me]);
        }
        var $ = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((O, me) => O.map((Pe) => [Pe, me])));
        function te(O) {
          return $.get(O);
        }
        function ye(O) {
          return Boolean(fe[O]) || O === "|" || O === "^" || O === "&";
        }
        function Fe(O) {
          var me;
          if (O.rest)
            return true;
          let Pe = he(O);
          return ((me = s(Pe)) === null || me === void 0 ? void 0 : me.type) === "RestElement";
        }
        var Ne = /* @__PURE__ */ new WeakMap();
        function he(O) {
          if (Ne.has(O))
            return Ne.get(O);
          let me = [];
          return O.this && me.push(O.this), Array.isArray(O.parameters) ? me.push(...O.parameters) : Array.isArray(O.params) && me.push(...O.params), O.rest && me.push(O.rest), Ne.set(O, me), me;
        }
        function ze(O, me) {
          let Pe = O.getValue(), He = 0, Ge = (it) => me(it, He++);
          Pe.this && O.call(Ge, "this"), Array.isArray(Pe.parameters) ? O.each(Ge, "parameters") : Array.isArray(Pe.params) && O.each(Ge, "params"), Pe.rest && O.call(Ge, "rest");
        }
        var Te = /* @__PURE__ */ new WeakMap();
        function Ye(O) {
          if (Te.has(O))
            return Te.get(O);
          let me = O.arguments;
          return O.type === "ImportExpression" && (me = [O.source], O.attributes && me.push(O.attributes)), Te.set(O, me), me;
        }
        function Se(O, me) {
          let Pe = O.getValue();
          Pe.type === "ImportExpression" ? (O.call((He) => me(He, 0), "source"), Pe.attributes && O.call((He) => me(He, 1), "attributes")) : O.each(me, "arguments");
        }
        function ke(O) {
          return O.value.trim() === "prettier-ignore" && !O.unignore;
        }
        function je(O) {
          return O && (O.prettierIgnore || Re(O, Be.PrettierIgnore));
        }
        function Je(O) {
          let me = O.getValue();
          return je(me);
        }
        var Be = { Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8 }, qe = (O, me) => {
          if (typeof O == "function" && (me = O, O = 0), O || me)
            return (Pe, He, Ge) => !(O & Be.Leading && !Pe.leading || O & Be.Trailing && !Pe.trailing || O & Be.Dangling && (Pe.leading || Pe.trailing) || O & Be.Block && !g(Pe) || O & Be.Line && !f(Pe) || O & Be.First && He !== 0 || O & Be.Last && He !== Ge.length - 1 || O & Be.PrettierIgnore && !ke(Pe) || me && !me(Pe));
        };
        function Re(O, me, Pe) {
          if (!u(O == null ? void 0 : O.comments))
            return false;
          let He = qe(me, Pe);
          return He ? O.comments.some(He) : true;
        }
        function ae(O, me, Pe) {
          if (!Array.isArray(O == null ? void 0 : O.comments))
            return [];
          let He = qe(me, Pe);
          return He ? O.comments.filter(He) : O.comments;
        }
        var nt = (O, me) => {
          let { originalText: Pe } = me;
          return i(Pe, d(O));
        };
        function tt(O) {
          return de(O) || O.type === "NewExpression" || O.type === "ImportExpression";
        }
        function Ve(O) {
          return O && (O.type === "ObjectProperty" || O.type === "Property" && !O.method && O.kind === "init");
        }
        function We(O) {
          return Boolean(O.__isUsingHackPipeline);
        }
        var Xe = Symbol("ifWithoutBlockAndSameLineComment");
        function st(O) {
          return O.type === "TSAsExpression" || O.type === "TSSatisfiesExpression";
        }
        r.exports = { getFunctionParameters: he, iterateFunctionParametersPath: ze, getCallArguments: Ye, iterateCallArgumentsPath: Se, hasRestParameter: Fe, getLeftSide: I, getLeftSidePathName: P, getParentExportDeclaration: m, getTypeScriptMappedTypeModifier: z, hasFlowAnnotationComment: F, hasFlowShorthandAnnotationComment: w, hasLeadingOwnLineComment: J, hasNakedLeftSide: N, hasNode: A, hasIgnoreComment: Je, hasNodeIgnoreComment: je, identity: G, isBinaryish: V, isCallLikeExpression: tt, isEnabledHackPipeline: We, isLineComment: f, isPrettierIgnoreComment: ke, isCallExpression: de, isMemberExpression: ie, isExportDeclaration: b, isFlowAnnotationComment: ue, isFunctionCompositionArgs: Ie, isFunctionNotation: U, isFunctionOrArrowExpression: x, isGetterOrSetter: q, isJestEachTemplateLiteral: pe, isJsxNode: M, isLiteral: v, isLongCurriedCallExpression: we, isSimpleCallArgument: _e, isMemberish: j, isNumericLiteral: o, isSignedNumericLiteral: h, isObjectProperty: Ve, isObjectType: S, isObjectTypePropertyAFunction: L, isSimpleType: se, isSimpleNumber: ge, isSimpleTemplateLiteral: Ee, isStringLiteral: C, isStringPropSafeToUnquote: le, isTemplateOnItsOwnLine: Ce, isTestCall: X, isTheOnlyJsxElementInMarkdown: R, isTSXFile: oe, isTypeAnnotationAFunction: Y, isNextLineEmpty: nt, needsHardlineAfterDanglingComment: Oe, rawText: De, shouldPrintComma: ee, isBitwiseOperator: ye, shouldFlatten: B, startsWithNoLookaheadToken: re, getPrecedence: te, hasComment: Re, getComments: ae, CommentCheckFlags: Be, markerForIfWithoutBlockAndSameLineComment: Xe, isTSTypeExpression: st };
      } }), jt = Z({ "src/language-js/print/template-literal.js"(e, r) {
        ne();
        var t = lt(), { getStringWidth: s, getIndentSize: a } = Ue(), { builders: { join: n, hardline: u, softline: i, group: l, indent: p, align: d, lineSuffixBoundary: y, addAlignmentToDoc: g }, printer: { printDocToString: c }, utils: { mapDoc: D } } = Me(), { isBinaryish: E, isJestEachTemplateLiteral: _, isSimpleTemplateLiteral: w, hasComment: F, isMemberExpression: A, isTSTypeExpression: N } = Ke();
        function I(v, o, h) {
          let C = v.getValue();
          if (C.type === "TemplateLiteral" && _(C, v.getParentNode())) {
            let R = P(v, h, o);
            if (R)
              return R;
          }
          let x = "expressions";
          C.type === "TSTemplateLiteralType" && (x = "types");
          let T = [], k = v.map(o, x), M = w(C);
          return M && (k = k.map((R) => c(R, Object.assign(Object.assign({}, h), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), T.push(y, "`"), v.each((R) => {
            let q = R.getName();
            if (T.push(o()), q < k.length) {
              let { tabWidth: U } = h, L = R.getValue(), Y = a(L.value.raw, U), V = k[q];
              if (!M) {
                let K = C[x][q];
                (F(K) || A(K) || K.type === "ConditionalExpression" || K.type === "SequenceExpression" || N(K) || E(K)) && (V = [p([i, V]), i]);
              }
              let j = Y === 0 && L.value.raw.endsWith(`
`) ? d(Number.NEGATIVE_INFINITY, V) : g(V, Y, U);
              T.push(l(["${", j, y, "}"]));
            }
          }, "quasis"), T.push("`"), T;
        }
        function P(v, o, h) {
          let C = v.getNode(), S = C.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (S.length > 1 || S.some((x) => x.length > 0)) {
            o.__inJestEach = true;
            let x = v.map(h, "expressions");
            o.__inJestEach = false;
            let T = [], k = x.map((L) => "${" + c(L, Object.assign(Object.assign({}, o), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), M = [{ hasLineBreak: false, cells: [] }];
            for (let L = 1; L < C.quasis.length; L++) {
              let Y = t(M), V = k[L - 1];
              Y.cells.push(V), V.includes(`
`) && (Y.hasLineBreak = true), C.quasis[L].value.raw.includes(`
`) && M.push({ hasLineBreak: false, cells: [] });
            }
            let R = Math.max(S.length, ...M.map((L) => L.cells.length)), q = Array.from({ length: R }).fill(0), U = [{ cells: S }, ...M.filter((L) => L.cells.length > 0)];
            for (let { cells: L } of U.filter((Y) => !Y.hasLineBreak))
              for (let [Y, V] of L.entries())
                q[Y] = Math.max(q[Y], s(V));
            return T.push(y, "`", p([u, n(u, U.map((L) => n(" | ", L.cells.map((Y, V) => L.hasLineBreak ? Y : Y + " ".repeat(q[V] - s(Y))))))]), u, "`"), T;
          }
        }
        function H(v, o) {
          let h = v.getValue(), C = o();
          return F(h) && (C = l([p([i, C]), i])), ["${", C, y, "}"];
        }
        function f(v, o) {
          return v.map((h) => H(h, o), "expressions");
        }
        function b(v, o) {
          return D(v, (h) => typeof h == "string" ? o ? h.replace(/(\\*)`/g, "$1$1\\`") : m(h) : h);
        }
        function m(v) {
          return v.replace(/([\\`]|\${)/g, "\\$1");
        }
        r.exports = { printTemplateLiteral: I, printTemplateExpressions: f, escapeTemplateCharacters: b, uncookTemplateElementValue: m };
      } }), Ym = Z({ "src/language-js/embed/markdown.js"(e, r) {
        ne();
        var { builders: { indent: t, softline: s, literalline: a, dedentToRoot: n } } = Me(), { escapeTemplateCharacters: u } = jt();
        function i(p, d, y) {
          let c = p.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (w, F) => "\\".repeat(F.length / 2) + "`"), D = l(c), E = D !== "";
          E && (c = c.replace(new RegExp(`^${D}`, "gm"), ""));
          let _ = u(y(c, { parser: "markdown", __inJsTemplate: true }, { stripTrailingHardline: true }), true);
          return ["`", E ? t([s, _]) : [a, n(_)], s, "`"];
        }
        function l(p) {
          let d = p.match(/^([^\S\n]*)\S/m);
          return d === null ? "" : d[1];
        }
        r.exports = i;
      } }), Qm = Z({ "src/language-js/embed/css.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { indent: s, hardline: a, softline: n }, utils: { mapDoc: u, replaceEndOfLine: i, cleanDoc: l } } = Me(), { printTemplateExpressions: p } = jt();
        function d(c, D, E) {
          let _ = c.getValue(), w = _.quasis.map((P) => P.value.raw), F = 0, A = w.reduce((P, H, f) => f === 0 ? H : P + "@prettier-placeholder-" + F++ + "-id" + H, ""), N = E(A, { parser: "scss" }, { stripTrailingHardline: true }), I = p(c, D);
          return y(N, _, I);
        }
        function y(c, D, E) {
          if (D.quasis.length === 1 && !D.quasis[0].value.raw.trim())
            return "``";
          let w = g(c, E);
          if (!w)
            throw new Error("Couldn't insert all the expressions");
          return ["`", s([a, w]), n, "`"];
        }
        function g(c, D) {
          if (!t(D))
            return c;
          let E = 0, _ = u(l(c), (w) => typeof w != "string" || !w.includes("@prettier-placeholder") ? w : w.split(/@prettier-placeholder-(\d+)-id/).map((F, A) => A % 2 === 0 ? i(F) : (E++, D[F])));
          return D.length === E ? _ : null;
        }
        r.exports = d;
      } }), Zm = Z({ "src/language-js/embed/graphql.js"(e, r) {
        ne();
        var { builders: { indent: t, join: s, hardline: a } } = Me(), { escapeTemplateCharacters: n, printTemplateExpressions: u } = jt();
        function i(p, d, y) {
          let g = p.getValue(), c = g.quasis.length;
          if (c === 1 && g.quasis[0].value.raw.trim() === "")
            return "``";
          let D = u(p, d), E = [];
          for (let _ = 0; _ < c; _++) {
            let w = g.quasis[_], F = _ === 0, A = _ === c - 1, N = w.value.cooked, I = N.split(`
`), P = I.length, H = D[_], f = P > 2 && I[0].trim() === "" && I[1].trim() === "", b = P > 2 && I[P - 1].trim() === "" && I[P - 2].trim() === "", m = I.every((o) => /^\s*(?:#[^\n\r]*)?$/.test(o));
            if (!A && /#[^\n\r]*$/.test(I[P - 1]))
              return null;
            let v = null;
            m ? v = l(I) : v = y(N, { parser: "graphql" }, { stripTrailingHardline: true }), v ? (v = n(v, false), !F && f && E.push(""), E.push(v), !A && b && E.push("")) : !F && !A && f && E.push(""), H && E.push(H);
          }
          return ["`", t([a, s(a, E)]), a, "`"];
        }
        function l(p) {
          let d = [], y = false, g = p.map((c) => c.trim());
          for (let [c, D] of g.entries())
            D !== "" && (g[c - 1] === "" && y ? d.push([a, D]) : d.push(D), y = true);
          return d.length === 0 ? null : s(a, d);
        }
        r.exports = i;
      } }), ed = Z({ "src/language-js/embed/html.js"(e, r) {
        ne();
        var { builders: { indent: t, line: s, hardline: a, group: n }, utils: { mapDoc: u } } = Me(), { printTemplateExpressions: i, uncookTemplateElementValue: l } = jt(), p = 0;
        function d(y, g, c, D, E) {
          let { parser: _ } = E, w = y.getValue(), F = p;
          p = p + 1 >>> 0;
          let A = (h) => `PRETTIER_HTML_PLACEHOLDER_${h}_${F}_IN_JS`, N = w.quasis.map((h, C, S) => C === S.length - 1 ? h.value.cooked : h.value.cooked + A(C)).join(""), I = i(y, g);
          if (I.length === 0 && N.trim().length === 0)
            return "``";
          let P = new RegExp(A("(\\d+)"), "g"), H = 0, f = c(N, { parser: _, __onHtmlRoot(h) {
            H = h.children.length;
          } }, { stripTrailingHardline: true }), b = u(f, (h) => {
            if (typeof h != "string")
              return h;
            let C = [], S = h.split(P);
            for (let x = 0; x < S.length; x++) {
              let T = S[x];
              if (x % 2 === 0) {
                T && (T = l(T), D.__embeddedInHtml && (T = T.replace(/<\/(script)\b/gi, "<\\/$1")), C.push(T));
                continue;
              }
              let k = Number(T);
              C.push(I[k]);
            }
            return C;
          }), m = /^\s/.test(N) ? " " : "", v = /\s$/.test(N) ? " " : "", o = D.htmlWhitespaceSensitivity === "ignore" ? a : m && v ? s : null;
          return n(o ? ["`", t([o, n(b)]), o, "`"] : ["`", m, H > 1 ? t(n(b)) : n(b), v, "`"]);
        }
        r.exports = d;
      } }), td = Z({ "src/language-js/embed.js"(e, r) {
        ne();
        var { hasComment: t, CommentCheckFlags: s, isObjectProperty: a } = Ke(), n = Ym(), u = Qm(), i = Zm(), l = ed();
        function p(f) {
          if (g(f) || _(f) || w(f) || c(f))
            return "css";
          if (N(f))
            return "graphql";
          if (P(f))
            return "html";
          if (D(f))
            return "angular";
          if (y(f))
            return "markdown";
        }
        function d(f, b, m, v) {
          let o = f.getValue();
          if (o.type !== "TemplateLiteral" || H(o))
            return;
          let h = p(f);
          if (h) {
            if (h === "markdown")
              return n(f, b, m);
            if (h === "css")
              return u(f, b, m);
            if (h === "graphql")
              return i(f, b, m);
            if (h === "html" || h === "angular")
              return l(f, b, m, v, { parser: h });
          }
        }
        function y(f) {
          let b = f.getValue(), m = f.getParentNode();
          return m && m.type === "TaggedTemplateExpression" && b.quasis.length === 1 && m.tag.type === "Identifier" && (m.tag.name === "md" || m.tag.name === "markdown");
        }
        function g(f) {
          let b = f.getValue(), m = f.getParentNode(), v = f.getParentNode(1);
          return v && b.quasis && m.type === "JSXExpressionContainer" && v.type === "JSXElement" && v.openingElement.name.name === "style" && v.openingElement.attributes.some((o) => o.name.name === "jsx") || m && m.type === "TaggedTemplateExpression" && m.tag.type === "Identifier" && m.tag.name === "css" || m && m.type === "TaggedTemplateExpression" && m.tag.type === "MemberExpression" && m.tag.object.name === "css" && (m.tag.property.name === "global" || m.tag.property.name === "resolve");
        }
        function c(f) {
          return f.match((b) => b.type === "TemplateLiteral", (b, m) => b.type === "ArrayExpression" && m === "elements", (b, m) => a(b) && b.key.type === "Identifier" && b.key.name === "styles" && m === "value", ...E);
        }
        function D(f) {
          return f.match((b) => b.type === "TemplateLiteral", (b, m) => a(b) && b.key.type === "Identifier" && b.key.name === "template" && m === "value", ...E);
        }
        var E = [(f, b) => f.type === "ObjectExpression" && b === "properties", (f, b) => f.type === "CallExpression" && f.callee.type === "Identifier" && f.callee.name === "Component" && b === "arguments", (f, b) => f.type === "Decorator" && b === "expression"];
        function _(f) {
          let b = f.getParentNode();
          if (!b || b.type !== "TaggedTemplateExpression")
            return false;
          let m = b.tag.type === "ParenthesizedExpression" ? b.tag.expression : b.tag;
          switch (m.type) {
            case "MemberExpression":
              return F(m.object) || A(m);
            case "CallExpression":
              return F(m.callee) || m.callee.type === "MemberExpression" && (m.callee.object.type === "MemberExpression" && (F(m.callee.object.object) || A(m.callee.object)) || m.callee.object.type === "CallExpression" && F(m.callee.object.callee));
            case "Identifier":
              return m.name === "css";
            default:
              return false;
          }
        }
        function w(f) {
          let b = f.getParentNode(), m = f.getParentNode(1);
          return m && b.type === "JSXExpressionContainer" && m.type === "JSXAttribute" && m.name.type === "JSXIdentifier" && m.name.name === "css";
        }
        function F(f) {
          return f.type === "Identifier" && f.name === "styled";
        }
        function A(f) {
          return /^[A-Z]/.test(f.object.name) && f.property.name === "extend";
        }
        function N(f) {
          let b = f.getValue(), m = f.getParentNode();
          return I(b, "GraphQL") || m && (m.type === "TaggedTemplateExpression" && (m.tag.type === "MemberExpression" && m.tag.object.name === "graphql" && m.tag.property.name === "experimental" || m.tag.type === "Identifier" && (m.tag.name === "gql" || m.tag.name === "graphql")) || m.type === "CallExpression" && m.callee.type === "Identifier" && m.callee.name === "graphql");
        }
        function I(f, b) {
          return t(f, s.Block | s.Leading, (m) => {
            let { value: v } = m;
            return v === ` ${b} `;
          });
        }
        function P(f) {
          return I(f.getValue(), "HTML") || f.match((b) => b.type === "TemplateLiteral", (b, m) => b.type === "TaggedTemplateExpression" && b.tag.type === "Identifier" && b.tag.name === "html" && m === "quasi");
        }
        function H(f) {
          let { quasis: b } = f;
          return b.some((m) => {
            let { value: { cooked: v } } = m;
            return v === null;
          });
        }
        r.exports = d;
      } }), rd = Z({ "src/language-js/clean.js"(e, r) {
        ne();
        var t = Ot(), s = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = (u) => {
          for (let i of u.quasis)
            delete i.value;
        };
        function n(u, i, l) {
          if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
            return null;
          if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some((y) => y.name.name === "jsx"))
            for (let { type: y, expression: g } of i.children)
              y === "JSXExpressionContainer" && g.type === "TemplateLiteral" && a(g);
          u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let p = u.expression || u.callee;
          if (u.type === "Decorator" && p.type === "CallExpression" && p.callee.name === "Component" && p.arguments.length === 1) {
            let y = u.expression.arguments[0].properties;
            for (let [g, c] of i.expression.arguments[0].properties.entries())
              switch (y[g].key.name) {
                case "styles":
                  c.value.type === "ArrayExpression" && a(c.value.elements[0]);
                  break;
                case "template":
                  c.value.type === "TemplateLiteral" && a(c.value);
                  break;
              }
          }
          if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
            var d;
            (!((d = u.leadingComments) === null || d === void 0) && d.some((g) => t(g) && ["GraphQL", "HTML"].some((c) => g.value === ` ${c} `)) || l.type === "CallExpression" && l.callee.name === "graphql" || !u.leadingComments) && a(i);
          }
          if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
            return i.types[0];
        }
        n.ignoredProperties = s, r.exports = n;
      } }), io = {};
      Kt(io, { EOL: () => Wn, arch: () => nd, cpus: () => Do, default: () => vo, endianness: () => ao, freemem: () => po, getNetworkInterfaces: () => ho, hostname: () => oo, loadavg: () => lo, networkInterfaces: () => yo, platform: () => ud, release: () => go, tmpDir: () => $n, tmpdir: () => Vn, totalmem: () => fo, type: () => mo, uptime: () => co });
      function ao() {
        if (typeof Tr > "u") {
          var e = new ArrayBuffer(2), r = new Uint8Array(e), t = new Uint16Array(e);
          if (r[0] = 1, r[1] = 2, t[0] === 258)
            Tr = "BE";
          else if (t[0] === 513)
            Tr = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Tr;
      }
      function oo() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function lo() {
        return [];
      }
      function co() {
        return 0;
      }
      function po() {
        return Number.MAX_VALUE;
      }
      function fo() {
        return Number.MAX_VALUE;
      }
      function Do() {
        return [];
      }
      function mo() {
        return "Browser";
      }
      function go() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function yo() {
      }
      function ho() {
      }
      function nd() {
        return "javascript";
      }
      function ud() {
        return "browser";
      }
      function $n() {
        return "/tmp";
      }
      var Tr, Vn, Wn, vo, sd = ht({ "node-modules-polyfills:os"() {
        ne(), Vn = $n, Wn = `
`, vo = { EOL: Wn, tmpdir: Vn, tmpDir: $n, networkInterfaces: yo, getNetworkInterfaces: ho, release: go, type: mo, cpus: Do, totalmem: fo, freemem: po, uptime: co, loadavg: lo, hostname: oo, endianness: ao };
      } }), id = Z({ "node-modules-polyfills-commonjs:os"(e, r) {
        ne();
        var t = (sd(), ft(io));
        if (t && t.default) {
          r.exports = t.default;
          for (let s in t)
            r.exports[s] = t[s];
        } else
          t && (r.exports = t);
      } }), ad = Z({ "node_modules/detect-newline/index.js"(e, r) {
        ne();
        var t = (s) => {
          if (typeof s != "string")
            throw new TypeError("Expected a string");
          let a = s.match(/(?:\r?\n)/g) || [];
          if (a.length === 0)
            return;
          let n = a.filter((i) => i === `\r
`).length, u = a.length - n;
          return n > u ? `\r
` : `
`;
        };
        r.exports = t, r.exports.graceful = (s) => typeof s == "string" && t(s) || `
`;
      } }), od = Z({ "node_modules/jest-docblock/build/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.extract = c, e.parse = E, e.parseWithComments = _, e.print = w, e.strip = D;
        function r() {
          let A = id();
          return r = function() {
            return A;
          }, A;
        }
        function t() {
          let A = s(ad());
          return t = function() {
            return A;
          }, A;
        }
        function s(A) {
          return A && A.__esModule ? A : { default: A };
        }
        var a = /\*\/$/, n = /^\/\*\*?/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, l = /^(\r?\n)+/, p = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, d = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, y = /(\r?\n|^) *\* ?/g, g = [];
        function c(A) {
          let N = A.match(u);
          return N ? N[0].trimLeft() : "";
        }
        function D(A) {
          let N = A.match(u);
          return N && N[0] ? A.substring(N[0].length) : A;
        }
        function E(A) {
          return _(A).pragmas;
        }
        function _(A) {
          let N = (0, t().default)(A) || r().EOL;
          A = A.replace(n, "").replace(a, "").replace(y, "$1");
          let I = "";
          for (; I !== A; )
            I = A, A = A.replace(p, `${N}$1 $2${N}`);
          A = A.replace(l, "").trimRight();
          let P = /* @__PURE__ */ Object.create(null), H = A.replace(d, "").replace(l, "").trimRight(), f;
          for (; f = d.exec(A); ) {
            let b = f[2].replace(i, "");
            typeof P[f[1]] == "string" || Array.isArray(P[f[1]]) ? P[f[1]] = g.concat(P[f[1]], b) : P[f[1]] = b;
          }
          return { comments: H, pragmas: P };
        }
        function w(A) {
          let { comments: N = "", pragmas: I = {} } = A, P = (0, t().default)(N) || r().EOL, H = "/**", f = " *", b = " */", m = Object.keys(I), v = m.map((h) => F(h, I[h])).reduce((h, C) => h.concat(C), []).map((h) => `${f} ${h}${P}`).join("");
          if (!N) {
            if (m.length === 0)
              return "";
            if (m.length === 1 && !Array.isArray(I[m[0]])) {
              let h = I[m[0]];
              return `${H} ${F(m[0], h)[0]}${b}`;
            }
          }
          let o = N.split(P).map((h) => `${f} ${h}`).join(P) + P;
          return H + P + (N ? o : "") + (N && m.length ? f + P : "") + v + b;
        }
        function F(A, N) {
          return g.concat(N).map((I) => `@${A} ${I}`.trim());
        }
      } }), ld = Z({ "src/language-js/utils/get-shebang.js"(e, r) {
        ne();
        function t(s) {
          if (!s.startsWith("#!"))
            return "";
          let a = s.indexOf(`
`);
          return a === -1 ? s : s.slice(0, a);
        }
        r.exports = t;
      } }), Co = Z({ "src/language-js/pragma.js"(e, r) {
        ne();
        var { parseWithComments: t, strip: s, extract: a, print: n } = od(), { normalizeEndOfLine: u } = Jn(), i = ld();
        function l(y) {
          let g = i(y);
          g && (y = y.slice(g.length + 1));
          let c = a(y), { pragmas: D, comments: E } = t(c);
          return { shebang: g, text: y, pragmas: D, comments: E };
        }
        function p(y) {
          let g = Object.keys(l(y).pragmas);
          return g.includes("prettier") || g.includes("format");
        }
        function d(y) {
          let { shebang: g, text: c, pragmas: D, comments: E } = l(y), _ = s(c), w = n({ pragmas: Object.assign({ format: "" }, D), comments: E.trimStart() });
          return (g ? `${g}
` : "") + u(w) + (_.startsWith(`
`) ? `
` : `

`) + _;
        }
        r.exports = { hasPragma: p, insertPragma: d };
      } }), Eo = Z({ "src/language-js/comments.js"(e, r) {
        ne();
        var { getLast: t, hasNewline: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: a, getNextNonSpaceNonCommentCharacter: n, hasNewlineInRange: u, addLeadingComment: i, addTrailingComment: l, addDanglingComment: p, getNextNonSpaceNonCommentCharacterIndex: d, isNonEmptyArray: y } = Ue(), { getFunctionParameters: g, isPrettierIgnoreComment: c, isJsxNode: D, hasFlowShorthandAnnotationComment: E, hasFlowAnnotationComment: _, hasIgnoreComment: w, isCallLikeExpression: F, getCallArguments: A, isCallExpression: N, isMemberExpression: I, isObjectProperty: P, isLineComment: H, getComments: f, CommentCheckFlags: b, markerForIfWithoutBlockAndSameLineComment: m } = Ke(), { locStart: v, locEnd: o } = ut(), h = Ot();
        function C(fe) {
          return [De, ie, L, R, q, U, K, pe, J, ge, Ae, Ce, Q, Ee, z].some((B) => B(fe));
        }
        function S(fe) {
          return [M, ie, Y, Ae, R, q, U, K, Ee, ue, le, ge, we, z, oe].some((B) => B(fe));
        }
        function x(fe) {
          return [De, R, q, V, de, Q, ge, X, W, G, z, _e].some((B) => B(fe));
        }
        function T(fe, B) {
          let $ = (fe.body || fe.properties).find((te) => {
            let { type: ye } = te;
            return ye !== "EmptyStatement";
          });
          $ ? i($, B) : p(fe, B);
        }
        function k(fe, B) {
          fe.type === "BlockStatement" ? T(fe, B) : i(fe, B);
        }
        function M(fe) {
          let { comment: B, followingNode: $ } = fe;
          return $ && be(B) ? (i($, B), true) : false;
        }
        function R(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye, text: Fe } = fe;
          if ((te == null ? void 0 : te.type) !== "IfStatement" || !ye)
            return false;
          if (n(Fe, B, o) === ")")
            return l($, B), true;
          if ($ === te.consequent && ye === te.alternate) {
            if ($.type === "BlockStatement")
              l($, B);
            else {
              let he = B.type === "SingleLine" || B.loc.start.line === B.loc.end.line, ze = B.loc.start.line === $.loc.start.line;
              he && ze ? p($, B, m) : p(te, B);
            }
            return true;
          }
          return ye.type === "BlockStatement" ? (T(ye, B), true) : ye.type === "IfStatement" ? (k(ye.consequent, B), true) : te.consequent === ye ? (i(ye, B), true) : false;
        }
        function q(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye, text: Fe } = fe;
          return (te == null ? void 0 : te.type) !== "WhileStatement" || !ye ? false : n(Fe, B, o) === ")" ? (l($, B), true) : ye.type === "BlockStatement" ? (T(ye, B), true) : te.body === ye ? (i(ye, B), true) : false;
        }
        function U(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye } = fe;
          return (te == null ? void 0 : te.type) !== "TryStatement" && (te == null ? void 0 : te.type) !== "CatchClause" || !ye ? false : te.type === "CatchClause" && $ ? (l($, B), true) : ye.type === "BlockStatement" ? (T(ye, B), true) : ye.type === "TryStatement" ? (k(ye.finalizer, B), true) : ye.type === "CatchClause" ? (k(ye.body, B), true) : false;
        }
        function L(fe) {
          let { comment: B, enclosingNode: $, followingNode: te } = fe;
          return I($) && (te == null ? void 0 : te.type) === "Identifier" ? (i($, B), true) : false;
        }
        function Y(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye, text: Fe } = fe, Ne = $ && !u(Fe, o($), v(B));
          return (!$ || !Ne) && ((te == null ? void 0 : te.type) === "ConditionalExpression" || (te == null ? void 0 : te.type) === "TSConditionalType") && ye ? (i(ye, B), true) : false;
        }
        function V(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te } = fe;
          return P(te) && te.shorthand && te.key === $ && te.value.type === "AssignmentPattern" ? (l(te.value.left, B), true) : false;
        }
        var j = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function K(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye } = fe;
          if (j.has(te == null ? void 0 : te.type)) {
            if (y(te.decorators) && !(ye && ye.type === "Decorator"))
              return l(t(te.decorators), B), true;
            if (te.body && ye === te.body)
              return T(te.body, B), true;
            if (ye) {
              if (te.superClass && ye === te.superClass && $ && ($ === te.id || $ === te.typeParameters))
                return l($, B), true;
              for (let Fe of ["implements", "extends", "mixins"])
                if (te[Fe] && ye === te[Fe][0])
                  return $ && ($ === te.id || $ === te.typeParameters || $ === te.superClass) ? l($, B) : p(te, B, Fe), true;
            }
          }
          return false;
        }
        var se = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function Q(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, text: ye } = fe;
          return te && $ && n(ye, B, o) === "(" && (te.type === "Property" || te.type === "TSDeclareMethod" || te.type === "TSAbstractMethodDefinition") && $.type === "Identifier" && te.key === $ && n(ye, $, o) !== ":" || ($ == null ? void 0 : $.type) === "Decorator" && se.has(te == null ? void 0 : te.type) ? (l($, B), true) : false;
        }
        var ce = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function W(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, text: ye } = fe;
          return n(ye, B, o) !== "(" ? false : $ && ce.has(te == null ? void 0 : te.type) ? (l($, B), true) : false;
        }
        function X(fe) {
          let { comment: B, enclosingNode: $, text: te } = fe;
          if (($ == null ? void 0 : $.type) !== "ArrowFunctionExpression")
            return false;
          let ye = d(te, B, o);
          return ye !== false && te.slice(ye, ye + 2) === "=>" ? (p($, B), true) : false;
        }
        function de(fe) {
          let { comment: B, enclosingNode: $, text: te } = fe;
          return n(te, B, o) !== ")" ? false : $ && (ee($) && g($).length === 0 || F($) && A($).length === 0) ? (p($, B), true) : (($ == null ? void 0 : $.type) === "MethodDefinition" || ($ == null ? void 0 : $.type) === "TSAbstractMethodDefinition") && g($.value).length === 0 ? (p($.value, B), true) : false;
        }
        function ie(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye, text: Fe } = fe;
          if (($ == null ? void 0 : $.type) === "FunctionTypeParam" && (te == null ? void 0 : te.type) === "FunctionTypeAnnotation" && (ye == null ? void 0 : ye.type) !== "FunctionTypeParam" || (($ == null ? void 0 : $.type) === "Identifier" || ($ == null ? void 0 : $.type) === "AssignmentPattern") && te && ee(te) && n(Fe, B, o) === ")")
            return l($, B), true;
          if ((te == null ? void 0 : te.type) === "FunctionDeclaration" && (ye == null ? void 0 : ye.type) === "BlockStatement") {
            let Ne = (() => {
              let he = g(te);
              if (he.length > 0)
                return a(Fe, o(t(he)));
              let ze = a(Fe, o(te.id));
              return ze !== false && a(Fe, ze + 1);
            })();
            if (v(B) > Ne)
              return T(ye, B), true;
          }
          return false;
        }
        function Ee(fe) {
          let { comment: B, enclosingNode: $ } = fe;
          return ($ == null ? void 0 : $.type) === "LabeledStatement" ? (i($, B), true) : false;
        }
        function z(fe) {
          let { comment: B, enclosingNode: $ } = fe;
          return (($ == null ? void 0 : $.type) === "ContinueStatement" || ($ == null ? void 0 : $.type) === "BreakStatement") && !$.label ? (l($, B), true) : false;
        }
        function ue(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te } = fe;
          return N(te) && $ && te.callee === $ && te.arguments.length > 0 ? (i(te.arguments[0], B), true) : false;
        }
        function J(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye } = fe;
          return (te == null ? void 0 : te.type) === "UnionTypeAnnotation" || (te == null ? void 0 : te.type) === "TSUnionType" ? (c(B) && (ye.prettierIgnore = true, B.unignore = true), $ ? (l($, B), true) : false) : (((ye == null ? void 0 : ye.type) === "UnionTypeAnnotation" || (ye == null ? void 0 : ye.type) === "TSUnionType") && c(B) && (ye.types[0].prettierIgnore = true, B.unignore = true), false);
        }
        function le(fe) {
          let { comment: B, enclosingNode: $ } = fe;
          return P($) ? (i($, B), true) : false;
        }
        function ge(fe) {
          let { comment: B, enclosingNode: $, followingNode: te, ast: ye, isLastComment: Fe } = fe;
          return ye && ye.body && ye.body.length === 0 ? (Fe ? p(ye, B) : i(ye, B), true) : ($ == null ? void 0 : $.type) === "Program" && ($ == null ? void 0 : $.body.length) === 0 && !y($.directives) ? (Fe ? p($, B) : i($, B), true) : (te == null ? void 0 : te.type) === "Program" && (te == null ? void 0 : te.body.length) === 0 && ($ == null ? void 0 : $.type) === "ModuleExpression" ? (p(te, B), true) : false;
        }
        function pe(fe) {
          let { comment: B, enclosingNode: $ } = fe;
          return ($ == null ? void 0 : $.type) === "ForInStatement" || ($ == null ? void 0 : $.type) === "ForOfStatement" ? (i($, B), true) : false;
        }
        function Ae(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, text: ye } = fe;
          if ((te == null ? void 0 : te.type) === "ImportSpecifier" || (te == null ? void 0 : te.type) === "ExportSpecifier")
            return i(te, B), true;
          let Fe = ($ == null ? void 0 : $.type) === "ImportSpecifier" && (te == null ? void 0 : te.type) === "ImportDeclaration", Ne = ($ == null ? void 0 : $.type) === "ExportSpecifier" && (te == null ? void 0 : te.type) === "ExportNamedDeclaration";
          return (Fe || Ne) && s(ye, o(B)) ? (l($, B), true) : false;
        }
        function Ce(fe) {
          let { comment: B, enclosingNode: $ } = fe;
          return ($ == null ? void 0 : $.type) === "AssignmentPattern" ? (i($, B), true) : false;
        }
        var Oe = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Ie = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function we(fe) {
          let { comment: B, enclosingNode: $, followingNode: te } = fe;
          return Oe.has($ == null ? void 0 : $.type) && te && (Ie.has(te.type) || h(B)) ? (i(te, B), true) : false;
        }
        function _e(fe) {
          let { comment: B, enclosingNode: $, followingNode: te, text: ye } = fe;
          return !te && (($ == null ? void 0 : $.type) === "TSMethodSignature" || ($ == null ? void 0 : $.type) === "TSDeclareFunction" || ($ == null ? void 0 : $.type) === "TSAbstractMethodDefinition") && n(ye, B, o) === ";" ? (l($, B), true) : false;
        }
        function De(fe) {
          let { comment: B, enclosingNode: $, followingNode: te } = fe;
          if (c(B) && ($ == null ? void 0 : $.type) === "TSMappedType" && (te == null ? void 0 : te.type) === "TSTypeParameter" && te.constraint)
            return $.prettierIgnore = true, B.unignore = true, true;
        }
        function G(fe) {
          let { comment: B, precedingNode: $, enclosingNode: te, followingNode: ye } = fe;
          return (te == null ? void 0 : te.type) !== "TSMappedType" ? false : (ye == null ? void 0 : ye.type) === "TSTypeParameter" && ye.name ? (i(ye.name, B), true) : ($ == null ? void 0 : $.type) === "TSTypeParameter" && $.constraint ? (l($.constraint, B), true) : false;
        }
        function oe(fe) {
          let { comment: B, enclosingNode: $, followingNode: te } = fe;
          return !$ || $.type !== "SwitchCase" || $.test || !te || te !== $.consequent[0] ? false : (te.type === "BlockStatement" && H(B) ? T(te, B) : p($, B), true);
        }
        function ee(fe) {
          return fe.type === "ArrowFunctionExpression" || fe.type === "FunctionExpression" || fe.type === "FunctionDeclaration" || fe.type === "ObjectMethod" || fe.type === "ClassMethod" || fe.type === "TSDeclareFunction" || fe.type === "TSCallSignatureDeclaration" || fe.type === "TSConstructSignatureDeclaration" || fe.type === "TSMethodSignature" || fe.type === "TSConstructorType" || fe.type === "TSFunctionType" || fe.type === "TSDeclareMethod";
        }
        function re(fe, B) {
          if ((B.parser === "typescript" || B.parser === "flow" || B.parser === "acorn" || B.parser === "espree" || B.parser === "meriyah" || B.parser === "__babel_estree") && fe.type === "MethodDefinition" && fe.value && fe.value.type === "FunctionExpression" && g(fe.value).length === 0 && !fe.value.returnType && !y(fe.value.typeParameters) && fe.value.body)
            return [...fe.decorators || [], fe.key, fe.value.body];
        }
        function be(fe) {
          return h(fe) && fe.value[0] === "*" && /@type\b/.test(fe.value);
        }
        function ve(fe) {
          let B = fe.getValue(), $ = fe.getParentNode(), te = (ye) => _(f(ye, b.Leading)) || _(f(ye, b.Trailing));
          return (B && (D(B) || E(B) || N($) && te(B)) || $ && ($.type === "JSXSpreadAttribute" || $.type === "JSXSpreadChild" || $.type === "UnionTypeAnnotation" || $.type === "TSUnionType" || ($.type === "ClassDeclaration" || $.type === "ClassExpression") && $.superClass === B)) && (!w(fe) || $.type === "UnionTypeAnnotation" || $.type === "TSUnionType");
        }
        r.exports = { handleOwnLineComment: C, handleEndOfLineComment: S, handleRemainingComment: x, isTypeCastComment: be, getCommentChildNodes: re, willPrintOwnComments: ve };
      } }), qt = Z({ "src/language-js/needs-parens.js"(e, r) {
        ne();
        var t = lt(), s = Kn(), { getFunctionParameters: a, getLeftSidePathName: n, hasFlowShorthandAnnotationComment: u, hasNakedLeftSide: i, hasNode: l, isBitwiseOperator: p, startsWithNoLookaheadToken: d, shouldFlatten: y, getPrecedence: g, isCallExpression: c, isMemberExpression: D, isObjectProperty: E, isTSTypeExpression: _ } = Ke();
        function w(f, b) {
          let m = f.getParentNode();
          if (!m)
            return false;
          let v = f.getName(), o = f.getNode();
          if (b.__isInHtmlInterpolation && !b.bracketSpacing && I(o) && P(f))
            return true;
          if (F(o))
            return false;
          if (b.parser !== "flow" && u(f.getValue()))
            return true;
          if (o.type === "Identifier") {
            if (o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name) || v === "left" && (o.name === "async" && !m.await || o.name === "let") && m.type === "ForOfStatement")
              return true;
            if (o.name === "let") {
              var h;
              let S = (h = f.findAncestor((x) => x.type === "ForOfStatement")) === null || h === void 0 ? void 0 : h.left;
              if (S && d(S, (x) => x === o))
                return true;
            }
            if (v === "object" && o.name === "let" && m.type === "MemberExpression" && m.computed && !m.optional) {
              let S = f.findAncestor((T) => T.type === "ExpressionStatement" || T.type === "ForStatement" || T.type === "ForInStatement"), x = S ? S.type === "ExpressionStatement" ? S.expression : S.type === "ForStatement" ? S.init : S.left : void 0;
              if (x && d(x, (T) => T === o))
                return true;
            }
            return false;
          }
          if (o.type === "ObjectExpression" || o.type === "FunctionExpression" || o.type === "ClassExpression" || o.type === "DoExpression") {
            var C;
            let S = (C = f.findAncestor((x) => x.type === "ExpressionStatement")) === null || C === void 0 ? void 0 : C.expression;
            if (S && d(S, (x) => x === o))
              return true;
          }
          switch (m.type) {
            case "ParenthesizedExpression":
              return false;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (v === "superClass" && (o.type === "ArrowFunctionExpression" || o.type === "AssignmentExpression" || o.type === "AwaitExpression" || o.type === "BinaryExpression" || o.type === "ConditionalExpression" || o.type === "LogicalExpression" || o.type === "NewExpression" || o.type === "ObjectExpression" || o.type === "SequenceExpression" || o.type === "TaggedTemplateExpression" || o.type === "UnaryExpression" || o.type === "UpdateExpression" || o.type === "YieldExpression" || o.type === "TSNonNullExpression"))
                return true;
              break;
            }
            case "ExportDefaultDeclaration":
              return H(f, b) || o.type === "SequenceExpression";
            case "Decorator": {
              if (v === "expression") {
                let S = false, x = false, T = o;
                for (; T; )
                  switch (T.type) {
                    case "MemberExpression":
                      x = true, T = T.object;
                      break;
                    case "CallExpression":
                      if (x || S)
                        return b.parser !== "typescript";
                      S = true, T = T.callee;
                      break;
                    case "Identifier":
                      return false;
                    case "TaggedTemplateExpression":
                      return b.parser !== "typescript";
                    default:
                      return true;
                  }
                return true;
              }
              break;
            }
            case "ArrowFunctionExpression": {
              if (v === "body" && o.type !== "SequenceExpression" && d(o, (S) => S.type === "ObjectExpression"))
                return true;
              break;
            }
          }
          switch (o.type) {
            case "UpdateExpression":
              if (m.type === "UnaryExpression")
                return o.prefix && (o.operator === "++" && m.operator === "+" || o.operator === "--" && m.operator === "-");
            case "UnaryExpression":
              switch (m.type) {
                case "UnaryExpression":
                  return o.operator === m.operator && (o.operator === "+" || o.operator === "-");
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return v === "object";
                case "TaggedTemplateExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "BinaryExpression":
                  return v === "left" && m.operator === "**";
                case "TSNonNullExpression":
                  return true;
                default:
                  return false;
              }
            case "BinaryExpression": {
              if (m.type === "UpdateExpression" || o.operator === "in" && A(f))
                return true;
              if (o.operator === "|>" && o.extra && o.extra.parenthesized) {
                let S = f.getParentNode(1);
                if (S.type === "BinaryExpression" && S.operator === "|>")
                  return true;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (m.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !_(o);
                case "ConditionalExpression":
                  return _(o);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return v === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return v === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return v === "left" && (o.type === "TSTypeAssertion" || _(o));
                case "LogicalExpression":
                  if (o.type === "LogicalExpression")
                    return m.operator !== o.operator;
                case "BinaryExpression": {
                  let { operator: S, type: x } = o;
                  if (!S && x !== "TSTypeAssertion")
                    return true;
                  let T = g(S), k = m.operator, M = g(k);
                  return M > T || v === "right" && M === T || M === T && !y(k, S) ? true : M < T && S === "%" ? k === "+" || k === "-" : !!p(k);
                }
                default:
                  return false;
              }
            case "SequenceExpression":
              switch (m.type) {
                case "ReturnStatement":
                  return false;
                case "ForStatement":
                  return false;
                case "ExpressionStatement":
                  return v !== "expression";
                case "ArrowFunctionExpression":
                  return v !== "body";
                default:
                  return true;
              }
            case "YieldExpression":
              if (m.type === "UnaryExpression" || m.type === "AwaitExpression" || _(m) || m.type === "TSNonNullExpression")
                return true;
            case "AwaitExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return v === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "ConditionalExpression":
                  return v === "test";
                case "BinaryExpression":
                  return !(!o.argument && m.operator === "|>");
                default:
                  return false;
              }
            case "TSConditionalType":
              if (v === "extendsType" && m.type === "TSConditionalType")
                return true;
            case "TSFunctionType":
            case "TSConstructorType":
              if (v === "extendsType" && m.type === "TSConditionalType") {
                let S = (o.returnType || o.typeAnnotation).typeAnnotation;
                if (S.type === "TSInferType" && S.typeParameter.constraint)
                  return true;
              }
              if (v === "checkType" && m.type === "TSConditionalType")
                return true;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((m.type === "TSUnionType" || m.type === "TSIntersectionType") && m.types.length > 1 && (!o.types || o.types.length > 1))
                return true;
            case "TSInferType":
              if (o.type === "TSInferType" && m.type === "TSRestType")
                return false;
            case "TSTypeOperator":
              return m.type === "TSArrayType" || m.type === "TSOptionalType" || m.type === "TSRestType" || v === "objectType" && m.type === "TSIndexedAccessType" || m.type === "TSTypeOperator" || m.type === "TSTypeAnnotation" && f.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery":
              return v === "objectType" && m.type === "TSIndexedAccessType" || v === "elementType" && m.type === "TSArrayType";
            case "ArrayTypeAnnotation":
              return m.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || m.type === "NullableTypeAnnotation" || m.type === "IntersectionTypeAnnotation" || m.type === "UnionTypeAnnotation" || v === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || v === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let S = m.type === "NullableTypeAnnotation" ? f.getParentNode(1) : m;
              return S.type === "UnionTypeAnnotation" || S.type === "IntersectionTypeAnnotation" || S.type === "ArrayTypeAnnotation" || v === "objectType" && (S.type === "IndexedAccessType" || S.type === "OptionalIndexedAccessType") || S.type === "NullableTypeAnnotation" || m.type === "FunctionTypeParam" && m.name === null && a(o).some((x) => x.typeAnnotation && x.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return v === "objectType" && m.type === "IndexedAccessType";
            case "TypeofTypeAnnotation":
              return v === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof o.value == "string" && m.type === "ExpressionStatement" && !m.directive) {
                let S = f.getParentNode(1);
                return S.type === "Program" || S.type === "BlockStatement";
              }
              return v === "object" && m.type === "MemberExpression" && typeof o.value == "number";
            case "AssignmentExpression": {
              let S = f.getParentNode(1);
              return v === "body" && m.type === "ArrowFunctionExpression" ? true : v === "key" && (m.type === "ClassProperty" || m.type === "PropertyDefinition") && m.computed || (v === "init" || v === "update") && m.type === "ForStatement" ? false : m.type === "ExpressionStatement" ? o.left.type === "ObjectPattern" : !(v === "key" && m.type === "TSPropertySignature" || m.type === "AssignmentExpression" || m.type === "SequenceExpression" && S && S.type === "ForStatement" && (S.init === m || S.update === m) || v === "value" && m.type === "Property" && S && S.type === "ObjectPattern" && S.properties.includes(m) || m.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "ConditionalExpression":
                  return v === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return v === "object";
                default:
                  return false;
              }
            case "FunctionExpression":
              switch (m.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "TaggedTemplateExpression":
                  return true;
                default:
                  return false;
              }
            case "ArrowFunctionExpression":
              switch (m.type) {
                case "BinaryExpression":
                  return m.operator !== "|>" || o.extra && o.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return v === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return v === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return true;
                case "ConditionalExpression":
                  return v === "test";
                default:
                  return false;
              }
            case "ClassExpression":
              if (s(o.decorators))
                return true;
              switch (m.type) {
                case "NewExpression":
                  return v === "callee";
                default:
                  return false;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let S = f.getParentNode(1);
              if (v === "object" && m.type === "MemberExpression" || v === "callee" && (m.type === "CallExpression" || m.type === "NewExpression") || m.type === "TSNonNullExpression" && S.type === "MemberExpression" && S.object === m)
                return true;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (v === "callee" && (m.type === "BindExpression" || m.type === "NewExpression")) {
                let S = o;
                for (; S; )
                  switch (S.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return true;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      S = S.object;
                      break;
                    case "TaggedTemplateExpression":
                      S = S.tag;
                      break;
                    case "TSNonNullExpression":
                      S = S.expression;
                      break;
                    default:
                      return false;
                  }
              }
              return false;
            case "BindExpression":
              return v === "callee" && (m.type === "BindExpression" || m.type === "NewExpression") || v === "object" && D(m);
            case "NGPipeExpression":
              return !(m.type === "NGRoot" || m.type === "NGMicrosyntaxExpression" || m.type === "ObjectProperty" && !(o.extra && o.extra.parenthesized) || m.type === "ArrayExpression" || c(m) && m.arguments[v] === o || v === "right" && m.type === "NGPipeExpression" || v === "property" && m.type === "MemberExpression" || m.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return v === "callee" || v === "left" && m.type === "BinaryExpression" && m.operator === "<" || m.type !== "ArrayExpression" && m.type !== "ArrowFunctionExpression" && m.type !== "AssignmentExpression" && m.type !== "AssignmentPattern" && m.type !== "BinaryExpression" && m.type !== "NewExpression" && m.type !== "ConditionalExpression" && m.type !== "ExpressionStatement" && m.type !== "JsExpressionRoot" && m.type !== "JSXAttribute" && m.type !== "JSXElement" && m.type !== "JSXExpressionContainer" && m.type !== "JSXFragment" && m.type !== "LogicalExpression" && !c(m) && !E(m) && m.type !== "ReturnStatement" && m.type !== "ThrowStatement" && m.type !== "TypeCastExpression" && m.type !== "VariableDeclarator" && m.type !== "YieldExpression";
            case "TypeAnnotation":
              return v === "returnType" && m.type === "ArrowFunctionExpression" && N(o);
          }
          return false;
        }
        function F(f) {
          return f.type === "BlockStatement" || f.type === "BreakStatement" || f.type === "ClassBody" || f.type === "ClassDeclaration" || f.type === "ClassMethod" || f.type === "ClassProperty" || f.type === "PropertyDefinition" || f.type === "ClassPrivateProperty" || f.type === "ContinueStatement" || f.type === "DebuggerStatement" || f.type === "DeclareClass" || f.type === "DeclareExportAllDeclaration" || f.type === "DeclareExportDeclaration" || f.type === "DeclareFunction" || f.type === "DeclareInterface" || f.type === "DeclareModule" || f.type === "DeclareModuleExports" || f.type === "DeclareVariable" || f.type === "DoWhileStatement" || f.type === "EnumDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportDefaultDeclaration" || f.type === "ExportNamedDeclaration" || f.type === "ExpressionStatement" || f.type === "ForInStatement" || f.type === "ForOfStatement" || f.type === "ForStatement" || f.type === "FunctionDeclaration" || f.type === "IfStatement" || f.type === "ImportDeclaration" || f.type === "InterfaceDeclaration" || f.type === "LabeledStatement" || f.type === "MethodDefinition" || f.type === "ReturnStatement" || f.type === "SwitchStatement" || f.type === "ThrowStatement" || f.type === "TryStatement" || f.type === "TSDeclareFunction" || f.type === "TSEnumDeclaration" || f.type === "TSImportEqualsDeclaration" || f.type === "TSInterfaceDeclaration" || f.type === "TSModuleDeclaration" || f.type === "TSNamespaceExportDeclaration" || f.type === "TypeAlias" || f.type === "VariableDeclaration" || f.type === "WhileStatement" || f.type === "WithStatement";
        }
        function A(f) {
          let b = 0, m = f.getValue();
          for (; m; ) {
            let v = f.getParentNode(b++);
            if (v && v.type === "ForStatement" && v.init === m)
              return true;
            m = v;
          }
          return false;
        }
        function N(f) {
          return l(f, (b) => b.type === "ObjectTypeAnnotation" && l(b, (m) => m.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function I(f) {
          switch (f.type) {
            case "ObjectExpression":
              return true;
            default:
              return false;
          }
        }
        function P(f) {
          let b = f.getValue(), m = f.getParentNode(), v = f.getName();
          switch (m.type) {
            case "NGPipeExpression":
              if (typeof v == "number" && m.arguments[v] === b && m.arguments.length - 1 === v)
                return f.callParent(P);
              break;
            case "ObjectProperty":
              if (v === "value") {
                let o = f.getParentNode(1);
                return t(o.properties) === m;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (v === "right")
                return f.callParent(P);
              break;
            case "ConditionalExpression":
              if (v === "alternate")
                return f.callParent(P);
              break;
            case "UnaryExpression":
              if (m.prefix)
                return f.callParent(P);
              break;
          }
          return false;
        }
        function H(f, b) {
          let m = f.getValue(), v = f.getParentNode();
          return m.type === "FunctionExpression" || m.type === "ClassExpression" ? v.type === "ExportDefaultDeclaration" || !w(f, b) : !i(m) || v.type !== "ExportDefaultDeclaration" && w(f, b) ? false : f.call((o) => H(o, b), ...n(f, m));
        }
        r.exports = w;
      } }), Fo = Z({ "src/language-js/print-preprocess.js"(e, r) {
        ne();
        function t(s, a) {
          switch (a.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, s), {}, { type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker });
            default:
              return s;
          }
        }
        r.exports = t;
      } }), cd = Z({ "src/language-js/print/html-binding.js"(e, r) {
        ne();
        var { builders: { join: t, line: s, group: a, softline: n, indent: u } } = Me();
        function i(p, d, y) {
          let g = p.getValue();
          if (d.__onHtmlBindingRoot && p.getName() === null && d.__onHtmlBindingRoot(g, d), g.type === "File") {
            if (d.__isVueForBindingLeft)
              return p.call((c) => {
                let D = t([",", s], c.map(y, "params")), { params: E } = c.getValue();
                return E.length === 1 ? D : ["(", u([n, a(D)]), n, ")"];
              }, "program", "body", 0);
            if (d.__isVueBindings)
              return p.call((c) => t([",", s], c.map(y, "params")), "program", "body", 0);
          }
        }
        function l(p) {
          switch (p.type) {
            case "MemberExpression":
              switch (p.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return l(p.object);
              }
              return false;
            case "Identifier":
              return true;
            default:
              return false;
          }
        }
        r.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
      } }), ru = Z({ "src/language-js/print/binaryish.js"(e, r) {
        ne();
        var { printComments: t } = et(), { getLast: s } = Ue(), { builders: { join: a, line: n, softline: u, group: i, indent: l, align: p, indentIfBreak: d }, utils: { cleanDoc: y, getDocParts: g, isConcat: c } } = Me(), { hasLeadingOwnLineComment: D, isBinaryish: E, isJsxNode: _, shouldFlatten: w, hasComment: F, CommentCheckFlags: A, isCallExpression: N, isMemberExpression: I, isObjectProperty: P, isEnabledHackPipeline: H } = Ke(), f = 0;
        function b(o, h, C) {
          let S = o.getValue(), x = o.getParentNode(), T = o.getParentNode(1), k = S !== x.body && (x.type === "IfStatement" || x.type === "WhileStatement" || x.type === "SwitchStatement" || x.type === "DoWhileStatement"), M = H(h) && S.operator === "|>", R = m(o, C, h, false, k);
          if (k)
            return R;
          if (M)
            return i(R);
          if (N(x) && x.callee === S || x.type === "UnaryExpression" || I(x) && !x.computed)
            return i([l([u, ...R]), u]);
          let q = x.type === "ReturnStatement" || x.type === "ThrowStatement" || x.type === "JSXExpressionContainer" && T.type === "JSXAttribute" || S.operator !== "|" && x.type === "JsExpressionRoot" || S.type !== "NGPipeExpression" && (x.type === "NGRoot" && h.parser === "__ng_binding" || x.type === "NGMicrosyntaxExpression" && T.type === "NGMicrosyntax" && T.body.length === 1) || S === x.body && x.type === "ArrowFunctionExpression" || S !== x.body && x.type === "ForStatement" || x.type === "ConditionalExpression" && T.type !== "ReturnStatement" && T.type !== "ThrowStatement" && !N(T) || x.type === "TemplateLiteral", U = x.type === "AssignmentExpression" || x.type === "VariableDeclarator" || x.type === "ClassProperty" || x.type === "PropertyDefinition" || x.type === "TSAbstractPropertyDefinition" || x.type === "ClassPrivateProperty" || P(x), L = E(S.left) && w(S.operator, S.left.operator);
          if (q || v(S) && !L || !v(S) && U)
            return i(R);
          if (R.length === 0)
            return "";
          let Y = _(S.right), V = R.findIndex((W) => typeof W != "string" && !Array.isArray(W) && W.type === "group"), j = R.slice(0, V === -1 ? 1 : V + 1), K = R.slice(j.length, Y ? -1 : void 0), se = Symbol("logicalChain-" + ++f), Q = i([...j, l(K)], { id: se });
          if (!Y)
            return Q;
          let ce = s(R);
          return i([Q, d(ce, { groupId: se })]);
        }
        function m(o, h, C, S, x) {
          let T = o.getValue();
          if (!E(T))
            return [i(h())];
          let k = [];
          w(T.operator, T.left.operator) ? k = o.call((K) => m(K, h, C, true, x), "left") : k.push(i(h("left")));
          let M = v(T), R = (T.operator === "|>" || T.type === "NGPipeExpression" || T.operator === "|" && C.parser === "__vue_expression") && !D(C.originalText, T.right), q = T.type === "NGPipeExpression" ? "|" : T.operator, U = T.type === "NGPipeExpression" && T.arguments.length > 0 ? i(l([n, ": ", a([n, ": "], o.map(h, "arguments").map((K) => p(2, i(K))))])) : "", L;
          if (M)
            L = [q, " ", h("right"), U];
          else {
            let se = H(C) && q === "|>" ? o.call((Q) => m(Q, h, C, true, x), "right") : h("right");
            L = [R ? n : "", q, R ? " " : n, se, U];
          }
          let Y = o.getParentNode(), V = F(T.left, A.Trailing | A.Line), j = V || !(x && T.type === "LogicalExpression") && Y.type !== T.type && T.left.type !== T.type && T.right.type !== T.type;
          if (k.push(R ? "" : " ", j ? i(L, { shouldBreak: V }) : L), S && F(T)) {
            let K = y(t(o, k, C));
            return c(K) || K.type === "fill" ? g(K) : [K];
          }
          return k;
        }
        function v(o) {
          return o.type !== "LogicalExpression" ? false : !!(o.right.type === "ObjectExpression" && o.right.properties.length > 0 || o.right.type === "ArrayExpression" && o.right.elements.length > 0 || _(o.right));
        }
        r.exports = { printBinaryishExpression: b, shouldInlineLogicalExpression: v };
      } }), pd = Z({ "src/language-js/print/angular.js"(e, r) {
        ne();
        var { builders: { join: t, line: s, group: a } } = Me(), { hasNode: n, hasComment: u, getComments: i } = Ke(), { printBinaryishExpression: l } = ru();
        function p(g, c, D) {
          let E = g.getValue();
          if (E.type.startsWith("NG"))
            switch (E.type) {
              case "NGRoot":
                return [D("node"), u(E.node) ? " //" + i(E.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return l(g, c, D);
              case "NGChainedExpression":
                return a(t([";", s], g.map((_) => y(_) ? D() : ["(", D(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [E.prefix, ": ", E.value.trim()];
              case "NGMicrosyntax":
                return g.map((_, w) => [w === 0 ? "" : d(_.getValue(), w, E) ? " " : [";", s], D()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(E.name) ? E.name : JSON.stringify(E.name);
              case "NGMicrosyntaxExpression":
                return [D("expression"), E.alias === null ? "" : [" as ", D("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let _ = g.getName(), w = g.getParentNode(), F = d(E, _, w) || (_ === 1 && (E.key.name === "then" || E.key.name === "else") || _ === 2 && E.key.name === "else" && w.body[_ - 1].type === "NGMicrosyntaxKeyedExpression" && w.body[_ - 1].key.name === "then") && w.body[0].type === "NGMicrosyntaxExpression";
                return [D("key"), F ? " " : ": ", D("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", D("key"), E.value === null ? "" : [" = ", D("value")]];
              case "NGMicrosyntaxAs":
                return [D("key"), " as ", D("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(E.type)}.`);
            }
        }
        function d(g, c, D) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && c === 1 && D.body[0].type === "NGMicrosyntaxLet" && D.body[0].value === null;
        }
        function y(g) {
          return n(g.getValue(), (c) => {
            switch (c.type) {
              case void 0:
                return false;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return true;
            }
          });
        }
        r.exports = { printAngular: p };
      } }), fd = Z({ "src/language-js/print/jsx.js"(e, r) {
        ne();
        var { printComments: t, printDanglingComments: s, printCommentsSeparately: a } = et(), { builders: { line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: d, fill: y, ifBreak: g, lineSuffixBoundary: c, join: D }, utils: { willBreak: E } } = Me(), { getLast: _, getPreferredQuote: w } = Ue(), { isJsxNode: F, rawText: A, isLiteral: N, isCallExpression: I, isStringLiteral: P, isBinaryish: H, hasComment: f, CommentCheckFlags: b, hasNodeIgnoreComment: m } = Ke(), v = qt(), { willPrintOwnComments: o } = Eo(), h = (J) => J === "" || J === n || J === u || J === i;
        function C(J, le, ge) {
          let pe = J.getValue();
          if (pe.type === "JSXElement" && ie(pe))
            return [ge("openingElement"), ge("closingElement")];
          let Ae = pe.type === "JSXElement" ? ge("openingElement") : ge("openingFragment"), Ce = pe.type === "JSXElement" ? ge("closingElement") : ge("closingFragment");
          if (pe.children.length === 1 && pe.children[0].type === "JSXExpressionContainer" && (pe.children[0].expression.type === "TemplateLiteral" || pe.children[0].expression.type === "TaggedTemplateExpression"))
            return [Ae, ...J.map(ge, "children"), Ce];
          pe.children = pe.children.map(($) => z($) ? { type: "JSXText", value: " ", raw: " " } : $);
          let Oe = pe.children.some(F), Ie = pe.children.filter(($) => $.type === "JSXExpressionContainer").length > 1, we = pe.type === "JSXElement" && pe.openingElement.attributes.length > 1, _e = E(Ae) || Oe || we || Ie, De = J.getParentNode().rootMarker === "mdx", G = le.singleQuote ? "{' '}" : '{" "}', oe = De ? " " : g([G, i], " "), ee = pe.openingElement && pe.openingElement.name && pe.openingElement.name.name === "fbt", re = S(J, le, ge, oe, ee), be = pe.children.some(($) => Ee($));
          for (let $ = re.length - 2; $ >= 0; $--) {
            let te = re[$] === "" && re[$ + 1] === "", ye = re[$] === u && re[$ + 1] === "" && re[$ + 2] === u, Fe = (re[$] === i || re[$] === u) && re[$ + 1] === "" && re[$ + 2] === oe, Ne = re[$] === oe && re[$ + 1] === "" && (re[$ + 2] === i || re[$ + 2] === u), he = re[$] === oe && re[$ + 1] === "" && re[$ + 2] === oe, ze = re[$] === i && re[$ + 1] === "" && re[$ + 2] === u || re[$] === u && re[$ + 1] === "" && re[$ + 2] === i;
            ye && be || te || Fe || he || ze ? re.splice($, 2) : Ne && re.splice($ + 1, 2);
          }
          for (; re.length > 0 && h(_(re)); )
            re.pop();
          for (; re.length > 1 && h(re[0]) && h(re[1]); )
            re.shift(), re.shift();
          let ve = [];
          for (let [$, te] of re.entries()) {
            if (te === oe) {
              if ($ === 1 && re[$ - 1] === "") {
                if (re.length === 2) {
                  ve.push(G);
                  continue;
                }
                ve.push([G, u]);
                continue;
              } else if ($ === re.length - 1) {
                ve.push(G);
                continue;
              } else if (re[$ - 1] === "" && re[$ - 2] === u) {
                ve.push(G);
                continue;
              }
            }
            ve.push(te), E(te) && (_e = true);
          }
          let fe = be ? y(ve) : l(ve, { shouldBreak: true });
          if (De)
            return fe;
          let B = l([Ae, p([u, fe]), u, Ce]);
          return _e ? B : d([l([Ae, ...re, Ce]), B]);
        }
        function S(J, le, ge, pe, Ae) {
          let Ce = [];
          return J.each((Oe, Ie, we) => {
            let _e = Oe.getValue();
            if (N(_e)) {
              let De = A(_e);
              if (Ee(_e)) {
                let G = De.split(W);
                if (G[0] === "") {
                  if (Ce.push(""), G.shift(), /\n/.test(G[0])) {
                    let ee = we[Ie + 1];
                    Ce.push(T(Ae, G[1], _e, ee));
                  } else
                    Ce.push(pe);
                  G.shift();
                }
                let oe;
                if (_(G) === "" && (G.pop(), oe = G.pop()), G.length === 0)
                  return;
                for (let [ee, re] of G.entries())
                  ee % 2 === 1 ? Ce.push(n) : Ce.push(re);
                if (oe !== void 0)
                  if (/\n/.test(oe)) {
                    let ee = we[Ie + 1];
                    Ce.push(T(Ae, _(Ce), _e, ee));
                  } else
                    Ce.push(pe);
                else {
                  let ee = we[Ie + 1];
                  Ce.push(x(Ae, _(Ce), _e, ee));
                }
              } else
                /\n/.test(De) ? De.match(/\n/g).length > 1 && Ce.push("", u) : Ce.push("", pe);
            } else {
              let De = ge();
              Ce.push(De);
              let G = we[Ie + 1];
              if (G && Ee(G)) {
                let ee = de(A(G)).split(W)[0];
                Ce.push(x(Ae, ee, _e, G));
              } else
                Ce.push(u);
            }
          }, "children"), Ce;
        }
        function x(J, le, ge, pe) {
          return J ? "" : ge.type === "JSXElement" && !ge.closingElement || pe && pe.type === "JSXElement" && !pe.closingElement ? le.length === 1 ? i : u : i;
        }
        function T(J, le, ge, pe) {
          return J ? u : le.length === 1 ? ge.type === "JSXElement" && !ge.closingElement || pe && pe.type === "JSXElement" && !pe.closingElement ? u : i : u;
        }
        function k(J, le, ge) {
          let pe = J.getParentNode();
          if (!pe || { ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true }[pe.type])
            return le;
          let Ce = J.match(void 0, (Ie) => Ie.type === "ArrowFunctionExpression", I, (Ie) => Ie.type === "JSXExpressionContainer"), Oe = v(J, ge);
          return l([Oe ? "" : g("("), p([i, le]), i, Oe ? "" : g(")")], { shouldBreak: Ce });
        }
        function M(J, le, ge) {
          let pe = J.getValue(), Ae = [];
          if (Ae.push(ge("name")), pe.value) {
            let Ce;
            if (P(pe.value)) {
              let Ie = A(pe.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: we, quote: _e, regex: De } = w(Ie, le.jsxSingleQuote ? "'" : '"');
              Ie = Ie.replace(De, we);
              let { leading: G, trailing: oe } = J.call(() => a(J, le), "value");
              Ce = [G, _e, Ie, _e, oe];
            } else
              Ce = ge("value");
            Ae.push("=", Ce);
          }
          return Ae;
        }
        function R(J, le, ge) {
          let pe = J.getValue(), Ae = (Ce, Oe) => Ce.type === "JSXEmptyExpression" || !f(Ce) && (Ce.type === "ArrayExpression" || Ce.type === "ObjectExpression" || Ce.type === "ArrowFunctionExpression" || Ce.type === "AwaitExpression" && (Ae(Ce.argument, Ce) || Ce.argument.type === "JSXElement") || I(Ce) || Ce.type === "FunctionExpression" || Ce.type === "TemplateLiteral" || Ce.type === "TaggedTemplateExpression" || Ce.type === "DoExpression" || F(Oe) && (Ce.type === "ConditionalExpression" || H(Ce)));
          return Ae(pe.expression, J.getParentNode(0)) ? l(["{", ge("expression"), c, "}"]) : l(["{", p([i, ge("expression")]), i, c, "}"]);
        }
        function q(J, le, ge) {
          let pe = J.getValue(), Ae = pe.name && f(pe.name) || pe.typeParameters && f(pe.typeParameters);
          if (pe.selfClosing && pe.attributes.length === 0 && !Ae)
            return ["<", ge("name"), ge("typeParameters"), " />"];
          if (pe.attributes && pe.attributes.length === 1 && pe.attributes[0].value && P(pe.attributes[0].value) && !pe.attributes[0].value.value.includes(`
`) && !Ae && !f(pe.attributes[0]))
            return l(["<", ge("name"), ge("typeParameters"), " ", ...J.map(ge, "attributes"), pe.selfClosing ? " />" : ">"]);
          let Ce = pe.attributes && pe.attributes.some((Ie) => Ie.value && P(Ie.value) && Ie.value.value.includes(`
`)), Oe = le.singleAttributePerLine && pe.attributes.length > 1 ? u : n;
          return l(["<", ge("name"), ge("typeParameters"), p(J.map(() => [Oe, ge()], "attributes")), ...U(pe, le, Ae)], { shouldBreak: Ce });
        }
        function U(J, le, ge) {
          return J.selfClosing ? [n, "/>"] : L(J, le, ge) ? [">"] : [i, ">"];
        }
        function L(J, le, ge) {
          let pe = J.attributes.length > 0 && f(_(J.attributes), b.Trailing);
          return J.attributes.length === 0 && !ge || (le.bracketSameLine || le.jsxBracketSameLine) && (!ge || J.attributes.length > 0) && !pe;
        }
        function Y(J, le, ge) {
          let pe = J.getValue(), Ae = [];
          Ae.push("</");
          let Ce = ge("name");
          return f(pe.name, b.Leading | b.Line) ? Ae.push(p([u, Ce]), u) : f(pe.name, b.Leading | b.Block) ? Ae.push(" ", Ce) : Ae.push(Ce), Ae.push(">"), Ae;
        }
        function V(J, le) {
          let ge = J.getValue(), pe = f(ge), Ae = f(ge, b.Line), Ce = ge.type === "JSXOpeningFragment";
          return [Ce ? "<" : "</", p([Ae ? u : pe && !Ce ? " " : "", s(J, le, true)]), Ae ? u : "", ">"];
        }
        function j(J, le, ge) {
          let pe = t(J, C(J, le, ge), le);
          return k(J, pe, le);
        }
        function K(J, le) {
          let ge = J.getValue(), pe = f(ge, b.Line);
          return [s(J, le, !pe), pe ? u : ""];
        }
        function se(J, le, ge) {
          let pe = J.getValue();
          return ["{", J.call((Ae) => {
            let Ce = ["...", ge()], Oe = Ae.getValue();
            return !f(Oe) || !o(Ae) ? Ce : [p([i, t(Ae, Ce, le)]), i];
          }, pe.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function Q(J, le, ge) {
          let pe = J.getValue();
          if (pe.type.startsWith("JSX"))
            switch (pe.type) {
              case "JSXAttribute":
                return M(J, le, ge);
              case "JSXIdentifier":
                return String(pe.name);
              case "JSXNamespacedName":
                return D(":", [ge("namespace"), ge("name")]);
              case "JSXMemberExpression":
                return D(".", [ge("object"), ge("property")]);
              case "JSXSpreadAttribute":
                return se(J, le, ge);
              case "JSXSpreadChild":
                return se(J, le, ge);
              case "JSXExpressionContainer":
                return R(J, le, ge);
              case "JSXFragment":
              case "JSXElement":
                return j(J, le, ge);
              case "JSXOpeningElement":
                return q(J, le, ge);
              case "JSXClosingElement":
                return Y(J, le, ge);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return V(J, le);
              case "JSXEmptyExpression":
                return K(J, le);
              case "JSXText":
                throw new Error("JSXText should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(pe.type)}.`);
            }
        }
        var ce = ` 
\r	`, W = new RegExp("([" + ce + "]+)"), X = new RegExp("[^" + ce + "]"), de = (J) => J.replace(new RegExp("(?:^" + W.source + "|" + W.source + "$)"), "");
        function ie(J) {
          if (J.children.length === 0)
            return true;
          if (J.children.length > 1)
            return false;
          let le = J.children[0];
          return N(le) && !Ee(le);
        }
        function Ee(J) {
          return N(J) && (X.test(A(J)) || !/\n/.test(A(J)));
        }
        function z(J) {
          return J.type === "JSXExpressionContainer" && N(J.expression) && J.expression.value === " " && !f(J.expression);
        }
        function ue(J) {
          let le = J.getValue(), ge = J.getParentNode();
          if (!ge || !le || !F(le) || !F(ge))
            return false;
          let pe = ge.children.indexOf(le), Ae = null;
          for (let Ce = pe; Ce > 0; Ce--) {
            let Oe = ge.children[Ce - 1];
            if (!(Oe.type === "JSXText" && !Ee(Oe))) {
              Ae = Oe;
              break;
            }
          }
          return Ae && Ae.type === "JSXExpressionContainer" && Ae.expression.type === "JSXEmptyExpression" && m(Ae.expression);
        }
        r.exports = { hasJsxIgnoreComment: ue, printJsx: Q };
      } }), ct = Z({ "src/language-js/print/misc.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { indent: s, join: a, line: n } } = Me(), { isFlowAnnotationComment: u } = Ke();
        function i(_) {
          let w = _.getValue();
          return !w.optional || w.type === "Identifier" && w === _.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?";
        }
        function l(_) {
          return _.getValue().definite || _.match(void 0, (w, F) => F === "id" && w.type === "VariableDeclarator" && w.definite) ? "!" : "";
        }
        function p(_, w, F) {
          let A = _.getValue();
          return A.typeArguments ? F("typeArguments") : A.typeParameters ? F("typeParameters") : "";
        }
        function d(_, w, F) {
          let A = _.getValue();
          if (!A.typeAnnotation)
            return "";
          let N = _.getParentNode(), I = N.type === "DeclareFunction" && N.id === A;
          return u(w.originalText, A.typeAnnotation) ? [" /*: ", F("typeAnnotation"), " */"] : [I ? "" : ": ", F("typeAnnotation")];
        }
        function y(_, w, F) {
          return ["::", F("callee")];
        }
        function g(_, w, F) {
          let A = _.getValue();
          return t(A.modifiers) ? [a(" ", _.map(F, "modifiers")), " "] : "";
        }
        function c(_, w, F) {
          return _.type === "EmptyStatement" ? ";" : _.type === "BlockStatement" || F ? [" ", w] : s([n, w]);
        }
        function D(_, w, F) {
          return ["...", F("argument"), d(_, w, F)];
        }
        function E(_, w) {
          let F = _.slice(1, -1);
          if (F.includes('"') || F.includes("'"))
            return _;
          let A = w.singleQuote ? "'" : '"';
          return A + F + A;
        }
        r.exports = { printOptionalToken: i, printDefiniteToken: l, printFunctionTypeParameters: p, printBindExpressionCallee: y, printTypeScriptModifiers: g, printTypeAnnotation: d, printRestSpread: D, adjustClause: c, printDirective: E };
      } }), er = Z({ "src/language-js/print/array.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, hardline: n, group: u, indent: i, ifBreak: l, fill: p } } = Me(), { getLast: d, hasNewline: y } = Ue(), { shouldPrintComma: g, hasComment: c, CommentCheckFlags: D, isNextLineEmpty: E, isNumericLiteral: _, isSignedNumericLiteral: w } = Ke(), { locStart: F } = ut(), { printOptionalToken: A, printTypeAnnotation: N } = ct();
        function I(b, m, v) {
          let o = b.getValue(), h = [], C = o.type === "TupleExpression" ? "#[" : "[", S = "]";
          if (o.elements.length === 0)
            c(o, D.Dangling) ? h.push(u([C, t(b, m), a, S])) : h.push(C, S);
          else {
            let x = d(o.elements), T = !(x && x.type === "RestElement"), k = x === null, M = Symbol("array"), R = !m.__inJestEach && o.elements.length > 1 && o.elements.every((L, Y, V) => {
              let j = L && L.type;
              if (j !== "ArrayExpression" && j !== "ObjectExpression")
                return false;
              let K = V[Y + 1];
              if (K && j !== K.type)
                return false;
              let se = j === "ArrayExpression" ? "elements" : "properties";
              return L[se] && L[se].length > 1;
            }), q = P(o, m), U = T ? k ? "," : g(m) ? q ? l(",", "", { groupId: M }) : l(",") : "" : "";
            h.push(u([C, i([a, q ? f(b, m, v, U) : [H(b, m, "elements", v), U], t(b, m, true)]), a, S], { shouldBreak: R, id: M }));
          }
          return h.push(A(b), N(b, m, v)), h;
        }
        function P(b, m) {
          return b.elements.length > 1 && b.elements.every((v) => v && (_(v) || w(v) && !c(v.argument)) && !c(v, D.Trailing | D.Line, (o) => !y(m.originalText, F(o), { backwards: true })));
        }
        function H(b, m, v, o) {
          let h = [], C = [];
          return b.each((S) => {
            h.push(C, u(o())), C = [",", s], S.getValue() && E(S.getValue(), m) && C.push(a);
          }, v), h;
        }
        function f(b, m, v, o) {
          let h = [];
          return b.each((C, S, x) => {
            let T = S === x.length - 1;
            h.push([v(), T ? o : ","]), T || h.push(E(C.getValue(), m) ? [n, n] : c(x[S + 1], D.Leading | D.Line) ? n : s);
          }, "elements"), p(h);
        }
        r.exports = { printArray: I, printArrayItems: H, isConciselyPrintedArray: P };
      } }), Ao = Z({ "src/language-js/print/call-arguments.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { getLast: s, getPenultimate: a } = Ue(), { getFunctionParameters: n, hasComment: u, CommentCheckFlags: i, isFunctionCompositionArgs: l, isJsxNode: p, isLongCurriedCallExpression: d, shouldPrintComma: y, getCallArguments: g, iterateCallArgumentsPath: c, isNextLineEmpty: D, isCallExpression: E, isStringLiteral: _, isObjectProperty: w, isTSTypeExpression: F } = Ke(), { builders: { line: A, hardline: N, softline: I, group: P, indent: H, conditionalGroup: f, ifBreak: b, breakParent: m }, utils: { willBreak: v } } = Me(), { ArgExpansionBailout: o } = Qt(), { isConciselyPrintedArray: h } = er();
        function C(q, U, L) {
          let Y = q.getValue(), V = Y.type === "ImportExpression", j = g(Y);
          if (j.length === 0)
            return ["(", t(q, U, true), ")"];
          if (k(j))
            return ["(", L(["arguments", 0]), ", ", L(["arguments", 1]), ")"];
          let K = false, se = false, Q = j.length - 1, ce = [];
          c(q, (z, ue) => {
            let J = z.getNode(), le = [L()];
            ue === Q || (D(J, U) ? (ue === 0 && (se = true), K = true, le.push(",", N, N)) : le.push(",", A)), ce.push(le);
          });
          let W = !(V || Y.callee && Y.callee.type === "Import") && y(U, "all") ? "," : "";
          function X() {
            return P(["(", H([A, ...ce]), W, A, ")"], { shouldBreak: true });
          }
          if (K || q.getParentNode().type !== "Decorator" && l(j))
            return X();
          let de = T(j), ie = x(j, U);
          if (de || ie) {
            if (de ? ce.slice(1).some(v) : ce.slice(0, -1).some(v))
              return X();
            let z = [];
            try {
              q.try(() => {
                c(q, (ue, J) => {
                  de && J === 0 && (z = [[L([], { expandFirstArg: true }), ce.length > 1 ? "," : "", se ? N : A, se ? N : ""], ...ce.slice(1)]), ie && J === Q && (z = [...ce.slice(0, -1), L([], { expandLastArg: true })]);
                });
              });
            } catch (ue) {
              if (ue instanceof o)
                return X();
              throw ue;
            }
            return [ce.some(v) ? m : "", f([["(", ...z, ")"], de ? ["(", P(z[0], { shouldBreak: true }), ...z.slice(1), ")"] : ["(", ...ce.slice(0, -1), P(s(z), { shouldBreak: true }), ")"], X()])];
          }
          let Ee = ["(", H([I, ...ce]), b(W), I, ")"];
          return d(q) ? Ee : P(Ee, { shouldBreak: ce.some(v) || K });
        }
        function S(q) {
          let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return q.type === "ObjectExpression" && (q.properties.length > 0 || u(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || u(q)) || q.type === "TSTypeAssertion" && S(q.expression) || F(q) && S(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || M(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && S(q.body, true) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !U && (E(q.body) || q.body.type === "ConditionalExpression") || p(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression";
        }
        function x(q, U) {
          let L = s(q), Y = a(q);
          return !u(L, i.Leading) && !u(L, i.Trailing) && S(L) && (!Y || Y.type !== L.type) && (q.length !== 2 || Y.type !== "ArrowFunctionExpression" || L.type !== "ArrayExpression") && !(q.length > 1 && L.type === "ArrayExpression" && h(L, U));
        }
        function T(q) {
          if (q.length !== 2)
            return false;
          let [U, L] = q;
          return U.type === "ModuleExpression" && R(L) ? true : !u(U) && (U.type === "FunctionExpression" || U.type === "ArrowFunctionExpression" && U.body.type === "BlockStatement") && L.type !== "FunctionExpression" && L.type !== "ArrowFunctionExpression" && L.type !== "ConditionalExpression" && !S(L);
        }
        function k(q) {
          return q.length === 2 && q[0].type === "ArrowFunctionExpression" && n(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some((U) => u(U));
        }
        function M(q) {
          return q.type === "BlockStatement" && (q.body.some((U) => U.type !== "EmptyStatement") || u(q, i.Dangling));
        }
        function R(q) {
          return q.type === "ObjectExpression" && q.properties.length === 1 && w(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && _(q.properties[0].value) && q.properties[0].value.value === "module";
        }
        r.exports = C;
      } }), So = Z({ "src/language-js/print/member.js"(e, r) {
        ne();
        var { builders: { softline: t, group: s, indent: a, label: n } } = Me(), { isNumericLiteral: u, isMemberExpression: i, isCallExpression: l } = Ke(), { printOptionalToken: p } = ct();
        function d(g, c, D) {
          let E = g.getValue(), _ = g.getParentNode(), w, F = 0;
          do
            w = g.getParentNode(F), F++;
          while (w && (i(w) || w.type === "TSNonNullExpression"));
          let A = D("object"), N = y(g, c, D), I = w && (w.type === "NewExpression" || w.type === "BindExpression" || w.type === "AssignmentExpression" && w.left.type !== "Identifier") || E.computed || E.object.type === "Identifier" && E.property.type === "Identifier" && !i(_) || (_.type === "AssignmentExpression" || _.type === "VariableDeclarator") && (l(E.object) && E.object.arguments.length > 0 || E.object.type === "TSNonNullExpression" && l(E.object.expression) && E.object.expression.arguments.length > 0 || A.label === "member-chain");
          return n(A.label === "member-chain" ? "member-chain" : "member", [A, I ? N : s(a([t, N]))]);
        }
        function y(g, c, D) {
          let E = D("property"), _ = g.getValue(), w = p(g);
          return _.computed ? !_.property || u(_.property) ? [w, "[", E, "]"] : s([w, "[", a([t, E]), t, "]"]) : [w, ".", E];
        }
        r.exports = { printMemberExpression: d, printMemberLookup: y };
      } }), Dd = Z({ "src/language-js/print/member-chain.js"(e, r) {
        ne();
        var { printComments: t } = et(), { getLast: s, isNextLineEmptyAfterIndex: a, getNextNonSpaceNonCommentCharacterIndex: n } = Ue(), u = qt(), { isCallExpression: i, isMemberExpression: l, isFunctionOrArrowExpression: p, isLongCurriedCallExpression: d, isMemberish: y, isNumericLiteral: g, isSimpleCallArgument: c, hasComment: D, CommentCheckFlags: E, isNextLineEmpty: _ } = Ke(), { locEnd: w } = ut(), { builders: { join: F, hardline: A, group: N, indent: I, conditionalGroup: P, breakParent: H, label: f }, utils: { willBreak: b } } = Me(), m = Ao(), { printMemberLookup: v } = So(), { printOptionalToken: o, printFunctionTypeParameters: h, printBindExpressionCallee: C } = ct();
        function S(x, T, k) {
          let M = x.getParentNode(), R = !M || M.type === "ExpressionStatement", q = [];
          function U(we) {
            let { originalText: _e } = T, De = n(_e, we, w);
            return _e.charAt(De) === ")" ? De !== false && a(_e, De + 1) : _(we, T);
          }
          function L(we) {
            let _e = we.getValue();
            i(_e) && (y(_e.callee) || i(_e.callee)) ? (q.unshift({ node: _e, printed: [t(we, [o(we), h(we, T, k), m(we, T, k)], T), U(_e) ? A : ""] }), we.call((De) => L(De), "callee")) : y(_e) ? (q.unshift({ node: _e, needsParens: u(we, T), printed: t(we, l(_e) ? v(we, T, k) : C(we, T, k), T) }), we.call((De) => L(De), "object")) : _e.type === "TSNonNullExpression" ? (q.unshift({ node: _e, printed: t(we, "!", T) }), we.call((De) => L(De), "expression")) : q.unshift({ node: _e, printed: k() });
          }
          let Y = x.getValue();
          q.unshift({ node: Y, printed: [o(x), h(x, T, k), m(x, T, k)] }), Y.callee && x.call((we) => L(we), "callee");
          let V = [], j = [q[0]], K = 1;
          for (; K < q.length && (q[K].node.type === "TSNonNullExpression" || i(q[K].node) || l(q[K].node) && q[K].node.computed && g(q[K].node.property)); ++K)
            j.push(q[K]);
          if (!i(q[0].node))
            for (; K + 1 < q.length && y(q[K].node) && y(q[K + 1].node); ++K)
              j.push(q[K]);
          V.push(j), j = [];
          let se = false;
          for (; K < q.length; ++K) {
            if (se && y(q[K].node)) {
              if (q[K].node.computed && g(q[K].node.property)) {
                j.push(q[K]);
                continue;
              }
              V.push(j), j = [], se = false;
            }
            (i(q[K].node) || q[K].node.type === "ImportExpression") && (se = true), j.push(q[K]), D(q[K].node, E.Trailing) && (V.push(j), j = [], se = false);
          }
          j.length > 0 && V.push(j);
          function Q(we) {
            return /^[A-Z]|^[$_]+$/.test(we);
          }
          function ce(we) {
            return we.length <= T.tabWidth;
          }
          function W(we) {
            let _e = we[1].length > 0 && we[1][0].node.computed;
            if (we[0].length === 1) {
              let G = we[0][0].node;
              return G.type === "ThisExpression" || G.type === "Identifier" && (Q(G.name) || R && ce(G.name) || _e);
            }
            let De = s(we[0]).node;
            return l(De) && De.property.type === "Identifier" && (Q(De.property.name) || _e);
          }
          let X = V.length >= 2 && !D(V[1][0].node) && W(V);
          function de(we) {
            let _e = we.map((De) => De.printed);
            return we.length > 0 && s(we).needsParens ? ["(", ..._e, ")"] : _e;
          }
          function ie(we) {
            return we.length === 0 ? "" : I(N([A, F(A, we.map(de))]));
          }
          let Ee = V.map(de), z = Ee, ue = X ? 3 : 2, J = V.flat(), le = J.slice(1, -1).some((we) => D(we.node, E.Leading)) || J.slice(0, -1).some((we) => D(we.node, E.Trailing)) || V[ue] && D(V[ue][0].node, E.Leading);
          if (V.length <= ue && !le)
            return d(x) ? z : N(z);
          let ge = s(V[X ? 1 : 0]).node, pe = !i(ge) && U(ge), Ae = [de(V[0]), X ? V.slice(1, 2).map(de) : "", pe ? A : "", ie(V.slice(X ? 2 : 1))], Ce = q.map((we) => {
            let { node: _e } = we;
            return _e;
          }).filter(i);
          function Oe() {
            let we = s(s(V)).node, _e = s(Ee);
            return i(we) && b(_e) && Ce.slice(0, -1).some((De) => De.arguments.some(p));
          }
          let Ie;
          return le || Ce.length > 2 && Ce.some((we) => !we.arguments.every((_e) => c(_e, 0))) || Ee.slice(0, -1).some(b) || Oe() ? Ie = N(Ae) : Ie = [b(z) || pe ? H : "", P([z, Ae])], f("member-chain", Ie);
        }
        r.exports = S;
      } }), xo = Z({ "src/language-js/print/call-expression.js"(e, r) {
        ne();
        var { builders: { join: t, group: s } } = Me(), a = qt(), { getCallArguments: n, hasFlowAnnotationComment: u, isCallExpression: i, isMemberish: l, isStringLiteral: p, isTemplateOnItsOwnLine: d, isTestCall: y, iterateCallArgumentsPath: g } = Ke(), c = Dd(), D = Ao(), { printOptionalToken: E, printFunctionTypeParameters: _ } = ct();
        function w(A, N, I) {
          let P = A.getValue(), H = A.getParentNode(), f = P.type === "NewExpression", b = P.type === "ImportExpression", m = E(A), v = n(P);
          if (v.length > 0 && (!b && !f && F(P, H) || v.length === 1 && d(v[0], N.originalText) || !f && y(P, H))) {
            let C = [];
            return g(A, () => {
              C.push(I());
            }), [f ? "new " : "", I("callee"), m, _(A, N, I), "(", t(", ", C), ")"];
          }
          let o = (N.parser === "babel" || N.parser === "babel-flow") && P.callee && P.callee.type === "Identifier" && u(P.callee.trailingComments);
          if (o && (P.callee.trailingComments[0].printed = true), !b && !f && l(P.callee) && !A.call((C) => a(C, N), "callee"))
            return c(A, N, I);
          let h = [f ? "new " : "", b ? "import" : I("callee"), m, o ? `/*:: ${P.callee.trailingComments[0].value.slice(2).trim()} */` : "", _(A, N, I), D(A, N, I)];
          return b || i(P.callee) ? s(h) : h;
        }
        function F(A, N) {
          if (A.callee.type !== "Identifier")
            return false;
          if (A.callee.name === "require")
            return true;
          if (A.callee.name === "define") {
            let I = n(A);
            return N.type === "ExpressionStatement" && (I.length === 1 || I.length === 2 && I[0].type === "ArrayExpression" || I.length === 3 && p(I[0]) && I[1].type === "ArrayExpression");
          }
          return false;
        }
        r.exports = { printCallExpression: w };
      } }), tr = Z({ "src/language-js/print/assignment.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, getStringWidth: s } = Ue(), { builders: { line: a, group: n, indent: u, indentIfBreak: i, lineSuffixBoundary: l }, utils: { cleanDoc: p, willBreak: d, canBreak: y } } = Me(), { hasLeadingOwnLineComment: g, isBinaryish: c, isStringLiteral: D, isLiteral: E, isNumericLiteral: _, isCallExpression: w, isMemberExpression: F, getCallArguments: A, rawText: N, hasComment: I, isSignedNumericLiteral: P, isObjectProperty: H } = Ke(), { shouldInlineLogicalExpression: f } = ru(), { printCallExpression: b } = xo();
        function m(W, X, de, ie, Ee, z) {
          let ue = h(W, X, de, ie, z), J = de(z, { assignmentLayout: ue });
          switch (ue) {
            case "break-after-operator":
              return n([n(ie), Ee, n(u([a, J]))]);
            case "never-break-after-operator":
              return n([n(ie), Ee, " ", J]);
            case "fluid": {
              let le = Symbol("assignment");
              return n([n(ie), Ee, n(u(a), { id: le }), l, i(J, { groupId: le })]);
            }
            case "break-lhs":
              return n([ie, Ee, " ", n(J)]);
            case "chain":
              return [n(ie), Ee, a, J];
            case "chain-tail":
              return [n(ie), Ee, u([a, J])];
            case "chain-tail-arrow-chain":
              return [n(ie), Ee, J];
            case "only-left":
              return ie;
          }
        }
        function v(W, X, de) {
          let ie = W.getValue();
          return m(W, X, de, de("left"), [" ", ie.operator], "right");
        }
        function o(W, X, de) {
          return m(W, X, de, de("id"), " =", "init");
        }
        function h(W, X, de, ie, Ee) {
          let z = W.getValue(), ue = z[Ee];
          if (!ue)
            return "only-left";
          let J = !x(ue);
          if (W.match(x, T, (Ae) => !J || Ae.type !== "ExpressionStatement" && Ae.type !== "VariableDeclaration"))
            return J ? ue.type === "ArrowFunctionExpression" && ue.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!J && x(ue.right) || g(X.originalText, ue))
            return "break-after-operator";
          if (ue.type === "CallExpression" && ue.callee.name === "require" || X.parser === "json5" || X.parser === "json")
            return "never-break-after-operator";
          if (S(z) || k(z) || q(z) || U(z) && y(ie))
            return "break-lhs";
          let pe = se(z, ie, X);
          return W.call(() => C(W, X, de, pe), Ee) ? "break-after-operator" : pe || ue.type === "TemplateLiteral" || ue.type === "TaggedTemplateExpression" || ue.type === "BooleanLiteral" || _(ue) || ue.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function C(W, X, de, ie) {
          let Ee = W.getValue();
          if (c(Ee) && !f(Ee))
            return true;
          switch (Ee.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return true;
            case "ConditionalExpression": {
              let { test: J } = Ee;
              return c(J) && !f(J);
            }
            case "ClassExpression":
              return t(Ee.decorators);
          }
          if (ie)
            return false;
          let z = Ee, ue = [];
          for (; ; )
            if (z.type === "UnaryExpression")
              z = z.argument, ue.push("argument");
            else if (z.type === "TSNonNullExpression")
              z = z.expression, ue.push("expression");
            else
              break;
          return !!(D(z) || W.call(() => V(W, X, de), ...ue));
        }
        function S(W) {
          if (T(W)) {
            let X = W.left || W.id;
            return X.type === "ObjectPattern" && X.properties.length > 2 && X.properties.some((de) => H(de) && (!de.shorthand || de.value && de.value.type === "AssignmentPattern"));
          }
          return false;
        }
        function x(W) {
          return W.type === "AssignmentExpression";
        }
        function T(W) {
          return x(W) || W.type === "VariableDeclarator";
        }
        function k(W) {
          let X = M(W);
          if (t(X)) {
            let de = W.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (X.length > 1 && X.some((ie) => ie[de] || ie.default))
              return true;
          }
          return false;
        }
        function M(W) {
          return R(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function R(W) {
          return W.type === "TSTypeAliasDeclaration" || W.type === "TypeAlias";
        }
        function q(W) {
          if (W.type !== "VariableDeclarator")
            return false;
          let { typeAnnotation: X } = W.id;
          if (!X || !X.typeAnnotation)
            return false;
          let de = L(X.typeAnnotation);
          return t(de) && de.length > 1 && de.some((ie) => t(L(ie)) || ie.type === "TSConditionalType");
        }
        function U(W) {
          return W.type === "VariableDeclarator" && W.init && W.init.type === "ArrowFunctionExpression";
        }
        function L(W) {
          return Y(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function Y(W) {
          return W.type === "TSTypeReference" || W.type === "GenericTypeAnnotation";
        }
        function V(W, X, de) {
          let ie = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, Ee = W.getValue(), z = () => V(W, X, de, true);
          if (Ee.type === "TSNonNullExpression")
            return W.call(z, "expression");
          if (w(Ee)) {
            if (b(W, X, de).label === "member-chain")
              return false;
            let J = A(Ee);
            return !(J.length === 0 || J.length === 1 && K(J[0], X)) || Q(Ee, de) ? false : W.call(z, "callee");
          }
          return F(Ee) ? W.call(z, "object") : ie && (Ee.type === "Identifier" || Ee.type === "ThisExpression");
        }
        var j = 0.25;
        function K(W, X) {
          let { printWidth: de } = X;
          if (I(W))
            return false;
          let ie = de * j;
          if (W.type === "ThisExpression" || W.type === "Identifier" && W.name.length <= ie || P(W) && !I(W.argument))
            return true;
          let Ee = W.type === "Literal" && "regex" in W && W.regex.pattern || W.type === "RegExpLiteral" && W.pattern;
          return Ee ? Ee.length <= ie : D(W) ? N(W).length <= ie : W.type === "TemplateLiteral" ? W.expressions.length === 0 && W.quasis[0].value.raw.length <= ie && !W.quasis[0].value.raw.includes(`
`) : E(W);
        }
        function se(W, X, de) {
          if (!H(W))
            return false;
          X = p(X);
          let ie = 3;
          return typeof X == "string" && s(X) < de.tabWidth + ie;
        }
        function Q(W, X) {
          let de = ce(W);
          if (t(de)) {
            if (de.length > 1)
              return true;
            if (de.length === 1) {
              let Ee = de[0];
              if (Ee.type === "TSUnionType" || Ee.type === "UnionTypeAnnotation" || Ee.type === "TSIntersectionType" || Ee.type === "IntersectionTypeAnnotation" || Ee.type === "TSTypeLiteral" || Ee.type === "ObjectTypeAnnotation")
                return true;
            }
            let ie = W.typeParameters ? "typeParameters" : "typeArguments";
            if (d(X(ie)))
              return true;
          }
          return false;
        }
        function ce(W) {
          return W.typeParameters && W.typeParameters.params || W.typeArguments && W.typeArguments.params;
        }
        r.exports = { printVariableDeclarator: o, printAssignmentExpression: v, printAssignment: m, isArrowFunctionVariableDeclarator: U };
      } }), Lr = Z({ "src/language-js/print/function-parameters.js"(e, r) {
        ne();
        var { getNextNonSpaceNonCommentCharacter: t } = Ue(), { printDanglingComments: s } = et(), { builders: { line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p }, utils: { removeLines: d, willBreak: y } } = Me(), { getFunctionParameters: g, iterateFunctionParametersPath: c, isSimpleType: D, isTestCall: E, isTypeAnnotationAFunction: _, isObjectType: w, isObjectTypePropertyAFunction: F, hasRestParameter: A, shouldPrintComma: N, hasComment: I, isNextLineEmpty: P } = Ke(), { locEnd: H } = ut(), { ArgExpansionBailout: f } = Qt(), { printFunctionTypeParameters: b } = ct();
        function m(C, S, x, T, k) {
          let M = C.getValue(), R = g(M), q = k ? b(C, x, S) : "";
          if (R.length === 0)
            return [q, "(", s(C, x, true, (se) => t(x.originalText, se, H) === ")"), ")"];
          let U = C.getParentNode(), L = E(U), Y = v(M), V = [];
          if (c(C, (se, Q) => {
            let ce = Q === R.length - 1;
            ce && M.rest && V.push("..."), V.push(S()), !ce && (V.push(","), L || Y ? V.push(" ") : P(R[Q], x) ? V.push(n, n) : V.push(a));
          }), T) {
            if (y(q) || y(V))
              throw new f();
            return i([d(q), "(", d(V), ")"]);
          }
          let j = R.every((se) => !se.decorators);
          return Y && j ? [q, "(", ...V, ")"] : L ? [q, "(", ...V, ")"] : (F(U) || _(U) || U.type === "TypeAlias" || U.type === "UnionTypeAnnotation" || U.type === "TSUnionType" || U.type === "IntersectionTypeAnnotation" || U.type === "FunctionTypeAnnotation" && U.returnType === M) && R.length === 1 && R[0].name === null && M.this !== R[0] && R[0].typeAnnotation && M.typeParameters === null && D(R[0].typeAnnotation) && !M.rest ? x.arrowParens === "always" ? ["(", ...V, ")"] : V : [q, "(", l([u, ...V]), p(!A(M) && N(x, "all") ? "," : ""), u, ")"];
        }
        function v(C) {
          if (!C)
            return false;
          let S = g(C);
          if (S.length !== 1)
            return false;
          let [x] = S;
          return !I(x) && (x.type === "ObjectPattern" || x.type === "ArrayPattern" || x.type === "Identifier" && x.typeAnnotation && (x.typeAnnotation.type === "TypeAnnotation" || x.typeAnnotation.type === "TSTypeAnnotation") && w(x.typeAnnotation.typeAnnotation) || x.type === "FunctionTypeParam" && w(x.typeAnnotation) || x.type === "AssignmentPattern" && (x.left.type === "ObjectPattern" || x.left.type === "ArrayPattern") && (x.right.type === "Identifier" || x.right.type === "ObjectExpression" && x.right.properties.length === 0 || x.right.type === "ArrayExpression" && x.right.elements.length === 0));
        }
        function o(C) {
          let S;
          return C.returnType ? (S = C.returnType, S.typeAnnotation && (S = S.typeAnnotation)) : C.typeAnnotation && (S = C.typeAnnotation), S;
        }
        function h(C, S) {
          let x = o(C);
          if (!x)
            return false;
          let T = C.typeParameters && C.typeParameters.params;
          if (T) {
            if (T.length > 1)
              return false;
            if (T.length === 1) {
              let k = T[0];
              if (k.constraint || k.default)
                return false;
            }
          }
          return g(C).length === 1 && (w(x) || y(S));
        }
        r.exports = { printFunctionParameters: m, shouldHugFunctionParameters: v, shouldGroupFunctionParameters: h };
      } }), Or = Z({ "src/language-js/print/type-annotation.js"(e, r) {
        ne();
        var { printComments: t, printDanglingComments: s } = et(), { isNonEmptyArray: a } = Ue(), { builders: { group: n, join: u, line: i, softline: l, indent: p, align: d, ifBreak: y } } = Me(), g = qt(), { locStart: c } = ut(), { isSimpleType: D, isObjectType: E, hasLeadingOwnLineComment: _, isObjectTypePropertyAFunction: w, shouldPrintComma: F } = Ke(), { printAssignment: A } = tr(), { printFunctionParameters: N, shouldGroupFunctionParameters: I } = Lr(), { printArrayItems: P } = er();
        function H(x) {
          if (D(x) || E(x))
            return true;
          if (x.type === "UnionTypeAnnotation" || x.type === "TSUnionType") {
            let T = x.types.filter((M) => M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword").length, k = x.types.some((M) => M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference");
            if (x.types.length - 1 === T && k)
              return true;
          }
          return false;
        }
        function f(x, T, k) {
          let M = T.semi ? ";" : "", R = x.getValue(), q = [];
          return q.push("opaque type ", k("id"), k("typeParameters")), R.supertype && q.push(": ", k("supertype")), R.impltype && q.push(" = ", k("impltype")), q.push(M), q;
        }
        function b(x, T, k) {
          let M = T.semi ? ";" : "", R = x.getValue(), q = [];
          R.declare && q.push("declare "), q.push("type ", k("id"), k("typeParameters"));
          let U = R.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [A(x, T, k, q, " =", U), M];
        }
        function m(x, T, k) {
          let M = x.getValue(), R = x.map(k, "types"), q = [], U = false;
          for (let L = 0; L < R.length; ++L)
            L === 0 ? q.push(R[L]) : E(M.types[L - 1]) && E(M.types[L]) ? q.push([" & ", U ? p(R[L]) : R[L]]) : !E(M.types[L - 1]) && !E(M.types[L]) ? q.push(p([" &", i, R[L]])) : (L > 1 && (U = true), q.push(" & ", L > 1 ? p(R[L]) : R[L]));
          return n(q);
        }
        function v(x, T, k) {
          let M = x.getValue(), R = x.getParentNode(), q = R.type !== "TypeParameterInstantiation" && R.type !== "TSTypeParameterInstantiation" && R.type !== "GenericTypeAnnotation" && R.type !== "TSTypeReference" && R.type !== "TSTypeAssertion" && R.type !== "TupleTypeAnnotation" && R.type !== "TSTupleType" && !(R.type === "FunctionTypeParam" && !R.name && x.getParentNode(1).this !== R) && !((R.type === "TypeAlias" || R.type === "VariableDeclarator" || R.type === "TSTypeAliasDeclaration") && _(T.originalText, M)), U = H(M), L = x.map((j) => {
            let K = k();
            return U || (K = d(2, K)), t(j, K, T);
          }, "types");
          if (U)
            return u(" | ", L);
          let Y = q && !_(T.originalText, M), V = [y([Y ? i : "", "| "]), u([i, "| "], L)];
          return g(x, T) ? n([p(V), l]) : R.type === "TupleTypeAnnotation" && R.types.length > 1 || R.type === "TSTupleType" && R.elementTypes.length > 1 ? n([p([y(["(", l]), V]), l, y(")")]) : n(q ? p(V) : V);
        }
        function o(x, T, k) {
          let M = x.getValue(), R = [], q = x.getParentNode(0), U = x.getParentNode(1), L = x.getParentNode(2), Y = M.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && c(q) === c(M) || q.type === "ObjectTypeCallProperty" || L && L.type === "DeclareFunction"), V = Y && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), j = V && Y && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && U.type === "ArrowFunctionExpression";
          w(q) && (Y = true, V = true), j && R.push("(");
          let K = N(x, k, T, false, true), se = M.returnType || M.predicate || M.typeAnnotation ? [Y ? " => " : ": ", k("returnType"), k("predicate"), k("typeAnnotation")] : "", Q = I(M, se);
          return R.push(Q ? n(K) : K), se && R.push(se), j && R.push(")"), n(R);
        }
        function h(x, T, k) {
          let M = x.getValue(), R = M.type === "TSTupleType" ? "elementTypes" : "types", q = M[R], U = a(q), L = U ? l : "";
          return n(["[", p([L, P(x, T, R, k)]), y(U && F(T, "all") ? "," : ""), s(x, T, true), L, "]"]);
        }
        function C(x, T, k) {
          let M = x.getValue(), R = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "[";
          return [k("objectType"), R, k("indexType"), "]"];
        }
        function S(x, T, k) {
          let M = x.getValue();
          return [M.postfix ? "" : k, T("typeAnnotation"), M.postfix ? k : ""];
        }
        r.exports = { printOpaqueType: f, printTypeAlias: b, printIntersectionType: m, printUnionType: v, printFunctionType: o, printTupleType: h, printIndexedAccessType: C, shouldHugType: H, printJSDocType: S };
      } }), jr = Z({ "src/language-js/print/type-parameters.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { join: s, line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p } } = Me(), { isTestCall: d, hasComment: y, CommentCheckFlags: g, isTSXFile: c, shouldPrintComma: D, getFunctionParameters: E, isObjectType: _ } = Ke(), { createGroupIdMapper: w } = Ue(), { shouldHugType: F } = Or(), { isArrowFunctionVariableDeclarator: A } = tr(), N = w("typeParameters");
        function I(f, b, m, v) {
          let o = f.getValue();
          if (!o[v])
            return "";
          if (!Array.isArray(o[v]))
            return m(v);
          let h = f.getNode(2), C = h && d(h), S = f.match((k) => !(k[v].length === 1 && _(k[v][0])), void 0, (k, M) => M === "typeAnnotation", (k) => k.type === "Identifier", A);
          if (o[v].length === 0 || !S && (C || o[v].length === 1 && (o[v][0].type === "NullableTypeAnnotation" || F(o[v][0]))))
            return ["<", s(", ", f.map(m, v)), P(f, b), ">"];
          let T = o.type === "TSTypeParameterInstantiation" ? "" : E(o).length === 1 && c(b) && !o[v][0].constraint && f.getParentNode().type === "ArrowFunctionExpression" ? "," : D(b, "all") ? p(",") : "";
          return i(["<", l([u, s([",", a], f.map(m, v))]), T, u, ">"], { id: N(o) });
        }
        function P(f, b) {
          let m = f.getValue();
          if (!y(m, g.Dangling))
            return "";
          let v = !y(m, g.Line), o = t(f, b, v);
          return v ? o : [o, n];
        }
        function H(f, b, m) {
          let v = f.getValue(), o = [], h = f.getParentNode();
          return h.type === "TSMappedType" ? (o.push("[", m("name")), v.constraint && o.push(" in ", m("constraint")), h.nameType && o.push(" as ", f.callParent(() => m("nameType"))), o.push("]"), o) : (v.variance && o.push(m("variance")), v.in && o.push("in "), v.out && o.push("out "), o.push(m("name")), v.bound && o.push(": ", m("bound")), v.constraint && o.push(" extends ", m("constraint")), v.default && o.push(" = ", m("default")), o);
        }
        r.exports = { printTypeParameter: H, printTypeParameters: I, getTypeParametersGroupId: N };
      } }), rr = Z({ "src/language-js/print/property.js"(e, r) {
        ne();
        var { printComments: t } = et(), { printString: s, printNumber: a } = Ue(), { isNumericLiteral: n, isSimpleNumber: u, isStringLiteral: i, isStringPropSafeToUnquote: l, rawText: p } = Ke(), { printAssignment: d } = tr(), y = /* @__PURE__ */ new WeakMap();
        function g(D, E, _) {
          let w = D.getNode();
          if (w.computed)
            return ["[", _("key"), "]"];
          let F = D.getParentNode(), { key: A } = w;
          if (E.quoteProps === "consistent" && !y.has(F)) {
            let N = (F.properties || F.body || F.members).some((I) => !I.computed && I.key && i(I.key) && !l(I, E));
            y.set(F, N);
          }
          if ((A.type === "Identifier" || n(A) && u(a(p(A))) && String(A.value) === a(p(A)) && !(E.parser === "typescript" || E.parser === "babel-ts")) && (E.parser === "json" || E.quoteProps === "consistent" && y.get(F))) {
            let N = s(JSON.stringify(A.type === "Identifier" ? A.name : A.value.toString()), E);
            return D.call((I) => t(I, N, E), "key");
          }
          return l(w, E) && (E.quoteProps === "as-needed" || E.quoteProps === "consistent" && !y.get(F)) ? D.call((N) => t(N, /^\d/.test(A.value) ? a(A.value) : A.value, E), "key") : _("key");
        }
        function c(D, E, _) {
          return D.getValue().shorthand ? _("value") : d(D, E, _, g(D, E, _), ":", "value");
        }
        r.exports = { printProperty: c, printPropertyKey: g };
      } }), qr = Z({ "src/language-js/print/function.js"(e, r) {
        ne();
        var t = Zt(), { printDanglingComments: s, printCommentsSeparately: a } = et(), n = lt(), { getNextNonSpaceNonCommentCharacterIndex: u } = Ue(), { builders: { line: i, softline: l, group: p, indent: d, ifBreak: y, hardline: g, join: c, indentIfBreak: D }, utils: { removeLines: E, willBreak: _ } } = Me(), { ArgExpansionBailout: w } = Qt(), { getFunctionParameters: F, hasLeadingOwnLineComment: A, isFlowAnnotationComment: N, isJsxNode: I, isTemplateOnItsOwnLine: P, shouldPrintComma: H, startsWithNoLookaheadToken: f, isBinaryish: b, isLineComment: m, hasComment: v, getComments: o, CommentCheckFlags: h, isCallLikeExpression: C, isCallExpression: S, getCallArguments: x, hasNakedLeftSide: T, getLeftSide: k } = Ke(), { locEnd: M } = ut(), { printFunctionParameters: R, shouldGroupFunctionParameters: q } = Lr(), { printPropertyKey: U } = rr(), { printFunctionTypeParameters: L } = ct();
        function Y(ue, J, le, ge) {
          let pe = ue.getValue(), Ae = false;
          if ((pe.type === "FunctionDeclaration" || pe.type === "FunctionExpression") && ge && ge.expandLastArg) {
            let _e = ue.getParentNode();
            S(_e) && x(_e).length > 1 && (Ae = true);
          }
          let Ce = [];
          pe.type === "TSDeclareFunction" && pe.declare && Ce.push("declare "), pe.async && Ce.push("async "), pe.generator ? Ce.push("function* ") : Ce.push("function "), pe.id && Ce.push(J("id"));
          let Oe = R(ue, J, le, Ae), Ie = X(ue, J, le), we = q(pe, Ie);
          return Ce.push(L(ue, le, J), p([we ? p(Oe) : Oe, Ie]), pe.body ? " " : "", J("body")), le.semi && (pe.declare || !pe.body) && Ce.push(";"), Ce;
        }
        function V(ue, J, le) {
          let ge = ue.getNode(), { kind: pe } = ge, Ae = ge.value || ge, Ce = [];
          return !pe || pe === "init" || pe === "method" || pe === "constructor" ? Ae.async && Ce.push("async ") : (t.ok(pe === "get" || pe === "set"), Ce.push(pe, " ")), Ae.generator && Ce.push("*"), Ce.push(U(ue, J, le), ge.optional || ge.key.optional ? "?" : ""), ge === Ae ? Ce.push(j(ue, J, le)) : Ae.type === "FunctionExpression" ? Ce.push(ue.call((Oe) => j(Oe, J, le), "value")) : Ce.push(le("value")), Ce;
        }
        function j(ue, J, le) {
          let ge = ue.getNode(), pe = R(ue, le, J), Ae = X(ue, le, J), Ce = q(ge, Ae), Oe = [L(ue, J, le), p([Ce ? p(pe) : pe, Ae])];
          return ge.body ? Oe.push(" ", le("body")) : Oe.push(J.semi ? ";" : ""), Oe;
        }
        function K(ue, J, le, ge) {
          let pe = ue.getValue(), Ae = [];
          if (pe.async && Ae.push("async "), W(ue, J))
            Ae.push(le(["params", 0]));
          else {
            let Oe = ge && (ge.expandLastArg || ge.expandFirstArg), Ie = X(ue, le, J);
            if (Oe) {
              if (_(Ie))
                throw new w();
              Ie = p(E(Ie));
            }
            Ae.push(p([R(ue, le, J, Oe, true), Ie]));
          }
          let Ce = s(ue, J, true, (Oe) => {
            let Ie = u(J.originalText, Oe, M);
            return Ie !== false && J.originalText.slice(Ie, Ie + 2) === "=>";
          });
          return Ce && Ae.push(" ", Ce), Ae;
        }
        function se(ue, J, le, ge, pe, Ae) {
          let Ce = ue.getName(), Oe = ue.getParentNode(), Ie = C(Oe) && Ce === "callee", we = Boolean(J && J.assignmentLayout), _e = Ae.body.type !== "BlockStatement" && Ae.body.type !== "ObjectExpression" && Ae.body.type !== "SequenceExpression", De = Ie && _e || J && J.assignmentLayout === "chain-tail-arrow-chain", G = Symbol("arrow-chain");
          return Ae.body.type === "SequenceExpression" && (pe = p(["(", d([l, pe]), l, ")"])), p([p(d([Ie || we ? l : "", p(c([" =>", i], le), { shouldBreak: ge })]), { id: G, shouldBreak: De }), " =>", D(_e ? d([i, pe]) : [" ", pe], { groupId: G }), Ie ? y(l, "", { groupId: G }) : ""]);
        }
        function Q(ue, J, le, ge) {
          let pe = ue.getValue(), Ae = [], Ce = [], Oe = false;
          if (function G() {
            let oe = K(ue, J, le, ge);
            if (Ae.length === 0)
              Ae.push(oe);
            else {
              let { leading: ee, trailing: re } = a(ue, J);
              Ae.push([ee, oe]), Ce.unshift(re);
            }
            Oe = Oe || pe.returnType && F(pe).length > 0 || pe.typeParameters || F(pe).some((ee) => ee.type !== "Identifier"), pe.body.type !== "ArrowFunctionExpression" || ge && ge.expandLastArg ? Ce.unshift(le("body", ge)) : (pe = pe.body, ue.call(G, "body"));
          }(), Ae.length > 1)
            return se(ue, ge, Ae, Oe, Ce, pe);
          let Ie = Ae;
          if (Ie.push(" =>"), !A(J.originalText, pe.body) && (pe.body.type === "ArrayExpression" || pe.body.type === "ObjectExpression" || pe.body.type === "BlockStatement" || I(pe.body) || P(pe.body, J.originalText) || pe.body.type === "ArrowFunctionExpression" || pe.body.type === "DoExpression"))
            return p([...Ie, " ", Ce]);
          if (pe.body.type === "SequenceExpression")
            return p([...Ie, p([" (", d([l, Ce]), l, ")"])]);
          let we = (ge && ge.expandLastArg || ue.getParentNode().type === "JSXExpressionContainer") && !v(pe), _e = ge && ge.expandLastArg && H(J, "all"), De = pe.body.type === "ConditionalExpression" && !f(pe.body, (G) => G.type === "ObjectExpression");
          return p([...Ie, p([d([i, De ? y("", "(") : "", Ce, De ? y("", ")") : ""]), we ? [y(_e ? "," : ""), l] : ""])]);
        }
        function ce(ue) {
          let J = F(ue);
          return J.length === 1 && !ue.typeParameters && !v(ue, h.Dangling) && J[0].type === "Identifier" && !J[0].typeAnnotation && !v(J[0]) && !J[0].optional && !ue.predicate && !ue.returnType;
        }
        function W(ue, J) {
          if (J.arrowParens === "always")
            return false;
          if (J.arrowParens === "avoid") {
            let le = ue.getValue();
            return ce(le);
          }
          return false;
        }
        function X(ue, J, le) {
          let ge = ue.getValue(), pe = J("returnType");
          if (ge.returnType && N(le.originalText, ge.returnType))
            return [" /*: ", pe, " */"];
          let Ae = [pe];
          return ge.returnType && ge.returnType.typeAnnotation && Ae.unshift(": "), ge.predicate && Ae.push(ge.returnType ? " " : ": ", J("predicate")), Ae;
        }
        function de(ue, J, le) {
          let ge = ue.getValue(), pe = J.semi ? ";" : "", Ae = [];
          ge.argument && (z(J, ge.argument) ? Ae.push([" (", d([g, le("argument")]), g, ")"]) : b(ge.argument) || ge.argument.type === "SequenceExpression" ? Ae.push(p([y(" (", " "), d([l, le("argument")]), l, y(")")])) : Ae.push(" ", le("argument")));
          let Ce = o(ge), Oe = n(Ce), Ie = Oe && m(Oe);
          return Ie && Ae.push(pe), v(ge, h.Dangling) && Ae.push(" ", s(ue, J, true)), Ie || Ae.push(pe), Ae;
        }
        function ie(ue, J, le) {
          return ["return", de(ue, J, le)];
        }
        function Ee(ue, J, le) {
          return ["throw", de(ue, J, le)];
        }
        function z(ue, J) {
          if (A(ue.originalText, J))
            return true;
          if (T(J)) {
            let le = J, ge;
            for (; ge = k(le); )
              if (le = ge, A(ue.originalText, le))
                return true;
          }
          return false;
        }
        r.exports = { printFunction: Y, printArrowFunction: Q, printMethod: V, printReturnStatement: ie, printThrowStatement: Ee, printMethodInternal: j, shouldPrintParamsWithoutParens: W };
      } }), nu = Z({ "src/language-js/print/decorators.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, hasNewline: s } = Ue(), { builders: { line: a, hardline: n, join: u, breakParent: i, group: l } } = Me(), { locStart: p, locEnd: d } = ut(), { getParentExportDeclaration: y } = Ke();
        function g(w, F, A) {
          let N = w.getValue();
          return l([u(a, w.map(A, "decorators")), E(N, F) ? n : a]);
        }
        function c(w, F, A) {
          return [u(n, w.map(A, "declaration", "decorators")), n];
        }
        function D(w, F, A) {
          let N = w.getValue(), { decorators: I } = N;
          if (!t(I) || _(w.getParentNode()))
            return;
          let P = N.type === "ClassExpression" || N.type === "ClassDeclaration" || E(N, F);
          return [y(w) ? n : P ? i : "", u(a, w.map(A, "decorators")), a];
        }
        function E(w, F) {
          return w.decorators.some((A) => s(F.originalText, d(A)));
        }
        function _(w) {
          if (w.type !== "ExportDefaultDeclaration" && w.type !== "ExportNamedDeclaration" && w.type !== "DeclareExportDeclaration")
            return false;
          let F = w.declaration && w.declaration.decorators;
          return t(F) && p(w) === p(F[0]);
        }
        r.exports = { printDecorators: D, printClassMemberDecorators: g, printDecoratorsBeforeExport: c, hasDecoratorsBeforeExport: _ };
      } }), nr = Z({ "src/language-js/print/class.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, createGroupIdMapper: s } = Ue(), { printComments: a, printDanglingComments: n } = et(), { builders: { join: u, line: i, hardline: l, softline: p, group: d, indent: y, ifBreak: g } } = Me(), { hasComment: c, CommentCheckFlags: D } = Ke(), { getTypeParametersGroupId: E } = jr(), { printMethod: _ } = qr(), { printOptionalToken: w, printTypeAnnotation: F, printDefiniteToken: A } = ct(), { printPropertyKey: N } = rr(), { printAssignment: I } = tr(), { printClassMemberDecorators: P } = nu();
        function H(x, T, k) {
          let M = x.getValue(), R = [];
          M.declare && R.push("declare "), M.abstract && R.push("abstract "), R.push("class");
          let q = M.id && c(M.id, D.Trailing) || M.typeParameters && c(M.typeParameters, D.Trailing) || M.superClass && c(M.superClass) || t(M.extends) || t(M.mixins) || t(M.implements), U = [], L = [];
          if (M.id && U.push(" ", k("id")), U.push(k("typeParameters")), M.superClass) {
            let Y = [h(x, T, k), k("superTypeParameters")], V = x.call((j) => ["extends ", a(j, Y, T)], "superClass");
            q ? L.push(i, d(V)) : L.push(" ", V);
          } else
            L.push(o(x, T, k, "extends"));
          if (L.push(o(x, T, k, "mixins"), o(x, T, k, "implements")), q) {
            let Y;
            v(M) ? Y = [...U, y(L)] : Y = y([...U, L]), R.push(d(Y, { id: f(M) }));
          } else
            R.push(...U, ...L);
          return R.push(" ", k("body")), R;
        }
        var f = s("heritageGroup");
        function b(x) {
          return g(l, "", { groupId: f(x) });
        }
        function m(x) {
          return ["superClass", "extends", "mixins", "implements"].filter((T) => Boolean(x[T])).length > 1;
        }
        function v(x) {
          return x.typeParameters && !c(x.typeParameters, D.Trailing | D.Line) && !m(x);
        }
        function o(x, T, k, M) {
          let R = x.getValue();
          if (!t(R[M]))
            return "";
          let q = n(x, T, true, (U) => {
            let { marker: L } = U;
            return L === M;
          });
          return [v(R) ? g(" ", i, { groupId: E(R.typeParameters) }) : i, q, q && l, M, d(y([i, u([",", i], x.map(k, M))]))];
        }
        function h(x, T, k) {
          let M = k("superClass");
          return x.getParentNode().type === "AssignmentExpression" ? d(g(["(", y([p, M]), p, ")"], M)) : M;
        }
        function C(x, T, k) {
          let M = x.getValue(), R = [];
          return t(M.decorators) && R.push(P(x, T, k)), M.accessibility && R.push(M.accessibility + " "), M.readonly && R.push("readonly "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && R.push("abstract "), M.override && R.push("override "), R.push(_(x, T, k)), R;
        }
        function S(x, T, k) {
          let M = x.getValue(), R = [], q = T.semi ? ";" : "";
          return t(M.decorators) && R.push(P(x, T, k)), M.accessibility && R.push(M.accessibility + " "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.type === "TSAbstractAccessorProperty" || M.abstract) && R.push("abstract "), M.override && R.push("override "), M.readonly && R.push("readonly "), M.variance && R.push(k("variance")), (M.type === "ClassAccessorProperty" || M.type === "AccessorProperty" || M.type === "TSAbstractAccessorProperty") && R.push("accessor "), R.push(N(x, T, k), w(x), A(x), F(x, T, k)), [I(x, T, k, R, " =", "value"), q];
        }
        r.exports = { printClass: H, printClassMethod: C, printClassProperty: S, printHardlineAfterHeritage: b };
      } }), bo = Z({ "src/language-js/print/interface.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { join: s, line: a, group: n, indent: u, ifBreak: i } } = Me(), { hasComment: l, identity: p, CommentCheckFlags: d } = Ke(), { getTypeParametersGroupId: y } = jr(), { printTypeScriptModifiers: g } = ct();
        function c(D, E, _) {
          let w = D.getValue(), F = [];
          w.declare && F.push("declare "), w.type === "TSInterfaceDeclaration" && F.push(w.abstract ? "abstract " : "", g(D, E, _)), F.push("interface");
          let A = [], N = [];
          w.type !== "InterfaceTypeAnnotation" && A.push(" ", _("id"), _("typeParameters"));
          let I = w.typeParameters && !l(w.typeParameters, d.Trailing | d.Line);
          return t(w.extends) && N.push(I ? i(" ", a, { groupId: y(w.typeParameters) }) : a, "extends ", (w.extends.length === 1 ? p : u)(s([",", a], D.map(_, "extends")))), w.id && l(w.id, d.Trailing) || t(w.extends) ? I ? F.push(n([...A, u(N)])) : F.push(n(u([...A, ...N]))) : F.push(...A, ...N), F.push(" ", _("body")), n(F);
        }
        r.exports = { printInterface: c };
      } }), To = Z({ "src/language-js/print/module.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { softline: s, group: a, indent: n, join: u, line: i, ifBreak: l, hardline: p } } = Me(), { printDanglingComments: d } = et(), { hasComment: y, CommentCheckFlags: g, shouldPrintComma: c, needsHardlineAfterDanglingComment: D, isStringLiteral: E, rawText: _ } = Ke(), { locStart: w, hasSameLoc: F } = ut(), { hasDecoratorsBeforeExport: A, printDecoratorsBeforeExport: N } = nu();
        function I(S, x, T) {
          let k = S.getValue(), M = x.semi ? ";" : "", R = [], { importKind: q } = k;
          return R.push("import"), q && q !== "value" && R.push(" ", q), R.push(m(S, x, T), b(S, x, T), o(S, x, T), M), R;
        }
        function P(S, x, T) {
          let k = S.getValue(), M = [];
          A(k) && M.push(N(S, x, T));
          let { type: R, exportKind: q, declaration: U } = k;
          return M.push("export"), (k.default || R === "ExportDefaultDeclaration") && M.push(" default"), y(k, g.Dangling) && (M.push(" ", d(S, x, true)), D(k) && M.push(p)), U ? M.push(" ", T("declaration")) : M.push(q === "type" ? " type" : "", m(S, x, T), b(S, x, T), o(S, x, T)), f(k, x) && M.push(";"), M;
        }
        function H(S, x, T) {
          let k = S.getValue(), M = x.semi ? ";" : "", R = [], { exportKind: q, exported: U } = k;
          return R.push("export"), q === "type" && R.push(" type"), R.push(" *"), U && R.push(" as ", T("exported")), R.push(b(S, x, T), o(S, x, T), M), R;
        }
        function f(S, x) {
          if (!x.semi)
            return false;
          let { type: T, declaration: k } = S, M = S.default || T === "ExportDefaultDeclaration";
          if (!k)
            return true;
          let { type: R } = k;
          return !!(M && R !== "ClassDeclaration" && R !== "FunctionDeclaration" && R !== "TSInterfaceDeclaration" && R !== "DeclareClass" && R !== "DeclareFunction" && R !== "TSDeclareFunction" && R !== "EnumDeclaration");
        }
        function b(S, x, T) {
          let k = S.getValue();
          if (!k.source)
            return "";
          let M = [];
          return v(k, x) || M.push(" from"), M.push(" ", T("source")), M;
        }
        function m(S, x, T) {
          let k = S.getValue();
          if (v(k, x))
            return "";
          let M = [" "];
          if (t(k.specifiers)) {
            let R = [], q = [];
            S.each(() => {
              let U = S.getValue().type;
              if (U === "ExportNamespaceSpecifier" || U === "ExportDefaultSpecifier" || U === "ImportNamespaceSpecifier" || U === "ImportDefaultSpecifier")
                R.push(T());
              else if (U === "ExportSpecifier" || U === "ImportSpecifier")
                q.push(T());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(U)}`);
            }, "specifiers"), M.push(u(", ", R)), q.length > 0 && (R.length > 0 && M.push(", "), q.length > 1 || R.length > 0 || k.specifiers.some((L) => y(L)) ? M.push(a(["{", n([x.bracketSpacing ? i : s, u([",", i], q)]), l(c(x) ? "," : ""), x.bracketSpacing ? i : s, "}"])) : M.push(["{", x.bracketSpacing ? " " : "", ...q, x.bracketSpacing ? " " : "", "}"]));
          } else
            M.push("{}");
          return M;
        }
        function v(S, x) {
          let { type: T, importKind: k, source: M, specifiers: R } = S;
          return T !== "ImportDeclaration" || t(R) || k === "type" ? false : !/{\s*}/.test(x.originalText.slice(w(S), w(M)));
        }
        function o(S, x, T) {
          let k = S.getNode();
          return t(k.assertions) ? [" assert {", x.bracketSpacing ? " " : "", u(", ", S.map(T, "assertions")), x.bracketSpacing ? " " : "", "}"] : "";
        }
        function h(S, x, T) {
          let k = S.getNode(), { type: M } = k, R = [], q = M === "ImportSpecifier" ? k.importKind : k.exportKind;
          q && q !== "value" && R.push(q, " ");
          let U = M.startsWith("Import"), L = U ? "imported" : "local", Y = U ? "local" : "exported", V = k[L], j = k[Y], K = "", se = "";
          return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? K = "*" : V && (K = T(L)), j && !C(k) && (se = T(Y)), R.push(K, K && se ? " as " : "", se), R;
        }
        function C(S) {
          if (S.type !== "ImportSpecifier" && S.type !== "ExportSpecifier")
            return false;
          let { local: x, [S.type === "ImportSpecifier" ? "imported" : "exported"]: T } = S;
          if (x.type !== T.type || !F(x, T))
            return false;
          if (E(x))
            return x.value === T.value && _(x) === _(T);
          switch (x.type) {
            case "Identifier":
              return x.name === T.name;
            default:
              return false;
          }
        }
        r.exports = { printImportDeclaration: I, printExportDeclaration: P, printExportAllDeclaration: H, printModuleSpecifier: h };
      } }), uu = Z({ "src/language-js/print/object.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, group: n, indent: u, ifBreak: i, hardline: l } } = Me(), { getLast: p, hasNewlineInRange: d, hasNewline: y, isNonEmptyArray: g } = Ue(), { shouldPrintComma: c, hasComment: D, getComments: E, CommentCheckFlags: _, isNextLineEmpty: w } = Ke(), { locStart: F, locEnd: A } = ut(), { printOptionalToken: N, printTypeAnnotation: I } = ct(), { shouldHugFunctionParameters: P } = Lr(), { shouldHugType: H } = Or(), { printHardlineAfterHeritage: f } = nr();
        function b(m, v, o) {
          let h = v.semi ? ";" : "", C = m.getValue(), S;
          C.type === "TSTypeLiteral" ? S = "members" : C.type === "TSInterfaceBody" ? S = "body" : S = "properties";
          let x = C.type === "ObjectTypeAnnotation", T = [S];
          x && T.push("indexers", "callProperties", "internalSlots");
          let k = T.map((W) => C[W][0]).sort((W, X) => F(W) - F(X))[0], M = m.getParentNode(0), R = x && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && m.getName() === "body", q = C.type === "TSInterfaceBody" || R || C.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && C.properties.some((W) => W.value && (W.value.type === "ObjectPattern" || W.value.type === "ArrayPattern")) || C.type !== "ObjectPattern" && k && d(v.originalText, F(C), F(k)), U = R ? ";" : C.type === "TSInterfaceBody" || C.type === "TSTypeLiteral" ? i(h, ";") : ",", L = C.type === "RecordExpression" ? "#{" : C.exact ? "{|" : "{", Y = C.exact ? "|}" : "}", V = [];
          for (let W of T)
            m.each((X) => {
              let de = X.getValue();
              V.push({ node: de, printed: o(), loc: F(de) });
            }, W);
          T.length > 1 && V.sort((W, X) => W.loc - X.loc);
          let j = [], K = V.map((W) => {
            let X = [...j, n(W.printed)];
            return j = [U, s], (W.node.type === "TSPropertySignature" || W.node.type === "TSMethodSignature" || W.node.type === "TSConstructSignatureDeclaration") && D(W.node, _.PrettierIgnore) && j.shift(), w(W.node, v) && j.push(l), X;
          });
          if (C.inexact) {
            let W;
            if (D(C, _.Dangling)) {
              let X = D(C, _.Line);
              W = [t(m, v, true), X || y(v.originalText, A(p(E(C)))) ? l : s, "..."];
            } else
              W = ["..."];
            K.push([...j, ...W]);
          }
          let se = p(C[S]), Q = !(C.inexact || se && se.type === "RestElement" || se && (se.type === "TSPropertySignature" || se.type === "TSCallSignatureDeclaration" || se.type === "TSMethodSignature" || se.type === "TSConstructSignatureDeclaration") && D(se, _.PrettierIgnore)), ce;
          if (K.length === 0) {
            if (!D(C, _.Dangling))
              return [L, Y, I(m, v, o)];
            ce = n([L, t(m, v), a, Y, N(m), I(m, v, o)]);
          } else
            ce = [R && g(C.properties) ? f(M) : "", L, u([v.bracketSpacing ? s : a, ...K]), i(Q && (U !== "," || c(v)) ? U : ""), v.bracketSpacing ? s : a, Y, N(m), I(m, v, o)];
          return m.match((W) => W.type === "ObjectPattern" && !W.decorators, (W, X, de) => P(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && de === 0) || m.match(H, (W, X) => X === "typeAnnotation", (W, X) => X === "typeAnnotation", (W, X, de) => P(W) && (X === "params" || X === "parameters" || X === "this" || X === "rest") && de === 0) || !q && m.match((W) => W.type === "ObjectPattern", (W) => W.type === "AssignmentExpression" || W.type === "VariableDeclarator") ? ce : n(ce, { shouldBreak: q });
        }
        r.exports = { printObject: b };
      } }), md = Z({ "src/language-js/print/flow.js"(e, r) {
        ne();
        var t = Zt(), { printDanglingComments: s } = et(), { printString: a, printNumber: n } = Ue(), { builders: { hardline: u, softline: i, group: l, indent: p } } = Me(), { getParentExportDeclaration: d, isFunctionNotation: y, isGetterOrSetter: g, rawText: c, shouldPrintComma: D } = Ke(), { locStart: E, locEnd: _ } = ut(), { replaceTextEndOfLine: w } = Yt(), { printClass: F } = nr(), { printOpaqueType: A, printTypeAlias: N, printIntersectionType: I, printUnionType: P, printFunctionType: H, printTupleType: f, printIndexedAccessType: b } = Or(), { printInterface: m } = bo(), { printTypeParameter: v, printTypeParameters: o } = jr(), { printExportDeclaration: h, printExportAllDeclaration: C } = To(), { printArrayItems: S } = er(), { printObject: x } = uu(), { printPropertyKey: T } = rr(), { printOptionalToken: k, printTypeAnnotation: M, printRestSpread: R } = ct();
        function q(L, Y, V) {
          let j = L.getValue(), K = Y.semi ? ";" : "", se = [];
          switch (j.type) {
            case "DeclareClass":
              return U(L, F(L, Y, V));
            case "DeclareFunction":
              return U(L, ["function ", V("id"), j.predicate ? " " : "", V("predicate"), K]);
            case "DeclareModule":
              return U(L, ["module ", V("id"), " ", V("body")]);
            case "DeclareModuleExports":
              return U(L, ["module.exports", ": ", V("typeAnnotation"), K]);
            case "DeclareVariable":
              return U(L, ["var ", V("id"), K]);
            case "DeclareOpaqueType":
              return U(L, A(L, Y, V));
            case "DeclareInterface":
              return U(L, m(L, Y, V));
            case "DeclareTypeAlias":
              return U(L, N(L, Y, V));
            case "DeclareExportDeclaration":
              return U(L, h(L, Y, V));
            case "DeclareExportAllDeclaration":
              return U(L, C(L, Y, V));
            case "OpaqueType":
              return A(L, Y, V);
            case "TypeAlias":
              return N(L, Y, V);
            case "IntersectionTypeAnnotation":
              return I(L, Y, V);
            case "UnionTypeAnnotation":
              return P(L, Y, V);
            case "FunctionTypeAnnotation":
              return H(L, Y, V);
            case "TupleTypeAnnotation":
              return f(L, Y, V);
            case "GenericTypeAnnotation":
              return [V("id"), o(L, Y, V, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return b(L, Y, V);
            case "TypeAnnotation":
              return V("typeAnnotation");
            case "TypeParameter":
              return v(L, Y, V);
            case "TypeofTypeAnnotation":
              return ["typeof ", V("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [V("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(j.value);
            case "EnumDeclaration":
              return ["enum ", V("id"), " ", V("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (j.type === "EnumSymbolBody" || j.explicitType) {
                let Q = null;
                switch (j.type) {
                  case "EnumBooleanBody":
                    Q = "boolean";
                    break;
                  case "EnumNumberBody":
                    Q = "number";
                    break;
                  case "EnumStringBody":
                    Q = "string";
                    break;
                  case "EnumSymbolBody":
                    Q = "symbol";
                    break;
                }
                se.push("of ", Q, " ");
              }
              if (j.members.length === 0 && !j.hasUnknownMembers)
                se.push(l(["{", s(L, Y), i, "}"]));
              else {
                let Q = j.members.length > 0 ? [u, S(L, Y, "members", V), j.hasUnknownMembers || D(Y) ? "," : ""] : [];
                se.push(l(["{", p([...Q, ...j.hasUnknownMembers ? [u, "..."] : []]), s(L, Y, true), u, "}"]));
              }
              return se;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [V("id"), " = ", typeof j.init == "object" ? V("init") : String(j.init)];
            case "EnumDefaultedMember":
              return V("id");
            case "FunctionTypeParam": {
              let Q = j.name ? V("name") : L.getParentNode().this === j ? "this" : "";
              return [Q, k(L), Q ? ": " : "", V("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return m(L, Y, V);
            case "ClassImplements":
            case "InterfaceExtends":
              return [V("id"), V("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", V("typeAnnotation")];
            case "Variance": {
              let { kind: Q } = j;
              return t.ok(Q === "plus" || Q === "minus"), Q === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return j.static && se.push("static "), se.push(V("value")), se;
            case "ObjectTypeIndexer":
              return [j.static ? "static " : "", j.variance ? V("variance") : "", "[", V("id"), j.id ? ": " : "", V("key"), "]: ", V("value")];
            case "ObjectTypeProperty": {
              let Q = "";
              return j.proto ? Q = "proto " : j.static && (Q = "static "), [Q, g(j) ? j.kind + " " : "", j.variance ? V("variance") : "", T(L, Y, V), k(L), y(j) ? "" : ": ", V("value")];
            }
            case "ObjectTypeAnnotation":
              return x(L, Y, V);
            case "ObjectTypeInternalSlot":
              return [j.static ? "static " : "", "[[", V("id"), "]]", k(L), j.method ? "" : ": ", V("value")];
            case "ObjectTypeSpreadProperty":
              return R(L, Y, V);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [V("qualification"), ".", V("id")];
            case "StringLiteralTypeAnnotation":
              return w(a(c(j), Y));
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof j.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return j.extra ? n(j.extra.raw) : n(j.raw);
            case "TypeCastExpression":
              return ["(", V("expression"), M(L, Y, V), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let Q = o(L, Y, V, "params");
              if (Y.parser === "flow") {
                let ce = E(j), W = _(j), X = Y.originalText.lastIndexOf("/*", ce), de = Y.originalText.indexOf("*/", W);
                if (X !== -1 && de !== -1) {
                  let ie = Y.originalText.slice(X + 2, de).trim();
                  if (ie.startsWith("::") && !ie.includes("/*") && !ie.includes("*/"))
                    return ["/*:: ", Q, " */"];
                }
              }
              return Q;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", V("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(j.type));
          }
        }
        function U(L, Y) {
          let V = d(L);
          return V ? (t.strictEqual(V.type, "DeclareExportDeclaration"), Y) : ["declare ", Y];
        }
        r.exports = { printFlow: q };
      } }), dd = Z({ "src/language-js/utils/is-ts-keyword-type.js"(e, r) {
        ne();
        function t(s) {
          let { type: a } = s;
          return a.startsWith("TS") && a.endsWith("Keyword");
        }
        r.exports = t;
      } }), Bo = Z({ "src/language-js/print/ternary.js"(e, r) {
        ne();
        var { hasNewlineInRange: t } = Ue(), { isJsxNode: s, getComments: a, isCallExpression: n, isMemberExpression: u, isTSTypeExpression: i } = Ke(), { locStart: l, locEnd: p } = ut(), d = Ot(), { builders: { line: y, softline: g, group: c, indent: D, align: E, ifBreak: _, dedent: w, breakParent: F } } = Me();
        function A(f) {
          let b = [f];
          for (let m = 0; m < b.length; m++) {
            let v = b[m];
            for (let o of ["test", "consequent", "alternate"]) {
              let h = v[o];
              if (s(h))
                return true;
              h.type === "ConditionalExpression" && b.push(h);
            }
          }
          return false;
        }
        function N(f, b, m) {
          let v = f.getValue(), o = v.type === "ConditionalExpression", h = o ? "alternate" : "falseType", C = f.getParentNode(), S = o ? m("test") : [m("checkType"), " ", "extends", " ", m("extendsType")];
          return C.type === v.type && C[h] === v ? E(2, S) : S;
        }
        var I = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function P(f) {
          let b = f.getValue();
          if (b.type !== "ConditionalExpression")
            return false;
          let m, v = b;
          for (let o = 0; !m; o++) {
            let h = f.getParentNode(o);
            if (n(h) && h.callee === v || u(h) && h.object === v || h.type === "TSNonNullExpression" && h.expression === v) {
              v = h;
              continue;
            }
            h.type === "NewExpression" && h.callee === v || i(h) && h.expression === v ? (m = f.getParentNode(o + 1), v = h) : m = h;
          }
          return v === b ? false : m[I.get(m.type)] === v;
        }
        function H(f, b, m) {
          let v = f.getValue(), o = v.type === "ConditionalExpression", h = o ? "consequent" : "trueType", C = o ? "alternate" : "falseType", S = o ? ["test"] : ["checkType", "extendsType"], x = v[h], T = v[C], k = [], M = false, R = f.getParentNode(), q = R.type === v.type && S.some((ie) => R[ie] === v), U = R.type === v.type && !q, L, Y, V = 0;
          do
            Y = L || v, L = f.getParentNode(V), V++;
          while (L && L.type === v.type && S.every((ie) => L[ie] !== Y));
          let j = L || R, K = Y;
          if (o && (s(v[S[0]]) || s(x) || s(T) || A(K))) {
            M = true, U = true;
            let ie = (z) => [_("("), D([g, z]), g, _(")")], Ee = (z) => z.type === "NullLiteral" || z.type === "Literal" && z.value === null || z.type === "Identifier" && z.name === "undefined";
            k.push(" ? ", Ee(x) ? m(h) : ie(m(h)), " : ", T.type === v.type || Ee(T) ? m(C) : ie(m(C)));
          } else {
            let ie = [y, "? ", x.type === v.type ? _("", "(") : "", E(2, m(h)), x.type === v.type ? _("", ")") : "", y, ": ", T.type === v.type ? m(C) : E(2, m(C))];
            k.push(R.type !== v.type || R[C] === v || q ? ie : b.useTabs ? w(D(ie)) : E(Math.max(0, b.tabWidth - 2), ie));
          }
          let Q = [...S.map((ie) => a(v[ie])), a(x), a(T)].flat().some((ie) => d(ie) && t(b.originalText, l(ie), p(ie))), ce = (ie) => R === j ? c(ie, { shouldBreak: Q }) : Q ? [ie, F] : ie, W = !M && (u(R) || R.type === "NGPipeExpression" && R.left === v) && !R.computed, X = P(f), de = ce([N(f, b, m), U ? k : D(k), o && W && !X ? g : ""]);
          return q || X ? c([D([g, de]), g]) : de;
        }
        r.exports = { printTernary: H };
      } }), No = Z({ "src/language-js/print/statement.js"(e, r) {
        ne();
        var { builders: { hardline: t } } = Me(), s = qt(), { getLeftSidePathName: a, hasNakedLeftSide: n, isJsxNode: u, isTheOnlyJsxElementInMarkdown: i, hasComment: l, CommentCheckFlags: p, isNextLineEmpty: d } = Ke(), { shouldPrintParamsWithoutParens: y } = qr();
        function g(N, I, P, H) {
          let f = N.getValue(), b = [], m = f.type === "ClassBody", v = c(f[H]);
          return N.each((o, h, C) => {
            let S = o.getValue();
            if (S.type === "EmptyStatement")
              return;
            let x = P();
            !I.semi && !m && !i(I, o) && D(o, I) ? l(S, p.Leading) ? b.push(P([], { needsSemi: true })) : b.push(";", x) : b.push(x), !I.semi && m && F(S) && A(S, C[h + 1]) && b.push(";"), S !== v && (b.push(t), d(S, I) && b.push(t));
          }, H), b;
        }
        function c(N) {
          for (let I = N.length - 1; I >= 0; I--) {
            let P = N[I];
            if (P.type !== "EmptyStatement")
              return P;
          }
        }
        function D(N, I) {
          return N.getNode().type !== "ExpressionStatement" ? false : N.call((H) => E(H, I), "expression");
        }
        function E(N, I) {
          let P = N.getValue();
          switch (P.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return true;
            case "ArrowFunctionExpression": {
              if (!y(N, I))
                return true;
              break;
            }
            case "UnaryExpression": {
              let { prefix: H, operator: f } = P;
              if (H && (f === "+" || f === "-"))
                return true;
              break;
            }
            case "BindExpression": {
              if (!P.object)
                return true;
              break;
            }
            case "Literal": {
              if (P.regex)
                return true;
              break;
            }
            default:
              if (u(P))
                return true;
          }
          return s(N, I) ? true : n(P) ? N.call((H) => E(H, I), ...a(N, P)) : false;
        }
        function _(N, I, P) {
          return g(N, I, P, "body");
        }
        function w(N, I, P) {
          return g(N, I, P, "consequent");
        }
        var F = (N) => {
          let { type: I } = N;
          return I === "ClassProperty" || I === "PropertyDefinition" || I === "ClassPrivateProperty" || I === "ClassAccessorProperty" || I === "AccessorProperty" || I === "TSAbstractPropertyDefinition" || I === "TSAbstractAccessorProperty";
        };
        function A(N, I) {
          let { type: P, name: H } = N.key;
          if (!N.computed && P === "Identifier" && (H === "static" || H === "get" || H === "set" || H === "accessor") && !N.value && !N.typeAnnotation)
            return true;
          if (!I || I.static || I.accessibility)
            return false;
          if (!I.computed) {
            let f = I.key && I.key.name;
            if (f === "in" || f === "instanceof")
              return true;
          }
          if (F(I) && I.variance && !I.static && !I.declare)
            return true;
          switch (I.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return I.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((I.value ? I.value.async : I.async) || I.kind === "get" || I.kind === "set")
                return false;
              let b = I.value ? I.value.generator : I.generator;
              return !!(I.computed || b);
            }
            case "TSIndexSignature":
              return true;
          }
          return false;
        }
        r.exports = { printBody: _, printSwitchCaseConsequent: w };
      } }), wo = Z({ "src/language-js/print/block.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { isNonEmptyArray: s } = Ue(), { builders: { hardline: a, indent: n } } = Me(), { hasComment: u, CommentCheckFlags: i, isNextLineEmpty: l } = Ke(), { printHardlineAfterHeritage: p } = nr(), { printBody: d } = No();
        function y(c, D, E) {
          let _ = c.getValue(), w = [];
          if (_.type === "StaticBlock" && w.push("static "), _.type === "ClassBody" && s(_.body)) {
            let A = c.getParentNode();
            w.push(p(A));
          }
          w.push("{");
          let F = g(c, D, E);
          if (F)
            w.push(n([a, F]), a);
          else {
            let A = c.getParentNode(), N = c.getParentNode(1);
            A.type === "ArrowFunctionExpression" || A.type === "FunctionExpression" || A.type === "FunctionDeclaration" || A.type === "ObjectMethod" || A.type === "ClassMethod" || A.type === "ClassPrivateMethod" || A.type === "ForStatement" || A.type === "WhileStatement" || A.type === "DoWhileStatement" || A.type === "DoExpression" || A.type === "CatchClause" && !N.finalizer || A.type === "TSModuleDeclaration" || A.type === "TSDeclareFunction" || _.type === "StaticBlock" || _.type === "ClassBody" || w.push(a);
          }
          return w.push("}"), w;
        }
        function g(c, D, E) {
          let _ = c.getValue(), w = s(_.directives), F = _.body.some((I) => I.type !== "EmptyStatement"), A = u(_, i.Dangling);
          if (!w && !F && !A)
            return "";
          let N = [];
          if (w && c.each((I, P, H) => {
            N.push(E()), (P < H.length - 1 || F || A) && (N.push(a), l(I.getValue(), D) && N.push(a));
          }, "directives"), F && N.push(d(c, D, E)), A && N.push(t(c, D, true)), _.type === "Program") {
            let I = c.getParentNode();
            (!I || I.type !== "ModuleExpression") && N.push(a);
          }
          return N;
        }
        r.exports = { printBlock: y, printBlockBody: g };
      } }), gd = Z({ "src/language-js/print/typescript.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { hasNewlineInRange: s } = Ue(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: d, ifBreak: y } } = Me(), { isLiteral: g, getTypeScriptMappedTypeModifier: c, shouldPrintComma: D, isCallExpression: E, isMemberExpression: _ } = Ke(), w = dd(), { locStart: F, locEnd: A } = ut(), { printOptionalToken: N, printTypeScriptModifiers: I } = ct(), { printTernary: P } = Bo(), { printFunctionParameters: H, shouldGroupFunctionParameters: f } = Lr(), { printTemplateLiteral: b } = jt(), { printArrayItems: m } = er(), { printObject: v } = uu(), { printClassProperty: o, printClassMethod: h } = nr(), { printTypeParameter: C, printTypeParameters: S } = jr(), { printPropertyKey: x } = rr(), { printFunction: T, printMethodInternal: k } = qr(), { printInterface: M } = bo(), { printBlock: R } = wo(), { printTypeAlias: q, printIntersectionType: U, printUnionType: L, printFunctionType: Y, printTupleType: V, printIndexedAccessType: j, printJSDocType: K } = Or();
        function se(Q, ce, W) {
          let X = Q.getValue();
          if (!X.type.startsWith("TS"))
            return;
          if (w(X))
            return X.type.slice(2, -7).toLowerCase();
          let de = ce.semi ? ";" : "", ie = [];
          switch (X.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let Ee = !(X.expression.type === "ArrayExpression" || X.expression.type === "ObjectExpression"), z = l(["<", p([i, W("typeAnnotation")]), i, ">"]), ue = [y("("), p([i, W("expression")]), i, y(")")];
              return Ee ? d([[z, W("expression")], [z, l(ue, { shouldBreak: true })], [z, W("expression")]]) : l([z, W("expression")]);
            }
            case "TSDeclareFunction":
              return T(Q, W, ce);
            case "TSExportAssignment":
              return ["export = ", W("expression"), de];
            case "TSModuleBlock":
              return R(Q, ce, W);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return v(Q, ce, W);
            case "TSTypeAliasDeclaration":
              return q(Q, ce, W);
            case "TSQualifiedName":
              return a(".", [W("left"), W("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return h(Q, ce, W);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition":
              return o(Q, ce, W);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return ie.push(W("expression")), X.typeParameters && ie.push(W("typeParameters")), ie;
            case "TSTemplateLiteralType":
              return b(Q, W, ce);
            case "TSNamedTupleMember":
              return [W("label"), X.optional ? "?" : "", ": ", W("elementType")];
            case "TSRestType":
              return ["...", W("typeAnnotation")];
            case "TSOptionalType":
              return [W("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return M(Q, ce, W);
            case "TSClassImplements":
              return [W("expression"), W("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return S(Q, ce, W, "params");
            case "TSTypeParameter":
              return C(Q, ce, W);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let Ee = X.type === "TSAsExpression" ? "as" : "satisfies";
              ie.push(W("expression"), ` ${Ee} `, W("typeAnnotation"));
              let z = Q.getParentNode();
              return E(z) && z.callee === X || _(z) && z.object === X ? l([p([i, ...ie]), i]) : ie;
            }
            case "TSArrayType":
              return [W("elementType"), "[]"];
            case "TSPropertySignature":
              return X.readonly && ie.push("readonly "), ie.push(x(Q, ce, W), N(Q)), X.typeAnnotation && ie.push(": ", W("typeAnnotation")), X.initializer && ie.push(" = ", W("initializer")), ie;
            case "TSParameterProperty":
              return X.accessibility && ie.push(X.accessibility + " "), X.export && ie.push("export "), X.static && ie.push("static "), X.override && ie.push("override "), X.readonly && ie.push("readonly "), ie.push(W("parameter")), ie;
            case "TSTypeQuery":
              return ["typeof ", W("exprName"), W("typeParameters")];
            case "TSIndexSignature": {
              let Ee = Q.getParentNode(), z = X.parameters.length > 1 ? y(D(ce) ? "," : "") : "", ue = l([p([i, a([", ", i], Q.map(W, "parameters"))]), z, i]);
              return [X.export ? "export " : "", X.accessibility ? [X.accessibility, " "] : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.declare ? "declare " : "", "[", X.parameters ? ue : "", X.typeAnnotation ? "]: " : "]", X.typeAnnotation ? W("typeAnnotation") : "", Ee.type === "ClassBody" ? de : ""];
            }
            case "TSTypePredicate":
              return [X.asserts ? "asserts " : "", W("parameterName"), X.typeAnnotation ? [" is ", W("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [W("expression"), "!"];
            case "TSImportType":
              return [X.isTypeOf ? "typeof " : "", "import(", W(X.parameter ? "parameter" : "argument"), ")", X.qualifier ? [".", W("qualifier")] : "", S(Q, ce, W, "typeParameters")];
            case "TSLiteralType":
              return W("literal");
            case "TSIndexedAccessType":
              return j(Q, ce, W);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (X.type === "TSConstructorType" && X.abstract && ie.push("abstract "), X.type !== "TSCallSignatureDeclaration" && ie.push("new "), ie.push(l(H(Q, W, ce, false, true))), X.returnType || X.typeAnnotation) {
                let Ee = X.type === "TSConstructorType";
                ie.push(Ee ? " => " : ": ", W("returnType"), W("typeAnnotation"));
              }
              return ie;
            }
            case "TSTypeOperator":
              return [X.operator, " ", W("typeAnnotation")];
            case "TSMappedType": {
              let Ee = s(ce.originalText, F(X), A(X));
              return l(["{", p([ce.bracketSpacing ? n : i, X.readonly ? [c(X.readonly, "readonly"), " "] : "", I(Q, ce, W), W("typeParameter"), X.optional ? c(X.optional, "?") : "", X.typeAnnotation ? ": " : "", W("typeAnnotation"), y(de)]), t(Q, ce, true), ce.bracketSpacing ? n : i, "}"], { shouldBreak: Ee });
            }
            case "TSMethodSignature": {
              let Ee = X.kind && X.kind !== "method" ? `${X.kind} ` : "";
              ie.push(X.accessibility ? [X.accessibility, " "] : "", Ee, X.export ? "export " : "", X.static ? "static " : "", X.readonly ? "readonly " : "", X.abstract ? "abstract " : "", X.declare ? "declare " : "", X.computed ? "[" : "", W("key"), X.computed ? "]" : "", N(Q));
              let z = H(Q, W, ce, false, true), ue = X.returnType ? "returnType" : "typeAnnotation", J = X[ue], le = J ? W(ue) : "", ge = f(X, le);
              return ie.push(ge ? l(z) : z), J && ie.push(": ", l(le)), l(ie);
            }
            case "TSNamespaceExportDeclaration":
              return ie.push("export as namespace ", W("id")), ce.semi && ie.push(";"), l(ie);
            case "TSEnumDeclaration":
              return X.declare && ie.push("declare "), X.modifiers && ie.push(I(Q, ce, W)), X.const && ie.push("const "), ie.push("enum ", W("id"), " "), X.members.length === 0 ? ie.push(l(["{", t(Q, ce), i, "}"])) : ie.push(l(["{", p([u, m(Q, ce, "members", W), D(ce, "es5") ? "," : ""]), t(Q, ce, true), u, "}"])), ie;
            case "TSEnumMember":
              return X.computed ? ie.push("[", W("id"), "]") : ie.push(W("id")), X.initializer && ie.push(" = ", W("initializer")), ie;
            case "TSImportEqualsDeclaration":
              return X.isExport && ie.push("export "), ie.push("import "), X.importKind && X.importKind !== "value" && ie.push(X.importKind, " "), ie.push(W("id"), " = ", W("moduleReference")), ce.semi && ie.push(";"), l(ie);
            case "TSExternalModuleReference":
              return ["require(", W("expression"), ")"];
            case "TSModuleDeclaration": {
              let Ee = Q.getParentNode(), z = g(X.id), ue = Ee.type === "TSModuleDeclaration", J = X.body && X.body.type === "TSModuleDeclaration";
              if (ue)
                ie.push(".");
              else {
                X.declare && ie.push("declare "), ie.push(I(Q, ce, W));
                let le = ce.originalText.slice(F(X), F(X.id));
                X.id.type === "Identifier" && X.id.name === "global" && !/namespace|module/.test(le) || ie.push(z || /(?:^|\s)module(?:\s|$)/.test(le) ? "module " : "namespace ");
              }
              return ie.push(W("id")), J ? ie.push(W("body")) : X.body ? ie.push(" ", l(W("body"))) : ie.push(de), ie;
            }
            case "TSConditionalType":
              return P(Q, ce, W);
            case "TSInferType":
              return ["infer", " ", W("typeParameter")];
            case "TSIntersectionType":
              return U(Q, ce, W);
            case "TSUnionType":
              return L(Q, ce, W);
            case "TSFunctionType":
              return Y(Q, ce, W);
            case "TSTupleType":
              return V(Q, ce, W);
            case "TSTypeReference":
              return [W("typeName"), S(Q, ce, W, "typeParameters")];
            case "TSTypeAnnotation":
              return W("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return k(Q, ce, W);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return K(Q, W, "?");
            case "TSJSDocNonNullableType":
              return K(Q, W, "!");
            case "TSInstantiationExpression":
              return [W("expression"), W("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(X.type)}.`);
          }
        }
        r.exports = { printTypescript: se };
      } }), yd = Z({ "src/language-js/print/comment.js"(e, r) {
        ne();
        var { hasNewline: t } = Ue(), { builders: { join: s, hardline: a }, utils: { replaceTextEndOfLine: n } } = Me(), { isLineComment: u } = Ke(), { locStart: i, locEnd: l } = ut(), p = Ot();
        function d(c, D) {
          let E = c.getValue();
          if (u(E))
            return D.originalText.slice(i(E), l(E)).trimEnd();
          if (p(E)) {
            if (y(E)) {
              let F = g(E);
              return E.trailing && !t(D.originalText, i(E), { backwards: true }) ? [a, F] : F;
            }
            let _ = l(E), w = D.originalText.slice(_ - 3, _) === "*-/";
            return ["/*", n(E.value), w ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(E));
        }
        function y(c) {
          let D = `*${c.value}*`.split(`
`);
          return D.length > 1 && D.every((E) => E.trim()[0] === "*");
        }
        function g(c) {
          let D = c.value.split(`
`);
          return ["/*", s(a, D.map((E, _) => _ === 0 ? E.trimEnd() : " " + (_ < D.length - 1 ? E.trim() : E.trimStart()))), "*/"];
        }
        r.exports = { printComment: d };
      } }), hd = Z({ "src/language-js/print/literal.js"(e, r) {
        ne();
        var { printString: t, printNumber: s } = Ue(), { replaceTextEndOfLine: a } = Yt(), { printDirective: n } = ct();
        function u(d, y) {
          let g = d.getNode();
          switch (g.type) {
            case "RegExpLiteral":
              return p(g);
            case "BigIntLiteral":
              return l(g.bigint || g.extra.raw);
            case "NumericLiteral":
              return s(g.extra.raw);
            case "StringLiteral":
              return a(t(g.extra.raw, y));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(g.value);
            case "DecimalLiteral":
              return s(g.value) + "m";
            case "Literal": {
              if (g.regex)
                return p(g.regex);
              if (g.bigint)
                return l(g.raw);
              if (g.decimal)
                return s(g.decimal) + "m";
              let { value: c } = g;
              return typeof c == "number" ? s(g.raw) : typeof c == "string" ? i(d) ? n(g.raw, y) : a(t(g.raw, y)) : String(c);
            }
          }
        }
        function i(d) {
          if (d.getName() !== "expression")
            return;
          let y = d.getParentNode();
          return y.type === "ExpressionStatement" && y.directive;
        }
        function l(d) {
          return d.toLowerCase();
        }
        function p(d) {
          let { pattern: y, flags: g } = d;
          return g = [...g].sort().join(""), `/${y}/${g}`;
        }
        r.exports = { printLiteral: u };
      } }), vd = Z({ "src/language-js/printer-estree.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { hasNewline: s } = Ue(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p }, utils: { replaceTextEndOfLine: d } } = Me(), y = td(), g = rd(), { insertPragma: c } = Co(), D = Eo(), E = qt(), _ = Fo(), { hasFlowShorthandAnnotationComment: w, hasComment: F, CommentCheckFlags: A, isTheOnlyJsxElementInMarkdown: N, isLineComment: I, isNextLineEmpty: P, needsHardlineAfterDanglingComment: H, hasIgnoreComment: f, isCallExpression: b, isMemberExpression: m, markerForIfWithoutBlockAndSameLineComment: v } = Ke(), { locStart: o, locEnd: h } = ut(), C = Ot(), { printHtmlBinding: S, isVueEventBindingExpression: x } = cd(), { printAngular: T } = pd(), { printJsx: k, hasJsxIgnoreComment: M } = fd(), { printFlow: R } = md(), { printTypescript: q } = gd(), { printOptionalToken: U, printBindExpressionCallee: L, printTypeAnnotation: Y, adjustClause: V, printRestSpread: j, printDefiniteToken: K, printDirective: se } = ct(), { printImportDeclaration: Q, printExportDeclaration: ce, printExportAllDeclaration: W, printModuleSpecifier: X } = To(), { printTernary: de } = Bo(), { printTemplateLiteral: ie } = jt(), { printArray: Ee } = er(), { printObject: z } = uu(), { printClass: ue, printClassMethod: J, printClassProperty: le } = nr(), { printProperty: ge } = rr(), { printFunction: pe, printArrowFunction: Ae, printMethod: Ce, printReturnStatement: Oe, printThrowStatement: Ie } = qr(), { printCallExpression: we } = xo(), { printVariableDeclarator: _e, printAssignmentExpression: De } = tr(), { printBinaryishExpression: G } = ru(), { printSwitchCaseConsequent: oe } = No(), { printMemberExpression: ee } = So(), { printBlock: re, printBlockBody: be } = wo(), { printComment: ve } = yd(), { printLiteral: fe } = hd(), { printDecorators: B } = nu();
        function $(Fe, Ne, he, ze) {
          let Te = te(Fe, Ne, he, ze);
          if (!Te)
            return "";
          let Ye = Fe.getValue(), { type: Se } = Ye;
          if (Se === "ClassMethod" || Se === "ClassPrivateMethod" || Se === "ClassProperty" || Se === "ClassAccessorProperty" || Se === "AccessorProperty" || Se === "TSAbstractAccessorProperty" || Se === "PropertyDefinition" || Se === "TSAbstractPropertyDefinition" || Se === "ClassPrivateProperty" || Se === "MethodDefinition" || Se === "TSAbstractMethodDefinition" || Se === "TSDeclareMethod")
            return Te;
          let ke = [Te], je = B(Fe, Ne, he), Je = Ye.type === "ClassExpression" && je;
          if (je && (ke = [...je, Te], !Je))
            return l(ke);
          if (!E(Fe, Ne))
            return ze && ze.needsSemi && ke.unshift(";"), ke.length === 1 && ke[0] === Te ? Te : ke;
          if (Je && (ke = [p([n, ...ke])]), ke.unshift("("), ze && ze.needsSemi && ke.unshift(";"), w(Ye)) {
            let [qe] = Ye.trailingComments;
            ke.push(" /*", qe.value.trimStart(), "*/"), qe.printed = true;
          }
          return Je && ke.push(n), ke.push(")"), ke;
        }
        function te(Fe, Ne, he, ze) {
          let Te = Fe.getValue(), Ye = Ne.semi ? ";" : "";
          if (!Te)
            return "";
          if (typeof Te == "string")
            return Te;
          for (let ke of [fe, S, T, k, R, q]) {
            let je = ke(Fe, Ne, he);
            if (typeof je < "u")
              return je;
          }
          let Se = [];
          switch (Te.type) {
            case "JsExpressionRoot":
              return he("node");
            case "JsonRoot":
              return [he("node"), u];
            case "File":
              return Te.program && Te.program.interpreter && Se.push(he(["program", "interpreter"])), Se.push(he("program")), Se;
            case "Program":
              return be(Fe, Ne, he);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (Ne.parser === "__vue_event_binding" || Ne.parser === "__vue_ts_event_binding") {
                let je = Fe.getParentNode();
                if (je.type === "Program" && je.body.length === 1 && je.body[0] === Te)
                  return [he("expression"), x(Te.expression) ? ";" : ""];
              }
              let ke = t(Fe, Ne, true, (je) => {
                let { marker: Je } = je;
                return Je === v;
              });
              return [he("expression"), N(Ne, Fe) ? "" : Ye, ke ? [" ", ke] : ""];
            }
            case "ParenthesizedExpression":
              return !F(Te.expression) && (Te.expression.type === "ObjectExpression" || Te.expression.type === "ArrayExpression") ? ["(", he("expression"), ")"] : l(["(", p([i, he("expression")]), i, ")"]);
            case "AssignmentExpression":
              return De(Fe, Ne, he);
            case "VariableDeclarator":
              return _e(Fe, Ne, he);
            case "BinaryExpression":
            case "LogicalExpression":
              return G(Fe, Ne, he);
            case "AssignmentPattern":
              return [he("left"), " = ", he("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return ee(Fe, Ne, he);
            case "MetaProperty":
              return [he("meta"), ".", he("property")];
            case "BindExpression":
              return Te.object && Se.push(he("object")), Se.push(l(p([i, L(Fe, Ne, he)]))), Se;
            case "Identifier":
              return [Te.name, U(Fe), K(Fe), Y(Fe, Ne, he)];
            case "V8IntrinsicIdentifier":
              return ["%", Te.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return j(Fe, Ne, he);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return pe(Fe, he, Ne, ze);
            case "ArrowFunctionExpression":
              return Ae(Fe, Ne, he, ze);
            case "YieldExpression":
              return Se.push("yield"), Te.delegate && Se.push("*"), Te.argument && Se.push(" ", he("argument")), Se;
            case "AwaitExpression": {
              if (Se.push("await"), Te.argument) {
                Se.push(" ", he("argument"));
                let ke = Fe.getParentNode();
                if (b(ke) && ke.callee === Te || m(ke) && ke.object === Te) {
                  Se = [p([i, ...Se]), i];
                  let je = Fe.findAncestor((Je) => Je.type === "AwaitExpression" || Je.type === "BlockStatement");
                  if (!je || je.type !== "AwaitExpression")
                    return l(Se);
                }
              }
              return Se;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return ce(Fe, Ne, he);
            case "ExportAllDeclaration":
              return W(Fe, Ne, he);
            case "ImportDeclaration":
              return Q(Fe, Ne, he);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return X(Fe, Ne, he);
            case "ImportAttribute":
              return [he("key"), ": ", he("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return re(Fe, Ne, he);
            case "ThrowStatement":
              return Ie(Fe, Ne, he);
            case "ReturnStatement":
              return Oe(Fe, Ne, he);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return we(Fe, Ne, he);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return z(Fe, Ne, he);
            case "ObjectProperty":
            case "Property":
              return Te.method || Te.kind === "get" || Te.kind === "set" ? Ce(Fe, Ne, he) : ge(Fe, Ne, he);
            case "ObjectMethod":
              return Ce(Fe, Ne, he);
            case "Decorator":
              return ["@", he("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return Ee(Fe, Ne, he);
            case "SequenceExpression": {
              let ke = Fe.getParentNode(0);
              if (ke.type === "ExpressionStatement" || ke.type === "ForStatement") {
                let je = [];
                return Fe.each((Je, Be) => {
                  Be === 0 ? je.push(he()) : je.push(",", p([n, he()]));
                }, "expressions"), l(je);
              }
              return l(a([",", n], Fe.map(he, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [he("value"), Ye];
            case "DirectiveLiteral":
              return se(Te.extra.raw, Ne);
            case "UnaryExpression":
              return Se.push(Te.operator), /[a-z]$/.test(Te.operator) && Se.push(" "), F(Te.argument) ? Se.push(l(["(", p([i, he("argument")]), i, ")"])) : Se.push(he("argument")), Se;
            case "UpdateExpression":
              return Se.push(he("argument"), Te.operator), Te.prefix && Se.reverse(), Se;
            case "ConditionalExpression":
              return de(Fe, Ne, he);
            case "VariableDeclaration": {
              let ke = Fe.map(he, "declarations"), je = Fe.getParentNode(), Je = je.type === "ForStatement" || je.type === "ForInStatement" || je.type === "ForOfStatement", Be = Te.declarations.some((Re) => Re.init), qe;
              return ke.length === 1 && !F(Te.declarations[0]) ? qe = ke[0] : ke.length > 0 && (qe = p(ke[0])), Se = [Te.declare ? "declare " : "", Te.kind, qe ? [" ", qe] : "", p(ke.slice(1).map((Re) => [",", Be && !Je ? u : n, Re]))], Je && je.body !== Te || Se.push(Ye), l(Se);
            }
            case "WithStatement":
              return l(["with (", he("object"), ")", V(Te.body, he("body"))]);
            case "IfStatement": {
              let ke = V(Te.consequent, he("consequent")), je = l(["if (", l([p([i, he("test")]), i]), ")", ke]);
              if (Se.push(je), Te.alternate) {
                let Je = F(Te.consequent, A.Trailing | A.Line) || H(Te), Be = Te.consequent.type === "BlockStatement" && !Je;
                Se.push(Be ? " " : u), F(Te, A.Dangling) && Se.push(t(Fe, Ne, true), Je ? u : " "), Se.push("else", l(V(Te.alternate, he("alternate"), Te.alternate.type === "IfStatement")));
              }
              return Se;
            }
            case "ForStatement": {
              let ke = V(Te.body, he("body")), je = t(Fe, Ne, true), Je = je ? [je, i] : "";
              return !Te.init && !Te.test && !Te.update ? [Je, l(["for (;;)", ke])] : [Je, l(["for (", l([p([i, he("init"), ";", n, he("test"), ";", n, he("update")]), i]), ")", ke])];
            }
            case "WhileStatement":
              return l(["while (", l([p([i, he("test")]), i]), ")", V(Te.body, he("body"))]);
            case "ForInStatement":
              return l(["for (", he("left"), " in ", he("right"), ")", V(Te.body, he("body"))]);
            case "ForOfStatement":
              return l(["for", Te.await ? " await" : "", " (", he("left"), " of ", he("right"), ")", V(Te.body, he("body"))]);
            case "DoWhileStatement": {
              let ke = V(Te.body, he("body"));
              return Se = [l(["do", ke])], Te.body.type === "BlockStatement" ? Se.push(" ") : Se.push(u), Se.push("while (", l([p([i, he("test")]), i]), ")", Ye), Se;
            }
            case "DoExpression":
              return [Te.async ? "async " : "", "do ", he("body")];
            case "BreakStatement":
              return Se.push("break"), Te.label && Se.push(" ", he("label")), Se.push(Ye), Se;
            case "ContinueStatement":
              return Se.push("continue"), Te.label && Se.push(" ", he("label")), Se.push(Ye), Se;
            case "LabeledStatement":
              return Te.body.type === "EmptyStatement" ? [he("label"), ":;"] : [he("label"), ": ", he("body")];
            case "TryStatement":
              return ["try ", he("block"), Te.handler ? [" ", he("handler")] : "", Te.finalizer ? [" finally ", he("finalizer")] : ""];
            case "CatchClause":
              if (Te.param) {
                let ke = F(Te.param, (Je) => !C(Je) || Je.leading && s(Ne.originalText, h(Je)) || Je.trailing && s(Ne.originalText, o(Je), { backwards: true })), je = he("param");
                return ["catch ", ke ? ["(", p([i, je]), i, ") "] : ["(", je, ") "], he("body")];
              }
              return ["catch ", he("body")];
            case "SwitchStatement":
              return [l(["switch (", p([i, he("discriminant")]), i, ")"]), " {", Te.cases.length > 0 ? p([u, a(u, Fe.map((ke, je, Je) => {
                let Be = ke.getValue();
                return [he(), je !== Je.length - 1 && P(Be, Ne) ? u : ""];
              }, "cases"))]) : "", u, "}"];
            case "SwitchCase": {
              Te.test ? Se.push("case ", he("test"), ":") : Se.push("default:"), F(Te, A.Dangling) && Se.push(" ", t(Fe, Ne, true));
              let ke = Te.consequent.filter((je) => je.type !== "EmptyStatement");
              if (ke.length > 0) {
                let je = oe(Fe, Ne, he);
                Se.push(ke.length === 1 && ke[0].type === "BlockStatement" ? [" ", je] : p([u, je]));
              }
              return Se;
            }
            case "DebuggerStatement":
              return ["debugger", Ye];
            case "ClassDeclaration":
            case "ClassExpression":
              return ue(Fe, Ne, he);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return J(Fe, Ne, he);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
            case "AccessorProperty":
              return le(Fe, Ne, he);
            case "TemplateElement":
              return d(Te.value.raw);
            case "TemplateLiteral":
              return ie(Fe, he, Ne);
            case "TaggedTemplateExpression":
              return [he("tag"), he("typeParameters"), he("quasi")];
            case "PrivateIdentifier":
              return ["#", he("name")];
            case "PrivateName":
              return ["#", he("id")];
            case "InterpreterDirective":
              return Se.push("#!", Te.value, u), P(Te, Ne) && Se.push(u), Se;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              Se.push("module {");
              let ke = he("body");
              return ke && Se.push(p([u, ke]), u), Se.push("}"), Se;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(Te.type));
          }
        }
        function ye(Fe) {
          return Fe.type && !C(Fe) && !I(Fe) && Fe.type !== "EmptyStatement" && Fe.type !== "TemplateElement" && Fe.type !== "Import" && Fe.type !== "TSEmptyBodyFunctionExpression";
        }
        r.exports = { preprocess: _, print: $, embed: y, insertPragma: c, massageAstNode: g, hasPrettierIgnore(Fe) {
          return f(Fe) || M(Fe);
        }, willPrintOwnComments: D.willPrintOwnComments, canAttachComment: ye, printComment: ve, isBlockComment: C, handleComments: { avoidAstMutation: true, ownLine: D.handleOwnLineComment, endOfLine: D.handleEndOfLineComment, remaining: D.handleRemainingComment }, getCommentChildNodes: D.getCommentChildNodes };
      } }), Cd = Z({ "src/language-js/printer-estree-json.js"(e, r) {
        ne();
        var { builders: { hardline: t, indent: s, join: a } } = Me(), n = Fo();
        function u(d, y, g) {
          let c = d.getValue();
          switch (c.type) {
            case "JsonRoot":
              return [g("node"), t];
            case "ArrayExpression": {
              if (c.elements.length === 0)
                return "[]";
              let D = d.map(() => d.getValue() === null ? "null" : g(), "elements");
              return ["[", s([t, a([",", t], D)]), t, "]"];
            }
            case "ObjectExpression":
              return c.properties.length === 0 ? "{}" : ["{", s([t, a([",", t], d.map(g, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [g("key"), ": ", g("value")];
            case "UnaryExpression":
              return [c.operator === "+" ? "" : c.operator, g("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return c.value ? "true" : "false";
            case "StringLiteral":
              return JSON.stringify(c.value);
            case "NumericLiteral":
              return i(d) ? JSON.stringify(String(c.value)) : JSON.stringify(c.value);
            case "Identifier":
              return i(d) ? JSON.stringify(c.name) : c.name;
            case "TemplateLiteral":
              return g(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(c.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(c.type));
          }
        }
        function i(d) {
          return d.getName() === "key" && d.getParentNode().type === "ObjectProperty";
        }
        var l = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function p(d, y) {
          let { type: g } = d;
          if (g === "ObjectProperty") {
            let { key: c } = d;
            c.type === "Identifier" ? y.key = { type: "StringLiteral", value: c.name } : c.type === "NumericLiteral" && (y.key = { type: "StringLiteral", value: String(c.value) });
            return;
          }
          if (g === "UnaryExpression" && d.operator === "+")
            return y.argument;
          if (g === "ArrayExpression") {
            for (let [c, D] of d.elements.entries())
              D === null && y.elements.splice(c, 0, { type: "NullLiteral" });
            return;
          }
          if (g === "TemplateLiteral")
            return { type: "StringLiteral", value: d.quasis[0].value.cooked };
        }
        p.ignoredProperties = l, r.exports = { preprocess: n, print: u, massageAstNode: p };
      } }), Mt = Z({ "src/common/common-options.js"(e, r) {
        ne();
        var t = "Common";
        r.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: true }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), Ed = Z({ "src/language-js/options.js"(e, r) {
        ne();
        var t = Mt(), s = "JavaScript";
        r.exports = { arrowParens: { since: "1.9.0", category: s, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: s, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: s, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: s, type: "choice", default: [{ since: "0.0.0", value: false }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
      } }), Fd = Z({ "src/language-js/parse/parsers.js"() {
        ne();
      } }), Ln = Z({ "node_modules/linguist-languages/data/JavaScript.json"(e, r) {
        r.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), Ad = Z({ "node_modules/linguist-languages/data/TypeScript.json"(e, r) {
        r.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), Sd = Z({ "node_modules/linguist-languages/data/TSX.json"(e, r) {
        r.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), wa = Z({ "node_modules/linguist-languages/data/JSON.json"(e, r) {
        r.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), xd = Z({ "node_modules/linguist-languages/data/JSON with Comments.json"(e, r) {
        r.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), bd = Z({ "node_modules/linguist-languages/data/JSON5.json"(e, r) {
        r.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), Td = Z({ "src/language-js/index.js"(e, r) {
        ne();
        var t = _t(), s = vd(), a = Cd(), n = Ed(), u = Fd(), i = [t(Ln(), (p) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...p.interpreters, "zx"], extensions: [...p.extensions.filter((d) => d !== ".jsx"), ".wxs"] })), t(Ln(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t(Ln(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t(Ad(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t(Sd(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t(wa(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t(wa(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: p.extensions.filter((d) => d !== ".jsonl") })), t(xd(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...p.filenames, ".eslintrc", ".swcrc"] })), t(bd(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], l = { estree: s, "estree-json": a };
        r.exports = { languages: i, options: n, printers: l, parsers: u };
      } }), Bd = Z({ "src/language-css/clean.js"(e, r) {
        ne();
        var { isFrontMatterNode: t } = Ue(), s = lt(), a = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function n(i, l, p) {
          if (t(i) && i.lang === "yaml" && delete l.value, i.type === "css-comment" && p.type === "css-root" && p.nodes.length > 0 && ((p.nodes[0] === i || t(p.nodes[0]) && p.nodes[1] === i) && (delete l.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || p.type === "css-root" && s(p.nodes) === i))
            return null;
          if (i.type === "value-root" && delete l.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete l.value, i.type === "css-rule" && delete l.params, i.type === "selector-combinator" && (l.value = l.value.replace(/\s+/g, " ")), i.type === "media-feature" && (l.value = l.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(l.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (l.value = l.value.toLowerCase()), i.type === "css-decl" && (l.prop = l.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (l.name = l.name.toLowerCase()), i.type === "value-number" && (l.unit = l.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && l.value && (l.value = u(l.value)), i.type === "selector-attribute" && (l.attribute = l.attribute.trim(), l.namespace && typeof l.namespace == "string" && (l.namespace = l.namespace.trim(), l.namespace.length === 0 && (l.namespace = true)), l.value && (l.value = l.value.trim().replace(/^["']|["']$/g, ""), delete l.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && l.value && (l.value = l.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (d, y, g) => {
            let c = Number(y);
            return Number.isNaN(c) ? d : c + g.toLowerCase();
          })), i.type === "selector-tag") {
            let d = i.value.toLowerCase();
            ["from", "to"].includes(d) && (l.value = d);
          }
          if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete l.value, i.type === "selector-unknown" && delete l.value, i.type === "value-comma_group") {
            let d = i.groups.findIndex((y) => y.type === "value-number" && y.unit === "...");
            d !== -1 && (l.groups[d].unit = "", l.groups.splice(d + 1, 0, { type: "value-word", value: "...", isColor: false, isHex: false }));
          }
          if (i.type === "value-comma_group" && i.groups.some((d) => d.type === "value-atword" && d.value.endsWith("[") || d.type === "value-word" && d.value.startsWith("]")))
            return { type: "value-atword", value: i.groups.map((d) => d.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
        }
        n.ignoredProperties = a;
        function u(i) {
          return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        r.exports = n;
      } }), su = Z({ "src/utils/front-matter/print.js"(e, r) {
        ne();
        var { builders: { hardline: t, markAsRoot: s } } = Me();
        function a(n, u) {
          if (n.lang === "yaml") {
            let i = n.value.trim(), l = i ? u(i, { parser: "yaml" }, { stripTrailingHardline: true }) : "";
            return s([n.startDelimiter, t, l, l ? t : "", n.endDelimiter]);
          }
        }
        r.exports = a;
      } }), Nd = Z({ "src/language-css/embed.js"(e, r) {
        ne();
        var { builders: { hardline: t } } = Me(), s = su();
        function a(n, u, i) {
          let l = n.getValue();
          if (l.type === "front-matter") {
            let p = s(l, i);
            return p ? [p, t] : "";
          }
        }
        r.exports = a;
      } }), _o = Z({ "src/utils/front-matter/parse.js"(e, r) {
        ne();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(a) {
          let n = a.match(t);
          if (!n)
            return { content: a };
          let { startDelimiter: u, language: i, value: l = "", endDelimiter: p } = n.groups, d = i.trim() || "yaml";
          if (u === "+++" && (d = "toml"), d !== "yaml" && u !== p)
            return { content: a };
          let [y] = n;
          return { frontMatter: { type: "front-matter", lang: d, value: l, startDelimiter: u, endDelimiter: p, raw: y.replace(/\n$/, "") }, content: y.replace(/[^\n]/g, " ") + a.slice(y.length) };
        }
        r.exports = s;
      } }), wd = Z({ "src/language-css/pragma.js"(e, r) {
        ne();
        var t = Co(), s = _o();
        function a(u) {
          return t.hasPragma(s(u).content);
        }
        function n(u) {
          let { frontMatter: i, content: l } = s(u);
          return (i ? i.raw + `

` : "") + t.insertPragma(l);
        }
        r.exports = { hasPragma: a, insertPragma: n };
      } }), _d = Z({ "src/language-css/utils/index.js"(e, r) {
        ne();
        var t = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function s(z, ue) {
          let J = Array.isArray(ue) ? ue : [ue], le = -1, ge;
          for (; ge = z.getParentNode(++le); )
            if (J.includes(ge.type))
              return le;
          return -1;
        }
        function a(z, ue) {
          let J = s(z, ue);
          return J === -1 ? null : z.getParentNode(J);
        }
        function n(z) {
          var ue;
          let J = a(z, "css-decl");
          return J == null || (ue = J.prop) === null || ue === void 0 ? void 0 : ue.toLowerCase();
        }
        var u = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function i(z) {
          return u.has(z.toLowerCase());
        }
        function l(z, ue) {
          let J = a(z, "css-atrule");
          return (J == null ? void 0 : J.name) && J.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(ue.toLowerCase());
        }
        function p(z) {
          return z.includes("$") || z.includes("@") || z.includes("#") || z.startsWith("%") || z.startsWith("--") || z.startsWith(":--") || z.includes("(") && z.includes(")") ? z : z.toLowerCase();
        }
        function d(z, ue) {
          var J;
          let le = a(z, "value-func");
          return (le == null || (J = le.value) === null || J === void 0 ? void 0 : J.toLowerCase()) === ue;
        }
        function y(z) {
          var ue;
          let J = a(z, "css-rule"), le = J == null || (ue = J.raws) === null || ue === void 0 ? void 0 : ue.selector;
          return le && (le.startsWith(":import") || le.startsWith(":export"));
        }
        function g(z, ue) {
          let J = Array.isArray(ue) ? ue : [ue], le = a(z, "css-atrule");
          return le && J.includes(le.name.toLowerCase());
        }
        function c(z) {
          let ue = z.getValue(), J = a(z, "css-atrule");
          return (J == null ? void 0 : J.name) === "import" && ue.groups[0].value === "url" && ue.groups.length === 2;
        }
        function D(z) {
          return z.type === "value-func" && z.value.toLowerCase() === "url";
        }
        function E(z, ue) {
          var J;
          let le = (J = z.getParentNode()) === null || J === void 0 ? void 0 : J.nodes;
          return le && le.indexOf(ue) === le.length - 1;
        }
        function _(z) {
          let { selector: ue } = z;
          return ue ? typeof ue == "string" && /^@.+:.*$/.test(ue) || ue.value && /^@.+:.*$/.test(ue.value) : false;
        }
        function w(z) {
          return z.type === "value-word" && ["from", "through", "end"].includes(z.value);
        }
        function F(z) {
          return z.type === "value-word" && ["and", "or", "not"].includes(z.value);
        }
        function A(z) {
          return z.type === "value-word" && z.value === "in";
        }
        function N(z) {
          return z.type === "value-operator" && z.value === "*";
        }
        function I(z) {
          return z.type === "value-operator" && z.value === "/";
        }
        function P(z) {
          return z.type === "value-operator" && z.value === "+";
        }
        function H(z) {
          return z.type === "value-operator" && z.value === "-";
        }
        function f(z) {
          return z.type === "value-operator" && z.value === "%";
        }
        function b(z) {
          return N(z) || I(z) || P(z) || H(z) || f(z);
        }
        function m(z) {
          return z.type === "value-word" && ["==", "!="].includes(z.value);
        }
        function v(z) {
          return z.type === "value-word" && ["<", ">", "<=", ">="].includes(z.value);
        }
        function o(z) {
          return z.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(z.name);
        }
        function h(z) {
          var ue;
          return ((ue = z.raws) === null || ue === void 0 ? void 0 : ue.params) && /^\(\s*\)$/.test(z.raws.params);
        }
        function C(z) {
          return z.name.startsWith("prettier-placeholder");
        }
        function S(z) {
          return z.prop.startsWith("@prettier-placeholder");
        }
        function x(z, ue) {
          return z.value === "$$" && z.type === "value-func" && (ue == null ? void 0 : ue.type) === "value-word" && !ue.raws.before;
        }
        function T(z) {
          var ue, J;
          return ((ue = z.value) === null || ue === void 0 ? void 0 : ue.type) === "value-root" && ((J = z.value.group) === null || J === void 0 ? void 0 : J.type) === "value-value" && z.prop.toLowerCase() === "composes";
        }
        function k(z) {
          var ue, J, le;
          return ((ue = z.value) === null || ue === void 0 || (J = ue.group) === null || J === void 0 || (le = J.group) === null || le === void 0 ? void 0 : le.type) === "value-paren_group" && z.value.group.group.open !== null && z.value.group.group.close !== null;
        }
        function M(z) {
          var ue;
          return ((ue = z.raws) === null || ue === void 0 ? void 0 : ue.before) === "";
        }
        function R(z) {
          var ue, J;
          return z.type === "value-comma_group" && ((ue = z.groups) === null || ue === void 0 || (J = ue[1]) === null || J === void 0 ? void 0 : J.type) === "value-colon";
        }
        function q(z) {
          var ue;
          return z.type === "value-paren_group" && ((ue = z.groups) === null || ue === void 0 ? void 0 : ue[0]) && R(z.groups[0]);
        }
        function U(z) {
          var ue;
          let J = z.getValue();
          if (J.groups.length === 0)
            return false;
          let le = z.getParentNode(1);
          if (!q(J) && !(le && q(le)))
            return false;
          let ge = a(z, "css-decl");
          return !!(ge != null && (ue = ge.prop) !== null && ue !== void 0 && ue.startsWith("$") || q(le) || le.type === "value-func");
        }
        function L(z) {
          return z.type === "value-comment" && z.inline;
        }
        function Y(z) {
          return z.type === "value-word" && z.value === "#";
        }
        function V(z) {
          return z.type === "value-word" && z.value === "{";
        }
        function j(z) {
          return z.type === "value-word" && z.value === "}";
        }
        function K(z) {
          return ["value-word", "value-atword"].includes(z.type);
        }
        function se(z) {
          return (z == null ? void 0 : z.type) === "value-colon";
        }
        function Q(z, ue) {
          if (!R(ue))
            return false;
          let { groups: J } = ue, le = J.indexOf(z);
          return le === -1 ? false : se(J[le + 1]);
        }
        function ce(z) {
          return z.value && ["not", "and", "or"].includes(z.value.toLowerCase());
        }
        function W(z) {
          return z.type !== "value-func" ? false : t.has(z.value.toLowerCase());
        }
        function X(z) {
          return /\/\//.test(z.split(/[\n\r]/).pop());
        }
        function de(z) {
          return (z == null ? void 0 : z.type) === "value-atword" && z.value.startsWith("prettier-placeholder-");
        }
        function ie(z, ue) {
          var J, le;
          if (((J = z.open) === null || J === void 0 ? void 0 : J.value) !== "(" || ((le = z.close) === null || le === void 0 ? void 0 : le.value) !== ")" || z.groups.some((ge) => ge.type !== "value-comma_group"))
            return false;
          if (ue.type === "value-comma_group") {
            let ge = ue.groups.indexOf(z) - 1, pe = ue.groups[ge];
            if ((pe == null ? void 0 : pe.type) === "value-word" && pe.value === "with")
              return true;
          }
          return false;
        }
        function Ee(z) {
          var ue, J;
          return z.type === "value-paren_group" && ((ue = z.open) === null || ue === void 0 ? void 0 : ue.value) === "(" && ((J = z.close) === null || J === void 0 ? void 0 : J.value) === ")";
        }
        r.exports = { getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: n, maybeToLowerCase: p, insideValueFunctionNode: d, insideICSSRuleNode: y, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: c, isKeyframeAtRuleKeywords: l, isWideKeywords: i, isLastNode: E, isSCSSControlDirectiveNode: o, isDetachedRulesetDeclarationNode: _, isRelationalOperatorNode: v, isEqualityOperatorNode: m, isMultiplicationNode: N, isDivisionNode: I, isAdditionNode: P, isSubtractionNode: H, isModuloNode: f, isMathOperatorNode: b, isEachKeywordNode: A, isForKeywordNode: w, isURLFunctionNode: D, isIfElseKeywordNode: F, hasComposesNode: T, hasParensAroundNode: k, hasEmptyRawBefore: M, isDetachedRulesetCallNode: h, isTemplatePlaceholderNode: C, isTemplatePropNode: S, isPostcssSimpleVarNode: x, isKeyValuePairNode: R, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: Q, isSCSSMapItemNode: U, isInlineValueCommentNode: L, isHashNode: Y, isLeftCurlyBraceNode: V, isRightCurlyBraceNode: j, isWordNode: K, isColonNode: se, isMediaAndSupportsKeywords: ce, isColorAdjusterFuncNode: W, lastLineHasInlineComment: X, isAtWordPlaceholderNode: de, isConfigurationNode: ie, isParenGroupNode: Ee };
      } }), Pd = Z({ "src/utils/line-column-to-index.js"(e, r) {
        ne(), r.exports = function(t, s) {
          let a = 0;
          for (let n = 0; n < t.line - 1; ++n)
            a = s.indexOf(`
`, a) + 1;
          return a + t.column;
        };
      } }), Id = Z({ "src/language-css/loc.js"(e, r) {
        ne();
        var { skipEverythingButNewLine: t } = Pr(), s = lt(), a = Pd();
        function n(c, D) {
          return typeof c.sourceIndex == "number" ? c.sourceIndex : c.source ? a(c.source.start, D) - 1 : null;
        }
        function u(c, D) {
          if (c.type === "css-comment" && c.inline)
            return t(D, c.source.startOffset);
          let E = c.nodes && s(c.nodes);
          return E && c.source && !c.source.end && (c = E), c.source && c.source.end ? a(c.source.end, D) : null;
        }
        function i(c, D) {
          c.source && (c.source.startOffset = n(c, D), c.source.endOffset = u(c, D));
          for (let E in c) {
            let _ = c[E];
            E === "source" || !_ || typeof _ != "object" || (_.type === "value-root" || _.type === "value-unknown" ? l(_, p(c), _.text || _.value) : i(_, D));
          }
        }
        function l(c, D, E) {
          c.source && (c.source.startOffset = n(c, E) + D, c.source.endOffset = u(c, E) + D);
          for (let _ in c) {
            let w = c[_];
            _ === "source" || !w || typeof w != "object" || l(w, D, E);
          }
        }
        function p(c) {
          let D = c.source.startOffset;
          return typeof c.prop == "string" && (D += c.prop.length), c.type === "css-atrule" && typeof c.name == "string" && (D += 1 + c.name.length + c.raws.afterName.match(/^\s*:?\s*/)[0].length), c.type !== "css-atrule" && c.raws && typeof c.raws.between == "string" && (D += c.raws.between.length), D;
        }
        function d(c) {
          let D = "initial", E = "initial", _, w = false, F = [];
          for (let A = 0; A < c.length; A++) {
            let N = c[A];
            switch (D) {
              case "initial":
                if (N === "'") {
                  D = "single-quotes";
                  continue;
                }
                if (N === '"') {
                  D = "double-quotes";
                  continue;
                }
                if ((N === "u" || N === "U") && c.slice(A, A + 4).toLowerCase() === "url(") {
                  D = "url", A += 3;
                  continue;
                }
                if (N === "*" && c[A - 1] === "/") {
                  D = "comment-block";
                  continue;
                }
                if (N === "/" && c[A - 1] === "/") {
                  D = "comment-inline", _ = A - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (N === "'" && c[A - 1] !== "\\" && (D = E, E = "initial"), N === `
` || N === "\r")
                  return c;
                continue;
              case "double-quotes":
                if (N === '"' && c[A - 1] !== "\\" && (D = E, E = "initial"), N === `
` || N === "\r")
                  return c;
                continue;
              case "url":
                if (N === ")" && (D = "initial"), N === `
` || N === "\r")
                  return c;
                if (N === "'") {
                  D = "single-quotes", E = "url";
                  continue;
                }
                if (N === '"') {
                  D = "double-quotes", E = "url";
                  continue;
                }
                continue;
              case "comment-block":
                N === "/" && c[A - 1] === "*" && (D = "initial");
                continue;
              case "comment-inline":
                (N === '"' || N === "'" || N === "*") && (w = true), (N === `
` || N === "\r") && (w && F.push([_, A]), D = "initial", w = false);
                continue;
            }
          }
          for (let [A, N] of F)
            c = c.slice(0, A) + c.slice(A, N).replace(/["'*]/g, " ") + c.slice(N);
          return c;
        }
        function y(c) {
          return c.source.startOffset;
        }
        function g(c) {
          return c.source.endOffset;
        }
        r.exports = { locStart: y, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: d };
      } }), kd = Z({ "src/language-css/utils/is-less-parser.js"(e, r) {
        ne();
        function t(s) {
          return s.parser === "css" || s.parser === "less";
        }
        r.exports = t;
      } }), Ld = Z({ "src/language-css/utils/is-scss.js"(e, r) {
        ne();
        function t(s, a) {
          return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a);
        }
        r.exports = t;
      } }), Od = Z({ "src/language-css/utils/css-units.evaluate.js"(e, r) {
        r.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), jd = Z({ "src/language-css/utils/print-unit.js"(e, r) {
        ne();
        var t = Od();
        function s(a) {
          let n = a.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : a;
        }
        r.exports = s;
      } }), qd = Z({ "src/language-css/printer-postcss.js"(e, r) {
        ne();
        var t = lt(), { printNumber: s, printString: a, hasNewline: n, isFrontMatterNode: u, isNextLineEmpty: i, isNonEmptyArray: l } = Ue(), { builders: { join: p, line: d, hardline: y, softline: g, group: c, fill: D, indent: E, dedent: _, ifBreak: w, breakParent: F }, utils: { removeLines: A, getDocParts: N } } = Me(), I = Bd(), P = Nd(), { insertPragma: H } = wd(), { getAncestorNode: f, getPropOfDeclNode: b, maybeToLowerCase: m, insideValueFunctionNode: v, insideICSSRuleNode: o, insideAtRuleNode: h, insideURLFunctionInImportAtRuleNode: C, isKeyframeAtRuleKeywords: S, isWideKeywords: x, isLastNode: T, isSCSSControlDirectiveNode: k, isDetachedRulesetDeclarationNode: M, isRelationalOperatorNode: R, isEqualityOperatorNode: q, isMultiplicationNode: U, isDivisionNode: L, isAdditionNode: Y, isSubtractionNode: V, isMathOperatorNode: j, isEachKeywordNode: K, isForKeywordNode: se, isURLFunctionNode: Q, isIfElseKeywordNode: ce, hasComposesNode: W, hasParensAroundNode: X, hasEmptyRawBefore: de, isKeyValuePairNode: ie, isKeyInValuePairNode: Ee, isDetachedRulesetCallNode: z, isTemplatePlaceholderNode: ue, isTemplatePropNode: J, isPostcssSimpleVarNode: le, isSCSSMapItemNode: ge, isInlineValueCommentNode: pe, isHashNode: Ae, isLeftCurlyBraceNode: Ce, isRightCurlyBraceNode: Oe, isWordNode: Ie, isColonNode: we, isMediaAndSupportsKeywords: _e, isColorAdjusterFuncNode: De, lastLineHasInlineComment: G, isAtWordPlaceholderNode: oe, isConfigurationNode: ee, isParenGroupNode: re } = _d(), { locStart: be, locEnd: ve } = Id(), fe = kd(), B = Ld(), $ = jd();
        function te(Be) {
          return Be.trailingComma === "es5" || Be.trailingComma === "all";
        }
        function ye(Be, qe, Re) {
          let ae = Be.getValue();
          if (!ae)
            return "";
          if (typeof ae == "string")
            return ae;
          switch (ae.type) {
            case "front-matter":
              return [ae.raw, y];
            case "css-root": {
              let Ve = Fe(Be, qe, Re), We = ae.raws.after.trim();
              return We.startsWith(";") && (We = We.slice(1).trim()), [Ve, We ? ` ${We}` : "", N(Ve).length > 0 ? y : ""];
            }
            case "css-comment": {
              let Ve = ae.inline || ae.raws.inline, We = qe.originalText.slice(be(ae), ve(ae));
              return Ve ? We.trimEnd() : We;
            }
            case "css-rule":
              return [Re("selector"), ae.important ? " !important" : "", ae.nodes ? [ae.selector && ae.selector.type === "selector-unknown" && G(ae.selector.value) ? d : " ", "{", ae.nodes.length > 0 ? E([y, Fe(Be, qe, Re)]) : "", y, "}", M(ae) ? ";" : ""] : ";"];
            case "css-decl": {
              let Ve = Be.getParentNode(), { between: We } = ae.raws, Xe = We.trim(), st = Xe === ":", O = W(ae) ? A(Re("value")) : Re("value");
              return !st && G(Xe) && (O = E([y, _(O)])), [ae.raws.before.replace(/[\s;]/g, ""), Ve.type === "css-atrule" && Ve.variable || o(Be) ? ae.prop : m(ae.prop), Xe.startsWith("//") ? " " : "", Xe, ae.extend ? "" : " ", fe(qe) && ae.extend && ae.selector ? ["extend(", Re("selector"), ")"] : "", O, ae.raws.important ? ae.raws.important.replace(/\s*!\s*important/i, " !important") : ae.important ? " !important" : "", ae.raws.scssDefault ? ae.raws.scssDefault.replace(/\s*!default/i, " !default") : ae.scssDefault ? " !default" : "", ae.raws.scssGlobal ? ae.raws.scssGlobal.replace(/\s*!global/i, " !global") : ae.scssGlobal ? " !global" : "", ae.nodes ? [" {", E([g, Fe(Be, qe, Re)]), g, "}"] : J(ae) && !Ve.raws.semicolon && qe.originalText[ve(ae) - 1] !== ";" ? "" : qe.__isHTMLStyleAttribute && T(Be, ae) ? w(";") : ";"];
            }
            case "css-atrule": {
              let Ve = Be.getParentNode(), We = ue(ae) && !Ve.raws.semicolon && qe.originalText[ve(ae) - 1] !== ";";
              if (fe(qe)) {
                if (ae.mixin)
                  return [Re("selector"), ae.important ? " !important" : "", We ? "" : ";"];
                if (ae.function)
                  return [ae.name, Re("params"), We ? "" : ";"];
                if (ae.variable)
                  return ["@", ae.name, ": ", ae.value ? Re("value") : "", ae.raws.between.trim() ? ae.raws.between.trim() + " " : "", ae.nodes ? ["{", E([ae.nodes.length > 0 ? g : "", Fe(Be, qe, Re)]), g, "}"] : "", We ? "" : ";"];
              }
              return ["@", z(ae) || ae.name.endsWith(":") ? ae.name : m(ae.name), ae.params ? [z(ae) ? "" : ue(ae) ? ae.raws.afterName === "" ? "" : ae.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ae.raws.afterName) ? [y, y] : /^\s*\n/.test(ae.raws.afterName) ? y : " " : " ", Re("params")] : "", ae.selector ? E([" ", Re("selector")]) : "", ae.value ? c([" ", Re("value"), k(ae) ? X(ae) ? " " : d : ""]) : ae.name === "else" ? " " : "", ae.nodes ? [k(ae) ? "" : ae.selector && !ae.selector.nodes && typeof ae.selector.value == "string" && G(ae.selector.value) || !ae.selector && typeof ae.params == "string" && G(ae.params) ? d : " ", "{", E([ae.nodes.length > 0 ? g : "", Fe(Be, qe, Re)]), g, "}"] : We ? "" : ";"];
            }
            case "media-query-list": {
              let Ve = [];
              return Be.each((We) => {
                let Xe = We.getValue();
                Xe.type === "media-query" && Xe.value === "" || Ve.push(Re());
              }, "nodes"), c(E(p(d, Ve)));
            }
            case "media-query":
              return [p(" ", Be.map(Re, "nodes")), T(Be, ae) ? "" : ","];
            case "media-type":
              return je(Se(ae.value, qe));
            case "media-feature-expression":
              return ae.nodes ? ["(", ...Be.map(Re, "nodes"), ")"] : ae.value;
            case "media-feature":
              return m(Se(ae.value.replace(/ +/g, " "), qe));
            case "media-colon":
              return [ae.value, " "];
            case "media-value":
              return je(Se(ae.value, qe));
            case "media-keyword":
              return Se(ae.value, qe);
            case "media-url":
              return Se(ae.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), qe);
            case "media-unknown":
              return ae.value;
            case "selector-root":
              return c([h(Be, "custom-selector") ? [f(Be, "css-atrule").customSelector, d] : "", p([",", h(Be, ["extend", "custom-selector", "nest"]) ? d : y], Be.map(Re, "nodes"))]);
            case "selector-selector":
              return c(E(Be.map(Re, "nodes")));
            case "selector-comment":
              return ae.value;
            case "selector-string":
              return Se(ae.value, qe);
            case "selector-tag": {
              let Ve = Be.getParentNode(), We = Ve && Ve.nodes.indexOf(ae), Xe = We && Ve.nodes[We - 1];
              return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", Xe.type === "selector-nesting" ? ae.value : je(S(Be, ae.value) ? ae.value.toLowerCase() : ae.value)];
            }
            case "selector-id":
              return ["#", ae.value];
            case "selector-class":
              return [".", je(Se(ae.value, qe))];
            case "selector-attribute": {
              var nt;
              return ["[", ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.attribute.trim(), (nt = ae.operator) !== null && nt !== void 0 ? nt : "", ae.value ? ke(Se(ae.value.trim(), qe), qe) : "", ae.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (ae.value === "+" || ae.value === ">" || ae.value === "~" || ae.value === ">>>") {
                let Xe = Be.getParentNode();
                return [Xe.type === "selector-selector" && Xe.nodes[0] === ae ? "" : d, ae.value, T(Be, ae) ? "" : " "];
              }
              let Ve = ae.value.trim().startsWith("(") ? d : "", We = je(Se(ae.value.trim(), qe)) || d;
              return [Ve, We];
            }
            case "selector-universal":
              return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.value];
            case "selector-pseudo":
              return [m(ae.value), l(ae.nodes) ? c(["(", E([g, p([",", d], Be.map(Re, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting":
              return ae.value;
            case "selector-unknown": {
              let Ve = f(Be, "css-rule");
              if (Ve && Ve.isSCSSNesterProperty)
                return je(Se(m(ae.value), qe));
              let We = Be.getParentNode();
              if (We.raws && We.raws.selector) {
                let st = be(We), O = st + We.raws.selector.length;
                return qe.originalText.slice(st, O).trim();
              }
              let Xe = Be.getParentNode(1);
              if (We.type === "value-paren_group" && Xe && Xe.type === "value-func" && Xe.value === "selector") {
                let st = ve(We.open) + 1, O = be(We.close), me = qe.originalText.slice(st, O).trim();
                return G(me) ? [F, me] : me;
              }
              return ae.value;
            }
            case "value-value":
            case "value-root":
              return Re("group");
            case "value-comment":
              return qe.originalText.slice(be(ae), ve(ae));
            case "value-comma_group": {
              let Ve = Be.getParentNode(), We = Be.getParentNode(1), Xe = b(Be), st = Xe && Ve.type === "value-value" && (Xe === "grid" || Xe.startsWith("grid-template")), O = f(Be, "css-atrule"), me = O && k(O), Pe = ae.groups.some((at) => pe(at)), He = Be.map(Re, "groups"), Ge = [], it = v(Be, "url"), Qe = false, rt = false;
              for (let at = 0; at < ae.groups.length; ++at) {
                var tt;
                Ge.push(He[at]);
                let Ze = ae.groups[at - 1], Le = ae.groups[at], $e = ae.groups[at + 1], sr = ae.groups[at + 2];
                if (it) {
                  ($e && Y($e) || Y(Le)) && Ge.push(" ");
                  continue;
                }
                if (h(Be, "forward") && Le.type === "value-word" && Le.value && Ze !== void 0 && Ze.type === "value-word" && Ze.value === "as" && $e.type === "value-operator" && $e.value === "*" || !$e || Le.type === "value-word" && Le.value.endsWith("-") && oe($e))
                  continue;
                if (Le.type === "value-string" && Le.quoted) {
                  let $r = Le.value.lastIndexOf("#{"), Vr = Le.value.lastIndexOf("}");
                  $r !== -1 && Vr !== -1 ? Qe = $r > Vr : $r !== -1 ? Qe = true : Vr !== -1 && (Qe = false);
                }
                if (Qe || we(Le) || we($e) || Le.type === "value-atword" && (Le.value === "" || Le.value.endsWith("[")) || $e.type === "value-word" && $e.value.startsWith("]") || Le.value === "~" || Le.value && Le.value.includes("\\") && $e && $e.type !== "value-comment" || Ze && Ze.value && Ze.value.indexOf("\\") === Ze.value.length - 1 && Le.type === "value-operator" && Le.value === "/" || Le.value === "\\" || le(Le, $e) || Ae(Le) || Ce(Le) || Oe($e) || Ce($e) && de($e) || Oe(Le) && de($e) || Le.value === "--" && Ae($e))
                  continue;
                let Rr = j(Le), ou = j($e);
                if ((Rr && Ae($e) || ou && Oe(Le)) && de($e) || !Ze && L(Le) || v(Be, "calc") && (Y(Le) || Y($e) || V(Le) || V($e)) && de($e))
                  continue;
                let qo = (Y(Le) || V(Le)) && at === 0 && ($e.type === "value-number" || $e.isHex) && We && De(We) && !de($e), lu = sr && sr.type === "value-func" || sr && Ie(sr) || Le.type === "value-func" || Ie(Le), cu = $e.type === "value-func" || Ie($e) || Ze && Ze.type === "value-func" || Ze && Ie(Ze);
                if (!(!(U($e) || U(Le)) && !v(Be, "calc") && !qo && (L($e) && !lu || L(Le) && !cu || Y($e) && !lu || Y(Le) && !cu || V($e) || V(Le)) && (de($e) || Rr && (!Ze || Ze && j(Ze)))) && !((qe.parser === "scss" || qe.parser === "less") && Rr && Le.value === "-" && re($e) && ve(Le) === be($e.open) && $e.open.value === "(")) {
                  if (pe(Le)) {
                    if (Ve.type === "value-paren_group") {
                      Ge.push(_(y));
                      continue;
                    }
                    Ge.push(y);
                    continue;
                  }
                  if (me && (q($e) || R($e) || ce($e) || K(Le) || se(Le))) {
                    Ge.push(" ");
                    continue;
                  }
                  if (O && O.name.toLowerCase() === "namespace") {
                    Ge.push(" ");
                    continue;
                  }
                  if (st) {
                    Le.source && $e.source && Le.source.start.line !== $e.source.start.line ? (Ge.push(y), rt = true) : Ge.push(" ");
                    continue;
                  }
                  if (ou) {
                    Ge.push(" ");
                    continue;
                  }
                  if (!($e && $e.value === "...") && !(oe(Le) && oe($e) && ve(Le) === be($e))) {
                    if (oe(Le) && re($e) && ve(Le) === be($e.open)) {
                      Ge.push(g);
                      continue;
                    }
                    if (Le.value === "with" && re($e)) {
                      Ge.push(" ");
                      continue;
                    }
                    (tt = Le.value) !== null && tt !== void 0 && tt.endsWith("#") && $e.value === "{" && re($e.group) || Ge.push(d);
                  }
                }
              }
              return Pe && Ge.push(F), rt && Ge.unshift(y), me ? c(E(Ge)) : C(Be) ? c(D(Ge)) : c(E(D(Ge)));
            }
            case "value-paren_group": {
              let Ve = Be.getParentNode();
              if (Ve && Q(Ve) && (ae.groups.length === 1 || ae.groups.length > 0 && ae.groups[0].type === "value-comma_group" && ae.groups[0].groups.length > 0 && ae.groups[0].groups[0].type === "value-word" && ae.groups[0].groups[0].value.startsWith("data:")))
                return [ae.open ? Re("open") : "", p(",", Be.map(Re, "groups")), ae.close ? Re("close") : ""];
              if (!ae.open) {
                let it = Be.map(Re, "groups"), Qe = [];
                for (let rt = 0; rt < it.length; rt++)
                  rt !== 0 && Qe.push([",", d]), Qe.push(it[rt]);
                return c(E(D(Qe)));
              }
              let We = ge(Be), Xe = t(ae.groups), st = Xe && Xe.type === "value-comment", O = Ee(ae, Ve), me = ee(ae, Ve), Pe = me || We && !O, He = me || O, Ge = c([ae.open ? Re("open") : "", E([g, p([d], Be.map((it, Qe) => {
                let rt = it.getValue(), at = Qe === ae.groups.length - 1, Ze = [Re(), at ? "" : ","];
                if (ie(rt) && rt.type === "value-comma_group" && rt.groups && rt.groups[0].type !== "value-paren_group" && rt.groups[2] && rt.groups[2].type === "value-paren_group") {
                  let Le = N(Ze[0].contents.contents);
                  Le[1] = c(Le[1]), Ze = [c(_(Ze))];
                }
                if (!at && rt.type === "value-comma_group" && l(rt.groups)) {
                  let Le = t(rt.groups);
                  !Le.source && Le.close && (Le = Le.close), Le.source && i(qe.originalText, Le, ve) && Ze.push(y);
                }
                return Ze;
              }, "groups"))]), w(!st && B(qe.parser, qe.originalText) && We && te(qe) ? "," : ""), g, ae.close ? Re("close") : ""], { shouldBreak: Pe });
              return He ? _(Ge) : Ge;
            }
            case "value-func":
              return [ae.value, h(Be, "supports") && _e(ae) ? " " : "", Re("group")];
            case "value-paren":
              return ae.value;
            case "value-number":
              return [Je(ae.value), $(ae.unit)];
            case "value-operator":
              return ae.value;
            case "value-word":
              return ae.isColor && ae.isHex || x(ae.value) ? ae.value.toLowerCase() : ae.value;
            case "value-colon": {
              let Ve = Be.getParentNode(), We = Ve && Ve.groups.indexOf(ae), Xe = We && Ve.groups[We - 1];
              return [ae.value, Xe && typeof Xe.value == "string" && t(Xe.value) === "\\" || v(Be, "url") ? "" : d];
            }
            case "value-comma":
              return [ae.value, " "];
            case "value-string":
              return a(ae.raws.quote + ae.value + ae.raws.quote, qe);
            case "value-atword":
              return ["@", ae.value];
            case "value-unicode-range":
              return ae.value;
            case "value-unknown":
              return ae.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(ae.type)}`);
          }
        }
        function Fe(Be, qe, Re) {
          let ae = [];
          return Be.each((nt, tt, Ve) => {
            let We = Ve[tt - 1];
            if (We && We.type === "css-comment" && We.text.trim() === "prettier-ignore") {
              let Xe = nt.getValue();
              ae.push(qe.originalText.slice(be(Xe), ve(Xe)));
            } else
              ae.push(Re());
            tt !== Ve.length - 1 && (Ve[tt + 1].type === "css-comment" && !n(qe.originalText, be(Ve[tt + 1]), { backwards: true }) && !u(Ve[tt]) || Ve[tt + 1].type === "css-atrule" && Ve[tt + 1].name === "else" && Ve[tt].type !== "css-comment" ? ae.push(" ") : (ae.push(qe.__isHTMLStyleAttribute ? d : y), i(qe.originalText, nt.getValue(), ve) && !u(Ve[tt]) && ae.push(y)));
          }, "nodes"), ae;
        }
        var Ne = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, he = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, ze = /[A-Za-z]+/g, Te = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, Ye = new RegExp(Ne.source + `|(${Te.source})?(${he.source})(${ze.source})?`, "g");
        function Se(Be, qe) {
          return Be.replace(Ne, (Re) => a(Re, qe));
        }
        function ke(Be, qe) {
          let Re = qe.singleQuote ? "'" : '"';
          return Be.includes('"') || Be.includes("'") ? Be : Re + Be + Re;
        }
        function je(Be) {
          return Be.replace(Ye, (qe, Re, ae, nt, tt) => !ae && nt ? Je(nt) + m(tt || "") : qe);
        }
        function Je(Be) {
          return s(Be).replace(/\.0(?=$|e)/, "");
        }
        r.exports = { print: ye, embed: P, insertPragma: H, massageAstNode: I };
      } }), Md = Z({ "src/language-css/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { singleQuote: t.singleQuote };
      } }), Rd = Z({ "src/language-css/parsers.js"() {
        ne();
      } }), $d = Z({ "node_modules/linguist-languages/data/CSS.json"(e, r) {
        r.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), Vd = Z({ "node_modules/linguist-languages/data/PostCSS.json"(e, r) {
        r.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), Wd = Z({ "node_modules/linguist-languages/data/Less.json"(e, r) {
        r.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), Hd = Z({ "node_modules/linguist-languages/data/SCSS.json"(e, r) {
        r.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), Gd = Z({ "src/language-css/index.js"(e, r) {
        ne();
        var t = _t(), s = qd(), a = Md(), n = Rd(), u = [t($d(), (l) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...l.extensions, ".wxss"] })), t(Vd(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t(Wd(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t(Hd(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], i = { postcss: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), Ud = Z({ "src/language-handlebars/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.loc.start.offset;
        }
        function s(a) {
          return a.loc.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), Jd = Z({ "src/language-handlebars/clean.js"(e, r) {
        ne();
        function t(s, a) {
          if (s.type === "TextNode") {
            let n = s.chars.trim();
            if (!n)
              return null;
            a.chars = n.replace(/[\t\n\f\r ]+/g, " ");
          }
          s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value;
        }
        t.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), r.exports = t;
      } }), zd = Z({ "vendors/html-void-elements.json"(e, r) {
        r.exports = { htmlVoidElements: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"] };
      } }), Xd = Z({ "src/language-handlebars/utils.js"(e, r) {
        ne();
        var { htmlVoidElements: t } = zd(), s = lt();
        function a(A) {
          let N = A.getValue(), I = A.getParentNode(0);
          return !!(y(A, ["ElementNode"]) && s(I.children) === N || y(A, ["Block"]) && s(I.body) === N);
        }
        function n(A) {
          return A.toUpperCase() === A;
        }
        function u(A) {
          return d(A, ["ElementNode"]) && typeof A.tag == "string" && !A.tag.startsWith(":") && (n(A.tag[0]) || A.tag.includes("."));
        }
        var i = new Set(t);
        function l(A) {
          return i.has(A.tag) || A.selfClosing === true || u(A) && A.children.every((N) => p(N));
        }
        function p(A) {
          return d(A, ["TextNode"]) && !/\S/.test(A.chars);
        }
        function d(A, N) {
          return A && N.includes(A.type);
        }
        function y(A, N) {
          let I = A.getParentNode(0);
          return d(I, N);
        }
        function g(A, N) {
          let I = E(A);
          return d(I, N);
        }
        function c(A, N) {
          let I = _(A);
          return d(I, N);
        }
        function D(A, N) {
          var I, P, H, f;
          let b = A.getValue(), m = (I = A.getParentNode(0)) !== null && I !== void 0 ? I : {}, v = (P = (H = (f = m.children) !== null && f !== void 0 ? f : m.body) !== null && H !== void 0 ? H : m.parts) !== null && P !== void 0 ? P : [], o = v.indexOf(b);
          return o !== -1 && v[o + N];
        }
        function E(A) {
          let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return D(A, -N);
        }
        function _(A) {
          return D(A, 1);
        }
        function w(A) {
          return d(A, ["MustacheCommentStatement"]) && typeof A.value == "string" && A.value.trim() === "prettier-ignore";
        }
        function F(A) {
          let N = A.getValue(), I = E(A, 2);
          return w(N) || w(I);
        }
        r.exports = { getNextNode: _, getPreviousNode: E, hasPrettierIgnore: F, isLastNodeOfSiblings: a, isNextNodeOfSomeType: c, isNodeOfSomeType: d, isParentOfSomeType: y, isPreviousNodeOfSomeType: g, isVoid: l, isWhitespaceNode: p };
      } }), Kd = Z({ "src/language-handlebars/printer-glimmer.js"(e, r) {
        ne();
        var { builders: { dedent: t, fill: s, group: a, hardline: n, ifBreak: u, indent: i, join: l, line: p, softline: d }, utils: { getDocParts: y, replaceTextEndOfLine: g } } = Me(), { getPreferredQuote: c, isNonEmptyArray: D } = Ue(), { locStart: E, locEnd: _ } = Ud(), w = Jd(), { getNextNode: F, getPreviousNode: A, hasPrettierIgnore: N, isLastNodeOfSiblings: I, isNextNodeOfSomeType: P, isNodeOfSomeType: H, isParentOfSomeType: f, isPreviousNodeOfSomeType: b, isVoid: m, isWhitespaceNode: v } = Xd(), o = 2;
        function h(G, oe, ee) {
          let re = G.getValue();
          if (!re)
            return "";
          if (N(G))
            return oe.originalText.slice(E(re), _(re));
          let be = oe.singleQuote ? "'" : '"';
          switch (re.type) {
            case "Block":
            case "Program":
            case "Template":
              return a(G.map(ee, "body"));
            case "ElementNode": {
              let ve = a(S(G, ee)), fe = oe.htmlWhitespaceSensitivity === "ignore" && P(G, ["ElementNode"]) ? d : "";
              if (m(re))
                return [ve, fe];
              let B = ["</", re.tag, ">"];
              return re.children.length === 0 ? [ve, i(B), fe] : oe.htmlWhitespaceSensitivity === "ignore" ? [ve, i(x(G, oe, ee)), n, i(B), fe] : [ve, i(a(x(G, oe, ee))), i(B), fe];
            }
            case "BlockStatement": {
              let ve = G.getParentNode(1);
              return ve && ve.inverse && ve.inverse.body.length === 1 && ve.inverse.body[0] === re && ve.inverse.body[0].path.parts[0] === ve.path.parts[0] ? [se(G, ee, ve.inverse.body[0].path.parts[0]), de(G, ee, oe), ie(G, ee, oe)] : [j(G, ee), a([de(G, ee, oe), ie(G, ee, oe), Q(G, ee, oe)])];
            }
            case "ElementModifierStatement":
              return a(["{{", Ie(G, ee), "}}"]);
            case "MustacheStatement":
              return a([k(re), Ie(G, ee), M(re)]);
            case "SubExpression":
              return a(["(", Oe(G, ee), d, ")"]);
            case "AttrNode": {
              let ve = re.value.type === "TextNode";
              if (ve && re.value.chars === "" && E(re.value) === _(re.value))
                return re.name;
              let B = ve ? c(re.value.chars, be).quote : re.value.type === "ConcatStatement" ? c(re.value.parts.filter((te) => te.type === "TextNode").map((te) => te.chars).join(""), be).quote : "", $ = ee("value");
              return [re.name, "=", B, re.name === "class" && B ? a(i($)) : $, B];
            }
            case "ConcatStatement":
              return G.map(ee, "parts");
            case "Hash":
              return l(p, G.map(ee, "pairs"));
            case "HashPair":
              return [re.key, "=", ee("value")];
            case "TextNode": {
              let ve = re.chars.replace(/{{/g, "\\{{"), fe = ue(G);
              if (fe) {
                if (fe === "class") {
                  let Ye = ve.trim().split(/\s+/).join(" "), Se = false, ke = false;
                  return f(G, ["ConcatStatement"]) && (b(G, ["MustacheStatement"]) && /^\s/.test(ve) && (Se = true), P(G, ["MustacheStatement"]) && /\s$/.test(ve) && Ye !== "" && (ke = true)), [Se ? p : "", Ye, ke ? p : ""];
                }
                return g(ve);
              }
              let $ = /^[\t\n\f\r ]*$/.test(ve), te = !A(G), ye = !F(G);
              if (oe.htmlWhitespaceSensitivity !== "ignore") {
                let Ye = /^[\t\n\f\r ]*/, Se = /[\t\n\f\r ]*$/, ke = ye && f(G, ["Template"]), je = te && f(G, ["Template"]);
                if ($) {
                  if (je || ke)
                    return "";
                  let ae = [p], nt = J(ve);
                  return nt && (ae = pe(nt)), I(G) && (ae = ae.map((tt) => t(tt))), ae;
                }
                let [Je] = ve.match(Ye), [Be] = ve.match(Se), qe = [];
                if (Je) {
                  qe = [p];
                  let ae = J(Je);
                  ae && (qe = pe(ae)), ve = ve.replace(Ye, "");
                }
                let Re = [];
                if (Be) {
                  if (!ke) {
                    Re = [p];
                    let ae = J(Be);
                    ae && (Re = pe(ae)), I(G) && (Re = Re.map((nt) => t(nt)));
                  }
                  ve = ve.replace(Se, "");
                }
                return [...qe, s(Ee(ve)), ...Re];
              }
              let Fe = J(ve), Ne = le(ve), he = ge(ve);
              if ((te || ye) && $ && f(G, ["Block", "ElementNode", "Template"]))
                return "";
              $ && Fe ? (Ne = Math.min(Fe, o), he = 0) : (P(G, ["BlockStatement", "ElementNode"]) && (he = Math.max(he, 1)), b(G, ["BlockStatement", "ElementNode"]) && (Ne = Math.max(Ne, 1)));
              let ze = "", Te = "";
              return he === 0 && P(G, ["MustacheStatement"]) && (Te = " "), Ne === 0 && b(G, ["MustacheStatement"]) && (ze = " "), te && (Ne = 0, ze = ""), ye && (he = 0, Te = ""), ve = ve.replace(/^[\t\n\f\r ]+/g, ze).replace(/[\t\n\f\r ]+$/, Te), [...pe(Ne), s(Ee(ve)), ...pe(he)];
            }
            case "MustacheCommentStatement": {
              let ve = E(re), fe = _(re), B = oe.originalText.charAt(ve + 2) === "~", $ = oe.originalText.charAt(fe - 3) === "~", te = re.value.includes("}}") ? "--" : "";
              return ["{{", B ? "~" : "", "!", te, re.value, te, $ ? "~" : "", "}}"];
            }
            case "PathExpression":
              return re.original;
            case "BooleanLiteral":
              return String(re.value);
            case "CommentStatement":
              return ["<!--", re.value, "-->"];
            case "StringLiteral": {
              if (Ce(G)) {
                let ve = oe.singleQuote ? '"' : "'";
                return Ae(re.value, ve);
              }
              return Ae(re.value, be);
            }
            case "NumberLiteral":
              return String(re.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(re.type));
          }
        }
        function C(G, oe) {
          return E(G) - E(oe);
        }
        function S(G, oe) {
          let ee = G.getValue(), re = ["attributes", "modifiers", "comments"].filter((ve) => D(ee[ve])), be = re.flatMap((ve) => ee[ve]).sort(C);
          for (let ve of re)
            G.each((fe) => {
              let B = be.indexOf(fe.getValue());
              be.splice(B, 1, [p, oe()]);
            }, ve);
          return D(ee.blockParams) && be.push(p, De(ee)), ["<", ee.tag, i(be), T(ee)];
        }
        function x(G, oe, ee) {
          let be = G.getValue().children.every((ve) => v(ve));
          return oe.htmlWhitespaceSensitivity === "ignore" && be ? "" : G.map((ve, fe) => {
            let B = ee();
            return fe === 0 && oe.htmlWhitespaceSensitivity === "ignore" ? [d, B] : B;
          }, "children");
        }
        function T(G) {
          return m(G) ? u([d, "/>"], [" />", d]) : u([d, ">"], ">");
        }
        function k(G) {
          let oe = G.escaped === false ? "{{{" : "{{", ee = G.strip && G.strip.open ? "~" : "";
          return [oe, ee];
        }
        function M(G) {
          let oe = G.escaped === false ? "}}}" : "}}";
          return [G.strip && G.strip.close ? "~" : "", oe];
        }
        function R(G) {
          let oe = k(G), ee = G.openStrip.open ? "~" : "";
          return [oe, ee, "#"];
        }
        function q(G) {
          let oe = M(G);
          return [G.openStrip.close ? "~" : "", oe];
        }
        function U(G) {
          let oe = k(G), ee = G.closeStrip.open ? "~" : "";
          return [oe, ee, "/"];
        }
        function L(G) {
          let oe = M(G);
          return [G.closeStrip.close ? "~" : "", oe];
        }
        function Y(G) {
          let oe = k(G), ee = G.inverseStrip.open ? "~" : "";
          return [oe, ee];
        }
        function V(G) {
          let oe = M(G);
          return [G.inverseStrip.close ? "~" : "", oe];
        }
        function j(G, oe) {
          let ee = G.getValue(), re = R(ee), be = q(ee), ve = [we(G, oe)], fe = _e(G, oe);
          if (fe && ve.push(p, fe), D(ee.program.blockParams)) {
            let B = De(ee.program);
            ve.push(p, B);
          }
          return a([re, i(ve), d, be]);
        }
        function K(G, oe) {
          return [oe.htmlWhitespaceSensitivity === "ignore" ? n : "", Y(G), "else", V(G)];
        }
        function se(G, oe, ee) {
          let re = G.getValue(), be = [];
          D(re.program.blockParams) && (be = [p, De(re.program)]);
          let ve = G.getParentNode(1);
          return a([Y(ve), i(a([a(["else", p, ee]), p, _e(G, oe)])), i(be), d, V(ve)]);
        }
        function Q(G, oe, ee) {
          let re = G.getValue();
          return ee.htmlWhitespaceSensitivity === "ignore" ? [ce(re) ? d : n, U(re), oe("path"), L(re)] : [U(re), oe("path"), L(re)];
        }
        function ce(G) {
          return H(G, ["BlockStatement"]) && G.program.body.every((oe) => v(oe));
        }
        function W(G) {
          return X(G) && G.inverse.body.length === 1 && H(G.inverse.body[0], ["BlockStatement"]) && G.inverse.body[0].path.parts[0] === G.path.parts[0];
        }
        function X(G) {
          return H(G, ["BlockStatement"]) && G.inverse;
        }
        function de(G, oe, ee) {
          let re = G.getValue();
          if (ce(re))
            return "";
          let be = oe("program");
          return ee.htmlWhitespaceSensitivity === "ignore" ? i([n, be]) : i(be);
        }
        function ie(G, oe, ee) {
          let re = G.getValue(), be = oe("inverse"), ve = ee.htmlWhitespaceSensitivity === "ignore" ? [n, be] : be;
          return W(re) ? ve : X(re) ? [K(re, ee), i(ve)] : "";
        }
        function Ee(G) {
          return y(l(p, z(G)));
        }
        function z(G) {
          return G.split(/[\t\n\f\r ]+/);
        }
        function ue(G) {
          for (let oe = 0; oe < 2; oe++) {
            let ee = G.getParentNode(oe);
            if (ee && ee.type === "AttrNode")
              return ee.name.toLowerCase();
          }
        }
        function J(G) {
          return G = typeof G == "string" ? G : "", G.split(`
`).length - 1;
        }
        function le(G) {
          G = typeof G == "string" ? G : "";
          let oe = (G.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return J(oe);
        }
        function ge(G) {
          G = typeof G == "string" ? G : "";
          let oe = (G.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return J(oe);
        }
        function pe() {
          let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(G, o) }).fill(n);
        }
        function Ae(G, oe) {
          let { quote: ee, regex: re } = c(G, oe);
          return [ee, G.replace(re, `\\${ee}`), ee];
        }
        function Ce(G) {
          let oe = 0, ee = G.getParentNode(oe);
          for (; ee && H(ee, ["SubExpression"]); )
            oe++, ee = G.getParentNode(oe);
          return !!(ee && H(G.getParentNode(oe + 1), ["ConcatStatement"]) && H(G.getParentNode(oe + 2), ["AttrNode"]));
        }
        function Oe(G, oe) {
          let ee = we(G, oe), re = _e(G, oe);
          return re ? i([ee, p, a(re)]) : ee;
        }
        function Ie(G, oe) {
          let ee = we(G, oe), re = _e(G, oe);
          return re ? [i([ee, p, re]), d] : ee;
        }
        function we(G, oe) {
          return oe("path");
        }
        function _e(G, oe) {
          let ee = G.getValue(), re = [];
          if (ee.params.length > 0) {
            let be = G.map(oe, "params");
            re.push(...be);
          }
          if (ee.hash && ee.hash.pairs.length > 0) {
            let be = oe("hash");
            re.push(be);
          }
          return re.length === 0 ? "" : l(p, re);
        }
        function De(G) {
          return ["as |", G.blockParams.join(" "), "|"];
        }
        r.exports = { print: h, massageAstNode: w };
      } }), Yd = Z({ "src/language-handlebars/parsers.js"() {
        ne();
      } }), Qd = Z({ "node_modules/linguist-languages/data/Handlebars.json"(e, r) {
        r.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), Zd = Z({ "src/language-handlebars/index.js"(e, r) {
        ne();
        var t = _t(), s = Kd(), a = Yd(), n = [t(Qd(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], u = { glimmer: s };
        r.exports = { languages: n, printers: u, parsers: a };
      } }), eg = Z({ "src/language-graphql/pragma.js"(e, r) {
        ne();
        function t(a) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a);
        }
        function s(a) {
          return `# @format

` + a;
        }
        r.exports = { hasPragma: t, insertPragma: s };
      } }), tg = Z({ "src/language-graphql/loc.js"(e, r) {
        ne();
        function t(a) {
          return typeof a.start == "number" ? a.start : a.loc && a.loc.start;
        }
        function s(a) {
          return typeof a.end == "number" ? a.end : a.loc && a.loc.end;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), rg = Z({ "src/language-graphql/printer-graphql.js"(e, r) {
        ne();
        var { builders: { join: t, hardline: s, line: a, softline: n, group: u, indent: i, ifBreak: l } } = Me(), { isNextLineEmpty: p, isNonEmptyArray: d } = Ue(), { insertPragma: y } = eg(), { locStart: g, locEnd: c } = tg();
        function D(P, H, f) {
          let b = P.getValue();
          if (!b)
            return "";
          if (typeof b == "string")
            return b;
          switch (b.kind) {
            case "Document": {
              let m = [];
              return P.each((v, o, h) => {
                m.push(f()), o !== h.length - 1 && (m.push(s), p(H.originalText, v.getValue(), c) && m.push(s));
              }, "definitions"), [...m, s];
            }
            case "OperationDefinition": {
              let m = H.originalText[g(b)] !== "{", v = Boolean(b.name);
              return [m ? b.operation : "", m && v ? [" ", f("name")] : "", m && !v && d(b.variableDefinitions) ? " " : "", d(b.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(f, "variableDefinitions"))]), n, ")"]) : "", E(P, f, b), b.selectionSet ? !m && !v ? "" : " " : "", f("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", f("name"), d(b.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(f, "variableDefinitions"))]), n, ")"]) : "", " on ", f("typeCondition"), E(P, f, b), " ", f("selectionSet")];
            case "SelectionSet":
              return ["{", i([s, t(s, _(P, H, f, "selections"))]), s, "}"];
            case "Field":
              return u([b.alias ? [f("alias"), ": "] : "", f("name"), b.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, H, f, "arguments"))]), n, ")"]) : "", E(P, f, b), b.selectionSet ? " " : "", f("selectionSet")]);
            case "Name":
              return b.value;
            case "StringValue": {
              if (b.block) {
                let m = b.value.replace(/"""/g, "\\$&").split(`
`);
                return m.length === 1 && (m[0] = m[0].trim()), m.every((v) => v === "") && (m.length = 0), t(s, ['"""', ...m, '"""']);
              }
              return ['"', b.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return b.value;
            case "BooleanValue":
              return b.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", f("name")];
            case "ListValue":
              return u(["[", i([n, t([l("", ", "), n], P.map(f, "values"))]), n, "]"]);
            case "ObjectValue":
              return u(["{", H.bracketSpacing && b.fields.length > 0 ? " " : "", i([n, t([l("", ", "), n], P.map(f, "fields"))]), n, l("", H.bracketSpacing && b.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [f("name"), ": ", f("value")];
            case "Directive":
              return ["@", f("name"), b.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, H, f, "arguments"))]), n, ")"]) : ""];
            case "NamedType":
              return f("name");
            case "VariableDefinition":
              return [f("variable"), ": ", f("type"), b.defaultValue ? [" = ", f("defaultValue")] : "", E(P, f, b)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [f("description"), b.description ? s : "", b.kind === "ObjectTypeExtension" ? "extend " : "", "type ", f("name"), b.interfaces.length > 0 ? [" implements ", ...A(P, H, f)] : "", E(P, f, b), b.fields.length > 0 ? [" {", i([s, t(s, _(P, H, f, "fields"))]), s, "}"] : ""];
            case "FieldDefinition":
              return [f("description"), b.description ? s : "", f("name"), b.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, H, f, "arguments"))]), n, ")"]) : "", ": ", f("type"), E(P, f, b)];
            case "DirectiveDefinition":
              return [f("description"), b.description ? s : "", "directive ", "@", f("name"), b.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, H, f, "arguments"))]), n, ")"]) : "", b.repeatable ? " repeatable" : "", " on ", t(" | ", P.map(f, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [f("description"), b.description ? s : "", b.kind === "EnumTypeExtension" ? "extend " : "", "enum ", f("name"), E(P, f, b), b.values.length > 0 ? [" {", i([s, t(s, _(P, H, f, "values"))]), s, "}"] : ""];
            case "EnumValueDefinition":
              return [f("description"), b.description ? s : "", f("name"), E(P, f, b)];
            case "InputValueDefinition":
              return [f("description"), b.description ? b.description.block ? s : a : "", f("name"), ": ", f("type"), b.defaultValue ? [" = ", f("defaultValue")] : "", E(P, f, b)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [f("description"), b.description ? s : "", b.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", f("name"), E(P, f, b), b.fields.length > 0 ? [" {", i([s, t(s, _(P, H, f, "fields"))]), s, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", E(P, f, b), ...b.operationTypes.length > 0 ? [" {", i([s, t(s, _(P, H, f, "operationTypes"))]), s, "}"] : []];
            case "SchemaDefinition":
              return [f("description"), b.description ? s : "", "schema", E(P, f, b), " {", b.operationTypes.length > 0 ? i([s, t(s, _(P, H, f, "operationTypes"))]) : "", s, "}"];
            case "OperationTypeDefinition":
              return [f("operation"), ": ", f("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [f("description"), b.description ? s : "", b.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", f("name"), b.interfaces.length > 0 ? [" implements ", ...A(P, H, f)] : "", E(P, f, b), b.fields.length > 0 ? [" {", i([s, t(s, _(P, H, f, "fields"))]), s, "}"] : ""];
            case "FragmentSpread":
              return ["...", f("name"), E(P, f, b)];
            case "InlineFragment":
              return ["...", b.typeCondition ? [" on ", f("typeCondition")] : "", E(P, f, b), " ", f("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return u([f("description"), b.description ? s : "", u([b.kind === "UnionTypeExtension" ? "extend " : "", "union ", f("name"), E(P, f, b), b.types.length > 0 ? [" =", l("", " "), i([l([a, "  "]), t([a, "| "], P.map(f, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [f("description"), b.description ? s : "", b.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", f("name"), E(P, f, b)];
            case "NonNullType":
              return [f("type"), "!"];
            case "ListType":
              return ["[", f("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(b.kind));
          }
        }
        function E(P, H, f) {
          if (f.directives.length === 0)
            return "";
          let b = t(a, P.map(H, "directives"));
          return f.kind === "FragmentDefinition" || f.kind === "OperationDefinition" ? u([a, b]) : [" ", u(i([n, b]))];
        }
        function _(P, H, f, b) {
          return P.map((m, v, o) => {
            let h = f();
            return v < o.length - 1 && p(H.originalText, m.getValue(), c) ? [h, s] : h;
          }, b);
        }
        function w(P) {
          return P.kind && P.kind !== "Comment";
        }
        function F(P) {
          let H = P.getValue();
          if (H.kind === "Comment")
            return "#" + H.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(H));
        }
        function A(P, H, f) {
          let b = P.getNode(), m = [], { interfaces: v } = b, o = P.map((h) => f(h), "interfaces");
          for (let h = 0; h < v.length; h++) {
            let C = v[h];
            m.push(o[h]);
            let S = v[h + 1];
            if (S) {
              let x = H.originalText.slice(C.loc.end, S.loc.start), T = x.includes("#"), k = x.replace(/#.*/g, "").trim();
              m.push(k === "," ? "," : " &", T ? a : " ");
            }
          }
          return m;
        }
        function N(P, H) {
          P.kind === "StringValue" && P.block && !P.value.includes(`
`) && (H.value = H.value.trim());
        }
        N.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function I(P) {
          var H;
          let f = P.getValue();
          return f == null || (H = f.comments) === null || H === void 0 ? void 0 : H.some((b) => b.value.trim() === "prettier-ignore");
        }
        r.exports = { print: D, massageAstNode: N, hasPrettierIgnore: I, insertPragma: y, printComment: F, canAttachComment: w };
      } }), ng = Z({ "src/language-graphql/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { bracketSpacing: t.bracketSpacing };
      } }), ug = Z({ "src/language-graphql/parsers.js"() {
        ne();
      } }), sg = Z({ "node_modules/linguist-languages/data/GraphQL.json"(e, r) {
        r.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), ig = Z({ "src/language-graphql/index.js"(e, r) {
        ne();
        var t = _t(), s = rg(), a = ng(), n = ug(), u = [t(sg(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], i = { graphql: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), Po = Z({ "node_modules/collapse-white-space/index.js"(e, r) {
        ne(), r.exports = t;
        function t(s) {
          return String(s).replace(/\s+/g, " ");
        }
      } }), Io = Z({ "src/language-markdown/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), ag = Z({ "src/language-markdown/constants.evaluate.js"(e, r) {
        r.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), iu = Z({ "src/language-markdown/utils.js"(e, r) {
        ne();
        var { getLast: t } = Ue(), { locStart: s, locEnd: a } = Io(), { cjkPattern: n, kPattern: u, punctuationPattern: i } = ag(), l = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], p = [...l, "tableCell", "paragraph", "heading"], d = new RegExp(u), y = new RegExp(i);
        function g(F, A) {
          let N = "non-cjk", I = "cj-letter", P = "k-letter", H = "cjk-punctuation", f = [], b = (A.proseWrap === "preserve" ? F : F.replace(new RegExp(`(${n})
(${n})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [v, o] of b.entries()) {
            if (v % 2 === 1) {
              f.push({ type: "whitespace", value: /\n/.test(o) ? `
` : " " });
              continue;
            }
            if ((v === 0 || v === b.length - 1) && o === "")
              continue;
            let h = o.split(new RegExp(`(${n})`));
            for (let [C, S] of h.entries())
              if (!((C === 0 || C === h.length - 1) && S === "")) {
                if (C % 2 === 0) {
                  S !== "" && m({ type: "word", value: S, kind: N, hasLeadingPunctuation: y.test(S[0]), hasTrailingPunctuation: y.test(t(S)) });
                  continue;
                }
                m(y.test(S) ? { type: "word", value: S, kind: H, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: S, kind: d.test(S) ? P : I, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
              }
          }
          return f;
          function m(v) {
            let o = t(f);
            o && o.type === "word" && (o.kind === N && v.kind === I && !o.hasTrailingPunctuation || o.kind === I && v.kind === N && !v.hasLeadingPunctuation ? f.push({ type: "whitespace", value: " " }) : !h(N, H) && ![o.value, v.value].some((C) => /\u3000/.test(C)) && f.push({ type: "whitespace", value: "" })), f.push(v);
            function h(C, S) {
              return o.kind === C && v.kind === S || o.kind === S && v.kind === C;
            }
          }
        }
        function c(F, A) {
          let [, N, I, P] = A.slice(F.position.start.offset, F.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: N, marker: I, leadingSpaces: P };
        }
        function D(F, A) {
          if (!F.ordered || F.children.length < 2)
            return false;
          let N = Number(c(F.children[0], A.originalText).numberText), I = Number(c(F.children[1], A.originalText).numberText);
          if (N === 0 && F.children.length > 2) {
            let P = Number(c(F.children[2], A.originalText).numberText);
            return I === 1 && P === 1;
          }
          return I === 1;
        }
        function E(F, A) {
          let { value: N } = F;
          return F.position.end.offset === A.length && N.endsWith(`
`) && A.endsWith(`
`) ? N.slice(0, -1) : N;
        }
        function _(F, A) {
          return function N(I, P, H) {
            let f = Object.assign({}, A(I, P, H));
            return f.children && (f.children = f.children.map((b, m) => N(b, m, [f, ...H]))), f;
          }(F, null, []);
        }
        function w(F) {
          if ((F == null ? void 0 : F.type) !== "link" || F.children.length !== 1)
            return false;
          let [A] = F.children;
          return s(F) === s(A) && a(F) === a(A);
        }
        r.exports = { mapAst: _, splitText: g, punctuationPattern: i, getFencedCodeBlockValue: E, getOrderedListItemInfo: c, hasGitDiffFriendlyOrderedList: D, INLINE_NODE_TYPES: l, INLINE_NODE_WRAPPER_TYPES: p, isAutolink: w };
      } }), og = Z({ "src/language-markdown/embed.js"(e, r) {
        ne();
        var { inferParserByLanguage: t, getMaxContinuousCount: s } = Ue(), { builders: { hardline: a, markAsRoot: n }, utils: { replaceEndOfLine: u } } = Me(), i = su(), { getFencedCodeBlockValue: l } = iu();
        function p(d, y, g, c) {
          let D = d.getValue();
          if (D.type === "code" && D.lang !== null) {
            let E = t(D.lang, c);
            if (E) {
              let _ = c.__inJsTemplate ? "~" : "`", w = _.repeat(Math.max(3, s(D.value, _) + 1)), F = { parser: E };
              D.lang === "tsx" && (F.filepath = "dummy.tsx");
              let A = g(l(D, c.originalText), F, { stripTrailingHardline: true });
              return n([w, D.lang, D.meta ? " " + D.meta : "", a, u(A), a, w]);
            }
          }
          switch (D.type) {
            case "front-matter":
              return i(D, g);
            case "importExport":
              return [g(D.value, { parser: "babel" }, { stripTrailingHardline: true }), a];
            case "jsx":
              return g(`<$>${D.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: true });
          }
          return null;
        }
        r.exports = p;
      } }), ko = Z({ "src/language-markdown/pragma.js"(e, r) {
        ne();
        var t = _o(), s = ["format", "prettier"];
        function a(n) {
          let u = `@(${s.join("|")})`, i = new RegExp([`<!--\\s*${u}\\s*-->`, `{\\s*\\/\\*\\s*${u}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${u}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), l = n.match(i);
          return (l == null ? void 0 : l.index) === 0;
        }
        r.exports = { startWithPragma: a, hasPragma: (n) => a(t(n).content.trimStart()), insertPragma: (n) => {
          let u = t(n), i = `<!-- @${s[0]} -->`;
          return u.frontMatter ? `${u.frontMatter.raw}

${i}

${u.content}` : `${i}

${u.content}`;
        } };
      } }), lg = Z({ "src/language-markdown/print-preprocess.js"(e, r) {
        ne();
        var t = lt(), { getOrderedListItemInfo: s, mapAst: a, splitText: n } = iu(), u = /^.$/su;
        function i(w, F) {
          return w = d(w, F), w = c(w), w = p(w, F), w = E(w, F), w = _(w, F), w = D(w, F), w = l(w), w = y(w), w;
        }
        function l(w) {
          return a(w, (F) => F.type !== "import" && F.type !== "export" ? F : Object.assign(Object.assign({}, F), {}, { type: "importExport" }));
        }
        function p(w, F) {
          return a(w, (A) => A.type !== "inlineCode" || F.proseWrap === "preserve" ? A : Object.assign(Object.assign({}, A), {}, { value: A.value.replace(/\s+/g, " ") }));
        }
        function d(w, F) {
          return a(w, (A) => A.type !== "text" || A.value === "*" || A.value === "_" || !u.test(A.value) || A.position.end.offset - A.position.start.offset === A.value.length ? A : Object.assign(Object.assign({}, A), {}, { value: F.originalText.slice(A.position.start.offset, A.position.end.offset) }));
        }
        function y(w) {
          return g(w, (F, A) => F.type === "importExport" && A.type === "importExport", (F, A) => ({ type: "importExport", value: F.value + `

` + A.value, position: { start: F.position.start, end: A.position.end } }));
        }
        function g(w, F, A) {
          return a(w, (N) => {
            if (!N.children)
              return N;
            let I = N.children.reduce((P, H) => {
              let f = t(P);
              return f && F(f, H) ? P.splice(-1, 1, A(f, H)) : P.push(H), P;
            }, []);
            return Object.assign(Object.assign({}, N), {}, { children: I });
          });
        }
        function c(w) {
          return g(w, (F, A) => F.type === "text" && A.type === "text", (F, A) => ({ type: "text", value: F.value + A.value, position: { start: F.position.start, end: A.position.end } }));
        }
        function D(w, F) {
          return a(w, (A, N, I) => {
            let [P] = I;
            if (A.type !== "text")
              return A;
            let { value: H } = A;
            return P.type === "paragraph" && (N === 0 && (H = H.trimStart()), N === P.children.length - 1 && (H = H.trimEnd())), { type: "sentence", position: A.position, children: n(H, F) };
          });
        }
        function E(w, F) {
          return a(w, (A, N, I) => {
            if (A.type === "code") {
              let P = /^\n?(?: {4,}|\t)/.test(F.originalText.slice(A.position.start.offset, A.position.end.offset));
              if (A.isIndented = P, P)
                for (let H = 0; H < I.length; H++) {
                  let f = I[H];
                  if (f.hasIndentedCodeblock)
                    break;
                  f.type === "list" && (f.hasIndentedCodeblock = true);
                }
            }
            return A;
          });
        }
        function _(w, F) {
          return a(w, (I, P, H) => {
            if (I.type === "list" && I.children.length > 0) {
              for (let f = 0; f < H.length; f++) {
                let b = H[f];
                if (b.type === "list" && !b.isAligned)
                  return I.isAligned = false, I;
              }
              I.isAligned = N(I);
            }
            return I;
          });
          function A(I) {
            return I.children.length === 0 ? -1 : I.children[0].position.start.column - 1;
          }
          function N(I) {
            if (!I.ordered)
              return true;
            let [P, H] = I.children;
            if (s(P, F.originalText).leadingSpaces.length > 1)
              return true;
            let b = A(P);
            if (b === -1)
              return false;
            if (I.children.length === 1)
              return b % F.tabWidth === 0;
            let m = A(H);
            return b !== m ? false : b % F.tabWidth === 0 ? true : s(H, F.originalText).leadingSpaces.length > 1;
          }
        }
        r.exports = i;
      } }), cg = Z({ "src/language-markdown/clean.js"(e, r) {
        ne();
        var t = Po(), { isFrontMatterNode: s } = Ue(), { startWithPragma: a } = ko(), n = /* @__PURE__ */ new Set(["position", "raw"]);
        function u(i, l, p) {
          if ((i.type === "front-matter" || i.type === "code" || i.type === "yaml" || i.type === "import" || i.type === "export" || i.type === "jsx") && delete l.value, i.type === "list" && delete l.isAligned, (i.type === "list" || i.type === "listItem") && (delete l.spread, delete l.loose), i.type === "text" || (i.type === "inlineCode" && (l.value = i.value.replace(/[\t\n ]+/g, " ")), i.type === "wikiLink" && (l.value = i.value.trim().replace(/[\t\n]+/g, " ")), (i.type === "definition" || i.type === "linkReference" || i.type === "imageReference") && (l.label = t(i.label)), (i.type === "definition" || i.type === "link" || i.type === "image") && i.title && (l.title = i.title.replace(/\\(["')])/g, "$1")), p && p.type === "root" && p.children.length > 0 && (p.children[0] === i || s(p.children[0]) && p.children[1] === i) && i.type === "html" && a(i.value)))
            return null;
        }
        u.ignoredProperties = n, r.exports = u;
      } }), pg = Z({ "src/language-markdown/printer-markdown.js"(e, r) {
        ne();
        var t = Po(), { getLast: s, getMinNotPresentContinuousCount: a, getMaxContinuousCount: n, getStringWidth: u, isNonEmptyArray: i } = Ue(), { builders: { breakParent: l, join: p, line: d, literalline: y, markAsRoot: g, hardline: c, softline: D, ifBreak: E, fill: _, align: w, indent: F, group: A, hardlineWithoutBreakParent: N }, utils: { normalizeDoc: I, replaceTextEndOfLine: P }, printer: { printDocToString: H } } = Me(), f = og(), { insertPragma: b } = ko(), { locStart: m, locEnd: v } = Io(), o = lg(), h = cg(), { getFencedCodeBlockValue: C, hasGitDiffFriendlyOrderedList: S, splitText: x, punctuationPattern: T, INLINE_NODE_TYPES: k, INLINE_NODE_WRAPPER_TYPES: M, isAutolink: R } = iu(), q = /* @__PURE__ */ new Set(["importExport"]), U = ["heading", "tableCell", "link", "wikiLink"], L = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function Y(De, G, oe) {
          let ee = De.getValue();
          if (pe(De))
            return x(G.originalText.slice(ee.position.start.offset, ee.position.end.offset), G).map((re) => re.type === "word" ? re.value : re.value === "" ? "" : W(De, re.value, G));
          switch (ee.type) {
            case "front-matter":
              return G.originalText.slice(ee.position.start.offset, ee.position.end.offset);
            case "root":
              return ee.children.length === 0 ? "" : [I(de(De, G, oe)), q.has(z(ee).type) ? "" : c];
            case "paragraph":
              return ie(De, G, oe, { postprocessor: _ });
            case "sentence":
              return ie(De, G, oe);
            case "word": {
              let re = ee.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${T})(_+)`, `(_+)(${T}|$)`].join("|"), "g"), (fe, B, $, te, ye) => ($ ? `${B}${$}` : `${te}${ye}`).replace(/_/g, "\\_")), be = (fe, B, $) => fe.type === "sentence" && $ === 0, ve = (fe, B, $) => R(fe.children[$ - 1]);
              return re !== ee.value && (De.match(void 0, be, ve) || De.match(void 0, be, (fe, B, $) => fe.type === "emphasis" && $ === 0, ve)) && (re = re.replace(/^(\\?[*_])+/, (fe) => fe.replace(/\\/g, ""))), re;
            }
            case "whitespace": {
              let re = De.getParentNode(), be = re.children.indexOf(ee), ve = re.children[be + 1], fe = ve && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(ve.value) ? "never" : G.proseWrap;
              return W(De, ee.value, { proseWrap: fe });
            }
            case "emphasis": {
              let re;
              if (R(ee.children[0]))
                re = G.originalText[ee.position.start.offset];
              else {
                let be = De.getParentNode(), ve = be.children.indexOf(ee), fe = be.children[ve - 1], B = be.children[ve + 1];
                re = fe && fe.type === "sentence" && fe.children.length > 0 && s(fe.children).type === "word" && !s(fe.children).hasTrailingPunctuation || B && B.type === "sentence" && B.children.length > 0 && B.children[0].type === "word" && !B.children[0].hasLeadingPunctuation || ce(De, "emphasis") ? "*" : "_";
              }
              return [re, ie(De, G, oe), re];
            }
            case "strong":
              return ["**", ie(De, G, oe), "**"];
            case "delete":
              return ["~~", ie(De, G, oe), "~~"];
            case "inlineCode": {
              let re = a(ee.value, "`"), be = "`".repeat(re || 1), ve = re && !/^\s/.test(ee.value) ? " " : "";
              return [be, ve, ee.value, ve, be];
            }
            case "wikiLink": {
              let re = "";
              return G.proseWrap === "preserve" ? re = ee.value : re = ee.value.replace(/[\t\n]+/g, " "), ["[[", re, "]]"];
            }
            case "link":
              switch (G.originalText[ee.position.start.offset]) {
                case "<": {
                  let re = "mailto:";
                  return ["<", ee.url.startsWith(re) && G.originalText.slice(ee.position.start.offset + 1, ee.position.start.offset + 1 + re.length) !== re ? ee.url.slice(re.length) : ee.url, ">"];
                }
                case "[":
                  return ["[", ie(De, G, oe), "](", Ae(ee.url, ")"), Ce(ee.title, G), ")"];
                default:
                  return G.originalText.slice(ee.position.start.offset, ee.position.end.offset);
              }
            case "image":
              return ["![", ee.alt || "", "](", Ae(ee.url, ")"), Ce(ee.title, G), ")"];
            case "blockquote":
              return ["> ", w("> ", ie(De, G, oe))];
            case "heading":
              return ["#".repeat(ee.depth) + " ", ie(De, G, oe)];
            case "code": {
              if (ee.isIndented) {
                let ve = " ".repeat(4);
                return w(ve, [ve, ...P(ee.value, c)]);
              }
              let re = G.__inJsTemplate ? "~" : "`", be = re.repeat(Math.max(3, n(ee.value, re) + 1));
              return [be, ee.lang || "", ee.meta ? " " + ee.meta : "", c, ...P(C(ee, G.originalText), c), c, be];
            }
            case "html": {
              let re = De.getParentNode(), be = re.type === "root" && s(re.children) === ee ? ee.value.trimEnd() : ee.value, ve = /^<!--.*-->$/s.test(be);
              return P(be, ve ? c : g(y));
            }
            case "list": {
              let re = K(ee, De.getParentNode()), be = S(ee, G);
              return ie(De, G, oe, { processor: (ve, fe) => {
                let B = te(), $ = ve.getValue();
                if ($.children.length === 2 && $.children[1].type === "html" && $.children[0].position.start.column !== $.children[1].position.start.column)
                  return [B, V(ve, G, oe, B)];
                return [B, w(" ".repeat(B.length), V(ve, G, oe, B))];
                function te() {
                  let ye = ee.ordered ? (fe === 0 ? ee.start : be ? 1 : ee.start + fe) + (re % 2 === 0 ? ". " : ") ") : re % 2 === 0 ? "- " : "* ";
                  return ee.isAligned || ee.hasIndentedCodeblock ? j(ye, G) : ye;
                }
              } });
            }
            case "thematicBreak": {
              let re = Q(De, "list");
              return re === -1 ? "---" : K(De.getParentNode(re), De.getParentNode(re + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", ie(De, G, oe), "]", ee.referenceType === "full" ? we(ee) : ee.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (ee.referenceType) {
                case "full":
                  return ["![", ee.alt || "", "]", we(ee)];
                default:
                  return ["![", ee.alt, "]", ee.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let re = G.proseWrap === "always" ? d : " ";
              return A([we(ee), ":", F([re, Ae(ee.url), ee.title === null ? "" : [re, Ce(ee.title, G, false)]])]);
            }
            case "footnote":
              return ["[^", ie(De, G, oe), "]"];
            case "footnoteReference":
              return _e(ee);
            case "footnoteDefinition": {
              let re = De.getParentNode().children[De.getName() + 1], be = ee.children.length === 1 && ee.children[0].type === "paragraph" && (G.proseWrap === "never" || G.proseWrap === "preserve" && ee.children[0].position.start.line === ee.children[0].position.end.line);
              return [_e(ee), ": ", be ? ie(De, G, oe) : A([w(" ".repeat(4), ie(De, G, oe, { processor: (ve, fe) => fe === 0 ? A([D, oe()]) : oe() })), re && re.type === "footnoteDefinition" ? D : ""])];
            }
            case "table":
              return X(De, G, oe);
            case "tableCell":
              return ie(De, G, oe);
            case "break":
              return /\s/.test(G.originalText[ee.position.start.offset]) ? ["  ", g(y)] : ["\\", c];
            case "liquidNode":
              return P(ee.value, c);
            case "importExport":
              return [ee.value, c];
            case "esComment":
              return ["{/* ", ee.value, " */}"];
            case "jsx":
              return ee.value;
            case "math":
              return ["$$", c, ee.value ? [...P(ee.value, c), c] : "", "$$"];
            case "inlineMath":
              return G.originalText.slice(m(ee), v(ee));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(ee.type)}`);
          }
        }
        function V(De, G, oe, ee) {
          let re = De.getValue(), be = re.checked === null ? "" : re.checked ? "[x] " : "[ ] ";
          return [be, ie(De, G, oe, { processor: (ve, fe) => {
            if (fe === 0 && ve.getValue().type !== "list")
              return w(" ".repeat(be.length), oe());
            let B = " ".repeat(Oe(G.tabWidth - ee.length, 0, 3));
            return [B, w(B, oe())];
          } })];
        }
        function j(De, G) {
          let oe = ee();
          return De + " ".repeat(oe >= 4 ? 0 : oe);
          function ee() {
            let re = De.length % G.tabWidth;
            return re === 0 ? 0 : G.tabWidth - re;
          }
        }
        function K(De, G) {
          return se(De, G, (oe) => oe.ordered === De.ordered);
        }
        function se(De, G, oe) {
          let ee = -1;
          for (let re of G.children)
            if (re.type === De.type && oe(re) ? ee++ : ee = -1, re === De)
              return ee;
        }
        function Q(De, G) {
          let oe = Array.isArray(G) ? G : [G], ee = -1, re;
          for (; re = De.getParentNode(++ee); )
            if (oe.includes(re.type))
              return ee;
          return -1;
        }
        function ce(De, G) {
          let oe = Q(De, G);
          return oe === -1 ? null : De.getParentNode(oe);
        }
        function W(De, G, oe) {
          if (oe.proseWrap === "preserve" && G === `
`)
            return c;
          let ee = oe.proseWrap === "always" && !ce(De, U);
          return G !== "" ? ee ? d : " " : ee ? D : "";
        }
        function X(De, G, oe) {
          let ee = De.getValue(), re = [], be = De.map((ye) => ye.map((Fe, Ne) => {
            let he = H(oe(), G).formatted, ze = u(he);
            return re[Ne] = Math.max(re[Ne] || 3, ze), { text: he, width: ze };
          }, "children"), "children"), ve = B(false);
          if (G.proseWrap !== "never")
            return [l, ve];
          let fe = B(true);
          return [l, A(E(fe, ve))];
          function B(ye) {
            let Fe = [te(be[0], ye), $(ye)];
            return be.length > 1 && Fe.push(p(N, be.slice(1).map((Ne) => te(Ne, ye)))), p(N, Fe);
          }
          function $(ye) {
            return `| ${re.map((Ne, he) => {
              let ze = ee.align[he], Te = ze === "center" || ze === "left" ? ":" : "-", Ye = ze === "center" || ze === "right" ? ":" : "-", Se = ye ? "-" : "-".repeat(Ne - 2);
              return `${Te}${Se}${Ye}`;
            }).join(" | ")} |`;
          }
          function te(ye, Fe) {
            return `| ${ye.map((he, ze) => {
              let { text: Te, width: Ye } = he;
              if (Fe)
                return Te;
              let Se = re[ze] - Ye, ke = ee.align[ze], je = 0;
              ke === "right" ? je = Se : ke === "center" && (je = Math.floor(Se / 2));
              let Je = Se - je;
              return `${" ".repeat(je)}${Te}${" ".repeat(Je)}`;
            }).join(" | ")} |`;
          }
        }
        function de(De, G, oe) {
          let ee = [], re = null, { children: be } = De.getValue();
          for (let [ve, fe] of be.entries())
            switch (ue(fe)) {
              case "start":
                re === null && (re = { index: ve, offset: fe.position.end.offset });
                break;
              case "end":
                re !== null && (ee.push({ start: re, end: { index: ve, offset: fe.position.start.offset } }), re = null);
                break;
            }
          return ie(De, G, oe, { processor: (ve, fe) => {
            if (ee.length > 0) {
              let B = ee[0];
              if (fe === B.start.index)
                return [Ee(be[B.start.index]), G.originalText.slice(B.start.offset, B.end.offset), Ee(be[B.end.index])];
              if (B.start.index < fe && fe < B.end.index)
                return false;
              if (fe === B.end.index)
                return ee.shift(), false;
            }
            return oe();
          } });
        }
        function ie(De, G, oe) {
          let ee = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: re } = ee, be = ee.processor || (() => oe()), ve = De.getValue(), fe = [], B;
          return De.each(($, te) => {
            let ye = $.getValue(), Fe = be($, te);
            if (Fe !== false) {
              let Ne = { parts: fe, prevNode: B, parentNode: ve, options: G };
              J(ye, Ne) && (fe.push(c), B && q.has(B.type) || (le(ye, Ne) || ge(ye, Ne)) && fe.push(c), ge(ye, Ne) && fe.push(c)), fe.push(Fe), B = ye;
            }
          }, "children"), re ? re(fe) : fe;
        }
        function Ee(De) {
          if (De.type === "html")
            return De.value;
          if (De.type === "paragraph" && Array.isArray(De.children) && De.children.length === 1 && De.children[0].type === "esComment")
            return ["{/* ", De.children[0].value, " */}"];
        }
        function z(De) {
          let G = De;
          for (; i(G.children); )
            G = s(G.children);
          return G;
        }
        function ue(De) {
          let G;
          if (De.type === "html")
            G = De.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let oe;
            De.type === "esComment" ? oe = De : De.type === "paragraph" && De.children.length === 1 && De.children[0].type === "esComment" && (oe = De.children[0]), oe && (G = oe.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return G ? G[1] || "next" : false;
        }
        function J(De, G) {
          let oe = G.parts.length === 0, ee = k.includes(De.type), re = De.type === "html" && M.includes(G.parentNode.type);
          return !oe && !ee && !re;
        }
        function le(De, G) {
          var oe, ee, re;
          let ve = (G.prevNode && G.prevNode.type) === De.type && L.has(De.type), fe = G.parentNode.type === "listItem" && !G.parentNode.loose, B = ((oe = G.prevNode) === null || oe === void 0 ? void 0 : oe.type) === "listItem" && G.prevNode.loose, $ = ue(G.prevNode) === "next", te = De.type === "html" && ((ee = G.prevNode) === null || ee === void 0 ? void 0 : ee.type) === "html" && G.prevNode.position.end.line + 1 === De.position.start.line, ye = De.type === "html" && G.parentNode.type === "listItem" && ((re = G.prevNode) === null || re === void 0 ? void 0 : re.type) === "paragraph" && G.prevNode.position.end.line + 1 === De.position.start.line;
          return B || !(ve || fe || $ || te || ye);
        }
        function ge(De, G) {
          let oe = G.prevNode && G.prevNode.type === "list", ee = De.type === "code" && De.isIndented;
          return oe && ee;
        }
        function pe(De) {
          let G = ce(De, ["linkReference", "imageReference"]);
          return G && (G.type !== "linkReference" || G.referenceType !== "full");
        }
        function Ae(De) {
          let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], oe = [" ", ...Array.isArray(G) ? G : [G]];
          return new RegExp(oe.map((ee) => `\\${ee}`).join("|")).test(De) ? `<${De}>` : De;
        }
        function Ce(De, G) {
          let oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          if (!De)
            return "";
          if (oe)
            return " " + Ce(De, G, false);
          if (De = De.replace(/\\(["')])/g, "$1"), De.includes('"') && De.includes("'") && !De.includes(")"))
            return `(${De})`;
          let ee = De.split("'").length - 1, re = De.split('"').length - 1, be = ee > re ? '"' : re > ee || G.singleQuote ? "'" : '"';
          return De = De.replace(/\\/, "\\\\"), De = De.replace(new RegExp(`(${be})`, "g"), "\\$1"), `${be}${De}${be}`;
        }
        function Oe(De, G, oe) {
          return De < G ? G : De > oe ? oe : De;
        }
        function Ie(De) {
          let G = Number(De.getName());
          if (G === 0)
            return false;
          let oe = De.getParentNode().children[G - 1];
          return ue(oe) === "next";
        }
        function we(De) {
          return `[${t(De.label)}]`;
        }
        function _e(De) {
          return `[^${De.label}]`;
        }
        r.exports = { preprocess: o, print: Y, embed: f, massageAstNode: h, hasPrettierIgnore: Ie, insertPragma: b };
      } }), fg = Z({ "src/language-markdown/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
      } }), Dg = Z({ "src/language-markdown/parsers.js"() {
        ne();
      } }), _a = Z({ "node_modules/linguist-languages/data/Markdown.json"(e, r) {
        r.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), mg = Z({ "src/language-markdown/index.js"(e, r) {
        ne();
        var t = _t(), s = pg(), a = fg(), n = Dg(), u = [t(_a(), (l) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...l.filenames, "README"], extensions: l.extensions.filter((p) => p !== ".mdx") })), t(_a(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], i = { mdast: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), dg = Z({ "src/language-html/clean.js"(e, r) {
        ne();
        var { isFrontMatterNode: t } = Ue(), s = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function a(n, u) {
          if (n.type === "text" || n.type === "comment" || t(n) || n.type === "yaml" || n.type === "toml")
            return null;
          n.type === "attribute" && delete u.value, n.type === "docType" && delete u.value;
        }
        a.ignoredProperties = s, r.exports = a;
      } }), gg = Z({ "src/language-html/constants.evaluate.js"(e, r) {
        r.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), yg = Z({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        ne();
        function t(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }
        r.exports = t;
      } }), Rt = Z({ "src/language-html/utils/index.js"(e, r) {
        ne();
        var { inferParserByLanguage: t, isFrontMatterNode: s } = Ue(), { builders: { line: a, hardline: n, join: u }, utils: { getDocParts: i, replaceTextEndOfLine: l } } = Me(), { CSS_DISPLAY_TAGS: p, CSS_DISPLAY_DEFAULT: d, CSS_WHITE_SPACE_TAGS: y, CSS_WHITE_SPACE_DEFAULT: g } = gg(), c = yg(), D = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), E = (B) => B.replace(/^[\t\n\f\r ]+/, ""), _ = (B) => B.replace(/[\t\n\f\r ]+$/, ""), w = (B) => E(_(B)), F = (B) => B.replace(/^[\t\f\r ]*\n/g, ""), A = (B) => F(_(B)), N = (B) => B.split(/[\t\n\f\r ]+/), I = (B) => B.match(/^[\t\n\f\r ]*/)[0], P = (B) => {
          let [, $, te, ye] = B.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: $, trailingWhitespace: ye, text: te };
        }, H = (B) => /[\t\n\f\r ]/.test(B);
        function f(B, $) {
          return !!(B.type === "ieConditionalComment" && B.lastChild && !B.lastChild.isSelfClosing && !B.lastChild.endSourceSpan || B.type === "ieConditionalComment" && !B.complete || le(B) && B.children.some((te) => te.type !== "text" && te.type !== "interpolation") || ee(B, $) && !o(B) && B.type !== "interpolation");
        }
        function b(B) {
          return B.type === "attribute" || !B.parent || !B.prev ? false : m(B.prev);
        }
        function m(B) {
          return B.type === "comment" && B.value.trim() === "prettier-ignore";
        }
        function v(B) {
          return B.type === "text" || B.type === "comment";
        }
        function o(B) {
          return B.type === "element" && (B.fullName === "script" || B.fullName === "style" || B.fullName === "svg:style" || c(B) && (B.name === "script" || B.name === "style"));
        }
        function h(B) {
          return B.children && !o(B);
        }
        function C(B) {
          return o(B) || B.type === "interpolation" || S(B);
        }
        function S(B) {
          return Ce(B).startsWith("pre");
        }
        function x(B, $) {
          let te = ye();
          if (te && !B.prev && B.parent && B.parent.tagDefinition && B.parent.tagDefinition.ignoreFirstLf)
            return B.type === "interpolation";
          return te;
          function ye() {
            return s(B) ? false : (B.type === "text" || B.type === "interpolation") && B.prev && (B.prev.type === "text" || B.prev.type === "interpolation") ? true : !B.parent || B.parent.cssDisplay === "none" ? false : le(B.parent) ? true : !(!B.prev && (B.parent.type === "root" || le(B) && B.parent || o(B.parent) || G(B.parent, $) || !ie(B.parent.cssDisplay)) || B.prev && !ue(B.prev.cssDisplay));
          }
        }
        function T(B, $) {
          return s(B) ? false : (B.type === "text" || B.type === "interpolation") && B.next && (B.next.type === "text" || B.next.type === "interpolation") ? true : !B.parent || B.parent.cssDisplay === "none" ? false : le(B.parent) ? true : !(!B.next && (B.parent.type === "root" || le(B) && B.parent || o(B.parent) || G(B.parent, $) || !Ee(B.parent.cssDisplay)) || B.next && !z(B.next.cssDisplay));
        }
        function k(B) {
          return J(B.cssDisplay) && !o(B);
        }
        function M(B) {
          return s(B) || B.next && B.sourceSpan.end && B.sourceSpan.end.line + 1 < B.next.sourceSpan.start.line;
        }
        function R(B) {
          return q(B) || B.type === "element" && B.children.length > 0 && (["body", "script", "style"].includes(B.name) || B.children.some(($) => Q($))) || B.firstChild && B.firstChild === B.lastChild && B.firstChild.type !== "text" && V(B.firstChild) && (!B.lastChild.isTrailingSpaceSensitive || j(B.lastChild));
        }
        function q(B) {
          return B.type === "element" && B.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(B.name) || B.cssDisplay.startsWith("table") && B.cssDisplay !== "table-cell");
        }
        function U(B) {
          return K(B) || B.prev && L(B.prev) || Y(B);
        }
        function L(B) {
          return K(B) || B.type === "element" && B.fullName === "br" || Y(B);
        }
        function Y(B) {
          return V(B) && j(B);
        }
        function V(B) {
          return B.hasLeadingSpaces && (B.prev ? B.prev.sourceSpan.end.line < B.sourceSpan.start.line : B.parent.type === "root" || B.parent.startSourceSpan.end.line < B.sourceSpan.start.line);
        }
        function j(B) {
          return B.hasTrailingSpaces && (B.next ? B.next.sourceSpan.start.line > B.sourceSpan.end.line : B.parent.type === "root" || B.parent.endSourceSpan && B.parent.endSourceSpan.start.line > B.sourceSpan.end.line);
        }
        function K(B) {
          switch (B.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(B.name);
          }
          return false;
        }
        function se(B) {
          return B.lastChild ? se(B.lastChild) : B;
        }
        function Q(B) {
          return B.children && B.children.some(($) => $.type !== "text");
        }
        function ce(B) {
          let { type: $, lang: te } = B.attrMap;
          if ($ === "module" || $ === "text/javascript" || $ === "text/babel" || $ === "application/javascript" || te === "jsx")
            return "babel";
          if ($ === "application/x-typescript" || te === "ts" || te === "tsx")
            return "typescript";
          if ($ === "text/markdown")
            return "markdown";
          if ($ === "text/html")
            return "html";
          if ($ && ($.endsWith("json") || $.endsWith("importmap")) || $ === "speculationrules")
            return "json";
          if ($ === "text/x-handlebars-template")
            return "glimmer";
        }
        function W(B, $) {
          let { lang: te } = B.attrMap;
          if (!te || te === "postcss" || te === "css")
            return "css";
          if (te === "scss")
            return "scss";
          if (te === "less")
            return "less";
          if (te === "stylus")
            return t("stylus", $);
        }
        function X(B, $) {
          if (B.name === "script" && !B.attrMap.src)
            return !B.attrMap.lang && !B.attrMap.type ? "babel" : ce(B);
          if (B.name === "style")
            return W(B, $);
          if ($ && ee(B, $))
            return ce(B) || !("src" in B.attrMap) && t(B.attrMap.lang, $);
        }
        function de(B) {
          return B === "block" || B === "list-item" || B.startsWith("table");
        }
        function ie(B) {
          return !de(B) && B !== "inline-block";
        }
        function Ee(B) {
          return !de(B) && B !== "inline-block";
        }
        function z(B) {
          return !de(B);
        }
        function ue(B) {
          return !de(B);
        }
        function J(B) {
          return !de(B) && B !== "inline-block";
        }
        function le(B) {
          return Ce(B).startsWith("pre");
        }
        function ge(B, $) {
          let te = 0;
          for (let ye = B.stack.length - 1; ye >= 0; ye--) {
            let Fe = B.stack[ye];
            Fe && typeof Fe == "object" && !Array.isArray(Fe) && $(Fe) && te++;
          }
          return te;
        }
        function pe(B, $) {
          let te = B;
          for (; te; ) {
            if ($(te))
              return true;
            te = te.parent;
          }
          return false;
        }
        function Ae(B, $) {
          if (B.prev && B.prev.type === "comment") {
            let ye = B.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (ye)
              return ye[1];
          }
          let te = false;
          if (B.type === "element" && B.namespace === "svg")
            if (pe(B, (ye) => ye.fullName === "svg:foreignObject"))
              te = true;
            else
              return B.name === "svg" ? "inline-block" : "block";
          switch ($.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return $.parser === "vue" && B.parent && B.parent.type === "root" ? "block" : B.type === "element" && (!B.namespace || te || c(B)) && p[B.name] || d;
          }
        }
        function Ce(B) {
          return B.type === "element" && (!B.namespace || c(B)) && y[B.name] || g;
        }
        function Oe(B) {
          let $ = Number.POSITIVE_INFINITY;
          for (let te of B.split(`
`)) {
            if (te.length === 0)
              continue;
            if (!D.has(te[0]))
              return 0;
            let ye = I(te).length;
            te.length !== ye && ye < $ && ($ = ye);
          }
          return $ === Number.POSITIVE_INFINITY ? 0 : $;
        }
        function Ie(B) {
          let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Oe(B);
          return $ === 0 ? B : B.split(`
`).map((te) => te.slice($)).join(`
`);
        }
        function we(B, $) {
          let te = 0;
          for (let ye = 0; ye < B.length; ye++)
            B[ye] === $ && te++;
          return te;
        }
        function _e(B) {
          return B.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var De = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function G(B, $) {
          return oe(B, $) && !De.has(B.fullName);
        }
        function oe(B, $) {
          return $.parser === "vue" && B.type === "element" && B.parent.type === "root" && B.fullName.toLowerCase() !== "html";
        }
        function ee(B, $) {
          return oe(B, $) && (G(B, $) || B.attrMap.lang && B.attrMap.lang !== "html");
        }
        function re(B) {
          let $ = B.fullName;
          return $.charAt(0) === "#" || $ === "slot-scope" || $ === "v-slot" || $.startsWith("v-slot:");
        }
        function be(B, $) {
          let te = B.parent;
          if (!oe(te, $))
            return false;
          let ye = te.fullName, Fe = B.fullName;
          return ye === "script" && Fe === "setup" || ye === "style" && Fe === "vars";
        }
        function ve(B) {
          let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.value;
          return B.parent.isWhitespaceSensitive ? B.parent.isIndentationSensitive ? l($) : l(Ie(A($)), n) : i(u(a, N($)));
        }
        function fe(B, $) {
          return oe(B, $) && B.name === "script";
        }
        r.exports = { htmlTrim: w, htmlTrimPreserveIndentation: A, hasHtmlWhitespace: H, getLeadingAndTrailingHtmlWhitespace: P, canHaveInterpolation: h, countChars: we, countParents: ge, dedentString: Ie, forceBreakChildren: q, forceBreakContent: R, forceNextEmptyLine: M, getLastDescendant: se, getNodeCssStyleDisplay: Ae, getNodeCssStyleWhiteSpace: Ce, hasPrettierIgnore: b, inferScriptParser: X, isVueCustomBlock: G, isVueNonHtmlBlock: ee, isVueScriptTag: fe, isVueSlotAttribute: re, isVueSfcBindingsAttribute: be, isVueSfcBlock: oe, isDanglingSpaceSensitiveNode: k, isIndentationSensitiveNode: S, isLeadingSpaceSensitiveNode: x, isPreLikeNode: le, isScriptLikeTag: o, isTextLikeNode: v, isTrailingSpaceSensitiveNode: T, isWhitespaceSensitiveNode: C, isUnknownNamespace: c, preferHardlineAsLeadingSpaces: U, preferHardlineAsTrailingSpaces: L, shouldPreserveContent: f, unescapeQuoteEntities: _e, getTextValueParts: ve };
      } }), hg = Z({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(i) {
          return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP;
        }
        e.isWhitespace = r;
        function t(i) {
          return e.$0 <= i && i <= e.$9;
        }
        e.isDigit = t;
        function s(i) {
          return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z;
        }
        e.isAsciiLetter = s;
        function a(i) {
          return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t(i);
        }
        e.isAsciiHexDigit = a;
        function n(i) {
          return i === e.$LF || i === e.$CR;
        }
        e.isNewLine = n;
        function u(i) {
          return e.$0 <= i && i <= e.$7;
        }
        e.isOctalDigit = u;
      } }), vg = Z({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(s, a, n) {
            this.filePath = s, this.name = a, this.members = n;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = r;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(s, a, n) {
            n = n || [];
            let u = n.length ? `.${n.join(".")}` : "", i = `"${s}".${a}${u}`, l = this.cache.get(i);
            return l || (l = new r(s, a, n), this.cache.set(i, l)), l;
          }
        };
        e.StaticSymbolCache = t;
      } }), Cg = Z({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function t(o) {
          return o.replace(r, function() {
            for (var h = arguments.length, C = new Array(h), S = 0; S < h; S++)
              C[S] = arguments[S];
            return C[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = t;
        function s(o, h) {
          return n(o, ":", h);
        }
        e.splitAtColon = s;
        function a(o, h) {
          return n(o, ".", h);
        }
        e.splitAtPeriod = a;
        function n(o, h, C) {
          let S = o.indexOf(h);
          return S == -1 ? C : [o.slice(0, S).trim(), o.slice(S + 1).trim()];
        }
        function u(o, h, C) {
          return Array.isArray(o) ? h.visitArray(o, C) : F(o) ? h.visitStringMap(o, C) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? h.visitPrimitive(o, C) : h.visitOther(o, C);
        }
        e.visitValue = u;
        function i(o) {
          return o != null;
        }
        e.isDefined = i;
        function l(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = l;
        var p = class {
          visitArray(o, h) {
            return o.map((C) => u(C, this, h));
          }
          visitStringMap(o, h) {
            let C = {};
            return Object.keys(o).forEach((S) => {
              C[S] = u(o[S], this, h);
            }), C;
          }
          visitPrimitive(o, h) {
            return o;
          }
          visitOther(o, h) {
            return o;
          }
        };
        e.ValueTransformer = p, e.SyncAsync = { assertSync: (o) => {
          if (P(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, h) => P(o) ? o.then(h) : h(o), all: (o) => o.some(P) ? Promise.all(o) : o };
        function d(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = d;
        function y(o, h) {
          let C = Error(o);
          return C[g] = true, h && (C[c] = h), C;
        }
        e.syntaxError = y;
        var g = "ngSyntaxError", c = "ngParseErrors";
        function D(o) {
          return o[g];
        }
        e.isSyntaxError = D;
        function E(o) {
          return o[c] || [];
        }
        e.getParseErrors = E;
        function _(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = _;
        var w = Object.getPrototypeOf({});
        function F(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w;
        }
        function A(o) {
          let h = "";
          for (let C = 0; C < o.length; C++) {
            let S = o.charCodeAt(C);
            if (S >= 55296 && S <= 56319 && o.length > C + 1) {
              let x = o.charCodeAt(C + 1);
              x >= 56320 && x <= 57343 && (C++, S = (S - 55296 << 10) + x - 56320 + 65536);
            }
            S <= 127 ? h += String.fromCharCode(S) : S <= 2047 ? h += String.fromCharCode(S >> 6 & 31 | 192, S & 63 | 128) : S <= 65535 ? h += String.fromCharCode(S >> 12 | 224, S >> 6 & 63 | 128, S & 63 | 128) : S <= 2097151 && (h += String.fromCharCode(S >> 18 & 7 | 240, S >> 12 & 63 | 128, S >> 6 & 63 | 128, S & 63 | 128));
          }
          return h;
        }
        e.utf8Encode = A;
        function N(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(N).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let h = o.toString();
          if (h == null)
            return "" + h;
          let C = h.indexOf(`
`);
          return C === -1 ? h : h.substring(0, C);
        }
        e.stringify = N;
        function I(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = I;
        function P(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = P;
        var H = class {
          constructor(o) {
            this.full = o;
            let h = o.split(".");
            this.major = h[0], this.minor = h[1], this.patch = h.slice(2).join(".");
          }
        };
        e.Version = H;
        var f = typeof window < "u" && window, b = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, m = typeof globalThis < "u" && globalThis, v = m || f || b;
        e.global = v;
      } }), Eg = Z({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = vg(), t = Cg(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function a(C) {
          return C.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = a;
        var n = 0;
        function u(C) {
          if (!C || !C.reference)
            return null;
          let S = C.reference;
          if (S instanceof r.StaticSymbol)
            return S.name;
          if (S.__anonymousType)
            return S.__anonymousType;
          let x = t.stringify(S);
          return x.indexOf("(") >= 0 ? (x = `anonymous_${n++}`, S.__anonymousType = x) : x = a(x), x;
        }
        e.identifierName = u;
        function i(C) {
          let S = C.reference;
          return S instanceof r.StaticSymbol ? S.filePath : `./${t.stringify(S)}`;
        }
        e.identifierModuleUrl = i;
        function l(C, S) {
          return `View_${u({ reference: C })}_${S}`;
        }
        e.viewClassName = l;
        function p(C) {
          return `RenderType_${u({ reference: C })}`;
        }
        e.rendererTypeName = p;
        function d(C) {
          return `HostView_${u({ reference: C })}`;
        }
        e.hostViewClassName = d;
        function y(C) {
          return `${u({ reference: C })}NgFactory`;
        }
        e.componentFactoryName = y;
        var g;
        (function(C) {
          C[C.Pipe = 0] = "Pipe", C[C.Directive = 1] = "Directive", C[C.NgModule = 2] = "NgModule", C[C.Injectable = 3] = "Injectable";
        })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function c(C) {
          return C.value != null ? a(C.value) : u(C.identifier);
        }
        e.tokenName = c;
        function D(C) {
          return C.identifier != null ? C.identifier.reference : C.value;
        }
        e.tokenReference = D;
        var E = class {
          constructor() {
            let { moduleUrl: C, styles: S, styleUrls: x } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = C || null, this.styles = P(S), this.styleUrls = P(x);
          }
        };
        e.CompileStylesheetMetadata = E;
        var _ = class {
          constructor(C) {
            let { encapsulation: S, template: x, templateUrl: T, htmlAst: k, styles: M, styleUrls: R, externalStylesheets: q, animations: U, ngContentSelectors: L, interpolation: Y, isInline: V, preserveWhitespaces: j } = C;
            if (this.encapsulation = S, this.template = x, this.templateUrl = T, this.htmlAst = k, this.styles = P(M), this.styleUrls = P(R), this.externalStylesheets = P(q), this.animations = U ? f(U) : [], this.ngContentSelectors = L || [], Y && Y.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = Y, this.isInline = V, this.preserveWhitespaces = j;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = _;
        var w = class {
          static create(C) {
            let { isHost: S, type: x, isComponent: T, selector: k, exportAs: M, changeDetection: R, inputs: q, outputs: U, host: L, providers: Y, viewProviders: V, queries: j, guards: K, viewQueries: se, entryComponents: Q, template: ce, componentViewType: W, rendererType: X, componentFactory: de } = C, ie = {}, Ee = {}, z = {};
            L != null && Object.keys(L).forEach((le) => {
              let ge = L[le], pe = le.match(s);
              pe === null ? z[le] = ge : pe[1] != null ? Ee[pe[1]] = ge : pe[2] != null && (ie[pe[2]] = ge);
            });
            let ue = {};
            q == null ? void 0 : q.forEach((le) => {
              let ge = t.splitAtColon(le, [le, le]);
              ue[ge[0]] = ge[1];
            });
            let J = {};
            return U == null ? void 0 : U.forEach((le) => {
              let ge = t.splitAtColon(le, [le, le]);
              J[ge[0]] = ge[1];
            }), new w({ isHost: S, type: x, isComponent: !!T, selector: k, exportAs: M, changeDetection: R, inputs: ue, outputs: J, hostListeners: ie, hostProperties: Ee, hostAttributes: z, providers: Y, viewProviders: V, queries: j, guards: K, viewQueries: se, entryComponents: Q, template: ce, componentViewType: W, rendererType: X, componentFactory: de });
          }
          constructor(C) {
            let { isHost: S, type: x, isComponent: T, selector: k, exportAs: M, changeDetection: R, inputs: q, outputs: U, hostListeners: L, hostProperties: Y, hostAttributes: V, providers: j, viewProviders: K, queries: se, guards: Q, viewQueries: ce, entryComponents: W, template: X, componentViewType: de, rendererType: ie, componentFactory: Ee } = C;
            this.isHost = !!S, this.type = x, this.isComponent = T, this.selector = k, this.exportAs = M, this.changeDetection = R, this.inputs = q, this.outputs = U, this.hostListeners = L, this.hostProperties = Y, this.hostAttributes = V, this.providers = P(j), this.viewProviders = P(K), this.queries = P(se), this.guards = Q, this.viewQueries = P(ce), this.entryComponents = P(W), this.template = X, this.componentViewType = de, this.rendererType = ie, this.componentFactory = Ee;
          }
          toSummary() {
            return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = w;
        var F = class {
          constructor(C) {
            let { type: S, name: x, pure: T } = C;
            this.type = S, this.name = x, this.pure = !!T;
          }
          toSummary() {
            return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = F;
        var A = class {
        };
        e.CompileShallowModuleMetadata = A;
        var N = class {
          constructor(C) {
            let { type: S, providers: x, declaredDirectives: T, exportedDirectives: k, declaredPipes: M, exportedPipes: R, entryComponents: q, bootstrapComponents: U, importedModules: L, exportedModules: Y, schemas: V, transitiveModule: j, id: K } = C;
            this.type = S || null, this.declaredDirectives = P(T), this.exportedDirectives = P(k), this.declaredPipes = P(M), this.exportedPipes = P(R), this.providers = P(x), this.entryComponents = P(q), this.bootstrapComponents = P(U), this.importedModules = P(L), this.exportedModules = P(Y), this.schemas = P(V), this.id = K || null, this.transitiveModule = j || null;
          }
          toSummary() {
            let C = this.transitiveModule;
            return { summaryKind: g.NgModule, type: this.type, entryComponents: C.entryComponents, providers: C.providers, modules: C.modules, exportedDirectives: C.exportedDirectives, exportedPipes: C.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = N;
        var I = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(C, S) {
            this.providers.push({ provider: C, module: S });
          }
          addDirective(C) {
            this.directivesSet.has(C.reference) || (this.directivesSet.add(C.reference), this.directives.push(C));
          }
          addExportedDirective(C) {
            this.exportedDirectivesSet.has(C.reference) || (this.exportedDirectivesSet.add(C.reference), this.exportedDirectives.push(C));
          }
          addPipe(C) {
            this.pipesSet.has(C.reference) || (this.pipesSet.add(C.reference), this.pipes.push(C));
          }
          addExportedPipe(C) {
            this.exportedPipesSet.has(C.reference) || (this.exportedPipesSet.add(C.reference), this.exportedPipes.push(C));
          }
          addModule(C) {
            this.modulesSet.has(C.reference) || (this.modulesSet.add(C.reference), this.modules.push(C));
          }
          addEntryComponent(C) {
            this.entryComponentsSet.has(C.componentType) || (this.entryComponentsSet.add(C.componentType), this.entryComponents.push(C));
          }
        };
        e.TransitiveCompileNgModuleMetadata = I;
        function P(C) {
          return C || [];
        }
        var H = class {
          constructor(C, S) {
            let { useClass: x, useValue: T, useExisting: k, useFactory: M, deps: R, multi: q } = S;
            this.token = C, this.useClass = x || null, this.useValue = T, this.useExisting = k, this.useFactory = M || null, this.dependencies = R || null, this.multi = !!q;
          }
        };
        e.ProviderMeta = H;
        function f(C) {
          return C.reduce((S, x) => {
            let T = Array.isArray(x) ? f(x) : x;
            return S.concat(T);
          }, []);
        }
        e.flatten = f;
        function b(C) {
          return C.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function m(C, S, x) {
          let T;
          return x.isInline ? S.type.reference instanceof r.StaticSymbol ? T = `${S.type.reference.filePath}.${S.type.reference.name}.html` : T = `${u(C)}/${u(S.type)}.html` : T = x.templateUrl, S.type.reference instanceof r.StaticSymbol ? T : b(T);
        }
        e.templateSourceUrl = m;
        function v(C, S) {
          let x = C.moduleUrl.split(/\/\\/g), T = x[x.length - 1];
          return b(`css/${S}${T}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = v;
        function o(C) {
          return b(`${u(C.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function h(C, S) {
          return b(`${u(C)}/${u(S.type)}.ngfactory.js`);
        }
        e.templateJitUrl = h;
      } }), Fg = Z({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = hg(), t = Eg(), s = class {
          constructor(d, y, g, c) {
            this.file = d, this.offset = y, this.line = g, this.col = c;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(d) {
            let y = this.file.content, g = y.length, c = this.offset, D = this.line, E = this.col;
            for (; c > 0 && d < 0; )
              if (c--, d++, y.charCodeAt(c) == r.$LF) {
                D--;
                let w = y.substr(0, c - 1).lastIndexOf(String.fromCharCode(r.$LF));
                E = w > 0 ? c - w : c;
              } else
                E--;
            for (; c < g && d > 0; ) {
              let _ = y.charCodeAt(c);
              c++, d--, _ == r.$LF ? (D++, E = 0) : E++;
            }
            return new s(this.file, c, D, E);
          }
          getContext(d, y) {
            let g = this.file.content, c = this.offset;
            if (c != null) {
              c > g.length - 1 && (c = g.length - 1);
              let D = c, E = 0, _ = 0;
              for (; E < d && c > 0 && (c--, E++, !(g[c] == `
` && ++_ == y)); )
                ;
              for (E = 0, _ = 0; E < d && D < g.length - 1 && (D++, E++, !(g[D] == `
` && ++_ == y)); )
                ;
              return { before: g.substring(c, this.offset), after: g.substring(this.offset, D + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = s;
        var a = class {
          constructor(d, y) {
            this.content = d, this.url = y;
          }
        };
        e.ParseSourceFile = a;
        var n = class {
          constructor(d, y) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = d, this.end = y, this.details = g;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;
        (function(d) {
          d[d.WARNING = 0] = "WARNING", d[d.ERROR = 1] = "ERROR";
        })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var i = class {
          constructor(d, y) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
            this.span = d, this.msg = y, this.level = g;
          }
          contextualMessage() {
            let d = this.span.start.getContext(100, 3);
            return d ? `${this.msg} ("${d.before}[${u[this.level]} ->]${d.after}")` : this.msg;
          }
          toString() {
            let d = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${d}`;
          }
        };
        e.ParseError = i;
        function l(d, y) {
          let g = t.identifierModuleUrl(y), c = g != null ? `in ${d} ${t.identifierName(y)} in ${g}` : `in ${d} ${t.identifierName(y)}`, D = new a("", c);
          return new n(new s(D, -1, -1, -1), new s(D, -1, -1, -1));
        }
        e.typeSourceSpan = l;
        function p(d, y, g) {
          let c = `in ${d} ${y} in ${g}`, D = new a("", c);
          return new n(new s(D, -1, -1, -1), new s(D, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = p;
      } }), Ag = Z({ "src/language-html/print-preprocess.js"(e, r) {
        ne();
        var { ParseSourceSpan: t } = Fg(), { htmlTrim: s, getLeadingAndTrailingHtmlWhitespace: a, hasHtmlWhitespace: n, canHaveInterpolation: u, getNodeCssStyleDisplay: i, isDanglingSpaceSensitiveNode: l, isIndentationSensitiveNode: p, isLeadingSpaceSensitiveNode: d, isTrailingSpaceSensitiveNode: y, isWhitespaceSensitiveNode: g, isVueScriptTag: c } = Rt(), D = [_, w, A, I, P, b, H, f, m, N, v];
        function E(o, h) {
          for (let C of D)
            C(o, h);
          return o;
        }
        function _(o) {
          o.walk((h) => {
            if (h.type === "element" && h.tagDefinition.ignoreFirstLf && h.children.length > 0 && h.children[0].type === "text" && h.children[0].value[0] === `
`) {
              let C = h.children[0];
              C.value.length === 1 ? h.removeChild(C) : C.value = C.value.slice(1);
            }
          });
        }
        function w(o) {
          let h = (C) => C.type === "element" && C.prev && C.prev.type === "ieConditionalStartComment" && C.prev.sourceSpan.end.offset === C.startSourceSpan.start.offset && C.firstChild && C.firstChild.type === "ieConditionalEndComment" && C.firstChild.sourceSpan.start.offset === C.startSourceSpan.end.offset;
          o.walk((C) => {
            if (C.children)
              for (let S = 0; S < C.children.length; S++) {
                let x = C.children[S];
                if (!h(x))
                  continue;
                let T = x.prev, k = x.firstChild;
                C.removeChild(T), S--;
                let M = new t(T.sourceSpan.start, k.sourceSpan.end), R = new t(M.start, x.sourceSpan.end);
                x.condition = T.condition, x.sourceSpan = R, x.startSourceSpan = M, x.removeChild(k);
              }
          });
        }
        function F(o, h, C) {
          o.walk((S) => {
            if (S.children)
              for (let x = 0; x < S.children.length; x++) {
                let T = S.children[x];
                if (T.type !== "text" && !h(T))
                  continue;
                T.type !== "text" && (T.type = "text", T.value = C(T));
                let k = T.prev;
                !k || k.type !== "text" || (k.value += T.value, k.sourceSpan = new t(k.sourceSpan.start, T.sourceSpan.end), S.removeChild(T), x--);
              }
          });
        }
        function A(o) {
          return F(o, (h) => h.type === "cdata", (h) => `<![CDATA[${h.value}]]>`);
        }
        function N(o) {
          let h = (C) => C.type === "element" && C.attrs.length === 0 && C.children.length === 1 && C.firstChild.type === "text" && !n(C.children[0].value) && !C.firstChild.hasLeadingSpaces && !C.firstChild.hasTrailingSpaces && C.isLeadingSpaceSensitive && !C.hasLeadingSpaces && C.isTrailingSpaceSensitive && !C.hasTrailingSpaces && C.prev && C.prev.type === "text" && C.next && C.next.type === "text";
          o.walk((C) => {
            if (C.children)
              for (let S = 0; S < C.children.length; S++) {
                let x = C.children[S];
                if (!h(x))
                  continue;
                let T = x.prev, k = x.next;
                T.value += `<${x.rawName}>` + x.firstChild.value + `</${x.rawName}>` + k.value, T.sourceSpan = new t(T.sourceSpan.start, k.sourceSpan.end), T.isTrailingSpaceSensitive = k.isTrailingSpaceSensitive, T.hasTrailingSpaces = k.hasTrailingSpaces, C.removeChild(x), S--, C.removeChild(k);
              }
          });
        }
        function I(o, h) {
          if (h.parser === "html")
            return;
          let C = /{{(.+?)}}/s;
          o.walk((S) => {
            if (u(S))
              for (let x of S.children) {
                if (x.type !== "text")
                  continue;
                let T = x.sourceSpan.start, k = null, M = x.value.split(C);
                for (let R = 0; R < M.length; R++, T = k) {
                  let q = M[R];
                  if (R % 2 === 0) {
                    k = T.moveBy(q.length), q.length > 0 && S.insertChildBefore(x, { type: "text", value: q, sourceSpan: new t(T, k) });
                    continue;
                  }
                  k = T.moveBy(q.length + 4), S.insertChildBefore(x, { type: "interpolation", sourceSpan: new t(T, k), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t(T.moveBy(2), k.moveBy(-2)) }] });
                }
                S.removeChild(x);
              }
          });
        }
        function P(o) {
          o.walk((h) => {
            if (!h.children)
              return;
            if (h.children.length === 0 || h.children.length === 1 && h.children[0].type === "text" && s(h.children[0].value).length === 0) {
              h.hasDanglingSpaces = h.children.length > 0, h.children = [];
              return;
            }
            let C = g(h), S = p(h);
            if (!C)
              for (let x = 0; x < h.children.length; x++) {
                let T = h.children[x];
                if (T.type !== "text")
                  continue;
                let { leadingWhitespace: k, text: M, trailingWhitespace: R } = a(T.value), q = T.prev, U = T.next;
                M ? (T.value = M, T.sourceSpan = new t(T.sourceSpan.start.moveBy(k.length), T.sourceSpan.end.moveBy(-R.length)), k && (q && (q.hasTrailingSpaces = true), T.hasLeadingSpaces = true), R && (T.hasTrailingSpaces = true, U && (U.hasLeadingSpaces = true))) : (h.removeChild(T), x--, (k || R) && (q && (q.hasTrailingSpaces = true), U && (U.hasLeadingSpaces = true)));
              }
            h.isWhitespaceSensitive = C, h.isIndentationSensitive = S;
          });
        }
        function H(o) {
          o.walk((h) => {
            h.isSelfClosing = !h.children || h.type === "element" && (h.tagDefinition.isVoid || h.startSourceSpan === h.endSourceSpan);
          });
        }
        function f(o, h) {
          o.walk((C) => {
            C.type === "element" && (C.hasHtmComponentClosingTag = C.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(h.originalText.slice(C.endSourceSpan.start.offset, C.endSourceSpan.end.offset)));
          });
        }
        function b(o, h) {
          o.walk((C) => {
            C.cssDisplay = i(C, h);
          });
        }
        function m(o, h) {
          o.walk((C) => {
            let { children: S } = C;
            if (S) {
              if (S.length === 0) {
                C.isDanglingSpaceSensitive = l(C);
                return;
              }
              for (let x of S)
                x.isLeadingSpaceSensitive = d(x, h), x.isTrailingSpaceSensitive = y(x, h);
              for (let x = 0; x < S.length; x++) {
                let T = S[x];
                T.isLeadingSpaceSensitive = (x === 0 || T.prev.isTrailingSpaceSensitive) && T.isLeadingSpaceSensitive, T.isTrailingSpaceSensitive = (x === S.length - 1 || T.next.isLeadingSpaceSensitive) && T.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function v(o, h) {
          if (h.parser === "vue") {
            let C = o.children.find((x) => c(x, h));
            if (!C)
              return;
            let { lang: S } = C.attrMap;
            (S === "ts" || S === "typescript") && (h.__should_parse_vue_template_with_ts = true);
          }
        }
        r.exports = E;
      } }), Sg = Z({ "src/language-html/pragma.js"(e, r) {
        ne();
        function t(a) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a);
        }
        function s(a) {
          return `<!-- @format -->

` + a.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: t, insertPragma: s };
      } }), au = Z({ "src/language-html/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.sourceSpan.start.offset;
        }
        function s(a) {
          return a.sourceSpan.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), ur = Z({ "src/language-html/print/tag.js"(e, r) {
        ne();
        var t = Zt(), { isNonEmptyArray: s } = Ue(), { builders: { indent: a, join: n, line: u, softline: i, hardline: l }, utils: { replaceTextEndOfLine: p } } = Me(), { locStart: d, locEnd: y } = au(), { isTextLikeNode: g, getLastDescendant: c, isPreLikeNode: D, hasPrettierIgnore: E, shouldPreserveContent: _, isVueSfcBlock: w } = Rt();
        function F(L, Y) {
          return [L.isSelfClosing ? "" : A(L, Y), N(L, Y)];
        }
        function A(L, Y) {
          return L.lastChild && o(L.lastChild) ? "" : [I(L, Y), H(L, Y)];
        }
        function N(L, Y) {
          return (L.next ? m(L.next) : v(L.parent)) ? "" : [f(L, Y), P(L, Y)];
        }
        function I(L, Y) {
          return v(L) ? f(L.lastChild, Y) : "";
        }
        function P(L, Y) {
          return o(L) ? H(L.parent, Y) : h(L) ? q(L.next) : "";
        }
        function H(L, Y) {
          if (t(!L.isSelfClosing), b(L, Y))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (L.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${L.rawName}`;
          }
        }
        function f(L, Y) {
          if (b(L, Y))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (L.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function b(L, Y) {
          return !L.isSelfClosing && !L.endSourceSpan && (E(L) || _(L.parent, Y));
        }
        function m(L) {
          return L.prev && L.prev.type !== "docType" && !g(L.prev) && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function v(L) {
          return L.lastChild && L.lastChild.isTrailingSpaceSensitive && !L.lastChild.hasTrailingSpaces && !g(c(L.lastChild)) && !D(L);
        }
        function o(L) {
          return !L.next && !L.hasTrailingSpaces && L.isTrailingSpaceSensitive && g(c(L));
        }
        function h(L) {
          return L.next && !g(L.next) && g(L) && L.isTrailingSpaceSensitive && !L.hasTrailingSpaces;
        }
        function C(L) {
          let Y = L.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return Y ? Y[1] ? Y[1].split(/\s+/) : true : false;
        }
        function S(L) {
          return !L.prev && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function x(L, Y, V) {
          let j = L.getValue();
          if (!s(j.attrs))
            return j.isSelfClosing ? " " : "";
          let K = j.prev && j.prev.type === "comment" && C(j.prev.value), se = typeof K == "boolean" ? () => K : Array.isArray(K) ? (ie) => K.includes(ie.rawName) : () => false, Q = L.map((ie) => {
            let Ee = ie.getValue();
            return se(Ee) ? p(Y.originalText.slice(d(Ee), y(Ee))) : V();
          }, "attrs"), ce = j.type === "element" && j.fullName === "script" && j.attrs.length === 1 && j.attrs[0].fullName === "src" && j.children.length === 0, X = Y.singleAttributePerLine && j.attrs.length > 1 && !w(j, Y) ? l : u, de = [a([ce ? " " : u, n(X, Q)])];
          return j.firstChild && S(j.firstChild) || j.isSelfClosing && v(j.parent) || ce ? de.push(j.isSelfClosing ? " " : "") : de.push(Y.bracketSameLine ? j.isSelfClosing ? " " : "" : j.isSelfClosing ? u : i), de;
        }
        function T(L) {
          return L.firstChild && S(L.firstChild) ? "" : U(L);
        }
        function k(L, Y, V) {
          let j = L.getValue();
          return [M(j, Y), x(L, Y, V), j.isSelfClosing ? "" : T(j)];
        }
        function M(L, Y) {
          return L.prev && h(L.prev) ? "" : [R(L, Y), q(L)];
        }
        function R(L, Y) {
          return S(L) ? U(L.parent) : m(L) ? f(L.prev, Y) : "";
        }
        function q(L) {
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${L.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (L.condition)
                return `<!--[if ${L.condition}]><!--><${L.rawName}`;
            default:
              return `<${L.rawName}`;
          }
        }
        function U(L) {
          switch (t(!L.isSelfClosing), L.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (L.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        r.exports = { printClosingTag: F, printClosingTagStart: A, printClosingTagStartMarker: H, printClosingTagEndMarker: f, printClosingTagSuffix: P, printClosingTagEnd: N, needsToBorrowLastChildClosingTagEndMarker: v, needsToBorrowParentClosingTagStartMarker: o, needsToBorrowPrevClosingTagEndMarker: m, printOpeningTag: k, printOpeningTagStart: M, printOpeningTagPrefix: R, printOpeningTagStartMarker: q, printOpeningTagEndMarker: U, needsToBorrowNextOpeningTagStartMarker: h, needsToBorrowParentOpeningTagEndMarker: S };
      } }), xg = Z({ "node_modules/parse-srcset/src/parse-srcset.js"(e, r) {
        ne(), function(t, s) {
          typeof define == "function" && define.amd ? define([], s) : typeof r == "object" && r.exports ? r.exports = s() : t.parseSrcset = s();
        }(e, function() {
          return function(t, s) {
            var a = s && s.logger || console;
            function n(H) {
              return H === " " || H === "	" || H === `
` || H === "\f" || H === "\r";
            }
            function u(H) {
              var f, b = H.exec(t.substring(A));
              if (b)
                return f = b[0], A += f.length, f;
            }
            for (var i = t.length, l = /^[ \t\n\r\u000c]+/, p = /^[, \t\n\r\u000c]+/, d = /^[^ \t\n\r\u000c]+/, y = /[,]+$/, g = /^\d+$/, c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D, E, _, w, F, A = 0, N = []; ; ) {
              if (u(p), A >= i)
                return N;
              D = u(d), E = [], D.slice(-1) === "," ? (D = D.replace(y, ""), P()) : I();
            }
            function I() {
              for (u(l), _ = "", w = "in descriptor"; ; ) {
                if (F = t.charAt(A), w === "in descriptor")
                  if (n(F))
                    _ && (E.push(_), _ = "", w = "after descriptor");
                  else if (F === ",") {
                    A += 1, _ && E.push(_), P();
                    return;
                  } else if (F === "(")
                    _ = _ + F, w = "in parens";
                  else if (F === "") {
                    _ && E.push(_), P();
                    return;
                  } else
                    _ = _ + F;
                else if (w === "in parens")
                  if (F === ")")
                    _ = _ + F, w = "in descriptor";
                  else if (F === "") {
                    E.push(_), P();
                    return;
                  } else
                    _ = _ + F;
                else if (w === "after descriptor" && !n(F))
                  if (F === "") {
                    P();
                    return;
                  } else
                    w = "in descriptor", A -= 1;
                A += 1;
              }
            }
            function P() {
              var H = false, f, b, m, v, o = {}, h, C, S, x, T;
              for (v = 0; v < E.length; v++)
                h = E[v], C = h[h.length - 1], S = h.substring(0, h.length - 1), x = parseInt(S, 10), T = parseFloat(S), g.test(S) && C === "w" ? ((f || b) && (H = true), x === 0 ? H = true : f = x) : c.test(S) && C === "x" ? ((f || b || m) && (H = true), T < 0 ? H = true : b = T) : g.test(S) && C === "h" ? ((m || b) && (H = true), x === 0 ? H = true : m = x) : H = true;
              H ? a && a.error && a.error("Invalid srcset descriptor found in '" + t + "' at '" + h + "'.") : (o.url = D, f && (o.w = f), b && (o.d = b), m && (o.h = m), N.push(o));
            }
          };
        });
      } }), bg = Z({ "src/language-html/syntax-attribute.js"(e, r) {
        ne();
        var t = xg(), { builders: { ifBreak: s, join: a, line: n } } = Me();
        function u(l) {
          let p = t(l, { logger: { error(I) {
            throw new Error(I);
          } } }), d = p.some((I) => {
            let { w: P } = I;
            return P;
          }), y = p.some((I) => {
            let { h: P } = I;
            return P;
          }), g = p.some((I) => {
            let { d: P } = I;
            return P;
          });
          if (d + y + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let c = d ? "w" : y ? "h" : "d", D = d ? "w" : y ? "h" : "x", E = (I) => Math.max(...I), _ = p.map((I) => I.url), w = E(_.map((I) => I.length)), F = p.map((I) => I[c]).map((I) => I ? I.toString() : ""), A = F.map((I) => {
            let P = I.indexOf(".");
            return P === -1 ? I.length : P;
          }), N = E(A);
          return a([",", n], _.map((I, P) => {
            let H = [I], f = F[P];
            if (f) {
              let b = w - I.length + 1, m = N - A[P], v = " ".repeat(b + m);
              H.push(s(v, " "), f + D);
            }
            return H;
          }));
        }
        function i(l) {
          return l.trim().split(/\s+/).join(" ");
        }
        r.exports = { printImgSrcset: u, printClassNames: i };
      } }), Tg = Z({ "src/language-html/syntax-vue.js"(e, r) {
        ne();
        var { builders: { group: t } } = Me();
        function s(i, l) {
          let { left: p, operator: d, right: y } = a(i);
          return [t(l(`function _(${p}) {}`, { parser: "babel", __isVueForBindingLeft: true })), " ", d, " ", l(y, { parser: "__js_expression" }, { stripTrailingHardline: true })];
        }
        function a(i) {
          let l = /(.*?)\s+(in|of)\s+(.*)/s, p = /,([^,\]}]*)(?:,([^,\]}]*))?$/, d = /^\(|\)$/g, y = i.match(l);
          if (!y)
            return;
          let g = {};
          if (g.for = y[3].trim(), !g.for)
            return;
          let c = y[1].trim().replace(d, ""), D = c.match(p);
          D ? (g.alias = c.replace(p, ""), g.iterator1 = D[1].trim(), D[2] && (g.iterator2 = D[2].trim())) : g.alias = c;
          let E = [g.alias, g.iterator1, g.iterator2];
          if (!E.some((_, w) => !_ && (w === 0 || E.slice(w + 1).some(Boolean))))
            return { left: E.filter(Boolean).join(","), operator: y[2], right: g.for };
        }
        function n(i, l) {
          return l(`function _(${i}) {}`, { parser: "babel", __isVueBindings: true });
        }
        function u(i) {
          let l = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, p = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, d = i.trim();
          return l.test(d) || p.test(d);
        }
        r.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: n };
      } }), Lo = Z({ "src/language-html/get-node-content.js"(e, r) {
        ne();
        var { needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: s, needsToBorrowLastChildClosingTagEndMarker: a, printClosingTagEndMarker: n, needsToBorrowParentOpeningTagEndMarker: u, printOpeningTagEndMarker: i } = ur();
        function l(p, d) {
          let y = p.startSourceSpan.end.offset;
          p.firstChild && u(p.firstChild) && (y -= i(p).length);
          let g = p.endSourceSpan.start.offset;
          return p.lastChild && t(p.lastChild) ? g += s(p, d).length : a(p) && (g -= n(p.lastChild, d).length), d.originalText.slice(y, g);
        }
        r.exports = l;
      } }), Bg = Z({ "src/language-html/embed.js"(e, r) {
        ne();
        var { builders: { breakParent: t, group: s, hardline: a, indent: n, line: u, fill: i, softline: l }, utils: { mapDoc: p, replaceTextEndOfLine: d } } = Me(), y = su(), { printClosingTag: g, printClosingTagSuffix: c, needsToBorrowPrevClosingTagEndMarker: D, printOpeningTagPrefix: E, printOpeningTag: _ } = ur(), { printImgSrcset: w, printClassNames: F } = bg(), { printVueFor: A, printVueBindings: N, isVueEventBindingExpression: I } = Tg(), { isScriptLikeTag: P, isVueNonHtmlBlock: H, inferScriptParser: f, htmlTrimPreserveIndentation: b, dedentString: m, unescapeQuoteEntities: v, isVueSlotAttribute: o, isVueSfcBindingsAttribute: h, getTextValueParts: C } = Rt(), S = Lo();
        function x(k, M, R) {
          let q = (Q) => new RegExp(Q.join("|")).test(k.fullName), U = () => v(k.value), L = false, Y = (Q, ce) => {
            let W = Q.type === "NGRoot" ? Q.node.type === "NGMicrosyntax" && Q.node.body.length === 1 && Q.node.body[0].type === "NGMicrosyntaxExpression" ? Q.node.body[0].expression : Q.node : Q.type === "JsExpressionRoot" ? Q.node : Q;
            W && (W.type === "ObjectExpression" || W.type === "ArrayExpression" || ce.parser === "__vue_expression" && (W.type === "TemplateLiteral" || W.type === "StringLiteral")) && (L = true);
          }, V = (Q) => s(Q), j = function(Q) {
            let ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return s([n([l, Q]), ce ? l : ""]);
          }, K = (Q) => L ? V(Q) : j(Q), se = (Q, ce) => M(Q, Object.assign({ __onHtmlBindingRoot: Y, __embeddedInHtml: true }, ce));
          if (k.fullName === "srcset" && (k.parent.fullName === "img" || k.parent.fullName === "source"))
            return j(w(U()));
          if (k.fullName === "class" && !R.parentParser) {
            let Q = U();
            if (!Q.includes("{{"))
              return F(Q);
          }
          if (k.fullName === "style" && !R.parentParser) {
            let Q = U();
            if (!Q.includes("{{"))
              return j(se(Q, { parser: "css", __isHTMLStyleAttribute: true }));
          }
          if (R.parser === "vue") {
            if (k.fullName === "v-for")
              return A(U(), se);
            if (o(k) || h(k, R))
              return N(U(), se);
            let Q = ["^@", "^v-on:"], ce = ["^:", "^v-bind:"], W = ["^v-"];
            if (q(Q)) {
              let X = U(), de = I(X) ? "__js_expression" : R.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return K(se(X, { parser: de }));
            }
            if (q(ce))
              return K(se(U(), { parser: "__vue_expression" }));
            if (q(W))
              return K(se(U(), { parser: "__js_expression" }));
          }
          if (R.parser === "angular") {
            let Q = (z, ue) => se(z, Object.assign(Object.assign({}, ue), {}, { trailingComma: "none" })), ce = ["^\\*"], W = ["^\\(.+\\)$", "^on-"], X = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], de = ["^i18n(-.+)?$"];
            if (q(W))
              return K(Q(U(), { parser: "__ng_action" }));
            if (q(X))
              return K(Q(U(), { parser: "__ng_binding" }));
            if (q(de)) {
              let z = U().trim();
              return j(i(C(k, z)), !z.includes("@@"));
            }
            if (q(ce))
              return K(Q(U(), { parser: "__ng_directive" }));
            let ie = /{{(.+?)}}/s, Ee = U();
            if (ie.test(Ee)) {
              let z = [];
              for (let [ue, J] of Ee.split(ie).entries())
                if (ue % 2 === 0)
                  z.push(d(J));
                else
                  try {
                    z.push(s(["{{", n([u, Q(J, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), u, "}}"]));
                  } catch {
                    z.push("{{", d(J), "}}");
                  }
              return s(z);
            }
          }
          return null;
        }
        function T(k, M, R, q) {
          let U = k.getValue();
          switch (U.type) {
            case "element": {
              if (P(U) || U.type === "interpolation")
                return;
              if (!U.isSelfClosing && H(U, q)) {
                let L = f(U, q);
                if (!L)
                  return;
                let Y = S(U, q), V = /^\s*$/.test(Y), j = "";
                return V || (j = R(b(Y), { parser: L, __embeddedInHtml: true }, { stripTrailingHardline: true }), V = j === ""), [E(U, q), s(_(k, q, M)), V ? "" : a, j, V ? "" : a, g(U, q), c(U, q)];
              }
              break;
            }
            case "text": {
              if (P(U.parent)) {
                let L = f(U.parent, q);
                if (L) {
                  let Y = L === "markdown" ? m(U.value.replace(/^[^\S\n]*\n/, "")) : U.value, V = { parser: L, __embeddedInHtml: true };
                  if (q.parser === "html" && L === "babel") {
                    let j = "script", { attrMap: K } = U.parent;
                    K && (K.type === "module" || K.type === "text/babel" && K["data-type"] === "module") && (j = "module"), V.__babelSourceType = j;
                  }
                  return [t, E(U, q), R(Y, V, { stripTrailingHardline: true }), c(U, q)];
                }
              } else if (U.parent.type === "interpolation") {
                let L = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                return q.parser === "angular" ? (L.parser = "__ng_interpolation", L.trailingComma = "none") : q.parser === "vue" ? L.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : L.parser = "__js_expression", [n([u, R(U.value, L, { stripTrailingHardline: true })]), U.parent.next && D(U.parent.next) ? " " : u];
              }
              break;
            }
            case "attribute": {
              if (!U.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(U.valueSpan.start.offset, U.valueSpan.end.offset)))
                return [U.rawName, "=", U.value];
              if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(U.valueSpan.start.offset, U.valueSpan.end.offset)))
                return [U.rawName, "=", U.value];
              let L = x(U, (Y, V) => R(Y, Object.assign({ __isInHtmlAttribute: true, __embeddedInHtml: true }, V), { stripTrailingHardline: true }), q);
              if (L)
                return [U.rawName, '="', s(p(L, (Y) => typeof Y == "string" ? Y.replace(/"/g, "&quot;") : Y)), '"'];
              break;
            }
            case "front-matter":
              return y(U, R);
          }
        }
        r.exports = T;
      } }), Oo = Z({ "src/language-html/print/children.js"(e, r) {
        ne();
        var { builders: { breakParent: t, group: s, ifBreak: a, line: n, softline: u, hardline: i }, utils: { replaceTextEndOfLine: l } } = Me(), { locStart: p, locEnd: d } = au(), { forceBreakChildren: y, forceNextEmptyLine: g, isTextLikeNode: c, hasPrettierIgnore: D, preferHardlineAsLeadingSpaces: E } = Rt(), { printOpeningTagPrefix: _, needsToBorrowNextOpeningTagStartMarker: w, printOpeningTagStartMarker: F, needsToBorrowPrevClosingTagEndMarker: A, printClosingTagEndMarker: N, printClosingTagSuffix: I, needsToBorrowParentClosingTagStartMarker: P } = ur();
        function H(m, v, o) {
          let h = m.getValue();
          return D(h) ? [_(h, v), ...l(v.originalText.slice(p(h) + (h.prev && w(h.prev) ? F(h).length : 0), d(h) - (h.next && A(h.next) ? N(h, v).length : 0))), I(h, v)] : o();
        }
        function f(m, v) {
          return c(m) && c(v) ? m.isTrailingSpaceSensitive ? m.hasTrailingSpaces ? E(v) ? i : n : "" : E(v) ? i : u : w(m) && (D(v) || v.firstChild || v.isSelfClosing || v.type === "element" && v.attrs.length > 0) || m.type === "element" && m.isSelfClosing && A(v) ? "" : !v.isLeadingSpaceSensitive || E(v) || A(v) && m.lastChild && P(m.lastChild) && m.lastChild.lastChild && P(m.lastChild.lastChild) ? i : v.hasLeadingSpaces ? n : u;
        }
        function b(m, v, o) {
          let h = m.getValue();
          if (y(h))
            return [t, ...m.map((S) => {
              let x = S.getValue(), T = x.prev ? f(x.prev, x) : "";
              return [T ? [T, g(x.prev) ? i : ""] : "", H(S, v, o)];
            }, "children")];
          let C = h.children.map(() => Symbol(""));
          return m.map((S, x) => {
            let T = S.getValue();
            if (c(T)) {
              if (T.prev && c(T.prev)) {
                let Y = f(T.prev, T);
                if (Y)
                  return g(T.prev) ? [i, i, H(S, v, o)] : [Y, H(S, v, o)];
              }
              return H(S, v, o);
            }
            let k = [], M = [], R = [], q = [], U = T.prev ? f(T.prev, T) : "", L = T.next ? f(T, T.next) : "";
            return U && (g(T.prev) ? k.push(i, i) : U === i ? k.push(i) : c(T.prev) ? M.push(U) : M.push(a("", u, { groupId: C[x - 1] }))), L && (g(T) ? c(T.next) && q.push(i, i) : L === i ? c(T.next) && q.push(i) : R.push(L)), [...k, s([...M, s([H(S, v, o), ...R], { id: C[x] })]), ...q];
          }, "children");
        }
        r.exports = { printChildren: b };
      } }), Ng = Z({ "src/language-html/print/element.js"(e, r) {
        ne();
        var { builders: { breakParent: t, dedentToRoot: s, group: a, ifBreak: n, indentIfBreak: u, indent: i, line: l, softline: p }, utils: { replaceTextEndOfLine: d } } = Me(), y = Lo(), { shouldPreserveContent: g, isScriptLikeTag: c, isVueCustomBlock: D, countParents: E, forceBreakContent: _ } = Rt(), { printOpeningTagPrefix: w, printOpeningTag: F, printClosingTagSuffix: A, printClosingTag: N, needsToBorrowPrevClosingTagEndMarker: I, needsToBorrowLastChildClosingTagEndMarker: P } = ur(), { printChildren: H } = Oo();
        function f(b, m, v) {
          let o = b.getValue();
          if (g(o, m))
            return [w(o, m), a(F(b, m, v)), ...d(y(o, m)), ...N(o, m), A(o, m)];
          let h = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces, C = Symbol("element-attr-group-id"), S = (M) => a([a(F(b, m, v), { id: C }), M, N(o, m)]), x = (M) => h ? u(M, { groupId: C }) : (c(o) || D(o, m)) && o.parent.type === "root" && m.parser === "vue" && !m.vueIndentScriptAndStyle ? M : i(M), T = () => h ? n(p, "", { groupId: C }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? l : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(p) : p, k = () => (o.next ? I(o.next) : P(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : h ? n(p, "", { groupId: C }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? l : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${m.tabWidth * E(b, (R) => R.parent && R.parent.type !== "root")}}$`).test(o.lastChild.value) ? "" : p;
          return o.children.length === 0 ? S(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? l : "") : S([_(o) ? t : "", x([T(), H(b, m, v)]), k()]);
        }
        r.exports = { printElement: f };
      } }), wg = Z({ "src/language-html/printer-html.js"(e, r) {
        ne();
        var { builders: { fill: t, group: s, hardline: a, literalline: n }, utils: { cleanDoc: u, getDocParts: i, isConcat: l, replaceTextEndOfLine: p } } = Me(), d = dg(), { countChars: y, unescapeQuoteEntities: g, getTextValueParts: c } = Rt(), D = Ag(), { insertPragma: E } = Sg(), { locStart: _, locEnd: w } = au(), F = Bg(), { printClosingTagSuffix: A, printClosingTagEnd: N, printOpeningTagPrefix: I, printOpeningTagStart: P } = ur(), { printElement: H } = Ng(), { printChildren: f } = Oo();
        function b(m, v, o) {
          let h = m.getValue();
          switch (h.type) {
            case "front-matter":
              return p(h.raw);
            case "root":
              return v.__onHtmlRoot && v.__onHtmlRoot(h), [s(f(m, v, o)), a];
            case "element":
            case "ieConditionalComment":
              return H(m, v, o);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [P(h), N(h)];
            case "interpolation":
              return [P(h, v), ...m.map(o, "children"), N(h, v)];
            case "text": {
              if (h.parent.type === "interpolation") {
                let S = /\n[^\S\n]*$/, x = S.test(h.value), T = x ? h.value.replace(S, "") : h.value;
                return [...p(T), x ? a : ""];
              }
              let C = u([I(h, v), ...c(h), A(h, v)]);
              return l(C) || C.type === "fill" ? t(i(C)) : C;
            }
            case "docType":
              return [s([P(h, v), " ", h.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), N(h, v)];
            case "comment":
              return [I(h, v), ...p(v.originalText.slice(_(h), w(h)), n), A(h, v)];
            case "attribute": {
              if (h.value === null)
                return h.rawName;
              let C = g(h.value), S = y(C, "'"), x = y(C, '"'), T = S < x ? "'" : '"';
              return [h.rawName, "=", T, ...p(T === '"' ? C.replace(/"/g, "&quot;") : C.replace(/'/g, "&apos;")), T];
            }
            default:
              throw new Error(`Unexpected node type ${h.type}`);
          }
        }
        r.exports = { preprocess: D, print: b, insertPragma: E, massageAstNode: d, embed: F };
      } }), _g = Z({ "src/language-html/options.js"(e, r) {
        ne();
        var t = Mt(), s = "HTML";
        r.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: s, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
      } }), Pg = Z({ "src/language-html/parsers.js"() {
        ne();
      } }), On = Z({ "node_modules/linguist-languages/data/HTML.json"(e, r) {
        r.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), Ig = Z({ "node_modules/linguist-languages/data/Vue.json"(e, r) {
        r.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), kg = Z({ "src/language-html/index.js"(e, r) {
        ne();
        var t = _t(), s = wg(), a = _g(), n = Pg(), u = [t(On(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t(On(), (l) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...l.extensions, ".mjml"] })), t(On(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t(Ig(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], i = { html: s };
        r.exports = { languages: u, printers: i, options: a, parsers: n };
      } }), Lg = Z({ "src/language-yaml/pragma.js"(e, r) {
        ne();
        function t(n) {
          return /^\s*@(?:prettier|format)\s*$/.test(n);
        }
        function s(n) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(n);
        }
        function a(n) {
          return `# @format

${n}`;
        }
        r.exports = { isPragma: t, hasPragma: s, insertPragma: a };
      } }), Og = Z({ "src/language-yaml/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), jg = Z({ "src/language-yaml/embed.js"(e, r) {
        ne();
        function t(s, a, n, u) {
          if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(u.filepath))
            return n(u.originalText, Object.assign(Object.assign({}, u), {}, { parser: "json" }));
        }
        r.exports = t;
      } }), $t = Z({ "src/language-yaml/utils.js"(e, r) {
        ne();
        var { getLast: t, isNonEmptyArray: s } = Ue();
        function a(f, b) {
          let m = 0, v = f.stack.length - 1;
          for (let o = 0; o < v; o++) {
            let h = f.stack[o];
            n(h) && b(h) && m++;
          }
          return m;
        }
        function n(f, b) {
          return f && typeof f.type == "string" && (!b || b.includes(f.type));
        }
        function u(f, b, m) {
          return b("children" in f ? Object.assign(Object.assign({}, f), {}, { children: f.children.map((v) => u(v, b, f)) }) : f, m);
        }
        function i(f, b, m) {
          Object.defineProperty(f, b, { get: m, enumerable: false });
        }
        function l(f, b) {
          let m = 0, v = b.length;
          for (let o = f.position.end.offset - 1; o < v; o++) {
            let h = b[o];
            if (h === `
` && m++, m === 1 && /\S/.test(h))
              return false;
            if (m === 2)
              return true;
          }
          return false;
        }
        function p(f) {
          switch (f.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return false;
          }
          let m = f.stack.length;
          for (let v = 1; v < m; v++) {
            let o = f.stack[v], h = f.stack[v - 1];
            if (Array.isArray(h) && typeof o == "number" && o !== h.length - 1)
              return false;
          }
          return true;
        }
        function d(f) {
          return s(f.children) ? d(t(f.children)) : f;
        }
        function y(f) {
          return f.value.trim() === "prettier-ignore";
        }
        function g(f) {
          let b = f.getValue();
          if (b.type === "documentBody") {
            let m = f.getParentNode();
            return A(m.head) && y(t(m.head.endComments));
          }
          return E(b) && y(t(b.leadingComments));
        }
        function c(f) {
          return !s(f.children) && !D(f);
        }
        function D(f) {
          return E(f) || _(f) || w(f) || F(f) || A(f);
        }
        function E(f) {
          return s(f == null ? void 0 : f.leadingComments);
        }
        function _(f) {
          return s(f == null ? void 0 : f.middleComments);
        }
        function w(f) {
          return f == null ? void 0 : f.indicatorComment;
        }
        function F(f) {
          return f == null ? void 0 : f.trailingComment;
        }
        function A(f) {
          return s(f == null ? void 0 : f.endComments);
        }
        function N(f) {
          let b = [], m;
          for (let v of f.split(/( +)/))
            v !== " " ? m === " " ? b.push(v) : b.push((b.pop() || "") + v) : m === void 0 && b.unshift(""), m = v;
          return m === " " && b.push((b.pop() || "") + " "), b[0] === "" && (b.shift(), b.unshift(" " + (b.shift() || ""))), b;
        }
        function I(f, b, m) {
          let v = b.split(`
`).map((o, h, C) => h === 0 && h === C.length - 1 ? o : h !== 0 && h !== C.length - 1 ? o.trim() : h === 0 ? o.trimEnd() : o.trimStart());
          return m.proseWrap === "preserve" ? v.map((o) => o.length === 0 ? [] : [o]) : v.map((o) => o.length === 0 ? [] : N(o)).reduce((o, h, C) => C !== 0 && v[C - 1].length > 0 && h.length > 0 && !(f === "quoteDouble" && t(t(o)).endsWith("\\")) ? [...o.slice(0, -1), [...t(o), ...h]] : [...o, h], []).map((o) => m.proseWrap === "never" ? [o.join(" ")] : o);
        }
        function P(f, b) {
          let { parentIndent: m, isLastDescendant: v, options: o } = b, h = f.position.start.line === f.position.end.line ? "" : o.originalText.slice(f.position.start.offset, f.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], C;
          if (f.indent === null) {
            let T = h.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            C = T ? T.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            C = f.indent - 1 + m;
          let S = h.split(`
`).map((T) => T.slice(C));
          if (o.proseWrap === "preserve" || f.type === "blockLiteral")
            return x(S.map((T) => T.length === 0 ? [] : [T]));
          return x(S.map((T) => T.length === 0 ? [] : N(T)).reduce((T, k, M) => M !== 0 && S[M - 1].length > 0 && k.length > 0 && !/^\s/.test(k[0]) && !/^\s|\s$/.test(t(T)) ? [...T.slice(0, -1), [...t(T), ...k]] : [...T, k], []).map((T) => T.reduce((k, M) => k.length > 0 && /\s$/.test(t(k)) ? [...k.slice(0, -1), t(k) + " " + M] : [...k, M], [])).map((T) => o.proseWrap === "never" ? [T.join(" ")] : T));
          function x(T) {
            if (f.chomping === "keep")
              return t(T).length === 0 ? T.slice(0, -1) : T;
            let k = 0;
            for (let M = T.length - 1; M >= 0 && T[M].length === 0; M--)
              k++;
            return k === 0 ? T : k >= 2 && !v ? T.slice(0, -(k - 1)) : T.slice(0, -k);
          }
        }
        function H(f) {
          if (!f)
            return true;
          switch (f.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return true;
            default:
              return false;
          }
        }
        r.exports = { getLast: t, getAncestorCount: a, isNode: n, isEmptyNode: c, isInlineNode: H, mapNode: u, defineShortcut: i, isNextLineEmpty: l, isLastDescendantNode: p, getBlockValueLineContents: P, getFlowScalarLineContents: I, getLastDescendantNode: d, hasPrettierIgnore: g, hasLeadingComments: E, hasMiddleComments: _, hasIndicatorComment: w, hasTrailingComment: F, hasEndComments: A };
      } }), qg = Z({ "src/language-yaml/print-preprocess.js"(e, r) {
        ne();
        var { defineShortcut: t, mapNode: s } = $t();
        function a(u) {
          return s(u, n);
        }
        function n(u) {
          switch (u.type) {
            case "document":
              t(u, "head", () => u.children[0]), t(u, "body", () => u.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(u, "content", () => u.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(u, "key", () => u.children[0]), t(u, "value", () => u.children[1]);
              break;
          }
          return u;
        }
        r.exports = a;
      } }), Mr = Z({ "src/language-yaml/print/misc.js"(e, r) {
        ne();
        var { builders: { softline: t, align: s } } = Me(), { hasEndComments: a, isNextLineEmpty: n, isNode: u } = $t(), i = /* @__PURE__ */ new WeakMap();
        function l(y, g) {
          let c = y.getValue(), D = y.stack[0], E;
          return i.has(D) ? E = i.get(D) : (E = /* @__PURE__ */ new Set(), i.set(D, E)), !E.has(c.position.end.line) && (E.add(c.position.end.line), n(c, g) && !p(y.getParentNode())) ? t : "";
        }
        function p(y) {
          return a(y) && !u(y, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function d(y, g) {
          return s(" ".repeat(y), g);
        }
        r.exports = { alignWithSpaces: d, shouldPrintEndComments: p, printNextEmptyLine: l };
      } }), Mg = Z({ "src/language-yaml/print/flow-mapping-sequence.js"(e, r) {
        ne();
        var { builders: { ifBreak: t, line: s, softline: a, hardline: n, join: u } } = Me(), { isEmptyNode: i, getLast: l, hasEndComments: p } = $t(), { printNextEmptyLine: d, alignWithSpaces: y } = Mr();
        function g(D, E, _) {
          let w = D.getValue(), F = w.type === "flowMapping", A = F ? "{" : "[", N = F ? "}" : "]", I = a;
          F && w.children.length > 0 && _.bracketSpacing && (I = s);
          let P = l(w.children), H = P && P.type === "flowMappingItem" && i(P.key) && i(P.value);
          return [A, y(_.tabWidth, [I, c(D, E, _), _.trailingComma === "none" ? "" : t(","), p(w) ? [n, u(n, D.map(E, "endComments"))] : ""]), H ? "" : I, N];
        }
        function c(D, E, _) {
          let w = D.getValue();
          return D.map((A, N) => [E(), N === w.children.length - 1 ? "" : [",", s, w.children[N].position.start.line !== w.children[N + 1].position.start.line ? d(A, _.originalText) : ""]], "children");
        }
        r.exports = { printFlowMapping: g, printFlowSequence: g };
      } }), Rg = Z({ "src/language-yaml/print/mapping-item.js"(e, r) {
        ne();
        var { builders: { conditionalGroup: t, group: s, hardline: a, ifBreak: n, join: u, line: i } } = Me(), { hasLeadingComments: l, hasMiddleComments: p, hasTrailingComment: d, hasEndComments: y, isNode: g, isEmptyNode: c, isInlineNode: D } = $t(), { alignWithSpaces: E } = Mr();
        function _(N, I, P, H, f) {
          let { key: b, value: m } = N, v = c(b), o = c(m);
          if (v && o)
            return ": ";
          let h = H("key"), C = F(N) ? " " : "";
          if (o)
            return N.type === "flowMappingItem" && I.type === "flowMapping" ? h : N.type === "mappingItem" && w(b.content, f) && !d(b.content) && (!I.tag || I.tag.value !== "tag:yaml.org,2002:set") ? [h, C, ":"] : ["? ", E(2, h)];
          let S = H("value");
          if (v)
            return [": ", E(2, S)];
          if (l(m) || !D(b.content))
            return ["? ", E(2, h), a, u("", P.map(H, "value", "leadingComments").map((q) => [q, a])), ": ", E(2, S)];
          if (A(b.content) && !l(b.content) && !p(b.content) && !d(b.content) && !y(b) && !l(m.content) && !p(m.content) && !y(m) && w(m.content, f))
            return [h, C, ": ", S];
          let x = Symbol("mappingKey"), T = s([n("? "), s(E(2, h), { id: x })]), k = [a, ": ", E(2, S)], M = [C, ":"];
          l(m.content) || y(m) && m.content && !g(m.content, ["mapping", "sequence"]) || I.type === "mapping" && d(b.content) && D(m.content) || g(m.content, ["mapping", "sequence"]) && m.content.tag === null && m.content.anchor === null ? M.push(a) : m.content && M.push(i), M.push(S);
          let R = E(f.tabWidth, M);
          return w(b.content, f) && !l(b.content) && !p(b.content) && !y(b) ? t([[h, R]]) : t([[T, n(k, R, { groupId: x })]]);
        }
        function w(N, I) {
          if (!N)
            return true;
          switch (N.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return true;
            default:
              return false;
          }
          if (I.proseWrap === "preserve")
            return N.position.start.line === N.position.end.line;
          if (/\\$/m.test(I.originalText.slice(N.position.start.offset, N.position.end.offset)))
            return false;
          switch (I.proseWrap) {
            case "never":
              return !N.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(N.value);
            default:
              return false;
          }
        }
        function F(N) {
          return N.key.content && N.key.content.type === "alias";
        }
        function A(N) {
          if (!N)
            return true;
          switch (N.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return N.position.start.line === N.position.end.line;
            case "alias":
              return true;
            default:
              return false;
          }
        }
        r.exports = _;
      } }), $g = Z({ "src/language-yaml/print/block.js"(e, r) {
        ne();
        var { builders: { dedent: t, dedentToRoot: s, fill: a, hardline: n, join: u, line: i, literalline: l, markAsRoot: p }, utils: { getDocParts: d } } = Me(), { getAncestorCount: y, getBlockValueLineContents: g, hasIndicatorComment: c, isLastDescendantNode: D, isNode: E } = $t(), { alignWithSpaces: _ } = Mr();
        function w(F, A, N) {
          let I = F.getValue(), P = y(F, (v) => E(v, ["sequence", "mapping"])), H = D(F), f = [I.type === "blockFolded" ? ">" : "|"];
          I.indent !== null && f.push(I.indent.toString()), I.chomping !== "clip" && f.push(I.chomping === "keep" ? "+" : "-"), c(I) && f.push(" ", A("indicatorComment"));
          let b = g(I, { parentIndent: P, isLastDescendant: H, options: N }), m = [];
          for (let [v, o] of b.entries())
            v === 0 && m.push(n), m.push(a(d(u(i, o)))), v !== b.length - 1 ? m.push(o.length === 0 ? n : p(l)) : I.chomping === "keep" && H && m.push(s(o.length === 0 ? n : l));
          return I.indent === null ? f.push(t(_(N.tabWidth, m))) : f.push(s(_(I.indent - 1 + P, m))), f;
        }
        r.exports = w;
      } }), Vg = Z({ "src/language-yaml/printer-yaml.js"(e, r) {
        ne();
        var { builders: { breakParent: t, fill: s, group: a, hardline: n, join: u, line: i, lineSuffix: l, literalline: p }, utils: { getDocParts: d, replaceTextEndOfLine: y } } = Me(), { isPreviousLineEmpty: g } = Ue(), { insertPragma: c, isPragma: D } = Lg(), { locStart: E } = Og(), _ = jg(), { getFlowScalarLineContents: w, getLastDescendantNode: F, hasLeadingComments: A, hasMiddleComments: N, hasTrailingComment: I, hasEndComments: P, hasPrettierIgnore: H, isLastDescendantNode: f, isNode: b, isInlineNode: m } = $t(), v = qg(), { alignWithSpaces: o, printNextEmptyLine: h, shouldPrintEndComments: C } = Mr(), { printFlowMapping: S, printFlowSequence: x } = Mg(), T = Rg(), k = $g();
        function M(j, K, se) {
          let Q = j.getValue(), ce = [];
          Q.type !== "mappingValue" && A(Q) && ce.push([u(n, j.map(se, "leadingComments")), n]);
          let { tag: W, anchor: X } = Q;
          W && ce.push(se("tag")), W && X && ce.push(" "), X && ce.push(se("anchor"));
          let de = "";
          b(Q, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !f(j) && (de = h(j, K.originalText)), (W || X) && (b(Q, ["sequence", "mapping"]) && !N(Q) ? ce.push(n) : ce.push(" ")), N(Q) && ce.push([Q.middleComments.length === 1 ? "" : n, u(n, j.map(se, "middleComments")), n]);
          let ie = j.getParentNode();
          return H(j) ? ce.push(y(K.originalText.slice(Q.position.start.offset, Q.position.end.offset).trimEnd(), p)) : ce.push(a(R(Q, ie, j, K, se))), I(Q) && !b(Q, ["document", "documentHead"]) && ce.push(l([Q.type === "mappingValue" && !Q.content ? "" : " ", ie.type === "mappingKey" && j.getParentNode(2).type === "mapping" && m(Q) ? "" : t, se("trailingComment")])), C(Q) && ce.push(o(Q.type === "sequenceItem" ? 2 : 0, [n, u(n, j.map((Ee) => [g(K.originalText, Ee.getValue(), E) ? n : "", se()], "endComments"))])), ce.push(de), ce;
        }
        function R(j, K, se, Q, ce) {
          switch (j.type) {
            case "root": {
              let { children: W } = j, X = [];
              se.each((ie, Ee) => {
                let z = W[Ee], ue = W[Ee + 1];
                Ee !== 0 && X.push(n), X.push(ce()), U(z, ue) ? (X.push(n, "..."), I(z) && X.push(" ", ce("trailingComment"))) : ue && !I(ue.head) && X.push(n, "---");
              }, "children");
              let de = F(j);
              return (!b(de, ["blockLiteral", "blockFolded"]) || de.chomping !== "keep") && X.push(n), X;
            }
            case "document": {
              let W = K.children[se.getName() + 1], X = [];
              return L(j, W, K, Q) === "head" && ((j.head.children.length > 0 || j.head.endComments.length > 0) && X.push(ce("head")), I(j.head) ? X.push(["---", " ", ce(["head", "trailingComment"])]) : X.push("---")), q(j) && X.push(ce("body")), u(n, X);
            }
            case "documentHead":
              return u(n, [...se.map(ce, "children"), ...se.map(ce, "endComments")]);
            case "documentBody": {
              let { children: W, endComments: X } = j, de = "";
              if (W.length > 0 && X.length > 0) {
                let ie = F(j);
                b(ie, ["blockFolded", "blockLiteral"]) ? ie.chomping !== "keep" && (de = [n, n]) : de = n;
              }
              return [u(n, se.map(ce, "children")), de, u(n, se.map(ce, "endComments"))];
            }
            case "directive":
              return ["%", u(" ", [j.name, ...j.parameters])];
            case "comment":
              return ["#", j.value];
            case "alias":
              return ["*", j.value];
            case "tag":
              return Q.originalText.slice(j.position.start.offset, j.position.end.offset);
            case "anchor":
              return ["&", j.value];
            case "plain":
              return Y(j.type, Q.originalText.slice(j.position.start.offset, j.position.end.offset), Q);
            case "quoteDouble":
            case "quoteSingle": {
              let W = "'", X = '"', de = Q.originalText.slice(j.position.start.offset + 1, j.position.end.offset - 1);
              if (j.type === "quoteSingle" && de.includes("\\") || j.type === "quoteDouble" && /\\[^"]/.test(de)) {
                let Ee = j.type === "quoteDouble" ? X : W;
                return [Ee, Y(j.type, de, Q), Ee];
              }
              if (de.includes(X))
                return [W, Y(j.type, j.type === "quoteDouble" ? de.replace(/\\"/g, X).replace(/'/g, W.repeat(2)) : de, Q), W];
              if (de.includes(W))
                return [X, Y(j.type, j.type === "quoteSingle" ? de.replace(/''/g, W) : de, Q), X];
              let ie = Q.singleQuote ? W : X;
              return [ie, Y(j.type, de, Q), ie];
            }
            case "blockFolded":
            case "blockLiteral":
              return k(se, ce, Q);
            case "mapping":
            case "sequence":
              return u(n, se.map(ce, "children"));
            case "sequenceItem":
              return ["- ", o(2, j.content ? ce("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return j.content ? ce("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return T(j, K, se, ce, Q);
            case "flowMapping":
              return S(se, ce, Q);
            case "flowSequence":
              return x(se, ce, Q);
            case "flowSequenceItem":
              return ce("content");
            default:
              throw new Error(`Unexpected node type ${j.type}`);
          }
        }
        function q(j) {
          return j.body.children.length > 0 || P(j.body);
        }
        function U(j, K) {
          return I(j) || K && (K.head.children.length > 0 || P(K.head));
        }
        function L(j, K, se, Q) {
          return se.children[0] === j && /---(?:\s|$)/.test(Q.originalText.slice(E(j), E(j) + 4)) || j.head.children.length > 0 || P(j.head) || I(j.head) ? "head" : U(j, K) ? false : K ? "root" : false;
        }
        function Y(j, K, se) {
          let Q = w(j, K, se);
          return u(n, Q.map((ce) => s(d(u(i, ce)))));
        }
        function V(j, K) {
          if (b(K))
            switch (delete K.position, K.type) {
              case "comment":
                if (D(K.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                K.type = "quote";
                break;
            }
        }
        r.exports = { preprocess: v, embed: _, print: M, massageAstNode: V, insertPragma: c };
      } }), Wg = Z({ "src/language-yaml/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
      } }), Hg = Z({ "src/language-yaml/parsers.js"() {
        ne();
      } }), Gg = Z({ "node_modules/linguist-languages/data/YAML.json"(e, r) {
        r.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), Ug = Z({ "src/language-yaml/index.js"(e, r) {
        ne();
        var t = _t(), s = Vg(), a = Wg(), n = Hg(), u = [t(Gg(), (i) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...i.filenames.filter((l) => l !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        r.exports = { languages: u, printers: { yaml: s }, options: a, parsers: n };
      } }), Jg = Z({ "src/languages.js"(e, r) {
        ne(), r.exports = [Td(), Gd(), Zd(), ig(), mg(), kg(), Ug()];
      } });
      ne();
      var { version: zg } = Ia(), Lt = Gm(), { getSupportInfo: Xg } = Xn(), Kg = Um(), Yg = Jg(), Qg = Me();
      function Nt(e) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
            s[a] = arguments[a];
          let n = s[r] || {}, u = n.plugins || [];
          return s[r] = Object.assign(Object.assign({}, n), {}, { plugins: [...Yg, ...Array.isArray(u) ? u : Object.values(u)] }), e(...s);
        };
      }
      var jn = Nt(Lt.formatWithCursor);
      jo.exports = { formatWithCursor: jn, format(e, r) {
        return jn(e, r).formatted;
      }, check(e, r) {
        let { formatted: t } = jn(e, r);
        return t === e;
      }, doc: Qg, getSupportInfo: Nt(Xg, 0), version: zg, util: Kg, __debug: { parse: Nt(Lt.parse), formatAST: Nt(Lt.formatAST), formatDoc: Nt(Lt.formatDoc), printToDoc: Nt(Lt.printToDoc), printDocToString: Nt(Lt.printDocToString) } };
    });
    return Zg();
  });
} });
var import_parser_html = __toESM(require_parser_html()), import_standalone = __toESM(require_standalone());
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++)
    values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches ? arr.concat(matches.map(function(match) {
      var _a, _b;
      return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    })) : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(`
[	 ]{` + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, `
`);
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/), endentation = endentations ? endentations[1] : "", indentedValue = value;
    typeof value == "string" && value.includes(`
`) && (indentedValue = String(value).split(`
`).map(function(str, i2) {
      return i2 === 0 ? str : "" + endentation + str;
    }).join(`
`)), string += indentedValue + strings[i + 1];
  }), string;
}
var formatter = memoize(2)((type, source) => type === false ? source : type === "dedent" || type === true ? dedent(source) : import_standalone.default.format(source, { parser: type, plugins: [import_parser_html.default], htmlWhitespaceSensitivity: "ignore" }).trim());
export {
  formatter
};
//# sourceMappingURL=formatter-GBS43WFC.3cf63b86.js.map
