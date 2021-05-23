let greetings = document.getElementById('greetings');
let image = document.getElementById('cover');
let clockLabel = document.getElementById('date');
let left = document.querySelector('.left');
let search = document.getElementById("search");
let search_engine = undefined;
let inputBox = document.getElementById("input_box");
let error = document.getElementById('error');

image.style.borderRadius = data.image_radius;
image.style.filter = data.image_filter;
image.style.width = data.image_width;
image.style.height = data.image_width;
image.src = data.image_source;

left.style.borderSize = data.image_border;
left.style.borderColor = data.image_bordercolor;
left.style.borderRadius = data.image_radius;
left.style.width = data.image_width;
left.style.height = data.image_width;

// icons

if (data.enable_icons == true) {
    // jQuery
    $("a[href^='http']").each(function() {
        $(this).prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.href + '">');
    });
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
// see `today` at line 27

clockLabel.style.color = data.clock_fgcolor;
clockLabel.style.fontSize = data.clock_fontsize;

var hours = today.getHours();
var minutes = today.getMinutes();

if (today.getHours() < 10) {
    hours = "0" + today.getHours();
}

if (today.getMinutes() < 10) {
    minutes = "0" + date.getMinutes();
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
        error.classList.toggle('enabled');
        break;
}

search.action = search_engine;

// misc

document.title = data.title;
inputBox.placeholder = data.search_placeholder;

if (data.links_hover == true) {
    links = document.querySelectorAll(".column a");
    for (var i=0; i < links.length; i++) {
      links[i].classList.add("hover");
    }
}