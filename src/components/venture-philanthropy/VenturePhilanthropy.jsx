'use client';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function VenturePhilanthropy() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#351C5A' }}>
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
            <path className="elementor-shape-fill" d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl  font-bold text-white mb-6"
          >
            MSI Venture Philanthropy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Building resilient communities and educated ecosystems through local partnerships
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <p className="text-gray-700 text-justify mb-6 leading-relaxed text-lg">
              MSI Venture Philanthropy aims to &ldquo;ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.&rdquo; (SDG 4); and improving the quality of life, building resilient, inclusive, and prosperous communities through our skill development programs for &lsquo;decent work and sustainable growth&rsquo; (SDG 8 target 8.6).
            </p>
            <p className="text-gray-700 text-justify mb-6 leading-relaxed text-lg">
              Our Mission is to strengthen the capabilities of local organisations that deliver effective, scalable solutions to education sector.
            </p>
            <p className="text-gray-700 text-justify mb-6 leading-relaxed text-lg font-bold text-msi-purple">
              EDUCATION EXCELLENCE EVERYWHERE is our Mission.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Our approach
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              To maximize impact, we partner locally
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg text-justify">
              Our strength as a funder lies in our tailored, hands-on approach that goes beyond funding: We seek to enable our partners&rsquo; success through the right mix of grant funding, business expertise and access to relevant networks. We offer our portfolio organizations flexible, multi-year core funding and commit to active value creation, informed by deep due diligence and delivered through local teams and Impact Fellows.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg text-justify">
              The key strength of our approach lies in providing customised hands-on support along with funding. Our goal is to enable our partners&rsquo; success through the right mix of funding, business expertise, and access to relevant networks. Investing in our portfolio organizations, we provide them with flexible, multi-year funding and commit to active value creation based on our due diligence and delivered by local team, My School ITALY and MSI Impact Trust: <span className="text-blue-600 font-semibold">Ritzy Schools Education Society</span>
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 flex justify-center">
            <img
              src="https://myschoolitaly.com/wp-content/uploads/2024/10/Picture1.png"
              alt="MSI Venture Philanthropy"
              className="rounded-lg shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12">
            <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
              <li>
                <strong>Local Teams, Locally Based Organizations:</strong> Together with our regional teams, our Impact Trust supports individuals who set up and run our preschool models designed to scale up in the local context and delivered by organizations that are embedded in the communities they serve.
              </li>
              <li>
                <strong>Flexible Core Funding:</strong> Our Impact Trust provides multi-year, tailored philanthropic capital to strengthen organizational capacity, while maintaining flexibility to respond quickly to changing needs.
              </li>
              <li>
                <strong>Strategic Business Expertise:</strong> MSI Venture Philanthropy commits to active value creation informed by deep due diligence and provides hands-on strategic support through our team, My School ITALY and Partners.
              </li>
              <li>
                <strong>Portfolio of Complementary Solutions:</strong> We develop thesis-driven strategies and build Smart classroom &ndash; with 3D assets and Digital content; Virtual Classroom &ndash; With Live teaching facility embedded in the system; and Learning Management System &ndash; with the features of assigning homework and tests and track the progress of each student.
              </li>
              <li>
                <strong>Long-term, Trusted Partnerships:</strong> We cultivate collaborative relationships with our portfolio organizations and actively build networks of partners around our engagements to catalyse collective impact.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Our strategy
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              Thesis-driven strategies across three themes
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              MSI Venture Philanthropy develops thesis-driven strategies across our three themes of pedagogy, technology and training. Our strategies and approach are based on a strong track record and geared toward building thematic portfolios of solutions that create synergies to enable enduring systemic change in the educational ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Themes
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              Achieving lasting systemic change with curated thematic portfolios
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Within each of our themes &ndash; pedagogy, technology and training, we have identified what we believe are the areas with the strongest potential for impact and most urgent need for philanthropic funding. We focus on ensuring communities gain access to early childhood and primary education, to reach the arena of international sports as well as equipping young people with skills to find gainful employment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Investment process
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              Achieving lasting systemic change with curated thematic portfolios
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg text-justify">
              MSI Impact Trust: <span className="text-blue-600 font-semibold">Ritzy Schools Educational Society</span> commits institutional investment and intentional value creation across the lifecycle of our engagements:
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-xl  font-bold text-msi-purple mb-4">Pipeline and due diligence:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mb-10">
              <li>Sourced through established global networks and local teams</li>
              <li>Aligned with strategy and thematic portfolios</li>
              <li>Deep due diligence</li>
              <li>Assessing business and management quality, risk and capabilities</li>
              <li>Assessing impact evidence, potential and risks through MSI Venture Philanthropy proprietary framework aligned with international standards</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-xl  font-bold text-msi-purple mb-4">Execution and value creation:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mb-10">
              <li>Multi-year, long-term grant agreement</li>
              <li>Focus on value-drivers such as impact, management quality and partnerships</li>
              <li>Strategic collaboration by joining advisory boards or strategic brain trusts</li>
              <li>Leveraging portfolio synergies</li>
              <li>Verifying impact</li>
              <li>Sharing learnings and networks</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.4 }}>
            <h4 className="text-xl  font-bold text-msi-purple mb-4">End of engagement:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Average duration of engagements: five to ten years</li>
              <li>Transparent end-of-engagement modalities</li>
              <li>Modalities agreed mutually before engagement</li>
              <li>Coordinated wind-down of engagement</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Partnerships
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              Central to our investment approach
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg text-justify">
              MSI Venture Philanthropy cultivates collaborative, trusted and long-term partnerships with our portfolio organizations that are mutually beneficial, catalyze impact and allow for deep engagement and shared learning. Network partners include experts and peer funders, as well as strategic alliances for knowledge.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg text-justify font-semibold">
              We welcome you to join our:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg text-justify mx-auto max-w-md">
              <li>Portfolio partnership</li>
              <li>Strategic alliances</li>
              <li>Partnering in our network</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Impact
            </h2>
            <h3 className="text-xl md:text-2xl text-msi-orange  font-bold mb-8 text-center">
              Measurable social and environmental impact
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Our goal is simple: to ensure our portfolio organizations have the greatest possible impact. We consistently assess and measure their social and educational performance with proprietary tools and best-practice standards to provide accountability to the communities we serve as well as to our stakeholders. We join our portfolio organizations on their learning journey to tap into the full impact potential of our solutions, while also reducing risks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Impact process
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              MSI Venture Philanthropy considers the impact of its actions every step of the way. We identify the benefit that proposed solutions will have on children and the youth. We apply a framework of tools, standards and templates to due diligence for detailed analysis. We take independent research into consideration.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg text-justify mt-4">
              Together with the grantees, we identify impact KPIs and targets in the grant agreement. These are subject to transparent quarterly reporting, which designates effective methods and highlights room for improvement. In working with organizations, MSI Venture Philanthropy learns to jointly evaluate impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <motion.div {...fadeIn} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold mb-4 text-center">
              Smart stats
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify mb-8">
              Since launching in 2017, MSI Venture Philanthropy through its Impact Trust: <span className="text-blue-600 font-semibold">Ritzy Schools Education Society</span>, has disbursed funds to 77 organizations.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg mx-auto max-w-xl">
              <li>7000 children benefited from easier access to education</li>
              <li>1000 young people became more employable</li>
              <li>10000 benefitting from improved education-employment ecosystem services</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
