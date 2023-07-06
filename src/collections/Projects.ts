import { CollectionConfig } from "payload/types";
import { isEditorOrAdmin } from "../acecss/isEditorOrAdmin";
import { isEditor } from "../acecss/isEditor";

const Projects: CollectionConfig = {
  slug: "projects",
  auth: false,
  admin:{
    useAsTitle: 'prTitle',
  },
  access: {
    read: () => true,
    update: isEditorOrAdmin,
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
  },
  fields: [
    {
      name:'prTitle',
      label:'Title',
      type:'text',
      required: true,
    },

    {
      name: "prImages",
      label: "Project Images",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required:true,
        },
        {
          name:'imageDesc',
          label:'Image Description',
          type:'text',
        },
      ],
    },
    {
      name:'houseSquare',
      label:'House Square Metres',
      type:'number',
      required: true,
    },
    {
      name: "bedrooms",
      label: "Bedrooms",
      type: "number",
      required:true,
    },
    {
      name: "bathrooms",
      label: "Bathrooms",
      type: "number",
      required: true,
    },
    {
      name:'stories',
      label:'Stores',
      type:'number',
      required: true,
    },
 
    {
      name:'selectStyle',
      type:'select',
      required: true,
     
      options:[
    {
      label:'Modern House',
      value:'Modern House'
    },
    {
      label:'Classic House',
      value:'Classic House'
    }
    ]    
    },
    {
      name:'garage',
      type:'select',
      required: true,
     
      options:[
    {
      label:'Yes',
      value:'Yes'
    },
    {
      label:'No',
      value:'No'
    }
    ]    
    },
   
    {
      name: "floorImages",
      label: "Floor Images",
      type: "array",
      fields: [
        {
          name:"fltitle",
          label:"Title",
          type:'text'
        },
        {
          name: "flimage",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
       
      ],
    },
    {
      name: "moreImages",
      label: "Gallery Images",
      type: "array",
      fields: [
        {
          name: "galleryImages",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
       
      ],
    },
  ],
};

export default Projects;
