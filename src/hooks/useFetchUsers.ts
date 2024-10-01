import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/users');
      return response.data;
    },
  });
};
