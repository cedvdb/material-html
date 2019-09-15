
demo: https://cedvdb.github.io/material-html


# Material HTML

Material HTML is an humble attempt to bring material design specs to hyper text markup language.
The goal of HTML is to convey semantic meaning and that is also what material design does. Therefor
marrying the two seems like a good choice.

- Material HTML is lightweight and uses css4 variables under the hood so it's customizable at runtime
- Only css (scss) is used here to style the basic HTML tags. However you only go so far with HTML tags therefor
some css helper classes are added.
- The code is heavily inspired of the code found in the angular material repository

## Include the library

Although the library is modular the easiest way to get started is to include the whole library.

```
npm install material-html
```
then import it

```
/** in your scss import this once */
@import '~material-html/all.scss';
```


## Create the css 4 variables</header>

The next step is to create the set of css 4 variables used by Material HTML.


To do so, you can use the helper function:

```
/** the color names here are names from the palette
* in order they are: primary, secondary, warn, success */
:root {
  @include generate-theme('indigo', 'brown', 'red', 'green');
}

```

This will generate a set of css 4 variables that are used by Material HTML


## Fine grained theming</header>

Since the scss function generate-theme only generates css 4 variables, you can also not
call this function and define your css4 variables by yourself

```
:root {
	--color-primary: #2196f3;
	--color-primary-contrast: rgba(255, 255, 255, 0.7);
	--color-primary-light: #bbdefb;
	--color-primary-light-contrast: rgba(0, 0, 0, 0.87);
	--color-primary-dark: #1976d2;
	--color-primary-dark-contrast: rgba(255, 255, 255, 0.7);
	--color-accent: #ffc107;
	--color-accent-contrast: rgba(0, 0, 0, 0.87);
	--color-accent-light: #ffecb3;
	--color-accent-light-contrast: rgba(0, 0, 0, 0.87);
	--color-accent-dark: #ffa000;
	--color-accent-dark-contrast: rgba(0, 0, 0, 0.87);
	--color-success: #4caf50;
	--color-success-contrast: rgba(0, 0, 0, 0.87);
	--color-success-light: #c8e6c9;
	--color-success-light-contrast: rgba(0, 0, 0, 0.87);
	--color-success-dark: #388e3c;
	--color-success-dark-contrast: rgba(255, 255, 255, 0.7);
	--color-warn: #f44336;
	--color-warn-contrast: rgba(255, 255, 255, 0.7);
	--color-warn-light: #ffcdd2;
	--color-warn-light-contrast: rgba(0, 0, 0, 0.87);
	--color-warn-dark: #d32f2f;
	--color-warn-dark-contrast: rgba(255, 255, 255, 0.7);
	--color-bg-primary: white;
	--color-bg-secondary: #fafafa;
	--color-bg-primary-dark: #424242;
	--color-bg-secondary-dark: #303030;
	--color-txt-primary: rgba(0, 0, 0, 0.87);
	--color-txt-secondary: rgba(0, 0, 0, 0.54);
	--color-txt-third: rgba(0, 0, 0, 0.38);
	--color-txt-fourth: rgba(0, 0, 0, 0.12);
	--color-txt-primary-on-dark: rgba(255, 255, 255, 0.7);
	--color-txt-secondary-on-dark: rgba(255, 255, 255, 0.5);
	--color-txt-third-on-dark: rgba(255, 255, 255, 0.3);
	--color-txt-fourth-on-dark: rgba(255, 255, 255, 0.1);
	--color-btn-brightness-hover: 96%;
	--color-btn-brightness-active: 88%;
	--color-btn-brightness-disabled: 88%;
	--color-btn-brightness-hover-dark: 97%;
	--color-btn-brightness-active-dark: 90%;
	--color-btn-brightness-disabled-dark: 90%;
	--color-divider: rgba(0, 0, 0, 0.12);
	--color-divider-dark: rgba(255, 255, 255, 0.1);
	--spacing-xxs: 0.25rem;
	--spacing-xs: 0.5rem;
	--spacing-s: 0.75rem;
	--spacing-m: 1.5rem;
	--spacing-l: 3rem;
	--spacing-xl: 4rem;
}
```
