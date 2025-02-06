import sholaPics from '../assets/images/Blogpg/writers/shola.jpg';
import wunmiPics from '../assets/images/Blogpg/writers/omowunmi.jpg';
import tinaPics from '../assets/images/Blogpg/writers/tina.jpg';
import Eximg from '../assets/images/Blogpg/relationship.jpg';
import mentorshipimg from '../assets/images/Blogpg/mentor.jpeg';
import marketimg from '../assets/images/Blogpg/market.jpg';



const blogData = [
  {
    slug: "Should-I-Remain-Friends-with-Ex",
    title: "Should I Remain Friends With My Ex?",
    excerpt: "Is it the best descision to remain friends with someone that is your Ex?",
    image: <img src={Eximg} alt="#" className='w-full rounded-[10px] object-cover h-full' />,
    date: "12/07/2024",
    writer: "Olushola Ogunkelu",
    writerDp: <img src={sholaPics} alt='writer image' className='w-[50px] h-[50px] rounded-full' />, 
    category: 'Relationship series',
    content: '',
  },
  {
    slug: "Mentorship-system-with-David",
    title: "Spotlight On The Mentorship System With David Adesanya",
    excerpt: "Mentorship is one the fastest way to grow in any given career. Pick you mentor wisely and watch yourself grow.",
    image: <img src={mentorshipimg} alt="#" className='w-full object-cover rounded-[10px] h-full' />,
    date: "12/07/2024",
    writer: "Omowunmi Esther",
    writerDp: <img src={wunmiPics} alt='writer image' className='w-[50px] h-[50px] rounded-full' />, 
    category: 'Mentorship',
    content: '',
  },
  {
    slug: "Navigating-ATL-Marketplace",
    title: "Navigating The Online MarktetPlace: Insight From a New Vendor in ATL Marketplace.",
    excerpt: "Imagine having a mentor who encourages onging education and adaptation to market trends.",
    image: <img src={marketimg} alt="#" className='w-full object-cover rounded-[10px] h-full' />,
    date: "7/02/2025",
    writer: "Tina Ozei",
    writerDp: <img src={tinaPics} alt='writer image' className='w-[50px] h-[50px] rounded-full' />, 
    category: 'E-commerce',
    content: '',
  },
];


export default blogData;

