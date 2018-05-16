$(document).ready(function() {
    let allianceNames = ['Jaina Proudmoore', 'King Anduin Wrynn', 'Gelbin Mekkatorque',
     'Turalyon', 'Malfurion Stormrage', 'Brann Bronzebeard'];
    
     let hordeNames = ['Garrosh Hellscream', 'Sylvanas ', 'Vol\'jin', 'Jastor Gallywix', 'Cairne Bloodhoof',
         'Ji Firepaw', 'Hamuul Runetotem'];
        
         function randName(array) {
                let randArrayName = array[Math.floor(Math.random() * array.length)];
                return randArrayName;
        }
        
        
         $("#alliance").click(function() {
                $("#name").html(randName(allianceNames));
      
        });
        $("#horde").click(function() {
                $("#name").html(randName(hordeNames));
            
    });
});

