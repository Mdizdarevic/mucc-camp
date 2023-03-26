import React from 'react';
import { useEffect } from 'react';

const Home = () => {

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
      <div>
      <div className="front">
        <img className="front-pic" src="/assets/homebgpic-1.jpeg"/>
          <div>
            <div id='home-text' className='row'>
                <div id='home-txt-mucc' className='col-lg-4'>
                    <h1 className="display-2">
                      <span>M</span>idtown <br/>
                      <span>U</span>tica <br/>
                      <span>C</span>ommunity <br/>
                      <span>C</span>enter
                    </h1>
                </div>
                  <div id='home-txt-bio' className='col-lg-8'>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <h3>A MULTICULTURAL AND REFUGEE-FRIENDLY PLACE THAT SERVES ALL </h3>        
                  </div>
            </div>
          </div>
          </div>
       <div>
        <div id='whoweare-body' className="container row">
          <div className="container col-lg-5">
            <h1>Who We Are</h1>
            <br/>
            <div className="container left" id='whoweare-txt'>
              <br/>
              <div class="scroll-reveal box left">
                <p> The Midtown Utica Community Center (MUCC) is an inclusive 
                    and multicultural community center in Utica, New York. We 
                    are anti-racist, multilingual, and refugee-friendly. Our 
                    programming is designed to enhance the safety, health, 
                    and educational opportunities of our diverse community. 
                </p>
               </div>
              <br/><br/>
              <div className='home-btn-body'>
                  <a href='/overview'><button type="submit" className="home-btn">Learn More</button></a>
              </div>
              <div className='container'>
                  <br/><br/>
                  <p id='blue-line'></p>
              </div>
            </div>
          </div>
          <div className="container col-lg-7">
            <div class="scroll-reveal box right">
              <img className="whoweare-pic" src="/assets/whoweare.png"/>
            </div>         
          </div>
        </div>
        <br/><br/><br/>
        <div className='container'>
          <div id='whatwedo-body' className="container row">
            <div id='whatwedo-pic-body' className="container col">
              <div class="scroll-reveal box left">
                <img className="whatwedo-pic" src="/assets/whatwedo.jpeg"/>
              </div>
            </div>
            <div className="col">
              <h1>What We Do</h1>
              <div className='container' id='whatwedo-txt'>
                <div class="scroll-reveal box right">
                  <br/>
                  <p> We facilitate connections between people, resources, 
                      and organizations according to the ever-evolving needs of
                      our community. In addition to providing space for cultural 
                      and wellness events, we design activities to help community 
                      members adapt to their environment, heal from trauma, and 
                      chart paths to success as they define it and on their terms. 
                  </p>
                </div>
                <div className='whatwedo-btn-body'>
                    <a href='/programs'><button type="submit" className="whatwedo-btn">Our Programs</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                <div id="testimonal-card" className='card'>
                  <img src="assets/khutest.png" className="card-img-top" alt="Card Image"/>
                  <div className="card-body d-flex flex-column">
                    <div class="scroll-reveal box left">
                      <blockquote>
                        Each person has a unique story about how MUCC has influenced them. I enjoy hearing how far people have come and their personal experiences growing up with the MUCC community.                  
                      </blockquote>
                      <p>- Khu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                <div id="testimonal-card" className='card'>
                  <img src="assets/ehtest.png" className="card-img-top" alt="Card Image"/>
                  <div className="card-body d-flex flex-column">
                    <div class="scroll-reveal box left">
                      <blockquote>
                        MUCC is for young people to aspire and develop new talents and socialize to a-fix a future.                    
                      </blockquote>
                      <p>- Eh Soe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 d-flex align-items-stretch">
                <div id="testimonal-card" className='card'>
                  <img src="assets/ehkatest.png" className="card-img-top" alt="Card Image"/>
                  <div className="card-body d-flex flex-column">
                    <div class="scroll-reveal box left">
                      <blockquote>
                        MUCCamp was a great experience, and camp food was pretty good compared to other camps I've been to.          
                      </blockquote>
                      <p>- Eh Ka Paw</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="get-involved" className='pt-5 pb-5'>
          <br/>
          <div className="container">
            <h1>Get Involved</h1>
            <div id='get-involved-txt'>
              <div class="scroll-reveal box left">
                <br/>
                <p> MUCC offers various programs and events every week.
                    Everything is open to the public and free! 
                </p>
                <p> Visit our  
                <span>
                  <a href='/calendar'>
                  &nbsp;calendar&nbsp;
                  </a>
                </span>
                to see what events are coming up!
                </p>
              </div>
            </div>
          </div>
          <br/>
        </section>
        <section id="support-us">
          <div className="support">
            <img className="support-pic" src="assets/support-us.jpeg"/>
            <div id='support-text'>
              <h1>Support Us </h1>    
              <div className='row py-5' id='support-btns'>
                <div id='donate-btn' className='col-lg-6'>
                  {/* <div class="scroll-reveal box left"> */}
                    <div className='container support-btn-body'>
                      <a href='https://secure.givelively.org/donate/midtown-utica-community-center?ref=ca8545b3-a601-4faf-bbec-1fd561eee2e3'><button type="submit" className="support-btn">Donate</button></a>
                    </div>
                  {/* </div> */}
                </div>
                <div id='volunteer-btn' className='col-lg-6'>
                  {/* <div class="scroll-reveal box right"> */}
                    <div className='container support-btn-body'>
                      <a href='/'><button type="submit" className="support-btn">Volunteer</button></a>
                    </div>
                  {/* </div> */}
                </div>
              </div>  
            </div>  
          </div>
        </section>
        </div> 
        </div>
    );
}

export default Home;