/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const path = require("path");

module.exports = {
  title: "Mission Control",
  tagline: "A BattleTech Mod",
  url: "https://www.missioncontrolmod.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "CWolf", // Usually your GitHub org/user name.
  projectName: "missioncontrol", // Usually your repo name.
  plugins: [path.resolve(__dirname, "plugins/file-loader-webpack-plugin")],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: "",
      logo: {
        alt: "Mission Control Logo",
        src: "images/mc-logo.png"
      },
      links: [
        { to: "docs/overview/about", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href:
            "https://github.com/CWolfs/MissionControl/releases/download/v0.3.2/MissionControl-v0.3.2.zip",
          label: "Download (0.3.2)",
          position: "left"
        },
        {
          to: "blog/tags/changelog",
          label: "Changelog",
          position: "left"
        },
        {
          href: "https://discord.gg/22raTJh",
          label: "Discord",
          position: "left"
        },
        { to: "docs/support", label: "Support", position: "left" },
        {
          href: "https://www.nexusmods.com/battletech/mods/319",
          label: "Nexus",
          position: "right"
        },
        {
          href: "https://github.com/CWolfs/MissionControl",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Site",
          items: [
            {
              label: "Docs",
              to: "docs/overview/about"
            },
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "Support",
              to: "support"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "MC Discord",
              href: "https://discord.gg/22raTJh"
            },
            {
              label: "BattleTech Game",
              href: "http://harebrained-schemes.com/battletech/"
            },
            {
              label: "BattleTech Steam",
              href: "http://store.steampowered.com/app/637090/BattleTech/"
            }
          ]
        },
        {
          title: "Links",
          items: [
            {
              label: "Github",
              to: "https://github.com/CWolfs/MissionControl"
            },
            {
              label: "Nexus",
              to: "https://www.nexusmods.com/battletech/mods/319"
            }
          ]
        }
      ],
      logo: {
        alt: "CWolf Logo",
        src: "images/cwolf-logo.png",
        href: "https://github.com/CWolfs"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Richard 'CWolf' Griffiths`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
