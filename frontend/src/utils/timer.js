export default ms => (func, ...args) => {
  setTimeout(() => func(...args), ms)
}
