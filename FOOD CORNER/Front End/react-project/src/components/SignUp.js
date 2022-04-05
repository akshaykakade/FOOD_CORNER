import React from 'react'
import { Link ,Redirect} from 'react-router-dom';
import {useState} from 'react';
import ApiService from '../services/ApiService';
import axios from 'axios';
import './Login.css';
import { connect } from 'react-redux';

function SignUp (props) {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pinCode, setPinCode] = useState(0);
    const [type,setType] = useState("Customer");
   
    const onSignup = ()=>{
        console.log("here");
        alert(name);
        const user = {
            name :name,
            email :email,
            password: password,
            mobileNo:mobileNo,
            type:type,
            address:{
              addressLine1:addressLine1,
              addressLine2:addressLine2,
              state:state,
              city:city,
              pincode:pinCode,
            }
        };
        console.log(user);
        alert(user.name," Hello");
        ApiService.addUser(user).then(response =>{
          const {data} = response;
          alert("Hello registering of the new account is successful",data.name);
          props.history.push("/logIn");
        }).catch(error=>{
          alert("error",error);
        });
        

    }
    return(

            <>{(props.cart.user != null)?
               <Redirect to={{pathname: '/list'}} />:""
              }
                 <div className="container signup-form">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div
            className="d-none d-md-flex col-md-4 col-lg-6 bg-image"
            
          ></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Register Here!</h3>

                    {/* <!-- Sign Up Form --> */}
                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setMobileNo(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Mobile Number</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setAddressLine1(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Address Line 1</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setAddressLine2(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Address Line 2</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">City</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">State</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        onChange={(e) => {
                          setPinCode(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Pincode</label>
                    </div>

                    <div className="d-grid">
                      <button
                        onClick={onSignup}
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        // type="submit"
                      >
                        Sign up
                      </button>
                      <div className="text-center">
                        <h3 className="fs-6 lh-lg">
                          Already Registered ?{" "}
                          <Link to="/login">Login Here</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="form">
        <h2> Register User </h2>

        <div className="form-group">
          <strong className="col-sm-3 control-label">firstname</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="FirstName"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">lastname</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="LastName"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <strong className="col-sm-3 control-label">Email </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="form-control"
              name=""
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Password</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="Password"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Address</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              placeholder="Address"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Pin Code</strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPinCode(e.target.value);
              }}
              type="text"
              placeholder="pincode"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <strong className="col-sm-3 control-label">Phone </strong>
          <div className="col-sm-9">
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="phoneNumber"
              placeholder="Phone number"
              className="form-control"
            />
            <span className="help-block"> </span>
          </div>
        </div>

        <div className="form-group signup-button">
          <div className="row">
            <div className="col-sm-3">
              <button onClick={onSignup} className="btn btn-primary btn-block">
                Register
              </button>
            </div>

            <div className="col-sm-6">
              <Link to="/login">
                <button className="btn btn-success ">Back to login</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
            </>
    );
}
const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}
export default connect(mapStateToProps)(SignUp)
