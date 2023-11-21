<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>A list of books</h1>
        <table>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          <xsl:apply-templates select="books/book"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="book">
    <tr>
      <td><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="price"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>