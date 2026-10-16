<?xml version="1.0" encoding="UTF-8"?>
<!--
  Stylesheet for the generated XML sitemaps (see lib/sitemap-sources.js).

  Replaces Yoast's main-sitemap.xsl, which used to be proxied off the CMS. It
  lives in /public so it is served from the SAME origin as the .xml files:
  browsers block cross-origin XSLT, so a stylesheet on another host leaves the
  styled view blank. Everything is inline — no images, fonts or scripts to
  fetch — and XSLT 1.0 only, which is all browsers implement.

  Crawlers ignore this entirely; it exists so a human opening a sitemap gets a
  readable table instead of raw markup.

  DESIGN NOTE: the brand orange is an accent here, not a surface — a rule above
  the card, the links, and the count. An earlier version filled the whole header
  row with it, which was heavy and, worse, unreadable: `.num`/`.date` set a grey
  colour that outranked `th { color:#fff }` on specificity, so "#" and "Last
  modified" came out grey-on-orange. Those colours are now scoped to `td`.
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Icecube Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <style>
          :root {
            color-scheme: light dark;
            --accent: #E8762C;
            --bg: #fbfbfc;
            --card: #ffffff;
            --text: #151515; /* site black (tailwind black.light) */
            --muted: #6b7380;
            --faint: #9aa1ab;
            --line: #ebedf1;
            --zebra: #fcfcfd;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 32px 20px 48px;
            font: 15px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: var(--text);
            background: var(--bg);
            -webkit-font-smoothing: antialiased;
          }
          .wrap { max-width: 1060px; margin: 0 auto; }

          header { margin: 0 0 18px; }
          h1 {
            margin: 0 0 6px;
            font-size: 24px;
            font-weight: 650;
            letter-spacing: -0.02em;
          }
          h1 .thin { color: var(--muted); font-weight: 400; }
          .meta { margin: 0; color: var(--muted); font-size: 14px; }
          .count { color: var(--accent); font-weight: 600; }
          .meta code {
            background: #f2f3f6;
            border: 1px solid var(--line);
            padding: 1px 6px;
            border-radius: 4px;
            font-size: 12.5px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            color: var(--muted);
          }

          .card {
            background: var(--card);
            border: 1px solid var(--line);
            border-top: 2px solid var(--accent);
            border-radius: 10px;
            overflow: hidden;
          }
          table { width: 100%; border-collapse: collapse; }

          /* Header row: a quiet label strip, not a colour block. */
          thead th {
            text-align: left;
            padding: 8px 16px;
            background: #f7f8fa;
            border-bottom: 1px solid var(--line);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: var(--muted);
            white-space: nowrap;
          }
          /* Compact rows: these tables run to several hundred entries, so the
             row height is what decides how much you can scan without scrolling. */
          tbody td {
            padding: 10px 16px;
            border-bottom: 1px solid var(--line);
            font-size: 14px;
            line-height: 1.4;
            vertical-align: top;
            word-break: break-word;
          }
          tbody tr:last-child td { border-bottom: 0; }
          tbody tr:nth-child(even) td { background: var(--zebra); }
          tbody tr:hover td { background: #f1f2f5; }

          /* Scoped to td so they can never override the header's own colour. */
          /* The URL keeps the full 14.5px; the two supporting columns go a size
             down, which buys width for the URL without shrinking what you read. */
          td.num { width: 46px; font-size: 13px; color: var(--faint); font-variant-numeric: tabular-nums; white-space: nowrap; }
          td.date { width: 160px; font-size: 13px; color: var(--muted); font-variant-numeric: tabular-nums; white-space: nowrap; }
          td.date .never { color: var(--faint); }

          /* Links read as plain body text — the site's black — and show they are
             links on hover with an underline rather than a colour change. Using
             `inherit` means dark mode needs no separate rule. */
          a { color: inherit; text-decoration: none; font-size: 14px; }
          a:hover { text-decoration: underline; text-underline-offset: 2px; }

          @media (max-width: 620px) {
            body { padding: 20px 12px 36px; }
            thead th { padding: 7px 10px; }
            tbody td { padding: 9px 10px; }
            td.num { width: 30px; font-size: 12px; }
            td.date { width: 88px; font-size: 12px; white-space: normal; }
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --accent: #F08A3F;
              --bg: #121417;
              --card: #191c20;
              --text: #e7e9ec;
              --muted: #969ca6;
              --faint: #6e757f;
              --line: #262a30;
              --zebra: #1c1f24;
            }
            .meta code { background: #22262b; }
            thead th { background: #1d2126; }
            tbody tr:hover td { background: #20242a; }
            /* No link colour here on purpose — `a { color: inherit }` already
               follows --text, which this block has redefined for dark mode. */
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <xsl:apply-templates/>
        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Sitemap index: the list of sub-sitemaps. -->
  <xsl:template match="sm:sitemapindex">
    <header>
      <h1>XML Sitemap <span class="thin">Index</span></h1>
      <p class="meta">
        <span class="count"><xsl:value-of select="count(sm:sitemap)"/> sitemaps</span>
        · generated by the Icecube Digital frontend · <code>lib/sitemap-sources.js</code>
      </p>
    </header>
    <div class="card">
      <table>
        <thead>
          <tr><th>#</th><th>Sitemap</th><th>Last modified</th></tr>
        </thead>
        <tbody>
          <xsl:for-each select="sm:sitemap">
            <tr>
              <td class="num"><xsl:value-of select="position()"/></td>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td class="date"><xsl:call-template name="date"><xsl:with-param name="v" select="sm:lastmod"/></xsl:call-template></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  <!-- A single sitemap: the URLs it contains. -->
  <xsl:template match="sm:urlset">
    <header>
      <h1>XML <span class="thin">Sitemap</span></h1>
      <p class="meta">
        <span class="count"><xsl:value-of select="count(sm:url)"/> URLs</span>
        · newest first · generated by the Icecube Digital frontend · <code>lib/sitemap-sources.js</code>
      </p>
    </header>
    <div class="card">
      <table>
        <thead>
          <tr><th>#</th><th>URL</th><th>Last modified</th></tr>
        </thead>
        <tbody>
          <xsl:for-each select="sm:url">
            <tr>
              <td class="num"><xsl:value-of select="position()"/></td>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td class="date"><xsl:call-template name="date"><xsl:with-param name="v" select="sm:lastmod"/></xsl:call-template></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </div>
  </xsl:template>

  <!-- "2026-10-15T10:13:11+00:00" → "2026-10-15 10:13" (XSLT 1.0 has no date type). -->
  <xsl:template name="date">
    <xsl:param name="v"/>
    <xsl:choose>
      <xsl:when test="string-length($v) &gt; 15">
        <xsl:value-of select="concat(substring($v, 1, 10), ' ', substring($v, 12, 5))"/>
      </xsl:when>
      <xsl:when test="string-length($v) &gt; 0">
        <xsl:value-of select="$v"/>
      </xsl:when>
      <xsl:otherwise><span class="never">—</span></xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
