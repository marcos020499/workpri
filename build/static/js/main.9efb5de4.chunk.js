(this.webpackJsonpprisa = this.webpackJsonpprisa || []).push([
  [0],
  {
    38: function (n, e, a) {
      n.exports = a(53);
    },
    46: function (n, e, a) {},
    51: function (n, e, a) {},
    53: function (n, e, a) {
      "use strict";
      a.r(e);
      var t,
        i,
        d,
        r,
        c,
        o,
        l,
        m,
        p,
        x,
        s,
        h,
        u,
        w,
        v,
        g,
        f,
        b,
        j,
        O,
        E,
        y,
        _,
        z,
        k,
        L,
        C,
        S,
        R,
        T,
        I,
        B,
        N = a(0),
        W = a.n(N),
        A = a(24),
        P = a.n(A),
        M = a(1),
        V = a(8),
        F = a(4),
        D = a(15),
        U = a(5),
        q =
          (a(46),
          function (n) {
            var e,
              a = Object(N.useState)(!1),
              t = Object(F.a)(a, 2),
              i = t[0],
              d = t[1];
            return W.a.createElement(
              "div",
              {
                className: "Tooltip-Wrapper",
                onMouseOver: function () {
                  e = setTimeout(function () {
                    d(!0);
                  }, n.delay || 200);
                },
                onMouseOut: function () {
                  clearInterval(e), d(!1);
                },
              },
              n.children,
              i &&
                W.a.createElement(
                  "div",
                  { className: "Tooltip-Tip ".concat(n.direction || "top") },
                  n.content
                )
            );
          }),
        J = a(2),
        G = a(36),
        H =
          (Object(J.b)(G.a)(
            t ||
              (t = Object(M.a)([
                "\n  color: #003366;\n  @media screen and (max-width: 768px) {\n  }\n",
              ]))
          ),
          J.b.table(
            i ||
              (i = Object(M.a)([
                "\n  margin: auto;\n  min-heigth: 1067px;\n  max-heigth: 1067px;\n",
              ]))
          )),
        K = J.b.tr(
          d ||
            (d = Object(M.a)([
              '\n  font-family: "Radikal1";\n  display: flex;\n  position: relative;\n  width: 200px;\n  top: -60px;\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  @media screen and (max-width: 1500px) {\n    top: -50px;\n    width: 180px;\n  }\n  @media screen and (max-width: 1367px) {\n    top: -40px;\n  }\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    top: -30px;\n  }\n  @media screen and (max-height: 768px) and (orientation: landscape) {\n    top: -20px;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    top: 0px;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: 180px;\n    max-width: 180px;\n  }\n  @media screen and (max-height: 601px) {\n    top: 10px;\n    min-width: 180px;\n    max-width: 180px;\n  }\n\n  @media screen and (max-width: 400px) {\n    min-width: 140px;\n    max-width: 140px;\n  }\n  @media screen and (max-width: 350px) {\n    min-width: 130px;\n    max-width: 130px;\n  }\n',
            ]))
        ),
        Q = J.b.tr(r || (r = Object(M.a)([""]))),
        X =
          (J.b.img(
            c ||
              (c = Object(M.a)([
                "\n  width: 100px;\n  color: white;\n  @media screen and (max-width: 1024px) {\n    width: 95px;\n  }\n",
              ]))
          ),
          J.b.img(o || (o = Object(M.a)(["\n  ", "\n"])), function (n) {
            var e = n.size;
            return "width: ".concat(
              { _1: "7.3", _4: "9.6", _19: "10.4" }["_" + e],
              "vh"
            );
          })),
        Y = J.b.div(
          l ||
            (l = Object(M.a)([
              "\n  font-size: 1.1vw;\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        Z = J.b.td(
          m ||
            (m = Object(M.a)([
              "\n  padding: none;\n  width: 33%;\n  @media screen and (max-width: 1367px) {\n    width: 33%;\n  }\n  @media screen and (max-width: 600px) {\n    width: 30%;\n  }\n",
            ]))
        ),
        $ = J.b.input(
          p ||
            (p = Object(M.a)([
              "\n  border-radius: 7px;\n  min-width: 30px;\n  max-width: 30px;\n  text-align: center;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    font-size: 14px;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 8vw 0 1vw;\n    position: relative;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    left: -15%;\n  }\n  @media screen and (max-width: 400px) {\n    width: 25px;\n    margin: 0 5vw 0 1vw;\n  }\n",
            ]))
        ),
        nn = J.b.input(
          x ||
            (x = Object(M.a)([
              '\n  font-family: "Radikal1";\n  width: 95px;\n  font-size: 11px;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  text-align: center;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        en = J.b.input(
          s ||
            (s = Object(M.a)([
              '\n  font-family: "Radikal1";\n  width: 55px;\n  text-align: center;\n  font-size: 11px;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        an = J.b.h3(
          h ||
            (h = Object(M.a)([
              '\n  font-size: 0.7vw;\n  color: white;\n  letter-spacing: 1px;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    font-size: 12px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
            ]))
        ),
        tn = J.b.h3(
          u ||
            (u = Object(M.a)([
              '\n  font-size: 1.4vh;\n  color: white;\n  font-family: "RadikalBold";\n  width: 160px;\n  max-height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n  position: relative;\n  top: 10px;\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 160px;\n    text-align: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 150px;\n    margin: 0;\n    top: -10px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 120px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 400px) {\n    font-size: 11px;\n    width: 110px;\n  }\n  @media screen and (max-width: 340px) {\n    font-size: 10px;\n    width: 100px;\n  }\n',
            ]))
        ),
        dn = J.b.th(
          w ||
            (w = Object(M.a)([
              "\n  padding: 0 0 0 10px;\n  margin: -0.5vw 0 3vw 0;\n\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 1vh 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    margin: 0;\n    padding: 0;\n    margin: none;\n  }\n",
            ]))
        ),
        rn =
          (J.b.th(
            v ||
              (v = Object(M.a)([
                "\n  margin: 2vw;\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    padding: 0;\n    margin: none;\n  }\n",
              ]))
          ),
          J.b.tr(
            g ||
              (g = Object(M.a)([
                "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  left: -4%;\n  @media screen and (max-width: 1200px) {\n    position: relative;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    left: none;\n    justify-content: center;\n    position: relative;\n  }\n  @media screen and (max-width: 768px) {\n    align-items: center;\n    left: 0;\n    justify-content: center;\n    position: relative;\n  }\n",
              ]))
          )),
        cn = J.b.p(
          f ||
            (f = Object(M.a)([
              '\n  color: #2098ae;\n  font-size: 0.8vw;\n  margin: -5px 0 0 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 0 0 0;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    left: -15%;\n  }\n',
            ]))
        ),
        on = J.b.div(
          b ||
            (b = Object(M.a)([
              "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 1367px) {\n    flex-direction: column;\n    width: 100%;\n    margin: auto auto 0 auto;\n  }\n  @media screen and (max-width: 1200px) {\n    display: flex;\n    flex-direction: column;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0 3vh 0;\n    min-width: none;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n  }\n  @media screen and (max-width: 600px) {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n  }\n",
            ]))
        ),
        ln = J.b.div(
          j ||
            (j = Object(M.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: -35px 60px 0 0;\n  max-width: 100%;\n  @media screen and (max-width: 1500px) {\n    margin: -15px 20px 0 auto;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: -15px 0px 0 auto;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: -15px 60px 0 auto;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    padding: 0 0 10px 0;\n  }\n  @media screen and (max-width: 600px) {\n    margin: auto;\n    position: relative;\n    left: -12%;\n    padding: 0;\n    width: 90%;\n  }\n  @media screen and (max-height: 768px) and (orientation: landscape) {\n    left: 5%;\n  }\n  @media screen and (max-width: 400px) {\n    margin: auto;\n    position: relative;\n    left: -14%;\n    padding: 0;\n    width: 90%;\n  }\n  @media screen and (max-width: 350px) {\n    left: -15%;\n  }\n",
            ]))
        ),
        mn = J.b.input(
          O ||
            (O = Object(M.a)([
              "\n  border-radius: 100%;\n  width: 10px;\n  height: 13px;\n  border: 1px solid #003366;\n  margin: 0 0.7vw 0 0;\n  @media screen and (max-width: 768px) {\n    width: 7px;\n    height: 10px;\n    position: relative;\n    top: -1px;\n    margin: 0vw 1vw 0 1vw;\n  }\n",
            ]))
        ),
        pn =
          (J.b.button(
            E ||
              (E = Object(M.a)([
                '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 1367px) {\n    margin: -1vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0vw 0 5vw 0;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0vw 0 5vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
              ]))
          ),
          J.b.div(
            y ||
              (y = Object(M.a)([
                "\n  display: block;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 0 0vw 0;\n  @media screen and (max-width: 1366px) {\n    padding: 50px 0 0vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 1vw 0 0vw 0;\n  }\n",
              ]))
          ),
          function (n) {
            var e = n.nombre,
              a = n.rgb,
              t = n.area,
              i = n.litros,
              d = n.presentaciones,
              r = n.cantidad4_1L,
              c = n.cantidad4_2L,
              o = n.cantidad4_3L,
              l = n.cantidad1_1L,
              m = n.cantidad1_2L,
              p = n.cantidad1_3L,
              x = n.cantidad19_1L,
              s = n.cantidad19_2L,
              h = n.cantidad19_3L,
              u = n.onChanges,
              w = n.indSecond,
              v =
                Object(U.c)(function (n) {
                  return n.colors;
                }).colores || [],
              g = Object(U.c)(function (n) {
                return n;
              }).result;
            return W.a.createElement(
              "div",
              null,
              W.a.createElement(
                H,
                {
                  style: {
                    margin:
                      2 === v.length || 2 === g.length ? "0 0 0 12%" : "auto",
                  },
                },
                W.a.createElement(
                  ln,
                  null,
                  W.a.createElement(
                    on,
                    null,
                    W.a.createElement(
                      Q,
                      null,
                      W.a.createElement(
                        dn,
                        null,
                        W.a.createElement(
                          q,
                          { content: e, direction: "top" },
                          W.a.createElement(
                            tn,
                            null,
                            W.a.createElement(mn, {
                              disabled: "disabled",
                              style: { backgroundColor: a },
                            }),
                            e
                          )
                        )
                      )
                    ),
                    W.a.createElement(
                      rn,
                      null,
                      W.a.createElement(
                        dn,
                        null,
                        W.a.createElement(an, null, "Area"),
                        W.a.createElement(nn, {
                          type: "text",
                          value: t + " mts",
                          readonly: "readonly",
                        })
                      ),
                      W.a.createElement(
                        dn,
                        null,
                        W.a.createElement(an, null, "Litros"),
                        W.a.createElement(en, {
                          type: "text",
                          value: i + " lts",
                          readonly: "readonly",
                        })
                      )
                    ),
                    W.a.createElement(
                      K,
                      null,
                      d.map(function (n, e) {
                        return e <= n.presentacion_id
                          ? W.a.createElement(
                              xn,
                              Object.assign({ key: e + "presentaciones" }, n, {
                                i: w,
                                state4_1: r,
                                state4_2: c,
                                state4_3: o,
                                state1_1: l,
                                state1_2: m,
                                state1_3: p,
                                state19_1: x,
                                state19_2: s,
                                state19_3: h,
                                onChanges1: u,
                              })
                            )
                          : null;
                      })
                    )
                  )
                )
              )
            );
          });
      function xn(n) {
        var e = n.litros,
          a = n.cantidad,
          t = n.state4_1,
          i = n.state4_2,
          d = n.state4_3,
          r = n.state1_1,
          c = n.state1_2,
          o = n.state1_3,
          l = n.state19_1,
          m = n.state19_2,
          p = n.state19_3,
          x = n.onChanges1,
          s = n.i,
          h = { _1: "1L", _4: "4L", _19: "19L" }["_" + e],
          u = Object(N.useState)(window.innerWidth),
          w = Object(F.a)(u, 2),
          v = w[0],
          g = w[1];
        return (
          Object(N.useEffect)(
            function () {
              function n() {
                g(window.innerWidth);
              }
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            },
            [v]
          ),
          Object(N.useEffect)(
            function () {
              v < 768 && console.log("toggle it");
            },
            [v]
          ),
          W.a.createElement(
            Z,
            null,
            W.a.createElement(
              Y,
              null,
              W.a.createElement(X, {
                src:
                  19 === e
                    ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
                    : "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg",
                size: e,
                style: {
                  position: "relative",
                  left: 1 === e ? "-10%" : 4 === e ? "-22%" : "-25%",
                },
              }),
              W.a.createElement(cn, null, h),
              v > 768
                ? W.a.createElement($, {
                    type: "number",
                    min: "0",
                    max: "10",
                    defaultValue: "0",
                    step: "1",
                    value:
                      4 === e && 0 === s
                        ? 0 === t
                          ? a
                          : t
                        : 4 === e && 1 === s
                        ? 0 === i
                          ? a
                          : i
                        : 4 === e && 2 === s
                        ? 0 === d
                          ? a
                          : d
                        : 1 === e && 0 === s
                        ? 0 === r
                          ? a
                          : r
                        : 1 === e && 1 === s
                        ? 0 === c
                          ? a
                          : c
                        : 1 === e && 2 === s
                        ? 0 === o
                          ? a
                          : o
                        : 19 === e && 0 === s
                        ? 0 === l
                          ? a
                          : l
                        : 19 === e && 1 === s
                        ? 0 === m
                          ? a
                          : m
                        : 19 === e && 2 === s
                        ? 0 === p
                          ? a
                          : p
                        : a,
                    name:
                      19 === e && 0 === s
                        ? "cantidad19_1L"
                        : 19 === e && 1 === s
                        ? "cantidad19_2L"
                        : 19 === e && 2 === s
                        ? "cantidad19_3L"
                        : 4 === e && 0 === s
                        ? "cantidad4_1L"
                        : 4 === e && 1 === s
                        ? "cantidad4_2L"
                        : 4 === e && 2 === s
                        ? "cantidad4_3L"
                        : 1 === e && 0 === s
                        ? "cantidad1_1L"
                        : 1 === e && 1 === s
                        ? "cantidad1_2L"
                        : 1 === e && 2 === s
                        ? "cantidad1_3L"
                        : "",
                    onChange: x,
                  })
                : W.a.createElement(
                    "select",
                    {
                      value:
                        4 === e && 0 === s
                          ? 0 === t
                            ? a
                            : t
                          : 4 === e && 1 === s
                          ? 0 === i
                            ? a
                            : i
                          : 4 === e && 2 === s
                          ? 0 === d
                            ? a
                            : d
                          : 1 === e && 0 === s
                          ? 0 === r
                            ? a
                            : r
                          : 1 === e && 1 === s
                          ? 0 === c
                            ? a
                            : c
                          : 1 === e && 2 === s
                          ? 0 === o
                            ? a
                            : o
                          : 19 === e && 0 === s
                          ? 0 === l
                            ? a
                            : l
                          : 19 === e && 1 === s
                          ? 0 === m
                            ? a
                            : m
                          : 19 === e && 2 === s
                          ? 0 === p
                            ? a
                            : p
                          : a,
                      name:
                        19 === e && 0 === s
                          ? "cantidad19_1L"
                          : 19 === e && 1 === s
                          ? "cantidad19_2L"
                          : 19 === e && 2 === s
                          ? "cantidad19_3L"
                          : 4 === e && 0 === s
                          ? "cantidad4_1L"
                          : 4 === e && 1 === s
                          ? "cantidad4_2L"
                          : 4 === e && 2 === s
                          ? "cantidad4_3L"
                          : 1 === e && 0 === s
                          ? "cantidad1_1L"
                          : 1 === e && 1 === s
                          ? "cantidad1_2L"
                          : 1 === e && 2 === s
                          ? "cantidad1_3L"
                          : "",
                      onChange: x,
                    },
                    W.a.createElement(
                      "option",
                      { value: "0", disabled: "disabled" },
                      "0"
                    ),
                    W.a.createElement("option", { value: "1" }, "1"),
                    W.a.createElement("option", { value: "2" }, "2"),
                    W.a.createElement("option", { value: "3" }, "3"),
                    W.a.createElement("option", { value: "4" }, "4"),
                    W.a.createElement("option", { value: "5" }, "5"),
                    W.a.createElement("option", { value: "1" }, "6"),
                    W.a.createElement("option", { value: "2" }, "7"),
                    W.a.createElement("option", { value: "3" }, "8"),
                    W.a.createElement("option", { value: "4" }, "9"),
                    W.a.createElement("option", { value: "5" }, "10")
                  )
            )
          )
        );
      }
      var sn,
        hn = J.b.div(
          _ ||
            (_ = Object(M.a)([
              "\n  text-align: center;\n  @media screen and (max-width: 1200px) {\n    padding: 50px 0 0 0;\n    width: 100%;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 30px 0 0 0;\n    width: 100%;\n  }\n",
            ]))
        ),
        un =
          (J.b.div(
            z ||
              (z = Object(M.a)([
                "\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  justify-content: center;\n  padding: 25px 0 0vw 0;\n  @media screen and (max-width: 1367px) {\n    flex-direction: row;\n  }\n  @media screen and (max-width: 1024px) {\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n",
              ]))
          ),
          J.b.div(
            k ||
              (k = Object(M.a)([
                "\n  display: block;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 1200px) {\n    padding: 50px 0 0vw 0;\n  }\n  @media screen and (max-height: 769px) and (orientation: landscape) {\n    padding: 30px 0 0 0;\n  }\n  @media screen and (max-height: 601px) {\n    padding: 50px 0 0 0;\n  }\n",
              ]))
          )),
        wn = J.b.button(
          L ||
            (L = Object(M.a)([
              '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  top: -60px;\n  @media screen and (max-width: 1500px) {\n    top: -60px;\n  }\n  @media screen and (max-width: 1367px) {\n    top: -40px;\n    margin: -1vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0vw 0 5vw 0;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0vw 0 5vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        vn = J.b.img(
          C ||
            (C = Object(M.a)([
              "\n  width: 130px;\n  @media screen and (max-width: 1500px) {\n    width: 115px;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 105px;\n  }\n",
            ]))
        ),
        gn = J.b.img(
          S ||
            (S = Object(M.a)([
              "\n  width: 100%;\n  max-height: 300px;\n  min-height: 300px;\n  @media screen and (max-width: 1200px) {\n    display: none;\n  }\n\n  @media screen and (max-width: 1024px) {\n    display: none;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
            ]))
        ),
        fn = J.b.h1(
          R ||
            (R = Object(M.a)([
              '\n  font-family: "RadikalBold";\n  font-size: 33px;\n  color: white;\n  letter-spacing: 4px;\n  @media screen and (max-width: 1024px) {\n    padding: 30px 0 0 0;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 0 10px 0;\n    font-size: 20px;\n    justify-content: center;\n  }\n',
            ]))
        ),
        bn = J.b.h2(
          T ||
            (T = Object(M.a)([
              '\n  font-family: "RadikalBold";\n  color: #2098ae;\n  font-size: 19px;\n  letter-spacing: 1px;\n  margin: -20px 0 0 0;\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    font-size: 17px;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 10px 0 0 0;\n    font-size: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    display: flex;\n    margin: none;\n    padding: 10vw 0 0 0;\n    justify-content: center;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    top: 5px;\n  }\n',
            ]))
        ),
        jn = J.b.h2(
          I ||
            (I = Object(M.a)([
              '\n  margin: -5px 0 0 0;\n  letter-spacing: 2px;\n  font-family: "RadikalBold";\n  color: white;\n  font-size: 22px;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    display: flex;\n    padding: 0 0 20px 0;\n    justify-content: center;\n  }\n',
            ]))
        ),
        On = J.b.div(
          B ||
            (B = Object(M.a)([
              "\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  padding: 3% 2% 0 2%;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        En = function () {
          var n = Object(U.c)(function (n) {
            return n;
          }).colors.linea_producto;
          return W.a.createElement(
            "div",
            null,
            n && W.a.createElement(gn, { src: n.url_imagen_inspiracion })
          );
        },
        yn = function () {
          var n = Object(U.c)(function (n) {
              return n;
            }),
            e = n.result,
            a = n.colors.linea_producto,
            t =
              Object(U.c)(function (n) {
                return n.colors;
              }).colores || [],
            i = Object(N.useReducer)(
              function (n, e) {
                return Object(D.a)(Object(D.a)({}, n), e);
              },
              {
                cantidad1_1L: 0,
                cantidad1_2L: 0,
                cantidad1_3L: 0,
                cantidad4_1L: 0,
                cantidad4_2L: 0,
                cantidad4_3L: 0,
                cantidad19_1L: 0,
                cantidad19_2L: 0,
                cantidad19_3L: 0,
              }
            ),
            d = Object(F.a)(i, 2),
            r = d[0],
            c = d[1],
            o = function (n) {
              c(Object(V.a)({}, n.target.name, n.target.value)),
                console.log(n.target.name + n.target.value);
            };
          return W.a.createElement(
            "div",
            null,
            W.a.createElement(En, null),
            W.a.createElement(
              hn,
              null,
              W.a.createElement(fn, null, "RESULTADO"),
              W.a.createElement(bn, null, "PRISA TE RECOMIENDA"),
              a && W.a.createElement(vn, { src: a.url_imagen }),
              W.a.createElement(jn, null, "Elige la presentaci\xf3n "),
              W.a.createElement(
                On,
                {
                  style: {
                    position: "relative",
                    left: 1 === t.length ? "2%" : "",
                  },
                },
                0 === e.length
                  ? t.map(function (n, e) {
                      return W.a.createElement(
                        pn,
                        Object.assign({ key: e + "pintura" }, n, e)
                      );
                    })
                  : e.map(function (n, e) {
                      return W.a.createElement(
                        pn,
                        Object.assign({ key: e + "pintura" }, n, e, r, {
                          indSecond: e,
                          onChanges: o,
                        })
                      );
                    })
              ),
              W.a.createElement(
                un,
                null,
                W.a.createElement("h1", null, " "),
                W.a.createElement(
                  "a",
                  {
                    href:
                      "http://ec2-44-242-66-211.us-west-2.compute.amazonaws.com/finalizar-compra/?add-to-cart="
                        .concat(
                          e.map(function (n, e) {
                            return n.presentaciones.map(function (n, a) {
                              return 1 === n.litros && 0 === e
                                ? 0 ===
                                    (0 === r.cantidad1_1L
                                      ? (r.cantidad1_1L = n.cantidad)
                                      : r.cantidad1_1L) || 0 === r.cantidad1_1L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_1L
                                : 4 === n.litros && 0 === e
                                ? 0 ===
                                    (0 === r.cantidad4_1L
                                      ? (r.cantidad4_1L = n.cantidad)
                                      : r.cantidad4_1L) || 0 === r.cantidad4_1L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_1L
                                : 19 === n.litros && 0 === e
                                ? 0 ===
                                    (0 === r.cantidad19_1L
                                      ? (r.cantidad19_1L = n.cantidad)
                                      : r.cantidad19_1L) ||
                                  0 === r.cantidad19_1L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad19_1L
                                : 1 === n.litros && 1 === e
                                ? 1 ===
                                    (1 === r.cantidad1_2L
                                      ? (r.cantidad1_2L = n.cantidad)
                                      : r.cantidad1_2L) || 1 === r.cantidad1_2L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_2L
                                : 4 === n.litros && 1 === e
                                ? 1 ===
                                    (1 === r.cantidad4_2L
                                      ? (r.cantidad4_2L = n.cantidad)
                                      : r.cantidad4_2L) || 1 === r.cantidad4_2L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_2L
                                : 19 === n.litros && 1 === e
                                ? 1 ===
                                    (1 === r.cantidad19_2L
                                      ? (r.cantidad19_2L = n.cantidad)
                                      : r.cantidad19_2L) ||
                                  1 === r.cantidad19_2L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad19_2L
                                : 1 === n.litros && 2 === e
                                ? 2 ===
                                    (2 === r.cantidad1_3L
                                      ? (r.cantidad1_3L = n.cantidad)
                                      : r.cantidad1_3L) || 2 === r.cantidad1_3L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_3L
                                : 4 === n.litros && 2 === e
                                ? 2 ===
                                    (2 === r.cantidad4_3L
                                      ? (r.cantidad4_3L = n.cantidad)
                                      : r.cantidad4_3L) || 2 === r.cantidad4_3L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_3L
                                : 19 === n.litros && 2 === e
                                ? 2 ===
                                    (2 === r.cantidad19_3L
                                      ? (r.cantidad19_3L = n.cantidad)
                                      : r.cantidad19_3L) ||
                                  2 === r.cantidad19_3L
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad19_3L
                                : null;
                            });
                          }),
                          ","
                        )
                        .replace(/,,/g, ",")
                        .replace(/=,/g, "=")
                        .replace(/,,/g, ",") + "",
                  },
                  W.a.createElement(wn, null, "Comprar")
                )
              )
            )
          );
        },
        _n = a(11),
        zn = a(66);
      function kn(n) {
        var e = n.name,
          a = n.size,
          t = {
            colors:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg",
            vertical:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
            horizontal:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
            door: "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg",
            domo: "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-04_j8euvm.svg",
            tragaluz:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-05_xqp9kd.svg",
            window:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg",
          }[e];
        return W.a.createElement(Nn, { src: t, size: a });
      }
      var Ln,
        Cn,
        Sn,
        Rn,
        Tn,
        In,
        Bn,
        Nn = J.b.img(
          sn ||
            (sn = Object(M.a)([
              "\n  margin: none;\n  padding: none;\n  ",
              "\n",
            ])),
          function (n) {
            var e = n.size;
            return "width: ".concat(e, "px; height: ").concat(e, "px;");
          }
        );
      function Wn(n) {
        var e = n.children,
          a = n.select,
          t = n.colors,
          i = n.visible,
          d = n.onSelect,
          r = n.onClose;
        return W.a.createElement(
          An,
          null,
          e,
          W.a.createElement(Pn, { visible: i, onClick: r }),
          W.a.createElement(
            Mn,
            { visible: i },
            W.a.createElement(Fn, null, "Colores a elegir"),
            W.a.createElement(
              Vn,
              null,
              null === t || void 0 === t
                ? void 0
                : t.map(function (n, e) {
                    return W.a.createElement(Dn, {
                      key: e,
                      color: n,
                      select: a,
                      index: e,
                      onClick: d,
                    });
                  })
            )
          )
        );
      }
      var An = J.b.div(
          Ln ||
            (Ln = Object(M.a)([
              "\n  padding: none;\n  margin: none;\n  display: inline-block;\n  top: 0;\n  left: 0;\n",
            ]))
        ),
        Pn = J.b.div(
          Cn ||
            (Cn = Object(M.a)([
              "\n  visibility: ",
              ";\n  position: fixed;\n  width: 100vw;\n  higith: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  line-height: 1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  rigth: 0;\n  bottom: 0;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Mn = J.b.div(
          Sn ||
            (Sn = Object(M.a)([
              "\n  position: absolute;\n  visibility: ",
              ";\n  background-color: white;\n  border-radius: 6px;\n  z-index: 3;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Vn = J.b.div(
          Rn ||
            (Rn = Object(M.a)([
              "\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n  height: 45px;\n",
            ]))
        ),
        Fn = J.b.p(
          Tn ||
            (Tn = Object(M.a)(["\n  color: #003366;\n  font-size: 10px;\n"]))
        );
      function Dn(n) {
        var e = n.index,
          a = n.color,
          t = n.select,
          i = n.onClick;
        return W.a.createElement(
          oe,
          {
            select: t,
            color: a,
            onClick: function () {
              i(e);
            },
          },
          W.a.createElement(le, { color: a })
        );
      }
      var Un,
        qn,
        Jn,
        Gn,
        Hn,
        Kn,
        Qn,
        Xn,
        Yn,
        Zn,
        $n,
        ne,
        ee,
        ae,
        te,
        ie,
        de,
        re,
        ce,
        oe = J.b.div(
          In ||
            (In = Object(M.a)([
              "\n  border: 2px solid\n    ",
              ";\n  width: 23px;\n  height: 23px;\n  margin: auto;\n",
            ])),
          function (n) {
            var e = n.select,
              a = n.color;
            return "".concat(e === a ? a : "black");
          }
        ),
        le = J.b.div(
          Bn ||
            (Bn = Object(M.a)([
              "\n  width: 100%;\n  height: 100%;\n  background-color: ",
              ";\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e);
          }
        ),
        me = a(65);
      var pe = function (n) {
          var e = n.id,
            a = n.onSubmit,
            t = (function () {
              var n = Object(N.useState)(0),
                e = Object(F.a)(n, 2),
                a = (e[0], e[1]);
              return function () {
                return a(function (n) {
                  return n + 1;
                });
              };
            })(),
            i = Object(N.useReducer)(function (n, e) {
              return e || n;
            }, []),
            d = Object(F.a)(i, 2),
            r = d[0],
            c = d[1],
            o = Object(N.useState)(!0),
            l = Object(F.a)(o, 2),
            m = l[0],
            p = l[1];
          function x(n, i, d) {
            var o = Object(_n.a)(r);
            (o[n][i] = d), c(o), a(e, o), t();
          }
          return W.a.createElement(
            "div",
            null,
            W.a.createElement(
              Oa,
              null,
              m
                ? W.a.createElement(xe, { hidden: !0 })
                : W.a.createElement(
                    "div",
                    null,
                    r.map(function (n, e) {
                      return W.a.createElement(xe, {
                        key: e,
                        hidden: !1,
                        values: n,
                        inp: e,
                        identifier: e,
                        onChange: x,
                      });
                    })
                  ),
              W.a.createElement(
                ya,
                null,
                W.a.createElement(
                  Ra,
                  {
                    onClick: function () {
                      if (4 !== r.length) {
                        var n = [].concat(Object(_n.a)(r), [
                          "puertas" === e
                            ? { largo: 2, ancho: 1 }
                            : { largo: 1, ancho: 1 },
                        ]);
                        c(n), a(e, n), p(!1);
                      }
                    },
                  },
                  "+"
                ),
                W.a.createElement("div", { style: { height: "5px" } }),
                !m &&
                  W.a.createElement(
                    Ra,
                    {
                      onClick: function () {
                        if (0 !== r.length) {
                          var n = r.slice(0, -1);
                          c(n), a(e, n), 0 === n.length && p(!0);
                        }
                      },
                    },
                    "-"
                  )
              )
            )
          );
        },
        xe = function (n) {
          var e = n.identifier,
            a = n.values,
            t = n.hidden,
            i = n.onChange,
            d = n.inp,
            r = function (n, a) {
              console.log("size", n, a), i(e, n, a);
            };
          return W.a.createElement(
            "div",
            { style: t ? { visibility: "hidden" } : {} },
            W.a.createElement(
              Ea,
              {
                style: {
                  width: d < 1 ? "" : "135px",
                  marginLeft: d < 1 ? "0" : "22px",
                },
              },
              W.a.createElement(se, {
                lIcon: d < 1 ? "vertical" : "",
                value: null === a || void 0 === a ? void 0 : a.largo,
                onChangeText: function (n) {
                  return r("largo", n);
                },
              }),
              W.a.createElement(se, {
                lIcon: d < 1 ? "horizontal" : "",
                value: null === a || void 0 === a ? void 0 : a.ancho,
                onChangeText: function (n) {
                  return r("ancho", n);
                },
              })
            )
          );
        },
        se = function (n) {
          var e = n.onChangeText,
            a = n.lIcon,
            t = n.value;
          function i(n) {
            var a = n.target;
            e(parseFloat(a.value));
          }
          var d = Object(N.useState)(window.innerWidth),
            r = Object(F.a)(d, 2),
            c = r[0],
            o = r[1];
          return (
            Object(N.useEffect)(
              function () {
                function n() {
                  o(window.innerWidth);
                }
                return (
                  window.addEventListener("resize", n),
                  function () {
                    return window.removeEventListener("resize", n);
                  }
                );
              },
              [c]
            ),
            Object(N.useEffect)(
              function () {
                c < 768 && console.log("toggle it");
              },
              [c]
            ),
            W.a.createElement(
              sa,
              null,
              a && W.a.createElement(kn, { name: a, size: 20 }),
              c > 768
                ? W.a.createElement(ha, {
                    type: "number",
                    value: t,
                    onChange: i,
                    min: "0.5",
                    max: "5",
                    step: "0.5",
                  })
                : W.a.createElement(
                    wa,
                    { value: t, onChange: i },
                    W.a.createElement("option", { value: "0.5" }, "1"),
                    W.a.createElement("option", { value: "1" }, "1"),
                    W.a.createElement("option", { value: "1.5" }, "1.5"),
                    W.a.createElement("option", { value: "2" }, "2"),
                    W.a.createElement("option", { value: "2.5" }, "2.5"),
                    W.a.createElement("option", { value: "3" }, "3"),
                    W.a.createElement("option", { value: "3.5" }, "3.5"),
                    W.a.createElement("option", { value: "4" }, "4"),
                    W.a.createElement("option", { value: "4.5" }, "4.5"),
                    W.a.createElement("option", { value: "5" }, "5")
                  ),
              W.a.createElement(ua, null, "mts")
            )
          );
        },
        he = function (n) {
          var e = n.id,
            a = n.onSubmit,
            t = n.defaultValue,
            i = Object(N.useState)(t),
            d = Object(F.a)(i, 2),
            r = d[0],
            c = d[1];
          return (
            Object(N.useEffect)(function () {
              a(e, parseFloat(r));
            }, []),
            W.a.createElement(
              sa,
              null,
              W.a.createElement(ha, {
                type: "number",
                value: r,
                onChange: function (n) {
                  var t = n.target;
                  c(t.value), a(e, parseFloat(t.value));
                },
                min: "1",
                max: "10",
                step: "0.5",
              }),
              W.a.createElement(ua, null, "mts")
            )
          );
        },
        ue = function (n) {
          var e = n.id,
            a = n.onSubmit,
            t = n.defaultValue,
            i = Object(N.useState)(t),
            d = Object(F.a)(i, 2),
            r = d[0],
            c = d[1];
          return (
            Object(N.useEffect)(function () {
              a(e, parseFloat(r));
            }, []),
            W.a.createElement(
              sa,
              null,
              W.a.createElement(
                wa,
                {
                  value: r,
                  onChange: function (n) {
                    var t = n.target;
                    c(t.value), a(e, parseFloat(t.value));
                  },
                },
                W.a.createElement("option", { value: "1" }, "1"),
                W.a.createElement("option", { value: "1.5" }, "1.5"),
                W.a.createElement("option", { value: "2" }, "2"),
                W.a.createElement("option", { value: "2.5" }, "2.5"),
                W.a.createElement(
                  "option",
                  { value: "3", selected: "selected" },
                  "3"
                ),
                W.a.createElement("option", { value: "3.5" }, "3.5"),
                W.a.createElement("option", { value: "4" }, "4"),
                W.a.createElement("option", { value: "4.5" }, "4.5"),
                W.a.createElement("option", { value: "5" }, "5"),
                W.a.createElement("option", { value: "5.5" }, "5.5"),
                W.a.createElement("option", { value: "6" }, "6"),
                W.a.createElement("option", { value: "6.5" }, "6.5"),
                W.a.createElement("option", { value: "7" }, "7"),
                W.a.createElement("option", { value: "7.5" }, "7.5"),
                W.a.createElement("option", { value: "8" }, "8"),
                W.a.createElement("option", { value: "8.5" }, "8.5"),
                W.a.createElement("option", { value: "9" }, "9"),
                W.a.createElement("option", { value: "9.5" }, "9.5"),
                W.a.createElement("option", { value: "10" }, "10")
              ),
              W.a.createElement(ua, null, "mts")
            )
          );
        },
        we = function (n) {
          var e = n.title,
            a = n.icon,
            t = n.size;
          function i() {
            return W.a.createElement(
              fa,
              null,
              t
                ? W.a.createElement(Ca, null, "Metros")
                : W.a.createElement(Ca, null, "\u200f\u200f\u200e \u200e"),
              W.a.createElement(La, null, e)
            );
          }
          var d = n.end ? "true" : "false";
          return W.a.createElement(
            va,
            { end: d },
            W.a.createElement(
              ga,
              null,
              W.a.createElement(kn, { name: a, size: 42 }),
              W.a.createElement(i, null)
            )
          );
        };
      function ve(n) {
        var e,
          a = n.index,
          t = n.selectControl,
          i = n.onSelectControl,
          d = n.onSubmit,
          r =
            Object(U.c)(function (n) {
              return n.colors;
            }).colores || [],
          c = Object(N.useState)(!1),
          o = Object(F.a)(c, 2),
          l = o[0],
          m = o[1],
          p = Object(N.useState)(null),
          x = Object(F.a)(p, 2),
          s = x[0],
          h = x[1],
          u =
            (Object(U.c)(function (n) {
              return n;
            }).colors1,
            r.map(function (n) {
              return n.rgb;
            })),
          w = W.a.useState("a"),
          v = Object(F.a)(w, 2),
          g = v[0],
          f = v[1],
          b = function (n) {
            f(n.target.value);
          };
        function j(n) {
          m(!1), h(u[n]), d(u[n]);
        }
        return (
          Object(N.useEffect)(
            function () {
              1 === a && 1 === u.length && j(0), t || h(null);
            },
            [t, r, j]
          ),
          W.a.createElement(
            za,
            null,
            W.a.createElement(
              _a,
              null,
              W.a.createElement(
                ja,
                Object.assign(
                  {},
                  {
                    checked: g === (e = "e"),
                    onChange: b,
                    value: e,
                    name: "color-radio-button-demo",
                    inputProps: { "aria-label": e },
                  },
                  {
                    sx: {
                      color: me.a[800],
                      "&.Mui-checked": { color: me.a[800] },
                    },
                    type: "radio",
                    checked: t,
                    onClick: function (n) {
                      i(function (n) {
                        return !n;
                      });
                    },
                  }
                )
              ),
              W.a.createElement("div", { style: { width: "1em" } }),
              a < 6
                ? W.a.createElement(
                    Sa,
                    null,
                    a < 5 ? "".concat("Pared" + a) : "Techo"
                  )
                : W.a.createElement(Sa, null, "Azotea")
            ),
            W.a.createElement(
              Wn,
              {
                select: s,
                colors: u,
                onSelect: j,
                visible: l,
                onClose: function () {
                  return m(!1);
                },
              },
              W.a.createElement(ba, {
                color: s,
                type: "button",
                checked: !!s,
                onClick: function (n) {
                  t &&
                    m(function (n) {
                      return !n;
                    });
                },
              })
            )
          )
        );
      }
      var ge,
        fe,
        be,
        je,
        Oe,
        Ee,
        ye,
        _e,
        ze,
        ke,
        Le,
        Ce,
        Se,
        Re,
        Te,
        Ie,
        Be,
        Ne,
        We,
        Ae,
        Pe,
        Me,
        Ve,
        Fe,
        De,
        Ue,
        qe,
        Je,
        Ge,
        He,
        Ke,
        Qe,
        Xe,
        Ye,
        Ze,
        $e,
        na,
        ea,
        aa,
        ta,
        ia,
        da,
        ra,
        ca,
        oa,
        la,
        ma,
        pa,
        xa,
        sa = J.b.div(
          Un ||
            (Un = Object(M.a)([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  padding: 0.2vw 5px 0 0;\n  position: relative;\n  left: 15%;\n  align-items: flex-start;\n  @media screen and (max-width: 768px) {\n    left: 2%;\n    top: -10px;\n  }\n",
            ]))
        ),
        ha = J.b.input(
          qn ||
            (qn = Object(M.a)([
              "\n  border: none;\n  border-bottom: 1px solid #003366;\n  max-width: 33px;\n  min-height: auto;\n  font-size: 13px;\n  text-align: end;\n  @media screen and (max-width: 1367px) {\n    max-width: 35px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    max-width: 30px;\n    font-size: 11px;\n  }\n  @media screen and (max-width: 768px) {\n    max-width: 30px;\n    font-size: 10px;\n  }\n",
            ]))
        ),
        ua = J.b.p(
          Jn ||
            (Jn = Object(M.a)([
              '\n  font-size: 0.5em;\n  color: #003366;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 7px;\n  }\n',
            ]))
        ),
        wa = J.b.select(
          Gn || (Gn = Object(M.a)(["\nfont-size: 10px;\nmax-width: 50px;\n"]))
        ),
        va = J.b.div(
          Hn ||
            (Hn = Object(M.a)([
              '\n  font-size: 0.8em;\n  display: flex;\n  flex-direction: column;\n  font-family: "Radikal1";\n  align-items: ',
              ";\n  @media screen and (max-width: 768px) {\n    margin: 0 0 30px 0;\n  }\n",
            ])),
          function (n) {
            return "true" === n.end ? "flex-end" : "center";
          }
        ),
        ga = J.b.div(
          Kn ||
            (Kn = Object(M.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
            ]))
        ),
        fa = J.b.div(
          Qn || (Qn = Object(M.a)(["\n  display: block;\n  line-height: 0;\n"]))
        ),
        ba = J.b.input(
          Xn ||
            (Xn = Object(M.a)([
              "\n  width: 21px;\n  height: 21px;\n  background-color: ",
              ";\n  border-radius: 999px;\n  border: 0.4px solid gray;\n  position: relative;\n  @media screen and (max-width: 1367px) {\n    left: -10px;\n  }\n  @media screen and (max-width: 768px) {\n    left: -20px;\n  }\n  @media screen and (max-width: 600px) {\n    left: -60px;\n  }\n  @media screen and (max-width: 500px) {\n    left: -70px;\n  }\n  @media screen and (max-width: 450px) {\n    left: -80px;\n  }\n  @media screen and (max-width: 400px) {\n    left: -95px;\n  }\n  @media screen and (max-width: 400px) {\n    left: -98px;\n  }\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        ja = Object(J.b)(zn.a)(
          Yn ||
            (Yn = Object(M.a)([
              "\n  width: 1.5em;\n  height: 1.5em;\n  background-color: ",
              ";\n  border-radius: 999px;\n\n  @media screen and (max-width: 500px) {\n    margin: 0 0 0 10px;\n  }\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        Oa = J.b.div(
          Zn ||
            (Zn = Object(M.a)([
              "\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  left: -5px;\n  width: 200px;\n  margin: 0 1vw 0 1vw;\n  @media screen and (max-width: 1500px) {\n    width: 180px;\n    margin: 0 1vw 0 1vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 170px;\n    margin: 0 0 0 0.5vw;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: 0 2vw 0 2vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0 1.7vw 0 1.7vw;\n    left: -20px;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 -3vw 0 0.5vw;\n  }\n  @media screen and (max-width: 600px) {\n    margin: 0 -4vw 0 0.5vw;\n  }\n",
            ]))
        ),
        Ea = J.b.div(
          $n ||
            ($n = Object(M.a)([
              "\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 155px;\n  justify-content: space-between;\n  top: 7px;\n  left: -14%;\n  margin: -0.6vw 0 0 0;\n  @media screen and (max-width: 1200px) {\n    margin: 0 3vw 0 20px;\n    left: -18%;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0 1.5vw 0 20px;\n    left: -14%;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0.1vw -2vw 0 30px;\n    left: 5%;\n  }\n",
            ]))
        ),
        ya = J.b.div(
          ne ||
            (ne = Object(M.a)([
              "\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n    position: absolute;\n  }\n",
            ]))
        ),
        _a = Object(J.b)(Oa)(
          ee || (ee = Object(M.a)(["\n  align-items: center;\n"]))
        ),
        za = Object(J.b)(Oa)(
          ae ||
            (ae = Object(M.a)([
              "\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 10% 0 10%;\n  width: 180px;\n  padding: 0px 30px 60px 0;\n  @media screen and (max-width: 1600px) {\n    margin: 0 0% 0 2%;\n    width: 180px;\n    padding: 0 1px 55px 0;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 150px;\n    margin: 0 2% 0 5%;\n  }\n  @media screen and (max-width: 1200px) {\n    width: 180px;\n    margin: 0 4vw 55px 7vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0 3vw 55px 7vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 -2vw 55px 8vw;\n  }\n  @media screen and (max-width: 600px) {\n    margin: 0 -12vw 55px 8vw;\n  }\n  @media screen and (max-width: 500px) {\n    margin: 0 -18vw 55px 10vw;\n  }\n  @media screen and (max-width: 450px) {\n    margin: 0 -24vw 55px 10vw;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0 -30vw 55px 12vw;\n  }\n  @media screen and (max-width: 330px) {\n    margin: 0 -35vw 55px 14vw;\n  }\n",
            ]))
        ),
        ka = J.b.p(
          te ||
            (te = Object(M.a)([
              '\n  margin: none;\n  padding: none;\n  font-family: "RadikalBold";\n  color: #003366;\n',
            ]))
        ),
        La = Object(J.b)(ka)(
          ie ||
            (ie = Object(M.a)([
              "\n  font-size: 1em;\n  @media screen and (max-width: 600px) {\n    font-size: 13px;\n  }\n  @media screen and (orientation: landscape) {\n    font-size: 15px;\n  }\n",
            ]))
        ),
        Ca = Object(J.b)(ka)(
          de ||
            (de = Object(M.a)([
              "\n  font-size: 0.7em;\n  @media screen and (max-width: 600px) {\n    font-size: 9px;\n  }\n",
            ]))
        ),
        Sa = Object(J.b)(ka)(
          re ||
            (re = Object(M.a)([
              '\n  font-size: 1.3;\n  font-family: "Radikal1";\n  position: relative;\n  letter-spacing: 2px;\n  left: -10px;\n  @media screen and (max-width: 600px) {\n    font-size: 13px;\n  }\n  @media screen and (max-width: 400px) {\n    font-size: 12px;\n  }\n',
            ]))
        ),
        Ra = J.b.button(
          ce ||
            (ce = Object(M.a)([
              "\n  border-radius: 100%;\n  border: none;\n  background: #b70033;\n  color: white;\n  padding: 0;\n  font-size: 1.2vh;\n  width: 1.4vh;\n  position: relative;\n  left: 25px;\n  @media screen and (max-width: 1500px) {\n    left: 5px;\n  }\n  @media screen and (max-width: 1367px) {\n    left: 3px;\n  }\n  @media screen and (max-width: 1200px) {\n    left: -20px;\n  }\n  @media screen and (max-width: 1024px) {\n    left: -10px;\n  }\n\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    height: 12px;\n    width: 12px;\n  }\n\n  @media screen and (max-width: 768px) {\n    position: relative;\n    font-size: 10px;\n    left: 50px;\n    top: -35px;\n    height: 2vh;\n    width: 2vh;\n    margin: 2vw;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    width: 1.75vh;\n  }\n  @media screen and (max-width: 400px) and (orientation: landscape) {\n    width: 1.9vh;\n  }\n",
            ]))
        ),
        Ta =
          (a(51),
          J.b.div(
            ge ||
              (ge = Object(M.a)([
                "\n  text-align: center;\n  padding: 0vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    width: 100vw;\n    height: 800px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100vw;\n    height: 800px;\n  }\n",
              ]))
          ),
          J.b.tr(
            fe ||
              (fe = Object(M.a)([
                "\n  padding: 1vw 0 4vh 0;\n  max-width: 2vw;\n  min-width: 2vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 3vw 0 0vw 0;\n  }\n",
              ]))
          ),
          J.b.h1(
            be ||
              (be = Object(M.a)([
                '\n  font-family: "RadikalBold";\n  font-size: 2.7vh;\n  padding: 0 0 0 3vw;\n  text-align: left;\n  font-weight: 1000;\n  letter-spacing: 1.7px;\n  color: #003366;\n  @media screen and (max-width: 600px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 1vw 8vw;\n  }\n',
              ]))
          )),
        Ia = J.b.div(
          je ||
            (je = Object(M.a)([
              "\n  padding: 0 4vw 3vw 4vw;\n  justify-content: space-between;\n  display: flex;\n  @media screen and (max-width: 1024px) {\n    padding: 0 4vw 5vw 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 4vw 7vw 4vw;\n  }\n",
            ]))
        ),
        Ba = J.b.button(
          Oe ||
            (Oe = Object(M.a)([
              '\n  min-width: 80px;\n  width: auto;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.5vh;\n  background: #003366;\n  color: white;\n  font-family: "RadikalMedium";\n  font-weight: 1000;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: right;\n  @media screen and (max-width: 1024px) {\n    font-size: 12.6px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12.6px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        Na = J.b.button(
          Ee ||
            (Ee = Object(M.a)([
              '\n  min-width: 105px;\n  width: auto;\n  height: 35px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 12px 0 12px;\n  justify-content: right;\n  align-items: right;\n  font-size: 14px;\n  background: #b70033;\n  color: white;\n  font-family: "Radikal1";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 14px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        Wa =
          (J.b.small(
            ye ||
              (ye = Object(M.a)([
                '\n  font-size: 1vh;\n  margin: none;\n  padding: none;\n  color: #003366;\n  padding: 0;\n  font-family: "RadikalBold";\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 23px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    padding: 0 0 5px 0;\n  }\n',
              ]))
          ),
          J.b.h2(
            _e ||
              (_e = Object(M.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 600px) {\n    margin: 0 1px 0 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    position: relative;\n    top: 2px;\n    padding: 0vw 0px 0 0;\n    margin: 0 2px 0 0;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1.5vw 0;\n  }\n',
              ]))
          ),
          J.b.h2(
            ze ||
              (ze = Object(M.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    padding: 0 0px 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0px 1.5vw 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    padding: 0 0 0 1vw;\n    justify-content: center;\n    position: relative;\n  }\n',
              ]))
          ),
          J.b.h2(
            ke ||
              (ke = Object(M.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.4vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 3px;\n    font-size: 11px;\n    margin: -0.4vw 0 -20px 0;\n    padding: 0vw 20px 0 0;\n  }\n  @media screen and (max-width: 600px) {\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1vw 0;\n  }\n',
              ]))
          ),
          J.b.h2(
            Le ||
              (Le = Object(M.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    padding: none;\n  }\n',
              ]))
          ),
          J.b.h2(
            Ce ||
              (Ce = Object(M.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 1367px) {\n    padding: 0vh 1.2vw 0 1.2vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0px 0 0px;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 0 10px 0 10px;\n  }\n',
              ]))
          ),
          J.b.div(
            Se ||
              (Se = Object(M.a)([
                '\n  font-family: "Radikal1";\n  text-align: right;\n  padding: none;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    padding: 0 0vw 0 0;\n    left: 10px;\n  }\n',
              ]))
          ),
          J.b.img(
            Re ||
              (Re = Object(M.a)([
                "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          J.b.img(
            Te ||
              (Te = Object(M.a)([
                "\n  margin: none;\n  position: relative;\n  left: -10px;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          J.b.img(
            Ie ||
              (Ie = Object(M.a)([
                "\n  margin: 0 0 0 0;\n  padding: none;\n  width: 4vh;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 768px) {\n    width: 10vw;\n  }\n",
              ]))
          ),
          J.b.div(
            Be || (Be = Object(M.a)(["\n  margin: -32px;\n  padding: none;\n"]))
          ),
          J.b.img(
            Ne ||
              (Ne = Object(M.a)([
                "\n  width: 1.8vh;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  top: -4px;\n  @media screen and (max-width: 1024px) {\n    width: 23px;\n    margin: 0 0.3vw 0 0.3vw;\n    padding: 0 0.3vw 0 0.3vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
              ]))
          ),
          J.b.div(
            We ||
              (We = Object(M.a)([
                "\n  display: flex;\n  flex: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 12vw;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 1024px) {\n    width: 20vw;\n    align-items: center;\n    margin: 0px -26px 25px 55px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 25vw;\n    align-items: center;\n    margin: 20px -36px 34px 15px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 19vw;\n    margin: 20px -20px 34px 20px;\n  }\n",
              ]))
          ),
          J.b.div(
            Ae ||
              (Ae = Object(M.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: space-between;\n  top: -10px;\n",
              ]))
          ),
          J.b.div(
            Pe ||
              (Pe = Object(M.a)([
                "\n  display: flex;\n  flex: center;\n  width: 11.7vw;\n  justify-content: center;\n",
              ]))
          ),
          J.b.p(
            Me ||
              (Me = Object(M.a)([
                '\n  font-size: 19px;\n  letter-spacing: 1.6px;\n  color: #003366;\n  position: relative;\n  left: 3.5vw;\n  top: -20px;\n  font-family: "Radikal1";\n\n  @media screen and (max-width: 1367px) {\n    font-size: 18px;\n    position: relative;\n    left: 25px;\n    top: -15px;\n    text-align: center;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -1.5vw;\n    font-size: 2vw;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    position: relative;\n    left: 4px;\n    top: 0px;\n    margin: 0;\n  }\n',
              ]))
          ),
          J.b.td(
            Ve ||
              (Ve = Object(M.a)([
                "\n  border-right: 1px solid #003366;\n  @media screen and (max-width: 768px) {\n    font-size: 2vw;\n  }\n",
              ]))
          ),
          J.b.td(
            Fe ||
              (Fe = Object(M.a)([
                "\n  border-right: 1px solid #003366;\n  padding: 0 0 5px 0;\n  max-height: 10vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0 0 0px 0;\n    max-height: 10vw;\n    margin: 0vw 0 5px 0;\n  }\n",
              ]))
          ),
          J.b.a(De || (De = Object(M.a)(["\n  color: black;\n"]))),
          J.b.input(
            Ue ||
              (Ue = Object(M.a)([
                "\n  width: 10.2vh;\n  height: 3.2vh;\n  border: none;\n  border-radius: 8px;\n  margin: 0 0 0 1vh;\n  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 36px 10px;\n  -webkit-appearance: none;\n  @media screen and (max-width: 768px) {\n    width: 60px;\n    height: 20px;\n  }\n",
              ]))
          )),
        Aa =
          (J.b.div(
            qe ||
              (qe = Object(M.a)([
                "\n  text-align: center;\n  justify-content: center;\n  width: 90%;\n  padding: 3.5vw 0 0.5vw 2vw;\n  min-height: 17vw;\n  max-height: 17vw;\n  @media screen and (max-width: 1367px) {\n    width: 18vw;\n    padding: 0vw 0 0vw 1vw;\n    min-height: 600px;\n    max-height: 600px;\n  }\n  @media screen and (max-width: 768px) {\n    min-height: 650px;\n    max-height: 650px;\n  }\n",
              ]))
          ),
          J.b.div(Je || (Je = Object(M.a)(["\n  display: inline-block;\n"])))),
        Pa =
          (J.b.button(
            Ge ||
              (Ge = Object(M.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: -20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    top: -15px;\n    left: 0vh;\n    height: 20px;\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -17px;\n    left: -35px;\n    width: 20px;\n    height: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 30px;\n    width: 1vw;\n    height: 5vw;\n  }\n",
              ]))
          ),
          J.b.input(
            He ||
              (He = Object(M.a)([
                "\n  width: 2vw;\n  height: 2vw;\n  background-color: white;\n  border: 0.1px ridge #003366;\n  @media screen and (max-width: 768px) {\n    width: 2vw;\n    height: 4vw;\n  }\n",
              ]))
          ),
          J.b.input(
            Ke ||
              (Ke = Object(M.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: 20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n  &:checked {\n    border: 6px solid black;\n    color: blue;\n    outline: unset !important; /* I added this one for Edge (chromium) support */\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    left: -15px;\n    top: 23px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 15px;\n    border: 1px solid #003366;\n    left: -20px;\n    width: 12px;\n    margin: none;\n    padding: none;\n    height: 12px;\n  }\n",
              ]))
          ),
          J.b.input(
            Qe ||
              (Qe = Object(M.a)([
                "\n  border-bottom: 1px solid #003366;\n  border-top: white;\n  border-left: white;\n  border-right: white;\n  font-size: 1.5vh;\n  width: 3vw;\n  heght: 0.1vw;\n  position: relative;\n  top: -6px;\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 35px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 7vw;\n  }\n",
              ]))
          ),
          J.b.button(
            Xe ||
              (Xe = Object(M.a)([
                "\n  border-radius: 100%;\n  border: none;\n  background: #b70033;\n  color: white;\n  padding: 0;\n  font-size: 1.2vh;\n  width: 1.3vh;\n  position: relative;\n  left: 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    width: 15px;\n    left: -30px;\n    height: 15px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 25px;\n    font-size: 11 px;\n  }\n",
              ]))
          ),
          J.b.button(
            Ye ||
              (Ye = Object(M.a)([
                "\n  border-radius: 100%;\n  background: #b70033;\n  font-size: 1.2vh;\n  padding: 0;\n  color: white;\n  border: none;\n  width: 1.3vh;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    width: 15px;\n    height: 15px;\n    left: -3vw;\n    font-size: 11px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 40px;\n    font-size: 12px;\n  }\n",
              ]))
          ),
          J.b.div(
            Ze ||
              (Ze = Object(M.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: 11vw;\n  top: -20px;\n  margin: 0 11.5vw 0 0;\n  @media screen and (max-width: 1367px) {\n    left: 11.5vw;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    left: 13vw;\n    position: relative;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n    top: -40px;\n    left: 2vw;\n  }\n",
              ]))
          ),
          J.b.div(
            $e ||
              ($e = Object(M.a)([
                '\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: none;\n  width: auto;\n  padding: 4px 0 -100px 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    padding: 0 8vw 0 3.5vw;\n  }\n  @media screen and (max-width: 1367px) {\n    padding: 4px 0 -10vw 0;\n  }\n  media screen and (max-width: 768px) {\n    padding: 0 0 0 -3vw;\n  }\n',
              ]))
          ),
          J.b.p(
            na ||
              (na = Object(M.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -5px;\n  margin: 0 1vh 0 1vh;\n  color: #003366;\n\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    top: 0;\n    margin: 0 0.4vw 0 0.4vw;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n    margin: 0 2.1vw 0 2.1vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 10px;\n    align-items: flex-end;\n  }\n',
              ]))
          ),
          J.b.p(
            ea ||
              (ea = Object(M.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -2.3vw;\n  left: -10px;\n  margin: 0vw 0 0 0vw;\n  color: #003366;\n  @media screen and (max-width: 1367px) {\n    top: -2.2vw;\n    font-size: 9px;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 9px;\n    top: -16px;\n  }\n',
              ]))
          ),
          J.b.p(
            aa ||
              (aa = Object(M.a)([
                '\n  font-family: "RadikalMedium";\n  text-align: left;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #b70033;\n  position: relative;\n  top: 5px;\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
              ]))
          )),
        Ma = J.b.div(
          ta ||
            (ta = Object(M.a)([
              "\n  margin: 2vw 4vw 0 5vw;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 1367px) {\n    margin: 23px 4vw  5vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 600px) {\n    margin: auto\n    width: 90%;\n    justify-content: space-between;\n  }\n",
            ]))
        ),
        Va = a(13),
        Fa = Object(Va.c)({
          name: "info",
          initialState: [],
          reducers: {
            appendWall: function (n, e) {
              var a, t;
              if (
                n.find(function (n) {
                  return n.id === e.payload.id;
                })
              ) {
                var i =
                  ((a = n),
                  (t = e.payload),
                  a.reduce(function (n, e) {
                    return e.id === t.id ? n.push(t) : n.push(e), n;
                  }, []));
                return console.log("appendWall", i), i;
              }
              return n.concat([e.payload]);
            },
            removeWall: function (n, e) {
              var a = e.payload,
                t = n.filter(function (n) {
                  return n.id !== a;
                });
              return console.log("removeWall", a, t), t;
            },
          },
        }),
        Da = Fa.actions,
        Ua = Fa.reducer,
        qa = (Da.appendWall, Da.removeWall, Ua),
        Ja = a(12),
        Ga = a.n(Ja),
        Ha = a(18),
        Ka = (function () {
          var n = Object(Ha.a)(
            Ga.a.mark(function n() {
              var e, a, t, i, d, r, c, o;
              return Ga.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (e = function () {
                            var n = document.location.href;
                            if (n.indexOf("?") > 0) {
                              for (
                                var e = n.split("?")[1].split("&"),
                                  a = {},
                                  t = 0,
                                  i = e.length;
                                t < i;
                                t++
                              ) {
                                var d = e[t].split("=");
                                a[d[0]] = unescape(decodeURI(d[1]));
                              }
                              return a;
                            }
                          }),
                          (window.onload = function () {
                            var n = e();
                            if (n)
                              return {
                                Oo: n.o,
                                Tienda: n.tienda,
                                Color_id: n.color_id,
                              };
                          }),
                          (a = window.onload()),
                          (t = a.Oo),
                          (i = a.Tienda),
                          (d = a.Color_id),
                          (n.next = 6),
                          fetch(
                            "https://api.tiendaenlineaprisa.mx/calctest/calculadora/inicializar?origen="
                              .concat(t, "&origen_id=")
                              .concat(i, "&color_id=")
                              .concat(d)
                          )
                        );
                      case 6:
                        return (r = n.sent), (n.next = 9), r.json();
                      case 9:
                        if (!(c = n.sent).hasOwnProperty("colores")) {
                          n.next = 13;
                          break;
                        }
                        return (
                          null === (o = c.linea_producto) || void 0 === o
                            ? void 0
                            : o.id,
                          n.abrupt("return", c)
                        );
                      case 13:
                        return n.abrupt("return", []);
                      case 16:
                        return (
                          (n.prev = 16),
                          (n.t0 = n.catch(0)),
                          n.abrupt("return", [])
                        );
                      case 19:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 16]]
              );
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Qa = (function () {
          var n = Object(Ha.a)(
            Ga.a.mark(function n(e) {
              var a, t, i, d, r, c, o;
              return Ga.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = window.onload()),
                          (t = a.Oo),
                          (i = a.Tienda),
                          (d = a.Color_id),
                          (n.prev = 1),
                          (r = {
                            origen: t,
                            origen_id: i,
                            linea_id: d,
                            colores: e,
                          }),
                          console.log("sendCalculator", r),
                          (n.next = 6),
                          fetch(
                            "https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/calcular",
                            { method: "POST", body: JSON.stringify(r) }
                          )
                        );
                      case 6:
                        return (c = n.sent), (n.next = 9), c.json();
                      case 9:
                        return (o = n.sent), n.abrupt("return", o);
                      case 13:
                        (n.prev = 13),
                          (n.t0 = n.catch(1)),
                          console.log("sendCalculator", n.t0);
                      case 16:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 13]]
              );
            })
          );
          return function (e) {
            return n.apply(this, arguments);
          };
        })(),
        Xa = Object(Va.c)({
          name: "gestion",
          initialState: { isReadyToCompute: !1, finishRecopilation: !0 },
          reducers: {
            goCalculator: function (n) {
              console.log("goCalculator"),
                (n.isReadyToCompute = !0),
                (n.finishRecopilation = !1);
            },
            endCalculator: function (n) {
              return (
                console.log("endcalculator"),
                (n.isReadyToCompute = !1),
                (n.finishRecopilation = !0),
                n
              );
            },
          },
        }),
        Ya = Xa.actions,
        Za = Xa.reducer,
        $a = (Ya.goCalculator, Ya.endCalculator, Za),
        nt = Object(Va.b)(
          "result/fetchResult",
          (function () {
            var n = Object(Ha.a)(
              Ga.a.mark(function n(e, a) {
                var t, i, d, r, c, o;
                return Ga.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (((t = a.getState), (i = t().info).length)) {
                          n.next = 4;
                          break;
                        }
                        return n.abrupt("return");
                      case 4:
                        return (
                          console.log("walles: ", i.length),
                          console.log("walles: ", i),
                          (d = i.reduce(function (n, e) {
                            var a = e.color_id,
                              t = {
                                largo: e.largo,
                                ancho: e.ancho,
                                puertas: e.puertas,
                                ventanas: e.ventanas,
                              },
                              i = "_" + a;
                            return n[i] || (n[i] = []), n[i].push(t), n;
                          }, {})),
                          console.log("normalizer", d),
                          (r = Array.from(
                            new Set(
                              i.map(function (n) {
                                return n.color_id;
                              })
                            )
                          )),
                          (c = r.map(function (n) {
                            return { color_id: n, paredes: d["_" + n] };
                          })),
                          console.log("colores finales", c),
                          (n.next = 13),
                          Qa(c)
                        );
                      case 13:
                        return (o = n.sent), n.abrupt("return", o);
                      case 15:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, a) {
              return n.apply(this, arguments);
            };
          })()
        );
      J.b.div(
        ia ||
          (ia = Object(M.a)([
            "\n  max-width: 768;\n  overflow-x: auto;\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n  }\n",
          ]))
      ),
        J.b.div(
          da ||
            (da = Object(M.a)([
              "\n  max-width: 768;\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n  }\n",
            ]))
        );
      var et,
        at,
        tt,
        it,
        dt,
        rt = J.b.tr(
          ra || (ra = Object(M.a)(["\n  margin: 0;\n  padding: 0;\n"]))
        ),
        ct =
          (Object(J.b)(rt)(
            ca ||
              (ca = Object(M.a)([
                "\n  text-align: center;\n  justify-content: center;\n  margin: auto;\n",
              ]))
          ),
          Object(J.b)(rt)(
            oa || (oa = Object(M.a)(["\n  min-width: 1024px;\n"]))
          ),
          Object(J.b)(rt)(
            la ||
              (la = Object(M.a)([
                "\n  min-width: 1024px;\n  max-width: 1600px;\n  min-heigth: 1067px;\n  max-heigth: 1067px;\n",
              ]))
          ),
          J.b.td(
            ma || (ma = Object(M.a)(["\n  margin: 0;\n  ", "\n"])),
            function (n) {
              return n.end ? "" : "border-right: 1px solid #003366;";
            }
          ),
          J.b.div(
            pa ||
              (pa = Object(M.a)([
                "\n  display: flex;\n  flex: 1;\n  visibility: ",
                ";\n",
              ])),
            function (n) {
              var e = n.hidden;
              return "".concat(e ? "hidden" : "visible");
            }
          ),
          J.b.th(
            xa ||
              (xa = Object(M.a)([
                "\n  padding: 0px 1vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0px 0.7vw;\n  }\n  @media screen and (max-width: 1200px) {\n    padding: 0px 1.5vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0.2vw;\n  }\n",
              ]))
          ),
          Object(Va.c)({
            name: "colors",
            initialState: [
              {
                id: 611,
                rgb: "#495073",
                nombre: "POLIPRISA\xae Blue Purple Mate",
                area: 0,
                litros: 0,
                presentaciones: [
                  { litros: 19, presentacion_id: 614, cantidad: 0 },
                  { litros: 4, presentacion_id: 613, cantidad: 0 },
                  { litros: 4, presentacion_id: 612, cantidad: 0 },
                ],
              },
            ],
            reducers: {
              putColors: function (n, e) {
                return console.log(e), e.payload || n;
              },
            },
          })),
        ot = ct.actions,
        lt = ct.reducer,
        mt = ot.putColors,
        pt = lt,
        xt = function () {
          return (function () {
            var n = Object(Ha.a)(
              Ga.a.mark(function n(e) {
                var a;
                return Ga.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), Ka();
                      case 2:
                        (a = n.sent), console.log(a), e(mt(a));
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        st = Object(Va.b)(
          "result/fetchResult",
          (function () {
            var n = Object(Ha.a)(
              Ga.a.mark(function n(e, a) {
                var t, i, d, r, c, o;
                return Ga.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((t = a.getState),
                          (i = t().colors.colores),
                          (d = e.filter(function (n) {
                            return null !== n.color_id;
                          })).length)
                        ) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return");
                      case 5:
                        return (
                          (r = d.reduce(function (n, e) {
                            var a = "kc" + e.color_id;
                            n[a] || (n[a] = []);
                            var t = e.largo,
                              i = e.ancho,
                              d = e.puertas,
                              r = e.ventanas;
                            return (
                              n[a].push({
                                largo: t,
                                ancho: i,
                                puertas: d,
                                ventanas: r,
                              }),
                              n
                            );
                          }, {})),
                          (c = i.reduce(function (n, e) {
                            var a = e.id,
                              t = { color_id: a, paredes: r["kc" + a] || [] };
                            return n.push(t), n;
                          }, [])),
                          (n.next = 9),
                          Qa(c)
                        );
                      case 9:
                        return (o = n.sent), n.abrupt("return", o);
                      case 11:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, a) {
              return n.apply(this, arguments);
            };
          })()
        ),
        ht =
          (J.b.div(
            et ||
              (et = Object(M.a)([
                "\n  display: flex;\n  height: auto;\n  overflow: hidden;\n  @media screen and (max-width: 1200px) {\n    overflow: visible;\n    flex-direction: column;\n  }\n  @media screen and (min-width: 1200px) {\n    align-items: center;\n  }\n",
              ]))
          ),
          J.b.img(
            at ||
              (at = Object(M.a)([
                "\n  display: none;\n  @media screen and (max-width: 1200px) {\n    display: initial;\n    width: 100%;\n    height: 30vw;\n  }\n",
              ]))
          ),
          J.b.div(
            tt ||
              (tt = Object(M.a)([
                "\n  background-color: #003366;\n  height: auto !important;\n  min-height: 105vh;\n  max-height: 105vh;\n  min-width: 48%;\n  max-width: 48%;\n  margin: 0vw -0.5vw 0 0;\n  @media screen and (max-width: 1366px) {\n    top: 0vw;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: 180px 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n    max-height: none;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 240px 0 0 0;\n    min-width: 102%;\n    max-width: 102%;\n    min-height: 140vh;\n  }\n  @media screen and (max-width: 768px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 180vh;\n    margin: 300px 0 0 0;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    min-height: 800px;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 130vh;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    min-height: 700px;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    margin: 340px 0 0 0;\n  }\n  @media screen and (max-width: 420px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n",
              ]))
          ),
          J.b.div(
            it ||
              (it = Object(M.a)([
                "\n  height: auto !important;\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 52%;\n  max-width: 52%;\n  margin: 2vw 0 0 0;\n  justify-content: center;\n  @media screen and (max-width: 1200px) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n  }\n  @media screen and (max-width: 1200px) and (orientation: landscape) {\n    margin: 5vw 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 110vh;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 5vw 0 0 0;\n    min-height: 100vh;\n  }\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 900px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 40% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 30% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    padding: 0 0 80% 0;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 700px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    padding: 0 0 90% 0;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 140% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    padding: 0 0 90% 0;\n  }\n  @media screen and (max-width: 400px) {\n    padding: 0 0 25% 0;\n  }\n  @media screen and (max-width: 380px) {\n    padding: 0 0 30% 0;\n  }\n  @media screen and (max-width: 350px) {\n    padding: 0 0 45% 0;\n  }\n  @media screen and (max-width: 330px) {\n    padding: 0 0 58% 0;\n  }\n",
              ]))
          ),
          Object(Va.c)({
            name: "result",
            initialState: [],
            extraReducers: function (n) {
              n.addCase(nt.fulfilled, function (n, e) {
                var a = e.payload;
                return console.log("object result ", a), a;
              });
            },
          }).reducer),
        ut = Object(Va.a)({
          reducer: { colors: pt, info: qa, gestion: $a, result: ht },
        });
      function wt(n) {
        var e = n.children;
        return W.a.createElement(U.a, { store: ut }, e);
      }
      var vt,
        gt,
        ft,
        bt,
        jt,
        Ot,
        Et,
        yt,
        _t,
        zt,
        kt = function () {
          var n = Object(U.c)(function (n) {
            return n;
          }).colors.linea_producto;
          return W.a.createElement(
            Lt,
            null,
            !1 === !!(null === n || void 0 === n ? void 0 : n.impermeabilizante)
              ? W.a.createElement(we, { title: "Puertas", icon: "door" })
              : W.a.createElement(we, { title: "Domo", icon: "domo" })
          );
        },
        Lt = J.b.th(
          dt ||
            (dt = Object(M.a)([
              "\n  padding: 0px 1vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0px 0.7vw;\n  }\n  @media screen and (max-width: 1200px) {\n    padding: 0px 1.5vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0.2vw;\n  }\n",
            ]))
        ),
        Ct = function () {
          var n = Object(U.c)(function (n) {
            return n;
          }).colors.linea_producto;
          return W.a.createElement(
            St,
            null,
            !1 === !!(null === n || void 0 === n ? void 0 : n.impermeabilizante)
              ? W.a.createElement(we, { title: "Ventanas", icon: "window" })
              : W.a.createElement(we, { title: "Tragaluz", icon: "tragaluz" })
          );
        },
        St = J.b.th(
          vt ||
            (vt = Object(M.a)([
              "\n  padding: 0px 1vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0px 0.7vw;\n  }\n  @media screen and (max-width: 1200px) {\n    padding: 0px 1.5vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0.2vw;\n  }\n",
            ]))
        ),
        Rt = function () {
          var n = Object(U.c)(function (n) {
            return n;
          }).colors.linea_producto;
          return {
            x: !!(null === n || void 0 === n ? void 0 : n.impermeabilizante),
          };
        };
      function Tt(n) {
        var e = n.wall1,
          a = n.wall2,
          t = n.wall3,
          i = n.wall4,
          d = n.wall5,
          r = n.wall6,
          c = n.onSubmit,
          o = (n.onClear, n.update),
          l =
            (n.valueWall,
            Object(U.c)(function (n) {
              return n;
            }).colors1,
            Object(U.c)(function (n) {
              return n.colors;
            }).colores || []),
          m = Rt().x;
        return W.a.createElement(
          Mt,
          null,
          W.a.createElement(Ta, null, "COLORES SELECCIONADOS"),
          W.a.createElement(
            Ia,
            null,
            W.a.createElement(
              "div",
              null,
              l.map(function (n, e) {
                return W.a.createElement(
                  Aa,
                  { key: e + "colores" },
                  W.a.createElement(Wa, {
                    disabled: "disabled",
                    style: { backgroundColor: n.rgb },
                  })
                );
              })
            ),
            W.a.createElement(
              Ba,
              {
                onClick: function () {
                  window.location.reload();
                },
              },
              "Borrar todo"
            )
          ),
          W.a.createElement(
            Pt,
            null,
            l.map(function (n, c) {
              return 0 === c
                ? W.a.createElement(
                    Ft,
                    null,
                    W.a.createElement(
                      Dt,
                      null,
                      W.a.createElement(
                        Gt,
                        null,
                        W.a.createElement(we, {
                          title: "Colores",
                          icon: "colors",
                          end: !0,
                        })
                      ),
                      W.a.createElement(
                        Gt,
                        null,
                        W.a.createElement(we, {
                          title: "Largo",
                          icon: "vertical",
                          size: !0,
                        })
                      ),
                      W.a.createElement(
                        Gt,
                        null,
                        W.a.createElement(we, {
                          title: "Ancho",
                          icon: "horizontal",
                          size: !0,
                        })
                      ),
                      W.a.createElement(kt, null),
                      W.a.createElement(Ct, null)
                    ),
                    !1 === m
                      ? W.a.createElement(
                          W.a.Fragment,
                          null,
                          W.a.createElement(It, {
                            index: 1,
                            wall: e,
                            update: o,
                            Length: l.length,
                          }),
                          W.a.createElement(It, {
                            index: 2,
                            wall: a,
                            update: o,
                            Length: l.length,
                          }),
                          W.a.createElement(It, {
                            index: 3,
                            wall: t,
                            update: o,
                            Length: l.length,
                          }),
                          W.a.createElement(It, {
                            index: 4,
                            wall: i,
                            update: o,
                            Length: l.length,
                          }),
                          W.a.createElement(It, {
                            index: 5,
                            wall: d,
                            update: o,
                            Length: l.length,
                          })
                        )
                      : W.a.createElement(It, {
                          index: 6,
                          wall: r,
                          update: o,
                          Length: l.length,
                        })
                  )
                : "";
            })
          ),
          W.a.createElement(
            Ma,
            null,
            W.a.createElement(Pa, null, "*Tienes que llenar todos los campos"),
            W.a.createElement(
              Na,
              {
                onClick: function () {
                  c(),
                    setTimeout(function () {
                      c();
                    }, 500);
                },
              },
              "Calcular"
            )
          )
        );
      }
      function It(n) {
        var e = n.index,
          a = (n.wall, n.update),
          t = n.Length,
          i =
            Object(U.c)(function (n) {
              return n.colors;
            }).colores || [],
          d = Object(N.useState)(
            (1 === t && 1 === e) ||
              (2 === t && 1 === e) ||
              (2 === t && 2 === e) ||
              (3 === t && 1 === e) ||
              (3 === t && 2 === e) ||
              (3 === t && 3 === e) ||
              (1 === t && 6 === e) ||
              null
          ),
          r = Object(F.a)(d, 2),
          c = r[0],
          o = r[1],
          l = function (n) {
            var t,
              d =
                ((t = n),
                i.find(function (n) {
                  return n.rgb === t;
                }));
            d && a(e - 1, "color_id", d.id);
          },
          m = function (n, t) {
            a(e - 1, n, t);
          },
          p = function (n) {
            var e = n.children;
            return W.a.createElement(Jt, { hidden: !c }, e);
          },
          x = Object(N.useState)(window.innerWidth),
          s = Object(F.a)(x, 2),
          h = s[0],
          u = s[1];
        return (
          Object(N.useEffect)(
            function () {
              function n() {
                u(window.innerWidth);
              }
              return (
                window.addEventListener("resize", n),
                function () {
                  return window.removeEventListener("resize", n);
                }
              );
            },
            [h]
          ),
          Object(N.useEffect)(
            function () {
              h < 768 && console.log("toggle it");
            },
            [h]
          ),
          Object(N.useMemo)(
            function () {
              return W.a.createElement(
                Ut,
                { key: "table" },
                W.a.createElement(
                  qt,
                  { key: "first" },
                  W.a.createElement(ve, {
                    index: e,
                    selectControl: c,
                    onSelectControl: o,
                    id: "color",
                    onSubmit: l,
                  })
                ),
                W.a.createElement(
                  qt,
                  { key: "second" },
                  W.a.createElement(
                    p,
                    null,
                    h > 768
                      ? W.a.createElement(he, {
                          id: "largo",
                          onSubmit: m,
                          defaultValue: 3,
                        })
                      : W.a.createElement(ue, {
                          defaultValue: 3,
                          id: "largo",
                          onSubmit: m,
                        })
                  )
                ),
                W.a.createElement(
                  qt,
                  { key: "three" },
                  W.a.createElement(
                    p,
                    null,
                    h > 768
                      ? W.a.createElement(he, {
                          id: "ancho",
                          onSubmit: m,
                          defaultValue: 2.5,
                        })
                      : W.a.createElement(ue, {
                          defaultValue: 2.5,
                          id: "ancho",
                          onSubmit: m,
                        })
                  )
                ),
                W.a.createElement(
                  qt,
                  { key: "four" },
                  W.a.createElement(
                    p,
                    null,
                    W.a.createElement(pe, { id: "puertas", onSubmit: m })
                  )
                ),
                W.a.createElement(
                  qt,
                  { key: "five", end: !0 },
                  W.a.createElement(
                    p,
                    null,
                    W.a.createElement(pe, { id: "ventanas", onSubmit: m })
                  )
                )
              );
            },
            [c]
          )
        );
      }
      var Bt,
        Nt,
        Wt,
        At,
        Pt = J.b.div(
          gt ||
            (gt = Object(M.a)([
              "\n  max-width: 768;\n  overflow-x: auto;\n  overflow-y: auto;\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n  }\n",
            ]))
        ),
        Mt = J.b.div(
          ft ||
            (ft = Object(M.a)([
              "\n  max-width: 768;\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n  }\n",
            ]))
        ),
        Vt = J.b.tr(
          bt || (bt = Object(M.a)(["\n  margin: 0;\n  padding: 0;\n"]))
        ),
        Ft = Object(J.b)(Vt)(
          jt ||
            (jt = Object(M.a)([
              "\n  text-align: center;\n  justify-content: center;\n  margin: auto;\n",
            ]))
        ),
        Dt = Object(J.b)(Vt)(
          Ot || (Ot = Object(M.a)(["\n  min-width: 1024px;\n"]))
        ),
        Ut = Object(J.b)(Vt)(
          Et ||
            (Et = Object(M.a)([
              "\n  min-width: 1024px;\n  max-width: 1600px;\n  min-heigth: 1067px;\n  max-heigth: 1067px;\n",
            ]))
        ),
        qt = J.b.td(
          yt || (yt = Object(M.a)(["\n  margin: 0;\n  ", "\n"])),
          function (n) {
            return n.end ? "" : "border-right: 1px solid #003366;";
          }
        ),
        Jt = J.b.div(
          _t ||
            (_t = Object(M.a)([
              "\n  display: flex;\n  flex: 1;\n  visibility: ",
              ";\n",
            ])),
          function (n) {
            var e = n.hidden;
            return "".concat(e ? "hidden" : "visible");
          }
        ),
        Gt = J.b.th(
          zt ||
            (zt = Object(M.a)([
              "\n  padding: 0px 1vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0px 0.7vw;\n  }\n  @media screen and (max-width: 1200px) {\n    padding: 0px 1.5vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0.2vw;\n  }\n",
            ]))
        ),
        Ht = function () {
          var n = Object(U.c)(function (n) {
            return n;
          }).colors.linea_producto;
          return W.a.createElement(
            "div",
            null,
            n && W.a.createElement(Kt, { src: n.url_imagen_inspiracion })
          );
        },
        Kt = J.b.img(
          Bt ||
            (Bt = Object(M.a)([
              "\n  display: none;\n  @media screen and (max-width: 1200px) {\n    display: initial;\n    width: 100%;\n    height: 30vw;\n  }\n",
            ]))
        );
      function Qt() {
        var n = Object(U.b)();
        Object(N.useEffect)(function () {
          n(xt());
        }, []);
        var e = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          a = Object(F.a)(e, 2),
          t = a[0],
          i = a[1],
          d = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          r = Object(F.a)(d, 2),
          c = r[0],
          o = r[1],
          l = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          m = Object(F.a)(l, 2),
          p = m[0],
          x = m[1],
          s = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          h = Object(F.a)(s, 2),
          u = h[0],
          w = h[1],
          v = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          g = Object(F.a)(v, 2),
          f = g[0],
          b = g[1],
          j = Object(N.useState)({
            color_id: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          }),
          O = Object(F.a)(j, 2),
          E = O[0],
          y = O[1],
          _ = Object(N.useState)(!1),
          z = Object(F.a)(_, 2),
          k = z[0],
          L = z[1],
          C = function (n, e, a) {
            (0, [i, o, x, w, b, y][n])(function (n) {
              return Object(D.a)(Object(D.a)({}, n), {}, Object(V.a)({}, e, a));
            });
          };
        Object(N.useEffect)(
          function () {
            k && (n(st([t, c, p, u, f, E])), L(!1));
          },
          [k, t, c, p, u, f, E]
        );
        var S = function () {
          L(!0);
        };
        return Object(N.useMemo)(function () {
          return W.a.createElement(
            "div",
            null,
            W.a.createElement(Ht, null),
            W.a.createElement(
              Yt,
              null,
              W.a.createElement(
                $t,
                null,
                W.a.createElement(Tt, {
                  wall1: t,
                  wall2: c,
                  wall3: p,
                  wall4: u,
                  wall5: f,
                  wall6: E,
                  onSubmit: S,
                  update: C,
                })
              ),
              W.a.createElement(Zt, null, W.a.createElement(yn, null))
            )
          );
        }, []);
      }
      var Xt,
        Yt = J.b.div(
          Nt ||
            (Nt = Object(M.a)([
              "\n  display: flex;\n  height: auto;\n  overflow: hidden;\n  @media screen and (max-width: 1200px) {\n    overflow: visible;\n    flex-direction: column;\n  }\n  @media screen and (min-width: 1200px) {\n    align-items: center;\n  }\n",
            ]))
        ),
        Zt = J.b.div(
          Wt ||
            (Wt = Object(M.a)([
              "\n  background-color: #003366;\n  height: auto !important;\n  min-height: 105vh;\n  max-height: 105vh;\n  min-width: 48%;\n  max-width: 48%;\n  margin: 0vw -0.5vw 0 0;\n  @media screen and (max-width: 1366px) {\n    top: 0vw;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: 180px 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n    max-height: none;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 240px 0 0 0;\n    min-width: 102%;\n    max-width: 102%;\n    min-height: 100vh;\n  }\n  @media screen and (max-width: 768px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 180vh;\n    margin: 300px 0 0 0;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    min-height: 800px;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 130vh;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    min-height: 700px;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    margin: 340px 0 0 0;\n  }\n  @media screen and (max-width: 420px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n",
            ]))
        ),
        $t = J.b.div(
          At ||
            (At = Object(M.a)([
              "\n  height: auto !important;\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 52%;\n  max-width: 52%;\n  margin: 2vw 0 0 0;\n  justify-content: center;\n  @media screen and (max-width: 1200px) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n  }\n  @media screen and (max-width: 1200px) and (orientation: landscape) {\n    margin: 5vw 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 110vh;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 5vw 0 0 0;\n    min-height: 100vh;\n  }\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 900px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 40% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 30% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    padding: 0 0 80% 0;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 700px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    padding: 0 0 90% 0;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 140% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    padding: 0 0 90% 0;\n  }\n  @media screen and (max-width: 400px) {\n    padding: 0 0 25% 0;\n  }\n  @media screen and (max-width: 380px) {\n    padding: 0 0 30% 0;\n  }\n  @media screen and (max-width: 350px) {\n    padding: 0 0 45% 0;\n  }\n  @media screen and (max-width: 330px) {\n    padding: 0 0 58% 0;\n  }\n",
            ]))
        );
      var ni = Object(J.a)(
          Xt ||
            (Xt = Object(M.a)([
              "\n  body {\n    margin: 0%;\n    padding: 0%;\n  }\n",
            ]))
        ),
        ei = function () {
          return W.a.createElement(
            wt,
            null,
            W.a.createElement(
              "div",
              null,
              W.a.createElement(ni, null),
              W.a.createElement(Qt, null)
            )
          );
        };
      P.a.render(W.a.createElement(ei, null), document.getElementById("root"));
    },
  },
  [[38, 1, 2]],
]);
//# sourceMappingURL=main.9efb5de4.chunk.js.map
