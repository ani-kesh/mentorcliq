import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Account from "../components/Account/Account";
import Program from "../components/Program/Program";
import Error from "../components/Error/Error";

export const Routes = {
  login: () => ({
    path: "/",
    text: "Log In",
    component: Login,
    id: 1,
  }),

  signup: () => ({
    path: "/signup",
    text: "Sign Up",
    component: SignUp,
    id: 2,
  }),

  account: (id = ":id") => ({
    path: `/account/${id}`,
    text: "My Account",
    component: Account,
    id: 3,
  }),

  program: (id = ":id") => ({
    path: `/program/${id}`,
    text: "Program",
    component: Program,
    id: 3,
  }),

  error: () => ({ path: "*", text: "Error", component: Error }),
};
