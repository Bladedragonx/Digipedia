var dadosjSon = '';
$(document).ready(function(){
	$.get( "data/digimon.json", function(data) {
        for(var i = 0; i < data.length; i++){
            dadosjSon += '<a href="digipedia.html?digimon='+data[i].id+'"><div class="card"><img src="https://digimon.shadowsmith.com/img/'+ data[i].Name.toLowerCase() + '.jpg" alt="'+data[i].Name+'"><p class="digimon-id">N: '+ data[i].id +'</p><p class="digimon-name">'+ data[i].Name +'</p></div></a>';
        }
        $('.card-deck').html(dadosjSon);
	});
});