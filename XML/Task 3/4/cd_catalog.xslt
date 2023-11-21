<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>My CD Collection</h2>
        <table border="1">
          <tr>
            <th style="background-color: lightgreen;">CD TITLE</th>
            <th style="background-color: lightgreen;">ARTIST</th>
          </tr>
          <xsl:for-each select="CATALOG/CD[PRICE > 10]">
            <tr>
              <td><xsl:value-of select="TITLE"/></td>
              <td><xsl:value-of select="ARTIST"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>