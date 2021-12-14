<template>
  <header
    class="header-section header-shadow"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="header-inner">
      <div class="container position-relative">
        <div class="row justify-content-between align-items-center">
          <!-- Header Logo Start -->
          <div class="col-xl-2 col-auto">
            <div class="header-logo">
              <n-link to="/">
                <img
                  class="dark-logo"
                  src="/images/demo/oakhill-logo.png"
                  alt="logo dark"
                />
                <img
                  class="light-logo"
                  src="/images/demo/oakhill-logo.png"
                  alt="logo light"
                />
              </n-link>
            </div>
          </div>
          <!-- Header Logo End -->

          <!-- Header Main Menu Start -->
          <div class="col d-none d-xl-block position-static">
            <NavigationOakhill1 />
          </div>
          <!-- Header Main Menu End -->

          <!-- Header Right Start -->
          <div class="col-xl-3 col-auto">
            <div class="header-right">
              <div class="inner">
                <!-- Header Login Start -->
                <div class="header-login site-main-menu">
                  <client-only>
                    <a v-if="!isAuthenticated" v-on:click="handleLogin"
                      >Advisor Login &nbsp;<i class="far fa-user-circle"></i
                    ></a>
                    <div class="site-main-menu" v-else>
                      <ul>
                        <li class="has-children">
                          <a>
                            <span class="menu-text"
                              >{{ userFullName }} &nbsp;<i
                                class="far fa-user-circle"
                              ></i>
                            </span>
                          </a>
                          <ul class="sub-menu">
                            <li>
                              <span class="menu-text"
                                ><a v-on:click="handleLogout">
                                  <span class="menu-text"
                                    >Logout &nbsp;<i
                                      class="far fa-sign-out"
                                    ></i>
                                  </span>
                                </a>
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                                        <n-link to="/register" v-if="!isAuthenticated" v-on:click="handleLogin">
                      Advisor Sign Up
                    </n-link>

                  </client-only>
                </div>
                <!-- Header Login End -->

                <!-- Header Search Start -->
                <!-- <div class="header-search">
                                    <button class="header-search-toggle" @click="isHidden = !isHidden">
                                        <i class="far fa-search"></i>
                                    </button>
                                    <div class="header-search-form" v-show="!isHidden">
                                        <form>
                                            <input type="text" placeholder="Search...">
                                            <button>
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div> -->
                <!-- Header Search End -->

                <!-- Header Mobile Menu Toggle Start -->
                <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                  <button
                    class="toggle"
                    @click="mobiletoggleClass('addClass', 'show-mobile-menu')"
                  >
                    <i class="icon-top"></i>
                    <i class="icon-middle"></i>
                    <i class="icon-bottom"></i>
                  </button>
                </div>
                <!-- Header Mobile Menu Toggle End -->
              </div>
            </div>
          </div>
          <!-- Header Right End -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: {
    NavigationCinchy1: () => import("@/components/NavigationCinchy1"),
  },

  data() {
    return {
      isSticky: false,
      isHidden: true,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      userFullName: "auth/getUserFullName",
    }),
  },

  methods: {
    ...mapMutations({
      setUserFullName: "auth/setUserFullName",
      setToken: "auth/setToken",
    }),
    ...mapActions({
      clearAuthData: "auth/clearAuthData",
    }),
    handleLogin() {
      this.$router.push({ name: "silent-login" });
    },
    handleLogout() {
      this.$router.push({ path: "/silent-logout" });
    },
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (el) {
        if (addRemoveClass === "addClass") {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      }
    },
  },
};
</script>
