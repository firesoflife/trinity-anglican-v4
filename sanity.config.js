import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import schemas from './sanity';
import schemas from './sanity/index';
import { visionTool } from '@sanity/vision';
import { deskStructure } from './sanity/config/deskStructure';

const sanityConfig = defineConfig({
  projectId: 'ismdiz3z',
  dataset: 'production',
  title: 'Trinity Anglican Church, Halifax, NS',
  apiVersion: '2023-05-14',
  basePath: '/admin',
  useCDN: false,

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: { types: schemas },
  // schema: createSchema({
  //   name: 'schemas',
  //   types: schemas
  // }),
});

export default sanityConfig;
