import { MessageActionUnion, MessageActionTypes } from "./message.action";

export const MessageReducer = (
  state = initialState,
  action: MessageActionUnion
) => {
  switch (action.type) {
    case MessageActionTypes.ADD_ERROR_MESSAGE:
      return {
        ...state,
        error: action.message,
      };

    case MessageActionTypes.ADD_INFO_MESSAGE:
      return {
        ...state,
        info: action.message,
      };

    case MessageActionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        info: "",
        error: "",
      };

    default:
      return state;
  }
};

const initialState = {
  info: "",
  error: "",
};
