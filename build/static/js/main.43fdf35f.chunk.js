(this.webpackJsonpprisa = this.webpackJsonpprisa || []).push([
  [0],
  {
    33: function (n, e, t) {
      n.exports = t(50);
    },
    44: function (n, e, t) {},
    48: function (n, e, t) {},
    49: function (n, e, t) {},
    50: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t(0),
        i = t.n(a),
        d = t(24),
        r = t.n(d),
        c = t(2),
        o = t(4),
        l = t(8),
        m = t(13),
        p = (t(38), t(11)),
        x = t.n(p),
        h = t(14),
        s = t(20);
      t(51), t(42);
      s.a.initializeApp({
        apiKey: "AIzaSyDfDOMsOGDkxXKsQWmaBTJ0KeOY8y7jjwc",
        authDomain: "boards-585b9.firebaseapp.com",
        projectId: "boards-585b9",
        storageBucket: "boards-585b9.appspot.com",
        messagingSenderId: "1044202533897",
        appId: "1:1044202533897:web:0f052d6160e75f047cb4d8",
      });
      s.a.auth(), s.a.firestore();
      new s.a.auth.GoogleAuthProvider().setCustomParameters({
        prompt: "select_account",
      });
      var w = s.a,
        v = function () {
          var n = Object(a.useState)([]),
            e = Object(o.a)(n, 2),
            t = e[0],
            i = e[1],
            d = Object(a.useState)(!1),
            r = Object(o.a)(d, 2),
            c = r[0],
            p = r[1],
            x = Object(a.useState)({ input1: 34, input2: 2 }),
            h = Object(o.a)(x, 2),
            s = h[0],
            v = h[1],
            u = Object(a.useState)(),
            g = Object(o.a)(u, 2),
            b = g[0],
            f = (g[1], Object(a.useState)()),
            j = Object(o.a)(f, 2),
            O = j[0],
            y = j[1],
            E = Object(a.useState)(),
            z = Object(o.a)(E, 2);
          z[0], z[1];
          Object(a.useEffect)(
            function () {
              console.log("useItems");
              var n = s.input1,
                e = s.input2;
              Math.floor(y((Number(n) * Number(e)) / 3));
            },
            [s]
          );
          var k = Object(a.useReducer)(
              function (n, e) {
                return Object(l.a)(Object(l.a)({}, n), e);
              },
              { input1: "", input2: "" }
            ),
            C = Object(o.a)(k, 2),
            R = (C[0], C[1]);
          return (
            Object(a.useEffect)(function () {
              w.firestore()
                .collection("colors")
                .onSnapshot(function (n) {
                  var e = n.docs.map(function (n) {
                    return Object(l.a)({ id: n.id }, n.data());
                  });
                  i(e);
                });
            }, []),
            Object(a.useEffect)(function () {
              t.length && p(t[0].hyper);
            }),
            {
              item: t,
              imper: c,
              number: s,
              suma: b,
              handleInput: function (n) {
                R(v(Object(m.a)({}, n.target.name, n.target.value))),
                  console.log(n.target.name);
              },
              liters: O,
              message1: function () {},
            }
          );
        };
      t(44);
      var u,
        g,
        b,
        f,
        j,
        O,
        y,
        E,
        z,
        k,
        C,
        R,
        S,
        I,
        T,
        _,
        B,
        N,
        A,
        P,
        M,
        L,
        D,
        U,
        q,
        J,
        K,
        G,
        V,
        W = function (n) {
          var e,
            t = Object(a.useState)(!1),
            d = Object(o.a)(t, 2),
            r = d[0],
            c = d[1];
          return i.a.createElement(
            "div",
            {
              className: "Tooltip-Wrapper",
              onMouseOver: function () {
                e = setTimeout(function () {
                  c(!0);
                }, n.delay || 200);
              },
              onMouseOut: function () {
                clearInterval(e), c(!1);
              },
            },
            n.children,
            r &&
              i.a.createElement(
                "div",
                { className: "Tooltip-Tip ".concat(n.direction || "top") },
                n.content
              )
          );
        },
        Q = t(3),
        X = t(32),
        Y = Q.b.div(
          u ||
            (u = Object(c.a)([
              "\n  text-align: center;\n  @media screen and (max-width: 768px) {\n    padding: 30px 0 0 0;\n    width: 100%;\n  }\n",
            ]))
        ),
        F =
          (Object(Q.b)(X.a)(
            g ||
              (g = Object(c.a)([
                "\n  color: #003366;\n  @media screen and (max-width: 768px) {\n  }\n",
              ]))
          ),
          Q.b.div(
            b ||
              (b = Object(c.a)([
                "\n  display: block;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 0 0vw 0;\n  @media screen and (max-width: 1366px) {\n    padding: 50px 0 0vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 1vw 0 0vw 0;\n  }\n",
              ]))
          )),
        H = Q.b.button(
          f ||
            (f = Object(c.a)([
              '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 1367px) {\n    margin: -1vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0vw 0 5vw 0;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0vw 0 5vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        Z = Q.b.table(
          j ||
            (j = Object(c.a)([
              '\n  font-family: "Radikal1";\n  justify-content: center;\n  text-align: center;\n  padding: 0 0 4vh 0;\n  min-height: 18vw;\n  max-height: 18vw;\n  @media screen and (max-width: 1367px) {\n    min-height: 12vw;\n    max-height: 12vw;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 0 5vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 0vw 0;\n  }\n  @media screen and (max-height: 769px) {\n    padding: 0 0 1vh 0;\n  }\n',
            ]))
        ),
        $ = Q.b.tr(
          O ||
            (O = Object(c.a)([
              '\n  font-family: "Radikal1";\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin: 0vw 0.5vw 0vh 0;\n  position: relative;\n  left: -10px;\n\n  @media screen and (max-width: 1367px) {\n    margin: 0 0.5vh 0vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0;\n    left: 5px;\n  }\n  @media screen and (max-width: 768px) {\n  } \n',
            ]))
        ),
        nn =
          (Q.b.img(
            y ||
              (y = Object(c.a)([
                "\n  width: 100px;\n  color: white;\n  @media screen and (max-width: 1024px) {\n    width: 95px;\n  }\n",
              ]))
          ),
          Q.b.img(
            E ||
              (E = Object(c.a)([
                "\n  width: 7vh;\n  color: white;\n  @media screen and (max-width: 768px) {\n    width: 10vh;\n    margin: 0 0vw 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 6.5vh;\n    margin: 1vw 1vw 0 1vw;\n  }\n",
              ]))
          )),
        en = Q.b.img(
          z ||
            (z = Object(c.a)([
              "\n  width: 9vh;\n  color: white;\n\n  @media screen and (max-width: 1367px) {\n    width: 8vh;\n    margin: 1vw 1vw 0 0vw;\n  }\n  @media screen and (max-width: 768px) {\n    width: 8vh;\n    margin: 0 1vw 0 1vw;\n  }\n",
            ]))
        ),
        tn = Q.b.img(
          k ||
            (k = Object(c.a)([
              "\n  width: 10vh;\n  color: white;\n  @media screen and (max-width: 1367px) {\n    width: 8vh;\n    margin: 1vw 1vw 0 0vw;\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 9vh;\n    margin: 0 0vw 0 0vw;\n  }\n",
            ]))
        ),
        an = Q.b.img(
          C ||
            (C = Object(c.a)([
              "\n  width: 7vw;\n  @media screen and (max-width: 1367px) {\n    width: 7vw;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 120px;\n  }\n",
            ]))
        ),
        dn = Q.b.img(
          R ||
            (R = Object(c.a)([
              "\n  width: 101.5%;\n  height: auto;\n  margin: -0.56vh 0 0 -.5vh;\n  position: relative;\n  left: -0.08vw;\n  @media screen and (max-width: 1200px) {\n    display: none;\n  }\n\n  @media screen and (max-width: 1024px) {\n    display: none;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n  \n  \n",
            ]))
        ),
        rn = Q.b.div(
          S ||
            (S = Object(c.a)([
              "\n  font-size: 1.1vw;\n  margin: 0 0 0 -1vw;\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        cn = Q.b.td(
          I ||
            (I = Object(c.a)([
              "\n  margin: -2vh -1vh 0 0;\n  padding: none;\n  width: 30%;\n",
            ]))
        ),
        on = Q.b.input(
          T ||
            (T = Object(c.a)([
              "\n  border-radius: 7px;\n  width: 30px;\n  text-align: center;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    font-size: 14px;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 5vw 0 1vw;\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 400px) {\n    margin: 0 5vw 0 1vw;\n    position: relative;\n    left: 5px;\n  }\n",
            ]))
        ),
        ln = Q.b.input(
          _ ||
            (_ = Object(c.a)([
              '\n  font-family: "Radikal1";\n  width: 6vw;\n  font-size: 1.3vh;\n  padding: 0.3vh 0 0.3vh 0;\n  margin: 0 4px 0 0;\n  border-radius: 7px;\n  border: none;\n  text-align: center;\n  color: #999999;\n\n  @media screen and (max-width: 1024px) {\n    width: 70px;\n    position: relative;\n\n    font-size: 13px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        mn = Q.b.input(
          B ||
            (B = Object(c.a)([
              '\n  font-family: "Radikal1";\n  width: 3.5vw;\n  font-size: 1.3vh;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  color: #999999;\n\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    position: relative;\n  }\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        pn = Q.b.h1(
          N ||
            (N = Object(c.a)([
              '\n  font-family: "RadikalBold";\n  font-size: 35px;\n  color: white;\n  letter-spacing: 4px;\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 30px 0 0 0;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n',
            ]))
        ),
        xn = Q.b.h2(
          A ||
            (A = Object(c.a)([
              '\n  margin: -20px 0 0 0;\n  font-family: "RadikalBold";\n  color: #2098ae;\n  font-size: 20px;\n  @media screen and (max-width: 1024px) and (orientation: landscape){\n    font-size: 17px;\n  }\n  @media screen and (max-height: 769px) {\n    margin: -30px 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 10px 0 0 0;\n    font-size: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    display: flex;\n    margin: none;\n    padding: 10vw 0 0 0;\n    justify-content: center;\n  }\n',
            ]))
        ),
        hn = Q.b.h2(
          P ||
            (P = Object(c.a)([
              '\n  margin: -5px 0 0 0;\n  letter-spacing: 2px;\n  font-family: "RadikalBold";\n  color: white;\n  font-size: 20px;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    display: flex;\n    padding: 0 0 20px 0;\n    justify-content: center;\n  }\n',
            ]))
        ),
        sn = Q.b.h3(
          M ||
            (M = Object(c.a)([
              '\n  font-size: 0.7vw;\n  color: white;\n  letter-spacing: 1px;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    font-size: 12px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n\n',
            ]))
        ),
        wn = Q.b.h3(
          L ||
            (L = Object(c.a)([
              '\n  font-size: 1.4vh;\n  color: white;\n  font-family: "Radikal1";\n  width: 120px;\n  max-height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 120px;\n    text-align: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    width: 110px;\n    margin: 0;\n    position: relative;\n    top: -10px\n    text-align: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 400px) {\n    font-size: 15px;\n    width: 110px;\n    margin: 0 1vw 0 0;\n    position: relative;\n    top: -10px\n    text-align: center;\n    justify-content: center;\n  }\n',
            ]))
        ),
        vn = Q.b.th(
          D ||
            (D = Object(c.a)([
              "\n  padding: 0 0 0 10px;\n  margin: -0.5vw 0 3vw 0;\n\n\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 1vh 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    margin: 0;\n    padding: 0;\n    margin: none;\n  }\n",
            ]))
        ),
        un =
          (Q.b.th(
            U ||
              (U = Object(c.a)([
                "\nmargin: 2vw;\n\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    padding: 0;\n    margin: none;\n  }\n",
              ]))
          ),
          Q.b.tr(
            q ||
              (q = Object(c.a)([
                "\n  display: flex;\n  flex-direction: row;\n  @media screen and (max-width: 1200px) {\n    position: relative;\n    left: -15px;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    left: none;\n    justify-content: center;\n    position: relative;\n  }\n  @media screen and (max-width: 768px) {\n    align-items: center;\n    left: 0;\n    justify-content: center;\n    position: relative;\n\n  }\n",
              ]))
          )),
        gn = Q.b.p(
          J ||
            (J = Object(c.a)([
              '\n  color: #2098ae;\n  font-size: 0.8vw;\n  margin: -5px 0 0 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 0 0 0;\n  }\n',
            ]))
        ),
        bn = Q.b.div(
          K ||
            (K = Object(c.a)([
              "\n  min-width: 15vw;\n  min-height: 150px;\n  padding: 0vw 0 0 0;\n  @media screen and (max-width: 1367px) {\n    min-width: 16vw;\n    max-width: 16vw;\n    padding: 0;\n  }\n  @media screen and (max-width: 1200px) {\n    min-width: 24vw;\n    max-width: 24vw;\n    padding: 3vw 0 0 0;\n  }\n  @media screen and (max-width: 1024px) {\n    min-width: 25vw;\n    max-width:25vw;\n    display: inline-block;\n    padding: 3vw 0 0vh 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 0 3vh 0;\n    min-width: none;\n    display: flex;\n    display: flex;\n  justify-content: center;\n    min-width: 90%;\n    min-height: 90%;\n    flex-direction: row;\n    align-items: center;\n  }\n  @media screen and (max-width: 600px) {\n    min-width: none;\n    display: flex;\n    display: flex;\n  justify-content: center;\n    min-width: 90%;\n    min-height: 90%;\n    flex-direction: row;\n    align-items: center;\n  }\n",
            ]))
        ),
        fn = Q.b.div(
          G ||
            (G = Object(c.a)([
              "\n  display: flex;\n  justify-content: center;\n  @media screen and (max-width: 1367px) {\n  }\n  @media screen and (max-width: 1024px) {\n    display: inline-block;\n    justify-content: center;\n    margin: 0vw;\n  }\n  @media screen and (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    \n  }\n  @media screen and (max-width: 400px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  }\n",
            ]))
        ),
        jn = Q.b.input(
          V ||
            (V = Object(c.a)([
              "\n  border-radius: 100%;\n  width: 0.5vh;\n  height: 0.8vh;\n  border: 1px solid #003366;\n  margin: 0 0.7vw 0 0;\n  @media screen and (max-width: 768px) {\n    width: 7px;\n    height: 10px;\n    position: relative;\n    top: -1px;\n    margin: 0vw 1vw 0 1vw;\n  }\n",
            ]))
        );
      Object(a.createContext)();
      var On,
        yn = function (n) {
          var e = n.area,
            t = n.handleInput,
            d = v(),
            r = d.item,
            c = (d.imper, d.liters, Object(a.useState)([1]));
          Object(o.a)(c, 1)[0];
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(dn, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png",
            }),
            i.a.createElement(
              Y,
              null,
              i.a.createElement(pn, null, "RESULTADO"),
              i.a.createElement(xn, null, "PRISA TE RECOMIENDA"),
              i.a.createElement(an, {
                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-01_tlx0kg.png",
              }),
              i.a.createElement(hn, null, "Elige la presentaci\xf3n "),
              i.a.createElement(
                Z,
                { style: { display: "initial" } },
                i.a.createElement(
                  fn,
                  null,
                  r.map(function (n, a) {
                    return (
                      a <= 2 &&
                      i.a.createElement(
                        bn,
                        { key: a },
                        i.a.createElement(
                          "tr",
                          null,
                          i.a.createElement(
                            vn,
                            null,
                            i.a.createElement(
                              W,
                              { content: n.nombre, direction: "top" },
                              i.a.createElement(
                                wn,
                                null,
                                i.a.createElement(jn, {
                                  style: { backgroundColor: "blue" },
                                }),
                                "color azul"
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          un,
                          null,
                          i.a.createElement(
                            vn,
                            null,
                            i.a.createElement(sn, null, "Area"),
                            i.a.createElement(ln, {
                              type: "text",
                              value: 0,
                              readonly: "readonly",
                            })
                          ),
                          i.a.createElement(
                            vn,
                            null,
                            i.a.createElement(sn, null, "Litros"),
                            i.a.createElement(mn, {
                              type: "text",
                              value: e + " lts",
                              readonly: "readonly",
                            })
                          )
                        ),
                        i.a.createElement(
                          $,
                          null,
                          i.a.createElement(
                            cn,
                            null,
                            i.a.createElement(
                              rn,
                              null,
                              i.a.createElement(tn, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg",
                              }),
                              i.a.createElement(gn, null, "19L"),
                              i.a.createElement(on, {
                                type: "text",
                                value: 0,
                                onChange: t,
                              })
                            )
                          ),
                          i.a.createElement(
                            cn,
                            null,
                            i.a.createElement(
                              rn,
                              null,
                              i.a.createElement(en, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg",
                              }),
                              i.a.createElement(gn, null, "4L"),
                              i.a.createElement(on, {
                                type: "text",
                                value: 0,
                                onChange: t,
                              })
                            )
                          ),
                          i.a.createElement(
                            cn,
                            null,
                            i.a.createElement(
                              rn,
                              null,
                              i.a.createElement(nn, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg",
                              }),
                              i.a.createElement(gn, null, "1L"),
                              i.a.createElement(on, {
                                type: "text",
                                value: 0,
                                onChange: t,
                              })
                            )
                          )
                        )
                      )
                    );
                  })
                ),
                i.a.createElement(
                  F,
                  null,
                  i.a.createElement("h1", null, " "),
                  i.a.createElement(H, null, "Comprar")
                )
              )
            )
          );
        },
        En = t(22),
        zn = t(15);
      function kn(n) {
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
        return i.a.createElement(Nn, { src: a, size: t });
      }
      var Cn,
        Rn,
        Sn,
        In,
        Tn,
        _n,
        Bn,
        Nn = Q.b.img(
          On ||
            (On = Object(c.a)([
              "\n\tmargin: none;\n\tpadding: none;\n\t",
              "\n",
            ])),
          function (n) {
            var e = n.size;
            return "width: ".concat(e, "px; height: ").concat(e, "px;");
          }
        );
      function An(n) {
        var e = n.children,
          t = n.select,
          a = n.colors,
          d = n.visible,
          r = n.onSelect,
          c = n.onClose;
        return i.a.createElement(
          Pn,
          null,
          e,
          i.a.createElement(Mn, { visible: d, onClick: c }),
          i.a.createElement(
            Ln,
            { visible: d },
            i.a.createElement(Un, null, "Colores a elegir"),
            i.a.createElement(
              Dn,
              null,
              null === a || void 0 === a
                ? void 0
                : a.map(function (n, e) {
                    return i.a.createElement(qn, {
                      key: e,
                      color: n,
                      select: t,
                      index: e,
                      onClick: r,
                    });
                  })
            )
          )
        );
      }
      var Pn = Q.b.div(
          Cn ||
            (Cn = Object(c.a)([
              "\n\tpadding: none;\n\tmargin: none;\n\tdisplay: inline-block;\n\ttop: 0;\n\tleft: 0;\n",
            ]))
        ),
        Mn = Q.b.div(
          Rn ||
            (Rn = Object(c.a)([
              "\n\tvisibility: ",
              ";\n\tposition: fixed;\n\twidth: 100vw;\n\thigith: 100vh;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tline-height: 1;\n\tz-index: 2;\n\ttop: 0;\n\tleft: 0;\n\trigth: 0;\n\tbottom: 0;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Ln = Q.b.div(
          Sn ||
            (Sn = Object(c.a)([
              "\n\tposition: absolute;\n\tvisibility: ",
              ";\n\tbackground-color: white;\n\tborder-radius: 6px;\n\tz-index: 3;\n",
            ])),
          function (n) {
            return n.visible ? "initial" : "hidden";
          }
        ),
        Dn = Q.b.div(
          In ||
            (In = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100px;\n\theight: 45px;\n",
            ]))
        ),
        Un = Q.b.p(
          Tn ||
            (Tn = Object(c.a)(["\n\tcolor: #003366;\n\tfont-size: 10px;\n"]))
        );
      function qn(n) {
        var e = n.index,
          t = n.color,
          a = n.select,
          d = n.onClick;
        return i.a.createElement(
          re,
          {
            select: a,
            color: t,
            onClick: function () {
              d(e);
            },
          },
          i.a.createElement(ce, { color: t })
        );
      }
      var Jn,
        Kn,
        Gn,
        Vn,
        Wn,
        Qn,
        Xn,
        Yn,
        Fn,
        Hn,
        Zn,
        $n,
        ne,
        ee,
        te,
        ae,
        ie,
        de,
        re = Q.b.div(
          _n ||
            (_n = Object(c.a)([
              "\n\tborder: 2px solid\n\t\t",
              ";\n\twidth: 23px;\n\theight: 23px;\n\tmargin: 0px 5px;\n",
            ])),
          function (n) {
            var e = n.select,
              t = n.color;
            return "".concat(e === t ? t : "black");
          }
        ),
        ce = Q.b.div(
          Bn ||
            (Bn = Object(c.a)([
              "\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: ",
              ";\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e);
          }
        );
      var oe = function (n) {
          var e = n.id,
            t = n.onSubmit,
            d = (function () {
              var n = Object(a.useState)(0),
                e = Object(o.a)(n, 2),
                t = (e[0], e[1]);
              return function () {
                return t(function (n) {
                  return n + 1;
                });
              };
            })(),
            r = Object(a.useReducer)(function (n, e) {
              return e || n;
            }, []),
            c = Object(o.a)(r, 2),
            l = c[0],
            m = c[1],
            p = Object(a.useState)(!0),
            x = Object(o.a)(p, 2),
            h = x[0],
            s = x[1];
          function w(n, a, i) {
            var r = l;
            (r[n][a] = i), m(r), t(e, r), d();
          }
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              vt,
              null,
              h
                ? i.a.createElement(le, { hidden: !0 })
                : i.a.createElement(
                    "div",
                    null,
                    null === l || void 0 === l
                      ? void 0
                      : l.map(function (n, e) {
                          return i.a.createElement(le, {
                            key: e,
                            hidden: !1,
                            values: n,
                            val: l.length,
                            identifier: e,
                            onChange: w,
                          });
                        })
                  ),
              i.a.createElement(
                gt,
                null,
                i.a.createElement(
                  zt,
                  {
                    onClick: function () {
                      if (4 !== l.length) {
                        var n = [].concat(Object(En.a)(l), [
                          { largo: 1, ancho: 1 },
                        ]);
                        m(n), t(n), s(!1);
                      }
                    },
                  },
                  "+"
                ),
                i.a.createElement("div", { style: { height: "5px" } }),
                !h &&
                  i.a.createElement(
                    zt,
                    {
                      onClick: function () {
                        if (0 !== l.length) {
                          var n = l.slice(0, -1);
                          m(n), t(n), 0 === n.length && s(!0);
                        }
                      },
                    },
                    "-"
                  )
              )
            )
          );
        },
        le = function (n) {
          var e = n.identifier,
            t = n.values,
            a = n.hidden,
            d = n.onChange,
            r =
              (n.val,
              function (n, t) {
                d(e, n, t);
              });
          return i.a.createElement(
            "div",
            { style: a ? { visibility: "hidden" } : {} },
            i.a.createElement(
              ut,
              null,
              i.a.createElement(me, {
                lIcon: "vertical",
                value: null === t || void 0 === t ? void 0 : t.largo,
                onChangeText: function (n) {
                  return r("largo", n);
                },
              }),
              i.a.createElement(me, {
                lIcon: "horizontal",
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
          return i.a.createElement(
            ot,
            null,
            t && i.a.createElement(kn, { name: t, size: 20 }),
            i.a.createElement(lt, {
              type: "number",
              value: a || 1,
              onChange: function (n) {
                e(parseInt(n.target.value));
              },
              min: "1",
              max: "10",
              step: "0.5",
            }),
            i.a.createElement(mt, null, "mts")
          );
        },
        pe = function (n) {
          var e = n.id,
            t = n.onSubmit,
            d = Object(a.useState)(1),
            r = Object(o.a)(d, 2),
            c = r[0],
            l = r[1];
          return i.a.createElement(
            ot,
            null,
            i.a.createElement(lt, {
              type: "number",
              value: c,
              onChange: function (n) {
                var a = n.target;
                l(a.value), t(e, parseInt(a.value));
              },
              min: "1",
              max: "10",
              step: "0.5",
              defaultValue: "3",
            }),
            i.a.createElement(mt, null, "mts")
          );
        },
        xe = function (n) {
          var e = n.title,
            t = n.icon,
            a = n.size;
          function d() {
            return i.a.createElement(
              ht,
              null,
              a
                ? i.a.createElement(yt, null, "Metro")
                : i.a.createElement(yt, null, "\u200f\u200f\u200e \u200e"),
              i.a.createElement(Ot, null, e)
            );
          }
          var r = n.end ? "true" : "false";
          return i.a.createElement(
            pt,
            { end: r },
            i.a.createElement(
              xt,
              null,
              i.a.createElement(kn, { name: t, size: 50 }),
              i.a.createElement(d, null)
            )
          );
        };
      function he(n) {
        var e = n.index,
          t = n.selectControl,
          d = n.onSelectControl,
          r = n.onSubmit,
          c = Object(zn.c)(function (n) {
            return n;
          }).colors,
          l = Object(a.useState)(!1),
          m = Object(o.a)(l, 2),
          p = m[0],
          x = m[1],
          h = Object(a.useState)(null),
          s = Object(o.a)(h, 2),
          w = s[0],
          v = s[1],
          u = c.map(function (n) {
            return n.rgb;
          });
        return (
          Object(a.useEffect)(
            function () {
              t || v(null);
            },
            [t]
          ),
          i.a.createElement(
            ft,
            null,
            i.a.createElement(
              bt,
              null,
              i.a.createElement(wt, {
                type: "radio",
                checked: t,
                onClick: function (n) {
                  d(function (n) {
                    return !n;
                  });
                },
              }),
              i.a.createElement("div", { style: { width: "1em" } }),
              i.a.createElement(
                Et,
                null,
                e < 5 ? "".concat("Pared" + e) : "Techo"
              )
            ),
            i.a.createElement(
              An,
              {
                select: w,
                colors: u,
                onSelect: function (n) {
                  x(!1), v(u[n]), r(u[n]);
                },
                visible: p,
                onClose: function () {
                  return x(!1);
                },
              },
              i.a.createElement(st, {
                color: w,
                type: "button",
                checked: !!w,
                onClick: function (n) {
                  t &&
                    x(function (n) {
                      return !n;
                    });
                },
              })
            )
          )
        );
      }
      var se,
        we,
        ve,
        ue,
        ge,
        be,
        fe,
        je,
        Oe,
        ye,
        Ee,
        ze,
        ke,
        Ce,
        Re,
        Se,
        Ie,
        Te,
        _e,
        Be,
        Ne,
        Ae,
        Pe,
        Me,
        Le,
        De,
        Ue,
        qe,
        Je,
        Ke,
        Ge,
        Ve,
        We,
        Qe,
        Xe,
        Ye,
        Fe,
        He,
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
        ot = Q.b.div(
          Jn ||
            (Jn = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: baseline;\n\tpadding: 0.5vw 0 0 1vw;\n\t@media screen and (max-width: 1367px) {\n\t\tpadding: 0 0 0 0.5vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tpadding: 0 0 0 3vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tpadding: 0 0 0 2vw;\n\t\tjustify-content: space-between;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding: 0 0 0 1vw;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tpadding: 0.1vw 0 0 1vw;\n\t}\n\t@media screen and (max-width: 350px) {\n\t\tpadding: 0vw -2vw 0 0vw;\n\t}\n",
            ]))
        ),
        lt = Q.b.input(
          Kn ||
            (Kn = Object(c.a)([
              "\n\tborder: none;\n\tborder-bottom: 1px solid #003366;\n\tmax-width: 1.8vw;\n\tmax-height: 1.8vw;\n\tfont-size: 13px;\n\ttext-align: end;\n\t@media screen and (max-width: 1367px) {\n\t\tmax-width: 1.8vw;\n\t\tmax-height: 1.8vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tmax-width: 3vw;\n\t\tmax-height: 3vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmax-width: 4vw;\n\t\tfont-size: 13px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 4vw;\n\t\tmargin: 0 -4vw 0 0;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tmax-width: 4vw;\n\t\tpadding: 0vw -7vw 0 0;\n\t}\n\t@media screen and (max-width: 350px) {\n\t\tmax-width: 4vw;\n\t\tpadding: 0vw -10vw 0 0;\n\t}\n",
            ]))
        ),
        mt = Q.b.p(
          Gn ||
            (Gn = Object(c.a)([
              '\n\tfont-size: 0.5em;\n\tcolor: #003366;\n\tfont-family: "Radikal1";\n\t@media screen and (max-width: 600px) {\n\t\tposition: relative;\n\t\ttop: 12px;\n\t\tleft: 17px;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\ttop: 0;\n\t\tleft: 30px;\n\t}\n\t@media screen and (max-width: 350px) {\n\t\ttop: 0;\n\t\tleft: 20px;\n\t}\n',
            ]))
        ),
        pt = Q.b.div(
          Vn ||
            (Vn = Object(c.a)([
              '\n\tfont-size: 0.8em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: "Radikal1";\n\talign-items: ',
              ";\n\t@media screen and (max-width: 768px) {\n\t\tpadding: 0 0 3vw 0;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding: 0 0 5vw 0;\n\t}\n",
            ])),
          function (n) {
            return "true" === n.end ? "flex-end" : "center";
          }
        ),
        xt = Q.b.div(
          Wn ||
            (Wn = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n",
            ]))
        ),
        ht = Q.b.div(
          Qn || (Qn = Object(c.a)(["\n\tdisplay: block;\n\tline-height: 0;\n"]))
        ),
        st = Q.b.input(
          Xn ||
            (Xn = Object(c.a)([
              "\n\twidth: 1.5em;\n\theight: 1.5em;\n\tbackground-color: ",
              ";\n\tborder-radius: 999px;\n\t@media screen and (max-width: 768px) {\n\t\tposition: relative;\n\t\tleft: -60px;\n\t\ttop: 5vw;\n\t}\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        wt = Q.b.input(
          Yn ||
            (Yn = Object(c.a)([
              "\n\twidth: 1.5em;\n\theight: 1.5em;\n\tbackground-color: ",
              ";\n\tborder-radius: 999px;\n",
            ])),
          function (n) {
            var e = n.color;
            return "".concat(e || "transparent");
          }
        ),
        vt = Q.b.div(
          Fn ||
            (Fn = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\tposition: relative;\n\tleft: -5px;\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0 -10px 0 0;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n",
            ]))
        ),
        ut = Q.b.div(
          Hn ||
            (Hn = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: row;\n\tposition: relative;\n\tleft: -5px;\n\tmax-height: 5vw;\n\tmargin: -0.9vw 0 0 0;\n\t@media screen and (max-width: 768px) {\n\t\tmargin: -0.6vw 0vw 0 -1vw;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: -0.4vw 3vw 0 1vw;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin: 2vw 8vw 9vw 4vw;\n\t}\n\t@media screen and (max-width: 350px) {\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\tpadding: 0vw 5vw 0vw 5vw;\n\t}\n",
            ]))
        ),
        gt = Q.b.div(
          Zn ||
            (Zn = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex-direction: column;\n\t@media screen and (max-width: 768px) {\n\t\tflex-direction: row;\n\t\tposition: absolute;\n\t}\n",
            ]))
        ),
        bt = Object(Q.b)(vt)(
          $n || ($n = Object(c.a)(["\n\talign-items: center;\n"]))
        ),
        ft = Object(Q.b)(vt)(
          ne ||
            (ne = Object(c.a)([
              "\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-width: 140px;\n\tmargin: 0 0 0 3vw;\n\tpadding: 0px 10px 3.5vw 0;\n\t@media screen and (max-width: 1367px) {\n\t\tmargin: 0 0 0 2vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 0 2vw 2vw 7vw;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmargin: 0 3vw 2.8vw 6vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 0 4vw 55px 3vw;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0 11px 60px 2vw;\n\t\tmax-width: 55px;\n\t\tmin-width: 55px;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tmargin: 0 4vw 48vw 3vw;\n\t\tmax-width: 45px;\n\t\tmin-width: 45px;\n\t}\n\t@media screen and (max-width: 350px) {\n\t\tmargin: 0 4vw 48vw 4vw;\n\t\tmax-width: 40px;\n\t\tmin-width: 40px;\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\tmargin: 0 8vw 18vw 4vw;\n\t\tmax-width: 40px;\n\t\tmin-width: 40px;\n\t}\n",
            ]))
        ),
        jt = Q.b.p(
          ee ||
            (ee = Object(c.a)([
              '\n\tmargin: none;\n\tpadding: none;\n\tfont-family: "RadikalBold";\n\tcolor: #003366;\n',
            ]))
        ),
        Ot = Object(Q.b)(jt)(
          te ||
            (te = Object(c.a)([
              "\n\tfont-size: 1em;\n\n\t@media screen and (orientation: landscape) {\n\t\tfont-size: 15px;\n\t}\n",
            ]))
        ),
        yt = Object(Q.b)(jt)(
          ae ||
            (ae = Object(c.a)([
              "\n\tfont-size: 0.7em;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 8px;\n\t}\n",
            ]))
        ),
        Et = Object(Q.b)(jt)(
          ie ||
            (ie = Object(c.a)([
              '\n\tfont-size: 1.3;\n\tfont-family: "Radikal1";\n\tposition: relative;\n\tletter-spacing: 2px;\n\tleft: -10px;\n\t@media screen and (max-width: 768px) {\n\t\tfont-size: 13px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 13px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 12px;\n\t}\n',
            ]))
        ),
        zt = Q.b.button(
          de ||
            (de = Object(c.a)([
              "\n\tborder-radius: 100%;\n\tborder: none;\n\tbackground: #b70033;\n\tcolor: white;\n\tpadding: 0;\n\tfont-size: 1.2vh;\n\twidth: 1.3vh;\n\t@media screen and (max-width: 768px) {\n\t\tposition: relative;\n\t\tfont-size: 10px;\n\t\tleft: 40px;\n\t\ttop: -30px;\n\t\theight: 2vh;\n\t\twidth: 2vh;\n\t\tmargin: 2vw;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tposition: relative;\n\t\tleft: 5px;\n\t\ttop: -40px;\n\t\theight: 2vh;\n\t\twidth: 2vh;\n\t\tmargin: 2vw;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tposition: relative;\n\t\tleft: 13px;\n\t\ttop: -20px;\n\t\theight: 2vh;\n\t\twidth: 2vh;\n\t\tmargin: 1.5vw;\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\twidth: 15px;\n\t\theight: 15px;\n\t}\n",
            ]))
        ),
        kt =
          (t(48),
          Q.b.div(
            se ||
              (se = Object(c.a)([
                "\n  text-align: center;\n  padding: 0vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    width: 100vw;\n    height: 800px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 100vw;\n    height: 800px;\n  }\n",
              ]))
          ),
          Q.b.tr(
            we ||
              (we = Object(c.a)([
                "\n  padding: 1vw 0 4vh 0;\n  max-width: 2vw;\n  min-width: 2vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 3vw 0 0vw 0;\n  }\n",
              ]))
          ),
          Q.b.h1(
            ve ||
              (ve = Object(c.a)([
                '\n  font-family: "RadikalBold";\n  font-size: 2.7vh;\n  padding: 0 0 0 3vw;\n  text-align: left;\n  font-weight: 1000;\n  letter-spacing: 1.7px;\n  color: #003366;\n  @media screen and (max-width: 600px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 1vw 8vw;\n  }\n',
              ]))
          )),
        Ct = Q.b.div(
          ue ||
            (ue = Object(c.a)([
              "\n  padding: 0 4vw 3vw 4vw;\n  justify-content: space-between;\n  display: flex;\n  @media screen and (max-width: 1024px) {\n    padding: 0 4vw 5vw 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 4vw 7vw 4vw;\n  }\n  \n",
            ]))
        ),
        Rt = Q.b.button(
          ge ||
            (ge = Object(c.a)([
              '\n  min-width: 80px;\n  width: auto;\n  height: 30px;\n  line-height: 30px;\n  font-size: 1.5vh;\n  background: #003366;\n  color: white;\n  font-family: "RadikalMedium";\n  font-weight: 1000;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: right;\n  @media screen and (max-width: 1024px) {\n    font-size: 12.6px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 12.6px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        St = Q.b.button(
          be ||
            (be = Object(c.a)([
              '\n  min-width: 105px;\n  width: auto;\n  height: 35px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 12px 0 12px;\n  justify-content: right;\n  align-items: right;\n  font-size: 14px;\n  background: #b70033;\n  color: white;\n  font-family: "Radikal1";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 14px;\n\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        It =
          (Q.b.small(
            fe ||
              (fe = Object(c.a)([
                '\n  font-size: 1vh;\n  margin: none;\n  padding: none;\n  color: #003366;\n  padding: 0;\n  font-family: "RadikalBold";\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 23px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    padding: 0 0 5px 0;\n  }\n',
              ]))
          ),
          Q.b.h2(
            je ||
              (je = Object(c.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 600px) {\n    margin: 0 1px 0 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    position: relative;\n    top: 2px;\n    padding: 0vw 0px 0 0;\n    margin: 0 2px 0 0;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1.5vw 0;\n  }\n',
              ]))
          ),
          Q.b.h2(
            Oe ||
              (Oe = Object(c.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 1024px) {\n    padding: 0 0px 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0px 1.5vw 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    padding: 0 0 0 1vw;\n    justify-content: center;\n    position: relative;\n  }\n',
              ]))
          ),
          Q.b.h2(
            ye ||
              (ye = Object(c.a)([
                '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.4vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 3px;\n    font-size: 11px;\n    margin: -0.4vw 0 -20px 0;\n    padding: 0vw 20px 0 0;\n  }\n  @media screen and (max-width: 600px) {\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1vw 0;\n  }\n',
              ]))
          ),
          Q.b.h2(
            Ee ||
              (Ee = Object(c.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    padding: none;\n  }\n',
              ]))
          ),
          Q.b.h2(
            ze ||
              (ze = Object(c.a)([
                '\n  font-family: "Radikal1";\n  @media screen and (max-width: 1367px) {\n    padding: 0vh 1.2vw 0 1.2vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 0px 0 0px;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 0 10px 0 10px;\n  }\n',
              ]))
          ),
          Q.b.div(
            ke ||
              (ke = Object(c.a)([
                '\n  font-family: "Radikal1";\n  text-align: right;\n  padding: none;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    padding: 0 0vw 0 0;\n    left: 10px;\n  }\n',
              ]))
          ),
          Q.b.img(
            Ce ||
              (Ce = Object(c.a)([
                "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          Q.b.img(
            Re ||
              (Re = Object(c.a)([
                "\n  margin: none;\n  position: relative;\n  left: -10px;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
              ]))
          ),
          Q.b.img(
            Se ||
              (Se = Object(c.a)([
                "\n  margin: 0 0 0 0;\n  padding: none;\n  width: 4vh;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 768px) {\n    width: 10vw;\n  }\n",
              ]))
          ),
          Q.b.div(
            Ie || (Ie = Object(c.a)(["\n  margin: -32px;\n  padding: none;\n"]))
          ),
          Q.b.img(
            Te ||
              (Te = Object(c.a)([
                "\n  width: 1.8vh;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  top: -4px;\n  @media screen and (max-width: 1024px) {\n    width: 23px;\n    margin: 0 0.3vw 0 0.3vw;\n    padding: 0 0.3vw 0 0.3vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n",
              ]))
          ),
          Q.b.div(
            _e ||
              (_e = Object(c.a)([
                "\n  display: flex;\n  flex: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 12vw;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 1024px) {\n    width: 20vw;\n    align-items: center;\n    margin: 0px -26px 25px 55px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 25vw;\n    align-items: center;\n    margin: 20px -36px 34px 15px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 19vw;\n    margin: 20px -20px 34px 20px;\n  }\n",
              ]))
          ),
          Q.b.div(
            Be ||
              (Be = Object(c.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  justify-content: space-between;\n  top: -10px;\n",
              ]))
          ),
          Q.b.div(
            Ne ||
              (Ne = Object(c.a)([
                "\n  display: flex;\n  flex: center;\n  width: 11.7vw;\n  justify-content: center;\n",
              ]))
          ),
          Q.b.p(
            Ae ||
              (Ae = Object(c.a)([
                '\n  font-size: 19px;\n  letter-spacing: 1.6px;\n  color: #003366;\n  position: relative;\n  left: 3.5vw;\n  top: -20px;\n  font-family: "Radikal1";\n\n  @media screen and (max-width: 1367px) {\n    font-size: 18px;\n    position: relative;\n    left: 25px;\n    top: -15px;\n    text-align: center;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -1.5vw;\n    font-size: 2vw;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    position: relative;\n    left: 4px;\n    top: 0px;\n    margin: 0;\n  }\n',
              ]))
          ),
          Q.b.td(
            Pe ||
              (Pe = Object(c.a)([
                "\n  border-right: 1px solid #003366;\n  @media screen and (max-width: 768px) {\n    font-size: 2vw;\n  }\n",
              ]))
          ),
          Q.b.td(
            Me ||
              (Me = Object(c.a)([
                "\n  border-right: 1px solid #003366;\n  padding: 0 0 5px 0;\n  max-height: 10vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0 0 0px 0;\n    max-height: 10vw;\n    margin: 0vw 0 5px 0;\n  }\n",
              ]))
          ),
          Q.b.a(Le || (Le = Object(c.a)(["\n  color: black;\n"]))),
          Q.b.input(
            De ||
              (De = Object(c.a)([
                "\n  width: 10.2vh;\n  height: 3.2vh;\n  border: none;\n  border-radius: 8px;\n  margin: 0 0 0 1vh;\n  @media screen and (max-width: 768px) {\n    width: 60px;\n    height: 20px;\n  }\n",
              ]))
          )),
        Tt =
          (Q.b.div(
            Ue ||
              (Ue = Object(c.a)([
                "\n  text-align: center;\n  justify-content: center;\n  width: 90%;\n  padding: 3.5vw 0 .5vw 2vw;\n  min-height: 17vw;\n  max-height: 17vw;\n  @media screen and (max-width: 1367px) {\n    width: 18vw;\n    padding: 0vw 0 0vw 1vw;\n    min-height: 600px;\n    max-height: 600px;\n  }\n  @media screen and (max-width: 768px) {\n    min-height: 650px;\n    max-height: 650px;\n  }\n",
              ]))
          ),
          Q.b.div(qe || (qe = Object(c.a)(["\n  display: inline-block;\n"])))),
        _t =
          (Q.b.button(
            Je ||
              (Je = Object(c.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: -20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    top: -15px;\n    left: 0vh;\n    height: 20px;\n    width: 20px;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -17px;\n    left: -35px;\n    width: 20px;\n    height: 20px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 30px;\n    width: 1vw;\n    height: 5vw;\n  }\n",
              ]))
          ),
          Q.b.input(
            Ke ||
              (Ke = Object(c.a)([
                "\n  width: 2vw;\n  height: 2vw;\n  background-color: white;\n  border: 0.1px ridge #003366;\n  @media screen and (max-width: 768px) {\n    width: 2vw;\n    height: 4vw;\n  }\n",
              ]))
          ),
          Q.b.input(
            Ge ||
              (Ge = Object(c.a)([
                "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: 20px;\n  background-color: white;\n  border: 1.5px solid #003366;\n  margin: 0px 1vw 0 2vh;\n  &:checked {\n    border: 6px solid black;\n    color: blue;\n    outline: unset !important; /* I added this one for Edge (chromium) support */\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 1vh;\n    left: -15px;\n    top: 23px;\n  }\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 15px;\n    border: 1px solid #003366;\n    left: -20px;\n    width: 12px;\n    margin: none;\n    padding: none;\n    height: 12px;\n  }\n",
              ]))
          ),
          Q.b.input(
            Ve ||
              (Ve = Object(c.a)([
                "\n  border-bottom: 1px solid #003366;\n  border-top: white;\n  border-left: white;\n  border-right: white;\n  font-size: 1.5vh;\n  width: 3vw;\n  heght: 0.1vw;\n  position: relative;\n  top: -6px;\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 35px;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 7vw;\n  }\n",
              ]))
          ),
          Q.b.button(
            We ||
              (We = Object(c.a)([
                "\n  border-radius: 100%;\n  border: none;\n  background: #b70033;\n  color: white;\n  padding: 0;\n  font-size: 1.2vh;\n  width: 1.3vh;\n  position: relative;\n  left: 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    width: 15px;\n    left: -30px;\n    height: 15px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 25px;\n    font-size: 11 px;\n  }\n",
              ]))
          ),
          Q.b.button(
            Qe ||
              (Qe = Object(c.a)([
                "\n  border-radius: 100%;\n  background: #b70033;\n  font-size: 1.2vh;\n  padding: 0;\n  color: white;\n  border: none;\n  width: 1.3vh;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    width: 15px;\n    height: 15px;\n    left: -3vw;\n    font-size: 11px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 40px;\n    font-size: 12px;\n  }\n",
              ]))
          ),
          Q.b.div(
            Xe ||
              (Xe = Object(c.a)([
                "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: 11vw;\n  top: -20px;\n  margin: 0 11.5vw 0 0;\n  @media screen and (max-width: 1367px) {\n    left: 11.5vw;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    left: 13vw;\n    position: relative;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n    top: -40px;\n    left: 2vw;\n  }\n",
              ]))
          ),
          Q.b.div(
            Ye ||
              (Ye = Object(c.a)([
                '\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: none;\n  width: auto;\n  padding: 4px 0 -100px 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    padding: 0 8vw 0 3.5vw;\n  }\n  @media screen and (max-width: 1367px) {\n    padding: 4px 0 -10vw 0;\n  }\n  media screen and (max-width: 768px) {\n    padding: 0 0 0 -3vw;\n  }\n',
              ]))
          ),
          Q.b.p(
            Fe ||
              (Fe = Object(c.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -5px;\n  margin: 0 1vh 0 1vh;\n  color: #003366;\n\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    top: 0;\n    margin: 0 0.4vw 0 0.4vw;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n    margin: 0 2.1vw 0 2.1vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 10px;\n    align-items: flex-end;\n  }\n',
              ]))
          ),
          Q.b.p(
            He ||
              (He = Object(c.a)([
                '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -2.3vw;\n  left: -10px;\n  margin: 0vw 0 0 0vw;\n  color: #003366;\n  @media screen and (max-width: 1367px) {\n    top: -2.2vw;\n    font-size: 9px;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 9px;\n    top: -16px;\n  }\n',
              ]))
          ),
          Q.b.p(
            Ze ||
              (Ze = Object(c.a)([
                '\n  font-family: "RadikalMedium";\n  text-align: left;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #b70033;\n  position: relative;\n  top: 5px;\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
              ]))
          )),
        Bt = Q.b.div(
          $e ||
            ($e = Object(c.a)([
              "\n  margin: 0 4vw 0 5vw;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 4vw 0 5vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 2vw 4vw 0 4vw;\n  }\n  @media screen and (max-width: 600px) {\n    margin: auto\n    width: 90%;\n    justify-content: space-between;\n  }\n",
            ]))
        );
      function Nt() {
        Object(zn.b)();
        var n = Object(zn.c)(function (n) {
            return n;
          }).colors,
          e = Object(a.useState)(["wall1", "wall2", "wall3", "wall4", "wall5"]),
          t = Object(o.a)(e, 1)[0];
        return Object(a.useMemo)(
          function () {
            return i.a.createElement(
              Qt,
              null,
              i.a.createElement(kt, null, "COLORES SELECCIONADOS"),
              i.a.createElement(
                Ct,
                null,
                i.a.createElement(
                  "div",
                  null,
                  n.map(function (n, e) {
                    return i.a.createElement(
                      Tt,
                      { key: e + "colores" },
                      i.a.createElement(It, {
                        style: { backgroundColor: n.rgb },
                      })
                    );
                  })
                ),
                i.a.createElement(
                  Rt,
                  { onClick: function () {} },
                  "Borrar todo"
                )
              ),
              i.a.createElement(
                Yt,
                null,
                i.a.createElement(
                  Ft,
                  null,
                  i.a.createElement(
                    na,
                    null,
                    i.a.createElement(xe, {
                      title: "Colores",
                      icon: "colors",
                      end: !0,
                    })
                  ),
                  i.a.createElement(
                    na,
                    null,
                    i.a.createElement(xe, {
                      title: "Largo",
                      icon: "vertical",
                      size: !0,
                    })
                  ),
                  i.a.createElement(
                    na,
                    null,
                    i.a.createElement(xe, {
                      title: "Ancho",
                      icon: "horizontal",
                      size: !0,
                    })
                  ),
                  i.a.createElement(
                    na,
                    null,
                    i.a.createElement(xe, { title: "Puertas", icon: "door" })
                  ),
                  i.a.createElement(
                    na,
                    null,
                    i.a.createElement(xe, { title: "Ventanas", icon: "window" })
                  )
                ),
                t.map(function (n, e) {
                  return i.a.createElement(At, {
                    key: e + "top",
                    index: e + 1,
                    identifier: n,
                  });
                }),
                i.a.createElement(
                  Bt,
                  null,
                  i.a.createElement(
                    _t,
                    null,
                    "*Tienes que llenar todos los campos"
                  ),
                  i.a.createElement(St, { onClick: function () {} }, "Calcular")
                )
              )
            );
          },
          [n]
        );
      }
      function At(n) {
        var e = n.index,
          t = n.identifier,
          d = Object(a.useState)(null),
          r = Object(o.a)(d, 2),
          c = r[0],
          p = r[1],
          x = Object(a.useState)(!1),
          h = Object(o.a)(x, 2),
          s = h[0],
          w = h[1],
          v = Object(a.useReducer)(
            function (n, e) {
              return Object(l.a)(Object(l.a)({}, n), e);
            },
            { alto: 1, ancho: 1, puertas: [], ventanas: [] }
          ),
          u = Object(o.a)(v, 2),
          g = (u[0], u[1]);
        function b(n, e) {
          g(Object(m.a)({}, n, e));
        }
        Object(a.useEffect)(
          function () {
            s || p(null);
          },
          [s, c]
        );
        var f = function (n) {
          var e = n.children;
          return i.a.createElement($t, { hidden: !s }, e);
        };
        return Object(a.useMemo)(
          function () {
            return i.a.createElement(
              Ht,
              { key: "table" },
              i.a.createElement(
                Zt,
                { key: "first" },
                i.a.createElement(he, {
                  index: e,
                  selectControl: s,
                  onSelectControl: w,
                  id: "color",
                  identifier: t,
                  onSubmit: p,
                })
              ),
              i.a.createElement(
                Zt,
                { key: "second" },
                i.a.createElement(
                  f,
                  null,
                  i.a.createElement(pe, { id: "alto", onSubmit: b })
                )
              ),
              i.a.createElement(
                Zt,
                { key: "three" },
                i.a.createElement(
                  f,
                  null,
                  i.a.createElement(pe, { id: "ancho", onSubmit: b })
                )
              ),
              i.a.createElement(
                Zt,
                { key: "four" },
                i.a.createElement(
                  f,
                  null,
                  i.a.createElement(oe, {
                    id: "puertas",
                    identifier: t,
                    onSubmit: b,
                  })
                )
              ),
              i.a.createElement(
                Zt,
                { key: "five", end: !0 },
                i.a.createElement(
                  f,
                  null,
                  i.a.createElement(oe, {
                    id: "ventanas",
                    identifier: t,
                    onSubmit: b,
                  })
                )
              )
            );
          },
          [s]
        );
      }
      var Pt,
        Mt,
        Lt,
        Dt,
        Ut,
        qt,
        Jt,
        Kt,
        Gt,
        Vt,
        Wt,
        Qt = Q.b.div(
          nt ||
            (nt = Object(c.a)([
              "\n\tmax-width: 768;\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 5vw 0 0 0;\n\t}\n",
            ]))
        ),
        Xt = Q.b.tr(
          et || (et = Object(c.a)(["\n\tmargin: 0;\n\tpadding: 0;\n"]))
        ),
        Yt = Object(Q.b)(Xt)(
          tt ||
            (tt = Object(c.a)([
              "\n\ttext-align: center;\n\tjustify-content: center;\n",
            ]))
        ),
        Ft = Object(Q.b)(Xt)(at || (at = Object(c.a)([""]))),
        Ht = Object(Q.b)(Xt)(it || (it = Object(c.a)([""]))),
        Zt = Q.b.td(
          dt || (dt = Object(c.a)(["\n\tmargin: 0;\n\t", "\n"])),
          function (n) {
            return n.end ? "" : "border-right: 1px solid #003366;";
          }
        ),
        $t = Q.b.div(
          rt ||
            (rt = Object(c.a)([
              "\n\tdisplay: flex;\n\tflex: 1;\n\tvisibility: ",
              ";\n",
            ])),
          function (n) {
            var e = n.hidden;
            return "".concat(e ? "hidden" : "visible");
          }
        ),
        na = Q.b.th(
          ct ||
            (ct = Object(c.a)([
              "\n\tpadding: 0px 1vw;\n\t@media screen and (max-width: 1367px) {\n\t\tpadding: 0px 0.7vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tpadding: 0px 1.5vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tpadding: 0 0.2vw;\n\t}\n",
            ]))
        ),
        ea = t(18),
        ta = (function () {
          var n = Object(h.a)(
            x.a.mark(function n() {
              var e, t, a;
              return x.a.wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          (n.next = 3),
                          fetch(
                            "https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=643"
                          )
                        );
                      case 3:
                        return (e = n.sent), (n.next = 6), e.json();
                      case 6:
                        if (!(t = n.sent).hasOwnProperty("colores")) {
                          n.next = 10;
                          break;
                        }
                        return (
                          null === (a = t.linea_producto) || void 0 === a
                            ? void 0
                            : a.id,
                          n.abrupt("return", t.colores)
                        );
                      case 10:
                        return n.abrupt("return", []);
                      case 13:
                        return (
                          (n.prev = 13),
                          (n.t0 = n.catch(0)),
                          n.abrupt("return", [])
                        );
                      case 16:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[0, 13]]
              );
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        aa = Object(ea.b)({
          name: "colors",
          initialState: [],
          reducers: {
            putColors: function (n, e) {
              return e.payload;
            },
          },
        }),
        ia = aa.actions,
        da = aa.reducer,
        ra = ia.putColors,
        ca = da,
        oa = function () {
          var n = Object(zn.b)();
          Object(a.useEffect)(function () {
            n(
              (function () {
                var n = Object(h.a)(
                  x.a.mark(function n(e) {
                    var t;
                    return x.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), ta();
                          case 2:
                            (t = n.sent), e(ra(t.concat([])));
                          case 4:
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
          }, []);
          var e = function () {
            return i.a.createElement(ma, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png",
            });
          };
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(e, null),
            i.a.createElement(
              la,
              null,
              i.a.createElement(xa, null, i.a.createElement(Nt, null)),
              i.a.createElement(pa, null, i.a.createElement(yn, { total: {} }))
            )
          );
        },
        la = Q.b.div(
          Pt ||
            (Pt = Object(c.a)([
              "\n\tdisplay: flex;\n\tmin-height: 100vh;\n\tmax-height: 100vh;\n\toverflow: hidden;\n\t@media screen and (max-width: 1200px) {\n\t\toverflow: visible;\n\t\tflex-direction: column;\n\t}\n\t@media screen and (min-width: 1200px) {\n\t\talign-items: center;\n\t}\n",
            ]))
        ),
        ma = Q.b.img(
          Mt ||
            (Mt = Object(c.a)([
              "\n\tdisplay: none;\n\t@media screen and (max-width: 1200px) {\n\t\tdisplay: initial;\n\t\twidth: 102%;\n\t\tmargin: -1% 0 0 -1.1%;\n\t\tpadding: none;\n\t\theight: 30vw;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tdisplay: initial;\n\t\twidth: 103%;\n\t\tmargin: -1% 0 0 -0.8vh;\n\t\tpadding: none;\n\t\theight: 30vw;\n\t}\n\t@media screen and (max-width: 1024px) and (orientation: landscape) {\n\t\tdisplay: initial;\n\t\twidth: 105%;\n\t\tmargin: -1vh -1vw 0 -1vh;\n\t\tpadding: none;\n\t\theight: 30vw;\n\t}\n\t@media screen and (max-width: 900px) and (orientation: landscape) {\n\t\tdisplay: initial;\n\t\twidth: 104%;\n\t\tmargin: -1.5vh 0px 0 -10px;\n\t\tpadding: none;\n\t\theight: 30vw;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tdisplay: initial;\n\t\twidth: 102%;\n\t\tmargin: -1.2vh 0 0 -0.5vh;\n\t\tpadding: none;\n\t\theight: 30vw;\n\t}\n",
            ]))
        ),
        pa = Q.b.div(
          Lt ||
            (Lt = Object(c.a)([
              "\n\tbackground-color: #003366;\n\theight: auto !important;\n\tmin-height: 100vh;\n\tmax-height: 100vh;\n\tmin-width: 48%;\n\tmax-width: 48%;\n\tmargin: 0vw -0.5vw 0 0;\n\t@media screen and (max-width: 1366px) {\n\t\ttop: 0vw;\n\t}\n\t@media screen and (max-width: 1200px) {\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: none;\n\t\tmax-height: none;\n\t}\n\t@media screen and (max-width: 1024px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-width: 102%;\n\t\tmax-width: 102%;\n\t\tmin-height: 140vh;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: 180vh;\n\t}\n\t@media screen and (max-width: 768px) and (orientation: landscape) {\n\t\tpadding: 0 0 5% 0;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: 130vh;\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\tpadding: 0 0 50% 0;\n\t}\n\t@media screen and (max-width: 400px) {\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n",
            ]))
        ),
        xa = Q.b.div(
          Dt ||
            (Dt = Object(c.a)([
              "\n\theight: auto !important;\n\tmin-height: 100vh;\n\tmax-height: 100vh;\n\tmin-width: 52%;\n\tmax-width: 52%;\n\tmargin: 2vw 0 0 0;\n\tjustify-content: center;\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: none;\n\t}\n\t@media screen and (max-width: 1200px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: 110vh;\n\t}\n\t@media screen and (max-width: 1024px) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-height: 100vh;\n\t}\n\t@media screen and (max-width: 1024px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tpadding: 0 0 10% 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n\t@media screen and (max-width: 900px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tpadding: 0 0 40% 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\tmargin: 5vw 0 0 0;\n\t\tpadding: 0 0 30% 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n\t@media screen and (max-width: 768px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-width: 100%;\n\t\tpadding: 0 0 80% 0;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n\t@media screen and (max-width: 700px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tpadding: 0 0 90% 0;\n\t\tmin-height: auto;\n\t}\n\t@media screen and (max-width: 600px) and (orientation: landscape) {\n\t\tmargin: 5vw 0 0 0;\n\t\tpadding: 0 0 140% 0;\n\t\tmin-width: 100%;\n\t\tmax-width: 100%;\n\t\tmin-height: auto;\n\t}\n",
            ]))
        );
      t(49);
      Q.b.div(
        Ut ||
          (Ut = Object(c.a)([
            '\n  display: flex;\n  flex-direction: column;\n  font-family: "Radikal1";\n  align-items: ',
            ";\n",
          ])),
        function (n) {
          return n.end ? "flex-end" : "center";
        }
      ),
        Q.b.div(
          qt ||
            (qt = Object(c.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n",
            ]))
        ),
        Q.b.div(
          Jt ||
            (Jt = Object(c.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
            ]))
        ),
        Q.b.img(
          Kt ||
            (Kt = Object(c.a)([
              "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  height: 5vh;\n  align-self: center;\n",
            ]))
        ),
        Q.b.p(
          Gt ||
            (Gt = Object(c.a)([
              '\n  font-family: "Radikal1";\n  font-size: 10px;\n  margin: 0 0 0 0.3vw;\n  color: #003366;\n  media screen and (max-width: 768px) {\n    font-size: 20px;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 1vh;\n    position: relative;\n  }\n',
            ]))
        ),
        Q.b.div(
          Vt ||
            (Vt = Object(c.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin: 0 0 0 1vh;\n  padding: 0 1vh 0 1.5vh;\n  @media screen and (max-width: 1367px) {\n    position: relative;\n  }\n",
            ]))
        ),
        Q.b.div(
          Wt ||
            (Wt = Object(c.a)([
              '\n  display: flex;\n  flex-direction: column;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1367px) {\n  }\n  media screen and (max-width: 768px) {\n    justify-content: space-between;\n  }\n',
            ]))
        );
      var ha,
        sa = Object(ea.b)({
          name: "info",
          initialState: { isReadyToCompute: !1 },
          reducers: {
            goCalculator: function (n) {
              n.isReadyToCompute = !0;
            },
            finishCalculator: function (n) {
              n.isReadyToCompute = !1;
            },
          },
        }),
        wa = sa.actions,
        va = sa.reducer,
        ua = (wa.goCalculator, wa.finishCalculator, va),
        ga = Object(ea.a)({ reducer: { colors: ca, info: ua } });
      function ba(n) {
        var e = n.children;
        return i.a.createElement(zn.a, { store: ga }, e);
      }
      var fa = Object(Q.a)(
          ha ||
            (ha = Object(c.a)([
              "\n  body {\n    margin: 0%;\n    padding: 0%;\n  }\n",
            ]))
        ),
        ja = function () {
          return i.a.createElement(
            ba,
            null,
            i.a.createElement(
              "div",
              null,
              i.a.createElement(oa, null),
              i.a.createElement(fa, null)
            )
          );
        };
      r.a.render(i.a.createElement(ja, null), document.getElementById("root"));
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.43fdf35f.chunk.js.map
