import React, { Component } from "react";
import "./css/RegisterForm.css";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rePassword: "",
      fullname: "",
      phone: "",
      address: "",
      gender: "Male",
      validEmail: null,
      messageValidEmail: "",
      validPassword: null,
      messageValidPassword: "",
    };
  }

  onChange = (e) => {
    this.setState((prevState) => {
      prevState[e.target.name] = e.target.value;
      return prevState;
    });
    console.log(this.state);
  };

  onKeyUp = (e) => {
    if (e.target.name == "email") {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (re.test(e.target.value)) {
        //true
        this.setState((prevState) => {
          prevState.validEmail = true;
          prevState.messageValidEmail = "";
        });
      } else {
        //false
        this.setState((prevState) => {
          prevState.validEmail = false;
          prevState.messageValidEmail = "Invalid Email";
        });
      }
    }

    if (e.target.name == "password") {
      if (e.target.value.length > 8 && e.target.value.length < 16) {
        this.setState((prevState) => {
          prevState.validPassword = true;
          prevState.messageValidPassword = "";
        });
      } else {
        this.setState((prevState) => {
          prevState.validPassword = false;
          prevState.messageValidPassword = "Invalid Password";
        });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.validEmail && this.state.validPassword) {
      alert("Valid");
    } else {
      alert("InValid");
    }

    if (this.state.validEmail) {
      // do nothing
    } else {
      this.setState((prevState) => {
        prevState.validEmail = false;
        prevState.messageValidEmail = "This field is required";
        return prevState
      });
    }

    if (this.state.validPassword) {
        // do nothing
      } else {
        this.setState((prevState) => {
          prevState.validPassword = false;
          prevState.messageValidPassword = "This field is required";
          return prevState
        });
      }
  };

  render() {
    return (
      <div className="container text-left">
        <h2>Register Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className={"form-control " + this.state.validEmail}
              id="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
            <small className={"form-text text-muted " + this.state.validEmail}>
              {this.state.messageValidEmail}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={"form-control " + this.state.validPassword}
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
            <small
              className={"form-text text-muted " + this.state.validPassword}
            >
              {this.state.messageValidPassword}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="re-password">Re-Password</label>
            <input
              type="password"
              className="form-control"
              id="re-password"
              name="rePassword"
              placeholder="Re-Password"
              value={this.state.rePassword}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
              value={this.state.fullname}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="adress">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              defaultValue={this.state.gender}
              onChange={this.onChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
