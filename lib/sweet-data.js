function pp(steps, stepChar) {
	steps = typeof steps !== 'undefined' ? steps : 2;
	stepChar = typeof stepChar !== 'undefined' ? stepChar : ' ';
	this.setStep(steps, stepChar);
};	

pp.prototype.setStep = function(steps, stepChar){
	this.shift = ['\n']; // array of shifts
	
	switch(stepChar){
		case 'SPACE': this.stepChar = ' '; break;
		case 'TAB': this.stepChar = '	'; break;
		default: this.stepChar = stepChar.length > 0 ? stepChar : ' ';
	}

	if ( isNaN(parseInt(steps)) ) {
		this.step = this.stepChar;
	} else {
		this.step = '';
		for(var i=0;i<steps;i++){
			this.step += this.stepChar;
		}
	}
	
	var maxdeep = 100, // nesting level
      ix = 0;

	// initialize array with shifts //
	for(ix=0;ix<maxdeep;ix++){
		this.shift.push(this.shift[ix]+this.step); 
	}

}
	

// ----------------------- beautify section -----------------------------------------------
pp.prototype.xml = require('./xml').xml;

pp.prototype.json = require('./json/').json;

pp.prototype.css = require('./css').css;

pp.prototype.sql = require('./sql').sql;

// ----------------------- min section ----------------------------------------------------

pp.prototype.xmlmin = require('./xml').xmlmin;

pp.prototype.jsonmin = require('./json').jsonmin;

pp.prototype.cssmin = require('./css').css;

pp.prototype.sqlmin = require('./sql').sqlmin;

exports.SweetData = new pp;