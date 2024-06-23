import * as colors from '@/app/styles/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items:center;
`

export const SliderStyles = {
  // cor da linha
  color: 'white',

  // cor do que já foi assistido
  '& .MuiSlider-track': {
    border: `2px solid ${colors.darkBlue[500]}`,
  },

  // bolinha
  '& .MuiSlider-thumb': {
    width: 18,
    height: 18,
    backgroundColor: `${colors.darkBlue[700]}`,
    transition: 'all 0.1s',

    // sombra em volta da bolinha
    '&::before': {
      boxShadow: `0 0px 2px ${colors.darkBlue[300]}`,
    },

    // estados de utilização da bolinha
    '&:hover, &.Mui-active': {
      boxShadow: `0 1px 10px ${colors.darkBlue[300]}`,
      width: 24,
      height: 24,
    },

    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
}

export const Numbers = styled.p`
  margin: 0 16px;
  width: 10%;
`