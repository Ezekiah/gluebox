var oo = oo || {}; oo.subscriber = {};

/*


    Magic
    =====

*/
oo.magic = oo.magic || {};
oo.magic.subscriber = {};
oo.magic.subscriber.add = function(){
	oo.log("[oo.magic.subscriber.add]");
	$("#subscription").hide();
	$("#subscription-accepted").show();
	$("#right-sidebar").height($(".page").height());
};

/*


    Subscriber Ajax API
    ===================

*/



oo.api.subscriber = {};
oo.api.subscriber.add = function( params ){
	if( params.accepted_terms == false){
		oo.toast( oo.i18n.translate("please check accepted terms"), oo.i18n.translate("form errors"));
		return;
	}
	$.ajax( $.extend( oo.api.settings.post,{
		url: oo.urls.add_subscriber,
		data: params, 
		success:function(result){
			oo.log( "[oo.api.subscriber.add] result:", result );
			oo.api.process( result, oo.magic.subscriber.add, "id_subscriber" );
		}
	}));
};


oo.subscriber.init = function(){
	oo.log("[oo.subscriber.init]");
	$("#add-subscriber, #edit-subscriber").click( function(){	oo.api.subscriber.add({
		first_name:$("input[name=first_name]").val(),
		last_name:$("input[name=last_name]").val(),
		affiliation:$("input[name=affiliation]").val(),
		description:$("textarea[name=description]").val(),
		accepted_terms:$("#id_subscriber_accepted_terms").prop("checked"),
		status:$('select[name=status]').val(),
		email:$("input[name=email]").val(),
		action:$("input[name=action]").val(),
		captcha_0:$('input[name=captcha_0]').val(),
		captcha_1:$('input[name=captcha_1]').val(),
	})});
	//$("").click()
};

$('.refresh-captcha').click( function() {
        captcha_refresh()
}
)

