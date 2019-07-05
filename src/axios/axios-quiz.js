import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-86cd0.firebaseio.com/'
})