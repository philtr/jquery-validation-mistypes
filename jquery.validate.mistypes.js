/*

  jQuery Validator: E-mail mistypes add-on

  by Phillip Ridlen

  Requires:
    * jquery.js >= 1.4.1
    * jquery.validate.js
*/

jQuery.validator.addMethod("mistypes", function(value, element) {
    
    if(!this.optional(element)) {
    
      // Dictionary of common misspellings
      // Format: "wrong":"right"
      mistypes = {
      
        // Domains ===============================
        "domains":{ 
       
         // hotmail
         "homtail":"hotmail",  
         "hotmale":"hotmail",  
         "hotmial":"hotmail",  
         "otmail":"hotmail",   
         "homail":"hotmail",   
         "hotmai":"hotmail",   
         
         // gmail 
         "gamil":"gmail",  
         "gmial":"gmail",  
         "mgail":"gmail",  
         "gmali":"gmail",  
         "gmale":"gmail",  
         "gmal":"gmail",   
         "gmaid":"gmail",  
         
         // yahoo
         "yaho":"yahoo",   
         "yaahoo":"yahoo", 
         "yahho":"yahoo",  
         "yahooo":"yahoo", 
         "yaaho":"yahoo",  
         "ayhoo":"yahoo",  
         "yhaoo":"yahoo",  
         "yaoho":"yahoo",  
         "yaohoo":"yahoo", 
         
       }, 
       
       // TLDs ==================================
       "tlds":{ 
       
         // com
         "cmo":"com",  
         "ocm":"com",  
         "co":"com",    
         "cm":"com",   
         
         // net
         "nte":"net",  
         "ent":"net",  
         "ne":"net",   
         "nt":"net",   
         
         // org
         "ogr":"org",  
         "rog":"org",  
         "or":"org",     
         "og":"org"    
     
     }};
      
      url_parts = value.split("@")[1].split(".");
      
      for(i=0; i < url_parts.length-1; i++)
        if(mistypes.domains[url_parts[i]])
          return false;
      
      // only checks the last part
      if(mistypes.tlds[url_parts[i]])
          return false;
    }
    
    return true; //if we didn't find anything worth mentioning
    
}, "Did you mistype your e-mail address?" );