import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 6rem);
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.lightBlue};
`

export const Form = styled.form`
  min-width: 80vw;
  height: 20vh;
  background-color: ${({ theme }) => theme.turquoise};
  border-radius: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 40em) {
    width: 100vw;
    height: 100%;
    border-radius: 0;
  }

  input {
    width: 60%;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.darkGray};
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    border-radius: 0.5rem;

    @media (max-width: 40em) {
      width: 80%;
    }
  }

  button {
    width: 20%;
    padding: 1rem 1rem;
    font-size: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.bluishGreen};
    color: ${({ theme }) => theme.lightBlue};
    border-radius: 0.5rem;
    margin-left: 1rem;
    cursor: pointer;

    @media (max-width: 40em) {
      padding: 0.75rem;
      margin-left: 0px;
      margin-top: 0.5rem;
      width: 70%;
    }
  }

  @media (min-width: 40em) {
    flex-direction: row;
  }
`
