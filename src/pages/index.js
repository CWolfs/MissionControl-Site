/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Force dark theme on
window.localStorage.setItem("theme", "dark");

const features = [
  {
    title: <>Replayability</>,
    imageUrl: "img/replay_scaled.png",
    description: (
      <>
        From new contract types, creative reuse of maps, random spawns and
        dropping additional lances - every fight feels different!
      </>
    )
  },
  {
    title: <>Unique Custom Content</>,
    imageUrl: "img/content-icon.png",
    description: (
      <>
        The only mod that achieves encounter content, such as custom contract
        types, including new single player contracts, and reuse of single player
        maps for generic contracts.
      </>
    )
  },
  {
    title: <>Heavily Configurable</>,
    imageUrl: "img/configure_scaled.png",
    description: (
      <>
        Every feature is configurable which allows for a modpack team or player
        to tweak things to how they like it. Already used in Modpacks such as
        RogueTech and BTA 3062.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/overview/about")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
