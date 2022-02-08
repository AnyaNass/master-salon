$(".btn").click(function(){
	$(".input").toggleClass("active").focus;
	$(this).toggleClass("animate");
	$(".input").val("");
 });



$('.slider-slick').slick({
	mobileFirst: true,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: "unslick"
		}
	]
});


var myInput = document.getElementById('myBasket')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var myInput = document.getElementById('singIn')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


