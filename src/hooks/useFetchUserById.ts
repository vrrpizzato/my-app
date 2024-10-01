import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchUserById = (id: number | string | undefined) => {
    return useQuery({
      queryKey: ['user', id], 
      queryFn: async () => {
        if (!id) {
          return null; 
        }
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        return response.data;
      },
      enabled: !!id, 
    });
  };