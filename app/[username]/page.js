import React from 'react'
import Image from 'next/image'

const Username = async ({ params }) => {
    const { username } = await params
    return (
        <>
            <div className="cover relative border border-white">
                <img className='object-cover w-full h-[350px]'
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=u32ZF5w1MzDy1bYQ0JoBKhg4xI0ZojaHC0ocYAvjwUI%3D&token-time=1775260800"
                    alt="cover"
                />

                <div className='persianCat w-[150px] h-[150px] absolute left-1/2 -translate-x-1/2 -bottom-20 border border-white border-4 rounded-full'>
                    <img className='rounded-full w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yZq8tbyRvZH-d4HqpDCEgvbVHgFWqN2n4g&s" alt="cat" />
                </div>
            </div>


            <div className='info my-23 flex flex-col justify-center items-center gap-1'>
                <h3 className='font-bold text-lg mt-3'>@{username}</h3>
                <p className='text-slate-400'>Crated animated arts for VTT's</p>
                <p className='text-slate-400'>9719 members . 82 posts . $15450 /release</p>

                <div className='payment flex w-[80%] gap-2 m-auto mt-4'>

                    <div className="supporters flex-1 bg-slate-500 rounded-lg p-10">
                        <h2 className='text-lg font-bold'>Supporters</h2>
                        <ul className='mx-4 flex flex-col gap-2 mt-4'>

                            <li className='flex gap-1 items-start'>
                                <img className='items-start shrink-0' width={25}  src="avatar.gif" alt="" />
                                <span>Shubham donated <span className='font-bold'>$30</span> with a message "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At perspiciatis error quis cupiditate, id corporis quas! Fugiat enim sunt voluptas illum obcaecati, vero ducimus, harum non facilis libero quod. Ad!"</span>
                            </li>

                            <li className='flex gap-1 items-start'>
                                <img className='items-start shrink-0' width={25}  src="avatar.gif" alt="" />
                                <span>Shubham donated <span className='font-bold'>$30</span> with a message "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At perspiciatis error quis cupiditate, id corporis quas! Fugiat enim sunt voluptas illum obcaecati, vero ducimus, harum non facilis libero quod. Ad!"</span>
                            </li>

                            <li className='flex gap-1 items-start'>
                                <img className='items-start shrink-0' width={25}  src="avatar.gif" alt="" />
                                <span>Shubham donated <span className='font-bold'>$30</span> with a message "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At perspiciatis error quis cupiditate, id corporis quas! Fugiat enim sunt voluptas illum obcaecati, vero ducimus, harum non facilis libero quod. Ad!"</span>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="makePayments flex-1 bg-slate-500 rounded-lg p-10">

                        <h3 className='font-bold text-lg my-3'>Make a Payment</h3>

                        <div className='flex flex-col gap-3'>

                            <input className='w-full bg-slate-800 rounded-lg p-2' type="text" placeholder='Enter amount' />
                            <input className='w-full bg-slate-800 rounded-lg p-2' type="text" placeholder='Enter name' />
                            <input className='w-full bg-slate-800 rounded-lg p-2' type="text" placeholder='Enter message' />

                            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2 text-center leading-5 rounded-md'>
                                Pay
                            </button>
                        </div>

                        {/* other payments option */}
                        <div className='flex gap-4 mt-5'>

                            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2 text-center leading-5 rounded-md'>
                                Pay $20
                            </button>
                            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2 text-center leading-5 rounded-md'>
                                Pay $40
                            </button>
                            <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2 text-center leading-5 rounded-md'>
                                Pay $100
                            </button>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Username
