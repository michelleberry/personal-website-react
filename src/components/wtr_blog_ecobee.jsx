import React from 'react';
import {useParams, Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

function Header() {
    return (
    <body>  
        <br/>
        <div class="container-fluid ml-auto">
            <h1 className="display-4" style={{textAlign: 'center'}}>Summer 2022 Blog: Ecobee</h1>
            <div class="d-flex flex-row">
              <div class="p-2">
                <ul class="nav flex-column nav-pills">
                  <br/>
                  <br/>
                    <div class="nav-item">
                      <Link to='/wtr_blog/2/1' class="nav-link"><p class="text-right">Introduction</p></Link>
                    </div>
                    <li class="nav-item">
                      <Link to='/wtr_blog/2/2' class="nav-link"><p class="text-right">About Ecobee</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/2/3' class="nav-link"><p class="text-right">Job Description</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/2/4' class="nav-link"><p class="text-right">Learning Goals</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/2/5' class="nav-link"><p class="text-right">Conclusion and Acknowledgements</p></Link>
                    </li>
                </ul>
              </div>
                <BlogContent></BlogContent>
            </div>
        </div>
    </body>
    )
}


function BlogContent() {
    const { pg } = useParams(); 
    if (pg === '1') {
        return (
            <div className="p-2 col-10 mx-auto">
                <br></br>
                <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Introduction</p>
                <p>
                For my Summer 2022 work term, I worked as a Backend Developer Co-op at a Canadian home automation company called Ecobee!
                </p>
                <p>
                While my past work term was completely remote, this work term was exciting as I got to work in the office on a flexible basis. 
                The office is located on the harbourfront in downtown Toronto, in the Corus entertainment building. I moved to downtown Toronto 
                to be closer to the office, and also because I want to live in the city when I graduate so I wanted to try it out.
                It was a lot of fun, but I don't think I would move to such a busy part of the city again; I will just commute longer.
                </p>
                <p>
                  During my time at ecobee I got more experience working with APIs and writing backend services, which I found very interesting.
                I was given an ecobee thermostat which I installed in my parent's house, and it was really cool to get an understanding of how the product tangibly works.
                At my last co-op, I was more removed from the actual product that the company was making because I was in Dev Ops. I found it really engaging to work on software that is used in 
                the actual product that the customers will be using.</p>
                <br></br>
                <div class="container" style={{display:'block', margin:'auto'}}>
                  <div class="row">
                    <div class="col">
                      <img src="https://media.graphassets.com/V4eX8GN4Szmbz4gj8c1W" alt="ecobee office" width="75%" style={{display:'block', margin:'auto'}}/>
                    </div>
                    <div class="col">
                      <img src="https://media.graphassets.com/6ipl26mFR8ent2OHftdV" alt="ecobee office" width="75%" style={{display:'block', margin:'auto'}}/>
                    </div>
                    <div class="col">
                      <img src="https://media.graphassets.com/NL5CURxWy8nxTAnoefgj" alt="ecobee office" width="75%" style={{display:'block', margin:'auto'}}/>
                    </div>
                  </div>
                  <div class="row" style={{display:'block', margin:'auto'}}>
                    <div class="col"  style={{display:'block', margin:'auto'}}>
                      Some pictures taken at the Ecobee office in Toronto.
                    </div>
                    <br/>
                    <br/>
                  </div>
                </div>
            </div>
        )
    }
    if (pg === '2') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>About Ecobee</p>
            <p>
                    Ecobee was founded in 2007 by Stuart Lombard. They are known mainly for their ecobee smart thermostats, as well as sensors 
                    and a camera device that make up their home security suite. 
                    The main office is in Toronto, ON by the harbourfront where I worked this summer, but there is also an office in Leeds in the UK
                    where the camera team is based out of.
                  </p>
                  <p>
                    The ecobee smart thermostats are significant because of their energy efficiency capabilities. For example, when you leave the house
                     or open a door or window, sensors will notify the thermostat and your house's heating or cooling will be paused. This results in a huge saving on energy bills.
                     Since the company's inception, ecobee users have collectively saved more than 25 TWh of energy, which is enough to take all the homes
                     in Los Angeles off the grid for a whole year. The thermostats also have extra smart home features like alexa built in which allows you to give commands 
                     or even play music on spotify
                     from your thermostat. 
                
                  </p>
                  <div style={{width: 600 + 'px', margin: 'auto'}}>
                    <img src="https://media.graphassets.com/FifUltqGTYiuV2Am5Zi6" alt="ecobee thermostat and sensor" width="45%" class="centre"/>
                  </div>
                  <br/>
                  <br></br>
        </div>
        )
    }
    if (pg === '3') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Job Description</p>
            <p>
                 In my role at ecobee, I worked in the core home monitoring team. 
                 This team is responsible for creating & maintaining
                  the backend services which power the home monitoring features accessible through the mobile app.
                 While I worked there, the main project that I contributed to was auto-trial start. The general purpose of this project was
                  to upsell the home security subscription service to customers by providing them with a free trial and encouraging them to 
                  use it and experience the features it includes. The technologies we used to build this service included Go, gRPC, GCP (Cloud Run, Pub/Sub, Cloud Scheduler), 
                  JavaScript and GraphQL. 
                </p>
        </div>
        )
    }
    if (pg === '4') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Learning Goals</p>
            <h5>1. Get understanding of how to host apps/services using GCP</h5>
                  <p>I chose this goal because I had previously worked with AWS at my last co-op and wanted 
                    to learn about different cloud platform options so I could form a preference. Also, at ecobee they mainly use GCP so it was 
                    most convenient to learn about the Google Cloud Platform. In order to achieve this goal, I started by completing an online GCP course
                     which gave me a basic understanding of the main services & their functions. 
                    In addition to that, throughout my co-op I witnessed design decisions being made & services being built 
                    using GCP. One example was during the auto-trial start project. We needed to build an additional 
                     service which consumed customer engagement data, used it to calculate metrics, sent these metrics to salesforce, and 
                    sent push notifications to the customer using the trial to encourage them to engage with all of it's features. 
                    Throughout this project we used FCM (Firebase Cloud Messaging), Datastore, Pub/Sub, Cloud Run, and BigQuery.
                     Now at the end of my co-op term, I have gained a 
                    reasonable understanding of what several GCP services can be useful for in the context of hosting backend services and apps.
                     To that end, I would say I have achieved this goal. However,
                     learning about these things has just made me realize how much more there is to learn. 
                     My next personal goal is to switch the hosting of my 
                     website that you are reading this on now over to GCP. 
                     I currently use Heroku, but I plan on switching it as soon as I have enough time.
                  </p>

                  <h5>2. Learn about designing APIs (ex. Rest, gRPC)</h5>
                  <p>When I began working at ecobee, the terms API and endpoint were constantly thrown 
                    around and I had very little understanding of what this meant. This is why I chose to learn about APIs as one of my learning goals.
                    While I did not learn very much about Rest APIs that much due to their limited/deprecated use at ecobee, 
                    I gained an understanding of gRPC APIs (google RPC).
                    I pair programmed with team members to set up a gRPC endpoint, 
                    and I wrote code by myself in the middleware API to utilize the Protocol Buffer contract
                     and call this endpoint directly. Overall, I am happy with my progress towards this goal and I can now 
                     better understand why APIs are useful and how they are used. 
                     Although there is something to be desired for my knowledge of Rest APIs, I am 
                     now familiar with gRPC and understand the main differences between the two options. For example, Rest uses JSON message format 
                     and gRPC uses Protocol Buffer (aka protobuf). To my understanding, gRPC is newer than Rest and is preferred due to it's increased speed. 
                     This is why I did not gain as much Rest knowledge, because lately ecobee have been deprecating it and instead using gRPC.
                  </p>

                  <h5>3. 	Learn about graphQL</h5>
                  <p> From the beginning of my work term, graphQL and the concept of a middleware API 
                    is definitely the thing that confused me the most. As a result, I doubled down 
                    and focused heavily on this 
                    goal during my summer work term at ecobee. I can now say I have a sound understanding of graphQL API/program structure, and it's uses and benefits.
                    I worked on many tickets to implement new queries and mutations in the middleware API at ecobee that utilizes graphQL. I am very satisfied with 
                    my achievement of this goal and I definitely met and maybe exceeded my expectations on achieving it. By the end of my work term I was able to 
                    pick up tickets that dealt with the graphQL middleware API and work on them independently with little help. Now I just need to stop mixing
                     up the terms graphQL and gRPC when I am trying to talk about technical things (I think I keep doing this because they both start with G).
                  </p>

                  <h5>4. 	Gain some more frontend/full-stack knowledge</h5>
                  <p>While I worked at ecobee, there was not an awful lot of oppurtunities to complete front-end tasks due to the fact that I was
                     on the backend team. To that end, I am not completely sure why I had listed this as a goal. In any case, I did address 
                     this goal briefly by doing some work on an internal tool React website that is used to access customer details for testing. 
                     I redesigned one front-end component to be more easily readable, and I updated the activity-feed component to include events from 
                     one of the newer services related to the auto trial start initiative. In addition, while working on a new tool near the end 
                     of my work term which was intended to upsell hardware devices to customers, we worked more closely with the 
                     front end home monitoring team and UX designer via several meetings. Participating in these meetings gave me more insight
                      into the full stack layout of the services.
                      Overall, I would say I completed this goal to meet my expectations.
                  </p>
                  <br></br>
            </div>
        )
    }
    if (pg === '5') {
        return (
            <div className="p-2 col-10 mx-auto">
                <br></br>
                <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Conclusion & Acknowledgements</p>
                    Over the four months I spent working at Ecobee, I gained invaluable backend development experience. I learned a lot about APIs, GCP, 
                    and the business aspect of how different teams work together to deliver a product.
                    I would like to thank everyone in home monitoring who I worked with at ecobee, but especially all of the people on the core team! 
                    Although the team grew quite large and busy over my time there, they were always around to answer questions and pair program. 
                    I learned a lot from you all and I really appreciate it!
                    I would also like to thank the other co-ops across the company for making it a really fun summer, as well as John Arambulo for planning
                    lots of great Q&A's and co-op events for us. It was great hanging out with you all
                    during lunch, events and after work.
                    I am planning on returning for my winter 2023 co-op term, because I enjoyed the experience so much. I would definitely consider
                    working at ecobee after my graduation full-time.
                    Thank you for reading my Summer 2022 work term blog, I hope you have a great day ! 
                <div style={{width: 600 + 'px', margin: 'auto'}}>
                    <Carousel>
                        <Carousel.Item>
                            <img class="d-block w-100" src="https://media.graphassets.com/nEUdCeDTRn2gtgSNeiig" alt="Team event at paint cabin"/>
                            <Carousel.Caption>
                                <p> Team event at paint cabin </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img class="d-block w-100" src="https://media.graphassets.com/0UVohclRJmkox97gdeNg" alt="coops outside the office"/>
                            <Carousel.Caption>
                                <p> Coops outside the office </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img class="d-block w-100" src="https://media.graphassets.com/qBD9Iv7XTE2rHcyABIYx" alt="Ecobee Coops at Amsterdam Brewery" style={{transform: 'rotate(90deg)'}}/>
                            <Carousel.Caption>
                                <p> Coops at amsterdam brewery </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
    
}


export function WorkTermTwo() {
    return (
        <Header></Header>
    )
}