var extraStuff = {};

extraStuff.classesFixedText = new Array();
extraStuff.classFixedPath = "class_"
/* initialize the var for select the front or the back*/
/* extraStuff.classesFixedText[0] */
extraStuff.classesFixedText[0] = "#frontWrapper"; 

// barcode configuration
btype = "code128";
extraStuff.classesFixedText[1] = btype;

renderer  = "css";
extraStuff.classesFixedText[2] = renderer;

value = "200412121";
extraStuff.classesFixedText[3] = value;

quietZone = false;
extraStuff.classesFixedText[4] = quietZone;



var settings = {
          output:renderer,
          bgColor: "#ffffff",
          color: "#000000",
          barWidth: "1",
          barHeight: "25",
          addQuietZone: false
        };

extraStuff.classesFixedText[5] = settings;

//http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
//texto aleatoreo

function makeText(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
/*
function barcode(matricula){

btype = "code39";
renderer  = "css";
value = "200412121";
var quietZone = false;

var settings = {
          output:renderer,
          bgColor: "#ffffff",
          color: "#000000",
          barWidth: "1",
          barHeight: "25",
          addQuietZone: false
        };



$(extraStuff.classesFixedText[0]).html("").show().barcode(value, btype, settings);

}
*/

/*
    function dragResizeFit(selector){

       console.log(selector);

       $(selector).draggable({ 
            containment: "parent",
            drag: function() {
            var $this = $(this);
            var thisPos = $this.position();
            var parentPos = $this.parent().position();
            var x = thisPos.left - parentPos.left;
            var y = thisPos.top - parentPos.top;
            console.log(
                      JSON.stringify([$(this).attr("id"),x,y,$(this).width(),$(this).height(),parseInt($(this).css("font-size")) ])
                      );
        }
        }).resizable({containment: "parent", maxHeight: 204,maxWidth: 324,minHeight: 10,minWidth: 10});
        
        
        
        $(selector).find("FitText").fitText(0.273, { minFontSize: '16px', maxFontSize: '40px' });

    }
*/
document
$().ready(function() {

    // Crea las pestañas Texto / Imagenes / Otros
    $( "#inputs" ).tabs();

    // on - http://api.jquery.com/one/ 

    //    1) AL dar click se visualiza el panel de edición 
    $("body").on('click',".dragAndResize",function(e){
                var id = e.target.id;
                var lastChar = id.substr(id.length - 1); 

                if ( lastChar === 'p' )
                    selector = id.substr(0,id.length-1)
                else
                    selector = id

                alert(selector);
                return;    
    });

    $("#front").click(function(){
            extraStuff.classesFixedText[0] = "#frontWrapper";
    });

    $("#back").click(function(){
            extraStuff.classesFixedText[0] = "#backWrapper";
    });

/*    
    // crear elementos de texto dinámicamente 
    $("#newTextFix,#newTextDyn").click(function(e){
        var whatText = $("#whatText").val();
        if ( (whatText === "") && (e.target.id === "newTextFix") ){
          $("#whatText").fadeOut(1000).css("background","black").fadeIn(1000).css("background","white");
          return
        }  
        else{
          
            var selectedOption = $("select option:selected").text();
            var text;
            if (e.target.id === "newTextFix")
              text = whatText;
            else
              text = makeText(selectedOption);
            var idNewText = '_' + Math.random();
            var $element = $('<div class="dragAndResize"  id="' + idNewText  + '" ><p id="' + idNewText + 'p' + '" class="FitText" >'+ text +'</p></div>' );
            //var $element = $('<div class="dragAndResize"  id="' + idNewText  + '" >' + text + '</div>' );
            //preppend it to the DOM
            //$("#wrapper").prepend($element);
            $("#wrapper").append($element);
            $(idNewText+'p').resizable();
            //textify it!
            $(idNewText).text( text );
            $("#")
        }
    });
*/
    // crear elementos de texto dinámicamente

    $("#newTextFix,#dbElement,#barcode").click(function(e){
        var whatText = $("#whatText").val();

        if ( (whatText === "") && (e.target.id === "newTextFix") ){
            $("#whatText").fadeOut(1000).css("background","black").fadeIn(1000).css("background","white");
            return
        }
        else{
            if (e.target.id=== "newTextFix");
            else if (e.target.id==="dbElement" || e.target.id==="barcode"){
                whatText = $("#tableCols option:selected").text();
                newIdClass = extraStuff.classFixedPath + extraStuff.classesFixedText.length
                extraStuff.classesFixedText[ extraStuff.classesFixedText.length ] = newIdClass;
                /*var $element = $('<div class="dragAndResize'
                                    + ' '+ newIdClass
                                    +   '"  id="' + newIdClass
                                    + '" ><p id="' + newIdClass
                                    + 'p' + '" class="FitText" >'
                                    + whatText + '</p></div>' );
                */
                // create element

  
                var p = $('<p></p>').attr("id",newIdClass).addClass(newIdClass+'p').addClass("drag").text(whatText);
                var element = $('<div></div>').attr("id",newIdClass).addClass(newIdClass).addClass("dragAndResize").append(p);
                
                if (e.target.id === 'barcode'){
                    element.addClass('barcode');
                    element.addClass("barcode");
                    element.barcode("123123123",extraStuff.classesFixedText[1],extraStuff.classesFixedText[5] );
                    
                }
            // make it fittable
            else
                element.fitText(true, { minFontSize: '16px', maxFontSize: '40px' } );

            }

           
            // make it draggable
            element.draggable({
                containment: "parent",
                start: function(){$(this).addClass("dragging")},
                drag:  function(){
                        var $this = $(this);
                        var thisPos = $this.position();
                        var parentPos = $this.parent().position();
                        var x = thisPos.left - parentPos.left;
                        var y = thisPos.top - parentPos.top;
                        console.log(
                            JSON.stringify([$(this).attr("id"),x,y,$(this).width(),$(this).height(),parseInt($(this).css("font-size")) ])
                        );
                        $this.css({'top-margin':'0','bottom-margin':'0'});
                },
                stop: function(){$(this).removeClass("dragging")}
            }).resizable({
                    containment: "parent", maxHeight: 204,maxWidth: 324,minHeight: 10,minWidth: 10,
                    resize: function( event, ui ) {console.log(ui.element.attr("id"));}    
            });

            
                
                if (e.target.id === 'barcode'){
                    element.addClass('barcode');
                    element.addClass("barcode");
                }    
            
                //append it to the DOM in a specific front or back div
                $(extraStuff.classesFixedText[0]).append(element);
                //$(newIdClass+'p').resizable();
                //$(newIdClass).text( $("#whatText").val() );
        }

        

    });

    // add background image
    // https://github.com/salencebg/image-loader
    // http://tools.ietf.org/html/rfc2397 
    // http://css-tricks.com/data-uris/ 

    

    $("#newFront").click(function(){
        $(function () {
            $('.imageFront').imageLoader({
                'show' : extraStuff.classesFixedText[0],
                'width' : '100%',
                        'height' : '100%',
                        'cssBackground' : 'false',
                        'imgClass' : 'imageBackGroundSet',
                callback: function () {
                    console.log('done front');
                }
            });
        });
    });

     $("#newBack").click(function(){
        $(function () {
            $('.imageBack').imageLoader({
                'show' : extraStuff.classesFixedText[0],
                'width' : '100%',
                        'height' : '100%',
                        'cssBackground' : 'false',
                        'imgClass' : 'imageBackGroundSet',
                callback: function () {
                    console.log('done back');
                }
            });
        });
    });


    $("#Person").click(function(){
            var idPerson = '_' + Math.random();
            var $Person = $('<div class="Person"  id="' + idPerson  + '" ></div>' ).draggable({containment: "parent",
                revert: true,
            });
            //append it to the DOM
            $(extraStuff.classesFixedText[0]).remove(".Person");
            $(extraStuff.classesFixedText[0]).append( $Person);
    });

    $("#dragIt").click(function(){

    });

});