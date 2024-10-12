import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 gap-2">
          <Link href='/' className="flex items-center justify-center lg:justify-start">
              <Image src='/school-bag.png' alt="logo" width={30} height={30}/>
                      <span className="hidden lg:block">Hogwarts</span>    
          </Link>
          <Menu/>
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
          <Navbar/>
          {children}
        </div>
      </div>
  );
}