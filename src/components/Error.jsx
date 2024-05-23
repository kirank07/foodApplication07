<<<<<<< HEAD
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return<div>
        <h1>Oops!!!</h1>
        <h2>Something went wrong!</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
}

=======
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return<div>
        <h1>Oops!!!</h1>
        <h2>Something went wrong!</h2>
    </div>
}

>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
export default Error;