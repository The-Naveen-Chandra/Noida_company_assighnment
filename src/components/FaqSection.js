import React, { useState } from "react";
import "./FaqSection.css";
function FaqSection(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="faqSetionDivf">
      <div className="faqlist">
        <div className="name1">
          <a href="/" onClick={toggleCollapse} className="collapse-toggle">
            {isCollapsed ? "▲" : "▼"} {props.que}
          </a>
        </div>
        <div
          className="content"
          style={{ display: isCollapsed ? "none" : "block" }}
        >
          <p>{props.ans}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
