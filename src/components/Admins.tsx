import React from 'react'
import { DataTableDemo } from './payments/page'

const Admins = () => {
  return (
    <main>
        <div>
          <span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Admins</span>
        </div>
        <div>
            <DataTableDemo/>
        </div>
    </main>
  )
}

export default Admins