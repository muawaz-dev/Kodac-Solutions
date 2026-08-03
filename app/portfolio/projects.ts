// Shared Portfolio Project Data - Used by the Portfolio page and the About page work preview

export type Category = 'All' | 'Ecommerce' | 'Local Business';

export interface Project {
  name: string;
  category: Exclude<Category, 'All'>;
  country: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: 'Ak Truck And Trailer Repair',
    category: 'Local Business',
    country: 'United States',
    description: 'Ak Truck and Trailer Repair is a truck and trailer repair shop located in the VA, United States. We built a clean and modern site for them.',
    tags: ['Custom Code', 'Next.js', 'Initial SEO'],
    image: '/portfolio/akttrepair.com.png',
    link: 'https://akttrepair.com',
  },
  {
    name: '52Logistics',
    category: 'Local Business',
    country: 'United States',
    description: 'A business based in the USA doing warehousing and fulfilment services. We built a clean and modern site for them.',
    tags: ['Custom Code', 'Next.js', 'Initial SEO'],
    image: '/portfolio/52logistics.com.png',
    link: 'https://52logistics.com/',
  },
  {
    name: 'Victory Communications',
    category: 'Local Business',
    country: 'United States',
    description: 'A business based in the USA doing communication services. We built a custom site for them.',
    tags: ['Hostinger Website Builder', 'Initial SEO'],
    image: '/portfolio/victorycomm.com.png',
    link: 'https://victorycomm.com/',
  },
  {
    name: 'Ma JDM Autos',
    category: 'Ecommerce',
    country: 'United States',
    description: 'Ma JDM Autos is a company in USA that deals in JDM cars. We built a woocommerce store with reserve features and responsive design.',
    tags: ['WooCommerce', 'Custom Theme', 'SEO'],
    image: '/portfolio/majdmauto.com.png',
    link: 'https://majdmauto.com',
  },
];

export const filters: Category[] = ['All', 'Ecommerce', 'Local Business'];
