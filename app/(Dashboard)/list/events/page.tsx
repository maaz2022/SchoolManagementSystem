import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import TeacherTable from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { eventsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EventsListPage = () => {
const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-100  text-sm hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      </td>
      <td >{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
          <Link href={`/list/events/${item.id}`}>
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button> */}
          <FormModel table='event' type='update' data={item}/>
          </Link>
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-100">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button> */}
          <FormModel table='event' type='delete' id={item.id}/>
            
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className='p-4 rounded-md bg-white flex-1 m-4 mt-0'>
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Events</h1>
        <div className='flex flex-col md:flex-row w-full items-center gap-4 md:w-auto '>
        <TableSearch/>
        <div className='flex items-center self-center gap-2'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/filter.png' alt='filter' width={14} height={14}/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/sort.png' alt='filter' width={14} height={14}/>
          </button>
          {/* <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/icons8-plus-24.png' alt='filter' width={14} height={14}/>
          </button> */}
          <FormModel table='event' type='create'/>

        </div>
      </div>
      </div>
        <TeacherTable columns={columns} renderRow={renderRow} data={eventsData}/>
        <Pagination/>
    </div>
  )
}

export default EventsListPage
