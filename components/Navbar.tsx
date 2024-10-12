import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src='/search.png' alt='Search' width={14} height={14}/>
                <input type="text" placeholder="Search...." className="w-[200px] p-2 bg-transparent outline-none"/>
            </div>
        <div className="flex items-center gap-6 w-full justify-end">
            <div className="bg-white rounded flex items-center justify-center cursor-pointer w-7 h-7">
                <Image src='/message.png' alt="message" width={20} height={20}/>
            </div>
            <div className="bg-white rounded flex items-center justify-center cursor-pointer relative w-7 h-7">
                <Image src='/announcement.png' alt="announcement" width={20} height={20}/>
                <div className="bg-purple-500 rounded-full absolute -top-3 -right-3 flex justify-center items-center text-white w-5 h-5">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Md Maaz</span>
                <span className="text-[10px] leading-3 text-gray-500 text-right">Admin</span>
            </div>
                <Image src='/avatar.png' alt="avatar" width={30} height={30} className="rounded-full cursor-pointer"/>
        </div>
        </div>
    )
}
export default Navbar