<template>
    <header class="header-section header-shadow" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">
                    <!-- Header Logo Start -->
                    <div class="col-xl-3 col-auto">
                        <div class="header-logo">
                            <n-link to="/">
                                <img class="dark-logo" src="/images/logo/cinchy_logo_dark.png" alt="logo dark">
                                <img class="light-logo" src="/images/logo/cinchy_logo_light.png" alt="logo light">
                                
                            </n-link>
                            
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Main Menu Start -->
                    <div class="col d-none d-xl-block position-static">
                        <NavigationCinchy1 />
                    </div>
                    <!-- Header Main Menu End -->

                    <!-- Header Right Start -->
                    <div class="col-xl-3 col-auto">
                        <div class="header-right">
                            <div class="inner">
                                <!-- Header Login Start -->
                                <div class="header-login">
                                    <a href="">
                                        Logout &nbsp;<i class="far fa-user-circle"></i>
                                    </a>
                                </div>
                                <!-- Header Login End -->

                                <!-- Header Search Start -->
                                <!-- <div class="header-search">
                                    <button class="header-search-toggle" @click="isHidden = !isHidden">
                                        <i class="far fa-search"></i>
                                    </button>
                                    <div class="header-search-form" v-show="!isHidden">
                                        <form>
                                            <input type="text" placeholder="Search...">
                                            <button>
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div> -->
                                <!-- Header Search End -->

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