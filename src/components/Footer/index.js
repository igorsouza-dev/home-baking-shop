import React from 'react';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';
import { Behance } from '@styled-icons/boxicons-logos/Behance';
import { Amazon } from '@styled-icons/boxicons-logos/Amazon';
import { Ebay } from '@styled-icons/boxicons-logos/Ebay';
import * as S from './styles';
import Button from '../Button';

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterColumn>
      <ul>
        <li>
          <a href="/">HOME</a>
          <a href="/menu">MENU</a>
          <a href="/delivery">DELIVERY</a>
          <a href="/contact">CONTACT US</a>
          <a href="/profile">MY PROFILE</a>
          <a href="/basket">BASKET</a>
        </li>
      </ul>
    </S.FooterColumn>
    <S.FooterColumn>
      <ul>
        <li>
          <p>INFORMATION</p>
          <p>&nbsp;</p>
          <a href="/payment-info">Payment method</a>
          <a href="/delivery-info">Delivery</a>
          <a href="/reviews">Reviews</a>
          <a href="/rights">Rights of the client</a>
        </li>
      </ul>
    </S.FooterColumn>
    <S.FooterColumn>
      <ul>
        <li>
          <p>CONTACTS</p>
          <p>&nbsp;</p>
          <p>Ontario, Canada</p>
          <p>34 New Street, street</p>
          <p>+46 021 575 444</p>
          <p>&nbsp;</p>
          <p>SOCIAL NETWORKS</p>
          <S.SocialLinksWrapper>
            <Facebook color="var(--text)" size={24} />
            <Instagram color="var(--text)" size={24} />
            <Whatsapp color="var(--text)" size={24} />
          </S.SocialLinksWrapper>
        </li>
      </ul>
    </S.FooterColumn>
    <S.FooterColumn>
      <p>PARTNERS</p>
      <S.PartnersWrapper>
        <Behance color="var(--text)" size={30} />
        <Amazon color="var(--text)" size={30} />
        <Ebay color="var(--text)" size={30} />
      </S.PartnersWrapper>
      <Button onClick={() => {}}>Contact Us</Button>
    </S.FooterColumn>
  </S.FooterWrapper>
);

export default Footer;
