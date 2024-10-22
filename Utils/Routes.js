import AllSetScreen from "../Screens/AllSetScreen"
import EmergencyContactDetails from "../Screens/EmergencyContactDetails"
import Login from "../Screens/Login"
import QuestionPage from "../Screens/QuestionsPage"
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
  {
    name: 'QuestionPage',
    component: QuestionPage,
    option: {
      headerShown: false,
    },
  },
  {
    name: 'AllSetScreen',
    component: AllSetScreen,
    option: {
      headerShown: false,
    },
  },
]