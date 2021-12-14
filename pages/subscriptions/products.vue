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
                        <div class="section-title text-center mb-50" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">Ok, we'll need more details about your firm</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 col-12 mg-b-10">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1"> Select Product</label>
                                            <select class="custom-select custom-select-lg mb-3" id="exampleFormControlSelect1">
                                            <option>Select One</option>
                                            <option>Bitcoin Investment Trust Series ETF</option>
                                            <option>Global Merger Arbitrage Fund Class A</option>
                                            <option>Global Merger Arbitrage Fund Class B</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12 text-center">
                                        <n-link to="/subscriptions/3"><button class="btn btn-primary btn-hover-secondary btn-width-180 ">Next</button></n-link>
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


