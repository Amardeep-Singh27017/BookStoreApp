import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  flex flex-col gap-3">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-400">✕</button>

                        <h3 className="font-bold text-lg text-slate-400">Login!</h3>
                        <div className='space-y-2'>
                            <span className='block text-slate-400'>Email</span>
                            <input type="email" placeholder='Enter your email' className="w-80 px-3 py-2 bg-transparent border border-slate-600 rounded-md outline-none" {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span className='block text-slate-400'>Password</span>
                            <input type="password" placeholder='Enter your password' className="w-80 px-3 py-2 bg-transparent border border-slate-600 rounded-md outline-none" {...register("password", { required: true })}  />
                            <br />
                            {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-3'>
                            <button className='bg-pink-500 rounded-md px-3 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
