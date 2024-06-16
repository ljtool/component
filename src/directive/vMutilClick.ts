import { off, on } from 'lj-utils'

interface DElement extends HTMLElement {
  d: {
    timer?: any
    count: number
  }
  onMutilClick: (event: any) => void
}
const eventName =
  'ontouchstart' in window || navigator.maxTouchPoints > 0
    ? 'touchstart'
    : 'click'
const main = function (el: DElement, bind: any, isRemove: boolean = false) {
  const delay = +(el.dataset?.['delay'] || 500)
  const countDef = +(el.dataset?.['count'] || 2)
  if (!isRemove) {
    el.d = {
      count: countDef,
    }
    el.onMutilClick = (event: any) => {
      if (el.d.timer) {
        clearTimeout(el.d.timer)
      }
      el.d.timer = setTimeout(() => {
        el.d.count = countDef
      }, delay)
      el.d.count--
      if (!el.d.count) {
        el.d.count = countDef
        if (typeof bind.value === 'function') {
          bind.value(event)
        }
      }
    }
    on(el, eventName, el.onMutilClick)
  } else {
    off(el, eventName, el.onMutilClick)
    // @ts-ignore
    el.d = null
    // @ts-ignore
    el.onMutilClick = null
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
 * <button
 *    v-mutil-click="clickFn"
 *  >
 *    default:2连击
 *  </button>
 *  * <button
 *    data-count="2"
 *    data-delay="500"
 *    v-mutil-click="clickFn"
 *  >
 *    default:2连击
 *  </button>
 */
export const vMutilClick = {
  mounted,
  beforeUnmount,
  // for vue2
  bind: mounted,
  unbind: beforeUnmount,
}
export const name = 'mutilClick'
export default vMutilClick
