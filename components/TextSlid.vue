<template lang="">

  <div>
  
<div class="hero_title" v-bind="$attrs">
  <div class=" ">{{ title }}</div>
  <h2>
      <span>Be Smart</span>
  </h2>
</div>


  </div>

</template>
<script>
export default {

    inheritAttrs: false,
    props: {
      title:{
        type: String,
        // require: true,
      },
    },
    head: {
      script: [{
        type: 'text/javascript',
        src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11",
        body: true,
        async: true,
        crossorigin: "anonymous"
      },
      {
        type: 'text/javascript',
        src: "/js/textSlider.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
      }, ],
    }
}
</script>


<style lang="">

</style>
