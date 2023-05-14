import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google';
import SearchAppBar from '@/component/navbar';
import HomeCom from '@/component/home/home1';
import Catogory from '@/component/home/catogory';
import HomeCard from '@/component/home/card'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return {
      props: {data}
  }
}
export default function Home({data}) {
  console.log({data})
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
        <SearchAppBar />
        <HomeCom />
        <Catogory />
        <div className='text-left w-10/12 ml-8 mt-8 mb-4'>
          <h3 className='font-bold text-2xl'>群眾募資</h3>
        </div>
        <div className='flex w-10/12 flex-wrap justify-center'>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
    </main>
  )
}
