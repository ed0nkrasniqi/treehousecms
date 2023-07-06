import { CollectionConfig } from "payload/types";

const HomeSlider: CollectionConfig = {
  slug: "homeslider",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [

    {
      name: "firstsliderImages",
      label: "House Images",
      type: "array",
      fields: [
        {
          name: "hsImage",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name:'houseName',
          label:'houseName',
          type:'text',
        },
        {
          name:'houseSq',
          label:'Square Metres',
          type:'number'
        },
        {
          name:'houseStyle',
          label:'House Style',
          type:'text'
        },
        {
          name:'hStories',
          label:'Stories',
          type:'text'
        },
        {
          name:'hBedrooms',
          label:'Bedrooms',
          type:'text'
        },
        {
          name:'hBathrooms',
          label:'Bathrooms',
          type:'text'
        },
        {
          name:'hasGarage',
          label:'Garage',
          type:'text'
        },
      ],
    },

   

  ],
};

export default HomeSlider;
