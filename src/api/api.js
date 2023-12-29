import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    } catch (error) {
        console.error("Error fetching top albums:", error);
        throw error;
    }
};

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new albums:", error);
        throw error;
    }
};

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching songs:", error);
        throw error;
    }
};

export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching filters:", error);
        throw error;
    }
};
