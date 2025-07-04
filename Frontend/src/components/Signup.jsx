import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    alert("signup successfully")
                }
                localStorage.setItem("Users", JSON.stringify(res.data))
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    alert("Error: " + err.response.data.message)
                }
            })
    }

    return (
        <>
            <div id="my_modal_3" className='min-h-screen flex items-center justify-center'>
                <div className="modal-box  flex flex-col gap-3 border ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-400">✕</Link>

                        <h3 className="font-bold text-lg text-slate-400">Signup!</h3>
                        <div className='space-y-2'>
                            <span className='block text-slate-400'>Name</span>
                            <input type="text" placeholder='Enter your fullname' className="w-80 px-3 py-2 bg-transparent border border-slate-600 rounded-md outline-none "  {...register("fullname", { required: true })} />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-400'>This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span className='block text-slate-400'>Email</span>
                            <input type="email" placeholder='Enter your email' className="w-80 px-3 py-2 bg-transparent border border-slate-600 rounded-md outline-none "  {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span className='block text-slate-400'>Password</span>
                            <input type="password" placeholder='Enter your password' className="w-80 px-3 py-2 bg-transparent border border-slate-600 rounded-md outline-none"  {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-3 items-center'>
                            <button className='bg-pink-500 text-white rounded-md py-2 px-3 hover:bg-pink-700 duration-200'>Signup</button>
                            <span>
                                Have account?
                                <button className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById('my_modal_3').showModal()}>
                                    Login
                                </button>{""}
                                <Login />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
