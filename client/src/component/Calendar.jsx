import React from 'react';
import { useEffect } from 'react';

const Calendar = () => {

    useEffect(() => {            
        var show=function(t){t.style.display="block"},hide=function(t){t.style.display="none"},toggle=function(t){"block"!==window.getComputedStyle(t).display?show(t):hide(t)};document.addEventListener("click",function(t){if(t.target.classList.contains("toggle")){t.preventDefault();var e=document.querySelector(t.target.hash);e&&toggle(e)}},!1);
        
      }, []);
    return (
        <div>
            <div className='container'>
                <br/>
                <h1 id="overview-header-txt">CALENDAR</h1>
                <br/>
            </div>
            <div className='container' id='calendar-txt'>
                    <h3> Learn more about upcoming events and activities!
                    </h3>
                    <br/>
            </div>
            <div class="holder">
                <div class="switch">
                    <input id="optSwitch" type="checkbox" class="switch-toggle"/>
                    <label for="optSwitch" class="switch-label" switch-on="Activities" switch-off="General"></label>
                    <div id="box1" class="box">
                        <div id="calendarEmbedWrapper">
                            <iframe id="calendarEmbed" src='https://calendar.google.com/calendar/embed?src=moreno.dizdarevic%40gmail.com&ctz=America%2FNew_York'></iframe>
                        </div>                         
                    </div>
                    <div id="box2" class="box">
                        <div id="calendarEmbedWrapper">
                            <iframe id="calendarEmbed" src='https://calendar.google.com/calendar/embed?src=dizdarm%40sunypoly.edu&ctz=America%2FNew_York'></iframe>
                        </div>                     
                    </div>
                </div>
            </div>

            
            <br/><br/>
        </div>
    );
}

export default Calendar;