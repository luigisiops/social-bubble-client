import React, { useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"
import "./Information.css"
import Navbar from "../../Navbar/Navbar"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

let info1 =
   "https://www.who.int/images/default-source/wpro/infographics/coronavirus-(covid-19)/transmission-1-e.png?sfvrsn=340c587_0"
let info2 =
   "https://www.who.int/images/default-source/wpro/infographics/coronavirus-(covid-19)/transmission-slide7.png?sfvrsn=f5dbe58a_0"
let info3 =
   "https://www.who.int/images/default-source/wpro/infographics/coronavirus-(covid-19)/transmission-slide11.png?sfvrsn=93eea205_0"
let info4 =
   "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide2069e18f870374cec818c01cae6a57c13.jpg?sfvrsn=77a95407_2"
let info5 =
   "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide3c8652f2f6f694fd0a28637c1e759d306.jpg?sfvrsn=900c60f9_2"
let info6 =
   "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide3a4c37eccf1af40e79a65657c29a2559b.jpg"

export const Information = () => {
   const [covidData, setCovidData] = useState({})

   useEffect(() => {
      getCovidData()
   }, [])

   const getCovidData = async () => {
      const response = await fetch("https://api.covid19api.com/world/total")
      const data = await response.json()

      setCovidData(data)

      return "success"
   }

   console.log(covidData)

   return (
      <div id="info-container">
         <div className="nav-component-container">
            <Navbar />
         </div>

         <div class="ui statistics">
            <div class="statistic">
               <div class="value">{covidData.TotalConfirmed}</div>
               <div class="label">Total Confirmed Cases</div>
            </div>
            <div class="statistic">
               <div class="value">{covidData.TotalDeaths}</div>
               <div class="label">Total Deaths</div>
            </div>
            <div class="statistic">
               <div class="value">{covidData.TotalRecovered}</div>
               <div class="label">Total Recovered</div>
            </div>
         </div>

         <h1 id="protect-h1">Protect Yourself!</h1>
         <div id="carousel">
            <Carousel showArrows={true}>
               <div>
                  <img className="infographics" src={info1} />
               </div>
               <div>
                  <img className="infographics" src={info2} />
               </div>
               <div>
                  <img className="infographics" src={info3} />
               </div>
               <div>
                  <img className="infographics" src={info4} />
               </div>
               <div>
                  <img className="infographics" src={info5} />
               </div>
               <div>
                  <img className="infographics" src={info6} />
               </div>
            </Carousel>
         </div>
      </div>
   )
}

export default Information
