window.onload = function() {
  var hello = new Hello();
  // window.setInterval(() => hello.say(), 1000);
  hello.say();
};

class Hello {
  say() {
    const message = (
      <div>
        <Clock />
        <ClickButton />
      </div>
    );

    ReactDOM.render(
      message,
      document.getElementById("root")
    );
  }
}

/* 一秒ごとに時を刻む */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Sato"
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.name}!</p>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonMessage: "Click me"
    };
  }

  handleClick() {
    this.setState(prevState => ({
      buttonMessage: prevState.buttonMessage + "!"
    }));
  }

  render() {
    return (
      <button className="blue-button" onClick={ev => this.handleClick(ev)}>
        {this.state.buttonMessage}
      </button>
    );
  }
}
