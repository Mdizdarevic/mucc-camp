import React from 'react';
import { useEffect } from 'react';

const Overview = () => {

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
        <div id='overview-body'>
    <div className='container'>
        <br/>
        <h1 id="overview-header-txt">Overview</h1>
        <h1>Our Story</h1>
        <div className='container'>
            <p id='our-story-blue-line'></p>
        </div>
    </div>
    <div className='container' id='overview-txt'>
        <div class="scroll-reveal box left">
            <p> For more than 200 years, Utica has had a rich 
                tradition of welcoming immigrants and refugees 
                into our city and incorporating their culture 
                into that of our own. However, many refugees 
                struggle with language obstacles, poverty, the 
                consequences of trauma, and cultural
                misunderstandings for years after their 
                resettlement. MUCC addresses the problems of 
                refugees' adaptation to their new home and 
                inadequate access to services that they need. 
                We provide opportunities for the wider community 
                to learn from and build relationships with our 
                multicultural neighbors. Our organization extends
                the welcoming feeling beyond the initial period
                and facilitates integration and maintenance of
                culture.
            </p>
        </div>
    </div>
    <br/>
    <div className='container' id='overview-ourstory-img'>
        <img src='assets/ourstory-img.jpeg'/>
    </div>   
    <section id='overview-gray-section'></section>
    <div id='ourmission' className='container'>
        <div className="row">
            <div id='col-left' className="col-lg-7">
            <br/><br/>
                <div class="scroll-reveal box left">
                    <img id='ourmission-img' src="/assets/ourmission.png"/>
                </div>
            </div>
            <div id='col-right' className="col-lg-5">
                <h1>Our Vision</h1>
                <div className='container'>
                    <p id='our-mission-blue-line'></p>
                </div>
                <div id='ourmission-txt-body'>
                    <div class="scroll-reveal box right">
                        <p id='ourmission-txt'>The Midtown Utica Community Center (MUCC) 
                            is an inclusive multicultural and refugee-friendly 
                            space in Utica, New York. 
                        </p>
                        <p id='ourmission-txt'> Our programming is designed 
                            to enhance the safety, health, and educational 
                            opportunities of our diverse community. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className='container' id='ourmission-gray-section'></section>
</div>
        
    );
}

export default Overview;