import { useEffect } from 'react';
import {React, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import mapData from './data.json';
import icon1 from './map_pin.png';
import './map.css';

const Map = () => {
    

    const mapIcon = new Icon({
        iconUrl: icon1,
        iconSize: [25, 25]
      })

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

      const [ activeMap, setActiveMap ] = useState( null );

    return (
        <div>
            <MapContainer 
                center = { [ 20.0,0.0 ] }
                zoom = { 2 }
                scrollWheelZoom = { true } 
            >
                {/* DARK MODE */}

                {/* <TileLayer 
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                /> */}

                {/* LIGHT MODE */}

                <TileLayer 
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    
                { mapData.map(eachData => (
                    <Marker 
                        key={eachData.Id} 
                        position= {[eachData.Latitude, eachData.Longitude]}
                        eventHandlers={{
                        click: () => {
                            setActiveMap(eachData)
                        }
                        }}
                        icon= {mapIcon}
                    />
                ))}

                { activeMap && (
                    <Popup 
                        position={ [ activeMap.Latitude, activeMap.Longitude ] }
                        onClose={()=>{
                            setActiveMap(null)
                        }}
                    >
                    <div id='map-popup-description'>
                        <h3>{ activeMap.Location }</h3>
                            <p id='map-blue-line'></p>
                        <p> { activeMap.Description }</p>
                    </div>
                    </Popup>
                )}

            </MapContainer> 
        </div> 
        
    );
}

export default Map;