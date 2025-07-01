import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CurtainTransition = ({ children }) => {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Match timing to your curtain open duration

        return () => clearTimeout(timer);
    }, [location.pathname]); // <- re-run animation on every route change

    return (
        <>
            {/* Left Curtain */}
            <motion.div
                data-testid="curtain-left"
                initial={{ x: "-100%" }}
                animate={{ x: isAnimating ? "0%" : "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100vh",
                    backgroundColor: "#8B0000",
                    zIndex: 9999,
                }}
            />

            {/* Right Curtain */}
            <motion.div
                data-testid="curtain-right"
                initial={{ x: "100%" }}
                animate={{ x: isAnimating ? "0%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100vh",
                    backgroundColor: "#8B0000",
                    zIndex: 9999,
                }}
            />

            {/* Page Content */}
            <motion.div
                key={location.pathname} // ensures content re-renders per route
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimating ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default CurtainTransition;
