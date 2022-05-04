import styled, { keyframes } from 'styled-components'

const buttonAnimation = keyframes`
  from {
    top: 25%;
  }
  50% {
    top: 50%;
  }
  to {
    top: 25%;
  }
`

const arrowAnimation = keyframes`
  from {
    opacity: 0%;
  }
  25%{
    opacity: 100%;
  }
  50% {
    opacity: 0%;
  }
  to {
    opacity: 0%;
  }
`

export const MouseScroll = styled.div`
  position: relative;
  width: 40px;
  height: 100px;
`

export const Mouse = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  border: white 2px solid;
  border-radius: 20px;
`
export const Button = styled.div`
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  left: 50%;
  top: 20%;
  border: 5px solid #f2f2f2;
  border-radius: 50%;
  animation: ${buttonAnimation} 2s ease-in-out infinite;
`

export const Arrows = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  align-items: center;

  .arrow {
    position: relative;
    width: 20px;
    height: 20px;
    border-right: 2px solid #f2f2f2;
    border-bottom: 2px solid #f2f2f2;
    transform: rotate(45deg);
    animation: ${arrowAnimation} 3s ease-in-out infinite;

    &:first-child {
      animation-delay: 0.5s;
    }
    &:last-child {
      animation-delay: 1s;
    }
  }
`
