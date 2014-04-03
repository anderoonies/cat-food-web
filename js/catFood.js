jQuery(document).ready(function ($) {
        $('#tabs').tab();
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
        document.getElementById('eqtime').innerHTML="Equivalencies: $5.00";
    }
    else if (1005 < current_time && current_time <= 1170) {
        document.getElementById('eqtime').innerHTML="Equivalencies: $9.00";
    }
    else
        document.getElementById('eqtime').innerHTML="Equivalencies: $7.00";
};
    

    
function between(x, min, max) {
    return x >= min && x <= max;
};


function isOpen(){
    $('.progress-bar').each(function(){
        $id=$(this).attr('id');
        for (var i=0; i<times[today.getDay()][$id].length;i++){ 
             if (between(current_time, times[today.getDay()][$id][i][0] , times[today.getDay()][$id][i][1])) {
                 $time_percent=100*(times[today.getDay()][$id][i][1] - current_time)/(times[today.getDay()][$id][i][1] - times[today.getDay()][$id][i][0]);
                 hours=((Math.floor((times[today.getDay()][$id][i][1])/60)%24)%12).toString();
                 minutes=((times[today.getDay()][$id][i][1])%60).toString();
                 if (minutes.length==1){
                     minutes += 0;
                 }
                 $time_left=hours + ':' + minutes;
                 $(this).attr({
                     "style" : 'width: ' + $time_percent + '100%;',
                     "aria-valuenow" : $time_percent,
                 }).addClass(' progress-bar-success');
                 $('#'+$id).find('.hidden-xs').append('closes at ' + $time_left);
                 break;
             }
        }
    });
    
    
    $('.progress-bar').each(function(){
        if (!$( this ).hasClass('progress-bar-success')) {
            $(this).attr({
                "style": 'width: 100%;',
                "aria-valuenow": '100',
            }).addClass('progress-bar-danger');
            $id=$(this).attr('id');
            for (var i=0; i<times[today.getDay()][$id].length;i++){
                if (current_time<times[today.getDay()][$id][i][0]){
                    hours=((Math.floor((times[today.getDay()][$id][i][0])/60)%24)%12).toString();
                    minutes=((times[today.getDay()][$id][i][0])%60).toString();
                    if (minutes.length==1){
                        minutes += 0;
                    }
                    
                    $time_until=hours + ':' + minutes;
                    $('#'+$id).find('.hidden-xs').append(' opens at ' + $time_until);
                    break;
                }
            $('#'+$id).find('.hidden-xs').append(' is closed for the day ');
            break;
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
        "HinmanC" : [[660,1439]],
        "PlexC" : [[660,1439]],
        "WillardC" : [[0,0]],
        "Willies" : [[660,900]],
        "Paws" : [[660,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[720,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[600,1425]],
        "Frontera" : [[0,0]]
    },

    1 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1439]],
        "PlexC" : [[450,1439]],
        "WillardC" : [[675,795],[1005,1439],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]]
    },

    2 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1439]],
        "PlexC" : [[450,1439]],
        "WillardC" : [[675,795],[1005,1439],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]]
    },

    3 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1439]],
        "PlexC" : [[450,1439]],
        "WillardC" : [[675,795],[1005,1439],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]]
    }, 

    4 : {
        "Hinman" : [[450,585],[645,1200]],
        "Allison" : [[450,585],[675,795],[1005,1140]],
        "Elder" : [[675,795],[1005,1140]],
        "PlexEast" : [[645,795],[1005,1200]],
        "PlexWest" : [[450,645],[705,1005],[1035,1170],[1200,1410]],
        "Sargent" : [[450,645],[645,1200]],
        "Willard" : [[675,795],[1005,1140]],
        "HinmanC" : [[450,1439]],
        "PlexC" : [[450,1439]],
        "WillardC" : [[675,795],[1005,1439],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1380]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1425]],
        "Pizza" : [[660,1380]],
        "Norbucks" : [[480,1425]],
        "Frontera" : [[660,1140]]
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
        "WillardC" : [[675,795],[1005,1439],[0,120]],
        "Willies" : [[660,900]],
        "Paws" : [[480,1260]],
        "Subway" : [[660,1260]],
        "DDonuts" : [[480,1140]],
        "Pizza" : [[660,1260]],
        "Norbucks" : [[480,1260]],
        "Frontera" : [[660,1140]]
        
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
        "Frontera" : [[660,900]]
    }
}

    
            
