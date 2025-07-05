import Header from "../components/Header";
import { motion, Variants } from "motion/react";
import { useState, useEffect } from "react";
import directing1 from "../app/assets/images/directing1.jpg";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.9 + 2;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.6, bounce: 0 },
                opacity: { delay, duration: 0.03 },
            },
        };
    },
};

const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
        opacity: 1,
        transition: { delay: 6 },
    }),
};

const ContactPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.src = directing1;
    }, []);

    return (
        <div className="min-h-screen bg-cream">
            <Header />
            <div className="flex flex-col justify-center items-center relative z-10 px-10 md:px-0 min-h-screen">
                <div className="relative flex justify-between items-center flex-col lg:flex-row w-full max-w-7xl pb-20 gap-12">
                    {/* Left Half - Image */}
                    <div className="w-full lg:w-1/2 h-96 lg:h-[600px]">
                        <img
                            src={directing1}
                            alt="Directing"
                            className="w-full h-full object-cover rounded-2xl"
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>

                    {/* Right Half - Contact Form */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h1 className="font-italiana text-4xl md:text-5xl text-center lg:text-left font-semibold mt-5 text-gray-800 mb-3">
                            Contact
                        </h1>
                        <p className="font-italiana text-lg text-center lg:text-left max-w-lg text-gray-600 mb-7">
                            Feel free to reach out to me for any questions or
                            opportunities!
                        </p>

                        <form className="font-italiana w-full max-w-lg flex flex-col gap-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                Email me
                            </h2>

                            {/* Input Fields */}
                            {[
                                {
                                    label: "Email",
                                    name: "from_email",
                                    type: "email",
                                    custom: 0,
                                },
                                {
                                    label: "Name",
                                    name: "from_name",
                                    type: "text",
                                    custom: 1,
                                },
                                {
                                    label: "Subject",
                                    name: "title",
                                    type: "text",
                                    custom: 2,
                                },
                            ].map((field) => (
                                <div key={field.name} className="relative">
                                    <input
                                        type={field.type}
                                        name={"field.name"}
                                        placeholder={""}
                                        className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 
                                                   placeholder-gray-400 placeholder-opacity-100 peer 
                                                   peer-placeholder-shown:opacity-100 peer-focus:opacity-0 transition-opacity"
                                    />
                                    <motion.label
                                        className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all 
                                                   peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg 
                                                   peer-focus:opacity-0 peer-focus:invisible peer-focus:text-sm peer-focus:text-salmon"
                                        variants={textVariants}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        custom={field.custom}
                                    >
                                        {field.label}
                                    </motion.label>
                                    <motion.svg
                                        className="absolute bottom-0 left-0 w-full h-0.5"
                                        viewBox="0 0 100 1"
                                    >
                                        <motion.line
                                            x1="-100"
                                            y1="0.5"
                                            x2="100"
                                            y2="0.5"
                                            stroke="#e98074"
                                            strokeWidth="2"
                                            variants={draw}
                                            initial="hidden"
                                            animate={
                                                imageLoaded
                                                    ? "visible"
                                                    : "hidden"
                                            }
                                            custom={field.custom}
                                        />
                                    </motion.svg>
                                </div>
                            ))}

                            {/* Message Field */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder=""
                                    rows="4"
                                    className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 
                                               placeholder-gray-400 placeholder-opacity-100 peer 
                                               peer-placeholder-shown:opacity-100 peer-focus:opacity-0 transition-opacity resize-none"
                                />
                                <motion.label
                                    className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all 
                                               peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg 
                                               peer-focus:-top-6 peer-focus:text-sm peer-focus:text-salmon"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={imageLoaded ? "visible" : "hidden"}
                                    custom={3}
                                >
                                    Message
                                </motion.label>
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-0.5"
                                    viewBox="0 0 100 1"
                                >
                                    <motion.line
                                        x1="-100"
                                        y1="0.5"
                                        x2="100"
                                        y2="0.5"
                                        stroke="#e98074"
                                        strokeWidth="2"
                                        variants={draw}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        custom={3}
                                    />
                                </svg>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full text-center bg-salmon text-gray-800 py-3 px-4 mt-2 
                                           rounded-xl border-none cursor-pointer text-lg font-semibold 
                                           hover:scale-105 hover:bg-salmon-dark transition-all duration-300 
                                           ease-in-out hover:shadow-lg"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
