import React from 'react';
import { useEffect } from 'react';

const Jobs = () => {

    useEffect(() => {            
        function scrollTrigger(selector, options = {}){
          let els = document.querySelectorAll(selector)
          els = Array.from(els)
          els.forEach(el => {
              addObserver(el, options)
          })
      }
      
      function addObserver(el, options){
          if(!('IntersectionObserver' in window)){
              if(options.cb){
                  options.cb(el)
              }else{
                  // entry.target.classList.add('active')
              }
              return
          }
          let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
              entries.forEach(entry => {
                  if(entry.isIntersecting){
                      if(options.cb){
                          options.cb(el)
                      }else{
                          entry.target.classList.add('active')
                      }
                      observer.unobserve(entry.target)
                  }
              })
          }, options)
          observer.observe(el)
      }
      // Example usages:
      scrollTrigger('#home-text')
      
      scrollTrigger('.scroll-reveal', {
          rootMargin: '-200px',
      })
    
      }, []);

    return (
        <div id='educational-body'>
        <div className='container'>
            <br/><br/>
            <h1>JOB RESOURCES</h1>
            <div className='container'>
                <p id='our-story-blue-line'></p>
            </div>
        </div>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>RADAR APPRENTICESHIP TRAINING</p>
                <p className='jobs-bio'>
                    The Regional Apprenticeship Development &
                    Readiness (RADAR) grant is an Apprenticeship program that allows you to learn a new Trade
                    while getting paid.
                </p>
                <p className='jobs-bio'>
                    For more info, contact 
                    <span id='blue-link'>
                        <a href='mailto:sedwards@working-solutions.org'>&nbsp;Sommer Edwards&nbsp;</a>
                    </span>
                    at Working Solutions.
                </p>
            </div>
            <div class="scroll-reveal box left">
                <br/>
                <div id='radar-pic-body' className="col">
                    <img className="radar-pic" src="/assets/RADAR_Job_Seeker_Flyer.jpg"/>
                </div>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>LABORER- INSTRUCTIONAL SUPPORT SERVICES (SCIENCE CENTER +)</p>
                <p className='jobs-bio'>
                    This position is responsible for assisting in 
                    the assembly and disassembly of educational 
                    science kits, media and/or music used in 
                    regional school districts. Additional duties
                    include receiving, storing inventory and
                    other responsibilities as needed. To apply,
                    complete the OHM BOCES application 
                    (http://oneida-boces.org/Page/624) and submit 
                    it to Kenn at sciencecenter@oneida-boces.org
                </p>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>LABORER- TECHNOLOGY REPAIR</p>
                <p className='jobs-bio'>
                    This position is responsible for cleaning, 
                    testing, and other preventative maintenance
                    for our regional school districts' computer
                    and audiovisual equipment. To apply, complete
                    the OHM BOCES application (http://oneida-boces.org/Page/624) 
                    and submit it to Kamil Rahme at krahme@oneida-boces.org.
                </p>
            </div>
        </div>
        <div className='container'>
            <br/><br/>
            <h1>INTERNSHIP RESOURCES</h1>
            <div className='container'>
                <p id='educational-blue-line'></p>
            </div>
        </div>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>ONEIDA COUNTY COLLEGE CORPS PRELIMINARY INTERNSHIP</p>
                <p className='jobs-bio'>
                    Internship opportunity offered through the 
                    Workforce Development Department of Oneida 
                    County.
                </p>
                <p className='jobs-bio'>
                    For those interested, the form can be found 
                    <span id='blue-link'>
                        <a href='https://ocgov.net/assets/WorkforceDev/Quick-Links/2023-College-Corps-Intern-Application.pdf'>&nbsp;here</a>.
                    </span>
                </p>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>MUNSON WILLIAMS PROCTOR ARTS INSTITUTE SUMMER 2022 DIVERSITY INTERNSHIP</p>
                <p className='jobs-bio'>
                    The MWPAI is offering a paid internship
                    for the summer of 2022. Information and
                    requirements here.
                </p>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>MVCC CAMP COUNSELOR FOR COLLEGE AND CAREERS CENTER</p>
                <p className='jobs-bio'>
                    MVCC is looking for someone to work as
                    a Camp Counselor for our College and 
                    Career Camps here on campus. Contact 
                    leady@mvcc.edu for more information 
                    and/or to apply.
                </p>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>WHITE HOUSE INTERNSHIP PROGRAM</p>
                <p className='jobs-bio'>
                    The White House Internship Program is a 
                    public service leadership and development 
                    program that provides emerging leaders with 
                    an opportunity to gain valuable skills while
                    supporting the work of the White House and
                    furthering the priorities of the Biden-Harris
                    Administration. The application period will
                    be 3 weeks, launching Monday, June 6 through
                    Friday, June 24. Applicants have the opportunity
                    to rank their preferred departments before
                    submitting their applications for review. Those
                    interested in applying or finding more information
                    to share with their communities can visit the WHIP
                    website. Parallel Networks (PN) is a U.S.-based
                    501(c)3 nonprofit organization dedicated to 
                    combating polarization, hate and extremism in the 
                    United States and contributing to prevention and 
                    countering violent extremism efforts elsewhere.
                </p>
            </div>
        </div>
        <br/>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>PARALLEL NETWORKS INTERNSHIP</p>
                <p className='jobs-bio'>
                    PN is seeking program and communications interns
                    who possess interest and experience in preventing
                    and countering violent extremism, with a focus on
                    deradicalization, reintegration, and community 
                    building and support. Applicants to the program 
                    internship should be prepared to dedicate time to 
                    programmatic activities such as conducting research
                    and data analyses. This will support the formation
                    and execution of projects and initiatives, as well
                    as aid proposal writing. Program interns will 
                    participate in the implementation, monitoring, and
                    evaluation of progress. Interns will also partake
                    in communications activities. This will entail 
                    aiding in efforts to gain exposure through relevant
                    social channels and creating effective networks 
                    with activists, agencies, and organizations who are
                    also working to prevent and counter violent extremism
                    within numerous vulnerable communities. Communications
                    intern work will include social media content creation
                    and curation, conduction of other written content 
                    creation, reaching out to relevant media outlets, 
                    and forming partnerships based on promising initiative
                    stabilities and common goals. For interns interested 
                    in the communications position, experience with social
                    media content creation and marketing, media relations,
                    copywriting, and graphic design is needed. College 
                    credit is available. For interested applicants, please
                    send your resume and a brief cover letter to 
                    rehana@pnetworks.org. All inquiries may be directed 
                    there as well.
                </p>
            </div>
        </div>
        <div className='container'>
            <br/><br/>
            <h1>CLOSED INTERNSHIPS</h1>
            <div className='container'>
                <p id='educational-blue-line'></p>
            </div>
        </div>
        <div id='jobs-links' className='container'>
            <br/>
            <div class="scroll-reveal box left">
                <p className='jobs-title'>LEVITT AMP SUMMER INTERNSHIP</p>
                <p className='jobs-bio'>
                    Five local high schools and/or college students
                    will gain hands-on experience with event 
                    production and promotion, marketing, creative 
                    placemaking, community development, and more! 
                    It will bring them closer to the community around 
                    them, allow them to work with diverse talent, 
                    get mentorship from seasoned event producers, 
                    try new things, and gain skills that will 
                    enhance their future careers and personal 
                    experiences.
                </p>
            </div>
        </div>
        <br/>
    </div>
            
    );
}

export default Jobs;