// // staff.js

// import { IoPeopleCircleOutline as icon } from 'react-icons/io5';
// import { Rule } from '../../../types';

// interface StaffDocument {
//   role: string;
// }

// export default {
//   name: 'staff',
//   title: 'Staff',
//   type: 'document',
//   icon,
//   fields: [
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'role',
//       title: 'Role',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Clergy', value: 'clergy' },
//           { title: 'People', value: 'people' },
//           { title: 'Wardens', value: 'wardens' },
//         ],
//         layout: 'dropdown',
//       },
//     },
//     {
//       name: 'email',
//       title: 'Email',
//       type: 'string',
//       hidden: (document: StaffDocument) => document.role !== 'wardens',
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'bio',
//       title: 'Bio',
//       type: 'text',
//     },
//   ],
// };


// staff.ts

// staff.ts

import { IoPeopleCircleOutline as icon } from 'react-icons/io5';

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Clergy', value: 'clergy' },
          { title: 'People', value: 'people' },
          { title: 'Wardens', value: 'wardens' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({ parent }: { parent: { role: string } }) => {
        return parent.role !== 'wardens';
      },
      validation: (Rule: any) =>
        Rule.regex(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          },
        ).warning('Please enter a valid email address'),
    },
  ],
};