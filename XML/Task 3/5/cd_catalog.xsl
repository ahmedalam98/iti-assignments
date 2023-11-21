<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>My CD Collection</title>
        <style>
          th {
            background-color: lightgreen;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h2>My CD Collection</h2>
        <table>
          <tr>
            <th>TITLE</th>
            <th>ARTIST</th>
            <th>PRICE</th>
          </tr>
          <xsl:for-each select="CATALOG/CD">
            <xsl:sort select="PRICE" data-type="number" order="descending"/>
            <tr>
              <td><xsl:value-of select="TITLE"/></td>
              <td><xsl:value-of select="ARTIST"/></td>
              <td><xsl:value-of select="PRICE"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>