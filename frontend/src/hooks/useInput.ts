import { useReducer } from "react";
import { Action } from "../models/iAction";
import { InputActionType } from "./models/InputAction";
import { InputState } from "./models/iInputState";

export const initialInputState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  const { type, value = "" } = action;

  switch (type) {
    case "CHANGE":
      return { text: value, hasBeenTouched: state.hasBeenTouched };
    case "BLUR":
      return { text: state.text, hasBeenTouched: true };
    case "CLEAR":
      return { text: "", hasBeenTouched: false };
    default:
      return { ...state };
  }
};

const useInput = () => {
  const [{ text, hasBeenTouched }, dispath] = useReducer(
    inputReducer,
    initialInputState
  );
};
