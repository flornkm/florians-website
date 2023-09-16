// https://vite-plugin-ssr.com/onRenderHtml
export default onRenderHtml

import renderToString from "preact-render-to-string"
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server"
import logoUrl from "./logo.svg"
import type { PageContext } from "./types"
import PageLayout from "../layouts/PageLayout"

async function onRenderHtml(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(
    <PageLayout pageContext={pageContext}>
      <Page {...pageProps} />
    </PageLayout>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext
  const title =
    (documentProps && documentProps.title) || "Florian - Design Engineer"
  const desc =
    (documentProps && documentProps.description) || "Florians Personal Website."

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
