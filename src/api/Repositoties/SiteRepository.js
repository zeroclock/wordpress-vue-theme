import Repository from "../Repository"
import _ from 'lodash'

const resource = "/siteinfo"
export default {
    getSiteInfo(callback) {
        return Repository.get(
            `${resource}`
        )
        .then(response => {
            callback(response.data)
        })
        .catch(e => {
            callback(e)
        })
    }
}
