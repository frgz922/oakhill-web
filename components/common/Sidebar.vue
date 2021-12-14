<template>
  <div class="sidebar-widget-wrapper pr-0">
    <div class="sidebar-widget">
      <div class="sidebar-widget-content">
        <div class="sidebar-entry-course-info">
          <slot v-if="$slots.contentHeader" name="contentHeader"></slot>
          <div class="course-meta">
            <div
              class="course-lectures"
              v-for="(item, index) in bodyContent"
              :key="index"
            >
              <span class="meta-label">
                <i :class="`far fa-${item.icon}`"></i>
                {{ item.label }}
              </span>
              <span class="meta-value">{{ item.value }}</span>
            </div>
          </div>
          <slot v-if="$slots.contentFooter" name="contentFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bodyContent"],
};
</script>
