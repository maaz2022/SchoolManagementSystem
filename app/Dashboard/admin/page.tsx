import CountCharts from "@/components/CountCharts"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="Students"/>
                    <UserCard type="Teachers"/>
                    <UserCard type="Parents"/>
                    <UserCard type="Staff"/>
                </div>
            
            <div className="flex gap-4 flex-col lg:flex-row">
                <div className="w-full lg:w-1/3 h-[450px]"><CountCharts/></div>
                <div className="w-full lg:w-2/3 h-[450px]"></div>
            </div>
            <div></div>
            <div className="w-full lg:w-1/3">L</div>
            </div>
        </div>
    )
}
export default AdminPage