import { GlobalConfig } from "payload/types";


const Footer: GlobalConfig = {
    slug: "footer",
   
    access: {
      read: () => true,
   
    },
    fields: [
      {
          name:'footerphone',
          label:'Numri Kontaktues',
          type:'text',
          required: true,
      },
      {
          name:'footeremail',
          label:'Email',
          type:'email',
          required: true,
      },  
      {
        name:'footeraddress',
        label:'Adresa',
        type:'text',
      },
      {
        name:'footerinstagram',
        label:'Instagram',
        type:'text',
        required: true,
      },
      {
        name:'footerfacebook',
        label:'Facebook',
        type:'text',
        required: true,
      },
    ],
  };
  
  export default Footer;