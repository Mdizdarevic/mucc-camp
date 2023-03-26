import React from 'react';
import { useEffect } from 'react';

const Programs = () => {

    useEffect(() => {            
            var academicsBody = document.getElementById("academics-body");

            var artsBody = document.getElementById("arts-body");
            artsBody.style.display = 'none';

            var healthBody = document.getElementById("health-body");
            healthBody.style.display = 'none';

            var muccampBody = document.getElementById("muccamp-body");
            muccampBody.style.display = 'none';

            var syepBody = document.getElementById("syep-body");
            syepBody.style.display = 'none';

            var academicsBlock = document.getElementById("academics-block");
            var artsBlock = document.getElementById("arts-block");
            var healthBlock = document.getElementById("health-block");
            var muccampBlock = document.getElementById("muccamp-block");
            var syepBlock = document.getElementById("syep-block");

            academicsBlock.style.backgroundColor = '#E0E0E0';

            var programsAcademicsHeader = document.getElementById("programs-academics-header");
            programsAcademicsHeader.addEventListener("click", academicsSelected);

            function academicsSelected() {
                programsAcademicsHeader.style.backgroundColor = 'rgb(5, 175, 235)';
                programsAcademicsHeader.style.color = 'white';

                programsArtsHeader.style.backgroundColor = '#E0E0E0';
                programsArtsHeader.style.color = 'black';
                programsHealthHeader.style.backgroundColor = '#E0E0E0';
                programsHealthHeader.style.color = 'black';
                programsMuccampHeader.style.backgroundColor = '#E0E0E0';
                programsMuccampHeader.style.color = 'black';
                programsSyepHeader.style.backgroundColor = '#E0E0E0';
                programsSyepHeader.style.color = 'black';

                healthBody.style.display = 'none';
                artsBody.style.display = 'none';
                academicsBody.style.display = 'block';
                muccampBody.style.display = 'none';
                syepBody.style.display = 'none';
            }

            var programsArtsHeader = document.getElementById("programs-arts-header");
            programsArtsHeader.addEventListener("click", artsSelected);

            function artsSelected() {

                programsArtsHeader.style.backgroundColor = 'rgb(5, 175, 235)';
                programsArtsHeader.style.color = 'white';

                programsAcademicsHeader.style.backgroundColor = '#E0E0E0';
                programsAcademicsHeader.style.color = 'black';
                programsHealthHeader.style.backgroundColor = '#E0E0E0';
                programsHealthHeader.style.color = 'black';
                programsMuccampHeader.style.backgroundColor = '#E0E0E0';
                programsMuccampHeader.style.color = 'black';
                programsSyepHeader.style.backgroundColor = '#E0E0E0';
                programsSyepHeader.style.color = 'black';

                healthBody.style.display = 'none';
                artsBody.style.display = 'block';
                academicsBody.style.display = 'none';
                muccampBody.style.display = 'none';
                syepBody.style.display = 'none';

                artsBlock.style.backgroundColor = '#E0E0E0';

            }

            var programsHealthHeader = document.getElementById("programs-health-header");
            programsHealthHeader.addEventListener("click", healthSelected);

            function healthSelected() {

                programsHealthHeader.style.backgroundColor = 'rgb(5, 175, 235)';
                programsHealthHeader.style.color = 'white';

                programsAcademicsHeader.style.backgroundColor = '#E0E0E0';
                programsArtsHeader.style.backgroundColor = '#E0E0E0';
                programsAcademicsHeader.style.color = 'black';
                programsArtsHeader.style.color = 'black';
                programsMuccampHeader.style.backgroundColor = '#E0E0E0';
                programsMuccampHeader.style.color = 'black';
                programsSyepHeader.style.backgroundColor = '#E0E0E0';
                programsSyepHeader.style.color = 'black';

                healthBody.style.display = 'block';
                artsBody.style.display = 'none';
                academicsBody.style.display = 'none';
                muccampBody.style.display = 'none';
                syepBody.style.display = 'none';

                healthBlock.style.backgroundColor = '#E0E0E0';
            }

            var programsMuccampHeader = document.getElementById("programs-muccamp-header");
            programsMuccampHeader.addEventListener("click", muccampSelected);

            function muccampSelected() {

                programsMuccampHeader.style.backgroundColor = 'rgb(5, 175, 235)';
                programsMuccampHeader.style.color = 'white';

                programsAcademicsHeader.style.backgroundColor = '#E0E0E0';
                programsArtsHeader.style.backgroundColor = '#E0E0E0';
                programsAcademicsHeader.style.color = 'black';
                programsArtsHeader.style.color = 'black';
                programsHealthHeader.style.backgroundColor = '#E0E0E0';
                programsHealthHeader.style.color = 'black';
                programsSyepHeader.style.backgroundColor = '#E0E0E0';
                programsSyepHeader.style.color = 'black';

                healthBody.style.display = 'none';
                artsBody.style.display = 'none';
                academicsBody.style.display = 'none';
                syepBody.style.display = 'none';
                muccampBody.style.display = 'block';  
                
                muccampBlock.style.backgroundColor = '#E0E0E0';
            }

            var programsSyepHeader = document.getElementById("programs-syep-header");
            programsSyepHeader.addEventListener("click", syepSelected);

            function syepSelected() {

                programsSyepHeader.style.backgroundColor = 'rgb(5, 175, 235)';
                programsSyepHeader.style.color = 'white';

                programsAcademicsHeader.style.backgroundColor = '#E0E0E0';
                programsArtsHeader.style.backgroundColor = '#E0E0E0';
                programsAcademicsHeader.style.color = 'black';
                programsArtsHeader.style.color = 'black';
                programsHealthHeader.style.backgroundColor = '#E0E0E0';
                programsHealthHeader.style.color = 'black';
                programsMuccampHeader.style.backgroundColor = '#E0E0E0';
                programsMuccampHeader.style.color = 'black';

                healthBody.style.display = 'none';
                artsBody.style.display = 'none';
                academicsBody.style.display = 'none';
                muccampBody.style.display = 'none';
                syepBody.style.display = 'block';

                syepBlock.style.backgroundColor = '#E0E0E0';
            }

    }, []);

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
        <div className='container'>
        <br/>
        <h1 id="overview-header-txt">Programs</h1>
        <br/>
        <div id='wide-screen-programs'>
        <div className='container'>
            <div id='programs-cols' className='row'>
                <div id='programs-academics-header' className='col programs-headers'>ACADEMICS/SELF-DEVELOPMENT</div>
                <div id='programs-arts-header' className='col programs-headers'>ARTS AND CULTURE</div>
                <div id='programs-health-header' className='col programs-headers'>HEALTH AND WELLNESS</div>
                <div id='programs-muccamp-header' className='col programs-headers'>MUCCamp</div>
                <div id='programs-syep-header' className='col programs-headers'>SYEP 2022</div>    
            </div>
        </div>
        <section id='academics-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div id='academics-block' className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>   
                    </div>
                </section>
                <div className='academics-grey-body'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1>Tutoring</h1>
                                <div className='container'>
                                    <p id='educational-blue-line'></p>
                                </div>
                            </div>
                            <div id='tutoring-txt'>
                                <div class="scroll-reveal box left">
                                    <p> Many refugees struggle with succeeding at academic work because most of 
                                        them are not native English speakers and many of them did not have 
                                        high-quality schooling in the refugee camps where they used to live. 
                                        We work individually and in small groups with students of all ages and 
                                        levels to help them succeed with their homework, tests, state exams, 
                                        and presentations. We have a large group of volunteer tutors from all of 
                                        the area's high schools and colleges, and many of them are refugees 
                                        themselves. If you need some extra help with an academic challenge you 
                                        are facing, please contact us by sending an email to midtownutica@gmail.com. 
                                    </p>
                                </div>
                                <div class="scroll-reveal box left">
                                    <p> To assist the students of MUCC in their 
                                        academics, students from Hamilton College
                                        come and offer tutoring at MUCC every 
                                        Saturday at 10 AM.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <br/><br/>
                            <div id='tutoring-pic-body'>
                                <div class="scroll-reveal box right">
                                    <img className="tutoring-pic" src="/assets/tutoring.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1>MUCCbots</h1>
                                <div className='container'>
                                    <p id='educational-blue-line'></p>
                                </div>
                            </div>
                            <div id='muccbots-txt'>
                                <div class="scroll-reveal box left">
                                    <p> MUCC offers a robotics team for youth 
                                        interested in STEM. Our team has competed 
                                        in several competitions throughout Upstate 
                                        NY. They are currently preparing for the 
                                        2022-2023 season. If interested in joining, 
                                        please contact us at midtownutica@gmail.com.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <br/>
                            <div id='muccbots-pic-body'>
                                <div class="scroll-reveal box right">
                                    <img className="muccbots-pic" src="/assets/muccbots.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='arts-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div id='arts-block' className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>    
                    </div>
                </section>
                <div className='arts-grey-body'>
                    <div>
                        <h1>Arts and Culture</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> Arts and culture are at the heart of what we do at MUCC. We promote dance, music, storytelling, theater, traditional dress, language acquisition, cultural festivals and practices. Cultural traditions also include jewelry making, henna, and other methods of beautification. We provide the space and supervision for community members to practice their crafts and prepare to share them with a wider audience. We help various ethnic groups organize New Years and other cultural festivals. We encourage community members to share their experiences and stories, and we connect them with opportunities to do so publicly. We seek outside grants and other resources to help support refugee and immigrant artists. Finally, we support and organize about 25-30 cultural events beyond the walls of MUCC, at music festivals, museums, schools, and universities.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <br/>
                            <div id='tutoring-pic-body' className="col">
                                <div class="scroll-reveal box left">
                                    <img className="tutoring-pic" src="/assets/dancinggirl.png"/>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        </div>
                        <div className='col'>
                            <br/>
                            <div id='arts-pic-body' className="col">
                                <div class="scroll-reveal box right">
                                    <img className="arts-pic" src="/assets/kidsattable.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <br/>
                            <div id='arts-pic-body-2' className="col">
                                <div class="scroll-reveal box left">
                                    <img className="arts-pic-2" src="/assets/redhoodieguy.png"/>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='health-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div id='health-block' className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>  
                    </div>
                </section>
                <div className='health-grey-body'>
                    <div>
                        <h1>Health and Wellness</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> The community center is interested in promoting 
                                health and wellness for all of our community members, 
                                so we have initiated the following activities:
                            </p>
                        </div>
                        <div className='programs-links'>
                            <div class="scroll-reveal box left"><li>Basketball program</li></div>
                            <div class="scroll-reveal box left"><li>Curling Team</li></div>
                            <div class="scroll-reveal box left"><li>Gardening in raised beds and leading prevention efforts</li></div>
                            <div class="scroll-reveal box left"><li>Healthy food preparation</li></div>
                            <div class="scroll-reveal box left"><li>Partnerships with two nearby organic gardens that provide donated vegetable shares</li></div>
                            <div class="scroll-reveal box left"><li>Running team</li></div>
                            <div class="scroll-reveal box left"><li>Traditional and contemporary dance lessons and practices</li></div>
                            <div class="scroll-reveal box left"><li>Volleyball program</li></div>
                            <div class="scroll-reveal box left"><li>Yoga-stretching and breathing</li></div>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left"><p>Check out our calendar for dates and times!</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section id='muccamp-body'>
             <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div id='muccamp-block' className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>
                    </div>
                </section>
                <div className='mucc-grey-body'>
                    <div>
                        <h1>MUCCamp</h1>
                        <div className='container'>
                            <p id='muccamp-blue-line'></p>
                        </div>
                    </div>
                    <br/><br/>
                    <div id='muccamp-pic-body'>
                        <div class="scroll-reveal box bottom">
                            <img className="muccamp-pic" src="/assets/muccamp.png"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> MUCCamp is a week-long summer camp experience for 
                                the MUCC community to let loose and experience the 
                                Adirondacks with hiking, canoeing, swimming, bonfires, 
                                and much more.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p> Students must be high school age, vaccinated against covid-19,
                                and spots are on a first-come-first-served basis. Campers must 
                                fill out the application, the health form, and their parents 
                                need to review the info sheet.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>Let us know through our form if you are interested in joining 
                                MUCCamp 2022. Health forms are also needed and can be found here.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>Students must email or drop off immunization and/or medication 
                                list to info@midtownutica.org or to 43 Scott St.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>MUCC will have two days before camp where campers are required 
                                to come to MUCC to get covid tested. The dates are Friday 
                                7/29 at 4 pm and Saturday 7/30 at 10 am. If you cannot fill 
                                out the forms online, you are welcome to stop by MUCC during 
                                our office hours to fill out the forms in person.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>FORMS ARE DUE BY JULY 22ND</p>
                            <p>Attached is a packing list for MUCCamp.</p>
                        </div>
                        <br/><br/>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/packing-list.jpeg"/>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/muccamp-info.jpeg"/>
                            </div>
                        </div>
                        <br/><br/>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/muccamp-info-2.jpeg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='syep-body'>
            <div>
                <section className='container'>
                <div id='programs-blocks' className='row'>
                    <div className='programs-blocks-1 col'></div>
                    <div className='programs-blocks-2 col'></div>
                    <div className='programs-blocks-3 col'></div>
                    <div className='programs-blocks-4 col'></div>
                    <div id='syep-block' className='programs-blocks-5 col'></div>
                </div>
                </section>
                <div className='syep-grey-body'>
                    <div>
                        <h1>Summer Youth Employment Program 2022</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> For a successful SYEP application, 
                                all students must complete & obtain 
                                an application.
                            </p>
                            <p> *If you do not own a printer 
                                you can come to MUCC for a copy.
                            </p>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left">
                            <p id='programs-blue-txt'>THE APPLICATION MUST BE RETURNED TO:</p>
                            <p>
                                Oneida County Summer Youth Employment 
                                Program 
                            </p>
                            <p>
                                Oneida County Workforce Development 
                                209 Elizabeth St., 2nd Floor, Utica, NY 
                                13501 OR emailed to dmathis@ocgov.net
                            </p>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left">
                            <p id='programs-blue-txt'>ITEMS TO BRING:</p>
                        </div>
                        <div className='programs-links'>
                            <div class="scroll-reveal box left"><li>Working card</li></div>
                            <div class="scroll-reveal box left"><li>To get one, you must complete a working paper application and get a copy of your physical. After, you must bring that paperwork to your school nurse to get a working card.</li></div>
                            <div class="scroll-reveal box left"><li>*If you are 13 & 14, you must have a specific working card for this specific age group.</li></div>
                            <div class="scroll-reveal box left"><li>*If you are 15 & 16, you must have a specific working card for this specific age group.</li></div>
                            <div class="scroll-reveal box left"><li>*Once you turn 18, you do not need a working card anymore.</li></div>
                            <div class="scroll-reveal box left"><li>A parent or guardian</li></div>
                            <div class="scroll-reveal box left"><li>Birth certificate or passport or permanent residence card or citizenship certificate</li></div>
                            <div class="scroll-reveal box left"><li>Social Security Card</li></div>
                            <div class="scroll-reveal box left"><li>Report Card or Driver's License</li></div>
                            <div class="scroll-reveal box left"><li>Benefit/Food Stamp Card or parents' pay stubs</li></div>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left"><p id='programs-blue-txt'>FOR ANY QUESTIONS OR CONCERNS, PLEASE CONTACT HTOOKHU426@GMAIL.COM OR INFO@MIDTOWNUTICA.ORG</p></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <br/>
        <div id='mobile-screen-programs'>
        <section id='academics-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div id='academics-block' className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>   
                    </div>
                </section>
                <div className='academics-grey-body'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1>Tutoring</h1>
                                <div className='container'>
                                    <p id='educational-blue-line'></p>
                                </div>
                            </div>
                            <div id='tutoring-txt'>
                                <div class="scroll-reveal box left">
                                    <p> Many refugees struggle with succeeding at academic work because most of 
                                        them are not native English speakers and many of them did not have 
                                        high-quality schooling in the refugee camps where they used to live. 
                                        We work individually and in small groups with students of all ages and 
                                        levels to help them succeed with their homework, tests, state exams, 
                                        and presentations. We have a large group of volunteer tutors from all of 
                                        the area's high schools and colleges, and many of them are refugees 
                                        themselves. If you need some extra help with an academic challenge you 
                                        are facing, please contact us by sending an email to midtownutica@gmail.com. 
                                    </p>
                                </div>
                                <div class="scroll-reveal box left">
                                    <p> To assist the students of MUCC in their 
                                        academics, students from Hamilton College
                                        come and offer tutoring at MUCC every 
                                        Saturday at 10 AM.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <br/><br/>
                            <div id='tutoring-pic-body' className="col">
                                <div class="scroll-reveal box right">
                                    <img className="tutoring-pic" src="/assets/tutoring.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <h1>MUCCbots</h1>
                                <div className='container'>
                                    <p id='educational-blue-line'></p>
                                </div>
                            </div>
                            <div id='muccbots-txt'>
                                <div class="scroll-reveal box left">
                                    <p> MUCC offers a robotics team for youth 
                                        interested in STEM. Our team has competed 
                                        in several competitions throughout Upstate 
                                        NY. They are currently preparing for the 
                                        2022-2023 season. If interested in joining, 
                                        please contact us at midtownutica@gmail.com.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <br/>
                            <div id='muccbots-pic-body'>
                                <div class="scroll-reveal box right">
                                    <img className="muccbots-pic" src="/assets/muccbots.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='arts-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div id='arts-block' className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>    
                    </div>
                </section>
                <div className='arts-grey-body'>
                    <div>
                        <h1>Arts and Culture</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> Arts and culture are at the heart of what we do at MUCC. We promote dance, music, storytelling, theater, traditional dress, language acquisition, cultural festivals and practices. Cultural traditions also include jewelry making, henna, and other methods of beautification. We provide the space and supervision for community members to practice their crafts and prepare to share them with a wider audience. We help various ethnic groups organize New Years and other cultural festivals. We encourage community members to share their experiences and stories, and we connect them with opportunities to do so publicly. We seek outside grants and other resources to help support refugee and immigrant artists. Finally, we support and organize about 25-30 cultural events beyond the walls of MUCC, at music festivals, museums, schools, and universities.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className='mobile-screen-arts-pic'>
                        <div id='kidsattable-pic-body' className="col">
                            <div class="scroll-reveal box left">
                                <img className="kidsattable-pic" src="/assets/kidsattable.png"/>
                            </div>
                        </div>
                        <div id='kidsattable-pic-body' className="col">
                            <div class="scroll-reveal box left">
                                <img className="kidsattable-pic" src="/assets/dancinggirl.png"/>
                            </div>
                        </div>
                        <div id='redhoodieguy-pic-body' className="col">
                            <div class="scroll-reveal box left">
                                <img className="redhoodieguy-pic" src="/assets/redhoodieguy.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='health-body'>
            <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div id='health-block' className='programs-blocks-3 col'></div>
                        <div className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>  
                    </div>
                </section>
                <div className='health-grey-body'>
                    <div>
                        <h1>Health and Wellness</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> The community center is interested in promoting 
                                health and wellness for all of our community members, 
                                so we have initiated the following activities:
                            </p>
                        </div>
                        <div className='programs-links'>
                            <div class="scroll-reveal box left"><li>Basketball program</li></div>
                            <div class="scroll-reveal box left"><li>Curling Team</li></div>
                            <div class="scroll-reveal box left"><li>Gardening in raised beds and leading prevention efforts</li></div>
                            <div class="scroll-reveal box left"><li>Healthy food preparation</li></div>
                            <div class="scroll-reveal box left"><li>Partnerships with two nearby organic gardens that provide donated vegetable shares</li></div>
                            <div class="scroll-reveal box left"><li>Running team</li></div>
                            <div class="scroll-reveal box left"><li>Traditional and contemporary dance lessons and practices</li></div>
                            <div class="scroll-reveal box left"><li>Volleyball program</li></div>
                            <div class="scroll-reveal box left"><li>Yoga-stretching and breathing</li></div>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left"><p>Check out our calendar for dates and times!</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section id='muccamp-body'>
             <div>
                <section className='container'>
                    <div id='programs-blocks' className='row'>
                        <div className='programs-blocks-1 col'></div>
                        <div className='programs-blocks-2 col'></div>
                        <div className='programs-blocks-3 col'></div>
                        <div id='muccamp-block' className='programs-blocks-4 col'></div>
                        <div className='programs-blocks-5 col'></div>
                    </div>
                </section>
                <div className='mucc-grey-body'>
                    <div>
                        <h1>MUCCamp</h1>
                        <div className='container'>
                            <p id='muccamp-blue-line'></p>
                        </div>
                    </div>
                    <br/><br/>
                    <div id='muccamp-pic-body'>
                        <div class="scroll-reveal box bottom">
                            <img className="muccamp-pic" src="/assets/muccamp.png"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> MUCCamp is a week-long summer camp experience for 
                                the MUCC community to let loose and experience the 
                                Adirondacks with hiking, canoeing, swimming, bonfires, 
                                and much more.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p> Students must be high school age, vaccinated against covid-19,
                                and spots are on a first-come-first-served basis. Campers must 
                                fill out the application, the health form, and their parents 
                                need to review the info sheet.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>Let us know through our form if you are interested in joining 
                                MUCCamp 2022. Health forms are also needed and can be found here.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>Students must email or drop off immunization and/or medication 
                                list to info@midtownutica.org or to 43 Scott St.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>MUCC will have two days before camp where campers are required 
                                to come to MUCC to get covid tested. The dates are Friday 
                                7/29 at 4 pm and Saturday 7/30 at 10 am. If you cannot fill 
                                out the forms online, you are welcome to stop by MUCC during 
                                our office hours to fill out the forms in person.
                            </p>
                        </div>
                        <div class="scroll-reveal box left">
                            <p>FORMS ARE DUE BY JULY 22ND</p>
                            <p>Attached is a packing list for MUCCamp.</p>
                        </div>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/packing-list.jpeg"/>
                            </div>
                        </div>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/muccamp-info.jpeg"/>
                            </div>
                        </div>
                        <div id='muccamp-pic-body'>
                            <div class="scroll-reveal box bottom">
                                <img className="muccamp-pic" src="/assets/muccamp-info-2.jpeg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='syep-body'>
            <div>
                <section className='container'>
                <div id='programs-blocks' className='row'>
                    <div className='programs-blocks-1 col'></div>
                    <div className='programs-blocks-2 col'></div>
                    <div className='programs-blocks-3 col'></div>
                    <div className='programs-blocks-4 col'></div>
                    <div id='syep-block' className='programs-blocks-5 col'></div>
                </div>
                </section>
                <div className='syep-grey-body'>
                    <div>
                        <h1>Summer Youth Employment Program 2022</h1>
                        <div className='container'>
                            <p id='educational-blue-line'></p>
                        </div>
                    </div>
                    <div  id='overview-txt'>
                        <div class="scroll-reveal box left">
                            <p> For a successful SYEP application, 
                                all students must complete & obtain 
                                an application.
                            </p>
                            <p> *If you do not own a printer 
                                you can come to MUCC for a copy.
                            </p>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left">
                            <p id='programs-blue-txt'>THE APPLICATION MUST BE RETURNED TO:</p>
                            <p>
                                Oneida County Summer Youth Employment 
                                Program 
                            </p>
                            <p>
                                Oneida County Workforce Development 
                                209 Elizabeth St., 2nd Floor, Utica, NY 
                                13501 OR emailed to dmathis@ocgov.net
                            </p>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left">
                            <p id='programs-blue-txt'>ITEMS TO BRING:</p>
                        </div>
                        <div className='programs-links'>
                            <div class="scroll-reveal box left"><li>Working card</li></div>
                            <div class="scroll-reveal box left"><li>To get one, you must complete a working paper application and get a copy of your physical. After, you must bring that paperwork to your school nurse to get a working card.</li></div>
                            <div class="scroll-reveal box left"><li>*If you are 13 & 14, you must have a specific working card for this specific age group.</li></div>
                            <div class="scroll-reveal box left"><li>*If you are 15 & 16, you must have a specific working card for this specific age group.</li></div>
                            <div class="scroll-reveal box left"><li>*Once you turn 18, you do not need a working card anymore.</li></div>
                            <div class="scroll-reveal box left"><li>A parent or guardian</li></div>
                            <div class="scroll-reveal box left"><li>Birth certificate or passport or permanent residence card or citizenship certificate</li></div>
                            <div class="scroll-reveal box left"><li>Social Security Card</li></div>
                            <div class="scroll-reveal box left"><li>Report Card or Driver's License</li></div>
                            <div class="scroll-reveal box left"><li>Benefit/Food Stamp Card or parents' pay stubs</li></div>
                        </div>
                        <br/>
                        <div class="scroll-reveal box left"><p id='programs-blue-txt'>FOR ANY QUESTIONS OR CONCERNS, PLEASE CONTACT HTOOKHU426@GMAIL.COM OR INFO@MIDTOWNUTICA.ORG</p></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
    
        
    );
}

export default Programs;