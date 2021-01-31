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
          <span v-else-if="cell.darkbtn" class="dark-btn" @click="$parent.toggleDarkTheme">
            {{ $parent.darkTheme ? 'Light theme?' : 'Dark theme?' }}
          </span>
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
import NavLink from '@theme/components/NavLink.vue'
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
  background-color var(--footer)
  background-image url('/logo_footer.png')
  background-repeat no-repeat
  background-size contain
  background-position right
  padding 1rem
  width calc(100% - 2rem)
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
      .links
        display flex
        align-self center
        &.flex-down
          flex-direction column
        a
          font-weight normal
          &.with-icon
            & + a.with-icon
              margin-left 5px
            & > svg
              width 24px
              height 24px
          &.nav-link
            & + a.nav-link, & + .dark-btn
              margin-top 5px
  .fine-print
    color var(--text)
    font-size 10px
    margin 0
    p 
      margin .25rem 0
  .dark-btn
    border-radius 20px
    background-color var(--text)
    color var(--primaryBG)
    font-weight bold
    padding 2px 7px
    cursor pointer
@media (max-width: $MQMobile)
  .footer
    background-image none
    .columns
      flex-wrap wrap
      .column-opener
        max-width none
        margin-bottom 2rem
      .column
        align-self flex-start
        .links
          justify-content center
    .fine-print
      margin-top 2rem
</style>