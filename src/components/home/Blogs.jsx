'use client';
import { motion } from 'framer-motion';


export default function Blogs({
  eyebrow = "Parenting Insights, Expert Guidance, and Stories That Inspire.",
  title = "From The Founder's Desk",
}) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1047.1 3.7" preserveAspectRatio="none" className="relative block w-full h-[6px]">
          <path className="fill-[#fcf9f4]" d="M1047.1,0C557,0,8.9,0,0,0v1.6c0,0,0.6-1.5,2.7-0.3C3.9,2,6.1,4.1,8.3,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C13.8,2,16,4.1,18.2,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C23.6,2,25.9,4.1,28,3.5c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C63,2,65.3,4.1,67.4,3.5C68.3,3.3,69,1.6,69,1.6s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3C82.7,2,85,4.1,87.1,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3C92.6,2,94.8,4.1,97,3.5c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9c0,0,0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9s0.6-1.5,2.7-0.3c1.2,0.7,3.5,2.8,5.6,2.2c0.9-0.2,1.5-1.9,1.5-1.9"></path>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("/images/blog/bg-pattern.png")', backgroundRepeat: 'repeat', backgroundSize: 'auto' }} />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {eyebrow}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[550px] sm:h-[650px] md:h-[750px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white"
        >
          <iframe
            src="https://fliphtml5.com/bookcase/qdgpzz/"
            title="From The Founder's Desk Bookcase"
            className="w-full h-full border-0"
            style={{ width: '100%', height: '100%' }}
            seamless="seamless"
            scrolling="no"
            allowTransparency={true}
            allowFullScreen={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
