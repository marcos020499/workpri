(this.webpackJsonpprisa = this.webpackJsonpprisa || []).push([
  [0],
  {
    38: function (n, e, t) {
      n.exports = t(53);
    },
    46: function (n, e, t) {},
    51: function (n, e, t) {},
    53: function (n, e, t) {
      "use strict";
      t.r(e);
      var a,
        i,
        d,
        r,
        c,
        o,
        l,
        p,
        m,
        x,
        s,
        h,
        w,
        u,
        v,
        g,
        f,
        b,
        j,
        O,
        y,
        E,
        _,
        z,
        k,
        L,
        C,
        R,
        S,
        T,
        I,
        B,
        N = t(0),
        A = t.n(N),
        P = t(24),
        M = t.n(P),
        W = t(1),
        V = t(7),
        D = t(6),
        U = t(21),
        F = t(8),
        J =
          (t(46),
          function (n) {
            var e,
              t = Object(N.useState)(!1),
              a = Object(D.a)(t, 2),
              i = a[0],
              d = a[1];
            return A.a.createElement(
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
                A.a.createElement(
                  "div",
                  { className: "Tooltip-Tip ".concat(n.direction || "top") },
                  n.content
                )
            );
          }),
        q = t(2),
        G = t(36),
        H =
          (Object(q.b)(G.a)(
            a ||
              (a = Object(W.a)([
                "\n  color: #003366;\n  @media screen and (max-width: 768px) {\n  }\n",
              ]))
          ),
          q.b.table(
            i ||
              (i = Object(W.a)([
                "\n  margin: auto;\n  min-heigth: 1067px;\n  max-heigth: 1067px;\n",
              ]))
          )),
        K = q.b.tr(
          d ||
            (d = Object(W.a)([
              '\n  font-family: "Radikal1";\n  display: flex;\n  position: relative;\n  width: 200px;\n  top: -60px;\n  align-items: flex-end;\n  justify-content: center;\n  text-align: center;\n  @media screen and (max-width: 1500px) {\n    top: -50px;\n    width: 180px;\n    }\n  @media screen and (max-width: 1367px) {\n    top: -40px;\n  }\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    top: -30px;\n  }\n  @media screen and (max-height: 768px) and (orientation: landscape) {\n    top: -20px;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    top: 0px;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: 180px;\n    max-width: 180px;\n  }\n  @media screen and (max-height: 601px) {\n    top: 10px;\n    min-width: 180px;\n    max-width: 180px;\n  }\n\n  @media screen and (max-width: 400px) {\n    min-width: 140px;\n    max-width: 140px;\n  }\n  @media screen and (max-width: 350px) {\n    min-width: 130px;\n    max-width: 130px;\n  }\n',
            ]))
        ),
        Q = q.b.tr(r || (r = Object(W.a)([""]))),
        X =
          (q.b.img(
            c ||
              (c = Object(W.a)([
                "\n  width: 100px;\n  color: white;\n  @media screen and (max-width: 1024px) {\n    width: 95px;\n  }\n",
              ]))
          ),
          q.b.img(o || (o = Object(W.a)(["\n  ", "\n"])), function (n) {
            var e = n.size;
            return "width: ".concat(
              { _1: "7.5", _4: "10", _19: "11" }["_" + e],
              "vh"
            );
          })),
        Y = q.b.div(
          l ||
            (l = Object(W.a)([
              "\n  font-size: 1.1vw;\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        Z = q.b.td(
          p ||
            (p = Object(W.a)([
              "\n  padding: none;\n  width: 33%;\n  @media screen and (max-width: 1367px) {\n    width: 33%;\n  }\n  @media screen and (max-width: 600px) {\n    width: 30%;\n  }\n",
            ]))
        ),
        $ = q.b.input(
          m ||
            (m = Object(W.a)([
              "\n  border-radius: 7px;\n  min-width: 30px;\n  max-width: 30px;\n  text-align: center;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    font-size: 14px;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 8vw 0 1vw;\n    position: relative;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    left: -15%;\n  }\n  @media screen and (max-width: 400px) {\n    width: 25px;\n    margin: 0 5vw 0 1vw;\n  }\n",
            ]))
        ),
        nn = q.b.input(
          x ||
            (x = Object(W.a)([
              '\n  font-family: "Radikal1";\n  width: 95px;\n  font-size: 11px;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  text-align: center;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        en = q.b.input(
          s ||
            (s = Object(W.a)([
              '\n  font-family: "Radikal1";\n  width: 55px;\n  text-align: center;\n  font-size: 11px;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        tn = q.b.h3(
          h ||
            (h = Object(W.a)([
              '\n  font-size: 0.7vw;\n  color: white;\n  letter-spacing: 1px;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    font-size: 12px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
            ]))
        ),
        an = q.b.h3(
          w ||
            (w = Object(W.a)([
              '\n  font-size: 1.4vh;\n  color: white;\n  font-family: "RadikalBold";\n  width: 160px;\n  max-height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n  position: relative;\n  top: 10px;\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 160px;\n    text-align: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 150px;\n    margin: 0;\n    top: -10px\n  }\n  @media screen and (max-width: 600px) {\n    width: 120px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 400px) {\n    font-size: 11px;\n    width: 110px;\n  }\n  @media screen and (max-width: 340px) {\n    font-size: 10px;\n    width: 100px;\n  }\n',
            ]))
        ),
        dn = q.b.th(
          u ||
            (u = Object(W.a)([
              "\n  padding: 0 0 0 10px;\n  margin: -0.5vw 0 3vw 0;\n\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 1vh 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    margin: 0;\n    padding: 0;\n    margin: none;\n  }\n",
            ]))
        ),
        rn =
          (q.b.th(
            v ||
              (v = Object(W.a)([
                "\n  margin: 2vw;\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    padding: 0;\n    margin: none;\n  }\n",
              ]))
          ),
          q.b.tr(
            g ||
              (g = Object(W.a)([
                "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  left: -4%;\n  @media screen and (max-width: 1200px) {\n    position: relative;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    left: none;\n    justify-content: center;\n    position: relative;\n  }\n  @media screen and (max-width: 768px) {\n    align-items: center;\n    left: 0;\n    justify-content: center;\n    position: relative;\n  }\n",
              ]))
          )),
        cn = q.b.p(
          f ||
            (f = Object(W.a)([
              '\n  color: #2098ae;\n  font-size: 0.8vw;\n  margin: -5px 0 0 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 0 0 0;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    left: -15%;\n  }\n',
            ]))
        ),
        on = q.b.div(
          b ||
            (b = Object(W.a)([
              "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 1367px) {\n    flex-direction: column;\n    width: 100%;\n    margin: auto auto 0 auto;\n  }\n  @media screen and (max-width: 1200px) {\n    display: flex;\n    flex-direction: column;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0 3vh 0;\n    min-width: none;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n  }\n  @media screen and (max-width: 600px) {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n  }\n",
            ]))
        ),
        ln = q.b.div(
          j ||
            (j = Object(W.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: -35px 60px 0 0;\n  max-width: 100%;\n  @media screen and (max-width: 1500px) {\n    margin: -15px 20px 0 auto;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: -15px 0px 0 auto;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: -15px 60px 0 auto;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    padding: 0 0 10px 0;\n  }\n  @media screen and (max-width: 600px) {\n    margin: auto;\n    position: relative;\n    left: -12%;\n    padding: 0;\n    width: 90%;\n  }\n  @media screen and (max-height: 768px) and (orientation: landscape) {\n    left: 5%;\n  }\n  @media screen and (max-width: 400px) {\n    margin: auto;\n    position: relative;\n    left: -14%;\n    padding: 0;\n    width: 90%;\n  }\n  @media screen and (max-width: 350px) {\n    left: -15%;\n  }\n",
            ]))
        ),
        pn = q.b.input(
          O ||
            (O = Object(W.a)([
              "\n  border-radius: 100%;\n  width: 10px;\n  height: 13px;\n  border: 1px solid #003366;\n  margin: 0 0.7vw 0 0;\n  @media screen and (max-width: 768px) {\n    width: 7px;\n    height: 10px;\n    position: relative;\n    top: -1px;\n    margin: 0vw 1vw 0 1vw;\n  }\n",
            ]))
        ),
        mn =
          (q.b.button(
            y ||
              (y = Object(W.a)([
                '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 1367px) {\n    margin: -1vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0vw 0 5vw 0;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0vw 0 5vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
              ]))
          ),
          q.b.div(
            E ||
              (E = Object(W.a)([
                "\n  display: block;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 0 0vw 0;\n  @media screen and (max-width: 1366px) {\n    padding: 50px 0 0vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 1vw 0 0vw 0;\n  }\n",
              ]))
          ),
          function (n) {
            var e = n.nombre,
              t = n.rgb,
              a = n.area,
              i = n.litros,
              d = n.presentaciones,
              r = n.cantidad4_1L,
              c = n.cantidad4_2L,
              o = n.cantidad4_3L,
              l = n.cantidad1_1L,
              p = n.cantidad1_2L,
              m = n.cantidad1_3L,
              x = n.cantidad19_1L,
              s = n.cantidad19_2L,
              h = n.cantidad19_3L,
              w = n.onChanges,
              u = n.indSecond,
              v =
                Object(F.c)(function (n) {
                  return n.colors;
                }).colores || [],
              g = Object(F.c)(function (n) {
                return n;
              }).result;
            return A.a.createElement(
              "div",
              null,
              A.a.createElement(
                H,
                {
                  style: {
                    margin:
                      2 === v.length || 2 === g.length ? "0 0 0 12%" : "auto",
                  },
                },
                A.a.createElement(
                  ln,
                  null,
                  A.a.createElement(
                    on,
                    null,
                    A.a.createElement(
                      Q,
                      null,
                      A.a.createElement(
                        dn,
                        null,
                        A.a.createElement(
                          J,
                          { content: e, direction: "top" },
                          A.a.createElement(
                            an,
                            null,
                            A.a.createElement(pn, {
                              disabled: "disabled",
                              style: { backgroundColor: t },
                            }),
                            e
                          )
                        )
                      )
                    ),
                    A.a.createElement(
                      rn,
                      null,
                      A.a.createElement(
                        dn,
                        null,
                        A.a.createElement(tn, null, "Area"),
                        A.a.createElement(nn, {
                          type: "text",
                          value: a + " mts",
                          readonly: "readonly",
                        })
                      ),
                      A.a.createElement(
                        dn,
                        null,
                        A.a.createElement(tn, null, "Litros"),
                        A.a.createElement(en, {
                          type: "text",
                          value: i + " lts",
                          readonly: "readonly",
                        })
                      )
                    ),
                    A.a.createElement(
                      K,
                      null,
                      d.map(function (n, e) {
                        return e <= n.presentacion_id
                          ? A.a.createElement(
                              xn,
                              Object.assign({ key: e + "presentaciones" }, n, {
                                i: u,
                                state4_1: r,
                                state4_2: c,
                                state4_3: o,
                                state1_1: l,
                                state1_2: p,
                                state1_3: m,
                                state19_1: x,
                                state19_2: s,
                                state19_3: h,
                                onChanges1: w,
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
          t = n.cantidad,
          a = n.state4_1,
          i = n.state4_2,
          d = n.state4_3,
          r = n.state1_1,
          c = n.state1_2,
          o = n.state1_3,
          l = n.state19_1,
          p = n.state19_2,
          m = n.state19_3,
          x = n.onChanges1,
          s = n.i,
          h = { _1: "1L", _4: "4L", _19: "19L" }["_" + e];
        return A.a.createElement(
          Z,
          null,
          A.a.createElement(
            Y,
            null,
            A.a.createElement(X, {
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
            A.a.createElement(cn, null, h),
            A.a.createElement($, {
              type: "number",
              min: "0",
              max: "10",
              defaultValue: "0",
              step: "1",
              value:
                4 === e && 0 === s
                  ? 0 === a
                    ? t
                    : a
                  : 4 === e && 1 === s
                  ? 0 === i
                    ? t
                    : i
                  : 4 === e && 2 === s
                  ? 0 === d
                    ? t
                    : d
                  : 1 === e && 0 === s
                  ? 0 === r
                    ? t
                    : r
                  : 1 === e && 1 === s
                  ? 0 === c
                    ? t
                    : c
                  : 1 === e && 2 === s
                  ? 0 === o
                    ? t
                    : o
                  : 19 === e && 0 === s
                  ? 0 === l
                    ? t
                    : l
                  : 19 === e && 1 === s
                  ? 0 === p
                    ? t
                    : p
                  : 19 === e && 2 === s
                  ? 0 === m
                    ? t
                    : m
                  : t,
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
          )
        );
      }
      var sn,
        hn = q.b.div(
          _ ||
            (_ = Object(W.a)([
              "\n  text-align: center;\n  @media screen and (max-width: 1200px) {\n    padding: 50px 0 0 0;\n    width: 100%;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 30px 0 0 0;\n    width: 100%;\n  }\n",
            ]))
        ),
        wn =
          (q.b.div(
            z ||
              (z = Object(W.a)([
                "\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  justify-content: center;\n  padding: 25px 0 0vw 0;\n  @media screen and (max-width: 1367px) {\n    flex-direction: row;\n  }\n  @media screen and (max-width: 1024px) {\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n",
              ]))
          ),
          q.b.div(
            k ||
              (k = Object(W.a)([
                "\n  display: block;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 1024px) {\n    padding: 1vw 0 0vw 0;\n  }\n  @media screen and (max-height: 769px) and (orientation: landscape) {\n    padding: 30px 0 0 0;\n  }\n  @media screen and (max-height: 601px) {\n    padding: 50px 0 0 0;\n  }\n",
              ]))
          )),
        un = q.b.button(
          L ||
            (L = Object(W.a)([
              '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  top: -60px;\n  @media screen and (max-width: 1500px) {\n    top: -60px;\n    }\n  @media screen and (max-width: 1367px) {\n    top: -40px;\n    margin: -1vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0vw 0 5vw 0;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0vw 0 5vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        vn = q.b.img(
          C ||
            (C = Object(W.a)([
              "\n  width: 130px;\n  @media screen and (max-width: 1500px) {\n    width: 115px;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 105px;\n  }\n",
            ]))
        ),
        gn = q.b.img(
          R ||
            (R = Object(W.a)([
              "\n  width: 100%;\n  height: 20%;\n  max-height: 300px;\n  @media screen and (max-width: 1200px) {\n    display: none;\n  }\n\n  @media screen and (max-width: 1024px) {\n    display: none;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
            ]))
        ),
        fn = q.b.h1(
          S ||
            (S = Object(W.a)([
              '\n  font-family: "RadikalBold";\n  font-size: 33px;\n  color: white;\n  letter-spacing: 4px;\n  @media screen and (max-width: 1024px) {\n    padding: 30px 0 0 0;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 0 10px 0;\n    font-size: 20px;\n    justify-content: center;\n  }\n',
            ]))
        ),
        bn = q.b.h2(
          T ||
            (T = Object(W.a)([
              '\n  font-family: "RadikalBold";\n  color: #2098ae;\n  font-size: 19px;\n  letter-spacing: 1px;\n  margin: -20px 0 0 0;\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    font-size: 17px;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 10px 0 0 0;\n    font-size: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    display: flex;\n    margin: none;\n    padding: 10vw 0 0 0;\n    justify-content: center;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    position: relative;\n    top: 5px;\n  }\n',
            ]))
        ),
        jn = q.b.h2(
          I ||
            (I = Object(W.a)([
              '\n  margin: -5px 0 0 0;\n  letter-spacing: 2px;\n  font-family: "RadikalBold";\n  color: white;\n  font-size: 22px;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    display: flex;\n    padding: 0 0 20px 0;\n    justify-content: center;\n  }\n',
            ]))
        ),
        On = q.b.div(
          B ||
            (B = Object(W.a)([
              "\n  display: flex; \n  margin: auto; \n  justify-content: center;\n  padding: 3% 2% 0 2%;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        yn = function () {
          var n = Object(F.c)(function (n) {
              return n;
            }),
            e = n.result,
            t = n.colors.linea_producto,
            a =
              Object(F.c)(function (n) {
                return n.colors;
              }).colores || [],
            i = Object(N.useReducer)(
              function (n, e) {
                return Object(U.a)(Object(U.a)({}, n), e);
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
            d = Object(D.a)(i, 2),
            r = d[0],
            c = d[1],
            o = function (n) {
              c(Object(V.a)({}, n.target.name, n.target.value));
            };
          return A.a.createElement(
            "div",
            null,
            t && A.a.createElement(gn, { src: t.url_imagen_inspiracion }),
            A.a.createElement(
              hn,
              null,
              A.a.createElement(fn, null, "RESULTADO"),
              A.a.createElement(bn, null, "PRISA TE RECOMIENDA"),
              t && A.a.createElement(vn, { src: t.url_imagen }),
              A.a.createElement(jn, null, "Elige la presentaci\xf3n "),
              A.a.createElement(
                On,
                null,
                0 === e.length
                  ? a.map(function (n, e) {
                      return A.a.createElement(
                        mn,
                        Object.assign({ key: e + "pintura" }, n, e)
                      );
                    })
                  : e.map(function (n, e) {
                      return A.a.createElement(
                        mn,
                        Object.assign({ key: e + "pintura" }, n, e, r, {
                          indSecond: e,
                          onChanges: o,
                        })
                      );
                    })
              ),
              A.a.createElement(
                wn,
                null,
                A.a.createElement("h1", null, " "),
                A.a.createElement(
                  "a",
                  {
                    href:
                      "http://ec2-44-242-66-211.us-west-2.compute.amazonaws.com/finalizar-compra/?add-to-cart="
                        .concat(
                          e.map(function (n, e) {
                            return n.presentaciones.map(function (n, t) {
                              return 4 === n.litros && 0 === e
                                ? (r.cantidad4_1L > n.cantidad ||
                                  r.cantidad4_1L < n.cantidad
                                    ? (r.cantidad4_1L = n.cantidad)
                                    : r.cantidad4_1L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_1L
                                : 4 === n.litros && 1 === e
                                ? (r.cantidad4_2L > n.cantidad ||
                                  r.cantidad4_2L < n.cantidad
                                    ? (r.cantidad4_2L = n.cantidad)
                                    : r.cantidad4_2L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_2L
                                : 4 === n.litros && 2 === e
                                ? (r.cantidad4_3L > n.cantidad ||
                                  r.cantidad4_3L < n.cantidad
                                    ? (r.cantidad4_3L = n.cantidad)
                                    : r.cantidad4_3L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad4_3L
                                : 1 === n.litros && 0 === e
                                ? (r.cantidad1_1L < n.cantidad ||
                                  r.cantidad1_1L > n.cantidad
                                    ? (r.cantidad1_1L = n.cantidad)
                                    : r.cantidad1_1L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_1L
                                : 1 === n.litros && 1 === e
                                ? (r.cantidad1_2L > n.cantidad ||
                                  r.cantidad1_2L < n.cantidad
                                    ? (r.cantidad1_2L = n.cantidad)
                                    : r.cantidad1_2L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_2L
                                : 1 === n.litros && 2 === e
                                ? (r.cantidad1_3L > n.cantidad ||
                                  r.cantidad1_3L < n.cantidad
                                    ? (r.cantidad1_3L = n.cantidad)
                                    : r.cantidad1_3L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad1_3L
                                : 19 === n.litros && 0 === e
                                ? (r.cantidad19_1L > n.cantidad ||
                                  r.cantidad19_1L < n.cantidad
                                    ? (r.cantidad19_1L = n.cantidad)
                                    : r.cantidad19_1L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad19_1L
                                : 19 === n.litros && 1 === e
                                ? (r.cantidad19_2L > n.cantidad ||
                                  r.cantidad19_2L < n.cantidad
                                    ? (r.cantidad19_2L = n.cantidad)
                                    : r.cantidad19_2L) < 1
                                  ? null
                                  : n.presentacion_id + ":" + r.cantidad19_2L
                                : 19 === n.litros && 2 === e
                                ? (r.cantidad19_3L > n.cantidad ||
                                  r.cantidad19_3L < n.cantidad
                                    ? (r.cantidad19_3L = n.cantidad)
                                    : r.cantidad19_3L) < 1
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
                  A.a.createElement(un, null, "Comprar")
                )
              )
            )
          );
        },
        En = t(11),
        _n = t(66);
      function zn(n) {
        var e = n.name,
          t = n.size,
          a = {
            colors:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg",
            vertical:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
            horizontal:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
            door: "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg",
            window:
              "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg",
          }[e];
        return A.a.createElement(Bn, { src: a, size: t });
      }
      var kn,
        Ln,
        Cn,
        Rn,
        Sn,
        Tn,
        In,
        Bn = q.b.img(
          sn ||
            (sn = Object(W.a)([
              "\n  margin: none;\n  padding: none;\n  ",
              "\n",
            ])),
          function (n) {
            var e = n.size;
            return "width: ".concat(e, "px; height: ").concat(e, "px;");
          }
        );
      function Nn(n) {
        var e = n.children,
          t = n.select,
          a = n.colors,
          i = n.visible,
          d = n.onSelect,
          r = n.onClose;
        return A.a.createElement(
          An,
          null,
          e,
          A.a.createElement(Pn, { visible: i, onClick: r }),
          A.a.createElement(
            Mn,
            { visible: i },
            A.a.createElement(Vn, null, "Colores a elegir"),
            A.a.createElement(
              Wn,
              null,
              null === a || void 0 === a
                ? void 0
                : a.map(function (n, e) {
                    return A.a.createElement(Dn, {
                      key: e,
                      color: n,
                      select: t,
                      index: e,
                      onClick: d,
                    });
                  })
            )
          )
        );
      }
      var An = q.b.div(
          kn ||
            (kn = Object(W.a)([
              "\n  padding: none;\n  margin: none;\n  display: inline-block;\n  top: 0;\n  left: 0;\n",
            ]))
        ),
        Pn = q.b.div(
          Ln ||
            (Ln = Object(W.a)([
              "\n  visibility: ",
              ";\n  position: fixed;\n  width: 100vw;\n  higith: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  line-height: 1;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  rigth: 0;\n  bottom: 0;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Mn = q.b.div(
          Cn ||
            (Cn = Object(W.a)([
              "\n  position: absolute;\n  visibility: ",
              ";\n  background-color: white;\n  border-radius: 6px;\n  z-index: 3;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Wn = q.b.div(
          Rn ||
            (Rn = Object(W.a)([
              "\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n  height: 45px;\n",
            ]))
        ),
        Vn = q.b.p(
          Sn ||
            (Sn = Object(W.a)(["\n  color: #003366;\n  font-size: 10px;\n"]))
        );
      function Dn(n) {
        var e = n.index,
          t = n.color,
          a = n.select,
          i = n.onClick;
        return A.a.createElement(
          re,
          {
            select: a,
            color: t,
            onClick: function () {
              i(e);
            },
          },
          A.a.createElement(ce, { color: t })
        );
      }
      var Un,
        Fn,
        Jn,
        qn,
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
        te,
        ae,
        ie,
        de,
        re = q.b.div(
          Tn ||
            (Tn = Object(W.a)([
              "\n  border: 2px solid\n    ",
              ";\n  width: 23px;\n  height: 23px;\n  margin: auto;\n",
            ])),
          function (n) {
            var e = n.select,
              t = n.color;
            return "".concat(e === t ? t : "black");
          }
        ),
        ce = q.b.div(
          In ||
            (In = Object(W.a)([
              "\n  width: 100%;\n  height: 100%;\n  background-color: ",
              ";\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e);
          }
        ),
        oe = t(65);
      var le = function (n) {
          var e = n.id,
            t = n.onSubmit,
            a = (function () {
              var n = Object(N.useState)(0),
                e = Object(D.a)(n, 2),
                t = (e[0], e[1]);
              return function () {
                return t(function (n) {
                  return n + 1;
                });
              };
            })(),
            i = Object(N.useReducer)(function (n, e) {
              return e || n;
            }, []),
            d = Object(D.a)(i, 2),
            r = d[0],
            c = d[1],
            o = Object(N.useState)(!0),
            l = Object(D.a)(o, 2),
            p = l[0],
            m = l[1];
          function x(n, i, d) {
            var o = Object(En.a)(r);
            (o[n][i] = d), c(o), t(e, o), a();
          }
          return A.a.createElement(
            "div",
            null,
            A.a.createElement(
              gt,
              null,
              p
                ? A.a.createElement(pe, { hidden: !0 })
                : A.a.createElement(
                    "div",
                    null,
                    r.map(function (n, e) {
                      return A.a.createElement(pe, {
                        key: e,
                        hidden: !1,
                        values: n,
                        inp: e,
                        identifier: e,
                        onChange: x,
                      });
                    })
                  ),
              A.a.createElement(
                bt,
                null,
                A.a.createElement(
                  kt,
                  {
                    onClick: function () {
                      if (4 !== r.length) {
                        var n = [].concat(Object(En.a)(r), [
                          "puertas" === e
                            ? { largo: 2, ancho: 1 }
                            : { largo: 1, ancho: 1 },
                        ]);
                        c(n), t(e, n), m(!1);
                      }
                    },
                  },
                  "+"
                ),
                A.a.createElement("div", { style: { height: "5px" } }),
                !p &&
                  A.a.createElement(
                    kt,
                    {
                      onClick: function () {
                        if (0 !== r.length) {
                          var n = r.slice(0, -1);
                          c(n), t(e, n), 0 === n.length && m(!0);
                        }
                      },
                    },
                    "-"
                  )
              )
            )
          );
        },
        pe = function (n) {
          var e = n.identifier,
            t = n.values,
            a = n.hidden,
            i = n.onChange,
            d = n.inp,
            r = function (n, t) {
              console.log("size", n, t), i(e, n, t);
            };
          return A.a.createElement(
            "div",
            { style: a ? { visibility: "hidden" } : {} },
            A.a.createElement(
              ft,
              {
                style: {
                  width: d < 1 ? "" : "135px",
                  marginLeft: d < 1 ? "0" : "22px",
                },
              },
              A.a.createElement(me, {
                lIcon: d < 1 ? "vertical" : "",
                value: null === t || void 0 === t ? void 0 : t.largo,
                onChangeText: function (n) {
                  return r("largo", n);
                },
              }),
              A.a.createElement(me, {
                lIcon: d < 1 ? "horizontal" : "",
                value: null === t || void 0 === t ? void 0 : t.ancho,
                onChangeText: function (n) {
                  return r("ancho", n);
                },
              })
            )
          );
        },
        me = function (n) {
          var e = n.onChangeText,
            t = n.lIcon,
            a = n.value;
          return (
            console.log("Simple item", a),
            A.a.createElement(
              pt,
              null,
              t && A.a.createElement(zn, { name: t, size: 20 }),
              A.a.createElement(mt, {
                type: "number",
                value: a,
                onChange: function (n) {
                  var t = n.target;
                  console.log("v", a, "target", t.value),
                    e(parseFloat(t.value));
                },
                min: "0.5",
                max: "5",
                step: "0.5",
              }),
              A.a.createElement(xt, null, "mts")
            )
          );
        },
        xe = function (n) {
          var e = n.id,
            t = n.onSubmit,
            a = n.defaultValue,
            i = Object(N.useState)(a),
            d = Object(D.a)(i, 2),
            r = d[0],
            c = d[1];
          return (
            Object(N.useEffect)(function () {
              t(e, parseFloat(r));
            }, []),
            A.a.createElement(
              pt,
              null,
              A.a.createElement(mt, {
                type: "number",
                value: r,
                onChange: function (n) {
                  var a = n.target;
                  c(a.value), t(e, parseFloat(a.value));
                },
                min: "0.5",
                max: "5",
                step: "0.5",
              }),
              A.a.createElement(xt, null, "mts")
            )
          );
        },
        se = function (n) {
          var e = n.title,
            t = n.icon,
            a = n.size;
          function i() {
            return A.a.createElement(
              wt,
              null,
              a
                ? A.a.createElement(_t, null, "Metros")
                : A.a.createElement(_t, null, "\u200f\u200f\u200e \u200e"),
              A.a.createElement(Et, null, e)
            );
          }
          var d = n.end ? "true" : "false";
          return A.a.createElement(
            st,
            { end: d },
            A.a.createElement(
              ht,
              null,
              A.a.createElement(zn, { name: t, size: 42 }),
              A.a.createElement(i, null)
            )
          );
        };
      function he(n) {
        var e,
          t = n.index,
          a = n.selectControl,
          i = n.onSelectControl,
          d = n.onSubmit,
          r =
            Object(F.c)(function (n) {
              return n.colors;
            }).colores || [],
          c = Object(N.useState)(!1),
          o = Object(D.a)(c, 2),
          l = o[0],
          p = o[1],
          m = Object(N.useState)(null),
          x = Object(D.a)(m, 2),
          s = x[0],
          h = x[1],
          w = Object(F.c)(function (n) {
            return n;
          }).colors1,
          u = r.map(function (n) {
            return n.rgb;
          }),
          v = A.a.useState("a"),
          g = Object(D.a)(v, 2),
          f = g[0],
          b = g[1],
          j = function (n) {
            b(n.target.value);
          };
        function O(n) {
          p(!1), console.log("callign color set"), h(u[n]), d(u[n]);
        }
        return (
          Object(N.useEffect)(
            function () {
              1 === t && 1 === u.length && O(0), a || h(null);
            },
            [a, r, O]
          ),
          A.a.createElement(
            Ot,
            null,
            A.a.createElement(
              jt,
              null,
              A.a.createElement(
                vt,
                Object.assign(
                  {},
                  {
                    checked: f === (e = "e"),
                    onChange: j,
                    value: e,
                    name: "color-radio-button-demo",
                    inputProps: { "aria-label": e },
                  },
                  {
                    sx: {
                      color: oe.a[800],
                      "&.Mui-checked": { color: oe.a[800] },
                    },
                    type: "radio",
                    checked: a,
                    onClick: function (n) {
                      i(function (n) {
                        return !n;
                      });
                    },
                  }
                )
              ),
              A.a.createElement("div", { style: { width: "1em" } }),
              !1 ===
                !!(null === w || void 0 === w ? void 0 : w.impermeabilizante)
                ? A.a.createElement(
                    zt,
                    null,
                    t < 5 ? "".concat("Pared" + t) : "Techo"
                  )
                : A.a.createElement(zt, null, "Azotea")
            ),
            A.a.createElement(
              Nn,
              {
                select: s,
                colors: u,
                onSelect: O,
                visible: l,
                onClose: function () {
                  return p(!1);
                },
              },
              A.a.createElement(ut, {
                color: s,
                type: "button",
                checked: !!s,
                onClick: function (n) {
                  a &&
                    p(function (n) {
                      return !n;
                    });
                },
              })
            )
          )
        );
      }
      var we,
        ue,
        ve,
        ge,
        fe,
        be,
        je,
        Oe,
        ye,
        Ee,
        _e,
        ze,
        ke,
        Le,
        Ce,
        Re,
        Se,
        Te,
        Ie,
        Be,
        Ne,
        Ae,
        Pe,
        Me,
        We,
        Ve,
        De,
        Ue,
        Fe,
        Je,
        qe,
        Ge,
        He,
        Ke,
        Qe,
        Xe,
        Ye,
        Ze,
        $e,
        nt,
        et,
        tt,
        at,
        it,
        dt,
        rt,
        ct,
        ot,
        lt,
        pt = q.b.div(
          Un ||
            (Un = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tpadding: 0.2vw 0 0 0;\n\tposition: relative;\n\tleft: 15%;\n\talign-items: flex-start;\n\t@media screen and (max-width: 768px) {\n\t\tleft: 4%;\n\t}\n",
            ]))
        ),
        mt = q.b.input(
          Fn ||
            (Fn = Object(W.a)([
              "\n\tborder: none;\n\tborder-bottom: 1px solid #003366;\n\tmax-width: 33px;\n\tmin-height: auto;\n\tfont-size: 13px;\n\ttext-align: end;\n\t@media screen and (max-width: 1367px) {\n\t\tmax-width: 35px;\n\t\tfont-size: 12px;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmax-width: 30px;\n\t\tfont-size: 11px;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmax-width: 30px;\n\t\tfont-size: 10px;\n\t}\n",
            ]))
        ),
        xt = q.b.p(
          Jn ||
            (Jn = Object(W.a)([
              '\n\tfont-size: 0.5em;\n\tcolor: #003366;\n\tfont-family: "Radikal1";\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 8px;\n\t}\n',
            ]))
        ),
        st = q.b.div(
          qn ||
            (qn = Object(W.a)([
              '\n\tfont-size: 0.8em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: "Radikal1";\n\talign-items: ',
              ";\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0 0 30px 0;\n\t}\n",
            ])),
          function (n) {
            return "true" === n.end ? "flex-end" : "center";
          }
        ),
        ht = q.b.div(
          Gn ||
            (Gn = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n",
            ]))
        ),
        wt = q.b.div(
          Hn || (Hn = Object(W.a)(["\n\tdisplay: block;\n\tline-height: 0;\n"]))
        ),
        ut = q.b.input(
          Kn ||
            (Kn = Object(W.a)([
              "\n\twidth: 21px;\n\theight: 21px;\n\tbackground-color: ",
              ";\n\tborder-radius: 999px;\n\tborder: 0.4px solid gray;\n\tposition: relative;\n\t@media screen and (max-width: 1367px) {\n\t\tleft: -10px;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tleft: -20px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tleft: -60px;\n\t}\n\t@media screen and (max-width: 500px) {\n\t\tleft: -70px;\n\t}\n\t@media screen and (max-width: 450px) {\n\t\tleft: -80px;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tleft: -95px;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tleft: -98px;\n\t}\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        vt = Object(q.b)(_n.a)(
          Qn ||
            (Qn = Object(W.a)([
              "\n\twidth: 1.5em;\n\theight: 1.5em;\n\tbackground-color: ",
              ";\n\tborder-radius: 999px;\n\n\t@media screen and (max-width: 500px) {\n\t\tmargin: 0 0 0 10px;\n\t}\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        gt = q.b.div(
          Xn ||
            (Xn = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\tposition: relative;\n\tleft: -5px;\n\twidth: 200px;\n\tmargin: 0 1vw 0 1vw;\n\t@media screen and (max-width: 1500px) {\n\t\twidth: 180px;\n\t\tmargin: 0 1vw 0 1vw;\n\t}\n\t@media screen and (max-width: 1367px) {\n\t\twidth: 170px;\n\t\tmargin: 0 0 0 0.5vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 0 2vw 0 2vw;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmargin: 0 1.7vw 0 1.7vw;\n\t\tleft: -20px;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0 -3vw 0 0.5vw;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0 -4vw 0 0.5vw;\n\t}\n",
            ]))
        ),
        ft = q.b.div(
          Yn ||
            (Yn = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\tposition: relative;\n\twidth: 155px;\n\tjustify-content: space-between;\n\ttop: 7px;\n\tleft: -14%;\n\tmargin: -0.6vw 0 0 0;\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 0 3vw 0 20px;\n\t\tleft: -18%;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmargin: 0 1.5vw 0 20px;\n\t\tleft: -14%;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0.1vw -2vw 0 30px;\n\t\tleft: 5%;\n\t}\n",
            ]))
        ),
        bt = q.b.div(
          Zn ||
            (Zn = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex-direction: column;\n\t@media screen and (max-width: 768px) {\n\t\tflex-direction: row;\n\t\tposition: absolute;\n\t}\n",
            ]))
        ),
        jt = Object(q.b)(gt)(
          $n || ($n = Object(W.a)(["\n\talign-items: center;\n"]))
        ),
        Ot = Object(q.b)(gt)(
          ne ||
            (ne = Object(W.a)([
              "\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin: 0 10% 0 10%;\n\twidth: 180px;\n\tpadding: 0px 30px 60px 0;\n\t@media screen and (max-width: 1600px) {\n\t\tmargin: 0 0% 0 2%;\n\t\twidth: 180px;\n\t\tpadding: 0 1px 55px 0;\n\t}\n\t@media screen and (max-width: 1367px) {\n\t\twidth: 150px;\n\t\tmargin: 0 2% 0 5%;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\twidth: 180px;\n\t\tmargin: 0 4vw 55px 7vw;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmargin: 0 3vw 55px 7vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0 -2vw 55px 8vw;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0 -12vw 55px 8vw;\n\t}\n\t@media screen and (max-width: 500px) {\n\t\tmargin: 0 -18vw 55px 10vw;\n\t}\n\t@media screen and (max-width: 450px) {\n\t\tmargin: 0 -24vw 55px 10vw;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tmargin: 0 -30vw 55px 12vw;\n\t}\n\t@media screen and (max-width: 330px) {\n\t\tmargin: 0 -35vw 55px 14vw;\n\t}\n",
            ]))
        ),
        yt = q.b.p(
          ee ||
            (ee = Object(W.a)([
              '\n\tmargin: none;\n\tpadding: none;\n\tfont-family: "RadikalBold";\n\tcolor: #003366;\n',
            ]))
        ),
        Et = Object(q.b)(yt)(
          te ||
            (te = Object(W.a)([
              "\n\tfont-size: 1em;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 13px;\n\t}\n\t@media screen and (orientation: landscape) {\n\t\tfont-size: 15px;\n\t}\n",
            ]))
        ),
        _t = Object(q.b)(yt)(
          ae ||
            (ae = Object(W.a)([
              "\n\tfont-size: 0.7em;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 9px;\n\t}\n",
            ]))
        ),
        zt = Object(q.b)(yt)(
          ie ||
            (ie = Object(W.a)([
              '\n\tfont-size: 1.3;\n\tfont-family: "Radikal1";\n\tposition: relative;\n\tletter-spacing: 2px;\n\tleft: -10px;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 13px;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tfont-size: 12px;\n\t}\n',
            ]))
        ),
        kt = q.b.button(
          de ||
            (de = Object(W.a)([
              "\n\tborder-radius: 100%;\n\tborder: none;\n\tbackground: #b70033;\n\tcolor: white;\n\tpadding: 0;\n\tfont-size: 1.2vh;\n\twidth: 1.3vh;\n\tposition: relative;\n\tleft: 25px;\n\t@media screen and (max-width: 1500px) {\n\t\tleft: 5px;\n\t}\n\t@media screen and (max-width: 1367px) {\n\t\tleft: 3px;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tleft: -20px;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tleft: -10px;\n\t}\n\n\t@media screen and (max-width: 1024px) and (orientation: landscape) {\n\t\twidth: 1.6vh;\n\t}\n\t@media screen and (max-height: 700px) and (orientation: landscape) {\n\t\twidth: 2.3vh;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tposition: relative;\n\t\tfont-size: 10px;\n\t\tleft: 50px;\n\t\ttop: -25px;\n\t\theight: 2vh;\n\t\twidth: 2vh;\n\t\tmargin: 2vw;\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\twidth: 1.75vh;\n\t}\n\t@media screen and (max-width: 400px) and (orientation: landscape) {\n\t\twidth: 1.9vh;\n\t}\n",
            ]))
        ),
        Lt =
          (t(51),
          q.b.div(
            we ||
              (we = Object(W.a)([
                "\n  text-align: center;\n  padding: 0vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    width: 100vw;\n    height: 800px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100vw;\n    height: 800px;\n  }\n",
              ]))
          ),
          q.b.tr(
            ue ||
              (ue = Object(W.a)([
                "\n  padding: 1vw 0 4vh 0;\n  max-width: 2vw;\n  min-width: 2vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 3vw 0 0vw 0;\n  }\n",
              ]))
          ),
          q.b.h1(
            ve ||
              (ve = Object(W.a)([
                '\n  font-family: "RadikalBold";\n  font-size: 2.7vh;\n  padding: 0 0 0 3vw;\n  text-align: left;\n  font-weight: 1000;\n  letter-spacing: 1.7px;\n  color: #003366;\n  @media screen and (max-width: 600px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 1vw 8vw;\n  }\n',
              ]))
          )),
        Ct = q.b.div(
          ge ||
            (ge = Object(W.a)([
              "\n  padding: 0 4vw 3vw 4vw;\n  justify-content: space-between;\n  display: flex;\n  @media screen and (max-width: 1024px) {\n    padding: 0 4vw 5vw 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 4vw 7vw 4vw;\n  }\n",
            ]))
        ),
        Rt = q.b.button(
          fe ||
            (fe = Object(W.a)([
              '\n  min-width: 80px;\n  width: auto;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.5vh;\n  background: #003366;\n  color: white;\n  font-family: "RadikalMedium";\n  font-weight: 1000;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: right;\n  @media screen and (max-width: 1024px) {\n    font-size: 12.6px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12.6px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        St = q.b.button(
          be ||
            (be = Object(W.a)([
              '\n  min-width: 105px;\n  width: auto;\n  height: 35px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 12px 0 12px;\n  justify-content: right;\n  align-items: right;\n  font-size: 14px;\n  background: #b70033;\n  color: white;\n  font-family: "Radikal1";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 14px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        Tt =
          (q.b.small(
            je ||
              (je = Object(W.a)([
                '\n  font-size: 1vh;\n  margin: none;\n  padding: none;\n  color: #003366;\n  padding: 0;\n  font-family: "RadikalBold";\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 23px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    padding: 0 0 5px 0;\n  }\n',
              ]))
          ),
          q.b.h2(
            Oe ||
              (Oe = Object(W.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 600px) {\n    margin: 0 1px 0 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    position: relative;\n    top: 2px;\n    padding: 0vw 0px 0 0;\n    margin: 0 2px 0 0;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1.5vw 0;\n  }\n',
              ]))
          ),
          q.b.h2(
            ye ||
              (ye = Object(W.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    padding: 0 0px 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0px 1.5vw 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    padding: 0 0 0 1vw;\n    justify-content: center;\n    position: relative;\n  }\n',
              ]))
          ),
          q.b.h2(
            Ee ||
              (Ee = Object(W.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.4vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 3px;\n    font-size: 11px;\n    margin: -0.4vw 0 -20px 0;\n    padding: 0vw 20px 0 0;\n  }\n  @media screen and (max-width: 600px) {\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1vw 0;\n  }\n',
              ]))
          ),
          q.b.h2(
            _e ||
              (_e = Object(W.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    padding: none;\n  }\n',
              ]))
          ),
          q.b.h2(
            ze ||
              (ze = Object(W.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 1367px) {\n    padding: 0vh 1.2vw 0 1.2vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0px 0 0px;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 0 10px 0 10px;\n  }\n',
              ]))
          ),
          q.b.div(
            ke ||
              (ke = Object(W.a)([
                '\n  font-family: "Radikal1";\n  text-align: right;\n  padding: none;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    padding: 0 0vw 0 0;\n    left: 10px;\n  }\n',
              ]))
          ),
          q.b.img(
            Le ||
              (Le = Object(W.a)([
                "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          q.b.img(
            Ce ||
              (Ce = Object(W.a)([
                "\n  margin: none;\n  position: relative;\n  left: -10px;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          q.b.img(
            Re ||
              (Re = Object(W.a)([
                "\n  margin: 0 0 0 0;\n  padding: none;\n  width: 4vh;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 768px) {\n    width: 10vw;\n  }\n",
              ]))
          ),
          q.b.div(
            Se || (Se = Object(W.a)(["\n  margin: -32px;\n  padding: none;\n"]))
          ),
          q.b.img(
            Te ||
              (Te = Object(W.a)([
                "\n  width: 1.8vh;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  top: -4px;\n  @media screen and (max-width: 1024px) {\n    width: 23px;\n    margin: 0 0.3vw 0 0.3vw;\n    padding: 0 0.3vw 0 0.3vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
              ]))
          ),
          q.b.div(
            Ie ||
              (Ie = Object(W.a)([
                "\n  display: flex;\n  flex: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 12vw;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 1024px) {\n    width: 20vw;\n    align-items: center;\n    margin: 0px -26px 25px 55px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 25vw;\n    align-items: center;\n    margin: 20px -36px 34px 15px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 19vw;\n    margin: 20px -20px 34px 20px;\n  }\n",
              ]))
          ),
          q.b.div(
            Be ||
              (Be = Object(W.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: space-between;\n  top: -10px;\n",
              ]))
          ),
          q.b.div(
            Ne ||
              (Ne = Object(W.a)([
                "\n  display: flex;\n  flex: center;\n  width: 11.7vw;\n  justify-content: center;\n",
              ]))
          ),
          q.b.p(
            Ae ||
              (Ae = Object(W.a)([
                '\n  font-size: 19px;\n  letter-spacing: 1.6px;\n  color: #003366;\n  position: relative;\n  left: 3.5vw;\n  top: -20px;\n  font-family: "Radikal1";\n\n  @media screen and (max-width: 1367px) {\n    font-size: 18px;\n    position: relative;\n    left: 25px;\n    top: -15px;\n    text-align: center;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -1.5vw;\n    font-size: 2vw;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    position: relative;\n    left: 4px;\n    top: 0px;\n    margin: 0;\n  }\n',
              ]))
          ),
          q.b.td(
            Pe ||
              (Pe = Object(W.a)([
                "\n  border-right: 1px solid #003366;\n  @media screen and (max-width: 768px) {\n    font-size: 2vw;\n  }\n",
              ]))
          ),
          q.b.td(
            Me ||
              (Me = Object(W.a)([
                "\n  border-right: 1px solid #003366;\n  padding: 0 0 5px 0;\n  max-height: 10vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0 0 0px 0;\n    max-height: 10vw;\n    margin: 0vw 0 5px 0;\n  }\n",
              ]))
          ),
          q.b.a(We || (We = Object(W.a)(["\n  color: black;\n"]))),
          q.b.input(
            Ve ||
              (Ve = Object(W.a)([
                "\n  width: 10.2vh;\n  height: 3.2vh;\n  border: none;\n  border-radius: 8px;\n  margin: 0 0 0 1vh;\n  box-shadow: rgba(0, 0, 0, 0.10) 10px 10px 36px 10px;\n  -webkit-appearance: none;\n  @media screen and (max-width: 768px) {\n    width: 60px;\n    height: 20px;\n  }\n",
              ]))
          )),
        It =
          (q.b.div(
            De ||
              (De = Object(W.a)([
                "\n  text-align: center;\n  justify-content: center;\n  width: 90%;\n  padding: 3.5vw 0 0.5vw 2vw;\n  min-height: 17vw;\n  max-height: 17vw;\n  @media screen and (max-width: 1367px) {\n    width: 18vw;\n    padding: 0vw 0 0vw 1vw;\n    min-height: 600px;\n    max-height: 600px;\n  }\n  @media screen and (max-width: 768px) {\n    min-height: 650px;\n    max-height: 650px;\n  }\n",
              ]))
          ),
          q.b.div(Ue || (Ue = Object(W.a)(["\n  display: inline-block;\n"])))),
        Bt =
          (q.b.button(
            Fe ||
              (Fe = Object(W.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: -20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    top: -15px;\n    left: 0vh;\n    height: 20px;\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -17px;\n    left: -35px;\n    width: 20px;\n    height: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 30px;\n    width: 1vw;\n    height: 5vw;\n  }\n",
              ]))
          ),
          q.b.input(
            Je ||
              (Je = Object(W.a)([
                "\n  width: 2vw;\n  height: 2vw;\n  background-color: white;\n  border: 0.1px ridge #003366;\n  @media screen and (max-width: 768px) {\n    width: 2vw;\n    height: 4vw;\n  }\n",
              ]))
          ),
          q.b.input(
            qe ||
              (qe = Object(W.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: 20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n  &:checked {\n    border: 6px solid black;\n    color: blue;\n    outline: unset !important; /* I added this one for Edge (chromium) support */\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    left: -15px;\n    top: 23px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 15px;\n    border: 1px solid #003366;\n    left: -20px;\n    width: 12px;\n    margin: none;\n    padding: none;\n    height: 12px;\n  }\n",
              ]))
          ),
          q.b.input(
            Ge ||
              (Ge = Object(W.a)([
                "\n  border-bottom: 1px solid #003366;\n  border-top: white;\n  border-left: white;\n  border-right: white;\n  font-size: 1.5vh;\n  width: 3vw;\n  heght: 0.1vw;\n  position: relative;\n  top: -6px;\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 35px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 7vw;\n  }\n",
              ]))
          ),
          q.b.button(
            He ||
              (He = Object(W.a)([
                "\n  border-radius: 100%;\n  border: none;\n  background: #b70033;\n  color: white;\n  padding: 0;\n  font-size: 1.2vh;\n  width: 1.3vh;\n  position: relative;\n  left: 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    width: 15px;\n    left: -30px;\n    height: 15px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 25px;\n    font-size: 11 px;\n  }\n",
              ]))
          ),
          q.b.button(
            Ke ||
              (Ke = Object(W.a)([
                "\n  border-radius: 100%;\n  background: #b70033;\n  font-size: 1.2vh;\n  padding: 0;\n  color: white;\n  border: none;\n  width: 1.3vh;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    width: 15px;\n    height: 15px;\n    left: -3vw;\n    font-size: 11px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 40px;\n    font-size: 12px;\n  }\n",
              ]))
          ),
          q.b.div(
            Qe ||
              (Qe = Object(W.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: 11vw;\n  top: -20px;\n  margin: 0 11.5vw 0 0;\n  @media screen and (max-width: 1367px) {\n    left: 11.5vw;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    left: 13vw;\n    position: relative;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n    top: -40px;\n    left: 2vw;\n  }\n",
              ]))
          ),
          q.b.div(
            Xe ||
              (Xe = Object(W.a)([
                '\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: none;\n  width: auto;\n  padding: 4px 0 -100px 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    padding: 0 8vw 0 3.5vw;\n  }\n  @media screen and (max-width: 1367px) {\n    padding: 4px 0 -10vw 0;\n  }\n  media screen and (max-width: 768px) {\n    padding: 0 0 0 -3vw;\n  }\n',
              ]))
          ),
          q.b.p(
            Ye ||
              (Ye = Object(W.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -5px;\n  margin: 0 1vh 0 1vh;\n  color: #003366;\n\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    top: 0;\n    margin: 0 0.4vw 0 0.4vw;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n    margin: 0 2.1vw 0 2.1vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 10px;\n    align-items: flex-end;\n  }\n',
              ]))
          ),
          q.b.p(
            Ze ||
              (Ze = Object(W.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -2.3vw;\n  left: -10px;\n  margin: 0vw 0 0 0vw;\n  color: #003366;\n  @media screen and (max-width: 1367px) {\n    top: -2.2vw;\n    font-size: 9px;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 9px;\n    top: -16px;\n  }\n',
              ]))
          ),
          q.b.p(
            $e ||
              ($e = Object(W.a)([
                '\n  font-family: "RadikalMedium";\n  text-align: left;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #b70033;\n  position: relative;\n  top: 5px;\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
              ]))
          )),
        Nt = q.b.div(
          nt ||
            (nt = Object(W.a)([
              "\n  margin: 2vw 4vw 0 5vw;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 1367px) {\n    margin: 23px 4vw  5vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 600px) {\n    margin: auto\n    width: 90%;\n    justify-content: space-between;\n  }\n",
            ]))
        ),
        At = t(12),
        Pt = Object(At.c)({
          name: "info",
          initialState: [],
          reducers: {
            appendWall: function (n, e) {
              var t, a;
              if (
                n.find(function (n) {
                  return n.id === e.payload.id;
                })
              ) {
                var i =
                  ((t = n),
                  (a = e.payload),
                  t.reduce(function (n, e) {
                    return e.id === a.id ? n.push(a) : n.push(e), n;
                  }, []));
                return console.log("appendWall", i), i;
              }
              return n.concat([e.payload]);
            },
            removeWall: function (n, e) {
              var t = e.payload,
                a = n.filter(function (n) {
                  return n.id !== t;
                });
              return console.log("removeWall", t, a), a;
            },
          },
        }),
        Mt = Pt.actions,
        Wt = Pt.reducer,
        Vt = Mt.appendWall,
        Dt = Mt.removeWall,
        Ut = Wt,
        Ft = t(13),
        Jt = t.n(Ft),
        qt = t(17),
        Gt = (function () {
          var n = Object(qt.a)(
            Jt.a.mark(function n() {
              var e, t, a, i, d, r, c, o;
              return Jt.a.wrap(
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
                                  t = {},
                                  a = 0,
                                  i = e.length;
                                a < i;
                                a++
                              ) {
                                var d = e[a].split("=");
                                t[d[0]] = unescape(decodeURI(d[1]));
                              }
                              return t;
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
                          (t = window.onload()),
                          (a = t.Oo),
                          (i = t.Tienda),
                          (d = t.Color_id),
                          (n.next = 6),
                          fetch(
                            "https://api.tiendaenlineaprisa.mx/calctest/calculadora/inicializar?origen="
                              .concat(a, "&origen_id=")
                              .concat(i, "&color_id=")
                              .concat(d)
                          )
                        );
                      case 6:
                        return (r = n.sent), (n.next = 9), r.json();
                      case 9:
                        if (
                          ((c = n.sent),
                          console.log("data", c),
                          !c.hasOwnProperty("colores"))
                        ) {
                          n.next = 14;
                          break;
                        }
                        return (
                          null === (o = c.linea_producto) || void 0 === o
                            ? void 0
                            : o.id,
                          n.abrupt("return", c)
                        );
                      case 14:
                        return n.abrupt("return", []);
                      case 17:
                        return (
                          (n.prev = 17),
                          (n.t0 = n.catch(0)),
                          n.abrupt("return", [])
                        );
                      case 20:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 17]]
              );
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Ht = (function () {
          var n = Object(qt.a)(
            Jt.a.mark(function n(e) {
              var t, a, i, d, r, c, o;
              return Jt.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t = window.onload()),
                          (a = t.Oo),
                          (i = t.Tienda),
                          (d = t.Color_id),
                          (n.prev = 1),
                          (r = {
                            origen: a,
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
        Kt = Object(At.c)({
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
        Qt = Kt.actions,
        Xt = Kt.reducer,
        Yt = Qt.goCalculator,
        Zt = Qt.endCalculator,
        $t = Xt,
        na = Object(At.b)(
          "result/fetchResult",
          (function () {
            var n = Object(qt.a)(
              Jt.a.mark(function n(e, t) {
                var a, i, d, r, c, o;
                return Jt.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (((a = t.getState), (i = a().info).length)) {
                          n.next = 4;
                          break;
                        }
                        return n.abrupt("return");
                      case 4:
                        return (
                          console.log("walles: ", i.length),
                          console.log("walles: ", i),
                          (d = i.reduce(function (n, e) {
                            var t = e.color_id,
                              a = {
                                largo: e.largo,
                                ancho: e.ancho,
                                puertas: e.puertas,
                                ventanas: e.ventanas,
                              },
                              i = "_" + t;
                            return n[i] || (n[i] = []), n[i].push(a), n;
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
                          Ht(c)
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
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })()
        ),
        ea = ["wall1", "wall2", "wall3", "wall4", "wall5"],
        ta = ["wall1"];
      function aa() {
        var n = Object(F.c)(function (n) {
            return n;
          }).colors1,
          e = Object(F.b)(),
          t =
            Object(F.c)(function (n) {
              return n.colors;
            }).colores || [],
          a = function () {
            return e(function (n) {
              return n(Yt());
            });
          };
        return Object(N.useMemo)(
          function () {
            return A.a.createElement(
              ma,
              null,
              A.a.createElement(Lt, null, "COLORES SELECCIONADOS"),
              A.a.createElement(
                Ct,
                null,
                A.a.createElement(
                  "div",
                  null,
                  t.map(function (n, e) {
                    return A.a.createElement(
                      It,
                      { key: e + "colores" },
                      A.a.createElement(Tt, {
                        disabled: "disabled",
                        style: { backgroundColor: n.rgb },
                      })
                    );
                  })
                ),
                A.a.createElement(
                  Rt,
                  {
                    onClick: function () {
                      window.location.reload();
                    },
                  },
                  "Borrar todo"
                )
              ),
              A.a.createElement(
                pa,
                null,
                A.a.createElement(
                  sa,
                  null,
                  A.a.createElement(
                    ha,
                    null,
                    A.a.createElement(
                      ga,
                      null,
                      A.a.createElement(se, {
                        title: "Colores",
                        icon: "colors",
                        end: !0,
                      })
                    ),
                    A.a.createElement(
                      ga,
                      null,
                      A.a.createElement(se, {
                        title: "Largo",
                        icon: "vertical",
                        size: !0,
                      })
                    ),
                    A.a.createElement(
                      ga,
                      null,
                      A.a.createElement(se, {
                        title: "Ancho",
                        icon: "horizontal",
                        size: !0,
                      })
                    ),
                    A.a.createElement(
                      ga,
                      null,
                      !1 ===
                        !!(null === n || void 0 === n
                          ? void 0
                          : n.impermeabilizante)
                        ? A.a.createElement(se, {
                            title: "Puertas",
                            icon: "door",
                          })
                        : A.a.createElement(se, { title: "Domo", icon: "domo" })
                    ),
                    A.a.createElement(
                      ga,
                      null,
                      !1 ===
                        !!(null === n || void 0 === n
                          ? void 0
                          : n.impermeabilizante)
                        ? A.a.createElement(se, {
                            title: "Ventanas",
                            icon: "window",
                          })
                        : A.a.createElement(se, {
                            title: "Tragaluz",
                            icon: "tragaluz",
                          })
                    )
                  ),
                  t.map(function (e, a) {
                    return 0 === a
                      ? !1 ===
                        !!(null === n || void 0 === n
                          ? void 0
                          : n.impermeabilizante)
                        ? ea.map(function (n, e) {
                            return A.a.createElement(ia, {
                              key: e + "top",
                              index: e + 1,
                              identifier: n,
                              Length: t.length,
                            });
                          })
                        : ta.map(function (n, e) {
                            return A.a.createElement(ia, {
                              key: e + "top",
                              index: e + 1,
                              identifier: n,
                            });
                          })
                      : "";
                  })
                )
              ),
              A.a.createElement(
                Nt,
                null,
                A.a.createElement(
                  Bt,
                  null,
                  "*Tienes que llenar todos los campos"
                ),
                A.a.createElement(
                  St,
                  {
                    onClick: function () {
                      a(),
                        setTimeout(function () {
                          a();
                        }, 500);
                    },
                  },
                  "Calcular"
                )
              )
            );
          },
          [t]
        );
      }
      function ia(n) {
        var e = n.index,
          t = n.identifier,
          a = n.Length,
          i = Object(F.c)(function (n) {
            return n.gestion;
          }),
          d = i.isReadyToCompute,
          r = i.finishRecopilation,
          c =
            Object(F.c)(function (n) {
              return n.colors;
            }).colores || [],
          o = Object(F.b)(),
          l = Object(N.useState)(null),
          p = Object(D.a)(l, 2),
          m = p[0],
          x = p[1],
          s = Object(N.useState)(
            (1 === a && 1 === e) ||
              (2 === a && 1 === e) ||
              (2 === a && 2 === e) ||
              (3 === a && 1 === e) ||
              (3 === a && 2 === e) ||
              (3 === a && 3 === e) ||
              null
          ),
          h = Object(D.a)(s, 2),
          w = h[0],
          u = h[1];
        console.log("l", a);
        var v = {
            edit: !1,
            id: e + t,
            color_id: null,
            nombre: null,
            largo: 0,
            ancho: 0,
            puertas: [],
            ventanas: [],
          },
          g = Object(N.useReducer)(function (n, e) {
            return Object(U.a)(Object(U.a)({}, n), e);
          }, v),
          f = Object(D.a)(g, 2),
          b = f[0],
          j = f[1];
        function O(n) {
          var e,
            t =
              ((e = n),
              c.find(function (n) {
                var t = n.rgb;
                return console.log("compare ", t, e), t === e;
              }));
          t && (x(n), j({ color_id: t.id, nombre: t.nombre, edit: !0 }));
        }
        function y(n, e) {
          var t;
          j(((t = {}), Object(V.a)(t, n, e), Object(V.a)(t, "edit", !0), t));
        }
        Object(N.useEffect)(
          function () {
            var n, t;
            w ||
              (x(null),
              b.edit &&
                (console.log("calculator remove"),
                o(
                  ((n = b.id),
                  function (e) {
                    return e(Dt(n));
                  })
                )),
              j(v)),
              w &&
                m &&
                b.edit &&
                (j({ edit: !1 }),
                o(
                  ((t = b),
                  function (n) {
                    return n(Vt(t));
                  })
                )),
              e !== ea.length ||
                r ||
                o(function (n) {
                  n(Zt()), n(na());
                });
          },
          [w, m, d, r]
        );
        var E = function (n) {
          var e = n.children;
          return A.a.createElement(va, { hidden: !w }, e);
        };
        return Object(N.useMemo)(
          function () {
            return A.a.createElement(
              wa,
              { key: "table" },
              A.a.createElement(
                ua,
                { key: "first" },
                A.a.createElement(he, {
                  index: e,
                  selectControl: w,
                  onSelectControl: u,
                  id: "color",
                  identifier: t,
                  onSubmit: O,
                })
              ),
              A.a.createElement(
                ua,
                { key: "second" },
                A.a.createElement(
                  E,
                  null,
                  A.a.createElement(xe, {
                    id: "largo",
                    onSubmit: y,
                    defaultValue: 3,
                  })
                )
              ),
              A.a.createElement(
                ua,
                { key: "three" },
                A.a.createElement(
                  E,
                  null,
                  A.a.createElement(xe, {
                    id: "ancho",
                    onSubmit: y,
                    defaultValue: 2.5,
                  })
                )
              ),
              A.a.createElement(
                ua,
                { key: "four" },
                A.a.createElement(
                  E,
                  null,
                  A.a.createElement(le, {
                    id: "puertas",
                    identifier: t,
                    onSubmit: y,
                  })
                )
              ),
              A.a.createElement(
                ua,
                { key: "five", end: !0 },
                A.a.createElement(
                  E,
                  null,
                  A.a.createElement(le, {
                    id: "ventanas",
                    identifier: t,
                    onSubmit: y,
                  })
                )
              )
            );
          },
          [w]
        );
      }
      var da,
        ra,
        ca,
        oa,
        la,
        pa = q.b.div(
          et ||
            (et = Object(W.a)([
              "\n\tmax-width: 768;\n\toverflow-x: auto;\n\toverflow-y: auto;\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 5vw 0 0 0;\n\t}\n",
            ]))
        ),
        ma = q.b.div(
          tt ||
            (tt = Object(W.a)([
              "\n\tmax-width: 768;\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 5vw 0 0 0;\n\t}\n",
            ]))
        ),
        xa = q.b.tr(
          at || (at = Object(W.a)(["\n\tmargin: 0;\n\tpadding: 0;\n"]))
        ),
        sa = Object(q.b)(xa)(
          it ||
            (it = Object(W.a)([
              "\n\ttext-align: center;\n\tjustify-content: center;\n\tmargin: auto;\n",
            ]))
        ),
        ha = Object(q.b)(xa)(
          dt || (dt = Object(W.a)(["\n\tmin-width: 1024px;\n"]))
        ),
        wa = Object(q.b)(xa)(
          rt ||
            (rt = Object(W.a)([
              "\n\tmin-width: 1024px;\n\tmax-width: 1600px;\n\tmin-heigth: 1067px;\n\tmax-heigth: 1067px;\n",
            ]))
        ),
        ua = q.b.td(
          ct || (ct = Object(W.a)(["\n\tmargin: 0;\n\t", "\n"])),
          function (n) {
            return n.end ? "" : "border-right: 1px solid #003366;";
          }
        ),
        va = q.b.div(
          ot ||
            (ot = Object(W.a)([
              "\n\tdisplay: flex;\n\tflex: 1;\n\tvisibility: ",
              ";\n",
            ])),
          function (n) {
            var e = n.hidden;
            return "".concat(e ? "hidden" : "visible");
          }
        ),
        ga = q.b.th(
          lt ||
            (lt = Object(W.a)([
              "\n\tpadding: 0px 1vw;\n\t@media screen and (max-width: 1367px) {\n\t\tpadding: 0px 0.7vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tpadding: 0px 1.5vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tpadding: 0 0.2vw;\n\t}\n",
            ]))
        ),
        fa = Object(At.c)({
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
        }),
        ba = fa.actions,
        ja = fa.reducer,
        Oa = ba.putColors,
        ya = ja,
        Ea = function () {
          var n = Object(F.b)(),
            e = Object(F.c)(function (n) {
              return n;
            }).colors.linea_producto;
          return (
            Object(N.useEffect)(function () {
              n(
                (function () {
                  var n = Object(qt.a)(
                    Jt.a.mark(function n(e) {
                      var t;
                      return Jt.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), Gt();
                            case 2:
                              (t = n.sent), console.log(t), e(Oa(t));
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
                })()
              );
            }, []),
            A.a.createElement(
              "div",
              null,
              e && A.a.createElement(za, { src: e.url_imagen_inspiracion }),
              A.a.createElement(
                _a,
                null,
                A.a.createElement(La, null, A.a.createElement(aa, null)),
                A.a.createElement(
                  ka,
                  null,
                  A.a.createElement(yn, { total: {} })
                )
              )
            )
          );
        },
        _a = q.b.div(
          da ||
            (da = Object(W.a)([
              "\n  display: flex;\n  height: auto;\n  overflow: hidden;\n  @media screen and (max-width: 1200px) {\n    overflow: visible;\n    flex-direction: column;\n  }\n  @media screen and (min-width: 1200px) {\n    align-items: center;\n  }\n",
            ]))
        ),
        za = q.b.img(
          ra ||
            (ra = Object(W.a)([
              "\n  display: none;\n  @media screen and (max-width: 1200px) {\n    display: initial;\n    width: 100%;\n    height: 30vw;\n  }\n",
            ]))
        ),
        ka = q.b.div(
          ca ||
            (ca = Object(W.a)([
              "\n  background-color: #003366;\n  height: auto !important;\n  min-height: 105vh;\n  max-height: 105vh;\n  min-width: 48%;\n  max-width: 48%;\n  margin: 0vw -0.5vw 0 0;\n  @media screen and (max-width: 1366px) {\n    top: 0vw;\n  }\n  @media screen and (max-width: 1200px) {\n    margin: 180px 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n    max-height: none;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 240px 0 0 0;\n    min-width: 102%;\n    max-width: 102%;\n    min-height: 140vh;\n  }\n  @media screen and (max-width: 768px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 180vh;\n    margin: 300px 0 0 0;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    min-height: 800px;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 130vh;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    min-height: 700px;\n  }\n  @media screen and (max-height: 601px) and (orientation: landscape) {\n    margin: 340px 0 0 0;\n  }\n  @media screen and (max-width: 420px) {\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n",
            ]))
        ),
        La = q.b.div(
          oa ||
            (oa = Object(W.a)([
              "\n  height: auto !important;\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 52%;\n  max-width: 52%;\n  margin: 2vw 0 0 0;\n  justify-content: center;\n  @media screen and (max-width: 1200px) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: none;\n  }\n  @media screen and (max-width: 1200px) and (orientation: landscape) {\n    margin: 5vw 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 110vh;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 5vw 0 0 0;\n    min-height: 100vh;\n  }\n  @media screen and (max-width: 1024px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 900px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 40% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 30% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 768px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    padding: 0 0 80% 0;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 700px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    min-width: 100%;\n    max-width: 100%;\n    padding: 0 0 90% 0;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    margin: 5vw 0 0 0;\n    padding: 0 0 140% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px){\n    margin: 5vw 0 0 0;\n    padding: 0 0 20% 0;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: auto;\n  }\n  @media screen and (max-width: 600px) and (orientation: landscape) {\n    padding: 0 0 90% 0;\n  }\n  @media screen and (max-width: 400px){\n    padding: 0 0 25% 0;\n  }\n  @media screen and (max-width: 380px){\n    padding: 0 0 30% 0;\n  }\n  @media screen and (max-width: 350px){\n    padding: 0 0 45% 0;\n  }\n  @media screen and (max-width: 330px){\n    padding: 0 0 58% 0;\n  }\n",
            ]))
        ),
        Ca = Object(At.c)({
          name: "result",
          initialState: [],
          extraReducers: function (n) {
            n.addCase(na.fulfilled, function (n, e) {
              var t = e.payload;
              return console.log("object result ", t), t;
            });
          },
        }).reducer,
        Ra = Object(At.a)({
          reducer: { colors: ya, info: Ut, gestion: $t, result: Ca },
        });
      function Sa(n) {
        var e = n.children;
        return A.a.createElement(F.a, { store: Ra }, e);
      }
      var Ta = Object(q.a)(
          la ||
            (la = Object(W.a)([
              "\n  body {\n    margin: 0%;\n    padding: 0%;\n  }\n",
            ]))
        ),
        Ia = function () {
          return A.a.createElement(
            Sa,
            null,
            A.a.createElement(
              "div",
              null,
              A.a.createElement(Ea, null),
              A.a.createElement(Ta, null)
            )
          );
        };
      M.a.render(A.a.createElement(Ia, null), document.getElementById("root"));
    },
  },
  [[38, 1, 2]],
]);
//# sourceMappingURL=main.d9b621a6.chunk.js.map
