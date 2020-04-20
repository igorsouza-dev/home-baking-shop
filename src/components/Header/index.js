import React from 'react';
import * as S from './styles';

const cartItemsCount = 3;

const Header = () => (
  <S.HeaderWrapper>
    <S.LogoWrapper>
      <img src="" alt="logo" />
      <div>
        <strong>MORGHYLIS</strong>
        <small>bakery</small>
      </div>
    </S.LogoWrapper>
    <S.MenuWrapper>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/delivery">Delivery</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </S.MenuWrapper>
    <S.CartWrapper>
      <S.CartButton type="button" onClick={() => {}} items={cartItemsCount}>
        <ShoppingCart color="var(--text)" size={30} />
      </S.CartButton>
      <img src={profilePhoto} alt="avatar" />
    </S.CartWrapper>
  </S.HeaderWrapper>
);

export default Header;
