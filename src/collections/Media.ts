import { CollectionConfig } from "payload/types";
import path from "path";
import { isEditorOrAdmin } from "../acecss/isEditorOrAdmin";
const Media: CollectionConfig = {
    slug:"media",
    admin: { 
        useAsTitle: "name"
    },
    access : {
        read: ()=> true ,
        create : isEditorOrAdmin,
        update : isEditorOrAdmin,
        delete: isEditorOrAdmin,
    },
    upload: { staticDir: path.resolve(__dirname, "../../media"),},
    fields: [
        {
            name:"imageTitle",
            label:"Title of the Image",
            type:"text",
        },
        {
            name:"img",
            label:"Upload Image",
            type:"upload",
            relationTo:"media",
        }
    ]

}

export default Media;