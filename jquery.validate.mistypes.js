/*

  jQuery Validator: E-mail mistypes add-on

  by Phillip Ridlen

  Requires:
    * jquery.js >= 1.4.1
    * jquery.validate.js
*/

var message;

jQuery.validator.addMethod("email-mistypes", function(value, element, params) {
  
  //same as 'email': first check to see if it's valid
  if (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value)) {
  
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
    user = "pridlen";
    domain = "yahooo";
    tld = "cmo";
    
    if(commonMisspellings[domain]){
      domain = commonMisspellings[domain];
      flag = true;
    }
    
    if(commonMisspellings[tld]){
      tld = commonMisspellings[tld];
      flag = true;
    }
    
    if(flag) {
      message = "Did you mean: " + user + "@" + domain + "." + tld + "?";
      return false;
    } else return true;
          
  } else {
    if(this.optional(element)) { 
      return true; 
    } else {
      message = "Please enter a valid e-mail address";
      return false;
    }
  }
}, jQuery. );