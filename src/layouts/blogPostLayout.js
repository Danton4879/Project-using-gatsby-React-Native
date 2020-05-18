import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {graphql} from 'gatsby'
import SEO from '../Components/SEO'
import innertext from 'innertext'
const BlogPostLayout = ({data}) => {
    const post = data.wordpressPost;
    return (
    <div>
            <SEO 
                title={innertext (post.title)}
                description={innertext (post.excerpt)}
                keywords={post.categories.map(res => res.name).join(', ')}
            />
            <Header/>
            <div className="container">
                <div className="row p-5 justify-content-md-center mt-5">
                    <h2 dangerouslySetInnerHTML = {{__html: post.title}}/>
                    <div dangerouslySetInnerHTML = {{__html: post.content}} />
                </div>
                <Footer/>
            </div>
        </div>
);
}

export default BlogPostLayout
export const query = graphql `
query($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
    content
    title
    categories
    excerpt
    }
}
`
  