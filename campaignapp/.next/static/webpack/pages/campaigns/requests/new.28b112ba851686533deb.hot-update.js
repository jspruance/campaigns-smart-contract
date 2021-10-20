"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests/new",{

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\Ethereum_and_Solidity_CDG_Course_Udemy\\Campaigns_app\\kickstart\\pages\\campaigns\\requests\\new.js",
    _this = undefined,
    _s = $RefreshSig$();










var RequestNew = function RequestNew(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      recipient = _useState3[0],
      setRecipient = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var campaign, accounts;
      return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setLoading(true);
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(props.address);
              _context.prev = 3;
              _context.next = 6;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value, 'ether'), recipient).send({
                from: accounts[0]
              });

            case 9:
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              setErrorMessage(_context.t0.message);

            case 14:
              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      children: "Create a request"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: description,
          onChange: function onChange(event) {
            setDescription(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Value in Ether"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: value,
          onChange: function onChange(event) {
            setValue(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Recipient"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: recipient,
          onChange: function onChange(event) {
            setRecipient(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        primary: true,
        loading: loading,
        children: "Create!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(RequestNew, "lCZSI2o300y2Px6Vvo7W7qeJMB4=");

_c = RequestNew;

RequestNew.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(props) {
    var address;
    return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            address = props.query.address;
            return _context2.abrupt("return", {
              address: address
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (RequestNew);

var _c;

$RefreshReg$(_c, "RequestNew");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy4yOGIxMTJiYTg1MTY4NjUzM2RlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixrQkFBMEJaLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFzQ2QsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2UsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxtQkFBd0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPbUIsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBOEJwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPcUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxRQUFRO0FBQUEscVdBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBSCxjQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ01JLGNBQUFBLFFBSlMsR0FJRXBCLDJEQUFRLENBQUNNLEtBQUssQ0FBQ2UsT0FBUCxDQUpWO0FBQUE7QUFBQTtBQUFBLHFCQU9VcEIsbUVBQUEsRUFQVjs7QUFBQTtBQU9QdUIsY0FBQUEsUUFQTztBQUFBO0FBQUEscUJBUVBKLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsYUFBakIsQ0FDSmpCLFdBREksRUFFSlIsK0RBQUEsQ0FBaUJNLEtBQWpCLEVBQXdCLE9BQXhCLENBRkksRUFHSkksU0FISSxFQUlKa0IsSUFKSSxDQUlDO0FBQUVDLGdCQUFBQSxJQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLGVBSkQsQ0FSTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY2JWLGNBQUFBLGVBQWUsQ0FBQyxZQUFNaUIsT0FBUCxDQUFmOztBQWRhO0FBaUJmZixjQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWOztBQWpCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSQyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBcUJBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU0sY0FBUSxFQUFFQSxRQUFoQjtBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUNFLGVBQUssRUFBRVIsV0FEVDtBQUVFLGtCQUFRLEVBQUUsa0JBQUFTLEtBQUssRUFBSTtBQUNqQlIsWUFBQUEsY0FBYyxDQUFDUSxLQUFLLENBQUNjLE1BQU4sQ0FBYXpCLEtBQWQsQ0FBZDtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxvREFBRDtBQUNFLGVBQUssRUFBRUEsS0FEVDtBQUVFLGtCQUFRLEVBQUUsa0JBQUFXLEtBQUssRUFBSTtBQUNqQlYsWUFBQUEsUUFBUSxDQUFDVSxLQUFLLENBQUNjLE1BQU4sQ0FBYXpCLEtBQWQsQ0FBUjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQW1CRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFLLEVBQUVJLFNBRFQ7QUFFRSxrQkFBUSxFQUFFLGtCQUFBTyxLQUFLLEVBQUk7QUFDakJOLFlBQUFBLFlBQVksQ0FBQ00sS0FBSyxDQUFDYyxNQUFOLENBQWF6QixLQUFkLENBQVo7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGLGVBNkJFLDhEQUFDLHFEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGVBQU8sRUFBRVEsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FqRUQ7O0dBQU1WOztLQUFBQTs7QUFtRU5BLFVBQVUsQ0FBQzRCLGVBQVg7QUFBQSxvV0FBNkIsa0JBQU8zQixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQmUsWUFBQUEsT0FEbUIsR0FDUGYsS0FBSyxDQUFDNEIsS0FEQyxDQUNuQmIsT0FEbUI7QUFBQSw4Q0FFcEI7QUFBRUEsY0FBQUEsT0FBTyxFQUFQQTtBQUFGLGFBRm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLCtEQUFlaEIsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBSZXF1ZXN0TmV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlY2lwaWVudCwgc2V0UmVjaXBpZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVSZXF1ZXN0KFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCAnZXRoZXInKSxcclxuICAgICAgICByZWNpcGllbnRcclxuICAgICAgKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPkNyZWF0ZSBhIHJlcXVlc3Q8L2gzPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3JlY2lwaWVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBzZXRSZWNpcGllbnQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17bG9hZGluZ30+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuUmVxdWVzdE5ldy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gIHJldHVybiB7IGFkZHJlc3MgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvcm0iLCJCdXR0b24iLCJNZXNzYWdlIiwiSW5wdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiUmVxdWVzdE5ldyIsInByb3BzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJzZXRSZWNpcGllbnQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=