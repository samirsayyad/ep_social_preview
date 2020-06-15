exports.handleTitle = function(hook, context, cb){
    if(context.payload.action == "recieveTitleMessage"){
      var message = context.payload.message;
        if(message){
            $('head').append('  <meta property="og:title" content="aaaaaaaaaaaaaaa " />');

        }
      
    }
  }