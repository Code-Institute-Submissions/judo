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
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/GDWtRtJ23cM" frameborder="0" allowfullscreen></iframe></a>')
        }

        else if (currentThrow == 'Uki Goshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/dFXK9plNIss" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        }
        else if (currentThrow == 'Ko Uchi Gari'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/6fue1B1eeEU" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        }

        else if (currentThrow == ' Uchi Gari'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/6OxoWzpwezo" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        }

        else if (currentThrow == ' Tai Otoshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/SGHQrj09O-g" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        } 
        else if (currentThrow == 'Ippon Seoi Nage'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/d8p_9v0z4Vo" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        }
        else if (currentThrow == 'Morote Seoi Nage'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/8OlVomIEq7k"" frameborder="0" allowfullscreen></iframe>'+currentThrow+'</a><p text-align= "center" >Use this throw in ...<')
        }
        else if (currentThrow == ' Ko Soto Gari'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/jkH26994RQ8" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Ko Soto Gake'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/QpE9TREP9ys" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'O Soto Guruma'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/Ao_b43xexzA" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' O Guruma'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/HAuCuneVir0" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Ashi Guruma'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/g5Zr3tko09I" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Harai Goshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/p0siU36PPl4" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' Hane Goshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/8uMpScY5cGs" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Uci Mata'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/MpGipYUGWdw" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' De Ashi Barai'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/VFgPK3l5d9U" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Okuri Ashi Barai'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/zUlBk10DAgM" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' Sasae Tsuri Komi Ashi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/H8imPoRAz9Y" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Hiza Guruma'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/VDsiBURKj-s" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' Ushiro Goshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/IUXwnGUlHtw" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Tani Otoshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/2nC1O0pKQEQ" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Sode Tsuri Komi Goshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/v1fsnjDwLDo" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' Sumi Gaeshi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/kod5QHdmE7E" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Tomoe Nage'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/pwc8xccqgTU" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == ' Te Guruma'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/IWq8uU0SKKU" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Soto Makikomi'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/QWa4EjZWGV8" frameborder="0" allowfullscreen></iframe>')
        }
        else if (currentThrow == 'Yoka Wakare'){
          $('.throwDetails').html('<iframe width="360" height="250" src="https://www.youtube.com/embed/aqXHugSvT18" frameborder="0" allowfullscreen></iframe>')
        }

        
        



        else{
          console.log('Nope');
        }

     })

  }

  // $(document).ready(function() {
  // $('#play-video').on('click', function(ev) {
 
  //   $("#video")[0].src += "&autoplay=1";
  //   ev.preventDefault();
 
//   });
// });