const defaultArgs = {
  space: false,
  hyph: false,
  align: false
}

const splitSlice = (
  _string = '',
  length = 0,
  {
    space = defaultArgs.space,
    hyph = defaultArgs.hyph,
    align = defaultArgs.align
  } = defaultArgs,
  debug = false
) => {
  try {
    const string = _string + (space ? ' _' : '')
        , stringArray = []

    for (let i = 0; i < string.length; i += length) {
      stringArray.push(string.slice(i, i + length))
    }

    if (space) {
      for (let i = 0; i < stringArray.length; i++) {
        const words = stringArray[i].match(/[^\s]+$/)
            , word = words ? words[0] : ''
            , spaces = word.length

        if (!spaces) {
          continue
        }

        if (stringArray[i + 1]) {
          stringArray[i + 1] = stringArray[i].slice(-spaces) + stringArray[i + 1]
        }

        stringArray[i] = stringArray[i].slice(0, -spaces) + (' '.repeat(spaces))
      }
    }

    if (hyph) {
      for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].match(/[A-Za-z]$/gi)) {
          stringArray[i] += '-'
        }
      }
    }

    if (align) {
      const maxLength = Math.max(...stringArray.map(e => e.length))
      for (let i = 0; i < stringArray.length; i++) {
        const stringLength = stringArray[i].length
            , space = ' '.repeat(maxLength - stringLength)

        if (align === 'left') {
          stringArray[i] = stringArray[i] + space
        }

        if (align === 'right') {
          stringArray[i] = space + stringArray[i]
        }

        if (align === 'center') {
          const share = Math.ceil((maxLength - stringLength) / 2)
              , space = ' '.repeat(share)
          stringArray[i] = space + stringArray[i] + space
        }
      }
    }

    return stringArray
  } catch (err) {
    debug && console.log(err)
    return null
  }
}

module.exports = splitSlice
