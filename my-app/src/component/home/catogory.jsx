import Image from "next/image"
export default function Catogory() {
    const CatogoryList = [{
        id: 1,
        name: "食物",
        src: "food.png" 
    },{
        id: 2,
        name: "時尚",
        src: "fashion.png" 
    },{
        id: 3,
        name: "電玩遊戲",
        src: "game.png" 
    },{
        id: 4,
        name: "寵物用品",
        src: "pet.png" 
    },{
        id: 5,
        name: "電腦",
        src: "computer.png" 
    },{
        id: 6,
        name: "手機",
        src: "phone.png" 
    },{ id: 7,
        name: "其他",
        src: "other.png" 
    },]
    return (
        <div className="w-full">
            <div className="flex w-full justify-center my-2">
                <h6 className="font-bold text-md">探索專案類別</h6>
            </div>
            <div className="flex w-full justify-center">
                {CatogoryList.map((item)=> (
                    <div className="mx-8" key={item.id}> 
                        <Image
                            src={`/images/${item.src}`}
                            width={80}
                            height={80}
                            className="cursor-pointer"
                        />
                        <div className="text-center font-bold">
                            <h2>{item.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}