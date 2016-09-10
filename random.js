var RandMaster = {
	randInt: function (max, min=0) {
		/* can returns Int [min, max] */
		var ret = Math.round(Math.random() * (max - min)) + min;
		if (ret >= max) {
			ret = Math.floor(ret);
		}
		if (ret < min) {
			ret = Math.ceil(ret)
		}
		return Math.ceil(ret);
	},
	randNumString: function (length, radix=10) {
		var numString = '';
		for (var i = 0; i < length; i++) {
			var randEl = parseInt(Math.random() * 10).toString(radix);
			numString += randEl;
		}
		return numString;
	},
	randDecimal: function (precision, digit) {
		var total = precision + digit;
		var num = parseInt(this.randNumString(total));
		while((precision + digit) !== num.toString().length) {
			num = parseInt(this.randNumString(total));
			len = num.toString().length;
			console.log(num, len);
		}
		var retNum = num/Math.pow(10,digit);
		return retNum;
	},
	randString: function(length, hasNumber=true, hasSymbol=true) {
		var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
		var numbers = "0123456779".split("");
		var symbols = "~!@#$%^&*()_+{}|:\"<>?`[]\\;',./".split("");
		var all = [].concat(characters);
		
		if (hasNumber) {
			var all = all.concat(numbers);
		}

		if (hasSymbol) {
			var all = all.concat(symbols);
		}

		var stringWanted = '';
		for (var i = length - 1; i >= 0; i--) {
			var element = all[this.randInt(all.length-1)];
			stringWanted += element;
		}
		return stringWanted;
	},
	randChinaMobile: function() {
		var prefixs = [
			134,135,136,137,138,139,150,151,152,158,159,157,182,187,
			188,147,130,131,132,155,156,185,186,133,153,180,189
		];
		var suffix = this.randNumString(8);
		var prefix = prefixs[this.randInt(prefixs.length-1)];
		return prefix + suffix;
	},
	randUuid: function(version=4) {
		if (version==4) {
			var phase1 = this.randString(8,true,false).toLowerCase();
			var phase2 = this.randString(4,true,false).toLowerCase();
			var phase3 = this.randString(4,true,false).toLowerCase();
			var phase4 = this.randString(4,true,false).toLowerCase();
			var phase5 = this.randString(12,true,false).toLowerCase();
			var uuid = [phase1, phase2, phase3, phase4, phase5].join("-");
		}
		//todo other hyper UUID versions
		return uuid;
	}
}
