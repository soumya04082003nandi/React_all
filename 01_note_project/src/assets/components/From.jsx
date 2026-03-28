
const Form = ({ title, setTitle, content, setContent, notes, setNotes }) => {


    return (
        <div className="w-full lg:w-1/3 flex justify-center px-4 py-6">

            <div className="
                w-full 
                max-w-md 
                p-6 sm:p-8 
                rounded-3xl 
                shadow-xl 
                backdrop-blur-lg 
                bg-white/70 
                border border-white/30 
                flex flex-col gap-5 
                transition-all duration-300 hover:shadow-2xl
            ">

                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
                    ✍️ Mark the Important
                </h3>

                <input
                    className="
                        w-full h-10 sm:h-11 
                        px-3 sm:px-4 
                        rounded-xl 
                        border border-gray-300 
                        focus:outline-none 
                        focus:ring-2 focus:ring-purple-400 
                        transition duration-300
                    "
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    type="text"
                    placeholder="Note Heading"
                />

                <textarea
                    className="
                        w-full 
                        h-28 sm:h-32 md:h-36 
                        px-3 sm:px-4 py-2 
                        rounded-xl 
                        border border-gray-300 
                        resize-none 
                        focus:outline-none 
                        focus:ring-2 focus:ring-purple-400 
                        transition duration-300
                    "
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                    placeholder="Write your note..."
                ></textarea>

                <button className="
                    w-full 
                    py-2 sm:py-3 
                    rounded-xl 
                    bg-linear-to-r from-purple-500 to-indigo-500 
                    text-white font-medium 
                    shadow-md 
                    hover:scale-105 hover:shadow-lg 
                    active:scale-95
                    transition-all duration-300
                "
                    onClick={() => {
                        if (title != '' || content != '') {
                            const newNote = {
                                id: Date.now(),
                                title,
                                content
                            };
                            setNotes([...notes, newNote]);

                            setContent('');
                            setTitle('');
                            console.log(notes);
                        }




                    }}

                >
                    Add Note
                </button>

            </div>
        </div>
    )
}

export default Form