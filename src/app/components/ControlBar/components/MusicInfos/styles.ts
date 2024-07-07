'use client'

import styled from "styled-components";
import * as colors from '@/app/styles/colors'

export const ContentWrapper = styled.div`
  width: 20%;
  margin: 12px;
  display: flex;
  color: white;

  .thumb{
    width: auto;
    height: 64px;
    width: 38%;
    object-fit: cover;
  }
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;
  width: 52%;
`

export const Title = styled.h3`
  font-weight: 700;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  font-size: 16px;
  width: 100%;
  transition: all 50ms ease;

  &:hover{
    transform: translate(1px, -1px);
    width: fit-content;
    border-radius: 5px;
    font-size: 17px;
    padding: 1px 5px;
    outline: 1px solid ${colors.yellow[500]};
    background-color: ${colors.yellow[700]};
  }
`

export const ArtistName = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  transition: all 50ms ease;
  letter-spacing: 0;

  &:hover{
    transform: translate(1px, -1px);
    width: fit-content;
    padding: 1px 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: ${colors.yellow[700]};
    font-weight: 500;
    outline: 1px solid ${colors.yellow[500]};
  }

`
