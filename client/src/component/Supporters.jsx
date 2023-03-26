import React from 'react';
import { useEffect } from 'react';

const Supporters = () => {

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
        <h1>SUPPORTERS</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div className='container' id='overview-txt'>
        <p> We would like to offer our thanks to our
            generous supporters in our community, including
            the people and organizations
        </p>
        <div className='support-links'>
            <div class="scroll-reveal box left"><li>American Red Cross</li></div>
            <div class="scroll-reveal box left"><li>Annie's Fund</li></div>
            <div class="scroll-reveal box left"><li>Church of Our Lady of Lourdes</li></div>
            <div class="scroll-reveal box left"><li>CNY Arts</li></div>
            <div class="scroll-reveal box left"><li>Community Foundation of Herkimer and Oneida Counties</li></div>
            <div class="scroll-reveal box left"><li>Daniel Barden Mudfest</li></div>
            <div class="scroll-reveal box left"><li>Fort Stanwix National Monument</li></div>
            <div class="scroll-reveal box left"><li>Fr. Joe Salerno</li></div>
            <div class="scroll-reveal box left"><li>Jennifer Arlin</li></div>
            <div class="scroll-reveal box left"><li>John Ben Snow Foundation</li></div>
            <div class="scroll-reveal box left"><li>Judy Olney</li></div>
            <div class="scroll-reveal box left"><li>Karam Produce</li></div>
            <div class="scroll-reveal box left"><li>Lisa Lemieux</li></div>
            <div class="scroll-reveal box left"><li>Indium Corporation</li></div>
            <div class="scroll-reveal box left"><li>Macartney Family Foundation</li></div>
            <div class="scroll-reveal box left"><li>Oneida County</li></div>
            <div class="scroll-reveal box left"><li>Sam Braverman</li></div>
            <br/>
            <div class="scroll-reveal box left"><p>And many other generous individuals throughout our region</p></div>
        </div>
    </div>
    <br/>
</div>
        
    );
}

export default Supporters;