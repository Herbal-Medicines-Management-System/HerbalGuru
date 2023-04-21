import axios from 'axios';

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(
            process.env.REACT_APP_API_URL + url,
            {
                headers: {
                    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
};