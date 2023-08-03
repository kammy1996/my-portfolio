<template>
    <div>
        <div class="custom-container">

            <img :src="currentProject.image" :alt="currentProject.alt"/>
          

            <div class="project-content">
                <h3 class="title">{{ currentProject.name }}</h3>
                <div class="project-date">
                    <img width="20px" style="display:inline-block" src="~/static/images/clock.png" alt="">
                    <p style="display:inline; font-size:14px;">{{ currentProject.date }}</p>
                </div>
                <p class="project-desc">{{ currentProject.projectDescription }}</p>
                <p class="help-title" v-if="currentProject.helpText">How did I help?</p>
                <p class="help-text">{{ currentProject.helpText }}</p>
            </div>

   

            <div class="action-row">
                <div >
                    <p class="stack-title">Technology Stack</p>
                    <div class="tech-stack">
                        <div v-for="img in currentProject.stackImages">
                            <img :src="img.url" alt="img.alt">
                        </div>
                    </div>
                </div>
                <div >
                    <div class="text-center view-project-btn">
                        <b-btn class="projects-btn hvr-bounce-to-top" @click="goToProject">View Project ></b-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import projects from "@/model/projects";

export default {
    name: 'ProjectDetails',
    computed: {
        currentProject() {
            let project = projects.filter(project => project.key === this.$router.currentRoute?.params?.project)
            if (project && project.length > 0) {
                return project[0];
            }
        }
    },
    methods : { 
        goToProject() { 
            window.open(this.currentProject.link, `_blank`);
        }
    }

}
</script>
<style lang='scss' scoped>
@import "~/static/scss/hover.css";

.custom-container {
    margin: 50px 300px 100px 300px;

    img {
        max-width: 100%;
        display: block;
    }

    .title { 
        opacity:0.9;
        font-weight: 600;
        
    }

    .project-content {
        margin-top: 20px;
    }

    .project-date {
        margin-bottom: 20px;
        margin-top: -5px;
        opacity: 0.8;
     
    }

    p {
        font-size: 18px;
        opacity:0.9;
    }

    .help-title {
        font-weight: 500;
    }

    .stack-title {
        font-weight: 500;
        margin-bottom:10px;
    }

    .help-text {
        margin-top: -15px;
    }
}

.tech-stack {
    display: flex;

    img {
        width: 35px;
        margin: 5px;
    }
}

.projects-btn {
    background: transparent;
    color: black;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid black;
    z-index: 1;
}

.view-project-btn {
    margin-top: 20px;
}

.action-row { 
    display:flex;
     align-items: center;
      justify-content: space-between;
      margin-top:30px;
}


</style>