<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns="http://www.w3.org/1999/xhtml">
	 
	<xsl:output method="xml" indent="yes" encoding="UTF-8"/>
	 
	<xsl:template match="/robotit">
	<html>
		<head><title>Robotit</title></head>
		<body>
		    <h1>Robotit</h1>
		    <table border="1">
		    	<tr>
		    		<th>Nimi</th>
		    		<th>Syntymä</th>
		    	</tr>	
			    <xsl:apply-templates select="robotti">
				<xsl:sort select="nimi" />
				</xsl:apply-templates>
		    </table>
		</body>
	</html>
	</xsl:template>
	 
	<xsl:template match="robotti">
		<tr>
			<td><xsl:value-of select="nimi"/></td>
			<td><xsl:value-of select="syntymä"/></td>
		</tr>
	</xsl:template>
 
</xsl:stylesheet>
