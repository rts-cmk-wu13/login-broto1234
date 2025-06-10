import queryClient from '../queryClient';
import { redirect } from 'react-router';

export async function statements() {

  return queryClient.fetchQuery({
    queryKey: ['statements'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/statements');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}

export async function secretsLoads() {
  const token = sessionStorage.getItem('token');
  if (!token) {
    throw redirect('/login');
  }

  return queryClient.fetchQuery({
    queryKey: ['secrets'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/secrets',
        {
          headers: {     
            Authorization: `Bearer ${token}`,
          }, 
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}