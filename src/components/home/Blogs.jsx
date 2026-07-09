'use client';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 340,
    title: "Unveiling Nature Preschool: A Revolutionary Approach to Early Learning",
    image: "https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/14537-1.jpg.bv.webp?bv_host=myschoolitaly.com",
    link: "https://myschoolitaly.com/unveiling-nature-preschool-a-revolutionary-approach-to-early-learning/",
    badge: "Nature Preschool",
    excerpt: "Nature's Lap preschool nurtures curious minds & healthy bodies through outdoor play. Wonder, wisdom & outdoor adventures await your child. Join us!",
    fitHeight: true
  },
  {
    id: 385,
    title: "Magical Wonderland: My School ITALY opens the Best Preschool in Manpada!",
    image: "https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/1.png.bv.webp?bv_host=myschoolitaly.com",
    link: "https://myschoolitaly.com/magical-wonderland-my-school-italy-opens-the-best-preschool-in-manpada/",
    badge: "New Preschool",
    excerpt: "Step into a world of enchantment and learning as My School ITALY brings its unique neuroscience-based education to Manpada. Join us for a grand opening ceremony filled with fun and excitement for children and parents alike!",
    fitHeight: false
  },
  {
    id: 347,
    title: "Dazzling Diwali: Our Whizzpopping Preschool Celebrations!",
    image: "https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/Diwali-Celebrations-at-My-School-ITALY-QCity-01.png.bv.webp?bv_host=myschoolitaly.com",
    link: "https://myschoolitaly.com/dazzling-diwali-our-whizzpopping-preschool-celebrations/",
    badge: "festivity",
    excerpt: "Dive into Diwali magic at My School ITALY! Explore preschool celebrations with crafts, tales, and joyous learning. A whimsical adventure awaits!",
    fitHeight: false
  }
];

export default function Blogs() {
  return (
    <section className="py-20 bg-[#fcf9f4] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="block w-full h-auto">
          <path className="fill-white" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl  text-gray-800 font-bold mb-4"
          >
            Recent News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-medium"
          >
            What's Going on in our Blog?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:brightness-105 flex flex-col"
            >
              <a href={post.link} tabIndex={-1} className="block overflow-hidden">
                <div className={`relative overflow-hidden ${post.fitHeight ? 'h-48' : 'aspect-[5/4]'}`}>
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="px-5 pt-4">
                <span className="inline-block bg-msi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">
                  {post.badge}
                </span>
              </div>
              <div className="px-5 pb-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-800 text-lg mb-2 leading-snug">
                  <a href={post.link} className="hover:text-msi-orange transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://myschoolitaly.com/blog/"
            className="inline-block bg-msi-accent hover:bg-msi-accent/90 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
