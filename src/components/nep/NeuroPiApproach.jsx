import Image from 'next/image';
import Faq from './Faq';
import ProgressMore from './ProgressMore';
import HomeLearningMore from './HomeLearningMore';

export default function NeuroPiApproach() {
  return (
    <section className="py-[70px] bg-white relative">
      <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1240px', minHeight: '524px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-end">
            <div className="rounded-[10px] overflow-hidden mb-6 relative aspect-[4/3] w-full">
              <Image
                src="/images/nep/neuropi-approach-1.webp"
                alt="Children at play in NeuroPi classroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:max-w-[83%] bg-[#2CB3E9] p-[30px] rounded-[12px]">
              <p>
                <strong className="text-2xl md:text-3xl">More Than &ldquo;How Many Letters Does My Child Know?&rdquo;</strong>
              </p>
              <p className="text-msi-cream">
                Parents naturally want to know how their child is progressing.
              </p>
              <p className="text-msi-cream">
                At MSI, conversations about progress can go beyond academic achievement.
              </p>
              <p className="text-msi-cream">
                We may talk about how your child is developing in areas such as:
              </p>
              <ProgressMore />
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h2>UNDERSTANDING YOUR CHILD&apos;S PROGRESS</h2>
            </div>
            <div className="rounded-[10px] overflow-hidden mb-6 relative aspect-[4/3] w-full">
              <Image
                src="/images/nep/neuropi-approach-2.webp"
                alt="Classroom activity at My School ITALY"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:max-w-[88%]">
              <p className="font-lato text-[18px] text-[#464646] text-justify leading-relaxed mb-4">
                <span className="text-msi-blue"><em><strong>Home Learning &amp; Family Connection</strong></em></span>
              </p>
              <div className="font-lato text-[18px] text-[#464646] text-justify leading-relaxed">
                <p><strong>Learning Doesn&apos;t Stop at the School Gate</strong></p>
                <p>Home should not become another classroom. Instead, families can extend learning through simple everyday experiences.</p>
                <p>A story at bedtime.</p>
                <p>Counting fruit while shopping.</p>
                <p>Talking about colours during a walk.</p>
                <p>Helping prepare a meal.</p>
              </div>
              <HomeLearningMore />
            </div>
          </div>
        </div>
        <div style={{ height: '50px' }}></div>
        <div className="border-t border-[#D8D8D8] my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div style={{ marginRight: '30px' }}>
            <div className="mb-10 mt-[60px] pr-[100px]">
              <h2 className="font-lato text-[45px] font-bold uppercase leading-[45px] text-[#d16827]">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="font-lato text-[18px] text-[#464646] mt-4">You Have Questions. We Want You to Ask Them.</p>
            </div>
            <Faq />
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-[10px] overflow-hidden relative aspect-[4/3] w-full">
              <Image
                src="/images/nep/learning-neuropi.webp"
                alt="Children learning the NeuroPi way"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}