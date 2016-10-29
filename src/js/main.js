// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var index = 0;

var length = data.length - 1;

var changeImage = function() {
  if (index == length) { 
    document.querySelector(".next").classList.add("gone");
    document.querySelector(".rewind").classList.remove("gone");
  } else {
    document.querySelector(".next").classList.remove("gone");
    document.querySelector(".rewind").classList.add("gone");
  }
  if (index == 0) { 
    document.querySelector(".previous").classList.add("hidden");
  } else {
    document.querySelector(".previous").classList.remove("hidden");
  }
  document.querySelector(".index").innerHTML = `${index + 1} of ${data.length}`;
  if (document.querySelector(".visible")) document.querySelector(".visible").classList.remove("visible");
  document.querySelector(".img-" + index).classList.add("visible");

  document.querySelector(".caption").innerHTML = data[index].caption;
  // var img = document.createElement("img");
  // img.src = `./assets/${data[index].image}`;
  // img.onload = function() {
  //   var frame = document.querySelector(".image");
  //   frame.innerHTML = "";
  //   frame.appendChild(img);
  //   img.removeAttribute("height");
  // }
};

changeImage();

document.querySelector(".container").addEventListener("click", function(e) {
  if (e.target.classList.contains("next") && index < length) index += 1;
  if (e.target.classList.contains("previous") && index > 0) index -= 1;
  if (e.target.classList.contains("rewind")) index = 0;
  changeImage();
});