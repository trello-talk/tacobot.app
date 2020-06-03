<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="landing">
      <div class="slideshow">
        <carousel :autoplay="true" :perPage="1" :paginationEnabled="true">
          <slide v-for="slide in data.slides">
            <div class="picture-outer">
              <img class="picture" :src="slide.image" :data-original="slide.ogImage || slide.image" no-zoom />
            </div>
            <span class="caption">{{ slide.caption }}</span>
          </slide>
        </carousel>
      </div>
      <div class="hero">
        <img no-zoom src="/logo_happy.svg" />
        <h1>{{ data.heroText || $title || 'Hello' }}</h1>
        <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
        <p class="action-buttons" v-if="data.actionButtons && data.actionButtons.length">
          <NavLink
            class="action-button"
            v-for="abtn in data.actionButtons"
            :class="abtn.primary ? 'primary': ''"
            :item="abtn"
          />
        </p>
      </div>
    </header>

    <hr />

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="feature in data.features"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <div class="picture-outer" v-if="feature.image">
          <img class="picture" :src="feature.image" :data-original="feature.ogImage || feature.image" />
        </div>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Footer v-if="data.footer && $site.themeConfig.footer" />
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import Footer from '@theme/components/Footer.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'Home',
  components: { NavLink, Footer, Carousel, Slide },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2.5rem 0
  max-width $homePageWidth
  margin 0 auto
  display block
  .landing
    display flex
    flex-direction row
    justify-content space-between
    margin-top 2.5rem
    .slideshow
      width 50%
      align-self center
      .VueCarousel-dot
        outline none
        &[aria-selected="false"]
          background-color $imageBackground !important
        &[aria-selected="true"]
          background-color $textColor !important
      .picture-outer
        width auto
        position relative
      .caption
        display block
        color $imageBackground
        font-weight 500
        font-style italic
    .hero
      display flex
      flex-direction column
      text-align right
      width 50%
      margin-left 2rem
      img
        object-fit contain
        width 50%
      h1
        font-size 3rem
        margin 0
      .description
        width 100%
        font-size 1.6rem
        line-height 1.3
        color $altTextColor
        margin 0
      .action-buttons
        display flex
        justify-content space-evenly
        align-self flex-end
        flex-wrap wrap
        a + a
          margin-right .5rem
    .action-button
      display inline-block
      font-size 1.2rem
      color $accentColor
      padding 0.8rem 1.6rem
      box-sizing border-box
      svg
        display none
      & + .action-button
        margin-left .5rem
      &:hover
        text-decoration underline
      &.primary
        color #fff
        background-color $accentColor
        border-radius 4px
        border-bottom 1px solid darken($accentColor, 10%)
        &:hover
          background-color lighten($accentColor, 10%)
          text-decoration none
  .picture-outer
    background-color $imageBackground
    border 3px solid $imageBackground
    width auto
    position relative
    .picture
      object-fit contain
      width 100%
      height 100%
      margin-bottom -3px
  .features
    display flex
    flex-direction row
    flex-flow wrap
    justify-content center
    .feature
      max-width calc(calc(100% / 3) - 20px)
      margin 10px 0
      padding 0 10px
      h2
        font-size 1.5rem
        margin 0
        padding 0
        border none
        font-weight 500
      p
        margin 0
        color $altTextColor
        font-weight 500
        line-height 1
      .picture-outer
        margin 10px 0
@media (max-width: $MQNarrow)
  .home
    .landing
      .slideshow
        width 60%
      .hero
        width 40%
        h1
          font-size: 2rem;
        .description
          font-size: 1.3rem;
    .features .feature
      h2
        font-size: 1.2rem;
      p
        font-size: 0.8rem;
@media (max-width: $MQMobile)
  .home
    padding $navbarHeight 1.5rem 0
    .landing
      flex-direction column-reverse
      width 100%
      .slideshow
        width 100%
      .hero
        width unset
        margin-left 0
        margin-bottom 1rem
    .features
      flex-direction column
      width unset
      .feature
        max-width 100%
        h2
          font-size: 1.5rem;
        p
          font-size: 1rem;
</style>