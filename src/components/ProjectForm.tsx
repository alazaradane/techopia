import React from 'react'
import TextEditor from './TextEditor'

const ProjectForm = () => {
  return (
    <main className=' mb-10'>
      <div className=' mt-4'>
         <p className='mb-1 text-4xl font-bold '> Create <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Project</span></p>
          <p className=' text-slate-300 text-lg'>Create modren projects, impress your audiances !</p>
      </div>
      <div className=' bg-primary text-secondary mt-[4rem]'>
       <TextEditor />
      </div>
    </main>
  )
}

export default ProjectForm