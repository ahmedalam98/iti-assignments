<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <p>Review of 3.5 = <xsl:value-of select="count(books/book[review = '3.5'])"/></p>
        <p>Review of 4 = <xsl:value-of select="count(books/book[review = '4'])"/></p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>