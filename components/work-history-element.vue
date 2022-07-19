<template>
  <div>
    <div class="space-30"></div>
    <b-container>
      <b-row>
        <b-col lg="2">
          <div v-if="work.company !== 'rugby-india'" class="space-10"></div>
          <div >
            <a :href="work.url" target="_blank">
              <b-img :src="work.logo" :id="work.company"  :width="work.width"></b-img>
            </a>
          </div>
        </b-col>
        <b-col lg="7">
          <div class="space-10"></div>
          <h3 class="designation">{{ work.designation }}</h3>
          <p class="company-work-desc mt-n1" >{{ work.desc }}</p>
        </b-col>
        <b-col lg="3">
          <div class="period">
          <p >
            <span v-if="work.current">
              <font-awesome-icon
                color="green"
                :icon="['fa', 'circle']"
                class="green-circle mr-1"
              /> </span
            > {{ work.period }} 
          </p>
          
          <p class="mt-n3 location" >{{ work.location }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="space-30"></div>
  </div>
</template>

<script>


// Animate Title Image from slowly showing 
// animate the text in the right in title area 
// animate green circle in work history
//animate the scroll bar button in the title area

export default {
  name: "WorkHistoryElement",
  props: {
    work: Object,
  },
};
</script>

<style lang="scss" scoped>
.designation {
  font-size: 18px;
}



.company-work-desc { 
  font-size:14px;
}

.green-circle { 
  border:1px solid green;
  border-radius:50px;
  padding:2px;
  font-size:10px;
}

//media only for Desktop 
@media only screen and (min-width: 800px) {

  .period { 
  float:right;

    .location { 
      float:right;
    }
  }

  #rugby-india { 
    margin:auto;
    display:block;
  }
}

//media only for Mobile 
@media only screen and (max-width: 800px) {

 
}



</style>

