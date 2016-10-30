"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
  var hello = new Hello();
  // window.setInterval(() => hello.say(), 1000);
  hello.say();
};

var Hello = function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, [{
    key: "say",
    value: function say() {
      var message = React.createElement(
        "div",
        null,
        React.createElement(Clock, null),
        React.createElement(ClickButton, null)
      );

      ReactDOM.render(message, document.getElementById("root"));
    }
  }]);

  return Hello;
}();

/* 一秒ごとに時を刻む */


var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      date: new Date(),
      name: "Sato"
    };
    return _this;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Hello, ",
          this.state.name,
          "!"
        ),
        React.createElement(
          "p",
          null,
          "It is ",
          this.state.date.toLocaleTimeString(),
          "."
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

var ClickButton = function (_React$Component2) {
  _inherits(ClickButton, _React$Component2);

  function ClickButton(props) {
    _classCallCheck(this, ClickButton);

    var _this3 = _possibleConstructorReturn(this, (ClickButton.__proto__ || Object.getPrototypeOf(ClickButton)).call(this, props));

    _this3.state = {
      buttonMessage: "Click me"
    };
    return _this3;
  }

  _createClass(ClickButton, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          buttonMessage: prevState.buttonMessage + "!"
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "button",
        { className: "blue-button", onClick: function onClick(ev) {
            return _this4.handleClick(ev);
          } },
        this.state.buttonMessage
      );
    }
  }]);

  return ClickButton;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5lczYiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiaGVsbG8iLCJIZWxsbyIsInNheSIsIm1lc3NhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDbG9jayIsInByb3BzIiwic3RhdGUiLCJkYXRlIiwiRGF0ZSIsIm5hbWUiLCJ0aW1lcklEIiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwiY2xlYXJJbnRlcnZhbCIsInNldFN0YXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDbGlja0J1dHRvbiIsImJ1dHRvbk1lc3NhZ2UiLCJwcmV2U3RhdGUiLCJoYW5kbGVDbGljayIsImV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUFBLE9BQU9DLE1BQVAsR0FBZ0IsWUFBVztBQUN6QixNQUFJQyxRQUFRLElBQUlDLEtBQUosRUFBWjtBQUNBO0FBQ0FELFFBQU1FLEdBQU47QUFDRCxDQUpEOztJQU1NRCxLOzs7Ozs7OzBCQUNFO0FBQ0osVUFBTUUsVUFDSjtBQUFBO0FBQUE7QUFDRSw0QkFBQyxLQUFELE9BREY7QUFFRSw0QkFBQyxXQUFEO0FBRkYsT0FERjs7QUFPQUMsZUFBU0MsTUFBVCxDQUNFRixPQURGLEVBRUVHLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRjtBQUlEOzs7Ozs7QUFHSDs7O0lBQ01DLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLElBQUlDLElBQUosRUFESztBQUVYQyxZQUFNO0FBRkssS0FBYjtBQUZpQjtBQU1sQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsV0FBS0MsT0FBTCxHQUFlQyxZQUNiO0FBQUEsZUFBTSxPQUFLQyxJQUFMLEVBQU47QUFBQSxPQURhLEVBRWIsSUFGYSxDQUFmO0FBSUQ7OzsyQ0FFc0I7QUFDckJDLG9CQUFjLEtBQUtILE9BQW5CO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtJLFFBQUwsQ0FBYztBQUNaUCxjQUFNLElBQUlDLElBQUo7QUFETSxPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBVyxlQUFLRixLQUFMLENBQVdHLElBQXRCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBVSxlQUFLSCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JRLGtCQUFoQixFQUFWO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7OztFQWpDaUJDLE1BQU1DLFM7O0lBb0NwQkMsVzs7O0FBQ0osdUJBQVliLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwySEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hhLHFCQUFlO0FBREosS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYTtBQUNaLFdBQUtMLFFBQUwsQ0FBYztBQUFBLGVBQWM7QUFDMUJLLHlCQUFlQyxVQUFVRCxhQUFWLEdBQTBCO0FBRGYsU0FBZDtBQUFBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBUSxXQUFVLGFBQWxCLEVBQWdDLFNBQVM7QUFBQSxtQkFBTSxPQUFLRSxXQUFMLENBQWlCQyxFQUFqQixDQUFOO0FBQUEsV0FBekM7QUFDRyxhQUFLaEIsS0FBTCxDQUFXYTtBQURkLE9BREY7QUFLRDs7OztFQXBCdUJILE1BQU1DLFMiLCJmaWxlIjoidG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGVsbG8gPSBuZXcgSGVsbG8oKTtcbiAgLy8gd2luZG93LnNldEludGVydmFsKCgpID0+IGhlbGxvLnNheSgpLCAxMDAwKTtcbiAgaGVsbG8uc2F5KCk7XG59O1xuXG5jbGFzcyBIZWxsbyB7XG4gIHNheSgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENsb2NrIC8+XG4gICAgICAgIDxDbGlja0J1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbiAgICApO1xuICB9XG59XG5cbi8qIOS4gOenkuOBlOOBqOOBq+aZguOCkuWIu+OCgCAqL1xuY2xhc3MgQ2xvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIG5hbWU6IFwiU2F0b1wiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZXJJRCA9IHNldEludGVydmFsKFxuICAgICAgKCkgPT4gdGhpcy50aWNrKCksXG4gICAgICAxMDAwXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkhlbGxvLCB7dGhpcy5zdGF0ZS5uYW1lfSE8L3A+XG4gICAgICAgIDxwPkl0IGlzIHt0aGlzLnN0YXRlLmRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9LjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQ2xpY2tCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYnV0dG9uTWVzc2FnZTogXCJDbGljayBtZVwiXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBidXR0b25NZXNzYWdlOiBwcmV2U3RhdGUuYnV0dG9uTWVzc2FnZSArIFwiIVwiXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsdWUtYnV0dG9uXCIgb25DbGljaz17ZXYgPT4gdGhpcy5oYW5kbGVDbGljayhldil9PlxuICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25NZXNzYWdlfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuIl19
