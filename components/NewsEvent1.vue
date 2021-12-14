<template>
    <div class="media">
        <div class="media-body">
            <fieldset class="form-fieldset">
                <legend> {{ event.location }}</legend>
                <div class="row">
                    <div class="col-3 pd-10">
                        <div class="thumbnail">
                            <n-link to="/event/event-details" class="image">
                                <img :src="event.imgSrc" :alt="event.title + ' Thumbnail'">
                            </n-link>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="form-group">
                            <label class="d-block tx-20 tx-bold"><n-link to="/event/event-details">{{ event.title }}</n-link></label>
                        </div>
                        <div class="form-group">
                            <label class="d-block"><span class="date">{{ event.date }}</span></label>
                        </div>
                    </div>
                </div>
            </fieldset>            

        </div>
    </div>

</template>

<script>
    export default {
        props: ['event']
    };
</script>
