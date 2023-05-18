"use client";
import { useEffect } from "react";

const cv = () => {
    useEffect(() => {
        const handleAlert = () => {
            alert("Still working on this!");
            window.location.href = "/main";
        }
        handleAlert();
    }, [])
}

export default cv;