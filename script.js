console.log("cek script");

const arr = [1, "elepant", false, {name: "muhammad"}]

// var
// const 
// let

const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

const slider = document.getElementsByClassName("slider")[0];

const sliderItem = slider.children; // [slider1, slider2, slider3]

var width = 0
var slide = false
var index = 0;

buttonNext.onclick = function() {
  slide = true
  for (let i = 0; i < sliderItem.length; i++) {
    const item = sliderItem[i];

    if (slide) {
      if (index < 2) {
        width -= item.clientWidth;
        slide = false;
        index++;
      }
    }

    item.style.transform = `translateX(${width}px)`;
  }
}

buttonPrev.addEventListener("click", function() {
  slide = true
  for (let i = 0; i < sliderItem.length; i++) {
    const item = sliderItem[i];

    if (slide) {
      console.dir(item)
      if (index > 0) {
        width += item.clientWidth;
        slide = false;
        index--;
      }
    }
    
    item.style.transform = `translateX(${width}px)`;
  }
})



// AJAX

const listContainer = document.getElementsByClassName("container")[0];

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    json.map(item => {
      listContainer.innerHTML += `
      <article>
        <div class="article-image">image</div>
        <div class="article-text">
          <h1>${item.title}</h1>
          <p>${item.title}</p>
          <button class="btn btn-primary">Baca selengkapnya...</button>
        </div>
      </article>
      `
    })
  })
