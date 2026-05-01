<template>
  <ScamArticlePage :article="article" />
</template>

<script setup>
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, getScamArticle } from '~/data/scamArticles'

const article = getScamArticle('olx')

useSeoMeta({
  title: article.seoTitle,
  description: article.seoDescription,
  ogTitle: article.seoTitle,
  ogDescription: article.seoDescription,
  ogType: 'article',
  robots: 'index, follow'
})

useHead({
  link: [{ rel: 'canonical', href: `https://nupunebotul.ro/tepe/${article.slug}` }],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(buildArticleJsonLd(article)) },
    { type: 'application/ld+json', children: JSON.stringify(buildBreadcrumbJsonLd(article)) },
    { type: 'application/ld+json', children: JSON.stringify(buildFaqJsonLd(article)) }
  ]
})
</script>
