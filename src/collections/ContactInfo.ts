import { GlobalConfig } from "payload/types";


const ContactInfo: GlobalConfig = {
    slug: "contact-info",
   
    access: {
      read: () => true,
   
    },
    fields: [
      {
          name:'phone',
          label:'Numri Kontaktues',
          type:'text',
          required: true,
      },
      {
          name:'email',
          label:'Email',
          type:'email',
          required: true,
      },
      {
        name:'instagram',
        label:'Instagram',
        type:'text',
        required: true,
      },
      {
        name:'facebook',
        label:'Facebook',
        type:'text',
        required: true,
      },
    ],
  };
  
  export default ContactInfo;