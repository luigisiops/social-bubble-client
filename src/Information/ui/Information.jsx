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
let info7 =
   "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide3479d167dee744db38540eaa8e56c32f7.jpg?sfvrsn=43e95b39_2"
let info8 =
   "https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide46968ed41452248eb988d17326fdf17af.jpg"

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
   let width = window.innerWidth
   if (width > 768) {
      return (
         <div id="info-container">
            <div className="nav-component-container">
               <Navbar />
            </div>

            <div class="ui statistics-container">
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

            <h1 id="protect-title">Protect Yourself!</h1>
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
                  <div>
                     <img className="infographics" src={info7} />
                  </div>
                  <div>
                     <img className="infographics" src={info8} />
                  </div>
               </Carousel>
            </div>

            <div className="links-container">
               <h1 className="links-title">Useful Links</h1>
               <ul className="links-list">
                  <a
                     href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                     target="_blank"
                  >
                     <li className="link-item">
                        World Health Organization (WHO)
                     </li>
                  </a>

                  <a
                     href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                     target="_blank"
                  >
                     <li className="link-item">
                        Centers for Disease Control (CDC)
                     </li>
                  </a>

                  <a href="https://www.nih.gov/coronavirus" target="_blank">
                     <li className="link-item">
                        National Institues of Healt (NIH)
                     </li>
                  </a>

                  <a href="https://covid19.census.gov/" target="_blank">
                     <li className="link-item">
                        United States Census Bureau (COVID-19)
                     </li>
                  </a>

                  <a href="https://coronavirus.jhu.edu/" target="_blank">
                     <li className="link-item">
                        Johns Hopkins - Coronavirus Resource Center
                     </li>
                  </a>
               </ul>
            </div>
         </div>
      )
   } else
      return (
         <div id="info-container">
            <div class="ui statistics-container">
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

            <h1 id="protect-title">Protect Yourself!</h1>
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
                  <div>
                     <img className="infographics" src={info7} />
                  </div>
                  <div>
                     <img className="infographics" src={info8} />
                  </div>
               </Carousel>
            </div>

            <div className="links-container">
               <h1 className="links-title">Useful Links</h1>
               <ul className="links-list">
                  <a
                     href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                     target="_blank"
                  >
                     <li className="link-item">
                        World Health Organization (WHO)
                     </li>
                  </a>

                  <a
                     href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                     target="_blank"
                  >
                     <li className="link-item">
                        Centers for Disease Control (CDC)
                     </li>
                  </a>

                  <a href="https://www.nih.gov/coronavirus" target="_blank">
                     <li className="link-item">
                        National Institues of Healt (NIH)
                     </li>
                  </a>

                  <a href="https://covid19.census.gov/" target="_blank">
                     <li className="link-item">
                        United States Census Bureau (COVID-19)
                     </li>
                  </a>

                  <a href="https://coronavirus.jhu.edu/" target="_blank">
                     <li className="link-item">
                        Johns Hopkins - Coronavirus Resource Center
                     </li>
                  </a>
               </ul>
            </div>

            <div className="nav-component-container">
               <Navbar />
            </div>
         </div>
      )
}

export default Information
