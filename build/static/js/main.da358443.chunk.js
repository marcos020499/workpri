(this.webpackJsonpprisa = this.webpackJsonpprisa || []).push([
  [0],
  {
    36: function (n, e, t) {
      n.exports = t(71);
    },
    47: function (n, e, t) {},
    64: function (n, e, t) {},
    68: function (n, e, t) {},
    71: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t(1),
        i = t.n(a),
        d = t(32),
        r = t.n(d),
        l = t(2),
        c = t(18),
        o = t(9),
        p = t(7),
        m = t(12),
        x = (t(41), t(24), t(33), t(16));
      t(72), t(45);
      x.a.initializeApp({
        apiKey: "AIzaSyDfDOMsOGDkxXKsQWmaBTJ0KeOY8y7jjwc",
        authDomain: "boards-585b9.firebaseapp.com",
        projectId: "boards-585b9",
        storageBucket: "boards-585b9.appspot.com",
        messagingSenderId: "1044202533897",
        appId: "1:1044202533897:web:0f052d6160e75f047cb4d8",
      });
      x.a.auth(), x.a.firestore();
      new x.a.auth.GoogleAuthProvider().setCustomParameters({
        prompt: "select_account",
      });
      var s,
        h,
        w,
        v,
        u,
        g,
        b,
        f,
        j,
        O,
        y,
        E,
        k,
        z,
        C,
        R,
        S,
        I,
        N,
        _,
        T,
        B,
        A,
        M,
        P,
        D,
        U,
        L,
        q,
        V,
        J,
        K,
        W,
        G,
        Q,
        X,
        Y,
        F,
        H,
        Z,
        $ = x.a,
        nn = function () {
          var n = Object(a.useState)([]),
            e = Object(p.a)(n, 2),
            t = e[0],
            i = e[1],
            d = Object(a.useState)(!1),
            r = Object(p.a)(d, 2),
            l = r[0],
            c = r[1],
            x = Object(a.useState)({ input1: 34, input2: 2 }),
            s = Object(p.a)(x, 2),
            h = s[0],
            w = s[1],
            v = Object(a.useState)(),
            u = Object(p.a)(v, 2),
            g = u[0],
            b = (u[1], Object(a.useState)()),
            f = Object(p.a)(b, 2),
            j = f[0],
            O = f[1],
            y = Object(a.useState)(),
            E = Object(p.a)(y, 2);
          E[0], E[1];
          Object(a.useEffect)(
            function () {
              console.log("useItems");
              var n = h.input1,
                e = h.input2;
              Math.floor(O((Number(n) * Number(e)) / 3));
            },
            [h]
          );
          var k = Object(a.useReducer)(
              function (n, e) {
                return Object(o.a)(Object(o.a)({}, n), e);
              },
              { input1: "", input2: "" }
            ),
            z = Object(p.a)(k, 2),
            C = (z[0], z[1]);
          return (
            Object(a.useEffect)(function () {
              $.firestore()
                .collection("colors")
                .onSnapshot(function (n) {
                  var e = n.docs.map(function (n) {
                    return Object(o.a)({ id: n.id }, n.data());
                  });
                  i(e);
                });
            }, []),
            Object(a.useEffect)(function () {
              t.length && c(t[0].hyper);
            }),
            {
              item: t,
              imper: l,
              number: h,
              suma: g,
              handleInput: function (n) {
                C(w(Object(m.a)({}, n.target.name, n.target.value))),
                  console.log(n.target.name);
              },
              liters: j,
              message1: function () {},
            }
          );
        },
        en =
          (t(47),
          function (n) {
            var e,
              t = Object(a.useState)(!1),
              d = Object(p.a)(t, 2),
              r = d[0],
              l = d[1];
            return i.a.createElement(
              "div",
              {
                className: "Tooltip-Wrapper",
                onMouseUpCapture: function () {
                  e = setTimeout(function () {
                    l(!0);
                  }, n.delay || 400);
                },
                onMouseDownCapture: function () {
                  clearInterval(e), l(!1);
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
          }),
        tn = (t(48), t(3)),
        an =
          (t(64),
          tn.b.div(
            s ||
              (s = Object(l.a)([
                "\n  text-align: center;\n  padding: 3vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    width: 100vw;\n    height: 800px\n  }\n  @media screen and (max-width: 1024px) {\n    width: 100vw;\n    height: 800px\n  }\n",
              ]))
          )),
        dn = tn.b.tr(
          h ||
            (h = Object(l.a)([
              "\npadding: 1vw 0 4vh 0;\nmax-width: 2vw;\nmin-width: 2vw;\n@media screen and (max-width: 1367px) {\n  padding: 0 0 0vw 0;\n}\n@media screen and (max-width: 768px) {\n\n  padding: 5vw 0 0vw 0;\n}\n\n",
            ]))
        ),
        rn = tn.b.h1(
          w ||
            (w = Object(l.a)([
              '\n  font-family: "RadikalBold";\n  font-size: 2.7vh;\n  padding: 0 0 0 3vw;\n  text-align: left;\n  font-weight: 1000;\n  letter-spacing: 1.7px;\n  color: #003366;\n  @media screen and (max-width: 600px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    padding: 0 0 1vw 10vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 1vw 8vw;\n  }\n',
            ]))
        ),
        ln = tn.b.div(
          v ||
            (v = Object(l.a)([
              "\n  padding: 0 4vw 0 4vw;\n  justify-content: space-between;\n  display: flex;\n  @media screen and (max-width: 768px) {\n    padding: 0 0 0 3vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 0 8vw;\n  }\n",
            ]))
        ),
        cn = tn.b.button(
          u ||
            (u = Object(l.a)([
              '\n  min-width: 80px;\n  width: auto;\n  height: 3.7vh;\n  line-height: 3.7vh;\n  font-size: 1.5vh;\n  background: #003366;\n  color: white;\n  font-family: "RadikalMedium";\n  font-weight: 1000;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: right;\n  @media screen and (max-width: 768px) {\n    font-size: 12.6px;\n    margin: 15vw 0vw 0 2vw;\n\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 12.6px;\n    margin: 0vw 10vw 0 0vw;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        on = tn.b.button(
          g ||
            (g = Object(l.a)([
              '\n  min-width: 105px;\n  width: auto;\n  height: 35px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 12px 0 12px;\n  justify-content: right;\n  align-items: right;\n  font-size: 14px;\n  background: #b70033;\n  color: white;\n  font-family: "Radikal1";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        pn = tn.b.small(
          b ||
            (b = Object(l.a)([
              '\n  font-size: 1vh;\n  margin: none;\n  padding: none;\n  color: #003366;\n  padding: 0;\n  font-family: "RadikalBold";\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 23px;\n    padding: 1vh 0 1vh 0;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    padding: 0 0 5px 0;\n  }\n',
            ]))
        ),
        mn = tn.b.h2(
          f ||
            (f = Object(l.a)([
              '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 600px) {\n    margin: 0 1px 0 0;\n  }\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    position: relative;\n    top: 2px;\n    padding: 0vw 0px 0 0;\n    margin: 0 2px 0 0;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1.5vw 0;\n  }\n',
            ]))
        ),
        xn = tn.b.h2(
          j ||
            (j = Object(l.a)([
              '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0 1vw 0 1vw;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.45vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    font-size: 11px;\n    left: 13px;\n    padding: 0 54px 0 1vw;\n    justify-content: center;\n    position: relative;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 0 30px 0 1vw;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0px 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0px 1.5vw 0;\n  }\n  \n',
            ]))
        ),
        sn = tn.b.h2(
          O ||
            (O = Object(l.a)([
              '\n  font-size: 1.7vh;\n  font-family: "RadikalBold";\n  padding: 0;\n  letter-spacing: 2px;\n  color: #003366;\n  margin: -0.4vw 0 0 0;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 3px;\n    font-size: 11px;\n    margin: -0.4vw 0 -20px 0;\n    padding: 0vw 20px 0 0;\n  }\n  @media screen and (max-width: 600px) {\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0vw 0 1vw 0;\n  }\n',
            ]))
        ),
        hn = tn.b.h2(
          y ||
            (y = Object(l.a)([
              '\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    padding: none;\n  }\n',
            ]))
        ),
        wn = tn.b.h2(
          E ||
            (E = Object(l.a)([
              '\n\n  font-family: "Radikal1";\n  @media screen and (max-width: 1367px) {\n    padding: 0vh 1.2vw 0 1.2vw;\n  }\n  @media screen and (max-width: 768px) {\n    padding: 0 7px 0 7px;\n  }\n  @media screen and (max-width: 600px) {\n    padding: 0 10px 0 10px;\n  }\n  \n',
            ]))
        ),
        vn = tn.b.div(
          k ||
            (k = Object(l.a)([
              '\n  font-family: "Radikal1";\n  text-align: right;\n  padding: none;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    padding: 0 0vw 0 0 ;\n    left: 10px;\n  }\n',
            ]))
        ),
        un = tn.b.img(
          z ||
            (z = Object(l.a)([
              "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
            ]))
        ),
        gn = tn.b.img(
          C ||
            (C = Object(l.a)([
              "\n  margin: none;\n  position: relative;\n  left: -10px;\n  width: 5vh;\n  @media screen and (max-width: 768px) {\n    width: 11vw;\n  }\n",
            ]))
        ),
        bn = tn.b.img(
          R ||
            (R = Object(l.a)([
              "\n  margin: 0 0 0 0;\n  padding: none;\n  width: 4vh;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 768px) {\n    width: 10vw;\n  }\n\n",
            ]))
        ),
        fn = tn.b.div(
          S || (S = Object(l.a)(["\n  margin: -32px;\n  padding: none;\n"]))
        ),
        jn = tn.b.img(
          I ||
            (I = Object(l.a)([
              "\n  width: 1.8vh;\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n  top:-4px;\n  @media screen and (max-width: 768px) {\n    width: 0.4vh;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 23px;\n    margin: 0 5px 0 5px;\n    padding: 0 5px 0 5px;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n",
            ]))
        ),
        On = tn.b.div(
          N ||
            (N = Object(l.a)([
              "\n  display: flex;\n  flex: center;\n  justify-content: space-between;\n  align-items: center;\n  width: 12vw;\n  position: relative;\n  top: -10px;\n  @media screen and (max-width: 1024px) {\n    width: 20vw;\n    align-items: center;\n    margin: 0px -26px 25px 55px;\n  }\n  @media screen and (max-width: 768px) {\n    width: 25vw;\n    align-items: center;\n    margin: 20px -36px 34px 15px;\n  }\n  @media screen and (max-width: 600px) {\n    width: 19vw;\n    margin: 20px -20px 34px 20px;\n  }\n",
            ]))
        ),
        yn = tn.b.div(
          _ ||
            (_ = Object(l.a)([
              "\ndisplay: flex;\nflex-direction: column;\nposition: relative;\njustify-content: space-between;\ntop: -10px;\n",
            ]))
        ),
        En = tn.b.div(
          T ||
            (T = Object(l.a)([
              "\n  display: flex;\n  flex: center;\n  width: 11.7vw;\n  justify-content: center;\n\n",
            ]))
        ),
        kn = tn.b.p(
          B ||
            (B = Object(l.a)([
              '\n  font-size: 19px;\n  letter-spacing: 1.6px;\n  color: #003366;\n  position: relative;\n  left: 3.5vw;\n  top: -20px;\n  font-family: "Radikal1";\n\n  @media screen and (max-width: 1367px) {\n    font-size: 18px;\n    position: relative;\n    left: 25px;\n    top: -15px;\n    text-align: center;\n  }\n  @media screen and (max-width: 600px) {\n    font-size: 14px;\n    text-align: center;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -15px;\n    font-size: 20px;\n    text-align: center;\n  }\n',
            ]))
        ),
        zn = tn.b.td(
          A ||
            (A = Object(l.a)([
              "\n  border-right: 1px solid #003366;\n  @media screen and (max-width: 768px) {\n    font-size: 2vw;\n  }\n",
            ]))
        ),
        Cn = tn.b.td(
          M ||
            (M = Object(l.a)([
              "\n  border-right: 1px solid #003366;\n  padding: 0 0 15px 0;\n  max-height: 10vw;\n  @media screen and (max-width: 1367px) {\n    padding: 0 0 10px 0;\n    max-height: 10vw;\n    margin: 0vw 0 5px 0;\n  }\n  \n",
            ]))
        ),
        Rn =
          (tn.b.a(P || (P = Object(l.a)(["\n  color: black;\n"]))),
          tn.b.input(
            D ||
              (D = Object(l.a)([
                "\n  width: 10.2vh;\n  height: 3.2vh;\n  border: none;\n  border-radius: 8px;\n  margin: 0 0 0 1vh;\n  @media screen and (max-width: 768px) {\n    width: 60px;\n  height: 20px;\n  }\n",
              ]))
          )),
        Sn = tn.b.div(
          U ||
            (U = Object(l.a)([
              "\n  text-align: center;\n  justify-content: center;\n  width: 90%;\n  padding: 3.5vw 0 4.5vw 2vw;\n  min-height: 17vw;\n  max-height: 17vw;\n  @media screen and (max-width: 1367px) {\n    padding: 2vw 0 1.5vw 1vw;\n    min-height: 600px;\n    max-height: 600px;\n  }\n  @media screen and (max-width: 768px) {\n    min-height: 650px;\n    max-height: 650px;\n  }\n",
            ]))
        ),
        In = tn.b.div(L || (L = Object(l.a)(["\n  display: inline-block;\n"]))),
        Nn = tn.b.button(
          q ||
            (q = Object(l.a)([
              "\n  border-radius: 100%;\n  width: 2.3vh;\n  height: 2.3vh;\n  position: relative;\n  top: -20px;\n  background-color: white;\n  border: 1.5px solid #999999;\n  margin: 0px 1vw 0 2vh;\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: 20px;\n    left: -60px;\n    width: 5px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 1vw 0 0vh;\n    top: -15px;\n    left: 0vh;\n    height: 20px;\n    width: 20px;\n  }\n  @media screen and (max-width: 600px) {\n    left: -35px;\n    width: 5px;\n  }\n  @media screen and (max-width: 1024px) {\n    top: -17px;\n    left: -35px;\n    width: 20px;\n    height: 20px;\n  }\n",
            ]))
        ),
        _n = tn.b.option(
          V ||
            (V = Object(l.a)([
              "\n  width: 2vw;\n  height: 2vw;\n  background-color: white;\n  border: 0.1px ridge #003366;\n  @media screen and (max-width: 768px) {\n    width: 2vw;\n    height: 4vw;\n  }\n",
            ]))
        ),
        Tn = tn.b.input(
          J ||
            (J = Object(l.a)([
              "\nborder-radius: 100%;\nwidth: 2.3vh;\nheight: 2.3vh;\nposition: relative;\ntop:20px;\nbackground-color: white;\nborder: 1.5px solid #003366;\nmargin: 0px 1vw 0 2vh;\n&:checked {\n  border: 6px solid black;\n  color: blue;\n  outline: unset !important /* I added this one for Edge (chromium) support */\n}\n@media screen and (max-width: 1024px) {\n  width: 15px;\n  height: 15px;\n}\n@media screen and (max-width: 600px) {\n  width: 15px;\n  height: 15px;\n}\n@media screen and (max-width: 768px) {\n  position: relative;\n  top: 15px;\n  border: 1px solid #003366;\n  left: -20px;\n  width: 12px;\n  margin: none;\n  padding: none;\n  height: 12px;\n}\n@media screen and (max-width: 1367px) {\n  margin: 0 1vw 0 1vh;\n  left: -15px;\n  top:23px;\n}\n",
            ]))
        ),
        Bn = tn.b.input(
          K ||
            (K = Object(l.a)([
              "\n  border-bottom: 1px solid #003366;\n  border-top: white;\n  border-left: white;\n  border-right: white;\n  font-size: 1.5vh;\n  width: 3vw;\n  heght: 0.1vw;\n  position: relative;\n    top: -6px;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    width: 30px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 35px;\n  }\n",
            ]))
        ),
        An = tn.b.button(
          W ||
            (W = Object(l.a)([
              "\n  border-radius: 100%;\n  border: none;\n  background: #b70033;\n  color: white;\n  padding: 0;\n  font-size: 1.2vh;\n  width: 1.3vh;\n  position: relative;\n  left: 0;\n  @media screen and (max-width: 768px) {\n    width: 15px;\n    left: -25px;\n    height: 15px;\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 25px;\n    font-size: 11 px;\n  }\n",
            ]))
        ),
        Mn = tn.b.button(
          G ||
            (G = Object(l.a)([
              "\n  border-radius: 100%;\n  background: #b70033;\n  font-size: 1.2vh;\n  padding: 0;\n  color: white;\n  border: none;\n  width: 1.3vh;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    width: 15px;\n    height: 15px;\n    left: -5px;\n    font-size: 11px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 15px;\n    height: 15px;\n    left: 40px;\n    font-size: 12px;\n  }\n  \n",
            ]))
        ),
        Pn = tn.b.div(
          Q ||
            (Q = Object(l.a)([
              "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: 11vw;\n  top: -20px;\n  margin: 0 11.5vw 0 0;\n  @media screen and (max-width: 1367px) {\n    left: 11.5vw;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    left: 13vw;\n    position: relative;\n    flex-direction: row;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n    top: -40px;\n    left: 13vw;\n  }\n",
            ]))
        ),
        Dn = tn.b.div(
          X ||
            (X = Object(l.a)([
              '\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  margin: none;\n  width: auto;\n  padding: 4px 0 -100px 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 1024px) {\n    padding: 0 85px 0 23px;\n  }\n  @media screen and (max-width: 1367px) {\n    padding: 4px 0 -100px 0;\n  }\n  media screen and (max-width: 768px) {\n    justify-content: space-between;\n  }\n',
            ]))
        ),
        Un = tn.b.p(
          Y ||
            (Y = Object(l.a)([
              '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -5px;\n  margin: 0 1vh 0 1vh;\n  color: #003366;\n  @media screen and (max-width: 600px) {\n    font-size: 1px;\n    margin: 0 25px 0 25px;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 0 20px 0 20px;\n    align-items: flex-end;\n  }\n  @media screen and (max-width: 1367px) {\n    font-size: 10px;\n    top: 0 ;\n    margin: 0 0.4vh 0 0.4vh;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n    margin: 0 40px 0 40px;\n  }\n',
            ]))
        ),
        Ln = tn.b.p(
          F ||
            (F = Object(l.a)([
              '\n  font-family: "Radikal1";\n  font-size: 0.5vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -1.9vw;\n  left: -10px;\n  margin: 0vw 0 0 0vw;\n  color: #003366;\n  @media screen and (max-width: 768px) {\n    font-size: 10px;\n    left: 0px;\n    top: -30px;\n  }\n  @media screen and (max-width: 1367px) {\n    top: -2.2vw;\n    font-size: 9px;\n    position: relative;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 10px;\n    text-align: center;\n  }\n',
            ]))
        ),
        qn = tn.b.p(
          H ||
            (H = Object(l.a)([
              '\n  font-family: "RadikalMedium";\n  text-align: left;\n  font-size: 1.6vh;\n  letter-spacing: 1px;\n  color: #b70033;\n  position: relative;\n  top: 5px;\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n',
            ]))
        ),
        Vn = tn.b.div(
          Z ||
            (Z = Object(l.a)([
              "\n  margin: 280px 4vw 0 4vw;\n  padding: 0 0 10vw 0;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 1367px) {\n    margin: 0px 4vw 0 5vw;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 120px 100px 0 4vw;\n  }\n  @media screen and (max-width: 768px) {\n    margin: 35px 0 20px 0;\n  }\n",
            ]))
        ),
        Jn = function (n) {
          var e = n.state,
            t = (n.total0, n.total1, n.total2, n.total3, n.handleInput),
            d = n.calculateTotal,
            r = nn(),
            l = r.item,
            m = r.imper,
            x = Object(a.useState)([1]),
            s = Object(p.a)(x, 2),
            h = s[0],
            w = s[1],
            v = Object(a.useReducer)(
              function (n, e) {
                return Object(o.a)(Object(o.a)({}, n), e);
              },
              { door: [], window: [] }
            ),
            u = Object(p.a)(v, 2);
          u[0], u[1];
          function g() {
            w(function (n) {
              return [].concat(Object(c.a)(n), [n.lenght]);
            });
          }
          function b() {
            w(function (n) {
              return n.slice(1);
            });
          }
          return i.a.createElement(
            an,
            null,
            i.a.createElement(rn, null, "COLORES SELECCIONADOS"),
            i.a.createElement(
              ln,
              null,
              i.a.createElement(
                "div",
                null,
                l.map(function (n, e) {
                  return (
                    e <= 2 &&
                    i.a.createElement(
                      In,
                      { key: e },
                      i.a.createElement(Rn, {
                        style: { backgroundColor: "".concat(n.color) },
                      })
                    )
                  );
                })
              ),
              i.a.createElement(cn, null, "Borrar todo")
            ),
            i.a.createElement(
              Sn,
              null,
              i.a.createElement(
                "tr",
                null,
                i.a.createElement(
                  "th",
                  { style: { paddingBottom: "40px" } },
                  i.a.createElement(
                    vn,
                    null,
                    i.a.createElement(gn, {
                      src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg",
                    }),
                    i.a.createElement(sn, null, "Colores")
                  )
                ),
                i.a.createElement(
                  "th",
                  null,
                  i.a.createElement(
                    wn,
                    null,
                    i.a.createElement(bn, {
                      src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
                    }),
                    i.a.createElement(
                      fn,
                      null,
                      i.a.createElement(pn, null, "Metros"),
                      i.a.createElement(mn, null, "Largo")
                    )
                  )
                ),
                i.a.createElement(
                  "th",
                  null,
                  i.a.createElement(
                    wn,
                    null,
                    i.a.createElement(bn, {
                      src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
                    }),
                    i.a.createElement(
                      fn,
                      null,
                      i.a.createElement(pn, null, "Metros"),
                      i.a.createElement(mn, null, "Ancho")
                    )
                  )
                ),
                i.a.createElement(
                  "th",
                  null,
                  i.a.createElement(
                    hn,
                    null,
                    i.a.createElement(un, {
                      src: m
                        ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-04_j8euvm.svg"
                        : "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg",
                    }),
                    i.a.createElement(xn, null, m ? "Domos" : "Puertas")
                  )
                ),
                i.a.createElement(
                  "th",
                  null,
                  i.a.createElement(
                    hn,
                    null,
                    i.a.createElement(un, {
                      src: m
                        ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-05_xqp9kd.svg"
                        : "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg",
                    }),
                    i.a.createElement(xn, null, m ? "Tragaluz" : "Ventanas")
                  )
                )
              ),
              l.map(function (n, a) {
                return (
                  a < 5 &&
                  i.a.createElement(
                    dn,
                    { key: a, style: { margin: "10vw" } },
                    i.a.createElement(
                      Cn,
                      null,
                      i.a.createElement(
                        On,
                        null,
                        i.a.createElement(
                          yn,
                          null,
                          i.a.createElement(Tn, {
                            type: "radio",
                            checked: a <= 2 || "",
                          }),
                          i.a.createElement(
                            kn,
                            {
                              style: { color: a >= 3 ? "#999999" : "initial" },
                            },
                            m
                              ? "Azotea"
                              : a >= 4
                              ? " Techo"
                              : "Pared ".concat(a + 1)
                          )
                        ),
                        i.a.createElement(
                          en,
                          {
                            content: i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "small",
                                null,
                                "Colores a elegir"
                              ),
                              i.a.createElement(
                                "div",
                                null,
                                l.map(function (n, e) {
                                  return i.a.createElement(
                                    In,
                                    { key: e },
                                    i.a.createElement(_n, {
                                      style: {
                                        backgroundColor: "".concat(n.color),
                                      },
                                    })
                                  );
                                })
                              )
                            ),
                            direction: "right",
                          },
                          i.a.createElement(Nn, {
                            style: {
                              backgroundColor: m ? "".concat(n.color) : "white",
                            },
                          })
                        )
                      )
                    ),
                    i.a.createElement(
                      zn,
                      null,
                      a <= 2
                        ? i.a.createElement(
                            Un,
                            null,
                            i.a.createElement(Bn, {
                              type: "number",
                              min: "1",
                              max: "10",
                              step: "0.5",
                              defaultValue: "3",
                              value: e.input1,
                              name: "input1".concat(a),
                              onChange: t,
                            }),
                            "mts"
                          )
                        : i.a.createElement("h1", { style: { border: "none" } })
                    ),
                    i.a.createElement(
                      zn,
                      null,
                      a <= 2
                        ? i.a.createElement(
                            Un,
                            null,
                            i.a.createElement(Bn, {
                              type: "number",
                              defaultValue: "2",
                              min: "1",
                              max: "10",
                              step: "0.5",
                              value: e.input2,
                              name: "input2".concat(a),
                              onChange: t,
                            }),
                            "mts"
                          )
                        : i.a.createElement("h1", { style: { border: "none" } })
                    ),
                    i.a.createElement(
                      zn,
                      null,
                      a <= 2
                        ? i.a.createElement(
                            Dn,
                            null,
                            h.map(function (n, d) {
                              return 0 === d
                                ? i.a.createElement(
                                    Pn,
                                    null,
                                    i.a.createElement(
                                      An,
                                      {
                                        onClick: function () {
                                          g();
                                        },
                                        style: {
                                          display:
                                            h.length > 4 ? "none" : "initial",
                                        },
                                      },
                                      "+"
                                    ),
                                    i.a.createElement(
                                      Mn,
                                      {
                                        onClick: function () {
                                          b();
                                        },
                                        style: {
                                          display:
                                            1 === h.length ? "none" : "initial",
                                        },
                                      },
                                      "-"
                                    )
                                  )
                                : i.a.createElement(Kn, {
                                    key: d,
                                    x: d + 11,
                                    y:
                                      0 === a
                                        ? 1
                                        : 1 === a
                                        ? 2
                                        : 3 === a
                                        ? 3
                                        : 0,
                                    index: d,
                                    ind: a,
                                    total: h.totall,
                                    length: h.length,
                                    appendInput: g,
                                    popInput: b,
                                    state: e.int62,
                                    onCh: t,
                                  });
                            })
                          )
                        : i.a.createElement("h1", { style: { border: "none" } })
                    ),
                    i.a.createElement(
                      "td",
                      null,
                      a <= 2
                        ? i.a.createElement(
                            Dn,
                            null,
                            h.map(function (n, d) {
                              return 0 === d
                                ? i.a.createElement(
                                    Pn,
                                    null,
                                    i.a.createElement(
                                      An,
                                      {
                                        onClick: function () {
                                          g();
                                        },
                                        style: {
                                          display:
                                            h.length > 4 ? "none" : "initial",
                                        },
                                      },
                                      "+"
                                    ),
                                    i.a.createElement(
                                      Mn,
                                      {
                                        onClick: function () {
                                          b();
                                        },
                                        style: {
                                          display:
                                            1 === h.length ? "none" : "initial",
                                        },
                                      },
                                      "-"
                                    )
                                  )
                                : i.a.createElement(Kn, {
                                    key: d,
                                    x: d + 54,
                                    y:
                                      0 === a
                                        ? 1
                                        : 1 === a
                                        ? 2
                                        : 3 === a
                                        ? 3
                                        : 0,
                                    index: d,
                                    ind: a,
                                    total: h.totall,
                                    length: h.length,
                                    appendInput: g,
                                    popInput: b,
                                    state2: e.int7,
                                    onCh: t,
                                  });
                            })
                          )
                        : i.a.createElement("h1", { style: { border: "none" } })
                    )
                  )
                );
              })
            ),
            i.a.createElement(
              Vn,
              null,
              i.a.createElement(
                qn,
                null,
                "*Tienes que llenar todos los campos"
              ),
              i.a.createElement(on, { onClick: d }, "Calcular")
            )
          );
        };
      function Kn(n) {
        var e = n.x,
          t = (n.y, n.ind),
          a = n.index,
          d = n.length,
          r = n.appendInput,
          l = n.popInput,
          c = n.state1,
          o = n.state2,
          p = (n.handleI, n.onCh);
        return i.a.createElement(
          En,
          null,
          0 === a &&
            i.a.createElement(
              Pn,
              null,
              i.a.createElement(
                An,
                {
                  onClick: function () {
                    r();
                  },
                  style: { display: d > 3 ? "none" : "initial" },
                },
                "+"
              ),
              i.a.createElement(
                Mn,
                {
                  onClick: function () {
                    l();
                  },
                  style: { display: 1 === d ? "none" : "initial" },
                },
                "-"
              )
            ),
          i.a.createElement(
            Ln,
            null,
            i.a.createElement(jn, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
            }),
            i.a.createElement(Bn, {
              type: "number",
              value: c,
              name: "int".concat(4 * t + e + 50),
              onChange: p,
              defaultValue: "1",
              min: "1",
              max: "5",
              step: "0.5",
            }),
            "mts"
          ),
          i.a.createElement(
            Ln,
            null,
            i.a.createElement(jn, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
            }),
            i.a.createElement(Bn, {
              type: "number",
              value: o,
              name: "int".concat(4 * t + e - 5),
              onChange: p,
              defaultValue: "2",
              min: "1",
              max: "5",
              step: "0.5",
            }),
            "mts"
          )
        );
      }
      var Wn = function () {
        var n = nn(),
          e = n.liters,
          t = (n.number, Object(a.useState)()),
          i = Object(p.a)(t, 2),
          d = i[0],
          r = i[1],
          l = Object(a.useState)(),
          c = Object(p.a)(l, 2),
          o = c[0],
          m = c[1],
          x = Object(a.useState)(),
          s = Object(p.a)(x, 2),
          h = s[0],
          w = s[1];
        return (
          Object(a.useEffect)(function () {
            var n = (function () {
                for (
                  var n = 0, t = 0, a = 0, i = [19, 4, 1], d = [0, 0, 0], r = 0;
                  r < 3;
                  r++
                )
                  e >= i[r] &&
                    ((d[r] = Math.floor(e / i[r])), (e -= d[r] * i[r]));
                for (var l = 0; l < 3; l++) (a = d[0]), (n = d[1]), (t = d[2]);
                return { x: a, y: n, z: t };
              })(),
              t = n.x,
              a = n.y,
              i = n.z;
            w(t), m(a), r(i);
          }),
          { twenty: h, four: o, one: d }
        );
      };
      var Gn,
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
        re,
        le,
        ce,
        oe,
        pe,
        me,
        xe,
        se,
        he,
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
        ke,
        ze,
        Ce,
        Re,
        Se,
        Ie,
        Ne = function () {
          var n = Object(a.useReducer)(
              function (n, e) {
                return Object(o.a)(Object(o.a)({}, n), e);
              },
              {
                input10: 0,
                input20: 0,
                input11: 0,
                input21: 0,
                input12: 0,
                input22: 0,
                int62: 0,
                int7: 0,
                int63: 0,
                int8: 0,
                int64: 0,
                int9: 0,
                int65: 0,
                int10: 0,
                int3: 0,
                int101: 0,
              }
            ),
            e = Object(p.a)(n, 2),
            t = e[0],
            i = e[1],
            d = Object(a.useState)(0),
            r = Object(p.a)(d, 2),
            l = r[0],
            c = r[1],
            x = Object(a.useState)(0),
            s = Object(p.a)(x, 2),
            h = s[0],
            w = s[1],
            v = Object(a.useState)(0),
            u = Object(p.a)(v, 2),
            g = u[0],
            b = u[1],
            f = Object(a.useState)(0),
            j = Object(p.a)(f, 2),
            O = j[0],
            y = j[1],
            E = Object(a.useState)(0),
            k = Object(p.a)(E, 2),
            z = k[0];
          return (
            k[1],
            {
              total0: l,
              total1: h,
              total2: g,
              total3: O,
              calculateTotal: function () {
                c(
                  t.input10 * t.input20 -
                    (t.int62 * t.int7 +
                      t.int63 * t.int8 +
                      t.int64 * t.int9 +
                      t.int65 * t.int10)
                ),
                  w(t.input11 * t.input21),
                  b(t.input12 * t.input22),
                  y(t.input13 * t.input23);
              },
              handleInput: function (n) {
                i(
                  Object(m.a)({}, n.target.name, parseInt(n.target.value) || 0)
                ),
                  console.log(n.target.name);
              },
              state: t,
              total: z,
            }
          );
        },
        _e =
          (t(68),
          function (n) {
            var e,
              t = Object(a.useState)(!1),
              d = Object(p.a)(t, 2),
              r = d[0],
              l = d[1];
            return i.a.createElement(
              "div",
              {
                className: "Tooltip-Wrapper",
                onMouseOver: function () {
                  e = setTimeout(function () {
                    l(!0);
                  }, n.delay || 200);
                },
                onMouseOut: function () {
                  clearInterval(e), l(!1);
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
          }),
        Te = t(35),
        Be = tn.b.div(
          Gn ||
            (Gn = Object(l.a)([
              "\n  text-align: center;\n  padding: 0%;\n  margin: -1.5vh 0 0 0;\n  min-height: 21vw;\n  max-height: 21vw;\n  @media screen and (max-width: 768px) {\n    padding: 30px 0 0 0;\n    width: 100%;\n  }\n  @media screen and (max-height: 768px) {\n  }\n",
            ]))
        ),
        Ae =
          (Object(tn.b)(Te.a)(
            Qn ||
              (Qn = Object(l.a)([
                "\n  color: #003366;\n  @media screen and (max-width: 768px) {\n  }\n",
              ]))
          ),
          tn.b.div(
            Xn ||
              (Xn = Object(l.a)([
                "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    padding: 0 0 5vw 0;\n  }\n  @media screen and (max-width: 1367px) {\n    padding: 2vw 0 0vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0px 0 0vw 0;\n  }\n",
              ]))
          )),
        Me = tn.b.button(
          Yn ||
            (Yn = Object(l.a)([
              '\n  min-width: 130px;\n  width: auto;\n  height: 45px;\n  letter-spacing: 0.5px;\n  line-height: 45px;\n  padding: 0 12px 0 12px;\n  font-size: 17px;\n  background: #b70033;\n  color: white;\n  font-family: "RadikalBold";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 1vw 0 0vw 0;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n',
            ]))
        ),
        Pe = tn.b.table(
          Fn ||
            (Fn = Object(l.a)([
              '\n  font-family: "Radikal1";\n  justify-content: center;\n  text-align: center;\n  padding: 0 0 4vh 0;\n  min-height: 18vw;\n  max-height: 18vw;\n  @media screen and (max-width: 1367px) {\n\n    min-height: 16vw;\n  max-height: 16vw;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 0 0 5vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 0 0 0vw 0;\n  }\n  @media screen and (max-height: 769px) {\n    padding: 0 0 1vh 0;\n  }\n',
            ]))
        ),
        De = tn.b.tr(
          Hn ||
            (Hn = Object(l.a)([
              '\n  font-family: "Radikal1";\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  margin: -3vw 0.5vw 8vh 0;\n  position: relative;\n  left: -10px;\n\n  @media screen and (max-width: 1367px) {\n    margin: -2vw 0.5vh 4vw 0;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0vh 0 0vh 0;\n    left: 5px;\n  }\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 4vh 0;\n  }\n',
            ]))
        ),
        Ue =
          (tn.b.img(
            Zn ||
              (Zn = Object(l.a)([
                "\n  width: 100px;\n  color: white;\n  @media screen and (max-width: 1024px) {\n    width: 95px;\n  }\n",
              ]))
          ),
          tn.b.img(
            $n ||
              ($n = Object(l.a)([
                "\n  width: 7vh;\n  color: white;\n  @media screen and (max-width: 768px) {\n    width: 10vh;\n    margin: 0 0vw 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 6.5vh;\n    margin: 1vw 1vw 0 0vw;\n  }\n",
              ]))
          )),
        Le = tn.b.img(
          ne ||
            (ne = Object(l.a)([
              "\n  width: 9vh;\n  color: white;\n  @media screen and (max-width: 768px) {\n    width: 12vh;\n    margin: 0 0vw 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 8vh;\n    margin: 1vw 1vw 0 0vw;\n  }\n",
            ]))
        ),
        qe = tn.b.img(
          ee ||
            (ee = Object(l.a)([
              "\n  width: 10vh;\n  color: white;\n  @media screen and (max-width: 768px) {\n    width: 10vw;\n    margin: 0 0vw 0 0vw;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 180px;\n    margin: 0 0vw 0 0vw;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 8vh;\n    margin: 1vw 1vw 0 0vw;\n  }\n",
            ]))
        ),
        Ve = tn.b.img(
          te ||
            (te = Object(l.a)([
              "\n  width: 9vw;\n  @media screen and (max-width: 1367px) {\n    width: 7vw;\n    margin: 2vh 0 3vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 120px;\n  }\n",
            ]))
        ),
        Je = tn.b.img(
          ae ||
            (ae = Object(l.a)([
              "\n  width: 101.55%;\n  height: auto;\n  margin: -0.56vh -1vh 0 -0.66vh;\n  padding: 0;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n  @media screen and (max-width: 1024px) {\n    display: none;\n  }\n",
            ]))
        ),
        Ke = tn.b.div(
          ie ||
            (ie = Object(l.a)([
              "\n  font-size: 1.1vw;\n  margin: 0 0 0 -1vw;\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        We = tn.b.td(
          de ||
            (de = Object(l.a)([
              "\n  margin: -2vh -1vh 0 0;\n  padding: none;\n  width: 30%;\n",
            ]))
        ),
        Ge = tn.b.input(
          re ||
            (re = Object(l.a)([
              "\n  border-radius: 7px;\n  width: 30px;\n  text-align: center;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    margin: 0 10vw 0 1vw;\n    position: relative;\n    left: 10px;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1367px) {\n    width: 20px;\n  }\n",
            ]))
        ),
        Qe = tn.b.input(
          le ||
            (le = Object(l.a)([
              '\n  font-family: "Radikal1";\n  width: 6vw;\n  font-size: 1.3vh;\n  padding: 0.3vh 0 0.3vh 0;\n  margin: 0 4px 0 0;\n  border-radius: 7px;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 70px;\n    position: relative;\n\n    font-size: 13px;\n\n  }\n',
            ]))
        ),
        Xe = tn.b.input(
          ce ||
            (ce = Object(l.a)([
              '\n  font-family: "Radikal1";\n  width: 3.5vw;\n  font-size: 1.3vh;\n  padding: 0.3vh 0 0.3vh 0;\n  border-radius: 7px;\n  border: none;\n  color: #999999;\n  @media screen and (max-width: 768px) {\n    width: 35px;\n    font-size: 13px;\n    margin: 1vh 1vh 1vh 1vh;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 40px;\n    position: relative;\n\n\n  }\n',
            ]))
        ),
        Ye = tn.b.h1(
          oe ||
            (oe = Object(l.a)([
              '\n  font-family: "RadikalBold";\n  font-size: 35px;\n  color: white;\n  letter-spacing: 4px;\n  @media screen and (max-width: 768px) {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 30px 0 0 0;\n    font-size: 35px;\n  }\n  \n',
            ]))
        ),
        Fe = tn.b.h2(
          pe ||
            (pe = Object(l.a)([
              '\n  margin: -20px 0 0 0;\n  font-family: "RadikalBold";\n  color: #2098ae;\n  font-size: 20px;\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    display: flex;\n    margin: none;\n    padding: 10vw 0 0 0;\n    justify-content: center;\n  }\n  @media screen and (max-height: 769px) {\n    margin: -30px 0 1vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    padding: 10px 0 0 0;\n    font-size: 20px;\n  }\n',
            ]))
        ),
        He = tn.b.h2(
          me ||
            (me = Object(l.a)([
              '\n  margin: -5px 0 0 0;\n  letter-spacing: 2px;\n  font-family: "RadikalBold";\n  color: white;\n  font-size: 20px;\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n    display: flex;\n    padding: 0 0 20px 0;\n    justify-content: center;\n  }\n',
            ]))
        ),
        Ze = tn.b.h3(
          xe ||
            (xe = Object(l.a)([
              '\n  font-size: 0.7vw;\n  color: white;\n  letter-spacing: 1px;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 12px;\n  }\n',
            ]))
        ),
        $e = tn.b.h3(
          se ||
            (se = Object(l.a)([
              '\n  font-size: 1.4vh;\n  color: white;\n  font-family: "Radikal1";\n  width: 120px;\n  max-height: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  text-overflow: ellipsis;\n  @media screen and (max-width: 768px) {\n    font-size: 15px;\n    width: 80px;\n    text-align: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 14px;\n    width: 260px;\n    text-align: center;\n    justify-content: center;\n  }\n',
            ]))
        ),
        nt = tn.b.th(
          he ||
            (he = Object(l.a)([
              "\n  padding: 0 0 0 10px;\n  margin: -0.5vw 0 3vw 0;\n  @media screen and (max-width: 768px) {\n    font-size: 2.8vw;\n    margin: -0.5vw 0 3vw 0;\n    padding: 0;\n    margin: none;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: -2vh 0 3vh 0;\n  }\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 1vh 0;\n  }\n",
            ]))
        ),
        et = tn.b.tr(
          we ||
            (we = Object(l.a)([
              "\n  display: flex;\n  flex-direction: row;\n  @media screen and (max-width: 768px) {\n    align-items: center;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 0vh 0 0vh 0;\n    justify-content: center;\n    position: relative;\n    left: -15px;\n  }\n  @media screen and (max-height: 769px) {\n    margin: 0vh 0 0vh 0;\n  }\n",
            ]))
        ),
        tt = tn.b.p(
          ve ||
            (ve = Object(l.a)([
              '\n  color: #2098ae;\n  font-size: 0.8vw;\n  margin: -5px 0 0 0;\n  font-family: "Radikal1";\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 1024px) {\n    font-size: 15px;\n  }\n  @media screen and (max-width: 1367px) {\n    margin: 0 0 0 0;\n  }\n',
            ]))
        ),
        at = tn.b.div(
          ue ||
            (ue = Object(l.a)([
              "\n  min-width: 15vw;\n  @media screen and (max-width: 1367px) {\n    min-width: 16vw;\n    max-width: 16vw;\n    max-height: 20vw;\n    min-height: 20vw;\n    padding: 0 0 5vh 0;\n  }\n  @media screen and (max-width: 1024px) {\n    min-width: 300px;\n    min-height: 300px;\n    display: inline-block;\n    padding: 30px 0 2vh 0;\n  }\n  @media screen and (max-width: 768px) {\n    min-width: none;\n    \n    display: flex;\n    margin: 40px 0 5vw 0;\n  }\n",
            ]))
        ),
        it = tn.b.div(
          ge ||
            (ge = Object(l.a)([
              "\n  display: flex;\n  margin: 0 0 0 20px;\n  \n  @media screen and (max-width: 1024px) {\n    display: inline-block;\n    justify-content: center;\n    margin: 0 0 0 0vw;\n  }\n",
            ]))
        ),
        dt = tn.b.input(
          be ||
            (be = Object(l.a)([
              "\n  border-radius: 100%;\n  width: 0.5vh;\n  height: 0.8vh;\n  border: 1px solid #003366;\n  margin: 0 0.7vw 0 0;\n  @media screen and (max-width: 768px) {\n    width: 7px;\n  height: 10px;\n  position: relative;\n  top: -1px;\n    margin: 4vw 1vw 0 1vw;\n  }\n",
            ]))
        ),
        rt = Object(a.memo)(function (n) {
          var e = n.total0,
            t = n.total1,
            a = n.total2,
            d = n.total3,
            r = (n.total, n.handleInput),
            l = nn(),
            c = l.item,
            o = l.imper,
            p = l.liters,
            m = Wn(),
            x = m.four,
            s = m.twenty,
            h = m.one;
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(Je, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png",
            }),
            i.a.createElement(
              Be,
              null,
              i.a.createElement(Ye, null, "RESULTADO"),
              i.a.createElement(Fe, null, "PRISA TE RECOMIENDA"),
              i.a.createElement(Ve, {
                src: o
                  ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-02_okd6me.png"
                  : "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-01_tlx0kg.png",
              }),
              i.a.createElement(He, null, "Elige la presentaci\xf3n "),
              i.a.createElement(
                Pe,
                { style: { display: o ? "inline-block" : "initial" } },
                i.a.createElement(
                  it,
                  null,
                  c.map(function (n, l) {
                    return (
                      l <= 2 &&
                      i.a.createElement(
                        at,
                        { key: l },
                        i.a.createElement(
                          "tr",
                          null,
                          i.a.createElement(
                            nt,
                            null,
                            i.a.createElement(
                              _e,
                              { content: n.nombre, direction: "top" },
                              i.a.createElement(
                                $e,
                                null,
                                i.a.createElement(dt, {
                                  style: {
                                    backgroundColor: "".concat(n.color),
                                  },
                                }),
                                n.nombre
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          et,
                          null,
                          i.a.createElement(
                            nt,
                            null,
                            i.a.createElement(Ze, null, "Area"),
                            i.a.createElement(Qe, {
                              type: "text",
                              value:
                                0 === l
                                  ? e
                                  : 1 === l
                                  ? t
                                  : 2 === l
                                  ? a
                                  : 3 === l
                                  ? d
                                  : "0mts",
                              readonly: "readonly",
                            })
                          ),
                          i.a.createElement(
                            nt,
                            null,
                            i.a.createElement(Ze, null, "Litros"),
                            i.a.createElement(Xe, {
                              type: "text",
                              value: Math.ceil(p) + " lts",
                              readonly: "readonly",
                            })
                          )
                        ),
                        i.a.createElement(
                          De,
                          null,
                          i.a.createElement(
                            We,
                            null,
                            i.a.createElement(
                              Ke,
                              null,
                              i.a.createElement(qe, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg",
                              }),
                              i.a.createElement(tt, null, "19L"),
                              i.a.createElement(Ge, {
                                type: "text",
                                value: s,
                                onChange: r,
                              })
                            )
                          ),
                          i.a.createElement(
                            We,
                            null,
                            i.a.createElement(
                              Ke,
                              null,
                              i.a.createElement(Le, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg",
                              }),
                              i.a.createElement(tt, null, "4L"),
                              i.a.createElement(Ge, {
                                type: "text",
                                value: x,
                                onChange: r,
                              })
                            )
                          ),
                          i.a.createElement(
                            We,
                            null,
                            i.a.createElement(
                              Ke,
                              null,
                              i.a.createElement(Ue, {
                                src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg",
                              }),
                              i.a.createElement(tt, null, "1L"),
                              i.a.createElement(Ge, {
                                type: "text",
                                value: h,
                                onChange: r,
                              })
                            )
                          )
                        )
                      )
                    );
                  })
                )
              ),
              i.a.createElement(
                Ae,
                null,
                i.a.createElement(Me, null, "Comprar")
              )
            )
          );
        }),
        lt = tn.b.div(
          fe ||
            (fe = Object(l.a)([
              "\n  display: flex;\n  @media screen and (max-width: 1024px) {\n    flex-direction: column;\n  }\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        ct = tn.b.div(
          je ||
            (je = Object(l.a)([
              "\n  width: 50%;\n  justify-content: center;\n",
            ]))
        ),
        ot = tn.b.img(
          Oe ||
            (Oe = Object(l.a)([
              "\n  display: none;\n  @media screen and (max-width: 768px) {\n    display: initial;\n    width: 102%;\n    margin: -0.4vh 0 0 -0.5vh;\n    padding: none;\n    height: 40vw;\n  }\n  @media screen and (max-width: 1024px) {\n    display: initial;\n    width: 102%;\n    margin: -0.4vh 0 0 -0.8vh;\n    padding: none;\n    height: 30vw;\n  }\n",
            ]))
        ),
        pt = tn.b.div(
          ye ||
            (ye = Object(l.a)([
              "\n  display: flex;\n  background: #003366;\n  width: 50%;\n  min-height: 100%;\n  max-height: 100%;\n  margin: 0%;\n  padding: 0%;\n  @media screen and (max-width: 768px) {\n    margin: 140px 0 0 0;\n    width: 100%;\n    min-height: 950px;\n    height: 250vh;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1024px) {\n    margin: 200px 0 0 0;\n    width: 100%;\n    min-height: 950px;\n    height: 250vh;\n    justify-content: center;\n  }\n  @media screen and (max-width: 1367px) {\n    height: 109vh;\n  }\n",
            ]))
        ),
        mt = function () {
          var n = Ne();
          return i.a.createElement(
            lt,
            null,
            i.a.createElement(ot, {
              src: "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png",
            }),
            i.a.createElement(ct, null, i.a.createElement(Jn, n)),
            i.a.createElement(
              pt,
              null,
              i.a.createElement(rt, {
                total: n.total,
                total0: n.total0,
                total1: n.total1,
                total2: n.total2,
                total3: n.total3,
              })
            )
          );
        };
      var xt;
      tn.b.div(
        Ee ||
          (Ee = Object(l.a)([
            '\n  display: flex;\n  flex-direction: column;\n  font-family: "Radikal1";\n  align-items: ',
            ";\n",
          ])),
        function (n) {
          return n.end ? "flex-end" : "center";
        }
      ),
        tn.b.div(
          ke ||
            (ke = Object(l.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n",
            ]))
        ),
        tn.b.div(
          ze ||
            (ze = Object(l.a)([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
            ]))
        ),
        tn.b.img(
          Ce ||
            (Ce = Object(l.a)([
              "\n  margin: none;\n  padding: none;\n  width: 5vh;\n  height: 5vh;\n  align-self: center;\n",
            ]))
        ),
        tn.b.p(
          Re ||
            (Re = Object(l.a)([
              '\nfont-family: "Radikal1";\nfont-size: 10px;\nmargin: 0 0 0 0.3vw;\ncolor: #003366;\nmedia screen and (max-width: 768px) {\n  font-size: 20px;\n}\n@media screen and (max-width: 1367px) {\n  font-size: 1vh;\n  position: relative;\n}\n',
            ]))
        ),
        tn.b.div(
          Se ||
            (Se = Object(l.a)([
              "\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-end;\nmargin: 0 0 0 1vh;\npadding: 0 1vh 0 1.5vh;\n@media screen and (max-width: 1367px) {\n  position: relative;\n}\n",
            ]))
        ),
        tn.b.div(
          Ie ||
            (Ie = Object(l.a)([
              '\ndisplay: flex;\nflex-direction: column;\nfont-family: "Radikal1";\n@media screen and (max-width: 1367px) {\n\n}\nmedia screen and (max-width: 768px) {\n  justify-content: space-between;\n}\n',
            ]))
        );
      var st = Object(tn.a)(
          xt ||
            (xt = Object(l.a)([
              "\n  body {\n    margin: 0%;\n    padding: 0%;\n  }\n  input {\n    text-align: center;{{  }}\n  }\n",
            ]))
        ),
        ht = function () {
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(mt, null),
            i.a.createElement(st, null)
          );
        };
      r.a.render(i.a.createElement(ht, null), document.getElementById("root"));
    },
  },
  [[36, 1, 2]],
]);
//# sourceMappingURL=main.da358443.chunk.js.map
