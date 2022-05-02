const { AppState } = require("../AppState.js");
const { logger } = require("../utils/Logger.js");
const { api } = require("./AxiosService.js");

class ProfilesService {
    async getProfile(id) {
        const res = await api.get('api/profiles/'+id)
        logger.log(res.data)
        AppState.activeProfile = res.data
    }
}

export const profilesService = new ProfilesService()