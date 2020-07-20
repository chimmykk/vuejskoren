(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        1001: function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "container"
                    }, [i("van-row", {
                        staticClass: "header",
                        attrs: {
                            type: "flex"
                        }
                    }, [i("van-col", {
                        staticClass: "header__noe",
                        attrs: {
                            span: "9"
                        }
                    }, [t._v(" " + t._s(t.lang.Period))]), t._v(" "), i("van-col", {
                        attrs: {
                            span: "5"
                        }
                    }, [t._v(t._s(t.lang.Price))]), t._v(" "), i("van-col", {
                        attrs: {
                            span: "5"
                        }
                    }, [t._v(t._s(t.lang.Number))]), t._v(" "), i("van-col", {
                        staticClass: "header__child",
                        attrs: {
                            span: "5"
                        }
                    }, [t._v(t._s(t.lang.Result))])], 1), t._v(" "), i("van-list", {
                        attrs: {
                            finished: t.finished,
                            "finished-text": t.word
                        },
                        on: {
                            load: t.loadCats
                        },
                        model: {
                            value: t.loading,
                            callback: function(e) {
                                t.loading = e
                            },
                            expression: "loading"
                        }
                    }, t._l(t.items.rows, (function(e) {
                        return i("van-row", {
                            key: e.id,
                            staticClass: "content",
                            attrs: {
                                type: "flex",
                                justify: "center"
                            }
                        }, [i("van-col", {
                            staticClass: "header__noe",
                            attrs: {
                                span: "9"
                            }
                        }, [t._v(t._s(e.period))]), t._v(" "), i("van-col", {
                            attrs: {
                                span: "5"
                            }
                        }, [t._v(t._s(e.openPrice))]), t._v(" "), i("van-col", {
                            attrs: {
                                span: "5"
                            }
                        }, [e.openPrice % 2 == 0 ? i("b", {
                            staticClass: "conten__aneven"
                        }, [t._v(t._s(t.getNumber(e.openPrice)))]) : i("b", {
                            staticClass: "content__anodd"
                        }, [t._v(t._s(t.getNumber(e.openPrice)))])]), t._v(" "), i("van-col", {
                            staticClass: "header__child point",
                            attrs: {
                                span: "5"
                            }
                        }, [i("div", {
                            staticClass: "point-box"
                        }, [e.openPrice % 2 == 1 ? i("div", {
                            staticClass: "point-box__anodd"
                        }) : i("div", {
                            staticClass: "point-box__aneven"
                        }), t._v(" "), e.openPrice % 5 == 0 ? i("div", {
                            staticClass: "point-box__aliquot"
                        }) : i("div", {
                            staticClass: "point-box__add"
                        })])])], 1)
                    })), 1)], 1)
                },
                a = [];
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            }))
        },
        619: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(991),
                a = i(789);
            for (var s in a) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(s);
            i(920);
            var r = i(38),
                o = Object(r.a)(a.default, n.a, n.b, !1, null, "5222ea46", null);
            o.options.__file = "paritycat.vue", e.default = o.exports
        },
        620: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(993),
                a = i(795);
            for (var s in a) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(s);
            i(922);
            var r = i(38),
                o = Object(r.a)(a.default, n.a, n.b, !1, null, "74a8ddbc", null);
            o.options.__file = "parityindex.vue", e.default = o.exports
        },
        621: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(995),
                a = i(801);
            for (var s in a) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(s);
            i(924);
            var r = i(38),
                o = Object(r.a)(a.default, n.a, n.b, !1, null, "094e167a", null);
            o.options.__file = "tran.vue", e.default = o.exports
        },
        789: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(790),
                a = i.n(n);
            for (var s in n) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            e.default = a.a
        },
        790: function(t, e, i) {
            "use strict";
            var n, a = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                s = this && this.__decorate || function(t, e, i, n) {
                    var a, s = arguments.length,
                        r = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n);
                    else
                        for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(e, i, r) : a(e, i)) || r);
                    return s > 3 && r && Object.defineProperty(e, i, r), r
                },
                r = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(i(4)),
                l = r(i(94)),
                c = r(i(851)),
                u = i(130),
                d = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.lang = e.$lang.pages.odeal, e.tag = 0, e.type = 0, e.name = "", e.inited = !1, e
                    }
                    return a(e, t), e.prototype.init = function() {
                        var t = this;
                        t.$route.query.type && (t.type = Number(t.$route.query.type)), u.parity.getParitySetting().then((function(e) {
                            test(e) && (0 == t.type ? t.name = e.value.defaultName : 1 == t.type ? t.name = e.value.plusAName : 2 == t.type ? t.name = e.value.plusBName : 3 == t.type ? t.name = e.value.plusCName : 4 == t.type && (t.name = e.value.plusDName), t.inited = !0)
                        }))
                    }, e = s([l.default], e)
                }(o.default.extend({
                    components: {
                        "x-paritycat": c.default
                    }
                }));
            e.default = d
        },
        791: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(792),
                a = i.n(n);
            for (var s in n) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            e.default = a.a
        },
        792: function(t, e, i) {
            "use strict";
            var n, a = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                s = this && this.__decorate || function(t, e, i, n) {
                    var a, s = arguments.length,
                        r = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n);
                    else
                        for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(e, i, r) : a(e, i)) || r);
                    return s > 3 && r && Object.defineProperty(e, i, r), r
                },
                r = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                    var n = Array(t),
                        a = 0;
                    for (e = 0; e < i; e++)
                        for (var s = arguments[e], r = 0, o = s.length; r < o; r++, a++) n[a] = s[r];
                    return n
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(131),
                l = i(130),
                c = i(95),
                u = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.lang = e.$lang.pages.orderlist, e.loading = !1, e.loadPreing = !1, e.finished = !1, e.prePeriod = "", e.newPeriod = "", e.now = new Date, e.args = {
                            pageNumber: 1,
                            pageSize: 10
                        }, e.word = "", e.items = {
                            total: 0,
                            rows: []
                        }, e.setTimeOutMethod = null, e
                    }
                    return a(e, t), e.prototype.init = function() {
                        this.isFixed || (this.word = "no more")
                    }, e.prototype.setModels = function(t) {
                        var e = this,
                            i = t.values;
                        e.now = t.time, e.prePeriod = t.prePeriod, e.newPeriod || (e.newPeriod = i.rows[0].period), e.items.total = i.total;
                        for (var n = 0; n < i.rows.length;) e.items.rows.some((function(t) {
                            return t.period == i.rows[n].period
                        })) ? o.Vue.delete(i.rows, n) : n++;
                        e.items.rows = r(e.items.rows, i.rows);
                        var a = !1;
                        e.newPeriod != i.rows[0].period && (e.newPeriod = i.rows[0].period, a = !0), e.args.pageNumber += 1, e.items.rows.length == e.items.total ? e.finished = !0 : e.finished = !1, e.isFixed && (e.finished = !0), e.loading = !1, e.$emit("getNewOpenCat", {
                            typeChange: !0,
                            change: a
                        })
                    }, e.prototype.getCurrentCat = function() {
                        return c.storing("currentCatCache" + this.parityType).get.call(this)
                    }, e.prototype.loadCats = function() {
                        var t = this,
                            e = !t.isFixed;
                        if (t.isFixed) {
                            t.finished = !0;
                            var i = t.getCurrentCat();
                            i ? t.setModels(i.model) : e = !0
                        }
                        e && l.parity.findModelsAsync(t.args, t.isFixed, t.now, t.parityType).then((function(e) {
                            test(e) ? (null == e.value && (t.setTimeOutMethod = setTimeout((function() {
                                t.loadCats()
                            }), 1e3)), t.setModels(e.value)) : t.loading = !1
                        }))
                    }, e.prototype.getNumber = function(t) {
                        return t % 10
                    }, e.prototype.deinit = function() {
                        clearTimeout(this.setTimeOutMethod)
                    }, e = s([o.Component], e)
                }(o.Vue.extend({
                    props: {
                        tag: {
                            type: Number
                        },
                        isFixed: {
                            type: Boolean
                        },
                        parityType: {
                            type: Number,
                            default: 0
                        }
                    },
                    watch: {
                        tag: function() {
                            var t = this;
                            t.finished = !0, t.now = new Date, t.args = {
                                pageNumber: 1,
                                pageSize: 10
                            }, t.items = {
                                total: 0,
                                rows: []
                            }, t.loadCats()
                        }
                    }
                }));
            e.default = u
        },
        793: function(t, e, i) {},
        794: function(t, e, i) {},
        795: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(796),
                a = i.n(n);
            for (var s in n) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            e.default = a.a
        },
        796: function(t, e, i) {
            "use strict";
            var n, a = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                s = this && this.__decorate || function(t, e, i, n) {
                    var a, s = arguments.length,
                        r = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n);
                    else
                        for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(e, i, r) : a(e, i)) || r);
                    return s > 3 && r && Object.defineProperty(e, i, r), r
                },
                r = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(i(4)),
                l = r(i(94)),
                c = i(130),
                u = r(i(852)),
                d = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.lang = e.$lang.pages.odeal, e.tag = 0, e.balance = 0, e.payment = 0, e.name = "", e.type = 0, e.isOpen = !0, e.isWait = !1, e.inited = !1, e
                    }
                    return a(e, t), e.prototype.init = function() {
                        var t = this;
                        t.$route.query.type && (t.type = Number(t.$route.query.type)), c.parity.getMemberParityInfoAsync(t.type).then((function(e) {
                            t.balance = e.value.balance, t.payment = e.value.payment, t.name = e.value.name, t.inited = !0
                        }))
                    }, e.prototype.fn = function(t) {
                        this.isOpen = t
                    }, e = s([l.default], e)
                }(o.default.extend({
                    components: {
                        "x-parityorder": u.default
                    }
                }));
            e.default = d
        },
        797: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(798),
                a = i.n(n);
            for (var s in n) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            e.default = a.a
        },
        798: function(t, e, i) {
            "use strict";
            var n, a = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                s = this && this.__decorate || function(t, e, i, n) {
                    var a, s = arguments.length,
                        r = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n);
                    else
                        for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(e, i, r) : a(e, i)) || r);
                    return s > 3 && r && Object.defineProperty(e, i, r), r
                },
                r = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                    var n = Array(t),
                        a = 0;
                    for (e = 0; e < i; e++)
                        for (var s = arguments[e], r = 0, o = s.length; r < o; r++, a++) n[a] = s[r];
                    return n
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = o(i(4)),
                c = o(i(94)),
                u = i(130),
                d = o(i(2)),
                p = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.lang = e.$lang.pages.orderlist, e.symbol = e.$lang.pages.money, e.loading = !1, e.finished = !1, e.isNeedRefresh = !1, e.word = "no more", e.args = {
                            pageNumber: 1,
                            pageSize: 10,
                            isOpen: e.isOpen,
                            status: e.status,
                            memberId: ""
                        }, e.needLoadData = !1, e.relationProducts = [], e.inited = !1, e.items = {
                            total: 0,
                            rows: []
                        }, e.setTimeOutMethod = null, e
                    }
                    return a(e, t), e.prototype.getCurrentTime = function(t) {
                        return d.default(t).format("HH:mm")
                    }, e.prototype.init = function() {
                        var t = this;
                        u.parity.getRelationProducts().then((function(e) {
                            test(e), t.relationProducts = e.value
                        })), t.inited = !0, window.addEventListener("scroll", (function e() {
                            if (t.inited) {
                                if (window.scrollY < 150 || !t.needRefreshFunction) return;
                                t.needLoadData && t.tryRefresh()
                            } else window.removeEventListener("scroll", e), console.log("on scroll remove")
                        }))
                    }, e.prototype.deinit = function() {
                        this.needLoadData = !1, this.inited = !1, this.setTimeOutMethod && clearTimeout(this.setTimeOutMethod)
                    }, e.prototype.tryRefresh = function() {
                        this.needRefreshFunction.call(this, !0), this.needLoadData = !1
                    }, e.prototype.refresh = function(t) {
                        void 0 === t && (t = !1);
                        var e = this;
                        if (!0 !== t && !e.isDb && window.scrollY < 150) return e.needRefreshFunction = e.refresh, void(e.needLoadData = !0);
                        setTimeout((function() {
                            var t = e.args;
                            e.finished = !0, t.pageNumber = 1, u.parity.findParityOrderAsyc(t, e.parityType, e.isDb).then((function(t) {
                                if (test(t)) {
                                    var i = t.value.orders;
                                    if (1 == e.args.pageNumber && (e.isNeedRefresh = t.value.isNeedRefresh), e.isNeedRefresh) return e.setTimeOutMethod = setTimeout((function() {
                                        e.refresh()
                                    }), 5e3), void(e.items.rows.length == e.items.total ? e.finished = !0 : e.finished = !1);
                                    e.items.total = i.total, e.items.rows = i.rows, e.args.pageNumber += 1, e.items.rows.length == e.items.total ? e.finished = !0 : e.finished = !1, e.word = "no more", e.loading = !1
                                } else e.loading = !1
                            }))
                        }), e.isDb ? 100 : 888 * Math.random())
                    }, e.prototype.loadOrders = function(t) {
                        void 0 === t && (t = !1);
                        var e = this;
                        if (!0 !== t && !e.isDb && window.scrollY < 150) return e.needRefreshFunction = e.loadOrders, void(e.needLoadData = !0);
                        setTimeout((function() {
                            u.parity.findParityOrderAsyc(e.args, e.parityType, e.isDb).then((function(t) {
                                if (test(t)) {
                                    var i = t.value.orders;
                                    1 == e.args.pageNumber && (e.isNeedRefresh = t.value.isNeedRefresh), e.items.total = i.total, e.items.rows = r(e.items.rows, i.rows), e.args.pageNumber += 1, e.items.rows.length == e.items.total ? e.finished = !0 : e.finished = !1, e.word = "no more", e.loading = !1
                                } else e.loading = !1
                            }))
                        }), e.isDb ? 100 : 888 * Math.random())
                    }, e.prototype.toComplaint = function(t) {
                        this.$router.push("/complaint/manage?outId=" + t)
                    }, e.prototype.toPrePay = function(t) {
                        this.$router.push("/product/index?outId=" + t.id + "&type=" + this.parityType)
                    }, e.prototype.getShow = function(t) {
                        return this.relationProducts.findIndex((function(e) {
                            return e.money == t.joinMoney
                        })) >= 0
                    }, e = s([c.default], e)
                }(l.default.extend({
                    props: {
                        isDb: {
                            type: Boolean,
                            default: !1
                        },
                        tag: {
                            type: Number
                        },
                        refreshTag: {
                            type: Number
                        },
                        isOpen: {
                            type: Boolean
                        },
                        isWait: {
                            type: Boolean
                        },
                        hasSubmit: {},
                        status: {
                            type: Number
                        },
                        parityType: {
                            type: Number,
                            default: 0
                        }
                    },
                    watch: {
                        tag: function() {
                            this.finished = !0, this.args = {
                                pageNumber: 1,
                                pageSize: 10,
                                isOpen: this.isOpen,
                                status: this.status,
                                memberId: ""
                            }, this.items = {
                                total: 0,
                                rows: []
                            }, this.loadOrders()
                        },
                        isOpen: function() {
                            this.finished = !0, this.args = {
                                pageNumber: 1,
                                pageSize: 10,
                                isOpen: this.isOpen,
                                status: this.status,
                                memberId: ""
                            }, this.items = {
                                total: 0,
                                rows: []
                            }, this.loadOrders()
                        },
                        refreshTag: function() {
                            var t = this;
                            t.finished = !0, t.isNeedRefresh && setTimeout((function() {
                                t.refresh()
                            }), 5e3)
                        },
                        status: function() {
                            this.finished = !0, this.args = {
                                pageNumber: 1,
                                pageSize: 10,
                                isOpen: this.isOpen,
                                status: this.status,
                                memberId: ""
                            }, this.items = {
                                total: 0,
                                rows: []
                            }, this.loadOrders()
                        },
                        parityType: function() {
                            this.finished = !0, this.args = {
                                pageNumber: 1,
                                pageSize: 10,
                                isOpen: this.isOpen,
                                status: this.status,
                                memberId: ""
                            }, this.items = {
                                total: 0,
                                rows: []
                            }, this.loadOrders()
                        }
                    }
                }));
            e.default = p
        },
        799: function(t, e, i) {},
        800: function(t, e, i) {},
        801: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(802),
                a = i.n(n);
            for (var s in n) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }))
            }(s);
            e.default = a.a
        },
        802: function(t, e, i) {
            "use strict";
            var n, a = this && this.__extends || (n = function(t, e) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                }),
                s = this && this.__decorate || function(t, e, i, n) {
                    var a, s = arguments.length,
                        r = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, n);
                    else
                        for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(e, i, r) : a(e, i)) || r);
                    return s > 3 && r && Object.defineProperty(e, i, r), r
                },
                r = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(i(4)),
                l = r(i(94)),
                c = r(i(852)),
                u = r(i(851)),
                d = i(130),
                p = i(95),
                v = r(i(96)),
                m = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.lang = e.$lang.pages.booktran, e.reglang = e.$lang.pages.register, e.symbol = e.$lang.pages.money, e.timer = null, e.Pre = e.$lang.pages.orderlist, e.inited = !1, e.submiting = !1, e.balance = -1, e.payment = 0, e.checkPolicy = !1, e.showPolicy = !1, e.checkAgree = !0, e.agreeDisabled = !0, e.setting = new d.Models.ParitySettingModel, e.tag = 0, e.parityItem = {
                            period: "",
                            money: 0,
                            num: 0,
                            type: 0
                        }, e.showParityBox = !1, e.tag1 = 0, e.tag2 = 0, e.tag3 = 0, e.isWait = !1, e.type = 0, e.parityCat = new d.Models.CurrentApiParityCatModel, e.joinDisabledTag = !1, e.isEnd = !0, e.showRule = !1, e.showDialog = !1, e.hasOrder = !1, e.catTimer = null, e.loadPeriodSuccess = !1, e.sortType = 0, e.typeChangeing = !1, e
                    }
                    return a(e, t), Object.defineProperty(e.prototype, "siteName", {
                        get: function() {
                            return "Vilio"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.policyConfirm = function() {
                        this.showPolicy = !1, this.checkPolicy = this.checkAgree
                    }, e.prototype.created = function() {
                        this.type = this.parityIndex ? this.parityIndex : 0
                    }, e.prototype.init = function() {
                        var t = this,
                            e = this;
                        if (5 == e.identity.noviceTag && e.$router.back(), e.hasWaitOrder && (e.hasOrder = e.hasWaitOrder), "gooe" == this.siteName.toLowerCase() ? (e.type = 0, e.sortType = 0) : (e.type = 3, e.sortType = 1), e.loadPeriodSuccess = !0, d.parity.getParitySetting().then((function(i) {
                                test(i) && (e.setting = i.value, e.setting.isPlusCOpen || (e.type = 0), e.parityItem.num = 0, e.parityItem.money = e.setting.defaultTran.contracts[0].value, e.loadParityData(), t.optHandler({
                                    change: !0
                                }))
                            })), e.timer = null, "0" != e.identity.groupId) {
                            var i = (new Date).getTime() - Number(v.default.get("_SomulaTime"));
                            e.timer = setTimeout((function() {
                                t.$router.push("/home/searchsimula")
                            }), 6e5 - i)
                        }
                    }, e.prototype.beforeDestroy = function() {
                        clearTimeout(this.timer), clearTimeout(this.catTimer)
                    }, e.prototype.deinit = function() {
                        this.parityIndex = this.type, this.hasWaitOrder = this.hasOrder, this.timer && clearTimeout(this.timer), this.catTimer && clearTimeout(this.catTimer)
                    }, e.prototype.optHandler = function(t) {
                        var e = this;
                        t.change && (e.balance = -1, setTimeout((function() {
                            d.parity.getMemberParityInfoAsync(e.type).then((function(t) {
                                e.balance = t.value.balance, e.payment = t.value.payment
                            }))
                        }), 500 + 1e3 * Math.random()))
                    }, e.prototype.setCurrentCat = function(t) {
                        if (t.cat && !(t.cat.resetSecond <= 0 || t.cat.resetSecond >= 180)) {
                            var e = (new Date).getTime() + 1e3 * (t.cat.resetSecond < 1 ? 1 : t.cat.resetSecond) - 500,
                                i = {
                                    period: t.cat.period,
                                    nextRefreshTime: e,
                                    model: t.model
                                };
                            p.storing("currentCatCache" + this.type).set.call(this, i)
                        }
                    }, e.prototype.getCurrentCat = function() {
                        return p.storing("currentCatCache" + this.type).get.call(this)
                    }, e.prototype.nextLoadCat = function() {
                        var t = this,
                            e = this;
                        d.parity.getParityCatNewAsync(e.type).then((function(i) {
                            if (test(i)) {
                                if (null == i.value || !i.value.cat || i.value.cat.resetSecond < 2 || i.value.cat.resetSecond > 180) return e.loadPeriodSuccess = !1, e.catTimer && clearTimeout(t.catTimer), void(e.catTimer = setTimeout((function() {
                                    return e.nextLoadCat()
                                }), 1e3));
                                e.setCurrentCat(i.value), clearTimeout(e.catTimer), e.parityCat.resetSecond = i.value.cat.resetSecond, e.parityCat.period = i.value.cat.period, e.parityItem.period = i.value.cat.period, e.isEnd = !1, e.tag1++, e.loadPeriodSuccess = !0, e.inited ? (e.joinDisabledTag = !1, msg.loadingClose()) : (e.inited = !0, e.hasReadNotics || e.$nextTick(e.showNotice))
                            } else e.typeChangeing = !1
                        }))
                    }, e.prototype.loadParityData = function() {
                        var t = this,
                            e = (new Date).getTime(),
                            i = t.getCurrentCat();
                        if (i && i.nextRefreshTime >= e) {
                            var n = (i.nextRefreshTime - e) / 1e3;
                            t.parityCat.resetSecond = n, t.parityCat.period = i.period, t.parityItem.period = i.period, t.isEnd = !1, t.loadPeriodSuccess = !0, t.tag1++, t.inited ? t.joinDisabledTag = !1 : (t.inited = !0, t.hasReadNotics || t.$nextTick(t.showNotice))
                        } else t.inited && msg.loading("loading", !0), setTimeout((function() {
                            return t.nextLoadCat()
                        }), 1e3 + 2e3 * Math.random())
                    }, e.prototype.showNotice = function() {}, e.prototype.hasRead = function() {
                        this.hasReadNotics = !0
                    }, e.prototype.showParityBuy = function(t, e) {
                        this.loadPeriodSuccess ? this.type == e && (this.parityItem.type = t, this.showParityBox = !0) : msg.error("Sorry,It`s loading now.")
                    }, e.prototype.showNext = function() {
                        this.isEnd = !0, this.showParityBox = !1, setTimeout(this.getNext, 1e3 * Math.random() + 4500 * Math.random())
                    }, e.prototype.setJoinTag = function() {
                        this.joinDisabledTag = !0, this.showParityBox = !1
                    }, e.prototype.setJoinTag1 = function(t) {
                        0 == t.minutes && t.seconds < 30 && (this.joinDisabledTag = !0, this.showParityBox = !1)
                    }, e.prototype.getNext = function() {
                        this.isWait = !0, this.joinDisabledTag = !0, this.loadParityData()
                    }, e.prototype.getNewOpenCat = function(t) {
                        var e = this;
                        t.change && this.hasOrder && (this.hasOrder = !1, this.tag3++, setTimeout((function() {
                            e.optHandler({
                                change: !0
                            })
                        }), 5e3 + 3e3 * Math.random())), t.typeChange && (this.typeChangeing = !1)
                    }, e.prototype.submitDefault = function() {
                        var t = this;
                        if (t.checkPolicy) {
                            if (t.loadPeriodSuccess && !t.submiting && -1 != t.balance)
                                if (t.parityItem.num * t.parityItem.money > t.balance) msg.error("Sorry, your balance is running low");
                                else if (0 == t.type)
                                if (t.setting.isDefaultControl && t.identity.tranLimit > 0 && t.identity.tranLimit < t.parityItem.money * t.parityItem.num) msg.error("Sorry,Your current maximum singal transaction amount is " + t.identity.tranLimit);
                                else if (t.setting.defaultTran.maxLimit > 0 && t.parityItem.num > t.setting.defaultTran.maxLimit) msg.error("Max number of single transaction order exceeding the limit(" + t.setting.defaultTran.maxLimit + ")");
                            else if (t.parityItem.money <= 0) msg.error("Please select Contract money");
                            else if (t.parityItem.num <= 0) msg.error("value error");
                            else {
                                if (t.submiting) return;
                                t.submiting = !0, msg.loading("loading", !0), d.parity.submitDefaultAsync(t.parityItem.period, t.parityItem.money, t.parityItem.num, t.parityItem.type).then((function(e) {
                                    if (!test(e)) return t.submiting = !1, void msg.loadingClose();
                                    msg.success("Successful!"), t.showParityBox = !1, t.submiting = !1, t.isWait = !1, t.tag2++, msg.loadingClose(), t.hasOrder ? t.balance -= t.parityItem.money * t.parityItem.num : (t.hasOrder = !0, t.$nextTick((function() {
                                        t.optHandler({
                                            change: !0
                                        })
                                    })))
                                }))
                            }
                        } else msg.info("Please agree to presale management rule first.")
                    }, e.prototype.submitPlusA = function() {
                        var t = this;
                        if (t.checkPolicy) {
                            if (t.loadPeriodSuccess && !t.submiting && -1 != t.balance)
                                if (t.parityItem.num * t.parityItem.money > t.balance) msg.error("Sorry, your balance is running low");
                                else if (1 == t.type)
                                if (t.setting.isPlusAControl && t.identity.tranLimit > 0 && t.identity.tranLimit < t.parityItem.money * t.parityItem.num) msg.error("Sorry,Your current maximum singal transaction amount is " + t.identity.tranLimit);
                                else if (t.setting.plusATran.maxLimit > 0 && t.parityItem.num > t.setting.plusATran.maxLimit) msg.error("Max number of single transaction order exceeding the limit(" + t.setting.plusATran.maxLimit + ")");
                            else if (t.parityItem.money <= 0) msg.error("Please select Contract money");
                            else if (t.parityItem.num <= 0) msg.error("value error");
                            else {
                                if (t.submiting) return;
                                t.submiting = !0, msg.loading("loading", !0), d.parity.submitPlusAAsync(t.parityItem.period, t.parityItem.money, t.parityItem.num, t.parityItem.type).then((function(e) {
                                    if (!test(e)) return t.submiting = !1, void msg.loadingClose();
                                    msg.success("Successful!"), t.showParityBox = !1, t.submiting = !1, t.isWait = !1, t.tag2++, msg.loadingClose(), t.hasOrder ? t.balance -= t.parityItem.money * t.parityItem.num : (t.hasOrder = !0, t.$nextTick((function() {
                                        t.optHandler({
                                            change: !0
                                        })
                                    })))
                                }))
                            }
                        } else msg.info("Please agree to presale management rule first.")
                    }, e.prototype.submitPlusB = function() {
                        var t = this;
                        if (t.checkPolicy) {
                            if (t.loadPeriodSuccess && !t.submiting && -1 != t.balance)
                                if (t.parityItem.num * t.parityItem.money > t.balance) msg.error("Sorry, your balance is running low");
                                else if (2 == t.type)
                                if (t.setting.isPlusBControl && t.identity.tranLimit > 0 && t.identity.tranLimit < t.parityItem.money * t.parityItem.num) msg.error("Sorry,Your current maximum singal transaction amount is " + t.identity.tranLimit);
                                else if (t.setting.plusBTran.maxLimit > 0 && t.parityItem.num > t.setting.plusBTran.maxLimit) msg.error("Max number of single transaction order exceeding the limit(" + t.setting.plusBTran.maxLimit + ")");
                            else if (t.parityItem.money <= 0) msg.error("Please select Contract money");
                            else if (t.parityItem.num <= 0) msg.error("value error");
                            else {
                                if (t.submiting) return;
                                t.submiting = !0, msg.loading("loading", !0), d.parity.submitPlusBAsync(t.parityItem.period, t.parityItem.money, t.parityItem.num, t.parityItem.type).then((function(e) {
                                    if (!test(e)) return t.submiting = !1, void msg.loadingClose();
                                    msg.success("Successful!"), t.showParityBox = !1, t.submiting = !1, t.isWait = !1, t.tag2++, msg.loadingClose(), t.hasOrder ? t.balance -= t.parityItem.money * t.parityItem.num : (t.hasOrder = !0, t.$nextTick((function() {
                                        t.optHandler({
                                            change: !0
                                        })
                                    })))
                                }))
                            }
                        } else msg.info("Please agree to presale management rule first.")
                    }, e.prototype.submitPlusC = function() {
                        var t = this;
                        if (t.checkPolicy) {
                            if (t.loadPeriodSuccess && !t.submiting && -1 != t.balance)
                                if (t.parityItem.num * t.parityItem.money > t.balance) msg.error("Sorry, your balance is running low");
                                else if (3 == t.type)
                                if (t.setting.isPlusCControl && t.identity.tranLimit > 0 && t.identity.tranLimit < t.parityItem.money * t.parityItem.num) msg.error("Sorry,Your current maximum singal transaction amount is " + t.identity.tranLimit);
                                else if (t.setting.plusCTran.maxLimit > 0 && t.parityItem.num > t.setting.plusCTran.maxLimit) msg.error("Max number of single transaction order exceeding the limit(" + t.setting.plusCTran.maxLimit + ")");
                            else if (t.parityItem.money <= 0) msg.error("Please select Contract money");
                            else if (t.parityItem.num <= 0) msg.error("value error");
                            else {
                                if (t.submiting) return;
                                t.submiting = !0, msg.loading("loading", !0), d.parity.submitPlusCAsync(t.parityItem.period, t.parityItem.money, t.parityItem.num, t.parityItem.type).then((function(e) {
                                    if (!test(e)) return t.submiting = !1, void msg.loadingClose();
                                    msg.success("Successful!"), t.showParityBox = !1, t.submiting = !1, t.isWait = !1, t.tag2++, msg.loadingClose(), t.hasOrder ? t.balance -= t.parityItem.money * t.parityItem.num : (t.hasOrder = !0, t.$nextTick((function() {
                                        t.optHandler({
                                            change: !0
                                        })
                                    })))
                                }))
                            }
                        } else msg.info("Please agree to presale management rule first.")
                    }, e.prototype.toRecharge = function() {
                        this.$router.push("/finance/recharge")
                    }, e.prototype.toCat = function() {
                        this.$router.push("/parity/paritycat?type=" + this.type)
                    }, e.prototype.toOrder = function() {
                        this.$router.push("/parity/parityindex?type=" + this.type)
                    }, e.prototype.showMsg = function() {
                        msg.info("Coming soon...")
                    }, e.prototype.typeChange = function(t) {
                        var e = this;
                        e.type != t && (e.typeChangeing || (e.typeChangeing = !0, e.type = t, e.$nextTick((function() {
                            e.loadParityData()
                        }))))
                    }, e = s([l.default], e)
                }(o.default.extend({
                    computed: {
                        hasReadNotics: p.storing("hasReadNotics"),
                        identity: p.sharing("identity"),
                        parityIndex: p.storing("parityIndex"),
                        hasWaitOrder: p.storing("hasParityWaitOrder")
                    },
                    components: {
                        "x-parityorder": c.default,
                        "x-paritycat": u.default
                    },
                    watch: {
                        showParityBox: function() {
                            var t = this;
                            t.showParityBox || (0 == t.type ? (t.parityItem.money = t.setting.defaultTran.contracts[0].value, t.parityItem.num = 1) : 1 == t.type ? (t.parityItem.money = t.setting.plusATran.contracts[0].value, t.parityItem.num = 1) : 2 == t.type ? (t.parityItem.money = t.setting.plusBTran.contracts[0].value, t.parityItem.num = 1) : 3 == t.type && (t.parityItem.money = t.setting.plusCTran.contracts[0].value, t.parityItem.num = 1))
                        }
                    }
                }));
            e.default = m
        },
        803: function(t, e, i) {},
        851: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(1001),
                a = i(791);
            for (var s in a) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(s);
            i(919);
            var r = i(38),
                o = Object(r.a)(a.default, n.a, n.b, !1, null, "184e49fd", null);
            o.options.__file = "paritycat.vue", e.default = o.exports
        },
        852: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(943),
                a = i(797);
            for (var s in a) "default" !== s && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(s);
            i(921);
            var r = i(38),
                o = Object(r.a)(a.default, n.a, n.b, !1, null, null, null);
            o.options.__file = "parityorder.vue", e.default = o.exports
        },
        919: function(t, e, i) {
            "use strict";
            var n = i(793);
            i.n(n).a
        },
        920: function(t, e, i) {
            "use strict";
            var n = i(794);
            i.n(n).a
        },
        921: function(t, e, i) {
            "use strict";
            var n = i(799);
            i.n(n).a
        },
        922: function(t, e, i) {
            "use strict";
            var n = i(800);
            i.n(n).a
        },
        923: function(t, e, i) {
            t.exports = i.p + "assets/images/well.png?0191d30bd0a64456bcb75038ff236137"
        },
        924: function(t, e, i) {
            "use strict";
            var n = i(803);
            i.n(n).a
        },
        943: function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "order-content"
                    }, [i("van-list", {
                        attrs: {
                            finished: t.finished,
                            "finished-text": t.word
                        },
                        on: {
                            load: t.loadOrders
                        },
                        model: {
                            value: t.loading,
                            callback: function(e) {
                                t.loading = e
                            },
                            expression: "loading"
                        }
                    }, t._l(t.items.rows, (function(e) {
                        return i("div", {
                            key: e.id,
                            staticClass: "order-box"
                        }, [i("div", {
                            staticClass: "top"
                        }, [i("em", [t._v(t._s(t.symbol.money))]), t._v(" "), i("span", {
                            staticClass: "money"
                        }, [t._v(t._s(e.joinMoney * e.num))]), t._v(" "), i("div", [t._v("\n                    " + t._s(t.lang.CONTRACTMONEY) + "   ")]), t._v(" "), i("span", {
                            staticClass: "time"
                        }, [t._v("\n                    " + t._s(t.lang.CreateTime) + " " + t._s(t._f("date")(e.createTime, "minute")) + "\n\n                ")])]), t._v(" "), i("div", {
                            staticClass: "other"
                        }, [i("div", {
                            staticClass: "left"
                        }, [i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Period))]), t._v(" "), i("b", [t._v(t._s(e.period))])]), t._v(" "), i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Status))]), t._v(" "), 0 == e.status ? i("b", [t._v(t._s(t.lang.Wait))]) : -1 == e.status ? i("b", {
                            staticStyle: {
                                color: "#f52926"
                            }
                        }, [t._v(t._s(t.lang.Fail))]) : 1 == e.status ? i("b", {
                            staticStyle: {
                                color: "#1eb83f"
                            }
                        }, [t._v(t._s(t.lang.Success))]) : t._e()]), t._v(" "), 0 != e.status ? i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Open))]), t._v(" "), i("b", [t._v(t._s(e.openPrice))])]) : i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.OpenTime))]), t._v(" "), i("b", [t._v(t._s(t.getCurrentTime(e.openTime)))])]), t._v(" "), 0 != e.status ? i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Result))]), t._v(" "), e.openNumber % 2 == 0 ? i("b", {
                            staticStyle: {
                                color: "#f52926"
                            }
                        }, [i("b", {
                            staticStyle: {
                                color: "#007acc"
                            }
                        }, [t._v(t._s(e.openPrice % 10))]), t._v("\n                            " + t._s(t.lang.Red) + "\n                            "), e.isViolet ? i("b", {
                            staticStyle: {
                                color: "#e839f1"
                            }
                        }, [t._v(t._s(t.lang.Violet))]) : t._e()]) : i("b", {
                            staticStyle: {
                                color: "#1eb83f"
                            }
                        }, [i("b", {
                            staticStyle: {
                                color: "#007acc"
                            }
                        }, [t._v(t._s(e.openPrice % 10))]), t._v("\n                            " + t._s(t.lang.Green) + "\n                            "), e.isViolet ? i("b", {
                            staticStyle: {
                                color: "#e839f1"
                            }
                        }, [t._v(t._s(t.lang.Violet))]) : t._e()])]) : t._e()]), t._v(" "), i("div", {
                            staticClass: "right"
                        }, [i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Select))]), t._v(" "), 0 == e.joinParity ? i("b", {
                            staticStyle: {
                                color: "#f52926"
                            }
                        }, [t._v(t._s(t.lang.Red))]) : 1 == e.joinParity ? i("b", {
                            staticStyle: {
                                color: "#1eb83f"
                            }
                        }, [t._v(t._s(t.lang.Green))]) : e.joinParity >= 2 && e.joinParity < 12 ? i("b", {
                            staticStyle: {
                                color: "#007acc"
                            }
                        }, [t._v(t._s(e.joinParity % 10))]) : 12 == e.joinParity ? i("b", {
                            staticStyle: {
                                color: "#ea3af0"
                            }
                        }, [t._v(t._s(t.lang.Violet))]) : t._e()]), t._v(" "), i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Delivery))]), t._v(" "), i("b", [t._v(t._s((e.joinMoney - e.serviceFees) * e.num))])]), t._v(" "), i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Fee))]), t._v(" "), i("b", [t._v(t._s(e.serviceFees * e.num))])]), t._v(" "), e.amount ? i("div", {
                            staticClass: "item flex-box"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Amount))]), t._v(" "), e.amount > 0 ? i("b", {
                            staticStyle: {
                                color: "#1eb83f"
                            }
                        }, [t._v("+" + t._s(e.amount))]) : i("b", {
                            staticStyle: {
                                color: "#f52926"
                            }
                        }, [t._v(t._s(e.amount))])]) : t._e()])]), t._v(" "), i("div", {
                            staticClass: "end-time"
                        }, [t.getShow(e) ? i("van-button", {
                            attrs: {
                                type: "primary",
                                size: "small"
                            },
                            on: {
                                click: function(i) {
                                    return t.toPrePay(e)
                                }
                            }
                        }, [t._v(t._s(t.lang.PrePay) + "  >")]) : t._e(), t._v(" "), i("van-button", {
                            attrs: {
                                type: "default",
                                size: "small"
                            },
                            on: {
                                click: function(i) {
                                    return t.toComplaint(e.id)
                                }
                            }
                        }, [t._v(t._s(t.lang.Complaint) + "  >")])], 1), t._v(" "), 0 != e.status ? i("div", {
                            staticClass: "end-time"
                        }, [i("span", {
                            staticClass: "auto"
                        }, [t._v(t._s(t.lang.Endtime) + " " + t._s(t._f("date")(e.statusChangedTime, "minute")))])]) : t._e()])
                    })), 0)], 1)
                },
                a = [];
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            }))
        },
        991: function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.inited ? i("div", [i("van-nav-bar", {
                        attrs: {
                            title: t.name + t.lang.Record,
                            "left-arrow": "",
                            border: !1
                        },
                        on: {
                            "click-left": function(e) {
                                return t.$router.back()
                            }
                        }
                    }), t._v(" "), i("x-paritycat", {
                        attrs: {
                            tag: t.tag,
                            parityType: t.type,
                            isFixed: !1
                        }
                    })], 1) : t._e()
                },
                a = [];
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            }))
        },
        993: function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.inited ? i("div", [i("van-nav-bar", {
                        attrs: {
                            title: t.name + t.lang.order,
                            "left-arrow": "",
                            border: !1
                        },
                        on: {
                            "click-left": function(e) {
                                return t.$router.back()
                            }
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "order-outer-content"
                    }, [i("div", {
                        staticClass: "top-selete"
                    }, [i("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: !t.isOpen
                        },
                        on: {
                            click: function(e) {
                                return t.fn(!1)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.lang.WaitOrder) + "\n            ")]), t._v(" "), i("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: t.isOpen
                        },
                        on: {
                            click: function(e) {
                                return t.fn(!0)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.lang.historicalorder) + "\n            ")])]), t._v(" "), i("div", {
                        staticClass: "reservation-chunk"
                    }, [i("div", {
                        staticClass: "reservation-chunk-sub"
                    }, [i("div", {
                        staticClass: "reservation-chunk-sub-title"
                    }, [t._v("\n                    " + t._s(t.lang.Available) + "\n                ")]), t._v(" "), i("div", {
                        staticClass: "reservation-chunk-sub-num"
                    }, [t._v("\n                    " + t._s(t.balance) + "\n                ")])]), t._v(" "), i("div", {
                        staticClass: "reservation-chunk-sub"
                    }, [i("div", {
                        staticClass: "reservation-chunk-sub-title"
                    }, [t._v("\n                    " + t._s(t.lang.WaitingPayment) + "\n                ")]), t._v(" "), i("div", {
                        staticClass: "reservation-chunk-sub-num"
                    }, [t._v("\n                    " + t._s(t.payment) + "\n                ")])])])]), t._v(" "), i("x-parityorder", {
                        attrs: {
                            status: null,
                            isDb: !0,
                            tag: t.tag,
                            parityType: t.type,
                            isWait: t.isWait,
                            isOpen: t.isOpen
                        }
                    })], 1) : t._e()
                },
                a = [];
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            }))
        },
        995: function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "transcation-content"
                    }, [n("div", {
                        staticClass: "my"
                    }, [n("div", {
                        staticClass: "top"
                    }, [n("div", {
                        staticClass: "left"
                    }, [n("div", [t._v("\n                    " + t._s(t.lang.AvailableBalance) + "\n                ")]), t._v(" "), n("em", [t._v(t._s(t.symbol.money))]), t.balance < 0 ? n("span", {
                        staticStyle: {
                            color: "cadetblue"
                        }
                    }, [t._v("loading")]) : n("span", [t._v(t._s(t.balance.toFixed(2)))])]), t._v(" "), n("div", {
                        staticClass: "right"
                    }, [n("button", {
                        on: {
                            click: t.toRecharge
                        }
                    }, [t._v(t._s(t.lang.Recharge) + "  >")])])]), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [
                        [n("span", [t._v("No."), t.inited ? n("span", [t._v(t._s(t.identity.id))]) : t._e()])], t._v(" "), n("van-button", {
                            staticClass: "rule",
                            attrs: {
                                icon: "description",
                                type: "default",
                                size: "mini"
                            },
                            on: {
                                click: function(e) {
                                    t.showRule = !0
                                }
                            }
                        }, [t._v(t._s(t.lang.Rule))])
                    ], 2)]), t._v(" "), n("div", {
                        staticClass: "kline"
                    }, [n("div", [n("div", {
                        staticClass: "top-selete"
                    }, [t.setting.isPlusCOpen && 1 == t.sortType ? n("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: 3 == t.type
                        },
                        on: {
                            click: function(e) {
                                return t.typeChange(3)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.setting.plusCName) + "\n                ")]) : t._e(), t._v(" "), n("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: 0 == t.type
                        },
                        on: {
                            click: function(e) {
                                return t.typeChange(0)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.setting.defaultName) + "\n                ")]), t._v(" "), t.setting.isPlusAOpen ? n("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: 1 == t.type
                        },
                        on: {
                            click: function(e) {
                                return t.typeChange(1)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.setting.plusAName) + "\n                ")]) : t._e(), t._v(" "), t.setting.isPlusBOpen ? n("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: 2 == t.type
                        },
                        on: {
                            click: function(e) {
                                return t.typeChange(2)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.setting.plusBName) + "\n\n                ")]) : t._e(), t._v(" "), t.setting.isPlusCOpen && 0 == t.sortType ? n("div", {
                        staticClass: "top-selete-sub",
                        class: {
                            active: 3 == t.type
                        },
                        on: {
                            click: function(e) {
                                return t.typeChange(3)
                            }
                        }
                    }, [t._v("\n                    " + t._s(t.setting.plusCName) + "\n                ")]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "reservation-chunk"
                    }, [n("div", {
                        staticClass: "reservation-chunk-sub"
                    }, [n("div", {
                        staticClass: "reservation-chunk-sub-title"
                    }, [n("div", [t._v("\n                            " + t._s(t.lang.Period) + "\n                            "), t.type <= 2 ? n("img", {
                        staticStyle: {
                            width: "18px"
                        },
                        attrs: {
                            src: i(923)
                        }
                    }) : t._e()])]), t._v(" "), n("div", {
                        staticClass: "reservation-chunk-sub-num"
                    }, [t._v("\n                        " + t._s(t.parityCat.period) + "\n                    ")])]), t._v(" "), n("div", {
                        staticClass: "reservation-chunk-sub",
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, [n("div", {
                        staticClass: "reservation-chunk-sub-title"
                    }, [t._v("\n                        " + t._s(t.lang.CountDown) + "\n                    ")]), t._v(" "), n("div", {
                        staticClass: "reservation-chunk-sub-num"
                    }, [t.isEnd ? n("button", {
                        on: {
                            click: t.getNext
                        }
                    }, [t._v(t._s(t.lang.NextPeriod))]) : n("van-count-down", {
                        attrs: {
                            time: 1e3 * t.parityCat.resetSecond
                        },
                        on: {
                            finish: t.showNext,
                            change: t.setJoinTag1
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("div", {
                                    staticClass: "time"
                                }, [e.minutes >= 10 ? n("span", {
                                    staticClass: "time-sub"
                                }, [t._v(t._s(parseInt(e.minutes / 10)))]) : n("span", {
                                    staticClass: "time-sub"
                                }, [t._v("0")]), t._v(" "), n("span", {
                                    staticClass: "time-sub"
                                }, [t._v(t._s(e.minutes % 10))]), t._v(" "), n("span", {
                                    staticClass: "time-sub-dot"
                                }, [t._v(":")]), t._v(" "), e.seconds >= 10 ? n("span", {
                                    staticClass: "time-sub"
                                }, [t._v(t._s(parseInt(e.seconds / 10)))]) : n("span", {
                                    staticClass: "time-sub"
                                }, [t._v("0")]), t._v(" "), n("span", {
                                    staticClass: "time-sub"
                                }, [t._v(t._s(e.seconds % 10))])])]
                            }
                        }], null, !1, 627601015)
                    })], 1)])])])]), t._v(" "), 0 == t.type ? n("div", [n("div", {
                        staticClass: "kline"
                    }, [n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "order"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(1, 0)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Green))])]), t._v(" "), n("div", {
                        staticClass: "violet"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(12, 0)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Violet))])]), t._v(" "), n("div", {
                        staticClass: "sell"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(0, 0)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Red))])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(10, 0)
                            }
                        }
                    }, [t._v("0")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(11, 0)
                            }
                        }
                    }, [t._v("1")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(2, 0)
                            }
                        }
                    }, [t._v("2")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(3, 0)
                            }
                        }
                    }, [t._v("3")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(4, 0)
                            }
                        }
                    }, [t._v("4")])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(5, 0)
                            }
                        }
                    }, [t._v("5")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(6, 0)
                            }
                        }
                    }, [t._v("6")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(7, 0)
                            }
                        }
                    }, [t._v("7")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(8, 0)
                            }
                        }
                    }, [t._v("8")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(9, 0)
                            }
                        }
                    }, [t._v("9")])])])]), t._v(" "), t.inited ? n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v("\n                    " + t._s(t.setting.defaultName) + t._s(t.lang.Record) + "\n                ")]), t._v(" "), n("a", {
                        on: {
                            click: t.toCat
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("div", {
                        staticStyle: {
                            margin: "0 14px",
                            "text-align": "center"
                        }
                    }, [t.typeChangeing ? n("van-loading", {
                        attrs: {
                            type: "spinner",
                            size: "24px"
                        }
                    }) : t._e()], 1), t._v(" "), n("x-paritycat", {
                        attrs: {
                            tag: t.tag1,
                            isFixed: !0,
                            parityType: 0
                        },
                        on: {
                            getNewOpenCat: t.getNewOpenCat
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "thick-box"
                    }), t._v(" "), n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v(t._s(t.lang.My) + t._s(t.setting.defaultName) + t._s(t.lang.Order))]), t._v(" "), n("a", {
                        on: {
                            click: t.toOrder
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("x-parityorder", {
                        attrs: {
                            status: null,
                            tag: t.tag2,
                            idDb: !1,
                            parityType: 0,
                            isWait: t.isWait,
                            isOpen: null,
                            refreshTag: t.tag3
                        }
                    })], 1), t._v(" "), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.showParityBox,
                            callback: function(e) {
                                t.showParityBox = e
                            },
                            expression: "showParityBox"
                        }
                    }, [t.inited ? n("div", {
                        staticClass: "tranBox"
                    }, [n("div", {
                        staticClass: "top"
                    }, [t.parityItem.type < 2 ? n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:sell",
                            value: 0 == t.parityItem.type,
                            expression: "parityItem.type==0",
                            arg: "sell"
                        }],
                        staticClass: "box-pre-order"
                    }, [t._v("\n                        " + t._s(0 == t.parityItem.type ? t.Pre.Join + t.Pre.Red : t.Pre.Join + t.Pre.Green) + " " + t._s(t.setting.defaultName) + "\n                    ")]) : n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:violet",
                            value: 12 == t.parityItem.type,
                            expression: "parityItem.type==12",
                            arg: "violet"
                        }],
                        staticClass: "box-pre-number"
                    }, [t._v("\n                        " + t._s(12 == t.parityItem.type ? t.Pre.Join + t.Pre.Violet : t.Pre.Select + " " + t.parityItem.type % 10) + "\n                    ")]), t._v(" "), n("span", {
                        staticClass: "topGold"
                    }, [t._v(t._s(t.lang.Parity))])]), t._v(" "), n("div", {
                        staticClass: "tran"
                    }, [n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Contract))]), t._v(" "), n("span", [t._v(t._s(t.lang.Money))])]), t._v(" "), t._l(t.setting.defaultTran.contracts, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.money == e.value
                            },
                            attrs: {
                                disabled: t.setting.isDefaultControl && t.identity.tranLimit > 0 && e.value > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.money = e.value
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.value) + "\n                            ")])])
                    }))], 2), t._v(" "), n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Number))])]), t._v(" "), t._l(t.setting.defaultTran.numbers, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.num == e.number
                            },
                            attrs: {
                                disabled: t.setting.isDefaultControl && t.identity.tranLimit > 0 && e.number * t.parityItem.money > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.num = e.number
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.number) + "\n                            ")])])
                    }))], 2), t._v(" "), t.setting.defaultTran.maxLimit <= 0 ? n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            min: "1",
                            integer: "",
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), t.setting.isDefaultControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]) : n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            integer: "",
                            min: "1",
                            max: t.setting.defaultTran.maxLimit,
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [t._v(t._s(t.lang.Maxinumlowersingular) + t._s(t.setting.defaultTran.maxLimit) + " " + t._s(t.lang.hands))]), t._v(" "), t.setting.isDefaultControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-left": "12px"
                        }
                    }, [n("p", {
                        staticClass: "markedWords",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("label", [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checkPolicy,
                            expression: "checkPolicy"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checkPolicy) ? t._i(t.checkPolicy, null) > -1 : t.checkPolicy
                        },
                        on: {
                            change: function(e) {
                                var i = t.checkPolicy,
                                    n = e.target,
                                    a = !!n.checked;
                                if (Array.isArray(i)) {
                                    var s = t._i(i, null);
                                    n.checked ? s < 0 && (t.checkPolicy = i.concat([null])) : s > -1 && (t.checkPolicy = i.slice(0, s).concat(i.slice(s + 1)))
                                } else t.checkPolicy = a
                            }
                        }
                    }), t._v("\n                                " + t._s(t.reglang.Iagreethe)), n("a", {
                        staticStyle: {
                            "text-decoration": "none",
                            color: "#16743c"
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(e) {
                                t.showPolicy = !t.showPolicy
                            }
                        }
                    }, [t._v("Presale management rule")])])])])]), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [n("button", {
                        staticClass: "cancel",
                        on: {
                            click: function(e) {
                                t.showParityBox = !1
                            }
                        }
                    }, [t._v(t._s(t.lang.Cancel))]), t._v(" "), t.parityItem.type < 2 ? n("button", {
                        staticClass: "confirm",
                        class: {
                            order: 1 == t.parityItem.type
                        },
                        on: {
                            click: t.submitDefault
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")]) : n("button", {
                        staticClass: "confirmNumber",
                        class: {
                            violet: 12 == t.parityItem.type
                        },
                        on: {
                            click: t.submitDefault
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")])])]) : t._e()])], 1) : 1 == t.type ? n("div", [n("div", {
                        staticClass: "kline"
                    }, [n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "order"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(1, 1)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Green))])]), t._v(" "), n("div", {
                        staticClass: "violet"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(12, 1)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Violet))])]), t._v(" "), n("div", {
                        staticClass: "sell"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(0, 1)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Red))])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(10, 1)
                            }
                        }
                    }, [t._v("0")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(11, 1)
                            }
                        }
                    }, [t._v("1")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(2, 1)
                            }
                        }
                    }, [t._v("2")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(3, 1)
                            }
                        }
                    }, [t._v("3")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(4, 1)
                            }
                        }
                    }, [t._v("4")])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(5, 1)
                            }
                        }
                    }, [t._v("5")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(6, 1)
                            }
                        }
                    }, [t._v("6")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(7, 1)
                            }
                        }
                    }, [t._v("7")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(8, 1)
                            }
                        }
                    }, [t._v("8")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(9, 1)
                            }
                        }
                    }, [t._v("9")])])])]), t._v(" "), t.inited ? n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v("\n                    " + t._s(t.setting.plusAName) + t._s(t.lang.Record) + "\n                ")]), t._v(" "), n("a", {
                        on: {
                            click: t.toCat
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("div", {
                        staticStyle: {
                            margin: "0 14px",
                            "text-align": "center"
                        }
                    }, [t.typeChangeing ? n("van-loading", {
                        attrs: {
                            type: "spinner",
                            size: "24px"
                        }
                    }) : t._e()], 1), t._v(" "), n("x-paritycat", {
                        attrs: {
                            tag: t.tag1,
                            isFixed: !0,
                            parityType: 1
                        },
                        on: {
                            getNewOpenCat: t.getNewOpenCat
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "thick-box"
                    }), t._v(" "), n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v(t._s(t.lang.My) + t._s(t.setting.plusAName) + t._s(t.lang.Order))]), t._v(" "), n("a", {
                        on: {
                            click: t.toOrder
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("x-parityorder", {
                        attrs: {
                            status: null,
                            tag: t.tag2,
                            idDb: !1,
                            parityType: 1,
                            isWait: t.isWait,
                            isOpen: null,
                            refreshTag: t.tag3
                        }
                    })], 1), t._v(" "), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.showParityBox,
                            callback: function(e) {
                                t.showParityBox = e
                            },
                            expression: "showParityBox"
                        }
                    }, [t.inited ? n("div", {
                        staticClass: "tranBox"
                    }, [n("div", {
                        staticClass: "top"
                    }, [t.parityItem.type < 2 ? n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:sell",
                            value: 0 == t.parityItem.type,
                            expression: "parityItem.type==0",
                            arg: "sell"
                        }],
                        staticClass: "box-pre-order"
                    }, [t._v("\n                        " + t._s(0 == t.parityItem.type ? t.Pre.Join + t.Pre.Red : t.Pre.Join + t.Pre.Green) + " " + t._s(t.setting.plusAName) + "\n                    ")]) : n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:violet",
                            value: 12 == t.parityItem.type,
                            expression: "parityItem.type==12",
                            arg: "violet"
                        }],
                        staticClass: "box-pre-number"
                    }, [t._v("\n                        " + t._s(12 == t.parityItem.type ? t.Pre.Join + t.Pre.Violet : t.Pre.Select + " " + t.parityItem.type % 10) + "\n                    ")]), t._v(" "), n("span", {
                        staticClass: "topGold"
                    }, [t._v(t._s(t.lang.Parity))])]), t._v(" "), n("div", {
                        staticClass: "tran"
                    }, [n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Contract))]), t._v(" "), n("span", [t._v(t._s(t.lang.Money))])]), t._v(" "), t._l(t.setting.plusATran.contracts, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.money == e.value
                            },
                            attrs: {
                                disabled: t.setting.isPlusAControl && t.identity.tranLimit > 0 && e.value > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.money = e.value
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.value) + "\n                            ")])])
                    }))], 2), t._v(" "), n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Number))])]), t._v(" "), t._l(t.setting.plusATran.numbers, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.num == e.number
                            },
                            attrs: {
                                disabled: t.setting.isPlusAControl && t.identity.tranLimit > 0 && e.number * t.parityItem.money > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.num = e.number
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.number) + "\n                            ")])])
                    }))], 2), t._v(" "), t.setting.plusATran.maxLimit <= 0 ? n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            min: "1",
                            integer: "",
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), t.setting.isPlusAControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]) : n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            integer: "",
                            min: "1",
                            max: t.setting.plusATran.maxLimit,
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [t._v(t._s(t.lang.Maxinumlowersingular) + t._s(t.setting.plusATran.maxLimit) + " " + t._s(t.lang.hands))]), t._v(" "), t.setting.isPlusAControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-left": "12px"
                        }
                    }, [n("p", {
                        staticClass: "markedWords",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("label", [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checkPolicy,
                            expression: "checkPolicy"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checkPolicy) ? t._i(t.checkPolicy, null) > -1 : t.checkPolicy
                        },
                        on: {
                            change: function(e) {
                                var i = t.checkPolicy,
                                    n = e.target,
                                    a = !!n.checked;
                                if (Array.isArray(i)) {
                                    var s = t._i(i, null);
                                    n.checked ? s < 0 && (t.checkPolicy = i.concat([null])) : s > -1 && (t.checkPolicy = i.slice(0, s).concat(i.slice(s + 1)))
                                } else t.checkPolicy = a
                            }
                        }
                    }), t._v("\n                                " + t._s(t.reglang.Iagreethe)), n("a", {
                        staticStyle: {
                            "text-decoration": "none",
                            color: "#16743c"
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(e) {
                                t.showPolicy = !t.showPolicy
                            }
                        }
                    }, [t._v("Presale management rule")])])])])]), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [n("button", {
                        staticClass: "cancel",
                        on: {
                            click: function(e) {
                                t.showParityBox = !1
                            }
                        }
                    }, [t._v(t._s(t.lang.Cancel))]), t._v(" "), t.parityItem.type < 2 ? n("button", {
                        staticClass: "confirm",
                        class: {
                            order: 1 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusA
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")]) : n("button", {
                        staticClass: "confirmNumber",
                        class: {
                            violet: 12 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusA
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")])])]) : t._e()])], 1) : 2 == t.type ? n("div", [n("div", {
                        staticClass: "kline"
                    }, [n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "order"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(1, 2)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Green))])]), t._v(" "), n("div", {
                        staticClass: "violet"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(12, 2)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Violet))])]), t._v(" "), n("div", {
                        staticClass: "sell"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(0, 2)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Red))])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(10, 2)
                            }
                        }
                    }, [t._v("0")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(11, 2)
                            }
                        }
                    }, [t._v("1")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(2, 2)
                            }
                        }
                    }, [t._v("2")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(3, 2)
                            }
                        }
                    }, [t._v("3")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(4, 2)
                            }
                        }
                    }, [t._v("4")])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(5, 2)
                            }
                        }
                    }, [t._v("5")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(6, 2)
                            }
                        }
                    }, [t._v("6")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(7, 2)
                            }
                        }
                    }, [t._v("7")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(8, 2)
                            }
                        }
                    }, [t._v("8")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(9, 2)
                            }
                        }
                    }, [t._v("9")])])])]), t._v(" "), t.inited ? n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v("\n                    " + t._s(t.setting.plusBName) + t._s(t.lang.Record) + "\n                ")]), t._v(" "), n("a", {
                        on: {
                            click: t.toCat
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("div", {
                        staticStyle: {
                            margin: "0 14px",
                            "text-align": "center"
                        }
                    }, [t.typeChangeing ? n("van-loading", {
                        attrs: {
                            type: "spinner",
                            size: "24px"
                        }
                    }) : t._e()], 1), t._v(" "), n("x-paritycat", {
                        attrs: {
                            tag: t.tag1,
                            isFixed: !0,
                            parityType: 2
                        },
                        on: {
                            getNewOpenCat: t.getNewOpenCat
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "thick-box"
                    }), t._v(" "), n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v(t._s(t.lang.My) + t._s(t.setting.plusBName) + t._s(t.lang.Order))]), t._v(" "), n("a", {
                        on: {
                            click: t.toOrder
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("x-parityorder", {
                        attrs: {
                            status: null,
                            tag: t.tag2,
                            idDb: !1,
                            parityType: 2,
                            isWait: t.isWait,
                            isOpen: null,
                            refreshTag: t.tag3
                        }
                    })], 1), t._v(" "), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.showParityBox,
                            callback: function(e) {
                                t.showParityBox = e
                            },
                            expression: "showParityBox"
                        }
                    }, [t.inited ? n("div", {
                        staticClass: "tranBox"
                    }, [n("div", {
                        staticClass: "top"
                    }, [t.parityItem.type < 2 ? n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:sell",
                            value: 0 == t.parityItem.type,
                            expression: "parityItem.type==0",
                            arg: "sell"
                        }],
                        staticClass: "box-pre-order"
                    }, [t._v("\n                        " + t._s(0 == t.parityItem.type ? t.Pre.Join + t.Pre.Red : t.Pre.Join + t.Pre.Green) + " " + t._s(t.setting.plusBName) + "\n                    ")]) : n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:violet",
                            value: 12 == t.parityItem.type,
                            expression: "parityItem.type==12",
                            arg: "violet"
                        }],
                        staticClass: "box-pre-number"
                    }, [t._v("\n                        " + t._s(12 == t.parityItem.type ? t.Pre.Join + t.Pre.Violet : t.Pre.Select + " " + t.parityItem.type % 10) + "\n                    ")]), t._v(" "), n("span", {
                        staticClass: "topGold"
                    }, [t._v(t._s(t.lang.Parity))])]), t._v(" "), n("div", {
                        staticClass: "tran"
                    }, [n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Contract))]), t._v(" "), n("span", [t._v(t._s(t.lang.Money))])]), t._v(" "), t._l(t.setting.plusBTran.contracts, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.money == e.value
                            },
                            attrs: {
                                disabled: t.setting.isPlusBControl && t.identity.tranLimit > 0 && e.value > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.money = e.value
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.value) + "\n                            ")])])
                    }))], 2), t._v(" "), n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Number))])]), t._v(" "), t._l(t.setting.plusBTran.numbers, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.num == e.number
                            },
                            attrs: {
                                disabled: t.setting.isPlusBControl && t.identity.tranLimit > 0 && e.number * t.parityItem.money > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.num = e.number
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.number) + "\n                            ")])])
                    }))], 2), t._v(" "), t.setting.plusBTran.maxLimit <= 0 ? n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            min: "1",
                            integer: "",
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), t.setting.isPlusBControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]) : n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            integer: "",
                            min: "1",
                            max: t.setting.plusBTran.maxLimit,
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [t._v(t._s(t.lang.Maxinumlowersingular) + t._s(t.setting.plusBTran.maxLimit) + " " + t._s(t.lang.hands))]), t._v(" "), t.setting.isPlusBControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-left": "12px"
                        }
                    }, [n("p", {
                        staticClass: "markedWords",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("label", [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checkPolicy,
                            expression: "checkPolicy"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checkPolicy) ? t._i(t.checkPolicy, null) > -1 : t.checkPolicy
                        },
                        on: {
                            change: function(e) {
                                var i = t.checkPolicy,
                                    n = e.target,
                                    a = !!n.checked;
                                if (Array.isArray(i)) {
                                    var s = t._i(i, null);
                                    n.checked ? s < 0 && (t.checkPolicy = i.concat([null])) : s > -1 && (t.checkPolicy = i.slice(0, s).concat(i.slice(s + 1)))
                                } else t.checkPolicy = a
                            }
                        }
                    }), t._v("\n                                " + t._s(t.reglang.Iagreethe)), n("a", {
                        staticStyle: {
                            "text-decoration": "none",
                            color: "#16743c"
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(e) {
                                t.showPolicy = !t.showPolicy
                            }
                        }
                    }, [t._v("Presale management rule")])])])])]), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [n("button", {
                        staticClass: "cancel",
                        on: {
                            click: function(e) {
                                t.showParityBox = !1
                            }
                        }
                    }, [t._v(t._s(t.lang.Cancel))]), t._v(" "), t.parityItem.type < 2 ? n("button", {
                        staticClass: "confirm",
                        class: {
                            order: 1 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusB
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")]) : n("button", {
                        staticClass: "confirmNumber",
                        class: {
                            violet: 12 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusB
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")])])]) : t._e()])], 1) : 3 == t.type ? n("div", [n("div", {
                        staticClass: "kline"
                    }, [n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "order"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(1, 3)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Green))])]), t._v(" "), n("div", {
                        staticClass: "violet"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(12, 3)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Violet))])]), t._v(" "), n("div", {
                        staticClass: "sell"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(0, 3)
                            }
                        }
                    }, [t._v(t._s(t.Pre.Join + t.Pre.Red))])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(10, 3)
                            }
                        }
                    }, [t._v("0")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(11, 3)
                            }
                        }
                    }, [t._v("1")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(2, 3)
                            }
                        }
                    }, [t._v("2")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(3, 3)
                            }
                        }
                    }, [t._v("3")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(4, 3)
                            }
                        }
                    }, [t._v("4")])])]), t._v(" "), n("div", {
                        staticClass: "buttonBox"
                    }, [n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(5, 3)
                            }
                        }
                    }, [t._v("5")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(6, 3)
                            }
                        }
                    }, [t._v("6")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(7, 3)
                            }
                        }
                    }, [t._v("7")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(8, 3)
                            }
                        }
                    }, [t._v("8")])]), t._v(" "), n("div", {
                        staticClass: "number"
                    }, [n("button", {
                        attrs: {
                            disabled: t.joinDisabledTag
                        },
                        on: {
                            click: function(e) {
                                return t.showParityBuy(9, 3)
                            }
                        }
                    }, [t._v("9")])])])]), t._v(" "), t.inited ? n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v("\n                    " + t._s(t.setting.plusCName) + t._s(t.lang.Record) + "\n                ")]), t._v(" "), n("a", {
                        on: {
                            click: t.toCat
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("div", {
                        staticStyle: {
                            margin: "0 14px",
                            "text-align": "center"
                        }
                    }, [t.typeChangeing ? n("van-loading", {
                        attrs: {
                            type: "spinner",
                            size: "24px"
                        }
                    }) : t._e()], 1), t._v(" "), n("x-paritycat", {
                        attrs: {
                            tag: t.tag1,
                            isFixed: !0,
                            parityType: 3
                        },
                        on: {
                            getNewOpenCat: t.getNewOpenCat
                        }
                    })], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "thick-box"
                    }), t._v(" "), n("div", {
                        staticClass: "orders"
                    }, [n("div", {
                        staticClass: "title"
                    }, [n("span", [t._v(t._s(t.lang.My) + t._s(t.setting.plusCName) + t._s(t.lang.Order))]), t._v(" "), n("a", {
                        on: {
                            click: t.toOrder
                        }
                    }, [t._v(t._s(t.lang.more) + " >")])]), t._v(" "), n("x-parityorder", {
                        attrs: {
                            status: null,
                            tag: t.tag2,
                            idDb: !1,
                            parityType: 3,
                            isWait: t.isWait,
                            isOpen: null,
                            refreshTag: t.tag3
                        }
                    })], 1), t._v(" "), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.showParityBox,
                            callback: function(e) {
                                t.showParityBox = e
                            },
                            expression: "showParityBox"
                        }
                    }, [t.inited ? n("div", {
                        staticClass: "tranBox"
                    }, [n("div", {
                        staticClass: "top"
                    }, [t.parityItem.type < 2 ? n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:sell",
                            value: 0 == t.parityItem.type,
                            expression: "parityItem.type==0",
                            arg: "sell"
                        }],
                        staticClass: "box-pre-order"
                    }, [t._v("\n                        " + t._s(0 == t.parityItem.type ? t.Pre.Join + t.Pre.Red : t.Pre.Join + t.Pre.Green) + " " + t._s(t.setting.plusCName) + "\n                    ")]) : n("div", {
                        directives: [{
                            name: "class",
                            rawName: "v-class:violet",
                            value: 12 == t.parityItem.type,
                            expression: "parityItem.type==12",
                            arg: "violet"
                        }],
                        staticClass: "box-pre-number"
                    }, [t._v("\n                        " + t._s(12 == t.parityItem.type ? t.Pre.Join + t.Pre.Violet : t.Pre.Select + " " + t.parityItem.type % 10) + "\n                    ")]), t._v(" "), n("span", {
                        staticClass: "topGold"
                    }, [t._v(t._s(t.lang.Parity))])]), t._v(" "), n("div", {
                        staticClass: "tran"
                    }, [n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Contract))]), t._v(" "), n("span", [t._v(t._s(t.lang.Money))])]), t._v(" "), t._l(t.setting.plusCTran.contracts, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.money == e.value
                            },
                            attrs: {
                                disabled: t.setting.isPlusCControl && t.identity.tranLimit > 0 && e.value > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.money = e.value
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.value) + "\n                            ")])])
                    }))], 2), t._v(" "), n("div", {
                        staticClass: "item"
                    }, [n("div", [n("span", [t._v(t._s(t.lang.Number))])]), t._v(" "), t._l(t.setting.plusCTran.numbers, (function(e) {
                        return n("div", [n("button", {
                            class: {
                                active: t.parityItem.num == e.number
                            },
                            attrs: {
                                disabled: t.setting.isPlusCControl && t.identity.tranLimit > 0 && e.number * t.parityItem.money > t.identity.tranLimit
                            },
                            on: {
                                click: function(i) {
                                    t.parityItem.num = e.number
                                }
                            }
                        }, [t._v("\n                                " + t._s(e.number) + "\n                            ")])])
                    }))], 2), t._v(" "), t.setting.plusCTran.maxLimit <= 0 ? n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            min: "1",
                            integer: "",
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), t.setting.isPlusCControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]) : n("div", {
                        staticClass: "Spiitem"
                    }, [n("div"), t._v(" "), n("div", {
                        staticClass: "spinner"
                    }, [n("van-stepper", {
                        attrs: {
                            integer: "",
                            min: "1",
                            max: t.setting.plusCTran.maxLimit,
                            "input-width": "4.00rem"
                        },
                        model: {
                            value: t.parityItem.num,
                            callback: function(e) {
                                t.$set(t.parityItem, "num", e)
                            },
                            expression: "parityItem.num"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [t._v(t._s(t.lang.Maxinumlowersingular) + t._s(t.setting.plusCTran.maxLimit) + " " + t._s(t.lang.hands))]), t._v(" "), t.setting.isPlusCControl && t.identity.tranLimit > 0 ? n("div", [t._v("\n                                " + t._s(t.lang.MaximumSingaltranamount) + ":" + t._s(t.symbol.money) + t._s(t.identity.tranLimit) + "\n                            ")]) : t._e()], 1)]), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-left": "12px"
                        }
                    }, [n("p", {
                        staticClass: "markedWords",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [n("label", [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checkPolicy,
                            expression: "checkPolicy"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checkPolicy) ? t._i(t.checkPolicy, null) > -1 : t.checkPolicy
                        },
                        on: {
                            change: function(e) {
                                var i = t.checkPolicy,
                                    n = e.target,
                                    a = !!n.checked;
                                if (Array.isArray(i)) {
                                    var s = t._i(i, null);
                                    n.checked ? s < 0 && (t.checkPolicy = i.concat([null])) : s > -1 && (t.checkPolicy = i.slice(0, s).concat(i.slice(s + 1)))
                                } else t.checkPolicy = a
                            }
                        }
                    }), t._v("\n                                " + t._s(t.reglang.Iagreethe)), n("a", {
                        staticStyle: {
                            "text-decoration": "none",
                            color: "#16743c"
                        },
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function(e) {
                                t.showPolicy = !t.showPolicy
                            }
                        }
                    }, [t._v("Presale management rule")])])])])]), t._v(" "), n("div", {
                        staticClass: "bottom"
                    }, [n("button", {
                        staticClass: "cancel",
                        on: {
                            click: function(e) {
                                t.showParityBox = !1
                            }
                        }
                    }, [t._v(t._s(t.lang.Cancel))]), t._v(" "), t.parityItem.type < 2 ? n("button", {
                        staticClass: "confirm",
                        class: {
                            order: 1 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusC
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")]) : n("button", {
                        staticClass: "confirmNumber",
                        class: {
                            violet: 12 == t.parityItem.type
                        },
                        on: {
                            click: t.submitPlusC
                        }
                    }, [t._v("\n                        " + t._s(t.lang.Confirm) + "\n                    ")])])]) : t._e()])], 1) : t._e(), t._v(" "), n("van-popup", {
                        staticStyle: {
                            width: "90%"
                        },
                        attrs: {
                            position: "center",
                            closeable: ""
                        },
                        model: {
                            value: t.showRule,
                            callback: function(e) {
                                t.showRule = e
                            },
                            expression: "showRule"
                        }
                    }, [n("div", {
                        staticClass: "policy-layout"
                    }, [n("div", {
                        staticClass: "policy-scrollview"
                    }, [n("div", {
                        staticClass: "policy-scrollview__main"
                    }, [n("div", {
                        domProps: {
                            innerHTML: t._s("Dipe" == t.siteName ? t.lang.DipeRuleDetail : t.lang.RuleDetail)
                        }
                    })])])])]), t._v(" "), n("van-popup", {
                        staticStyle: {
                            width: "90%"
                        },
                        attrs: {
                            position: "center"
                        },
                        model: {
                            value: t.showPolicy,
                            callback: function(e) {
                                t.showPolicy = e
                            },
                            expression: "showPolicy"
                        }
                    }, [n("div", {
                        staticClass: "policy-layout"
                    }, [n("div", {
                        staticClass: "policy-scrollview"
                    }, [n("div", {
                        staticClass: "policy-scrollview__main"
                    }, [n("div", {
                        domProps: {
                            innerHTML: t._s(t.urlReplace(t.setting.policy))
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "contract"
                    }, [n("span", {
                        staticClass: "contract-footer"
                    }, [n("label", [t._v("\n                    Note: I have carefully read all contents of this presale management rule, Risk Disclosure Agreement and Risk Agreement and I am agreed to continue with my own risk.\n                ")])]), t._v(" "), n("div", {
                        staticClass: "contract-button"
                    }, [n("van-button", {
                        attrs: {
                            size: "small",
                            color: t.checkAgree ? "#147239" : "#d3d3d3"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.policyConfirm(e)
                            }
                        }
                    }, [t._v(t._s(t.reglang.Confirm))])], 1)])]), t._v(" "), n("x-tabbar", {
                        attrs: {
                            index: 3
                        }
                    })], 1)
                },
                a = [];
            i.d(e, "a", (function() {
                return n
            })), i.d(e, "b", (function() {
                return a
            }))
        }
    }
]);