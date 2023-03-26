import React from 'react';
import { useEffect } from 'react';

const News = () => {

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
        <div id='gallery-body'>
            {/* <div className='container'>
                <br/>
                <h1 id="overview-header-txt">PHOTO GALLERY</h1>
                <br/>
            </div> */}
            <div id="newsletterEmbedWrapper">
                <iframe id="newsletterEmbed" src='https://mailchi.mp/996b738e1c47/mucc-spring-2022-newsletter-5826167?e=06214009e9'></iframe>
            </div>

        </div>
        
    );
}

export default News;