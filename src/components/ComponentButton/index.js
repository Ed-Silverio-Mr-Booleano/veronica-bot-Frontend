
import { React} from "react";
import { Container } from "./styles";

const Button = ({title}) => {
    
    return (

        <Container>
            <button>{title}</button>
        </Container>
       
    );
};

export default Button;
