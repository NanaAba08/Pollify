import axios from 'axios';

const BASE_URL = 'https://api.pollsapi.com/v1'; // replace with your API base URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'api-key': 'TH9372BY1DMS1HPC8RHQVJAMGDH3' // replace with your API key
  }
});

const apiService = {
  async createPoll(pollData) {
    try {
      const response = await axiosInstance.post('/create/poll', pollData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to create poll');
    }
  }
};

export default apiService;