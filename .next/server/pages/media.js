(function() {
var exports = {};
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 4207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "notion-client"
var external_notion_client_namespaceObject = require("notion-client");;
;// CONCATENATED MODULE: external "react-notion-x"
var external_react_notion_x_namespaceObject = require("react-notion-x");;
// EXTERNAL MODULE: ./components/Layout/index.tsx + 2 modules
var Layout = __webpack_require__(6066);
// EXTERNAL MODULE: ./components/MetaHead/index.tsx
var MetaHead = __webpack_require__(7723);
;// CONCATENATED MODULE: ./pages/media.tsx









function Home({
  recordMap
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MetaHead/* MetaHead */.w, {}), /*#__PURE__*/jsx_runtime_.jsx(Layout/* Layout */.A, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_notion_x_namespaceObject.NotionRenderer, {
          recordMap: recordMap
        })
      })
    })]
  });
}
async function getStaticProps() {
  const notion = new external_notion_client_namespaceObject.NotionAPI();
  const recordMap = await notion.getPage('62040807f1af4f808d18c51a0f6efa23');
  return {
    props: {
      recordMap
    }
  };
}

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,92], function() { return __webpack_exec__(4207); });
module.exports = __webpack_exports__;

})();