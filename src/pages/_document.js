import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sirivennela&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/Logos/LaGueraLogo(Black).jpg" />
        <link rel="shortcut icon" href="/Logos/LaGueraLogo(Black).jpg" />
        <link rel="apple-touch-icon" href="/Logos/LaGueraLogo(Black).jpg" />
        <meta name="msapplication-TileImage" content="/Logos/LaGueraLogo(Black).jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
