'use client'
import { yellow } from '../../styles/colors';
import styled from "styled-components";

export const ContentHeader = styled.section`
  background-color: ${yellow.default};
  width: 100vw;
  min-width: 80px;
  height: fit-content;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;

  .musicStatus{
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
