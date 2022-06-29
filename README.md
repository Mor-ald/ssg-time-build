# Build time of the Static Site Generators

For analyze build time from the official JAMstack website was selected six of the most popular tools:

1) [***Gatsby***](https://www.gatsbyjs.com/);
2) [***Hugo***](https://gohugo.io/);
3) [***Jekyll***](https://jekyllrb.com/);
4) [***Next.js***](https://nextjs.org/);
5) [***Nuxt***](https://nuxtjs.org/);
6) [***Hexo***](https://hexo.io/ru/);

Tests for build time project were carried out sequentially on the same software and hardware:

1) OS Windows 10.
2) CPU Ryzen 7 5800x 8 cores 3800 GGz.
3) RAM Crucial DDR4 3200 MGz.
4) Samsung SSD 3000 Mb/sec.

All tests for the selected static site generators included the following conditions:

1) Markdown files were used as a data source for building static pages, containing several text blocks, headings, links and metadata, without the use of images ([***example file***](./textfile0.md)).
2) Before each test, the cache and generated pages after the previous text were cleared so that the generators were in the same conditions.
3) Each project was built individually, based on the provided documentation for each static site generator.
4) The result of the test is generated static HTML pages from the content in the Markdown files, which can be accessed when the local server is started.

## Install projects

### [***Gatsby***](https://www.gatsbyjs.com/docs)

```
npm init gatsby

cd my-gatsby-site

npm install gatsby-source-filesystem gatsby-transformer-remark

```

1) Create a folder ```/src/posts``` for files markdown.
2) Edit the file ```gatsby-config.js``` by adding in ```plugins```:
```
"gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
```
3) Create ```src/components/layout.js``` with code:
```
import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}
```
4) Create a file ```{MarkdownRemark.frontmatter__slug}.js``` in ```/src/pages``` with code:
```
import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";



export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
```

Run App: ```npm run develop```.
Your site is now running at ```http://localhost:8000```.
