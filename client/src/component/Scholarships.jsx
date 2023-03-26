import React from 'react';
import { useEffect } from 'react';

const Scholarships = () => {

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
        <h1>SCHOLARSHIPS</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>DOLLAR FOR SCHOLARS</p>
            <p className='scholarships-bio'>
                As the nation's most extensive grassroots 
                scholarship program, Dollars for Scholars 
                provides a wealth of student assistance by 
                harnessing the power of community—thousands
                of volunteers and donors empowering students 
                in their own backyards. Link to apply 
                <span id='blue-link'>
                    <a href='https://utica.dollarsforscholars.org/index.php?section=chapterWebsite&action=main&fwID=548'>&nbsp;here</a>.
                </span>
            </p>
        </div>
    </div> 
    <br/> 
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>CONNOR ARTHUR LYNSKEY MEMORIAL SCHOLARSHIP</p>
            <p className='scholarships-bio'>
                The scholarship fund was established in memory of Connor, a 2017 
                Holland Patent Central School District graduate and pre-med student 
                who was killed by a drunk driver on August 11, 2018. The scholarship 
                fund aims to keep his memory alive and assist medical and high school
                students in furthering their education.
            </p>
            <p className='scholarships-bio'> 
                The fund awarded $12,550 in 2022, supporting graduating high school s
                eniors headed for a variety of four-year institutions, as well as 
                additional awards to students enrolled in the Upstate College of 
                Medicine Early Assurance Program, with an emphasis on assisting students
                in the Rural Medical Doctor program. Connor was enrolled in this 
                program and planned to become a rural doctor upon completion of his studies.
            </p>
            <p className='scholarships-bio'> 
                Interested applicants should visit
                <span id='blue-link'>
                    <a href='https://foundationhoc.org/give/funds/connor-arthur-lynskey-memorial-scholarship-fund'>&nbsp;foundationhoc.org/connor&nbsp;</a>
                </span>
                to view eligibility and apply online.
            </p>
        </div>
    </div> 
    <br/> 
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>BIKASH & KUMARI REGMI SCHOLARSHIP</p>
            <p className='scholarships-bio'>
                Bikash & Kumari Regmi scholarship is created to 
                help one high school or college student 
                (freshman or sophomore) who is planning to enter
                the medical field, become a good citizen, and 
                provide compassionate care to people who are in 
                need of medical help in Utica, NY.
            </p>
            <br/>
            <p className='scholarships-bio'>
                Bikash and Kumari Regmi work every day to produce
                change, end racism, and promote equality. They 
                believe education is the key to addressing those
                issues. They created Bikash & Kumari Regmi 
                scholarship to help one high school, college 
                first-year, or sophomore student who has significant
                hardship, and financial challenges, is involved
                in community activities, and has maintained a 
                good GPA. The goal of this scholarship is to help
                the student to find the pathway to becoming a good
                citizen and help to provide compassionate care. 
                Bikash and Kumari came to this country as refugees
                in 2009 after staying in a refugee camp in Nepal
                for 17 years. They were forcefully evicted from 
                their birth land Bhutan. After coming to the United
                States, they worked hard every day to fulfill their 
                dream of becoming health care providers. To fast 
                forward, both Bikash and Kumari are Nurse Practitioners
                and work for Optum. They are also adjunct lecturers at 
                the State University of New York Polytechnic Institute.
                Bikash's father always reminded and inculcated the value
                of education to him. He always says the government of 
                Bhutan snatched everything from him including his 
                citizenship and property, but education is the only
                thing that the government of Bhutan did not take from
                him. By awarding this scholarship, the Regmis believe that
                they might be able to help students to fulfill their 
                dreams and provide holistic care to their patients 
                in the future.
            </p>
            <br/>
            <p className='scholarships-bio'>
                    The 2019-2020 recipient was Nan Han and the
                    recipient for 2021-22 was See Lee.
            </p>
            <br/>
            <p className='scholarships-bio'><i>
                    If you have any questions, please email Bikash
                    Regmi: regmid@sunypoly.edu</i>
            </p>
        </div>
    </div>
    <br/> 
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>KJ JAMES MEMORIAL SCHOLARSHIP</p>
            <p className='scholarships-bio'>
                The New York State Blues Festival is pleased 
                to present the KJ James Memorial Scholarship,
                which is awarded every year to promising young
                performers.
            </p>
            <br/>
            <p className='scholarships-bio'>
                Kelly James is known as “the father of the blues
                scene” in Syracuse. He was responsible for creating
                and cultivating the thriving blues scene we enjoy
                today in Central New York, including starting the
                area's very first blues festival on Burnet Avenue.
                He played with the band, Triple Shot, then formed 
                Dr. Blue and the Kingsnakes, who toured nationally,
                before going solo as Dr. Blue. Kelly James' big 
                heart and spirit of generosity and support for 
                up-and-coming blues musicians were legendary in 
                the Central New York area and beyond. Click here
                for link.
            </p>
        </div>
    </div> 
    <br/>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>NYS HIGHER EDUCATION</p>
            <p className='scholarships-bio'>
                The state of New York offers various scholarships
                to students/residents who have resided in the state
                for 12 continuous months. The link to the various 
                scholarships offered can be found here.
            </p>
        </div>
    </div> 
</div>
        
    );
}

export default Scholarships;