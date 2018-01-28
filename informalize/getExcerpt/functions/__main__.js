const request = require('request');








module.exports = (search = 'Stack Overflow', context, callback) => {

    var replaced = search.replace(/ /g, '%20');   
    
    
    request("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles="+replaced, function (error, response, body) {
        
          var testString=body.substr(body.indexOf("pages")+9,body.length-1);
    var pageID=testString.substr(0,testString.indexOf(":")-1);
        var JSONresult=JSON.parse(body);
        
   //   console.log('error:', error); // Print the error if one occurred
        
        callback(null, JSONresult.query.pages[pageID].extract);    
    });
    
    

};
