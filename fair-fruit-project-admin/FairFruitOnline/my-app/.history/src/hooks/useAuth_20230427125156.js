import { useState } from "react";
import { useSelector } from "react-redux"

export const useAuth = () => {
    const {user} = useSelector((state) => state.auth);
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
}