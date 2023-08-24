import { useHistory } from 'react-router-dom';
import './page-not-found.scss';

const PageNotFound = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    };

    return (
        <div className="not-found-main-container flex column center-center">
            <h1 className='not-found-oops'>Oops!</h1>
            <h2 className='not-found-404'>404 - PAGE NOT FOUND</h2>
            <div className='not-found-msg'>
                We regret to inform you that the company you are looking for could not be found in our database. It's possible that the company name or symbol you entered is not recognized, or the company might not be currently available in our system.
            </div>
            <div className='not-found-msg'>
                Thank you for your understanding, and we apologize for any inconvenience caused.
            </div>
            <div className="btn" onClick={handleClick}>Back to Homepage</div>
        </div>
    );
}

export default PageNotFound;