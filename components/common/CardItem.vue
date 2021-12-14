<template>
<div class="">
  <div class="card-body">

    <div class="card-item pd-30">
      <div class="thumbnail">
        <slot name="thumbnail"></slot>
      </div>
      <div class="info">
        <h3 class="title">
          <slot name="title"></slot>
        </h3>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>

  </div>

</div>


</template>


