import { styled } from "styled-components";

export const ShowCaseParticleContainer = styled.div`
  position: relative;
  @media (max-inline-size: ${({ theme }) => theme.breackpoints.mobile}) {
    display: none;
  }
`;
export const ShowCaseImageCard = styled.div`
  inline-size: 500px;
  block-size: 500px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  padding-block-end: 2rem;

  img {
    inline-size: 100%;
    object-fit: cover;
  }
`;
export const Particle = styled.img`
  position: absolute;
  inset-block-start: ${({ top }) => top};
  inset-inline-start: ${({ left }) => left};
  inset-inline-end: ${({ right }) => right};
  inset-block-end: ${({ bottom }) => bottom};
  inline-size: 60px;
  transform: rotate(${({ rotate }) => rotate});
`;
