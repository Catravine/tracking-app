import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify state to say we're authenticated
    // if it fails, we need to reflect an error message somewhere
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    // similar to sign up
  }
}

const signout = (dispatch) => {
  return () => {
    //sign out
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);