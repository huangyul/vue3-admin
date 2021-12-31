<template>
  <div>
    <svg :class="svgClass">
      <use :xlink:href="svgName"></use>
    </svg>
  </div>
</template>

<script setup>
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

  // const type = ref('')
  if (props.iconName.includes('element')) {
  } else {
  }
  // const svgName = props.iconName.includes('element') ? `#icon-${props.iconName}`
  const svgClass = props.iconClass ? `svg-icon ${props.iconClass}` : 'svg-icon'
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 14px;
    height: 14px;
    overflow: hidden;
    // vertical-align: center;
    fill: currentColor;
    display: block;
    // width: 1.2em;
    // height: 1.2em;
    // vertical-align: -0.15em;
    // fill: currentColor;
    // overflow: hidden;
  }
</style>
