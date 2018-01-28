const request = require('request');








module.exports = (search = 'Stack Overflow', context, callback) => {

    var replaced = search.replace(/ /g, '%2B');   
    //http://api.wolframalpha.com/v2/query?appid=UW7KTU-UVHHKHJHPH&input=tides%20seattle&format=image
   

    request("https://api.wolframalpha.com/v2/query?input="+replaced+"&format=image&output=XML&appid=UW7KTU-UVHHKHJHPH", function (error, response, body) {
body = body.replace(/(\r\n|\n|\r)/gm," ");
body = body.replace(/(<\/pod>)/gm,"</pod><br> ");

            
            
        
        
        callback(null, body);    
    });
    
    

};
