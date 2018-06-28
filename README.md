# Baccano
A railway-oriented programming helper library.

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

[![](https://data.jsdelivr.com/v1/package/npm/baccano/badge)](https://www.jsdelivr.com/package/npm/baccano)

## Intro to Railway-oriented Programming
The term was coined by Scott Wlaschin of F# for Fun and Profit. [Here's his talk on the subject](https://fsharpforfunandprofit.com/rop/).

## Getting Started

### Importing the library

To use the library, first import it:

In Node:
```javascript
const { compose } = require('baccano')
```

As ES Module:
```javascript
import { compose } from 'baccano'
```

On the browser:
```html
<script src="https://cdn.jsdelivr.net/npm/baccano/baccano.min.js"></script>
<script>
    const { compose } = Baccano
</script>
```

### Using the library

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

## License
MIT