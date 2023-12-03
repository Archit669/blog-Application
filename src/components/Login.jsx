import { Link } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";

function Login() {
    return (
        <>
            <section className="w-full min-h-screen h-full flex items-center py-36">
                <div className="absolute w-full h-full top-0 right-0 bg-black">
                    <img
                        className="opacity-50"
                        src="Login.png"
                        alt="login page background"
                    />
                </div>
                <div className="container w-full h-full flex items-center mx-auto">
                    <div className="max-w-md w-full mx-auto text-white rounded-lg ">
                        {/* <h1 className="text-4xl mb-8 font-semibold px-5">Login</h1> */}

                        <LoginForm />

                        <p className="mt-4">
                            Dont have an account?{" "}
                            <Link to="/signup" className="font-semibold">
                                Register
                            </Link>
                            .
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
