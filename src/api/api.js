import axios from "axios"

export const locationAPI = {
  getByIp (locationIp) {
    return axios.get(`https://ipapi.co/${locationIp}/json/`)
    .then(response => {
      return response.data
    })
  },
}