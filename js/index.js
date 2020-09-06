window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.cssText = "padding: 0px 10px; display: static; background: rgba(0,0,0,0.6)"
    document.getElementById("navbarResponsive").style.cssText = "padding: 0px 10px; display: static;"
    document.getElementById("navbarBrand").style.cssText = "margin-bottom: 15px;"
		document.getElementById("logo").style.cssText = "width: 100px";
		document.getElementById("navbar").classList.remove("flex-md-column")

  } else {
    document.getElementById("navbar").style.cssText = "padding: 80px 10px; display: flex;";
		document.getElementById("logo").style.cssText = "width:inherit;";
		document.getElementById("navbar").classList.add("flex-md-column")
  }
}

