import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

export const Image = styled.img`
    max-width: 67.375em;
    max-height: 67.375em;
`;

// export const ImageContainer = styled.div`
//   flex: 1;
//   width: 50em;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 767px) {
//     height: 50%;
//   }
// `;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; /* set width to 50% */
  margin-bottom: 20px; /* add some margin at the bottom */

  @media (min-width: 768px) {
    height: 60em; /* set height to 60em */
    width: 50em; /* set width to 50em */
  }
`;


// export const SignInContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-left: 400px; /* add margin to the left */
//   width: 30em;
// `;

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30em; /* add max-width property */
  margin-left: 1000px;
`;


// export const InputContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: -120px;
//     margin-bottom: 30px;
//     width: 30em; /* add width */
//     margin-left: auto; /* center horizontally */
//     margin-right: auto; /* center horizontally */
// `;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 30px;
  width: 100%; /* set width to 100% */
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    width: 50%; /* set width to 50% */
    margin-left: auto; /* center horizontally */
    margin-right: auto; /* center horizontally */
  }
`;


// export const Container = styled.main`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 60em;
//   padding: 0px;
//   height: 60em;
//   margin-left: 120px; /* adjust margin */
//   margin-right: 150px; /* adjust margin */
//   margin-top: 0px;

//   @media (min-width: 768px) {
//     justify-content: flex-start;
//     width: 40em;
//   }

//   @media (max-width: 767px) {
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//     & > *:first-child {
//       margin-right: 0;
//     }
//   }
// `;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px; /* add some padding */
  height: auto; /* set height to auto */
  margin: 0px; /* remove margins */
  margin-left: 120px;
  margin-right: 150px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0px; /* remove padding */
    margin: 0px 50px; /* add some margin */
    height: 60em; /* set height to 60em */
  }
`;


// export const Title = styled.h2`
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 200px;
//     margin-top: -250px;
//     justify-content: flex-end;
// `;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px; /* reduce margin */
  margin-top: 250px; /* remove margin */
  
  @media (min-width: 768px) {
    margin-bottom: 50px; /* add some margin */
  }
`;


export const InputForm = styled(FormControl)`
    margin-bottom: 30px;
    width: 100%; /* set width to 100% */
`;



export const CustomIcon = styled.div`
    display: flex;
    margin-bottom: 100px;
`;


export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
