function Verifier()                                    
    { 
          var name = document.forms["RegForm"]["Nom"];               
          var email = document.forms["RegForm"]["Email"];    
          var phone = document.forms["RegForm"]["Téléphone"];    
          var address = document.forms["RegForm"]["Adresse"];  
          var comment = document.forms["RegForm"]["Commentaire"];  

          if (name.value == "")                                  
          { 
              alert("Mettez votre nom."); 
              name.focus(); 
              return false; 
          }    
          if (address.value == "")                               
          { 
              alert("Mettez votre adresse."); 
              address.focus(); 
              return false; 
          }        
          
          if (email.value.indexOf("@", 0) < 0)                 
          { 
             alert("Mettez une adresse email valide."); 
              email.focus(); 
              return false; 
          }    
          if (email.value.indexOf(".", 0) < 0)                 
          { 
              alert("Mettez une adresse email valide."); 
              email.focus(); 
              return false; 
          }    
          if (phone.value.length < 8 || phone.value === "")                           
          { 
              alert("Mettez un numéro de téléphone valide."); 
              phone.focus(); 
              return false; 
          }    
           
          
          return true; 
    }