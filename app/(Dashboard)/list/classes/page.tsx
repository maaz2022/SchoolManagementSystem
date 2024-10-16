import Pagination from '@/components/Pagination'
import TeacherTable from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import {classesData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {
const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-100  text-sm hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/class/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
            
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className='p-4 rounded-md bg-white flex-1 m-4 mt-0'>
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
        <div className='flex flex-col md:flex-row w-full items-center gap-4 md:w-auto '>
        <TableSearch/>
        <div className='flex items-center self-center gap-2'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/filter.png' alt='filter' width={14} height={14}/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/sort.png' alt='filter' width={14} height={14}/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200'>
            <Image src='/icons8-plus-24.png' alt='filter' width={14} height={14}/>
          </button>
        </div>
      </div>
      </div>
        <TeacherTable columns={columns} renderRow={renderRow} data={classesData}/>
        <Pagination/>
    </div>
  )
}

export default ClassesListPage
