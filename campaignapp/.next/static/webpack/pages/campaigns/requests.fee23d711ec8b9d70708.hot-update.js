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
  var readyToFinalize = props.request.approvalCount > props.approversCount / 2;

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
    positive: readyToFinalize && !props.request.complete,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLmZlZTIzZDcxMWVjOGI5ZDcwNzA4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM1QixNQUFRQyxHQUFSLEdBQXNCTix3REFBdEI7QUFBQSxNQUFhTyxJQUFiLEdBQXNCUCx5REFBdEI7QUFDQSxNQUFNUSxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxhQUFkLEdBQThCTCxLQUFLLENBQUNNLGNBQU4sR0FBdUIsQ0FBN0U7O0FBRUEsTUFBTUMsY0FBYztBQUFBLHFXQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxjQUFBQSxRQURlLEdBQ0pWLDJEQUFRLENBQUNFLEtBQUssQ0FBQ1MsT0FBUCxDQURKO0FBQUE7QUFBQSxxQkFFRVosbUVBQUEsRUFGRjs7QUFBQTtBQUVmZSxjQUFBQSxRQUZlO0FBQUE7QUFBQSxxQkFHZkosUUFBUSxDQUFDSyxPQUFULENBQWlCQyxjQUFqQixDQUFnQ2QsS0FBSyxDQUFDZSxFQUF0QyxFQUEwQ0MsSUFBMUMsQ0FBK0M7QUFDbkRDLGdCQUFBQSxJQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHFDLGVBQS9DLENBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEwsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFRQSxNQUFNVyxlQUFlO0FBQUEsc1dBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCVixjQUFBQSxRQURnQixHQUNMViwyREFBUSxDQUFDRSxLQUFLLENBQUNTLE9BQVAsQ0FESDtBQUFBO0FBQUEscUJBRUNaLG1FQUFBLEVBRkQ7O0FBQUE7QUFFaEJlLGNBQUFBLFFBRmdCO0FBQUE7QUFBQSxxQkFHaEJKLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQk0sZUFBakIsQ0FBaUNuQixLQUFLLENBQUNlLEVBQXZDLEVBQTJDQyxJQUEzQyxDQUFnRDtBQUNwREMsZ0JBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEc0MsZUFBaEQsQ0FIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZk0sZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUFRQSxzQkFDRSw4REFBQyxHQUFEO0FBQUssWUFBUSxFQUFFbEIsS0FBSyxDQUFDSSxPQUFOLENBQWNnQixRQUE3QjtBQUF1QyxZQUFRLEVBQUVqQixlQUFlLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxPQUFOLENBQWNnQixRQUFuRjtBQUFBLDRCQUNFLDhEQUFDLElBQUQ7QUFBQSxnQkFBT3BCLEtBQUssQ0FBQ2U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxJQUFEO0FBQUEsZ0JBQU9mLEtBQUssQ0FBQ0ksT0FBTixDQUFjaUI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsSUFBRDtBQUFBLGdCQUFPeEIsaUVBQUEsQ0FBbUJHLEtBQUssQ0FBQ0ksT0FBTixDQUFjb0IsS0FBakMsRUFBd0MsT0FBeEM7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxJQUFEO0FBQUEsZ0JBQU94QixLQUFLLENBQUNJLE9BQU4sQ0FBY3FCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFLDhEQUFDLElBQUQ7QUFBQSxpQkFBT3pCLEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxhQUFyQixPQUFxQ0wsS0FBSyxDQUFDTSxjQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLDhEQUFDLElBQUQ7QUFBQSxnQkFFSU4sS0FBSyxDQUFDSSxPQUFOLENBQWNnQixRQUFkLEdBQXlCLElBQXpCLGdCQUNFLDhEQUFDLHFEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsYUFBSyxNQUEzQjtBQUE0QixlQUFPLEVBQUViLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBYUUsOERBQUMsSUFBRDtBQUFBLGdCQUVJUCxLQUFLLENBQUNJLE9BQU4sQ0FBY2dCLFFBQWQsR0FBeUIsSUFBekIsZ0JBQ0UsOERBQUMscURBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFxQixhQUFLLE1BQTFCO0FBQTJCLGVBQU8sRUFBRUYsZUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0E3Q0Q7O0tBQU1uQjtBQStDTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuY29uc3QgUmVxdWVzdFJvdyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICBjb25zdCByZWFkeVRvRmluYWxpemUgPSBwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnQgPiBwcm9wcy5hcHByb3ZlcnNDb3VudCAvIDI7XHJcblxyXG4gIGNvbnN0IGFwcHJvdmVIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5hbGl6ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBkaXNhYmxlZD17cHJvcHMucmVxdWVzdC5jb21wbGV0ZX0gcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSAmJiAhcHJvcHMucmVxdWVzdC5jb21wbGV0ZX0+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5pZH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShwcm9wcy5yZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3twcm9wcy5hcHByb3ZlcnNDb3VudH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3BzLnJlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXthcHByb3ZlSGFuZGxlcn0+QXBwcm92ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAge1xyXG4gICAgICAgICAgcHJvcHMucmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgYmFzaWMgb25DbGljaz17ZmluYWxpemVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICBGaW5hbGl6ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICA8L0NlbGw+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInByb3BzIiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsInJlcXVlc3QiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZlSGFuZGxlciIsImNhbXBhaWduIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmluYWxpemVIYW5kbGVyIiwiZmluYWxpemVSZXF1ZXN0IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==