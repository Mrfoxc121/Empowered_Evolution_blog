"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className='flex flex-col w-full mt-6 ' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-4 p-3 border-none rounded-lg focus:shadow-lg focus:ring-0 bg-stone-100 placeholder:text-stone-400' type="text" placeholder="Name" {...register("Name", {required: true})} />
      <input className='mb-4 p-3 border-none rounded-lg focus:shadow-lg focus:ring-0 bg-stone-100 placeholder:text-stone-400' type="email" placeholder="Email" {...register} />
      <input className='mb-4 p-3 border-none rounded-lg focus:shadow-lg focus:ring-0 bg-stone-100 placeholder:text-stone-400' type="number" placeholder="Phone Number" {...register("Phone Number", {})} />
      <textarea className='mb-4 p-3 border-none rounded-lg focus:shadow-lg focus:ring-0 bg-stone-100 placeholder:text-stone-400' placeholder="Have your say..." rows={5} {...register("Blog Idea", {})} />

      <input className='bg-dark dark:bg-light inline-block capitalize py-3 w-full text-light dark:text-dark font-semibold rounded hover:scale-y-105 transition-all ease duration-200 cursor-pointer' type="submit" value="Get in touch" />
    </form>
  );
}