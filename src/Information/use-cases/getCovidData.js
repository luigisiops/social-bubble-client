import { computeHeadingLevel } from "@testing-library/react"

export const GetCovidData = () => async (
    
) => {

    const response = await fetch(`http://covidtracking.com/api/us`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let covidData = await response.json()
    console.log(covidData)

    return covidData
}

export default GetCovidData