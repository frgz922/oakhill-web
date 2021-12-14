<template>
    <div class="footer-section" :class="addBackgroundColor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-5 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Address</h4>
                        <div class="footer-widget-content">
                            <div class="">
                                <p>5161 Bay Street, Suite 2460</p>
                                <p>Toronto, Ontario M5J 2S1</p>
                                <p>
                                    <a href="mailto:info@oakhillfinancial.ca">info@oakhillfinancial.ca</a>
                                </p>
                            </div>
                            <div class="footer-social-inline">
                                <a href="" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-4 col-sm-7 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Company</h4>
                        <div class="footer-widget-content">
                            <ul class="column-1">
                                <li>
                                    <a href="http://35.183.146.63/AssetManagement/Cinchy/">About Us</a>
                                </li>
                                <li>
                                    <n-link to="/fund-documents">Fund Documents</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Contact</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <a href="mailto:info@oakhillfinancial.ca">Sales</a>
                                </li>
                                <li>
                                    <a href="mailto:info@oakhillfinancial.ca">Client Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>

            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright">&copy; {{ new Date().getFullYear() }} <b>Oakhill Asset Management</b> </p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top fal fa-long-arrow-up"></i>
                <i class="arrow-bottom fal fa-long-arrow-up"></i>
            </back-to-top>
        </client-only>
    </div>
</template>

<script>
    export default {
        props: [
            'addClassName', 
            'addBackgroundColor' 
        ],
    }
</script>