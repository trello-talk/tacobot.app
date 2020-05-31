<template>
  <a v-bind:href="url" v-bind:title="name">
    <vp-icon v-bind:name="icon" />
  </a>
</template>

<style lang="stylus">
</style>
<script>
export default {
  name: 'PersonLink',
  props: ['url', 'icon', 'name'],
};
</script>
