# pretty-data

nodejs plugin to **pretty-print** or **minify**
text in **XML**, **JSON** and **CSS** formats.

**Version** - 0.20.1

**Copyright** (c) 2012 Vadim Kiryukhin ( vkiryukhin @ gmail.com )

**Home page:** [http://www.eslinstructor.net/pretty-data/](http://www.eslinstructor.net/pretty-data/) 

**License:** Dual licensed under
the MIT and GPL licenses:

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

##Description

* `pd.xml(data )` - pretty print XML; 

* `pd.json(data)` - pretty print JSON; 

* `pd.css(data )` - pretty print CSS; 

* `pd.xmlmin(data [, preserveComments]) ` - minify XML; 

* `pd.jsonmin(data)` - minify JSON text;

* `pd.cssmin(text [data [, preserveComments] )` - minify CSS text; 

**PARAMETERS:**

`@data` - String; XML, JSON or CSS text to beautify; 

`@preserveComments` - Bool (optional, used in npp.minxml and npp.mincss only); 
                       Set this flag to true to prevent removing comments from @data; 

`@Return` - String;


**USAGE:**

`var xml_pp = require(../pretty-data).pd.xml(data); `

`var xml_min = require(../pretty-data).pd.xmlmin(data [,true]);` 

`var json_pp = require(../pretty-data).pd.json(data);` 

`var json_min = require(../pretty-data).pd.jsonmin(data);` 

`var css_pp = require(../pretty-data).pd.css(data); `

`var css_min = require(../pretty-data).pd.cssmin(data [, true]);`


