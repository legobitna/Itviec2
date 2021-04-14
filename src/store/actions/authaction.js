const login = (user) => {
  return { type: "LOGIN", payload: user };
};

const fail = (message) => {
  return { type: "LOGIN_FAILURE", payload: message };
};

function success() {
  return { type: "LOGIN_SUCCESS", payload: null };
}

function request() {
  return { type: "REGISTER_REQUEST", payload: null };
}

export const middlewareLogin = (user) => {
  return (dispatch) => {
    // redux thunk will give you the dispatch
    dispatch(request()); // loading is on, it will be more useful when you have backend later
    try {
      if (!user || !user.email || !user.password) {
        // fail situation
        console.log("error here", user);
        dispatch(fail("you didnt give us email or password"));
        return;
      }
      dispatch(login(user)); // success situation
      dispatch(success());
    } catch (err) {
      dispatch(fail(err.message)); // any fail in the middle of process (fetch or network or auth .. )
    }
  };
};
