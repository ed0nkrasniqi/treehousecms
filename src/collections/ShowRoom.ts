import { CollectionConfig } from "payload/types";

const Showroom: CollectionConfig = {
    slug: "showroom",
    auth:false,
    access:{
        read:() => true
    },
    
    fields:[ 
      
        {
            name: "showRooms",
            label: "Showroom",
            type: "array",
            fields: [
              {
                name:"houseName",
                label:"Name",
                type:'text'
              },
              {
                name: "houseImage",
                label: "House Image",
                type: "upload",
                relationTo: "media",
              },
             
            ],
          },
       
    ]
    
    }
    
    export default Showroom;