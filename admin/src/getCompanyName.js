const axios = require("axios")
const config = require("config")

module.exports = async (id) => {
  const response = await axios.get(
    `${config.financialCompaniesServiceUrl}/companies/${id}`
  )
  const company = response.data

  if (!company || !("name" in company)) {
    throw new Error("Company not found")
  }

  return company.name
}
