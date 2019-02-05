import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID ecb0850d9f40b41be2ad14fcb56a4e10488caf3f4c56a725445ed6d1085da5e4'
    }
})