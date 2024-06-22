import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 20%;
  margin: 12px;
  display: flex;

  .thumb{
    width: auto;
    height: 64px;
  }
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;
`

export const Title = styled.h3`
  font-weight: 700;
`

export const ArtistName = styled.p`
  font-size: 15px;
  font-weight: 400;
`
