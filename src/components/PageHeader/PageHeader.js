import React from "react";
import './pageheader.scss';

/**
 * Component for rendering a page header section
 */
function PageHeader(props) {
    return (
        <div className="page_header">
           {props.headerContent}
        </div>
    );
}

export default PageHeader;
  