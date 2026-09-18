import Image from 'next/image';

const blogPosts = [
  {
    title: 'Magical Wonderland: My School ITALY opens the Best Preschool in Manpada!',
    excerpt: 'Step into a world of enchantment and learning as My School ITALY brings its unique neuroscience-based education to Manpada.',
    date: 'July 4, 2023',
    category: 'New Preschool',
    image: '/images/nep/blog-1.webp',
    link: '/blog/',
  },
  {
    title: 'Empower Your Child\'s Future with 5 Proven Neuroscience-Backed Learning Techniques',
    excerpt: 'Enhance your child\'s learning with My School Italy\'s Neuroscience-Backed Learning Programs. Experience the difference today.',
    date: 'February 13, 2023',
    category: 'Neuroscience',
    image: '/images/nep/blog-2.webp',
    link: '/blog/',
  },
  {
    title: 'A Legacy of Love: Children\'s Day Celebrations',
    excerpt: 'Explore our enchanting Children\'s Day celebrations. Join the laughter, love, and learning in this magical journey.',
    date: 'November 15, 2023',
    category: 'festivity',
    image: '/images/nep/blog-3.webp',
    link: '/blog/',
  },
];

export default function NepNews() {
  return (
    <section className="relative" style={{ backgroundColor: '#FCF9F4', padding: '130px 0 60px 0' }}>
      <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1200px', minHeight: '400px' }}>
        <h2 className="font-lato text-[45px] font-bold uppercase text-center text-[#d16827] mb-2">Recent News</h2>
        <p className="font-lato text-[18px] text-[#464646] text-center mb-12">What&apos;s Going on in our Blog?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gridColumnGap: '30px', gridRowGap: '35px' }}>
          {blogPosts.map((post, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]">
              <a href={post.link} className="block relative aspect-[4/3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </a>
              <div className="p-6">
                <span className="inline-block font-lato text-[12px] font-medium text-white px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#d16827', margin: '20px' }}>{post.category}</span>
                <h3 className="font-lato text-[21px] font-bold uppercase leading-[30px] text-[#464646] mb-2 px-6">
                  <a href={post.link} className="hover:text-[#159ED9] transition-colors">{post.title}</a>
                </h3>
                <p className="font-lato text-[18px] text-[#464646] mb-4 px-6">{post.excerpt}</p>
                <span className="font-lato text-[15px] text-[#464646] px-6 pb-6 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-[30px]">
          <a
            href="/blog/"
            className="inline-block font-linotte text-[18px] font-[200] text-white transition-colors"
            style={{ backgroundColor: '#d16827', padding: '20px 30px', borderRadius: '12px 0 12px 0' }}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}