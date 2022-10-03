import axios  from 'axios';
export default function handler(req, res) {
    const {apiKey,country,category} = req.query;
    axios.get(`https://arkakapi.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
    .then(response=>{
        res.status(200).json(response.data);
    })
 // res.status(200).json({ name: 'John Doe' })
}