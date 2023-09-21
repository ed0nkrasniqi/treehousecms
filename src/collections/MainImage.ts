import { GlobalConfig } from "payload/types"
import Media from "./Media";

const MainImage: GlobalConfig = {
    slug: "mainimage",
  
    access: {
      read: () => true,
    },
    fields: [
  

        {
           name:'mainImg',
           label:'Home Image',
           type:'upload',
           relationTo: 'media'
        }
    ],
}

    export default MainImage;