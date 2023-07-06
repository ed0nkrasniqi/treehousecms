import { CollectionConfig } from "payload/types";

const Blog: CollectionConfig = {
  slug: "blog",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
        name:'blog',
        label:'Blog',
        type:'array',
        fields:[
            {
                name:'blogImg',
                label:'Blog Image',
                type:'upload',
                relationTo:'media',
            },
            {
                name:'blogTitle',
                label:'Blog Title',
                type:'text',
            }, 
 
        ]
    },
    {
      admin: {
        elements: [
          "h1",
          "h2",
          "h3",
          "h4",
          "link",
          "ul",
          "ol",
          "blockquote",
          "relationship",
          "upload",
        ],
      },
      type: "richText",
      name: "content",
      required: true,
      label: "Kontenti",
    },
    


   
 
 
  ],
};

export default Blog;
