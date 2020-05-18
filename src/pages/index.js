import React from "react"
import PrimaryLayout from '../layouts/PrimaryLayout'
import CardAcordeon from '../Components/Card'
import { graphql } from 'gatsby'

    export default ({data}) => {
        return (
        <PrimaryLayout colum="col-xs-6">
          
            {data.allWordpressPost.nodes.map((node) => (
                <CardAcordeon
                image={node.featured_media.source_url}
                title={node.title}
                excerpt={node.excerpt}
                readMore={node.slug}
            />
        ))}
        </PrimaryLayout>
        )
    }

export const query = graphql `
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
      }
    }
  }
}
`