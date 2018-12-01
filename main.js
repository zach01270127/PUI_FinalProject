    <script src="anime.min.js"></script>  
    <script>
    function redclick(){        
            $("#home1").show(500);
            var red = document.querySelector('#movered .red');
            var instructions = document.getElementById('instructions');
   instructions.style.display = ((instructions.style.display != 'none') ? 'none' : 'block');
            var movewhite = document.getElementById('movewhite');
   movewhite.style.display = ((movewhite.style.display != 'none') ? 'none' : 'block');
            var movesparkling = document.getElementById('movesparkling');
   movesparkling.style.display = ((movesparkling.style.display != 'none') ? 'none' : 'block');
            var movedessert = document.getElementById('movedessert');
   movedessert.style.display = ((movedessert.style.display != 'none') ? 'none' : 'block');
            document.getElementById("movered").style.opacity = "1";
       
            

            var domNode = anime({
          targets: red,
          translateY: -200
        });
         document.getElementById('redoptions').style.display = "inline-block";
         
        }

    
    
    
          function showsweettext()
        {
          document.getElementById('sweettext').style.display = "block";
    
        }

    
    
        function whiteclick(){        
            $("#home1").show(500);
            var white = document.querySelector('#movewhite .white');
            var instructions = document.getElementById('instructions');
   instructions.style.display = ((instructions.style.display != 'none') ? 'none' : 'block');
            var movered = document.getElementById('movered');
   movered.style.display = ((movered.style.display != 'none') ? 'none' : 'block');
            var movesparkling = document.getElementById('movesparkling');
   movesparkling.style.display = ((movesparkling.style.display != 'none') ? 'none' : 'block');
            var movedessert = document.getElementById('movedessert');
   movedessert.style.display = ((movedessert.style.display != 'none') ? 'none' : 'block');
            document.getElementById("movewhite").style.opacity = "1";
       
            

            var domNode = anime({
          targets: white,
          translateY: -200
        });
         document.getElementById('whiteoptions').style.display = "inline-block";
         
        }
    
    
    
    
    
        function sparklingclick(){        
            $("#home1").show(500);
            var sparkling = document.querySelector('#movesparkling .sparkling');
            var instructions = document.getElementById('instructions');
   instructions.style.display = ((instructions.style.display != 'none') ? 'none' : 'block');
            var movewhite = document.getElementById('movewhite');
   movewhite.style.display = ((movewhite.style.display != 'none') ? 'none' : 'block');
            var movered = document.getElementById('movered');
   movered.style.display = ((movesparkling.style.display != 'none') ? 'none' : 'block');
            var movedessert = document.getElementById('movedessert');
   movedessert.style.display = ((movedessert.style.display != 'none') ? 'none' : 'block');
            document.getElementById("movered").style.opacity = "1";
       
            

            var domNode = anime({
          targets: sparkling,
          translateY: -200
        });
         document.getElementById('sparklingoptions').style.display = "inline-block";
         
        }
    
    
        function dessertclick(){        
            $("#home1").show(500);
            var dessert = document.querySelector('#movedessert .dessert');
            var instructions = document.getElementById('instructions');
   instructions.style.display = ((instructions.style.display != 'none') ? 'none' : 'block');
            var movewhite = document.getElementById('movewhite');
   movewhite.style.display = ((movewhite.style.display != 'none') ? 'none' : 'block');
            var movesparkling = document.getElementById('movesparkling');
   movesparkling.style.display = ((movesparkling.style.display != 'none') ? 'none' : 'block');
            var movered = document.getElementById('movered');
   movered.style.display = ((movered.style.display != 'none') ? 'none' : 'block');
            document.getElementById("movedessert").style.opacity = "1";
       
            

            var domNode = anime({
          targets: dessert,
          translateY: -200
        });
         document.getElementById('dessertoptions').style.display = "inline-block";
         
        }
    
        function showmusic(){
     
            document.getElementById('musicicon').style.display = "none";
            document.getElementById('sweettext').style.display = "none";
            document.getElementById('movered').style.display = "none";
            $("#sweetred").slideDown("slow");


        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        function refresh(){
                location.reload();
            }


</script>  
    