import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAuthAction } from '../redux/users/actions/AuthAction';

const Login = () => {
  const userLoginInfo = useSelector((state) => state.authReducer);
  const [loggedUserName, setLoggedUserName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuthAction(loggedUserName));
    e.target.reset();
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto border w-25 p-4">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
              onChange={(event) => {
                const username = event.target.value;
                setLoggedUserName({ ...loggedUserName, ...{ username } });
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-lg btn-secondary rounded-0 w-25">Log In</button>
        <div className="w-25 text-center">
          <span><small>New to Penz Classes?</small></span>
          <span>
            <button type="button" className="border-0 text-primary bg-body mx-2" onClick={() => handleRoutes('/signup')}>
              <small>Sign Up</small>
            </button>
          </span>
          <div className="alert alert-danger" role="alert">
            {userLoginInfo.message}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;