(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            a = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            n = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, n, t);
            },
            o = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                a = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: a } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: a }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            p = "sizes",
            u = "poster",
            m = "llOriginalAttrs",
            f = "data",
            h = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            w = "native",
            y = "data-",
            E = "ll-status",
            S = function (e, t) {
              return e.getAttribute(y + t);
            },
            T = function (e) {
              return S(e, E);
            },
            x = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            C = function (e) {
              return x(e, null);
            },
            L = function (e) {
              return null === T(e);
            },
            M = function (e) {
              return T(e) === w;
            },
            _ = [h, g, v, b],
            P = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            A = function (e, t) {
              a
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              a
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            $ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            G = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            B = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && G(s).forEach(t);
            },
            D = function (e, t) {
              G(e).forEach(t);
            },
            N = [d],
            F = [d, u],
            q = [d, c, p],
            H = [f],
            V = function (e) {
              return !!e[m];
            },
            W = function (e) {
              return e[m];
            },
            j = function (e) {
              return delete e[m];
            },
            R = function (e, t) {
              if (!V(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[m] = s);
              }
            },
            X = function (e, t) {
              if (V(e)) {
                var s = W(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              A(e, t.class_applied),
                x(e, v),
                s &&
                  (t.unobserve_completed && O(e, t),
                  P(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              A(e, t.class_loading),
                x(e, h),
                s && (z(s, 1), P(t.callback_loading, e, s));
            },
            Q = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            K = function (e, t) {
              Q(e, p, S(e, t.data_sizes)),
                Q(e, c, S(e, t.data_srcset)),
                Q(e, d, S(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                B(e, function (e) {
                  R(e, q), K(e, t);
                }),
                  R(e, q),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                R(e, N), Q(e, d, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                D(e, function (e) {
                  R(e, N), Q(e, d, S(e, t.data_src));
                }),
                  R(e, F),
                  Q(e, u, S(e, t.data_poster)),
                  Q(e, d, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                R(e, H), Q(e, f, S(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                P(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ae = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                k(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            ne = function (e, t, s) {
              var i = I(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (a) {
                    !(function (e, t, s, i) {
                      var a = M(t);
                      re(t, s, i),
                        A(t, s.class_loaded),
                        x(t, g),
                        P(s.callback_loaded, t, i),
                        a || ee(s, i);
                    })(0, e, t, s),
                      ae(i);
                  },
                  function (a) {
                    !(function (e, t, s, i) {
                      var a = M(t);
                      re(t, s, i),
                        A(t, s.class_error),
                        x(t, b),
                        P(s.callback_error, t, i),
                        s.restore_on_error && X(t, q),
                        a || ee(s, i);
                    })(0, e, t, s),
                      ae(i);
                  }
                );
            },
            le = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ne(e, t, s),
                      (function (e) {
                        V(e) ||
                          (e[m] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg),
                          a = S(e, t.data_bg_hidpi),
                          n = r && a ? a : i;
                        n &&
                          ((e.style.backgroundImage = 'url("'.concat(n, '")')),
                          I(e).setAttribute(d, n),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_multi),
                          a = S(e, t.data_bg_multi_hidpi),
                          n = r && a ? a : i;
                        n && ((e.style.backgroundImage = n), Y(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = S(e, t.data_bg_set);
                        if (i) {
                          var a = i.split("|"),
                            r = a.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = a.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            Y(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    ne(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(p);
            },
            de = function (e) {
              B(e, function (e) {
                X(e, q);
              }),
                X(e, q);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                X(e, N);
              },
              VIDEO: function (e) {
                D(e, function (e) {
                  X(e, N);
                }),
                  X(e, F),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, H);
              },
            },
            pe = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (V(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    M(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                C(e),
                j(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            me = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var a = (function (e) {
                        return _.indexOf(T(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        A(e, s.class_entered),
                        k(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, i),
                        P(s.callback_enter, e, t, i),
                        a || le(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      L(e) ||
                        (A(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ae(e),
                            (function (e) {
                              B(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            de(e),
                            k(e, s.class_loading),
                            z(i, -1),
                            C(e),
                            P(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        P(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return T(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return he(e).filter(L);
              })(e || ge(t));
            },
            we = function (e, s) {
              var a = l(e);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !me(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(a, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), he(s).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(a, this),
                this.update(s);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  a,
                  r = this._settings,
                  n = be(e, r);
                $(this, n.length),
                  !s && i
                    ? me(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ne(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  x(e, w);
                              })(e, t, s);
                          }),
                            $(s, 0);
                        })(n, r, this)
                      : ((a = n),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, a))
                    : this.loadAll(n);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  O(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  pe(t, e);
                });
              },
            }),
            (we.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (we.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) o(e, s);
                  else o(e, t);
              })(we, window.lazyLoadOptions),
            we
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          a = window.matchMedia(i[0]),
          r = i[1],
          n = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        a.addListener(function () {
          e.mediaHandler(a, n);
        }),
          this.mediaHandler(a, n);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let i = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      a = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      r = !0,
      n = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (r) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, e);
        }
      };
    function o(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function d(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function c(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            a = s.dataset[t].split(",");
          (i.value = a[0]),
            (i.type = a[1] ? a[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = d(i);
        const a = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                n = window.matchMedia(s[0]),
                l = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              a.push({ itemsArray: l, matchMedia: n });
            }),
            a
          );
      }
    }
    let p = (e, t = !1, s = 500, i = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let r = "",
          l = 0;
        t &&
          ((r = "header.header"), (l = document.querySelector(r).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (n(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", d);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        o(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    const u = { inputMaskModule: null, selectModule: null };
    let m = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                m.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (u.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  u.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function f(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function h(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : f(t[s]) && f(e[s]) && Object.keys(t[s]).length > 0 && h(e[s], t[s]);
      });
    }
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function v() {
      const e = "undefined" != typeof document ? document : {};
      return h(e, g), e;
    }
    const b = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function w() {
      const e = "undefined" != typeof window ? window : {};
      return h(e, b), e;
    }
    function y(e, t = 0) {
      return setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function S(e, t = "x") {
      const s = w();
      let i, a, r;
      const n = (function (e) {
        const t = w();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((a = n.transform || n.webkitTransform),
            a.split(",").length > 6 &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((r =
              n.MozTransform ||
              n.OTransform ||
              n.MsTransform ||
              n.msTransform ||
              n.transform ||
              n
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (a = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (a = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        a || 0
      );
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function x(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let a = 1; a < e.length; a += 1) {
        const r = e[a];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              a = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== a &&
              a.enumerable &&
              (T(t[i]) && T(r[i])
                ? r[i].__swiper__
                  ? (t[i] = r[i])
                  : x(t[i], r[i])
                : !T(t[i]) && T(r[i])
                ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : x(t[i], r[i]))
                : (t[i] = r[i]));
          }
        }
      }
      var i;
      return t;
    }
    function C(e, t, s) {
      e.style.setProperty(t, s);
    }
    function L({ swiper: e, targetPosition: t, side: s }) {
      const i = w(),
        a = -e.translate;
      let r,
        n = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const o = t > a ? "next" : "prev",
        d = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
        c = () => {
          (r = new Date().getTime()), null === n && (n = r);
          const o = Math.max(Math.min((r - n) / l, 1), 0),
            p = 0.5 - Math.cos(o * Math.PI) / 2;
          let u = a + p * (t - a);
          if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(c);
        };
      c();
    }
    function M(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function _(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function P(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function A(e, t) {
      return w().getComputedStyle(e, null).getPropertyValue(t);
    }
    function k(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function I(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function O(e, t, s) {
      const i = w();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let z, $, G;
    function B() {
      return (
        z ||
          (z = (function () {
            const e = w(),
              t = v();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        z
      );
    }
    function D(e = {}) {
      return (
        $ ||
          ($ = (function ({ userAgent: e } = {}) {
            const t = B(),
              s = w(),
              i = s.navigator.platform,
              a = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              n = s.screen.width,
              l = s.screen.height,
              o = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = a.match(/(iPad).*OS\s([\d_]+)/);
            const c = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === i;
            let m = "MacIntel" === i;
            return (
              !d &&
                m &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${n}x${l}`) >= 0 &&
                ((d = a.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              o && !u && ((r.os = "android"), (r.android = !0)),
              (d || p || c) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        $
      );
    }
    function N() {
      return (
        G ||
          (G = (function () {
            const e = w();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        G
      );
    }
    const F = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function a(...s) {
          i.off(e, a),
            a.__emitterProxy && delete a.__emitterProxy,
            t.apply(i, s);
        }
        return (a.__emitterProxy = t), i.on(e, a, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, a) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, a;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
          : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
          i.unshift(a);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(a, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(a, i);
                });
          }),
          t
        );
      },
    };
    const q = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (s) {
          const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      H = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      V = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          a = e.activeIndex,
          r = a + i - 1;
        if (e.params.rewind)
          for (let i = a - t; i <= r + t; i += 1) {
            const t = ((i % s) + s) % s;
            t !== a && t > r && H(e, t);
          }
        else
          for (let i = Math.max(r - t, 0); i <= Math.min(r + t, s - 1); i += 1)
            i !== a && i > r && H(e, i);
      };
    const W = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(A(i, "padding-left") || 0, 10) -
              parseInt(A(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(A(i, "padding-top") || 0, 10) -
              parseInt(A(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: a,
            slidesEl: r,
            size: n,
            rtlTranslate: l,
            wrongRTL: o,
          } = e,
          d = e.virtual && i.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          p = _(r, `.${e.params.slideClass}, swiper-slide`),
          u = d ? e.virtual.slides.length : p.length;
        let m = [];
        const f = [],
          h = [];
        let g = i.slidesOffsetBefore;
        "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
        let v = i.slidesOffsetAfter;
        "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          w = e.slidesGrid.length;
        let y = i.spaceBetween,
          E = -g,
          S = 0,
          T = 0;
        if (void 0 === n) return;
        "string" == typeof y && y.indexOf("%") >= 0
          ? (y = (parseFloat(y.replace("%", "")) / 100) * n)
          : "string" == typeof y && (y = parseFloat(y)),
          (e.virtualSize = -y),
          p.forEach((e) => {
            l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (C(a, "--swiper-centered-offset-before", ""),
            C(a, "--swiper-centered-offset-after", ""));
        const x = i.grid && i.grid.rows > 1 && e.grid;
        let L;
        x && e.grid.initSlides(u);
        const M =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let a = 0; a < u; a += 1) {
          let r;
          if (
            ((L = 0),
            p[a] && (r = p[a]),
            x && e.grid.updateSlide(a, r, u, t),
            !p[a] || "none" !== A(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              M && (p[a].style[t("width")] = "");
              const n = getComputedStyle(r),
                l = r.style.transform,
                o = r.style.webkitTransform;
              if (
                (l && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                L = e.isHorizontal() ? O(r, "width", !0) : O(r, "height", !0);
              else {
                const e = s(n, "width"),
                  t = s(n, "padding-left"),
                  i = s(n, "padding-right"),
                  a = s(n, "margin-left"),
                  l = s(n, "margin-right"),
                  o = n.getPropertyValue("box-sizing");
                if (o && "border-box" === o) L = e + a + l;
                else {
                  const { clientWidth: s, offsetWidth: n } = r;
                  L = e + t + i + a + l + (n - s);
                }
              }
              l && (r.style.transform = l),
                o && (r.style.webkitTransform = o),
                i.roundLengths && (L = Math.floor(L));
            } else
              (L = (n - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (L = Math.floor(L)),
                p[a] && (p[a].style[t("width")] = `${L}px`);
            p[a] && (p[a].swiperSlideSize = L),
              h.push(L),
              i.centeredSlides
                ? ((E = E + L / 2 + S / 2 + y),
                  0 === S && 0 !== a && (E = E - n / 2 - y),
                  0 === a && (E = E - n / 2 - y),
                  Math.abs(E) < 0.001 && (E = 0),
                  i.roundLengths && (E = Math.floor(E)),
                  T % i.slidesPerGroup == 0 && m.push(E),
                  f.push(E))
                : (i.roundLengths && (E = Math.floor(E)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && m.push(E),
                  f.push(E),
                  (E = E + L + y)),
              (e.virtualSize += L + y),
              (S = L),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, n) + v),
          l &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (a.style.width = `${e.virtualSize + y}px`),
          i.setWrapperSize && (a.style[t("width")] = `${e.virtualSize + y}px`),
          x && e.grid.updateWrapperSize(L, m, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < m.length; s += 1) {
            let a = m[s];
            i.roundLengths && (a = Math.floor(a)),
              m[s] <= e.virtualSize - n && t.push(a);
          }
          (m = t),
            Math.floor(e.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
              m.push(e.virtualSize - n);
        }
        if (d && i.loop) {
          const t = h[0] + y;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              a = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + a);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && m.push(m[m.length - 1] + t),
              f.push(f[f.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === m.length && (m = [0]), 0 !== y)) {
          const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
          p.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
          ).forEach((e) => {
            e.style[s] = `${y}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (y || 0);
          }),
            (e -= y);
          const t = e - n;
          m = m.map((e) => (e < 0 ? -g : e > t ? t + v : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (y || 0);
            }),
            (e -= y),
            e < n)
          ) {
            const t = (n - e) / 2;
            m.forEach((e, s) => {
              m[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: m,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          C(a, "--swiper-centered-offset-before", -m[0] + "px"),
            C(
              a,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          m.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== w && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let a,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
              const e = t.activeIndex + a;
              if (e > t.slides.length && !i) break;
              s.push(n(e));
            }
        else s.push(n(t.activeIndex));
        for (a = 0; a < s.length; a += 1)
          if (void 0 !== s[a]) {
            const e = s[a].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: a, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        a && (n = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let l = s.spaceBetween;
        "string" == typeof l && l.indexOf("%") >= 0
          ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
          : "string" == typeof l && (l = parseFloat(l));
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let d = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
          const c =
              (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (o.swiperSlideSize + l),
            p =
              (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
              (o.swiperSlideSize + l),
            u = -(n - d),
            m = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (m > 1 && m <= t.size) ||
            (u <= 0 && m >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (o.progress = a ? -c : c),
            (o.originalProgress = a ? -p : p);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: r, isEnd: n, progressLoop: l } = t;
        const o = r,
          d = n;
        if (0 === i) (a = 0), (r = !0), (n = !0);
        else {
          a = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || a <= 0), (n = l || a >= 1), s && (a = 0), l && (a = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            a = t.slidesGrid[s],
            r = t.slidesGrid[i],
            n = t.slidesGrid[t.slidesGrid.length - 1],
            o = Math.abs(e);
          (l = o >= a ? (o - a) / n : (o + n - r) / n), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: a,
          progressLoop: l,
          isBeginning: r,
          isEnd: n,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          n && !d && t.emit("reachEnd toEdge"),
          ((o && !r) || (d && !n)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
          r = e.virtual && s.virtual.enabled,
          n = (e) => _(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          r)
        )
          if (s.loop) {
            let t = a - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = n(`[data-swiper-slide-index="${t}"]`));
          } else l = n(`[data-swiper-slide-index="${a}"]`);
        else l = t[a];
        if (l) {
          l.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: a,
            activeIndex: r,
            realIndex: n,
            snapIndex: l,
          } = t;
        let o,
          d = e;
        const c = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let a;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (a = e)
                    : i >= t[e] && i < t[e + 1] && (a = e + 1)
                  : i >= t[e] && (a = e);
              return (
                s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          o = i.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, d);
          o = e + Math.floor((d - e) / a.slidesPerGroup);
        }
        if ((o >= i.length && (o = i.length - 1), d === r))
          return (
            o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let p;
        (p =
          t.virtual && a.virtual.enabled && a.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10
              )
            : d),
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: o,
            previousRealIndex: n,
            realIndex: p,
            previousIndex: r,
            activeIndex: d,
          }),
          t.initialized && V(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          n !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let a,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (a = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = a),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const j = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = S(a, e);
        return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: a, wrapperEl: r, progress: n } = s;
        let l,
          o = 0,
          d = 0;
        s.isHorizontal() ? (o = i ? -e : e) : (d = e),
          a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? o : d),
          a.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -o : -d)
            : a.virtualTranslate ||
              (s.isHorizontal()
                ? (o -= s.cssOverflowAdjustment())
                : (d -= s.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
        const c = s.maxTranslate() - s.minTranslate();
        (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
          l !== n && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, a) {
        const r = this,
          { params: n, wrapperEl: l } = r;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        const o = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = i && e > o ? o : i && e < d ? d : e),
          r.updateProgress(c),
          n.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, a),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function R({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: a, previousIndex: r } = e;
      let n = s;
      if (
        (n || (n = a > r ? "next" : a < r ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && a !== r)
      ) {
        if ("reset" === n) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === n
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const X = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
        "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: m,
          enabled: f,
        } = r;
        if (
          (r.animating && l.preventInteractionOnTransition) ||
          (!f && !i && !a)
        )
          return !1;
        const h = Math.min(r.params.slidesPerGroupSkip, n);
        let g = h + Math.floor((n - h) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1);
        const v = -o[g];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (n = e)
                : t >= s && t < i && (n = e + 1)
              : t >= s && (n = e);
          }
        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (p || 0) !== n
          )
            return !1;
        }
        let b;
        if (
          (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (b = n > p ? "next" : n < p ? "prev" : "reset"),
          (u && -v === r.translate) || (!u && v === r.translate))
        )
          return (
            r.updateActiveIndex(n),
            l.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== l.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = r.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    m[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (m[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(n),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const a = this;
        let r = e;
        return (
          a.params.loop &&
            (a.virtual && a.params.virtual.enabled
              ? (r += a.virtual.slidesBefore)
              : (r = a.getSlideIndexByData(r))),
          a.slideTo(r, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: a, params: r, animating: n } = i;
        if (!a) return i;
        let l = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
          d = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (n && !d && r.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: a,
            snapGrid: r,
            slidesGrid: n,
            rtlTranslate: l,
            enabled: o,
            animating: d,
          } = i;
        if (!o) return i;
        const c = i.virtual && a.virtual.enabled;
        if (a.loop) {
          if (d && !c && a.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(l ? i.translate : -i.translate),
          m = r.map((e) => p(e));
        let f = r[m.indexOf(u) - 1];
        if (void 0 === f && a.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = n.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === a.slidesPerView &&
              1 === a.slidesPerGroup &&
              a.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          a.rewind && i.isBeginning)
        ) {
          const a =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(a, e, t, s);
        }
        return i.slideTo(h, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const a = this;
        let r = a.activeIndex;
        const n = Math.min(a.params.slidesPerGroupSkip, r),
          l = n + Math.floor((r - n) / a.params.slidesPerGroup),
          o = a.rtlTranslate ? a.translate : -a.translate;
        if (o >= a.snapGrid[l]) {
          const e = a.snapGrid[l];
          o - e > (a.snapGrid[l + 1] - e) * i && (r += a.params.slidesPerGroup);
        } else {
          const e = a.snapGrid[l - 1];
          o - e <= (a.snapGrid[l] - e) * i && (r -= a.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, a.slidesGrid.length - 1)),
          a.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          r = e.clickedIndex;
        const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    _(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
                  )),
                  y(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  _(s, `${n}[data-swiper-slide-index="${a}"]`)[0]
                )),
                y(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const Y = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        _(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: a,
        byController: r,
        byMousewheel: n,
      } = {}) {
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: o,
          allowSlidePrev: d,
          allowSlideNext: c,
          slidesEl: p,
          params: u,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && u.virtual.enabled)
        )
          return (
            t &&
              (u.centeredSlides || 0 !== l.snapIndex
                ? u.centeredSlides && l.snapIndex < u.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = d),
            (l.allowSlideNext = c),
            void l.emit("loopFix")
          );
        const m =
          "auto" === u.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(u.slidesPerView, 10));
        let f = u.loopedSlides || m;
        f % u.slidesPerGroup != 0 &&
          (f += u.slidesPerGroup - (f % u.slidesPerGroup)),
          (l.loopedSlides = f);
        const h = [],
          g = [];
        let v = l.activeIndex;
        void 0 === a
          ? (a = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(u.slideActiveClass)
              )[0]
            ))
          : (v = a);
        const b = "next" === s || !s,
          w = "prev" === s || !s;
        let y = 0,
          E = 0;
        if (a < f) {
          y = Math.max(f - a, u.slidesPerGroup);
          for (let e = 0; e < f - a; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            h.push(o.length - t - 1);
          }
        } else if (a > l.slides.length - 2 * f) {
          E = Math.max(a - (l.slides.length - 2 * f), u.slidesPerGroup);
          for (let e = 0; e < E; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            g.push(t);
          }
        }
        if (
          (w &&
            h.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          b &&
            g.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === u.slidesPerView && l.updateSlides(),
          u.watchSlidesProgress && l.updateSlidesOffset(),
          t)
        )
          if (h.length > 0 && w)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v + y] - e;
              n
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v + y, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else i && l.slideToLoop(e, 0, !1, !0);
          else if (g.length > 0 && b)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v - E] - e;
              n
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v - E, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else l.slideToLoop(e, 0, !1, !0);
        if (
          ((l.allowSlidePrev = d),
          (l.allowSlideNext = c),
          l.controller && l.controller.control && !r)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: a,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((e) => {
                !e.destroyed && e.params.loop && e.loopFix(t);
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix(t);
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function U(e) {
      const t = this,
        s = v(),
        i = w(),
        a = t.touchEventsData;
      a.evCache.push(e);
      const { params: r, touches: n, enabled: l } = t;
      if (!l) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let d = o.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
      if ("which" in o && 3 === o.which) return;
      if ("button" in o && o.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      const c = !!r.noSwipingClass && "" !== r.noSwipingClass,
        p = e.composedPath ? e.composedPath() : e.path;
      c && o.target && o.target.shadowRoot && p && (d = p[0]);
      const u = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        m = !(!o.target || !o.target.shadowRoot);
      if (
        r.noSwiping &&
        (m
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === v() || s === w()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(u, d)
          : d.closest(u))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
      (n.currentX = o.pageX), (n.currentY = o.pageY);
      const f = n.currentX,
        h = n.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (f <= b || f >= i.innerWidth - b)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (n.startX = f),
        (n.startY = h),
        (a.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (a.allowThresholdMove = !1);
      let y = !0;
      d.matches(a.focusableElements) &&
        ((y = !1), "SELECT" === d.nodeName && (a.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(a.focusableElements) &&
          s.activeElement !== d &&
          s.activeElement.blur();
      const S = y && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !S) ||
        d.isContentEditable ||
        o.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function Q(e) {
      const t = v(),
        s = this,
        i = s.touchEventsData,
        { params: a, touches: r, rtlTranslate: n, enabled: l } = s;
      if (!l) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      const d = i.evCache.findIndex((e) => e.pointerId === o.pointerId);
      d >= 0 && (i.evCache[d] = o);
      const c = i.evCache.length > 1 ? i.evCache[0] : o,
        p = c.pageX,
        u = c.pageY;
      if (o.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          o.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: p,
              startY: u,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: p,
              currentY: u,
            }),
            (i.touchStartTime = E()))
          )
        );
      if (a.touchReleaseOnEdges && !a.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (p < r.startX && s.translate <= s.maxTranslate()) ||
          (p > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        o.target === t.activeElement &&
        o.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (r.currentX = p), (r.currentY = u);
      const m = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(m ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : m * m + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(m))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > a.touchAngle
              : 90 - e > a.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !a.cssMode && o.cancelable && o.preventDefault(),
        a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
      let h = s.isHorizontal() ? m : f,
        g = s.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      a.oneWayMovement &&
        ((h = Math.abs(h) * (n ? 1 : -1)), (g = Math.abs(g) * (n ? 1 : -1))),
        (r.diff = h),
        (h *= a.touchRatio),
        n && ((h = -h), (g = -g));
      const b = s.touchesDirection;
      (s.swipeDirection = h > 0 ? "prev" : "next"),
        (s.touchesDirection = g > 0 ? "prev" : "next");
      const w = s.params.loop && !a.cssMode;
      if (!i.isMoved) {
        if (
          (w && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !a.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o);
      }
      let y;
      i.isMoved &&
        b !== s.touchesDirection &&
        w &&
        Math.abs(h) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (y = !0)),
        s.emit("sliderMove", o),
        (i.isMoved = !0),
        (i.currentTranslate = h + i.startTranslate);
      let S = !0,
        T = a.resistanceRatio;
      if (
        (a.touchReleaseOnEdges && (T = 0),
        h > 0
          ? (w &&
              !y &&
              i.currentTranslate >
                (a.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((S = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + h) ** T)))
          : h < 0 &&
            (w &&
              !y &&
              i.currentTranslate <
                (a.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === a.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(a.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((S = !1),
              a.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - h) ** T))),
        S && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        a.threshold > 0)
      ) {
        if (!(Math.abs(h) > a.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      a.followFinger &&
        !a.cssMode &&
        (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
          a.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          a.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function K(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: a,
        touches: r,
        rtlTranslate: n,
        slidesGrid: l,
        enabled: o,
      } = t;
      if (!o) return;
      if (!a.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", d),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && a.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      a.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = E(),
        p = c - s.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          p < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((s.lastClickTime = E()),
        y(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = a.followFinger
          ? n
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
      )
        return;
      if (t.params.freeMode && a.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let m = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
      ) {
        const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        void 0 !== l[e + t]
          ? u >= l[e] && u < l[e + t] && ((m = e), (f = l[e + t] - l[e]))
          : u >= l[e] && ((m = e), (f = l[l.length - 1] - l[l.length - 2]));
      }
      let h = null,
        g = null;
      a.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const v = (u - l[m]) / f,
        b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      if (p > a.longSwipesMs) {
        if (!a.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= a.longSwipesRatio
            ? t.slideTo(a.rewind && t.isEnd ? h : m + b)
            : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (v > 1 - a.longSwipesRatio
              ? t.slideTo(m + b)
              : null !== g && v < 0 && Math.abs(v) > a.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(m));
      } else {
        if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(m + b)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : m + b),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
      }
    }
    function J() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
        n = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const l = n && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
        ? e.params.loop && !n
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = a),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ee() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let a;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function te(e) {
      const t = this;
      q(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let se = !1;
    function ie() {}
    const ae = (e, t) => {
      const s = v(),
        { params: i, el: a, wrapperEl: r, device: n } = e,
        l = !!i.nested,
        o = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      a[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        s[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          a[o]("click", e.onClick, !0),
        i.cssMode && r[o]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              n.ios || n.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              J,
              !0
            )
          : e[d]("observerUpdate", J, !0),
        a[o]("load", e.onLoad, { capture: !0 });
    };
    const re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ne = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function le(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          a = s[i];
        "object" == typeof a && null !== a
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in a
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                x(t, s))
              : x(t, s))
          : x(t, s);
      };
    }
    const oe = {
        eventsEmitter: F,
        update: W,
        translate: j,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: X,
        loop: Y,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = v(),
              { params: s } = e;
            (e.onTouchStart = U.bind(e)),
              (e.onTouchMove = Q.bind(e)),
              (e.onTouchEnd = K.bind(e)),
              s.cssMode && (e.onScroll = ee.bind(e)),
              (e.onClick = Z.bind(e)),
              (e.onLoad = te.bind(e)),
              se || (t.addEventListener("touchstart", ie), (se = !0)),
              ae(e, "on");
          },
          detachEvents: function () {
            ae(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: a } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!n || e.currentBreakpoint === n) return;
            const l = (n in r ? r[n] : void 0) || e.originalParams,
              o = re(e, i),
              d = re(e, l),
              c = i.enabled;
            o && !d
              ? (a.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !o &&
                d &&
                (a.classList.add(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  a.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = i[t] && i[t].enabled,
                  a = l[t] && l[t].enabled;
                s && !a && e[t].disable(), !s && a && e[t].enable();
              });
            const p = l.direction && l.direction !== i.direction,
              u = i.loop && (l.slidesPerView !== i.slidesPerView || p);
            p && s && e.changeDirection(), x(e.params, l);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !m ? e.disable() : !c && m && e.enable(),
              (e.currentBreakpoint = n),
              e.emit("_beforeBreakpoint", l),
              u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const a = w(),
              r = "window" === t ? a.innerHeight : s.clientHeight,
              n = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < n.length; e += 1) {
              const { point: r, value: l } = n[e];
              "window" === t
                ? a.matchMedia(`(min-width: ${l}px)`).matches && (i = r)
                : l <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: a, device: r } = e,
              n = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...n), a.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      de = {};
    class ce {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = x({}, s)),
          t && !s.el && (s.el = t);
        const i = v();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = x({}, s, { el: t });
              e.push(new ce(i));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = B()),
          (a.device = D({ userAgent: s.userAgent })),
          (a.browser = N()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
        const r = {};
        a.modules.forEach((e) => {
          e({
            params: s,
            swiper: a,
            extendParams: le(s, r),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const n = x({}, ne, r);
        return (
          (a.params = x({}, n, de, s)),
          (a.originalParams = x({}, a.params)),
          (a.passedParams = x({}, s)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = k(_(t, `.${s.slideClass}, swiper-slide`)[0]);
        return k(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = _(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          a = (s.maxTranslate() - i) * e + i;
        s.translateTo(a, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: a,
          slidesSizesGrid: r,
          size: n,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[l].swiperSlideSize;
          for (let s = l + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < i.length; e += 1) {
            (t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            a[l] - a[e] < n && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && q(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled)
        )
          i(), e.params.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            const t =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides
                : e.slides;
            a = e.slideTo(t.length - 1, 0, !1, !0);
          } else a = e.slideTo(e.activeIndex, 0, !1, !0);
          a || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return _(s, i())[0];
        })();
        return (
          !a &&
            t.params.createElements &&
            ((a = P("div", t.params.wrapperClass)),
            s.append(a),
            _(s, `.${t.params.slideClass}`).forEach((e) => {
              a.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: a,
            slidesEl: t.isElement ? s : a,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === A(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === A(s, "direction")),
            wrongRTL: "-webkit-box" === A(a, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? q(t, e)
                : e.addEventListener("load", (e) => {
                    q(t, e.target);
                  });
            }),
            V(t),
            (t.initialized = !0),
            V(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: a, wrapperEl: r, slides: n } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              a.removeAttribute("style"),
              r.removeAttribute("style"),
              n &&
                n.length &&
                n.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        x(de, e);
      }
      static get extendedDefaults() {
        return de;
      }
      static get defaults() {
        return ne;
      }
      static installModule(e) {
        ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
        const t = ce.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ce.installModule(e)), ce)
          : (ce.installModule(e), ce);
      }
    }
    Object.keys(oe).forEach((e) => {
      Object.keys(oe[e]).forEach((t) => {
        ce.prototype[t] = oe[e][t];
      });
    }),
      ce.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = w();
          let a = null,
            r = null;
          const n = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((a = new ResizeObserver((t) => {
                  r = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let a = s,
                      r = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((a = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (a === s && r === i) || n();
                  });
                })),
                a.observe(e.el))
              : (i.addEventListener("resize", n),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              r && i.cancelAnimationFrame(r),
                a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
                i.removeEventListener("resize", n),
                i.removeEventListener("orientationchange", l);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const a = [],
            r = w(),
            n = (t, s = {}) => {
              const n = new (r.MutationObserver || r.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const s = function () {
                    i("observerUpdate", t[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(s)
                    : r.setTimeout(s, 0);
                }
              );
              n.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                a.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = I(e.el);
                  for (let e = 0; e < t.length; e += 1) n(t[e]);
                }
                n(e.el, { childList: e.params.observeSlideChildren }),
                  n(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const pe = ce;
    function ue(e, t, s, i) {
      return (
        e.params.createElements &&
          Object.keys(i).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let r = _(e.el, `.${i[a]}`)[0];
              r || ((r = P("div", i[a])), (r.className = i[a]), e.el.append(r)),
                (s[a] = r),
                (t[a] = r);
            }
          }),
        s
      );
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null });
      const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function r(t) {
        let s;
        return t &&
          "string" == typeof t &&
          e.isElement &&
          ((s = e.el.shadowRoot.querySelector(t)), s)
          ? s
          : (t &&
              ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.el.querySelectorAll(t).length &&
                (s = e.el.querySelector(t))),
            t && !s ? t : s);
      }
      function n(t, s) {
        const i = e.params.navigation;
        (t = a(t)).forEach((t) => {
          t &&
            (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
            "BUTTON" === t.tagName && (t.disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function l() {
        const { nextEl: t, prevEl: s } = e.navigation;
        if (e.params.loop) return n(s, !1), void n(t, !1);
        n(s, e.isBeginning && !e.params.rewind),
          n(t, e.isEnd && !e.params.rewind);
      }
      function o(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), i("navigationPrev"));
      }
      function d(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), i("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = ue(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        let s = r(t.nextEl),
          i = r(t.prevEl);
        Object.assign(e.navigation, { nextEl: s, prevEl: i }),
          (s = a(s)),
          (i = a(i));
        const n = (s, i) => {
          s && s.addEventListener("click", "next" === i ? d : o),
            !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
        };
        s.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
      }
      function p() {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = a(t)), (s = a(s));
        const i = (t, s) => {
          t.removeEventListener("click", "next" === s ? d : o),
            t.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      s("init", () => {
        !1 === e.params.navigation.enabled ? u() : (c(), l());
      }),
        s("toEdge fromEdge lock unlock", () => {
          l();
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          let { nextEl: t, prevEl: s } = e.navigation;
          (t = a(t)),
            (s = a(s)),
            [...t, ...s]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList[e.enabled ? "remove" : "add"](
                  e.params.navigation.lockClass
                )
              );
        }),
        s("click", (t, s) => {
          let { nextEl: r, prevEl: n } = e.navigation;
          (r = a(r)), (n = a(n));
          const l = s.target;
          if (
            e.params.navigation.hideOnClick &&
            !n.includes(l) &&
            !r.includes(l)
          ) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === l || e.pagination.el.contains(l))
            )
              return;
            let t;
            r.length
              ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
              : n.length &&
                (t = n[0].classList.contains(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              [...r, ...n]
                .filter((e) => !!e)
                .forEach((t) =>
                  t.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const u = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            l();
        },
        disable: u,
        update: l,
        init: c,
        destroy: p,
      });
    }
    function fe(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function he({ swiper: e, extendParams: t, on: s, emit: i }) {
      const a = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
          paginationDisabledClass: `${a}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let n = 0;
      const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function d(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function c(t) {
        const s = t.target.closest(fe(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = k(s) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          const t = e.getSlideIndexByData(i),
            s = e.getSlideIndexByData(e.realIndex);
          t > e.slides.length - e.loopedSlides &&
            e.loopFix({
              direction: t > s ? "next" : "prev",
              activeSlideIndex: t,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function p() {
        const t = e.rtl,
          s = e.params.pagination;
        if (o()) return;
        let a,
          c,
          p = e.pagination.el;
        p = l(p);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          m = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((c = e.previousRealIndex || 0),
              (a =
                e.params.slidesPerGroup > 1
                  ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                  : e.realIndex))
            : void 0 !== e.snapIndex
            ? ((a = e.snapIndex), (c = e.previousSnapIndex))
            : ((c = e.previousIndex || 0), (a = e.activeIndex || 0)),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let l, o, u;
          if (
            (s.dynamicBullets &&
              ((r = O(i[0], e.isHorizontal() ? "width" : "height", !0)),
              p.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  r * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== c &&
                ((n += a - (c || 0)),
                n > s.dynamicMainBullets - 1
                  ? (n = s.dynamicMainBullets - 1)
                  : n < 0 && (n = 0)),
              (l = Math.max(a - n, 0)),
              (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (o + l) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            p.length > 1)
          )
            i.forEach((e) => {
              const t = k(e);
              t === a && e.classList.add(...s.bulletActiveClass.split(" ")),
                s.dynamicBullets &&
                  (t >= l &&
                    t <= o &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  t === l && d(e, "prev"),
                  t === o && d(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets)
            ) {
              const e = i[l],
                t = i[o];
              for (let e = l; e <= o; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              n = (r * a - r) / 2 - u * r,
              l = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? l : "top"] = `${n}px`;
            });
          }
        }
        p.forEach((t, r) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(fe(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
              t.querySelectorAll(fe(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(m);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (a + 1) / m;
            let n = 1,
              l = 1;
            "horizontal" === i ? (n = r) : (l = r),
              t.querySelectorAll(fe(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, a + 1, m)),
              0 === r && i("paginationRender", t))
            : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function u() {
        const t = e.params.pagination;
        if (o()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let a = e.pagination.el;
        a = l(a);
        let r = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          (e.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = r || ""),
              "bullets" === t.type &&
                e.pagination.bullets.push(
                  ...s.querySelectorAll(fe(t.bulletClass))
                );
          }),
          "custom" !== t.type && i("paginationRender", a[0]);
      }
      function m() {
        e.params.pagination = ue(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => I(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = l(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (n = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", c),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function f() {
        const t = e.params.pagination;
        if (o()) return;
        let s = e.pagination.el;
        s &&
          ((s = l(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", c);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(...t.bulletActiveClass.split(" "))
            );
      }
      s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const t = e.params.pagination;
        let { el: s } = e.pagination;
        (s = l(s)),
          s.forEach((s) => {
            s.classList.remove(t.horizontalClass, t.verticalClass),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              );
          });
      }),
        s("init", () => {
          !1 === e.params.pagination.enabled ? h() : (m(), u(), p());
        }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && p();
        }),
        s("snapIndexChange", () => {
          p();
        }),
        s("snapGridLengthChange", () => {
          u(), p();
        }),
        s("destroy", () => {
          f();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          p();
        }),
        s("click", (t, s) => {
          const a = s.target;
          let { el: r } = e.pagination;
          if (
            (Array.isArray(r) || (r = [r].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !a.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                (e.navigation.prevEl && a === e.navigation.prevEl))
            )
              return;
            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              r.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const h = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = l(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          f();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            m(),
            u(),
            p();
        },
        disable: h,
        render: u,
        update: p,
        init: m,
        destroy: f,
      });
    }
    function ge({ swiper: e, extendParams: t, on: s, emit: i, params: a }) {
      let r, n;
      (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let l,
        o,
        d,
        c,
        p,
        u,
        m,
        f = a && a.autoplay ? a.autoplay.delay : 3e3,
        h = a && a.autoplay ? a.autoplay.delay : 3e3,
        g = new Date().getTime;
      function b(t) {
        e &&
          !e.destroyed &&
          e.wrapperEl &&
          t.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", b), x());
      }
      const w = () => {
          if (e.destroyed || !e.autoplay.running) return;
          e.autoplay.paused ? (o = !0) : o && ((h = l), (o = !1));
          const t = e.autoplay.paused ? l : g + h - new Date().getTime();
          (e.autoplay.timeLeft = t),
            i("autoplayTimeLeft", t, t / f),
            (n = requestAnimationFrame(() => {
              w();
            }));
        },
        y = (t) => {
          if (e.destroyed || !e.autoplay.running) return;
          cancelAnimationFrame(n), w();
          let s = void 0 === t ? e.params.autoplay.delay : t;
          (f = e.params.autoplay.delay), (h = e.params.autoplay.delay);
          const a = (() => {
            let t;
            if (
              ((t =
                e.virtual && e.params.virtual.enabled
                  ? e.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : e.slides[e.activeIndex]),
              !t)
            )
              return;
            return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(a) &&
            a > 0 &&
            void 0 === t &&
            ((s = a), (f = a), (h = a)),
            (l = s);
          const o = e.params.speed,
            d = () => {
              e &&
                !e.destroyed &&
                (e.params.autoplay.reverseDirection
                  ? !e.isBeginning || e.params.loop || e.params.rewind
                    ? (e.slidePrev(o, !0, !0), i("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(e.slides.length - 1, o, !0, !0), i("autoplay"))
                  : !e.isEnd || e.params.loop || e.params.rewind
                  ? (e.slideNext(o, !0, !0), i("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(0, o, !0, !0), i("autoplay")),
                e.params.cssMode &&
                  ((g = new Date().getTime()),
                  requestAnimationFrame(() => {
                    y();
                  })));
            };
          return (
            s > 0
              ? (clearTimeout(r),
                (r = setTimeout(() => {
                  d();
                }, s)))
              : requestAnimationFrame(() => {
                  d();
                }),
            s
          );
        },
        E = () => {
          (e.autoplay.running = !0), y(), i("autoplayStart");
        },
        S = () => {
          (e.autoplay.running = !1),
            clearTimeout(r),
            cancelAnimationFrame(n),
            i("autoplayStop");
        },
        T = (t, s) => {
          if (e.destroyed || !e.autoplay.running) return;
          clearTimeout(r), t || (m = !0);
          const a = () => {
            i("autoplayPause"),
              e.params.autoplay.waitForTransition
                ? e.wrapperEl.addEventListener("transitionend", b)
                : x();
          };
          if (((e.autoplay.paused = !0), s))
            return u && (l = e.params.autoplay.delay), (u = !1), void a();
          const n = l || e.params.autoplay.delay;
          (l = n - (new Date().getTime() - g)),
            (e.isEnd && l < 0 && !e.params.loop) || (l < 0 && (l = 0), a());
        },
        x = () => {
          (e.isEnd && l < 0 && !e.params.loop) ||
            e.destroyed ||
            !e.autoplay.running ||
            ((g = new Date().getTime()),
            m ? ((m = !1), y(l)) : y(),
            (e.autoplay.paused = !1),
            i("autoplayResume"));
        },
        C = () => {
          if (e.destroyed || !e.autoplay.running) return;
          const t = v();
          "hidden" === t.visibilityState && ((m = !0), T(!0)),
            "visible" === t.visibilityState && x();
        },
        L = (e) => {
          "mouse" === e.pointerType && ((m = !0), T(!0));
        },
        M = (t) => {
          "mouse" === t.pointerType && e.autoplay.paused && x();
        };
      s("init", () => {
        e.params.autoplay.enabled &&
          (e.params.autoplay.pauseOnMouseEnter &&
            (e.el.addEventListener("pointerenter", L),
            e.el.addEventListener("pointerleave", M)),
          v().addEventListener("visibilitychange", C),
          (g = new Date().getTime()),
          E());
      }),
        s("destroy", () => {
          e.el.removeEventListener("pointerenter", L),
            e.el.removeEventListener("pointerleave", M),
            v().removeEventListener("visibilitychange", C),
            e.autoplay.running && S();
        }),
        s("beforeTransitionStart", (t, s, i) => {
          !e.destroyed &&
            e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
        }),
        s("sliderFirstMove", () => {
          !e.destroyed &&
            e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? S()
              : ((d = !0),
                (c = !1),
                (m = !1),
                (p = setTimeout(() => {
                  (m = !0), (c = !0), T(!0);
                }, 200))));
        }),
        s("touchEnd", () => {
          if (!e.destroyed && e.autoplay.running && d) {
            if (
              (clearTimeout(p),
              clearTimeout(r),
              e.params.autoplay.disableOnInteraction)
            )
              return (c = !1), void (d = !1);
            c && e.params.cssMode && x(), (c = !1), (d = !1);
          }
        }),
        s("slideChange", () => {
          !e.destroyed && e.autoplay.running && (u = !0);
        }),
        Object.assign(e.autoplay, { start: E, stop: S, pause: T, resume: x });
    }
    function ve(e, t) {
      const s = M(t);
      return (
        s !== t &&
          ((s.style.backfaceVisibility = "hidden"),
          (s.style["-webkit-backface-visibility"] = "hidden")),
        s
      );
    }
    function be({
      swiper: e,
      duration: t,
      transformElements: s,
      allSlides: i,
    }) {
      const { activeIndex: a } = e;
      if (e.params.virtualTranslate && 0 !== t) {
        let t,
          r = !1;
        (t = i
          ? s
          : s.filter((t) => {
              const s = t.classList.contains("swiper-slide-transform")
                ? ((t) => {
                    if (!t.parentElement)
                      return e.slides.filter(
                        (e) => e.shadowEl && e.shadowEl === t.parentNode
                      )[0];
                    return t.parentElement;
                  })(t)
                : t;
              return e.getSlideIndex(s) === a;
            })),
          t.forEach((t) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function s(i) {
                  i.target === e &&
                    (t.call(e, i), e.removeEventListener("transitionend", s));
                });
            })(t, () => {
              if (r) return;
              if (!e || e.destroyed) return;
              (r = !0), (e.animating = !1);
              const t = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              e.wrapperEl.dispatchEvent(t);
            });
          });
      }
    }
    function we({ swiper: e, extendParams: t, on: s }) {
      t({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: a,
          setTransition: r,
          overwriteParams: n,
          perspective: l,
          recreateShadows: o,
          getEffectParams: d,
        } = e;
        let c;
        i("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l &&
              l() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = n ? n() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          i("setTranslate", () => {
            s.params.effect === t && a();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && r(i);
          }),
          i("transitionEnd", () => {
            if (s.params.effect === t && o) {
              if (!d || !d().slideShadows) return;
              s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                ).forEach((e) => e.remove());
              }),
                o();
            }
          }),
          i("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (c = !0),
              requestAnimationFrame(() => {
                c && s.slides && s.slides.length && (a(), (c = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t } = e;
          e.params.fadeEffect;
          for (let s = 0; s < t.length; s += 1) {
            const t = e.slides[s];
            let i = -t.swiperSlideOffset;
            e.params.virtualTranslate || (i -= e.translate);
            let a = 0;
            e.isHorizontal() || ((a = i), (i = 0));
            const r = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t.progress), 0)
                : 1 + Math.min(Math.max(t.progress, -1), 0),
              n = ve(0, t);
            (n.style.opacity = r),
              (n.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const s = e.slides.map((e) => M(e));
          s.forEach((e) => {
            e.style.transitionDuration = `${t}ms`;
          }),
            be({ swiper: e, duration: t, transformElements: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
    function ye() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ye(),
        document.querySelector(".swiper") &&
          (new pe(".our-works__slider", {
            modules: [me],
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            rewind: !0,
            navigation: {
              nextEl: ".btn-our-slider-next",
              prevEl: ".btn-our-slider-prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.2, spaceBetween: 15, autoHeight: !0 },
              479.98: { slidesPerView: 1.5 },
              599.98: { slidesPerView: 2.2, spaceBetween: 15 },
              767.98: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
          new pe(".info-block-testimonials__slider", {
            modules: [me, ge, we],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: !1,
            speed: 800,
            navigation: {
              nextEl: ".testimonials-btn-next",
              prevEl: ".testimonials-btn-prev",
            },
          }),
          new pe(".slider-hero__slider", {
            modules: [me, ge, we, he],
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight: !1,
            speed: 800,
            navigation: {
              nextEl: ".slider-hero__btn-next",
              prevEl: ".slider-hero__btn-prev",
            },
            pagination: {
              el: ".slider-hero__pagination",
              type: "bullets",
              clickable: !0,
              renderBullet: function (e, t) {
                return '<span class="' + t + '">0' + (e + 1) + "</span>";
              },
            },
          }));
    });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class Ee {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            d(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                a = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    a = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(a) === i.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(a, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && o(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    }
    let Se,
      Te = !1;
    setTimeout(() => {
      if (Te) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let xe = document.querySelectorAll("[data-progress-cercle]");
    document.querySelectorAll("[data-number]");
    document.addEventListener("watcherCallback", function (e) {
      const t = e.detail.entry;
      "animation-module" === t.target.dataset.watch &&
        (t.isIntersecting
          ? ((Se = !0),
            Se &&
              xe.forEach((e) => {
                let t,
                  s,
                  i = 0,
                  a = e.getAttribute("data-speed");
                null == a && (a = 80);
                let r = e.getAttribute("data-bg"),
                  n = e.getAttribute("data-progress-color"),
                  l = e
                    .querySelector("[data-progress-value]")
                    .getAttribute("data-sign-value");
                (t = e.querySelector("[data-progress-value]")),
                  (s = Number(t.getAttribute("data-progress-value"))),
                  0 == s && (s = 100);
                let o = setInterval(() => {
                  i++,
                    (t.textContent = l ? `${i} ${l}` : `${i}`),
                    (e.style.backgroundImage = n
                      ? `conic-gradient( ${n}, ${3.6 * i}deg,  ${r} 0deg)`
                      : `conic-gradient( #10e614, ${3.6 * i}deg,  ${r} 0deg)`),
                    (e.style.backgroundImage = r
                      ? `conic-gradient( ${n}, ${3.6 * i}deg,  ${r} 0deg)`
                      : `conic-gradient( #10e614, ${
                          3.6 * i
                        }deg,  #02a304 0deg)`),
                    i == s && clearInterval(o),
                    0 == Se && clearInterval(o);
                }, a);
              }))
          : (Se = !1));
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            r &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? n(e)
                  : l(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && r(t);
          let s = c(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    n(e),
                    e.addEventListener("click", l))
                  : (e.classList.remove("_spoller-init"),
                    n(e, !1),
                    e.removeEventListener("click", l));
            });
          }
          function n(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function l(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                r = s.closest("[data-spollers]"),
                n = !!r.hasAttribute("data-one-spoller");
              r.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && o(r),
                s.classList.toggle("_spoller-active"),
                ((e, t = 500) => {
                  e.hidden ? a(e, t) : i(e, t);
                })(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function o(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              i(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              m.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && m.validateInput(t));
          });
      })(),
      new Ee({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                a = !!s.hasAttribute("data-goto-header"),
                r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              p(i, a, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
