<template>
  <b-tab :title="item.tabTitle" item.isActive>
    <div class="h-auto">
      <slot v-if="$slots.contentBody" name="contentBody"></slot>
    </div>
  </b-tab>
</template>

<script>
export default {
  props: ["item"],
};
</script>
