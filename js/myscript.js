// $(document).ready(function(){



// 	// $("#my-image").mouseover('click', function(event) {
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
    } else if (s1.value == "2nd")
    {
    		var optionArray = ["|", "OGoshi | O Goshi", "ukiGoshi|Uki Goshi"];
    	}else if (s1.value == "3rd") {

        var optionArray = ["|", " uchigari | Uchi Gari", "kouchigari|Ko Uchi Gari"];
      }else if (s1.value == "4th") {

        var optionArray = ["|", "taiotoshi | Tai Otoshi", "ipponseoinage|Ippon Seoi Nage", "moroteseoinage|Morote Seoi Nage"];
      } else if (s1.value == "5th") {

        var optionArray = ["|", "kosotogari | Ko Soto Gari", "kosotogake|Ko Soto Gake", "osotoguruma|O Soto Guruma"];
      } else if (s1.value == "6th") {

        var optionArray = ["|", "oguruma | O Guruma", "ashiguruma|Ashi Guruma", "haraigoshi|Harai Goshi"];
      } else if (s1.value == "7th") {

        var optionArray = ["|", "hanegoshi | Hane Goshi", "ucimata|Uci Mata"];
      } else if (s1.value == "8th") {

        var optionArray = ["|", "deashibarai | De Ashi Barai", "okuriashibarai|Okuri Ashi Barai"];
      } else if (s1.value == "9th") {

        var optionArray = ["|", "sasaetsurikomiashi | Sasae Tsuri Komi Ashi", "hizaguruma|Hiza Guruma"];
      } else if (s1.value == "10th") {

        var optionArray = ["|", "ushirogoshi | Ushiro Goshi", "taniotoshi|Tani Otoshi", "sodetsurikomigoshi|Sode Tsuri Komi Goshi"];
      } else if (s1.value == "11th") {

        var optionArray = ["|", "sumigaeshi | Sumi Gaeshi", "tomoenage|Tomoe Nage",];
      } else if (s1.value == "12th") {

        var optionArray = ["|", "teguruma | Te Guruma", "sotoakikomi|Soto Makikomi", "yokawakare|Yoka Wakare"];
      }

    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
      // console.log(pair[1])
    }

     $('#Court').on('change',function() {
        var currentThrow =  '';
         currentThrow += $('#Court option:selected').text();
        
        if (currentThrow == ' O Goshi'){
          $('.throwDetails').html('<h1>'+currentThrow+'</h1> <a href="https://www.youtube.com/watch?v=GDWtRtJ23cM" class="btn btn-info" role="button">'+currentThrow+'</a><p>Use this throw in ...</p>')
        }
        else{
          if (currentThrow == 'Uki Goshi'){
          $('.throwDetails').html('<h1>'+currentThrow+'</h1> <a href="https://www.youtube.com/watch?v=3Fklhya3iu4 class="btn btn-info" role="button">'+currentThrow+'</a><p>Use this throw in ...</p>')
        }
        else{
          console.log('Nope');
        }

     }
     })

  }