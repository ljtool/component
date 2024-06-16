interface DElement extends HTMLElement {
  d: {
    timer?: any
    count: number
  }
  observer: IntersectionObserver
}
let defaultSrc =
  'data:image/png;base64,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'

const main = function (el: DElement, bind: any, isRemove?: boolean) {
  if (!isRemove) {
    let options = {
      // 指定观察目标的根元素，若为null则默认为viewport。
      root: null,
      // 指定观察目标的相对偏移量，若为null则默认为0。
      rootMargin: '100%',
      // 为0，即只要目标元素进入视口即可触发回调。 0.5时 50% 在视口中可见时，都会触发回调函数。
      threshold: 0,
    }

    el.setAttribute('src', el.dataset?.default || defaultSrc)
    el.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((v) => {
        // console.debug(v.isIntersecting)
        if (v.isIntersecting) {
          let img = new Image()
          img.src =
            bind.value?.src || typeof bind.value === 'string'
              ? bind.value
              : el.dataset?.src
          img.onload = function () {
            // console.log('img.src:', img.src)
            // console.log(bind.value)
            el.setAttribute('src', img.src)
          }
          observer.unobserve(el)
        }
      })
    }, options)
    el.observer.observe(el)
  } else {
    el.observer.unobserve(el)
    // @ts-ignore
    el.observer = null
  }
}

const mounted = function (el: DElement, bind: any) {
  main(el, bind)
}
const beforeUnmount = function (el: DElement, bind: any) {
  main(el, bind, true)
}

/**
 * @description 多次点击指令
 * @example
 */
export const vLazy = {
  beforeMount: mounted,
  beforeUnmount,
  // for vue2
  bind: mounted,
  unbind: beforeUnmount,
}
/**
 * @description 设置全局默认图片
 * @param {string} src - 默认图片链接
 */
export const defaultSrcSet = (src: string) => {
  defaultSrc = src
}
export const name = 'Lazy'
export default vLazy
