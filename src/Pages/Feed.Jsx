import React from 'react'

function Feed() {
    return (
        <div className='justify-center flex'>
            <div className="flex gap-3 m-3 p-6 border-2 border-white lg:w-3/6 rounded-md" style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}>
                <img
                    className="w-12 h-12"
                    src="https://pagedone.io/asset/uploads/1704092147.png"
                    alt="Hailey image"
                />
                <div className="grid gap-3">
                    <div className="grid gap-0.5">
                        <h2 className="text-gray-900 text-sm font-medium leading-snug">
                            Hailey Garza{" "}
                            <span className="text-gray-500">
                                added new tags to Ease Design System
                            </span>
                        </h2>
                        <h3 className="text-gray-500 text-xs font-normal leading-4">
                            Account | Friday, 10:03 AM
                        </h3>
                    </div>
                    <div className="">
                        <p className='text-gray-400 text-gray-500 font-extralight '>Hi @everyone, the new designs are attached. Go check them out and let me know if I missed anything. Thanks!</p>
                    </div>
                    <div>
                        <div className="my-2 flex gap-2 flex-wrap">
                            <img
                                className="rounded-lg w-48 h-48"
                                src="https://flowbite.com/application-ui/demo/images/feed/image-1.jpg"
                                alt="task screenshot"
                            />
                            <img
                                className="rounded-lg w-48 h-48"
                                src="https://flowbite.com/application-ui/demo/images/feed/image-2.jpg"
                                alt="task screenshot"
                            />
                        </div>
                        <hr />
                        <div className='flex gap-2 my-3'>
                            <div className="flex gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                                </svg>

                                <span className='text-gray-500 font-medium'> 7 Comments </span>

                            </div>


                            <div className='flex gap-1'>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>

                                <span className='text-gray-500 font-medium'> 457 Likes </span>
                            </div>

                        </div>
                        <hr />
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-medium my-2"
                                    htmlFor="grid-password"
                                >
                                    Comment
                                </label>
                                <div className="flex">
                                    <input
                                        className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="text"
                                        placeholder="Write Comment"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6 cursor-pointer"
                                        style={{ position: "relative", top: 11, left: "-30px" }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>



                            </div>
                        </div>

                        <div></div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Feed