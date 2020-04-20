<<<<<<< HEAD


const quotes = [
  {
    quote: "Nothing will work unless you do",
    source: "Maya Angelou",
    bg: "#0335fc",
    year:"2011",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    bg: "#000000",
    year:"2006",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Whether You Think You Can Or Think You Cant, You’re Right",
    source: "Henry Ford",
    bg: "#00942c",
    year:"2008",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
    bg: "#00947b",
    year:"2005",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    bg: "#930045",
    year:"2015",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
    bg: "#946300",
    year:"2019",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: "John Lennon",
    bg: "#9c2c00",
    year:"2017",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    source: "Albert Einstein",
    bg: "#323232",
    year:"2010",
    citation:"Wikipidia",
    tags:"motivational, inspirational"
  }
];

/**
 * Gets a random quote from the array of quotes.
 *
 * @returns {Array} The quote along with all of its meta data.
 */

function getRandomQuote(){

  // Generates a random number upto the number of quotes available.
  let random_number = Math.floor(Math.random() * quotes.length);
  // Uses the generated number to find individual pieces of data about the quote.
  let quote = `${quotes[random_number].quote}`;
  let source = `${quotes[random_number].source}`;
  let citation = `${quotes[random_number].citation}`;
  let year = `${quotes[random_number].year}`;

  let output = [quote,source,citation,year]

  // Changes the background colour to that of the one associated with the quote.
  let x = document.getElementById("particles-js");
  x.style.backgroundColor = `${quotes[random_number].bg}`;

  return output;




}


/**
 * Prints the random quote to the page along with source +
 *
 * @returns {Array} The quote along with all of its meta data.
 */


function printQuote(){
  // Stores returned output from "getRandomQuote" function in variable "quote"
  const quote = getRandomQuote();
  // Prints all quote information in html format to given divs.
  document.getElementById("quote").innerHTML = `${quote[0]}`;
  document.getElementById("source").innerHTML = `${quote[1]} - ${quote[2]} - ${quote[3]}`;

}


// Re runs the printQuote function every 5200 milliseconds.
window.setInterval(function(){
  printQuote ();
}, 5200);



// Background geometry script
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


=======
/**
 * Gets a random quote from the array of quotes.
 *
 * @returns {Array} The quote along with all of its meta data.
 */


function getRandomQuote(){
    let quotes = [
      {
        quote: "Nothing will work unless you do",
        source: "Maya Angelou",
        bg: "#0335fc",
        year:"2011",
        citation:"Wikipidia",
        tags:"motivational, inspirational"
      },
      {
        quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
        source: "Will Rogers",
        bg: "#000000",
        year:"2006",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "Whether You Think You Can Or Think You Cant, You’re Right",
        source: "Henry Ford",
        bg: "#00942c",
        year:"2008",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "Get busy living or get busy dying.",
        source: "Stephen King",
        bg: "#00947b",
        year:"2005",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        source: "Mae West",
        bg: "#930045",
        year:"2015",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "Get busy living or get busy dying.",
        source: "Stephen King",
        bg: "#946300",
        year:"2019",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "Life is what happens when you’re busy making other plans.",
        source: "John Lennon",
        bg: "#9c2c00",
        year:"2017",
        citation:"Wikipidia",
        tags:""
      },
      {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        source: "Albert Einstein",
        bg: "#323232",
        year:"2010",
        citation:"Wikipidia",
        tags:""
      }
    ];
    // Generates a random number upto the number of quotes available.
    let random_number = Math.floor(Math.random() * quotes.length);
    // Uses the generated number to find individual pieces of data about the quote.
    let quote = `${quotes[random_number].quote}`;
    let source = `${quotes[random_number].source}`;
    let citation = `${quotes[random_number].citation}`;
    let year = `${quotes[random_number].year}`;

    let output = [quote,source,citation,year]

    // Changes the background colour to that of the one associated with the quote.
    let x = document.getElementById("particles-js");
    x.style.backgroundColor = `${quotes[random_number].bg}`;

  return output;




}


/**
 * Prints the random quote to the page along with source +
 *
 * @returns {Array} The quote along with all of its meta data.
 */


function printQuote(){
  // Stores returned output from "getRandomQuote" function in variable "quote"
  const quote = getRandomQuote();
  // Prints all quote information in html format to given divs.
  document.getElementById("quote").innerHTML = `${quote[0]}`;
  document.getElementById("source").innerHTML = `${quote[1]} - ${quote[2]} - ${quote[3]}`;

}


// Re runs the printQuote function every 5200 milliseconds.
window.setInterval(function(){
    printQuote ();
}, 5200);



// Background geometry script
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


>>>>>>> d1a82e9ae34710078eb9dbacf9607659027b48b5
