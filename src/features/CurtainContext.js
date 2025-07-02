import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CurtainContext = createContext();

export const CurtainProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [phase, setPhase] = useState("initial");
    const [prevPath, setPrevPath] = useState(location.pathname);
    const [pendingPath, setPendingPath] = useState(null);

    // After initial mount, open curtains
    useEffect(() => {
        if (phase === "initial") {
            const timer = setTimeout(() => {
                setPhase("opening");
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // When location changes externally (not via triggerCurtainTransition), start closing animation
    useEffect(() => {
        if (location.pathname !== prevPath && phase !== "closing") {
            setPhase("closing");
            setPendingPath(location.pathname);
        }
    }, [location.pathname, prevPath, phase]);

    // Function to trigger curtain closing and navigate
    const triggerCurtainTransition = (path) => {
        if (path === location.pathname) return; // if already on this path, do nothing
        setPendingPath(path);
        setPhase("closing");
    };

    // Called when curtain close animation finishes
    const handleCurtainCloseComplete = () => {
        if (phase === "closing" && pendingPath) {
            navigate(pendingPath);
            setPrevPath(pendingPath);
            window.scrollTo(0, 0);
            setPhase("opening");
            setPendingPath(null);
        }
    };

    return (
        <CurtainContext.Provider
            value={{
                phase,
                handleCurtainCloseComplete,
                triggerCurtainTransition,
            }}
        >
            {children}
        </CurtainContext.Provider>
    );
};

export const useCurtain = () => useContext(CurtainContext);
