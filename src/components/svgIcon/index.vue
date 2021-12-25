<template>
  <svg :class="svgClass">
    <use :xlink:href="svgName"></use>
  </svg>
</template>

<script setup>
  import { computed } from '@vue/reactivity'

  /* eslint-disable */
  const props = defineProps({
    iconName: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      default: '',
    },
  })

  const svgName = `#icon-${props.iconName}`
  const svgClass = props.iconClass ? `svg-icon ${props.iconClass}` : 'svg-icon'
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
