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
                            <h2 class="title fz-48 heading-color">We'll need some info to get started</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <label for="exampleFormControlSelect1">First Name</label>

                                        <input type="text" placeholder="First Name" name="fName">
                                    </div>
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <label for="exampleFormControlSelect1">Last Name</label>
                                        <input type="email" placeholder="Last Name" name="lName">
                                    </div>
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <label for="exampleFormControlSelect1"> Business Email</label>
                                        <input type="text" placeholder="Corporate Email" name="email">
                                    </div>
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <label for="exampleFormControlSelect1"> Phone Number</label>
                                        <input type="text" placeholder="Primary Phone Number" name="phone">
                                    </div>
                                    <!-- <div class="form-row">
                                                <div class="form-group col-md-5">
                                                <label>Birthday</label>
                                                <select class="custom-select">
                                                    ...
                                                </select>
                                                </div>
                                                <div class="form-group col-md-3 d-flex align-items-end">
                                                <select class="custom-select">
                                                    ...
                                                </select>
                                                </div>
                                                <div class="form-group col-md-4 d-flex align-items-end">
                                                <select class="custom-select">
                                                    ...
                                                </select>
                                                </div>
                                            </div> -->

                                    <div class="col-12 text-center">
                                        <n-link to="/subscriptions/2"><button class="btn btn-primary btn-hover-secondary btn-width-180 ">Next</button></n-link>
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


