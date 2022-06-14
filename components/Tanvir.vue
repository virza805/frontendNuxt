<template>


  <div id="logo_left"   v-bind="$attrs">
  <div class="drop_btn drop_con">{{ title }}</div>
                <h2 class="d-inline">
                    <span>T</span>
                    <span>A</span>
                    <span>N</span>
                    <span>V</span>
                    <span>I</span>
                    <span>R</span>

      <slot />
                </h2>
            </div>

</template>
<script>
  export default {
    inheritAttrs: false,
    props: {
      title:{
        type: String,
        // require: flase,
      },
    },


  }

</script>

<style scoped>
/*CSS Section JAMPING # 15/2/2020 9:29am Start*/

#logo_left h2{
	transform:translate(-50%,-50%);
	margin:0px;
	padding:0px;
	position:absolute;
	/*
	top:7%;
	left:31%;
	*/

	}
#logo_left h2 span{
	color:#262626;
	background:#fff;
	padding:10px 15px;
	font-family:arial;
	display:table-cell;
	box-shadow:inset 0 0 5px rgba(0,0,0,.3),0 5px 0 #ccc;
animation: animate 2s infinite;
}

	@keyframes animate{
		0%{
			transform:translateY(0px);
			box-shadow:inset 0 0 5px rgba(0,0,0,.3),0 5px 0 #ccc,0 15px 5px rgba(0,0,0,0);
		}
		50%{
			transform:translateY(-20px);
			box-shadow:inset 0 0 5px rgba(0,0,0,.3),0 5px 0 #ccc,0 15px 5px rgba(0,0,0,.6);
		}
		100%{
			transform:translateY(0px);
			box-shadow:inset 0 0 5px rgba(0,0,0,.3),0 5px 0 #ccc,0 15px 5px rgba(0,0,0,0);
		}

	}
#logo_left h2 span:nth-child(1){
	animation-delay:.6s;
}
#logo_left h2 span:nth-child(2){
	animation-delay:1.2s;
}
#logo_left h2 span:nth-child(3){
	animation-delay:1.8s;
}
#logo_left h2 span:nth-child(4){
	animation-delay:2.4s;
}
#logo_left h2 span:nth-child(5){
	animation-delay:3s;
}
#logo_left h2 span:nth-child(6){
	animation-delay:3.6s;
}
/*CSS Section JAMPING # 15/2/2020 12:37am End*/
</style>
