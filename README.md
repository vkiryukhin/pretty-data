# sweet-data - Nodejs plugin
** Fork of pretty-data **

nodejs plugin to **pretty-print** or **minify**
text in **XML**, **JSON**, **CSS**  and  **SQL** formats.

**Version** - 0.0.1

**License:** Dual licensed under
the MIT and GPL licenses:

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

##Description

* `sd.xml(data)` - pretty print XML; 

* `sd.json(data)` - pretty print JSON; 

* `sd.css(data)` - pretty print CSS; 

* `sd.sql(data)` - pretty print SQL; 

* `sd.xmlmin(data [, preserveComments]) ` - minify XML; 

* `sd.jsonmin(data)` - minify JSON text;

* `sd.cssmin(data [, preserveComments] )` - minify CSS text; 

* `sd.sqlmin(data)` - minify SQL text;

**PARAMETERS:**

`@data` - String; XML, JSON, CSS or SQL text to beautify; 

`@preserveComments` - Bool (optional, used in npp.minxml and npp.mincss only); 
                       Set this flag to true to prevent removing comments from @data; 

`@Return` - String;


**USAGE:**

`var sd = require('sweet-data'); `

`var xml_pp = sd.xml(data); `

`var xml_min = sd.xmlmin(data [,true]);` 

`var json_pp = sd.json(data);` 

`var json_min = sd.jsonmin(data);` 

`var css_pp = sd.css(data); `

`var css_min = sd.cssmin(data [, true]);`

`var sql_pp = sd.sql(data);` 

`var sql_min = sd.sqlmin(data);` 




