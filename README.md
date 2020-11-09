<h1>ColorLine</h1>
<div id="mainwin" class="col-md-8">
<div id="contentwell" class="well">
<h3>About</h3>
<p>
	ColorLine is an interactive widget that extends the jQuery UI library. It provides a set of six custom colors for a user to pick from, and the developer can then use that data to alter CSS elements on the current page. Below are instructions on how to set up and configure the widget to use on your own website.
</p>
<h3>Set Up</h3>
<p>
ColorLine is dependent on the jQuery <a href="http://jquery.com/download/">core</a> library, as well as two jQuery UI libraries, <a href="http://jqueryui.com/download/#!version=1.10.3&components=1100000000000000000000000000000000">Core and Widget</a>. If you prefer to link to hosted javascript libraries, all three can be found on <a href="https://developers.google.com/speed/libraries/devguide?hl=fr-FR">Google Dev</a>. Finally, the code for ColorLine can be found <a href="./jquery.ui.colorline.js">here</a>. All of these files should be included in your page header:
</p>
<pre class="prettyprint">
<code>&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"&gt;&lt;/script&gt;
&lt;script src="<?php echo home_url() ?>/apps/colorline/jquery.ui.colorline.js"&gt;&lt;/script&gt;</code>
</pre>
<p>
This widget consists of six customizable colors, which the developer can set themselves or use the default colors provided. The default colors are as follows:
</p>
<p>
	<ul>
		<li><font style="color: #003366"><strong>Dark Blue</strong> (Hex: #003366)</font></li>
		<li><font style="color: #FCB43E"><strong>Orange</strong> (Hex: #FCB43E)</font></li>
		<li><font style="color: #B51659"><strong>Magenta</strong> (Hex: #B51659)</font></li>
		<li><font style="color: #778899"><strong>Slate Gray</strong> (Hex: #778899)</font></li>
		<li><font style="color: #2E8B57"><strong>Sea Green</strong> (Hex: #2E8B57)</font></li>
		<li><font style="color: #8B0000"><strong>Dark Red</strong> (Hex: #8B0000)</font></li>
	</ul>
</p>
<p>
The default constructor can be used for the colors above, however, all of the options available in the widget can initialized to custom values. To instantiate a widget, first create a <font style="color: #000088">&lt;div&gt;</font> with a unique ID to attach the widget to. Then, use jQuery to call the constructor:
</p>
<pre class="prettyprint">
<code>//Default Constructor
$('#divID').colorline();

//Or pass parameters using an array
$('#divID').colorline({
	'color1':'#000',
	'color2':'#222',
	'color3':'#444',
	'color4':'#666',
	'color5':'#AAA',
	'color6':'#FFF',
	'selected':1
});</code>
</pre>
<p>
The seven configurable options are <font class="mono">color1</font>-<font class="mono">color6</font> (corresponds to the six colors displayed on the widget, from left to right) as well as a <font class="mono">selected</font> option, which indicates the color currently selected. The <font class="mono">selector</font> is the gray square that borders the currently active color. Valid values for <font class="mono">selected</font> are the integers 1-6 (1 being the leftmost color), or a HEX color value that is present in your widget. Passing a HEX value that is not available will throw an error. The default value for <font class="mono">selected</font> is 1. All or a partial set of values can be passed into the constructor (values not passed will take on their defaults).
</p>
<p>
After calling <font class="mono">colorline()</font> on your div, the widget should appear on the page. Next, you'll need to use the widget's return values to configure CSS elements on your page.
<h3>Configuration</h3>
<p>
ColorLine has two public methods, <font class="mono">getSelected()</font> and <font class="mono">setSelected(input)</font>. The getter will return the current HEX value of the selected color. The setter takes a positional integer (1 through 6) or a HEX color value that is present in your widget. It will move the selector over the specified position or color. By getting the currently selected color, the developer can use this value to dynamically edit CSS properties on the page with jQuery. Some examples of CSS color elements are: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>. As an example, we can create a ColorLine instance below and adjust the <font class="mono">background-color</font> of a <font style="color: #000088">&lt;div&gt;</font>.
</p>
<pre class="prettyprint">
<code>
&lt;div class="row"&gt;
	&lt;div class="col-md-offset-1 col-md-3"&gt;
		&lt;div id="sample"&gt;&lt;/div&gt;
		&lt;script&gt;
			jQ('#sample').colorline();
			
			//Click Handler
			jQ("#sample").click(function(){
				var select = jQ('#sample').colorline('getSelected');
				jQ('#change').css('background-color',select);
				
				if(select == "#003366" || select == "#8B0000" || select == "#2E8B57")
				{
					jQ('#change').css('color','white');
				}
				else
				{
					jQ('#change').css('color','black');
				}
			});
		&lt;/script&gt;
	&lt;/div&gt;
	&lt;div class="col-md-2"&gt;
		&lt;div id="change" style="text-align:center"&gt;&lt;strong&gt;DIV&lt;/strong&gt;&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
<p>Below is the code used to create the example above. There are two <font style="color: #000088">&lt;div&gt;</font> elements, <font class="mono">#sample</font> (which contains the ColorLine) and <font class="mono">#change</font> (which is our target <font style="color: #000088">&lt;div&gt;</font>). The text color of the target <font style="color: #000088">&lt;div&gt;</font> is also changed, based on the background color.</p>
<pre class="prettyprint">
<code>//Create the widget
$('#sample').colorline();
			
//Add a click handler
$("#sample").click(function(){
	var select = $('#sample').colorline('getSelected');
	$('#change').css('background-color',select);
	
	if(select == "#003366" || select == "#8B0000" || select == "#2E8B57")
	{
		$('#change').css('color','white');
	}
	else
	{
		$('#change').css('color','black');
	}
});</code>
</pre>
<p>
We can do even more customization with additional javscript code, such as using cookies to save a user's color selection. Javascript cookies are a useful way to save information to be used in future sessions. <a href="http://www.quirksmode.org/js/cookies.html?cookievalue=test1#script">Quirksmode.org</a> has a great set of simple functions to Create, Read, and Erase cookies. In your click function, you can create a cookie that saves the selected color to be loaded when the page loads.
</p>
<pre class="prettyprint">
<code>//Get selected
var select = $('#sample').colorline('getSelected');

//Set cookie
if(readCookie("color_cookie") == null)
{
	createCookie("color_cookie",select,365);
}
else
{
	eraseCookie("color_cookie");
	createCookie("color_cookie",select,365);
}</code>
</pre>
<h3>Error List</h3>
<p>
	<ul style="font-size:14px">
		<li><strong>Error 101: 'selected' option not properly set in constructor</strong> - This is caused by passing an invalid value for the <font class="mono">selected</font> parameter in the constructor. Valid values are integers 1-6 or a HEX color code available in your widget instance.</li>
		<li><strong>Error 102: Invalid 'selected' option</strong> - Similar to Error 101, the <font class="mono">selected</font> option is currently invalid. Check your constructor and calls to <font class="mono">setSelector()</font> for invalid values.
		<li><strong>Error 103: Could not set selector icon</strong> - An invalid value was passed to the <font class="mono">setSelector()</font> method. Valid values are integers 1-6 or a HEX color code available in your widget instance.</li>
		<li><strong>Error 104: Invalid color</strong> - The color code passed as the <font class="mono">selected</font> parameter in either the constructor or the <font class="mono">setSelector()</font> method does not exist in your current widget instance.</li>
		<li><strong>The selector icon is not aligned with the color squares</strong> - This is usually caused by inherited CSS values. If your container <font style="color: #000088">&lt;div&gt;</font> inherited a <font class="mono">padding</font> or <font class="mono">margin</font> value, try setting it to '0'. Also, if your <font style="color: #000088">&lt;div&gt;</font> inherits a <font class="mono">line-height</font> of '20px' or greater, there will be a gap present in the gray <font class="mono">selector</font> icon.</li>
		<li><strong>A blinking cursor appears when I click a square</strong> - This is a result of 'Caret Browsing', which is enabled on Mozilla Firefox and some older versions of Internet Explorer. It is a browser related functionality and must be disabled on the client side.</li>
		<li><strong>There is a broken image hovering over the ColorLine</strong> - Please include <a href="http://mozzor.com/img/select_frame.png">this image</a> with relative filepath '~/img/select_frame.png'.</li>
	</ul>
</p>
<hr>
