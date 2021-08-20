import { locationAPI } from "../api/api"

const SET_LOCATION_BY_IP = 'location-reduser/SET_LOCATION_BY_IP'
const TOGGLE_IS_FETCHING = 'location-reduser/TOGGLE_IS_FETCHING'
const SOME_EROOR = 'location-reduser/SOME_EROOR'

let initualState = { 
  isFetching: false,
  locationData: null,
  error: null,
}

const geolocationReduser = (state = initualState, action) => { 
  switch (action.type) {
    case SET_LOCATION_BY_IP:{
      return{...state, locationData: action.locationData, error: null}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching, error: null}
    }
    case SOME_EROOR: {
      return {
        ...state,
        daysWeather: [],
        searchInProgres: '',
        error: 'Something went wrong 😞. Please try again.'
      }
    }
    default: 
      return state
  }
}
export const action = {
  setLocation: (locationData) => ({type: SET_LOCATION_BY_IP, locationData}),
  toggleIsFeching: (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}),
  setSomeError: () => ({type: SOME_EROOR}),
}

export const search = (locationIp) => async (dispatch) => {
  dispatch(action.toggleIsFeching(true))
  let data = await locationAPI.getByIp(locationIp)
  dispatch(action.toggleIsFeching(false))
  data.error
    ? dispatch(action.setSomeError())
    : dispatch(action.setLocation(data))
}

export default geolocationReduser