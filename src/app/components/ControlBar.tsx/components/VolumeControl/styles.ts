import { grayscale } from "@/app/styles/colors";

export const SliderStyle = {
  width: '120px',

  // cor da linha
  color:'white',
  
  // cor do que já foi assistido
  '& .MuiSlider-track': {
    border: `2px solid ${grayscale[100]}`,
  },

  // bolinha 
  '& .MuiSlider-thumb': {
    width: 16,
    height: 16,
    backgroundColor: `${grayscale[100]}`,
    transition: 'all 0.1s',

    // sombra em volta da bolinha
    '&::before': {
      boxShadow: '0 0px 4px white',
    },

    // estados de utilização da bolinha
    '&:hover, &.Mui-active': {
      boxShadow: '0 0px 10px white',
      width: 20,
      height: 20,
    },

    '&.Mui-focusVisible': {
      boxShadow: 'none'
    }
  }
}