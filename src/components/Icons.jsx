"use client";

import {HiOutlineChat, HiOutlineHeart, HiOutlineTrash} from 'react-icons/hi'

export default function Icon() {
  return (
    <div className='flex'>
      <HiOutlineChat className='h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100'/>
      <HiOutlineHeart className='h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100'/>
      <HiOutlineTrash className='h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100'/>
    </div>
  )
}
