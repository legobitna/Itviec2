import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Details from "./pages/Details";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    isAuthenticate: false,
  });
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let history = useHistory();
  const ProtectedRoute = (props) => {
    if (user.isAuthenticate == true) {
      return <Route {...props} />;
    } else {
      console.log("is it false?");
      return <Redirect to="/login" />;
    }
  };
  const login = (e, userinfo) => {
    e.preventDefault();
    let newuser = {
      email: userinfo.email,
      password: userinfo.password,
      isAuthenticate: true,
    };
    console.log("login user", user);
    setUser(newuser);
    history.push("/");
  };
  return (
    <div>
      <Switch>
        <Route
          path="/login"
          exact
          component={() => (
            <Login error={error} login={login} user={user} loading={loading} />
          )}
        />
        <Route path="/jobs/" exact component={Jobs} />
        <Route path="/" exact component={Jobs} />
        <ProtectedRoute path="/job/:id" component={Details} />

        {/* <ProtectedRoute path="/job/:id" component={Details} /> */}
      </Switch>
    </div>
  );
}

export default App;
