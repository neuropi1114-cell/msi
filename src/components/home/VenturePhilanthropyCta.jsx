'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VenturePhilanthropyCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 max-w-4xl mx-auto text-center"
    >
      <h3 className="font-lato text-display-md text-msi-purple mb-4">
        Education should reach everyone
      </h3>
      <p className="text-msi-orange font-lato italic text-xl md:text-2xl mb-6">MSI venture philanthropy</p>
      <p className="mb-6 leading-relaxed max-w-2xl mx-auto">
        We work to make quality early education accessible to communities that need it most — through training programmes, hiring initiatives, and partnerships that create real opportunities for young people.
      </p>
      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="text-center">
          <Link href="/msi-venture-philanthropy" className="font-linotte inline-block bg-msi-orange text-white px-8 py-3 rounded-full font-[200] hover:bg-msi-orange/90 transition-colors">
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}