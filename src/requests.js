const API_KEY = process.env.REACT_APP_API_KEY;


const requests = {
    fetchToprated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`,
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowplaying:`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest:`/movie/latest?api_key=${API_KEY}&language=en-US`
}

export default requests;

