<template>
    <div class="main-container">

        <HeaderDemo class="header-fluid" />

        <!-- <OffCanvasMobileMenu /> -->

        <!-- Event Comment Section Start -->
        <div class="event-comment-section section-padding-bottom mg-t-50">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title text-center mb-20" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">You're all set. </h2>
                            <p class="tx-gray-500">After submitting the subscription agreement, an email will be sent to you with a summary of your order and information from your dealer about how to fix subscriptions NIGO's . </p>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8 max-mb-30">
                                        <form>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                <label class="custom-control-label" for="customCheck1" checked>I consent to save my signature for future online subscriptions</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-2"></div>
                                    <div class="col-12 text-center">
                                        <a href="http://35.183.146.63/AssetManagement/Cinchy/API/Subscription%20API/GET%20Subscriptions?%40transactionId=1" target="_blank" class="btn btn-light">Proceed to DocuSign online</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Event Comment Section End -->

        <!-- <FooterStyleCinchy1 addClassName="light-color" addBackgroundColor="bg-navy-blue" /> -->

    </div>
</template>

<script>
    export default {
        components: {
            HeaderDemo: () => import('@/components/headers/HeaderDemo'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        head() {
            return {
                title: 'Subcriptions'
            }
        },
    };
</script>


