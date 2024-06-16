import styled from "styled-components";

export const SliderStyle = {
  width: '60%',

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
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  
  .icon{
    width: 24px;
    height: 24px;
    margin: 0 16px;
    cursor: pointer;
  }
`
