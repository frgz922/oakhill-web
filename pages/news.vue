<template>
    <div class="main-container">

        <HeaderStyleCinchy1 />

        <OffCanvasMobileMenu />

        <div class="">
            <div class="container">
                <!-- Course Top Bar Start -->
                <div class="row justify-content-between align-items-center pd-b-50 pd-t-20">
                    <div class="col-sm-auto col-12 max-mb-10">
                        <p class="result-count tx-20">Recent Partner News</p>
                    </div>
                    <div class="col-sm-auto col-12 max-mb-10">
                        <v-select :options="options" :placeholder="getSelectorPlaceholder"></v-select>
                    </div>
                </div>
                <!-- Course Top Bar End -->

                <div class="row pd-l-100 pd-r-100">
                    <div class="col-12 max-mb-30" data-aos="fade-up" v-for="event in eventData.events" :key="event.id">
                        <NewsEvent1 :event="event" />
                    </div>
                </div>

                <!-- Pagination Start -->
                <div class="row max-mt-50 mg-b-50">
                    <div class="col">
                        <paginate
                            :page-count="1"
                            :page-range="3"
                            :margin-pages="2"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination center'"
                            :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
                <!-- Pagination End -->
            </div>
        </div>

        <FooterStyleCinchy1 />

    </div>
</template>

<script>
    import eventData from '~/data/news-event'


    export default {
        components: {
            HeaderStyleCinchy1: () => import('@/components/cinchy/HeaderStyleCinchy1'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            NewsEvent1: () => import('@/components/NewsEvent1'),

            FooterStyleCinchy1: () => import('@/components/cinchy/FooterStyleCinchy1'),
        },

        data () {
            return {
                eventData,
                options: [
                    'Partner News', 
                    'Product Updates',
                    'Training',
                    'Spotlight'
                ],
                placeholderItem: 'Default'
            }
        },

        computed: {
            getSelectorPlaceholder: function () {
                return this.placeholderItem
            }
        },

        head() {
            return {
                title: 'Partner News'
            }
        },
    };
</script>


