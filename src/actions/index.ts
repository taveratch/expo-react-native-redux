import { Action } from "../reducers";
import actionTypes from "../actionTypes";

export type AppActions = {
  increaseInRedux: () => void,
  decreaseInRedux: () => void
}

const actions: AppActions = {
  increaseInRedux: () => (dispatch: any) => {
    dispatch({
      type: actionTypes.INCREASE
    })
  },
  decreaseInRedux: () => (dispatch: any) => {
    dispatch({
      type: actionTypes.DECREASE
    })
  },
}

export default actions