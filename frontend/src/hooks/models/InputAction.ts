enum InputAction {
  CHANGE = "CHANGE",
  BLUR = "BLUR",
  CLEAR = "CLEAR",
}

export type InputActionType = keyof typeof InputAction;
