# Baccano
A railway-oriented programming helper library.

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

[![npm](https://img.shields.io/npm/dm/baccano.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/baccano)
[![npm](https://img.shields.io/npm/v/baccano.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/baccano)
[![](https://data.jsdelivr.com/v1/package/npm/baccano/badge)](https://www.jsdelivr.com/package/npm/baccano)

## Intro to Railway-oriented Programming
The term was coined by Scott Wlaschin of F# for Fun and Profit. [Here's his talk on the subject](https://fsharpforfunandprofit.com/rop/). This method of programming allows us to deal with errors functionally in our applications. It involves having two paths (or tracks) if you will, one is the success path, and one is the error path. You start with the success path and when an error occurs, expected or not, you move to the error path. It's easier to understand if you try it out.

## Getting Started

### Importing the library

To use the library, first import it:

In Node:
```javascript
const { compose, fromUnary, SomeError, Success } = require('baccano')
```

As ES Module:
```javascript
import { compose, fromUnary, SomeError, Success } from 'baccano'
```

On the browser:
```html
<script src="https://cdn.jsdelivr.net/npm/baccano@2.1.0/baccano.min.js"></script>
<script>
    const { compose, fromUnary, SomeError, Success } = Baccano
</script>
```

### Using the library
Let's learn how to use the library by creating a pipeline of mathematical operations.

#### Define Errors
Features should not be the only things to be considered when planning software. Errors, or anything that can go wrong should also be planned. Hence, we have to define the possible errors that might occur in a particular pipeline of functions. Normally we'd use a type or a variant for this but we're in JavaScript so I suggest using Symbols for them. We'll be using division in the pipeline so we have to plan for a division by zero case.

```javascript
const DIVISON_BY_ZERO = Symbol.for('DIVISION_BY_ZERO')
```

### Define Functions
Now we'll define the functions that we will use. In Railway-Oriented Programming, a function should either return a success with the value, or some error with the error message. This would be easy in type-safe functional programming languages but that is not the case with JavaScript so we'll need some helpers from the library.

```javascript
import { SomeError, Success } from 'baccano'
```

After importing our helper functions, let's define the functions we're going to use.

```javascript
const divideBy = n => x => {
  if (n === 0) {
    return SomeError(DIVISON_BY_ZERO, "Cannot divide by zero.")
  } else {
    return Success(n / x)
  }
}

const plusOne = x => {
  return Success(x + 1)
}
```

In this case, we create a function `divideBy` which takes a number and returns a function that accepts a number and divides it by the previous number. If the previous number is zero, we return a `DIVISON_BY_ZERO` error using the `SomeError` function, which takes a value that represents the error and the error message. Else, we return a success using the `Success` function which accepts a value.

The `plusOne` function just takes a number and returns a `Success` with the number incremented by one.

#### Complete Example Code
Here is the complete example code:

```javascript

// Import library
import { compose, fromUnary, SomeError, Success } from 'baccano'

// Define Errors
const DIVISON_BY_ZERO = Symbol.for('DIVISION_BY_ZERO')

const divideBy = n => x => {
  if (n === 0) {
    return SomeError(DIVISON_BY_ZERO, "Cannot divide by zero.")
  } else {
    return Success(n / x)
  }
}

const plusOne = x => {
  return Success(x + 1)
}

(async () => {

  // Take unary functions and convert them to compatible functions
  const compatibleDivideByZero = fromUnary(divideBy(0))
  const compatiblePlusOne = fromUnary(plusOne)

  // Create pipeline of functions
  const pipeline = compose(compatiblePlusOne, compatibleDivideByZero, compatiblePlusOne)

  // Get result of the pipeline
  const result = await pipeline(2)

  // Display end value
  console.log(result.value) // 4

  // Display errors
  console.log(result.errors) // [ { message: 'Cannot divide by zero.', type: Symbol(DIVISON_BY_ZERO) } ]
})()
```

## Notes
- I named the library Baccano because when I thought about trains and railways, I thought of the Baccano anime. [@egoist](https://github.com/egoist) is not the only one fond of anime references LOL.

## Roadmap
- [x] Handling Asynchronous functions

## License
MIT