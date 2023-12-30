let togglebtn = document.getElementById('toggle-btn')
let search_icon = document.getElementById('search_icon')
let form = document.getElementById('form_for_search')

// togglebtn.addEventListener('click',function(e) {
//     e.preventDefault();
//     document.body.classList.toggle('dark')
//     if (body.classList.contains('dark')) {
//       	togglebtn.innerText = 'light'
//         document.documentElement.style.setProperty('--text-color', '#fff');
//         document.documentElement.style.setProperty('--border-color', '#fff');
//         document.documentElement.style.setProperty('--bg-color', '#fff');
//     } else {
// 		togglebtn.innerText = 'dark'
//         document.documentElement.style.setProperty('--text-color', '#000');
//         document.documentElement.style.setProperty('--border-color', '#fff');
//         document.documentElement.style.setProperty('--bg-color', '#000');
//     }
// })

search_icon.addEventListener('click', function(e){
    form.classList.toggle('search-active');
})






var specialButtons = document.querySelectorAll('.special-button');
      
specialButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
    });
});


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

document.querySelectorAll(".special").forEach(element => {
  element.onmouseover = event => {
    let iteration = 0;
  
    clearInterval(intervals[element.dataset.index]);
  
    intervals[element.dataset.index] = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(intervals[element.dataset.index]);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  // Set a unique index for each element
  element.dataset.index = intervals.length;
});


const text = 'VERTICAL';

  const container = document.getElementById('verticalAlignContainer');

  // Split the text into an array of letters
  const letterss = text.split('');

  // Create a span element for each letter and append it to the container



$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed:1000,
	dots:true,
	responsive: [
		{
		  breakpoint: 769,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
			breakpoint: 501,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  autoplaySpeed:500,
			}
		  },
	  ]
});


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    const linkElements = document.querySelectorAll('.links');
    linkElements.forEach((link, index) => {
        link.addEventListener('click', function(e){
            mobile_menu.classList.remove('is-active');
            menu_btn.classList.remove('is-active');
        })
    });
});



$('#shirt-carousel').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed:1000,
	dots:true,
})