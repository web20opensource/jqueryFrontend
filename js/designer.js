var layout = {};

layout.elements = new Array();
layout.classFixedPath = "class_"
/* initialize the var for select the front or the back*/
/* layout.elements[0] */
layout.elements[0] = "#frontWrapper"; 

// barcode configuration
btype = "code128";
layout.elements[1] = btype;

renderer  = "css";
layout.elements[2] = renderer;

value = "200412121";
layout.elements[3] = value;

quietZone = false;
layout.elements[4] = quietZone;



var settings = {
          output:renderer,
          bgColor: "#ffffff",
          color: "#000000",
          barWidth: "1",
          barHeight: "25",
          addQuietZone: false
        };

layout.elements[5] = settings;

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



$(layout.elements[0]).html("").show().barcode(value, btype, settings);

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
            layout.elements[0] = "#frontWrapper";
    });

    $("#back").click(function(){
            layout.elements[0] = "#backWrapper";
    });

/*    
    // crear elementos de texto dinámicamente 
    $("#textField,#newTextDyn").click(function(e){
        var whatText = $("#whatText").val();
        if ( (whatText === "") && (e.target.id === "textField") ){
          $("#whatText").fadeOut(1000).css("background","black").fadeIn(1000).css("background","white");
          return
        }  
        else{
          
            var selectedOption = $("select option:selected").text();
            var text;
            if (e.target.id === "textField")
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

    $("#textField,#textDynamicField,#barcode").click(function(e){
        var whatText = $("#whatText").val();

        if ( (whatText === "") && (e.target.id === "textField") ){
            $("#whatText").fadeOut(1000).css("background","black").fadeIn(1000).css("background","white");
            return
        }
        else{
            if (e.target.id==="textDynamicField")
                whatText = $("#tableCols option:selected").text();
            else if( e.target.id=== "textField" );
            
            {
                //newIdClass = layout.classFixedPath + layout.elements.length
                newIdClass = layout.elements.length
                layout.elements[ layout.elements.length ] = newIdClass;
                /*var $element = $('<div class="dragAndResize'
                                    + ' '+ newIdClass
                                    +   '"  id="' + newIdClass
                                    + '" ><p id="' + newIdClass
                                    + 'p' + '" class="FitText" >'
                                    + whatText + '</p></div>' );
                */
                // create element

  
                //var p = $('<p></p>').attr("id",newIdClass).addClass(newIdClass+'p').addClass("drag").text(whatText);
                var element = $('<div></div>').attr("id",e.target.id+newIdClass).addClass(newIdClass).addClass("dragAndResize").text(whatText);//append(p);
                
                if (e.target.id === 'barcode'){
                    element.addClass('barcode');
                    element.addClass("barcode");
                    element.barcode("123123123",layout.elements[1],layout.elements[5] );
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
                        var x = 0;//thisPos.left - parentPos.left;
                        var y = 0;//thisPos.top - parentPos.top;
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
                $(layout.elements[0]).append(element);
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
                'show' : layout.elements[0],
                'width' : '100%',
                        'height' : '100%',
                        'cssBackground' : 'false',
                        'imgClass' : 'imageFrontGroundSet',
                callback: function () {
                    console.log('done front');
                }
            });
        });
    });

     $("#newBack").click(function(){
        $(function () {
            $('.imageBack').imageLoader({
                'show' : layout.elements[0],
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


    $("#photo").click(function(){
            var idPerson = 'photo';
            var $Person = $('<div class="imageField"  id="' + idPerson  + '" ></div>' ).draggable({containment: "parent",
                revert: true,
            });
            //append it to the DOM
            $(layout.elements[0]).remove(".imageField");
            $(layout.elements[0]).append($Person);
            console.log("photo added...");
    });

    $("#dragPhoto").click(function(){

    });

    $("#dragBarcode").click(function(){

    });

    //save xml layout
    $("#sendIt").click(function(){
        //serialize frontWrapper  - pageIndex(0)

        //console.log({"layout":0,"width": $('#frontWrapper').width(),"height":$('#frontWrapper').height()});


        $('#frontWrapper').children('img , div').each(function(i) { 
            //console.log($(this).attr("id"));
            console.log(  getObj.pos_xy( $(this) )  );
            

        });


        //serialize backWrapper - pageIndex(1)
        
    });

    //just reload page
    $("#cancel").click(function(){
            document.location.href='designer0.1.html';
    });

    getObj = {
        pos_xy : function(e){
                    var params = new Object();
                    var rgb = rgb2hex( e.css("color") );
                    tmp = e.attr("id");
                    // remove final digit(s)
                    params.id = tmp.replace(/[0-9]/g,'');
                    params.width = e.width();
                    params.height = e.height();
                    params.position = e.position();
                    params.font_family = e.css("font-family");
                    params.font_size = e.css("font-size");
                    params.font_color_r =  hexToR( rgb );
                    params.font_color_g =  hexToG( rgb );
                    params.font_color_b =  hexToB( rgb );
                    return JSON.stringify(params);
                }
    };

    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

    var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

    //Function to convert hex format to a rgb color
    function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function hex(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
     }

});