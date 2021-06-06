// variables

let greetings = document.getElementById('greetings');
let image = document.getElementById('cover');
let clockLabel = document.getElementById('date');
let left = document.querySelector('.left');
let search = document.getElementById("search");
let search_engine = undefined;
let inputBox = document.getElementById("input_box");

// cover

image.style.filter = data.image_filter;
image.style.width = data.image_width;
image.style.height = data.image_width;
image.src = data.image_source;

left.style.borderWidth = data.image_border;
left.style.borderColor = data.image_bordercolor;
document.querySelector('meta[name="theme-color"]').setAttribute('content',  data.image_bordercolor);
left.style.borderRadius = data.image_radius;
left.style.width = data.image_width;
left.style.height = data.image_width;

// icons

if (data.enable_icons == true) {
    const target = document.querySelectorAll('.container a');

    for(var i = 0; i < target.length; i++){
        target[i].innerHTML = '<img src="https://www.google.com/s2/favicons?domain=' + target[i].href + '">' + target[i].textContent
    }
}

// greetings

let today = new Date();
let hour = today.getHours();

var g1 = data.g1;
var g2 = data.g2;
var g3 = data.g3;
var g4 = data.g4;

if (hour >= 23 && hour < 5) {
    greetings.innerText = g1;
} else if (hour >= 6 && hour < 12) {
    greetings.innerText = g2;
} else if (hour >= 12 && hour < 17) {
    greetings.innerText = g3;
} else {
    greetings.innerText = g4;
}

greetings.style.fontSize = data.greeting_fontsize;
greetings.style.color = data.greeting_fgcolor;

// clock
// see `today`

clockLabel.style.color = data.clock_fgcolor;
clockLabel.style.fontSize = data.clock_fontsize;

var hours = today.getHours();
var minutes = today.getMinutes();

if (today.getHours() < 10) {
    hours = "0" + today.getHours();
}

if (today.getMinutes() < 10) {
    minutes = "0" + today.getMinutes();
}

const clock = () => {
    clockLabel.innerHTML = '<span>' + hours + ':' + minutes + '</span>';
};

if (data.clock == true) {
    window.onload = clock();
}

// search engine

switch (data.search_engine) {
    case "google":
        search_engine = "https://google.com/search";
        break;
    case "duckduckgo":
        search_engine = "https://www.duckduckgo.com/"
        break;
    case "qwant":
        search_engine = "https://www.qwant.com/"
        break;
    case "startpage":
        search_engine = "https://www.startpage.com/search"
        break;
    case "ecosia":
        search_engine = "https://www.ecosia.org/search"
        break;
    case "youtube":
        search_engine = "https://www.youtube.com/search"
        break;
    default:
        console.log("Please, choose a search engine from the list.")
        break;
}

search.action = search_engine;

// keybindings

document.onkeydown = function(e) {
    switch(e.which) {
        // open search box by pressing `/`
        case 191:
            if (inputBox !== document.activeElement) {
                inputBox.select();
                e.preventDefault();   
            }
            break;

        // switch light/dark mode by pressing `ctrl + m`
        case e.ctrlKey && 77:
            mode = localStorage.getItem("mode");
            if (mode != "istrue") {
              localStorage.setItem("mode", "istrue");
              body.classList.add("light");
            } else {
              localStorage.setItem("mode", null);
              body.classList.remove("light");
            }
            // ctrl + m mutes the tab, this blocks this behavior
            e.preventDefault();

        default: return;
    }
};

// misc

document.title = data.title;
inputBox.placeholder = data.search_placeholder;

if (data.links_hover == true) {
    links = document.querySelectorAll(".column a");
    for (var i=0; i < links.length; i++) {
      links[i].classList.add("hover");
    }
}