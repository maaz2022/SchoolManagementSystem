import Pagination from '@/components/Pagination'
import TeacherTable from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import {classesData, lessonsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const lessonListPage = () => {
const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-100  text-sm hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/lesson/${item.id}`}>
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
        <h1 className='hidden md:block text-lg font-semibold'>All Lessons</h1>
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
        <TeacherTable columns={columns} renderRow={renderRow} data={lessonsData}/>
        <Pagination/>
    </div>
  )
}

export default lessonListPage