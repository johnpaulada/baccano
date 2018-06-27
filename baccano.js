import Maybe from '@johnpaulada/maybe'

const compose = (...fns) => x => {
  const {value, error} = fns.reduce((result, fn) => {
    const {value, error} = result

    try {
      return {value: value.map(fn), error}
    } catch(err) {
      return {value: Maybe.Nothing(), error: error.map(errors => [...errors, err.message])}
    }
  }, {value: Maybe.of(x), error: Maybe.of([])})

  const actualValues = { value: value.reduce(x => x), error: error.reduce(x => x) }

  return actualValues
}

export {
  compose
}