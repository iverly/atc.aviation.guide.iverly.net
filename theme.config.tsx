import { useRouter } from "next/router";
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: <strong>ATC Guide</strong>,
  docsRepositoryBase:
    "https://github.com/iverly/atc.aviation.guide.iverly.net/tree/main/",
  project: {
    link: "https://github.com/iverly/atc.aviation.guide.iverly.net",
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const domain = "atc.aviation.guide.iverly.net";
    const url = `https://${domain}${asPath}`;

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            frontMatter.title || "An ATC guide website mainly focus on IVAO."
          }
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "An ATC guide website mainly focus on IVAO."
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta
          name="twitter:title"
          content={
            frontMatter.title || "An ATC guide website mainly focus on IVAO."
          }
        />
        <meta
          name="twitter:description"
          content={
            frontMatter.description ||
            "An ATC guide website mainly focus on IVAO."
          }
        />
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ATC Guide",
    };
  },
  banner: {
    key: "do-not-use-for-real-aviation",
    text: (
      <p>
        ⚠️ Ce guide est exclusivement réservé à la simulation aérienne. Il ne
        doit <strong>en aucun cas</strong> être utilisé dans l'aviation réelle.
      </p>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: (
      <div className="flex flex-col">
        <span>Apache-2.0 {new Date().getFullYear()} © iverly</span>
      </div>
    ),
  },
};

export default config;
