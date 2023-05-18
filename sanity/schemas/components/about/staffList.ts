// staffList.js

export default {
  name: 'staffList',
  title: 'Staff List',
  type: 'document',
  fields: [
    {
      name: 'staffMembers',
      title: 'Staff Members',
      type: 'array',
      of: [{ type: 'staff' }],
    },
  ],
};