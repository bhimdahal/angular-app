function ordinal() {
	return function(value){
		var suffix = '';
		var last = value % 10;
		var speicalLast = value % 100;

		if( !value || value < 1){
			return;
		}
		if( value === 1 && value !== 11){
			suffix = 'st';
		}else if( value === 2 && value !== 12){
			suffix = 'nd';
		}else if( value === 3 && value !== 13){
			suffix = 'rd';
		}
		else {
			suffix = 'th';
		}
		return value + suffix;
	};
}



angular.module('common')
.filter('ordinal', ordinal);