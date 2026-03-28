import React from 'react'

const Notes = ({notes}) => {

  // const notes = [
  //   { id: 1, title: "React Revision", content: "Revise hooks and lifecycle methods." },
  //   { id: 2, title: "Project Idea", content: "Build a notes app with authentication." },
  //   { id: 3, title: "Interview Prep", content: "Practice DSA and JavaScript questions." },
  // ]

  //Date
  const today = new Date();
  const day= today.getDate();
  const month= today.getMonth();
  const year=today.getFullYear();
  const currentDate=`${day}/${month}/${year}`;
  
  

  return (
    <div className="w-full lg:w-2/3 px-4 sm:px-6 py-6">

      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
        📝 Your Notes
      </h2>

      {notes.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          No notes yet. Add one ✨
        </p>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {notes.map(note => (
            <div
              key={note.id}
              className="
                p-5 
                rounded-2xl 
                bg-white 
                shadow-md 
                hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-1 hover:scale-[1.02]
                flex flex-col justify-between
              "
            >

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {note.title}
                </h3>

                <p className="text-gray-600 text-sm flex flex-wrap  leading-relaxed">
                  {note.content}
                </p>
                </div>

              <div className="flex justify-between gap-3 mt-4">
                <h5 className='text-gray-700 text-sm'> {currentDate}</h5>
                <button className="text-sm px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                  Delete
                </button>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default Notes