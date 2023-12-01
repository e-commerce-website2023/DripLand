import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const LogoContainer = styled('div')({
  position: 'absolute',
  left: '2%',
  top: '27.72%',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '42px',
  color: '#6C5DD3',
});

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        DRIP LAND
      </LogoContainer>
    </Link>
  );
};

export default Logo;