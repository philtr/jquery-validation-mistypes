#jQuery.validate.mistype.js
## Addon for http://bassistance.de/jquery-plugins/jquery-plugin-validation/ written to include common e-mail mistakes.

_e.g._

  * "user@homtail.com" => "Did you mean: user@hotmail.com?"
  * "userg@mail.com" => "Did you mean: user@gmail.com?"
  * "user@yahoo.cmo" => "Did you mean: user@yahoo.com?"
  

**Current Status**: Broken, never working.

**Comments**: 

The problem is with the way that the jquery validation plugin is written. The jQuery.validator.addMethod() function takes in three parameters:

  * class name to validate on
  * function for validation (returns boolean)  
  * message (to display to the user if input is invalid)
  
The issue is that there is no way to get any additional output from the added validation method other than true/false.  We can find matches and format an output string, but there's no way for it to display to the user, because the message parameter of the addMethod() function adds the message at load time. That is, it evaluates any input immediately. I have to find a way to get other information out of the validation function in order to display a suggested e-mail address.
