---
title: "Learning about SSG №0"
date: "2022-06-16"
---
    
# Static 
    
## Static sites
    
With the advent of the Internet, one of the very first sites were - **static sites**. Static sites made it possible to transfer fixed information *(HTML, CSS, JavaScript files)* from the web server to the user's browser, while absolutely all site users would see the same pages. Therefore, a static site was only suitable for distributing fixed content that either does not change over time or changes very rarely.
     
With further development, the use of **dynamic pages** became popular. Dynamic pages allowed developers to increase the functionality of the site, build a page from many other pages, and display content to the user in real time by loading it from a database. But the downside of using dynamic pages was their long loading, so search engines gave preference to static sites because they load very quickly.
    
    
**Static sites** today have a wide range of applications and are not inferior to dynamic sites in terms of functionality and have a wide range of tools for building a full-fledged serverless architecture.
    
Using static sites provides many benefits:
1) ***Serverless environment*** - there is no server in the usual sense, the entire project is organized via CDN;
2) ***High security***, due to the absence of the server part of the application, protection against user attacks and attacks on the database;
3) ***High download speed*** of the application and its availability for users;
4) ***Stability*** under loads and easy scaling by transferring project files to additional CDN hostings;
5) ***Project modularity*** - the ability to connect the necessary functionality, as needed, using microservices.
    
## Static sites generators (SSG)
    
***Static site generation tools*** are one of the main elements in JAMstack architecture development. Static site generators allow you to create pages in advance and customize their templates to the needs of the user, but their choice is quite diverse and depends both on the language in which the generator is written, and on the presence of the necessary characteristics and functionality of the generator for a specific project being developed.
    
The most popular SSG:
1) [***Gatsby***](https://www.gatsbyjs.com/);
2) [***Hugo***](https://gohugo.io/);
3) [***Jekyll***](https://jekyllrb.com/);
4) [***Next.js***](https://nextjs.org/);
5) [***Nuxt***](https://nuxtjs.org/);
6) [***Hexo***](https://hexo.io/ru/);
    
