const initialState = {
  title: '',
  consent1: '',
  consent2: ''
}
const mainSettings = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAIN_SETTING": {
      return { ...state, ...action.data}
    }
    default: {
      return state
    }
  }
}

export default mainSettings