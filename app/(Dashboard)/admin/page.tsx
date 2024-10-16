import Announcement from "@/components/Announcement"
import Attendence from "@/components/Attendence"
import CountCharts from "@/components/CountCharts"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
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
                <div className="w-full lg:w-2/3 h-[450px]"><Attendence/></div>
            </div>
            <div className="w-full h-[500px]">
                <FinanceChart/>
            </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalender/>
                <Announcement/>
            </div>
        
        </div>
    )
}
export default AdminPage