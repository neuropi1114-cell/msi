import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: "🎃 Spooktacular Halloween Celebration at MySchoolITALY @ Hitex! 👻",
    image: "/images/blog/IMG_20251031_141448545_HDR-scaled.jpg.bv.webp",
    link: "#"
  },
  {
    id: 2,
    title: "Brain-Boosting Activities You Can Do at Home",
    image: "/images/blog/freepik__a-warm-and-inviting-home-setting-where-a-toddler-a__39143.jpeg.bv_resized_ipad.jpeg.bv.webp",
    link: "#"
  },
  {
    id: 3,
    title: "What is Neuroscience-Based Early Childhood Education",
    image: "/images/blog/little-boy-solving-puzzle-with-brain-background-1-scaled.jpg.bv_resized_desktop.jpg.bv.webp",
    link: "#"
  },
  {
    id: 4,
    title: "Childcare Centers Near Me: Questions Every Hyderabad Parent Should Ask",
    image: "/images/blog/MangalyamStories_0F7A7902-scaled.jpg.bv_resized_desktop.jpg.bv.webp",
    link: "#"
  }
];

export default function Blogs() {
  return (
    <section className="py-20 bg-[#2f9ed9] relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-schoolbell text-white font-bold mb-4"
          >
            Recent BLOGs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white font-medium"
          >
            What's Going on in our Blog?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden group">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => { e.target.src = '/images/team/logoz.png.bv.webp'; }}
                />
                <div className="absolute top-4 left-4 bg-msi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Blog
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-800 text-lg mb-4 line-clamp-3 hover:text-msi-orange transition-colors">
                  <a href={blog.link}>{blog.title}</a>
                </h3>
                <div className="mt-auto">
                  <a 
                    href={blog.link} 
                    className="text-msi-blue font-bold text-sm uppercase flex items-center group"
                  >
                    Read More 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">»</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-block bg-msi-orange hover:bg-msi-orange/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Read More
          </a>
        </motion.div>
      </div>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" className="block w-full h-[15vh] min-h-[100px] max-h-[150px]">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#wave-path" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#wave-path" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#wave-path" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#wave-path" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </section>
  );
}
