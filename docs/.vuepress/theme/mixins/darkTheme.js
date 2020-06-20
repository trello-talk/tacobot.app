export default {
  data() {
    return {
      darkTheme: false
    };
  },

  mounted() {
    if (localStorage.getItem('dark-theme')) {
      this.darkTheme = localStorage.getItem('dark-theme') === 'true';
    } else {
      this.darkTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    }
    this.updateDarkTheme();
  },

  methods: {
    updateDarkTheme() {
      localStorage.setItem('dark-theme', this.darkTheme);
      if (this.darkTheme)
        return document.documentElement.classList.add('dark-theme');
      else document.documentElement.classList.remove('dark-theme');
    },
    toggleDarkTheme() {
      this.darkTheme = !this.darkTheme;
      this.updateDarkTheme();
    }
  },
};