function resize2()
{
    //set the originals
    var originalWinHeight = $(this).height();
    var originalWinWidth = $(this).width();
 
    //set the original font size
    var originalFontSize = getOriginalFontSize( $(this));
 
    //set the ratio of change for each size change
    var ratioOfChange = 50;
 
    //set the font size using jquery
    $("#container").css("font-size", originalFontSize);
 
    $(window).resize(function()
    {
        //get the width and height as the window resizes
        var winHeight = $(this).height();
        var winWidth = $(this).width();
 
        //get the difference in width
        var widthDiff = winWidth - originalWinWidth;
 
        //check if the window is larger or smaller than the original
        if(widthDiff > 0)
        {
            //our window is larger than the original so increase font size
            var pixelsToIncrease = Math.round(widthDiff / ratioOfChange);
 
            //calculate the new font size
            var newFontSize = originalFontSize + pixelsToIncrease;
 
            //set new font size
            $("#container").css("font-size", newFontSize);
        }
        else
        {
            //our window is smaller than the original so decrease font size
            var pixelsToDecrease = Math.round(Math.abs(widthDiff) / ratioOfChange);
 
            //calculate the new font size
            var newFontSize = originalFontSize - pixelsToDecrease;
 
            //set the new font size
            $("#container").css("font-size", newFontSize);
        }
    })
});
 
getOriginalFontSize = function()
{
    var windowWidth = $(this).width();
 
    var thisFontSize = windowWidth / 50;
 
    return thisFontSize;
}