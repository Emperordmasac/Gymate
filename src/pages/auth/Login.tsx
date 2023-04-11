import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";

//--INTERNAL IMPORTS
import { useToggle } from "utils/hooks";
import { goTop } from "utils/helpers";
import { TextField } from "components/common/TextInput";

const Login = (): JSX.Element => {
    const [showPassword, togglePassword] = useToggle(false);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = object().shape({
        email: string().email("Email is invalid").required("Email is required"),
        password: string()
            .min(8, "Password must not be less than 8 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values: any) => {
        setLoginInfo({ email: values?.email, password: values?.password });
        console.log("loginInfo-->", loginInfo);
        goTop();
    };

    return (
        <>
            <section className="section_div">
                <div className="section_banner justify-center flex relative">
                    <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
                        Sign In
                    </h1>
                </div>

                {/* Sign in Section */}
                <div className="page_padding py-[10rem] flex justify-center">
                    {/* form */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, isValid, dirty }) => (
                            <Form
                                className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl relative"
                                autoComplete="off"
                            >
                                <TextField
                                    type="text"
                                    name="email"
                                    htmlFor="email"
                                    label="Email Address"
                                    value={values?.email}
                                    error={errors?.email && touched?.email}
                                    placeholder="name@gmail.com"
                                />
                                <TextField
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    htmlFor="password"
                                    label="Password"
                                    value={values?.password}
                                    error={
                                        errors?.password && touched?.password
                                    }
                                    placeholder="Password"
                                    divClass="mt-8"
                                    context={
                                        <span
                                            className="text-[1.5rem] text-black cursor-pointer "
                                            onClick={togglePassword}
                                        >
                                            <i className="z-[99] fa-sharp fa-solid fa-eye-slash"></i>
                                        </span>
                                    }
                                />

                                <button
                                    type="submit"
                                    className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-20"
                                >
                                    Sign In
                                </button>
                                <div className="flex gap-4 items-center mt-16 min450:flex-col">
                                    <p className="text-white text-[1.5rem]">
                                        New to Gymate?
                                    </p>
                                    <Link
                                        to="/signup"
                                        className="text-[#ff0336] font-bold text-[1.5rem]"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                                {/* <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
                                    <span className="text-[#ff0336]">
                                        Test Account
                                    </span>{" "}
                                    - gymate@gymail.com{" "}
                                    <span className="text-[#ff0336]"> / </span>
                                    testpassword123
                                </p> */}
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
};

export default Login;
