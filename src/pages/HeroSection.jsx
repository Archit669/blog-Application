import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeroSection() {
    const authStatus = useSelector((state) => state.auth.status)
    return (
        <>
            <section className="w-full h-screen flex items-center">
                <div className="absolute w-full h-full inset-0  bg-black">
                    <img
                        className="opacity-50"
                        src="HeroSection.png"
                        alt="home page background"
                    />
                </div>

                <div className="container text-white w-[50%] m-auto h-[40vh]">
                    <div className="space-y-4">
                        <p className="font-thin uppercase text-sm tracking-[0.5rem]">
                            Explore • Share • Connect
                        </p>
                        <h1 className="text-5xl font-bold leading-[3.5rem]">
                            Welcome to Wanderlust Chronicles{" "}
                            <span className="font-thin block">
                                Where Stories Unite
                            </span>
                        </h1>
                        <p className="max-w-2xl  text-lg">
                            Are you ready to embark on a journey of endless
                            exploration, cultural discovery, and unforgettable
                            experiences? Look no further than Wanderlust
                            Chronicles. Here, we invite travelers from all
                            corners of the globe to come together, share their
                            adventures, and connect with fellow wanderers.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 my-10">
                        <Link
                            className=" px-5 pt-2 pb-3 cursor-pointer rounded-md text-black font-semibold bg-white border border-white"
                            to= {authStatus ? "/add-post" : "/signup"}
                        >
                            Get started
                        </Link>
                        <Link
                            className="px-5 pt-2 pb-3 cursor-pointer rounded-md font-semibold "
                            to={authStatus ? "/all-posts" : "/login" }
                        >
                            View Articles
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
