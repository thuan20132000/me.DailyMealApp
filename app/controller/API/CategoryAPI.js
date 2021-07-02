import config from "../../constants/config";
import axios from 'axios'

class CategoryAPI {
    constructor() {
        this.url = config.baseURL + `/categories.php`
        this.header = {
            'x-rapidapi-host': 'themealdb.p.rapidapi.com'
        }
    }

    async getAllCategories() {
        console.warn('url ',this.url)
        try {
            const response = await axios.get(this.url)
            return response.data
        } catch (error) {
            throw error
        }
    }

}

export default new CategoryAPI()