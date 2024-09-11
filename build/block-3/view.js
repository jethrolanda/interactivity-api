import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/block-3/view.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("form-block", {
  state: {},
  actions: {
    submit: () => {
      // const context = getContext();
      alert(`Hello ${state.name}!`);
      // Submit ajax request
      // try {
      //   const context = getContext();
      //   const formData = new FormData();
      //   formData.append("action", "safw_place_offer");
      //   formData.append("nonce", state.nonce);
      //   formData.append("offer", context.offerPrice);
      //   formData.append("uid", state.uid);
      //   formData.append("pid", state.pid);
      //   const data = yield fetch(state.ajax_url, {
      //     method: "POST",
      //     body: formData
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log(data.status, data.data);
      //       if (data.status === "success") {
      //         context.offers.unshift(data.data);
      //       }
      //     });
      //   // console.log("Server data!", data);
      // } catch (e) {
      //   // Something went wrong!
      // }
    }
  },
  callbacks: {
    setName: () => {
      // const context = getContext();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      state.name = ref.value;
      console.log(ref.value);
    },
    logForm: () => {
      // const { name } = getContext();
      const {
        name
      } = state;
      console.log(`Name: ${name}`);
    }
  }
});

//# sourceMappingURL=view.js.map