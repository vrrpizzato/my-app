import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser) => {
      const response = await axios.post('http://localhost:3001/users', newUser);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
};
