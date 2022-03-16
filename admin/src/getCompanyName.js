const axios = require("axios")
const config = require("config")

module.exports = (id) => {
  return axios
    .get(`${config.financialCompaniesServiceUrl}/company/${id}`)
    .then((response) => {
      const company = response.data

      if (!("name" in company)) {
        throw new Error("Company not found")
      }

      return company.name
    })
}
