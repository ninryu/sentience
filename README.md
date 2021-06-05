<p align="center">
  <img src="favicon.ico">
</p>

<h1 align="center"><strong>startpage</strong>

<p align="center">
  <a href="https://github.com/Alededorigo/startpage/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/alededorigo/kanji?color=%23cd58f4&style=flat">
  </a>
  <a href="https://github.com/Alededorigo/startpage/releases">
    <img src="https://img.shields.io/github/v/release/alededorigo/kanji?color=ee4f84&include_prereleases&style=flat">
  </a>
  <a href="https://github.com/Alededorigo/startpage/commits/main">
    <img src="https://img.shields.io/github/last-commit/alededorigo/kanji?color=%231ce590&style=flat">
  </a>
</p>
</h1>

<br />

# **A startpage for the browser**

## Release 2.9 <img alt="" align="right" src="https://img.shields.io/github/repo-size/alededorigo/kanji?color=%2358d0f4&style=flat"/>

<a href="https://github.com/Alededorigo/Kanji/releases/tag/2.9">
  <img style="border-radius: 6px" src="https://res.cloudinary.com/dn3cdvdix/image/upload/v1621709359/cover.png" alt="preview" align="right" width="400px"/>
</a>

Changelog <kbd>version 2.9</kbd>:

- [added] [`metadata.json`](https://github.com/Alededorigo/startpage/commit/58e381c169df3d06280d09c8c904f99e17d3c8f3)
- [[added](https://github.com/Alededorigo/startpage/commit/7c6bfc27bd651019271256908c072ddff45e731f)] keyboard shortcuts
- [added] CSS variables
- [improved] shadows and colors
- [improved] cleaned up the code
- [[fixed](https://github.com/Alededorigo/startpage/commit/7c6bfc27bd651019271256908c072ddff45e731f)] border configuration
- [fixed] firefox extension
- [fixed] some issues with the image

<br />
<br />
<br />

# [🚀️ Demo on Github Pages](https://alededorigo.github.io/startpage/)

<br />
<br />
<br />

<img style="border-radius: 6px" src="https://res.cloudinary.com/dn3cdvdix/image/upload/v1615300936/preview_nosmbp.gif" alt="screenshot"/>

## Extensions:

- For Firefox use "Custom New Tab Page"
- For Chrome use "Custom New Tab"
- Or you can load the index.html as an extension <kbd>beta</kbd>

  > testing

  - If you are on Firefox:
    - go to `about:debugging`
    - then on `this firefox`
    - `load temporary add-on`
    - locate the `index.html` file and open it
  - If you are on Chrome (or other Chromium browsers): <kbd>not tested</kbd>
    - go to `chrome://extensions`
    - enable developer mode
    - click `load unpacked`
    - choose the folder

  > permanent

  > see [metadata.json](https://raw.githubusercontent.com/Alededorigo/startpage/main/manifest.json) for details

  > ⇩ Download the zip from [**here**](https://github.com/Alededorigo/startpage/releases)

  - If you are on Firefox:
    - go to `about:config`, and set to `false` `xpinstall.signatures.required`.
    - go to `about:addons`
    - click on `extensions`
    - drag the zip in on the page

## Usage:

- On the new tab: use one of the [extensions](#extensions) mentioned

- On the home page:

  - Firefox: Go into
    `Preferences > Home > Homepage and new windows`
    <br/>

    > or editing the `prefs.js` file

    ```js
    67 | user_pref("browser.startup.homepage", "/path/to/index.html")
    ```

    > to open the file, go into `about:profiles`, and open your profile directory

    - Chrome: Go into
      ` Options > Start > Homepage`

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

## Keybindings:

| Key        | Function                                      |
| ---------- | --------------------------------------------- |
| `ctrl + m` | Mode - switch between light and dark mode     |
| `/`        | Search - focus the search box <kbd>beta</kbd> |

## Credits:

- [Font for greetings](https://www.1001fonts.com/electroharmonix-font.html)
- [Image on left](https://wallpapercave.com/mt-fuji-wallpaper)
- [jQuery](https://jquery.com/)
