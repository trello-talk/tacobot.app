export default () => {
  const activate = el => {
    el.style.visibility = 'hidden'
    if (document.readyState !== 'complete') return
    el.style.visibility = 'visible'
  }

  return {
    inserted (el) {
      activate(el)
      window.addEventListener('load', function () {
        activate(el)
      })
    }
  }
}