import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Testimonials from './collections/Testimonial';
import Projects from './collections/Projects';
import Contact from './collections/Contact';
import HomeSlider from './collections/HomeSlider';
import About from './collections/About';
import ContactInfo from './collections/ContactInfo';
import Footer from './collections/Footer';
import Blog from './collections/Blog';
import MainImage from './collections/MainImage';
import Showroom from './collections/ShowRoom';




export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,Media,Testimonials,Projects,Contact,HomeSlider,Blog,Showroom,
    // Add Collections here
    // Examples,
  ],
  globals: [
    About,ContactInfo,Footer,MainImage,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
