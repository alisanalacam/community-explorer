
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGroups = async (category?: string) => {
  try {
    const params = category && category !== 'all' ? { category } : {};
    const response = await api.get('/groups', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching groups:', error);
    return [];
  }
};

export const getGroupBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/groups/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching group with slug ${slug}:`, error);
    return null;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signup = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  referralCode?: string;
}) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await api.post('/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error('Password reset request error:', error);
    throw error;
  }
};

export default api;
