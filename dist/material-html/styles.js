(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* General fixes */\nbody, menu, menuitem, dialog, input {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: none;\n  color: inherit; }\nbody {\n  min-height: 100vh;\n  background: var(--color-bg-secondary); }\na {\n  text-decoration: none;\n  color: inherit; }\ni {\n  font-style: normal; }\ni, button, menu menuitem, menu, .button {\n  cursor: pointer; }\nul {\n  margin: 0;\n  padding: 0; }\nstrong {\n  font-weight: 400;\n  color: var(--color-warn); }\n::-moz-selection {\n  background: var(--color-primary);\n  color: var(--color-primary-contrast); }\n::selection {\n  background: var(--color-primary);\n  color: var(--color-primary-contrast); }\n/* when the primary class is present it's button whom bg color is primary*/\nbutton, menu menuitem, input[type=\"submit\"], .button {\n  background: white;\n  border: none;\n  border-radius: var(--border-radius);\n  outline: 0;\n  padding: var(--spacing-xs) var(--spacing-s);\n  transition: -webkit-filter 0.3s;\n  transition: filter 0.3s;\n  transition: filter 0.3s, -webkit-filter 0.3s; }\nbutton:hover, menu menuitem:hover, input[type=\"submit\"]:hover, .button:hover {\n    -webkit-filter: brightness(var(--color-btn-brightness-hover));\n            filter: brightness(var(--color-btn-brightness-hover)); }\nbutton:active, menu menuitem:active, input[type=\"submit\"]:active, .button:active {\n    -webkit-filter: brightness(var(--color-btn-brightness-active));\n            filter: brightness(var(--color-btn-brightness-active)); }\nbutton.primary, menu menuitem.primary, input[type=\"submit\"].primary, .button.primary {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\nbutton.accent, menu menuitem.accent, input[type=\"submit\"].accent, .button.accent {\n    background: var(--color-accent);\n    color: var(--color-accent-contrast); }\nbutton.warn, menu menuitem.warn, input[type=\"submit\"].warn, .button.warn {\n    background: var(--color-warn);\n    color: var(--color-warn-contrast); }\nbutton.success, menu menuitem.success, input[type=\"submit\"].success, .button.success {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\nbutton:disabled, menu menuitem:disabled, button:disabled:hover, menu menuitem:disabled:hover, input[type=\"submit\"]:disabled, input[type=\"submit\"]:disabled:hover, .button:disabled, .button:disabled:hover {\n    cursor: default;\n    color: var(--color-txt-lighter);\n    -webkit-filter: brightness(var(--color-btn-brightness-disabled));\n            filter: brightness(var(--color-btn-brightness-disabled)); }\nbutton, menu menuitem {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\nbutton:after, menu menuitem:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    -webkit-transform: scale(10, 10);\n            transform: scale(10, 10);\n    opacity: 0;\n    transition: opacity 1s, -webkit-transform .5s;\n    transition: transform .5s, opacity 1s;\n    transition: transform .5s, opacity 1s, -webkit-transform .5s; }\nbutton:active:after, menu menuitem:active:after {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    opacity: .2;\n    transition: 0s; }\ndialog {\n  background: var(--color-bg-primary);\n  padding: var(--spacing-l); }\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\nheader, .header {\n  padding: var(--spacing-xs) var(--spacing-s);\n  display: flex; }\ninput, textarea {\n  background: transparent !important;\n  font-size: 1.1rem;\n  padding: var(--spacing-sm);\n  color: var(--color-txt);\n  font-weight: 500; }\ninput[type=\"text\"], input[type=\"email\"], input[type=\"password\"],\ninput[type=\"number\"], input[type=\"url\"], input[type=\"month\"],\ninput[type=\"date\"], input[type=\"datetime-locale\"], input[type=\"datetime\"],\ninput[type=\"time\"], input[type=\"month\"], input[type=\"week\"],\ninput[type=\"search\"] {\n  border-bottom: 0.05rem solid var(--color-txt-third); }\ninput[type=\"text\"]:hover, input[type=\"email\"]:hover, input[type=\"password\"]:hover,\ninput[type=\"number\"]:hover, input[type=\"url\"]:hover, input[type=\"month\"]:hover,\ninput[type=\"date\"]:hover, input[type=\"datetime-locale\"]:hover, input[type=\"datetime\"]:hover,\ninput[type=\"time\"]:hover, input[type=\"month\"]:hover, input[type=\"week\"]:hover,\ninput[type=\"search\"]:hover {\n  border-bottom: 0.05rem solid var(--color-primary); }\ninput[type=\"text\"]:focus, input[type=\"email\"]:focus, input[type=\"password\"]:focus,\ninput[type=\"number\"]:focus, input[type=\"url\"]:focus, input[type=\"month\"]:focus,\ninput[type=\"date\"]:focus, input[type=\"datetime-locale\"]:focus, input[type=\"datetime\"]:focus,\ninput[type=\"time\"]:focus, input[type=\"month\"]:focus, input[type=\"week\"]:focus,\ninput[type=\"search\"]:focus {\n  border-bottom: 0.05rem solid var(--color-accent); }\nli, .li {\n  border: none;\n  border-bottom: 0.05rem solid var(--color-divider);\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  padding: var(--spacing-s); }\nsection {\n  background: var(--color-bg-primary);\n  margin: var(--spacing-m); }\nsection img {\n    width: 100%; }\nsection header {\n    padding: var(--spacing-m);\n    padding-bottom: 0; }\nsection main {\n    padding: var(--spacing-m); }\nsection footer {\n    padding: var(--spacing-m); }\nmenu menuitem {\n  display: flex; }\n/*\r\nBelow is the snippet for creating elevation for angular material.\r\n\r\nHowever they do create 24, elevation levels !\r\nI feel like this is way too much, ( https://en.wikipedia.org/wiki/The_Paradox_of_Choice ),\r\n\r\nI picked half of those and even then it's a lot.\r\n\r\nYou can check for yourself the 24 level in actions here:\r\n\r\nhttps://jsfiddle.net/jxbwqyo2/\r\n\r\n*/\n/* back to my picks */\n.z-0 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.z-1, section, .z-h, .z-a {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.z-2 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.z-3, .l-layout-vanilla > header, .l-layout-vanilla > .header, .l-layout-vanilla > nav, .l-layout-vanilla > .nav {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.z-4 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.z-5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.z-6, .z-h:hover, .z-a:active {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.z-7 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.z-8 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.z-9 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.z-10 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.z-11 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.z-12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.z-h, .z-a {\n  transition: all 0.28s cubic-bezier(0.25, 0.8, 0.25, 1); }\n/* fn that trnasofrm sp units to rem  */\n/**\r\n* Look here to know where values come from\r\n*\thttps://material.io/guidelines/style/typography.html#typography-styles\r\n*\tsummary there:\r\n*\thttps://getmdl.io/styles/index.html\r\n*/\nbody, .body1 {\n  /* perf optimisation : Default font is the one from OS,\r\n\thuge drawback is that it's not displaying font-weight: 500\r\n\tcorrectly on ubuntu. */\n  font-family: -apple-system, system-ui, \"Segoe UI\", Roboto,\r Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  color: var(--color-txt-primary);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\nh1, h2, h3, h4, h5, section header, h6 {\n  margin: 0; }\nh1, .h1 {\n  font-size: 6rem;\n  letter-spacing: -0.09375rem;\n  font-weight: var(--font-weight-light); }\nh2, .h2 {\n  font-size: 3.75rem;\n  letter-spacing: -0.03125rem;\n  font-weight: var(--font-weight-regular); }\nh3, .h3 {\n  font-size: 3rem;\n  letter-spacing: 0rem;\n  font-weight: var(--font-weight-regular); }\nh4, .h4 {\n  font-size: 2.125rem;\n  letter-spacing: 0.015625rem;\n  font-weight: var(--font-weight-regular); }\nh5, section header, .h5 {\n  font-size: 1.5rem;\n  letter-spacing: 0rem;\n  font-weight: var(--font-weight-regular); }\nh6, .h6 {\n  font-size: 1.25rem;\n  letter-spacing: 0.009375rem;\n  font-weight: var(--font-weight-medium); }\nsubtitle1, .subtitle1 {\n  font-size: 1rem;\n  letter-spacing: 0.009375rem;\n  font-weight: var(--font-weight-regular); }\nsubtitle2, .subtitle2 {\n  font-size: 0.875rem;\n  letter-spacing: 0.00625rem;\n  font-weight: var(--font-weight-regular); }\nbody1, .body1 {\n  font-size: 1rem;\n  letter-spacing: 0.03125rem;\n  font-weight: var(--font-weight-regular); }\nbody2, .body2 {\n  font-size: 0.875rem;\n  letter-spacing: 0.015625rem;\n  font-weight: var(--font-weight-medium); }\ninput, .input {\n  font-size: 1rem;\n  letter-spacing: 0rem;\n  font-weight: var(--font-weight-regular); }\nbutton, menu menuitem, .button {\n  font-size: 0.875rem;\n  letter-spacing: 0.046875rem;\n  font-weight: var(--font-weight-medium);\n  text-transform: uppercase; }\ncaption, .caption, small, time {\n  font-size: 0.75rem;\n  letter-spacing: 0.025rem;\n  font-weight: var(--font-weight-regular); }\noverline, .overline {\n  font-size: 0.625rem;\n  letter-spacing: 0.09375rem;\n  font-weight: var(--font-weight-medium);\n  text-transform: uppercase; }\nsmall, time {\n  color: var(--color-txt-third); }\n/* fn that trnasofrm sp units to rem  */\n/* fn that trnasofrm sp units to rem  */\n/** Spacing */\n.mg-xxs {\n  margin: 0.25rem; }\n.mg-xs {\n  margin: 0.5rem; }\n.mg-s {\n  margin: 0.75rem; }\n.mg-m {\n  margin: 1.5rem; }\n.mg-l {\n  margin: 3rem; }\n.mg-xl {\n  margin: 4rem; }\n.pd-xxs {\n  padding: 0.25rem; }\n.pd-xs {\n  padding: 0.5rem; }\n.pd-s {\n  padding: 0.75rem; }\n.pd-m {\n  padding: 1.5rem; }\n.pd-l {\n  padding: 3rem; }\n.pd-xl {\n  padding: 4rem; }\n/** colors */\n.bg-primary {\n  background: var(--color-primary); }\n.color-primary {\n  color: var(--color-primary); }\n.bg-accent {\n  background: var(--color-accent); }\n.color-accent {\n  color: var(--color-accent); }\n.bg-warn {\n  background: var(--color-warn); }\n.color-warn {\n  color: var(--color-warn); }\n.bg-success {\n  background: var(--color-success); }\n.color-success {\n  color: var(--color-success); }\n/** text */\n.txt-primary {\n  color: var(--color-txt-primary); }\n.txt-secondary {\n  color: var(--color-txt-secondary); }\n.txt-third {\n  color: var(--color-txt-third); }\n/** Flex */\n.flex {\n  display: flex; }\n.flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.flexVAlign {\n  display: flex;\n  align-items: center; }\n.flexWrap {\n  display: flex;\n  flex-wrap: wrap; }\n.flexStart {\n  display: flex;\n  justify-content: flex-start; }\n.flexEnd {\n  display: flex;\n  justify-content: flex-end; }\n.flexColumn {\n  display: flex;\n  flex-direction: column; }\n.flexGrow {\n  flex-grow: 1; }\n.flexBetween {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.flexAround {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n/** miscellaneous */\n.cercle {\n  border-radius: 50%;\n  overflow: hidden; }\n.ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n/* modified version of\r\nhttps://github.com/angular/material2/blob/master/src/lib/core/theming/_palette.scss */\n/** Generates palette with their contrast*/\n/** gets a mat palette given a color string */\n/** generate the whole palette */\n/* fn that trnasofrm sp units to rem  */\n/* fn that trnasofrm sp units to rem  */\n/**\r\n* function that takes a primary color etc to define a\r\n* set of css4 variables for colors that can be used throughout the application\r\n*/\n/*\r\nBelow is the snippet for creating elevation for angular material.\r\n\r\nHowever they do create 24, elevation levels !\r\nI feel like this is way too much, ( https://en.wikipedia.org/wiki/The_Paradox_of_Choice ),\r\n\r\nI picked half of those and even then it's a lot.\r\n\r\nYou can check for yourself the 24 level in actions here:\r\n\r\nhttps://jsfiddle.net/jxbwqyo2/\r\n\r\n*/\n/* back to my picks */\n.z-0 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.z-1, section, .z-h, .z-a {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.z-2 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.z-3, .l-layout-vanilla > header, .l-layout-vanilla > .header, .l-layout-vanilla > nav, .l-layout-vanilla > .nav {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.z-4 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.z-5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.z-6, .z-h:hover, .z-a:active {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.z-7 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.z-8 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.z-9 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.z-10 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.z-11 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.z-12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.z-h, .z-a {\n  transition: all 0.28s cubic-bezier(0.25, 0.8, 0.25, 1); }\n.l-layout-vanilla {\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-rows: auto 1fr auto;\n      grid-template-rows: auto 1fr auto;\n  /* key rule */\n      -ms-grid-columns: auto 1fr;\n      grid-template-columns: auto 1fr;\n  height: 100vh;\n      grid-template-areas: \"header header\"\r \"nav main\"\r \"footer footer\"; }\n.l-layout-vanilla > {\n  /* work with classes as well as html standard elements*/ }\n.l-layout-vanilla > header, .l-layout-vanilla > .header {\n    /* elevation shadow */\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: header;\n    z-index: 3;\n    height: 3rem;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n.l-layout-vanilla > nav, .l-layout-vanilla > .nav {\n    /*elevation shadow  */\n    z-index: 2;\n    width: 0;\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: nav;\n    transition: min-width 1s;\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    text-transform: capitalize; }\n.l-layout-vanilla > nav.open, .l-layout-vanilla > .nav.open {\n    min-width: 17rem; }\n.l-layout-vanilla > nav.semiClose, .l-layout-vanilla > .nav.semiClose {\n    width: 4rem; }\n.l-layout-vanilla > main {\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    grid-area: main; }\n.l-layout-vanilla > footer {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-area: footer; }\n:root {\n  --color-primary: #2196f3;\n  --color-primary-contrast: rgba(255, 255, 255, 0.7);\n  --color-primary-light: #bbdefb;\n  --color-primary-light-contrast: rgba(0, 0, 0, 0.87);\n  --color-primary-dark: #1976d2;\n  --color-primary-dark-contrast: rgba(255, 255, 255, 0.7);\n  --color-accent: #ffc107;\n  --color-accent-contrast: rgba(0, 0, 0, 0.87);\n  --color-accent-light: #ffecb3;\n  --color-accent-light-contrast: rgba(0, 0, 0, 0.87);\n  --color-accent-dark: #ffa000;\n  --color-accent-dark-contrast: rgba(0, 0, 0, 0.87);\n  --color-success: #4caf50;\n  --color-success-contrast: rgba(0, 0, 0, 0.87);\n  --color-success-light: #c8e6c9;\n  --color-success-light-contrast: rgba(0, 0, 0, 0.87);\n  --color-success-dark: #388e3c;\n  --color-success-dark-contrast: rgba(255, 255, 255, 0.7);\n  --color-warn: #f44336;\n  --color-warn-contrast: rgba(255, 255, 255, 0.7);\n  --color-warn-light: #ffcdd2;\n  --color-warn-light-contrast: rgba(0, 0, 0, 0.87);\n  --color-warn-dark: #d32f2f;\n  --color-warn-dark-contrast: rgba(255, 255, 255, 0.7);\n  --color-bg-primary: white;\n  --color-bg-secondary: #fafafa;\n  --color-bg-primary-dark: #424242;\n  --color-bg-secondary-dark: #303030;\n  --color-txt-primary: rgba(0, 0, 0, 0.87);\n  --color-txt-secondary: rgba(0, 0, 0, 0.54);\n  --color-txt-third: rgba(0, 0, 0, 0.38);\n  --color-txt-fourth: rgba(0, 0, 0, 0.12);\n  --color-txt-primary-on-dark: rgba(255, 255, 255, 0.7);\n  --color-txt-secondary-on-dark: rgba(255, 255, 255, 0.5);\n  --color-txt-third-on-dark: rgba(255, 255, 255, 0.3);\n  --color-txt-fourth-on-dark: rgba(255, 255, 255, 0.1);\n  --color-btn-brightness-hover: 96%;\n  --color-btn-brightness-active: 88%;\n  --color-btn-brightness-disabled: 88%;\n  --color-btn-brightness-hover-dark: 97%;\n  --color-btn-brightness-active-dark: 90%;\n  --color-btn-brightness-disabled-dark: 90%;\n  --color-divider: rgba(0, 0, 0, 0.12);\n  --color-divider-dark: rgba(255, 255, 255, 0.1);\n  --spacing-xxs: 0.25rem;\n  --spacing-xs: 0.5rem;\n  --spacing-s: 0.75rem;\n  --spacing-m: 1.5rem;\n  --spacing-l: 3rem;\n  --spacing-xl: 4rem;\n  --border-radius: 0.2rem;\n  --border-radius-s: 0.1rem;\n  --font-weight-light: 100;\n  --font-weight-regular: 400;\n  --font-weight-medium: 500;\n  --font-weight-bold: 700; }\nsection {\n  width: 70%; }\n.mainCtnr :nth-child(2) section {\n  margin-left: auto;\n  margin-right: auto; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cedva\Desktop\material-html2\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map