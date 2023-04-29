import React from 'react';
import {useParams, Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

function Header() {
    return (
    <body>  
        <br/>
        <div class="container-fluid ml-auto">
            <h1 className="display-4" style={{textAlign: 'center'}}>Winter 2023 Blog: Ecobee</h1>
            <div class="d-flex flex-row">
              <div class="p-2">
                <ul class="nav flex-column nav-pills">
                  <br/>
                  <br/>
                    <div class="nav-item">
                      <Link to='/wtr_blog/3/1' class="nav-link"><p class="text-right">Introduction</p></Link>
                    </div>
                    <li class="nav-item">
                      <Link to='/wtr_blog/3/2' class="nav-link"><p class="text-right">About Ecobee</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/3/3' class="nav-link"><p class="text-right">Job Description</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/3/4' class="nav-link"><p class="text-right">Learning Goals</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/3/5' class="nav-link"><p class="text-right">Conclusion and Acknowledgements</p></Link>
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
                For my Winter 2023 work term, I returned to Ecobee. I worked as a Backend Developer Co-op again, on the same team as my last term.
                </p>
                <p>
                While my past work term with Ecobee was hybrid, and I went into the office sometimes, this term I worked fully remote. I only went to the office
                on my first and last day of work to collect and return my laptop.
                It seemed like a waste of money to live near the office when my team never went in. I moved back into my parents' house 
                and worked from their living room. I also joined a gym which was in walking distance, and spent a lot of time with my family. 
                It was great! 
                </p>
                <p>
                  During my time at ecobee I got more experience working with APIs and writing backend services, which I found very interesting.
                Since I already had an ecobee thermostat, I was given an ecobee security camera which I installed in my parent's house, and it was really cool to get an understanding of how the home monitoring product tangibly works.
                Especially since I am on the home monitoring team.
                </p>
                <br></br>
                
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
                    The main office is in Toronto, ON by the harbourfront, but there is also an office in Leeds in the UK
                    where the camera team is based out of. The main office in Toronto is moving further down the harbourfront to the old office, which everyone liked more!
                    This is exciting because the office will be way closer to union station and thus better for commuting. 
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
                    <img src="https://media.graphassets.com/OTZbsWX2Tz7TrXVtqAz2" alt="ecobee produits" width="85%" class="centre"/>
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
                 This term, the main project that I contributed to was called the thermostat monitoring experience. The general purpose of this project was
                  to draw attention to the home security services by integrating them into the user interface of the thermostat. 
                  The technologies we used to build this service were mainly Go, gRPC, and GCP (Cloud Run, Pub/Sub, IoTCore, Telemetry).
                </p>
        </div>
        )
    }
    if (pg === '4') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Learning Goals</p>
            <h5>1. Gain a deeper understanding of backend services written in golang, with gokit framework.</h5>
                  <p>	I believe that throughout my term at ecobee, I have gained a significantly improved 
                    understanding of the go microservice ecosystem that is being used for our backend services. 
                    To do this I read articles on learning days, took notes, worked extensively on services written in go, 
                    and had 1:1 sessions learning in depth about the company's architecture. To prove my understanding I
                     can briefly summarize the work I have done and the learnings I have garnered. This term I was mainly 
                     working on the thermostat monitoring experience, which would enable customers to access home security 
                     features from the user interface of their thermostat.  I created the feature flag to enable/disable this, 
                     and I worked on handling the messages recieved from the thermostat firmware. I also worked on the service 
                     code for exit delay, which lets customers set a time delay before their home is armed. I learned about 
                     the microservice model of backend services; it consists of several separate (code repos) but connected
                      (via pubsub, endpoints, etc) microservices, as opposed to a monolith model where all code is in one repository. 
                      It solves organizational problems, like the difficulty of having several 
                      devs working on the same repo at once, but creates technical problems which require a devOps culture to 
                      streamline deployment pipelines, repo set up, and establish standard communication methods of multiple 
                      separate repositories of code. Learning this was really interesting to me and allowed me to reflect 
                      meaningfully on my past co-op experience where I worked on a dev-ops team with a new understanding. 
                      We had been trying to convince the org to embrace the microsystem model, but the devs were actually 
                      getting mad because it meant making technical accomodations to support that. Much of that co-op term 
                      was spent working to break a monolith into microservices. Back then I didn't really understand what 
                      the difference was but now having experienced both kinds of code organization it is clear to me having 
                      finally gained context. It was kind of like one of those movies where they show you the end first and 
                      you are confused and then the movie is everything that leads up to that point.
                  </p>

                  <h5>2. Show more initiative in a team setting</h5>
                  <p>I believe I have achieved this goal, and I think my team mates have noticed. I have put effort into 
                    doing more PR reviews, asking questions in PR reviews 
                    when I dont understand something, and being more active on slack. When someone asks a question related 
                    to something I have worked on I try my best to answer or contribute to finding the solution. I also 
                    volunteered to do a presentation on the main project I have been working on when it was requested,
                     because 2/3 of the main people working on that project will be away for a time at the end of the 
                     month other members wanted to be filled in on the project and the progress made towards it. 

                  </p>

                  <h5>3. Improve at technical oral communication. I am much better at written communication about techincal things so this is outside my comfort zone.</h5>
                  <p> Although it was sometimes difficult to make progress on this goal due to the nature of remote work, 
                    I believe that I have definitely improved on it. I maintained a notebook to refer to and regularly 
                    kept a diary of what I had been working on to make talking about it easier. The catalyst for this 
                    goal was when I volunteered to do a technical presentation about the project I had been working on. 
                    The first time I tried to do the presentation I actually failed miserably as I had prepared 
                    improperly and realized I had basically no idea how to effectively communicate what I was supposed 
                    to talk about. When I realized how badly it was tanking I asked if I could pause and re-do the 
                    presentation the following week, which they thankfully let me do. Luckily I learned from my mistakes, 
                    and the second time around I was much more prepared, had practiced more, and had a much better 
                    outline and understanding of what I was supposed to present. I am proud of that experience because
                     although I failed really badly at first I redeemed myself and I think used my mistake to improve
                       on my ultimate goal of improving at technical oral communication.
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
                    I would like to thank everyone in home monitoring who I worked with at ecobee, but especially Chen, Anton, Prasanth, Pray, and Christina who were always helpful and kind to me! 
                    They were always around to answer questions and pair program. 
                    I learned a lot from you all and I really appreciate it!
                    I am definitely considering
                    working at ecobee after my graduation full-time.
                    Thank you for reading my Winter 2023 work term blog, I hope you have a great day ! 
                
            </div>
        )
    }
    
}


export function WorkTermThree() {
    return (
        <Header></Header>
    )
}