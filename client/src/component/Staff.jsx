import React from 'react';
import { useEffect } from 'react';

const Staff = () => {

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
        <div id='staff-body'>
            <div className='container'>
                <br/>
                <h1 id="overview-header-txt">Staff</h1>
            </div>
            <div id='staff-rows' className='container row'>
                <div className='col-lg-4'>
                    <div className='staff-cards'>
                        {/* <div class="scroll-reveal box left"> */}
                            <div>
                            <div id='staff-card' className="card">
                                <div className="staff-img-body">
                                    <img src="assets/kayklo.png" className="staff-img"/>
                                </div>
                                <p > <br/>  </p>
                                <p className="staff-name"> Kay Klo  </p>
                                <p className="staff-email"> <a href='mailto:kay@midtownutica.org'>kay@midtownutica.org</a></p>
                                <p className="staff-title"> Executive Director  </p>
                                <div className='staff-bio-body'>
                                    <p className="staff-bio">
                                        Kay Klo is the Executive Director of the Midtown Utica Community Center. 
                                        Kay and her family moved to Utica, NY as refugees in 2004 due to the civil 
                                        war in Myanmar. After receiving a B.A. in anthropology from Mount Holyoke 
                                        College, Kay spent one year in Thailand as a Fulbright Scholar, where she 
                                        taught English and learned Thai. 
                                    </p>
                                    <p className="staff-bio">
                                        As Executive Director, Klo works closely 
                                        with the board of directors and oversees MUCC's finances, maintenance of 
                                        the MUCC headquarters in Midtown Utica, the many volunteers dedicated to 
                                        the community center, and MUCC programming. In addition, she heads 
                                        fundraising endeavors. 
                                    </p>
                                    <p className="staff-bio">
                                        She is currently pursuing a Master's Degree in 
                                        Information Design and Technology at the SUNY Polytechnic Institute. 
                                        In 2022, she was named a “Woman of Distinction” by the New York State 
                                        Assembly. She is dedicated to community engagement and social equity in 
                                        all forms of her work. She loves Thai food and enjoys napping. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='staff-cards'>
                            <div id='staff-card' className="card">
                                <div className="staff-img-body">
                                    <img src="assets/staff-placeholder.png" className="staff-img"/>
                                </div>
                                <p > <br/>  </p>
                                <p className="staff-name"> Renee Wah  </p>
                                <p className="staff-email"> <a href='mailto:renee@midtownutica.org'>renee@midtownutica.org</a></p>
                                <p className="staff-title"> Assistant Director  </p>
                                <div className='staff-bio-body'>
                                    <p className="staff-bio"> 
                                        Provides high level administrative support and assistance 
                                        to the director and other staff members.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='staff-cards'>
                            <div id='staff-card' className="card">
                                <div className="staff-img-body">
                                    <img src="assets/staff-placeholder.png" className="staff-img"/>
                                </div>
                                <p > <br/>  </p>
                                <p className="staff-name"> Hawa Juma  </p>
                                <p className="staff-email"> <a href='mailto:hawa@midtownutica.org'>hawa@midtownutica.org</a></p>
                                <p className="staff-title"> Community Outreach Coordinator </p>
                                <div className='staff-bio-body'>
                                    <p className="staff-bio"> 
                                        Hawa collaborates with other groups and organizations to 
                                        coordinate MUCC events. Also networks with other communities 
                                        to get involved with programs.
                                    </p>
                                </div>                           
                             </div>
                    </div>
                </div>
            </div>
                <div id='second-staff-row' className='container row'>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Anna Woodworth  </p>
                                    <p className="staff-email"> <a href='mailto:anna@midtownutica.org'>anna@midtownutica.org</a></p>                                    <p className="staff-title"> TITLE  </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> BIO  </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Sarah Morehouse  </p>
                                    <p className="staff-email"> <a href='mailto:sara@midtownutica.org'>sara@midtownutica.org</a></p>
                                    <p className="staff-title"> TITLE  </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> BIO  </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Nurallah Alawsaj  </p>
                                    <p className="staff-email"> <a href='mailto:nurallah@midtownutica.org'>nurallah@midtownutica.org</a></p>
                                    <p className="staff-title"> Program Coordinator </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> 
                                        Nurallah Alawsaj is the Program Coordinator of the Midtown Utica
                                        Community Center. Nurallah helps in overseeing, supervising
                                        events and programs happening at MUCC. She is a part of the 
                                        Media Committee where she generally covers and shares updated
                                        news on  programs, workshops, etc. Through her previous 
                                        experiences and internships in social media management.
                                        </p>
                                        <p className="staff-bio"> 
                                        She manages all social media platforms, newsletters at the 
                                        center to provide help to the community members by sharing 
                                        and providing resources that are needed. 
                                        </p>
                                        <p className='staff-bio'>
                                            Nurallah is bilingual and fluent in Arabic and English. 
                                            In her free time she enjoys reading, attending creative
                                            events, workshops, and listening to podcasts. She has a 
                                            strong interest in writing, filming and photography. She 
                                            hopes to be able to help and work closely with youth by 
                                            being a mentor and provide resources that are needed to 
                                            help them succeed. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div id='second-staff-row' className='container row'>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Shukri Mohamed  </p>
                                    <p className="staff-email"> <a href='mailto:shukri@midtownutica.org'>shukri@midtownutica.org</a></p>
                                    <p className="staff-title"> ALE Teacher Assistant  </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> 
                                        Shukri is the ALE teacher's assistant at the Midtown Utica Community 
                                        Center. Shukri and her family came to the United States as refugees
                                        from Kenya for a better life. Shukri received her Associates Degree
                                        in Liberal Arts & Sciences from Monroe Community College. She is 
                                        now pursuing her Bachelor's in Healthcare Administration. Shukri 
                                        was the site coordinator for the New York State Mentoring Program
                                        at MUCC.
                                        </p>
                                        <p className="staff-bio"> 
                                        Shukri provides support to the teacher and assist ESOL students
                                        with educational tasks. Shukri also provides overall support to the
                                        ALE program. 
                                        </p>
                                        <p className="staff-bio"> 
                                        Shukri Is fluent in MaiMai and can read and write in Arabic. 
                                        In her free time Shukri enjoys creating new recipes and painting. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Gino ? </p>
                                    <p className="staff-email"> <a href='mailto:consultgino@gmail.com'>consultgino@gmail.com</a></p>
                                    <p className="staff-title"> Building Manager  </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> BIO  </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='staff-cards'>
                                <div id='staff-card' className="card">
                                    <div className="staff-img-body">
                                        <img src="assets/staff-placeholder.png" className="staff-img"/>
                                    </div>
                                    <p > <br/>  </p>
                                    <p className="staff-name"> Name  </p>
                                    <p className="staff-email"> EMAIL  </p>
                                    <p className="staff-title"> TITLE  </p>
                                    <div className='staff-bio-body'>
                                        <p className="staff-bio"> BIO  </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            
            
            <div className='container'>
                <br/>
                <br/>
                <br/>
                <h1 id="overview-header-txt">Executive Board</h1>
                <br/>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>President</h4>
                        <h5>Kathyrn Stam</h5>
                    </div>
                </div>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>Vice President</h4>
                        <h5>Michelle Dawn Laguerre</h5>
                    </div>
                </div>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>Secretary</h4>
                        <h5>Rebecca Weldon</h5>
                    </div>
                </div>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>Treasurer</h4>
                        <h5>Ben Gaetano</h5>
                    </div>
                </div>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>Members</h4>
                        <h5>Olivia Paul</h5>
                        <h5>Dina Radeljas</h5>
                        <h5>Oneka Roach-Campbell</h5>
                        <h5>Rick Short</h5>
                        <h5>Regina Lalonde</h5>
                        <h5>Mubarak Hakeem Arabi</h5>
                    </div>
                </div>
                <div class="scroll-reveal box left">
                    <div className='executive-names'>
                        <h4 id='overview-executive-txt'>Honorary Board Member and Advisor</h4>
                        <h5>Chris Sunderlin</h5>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Staff;