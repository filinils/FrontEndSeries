import React from "react";
const InfoColumn = ({ content, propertyName, extraClass }) => {
    return (
        <section
            data-epi-property-name={propertyName}
            data-epi-use-mvc="true"
            className={"c-info-column " + extraClass}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default InfoColumn;
