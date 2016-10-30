"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
  var hello = new Hello();
  window.setInterval(function () {
    return hello.say();
  }, 1000);
};

var Hello = function () {
  function Hello(firstName, lastName) {
    _classCallCheck(this, Hello);

    this.firstName = firstName || "Pepper";
    this.lastName = lastName || "Hot";
  }

  _createClass(Hello, [{
    key: "say",
    value: function say() {
      var message = React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Hello, ",
          this.formatName(),
          "!"
        ),
        React.createElement(
          "p",
          null,
          new Date().toLocaleTimeString()
        )
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5lczYiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiaGVsbG8iLCJIZWxsbyIsInNldEludGVydmFsIiwic2F5IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJtZXNzYWdlIiwiZm9ybWF0TmFtZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7QUFDekIsTUFBSUMsUUFBUSxJQUFJQyxLQUFKLEVBQVo7QUFDQUgsU0FBT0ksV0FBUCxDQUFtQjtBQUFBLFdBQU1GLE1BQU1HLEdBQU4sRUFBTjtBQUFBLEdBQW5CLEVBQXNDLElBQXRDO0FBQ0QsQ0FIRDs7SUFLTUYsSztBQUNKLGlCQUFZRyxTQUFaLEVBQXVCQyxRQUF2QixFQUFpQztBQUFBOztBQUMvQixTQUFLRCxTQUFMLEdBQWlCQSxhQUFhLFFBQTlCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsWUFBWSxLQUE1QjtBQUNEOzs7OzBCQUVLO0FBQ0osVUFBTUMsVUFDSjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFXLGVBQUtDLFVBQUwsRUFBWDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJLGNBQUlDLElBQUosR0FBV0Msa0JBQVg7QUFBSjtBQUZGLE9BREY7O0FBT0FDLGVBQVNDLE1BQVQsQ0FDRUwsT0FERixFQUVFTSxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkY7QUFJRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLVCxTQUFMLEdBQWlCLEdBQWpCLEdBQXVCLEtBQUtDLFFBQW5DO0FBQ0QiLCJmaWxlIjoidG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGVsbG8gPSBuZXcgSGVsbG8oKTtcbiAgd2luZG93LnNldEludGVydmFsKCgpID0+IGhlbGxvLnNheSgpLCAxMDAwKTtcbn07XG5cbmNsYXNzIEhlbGxvIHtcbiAgY29uc3RydWN0b3IoZmlyc3ROYW1lLCBsYXN0TmFtZSkge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lIHx8IFwiUGVwcGVyXCI7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lIHx8IFwiSG90XCI7XG4gIH1cblxuICBzYXkoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkhlbGxvLCB7dGhpcy5mb3JtYXROYW1lKCl9ITwvcD5cbiAgICAgICAgPHA+e25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbiAgICApO1xuICB9XG5cbiAgZm9ybWF0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuICB9XG59XG4iXX0=
