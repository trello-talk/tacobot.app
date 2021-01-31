class Animate {
  constructor (os) {
    this.os = os
    this.bind = null
  }

  createBind (el, binding) {
    this.bind = this.activate.bind(this, el, binding)
  }

  activate (el, binding) {
    // Don't fire until ready
    if (document.readyState !== 'complete') return

    const mod = binding.modifiers
    const animateClass = this.os.animateClass
    const activeClasses = Array.isArray(binding.value) ? binding.value.map(c => 'animate__' + c) : ['animate__' + binding.value]

    const { top, bottom } = el.getBoundingClientRect()
    const height = document.documentElement.clientHeight
    const inWindow = top < height && bottom > 0

    el.classList.add(animateClass)

    if (inWindow) {
      activeClasses.forEach(c => el.classList.add(c))
      if(!mod.repeat)
        window.removeEventListener('scroll', this.bind)
    } else if (mod.repeat) {
      activeClasses.forEach(c => el.classList.remove(c))
    }
  }
}

export default (os = { animateClass: 'animate__animated' }) => {
  let a = new Animate(os)

  return {
    bind (el) {
      el.classList.add(os.animateClass)
    },
    inserted (el, binding) {
      a.activate(el, binding)
      a.createBind(el, binding)
      window.addEventListener('load', a.bind)
      window.addEventListener('scroll', a.bind)
    }
  }
}