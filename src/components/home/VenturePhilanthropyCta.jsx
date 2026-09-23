'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReadMoreButton from '../common/ReadMoreButton';

export default function VenturePhilanthropyCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 max-w-4xl mx-auto text-center"
    >
      <h3>MSI Venture Philanthropy</h3>
      <h2>
        EDUCATION EXCELLENCE EVERYWHERE
      </h2>

      <p >
        We work to make quality early education accessible to communities that need it most — through training programmes, hiring initiatives, and partnerships that create real opportunities for young people.
      </p>
      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="text-center">
          <ReadMoreButton href="https://mission2000.in/" />
        </div>
      </div>
    </motion.div>
  );
}