const initialstate = {
  user: {
    email: "",
    password: "",
    isAuthenticated: false,
  },
  error: "",
  loading: false,
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case "LOGIN":
      state.user = action.payload;
      state.user.isAuthenticated = true;
      state.error = "";
      break;
    case "LOGIN_REQUEST":
      state.loading = true;
      break;

    case "LOGIN_SUCCESS":
      state.loading = false;
      break;
    case "LOGIN_FAILURE":
      state.loading = false;
      state.error = action.payload;
      state.user.isAuthenticated = false;
      break;
  }
  console.log("state", state, "user", state.user);

  return { ...state };
}

export default reducer;
