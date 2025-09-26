import AssetAvenue from '@/app/components/portfolioInnerDesign/AssetAvenue'
import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // whatever weights you want
  variable: '--font-inter',
});
function page() {
  return (
    <div className={`${inter.className}`}>
        <AssetAvenue/>
    </div>
  )
}

export default page