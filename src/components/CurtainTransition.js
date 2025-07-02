import { motion } from "motion/react";
import redCurtain from "../app/assets/images/red-curtain.jpg";
import { useCurtain } from "../features/CurtainContext";

const transitionDuration = 1.2;

const CurtainTransition = ({ children }) => {
    const { phase, handleCurtainCloseComplete } = useCurtain();

    return (
        <>
            {/* Left curtain */}
            <motion.div
                data-testid="curtain-left"
                initial={{ x: "0%" }}
                animate={{
                    x:
                        phase === "initial" || phase === "closing"
                            ? "0%"
                            : "-100%",
                }}
                transition={{ duration: transitionDuration, ease: "easeInOut" }}
                onAnimationComplete={handleCurtainCloseComplete}
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

            {/* Right curtain */}
            <motion.div
                data-testid="curtain-right"
                initial={{ x: "0%" }}
                animate={{
                    x:
                        phase === "initial" || phase === "closing"
                            ? "0%"
                            : "100%",
                }}
                transition={{ duration: transitionDuration, ease: "easeInOut" }}
                onAnimationComplete={handleCurtainCloseComplete}
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

            {/* Page content */}
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </>
    );
};

export default CurtainTransition;
