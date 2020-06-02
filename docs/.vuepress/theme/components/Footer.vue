<template>
  <div class="footer">
    <div class="columns" v-if="config.columns && config.columns.length">
      <span class="column-opener">
        Made possible by the
        <NavLink :item="{ text: 'Trello Talk Team', link: '/guide/other/team/' }" /> 
        using <NavLink :item="{ text: 'Node.JS', link: 'https://nodejs.org/' }" />,
        <NavLink :item="{ text: 'VuePress', link: 'https://vuepress.vuejs.org/' }" /> and love.</span>
      <div class="column" v-for="column in config.columns">
        <span class="col-title">{{ column.title }}</span>
        <div class="links" v-if="column.rows" :class="column.rows.find(cell => !!cell.text) ? 'flex-down': ''">
          <a class="with-icon" v-for="cell in column.rows" v-if="cell.icon && cell.link" :title="cell.title" :href="cell.link">
            <component :is="'icon-' + cell.icon" />
            {{ cell.text }}
          </a>
          <NavLink v-else-if="cell.text && cell.link" :item="cell" />
        </div>
      </div>
    </div>
    <div class="fine-print" v-if="config.finePrints">
      <p v-for="finePrint in config.finePrints" v-if="!!finePrint">{{ finePrint }}</p>
      <br v-else />
    </div>
  </div>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
export default {
  name: 'Footer',
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    config () {
      return this.$site.themeConfig.footer || {}
    },
  }
}
</script>

<style lang="stylus">
.footer
  background-color lighten($imageBackground, 50%)
  background-image url('/logo_footer.png')
  background-repeat no-repeat
  background-size contain
  background-position right
  padding 1rem
  width calc(100% + 3rem)
  margin-left -2.5rem
  margin-top 5rem
  .columns
    display flex
    justify-content space-evenly
    .column-opener
      max-width 200px
    .column
      display flex
      flex-direction column
      .col-title
        margin-bottom 5px
        padding 0 3px
      .links
        display flex
        &.flex-down
          flex-direction column
        svg
          width 24px
          height 24px
        a
          font-weight normal
          &.with-icon + a.with-icon
            margin-left 5px
          &.nav-link
            padding 0 3px
            & + a.nav-link
              margin-top 5px
  .fine-print
    color $textColor
    font-size 10px
    margin 0
    p 
      margin .25rem 0
@media (max-width: $MQMobile)
  .footer
    background-image none
    width calc(100% + 1rem)
    margin-left -1.5rem
    .columns
      flex-direction column
      align-items center
      .column-opener
        max-width none
        margin-bottom 2rem
      .column
        align-self center
        & + .column
          margin-top 1rem
        .links
          justify-content center
    .fine-print
      margin-top 2rem
</style>