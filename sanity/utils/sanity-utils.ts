import { createClient } from 'next-sanity';

export async function getClient() {
  return createClient({
    projectId: 'ismdiz3z',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,
  });
}