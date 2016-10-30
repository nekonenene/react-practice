window.onload = function() {
  var hello = new Hello();
  hello.say();
};

class Hello {
  constructor() {
    this.firstName = "Pepper";
    this.lastName = "Hot";
  }

  say() {
    const message = (
      <p>Hello, {this.formatName()}!</p>
    );

    ReactDOM.render(
      message,
      document.getElementById("root")
    );
  }

  formatName() {
    return this.firstName + ' ' + this.lastName;
  }
}
