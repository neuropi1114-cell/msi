'use client';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 5461,
    title: "🎃 Spooktacular Halloween Celebration at MySchoolITALY @ Hitex! 👻",
    image: "/images/blog/thumbs/halloween-celebration.jpg",
    link: "/blog/1",
    badge: "Blog",
    fitHeight: false
  },
  {
    id: 4581,
    title: "Brain-Boosting Activities You Can Do at Home",
    image: "/images/blog/thumbs/brain-boosting-activities.jpg",
    link: "/blog/2",
    badge: "Blog",
    fitHeight: true
  },
  {
    id: 4506,
    title: "What is Neuroscience-Based Early Childhood Education",
    image: "/images/blog/thumbs/neuroscience-education.jpg",
    link: "/blog/3",
    badge: "Blog",
    fitHeight: true
  },
  {
    id: 4223,
    title: "Childcare Centers Near Me: Questions Every Hyderabad Parent Should Ask",
    image: "/images/blog/thumbs/childcare-centers.jpg",
    link: "/blog/4",
    badge: "Blog",
    fitHeight: false
  }
];

export default function Blogs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1047.1 3.7" preserveAspectRatio="none" className="relative block w-full h-[6px]">
          <path className="fill-[#fcf9f4]" d="M1047.1,0C557,0,8.9,0,0,0v1.6c0,0,0.6-1.5,2.7-0.3C3.9,2,6.1,4.1,8.3,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C13.8,2,16,4.1,18.2,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C23.6,2,25.9,4.1,28,3.5c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C63,2,65.3,4.1,67.4,3.5C68.3,3.3,69,1.6,69,1.6s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3C82.7,2,85,4.1,87.1,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C92.6,2,94.8,4.1,97,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9"></path>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("/images/blog/bg-pattern.png")', backgroundRepeat: 'repeat', backgroundSize: 'auto' }} />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-800 font-bold mb-4"
          >
            Recent BLOGs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-medium"
          >
            What&rsquo;s Going on in our Blog?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <a href={post.link} tabIndex={-1} className="block overflow-hidden relative">
                <div className={`relative overflow-hidden ${post.fitHeight ? 'h-48' : 'aspect-[4/3]'}`}>
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="px-5 pt-5 pb-4 flex flex-col flex-grow">
                <span className="inline-block bg-[#e1872b] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 self-start">
                  {post.badge}
                </span>
                <h3 className="font-bold text-gray-800 text-base mb-3 leading-snug">
                  <a href={post.link} className="hover:text-[#e1872b] transition-colors">
                    {post.title}
                  </a>
                </h3>
                <a
                  href={post.link}
                  className="text-[#e1872b] font-semibold text-sm hover:text-[#c4701f] transition-colors mt-auto inline-flex items-center gap-1"
                >
                  Read More <span aria-hidden="true">&raquo;</span>
                </a>
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
            className="inline-block bg-[#e1872b] hover:bg-[#c4701f] text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
