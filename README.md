# Landing Page Project

## Abstract:
Project is landing page which has navigation bar at top and some sections at middle
 the navigation bar is built dynamicly and the active sections too

## Languages:
* HTML
* CSS
* JAVA SCRIPT

## Features:

*  All features are usable across modern desktop, tablet, and phone browsers.
*  There are 5 sections at the page.
*  While scrolling, styling has been added for active states dynamicly.
*  Navigation bar.
   *  Navigation is built dynamically as an unordered list.
   *  Can add new sections dynamically with no need to add them at the nav bar list
   *  It's clear which link at the navigation bar is active while scrolling
    * When clicking an item from the navigation menu, the link should scroll to the appropriate section.
 
 ## Functions:
  **First Function** to get into the sections and add their attributes to the navigation bar and when clicking an item from the navigation menu, the link should scroll to the appropriate section.

  ```js
  mysections.forEach(Element =>{
    const newli= document.createElement('li')
    const newa= document.createElement('a')
    newa.textContent=Element.getAttribute('data-nav')
    newli.appendChild(newa)
    newa.addEventListener('click', (e) => {
        e.preventDefault();
        Element.scrollIntoView({
            behavior: 'smooth'
        })
    })
 ```
**Second Function** while scrolling get into the sections and check which one is in view and make it clear as active section.
```js
 document.addEventListener('scroll',()=> {
    mysections.forEach( activsec =>{
        let rect =activsec.getBoundingClientRect();
        if(rect.top >=0 && rect.top <= 300){
            mysections.forEach(remover =>{
                remover.classList.remove('your-active-class')
            })
            activsec.classList.add('your-active-class')
            myfunction(activsec.getAttribute('data-nav'))
    }
    })
```    
**Last Function** to active the navigation bar link which has the same attribute as the active 
section.
```js
function myfunction(activelink) {
    mya=document.querySelectorAll('a')
    mya.forEach( activa =>{
        if(activa.textContent==activelink){
            mya.forEach(remover =>{
                 remover.classList.remove('your-active-class')
        })
        activa.classList.add('your-active-class')
    }
})
}
```
## Conclusion
This page will not need you to add the section staticaly but it is change it's style dynamicaly, adding the new section to the navigation bar dynamicaly and add the active section to be clear also dynamicaly.