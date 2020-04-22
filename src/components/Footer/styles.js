import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    color: var(--text);
    font-weight: 400;
  }
  li {
    display: flex;
    flex-direction: column;

    a {
      color: var(--text);
      font-weight: 400;
      transition: all ease-in-out 250ms;

      &:hover {
        color: var(--accent);
      }
    }
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  svg {
    margin-right: 5px;
  }
`;

export const PartnersWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
  svg {
    margin-right: 10px;
  }
`;
