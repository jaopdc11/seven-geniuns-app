import React from "react";

type ToastProps = {
    message: string;
    type: "success" | "error";
    onClose: () => void;
};

export default function Toast({ message, type, onClose }: ToastProps) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            style={{
                position: "fixed",
                top: 20,
                left: 20,
                padding: "12px 20px",
                backgroundColor: type === "success" ? "#4caf50" : "#f44336",
                color: "white",
                borderRadius: 6,
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                zIndex: 9999,
                fontWeight: "bold",
            }}
        >
            {message}
        </div>
    );
}
