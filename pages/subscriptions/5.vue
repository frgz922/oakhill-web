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
                            <h2 class="title fz-48 heading-color">You must meet at least one of the following criteria to be able to make this investment.</h2>
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
                                                <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" name="customRadio" id="customRadio2">
                                                <label class="custom-control-label" for="customRadio2">
                                                    Your net income before taxes was more than $200,000 in each of the 2 most recent calendar years, and you expect
                                                    it to be more than $200,000 in the current calendar year. (You can find your net income before taxes on your
                                                    personal income tax return.)
                                                </label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" name="customRadio" id="customRadio3">
                                                <label class="custom-control-label" for="customRadio3">
                                                    Your net income before taxes combined with your spouse's was more than $300,000 in each of the 2 most recent
                                                    calendar years, and you expect your combined net income before taxes to be more than $300,000 in the current
                                                    calendar year
                                                </label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" name="customRadio" id="customRadio4">
                                                <label class="custom-control-label" for="customRadio4">
                                                    Either alone or with your spouse, you own more than $1 million in cash and securities, after subtracting any debt
                                                    related to the cash and securities.
                                                </label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="customRadio" id="customRadio6">
                                                    <label class="custom-control-label" for="customRadio6">
                                                        Either alone or with your spouse, you have net assets worth more than $5 million. (Your net assets are your total
                                                        assets (including real estate) minus your total debt.)
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <n-link to="/subscriptions/5A"><button class="btn btn-light btn-width-180">Agree</button></n-link>
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


