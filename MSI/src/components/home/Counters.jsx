import { motion } from 'framer-motion';

const stats = [
  {
    title: "Awesome Careers",
    icon: "/images/misc/adb3cd00-e7ee-4869-9932-4e7253c3cdd4.png" 
  },
  {
    title: "Global Certificate",
    icon: "/scraped/images/images-2.png.bv.webp"
  },
  {
    title: "Best Program",
    icon: "/scraped/images/atom.png.bv.webp"
  },
  {
    title: "Child Support",
    icon: "/scraped/images/school-bag.png.bv.webp"
  }
];

export default function Counters() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-4 bg-[#f8f9fa] rounded-full flex items-center justify-center p-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={stat.icon} alt={stat.title} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <h3 className="text-xl font-schoolbell text-msi-purple font-bold">
                {stat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
