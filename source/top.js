"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
  var hello = new Hello();
  hello.say();
};

var Hello = function () {
  function Hello() {
    _classCallCheck(this, Hello);

    this.firstName = "Pepper";
    this.lastName = "Hot";
  }

  _createClass(Hello, [{
    key: "say",
    value: function say() {
      var message = React.createElement(
        "p",
        null,
        "Hello, ",
        this.formatName(),
        "!"
      );

      ReactDOM.render(message, document.getElementById("root"));
    }
  }, {
    key: "formatName",
    value: function formatName() {
      return this.firstName + ' ' + this.lastName;
    }
  }]);

  return Hello;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5lczYiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiaGVsbG8iLCJIZWxsbyIsInNheSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibWVzc2FnZSIsImZvcm1hdE5hbWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7QUFDekIsTUFBSUMsUUFBUSxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsUUFBTUUsR0FBTjtBQUNELENBSEQ7O0lBS01ELEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUtFLFNBQUwsR0FBaUIsUUFBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7Ozs7MEJBRUs7QUFDSixVQUFNQyxVQUNKO0FBQUE7QUFBQTtBQUFBO0FBQVcsYUFBS0MsVUFBTCxFQUFYO0FBQUE7QUFBQSxPQURGOztBQUlBQyxlQUFTQyxNQUFULENBQ0VILE9BREYsRUFFRUksU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZGO0FBSUQ7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS1AsU0FBTCxHQUFpQixHQUFqQixHQUF1QixLQUFLQyxRQUFuQztBQUNEIiwiZmlsZSI6InRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhlbGxvID0gbmV3IEhlbGxvKCk7XG4gIGhlbGxvLnNheSgpO1xufTtcblxuY2xhc3MgSGVsbG8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IFwiUGVwcGVyXCI7XG4gICAgdGhpcy5sYXN0TmFtZSA9IFwiSG90XCI7XG4gIH1cblxuICBzYXkoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IChcbiAgICAgIDxwPkhlbGxvLCB7dGhpcy5mb3JtYXROYW1lKCl9ITwvcD5cbiAgICApO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuICAgICk7XG4gIH1cblxuICBmb3JtYXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZSArICcgJyArIHRoaXMubGFzdE5hbWU7XG4gIH1cbn1cbiJdfQ==
