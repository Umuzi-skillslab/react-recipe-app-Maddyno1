import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="page"> //For consistent spacing
            <div className={styles.notFound}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for doesn't exist.</p>
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        </div>
    );
};

export default NotFound;