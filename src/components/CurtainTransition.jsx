import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import redCurtain from "../app/assets/images/red-curtain.jpg";

const CurtainTransition = ({ children }) => {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        // Reset scroll position on route change
        window.scrollTo(0, 0);

        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setIsInitialLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {/* Left Curtain */}
            <motion.div
                data-testid="curtain-left"
                initial={{ x: isInitialLoad ? "0%" : "-100%" }}
                animate={{ x: isAnimating ? "0%" : "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100vh",
                    backgroundImage: `url(${redCurtain})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    zIndex: 9999,
                }}
            />

            {/* Right Curtain */}
            <motion.div
                data-testid="curtain-right"
                initial={{ x: isInitialLoad ? "0%" : "100%" }}
                animate={{ x: isAnimating ? "0%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100vh",
                    backgroundImage: `url(${redCurtain})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    zIndex: 9999,
                }}
            />

            {/* Page Content - always visible behind curtain */}
            <motion.div
                key={location.pathname}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                style={{ position: "relative", zIndex: 1 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default CurtainTransition;
