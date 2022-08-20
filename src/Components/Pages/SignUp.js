import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit  } = useForm();
    const [
        createUserWithEmailAndPassword, user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/allitem";

    useEffect( () =>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password);
        console.log(data)
    }
    return (
        <div>
            <div>
                <div className='flex h-screen justify-center items-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center font-bold">Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("firstName", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Last Name"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("lastName", {
                                            required: {
                                                value: true,
                                                message: 'name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter Your Phone Number"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>

                                {signInError}
                                <input className='btn w-full max-w-xs text-white input input-bordered input-primary' type="submit" value="Sign Up" />
                            </form>
                            <Link to='/login'><p class="underline hover:underline-offset-4 text-center">Already Have A Account Login</p></Link>
                            <div class="divider">OR</div>
                            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary">Sign In With Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;