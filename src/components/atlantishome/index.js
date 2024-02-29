import React from "react";
import Headerhovermain from "../../common/header-main";
import HeroAtlantis from "./herobanner";
import AtlantisSec1 from "./atlantisSec1";
import AtlantisSec2 from "./atlantisSec2";
import AtlantisSec3 from "./atlantisSec3";
import AtlantisSec4 from "./atlantisSec4";
import AtlantisSec5 from "./atlantisSec5";
import AtlantisSec6 from "./atlantisSec6";
import AtlantisSec7 from "./atlantisSec7";
import AtlantisSec8 from "./atlantisSec8";
import FoodieSec9 from "./atlantisSec9";
import AwakenWelness from "./atlantisSec10";
import AtlantisProject from "./atlantisSec11";
import PromotionView from "./atlantisSec12";
import Footer from "../../common/footer";

export default function MainAtlantis() {
  return (
    <div>
      <Headerhovermain />
      <HeroAtlantis />
      <AtlantisSec1 />
      <AtlantisSec2 />
      <AtlantisSec3 />
      <AtlantisSec4 />
      <AtlantisSec5 />
      <AtlantisSec6 />
      <AtlantisSec7 />
      <AtlantisSec8 />
      <FoodieSec9 />
      <AwakenWelness />
      <AtlantisProject />
      <PromotionView />
      <Footer />
    </div>
  );
}
