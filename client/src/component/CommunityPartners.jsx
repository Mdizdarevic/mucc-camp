import React from 'react';
import { useEffect } from 'react';

const CommunityPartners = () => {

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
            <h1>COMMUNITY PARTNERS</h1>
            <div className='container'>
                <p id='educational-blue-line'></p>
            </div>
        </div>
        <div className='container' id='community-txt'>
            <div class="scroll-reveal box left">
                <p> We currently collaborate with the following
                    groups and organizations to reach community
                    members, raise awareness for the community
                    overall, and provide appropriate resources,
                    programming, and services. The list is growing
                    quickly, so we apologize if we have not included
                    your organization yet.
                </p>
            </div>
            <div className='educational-links'>
                <div class="scroll-reveal box left"><li>American and Refugee Students for a Closer Connection (Student Club)</li></div>
                <div class="scroll-reveal box left"><li>Bhutanese-Nepali Folk Collective</li></div>
                <div class="scroll-reveal box left"><li>Boilermaker Running Race</li></div>
                <div class="scroll-reveal box left"><li>Buddha Dama Thuka Temple</li></div>
                <div class="scroll-reveal box left"><li>Burmese Christian Fellowship</li></div>
                <div class="scroll-reveal box left"><li>Camp Nazareth</li></div>
                <div class="scroll-reveal box left"><li>Common Thread Farm</li></div>
                <div class="scroll-reveal box left"><li>Falling Leaves Running Race</li></div>
                <div class="scroll-reveal box left"><li>Fort Stanwix National Monument</li></div>
                <div class="scroll-reveal box left"><li>Indian Cultural Association in Vestal, NY</li></div>
                <div class="scroll-reveal box left"><li>Karen Don Dancers of Utica</li></div>
                <div class="scroll-reveal box left"><li>Latino Harvest Church</li></div>
                <div class="scroll-reveal box left"><li>Leatherstocking Ballet</li></div>
                <div class="scroll-reveal box left"><li>Little Free Library</li></div>
                <div class="scroll-reveal box left"><li>Mohawk Valley Latino Association</li></div>
                <div class="scroll-reveal box left"><li>Munson-Williams-Proctor Art Institute</li></div>
                <div class="scroll-reveal box left"><li>National Geographic</li></div>
                <div class="scroll-reveal box left"><li>Nepali Calvary Harvest Church</li></div>
                <div class="scroll-reveal box left"><li>New Hartford Honors Association</li></div>
                <div class="scroll-reveal box left"><li>Old Path Farm</li></div>
                <div class="scroll-reveal box left"><li>On Point for College</li></div>
                <div class="scroll-reveal box left"><li>Oneida County History Center</li></div>
                <div class="scroll-reveal box left"><li>Potato Hill Farm (Black River Outdoor Education Program)</li></div>
                <div class="scroll-reveal box left"><li>Refugees Starting Over in Utica, NY Project (SUNY Poly College of Arts and Sciences)</li></div>
                <div class="scroll-reveal box left"><li>Somali-Bantu CEO Dancers</li></div>
                <div class="scroll-reveal box left"><li>The Landmarks Society of Greater Utica</li></div>
                <div class="scroll-reveal box left"><li>Utica Bike Rescue</li></div>
                <div class="scroll-reveal box left"><li>Utica Tango Society</li></div>
                <div class="scroll-reveal box left"><li>Utica Teachers Association</li></div>
                <div class="scroll-reveal box left"><li>Utica Zoo</li></div>
            </div>
        </div>
        <br/>
    </div>
            
            
    );
}

export default CommunityPartners;