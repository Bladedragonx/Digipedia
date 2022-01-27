const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('digimon');
var statsdigimon = '';
var digivolutions = '';
$(document).ready(function(){
	$.get( "data/digimon.json", function(data) {
        if(myParam-1 >= 0){
            statsdigimon += '<div class="digimon-nameid"><p>'+ data[myParam-1].Name + ' N:' + data[myParam-1].id +'</p></div>';
            statsdigimon += '<div class="digimon-img"><img src="https://digimon.shadowsmith.com/img/'+ data[myParam-1].Name.toLowerCase() + '.jpg" alt="'+data[myParam-1].Name+'"></div>';
            digivolutions += '<ul class="'+data[myParam-1].Level+'">';
            digivolutions += '<li><p><a href="digipedia.html?digimon='+data[myParam-1].id+'"><img src="https://digimon.shadowsmith.com/img/'+ data[myParam-1].Name.toLowerCase() + '.jpg" alt="'+data[myParam-1].Name+'"><br>'+ data[myParam-1].Name + ' N:' + data[myParam-1].id +'</a></p></li>';
            digivolutions += '</ul>';
            console.log(data[myParam-1].Digivolutions.length);
            if(data[myParam-1].Digivolutions.length > 0){
                digivolutions += '<span class="material-icons-outlined">arrow_forward_ios</span>';
                switch(data[myParam-1].Level){
                    case 'Fresh' && 'inTraining':
                        digivolutions += '<ul class="Rookie">';
                        break;
                    case 'Rookie':
                        digivolutions += '<ul class="Champion">';
                        break;
                    case 'Champion':
                        digivolutions += '<ul class="Ultimate">';
                        break;
                    case 'Ultimate':
                        digivolutions += '<ul class="Mega">';
                        break;
                }
                for(let value of data[myParam-1].Digivolutions){
                    digivolutions += '<li><a href="digipedia.html?digimon='+data[value-1].id+'"><img src="https://digimon.shadowsmith.com/img/'+ data[value-1].Name.toLowerCase() + '.jpg" alt="'+data[value-1].Name+'"></a><p>'+ data[value-1].Name + ' N:' + data[value-1].id +'</p></li>';
                }
                digivolutions += '</ul>';
            }
            digivolutions += '</ul>';
            $('.digigmon-stats').html(statsdigimon);
            $('.digivolutions').html(digivolutions);
        }else{
            alert("Digimon não Encontrado");
        }
	});
});