import { createGlobalStyle } from "styled-components";

import NameOfYourFontEot from "../fonts/ProximaNovaRegular.eot";
import NameOfYourFontTtf from "../fonts/ProximaNovaRegular.ttf";
import NameOfYourFontWoff from "../fonts/ProximaNovaRegular.woff";
import NameOfYourFontOtf from "../fonts/Proxima_Nova_Regular.otf";

export default createGlobalStyle`
    @font-face {
	font-family: 'ProximaNovaRegular';
        src: local('ProximaNovaRegular'), local('ProximaNovaRegular'),
        url(${NameOfYourFontOtf}) format('otf'),
        url(${NameOfYourFontEot}) format('eot'),
        url(${NameOfYourFontWoff}) format('woff'),
        url(${NameOfYourFontTtf}) format('truetype');
        
}
`;
