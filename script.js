

var i; 
var banner = document.querySelector('.banner-wrap')
var car2 = document.querySelector('.car2'); 

function initAnim() { 
  setInterval(() => { 
  for(i = 0; i < 4; i++) { 
    //update UI (by adding/removing classes)
    car2.classList.remove('car2-animate');
    car2.classList.add('car2-animate');
  }
}, 14000)
}



// Attempt 1

// var counter = 0; 
// var output; 

// function init() { 
//   output = document.getElementById("output"); 
//   setInterval(count, 15000);
// }

// function count() { 
//   counter++; 
  // output.innerHTML = counter; 
// }

