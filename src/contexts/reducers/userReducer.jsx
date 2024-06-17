export const userReducer = (userState, action) => {
  const { type } = action;
  switch (type) {
    case "LOGIN":
      localStorage.setItem("isLogged", true);
      return { ...userState, isLogged: true, user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("isLogged");
      return { ...userState, isLogged: false, user: {} };
    default:
      return userState;
  }
};
