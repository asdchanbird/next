import Link from 'next/link'
import Image from 'next/image'
export default function Home1 () {
    return (
        <div className='w-full main mt-10 flex flex-col items-center rounded-lg mb-20'>
            <div className=''>
                <Image
                    src="/images/img1.jpg"
                    width={900}
                    height={900}
                    alt="Picture of the author"
                    className="rounded-t-lg w-full"
                />
                <div className='flex'>
                    <div className='bg-gray-200 w-4/5 rounded-bl-lg p-4 flex items-center font-bold'>
                        <h2 className='text-xl'>【MACH 馬赫｜無線蒸氣洗地機】高溫蒸氣+地板風乾！洗地機界的特斯拉，乾濕垃圾都暴風吸入！</h2>
                    </div>
                    <div className='bg-green-700 w-1/5 rounded-br-lg p-4 font-bold text-right text-white'>
                        <h3 className='text-xl'>NT$704,907</h3>
                        <h4 className='mt-2'>達標2,379%</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}