import styled from 'styled-components'
import IMAGES from '../../images'

export const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-image: url(${IMAGES.AUTH_BG});
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
`
