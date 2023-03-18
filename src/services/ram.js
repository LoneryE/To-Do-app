import axios from "axios"

const useRamApi = () => {    
    const getFilterCharacters = async(name='', status='', gender='') => {
        try {
            const res = await axios(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`)
            const data = res.data
            console.log(data)
            return await data
        } catch (error) {
            throw new error(error)
        }
    }
    const getPageCharacters = async(page) => {
        try {
            const res = await axios(page)
            const data = res.data
            console.log(data)
            return await data
        } catch (error) {
            throw new Error(error)
        }
    }
    const getSearchCharacters = async(name='') => {
        try {
            const res = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`)
            const data = res.data
            console.log(data)
            return await data
        } catch (error) {
            throw new Error(error)
        }
    }
    const getFilterLocations = async(count=1) => {
        try {
            const res = await axios(`https://rickandmortyapi.com/api/location/${count}`)
            const data = res.data
            console.log(data)
            return await data
        } catch (error) {
            throw new Error(error)
        }
    }
    const getFilterEpisodes = async(count) => {
        try {
            const res = await axios(`https://rickandmortyapi.com/api/episode/${count}`)
            const data = res.data
            console.log(data)
            return await data
        } catch (error) {
            throw new Error(error)
        }
    }
    return{
        getFilterCharacters,
        getPageCharacters,
        getFilterLocations,
        getFilterEpisodes,
        getSearchCharacters
    }
}

export default useRamApi;