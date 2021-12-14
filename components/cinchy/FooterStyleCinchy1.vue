<template>
    <div class="footer-section" :class="addBackgroundColor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-5 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Address</h4>
                        <div class="footer-widget-content">
                            <div class="">
                                <p>530 Adelaide St West</p>
                                <p>Toronto, Ontario</p>
                                <p>
                                    <a href="mailto:info@cinchy.com">info@cinchy.com</a>
                                </p>
                            </div>
                            <div class="footer-social-inline">
                                <a href="https://twitter.com/itscinchy?lang=en" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/cinchy" target="_blank">
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
                                    <n-link to="">Platform</n-link>
                                </li>
                                <li>
                                    <n-link to="">About</n-link>
                                </li>
                                <li>
                                    <n-link to="/blog/blog-grid">News</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Contact</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <a href="mailto:partnerships@cinchy.com">Partnerships</a>
                                </li>
                                <li>
                                    <a href="mailto:sales@cinchy.com">Sales</a>
                                </li>
                                <li>
                                    <a href="mailto:support@cinchy.com">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright">&copy; {{ new Date().getFullYear() }} <b>Cinchy Inc.</b> </p>
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