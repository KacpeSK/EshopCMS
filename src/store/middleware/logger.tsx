import { Middleware } from "redux";
import { RootState } from "../store";
import { ActionWithPayload, Action } from "../../utils/reducer/reducer.utils";

//custom logger not used ATM//

// Define a type guard function to narrow down the type of action
function isAction(action: any): action is Action<any> {
  return action && typeof action.type !== "undefined";
}
function isActionWithPayload(
  action: any
): action is ActionWithPayload<any, any> {
  return (
    action &&
    typeof action.type !== "undefined" &&
    typeof action.payload !== "undefined"
  );
}

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (isAction(action)) {
      console.log("type:", action.type);

      if (isActionWithPayload(action)) {
        console.log("payload:", action.payload);
      }

      console.log("currentState:", store.getState());

      next(action);

      console.log("nextState:", store.getState());
    }
    return next(action);
  };
