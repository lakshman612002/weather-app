import axios from 'axios';

const API_KEY = '7eda009bce7775fa112c2bcb09ce103a';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message);
        if (error.response) {
            return error.response.data;
        } else {
            return { message: 'Unable to fetch weather data' };
        }
    }
}
