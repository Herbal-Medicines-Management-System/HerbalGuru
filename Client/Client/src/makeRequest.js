import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization: "bearer " + '242d1964b3abc467ab240b2bdd412220169007bbc30b8490f6e823f141f8620dfd868137c34875d5ed68b48b2687926fa7f9d11f36679c47f46c397a3a04585ad592e4d58deee3e610f8afe5e91f2d3629360d59945f2a2f6b26011a8a47c883da0f617652a2f965f3ece0f0c9874acc129819d45db6aa2e0aaefa08204ebfe1',
    },
});