// $(document).ready(function(){



// 	// $("#my-image").on('click', function(event) {
//       var $img = $("#my-image");
//       $img.attr("src","images/jock.jpg");
// 	});
// });

// $("#times").mouseover(function(){
//     $("#my-image").attr("src","images/jock.jpg");
// });
// });

// $("#on-click").on("click", function()){
// 	$("")
// }

// 

function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if (s1.value == "1st") {
      var optionArray = ["|", "nothrow| No throws needed"];
    } else if (s1.value == "2nd") {
    		var optionArray = ["|", "OGoshi | O Goshi", "ukiGoshi|Uki Goshi"];
    	}
    
    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
    }
  }