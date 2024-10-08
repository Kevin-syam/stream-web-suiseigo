import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/react";
import React from "react";

const Register = () => {
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img
                            src="/images/logo-white.png"
                            className="w-[19rem] ml-[-2.5rem] my-[-8rem] "
                            alt=""
                        />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forinput="fullname"
                                        value="Full Name"
                                    />
                                    <TextInput
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        defaultValue="Your React"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forinput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        defaultValue="sui@mail.com"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forinput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        defaultValue="eeeeeeeeeeeeeee"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link href={route("prototype.dashboard")}>
                                    <Button variant="primary">
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>

                                <Link href={route("prototype.login")}>
                                    <Button variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                                {/* <!-- <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                            <span class="text-base font-semibold">
                                Sign Up
                            </span>
                        </button> --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
