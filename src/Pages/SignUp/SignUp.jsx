import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()

    if (token) {
        navigate('/');
    }

    const handleSingUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user created Successfully', { autoClose: 500 })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,);
                        // navigate kore direct home page sole jabe sigup korar por
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });
    }


    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-six-wine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }




    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: "Name is required"
                        })} />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: "Email Address is required"
                        })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already Have an Account<Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;