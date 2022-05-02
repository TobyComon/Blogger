<template>
    <div class="bg-dark container-fluid card m-2 shadow">
        <div class="">
            <div class="user-preview text-primary lighten-9 selectable" @click="gotoProfile">{{blog.creator.name}} <img class="" :src="blog.creator.picture" alt=""></div>
            <h3 class="text-warning"><strong> {{ blog.title }}</strong></h3>
            <p>{{ blog.body }}</p>
            <img class="img-fluid" :src="blog.imgUrl" alt="">
        </div>
        

    </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState.js'
export default {
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    setup(props){
        const router = useRouter()
        return {
            account: computed(() => AppState.account),
            goToProfile() {
                router.push({name: "Profile", params: {id: props.project.creatorId}})
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .user-preview{
        text-align: start;
        
    }
    .blog-img{
        size: 0em;
    }
    
</style>