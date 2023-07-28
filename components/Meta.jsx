import Head from "next/head";

export default function Meta({ title, description, keywords, url, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href="/logo.png" />
      <link rel="icon" sizes="192x192" href="/logo.png"></link>
      <link rel="apple-touch-icon" href="/logo.png" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:updated_time" content="2022-01-01T15:35:35+00:00" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />

      <meta name="geo.region" content="Egypt-Cairo" />
      <meta name="geo.placename" content="Cairo" />
      <meta name="geo.position" content="30.044257, 31.235731" />
      <meta name="ICBM" content="30.044257, 31.235731" />
      <meta property="fb:app_id" content="545580463107292" />

      <meta property="article:tag" content={title} />
      <meta property="article:section" content="Website" />
      <meta
        property="article:published_time"
        content="2022-01-01T16:31:08+00:00"
      />
      <meta
        property="article:modified_time"
        content="2022-01-01T15:35:35+00:00"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />

      <meta name="p:domain_verify" content="06bdd24d4cf0c2f6be2c290323047818" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  url: "https://www.smileart-eg.com/",
  image: "https://api.smileart-eg.com//v1/media/website-image.jpg",
};
