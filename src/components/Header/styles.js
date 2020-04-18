import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 5%;
  background: var(--primary);
`;

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;

  ul {
    list-style: none;
    li {
      a {
        color: #fff;

        &:hover {
          color: var(--accent);
        }
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    color: var(--accent);
  }
`;

export const CartWrapper = styled.div``;
