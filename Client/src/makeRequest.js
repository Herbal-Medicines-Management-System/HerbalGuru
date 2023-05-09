import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization: "bearer " + '27bfc0b5c4db7e8bd0f84d691aa3396f6dfbb195a931e05c67774e9cf809cc0b84d69ffc52097870bbbb5ff449cea16b97b90df9bcbd83ba63832118ef51646eda7cca03aee04bf54dccd295cfaa971af73cb0542e268f26be082d5da5232fea665f30f83b081c65409e35c40dca153d6d79421a68a515328ee94f37d51feb9f',
    },
});