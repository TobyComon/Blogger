import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async getAll() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data
    }

    async getByQuery(params) {
        const res = await api.get('api/blogs', {params})
        logger.log(res.data)
        AppState.searchResults = res.data
    }

    async createBlog(newBlog) {
        const res = await api.post('api/blogs', newBlog)
        logger.log(res.data)
        AppState.blogs.push(res.data)
    }
}

export const blogsService = new BlogsService()