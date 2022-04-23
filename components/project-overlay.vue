<template>
  <div>
    <div class="overlay ">
      <b-row class="pt-3">
        <b-col lg="8">
          <h5 class="overlay-title" >{{ project.name }}</h5></b-col
        >
        <b-col lg="4">
          <p class="project-date" style="text-shadow:3px 3px 10px black">
            <font-awesome-icon :icon="[`fa`, 'clock-rotate-left']" />
            {{ project.date }}
          </p>
        </b-col>
      </b-row>

      <p class="overlay-text mt-n3" style="text-shadow:3px 3px 10px black">
        {{ project.text }}
      </p>
      <p class="stack-title">Tech Stack</p>
      <div class="line mt-n2 mb-2"  ></div>
      <b-row >
        <b-col lg="6"
          ><div class="project-stack-images">
          
              <b-img
                v-for="(img,index) in project.stackImages"
                :src="img"
                :key="index"
                class="mx-1"
                width="20%"> </b-img>

            </div>
        </b-col>
        <b-col lg="6">
          <a class="project-link"  :href="project.link"
            >View Project
            <font-awesome-icon class="project-link-icon" :icon="['fa', 'arrow-up-right-from-square']"
          /></a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProjectOverlay",
  props: { 
    project:Object,
  },
  methods: { 

  }
};
</script>

<style lang="scss" scoped>




.overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.05) ,rgba(0,0,0,1) );
  height: auto;
  width: 500px;
  color: white;
  padding:8px 20px 20px 20px;
  position:absolute;
  bottom:0;

  .overlay-title { 
    text-shadow:2px 2px 10px black;
  }

  .overlay-text {
    font-size: 14px;
    width: 350px;
    text-shadow:5px 5px 10px solid black;
  }

  .stack-title {
    text-transform: uppercase;
    text-shadow:3px 3px 5px solid black;
  }



  .project-link { 
    color:white !important;
    font-size:14px;
    font-weight:300;
    float:right;
    cursor:pointer;
    text-shadow:2px 2px solid black;
  }

  .line { 
    background: white;
    opacity:0.8;
    height:0.5px;
    text-shadow:2px 2px solid black;
  }

  .project-link:hover + .project-link-icon { 
    margin-left:5px;
  }

.project-date { 
  float:right;
  font-size:14px;

}
 
}


</style>
