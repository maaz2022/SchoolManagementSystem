'use client'
import Announcement from "@/components/Announcement"
import BigCalender from "@/components/BigCalender"
import EventCalendar from "@/components/EventCalender"

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            <div className="w-full xl:w-2/3">
                <div className="h-full rounded-md bg-white p-4">
                    <h1 className="text-xl font-semibold">
                        Schedule (4A)
                    </h1>
                    <BigCalender/>
                </div>
            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar/>
                <Announcement/>
            </div>
        </div>
    )
}
export default StudentPage