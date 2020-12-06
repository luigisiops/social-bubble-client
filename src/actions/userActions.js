export const verifyToken = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/user/isLogged", {
          mode: 'no-cors',
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({token: localStorage.getItem("token")})
    })
      .then((res) => res.json("token"))
      .then((payload) => dispatch({type: "VERIFY", payload}));
  }
}

export const signOut = () => {
  return{ type: "SIGN_OUT"};
}
