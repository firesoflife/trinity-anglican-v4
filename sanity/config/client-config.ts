const myClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: '2023-05-14',
  useCDN: false,
}

export default myClientConfig