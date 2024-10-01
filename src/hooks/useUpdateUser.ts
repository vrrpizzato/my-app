import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedUser) => {
      const response = await axios.put(`http://localhost:3001/users/${updatedUser.id}`, updatedUser);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
};
