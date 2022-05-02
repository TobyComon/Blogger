<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img :src="profile.picture" alt=""/>
            </div>
        </div>
        <div v-if="profile.id ==account.id">
            <i class="text-light selectable ms-2 mdi mdi-pencil" @click="editing = true"></i>
        </div>

    </div>

</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js'
export default {
    setup(){
        const route = useRoute()
        const editing = ref(false)

        onMounted(async () => {
            try {
              await blogsService.getByQuery({creatorId: route.params.id})
              await profilesService.getProfile(id)
            } catch (error) {
              logger.error(error)
              Pop.toast(error.message, 'error')
            }
        })
        return {
            editing,
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.searchResults),
            account: computed(() => AppState.account),
            
        }
    }
}
</script>


<style lang="scss" scoped>

</style>