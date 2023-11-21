<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 50%; 
          }
          th, td {
            border: 2px solid black;
            padding: 6px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>A list of books</h1>
        <table>
          <xsl:apply-templates select="books/book"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="book">
    <tr>
      <td><xsl:number/></td>
      <td><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="price"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
