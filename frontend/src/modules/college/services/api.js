import axios from 'axios';

const COLLEGE_API_URL = 'https://your-college-api-url.com';

export const fetchCollegeData = async (endpoint) => {
  try {
    const response = await axios.get(`${COLLEGE_API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching college data:', error);
    throw error;
  }
};
