import React from 'react'
import { Signup as SignupComponent } from '../components'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <section className="w-full min-h-screen h-full flex items-center py-36">
                <div className="absolute w-full h-full top-0 right-0 bg-black">
                    <img
                        className="opacity-50"
                        src="Signup.png"
                        alt="home page background"
                    />
                </div>
                <div className="container mx-auto">
                    <div className="max-w-md w-full mx-auto text-white rounded-lg">
                        <h1 className="text-4xl mb-8 font-semibold">
                            Create Account
                        </h1>

                        <div className="w-full mt-6 mb-4 border border-t-[#ffffff23] border-dashed"></div>

                        <SignupComponent />

                        <p className="mt-6">
                            Already registered?{" "}
                            <Link to="/login" className="font-semibold">
                                Login
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;
