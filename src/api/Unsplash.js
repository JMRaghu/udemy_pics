import axios from 'axios'


export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization: 'Client-ID 21d11f68f7b838eb313e0e02ea74fc2d4acf4bf3830177a3af1b84073b682f9e'
      }
});