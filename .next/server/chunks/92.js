exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 6066:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(3215);
;// CONCATENATED MODULE: ./components/Footer/index.tsx


const Footer = () => /*#__PURE__*/jsx_runtime_.jsx("footer", {
  className: "bg-emerald text-white",
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-white flex items-center text-sm",
      children: config/* Config.footer */.D.footer
    })
  })
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Header/index.tsx





const Header = () => {
  var _Config$links;

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "bg-emerald",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-wrap items-center justify-between max-w-4xl p-6 mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/logo-dark.png",
          layout: "fixed",
          height: 45,
          width: 158,
          loading: "eager",
          priority: true,
          alt: config/* Config.alt.logoName */.D.alt.logoName,
          className: "cursor-pointer"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-between gap-4",
        children: config/* Config */.D === null || config/* Config */.D === void 0 ? void 0 : (_Config$links = config/* Config.links */.D.links) === null || _Config$links === void 0 ? void 0 : _Config$links.map((link, index) => {
          var _link$href;

          return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: (_link$href = link === null || link === void 0 ? void 0 : link.href) !== null && _link$href !== void 0 ? _link$href : "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-gray-50 cursor-pointer hover:underline underline-offset-4",
              children: link.text
            })
          }, `menu-link-${index}`);
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Layout/index.tsx





const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
});

/***/ }),

/***/ 7723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ MetaHead; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3215);




const MetaHead = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: config__WEBPACK_IMPORTED_MODULE_2__/* .Config.title */ .D.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "title",
      content: config__WEBPACK_IMPORTED_MODULE_2__/* .Config.title */ .D.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: config__WEBPACK_IMPORTED_MODULE_2__/* .Config.description */ .D.description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "icon",
      href: "/favicon.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com/css2?family=Nunito&family=Roboto+Slab&display=swap"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:url",
      content: "https://grassrootsfuture.org/"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: config__WEBPACK_IMPORTED_MODULE_2__/* .Config.title */ .D.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:description",
      content: config__WEBPACK_IMPORTED_MODULE_2__/* .Config.description */ .D.description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: "https://grassrootsfuture.org/hero/demonstration.webp"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:url",
      content: "https://grassrootsfuture.org/"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:title",
      content: "Grassroots Future"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:description",
      content: "Grassroots Future is a registered charity in Hong Kong which came out of a desire to help refugee-led initiatives and grassroots organizations working with refugees build capacity."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "twitter:image",
      content: "https://grassrootsfuture.org/hero/demonstration.webp"
    })]
  });
};

/***/ }),

/***/ 3215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ Config; }
/* harmony export */ });
const Config = {
  title: "Grassroots Future",
  description: "Grassroots Future is a registered charity in Hong Kong which came out of a desire to help refugee-led initiatives and grassroots organizations working with refugees build capacity.",
  footer: "Grassroots Future is a charitable institution under section 88 of the Inland Revenue Ordinance with No. 91/17131",
  alt: {
    logoName: "Grassroots Future logo"
  },
  links: [{
    href: "media",
    text: "Media"
  }],
  people: [],
  founder: {
    name: "Tegan Smyth",
    role: "Director",
    bio: ["Tegan is a legally-trained Compliance professional with 8+ years of experience in private practice and global financial institutions in sanctions, AML/KYC, and project management. Her interest in refugee issues stems from her days training as a lawyer, which involved working for a community legal centre in Australia that focussed on providing civil law advice to refugees and new migrants.", "As the Founder and CEO of Grassroots Future, she is involved in donation drives for refugee and asylum seeker communities, as well developing well-being, education and outreach initiatives to bridge gaps across communities."],
    imageUrl: "./profiles/tegan.jpeg"
  },
  volunteers: [{
    name: "Anjali Kelkar",
    linkedin: "https://www.linkedin.com/in/anjali-kelkar-12b28b/"
  }, {
    name: "Aarohi Narain",
    linkedin: "https://www.linkedin.com/in/aarohi-narain/"
  }, {
    name: "Denis Tsoi",
    linkedin: "https://www.linkedin.com/in/denistsoi/"
  }, {
    name: "Phoebe So",
    linkedin: "https://www.linkedin.com/in/phoebeso/"
  }, {
    name: "Carmen Wong",
    linkedin: ""
  }],
  partners: [{
    name: "Yoga Mandala Project",
    filename: "yoga-mandala-project.png"
  }, {
    name: "Encompass HK",
    filename: "encompass-hk.png"
  }, {
    name: "Refugee Union",
    filename: "refugee-union-logo.jpeg"
  }, {
    name: "Wise",
    filename: "wise.png"
  }, {
    name: "Breadline",
    filename: "breadline.jpeg"
  }],
  networks: [{
    name: "Asia Pacific Refugee Rights Network",
    filename: "asia-pacific-refugee-rights-network.png"
  }]
};

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;