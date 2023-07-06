import { CollectionConfig } from "payload/types";

const Testimonials: CollectionConfig = {
    slug: "testimonials",
    auth:false,
    access:{
        read:() => true
    },
    
    fields:[ 
      
        {
            name: "testimonials",
            label: "Testimonials",
            type: "array",
            fields: [
              {
                name:"userName",
                label:"Name",
                type:'text'
              },
              {
                name: "userImage",
                label: "User Image",
                type: "upload",
                relationTo: "media",
              },
              {
                name:'userComment',
                label:'User Comment',
                type:'text'
              }
             
            ],
          },
       
    ]
    
    }
    
    export default Testimonials;