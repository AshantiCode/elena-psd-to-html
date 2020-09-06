//initialize Animate on Scroll
AOS.init({
	// offset: 120, // offset (in px) from the original trigger point
	delay: 250, // values from 0 to 3000, with step 50ms
	duration: 1100, // values from 0 to 3000, with step 50ms
	easing: 'ease-in-out', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// resize header incl navigation on scroll at device width= 768px and up
document.getElementById("navbar").classList.add("flex-md-column")
document.getElementById("navbar").style.cssText = "padding: 80px 10px; display: flex;";
document.getElementById("logo").style.cssText = "width:inherit;";
document.getElementById("navbar").classList.add("flex-md-column")
window.onscroll = function () { scrollFunction() };
const mq = window.matchMedia("(max-width: 768px)");

function scrollFunction() {
	// if smaller than 768px dont apply following rules
	if (mq.matches) {
		return
	}
	else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("navbar").style.cssText = "padding: 0px 20px; display: static; background: rgba(0,0,0,0.6)"
		document.getElementById("navbarResponsive").style.cssText = "padding: 0px 10px; display: static;"
		document.getElementById("navbarBrand").style.cssText = "margin-bottom: 15px;"
		document.getElementById("logo").style.cssText = "width: 100px";
		document.getElementById("navbar").classList.remove("flex-md-column");
	} else {
		document.getElementById("navbar").style.cssText = "padding: 80px 10px; display: flex;";
		document.getElementById("logo").style.cssText = "width:inherit;";
		document.getElementById("navbar").classList.add("flex-md-column")
	}
}





