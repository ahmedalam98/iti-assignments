<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <h2>Review of 3.5 = <xsl:value-of select="count(books/book[review = '3.5'])"/></h2>
        <h2>Review of 4 = <xsl:value-of select="count(books/book[review = '4'])"/></h2>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>