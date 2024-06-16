'use client'
import { yellow } from '../../styles/colors';
import styled from "styled-components";
import { breakpoints } from '../../styles/breakpoints';

export const ContentHeader = styled.section`
  background-color: ${yellow.default};
  width: 100%;
  min-width: 80px;
  height: fit-content;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;

  @media ${breakpoints.LG}{
    justify-content: space-between;
  }
  
  .musicStatus{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media ${breakpoints.LG}{
      width: 60%;
    }
  }
`
