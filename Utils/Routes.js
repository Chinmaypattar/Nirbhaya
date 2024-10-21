import EmergencyContactDetails from "../Screens/EmergencyContactDetails"
import Login from "../Screens/Login"
import SignUp from "../Screens/SignUp"
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
  {
    name: 'SignUp',
    component: SignUp,
    option: {
      headerShown: false,
    },
  },
  {
    name: 'EmergencyContactDetails',
    component: EmergencyContactDetails,
    option: {
      headerShown: false,
    },
  },
]