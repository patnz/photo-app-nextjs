import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-yellow-400 dark:bg-yellow-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
