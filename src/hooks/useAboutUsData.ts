import { useLocation } from "react-router-dom";
import { ABOUT_US_SECTION_CONTENT, APP_ROUTE_NAMES } from "../appConstant";

const useAboutUsData = () => {
  const {
    EXPERTS_LIST,
    EXTENDED_CONTENT,
    PERKS_LIST,
    SHORTEN_CONTENT,
    TESTIMONIALS_LIST,
  } = ABOUT_US_SECTION_CONTENT;
  const location = useLocation();

  const isAboutPage =
    location && location.pathname.includes(APP_ROUTE_NAMES.ABOUT);

  const mainContent = SHORTEN_CONTENT;
  const extendedContent = isAboutPage ? EXTENDED_CONTENT : "";
  const perksList = isAboutPage ? PERKS_LIST : PERKS_LIST.slice(2);

  return {
    EXPERTS_LIST,
    TESTIMONIALS_LIST,
    mainContent,
    extendedContent,
    perksList,
    isAboutPage,
  };
};

export default useAboutUsData;
