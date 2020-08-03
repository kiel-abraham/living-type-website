/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import PageWrapper from "./src/components/pageWrapper";

export const wrapPageElement = ({ element, props }) => (
    <PageWrapper {...props}>
        {element}
    </PageWrapper>
);