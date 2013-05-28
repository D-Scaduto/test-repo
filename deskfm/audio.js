

  var audio_on = false;
  var max_channel = 10;
  var key_toggler=false;



function  play_sound(s,n)  {
 
  for (a=0;a<audiochannels.length;a++) { 
     thistime = new Date();
      if (audiochannels[a]['finished'] < thistime.getTime()) {
 //         audiochannels[a]['finished'] = thistime.getTime() + pobj.duration*1000;
           audiochannels[a]['finished'] = thistime.getTime() + 1000;
          audiochannels[a]['channel'].src = 'music/'+s+'/'+s+n+'.ogg';     
          audiochannels[a]['channel'].load();    
            audiochannels[a]['channel'].volume=.2;    
         audiochannels[a]['channel'].play(); 
         break;   
      }
   }

}



function toggle_audio() {
  var tmpsrc = "";
  if (audio_on == true) {
     audio_on = false;
      tmpsrc = 'deskfm/images/random/spkr-a.jpg'; 
  } else {
     audio_on = true;
     tmpsrc = 'deskfm/images/random/spkr-e.jpg'; 
  }

  if (document.getElementById('audiopic') != null) {
      document.getElementById('audiopic').src=tmpsrc; 
  }
 
}


//	tmpstr=tmpstr+"<tr>";
//      tmpstr=tmpstr+"<td id='speaker_spot' onclick='toggle_audio();' >"; 
//         if (audio_on == true) {
//           tmpsrc = 'deskfm/images/random/speaker-hi.jpg'; 
//         } else {
//           tmpsrc = 'deskfm/images/random/speaker-no.jpg'; 
//         }
// 	tmpstr=tmpstr+"<img id='speaker_img' src='"+tmpsrc+"' width='60px' >"; 
//        tmpstr=tmpstr+"</td>";
//        tmpstr=tmpstr+"</tr>";


