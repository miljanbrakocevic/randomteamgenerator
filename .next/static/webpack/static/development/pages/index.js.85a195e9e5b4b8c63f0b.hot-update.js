webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TeamListModal.js":
/*!*************************************!*\
  !*** ./components/TeamListModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TeamChooser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TeamChooser */ "./components/TeamChooser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_teamsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/teamsActions */ "./redux/actions/teamsActions.js");







var _jsxFileName = "/home/tarkett/miljandev/soccer-app/components/TeamListModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    zIndex: '2'
  }
};

var TeamListModal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TeamListModal, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TeamListModal, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store;
    }
  }]);

  function TeamListModal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeamListModal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(TeamListModal).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "openModal", function () {
      _this.setContentErrors();

      _this.setState({
        isModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "closeModal", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    _this.state = {
      isModalOpen: false,
      contentErrors: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TeamListModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_modal__WEBPACK_IMPORTED_MODULE_8___default.a.setAppElement("#team-list-modal");
    }
  }, {
    key: "afterOpenModal",
    value: function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  }, {
    key: "setContentErrors",
    value: function setContentErrors() {
      var contentErrors = [];

      if (this.props.players.length <= 1) {
        contentErrors.push("You didn't add enough players.");
      }

      if (this.props.players.length < this.props.numberOfTeams) {
        contentErrors.push("Number of players must be greater then number of teams.");
      }

      console.log(this.props.numberOfTeams);

      if (this.props.numberOfTeams < 2) {
        contentErrors.push("Number of teams can not be less then 2.");
      }

      this.setState({
        contentErrors: contentErrors
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "text-center label-distance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        className: "btn btn-success",
        onClick: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Get your teams"), __jsx("div", {
        id: "team-list-modal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
        isOpen: this.state.isModalOpen,
        onRequestClose: this.closeModal,
        style: customStyles,
        contentLabel: "Get your teams",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("div", {
        className: "modal-dialog modal-fullscreen",
        role: "document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "modal-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("h5", {
        className: "modal-title ".concat(this.state.contentErrors === 0 ? 'text-danger' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, " ", this.state.contentErrors.length === 0 ? 'Your teams have been selected' : 'There are validation errors'), __jsx("button", {
        type: "button",
        onClick: this.closeModal,
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\xD7"))), __jsx("div", {
        className: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.contentErrors.length === 0 ? __jsx(_TeamChooser__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }) : __jsx("div", {
        className: "alert alert-dismissible alert-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("p", {
        className: "mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.contentErrors.map(function (error) {
        return __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, " ", error), " ", __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }));
      })))), __jsx("div", {
        className: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: this.closeModal,
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Close")))))));
    }
  }]);

  return TeamListModal;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfTeams: state.teams.numberOfTeams,
    selectedTeams: state.teams.selectedTeams,
    players: state.player.players
  };
};

var mapDispatchToProps = {
  updateNumberOfTeams: _redux_actions_teamsActions__WEBPACK_IMPORTED_MODULE_11__["updateNumberOfTeams"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(TeamListModal));

/***/ })

})
//# sourceMappingURL=index.js.85a195e9e5b4b8c63f0b.hot-update.js.map