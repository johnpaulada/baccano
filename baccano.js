const SUCCESS = Symbol.for('SUCCESS')
const UNSPECIFIED_ERROR = Symbol.for('UNSPECIFIED_ERROR')

const SomeError = (errorType, message) => ({
  value: () => message,
  type: () => errorType
})

const Errors = errors => ({
  value: () => errors,
  concat: error => Errors([...errors, error])
})

const Success = x => ({
  value: () => x,
  type: () => SUCCESS
})

const compose = (...fns) => async x => {
  let result = [Success(x), Errors([])]

  for (const fn of fns) {
    result = await fn(result)
  }

  const [value, errors] = result

  const resolved = {
    value: value.value(),
    errors: errors.value().map(error => ({message: error.value(), type: error.type()}))
  }

  return resolved
}

const pipeline = (...fns) => compose.apply(this, fns.reverse())

const fromUnary = fn => {
  return async ([success, errors]) => {
    try {
      const response = await fn(success.value())
      const type = response.type()
      
      if (type === SUCCESS) {
        return [response, errors]
      } else {
        return [success, errors.concat(response)]
      }
      
    } catch(err) {
      return [success, errors.concat(SomeError(UNSPECIFIED_ERROR, err.message))]
    }
  }
}

export {
  compose,
  pipeline,
  fromUnary,
  Success,
  SomeError
}