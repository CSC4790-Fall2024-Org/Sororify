import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './InfoPage.css';



function InfoPage() {
    const [bumpGroupSize, setBumpGroupSize] = useState(null);

    const handleButtonClick = (size) => {
        setBumpGroupSize(size);
    };

    return (
        <div>
            <h1>Info Page</h1>
            <p>Let us know how you run your sisterhood round!</p>
            <p>How many girls are in a bump group?</p>
            <div>
                <Button className = "myButton" variant="contained" color="primary" onClick={() => handleButtonClick(1)}>1</Button>
                <Button className = "myButton" variant="contained" color="primary" onClick={() => handleButtonClick(2)}>2</Button>
                <Button className = "myButton" variant="contained" color="primary" onClick={() => handleButtonClick(3)}>3</Button>
                <Button className = "myButton" variant="contained" color="primary" onClick={() => handleButtonClick(4)}>4</Button>
                <Button className = "myButton" variant="contained" color="primary" onClick={() => handleButtonClick(5)}>5</Button>
            </div>
            {bumpGroupSize && <p>You selected {bumpGroupSize} girls in a bump group.</p>}

        </div>
    );
}



export default InfoPage;