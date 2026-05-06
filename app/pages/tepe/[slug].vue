<template>
  <ScamArticlePage :article="article" />
</template>

<script setup>
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, getScamArticle } from '~/data/scamArticles'

const route = useRoute()
const article = getScamArticle(route.params.slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Articolul nu a fost gasit' })
}

useSeoMeta({
  title: article.seoTitle,
  description: article.seoDescription,
  ogTitle: article.seoTitle,
  ogDescription: article.seoDescription,
  ogType: 'article',
  twitterCard: 'summary',
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
