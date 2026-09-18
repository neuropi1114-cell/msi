import Image from 'next/image';
import SettlingInMore from '../layout/SettlingInMore';
import ChildDay from './ChildDay';

export default function DesignPhilosophy() {
  return (
    <>
      <section className="hidden md:block bg-[linear-gradient(180deg,#271344_50%,#FFFFFF_3%)] py-[50px]">
        <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="flex items-center justify-center">
              <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3] ml-6">
                <Image
                  src="/images/nep/Web_1.png"
                  alt="My School ITALY classroom designed with neuroscience principles"
                  fill
                  className="object-cover"
                />
                </div>
              </div>
              <div className="pt-[30px] pr-2.5 pb-2.5 pl-6">
                  <h3>Small Steps Into A Big New World</h3>
                <h2>STARTING SCHOOL &amp; SETTLING IN</h2>
              
              <p className="text-msi-cream">
                For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine.
              </p>
              <p className="text-msi-cream">
                We do not expect every child to settle in the same way.
              </p>
              <SettlingInMore />
              <div className="h-[104px]"></div>
              <h3>Your Child&apos;s Day At MSI</h3>
              <h2>Care, Learning and Childhood &mdash; All in One Day</h2>
              <p>
                A child&apos;s day at MSI is designed around an age-appropriate rhythm rather than continuous instruction.
              </p>
              <p>
                Depending on age and program, a day may move through:
              </p>
              <ChildDay />
            </div>
          </div>
        </div>
      </section>

      <section className="md:hidden bg-[#271344] py-[50px]">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 gap-0">
            <div className="flex items-center justify-center">
              <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/nep/Web_1.png"
                  alt="My School ITALY classroom designed with neuroscience principles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-[30px] px-2.5 pb-2.5">
              <p className="font-lato text-[15px] leading-[27px] text-white text-justify mb-6 w-full">
                My School ITALY is Designed To Give Authentic Experiences To Your Child At our Kindergarten, we believe in providing an environment that is appropriate for enhancing each child&apos;s development. It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
              </p>
              <div className="h-0"></div>
              <p className="font-lato text-[15px] leading-[27px] text-white text-justify w-full">
                It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}