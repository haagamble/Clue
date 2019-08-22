import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a01: "",
      a02: "",
      a03: "",
      a04: "",
      a05: "",
      a06: "",
      a07: "",
      a08: "",
      a09: "",
      a10: "",
      clue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit01 = this.handleSubmit01.bind(this);
    this.handleSubmit02 = this.handleSubmit02.bind(this);
    this.handleSubmit03 = this.handleSubmit03.bind(this);
    this.handleSubmit04 = this.handleSubmit04.bind(this);
    this.handleSubmit05 = this.handleSubmit05.bind(this);
    this.handleSubmit06 = this.handleSubmit06.bind(this);
    this.handleSubmit07 = this.handleSubmit07.bind(this);
    this.handleSubmit08 = this.handleSubmit08.bind(this);
    this.handleSubmit09 = this.handleSubmit09.bind(this);
    this.handleSubmit10 = this.handleSubmit10.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleSubmit01(event) {
    if (+this.state.a01 === 1035) {
      alert("The crime did not occur in the boys' bathroom.");
    } else {
      alert("The crime did not occur in the library.");
    }
    this.setState({
      a01: "",
      clue: "test"
    });
  }

  handleSubmit02(event) {
    if (+this.state.a02 === 154) {
      alert("Mr. Potato Head did not commit the crime.");
    } else {
      alert("The Queen of England did not commit the crime.");
    }
    this.setState({
      a02: ""
    });
  }

  handleSubmit03(event) {
    if (+this.state.a03 === 768) {
      alert("Miss Sarah was not lured away by ice-cream.");
    } else {
      alert("Miss Sarah did not slip on a banana peel.");
    }
    this.setState({
      a03: ""
    });
  }

  handleSubmit04(event) {
    if (+this.state.a04 === 1204) {
      alert("The crime did not occur in the entry way.");
    } else {
      alert("The crime did not occur in the library.");
    }
    this.setState({
      a04: ""
    });
  }

  handleSubmit05(event) {
    if (+this.state.a05 === 286) {
      alert("Mr. Bean did not commit the crime.");
    } else {
      alert("The Queen of England did not commit the crime.");
    }
    this.setState({
      a05: ""
    });
  }

  handleSubmit06(event) {
    if (+this.state.a06 === 384) {
      alert("Miss Sarah was not hit over the head with a math textbook.");
    } else {
      alert("Miss Sarah did not slip on a banana peel.");
    }
    this.setState({
      a06: ""
    });
  }

  handleSubmit07(event) {
    if (+this.state.a07 === 1782) {
      alert("The crime did not occur in the girls' bathroom.");
    } else {
      alert("The crime did not occur in the library.");
    }
    this.setState({
      a07: ""
    });
  }

  handleSubmit08(event) {
    if (+this.state.a08 === 528) {
      alert("Link did not commit the crime.");
    } else {
      alert("The Queen of England did not commit the crime.");
    }
    this.setState({
      a08: ""
    });
  }

  handleSubmit09(event) {
    if (+this.state.a09 === 228) {
      alert("Miss Sarah was not tripped up by chopsticks.");
    } else {
      alert("Miss Sarah did not slip on a banana peel.");
    }
    this.setState({
      a09: ""
    });
  }

  handleSubmit10(event) {
    if (+this.state.a10 === 3900) {
      alert("The crime did not occur in the yard.");
    } else {
      alert("The crime did not occur in the library.");
    }
    this.setState({
      a10: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Miss Sarah has been taken kidnapped!</h1>
        <h2>
          Who did it? Where did the crime occur? What was used to facilitate the
          abduction?
        </h2>
        <form onSubmit={this.handleSubmit01}>
          <div className="question">
            <label>
              Question 1:
              <input
                type="text"
                name="a01"
                value={this.state.a01}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="1" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit02}>
          <div className="question">
            <label>
              Question 2:
              <input
                type="text"
                name="a02"
                value={this.state.a02}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit03}>
          <div className="question">
            <label>
              Question 3:
              <input
                type="text"
                name="a03"
                value={this.state.a03}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit04}>
          <div className="question">
            <label>
              Question 4:
              <input
                type="text"
                name="a04"
                value={this.state.a04}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit05}>
          <div className="question">
            <label>
              Question 5:
              <input
                type="text"
                name="a05"
                value={this.state.a05}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit06}>
          <div className="question">
            <label>
              Question 6:
              <input
                type="text"
                name="a06"
                value={this.state.a06}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit07}>
          <div className="question">
            <label>
              Question 7:
              <input
                type="text"
                name="a07"
                value={this.state.a07}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit08}>
          <div className="question">
            <label>
              Question 8:
              <input
                type="text"
                name="a08"
                value={this.state.a08}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit09}>
          <div className="question">
            <label>
              Question 9:
              <input
                type="text"
                name="a09"
                value={this.state.a09}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
        <form onSubmit={this.handleSubmit10}>
          <div className="question">
            <label>
              Question 10:
              <input
                type="text"
                name="a10"
                value={this.state.a10}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit Answer" question="2" />
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
