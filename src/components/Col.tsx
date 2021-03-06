import styled from 'styled-components'

interface ColProps {
  lg: number
}

const Col = styled.div<ColProps>`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-bottom: 2rem;
  padding-left: 1rem;

  @media screen and (min-width: 992px) {
    flex: 0 0 ${(props): number => (props.lg / 12) * 100}%;
    max-width: ${(props): number => (props.lg / 12) * 100}%;
  }

  h1 {
    font-weight: 800;
    line-height: 3rem;
    letter-spacing: 1px;
    display: inline-block;
    position: relative;
  }
`

export default Col
