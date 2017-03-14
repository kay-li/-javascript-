
var LM = {
    alert: {}
};
LM.alert.Wechat = function(t){
    var t = t || '提交成功，您的资料正在审核中。'
    $('#alertWechat').remove()
    clearTimeout(LM.alert.Time)
    var alertWechat = '<div id="alertWechat" style=" position:fixed;left:50%;top:45%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%); -moz-transform: translate(-50%,-50%);text-align:center"><span style="background-color: #FFFBEA; min-width: 100px; color: #F71B1B; border: 1px solid #ba8651; padding: 24px 70px; display: inline-block; position:relative"><span style= "position:absolute;left:20px; top:20px; display:inline-block; width:30px; height:30px;background:url(http://huahan.oss-cn-hangzhou.aliyuncs.com/gantan.png) no-repeat; font-size:18px; color:#ffffff"></span>'+t+'</span></div>'

    $('body').append(alertWechat)
    LM.alert.Time = setTimeout(function(){
        $('#alertWechat').fadeOut(500)
    }, 1500)
};

var TS = {
    alert: {}
};
TS.alert.Wechat = function(t){
    var t = t || '提交成功，您的资料正在审核中。'
    $('#alertWechat').remove()
    clearTimeout(LM.alert.Time)
    var alertWechat = '<div id="alertWechat" style="padding:0 25px; position:fixed;top:45%;left:50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%); -moz-transform: translate(-50%,-50%); background-color: #5dc1cf;text-align:center;line-height:60px;font-size:20px;color:#fff;border-radius:8px;">'+t+'</div>'
    $('body').append(alertWechat);
    LM.alert.Time = setTimeout(function(){
        $('#alertWechat').fadeOut(500)
    }, 1500)
};
$(function(){
	var input = document.getElementsByClassName('ie-input')
	if(input.length>0){
		if(!Modernizr.input.placeholder){
			for(var i=0; i<input.length; i++){
				input[i].onfocus = function(){
				var text =this.placeholder || this.getAttribute('placeholder');
					if(this.value == text){
						this.value = '';
					}
				}
				input[i].onblur = function(){
					if(this.value == ''){
						this.value = this.placeholder || this.getAttribute('placeholder');
					}
				}
				input[i].onblur();
			}
		}
	}
});


