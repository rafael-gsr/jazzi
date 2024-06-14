import { grayscale } from "@/app/styles/colors";
import styled from "styled-components";

export const SliderStyle = {
  width: '120px',

  // cor da linha
  color:'white',
  
  // cor do que já foi assistido
  '& .MuiSlider-track': {
    border: '2px solid white',
  },

  // bolinha 
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    transition: 'all 0.1s',

    // sombra em volta da bolinha
    '&::before': {
      boxShadow: '0 0px 4px white',
    },

    // estados de utilização da bolinha
    '&:hover, &.Mui-active': {
      boxShadow: '0 0px 10px white',
      width: 18,
      height: 18,
    },

    '&.Mui-focusVisible': {
      boxShadow: 'none'
    }
  }
}

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  width: fit-content;

  .icon{
    margin-left: 8px;
    cursor: pointer;
  }
`
