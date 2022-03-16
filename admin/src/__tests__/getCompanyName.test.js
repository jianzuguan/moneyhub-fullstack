const axios = require("axios")
const getCompanyName = require("../getCompanyName")

jest.mock("axios")

it("should return the company name", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        id: "1",
        name: "The Big Investment Company",
        address: "14 Square Place",
        postcode: "SW18UU",
        frn: "234165",
      },
    })
  )

  expect(await getCompanyName("1")).toBe("The Big Investment Company")
})

it("should throw Company not found error", async () => {
  axios.get.mockImplementation(() => "")

  try {
    await getCompanyName("1")
  } catch (err) {
    expect(err.message).toBe("Company not found")
  }
})
