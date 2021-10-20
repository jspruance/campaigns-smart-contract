"use strict";
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\Ethereum_and_Solidity_CDG_Course_Udemy\\Campaigns_app\\kickstart\\pages\\campaigns\\requests\\index.js",
    _this = undefined;











var RequestIndex = function RequestIndex(props) {
  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Header,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Row,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.HeaderCell,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table.Body;

  var renderRows = function renderRows() {
    return props.requests.map(function (request, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_3__.default, {
        request: request,
        id: index,
        address: props.address,
        approversCount: props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 14
      }, _this);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
      children: "Requsts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
      route: "/campaigns/".concat(props.address, "/requests/new"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
          primary: true,
          floated: "right",
          children: "Add request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Table, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Recipient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Approval count"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(HeaderCell, {
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Body, {
        children: renderRows()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_c = RequestIndex;

RequestIndex.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(props) {
    var address, campaign, requestCount, approversCount, requests;
    return C_Projects_Ethereum_and_Solidity_CDG_Course_Udemy_Campaigns_app_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = props.query.address;
            campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__.default)(address);
            _context.next = 4;
            return campaign.methods.getRequestsCount().call();

          case 4:
            requestCount = _context.sent;
            _context.next = 7;
            return campaign.methods.approversCount().call();

          case 7:
            approversCount = _context.sent;
            console.log("approversCount :::: ".concat(approversCount));
            _context.next = 11;
            return Promise.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
              return campaign.methods.requests(index).call();
            }));

          case 11:
            requests = _context.sent;
            return _context.abrupt("return", {
              address: address,
              requests: requests,
              requestCount: requestCount,
              approversCount: approversCount
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

var _c;

$RefreshReg$(_c, "RequestIndex");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjlkYmM3OTdhZmE0MDE5YWZkZjE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBUUMsTUFBUixHQUEwQ1AsMkRBQTFDO0FBQUEsTUFBZ0JRLEdBQWhCLEdBQTBDUix3REFBMUM7QUFBQSxNQUFxQlMsVUFBckIsR0FBMENULCtEQUExQztBQUFBLE1BQWlDVSxJQUFqQyxHQUEwQ1YseURBQTFDOztBQUVBLE1BQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsV0FBT0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQzVDLDBCQUFPLDhEQUFDLDJEQUFEO0FBQ0wsZUFBTyxFQUFFRCxPQURKO0FBRUwsVUFBRSxFQUFFQyxLQUZDO0FBSUwsZUFBTyxFQUFFVCxLQUFLLENBQUNVLE9BSlY7QUFLTCxzQkFBYyxFQUFFVixLQUFLLENBQUNXO0FBTGpCLFNBR0FGLEtBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssdUJBQWdCVCxLQUFLLENBQUNVLE9BQXRCLGtCQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsaUJBQU8sRUFBQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRSw4REFBQyxvREFBRDtBQUFBLDhCQUNFLDhEQUFDLE1BQUQ7QUFBQSwrQkFDRSw4REFBQyxHQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUUsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRSw4REFBQyxJQUFEO0FBQUEsa0JBRUlMLFVBQVU7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EzQ0Q7O0tBQU1OOztBQTZDTkEsWUFBWSxDQUFDYSxlQUFiO0FBQUEsbVdBQStCLGlCQUFPWixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQlUsWUFBQUEsT0FEcUIsR0FDVFYsS0FBSyxDQUFDYSxLQURHLENBQ3JCSCxPQURxQjtBQUV2QkksWUFBQUEsUUFGdUIsR0FFWmpCLDJEQUFRLENBQUNhLE9BQUQsQ0FGSTtBQUFBO0FBQUEsbUJBR0ZJLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFQUhFOztBQUFBO0FBR3ZCQyxZQUFBQSxZQUh1QjtBQUFBO0FBQUEsbUJBSUFKLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkosY0FBakIsR0FBa0NNLElBQWxDLEVBSkE7O0FBQUE7QUFJdkJOLFlBQUFBLGNBSnVCO0FBTTdCUSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsK0JBQW1DVCxjQUFuQztBQU42QjtBQUFBLG1CQVFOVSxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTixZQUFELENBQVQsQ0FBTCxDQUE4Qk8sSUFBOUIsR0FBcUNsQixHQUFyQyxDQUF5QyxVQUFDbUIsT0FBRCxFQUFVakIsS0FBVixFQUFvQjtBQUMzRCxxQkFBT0ssUUFBUSxDQUFDQyxPQUFULENBQWlCVCxRQUFqQixDQUEwQkcsS0FBMUIsRUFBaUNRLElBQWpDLEVBQVA7QUFDRCxhQUZELENBRHFCLENBUk07O0FBQUE7QUFRdkJYLFlBQUFBLFFBUnVCO0FBQUEsNkNBY3RCO0FBQUVJLGNBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXSixjQUFBQSxRQUFRLEVBQVJBLFFBQVg7QUFBcUJZLGNBQUFBLFlBQVksRUFBWkEsWUFBckI7QUFBbUNQLGNBQUFBLGNBQWMsRUFBZEE7QUFBbkMsYUFkc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLCtEQUFlWixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcbmNvbnN0IFJlcXVlc3RJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG5cclxuICBjb25zdCByZW5kZXJSb3dzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5hZGRyZXNzfVxyXG4gICAgICAgIGFwcHJvdmVyc0NvdW50PXtwcm9wcy5hcHByb3ZlcnNDb3VudH1cclxuICAgICAgLz47XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5SZXF1c3RzPC9oMz5cclxuICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCI+QWRkIHJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPFRhYmxlPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBjb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8Qm9keT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVuZGVyUm93cygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblJlcXVlc3RJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgY29uc29sZS5sb2coYGFwcHJvdmVyc0NvdW50IDo6OjogJHthcHByb3ZlcnNDb3VudH1gKVxyXG5cclxuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZXF1ZXN0Um93IiwiQnV0dG9uIiwiVGFibGUiLCJMaW5rIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUmVxdWVzdEluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0Q291bnQiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=