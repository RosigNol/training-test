export const Card = () => import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const CardGame = () => import('../..\\components\\CardGame.vue' /* webpackChunkName: "components/card-game" */).then(c => wrapFunctional(c.default || c))
export const DnD2 = () => import('../..\\components\\DnD2.vue' /* webpackChunkName: "components/dn-d2" */).then(c => wrapFunctional(c.default || c))
export const DnD3 = () => import('../..\\components\\DnD3.vue' /* webpackChunkName: "components/dn-d3" */).then(c => wrapFunctional(c.default || c))
export const DnD4 = () => import('../..\\components\\DnD4.vue' /* webpackChunkName: "components/dn-d4" */).then(c => wrapFunctional(c.default || c))
export const DnD5 = () => import('../..\\components\\DnD5.vue' /* webpackChunkName: "components/dn-d5" */).then(c => wrapFunctional(c.default || c))
export const Training = () => import('../..\\components\\training.vue' /* webpackChunkName: "components/training" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
