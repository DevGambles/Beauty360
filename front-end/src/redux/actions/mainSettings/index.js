
import { history } from "../../../history"
import config from "../../../configs/config"
import {Axios} from "../root"
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';

export const saveMainSettings = (settings) => {
  return async dispatch => {
    await Axios.post("settings/main_config", settings)
      .then(response => {
        console.log(response)
        dispatch({ type: "SET_MAIN_SETTING", data: response.data })
      })
      .catch(err => console.log(err))
  }
}

export const getInitialData = (service) => {
  return async dispatch => {
    await Axios.get("settings/getSettings", {params:{service: service}}).then(response => {
      dispatch({ type: "SET_MAIN_SETTING", data: response.data.data })
    })
  }
}