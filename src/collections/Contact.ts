import { CollectionConfig } from "payload/types";

const Contact: CollectionConfig = {
  slug: "contact",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'contactName',
      label:'Name',
      type:'text'
    },
    {
        name:'contactEmail',
        label:'Email',
        type:'email',
    },
    {
        name:'contactMessage',
        label:'Message',
        type:'text',
    },


   
 
 
  ],
};

export default Contact;
