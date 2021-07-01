import styled from 'styled-components'
import Button from './Button';


export const StyledButton = styled(Button)`
    width: 200px;
    height:50px;
    background-color: ${(props) => props.backgroundColor};

    &:hover{
        background-color: coral;
        & label{
            color:green;
        }
    }
`;

export const ButtonLabel= styled.label`
    color:white;
    font-size: 25px;
`

// export const BlueButton = styled.button`
//     width: 200px;
//     height:50px;
//     background-color: blue;

// `;
// export const GreenButton = styled.button`
//     width: 200px;
//     height:50px;
//     background-color: green;

// `;
// export const RedButton = styled.button`
//     width: 200px;
//     height:50px;
//     background-color: red;

// `;
