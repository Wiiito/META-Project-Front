import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  width: 100vw;
  height: 6rem;
  padding: 1rem 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px ${({ theme }) => theme.lightGray} solid;

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  nav ul {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    list-style: none;

    li {
      color: ${({ theme }) => theme.darkGray};

      &:not(:first-child) {
        margin-left: 1rem;
      }

      a {
        color: inherit;
        text-decoration: none;
        position: relative;

        &:hover {
          &::after {
            width: 100%;
          }
        }

        &::after {
          content: '';
          transition: ease-in-out 0.2s;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 1px;
          background: ${({ theme }) => theme.darkGray};
        }
      }
    }
  }
`

export const Footer = styled.footer`
  position: absolute;
  width: 100vw;
  height: 100px;
  bottom: 0px;
`
