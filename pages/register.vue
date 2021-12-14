<template>
  <div class="main-container">
    <div
      class="become-an-instructor-section section-padding" style="background:#E63E6D">
      <div class="container">
        <div class="row">
          <div class="col-xl-3"></div>
          <div class="col-xl-6">
            <div class="instructor-register-from">
              <AdvisorRegisterForm />
            </div>
          </div>
          <div class="col-xl-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Advisor Registration",
    };
  },
};
</script>
