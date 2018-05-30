export default (input, limit, tail) => {
  if (tail === undefined) {
    tail = ''
  }
  if (input === undefined) {
    input = ''
  }
  return input.toString().substring(0, limit) + tail
}
