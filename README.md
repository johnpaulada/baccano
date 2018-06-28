# Baccano
A railway-oriented programming helper library.

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

[![](https://data.jsdelivr.com/v1/package/npm/baccano/badge)](https://www.jsdelivr.com/package/npm/baccano)

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

```javascript

// Define Errors
import { Success, SomeError, compose, fromUnary } from 'baccano'

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
  const compatibleDivideBy = fromUnary(divideBy(0))
  const compatiblePlusOne = fromUnary(plusOne)
  const pipeline = compose(compatiblePlusOne, compatibleDivideBy, compatiblePlusOne)
  const result = await pipeline(2)

  console.log(result.value)
  console.log(result.errors)
})()
```

## Notes
- I named the library Baccano because when I thought about trains and railways, I thought of the Baccano anime. [@egoist](https://github.com/egoist) is not the only one fond of anime references LOL.

## License
MIT