import React from 'react';
import { useEffect } from 'react';

const EducationalPartners = () => {

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
            <h1>EDUCATIONAL PARTNERS</h1>
            <div className='container'>
                <p id='educational-blue-line'></p>
            </div>
        </div>
        <div className='container' id='overview-txt'>
            <div class="scroll-reveal box left">
                <p> We currently collaborate with the following 
                    colleges and universities to reach community 
                    members, raise awareness for the community 
                    overall, and provide appropriate resources,
                    programming, and services. The list is growing
                    quickly, so we apologize if we have not included
                    your college or university yet.
                </p>
            </div>
            <div className='educational-links'>
                <div class="scroll-reveal box left">
                    <li>Colgate University</li>
                    <li>Hamilton College</li>
                    <li>Mohawk Valley Community College</li>
                    <li>Utica University</li>
                </div>
            </div>
        </div>
        <br/>
    </div>
            
    );
}

export default EducationalPartners;