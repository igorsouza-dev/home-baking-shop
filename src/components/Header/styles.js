import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 10%;
  margin-right: 5%;
  padding-top: 30px;
  background: var(--primary);
`;

export const MenuWrapper = styled.nav`
  width: 80%;
  max-width: 700px;
  padding-left: 5%;

  ul {
    display: flex;
    flex: 3;
    flex-direction: row;
    list-style: none;
    padding: 10px;

    li {
      margin: 0 5%;

      a {
        color: var(--text);
        font-weight: 400;
        transition: all ease-in-out 250ms;
        &::after {
          content: '';
          margin: 10px auto 0 auto;
          display: block;
          width: 0%;
          height: 2px;
          background: var(--accent);
          transition: all 250ms ease-in-out;
        }
        &.active {
          color: var(--accent);
          font-weight: 700;
          &::after {
            width: 100%;
          }
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
  }
  div {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    color: var(--text);
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  button {
    background: none;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;

    &:hover {
      svg {
        color: var(--accent);
      }
    }
  }
  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
`;
