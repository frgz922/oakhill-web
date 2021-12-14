export default {
  data: () => ({ isMobile: false }),

  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    if (process.client) {
      this.onResize();

      window.addEventListener("resize", this.onResize, { passive: true });
    }
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1200;
    },
  },
};
