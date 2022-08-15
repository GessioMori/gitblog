import styled from 'styled-components'

import effectCenter from './../../assets/EffectCenter.svg'
import effectLeft from './../../assets/EffectLeft.svg'
import effectRight from './../../assets/EffectRight.svg'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 10rem;
  background-color: ${(props) => props.theme['base-profile']};
  background-image: url(${effectLeft}), url(${effectCenter}),
    url(${effectRight});

  background-position: top left, bottom center, top right;
  background-repeat: no-repeat;

  img {
    filter: brightness(2);
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
