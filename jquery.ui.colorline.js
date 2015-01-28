// ColorLine by Mozzor.com
// Author: Joseph Lewkovich
// Built on jQuery-UI: jqueryui.com
// Version 1.0
// *Not to be repackaged for sale*

(function($) {  

$.widget("ui.colorline", {
	options: {
		color1: "#003366", //dark blue
		color2: "#FCB43E", //orange
		color3: "#B51659", //magenta
		color4: "#778899", //slate gray
		color5: "#2E8B57", //sea green
		color6: "#8B0000", //dark red
		selected: 1 //Can be an integer 1-6 or valid HEX color value
	},
	
	_create: function() {  
        var o = this.options;

		//Ensure o.selected is a valid integer
		if(typeof o.selected !== 'number')
		{
			o.selected = this._matchOption(o.selected);
		}
		
		if(o.selected==1)
		{
			var pad_insert = "3px";
		}
		else if(o.selected==2)
		{
			var pad_insert = "21px";
		}
		else if(o.selected==3)
		{
			var pad_insert = "39px";
		}
		else if(o.selected==4)
		{
			var pad_insert = "57px";
		}
		else if(o.selected==5)
		{
			var pad_insert = "75px";
		}
		else if(o.selected==6)
		{
			var pad_insert = "93px";
		}
		else
		{
			throw("Error 101: 'selected' option not properly set in constructor");
		}
		
        var el = this.element,
		select = $("<img></img>").attr('src',window.location.origin + "/img/select_frame.png").css({
			'z-index': "1",
			'padding-left': pad_insert,
			'vertical-align': "top",
			'-webkit-transition': "padding-left .5s",  
			'transition': "padding-left .5s" 
        }).appendTo(el),
		add1 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color1,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "6px"
        }),
		add2 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color2,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "24px"
        }),
		add3 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color3,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "42px"
        }),
		add4 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color4,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "60px"
        }),
		add5 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color5,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "78px"
        }),
		add6 = $('<div></div>').css({
			'position': "absolute",
            'backgroundColor': o.color6,
            'width': "14px",
			'height': "14px",
			'top': "3px",
			'left': "96px"
        });
		
		//Click handlers for boxes
		add1.click(function() {
			select.css('padding-left',"3px");
			o.selected=1;
		});
		add2.click(function() {
			select.css('padding-left',"21px");
			o.selected=2;
		});
		add3.click(function() {
			select.css('padding-left',"39px");
			o.selected=3;
		});
		add4.click(function() {
			select.css('padding-left',"57px");
			o.selected=4;
		});
		add5.click(function() {
			select.css('padding-left',"75px");
			o.selected=5;
		});
		add6.click(function() {
			select.css('padding-left',"93px");
			o.selected=6;
		});
		
		//Append color squares
		el.append(add1);
		el.append(add2);
		el.append(add3);
		el.append(add4);
		el.append(add5);
		el.append(add6);
		
		el.css({
			'position': "relative",
			'display': "block",
			'vertical-align': "middle",
			'cursor': "pointer",
			'width': '120px'
		});				
	},
	
	getSelected: function() {
		var o = this.options;
		var s = o.selected;
		if(s==1)
		{
			return o.color1;
		}
		else if(s==2)
		{
			return o.color2;
		}
		else if(s==3)
		{
			return o.color3;
		}
		else if(s==4)
		{
			return o.color4;
		}
		else if(s==5)
		{
			return o.color5;
		}
		else if(s==6)
		{
			return o.color6;
		}
		else
		{
			throw("Error 102: Invalid 'selected' option");
		}
	},
	
	//Can take integer 1-6 or valid HEX color value
	setSelected: function(input) {
		var o = this.options;
		if(typeof input !== 'number')
		{
			var select = this._matchOption(input);
		}
		else
		{
			var select = input;
		}
		o.selected = select;
		
		if(select==6)
		{
			select.css('padding-left',"93px");
		}
		else if(select==5)
		{
			select.css('padding-left',"75px");
		}
		else if(select==4)
		{
			select.css('padding-left',"57px");
		}
		else if(select==3)
		{
			select.css('padding-left',"39px");
		}
		else if(select==2)
		{
			select.css('padding-left',"21px");
		}
		else if(select==1)
		{
			select.css('padding-left',"3px");
		}
		else
		{
			throw("Error 103: Could not set selector icon");
		}
	},
	
	_matchOption: function(key) {
		var o = this.options;
		if(o.color1 == key)
		{
			return 1;
		}
		else if(o.color2 == key)
		{
			return 2;
		}
		else if(o.color3 == key)
		{
			return 3;
		}
		else if(o.color4 == key)
		{
			return 4;
		}
		else if(o.color5 == key)
		{
			return 5;
		}
		else if(o.color6 == key)
		{
			return 6;
		}
		else
		{
			console.log("Color set has changed, resetting selected");
			return 1;
		}
	}
	
	});
})(jQuery);  
