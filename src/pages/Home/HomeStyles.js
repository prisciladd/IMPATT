import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  img{
    width: ${px2vw(320, 320)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;

    img{
      width: ${px2vw(320, 900)};
    }
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1200)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxSmall = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding-left: ${px2vw(20)};
  margin-left: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  
  @media (min-width: 1024px) {
    width: ${px2vw(250)};
    min-height: ${px2vw(300)};
    height: 100%;
    padding:0;
    margin:0;
  }
`;

export const BoxTitle = styled.h3`
  color: #002953;
  font-size: 1rem;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: black;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const List= styled.ul`
  list-style-type: none;
  padding:0px;
  margin:10px;

  a {
    padding:10px;
    text-decoration: none;
  }

  p{
    font-weight: bold ;
  }

  .menu-vertical_all{
    position: absolute;
    width: 100%;
    z-index:1 ;
  }

  .menu-vertical_all menu-expand:hover .menu-vertical_all {
  display: block;
}
`;