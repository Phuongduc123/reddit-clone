//login reducer
import action from "./action";
import {
    WELCOME
} from "./action.js"

export default (
  state = {
  },
  action,
) => {
  switch (action.type) {
    case WELCOME:
        console.log("WELCOME") 
    
    default:
        console.log("welcome reddit clone")
      return {
        ...state,
      };
  }
};
