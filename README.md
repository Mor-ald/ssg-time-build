# Time build of the Static Site Generators 30.06.2022

For analyze time build from the official JAMstack website was selected six of the most popular tools:

1) [***Gatsby***](https://www.gatsbyjs.com/);
2) [***Hugo***](https://gohugo.io/);
3) [***Jekyll***](https://jekyllrb.com/);
4) [***Next.js***](https://nextjs.org/);
5) [***Nuxt***](https://nuxtjs.org/);
6) [***Hexo***](https://hexo.io/ru/);

All tests for the selected static site generators included the following conditions:

1) Markdown files were used as a data source for building static pages, containing several text blocks, headings, links and metadata, without the use of images ([***example file***](./textfile0.md)).
2) Before each test, the cache and generated pages after the previous text were cleared so that the generators were in the same conditions.
3) Each project was built individually, based on the provided documentation for each static site generator.
4) The result of the test is generated static HTML pages from the content in the Markdown files, which can be accessed when the local server is started.

[Results](https://mor-ald.github.io/ssg-time-build/)

## Install projects

### [**Gatsby**](https://www.gatsbyjs.com/docs)

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

### [**Hugo**](https://gohugo.io/getting-started/quick-start/)

1) Download the latest zipped Hugo executable from [***Hugo Releases***](https://github.com/gohugoio/hugo/releases).
2) Extract all contents to your ```..\Hugo\bin folder```.
3) In PowerShell or your preferred CLI, add the hugo.exe executable to your PATH by navigating to ```C:\Hugo\bin``` (or the location of your ```hugo.exe``` file) and use the command set ```PATH=%PATH%;C:\Hugo\bin```. If the hugo command does not work after a reboot, you may have to run the command prompt as administrator.

```
hugo new site quickstart

cd quickstart
```
4) Create a folder for static posts ```/public/posts```.
5) Create a folder for markdown files ```/content```.

```
hugo -D
#or
hugo server -D
```

### [**Jekyll**](https://jekyllrb.com/docs/)

1) Install [Ruby](https://www.ruby-lang.org/en/downloads/).
2) Install [RubyGems](https://rubygems.org/pages/download).

```
gem install jekyll bundler

jekyll new myblog

cd myblog

jekyll build
```

### [**Next.js**](https://nextjs.org/docs)

```
npx create-next-app --example blog-starter blog-starter-app
# or
yarn create next-app --example blog-starter blog-starter-app
# or
pnpm create next-app --example blog-starter blog-starter-app

cd blog-starter-app
```
1) Create a folder for markdown files ```/_posts```.
2) Code index.js file for our example file markdown:
```
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
```
3) Intsall library gnomon: ```npm install -g gnomon```.
4) Run app:
```
npm run build | gnomon
```

### [**Nuxt.js**](https://nuxtjs.org/docs/get-started/installation)

```
npx create-nuxt-app <project-name>
#or
yarn create nuxt-app <project-name>

cd <project-name>
```

1) Create a file ```/pages/blog/_slug.vue``` with this code:
```
<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>
```
2) Create a folder ```/content/articles``` for markdown files.
3) Intsall library gnomon: ```npm install -g gnomon```.
4) Run app:
```
npm run build | gnomon
```

### [**Hexo**](https://hexo.io/ru/docs/)


```
npm install -g hexo-cli

npm install -g gnomon

hexo init <project-name>

cd <project-name>

npm install

hexo generate | gnomon
```
