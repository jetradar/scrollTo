# scrollTo
Simple pure javascript smooth scrolling to element

---

This script exports two modules, `scrollToTop` and `scrollTo`, which can then be imported using the [JS import statement](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import) currently available in [Traceur](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#modules), [Babel](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/), or [Rollup](https://github.com/rollup/rollup/wiki/ES6-modules).

## Install

`npm install scrollyo --save`

With a "y".

## Usage
First import the modules you need:
```javascript
// Both
import {scrollToTop, scrollTo} from 'scrollyo';
```

```javascript
// Just one
import {scrollTo} from 'scrollyo';
```
You can now use `scrollToTop` and/or `scrollTo`:

* `scrollToTop` scrolls to the top of the page. Takes one argument for the timeout in miliseconds.
   ```javascript
   scrollToTop(700);
   ```

* `scrollTo` scrolls to any element in the DOM unless the element is already at the `scrollTo` position. 
   The function takes two arguments: the element and a timeout in miliseconds (both mandatory).

   ```javascript
   const myElement = document.querySelector('...');
   scrollTo(myElement, 700);
   ```
