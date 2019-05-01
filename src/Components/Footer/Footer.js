import React from 'react';
import { Divider } from 'semantic-ui-react';
import './Footer.css';
import PostWrapper from '../PostWrapper/PostWrapper';

const Footer = () => (
  <div className="Footer">
    <PostWrapper>
      <div className="FooterHeading">
        <p className="BizDesc">
        이용약관, 개인 정보 보호<br/>
        <br/>
        사업자등록번호: xxx-xx-xxxxx<br/>
        대표이사: 이제빈, 신명진<br/>
        주소: 서울특별시 서초구 강남대로 373 홍우빌딩 15층<br/>
        </p>
        <p className="CompanyName">
          ©Biscuit Labs
        </p>
      </div>
    </PostWrapper>
  </div>
)

export default Footer;