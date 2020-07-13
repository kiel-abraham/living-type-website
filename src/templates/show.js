import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"

import Layout from "../components/layout";
import SEO from "../components/seo";

const Show = ({ pageContext, data }) => {
    const { airtableShows } = data;

    const mapsSelector = (e) => {
        e.preventDefault();
        if /* if we're on iOS, open in Apple Maps */
          ((navigator.platform.indexOf("iPhone") !== -1) || 
           (navigator.platform.indexOf("iPad") !== -1) || 
           (navigator.platform.indexOf("iPod") !== -1)) {
                window.open(`maps://maps.google.com/maps?q=${airtableShows.data.Address}`);
           } else /* else use Google */ {
                window.open(`https://maps.google.com/maps?q=${airtableShows.data.Address}`);
           }
      }

    return (
        <Layout>
            <SEO
                title={pageContext.name}
                metaImage={airtableShows.data.Flyer && airtableShows.data.Flyer[0].url}
            />

            <Helmet>
                <script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org",
                        "@type": "MusicEvent",
                        "name": "${pageContext.name}",
                        "startDate": "${airtableShows.data.Date}",
                        "location": {
                            "@type": "Place",
                            "name": "${airtableShows.data.Venue_name}",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "Australia",
                                "streetAddress": "${airtableShows.data.Address}"
                            }
                        },
                        "performers": [
                            {
                                "@type": "MusicGroup",
                                "name": "Living Type"
                            }
                        ]
                    }
                `}</script>
            </Helmet>

            <div className="container">
                <h1>{pageContext.name}</h1>

                <div className="flex flex-col sm:flex-row-reverse">

                    <div className="sm:w-1/2">
                    {airtableShows.data.Flyer &&
                        <img src={`${airtableShows.data.Flyer[0].url}`} alt={`${pageContext.name} flyer`} />
                    }
                    </div>

                    <div className="sm:w-1/2 pt-4 sm:pt-0">
                        <h3>{airtableShows.data.Venue_name}</h3>
                        <p>
                            <a href="#" onClick={mapsSelector} title="Open address in maps" target="_blank" rel="noreferrer">
                                {airtableShows.data.Address}
                            </a>
                        </p>
                        <p>{airtableShows.data.Date}</p>
                        {airtableShows.data.Facebook_event && 
                            <a href={`${airtableShows.data.Facebook_event}`} target="_blank" rel="noreferrer" className="underline">Facebook event</a>
                        }
                        {/*airtableShows.data.Description && 
                            <div>{airtableShows.data.Description}</div>
                        */}
                        <div className="py-4 space-x-2">
                            {airtableShows.data.Band_names && airtableShows.data.Band_names.map((item, index) => (
                                <span key={index} className="chip">{item}</span>
                            ))}
                        </div>
                    </div> 

                </div>
            </div>
        </Layout>
    );
}

export default Show;

export const query = graphql`
    query Show($name: String) {
        airtableShows(data: {Name: {eq: $name }}) {
            data {
                Address
                Band_names
                Date(formatString: "DD MMMM, Y")
                Facebook_event
                Venue_name
                Description
                Flyer {
                    url
                }
            }
        }
    }
`;