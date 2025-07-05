import Header from "../components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import directing1 from "../app/assets/images/directing1.jpg";

const ContactPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = directing1;
    }, []);

    const lineVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

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
                            <h2 className="font-italiana text-2xl font-semibold text-gray-800 mb-2">
                                Email me
                            </h2>

                            {/* Email Field */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="from_email"
                                    className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 placeholder-transparent peer"
                                />
                                <motion.label
                                    className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-salmon"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={imageLoaded ? "visible" : "hidden"}
                                    transition={{ delay: 3.2 }}
                                >
                                    Your Email
                                </motion.label>
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-0.5"
                                    viewBox="0 0 100 1"
                                >
                                    <motion.path
                                        d="M0,0.5 L100,0.5"
                                        stroke="#e98074"
                                        strokeWidth="1"
                                        fill="none"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        transition={{ delay: 0.5 }}
                                    />
                                </svg>
                            </div>

                            {/* Name Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="from_name"
                                    className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 placeholder-transparent peer"
                                />
                                <motion.label
                                    className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-salmon"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={imageLoaded ? "visible" : "hidden"}
                                    transition={{ delay: 3.4 }}
                                >
                                    Your Name
                                </motion.label>
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-0.5"
                                    viewBox="0 0 100 1"
                                >
                                    <motion.path
                                        d="M0,0.5 L100,0.5"
                                        stroke="#e98074"
                                        strokeWidth="1"
                                        fill="none"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        transition={{ delay: 1.3 }}
                                    />
                                </svg>
                            </div>

                            {/* Subject Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    name="title"
                                    className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 placeholder-transparent peer"
                                />
                                <motion.label
                                    className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-salmon"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={imageLoaded ? "visible" : "hidden"}
                                    transition={{ delay: 3.6 }}
                                >
                                    Subject
                                </motion.label>
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-0.5"
                                    viewBox="0 0 100 1"
                                >
                                    <motion.path
                                        d="M0,0.5 L100,0.5"
                                        stroke="#e98074"
                                        strokeWidth="1"
                                        fill="none"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        transition={{ delay: 2.1 }}
                                    />
                                </svg>
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <textarea
                                    placeholder="Message"
                                    rows="4"
                                    name="message"
                                    className="w-full bg-transparent outline-none text-lg text-gray-800 pb-2 placeholder-transparent peer resize-none"
                                />
                                <motion.label
                                    className="absolute left-0 top-0 text-lg text-gray-600 pointer-events-none transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-salmon"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={imageLoaded ? "visible" : "hidden"}
                                    transition={{ delay: 3.8 }}
                                >
                                    Message
                                </motion.label>
                                <svg
                                    className="absolute bottom-0 left-0 w-full h-0.5"
                                    viewBox="0 0 100 1"
                                >
                                    <motion.path
                                        d="M0,0.5 L100,0.5"
                                        stroke="#e98074"
                                        strokeWidth="1"
                                        fill="none"
                                        variants={lineVariants}
                                        initial="hidden"
                                        animate={
                                            imageLoaded ? "visible" : "hidden"
                                        }
                                        transition={{ delay: 2.9 }}
                                    />
                                </svg>
                            </div>

                            <button
                                type="submit"
                                className="font-italiana w-full text-center bg-salmon text-gray-800 py-3 px-4 mt-2 rounded-xl border-none cursor-pointer text-lg font-semibold hover:scale-105 hover:bg-salmon-dark transition-all duration-300 ease-in-out hover:shadow-lg"
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
