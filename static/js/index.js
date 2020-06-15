exports.handleClientMessage_CUSTOM = function(hook, context, cb){
  console.log("handleHeaderTitleMessage has been runned")
  if(context.payload.action == "recieveTitleMessage"){
    var message = context.payload.message;
    if(!$("#input_title").is(":visible")){ // if we're not editing..
      if(message){
        $('head').append('  <meta property="og:title" content="'+message+' " />');
      }
    }
  }
}