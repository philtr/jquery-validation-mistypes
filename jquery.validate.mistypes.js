/*

  jQuery Validator: E-mail mistypes add-on

  by Phillip Ridlen

  Requires:
    * jquery.js >= 1.4.1
    * jquery.validate.js
*/

jQuery.validator.addMethod("mistypes", function(value, element) {
    
    flag = false;
    // Dictionary of common misspellings
    // Format: "wrong":"right"
    var commonMisspellings = jQuery.parseJSON('{' +
    
      // Domains ===============================
      
      // hotmail
      '"homtail":"hotmail",'  +
      '"hotmale":"hotmail",'  +
      '"hotmial":"hotmail",'  +
      '"otmail":"hotmail",'   +
      '"homail":"hotmail",'   +
      '"hotmai":"hotmail",'   +
      
      // gmail 
      '"gamil":"gmail",'  +
      '"gmial":"gmail",'  +
      '"mgail":"gmail",'  +
      '"gmali":"gmail",'  +
      '"gmale":"gmail",'  +
      '"gmal":"gmail",'   +
      '"gmaid":"gmail",'  +
      
      // yahoo
      '"yaho":"yahoo",'   +
      '"yaahoo":"yahoo",' +
      '"yahho":"yahoo",'  +
      '"yahooo":"yahoo",' +
      '"yaaho":"yahoo",'  +
      '"ayhoo":"yahoo",'  +
      '"yhaoo":"yahoo",'  +
      '"yaoho":"yahoo",'  +
      '"yaohoo":"yahoo",' +
      
      
      // TLDs ==================================
      
      // com
      '"cmo":"com",'  +
      '"ocm":"com",'  +
      '"co":"com",'    +
      '"cm":"com",'   +
      
      // net
      '"nte":"net",'  +
      '"ent":"net",'  +
      '"ne":"net",'   +
      '"nt":"net",'   +
      
      // org
      '"ogr":"org",'  +
      '"rog":"org",'  +
      '"or":"org",'   +  
      '"og":"org"'    +
    
    '}');
    
    // need to figure out how to separate domain and tld from value
    // then return suggested result
    url_parts = value.split("@")[1].split(".");
    
    for(i=0; i < url_parts.length; i++)
      if(commonMisspellings[url_parts[i]])
        flag = true;
    
    if(flag) return false;
    else return true;
    
}, "Did you mistype your e-mail address?" );