var startcard = 0;
function deckLoad(cardvalue){
    var dadosjSon = $('.card-deck').html();
    $(document).ready(function(){
        $.get( "data/digimon.json", function(data) {
            console.log(data.length);
            if(startcard + cardvalue > data.length) {
                cardvalue = data.length - startcard;
            }
            for(var i = 0; i < cardvalue; i++){
                dadosjSon += '<a href="digipedia.html?digimon='+data[i+startcard].id+'"><div class="card"><img src="https://digimon.shadowsmith.com/img/'+ data[i+startcard].Name.toLowerCase() + '.jpg" alt="'+data[i+startcard].Name+'"><p class="digimon-id">N: '+ data[i+startcard].id +'</p><p class="digimon-name">'+ data[i+startcard].Name +'</p></div></a>';
            }
            startcard += cardvalue
            $('.card-deck').html(dadosjSon);
        });
    });
}
