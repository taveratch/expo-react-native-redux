import actionTypes from '../actionTypes'

export type AppProps = {
  n: number
}

export type Action = {
  type: string,
  body?: any
}

const initialState: AppProps = {
  n: 0
}

export default (state: AppProps = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INCREASE: {

      return {
        ...state,
        n: state.n + 1
      }
    }

    case actionTypes.DECREASE: {
      return {
        ...state,
        n: state.n - 1
      }
    }

    default: return state
  }
}