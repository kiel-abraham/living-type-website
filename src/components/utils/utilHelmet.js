import React from 'react';
import Helmet from 'react-helmet';

const UtilHelmet = ({data}) => {
    const frontmatter = data.markdownRemark.frontmatter;
    return (
        <Helmet>
            <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
            <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
            <meta property="og:url" content={data.site.siteMetadata.siteUrl + frontmatter.slug} />
            {frontmatter.metaDesc &&
            <meta name="description" content={frontmatter.metaDesc}/>
            }
            {frontmatter.metaDesc &&
            <meta property="og:description" content={frontmatter.metaDesc}/>
            }
            {frontmatter.metaImage &&
            <meta property="og:image" content={data.site.siteMetadata.siteUrl + frontmatter.metaImage} />
            }
        </Helmet>
    );
}

export default UtilHelmet;