<h1 align="center">startpage
<p align="center">
<img src="https://img.shields.io/github/license/alededorigo/kanji?color=%23cd58f4&style=flat">
<img src="https://img.shields.io/github/v/release/alededorigo/kanji?color=ee4f84&include_prereleases&style=flat">
<img src="https://img.shields.io/github/last-commit/alededorigo/kanji?color=%231ce590&style=flat">
</p>
</h1>


<br />

# A startpage for the browser
  
## Release 2.5 <img alt="" align="right" src="https://img.shields.io/github/repo-size/alededorigo/kanji?color=%2358d0f4&style=flat"/>

<a href="https://github.com/Alededorigo/Kanji/releases/tag/2.5">
  <img style="border-radius: 4px" src="https://res.cloudinary.com/dn3cdvdix/image/upload/v1621709359/cover.png" alt="preview" align="right" width="400px"/>
</a>


Changelog <kbd>version 2.5</kbd>:
* Website list can automatically find favicons
* Removed null links
* Hover effect on links, and focus on inputbar
* Fixed image border in `config.js`
* Fixed image padding in `style.css`
* Fixed clock showing only one number

<br />
<br />
<br />

## <a href="https://alededorigo.github.io/startpage/">🚀️ Demo on Github Pages</a>

<br />
<br />
<br />

<img style="border-radius: 4px" src="https://res.cloudinary.com/dn3cdvdix/image/upload/v1615300936/preview_nosmbp.gif" alt="screenshot"/>

## Extensions:
* For Firefox use "Custom New Tab Page"
* For Chrome use "Custom New Tab"

## Usage:
- On the new tab: use one of the [extensions](#extensions) mentioned

- On the home page:
    * Firefox: Go into
    ```Preferences > Home > Homepage and new windows```
    > or editing the `prefs.js` file
    ```js
    67 | user_pref("browser.startup.homepage", "/path/to/index.html");
    ```
    > to open the page, go into `about:profiles`, and open your profile directory
    * Chrome: Go into
    ``` Options > Start > Homepage```

## Changing links:
```html
<div class="column">
    <p>SECTION TITLE</p>
    <!-- Sostitute "link" with "null" if you want a blank link -->
    <a class="link" href="WEBSITE LINK">WEBSITE NAME</a>
    <!-- To make a link opening in a new tab, add 'target="_BLANK"' inside the link tag -->
    <a target="_BLANK"></a>
</div>
```

```html
<div>: column container
├── <p>: section title
│    ├── <a>: bookmark
│    └── <a>: bookmark
└── <p>: section title
     ├── <a>: bookmark
     └── <a>: bookmark
</div>
```

## Credits:
* [Font for greetings](https://www.1001fonts.com/electroharmonix-font.html)
* [Image on left](https://wallpapercave.com/mt-fuji-wallpaper)