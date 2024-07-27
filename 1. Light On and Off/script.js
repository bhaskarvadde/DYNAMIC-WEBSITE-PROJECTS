function switchoff(){
   document.getElementById("bulb-img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
   document.getElementById("cat-img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
   document.getElementById("off-switch-btn").style.backgroundColor = "#cbd2d9"
   document.getElementById("on-switch-btn").style.backgroundColor = "#22c55e"
   document.getElementById("switch-status").textContent = "Switched Off"
}

function switchon(){
   document.getElementById("bulb-img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   document.getElementById("cat-img").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   document.getElementById("off-switch-btn").style.backgroundColor = "red"
   document.getElementById("on-switch-btn").style.backgroundColor = "#cbd2d9"
   document.getElementById("switch-status").textContent = "Switched On"
}