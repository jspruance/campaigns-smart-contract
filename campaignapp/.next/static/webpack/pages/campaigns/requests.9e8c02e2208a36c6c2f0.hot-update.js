"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\Ethereum_and_Solidity_CDG_Course_Udemy\\Campaigns_app\\kickstart\\components\\RequestRow.js",
    _this = undefined;








var RequestRow = function RequestRow(props) {
  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell;
  var readyToFinalize = pops.request.approvalCount > approversCount / 2;

  var approveHandler = /*#__PURE__*/function () {
    var _ref = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var campaign, accounts;
      return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(props.address);
              _context.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function approveHandler() {
      return _ref.apply(this, arguments);
    };
  }();

  var finalizeHandler = /*#__PURE__*/function () {
    var _ref2 = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var campaign, accounts;
      return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(props.address);
              _context2.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function finalizeHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Row, {
    disabled: props.request.complete,
    positive: readyToFinalize,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: props.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(props.request.value, 'ether')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: [props.request.approvalCount, "/", props.approversCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: props.request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
        color: "green",
        basic: true,
        onClick: approveHandler,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Cell, {
      children: props.request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
        color: "teal",
        basic: true,
        onClick: finalizeHandler,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_c = RequestRow;
/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

var _c;

$RefreshReg$(_c, "RequestRow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjllOGMwMmUyMjA4YTM2YzZjMmYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFRQyxHQUFSLEdBQXNCTix3REFBdEI7QUFBQSxNQUFhTyxJQUFiLEdBQXNCUCx5REFBdEI7QUFDQSxNQUFNUSxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxhQUFiLEdBQTZCQyxjQUFjLEdBQUcsQ0FBdEU7O0FBRUEsTUFBTUMsY0FBYztBQUFBLHFXQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxjQUFBQSxRQURlLEdBQ0pYLDJEQUFRLENBQUNFLEtBQUssQ0FBQ1UsT0FBUCxDQURKO0FBQUE7QUFBQSxxQkFFRWIsbUVBQUEsRUFGRjs7QUFBQTtBQUVmZ0IsY0FBQUEsUUFGZTtBQUFBO0FBQUEscUJBR2ZKLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsY0FBakIsQ0FBZ0NmLEtBQUssQ0FBQ2dCLEVBQXRDLEVBQTBDQyxJQUExQyxDQUErQztBQUNuREMsZ0JBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEcUMsZUFBL0MsQ0FIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkTCxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVFBLE1BQU1XLGVBQWU7QUFBQSxzV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJWLGNBQUFBLFFBRGdCLEdBQ0xYLDJEQUFRLENBQUNFLEtBQUssQ0FBQ1UsT0FBUCxDQURIO0FBQUE7QUFBQSxxQkFFQ2IsbUVBQUEsRUFGRDs7QUFBQTtBQUVoQmdCLGNBQUFBLFFBRmdCO0FBQUE7QUFBQSxxQkFHaEJKLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQk0sZUFBakIsQ0FBaUNwQixLQUFLLENBQUNnQixFQUF2QyxFQUEyQ0MsSUFBM0MsQ0FBZ0Q7QUFDcERDLGdCQUFBQSxJQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHNDLGVBQWhELENBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZNLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBUUEsc0JBQ0UsOERBQUMsR0FBRDtBQUFLLFlBQVEsRUFBRW5CLEtBQUssQ0FBQ0ssT0FBTixDQUFjZ0IsUUFBN0I7QUFBdUMsWUFBUSxFQUFFbEIsZUFBakQ7QUFBQSw0QkFDRSw4REFBQyxJQUFEO0FBQUEsZ0JBQU9ILEtBQUssQ0FBQ2dCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsSUFBRDtBQUFBLGdCQUFPaEIsS0FBSyxDQUFDSyxPQUFOLENBQWNpQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxJQUFEO0FBQUEsZ0JBQU96QixpRUFBQSxDQUFtQkcsS0FBSyxDQUFDSyxPQUFOLENBQWNvQixLQUFqQyxFQUF3QyxPQUF4QztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLElBQUQ7QUFBQSxnQkFBT3pCLEtBQUssQ0FBQ0ssT0FBTixDQUFjcUI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UsOERBQUMsSUFBRDtBQUFBLGlCQUFPMUIsS0FBSyxDQUFDSyxPQUFOLENBQWNDLGFBQXJCLE9BQXFDTixLQUFLLENBQUNPLGNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUsOERBQUMsSUFBRDtBQUFBLGdCQUVJUCxLQUFLLENBQUNLLE9BQU4sQ0FBY2dCLFFBQWQsR0FBeUIsSUFBekIsZ0JBQ0UsOERBQUMscURBQUQ7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFzQixhQUFLLE1BQTNCO0FBQTRCLGVBQU8sRUFBRWIsY0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFhRSw4REFBQyxJQUFEO0FBQUEsZ0JBRUlSLEtBQUssQ0FBQ0ssT0FBTixDQUFjZ0IsUUFBZCxHQUF5QixJQUF6QixnQkFDRSw4REFBQyxxREFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQXFCLGFBQUssTUFBMUI7QUFBMkIsZUFBTyxFQUFFRixlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQTdDRDs7S0FBTXBCO0FBK0NOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcblxyXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG4gIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHBvcHMucmVxdWVzdC5hcHByb3ZhbENvdW50ID4gYXBwcm92ZXJzQ291bnQgLyAyO1xyXG5cclxuICBjb25zdCBhcHByb3ZlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluYWxpemVIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZGlzYWJsZWQ9e3Byb3BzLnJlcXVlc3QuY29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemV9PlxyXG4gICAgICA8Q2VsbD57cHJvcHMuaWR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XHJcbiAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocHJvcHMucmVxdWVzdC52YWx1ZSwgJ2V0aGVyJyl9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5hcHByb3ZhbENvdW50fS97cHJvcHMuYXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wcy5yZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17YXBwcm92ZUhhbmRsZXJ9PkFwcHJvdmU8L0J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgIHtcclxuICAgICAgICAgIHByb3BzLnJlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIGJhc2ljIG9uQ2xpY2s9e2ZpbmFsaXplSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgRmluYWxpemVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgPC9DZWxsPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJwcm9wcyIsIlJvdyIsIkNlbGwiLCJyZWFkeVRvRmluYWxpemUiLCJwb3BzIiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsImFwcHJvdmVIYW5kbGVyIiwiY2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJmaW5hbGl6ZUhhbmRsZXIiLCJmaW5hbGl6ZVJlcXVlc3QiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwic291cmNlUm9vdCI6IiJ9