#jQuery.validate.mistype.js
## Addon for http://bassistance.de/jquery-plugins/jquery-plugin-validation/ written to include common typing errors.

_e.g._

  * "user@homtail.com" => "Did you mean: user@hotmail.com?"
  * "userg@mail.com" => "Did you mean: user@gmail.com?"
  * "user@yahoo.cmo" => "Did you mean: user@yahoo.com?"
  

**Current Status**: Partially working.

**Comments**: 

Will display "Did you mistype your e-mail address?" if any part (separated by a ".") of the URL matches a common misspelling in the index. This is a problem, because it will either not catch or false positive the following valid e-mail addresses.

  * bob@*.co.uk (matches because "co" is a common mistype for "com")
  * bob@*.cm (which also happens to be a common mistype)
  

The problem is with the way that the jquery validation plugin is written. The jQuery.validator.addMethod() function takes in three parameters:

  * class name to validate on
  * function for validation (returns boolean)  
  * message (to display to the user if input is invalid)
  
The issue is that there is no way to get any additional output from the added validation method other than true/false.  We can find matches and format an output string, but there's no way for it to display to the user, because the message parameter of the addMethod() function adds the message at load time. That is, it evaluates any input immediately. I have to find a way to get other information out of the validation function in order to display a suggested e-mail address. Even when I set a global variable (I know, bad form), the value of it gets evaluated before I can set it in the validation function.

Additionally, it seems that we _cannot chain validators._ Only one validation method is applicable to each input.