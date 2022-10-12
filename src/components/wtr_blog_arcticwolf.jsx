import React from 'react';
import {useParams, Link} from 'react-router-dom';

function Header() {
    return (
    <body>  
        <br/>
        <div class="container-fluid ml-auto">
            <h1 className="display-4" style={{textAlign: 'center'}}>Summer + Fall 2021 Blog: Arctic Wolf Networks</h1>
            <div class="d-flex flex-row">
              <div class="p-2">
                <ul class="nav flex-column nav-pills">
                  <br/>
                  <br/>
                    <div class="nav-item">
                      <Link to='/wtr_blog/1/1' class="nav-link"><p class="text-right">Introduction</p></Link>
                    </div>
                    <li class="nav-item">
                      <Link to='/wtr_blog/1/2' class="nav-link"><p class="text-right">About Arctic Wolf Networks</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/1/3' class="nav-link"><p class="text-right">Job Description</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/1/4' class="nav-link"><p class="text-right">Learning Goals</p></Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/wtr_blog/1/5' class="nav-link"><p class="text-right">Conclusion and Acknowledgements</p></Link>
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
                    During my Summer and Fall 2021 work terms, I worked as a Software Developer Co-op at a cyber security company called Arctic Wolf Networks. 
                    The 8-month work term was entirely online due to the Covid-19 pandemic, and this was my first co-op work term.
                    </p>
                    <p>
                    I am doing my area of application in sociology, for which I have taken several criminology courses, such as Homicide and Criminal Justice. 
                    When I was applying for this job, I had recently written an 8-page research paper about cyber security. 
                    As a result, I was especially interested in cyber security and really wanted to work at Arctic Wolf Networks.
                    </p>
                    <p>
                      During my time at the company I got to program in Python and Javascript, as well as learn new skills such as Golang, Bazel, Terraform, 
                      Typescript, and more. It was my first time experiencing problem solving and development in a professional environment 
                      , and I even got to see some security incidents happen and how they are dealt with.
                      I really enjoyed working at Arctic Wolf, all of my co-workers and management were always kind and helpful and I am a little bit sad to leave!
                    </p>
            </div>
        )
    }
    if (pg === '2') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>About Arctic Wolf Networks</p>
            <p>
                Arctic Wolf Networks was founded in 2012, and sells security operations centres as a service (or SOCS). 
                They are an American company headquarted in Eden Prarie, Minnesota, but they also have offices in Waterloo, ON, San Antonio, TX, and Provo, UT. 
                In 2019 and 2020 they were placed on Deloitte's Fast 500 list of fast-growing companies, and in October of 2020 they obtained Unicorn status. 
                This July they secured $150 million of Series F funding and tripled their valuation to $4.3 billion. It was pretty exciting to be 
                a part of the company during this time! 
            </p>
            <p>
                Many other companies in Canada, the United States and Europe outsource their cyber security operations to Arctic Wolf. 
                This service has been even more in demand during the pandemic, where most offices have had to move totally online 
                due to work-from-home constraints. 
                Cyber security operations are critically important to most business organizations nowadays, 
                where being protected could mean saving millions of dollars in the event of a ransomware attack.
            </p>
            <img src="https://media.graphassets.com/q0uM1gm2Tbyul6lU9XYt" alt="Arctic Wolf Logo" width="45%" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
        </div>
        )
    }
    if (pg === '3') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Job Description</p>
            <p>
                In my role at Arctic Wolf, I worked in the Infrastructure department of R&D. 
                The team I worked on was the Build and Deploy team, who do developer experience work.
                This includes supporting build technology and creating and mandating build tools that we support, often working with 
                infrastucture as code 
                like Terraform, Docker and Cloudformation. I learned how to set up and run jobs in Jenkins, how to deploy stacks to Cloudformation, 
                how to set up builds using Bazel, and new languages like Golang. I also got quite a bit of experience working with older, 
                pre-existing code and problem solving ways to fix bugs in it and test it, which was often difficult. Since the company and the 
                number of developers has scaled up so fast, there was a lot of meetings and discussion about what has to be done 
                to update the current build systems and practices which was interesting.
            </p>
        </div>
        )
    }
    if (pg === '4') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Learning Goals</p>
            <p>
                Since my work term was 8 months long, I had two sets of goals to set and reflect on. Looking back, I didn't know what
                to expect so I had some difficulty setting goals, but I think next work term I will do a much better job of it.
                Additionally, 
                I apologize for speaking so vaguely about the work I was doing, but I do not want to violate any NDA's that I have signed. 
            </p>
            <br/>
            <h2>Summer</h2>
                <h5>1. Improve understanding of modern languages and development tools</h5>
                  <p>I chose this goal because going into my co-op, I only really knew a lot about the C programming language.
                    I had very minimal experience with 'modern' languages and tools that seem to be more commonly used in the workplace now such as 
                    Python, Javascript, AWS, and Docker. The first project I was given at my co-op was to create a Github action written in Typescript, 
                    and this definitely made me more familiar with the language. 
                    I also was tasked with writing code for Cloudformation stacks in Python, setting up repositories with Bazel, and 
                    using Dockerfiles with Docker to run software builds on Linux.
                     I believe that I achieved this goal as after my work term I have a much better understanding of all the tools and skills I just described, and I am able to 
                    read and write code much faster in Javascript and Python. Nowadays, whenever I participate in Hackathons I will opt to use Javascript and React, and whenever I do leet code or
                    coding challenges like Advent of Code i'll opt for Python. It was really useful to me to gain a deeper understanding of these modern tools and languages.
                  </p>

                <h5>2. Improve knowledge of Continuous Integration/ Continuous Delivery (CI/CD)</h5>
                  <p>When I was onboarding at Arctic Wolf, the term CI/CD was thrown around constantly and I didn't really know what it meant,
                    so I made an effort to understand it. I was also having a lot of issues with Git when I started working there and 
                    kept having to ask for help to untangle my conflicts and figure out how to rebase my branches. Throughout my summer term at 
                    Arctic Wolf, I was able to achieve this goal by improving my Git skills and understanding/skills related to CI/CD. Eventually
                    I got the hang of Git and stopped having to ask for help constantly, or I was able to figure it out myself. For example, 
                    once I had to figure out how to un-do a rebase on the master branch because the repository was very popular and rebasing
                    caused thousands of changes to be added to my PR and it was too difficult to review which changes I had actually added. 
                    Next, I improved my understanding of continuous delivery using Jenkins and Cloudformation. When I was given tickets that caused me to 
                    have to make changes to the code for Cloudformation stacks, I would first deploy my changes to the test account namespaced 
                    with my name, so that if anything went wrong it could be traced back to me. Then I would make a PR and get it approved, and use Jenkins
                    to deploy my change to Dev, Test, and finally Production. Through doing these things I achieved my goal of 
                    learning about CI/CD, and it has given me a better overall understanding of how software is worked on 
                    and developed in a professional environment.
                  </p>

                <h5>3. Become more involved in a team setting</h5>
                  <p>Personally, one of my weaknesses is being shy, especially when I am new somewhere. I set this goal for myself to make an 
                    effort to be more involved in zoom discussions and try to push myself to be less shy. I don't really think that 
                    I was very successful at this goal, because in my work term evaluation for summer one of the only criticisms I got was
                    related to this. As a result, I continued my goal into next term where I believe I did better.
                  </p>
                <br/>
                <h2>Fall</h2>

                  <h5>1. Become proficient in Golang</h5>
                  <p>After working with several new languages during the summer, I noticed that Golang was the most challenging and was the only language
                    of the group that I had had absolutely no prior experience with. Due to this I decided to make a concerted effort to learn the language
                    and improve my skills coding in Go. My manager was helpful in giving me tasks related to this goal, which included
                     adding needed features to existing tools written in Go, and developing a new command-line interface for a new development tool
                      which would also be written in Go. I believe that I achieved this goal because now I am able to set up my own project using 
                      Golang (and Bazel) as well as understand, read and write code in Go at a much faster rate than I did previously. 
                  </p>

                  <h5>2. Find a way to incorporate creativity into my work</h5>
                  <img src="https://media.graphassets.com/Vr3y0EcLT56kc9dlffvA" alt="Logo" width="25%" align="right" style={{margin: 0 + 'px' +  0 + 'px' +  20 + 'px' +  20 + 'px'}}/>
                  <p> During a period of time where I was mostly fixing bugs in the existing codebase,
                    I began to feel slightly existential and introspective. 
                    As a result I came up with a goal to be more creative in my life in general, which I applied to my work term as well. 
                    I talked about it with my manager and luckily there was a new project that needed work which allowed me to
                     be creative through my contributions to it. Myself and the other co-op student worked together to develop a command-line interface 
                     for a new development tool my team was making, which 
                     allowed me to be creative in brainstorming the design and helping to piece together our own solution. Additionally, when it was 
                     mentioned that the team wanted a logo to represent the early-adopters club for the new tool, I volunteered to design it (pictured right).
                     
                     There was also a company hackathon event which I found to be really fun. My teammates and I worked together to create a web platform
                      for the hackathon (very meta). This project was inspired by the fact that the hackathon demos took a very long time and 
                      was motivated to come up with a faster solution. While I usually do backend work at my job, the hackathon gave me an 
                      oppurtunity to work on the front-end using Typescript and React which I enjoyed a lot.
                  </p>

                  <h5>3. Show more initiative </h5>
                  <p>Over the past four months of my work term, 
                    I have made a concentrated effort to show more initiative and participate more in social aspects like discussions and meetings. 
                    I have done this through replying to some of the questions that my team gets asked daily in our slack channel, and
                     I have shown initiative through volunteering to do special work like the design of the new development tool logo. 
                     I have also tried to give more input on code reviews / pull requests of others on my team. In November, I ran the monthly
                     team retrospective meeting on zoom and miro. 
                    This has been a more difficult goal to achieve because of impostor syndrome and feeling underqualified to help, 
                  but by putting myself out there and offering help without fear of judgement I believe I have made progress on my goal.</p>
            </div>
        )
    }
    if (pg === '5') {
        return (
        <div className="p-2 col-10 mx-auto">
            <br></br>
            <p className="text-center" style={{fontSize: 1.5 + 'vw'}}>Conclusion & Acknowledgements</p>
            <p>
            Over my eight months spent working at Arctic Wolf, I gained invaluable experience related to my Computer Science degree.
            I would like to thank everyone in R&D who I worked with at Arctic Wolf Networks, but especially my manager / team lead Chris 
            Stavropoulos and also Josh Grohn who helped me out a lot. Everyone was very kind and welcoming, and it was a great place to work!
            I would definitely consider returning some time in the future. 
            Thank you for reading my work term blog, and have a great day ! 
            </p>
            <div className='container-fluid'>
                <img src="https://media.graphassets.com/il3esfJdRiGUOuoLSiwV" alt="Casey (also coop) and I at Christmas Party" 
                width="45%" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
            </div>
        </div>
        )
    }
    
}

export function WorkTermOne() {
    return (
        <Header></Header>
    )
}