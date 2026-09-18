import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';

export default function MissionCounters() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12" style={{ maxWidth: '1240px' }}>
        <div className="hidden md:flex justify-between mb-4">
          <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
          <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
        </div>

        <div className="flex flex-wrap items-center">
          <ScrollReveal direction="up" delay={0.1} className="w-full md:w-[23.033%] flex items-center justify-center md:justify-start mb-6 md:mb-0">
            <p className="font-lato text-[25px] leading-[27px] text-[#464646] italic text-center md:text-left md:max-w-[91.11%]"><em>Our Mission is to educate and empower the lives of</em></p>
          </ScrollReveal>

          <ScrollReveal direction="zoom" delay={0.25} className="w-full md:w-[21.048%] flex items-center justify-center mb-6 md:mb-0" style={{ margin: '0 16px' }}>
            <div className="w-full">
              <div className="md:hidden border-t border-gray-300 my-3"></div>
              <div style={{ backgroundColor: '#d16827', padding: '19px', borderRadius: '40px', textAlign: 'center' }}>
                <div className="font-lato text-[100px] font-semibold text-white leading-none">15</div>
                <div className="font-lato text-[30px] font-semibold text-white">Million</div>
              </div>
              <div className="md:hidden border-t border-gray-300 my-3"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35} className="w-full md:w-[15.889%] flex items-center justify-center mb-6 md:mb-0">
            <h2 className="font-lato text-[30px] font-bold leading-[36px] text-[#464646] text-center md:text-end md:max-w-[89%]">Children, Teachers, Parents</h2>
            <div className="md:hidden border-t border-gray-300 my-3 w-full"></div>
          </ScrollReveal>

          <div className="hidden md:flex md:w-[14.59%] items-center justify-center">
            <h2 className="font-lato text-[160px] font-normal leading-[57px] text-[#464646] text-end md:max-w-[89%]">{')'}</h2>
          </div>

          <ScrollReveal direction="left" delay={0.45} className="w-full md:w-[25.41%] flex items-center justify-center mb-6 md:mb-0">
            <h2 className="font-lato text-[60px] font-semibold text-[#464646] text-center md:max-w-[74.602%]">By 2027</h2>
          </ScrollReveal>
        </div>

        <div className="hidden md:flex justify-center mt-4">
          <Image src="/images/nep/arrow2.webp" alt="" width={40} height={40} className="h-10 w-auto" />
        </div>
      </div>
    </section>
  );
}