import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, Building } from 'lucide-react';

const HYDERABAD_CENTRES = [
  {
    name: 'Hitex Campus',
    area: 'HITEX / Izzathnagar',
    href: '/hitex/',
    address: 'Hitex Road, Shilpa Layout, Izzathnagar, Hyderabad 500084',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in HITEX, Hyderabad',
  },
  {
    name: 'Kondapur Campus',
    area: 'Kondapur / Botanical Garden',
    href: '/kondapur/',
    address: 'Sumadhura Horizon, Botanical Garden Road, Kondapur 500084',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Kondapur, Hyderabad',
  },
  {
    name: 'The Square (Q-City)',
    area: 'Financial District / Nanakramguda',
    href: '/qcity/',
    address: 'The Square, Wipro Circle, Nanakramguda, Financial District 500032',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Financial District (Q-City), Hyderabad',
  },
  {
    name: 'Kukatpally Campus',
    area: 'Kukatpally / KPHB Colony',
    href: '/kukatpally/',
    address: 'Near Forum Sujana Mall & Metro Station, Kukatpally 500072',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Kukatpally, Hyderabad',
  },
  {
    name: 'Mindspace Campus',
    area: 'Madhapur / Mindspace IT Park',
    href: '/mindspace/',
    address: 'Raheja Mindspace IT Park, Building 12B, Madhapur 500081',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Mindspace, Madhapur, Hyderabad',
  },
  {
    name: 'Avance H04 Campus',
    area: 'HiTech City / Phoenix IT Hub',
    href: '/avance/',
    address: 'Building H04, Avance Business Hub, HiTech City 500081',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Avance H04, HiTech City, Hyderabad',
  },
  {
    name: 'Avance H06 Campus',
    area: 'HiTech City / Jayabheri Silicon',
    href: '/avance-2/',
    address: 'Building H06, Avance Business Hub, HiTech City 500081',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Avance H06, HiTech City, Hyderabad',
  },
  {
    name: 'Kavuri Hills Campus',
    area: 'Kavuri Hills / Jubilee Hills',
    href: '/kavuri-hills/',
    address: 'Kavuri Hills, Near Jubilee Hills Checkpost, Madhapur 500033',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Kavuri Hills, Hyderabad',
  },
  {
    name: 'Miyapur Campus',
    area: 'Miyapur / Allwyn X Roads',
    href: '/miyapur/',
    address: 'Near Miyapur Metro Station, Allwyn X Roads, Miyapur 500049',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Miyapur, Hyderabad',
  },
  {
    name: 'Manikonda Campus',
    area: 'Manikonda / Puppalguda',
    href: '/manikonda/',
    address: 'Near Lanco Hills & Puppalguda Main Road, Manikonda 500089',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Manikonda, Hyderabad',
  },
  {
    name: 'Cyberabad Police Commissionerate',
    area: 'Gachibowli / Telecom Nagar',
    href: '/cyberabad-police-commissionerate/',
    address: 'CP Office Campus, Old Mumbai Hwy, Gachibowli 500032',
    phone: '+91 70939 04680',
    title: 'Childcare at Cyberabad Police Commissionerate, Gachibowli',
  },
];

const PAN_INDIA_CENTRES = [
  {
    name: 'Berhampur Campus',
    area: 'Berhampur, Ganjam, Odisha',
    href: '/berhampur/',
    address: 'Near Engineering School Road, Berhampur, Odisha 760010',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Berhampur, Odisha',
  },
  {
    name: 'Tadepalligudem Campus',
    area: 'Tadepalligudem, West Godavari, AP',
    href: '/tadepalligudem/',
    address: 'Main Road, Tadepalligudem, West Godavari, AP 534101',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Tadepalligudem, AP',
  },
  {
    name: 'Purna Nagar (Chinchwad)',
    area: 'Purna Nagar, Chinchwad, Pune, MH',
    href: '/purna-nagar/',
    address: 'Purna Nagar, Near Spine Road, Chinchwad, Pune, MH 411019',
    phone: '+91 70939 04680',
    title: 'Preschool & Daycare in Purna Nagar, Chinchwad, Pune',
  },
];

export default function CentresDirectory() {
  return (
    <section aria-labelledby="centres-directory-heading" className="py-16 md:py-24 bg-[#f8fafc] border-t border-purple-100/60">
      <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-msi-purple font-bold text-xs uppercase tracking-wider mb-3">
            Campus Network
          </span>
          <h2 id="centres-directory-heading" className="text-3xl md:text-4xl font-extrabold text-msi-purple font-linotte mb-4 tracking-tight">
            Our Preschool & Daycare Centres in Hyderabad & Across India
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Find an award-winning, neuroscience-informed My School ITALY centre nearest to your home or workplace. Choose your campus to explore facilities, admissions, and virtual tours.
          </p>
        </div>

        {/* Hyderabad Grid */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-purple-100">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-linotte flex items-center gap-2">
                <MapPin className="w-6 h-6 text-msi-orange shrink-0" />
                Hyderabad Centres (11 Campuses)
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Located near major IT corridors, residential hubs, and tech parks across Hyderabad.
              </p>
            </div>
            <Link
              href="/hyderabad/"
              className="inline-flex items-center gap-2 text-sm font-bold text-msi-purple hover:text-msi-orange transition-colors shrink-0"
            >
              <span>Explore All Hyderabad Centres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HYDERABAD_CENTRES.map((centre) => (
              <Link
                key={centre.href}
                href={centre.href}
                title={centre.title}
                className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-msi-purple group-hover:text-msi-orange transition-colors text-base font-linotte">
                      {centre.name}
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-msi-purple shrink-0">
                      Hyderabad
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-msi-orange mb-1.5">{centre.area}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{centre.address}</p>
                </div>
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1 font-medium">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {centre.phone}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-msi-purple group-hover:translate-x-0.5 transition-transform">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pan-India Grid */}
        <div>
          <div className="mb-6 pb-3 border-b border-purple-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-linotte flex items-center gap-2">
              <Building className="w-6 h-6 text-msi-purple shrink-0" />
              Pan-India Centres
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Expanding European neuroscience-based childcare across Andhra Pradesh, Odisha, and Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PAN_INDIA_CENTRES.map((centre) => (
              <Link
                key={centre.href}
                href={centre.href}
                title={centre.title}
                className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-msi-purple group-hover:text-msi-orange transition-colors text-base font-linotte">
                      {centre.name}
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-msi-orange shrink-0">
                      National
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">{centre.area}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">{centre.address}</p>
                </div>
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1 font-medium">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {centre.phone}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-msi-purple group-hover:translate-x-0.5 transition-transform">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
