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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjcxMDVhNWQ3NzBjNTI2OTNmMjVmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsTUFBUUMsTUFBUixHQUEwQ1AsMkRBQTFDO0FBQUEsTUFBZ0JRLEdBQWhCLEdBQTBDUix3REFBMUM7QUFBQSxNQUFxQlMsVUFBckIsR0FBMENULCtEQUExQztBQUFBLE1BQWlDVSxJQUFqQyxHQUEwQ1YseURBQTFDOztBQUVBLE1BQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsV0FBT0wsS0FBSyxDQUFDTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQzVDLDBCQUFPLDhEQUFDLDJEQUFEO0FBQ0wsZUFBTyxFQUFFRCxPQURKO0FBRUwsVUFBRSxFQUFFQyxLQUZDO0FBSUwsZUFBTyxFQUFFVCxLQUFLLENBQUNVLE9BSlY7QUFLTCxzQkFBYyxFQUFFVixLQUFLLENBQUNXO0FBTGpCLFNBR0FGLEtBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssdUJBQWdCVCxLQUFLLENBQUNVLE9BQXRCLGtCQUFYO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBT0UsOERBQUMsb0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxNQUFEO0FBQUEsK0JBQ0UsOERBQUMsR0FBRDtBQUFBLGtDQUNFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUUsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUUsOERBQUMsSUFBRDtBQUFBLGtCQUVJTCxVQUFVO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBM0NEOztLQUFNTjs7QUE2Q05BLFlBQVksQ0FBQ2EsZUFBYjtBQUFBLG1XQUErQixpQkFBT1osS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJVLFlBQUFBLE9BRHFCLEdBQ1RWLEtBQUssQ0FBQ2EsS0FERyxDQUNyQkgsT0FEcUI7QUFFdkJJLFlBQUFBLFFBRnVCLEdBRVpqQiwyREFBUSxDQUFDYSxPQUFELENBRkk7QUFBQTtBQUFBLG1CQUdGSSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJDLGdCQUFqQixHQUFvQ0MsSUFBcEMsRUFIRTs7QUFBQTtBQUd2QkMsWUFBQUEsWUFIdUI7QUFBQTtBQUFBLG1CQUlBSixRQUFRLENBQUNDLE9BQVQsQ0FBaUJKLGNBQWpCLEdBQWtDTSxJQUFsQyxFQUpBOztBQUFBO0FBSXZCTixZQUFBQSxjQUp1QjtBQU03QlEsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLCtCQUFtQ1QsY0FBbkM7QUFONkI7QUFBQSxtQkFRTlUsT0FBTyxDQUFDQyxHQUFSLENBQ3JCQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ04sWUFBRCxDQUFULENBQUwsQ0FBOEJPLElBQTlCLEdBQXFDbEIsR0FBckMsQ0FBeUMsVUFBQ21CLE9BQUQsRUFBVWpCLEtBQVYsRUFBb0I7QUFDM0QscUJBQU9LLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQlQsUUFBakIsQ0FBMEJHLEtBQTFCLEVBQWlDUSxJQUFqQyxFQUFQO0FBQ0QsYUFGRCxDQURxQixDQVJNOztBQUFBO0FBUXZCWCxZQUFBQSxRQVJ1QjtBQUFBLDZDQWN0QjtBQUFFSSxjQUFBQSxPQUFPLEVBQVBBLE9BQUY7QUFBV0osY0FBQUEsUUFBUSxFQUFSQSxRQUFYO0FBQXFCWSxjQUFBQSxZQUFZLEVBQVpBLFlBQXJCO0FBQW1DUCxjQUFBQSxjQUFjLEVBQWRBO0FBQW5DLGFBZHNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCQSwrREFBZVosWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG5jb25zdCBSZXF1ZXN0SW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUm93cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBwcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiA8UmVxdWVzdFJvd1xyXG4gICAgICAgIHJlcXVlc3Q9e3JlcXVlc3R9XHJcbiAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgYWRkcmVzcz17cHJvcHMuYWRkcmVzc31cclxuICAgICAgICBhcHByb3ZlcnNDb3VudD17cHJvcHMuYXBwcm92ZXJzQ291bnR9XHJcbiAgICAgIC8+O1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+UmVxdXN0czwvaDM+XHJcbiAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkFkZCByZXF1ZXN0PC9CdXR0b24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxUYWJsZT5cclxuICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWwgY291bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPEJvZHk+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlbmRlclJvd3MoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXF1ZXN0SW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBhcHByb3ZlcnNDb3VudCA6Ojo6ICR7YXBwcm92ZXJzQ291bnR9YClcclxuXHJcbiAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKClcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCwgYXBwcm92ZXJzQ291bnQgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVxdWVzdFJvdyIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdENvdW50IiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9