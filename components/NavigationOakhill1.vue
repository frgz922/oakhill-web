<template>
  <nav class="site-main-menu">
    <ul>
      <client-only>
        <li
          :class="[
            !menuItem.children.length ? 'position-static' : 'has-children',
          ]"
          v-for="menuItem in menuItems"
          v-bind:key="menuItem.name"
        >
          <n-link v-if="!menuItem.children.length" :to="menuItem.ref">
            <span class="menu-text">{{ menuItem.name }}</span>
          </n-link>
          <!-- TODO: Render deeper menus, for now 1 level is been rendiring -->
          <Fragment v-else>
            <n-link :to="menuItem.ref">
              <span class="menu-text">{{ menuItem.name }}</span>
            </n-link>
            <ul class="sub-menu">
              <li
                v-for="subMenu in menuItem.children"
                v-bind:key="subMenu.name"
              >
                <n-link :to="subMenu.ref">
                  <span class="menu-text">{{ subMenu.name }}</span>
                </n-link>
              </li>
            </ul>
          </Fragment>
        </li>
      </client-only>
    </ul>
  </nav>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Fragment },
  mounted() {
    this.fetchMenuData();
  },
  computed: {
    ...mapGetters({
      menuItems: "menu/getMenuItems",
    }),
  },
  methods: {
    ...mapActions({
      fetchMenuData: "menu/fetchMenuData",
    }),
  },
};
</script>

