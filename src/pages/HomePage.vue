<template>
        <h1 class="text-primary ">Blogs you follow</h1>
  <div class="container-fluid home">
    
  <Blog v-for="b in blogs" :key="b.id" :blog="b"/>
      
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { blogsService } from '../services/BlogsService.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getAll()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }

  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: start;
  text-align: center;
  user-select: none;
  
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
