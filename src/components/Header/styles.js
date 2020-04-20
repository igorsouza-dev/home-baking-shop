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
export const CartButton = styled.button`
  background: none;
  border: 0;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  position: relative;
  &:hover {
    svg {
      color: var(--accent);
    }
  }
  &::after {
    content: ${(props) => `'${props.items}'` || ''};
    display: ${(props) => (props.items ? 'block' : 'none')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-weight: bold;
    color: var(--primary);
    font-size: 12px;
    position: absolute;
    background: var(--accent);
    top: 0;
    right: 0;
  }
`;
export const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-left: 10px;
  }
`;
