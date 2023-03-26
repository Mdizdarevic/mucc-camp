import React from 'react';
import { useEffect } from 'react';

const CommunityResources = () => {

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
        <h1>CULTURAL RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>IRISH CULTURAL CENTER</p>
            <p className='scholarships-bio'>Contact: 315-733-4228</p>
            <p className='scholarships-bio'>623 Columbia St, Utica, NY 13502</p>
        </div>
    </div>
    <br/> 
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>ITALIAN HERITAGE CLUB</p>
            <p className='scholarships-bio'>Contact: 315-733-6106</p>
        </div>
    </div>
    <br/> 
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>JEWISH COMMUNITY CENTER ASSOCIATION</p>
            <p className='scholarships-bio'>Contact: 315-733-2343</p>
            <p className='scholarships-bio'>2310 Oneida St, Utica, NY 13501</p>
        </div>
    </div>
    <br/> 
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>MYANMAR MUSLIM COMMUNITY OF UTICA (DA DA PU SUFI CENTER) INC.</p>
            <p className='scholarships-bio'>Contact: 315-733-2343</p>
            <p className='scholarships-bio'>781 Lansing St, Utica, NY 13501</p>
        </div>
    </div>
    <br/> 
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>UTICA MASJID (MUSLIM COMMUNITY ASSOCIATION OF MOHAWK VALLEY)</p>
            <p className='scholarships-bio'>Contact: 315-507-6270</p>
            <p className='scholarships-bio'>1631 Kemble St, Utica NY 13501</p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>MOHAWK VALLEY SOMALI BANTU COMMUNITY ASSOCIATION</p>
            <p className='scholarships-bio'>Contact: 315-601-0363</p>
            <p className='scholarships-bio'>615 Elizabeth St, Utica, NY 13501</p>
        </div>
    </div>
    <br/>  
     <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>POLISH COMMUNITY CLUB</p>
            <p className='scholarships-bio'>Contact: 315-723-0089</p>
            <p className='scholarships-bio'>810 Columbia St, Utica, NY 13502</p>
        </div>
    </div>
    <br/> 
    <div className='container'>
        <br/><br/>
        <h1>HEALTH-RELATED RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>COMMUNITY HEALTH AND BEHAVIORAL SERVICES (UPSTATE CEREBRAL PALSY)</p>
            <p className='scholarships-bio'>
                Community Health and Behavioral Services 
                (CHBS) provide children and adults a continuum
                of care that focuses on the patient as a whole,
                from physical wellness to better mental health.
                CHBS provides comprehensive healthcare for the 
                individual and family integrating clinical and
                behavioral health services. Visit their website
                here for more information.
            </p>
        </div>
    </div>
    <br/>  
     <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>REGIONAL PRIMARY CARE NETWORK (RPCN)</p>
            <p className='scholarships-bio'>
                The mission of Mosaic Health is to provide access to
                compassionate, individualized health care and 
                wellness-related education for everyone, regardless
                of financial, cultural, or social barriers. It is 
                the vision of Mosaic Health to be the medical/dental
                home of choice in upstate New York and to create 
                healthy communities in which health disparities 
                are diminished and there is access to care for 
                all. Visit their website here for more information.
            </p>
        </div>
    </div>
    <br/> 
    <div className='container'>
        <br/><br/>
        <h1>HOUSING RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>COMMUNITY HEALTH AND BEHAVIORAL SERVICES (UPSTATE CEREBRAL PALSY)</p>
            <p className='scholarships-bio'>
                Community Health and Behavioral Services 
                (CHBS) provide children and adults a continuum
                of care that focuses on the patient as a whole,
                from physical wellness to better mental health.
                CHBS provides comprehensive healthcare for the 
                individual and family integrating clinical and
                behavioral health services. Visit their website
                here for more information.
            </p>
        </div>
    </div>
    <br/>  
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>REGIONAL PRIMARY CARE NETWORK (RPCN)</p>
            <p className='scholarships-bio'>
                The mission of Mosaic Health is to provide access to
                compassionate, individualized health care and 
                wellness-related education for everyone, regardless
                of financial, cultural, or social barriers. It is 
                the vision of Mosaic Health to be the medical/dental
                home of choice in upstate New York and to create 
                healthy communities in which health disparities 
                are diminished and there is access to care for 
                all. Visit their website here for more information.
            </p>
        </div>
    </div>
    <br/> 
    <div className='container'>
        <br/><br/>
        <h1>LAW-RELATED RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>HISCOCK LEGAL AID SOCIETY</p>
            <p className='scholarships-bio'>
                The Hiscock Legal Aid Society promotes 
                the fundamental right of every person to 
                equal justice under the law by providing 
                high-quality legal assistance to individuals
                and families in need in Onondaga County and 
                the surrounding region. The Hiscock Legal Aid
                Society strives to ensure that no one in our 
                community is denied justice because of a lack
                of means. Visit their website here for more 
                information.
            </p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>THE LEGAL AID SOCIETY OF MID-NEW YORK, INC.</p>
            <p className='scholarships-bio'>
                The Legal Aid Society of Mid New York, Inc., is 
                a not-for-profit law office. They provide free
                counsel, advice, and legal representation in 
                civil matters. Their service area spans 13 counties
                across central New York State. They help families
                and individuals receive social security disability 
                benefits, survivors of violence in family court, 
                and senior citizens with elder law and estate 
                planning. They also help people stay in their 
                homes with mortgage and foreclosure counsel and 
                advice. Visit their website here for more information.
            </p>
        </div>
    </div>
    <br/>
    <div className='container'>
        <br/><br/>
        <h1>REFUGEE RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>MOHAWK VALLEY RESOURCE CENTER FOR REFUGEES (MVRCR)</p>
            <p className='scholarships-bio'>
                The Mohawk Valley Resource Center for Refugees 
                provides assistance to refugees and immigrants. 
                MVRCR welcomes all newcomers with open arms and
                also provides the resources you need to live and 
                work successfully in the Mohawk Valley region. 
                They are here to help the whole community. 
                Their goal is to assist you throughout the 
                integration process by offering products and 
                services that enable us to build a community 
                with many cultures together. Visit their website 
                here for more information.
            </p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>REFUGEES STARTING OVER IN UTICA, NY</p>
            <p className='scholarships-bio'>
                Starting Over is a project that celebrates 
                and shares the stories of refugee resettlement
                in Utica, NY. It is run by Kathryn Stam, 
                Assoc. Prof. of Anthropology at SUNY 
                Polytechnic Institute. Please contact Dr. 
                Stam by email: stamk@sunyit.edu or visit their 
                Facebook page here for more information.
            </p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>USAHELLO</p>
            <p className='scholarships-bio'>
                USAHello is a non-profit organization that 
                uses the power of the internet to help 
                immigrants, asylum seekers, refugees, and
                the communities that welcome them build brighter
                futures for themselves and their families. 
                USAHello's platform serves as a hub for trustworthy
                information and educational resources visited by 
                hundreds of thousands of people from diverse 
                backgrounds every year. Their information is 
                written in plain English and translated into 
                additional languages to ensure it is accessible 
                to as many people as possible. Visit their website 
                here for more information.
            </p>
        </div>
    </div>
    <br/>
    <div className='container'>
        <br/><br/>
        <h1>OTHER RESOURCES</h1>
        <div className='container'>
            <p id='educational-blue-line'></p>
        </div>
    </div>
    <div id='jobs-links' className='container'>
        <br/>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>MOHAWK VALLEY COMMUNITY ACTION AGENCY (MVCAA)</p>
            <p className='scholarships-bio'>
                Mohawk Valley Community Action is the frontline resource 
                for people living in poverty in Oneida and Herkimer 
                Counties, providing direct services and support for 
                education, employment, and family support services. For 
                anyone living in the Mohawk Valley, whether they were 
                raised in poverty, or suddenly find themselves there 
                due to unemployment, disability, or a change in the 
                household, Mohawk Valley Community Action can help 
                assist them. For over 50 years, Mohawk Valley Community
                Action has served as the hub connecting local people 
                living in poverty with Early Head Start, Head Start, and
                Universal Pre-K, utility assistance, tax preparation; 
                Housing Assistance, Senior Services, Weatherization, 
                Foster Grandparents, and Youth Services. Visit their 
                website here for more information.
            </p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>ONPOINT FOR COLLEGE</p>
            <p className='scholarships-bio'>
                On Point for College is a nationally-recognized 
                college attainment program. It was founded in 
                1999 to help first-generation students gain 
                access to college. In the years since, it has 
                expanded its offerings to include college success
                (completion) support, career planning and placement
                support, and most recently, support with non-college
                post-secondary credential attainment. On Point 
                services are 100% free and available to students of 
                all ages, backgrounds, and educational levels. On 
                Point specializes in helping high school students 
                and recent graduates, as well as those who have 
                been away from school for a while or who have earned
                GED or HSE credentials. Visit their website here 
                for more information.
            </p>
        </div>
    </div>
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>THE NEIGHBORHOOD CENTER</p>
            <p className='scholarships-bio'>
                The Neighborhood Center seeks to enrich the lives
                of individuals and families through cooperative 
                opportunities, resources, and advocacy that embrace
                diversity, promote empowerment, and foster 
                responsible citizenship. Visit their website here 
                for more information.
            </p>
        </div>
    </div>  
    <br/>
    <div id='jobs-links' className='container'>
        <div class="scroll-reveal box left">
            <p className='jobs-title'>WOMEN'S EMPLOYMENT AND RESOURCE CENTER (WERC)</p>
            <p className='scholarships-bio'>
                The Women's Employment & Resource Center provides 
                job readiness services to women throughout the 
                region. WERC provides specialized training 
                programs and one-on-one personal assistance, 
                including resume and cover letter preparation, 
                job search assistance, computer skills training,
                as well as Microsoft Office applications, interviewing
                techniques, customer service training, and many more 
                workshops that build confidence and strengthen skills.
                Visit their website here for more information.
            </p>
        </div>
    </div>  
</div>
        
    );
}

export default CommunityResources;