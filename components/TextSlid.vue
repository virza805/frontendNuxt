<template lang="">

  <div class="dropdown"  v-bind="$attrs">
    <div class="drop_btn drop_con">{{ title }}</div>
    <div class="dropdown-con">
      <slot />
    </div>


    <div class="hero_title">
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
        require: true,
      },
    },
    head: {
      script: [{
        type: 'text/javascript',
        src: "/js/dropdown.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
      }, ],
    }
}
</script>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
    	<script>
			jQuery(document).ready(function () {
				document.querySelector('.hero_title h2 span').textContent = '';

				var typed = new Typed('.hero_title h2 span', {
					strings: ["Be Smart","Be Safe","Be Connected"],
					typeSpeed: 70,
					startDelay: 0,
					backSpeed: 60,
					backDelay: 1400,
					loop: true,
					showCursor: true,
					cursorChar: '',
					autoInsertCss: false
				});

				//mobile
			});
</script>

<style lang="">

</style>
