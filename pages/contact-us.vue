<template>
  <div class="main-container">
            <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Helping the best advisory and portfolio management teams in Canada." />

    <div class="contact-information-section section-padding-bottom pd-t-30">
      <div class="container">
        <div class="row margin-bottom-85">
          <div class="col-12">
            <div class="contact-title max-width-740">
              <!-- CMS -->
              <!-- <h2 class="title">{{ contactData.infoHeading }}</h2> -->

            </div>
          </div>
        </div>
        <div class="row row-30 row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
          <!-- address -->
          <div class="col max-mb-30">
            <div class="contact-info">
              <div class="icon">
                <i class="fal fa-map-marker-alt"></i>
              </div>
              <div class="info">
                <h4 class="title">{{ contactData.address.title }}</h4>
                <span class="info-text text-center" style="white-space: pre">{{
                  contactData.address.location
                }}</span>
                <br />
                <!-- <span class="info-text text-center" style="white-space: pre">{{
                  contactData.address.locationNumber
                }}</span>
                <span class="info-text text-center" style="white-space: pre"
                  ><a :href="'mailto:' + contactData.address.email">{{
                    contactData.address.email
                  }}</a></span
                > -->
              </div>
            </div>
          </div>
          <!-- phone/email -->
          <div class="col max-mb-30">
            <div class="contact-info">
              <div class="icon">
                <i class="fal fa-phone"></i>
              </div>
              <div class="info">
                <h4 class="title">{{ contactData.contact.title }}</h4>
                <span class="info-text">
                  Phone: <strong>647.479.5803</strong>
                  <br />
                  Mail:
                  <a href="mailto:info@oakhillfinancial.ca">info@oakhillfinancial.ca</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Maps iFrame -->
    <div class="container google-map-area section-padding-bottom">
      <div class="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.074396846593!2d-79.38094978416282!3d43.646620460873606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2d1ffa4113%3A0x39a68d24fc4035c0!2s161%20Bay%20St.%20%232460%2C%20Toronto%2C%20ON%20M5J%201C4%2C%20Canad%C3%A1!5e0!3m2!1ses!2sco!4v1638815258560!5m2!1ses!2sco"
          allowfullscreen=""
          class="col-md-12"
          height="450px"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <!--div class="contact-form-section section-padding text-center">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8">
            <div class="contact-title max-width-600">
              <h2 class="title">{{ contactData.contactFormHeader }}</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    GoogleMap: () => import("@/components/GoogleMap"),
    ContactForm: () => import("@/components/ContactForm"),
  },

  computed: {
    ...mapGetters({
      contactData: "contact-us/getContactData",
    }),
  },

  head() {
    return {
      title: "Contact Us",
    };
  },
};
</script>


