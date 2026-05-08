export default defineNuxtPlugin(() => {
  const tagId = 'AW-17831462931'

  useHead({
    script: [
      {
        key: 'google-ads-gtag-js',
        src: `https://www.googletagmanager.com/gtag/js?id=${tagId}`,
        async: true
      },
      {
        key: 'google-ads-gtag-init',
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${tagId}');
        `
      }
    ]
  })
})
