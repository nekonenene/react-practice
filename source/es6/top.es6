window.onload = function() {
  var hello = new Hello();
  window.setInterval(() => hello.say(), 1000);
};

class Hello {
  constructor(firstName, lastName) {
    this.firstName = firstName || "Pepper";
    this.lastName = lastName || "Hot";
  }

  say() {
    const message = (
      <div>
        <p>Hello, {this.formatName()}!</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
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
