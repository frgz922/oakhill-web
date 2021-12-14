<template>
  <div class="mt-sm-50 mt-xs-50">
    <h3 class="title">
      Advisor Registration
    </h3>
    <b-alert variant="danger" :show="showAlert">Something went wrong during registration, please try again.</b-alert>

    <form class="register-form" v-on:submit.prevent>
      <div class="single-input mb-30">
        <label for="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          v-model="formData.firstName"
          required
        />
      </div>
      <div class="single-input mb-30">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          v-model="formData.lastName"
          required
        />
      </div>
      <div class="single-input mb-30">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="single-input mb-30">
        <label for="dealer">Dealer</label>
        <select class="custom-select" name="dealer" v-model="formData.dealer">
        <option
          :value="dealer.dealerName"
          v-for="(dealer, index) in dealers"
          :key="index"
          >{{ dealer.dealerName }}</option
        >
      </select>
      </div>
      <div class="single-input mb-30">
        <label for="company">Dealer ID</label>
        <input
          type="text"
          id="dealerId"
          name="dealerId"
          placeholder="Enter Dealer Code"
          v-model="formData.dealerRepId"
          required
        />
      </div>
      <div class="single-input">
        <button class="btn btn-dark btn-width-100" v-on:click="submitForm" :disabled="!isFormValid">
          Submit Registration
        </button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        dealerRepId: "",
        dealer: ""
      },
      showAlert: false,
      dealers: []
    };
  },
  async mounted() {
      this.dealers = await this.$fetchCinchyQuery(
        "getDealerCode",
        this.formData,
        'Subscription API',
      );
  },
  computed: {
      isFormValid() {
          return this.formData.firstName && this.formData.lastName && this.formData.email && this.formData.dealerRepId;
      }
  },
  methods: {
    async submitForm() {
      let response = await this.$fetchCinchyQuery(
        "setNewAdvisorRegistration",
        this.formData,
        'Website',
        true
      );

      if (response) {
        this.$router.push("/registration/thank-you");
      } else {
          this.showAlert = !this.showAlert;
      }
    },
  },
};
</script>
