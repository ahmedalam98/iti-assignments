<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <xsl:apply-templates select="xslTutorial/SECTION"/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="SECTION">
    <div>
      <xsl:choose>
        <xsl:when test="SUMMARY">
          <p>SUMMARY: <xsl:value-of select="SUMMARY"/></p>
        </xsl:when>
    
        <xsl:otherwise>
          <xsl:apply-templates select="DATA"/>
        </xsl:otherwise>
      </xsl:choose>
    </div>
  </xsl:template>

  <xsl:template match="DATA">
    <p>DATA: <xsl:value-of select="."/></p>
  </xsl:template>

</xsl:stylesheet>