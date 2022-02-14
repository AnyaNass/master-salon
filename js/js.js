$(".btn").click(function(){
	$(".input").toggleClass("active").focus;
	$(this).toggleClass("animate");
	$(".input").val("");
 });


$('.slider-slick').slick({
	mobileFirst: true,
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	  {
		 breakpoint: 992,
		 settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			// breakpoint: 992,
         // settings: "unslick"
		 }
	  },
	  {
		 breakpoint: 768,
		 settings: {
			slidesToShow: 3,
			 slidesToScroll: 3,
			 infinite: true,
		 }
	  },
	  {
		 breakpoint: 480,
		 settings: {
			slidesToShow: 2,
			 slidesToScroll: 2,
			 infinite: true,
		 }
	  }
	]
 });

var myInput = document.getElementById('myBasket')
myBasket.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var myInput = document.getElementById('singIn')
singIn.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


// $('.slider-slick').slick({
// 	mobileFirst: true,
// 	arrows: false,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	responsive: [
// 		 {
// 		 	breakpoint: 767,
// 		 	settings: "unslick"
// 	}		
// 	]
// });