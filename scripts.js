function toggleCdcChatbot() {
    if ( $(".chat-ov").hasClass("chat-exit") ) {
        $(".chat-ov").removeClass("chat-exit");
    } else {
        $("#start").focus();
        $(".chat-ov").addClass("cdc-chatbot-closing");
    }
}

$('#start').on('click',function(){
    if ( $(".chat-ov").hasClass("chat-exit") ) {
        var iframe = $(".chat-ov").find("iframe");
        iframe.attr("src", 'https://covid19healthbot.cdc.gov/');
        iframe.focus();
        $(".chat-ov").removeClass("chat-exit");
    }
})
$(".chat-close").click(toggleCdcChatbot);