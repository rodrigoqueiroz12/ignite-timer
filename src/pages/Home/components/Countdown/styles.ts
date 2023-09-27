import styled from 'styled-components'

export const CountdownContainer = styled.main`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    cursor: default;
    user-select: none;

    @media (max-width: 400px) {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 8rem;
    gap: 0.5rem;
    line-height: 1;
  }

  @media (max-width: 500px) {
    align-items: flex-start;
    font-size: 5rem;
    gap: 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
    gap: 0.5rem;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
    gap: 0.5rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: default;
  user-select: none;

  @media (max-width: 400px) {
    width: 2rem;
  }
`
