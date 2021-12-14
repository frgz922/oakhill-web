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
                            <h2 class="title fz-48 heading-color">Enter your clients subscription details below</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row mg-t-50">
                    
                    <div class="col-12">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-8 max-mb-30">

                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                <label for="inputEmail4">First Name</label>
                                                <input type="text" class="form-control" id="" placeholder="First Name">
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="inputPassword4">Last Name</label>
                                                <input type="text" class="form-control" id="" placeholder="Last Name">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                <label for="inputEmail4">Email Address</label>
                                                <input type="text" class="form-control" id="" placeholder="Email Address of Client">
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="inputPassword4">Phone Number</label>
                                                <input type="text" class="form-control" id="" placeholder="Phone Number">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">Address</label>
                                                <input type="text" class="form-control" id="inputAddress" placeholder="Street Name, Number">
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress2">Address 2</label>
                                                <input type="text" class="form-control" id="inputAddress2" placeholder="Unit, Suite">
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                <label class="custom-control-label" for="customCheck1">The Subscriber wishes to receive electronic copies of documents from the Trust and Manager:</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                <label class="custom-control-label" for="customCheck2">The Subscriber consents to receiving reports, promotional e-mails and other commercial electronic
                                                    messages from the Manager or from other service providers on behalf of the Manager:
                                                </label>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                    <div class="col-2"></div>
                                    <div class="col-12 text-center">
                                        <n-link to="/subscriptions/4"><button class="btn btn-light">Submit Client Details</button></n-link>
                                    </div>
                                </div>
                            </form>
                        </div>


                        
                    </div>
                    <div class="col-lg-2"></div>
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


