import Image from "next/image"
export default function HomeCard() {
    return (
        <div className=" my-4 w-1/3">
            <div className="px-4">
                <Image
                    src={`/images/img1.jpg`}
                    width={200}
                    height={200}
                    className="cursor-pointer rounded-md w-full"
                />
                <div className="my-4">
                    <h2 className='text-md font-bold'>【MACH 馬赫｜無線蒸氣洗地機】高溫蒸氣&地板風乾！</h2>
                    <div className="flex justify-between font-bold mt-3">
                        <div>NT$2,674,190</div>
                        <div className="text-green-700">452 <span className="text-xs">人支持</span></div>
                    </div>
                    <div className="w-full bg-green-700 h-2 rounded-3xl mt-2">
                    </div>
                    <div className="flex justify-between mt-3 text-sm">
                        <div>剩下 9 天</div>
                        <div className="text-green-700"><span className="text-xs">2,670%</span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}