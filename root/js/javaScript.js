document.getElementById("homeButton").onclick = function () {
        location.href = "index.html";
};
document.getElementById("aboutButton").onclick = function () {
        location.href = "about.html";
};
document.getElementById("demoButton").onclick = function () {
        location.href = "demo.html";
};
document.getElementById("customiseButton").onclick = function () {
        location.href = "customiser.html";
};
var itemCounter = 0;
$(document).ready(function(){
	$("#merchButton1").click(function(){
		if (itemCounter < 10)
		{
		$("#basketOList").append("<li>Black Short Sleeved T-shirt $29.99</li>");
		itemCounter += 1;
		}
		else
		{
			alert("You can only have 10 items in your basket")
		}
	});
	$("#merchButton2").click(function(){
		if (itemCounter < 10)
		{
		$("#basketOList").append("<li>Purple Long Sleeved T-Shirt $24.99</li>");
		itemCounter += 1;
		}
		else
		{
			alert("You can only have 10 items in your basket")
		}
	});
	$("#merchButton3").click(function(){
		if (itemCounter < 10)
		{
		$("#basketOList").append("<li>Black Long Sleeved T-Shirt $24.99</li>");
		itemCounter += 1;
		}
		else
		{
			alert("You can only have 10 items in your basket")
		}
	});
	$("#merchButton4").click(function(){
		if (itemCounter < 10)
		{
		$("#basketOList").append("<li>White and Black Long Sleeved T-shirt $29.99</li>");
		itemCounter += 1;
		}
		else
		{
			alert("You can only have 10 items in your basket")
		}
	});
	$("#deleteLastItem").click(function(){
		$('#basketOList li:last-child').remove();
		itemCounter -= 1;
	});
	
});
	