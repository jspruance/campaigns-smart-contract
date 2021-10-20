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
              setErrorMessage('');
              campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(props.address);
              _context.prev = 4;
              _context.next = 7;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value, 'ether'), recipient).send({
                from: accounts[0]
              });

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              setErrorMessage(_context.t0.message);

            case 15:
              setLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
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
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: description,
          onChange: function onChange(event) {
            setDescription(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Value in Ether"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: value,
          onChange: function onChange(event) {
            setValue(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          children: "Recipient"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: recipient,
          onChange: function onChange(event) {
            setRecipient(event.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
        primary: true,
        loading: loading,
        children: "Create!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy4xMzFlNmZhNmFhNTgxMTJlYzEyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixrQkFBMEJaLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFzQ2QsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2UsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxtQkFBd0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPbUIsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBOEJwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPcUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxRQUFRO0FBQUEscVdBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBSCxjQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLGNBQUFBLGVBQWUsQ0FBQyxFQUFELENBQWY7QUFFTU0sY0FBQUEsUUFOUyxHQU1FcEIsMkRBQVEsQ0FBQ00sS0FBSyxDQUFDZSxPQUFQLENBTlY7QUFBQTtBQUFBO0FBQUEscUJBU1VwQixtRUFBQSxFQVRWOztBQUFBO0FBU1B1QixjQUFBQSxRQVRPO0FBQUE7QUFBQSxxQkFVUEosUUFBUSxDQUFDSyxPQUFULENBQWlCQyxhQUFqQixDQUNKakIsV0FESSxFQUVKUiwrREFBQSxDQUFpQk0sS0FBakIsRUFBd0IsT0FBeEIsQ0FGSSxFQUdKSSxTQUhJLEVBSUprQixJQUpJLENBSUM7QUFBRUMsZ0JBQUFBLElBQUksRUFBRU4sUUFBUSxDQUFDLENBQUQ7QUFBaEIsZUFKRCxDQVZPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQmJWLGNBQUFBLGVBQWUsQ0FBQyxZQUFNaUIsT0FBUCxDQUFmOztBQWhCYTtBQW1CZmYsY0FBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFuQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkMsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXNCQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxtREFBRDtBQUFNLGNBQVEsRUFBRUEsUUFBaEI7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFLLEVBQUVSLFdBRFQ7QUFFRSxrQkFBUSxFQUFFLGtCQUFBUyxLQUFLLEVBQUk7QUFDakJSLFlBQUFBLGNBQWMsQ0FBQ1EsS0FBSyxDQUFDYyxNQUFOLENBQWF6QixLQUFkLENBQWQ7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFDRSxlQUFLLEVBQUVBLEtBRFQ7QUFFRSxrQkFBUSxFQUFFLGtCQUFBVyxLQUFLLEVBQUk7QUFDakJWLFlBQUFBLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDYyxNQUFOLENBQWF6QixLQUFkLENBQVI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFtQkUsOERBQUMseURBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQ0UsZUFBSyxFQUFFSSxTQURUO0FBRUUsa0JBQVEsRUFBRSxrQkFBQU8sS0FBSyxFQUFJO0FBQ2pCTixZQUFBQSxZQUFZLENBQUNNLEtBQUssQ0FBQ2MsTUFBTixDQUFhekIsS0FBZCxDQUFaO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRixlQTZCRSw4REFBQyxxREFBRDtBQUFRLGVBQU8sTUFBZjtBQUFnQixlQUFPLEVBQUVRLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBbEVEOztHQUFNVjs7S0FBQUE7O0FBb0VOQSxVQUFVLENBQUM0QixlQUFYO0FBQUEsb1dBQTZCLGtCQUFPM0IsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJlLFlBQUFBLE9BRG1CLEdBQ1BmLEtBQUssQ0FBQzRCLEtBREMsQ0FDbkJiLE9BRG1CO0FBQUEsOENBRXBCO0FBQUVBLGNBQUFBLE9BQU8sRUFBUEE7QUFBRixhQUZvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQSwrREFBZWhCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY29uc3QgUmVxdWVzdE5ldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZWNpcGllbnQsIHNldFJlY2lwaWVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcclxuXHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVSZXF1ZXN0KFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcclxuICAgICAgICB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCAnZXRoZXInKSxcclxuICAgICAgICByZWNpcGllbnRcclxuICAgICAgKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q3JlYXRlIGEgcmVxdWVzdDwvaDM+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFJlY2lwaWVudChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXtsb2FkaW5nfT5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXF1ZXN0TmV3LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcbiAgcmV0dXJuIHsgYWRkcmVzcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TmV3OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJMYXlvdXQiLCJSZXF1ZXN0TmV3IiwicHJvcHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInNldFJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==