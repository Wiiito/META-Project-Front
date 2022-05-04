import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 6rem);
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
`

export const Message = styled.div`
  position: absolute;
  width: 80vw;
  border: 4px solid #f2f2f2;
  left: calc(10vw - 4px);
  top: 30vh;
  color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 800;
  text-shadow: 1px 1px 2px black;
  padding: 6px;

  @media (min-width: 861px) {
    top: 25vh;
    font-size: 4.4rem;
    width: 50vw;
  }
`

export const Scroll = styled.div`
  position: absolute;
  bottom: 5vh;
  transform: translateX(-50%);
  left: 50%;
`
