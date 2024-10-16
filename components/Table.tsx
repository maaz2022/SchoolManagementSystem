import React from 'react'

const TeacherTable = ({columns, renderRow, data}:{columns:{header:String; accessor  :string; className?:string}[];
renderRow: (item:any) => React.ReactNode;
data: any[];
})=> {
  return (
    <table className='w-full mt-4'>
        <thead>
            <tr className='text-left text-gray-500 text-sm'>
                {
                    columns.map((column, index) => (
                        <th key={index} className={column.className}>
                            {column.header}
                        </th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {data.map((item) =>renderRow(item))}
        </tbody>
    </table>
  )
}

export default TeacherTable
