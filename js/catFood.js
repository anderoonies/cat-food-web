jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });

$(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

var today = new Date();
var zero_hour = new Date();
zero_hour.setHours(0);
zero_hour.setMinutes(0);
zero_hour.setSeconds(0);
zero_hour.setMilliseconds(0);
var current_time = (today.getTime() - zero_hour.getTime()) / 1000 / 60;

function eqRate() {
    setTimeout("eqRate()", 1000);
    if (450 <= current_time && current_time <= 645) {
        $('.eqtime').html("Equivalencies: $5.00");
    }
    else if (1005 < current_time && current_time <= 1170) {
        $('.eqtime').html("Equivalencies: $9.00");
    }
    else
        $('.eqtime').html("Equivalencies: $7.00");
};
    

    
function between(x, min, max) {
    return x >= min && x <= max;
};


function isOpen(){
    $('.progress-bar').each(function(){
        $id=$(this).attr('id');
        for (var i=0; i<times[today.getDay()][$id].length;i++){ 
             if (between(current_time, times[today.getDay()][$id][i][0] , times[today.getDay()][$id][i][1])) { //if the current time is between op and close times
                 $time_percent=100*(times[today.getDay()][$id][i][1] - current_time)/(120); //generate the progress bar percent
                 hours=((Math.floor((times[today.getDay()][$id][i][1])/60)%24)%12).toString(); //generate strings for hours and minutes
                 minutes=((times[today.getDay()][$id][i][1])%60).toString();
                 if (minutes.length==1){ //handle the exception, somewhat crudely
                     minutes += 0;
                 }
                 $time_left=hours + ':' + minutes; //edit string
                 if ($time_left=='0:00'){ //handle the exception
                     $time_left='12:00'
                 }
                 $(this).attr({
                     "style" : 'width: ' + $time_percent + '100%;', //create the percent bar
                     "aria-valuenow" : $time_percent, 
                 }).addClass(' progress-bar-success'); //add percent bar
                 $('#'+$id).find('.hidden-xs').append(' closes at ' + $time_left); //add the 'closes at' value on browser only
                 if ((times[today.getDay()][$id][i][1] - current_time)<=20){ //determine if the time left warrants a warning bar
                    $(this).removeClass(' progress-bar-success').addClass(' progress-bar-warning');
                 };
                 break;
             }
        }
    });
    
    
    $('.progress-bar').each(function(){
        if (!($( this ).hasClass('progress-bar-success')||$(this).hasClass('progress-bar-warning'))) { //if there isn't an existing bar (another way of checking openness)
            $(this).attr({
                "style": 'width: 100%;',
                "aria-valuenow": '100',
            }).addClass('progress-bar-danger'); //create a red progress bar
            $id=$(this).attr('id');
            for (var i=0; i<times[today.getDay()][$id].length;i++){
                if (current_time<times[today.getDay()][$id][i][0]){
                    hours=((Math.floor((times[today.getDay()][$id][i][0])/60)%24)%12).toString();
                    minutes=((times[today.getDay()][$id][i][0])%60).toString();
                    if (minutes.length==1){
                        minutes += 0;
                    }
                    $time_until=hours + ':' + minutes;
                    $('#'+$id).find('.hidden-xs').append(' opens at ' + $time_until); //create and set the time left value
                    break;
                }
                else if (i==times[today.getDay()][$id].length-1){
                    $('#'+$id).find('.hidden-xs').append(' is closed for the day '); //if the dining hall is closed for the day 
                }
                
                else if (times[today.getDay()][$id][i][0]==0){
                    $('#'+$id).find('.hidden-xs').append(' is closed for the day '); //if the dining hall was never open today
                }
            }
        }
    });
};
    
     
var times = {
    0 : {
        "Hinman" : [[0,0]],
        "Allison" : [[660,780],[1005,1170]],
        "Elder" : [[0,0]],
        "PlexEast" : [[660,840],[1105,1140]],
        "PlexWest" : [[660,840],[1005,1170]],
        "Sargent" : [[660,840],[1005,1170]],
        "Willard" : [[0,0]],
        "HinmanC" : [[660,1440]],
        "PlexC" : [[660,1440]],
        "WillardC" : [[0,0]],
        "Willies" : [[660,900]],
        "Paws" : [[660,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[720,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[600,1425]],
        "Frontera" : [[0,0]],
        "Crowe": [[0,0]],
        "Einstein": [[0,0]],
        "Frans": [[1140,1440]],
        "Lisas": [[1,120],[720,1440]],
        "Plaza": [[1020,1440]],
        "TechXpress": [[0,0]]
    },

    1 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1440]],
        "PlexC" : [[450,1440]],
        "WillardC" : [[675,795],[1005,1440],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]],
        "Crowe": [[480,1020]],
        "Einstein": [[480,960]],
        "Frans": [[1,120],[1200,1440]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[510,1440]],
        "TechXpress": [[450,1110]]
    },

    2 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1440]],
        "PlexC" : [[450,1440]],
        "WillardC" : [[675,795],[1005,1440],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]],
        "Crowe": [[480,1020]],
        "Einstein": [[480,960]],
        "Frans": [[1,120],[1200,1440]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[510,1440]],
        "TechXpress": [[450,1110]]
    },

    3 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1440]],
        "PlexC" : [[450,1440]],
        "WillardC" : [[675,795],[1005,1440],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]],
        "Crowe": [[480,1020]],
        "Einstein": [[480,960]],
        "Frans": [[1,120],[1200,1440]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[510,1440]],
        "TechXpress": [[450,1110]]
    }, 

    4 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1440]],
        "PlexC" : [[450,1440]],
        "WillardC" : [[675,795],[1005,1440],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]],
        "Crowe": [[480,1020]],
        "Einstein": [[480,960]],
        "Frans": [[1,120],[1200,1440]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[510,1440]],
        "TechXpress": [[450,1110]]
    },

    5 : {
        "Hinman" : [[450,585],[645,1140]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1140]],
        "Sargent" : [[450,645],[645,1140]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1140]],
        "PlexC" : [[450,1140]],
        "WillardC" : [[675,795],[1005,1440],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1260]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1140]],
        "Pizza" : [[660,1260]],
        "Norbucks" : [[480,1260]],
        "Frontera" : [[660,1140]],
        "Crowe": [[480,900]],
        "Einstein": [[480,900]],
        "Frans": [[1,120]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[510,900]],
        "TechXpress": [[450,900]]
        
    },

    6 : {
        "Hinman" : [[0,0]],
        "Allison" : [[645,810],[1005,1170]],
        "Elder" : [[0,0]],
        "PlexEast" : [[645,810],[1005,1140]],
        "PlexWest" : [[450,585],[645,810],[1305,1140]],
        "Sargent" : [[450,585],[645,810]],
        "Willard" : [[0,0]],
        "HinmanC" : [[645,1140]],
        "PlexC" : [[450,1140]],
        "WillardC" : [[0,0]],
        "Willies" : [[0,0]],
        "Paws" : [[600,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[720,1140]],
        "Pizza" : [[600,1260]],
        "Norbucks" : [[540,1260]],
        "Frontera" : [[660,900]],
        "Crowe": [[0,0]],
        "Einstein": [[0,0]],
        "Frans": [[0,0]],
        "Lisas": [[1,120],[660,1440]],
        "Plaza": [[720,960]],
        "TechXpress": [[0,0]]
    }
}

    
            
