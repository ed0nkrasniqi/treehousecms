import { GlobalConfig } from "payload/types";
import { isAdmin } from "../acecss/isAdmin";
import { isEditor } from "../acecss/isEditor";
import { isEditorOrAdmin } from "../acecss/isEditorOrAdmin";
import type { Access, FieldAccess } from 'payload/types'
import type {User} from '../payload-types';

const About: GlobalConfig = {
  slug: "about",
 
  access: {
    read: () => true,
 
  },
  fields: [
    {
        name:'aboutImage',
        label:'Image',
        type:'upload',
        relationTo:'media'
    },
    {
        name:'aboutUs',
        label:'text',
        type:'text',
    }
  ],
};

export default About;