<template>
    <header class="header-section header-shadow" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">
                    <!-- Header Logo Start -->
                    <div class="col-xl-3 col-auto">
                        <div class="header-logo">
                            <n-link to="/demo">
                                <img class="dark-logo" src="/images/demo/oakhill-logo.png" alt="logo dark">
                                <img class="light-logo" src="/images/demo/oakhill-logo.png" alt="logo light">
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Right Start -->
                    <div class="col-xl-3 col-auto">
                        <div class="header-right">
                            <div class="inner">
                                <!-- Header Login Start -->
                                <div class="header-login">
                                    <a href="https://openwealthfi.s3.amazonaws.com/demo/Final+UBS+(Canada)+Global+Merger+Arbitrage+Fund.pdf" target="_blank"><i class="far fa-file-download"></i>&nbsp; Download Offering Memorandum  </a>
                                </div>
                                <!-- <div class="header-login">
                                    <n-link to="/subscriptions/1" class="">  &nbsp;<i class="far fa-redo-alt"></i></n-link>
                                </div>   -->

                                <!-- Header Mobile Menu Toggle Start -->
                                <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                    <button class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                        <i class="icon-top"></i>
                                        <i class="icon-middle"></i>
                                        <i class="icon-bottom"></i>
                                    </button>
                                </div> 
                                <!-- Header Mobile Menu Toggle End -->
                            </div>
                        </div>
                    </div>
                    <!-- Header Right End -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            NavigationCinchy1: () => import('@/components/NavigationCinchy1'),
        },

        data(){
            return {
                isSticky: false,
                isHidden: true
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobilemenu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>