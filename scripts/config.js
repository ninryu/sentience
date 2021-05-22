// Main ----------------------------------------
let image = document.getElementById('cover');

image.style.borderRadius = data.image_radius;
image.style.filter = data.image_filter;
image.style.width = data.image_width;
image.style.height = data.image_width;
image.src = data.image_source;

let left = document.querySelector('.left');

left.style.borderSize = data.image_border;
left.style.borderColor = data.image_bordercolor;
left.style.borderRadius = data.image_radius;
left.style.width = data.image_width;
left.style.height = data.image_width;

// icons

if (data.enable_icons == true) {
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

var greetings = document.getElementById('greetings');

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

var date = new Date();

const label = document.getElementById('date');
label.style.color = data.clock_fgcolor;
label.style.fontSize = data.clock_fontsize;

const clock = () => {
    label.innerHTML = '<span>' + date.getHours() + ':' + date.getMinutes() + '</span>';
    setTimeout(clock, 1000);
};

if (data.clock == true) {
    window.onload = clock();
}


// search engine

let search_engine;

if (data.search_engine == "google") {
    search_engine = "https://google.com/search";
} else if (data.search_engine == "duckduckgo") {
    search_engine = "https://www.duckduckgo.com/"
} else if (data.search_engine == "qwant") {
    search_engine = "https://www.qwant.com/"
} else if (data.search_engine == "startpage") {
    search_engine = "https://www.startpage.com/search"
} else if (data.search_engine == "ecosia") {
    search_engine = "https://www.ecosia.org/search"
} else if (data.search_engine == "youtube") {
    search_engine = "https://www.youtube.com/search"
} else {
    document.getElementById('error').classList.toggle('enabled');
}

document.getElementById("search").action = search_engine;

// misc

document.title = data.title;
document.getElementById("input_box").placeholder = data.search_placeholder;