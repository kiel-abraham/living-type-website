/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/css/style.css";

import React from "react";
import PageWrapper from "./src/components/pageWrapper";

export const wrapPageElement = ({ element, props }) => (
    <PageWrapper {...props}>
        {element}
    </PageWrapper>
);