<template>
  <div class="theme-container error-page-outer">
    <div class="theme-default-content error-page">
      <img class="sad-taco" no-zoom src="/logo_sad.svg">
      <div class="content">
        <h1 class="title">404</h1>
        <p class="subtitle">Not Found.</p>
        <div class="buttons">
          <NavLink
            class="action-button"
            :item="{ link: '/', text: 'Back to Home' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.error-page
  display flex
  flex-direction row
  justify-content center
  margin-top 3.6rem !important
  .sad-taco
    width 350px
    margin-top 0 !important
    margin-right 1em
    object-fit contain
  .content
    display flex
    flex-direction column
    justify-content center
    flex auto
    text-align right
    .title
      margin 0
    p
      font-size 1.2rem
      font-weight 600
      margin-top 0
      color $altTextColor
    .buttons
      display flex
      flex-direction row
      align-self flex-end
      .action-button
        display inline-block
        font-size 1.2rem
        color #fff
        background-color $accentColor
        padding 0.8rem 1.6rem
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box
        border-bottom 1px solid darken($accentColor, 10%)
        margin 5px
        &:hover
          background-color lighten($accentColor, 10%)

@media (max-width: $MQNarrow)
  .error-page-outer
    margin: auto;
    width calc(100% - 3rem)

@media (max-width: $MQMobile)
  .error-page
    flex-direction column
    .sad-taco
      align-self center
      margin-bottom 1rem
      margin-right 0
    .content
      text-align center
      .buttons
        align-self center
</style>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import darkTheme from '@theme/mixins/darkTheme.js'
export default {
  components: { NavLink },
	mixins: [darkTheme]
}
</script>