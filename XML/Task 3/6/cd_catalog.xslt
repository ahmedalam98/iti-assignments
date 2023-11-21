<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>My CD Collection</title>
      </head>
      <body>
        <h2>My CD Collection</h2>
        <table border="1">
          <tr bgcolor="lightgreen">
            <th>Title</th>
            <th>Artist</th>
          </tr>
          <xsl:apply-templates select="CATALOG/CD"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="CD">
    <xsl:variable name="price" select="PRICE"/>
    <xsl:variable name="color">
      <xsl:choose>
        <xsl:when test="$price &gt; 10">red</xsl:when>
        <xsl:otherwise>lightgreen</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <tr>
      <td>
        <xsl:value-of select="TITLE"/>
      </td>
      <td bgcolor="{$color}">
        <xsl:value-of select="ARTIST"/>
      </td>
    </tr>
  </xsl:template>

</xsl:stylesheet>