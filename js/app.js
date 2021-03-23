/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//define function that we will use later to add the active class to the navbar link

function myfunction(activelink) {
    //creating object node list of links
    mya=document.querySelectorAll('a')
    mya.forEach( activa =>{
        //checking which link has the same text content of the active section
        if(activa.textContent==activelink){
            //if that is the link we will start removing the class from all links
            mya.forEach(remover =>{
                 remover.classList.remove('your-active-class')
        })
        //then adding the class 'your-active-class' to the link which his section is in view
        activa.classList.add('your-active-class')

    }

})
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//store the nav bar list into const 'ul'
const ul=document.getElementById("navbar__list");
//add class to the list to change it's style
ul.classList.add("bll")
//create object node list of sections to get into it, and create fragment to store li into it
const mysections=document.querySelectorAll('section');
const frag=document.createDocumentFragment();
//using loop 'foreach' to get into all  sections
mysections.forEach(Element =>{
    //creating li annd links to store section name into them 
    const newli= document.createElement('li')
    const newa= document.createElement('a')
    newa.textContent=Element.getAttribute('data-nav')
    //add the link to li and adding class to each li to add some style
    newli.appendChild(newa)
    newli.classList.add("cc")
    //add event listener to scroll into view the section which will be clicked in the nav bar
    newa.addEventListener('click', (e) => {
        e.preventDefault();
        Element.scrollIntoView({
            behavior: 'smooth'
        })
    }
    )
    //adding all li to the fragment
    frag.appendChild(newli)
}
)
//add the fragment to the nav bar list
ul.appendChild(frag);

//making the first link is the active link by default until scrolling or clicking on another link
const aaa=document.querySelector('a');
aaa.classList.add('your-active-class')


// Add class 'active' to section when near top of viewport

/*add event listner to add class to the section which  the user will see while scrolling
when the user start scrolling the loop will start to check which section is in view*/
document.addEventListener('scroll',()=> {
    mysections.forEach( activsec =>{
        //getting the bounding rect to check which section is in view
        let rect =activsec.getBoundingClientRect();
        if(rect.top >=0 && rect.top <= 300){
            //if that is the section we will start removing the class from all sections
            mysections.forEach(remover =>{
                remover.classList.remove('your-active-class')
            })
            //then adding the class 'your-active-class' to the section which is in view
            activsec.classList.add('your-active-class')
            /*calling the function which will add the class to link in navbar which has the same attribute of the active section
            passing the active section attribute*/
            myfunction(activsec.getAttribute('data-nav'))
        }
 
    })


})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


