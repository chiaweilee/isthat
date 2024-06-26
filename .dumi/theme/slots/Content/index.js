import { useSidebarData } from "dumi";
import React from "react";
import "./heti.scss";
import "./index.less";
var Content = function Content(props) {
  var sidebar = useSidebarData();
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-vite-content",
    "data-no-sidebar": !sidebar || undefined
  }, props.children);
};
export default Content;