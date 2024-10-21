import Login from "../Screens/Login"
import Splash from "../Screens/Splash"

export const route = [
  {
    name: 'Splash',
    component: Splash,
    option: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: Login,
    option: {
      headerShown: false,
    },
  },
]