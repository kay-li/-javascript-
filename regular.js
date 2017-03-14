function isMobile(mobile) {
    var searchStr = /^[1]+\d{10}$/;
    if (!searchStr.test(mobile)) {
       	return false;
    }else{
    	return true;
    }     
};
function isIdcard(Idcard){
	var searchStr = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return searchStr.test(Idcard);
};
function isEmail(Email) {
    var searchStr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!searchStr.test(Email)) {
       	return false;
    }else{
    	return true;
    }     
};
function isTard(Tard) {
    var searchStr = /^\d{15}$/;
    if (!searchStr.test(Tard)) {
       	return false;
    }else{
    	return true;
    }     
};
function isName(Name){
	var searchStr = /^[\u4e00-\u9fa5]{2,}$/;
	if (!searchStr.test(Name)) {
       	return false;
    }else{
    	return true;
    }  
};
function isCompanyName(CompanyName){
	var searchStr = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]+$/;
	if (!searchStr.test(CompanyName)) {
       	return false;
    }else{
    	return true;
    }  
};
function isPassword(passwordStr){
	var passwordRegular = /^[0-9A-Za-z]{6,12}$/;
	if(!passwordRegular.test(passwordStr)){
		return false;
	}
		return true;
}
