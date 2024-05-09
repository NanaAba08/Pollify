import { useNavigate } from "react-router-dom";

const ServiceComponent = ({ title, description, actionButton }) => {
    return (
        <>
            <div className="Services-col">
                <h3>{title}</h3>
                <p>{description}</p>
	    	{actionButton}
            </div>
        </>
    );
};

export default ServiceComponent;
