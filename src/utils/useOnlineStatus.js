<<<<<<< HEAD
import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [status,setStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",()=> {
            setStatus(false);
        });

        window.addEventListener("online",()=> {
            setStatus(true);
        });
    },[]);


    return status;
};

=======
import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [status,setStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",()=> {
            setStatus(false);
        });

        window.addEventListener("online",()=> {
            setStatus(true);
        });
    },[]);


    return status;
};

>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
export default useOnlineStatus;