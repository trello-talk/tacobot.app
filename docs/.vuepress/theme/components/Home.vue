<template>
  <main
    class="home"
    role="main"
    v-show-on-load
  >
    <header class="landing">
      <div v-animate="isMobile ? 'fadeInUp' : 'fadeInLeft'" class="slideshow">
        <ClientOnly>
          <carousel :autoplay="true" :perPage="1" :paginationEnabled="true" :autoplayTimeout="10000" :loop="true">
            <slide v-for="slide in data.slides" :key="slide.image">
              <div class="slide-wrapper">
                <div class="picture-outer">
                  <img class="picture" :alt="slide.caption" :src="slide.image" :data-original="slide.ogImage || slide.image" no-zoom />
                </div>
                <span class="caption">{{ slide.caption }}</span>
              </div>
            </slide>
          </carousel>
        </ClientOnly>
      </div>
      <div v-animate="!isMobile ? 'fadeIn' : ''" class="hero">
        <div class="mobile-wrapper">
          <img v-animate="isMobile ? 'fadeInLeft' : 'fadeInDown'" no-zoom :src="data.heroImage" />
          <div v-animate="isMobile ? 'fadeInRight' : 'fadeInUp'" class="hero-text">
            <h1>{{ data.heroText || $title || 'Hello' }}</h1>
            <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
          </div>
        </div>
        <p v-animate="'fadeInUp'" class="action-buttons" v-if="data.actionButtons && data.actionButtons.length">
          <NavLink
            class="action-button"
            v-for="abtn in data.actionButtons"
            :key="abtn.text"
            :class="abtn.primary ? 'primary': ''"
            :item="abtn"
          />
        </p>
      </div>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="feature in data.features"
        class="feature"
        v-animate="'fadeInUp'"
      >
        <h2>{{ feature.title }}</h2>
        <div class="picture-wrapper">
          <a v-if="feature.image" class="picture-outer" target="_blank" :href="feature.ogImage || feature.image">
            <img :alt="feature.title" :src="feature.image">
          </a>
        </div>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <hr v-animate="'fadeIn'" role="separator" />

    <div class="content">
      <hr
        v-for="child in data.content"
        v-if="child.type === 'divider'"
        v-animate="'fadeIn'"
        role="separator"
      />
      <div
        class="main-feature-header"
        v-else-if="child.type === 'main-feature-header'"
      >
        <span v-animate="'fadeInDown'" v-if="child.text">{{ child.text }}</span>
        <div v-animate="'fadeIn'" class="title-flex">
          <component v-if="child.icon" :is="'icon-' + child.icon" />
          <h1>{{ child.title }}</h1>
          <icon-newtag class="new" v-if="child.new" />
        </div>
      </div>
      <div
        class="features"
        v-else-if="child.type === 'features'"
      >
        <div
          v-for="feature in child.features"
          v-animate="'fadeInUp'"
          class="feature"
        >
          <h2>{{ feature.title }}</h2>
          <div class="picture-wrapper">
            <a v-if="feature.image" class="picture-outer" target="_blank" :href="feature.ogImage || feature.image">
              <img :src="feature.image">
            </a>
          </div>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <div v-animate="'fadeInUp'" class="closer">
      <h1>Peaked your interest?</h1>
      <div class="closer-buttons">
        <NavLink
          class="action-button primary"
          :item="{ text: 'Invite Taco', link: '/invite/' }"
        />
        <NavLink
          class="action-button"
          :item="{ text: 'Read the Guide', link: '/guide/' }"
        />
        <NavLink
          class="action-button"
          :item="{ text: 'Join the Discord server', link: '/support/' }"
        />
      </div>
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Footer from '@theme/components/Footer.vue'
import Animate from '@theme/animate_scroll.js'
import ShowOnLoad from '@theme/show_on_load.js'
const { Carousel, Slide } = globalThis.window ? require('vue-carousel') : {}

export default {
  name: 'Home',
  components: { NavLink, Footer, Carousel, Slide },
  directives: {
    animate: Animate(),
    showOnLoad: ShowOnLoad()
  },
  data() {
    return {
      isMobile: window.innerWidth < 719
    }
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
feature-delay-range = 0..4
stats-delay-range = 0..4

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
      --animation-delay: .5s
      .slide-wrapper
        padding 8px
      .VueCarousel-inner
        visibility inherit !important
      .VueCarousel-dot-container
        margin-top 1rem !important
        .VueCarousel-dot
          margin-top 0 !important
          outline none
          &[aria-selected="false"]
            background-color var(--tertiaryText) !important
          &[aria-selected="true"]
            background-color var(--text) !important
      .picture-outer
        width auto
        position relative
        &:before
          background linear-gradient(290.3deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0) 100%)
      .caption
        display block
        margin-top 10px
        color var(--tertiaryText)
        font-weight 500
        font-style italic
    .hero
      display flex
      flex-direction column
      text-align center
      width 50%
      margin-left 2rem
      .mobile-wrapper
        display flex
        flex-direction column
        img
          object-fit contain
          align-self center
          width 50%
          filter drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
        h1
          font-size 3rem
          margin 0
        .description
          width 100%
          font-size 1.6rem
          line-height 1.3
          color var(--tertiaryText)
          margin 0
      .action-buttons
        display flex
        justify-content space-evenly
        align-self center
        flex-wrap wrap
        a + a
          margin-right .5rem
  .action-button
    display inline-block
    font-size 1.2rem
    color var(--accent)
    padding 0.8rem 1.6rem
    box-sizing border-box
    svg
      display none
    & + .action-button
      margin-left .5rem
    &:hover
      text-decoration underline
    &.primary
      color var(--counterAccent)
      background-color var(--accent)
      border-radius 4px
      border-bottom 1px solid var(--accentDark10)
      &:hover
        background-color var(--accentLight10)
        text-decoration none
  .picture-outer, .lightbox__thumbnail
    background-color var(--tertiaryBG)
    width auto
    height auto
    display block
    overflow hidden
    border-radius 10px
    filter drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
    &:before
      content ''
      position absolute
      top 0
      bottom 0
      left 0
      right 0
    .picture, img
      object-fit contain
      width 100%
      height 100%
      border-radius 10px
      margin-bottom -4px
  .features
    display flex
    flex-direction row
    flex-flow wrap
    justify-content center
    .picture-outer, .lightbox__thumbnail
      transition transform .2s ease
      &:before
        background-image linear-gradient(290.3deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0) 100%)
        transition background-image .2s ease
      &:hover
        transform scale(1.05)
        &:before
          background-image linear-gradient(291.27deg, rgba(0, 0, 0, 0.15) -6.05%, rgba(0, 0, 0, 0) 89.61%)
    .feature
      max-width calc(calc(100% / 3) - 20px)
      margin 10px 0
      padding 0 10px
      for i in (feature-delay-range)
        &:nth-child({i})
          animation-delay ((i - 1) / 2)s
      h2
        font-size 1.5rem
        margin 0
        padding 0
        border none
        font-weight 500
      p
        margin 0
        color var(--tertiaryText)
        line-height 1.2
      .picture-outer, .lightbox-picture
        margin 10px 0
  hr
    border-color var(--tertiaryBG)
    width 90%
  .content
    display flex
    align-items center
    flex-direction column
    & > *
      margin 44px 0
    hr
      margin 0
  .main-feature-header
    display flex
    align-items center
    flex-direction column
    span
      color var(--secondaryText)
      font-size 24px
      letter-spacing 0.05em
      text-align center
    .title-flex
      display flex
      align-items center
      svg
        width 48px
        height 48px
        &.new
          width unset
          height 24px
          color var(--accent)
      h1
        text-align center
        display inline-block
        margin 0 10px
        font-weight 700
        font-size 48px
        letter-spacing 0.05em
  .closer
    text-align center
    .closer-buttons
      display flex
      text-align center
      align-items center
      justify-content center
      h1
        margin-bottom 20px
      .action-button
        padding .4rem .8rem
        & + a
          margin-left 30px
  .stats-wrapper
    display flex
    flex-direction row
    text-align center
    align-items center
    justify-content center
    margin 44px 0
    .mobile-wrapper
      display flex
      flex-direction row
      text-align center
      align-items center
      justify-content center
      .stat
        display flex
        flex-direction row
        text-align center
        align-items center
        justify-content center
        position relative
        &:after
          content ''
          position absolute
          top 15px
          bottom 15px
          left -15px
          -webkit-box-sizing border-box
          box-sizing border-box
          width 100%
          pointer-events none
          z-index 0
        & + .stat
          margin-left 30px
          &:after
            border-left 1px solid var(--tertiaryBG)
        svg
          width 96px
          height 96px
          color var(--secondaryText)
        .stat-text
          padding 15px
          display flex
          flex-direction column
          text-align left
          justify-content start
          align-self center
          h2
            margin 0
            padding 0
            line-height 36px
            color var(--accent)
            font-size 36px
            display inline-block
            border none
          span
            color var(--text)
            font-size 14px
            margin-top 5px
        for i in (stats-delay-range)
          &:nth-child({i})
            animation-delay ((i - 1) / 4)s
  .loading-stats
    color var(--accent)
    width 100%
    height 96px
    margin 44px 0
@media (max-width: $MQNarrow)
  .home
    .landing
      .slideshow
        width 60%
      .hero
        width 40%
        .mobile-wrapper
          h1
            font-size 2rem
          .description
            font-size 1.3rem
      .action-button
        font-size 1rem
    .features .feature
      h2
        font-size 1.2rem
      p
        font-size 0.8rem
    .content > *
      margin 30px 0
    .main-feature-header
      span
        font-size 20px
      .title-flex
        svg
          width 36px
          height 36px
          &.new
            height 24px
        h1
          font-size 36px
    .stats-wrapper 
      margin 20px 0
      .mobile-wrapper .stat
        &:after
          left -10px
        & + .stat
          margin-left 20px
        svg
          width 60px
          height 60px
        .stat-text
          h2
            line-height 24px
            font-size 24px
          span
            font-size 14px
  .loading-stats
    height 75px
    margin 20px 0
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
        .mobile-wrapper
          flex-direction row
          align-items center
          text-align right
          .hero-text
            margin-left 5%
      .action-buttons
        align-items center
        width 100%
        .action-button
          padding 0.4rem 1rem
    .features
      flex-direction column
      width unset
      .feature
        max-width 100%
        for i in (feature-delay-range)
          &:nth-child({i})
            animation-delay 0s
        h2
          font-size 1.5rem
        p
          font-size 1rem
    .main-feature-header
      span
        font-size 16px
      .title-flex
        svg
          width 28px
          height 28px
          &.new
            height 20px
        h1
          font-size 28px
    .closer
      .closer-buttons
        flex-direction column
        .action-button + a
          margin-left 0
          margin-top 10px
    .stats-wrapper
      margin 20px 0
      flex-direction column
      .mobile-wrapper
        flex-direction column
        align-items flex-start
        .stat
          &:after
            content unset
          & + .stat
            margin-left 0
            margin-top 10px
          svg
            width 72px
            height 72px
          .stat-text
            h2
              line-height 36px
              font-size 36px
            span
              font-size 14px
        for i in (stats-delay-range)
          &:nth-child({i})
            animation-delay 0s
</style>