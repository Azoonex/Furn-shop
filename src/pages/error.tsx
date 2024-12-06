import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn&apos;t exist!</h1>
            <Link to='/'>Click here to go back</Link>
        </div>
    );
};

export default ErrorPage;
