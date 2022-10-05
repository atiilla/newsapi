import axios  from 'axios';
export default function handler(req, res) {
    const {apiKey,country,category,page,pageSize} = req.query;
    axios.get(`https://arkakapi.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`)
    .then(response=>{
        res.status(200).json(response.data);
    })
}