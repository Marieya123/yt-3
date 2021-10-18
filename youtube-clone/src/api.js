import axios from 'axios'
console.log(process.env.REACT_APP_YOUTUBE_API_KEY)

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key:'AIzaSyAOzGZe78mlbYaeXseY40pws5TCe4xfK2s',
    },
})

export default request