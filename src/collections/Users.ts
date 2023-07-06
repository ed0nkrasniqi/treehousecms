import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../acecss/isAdmin';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    update: isAdmin, 
    delete: isAdmin,
    create: isAdmin,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name:'email',
      label:'email',
      type: 'email',
      required: true
    },
    {
      name: 'role',
      label: 'role',
      type: 'select',
      required: true,
      options:[
        {
          value:'admin',
          label:'admin'
        },
        {
          value:'editor',
          label:'editor'
        },
      ]
    }
  ],
};

export default Users;