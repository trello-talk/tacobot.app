<template>
  <img :src="src" :data-original="original" class="md-img" />
</template>

<style lang="stylus">
.md-img
  margin .5em 10%
  width 80%
@media (max-width: $MQMobile)
  .md-img
    width 100%
    margin .5em 0
</style>

<script>
export default {
  name: 'markdownimage',
  props: ['src', 'original'],
};
</script>