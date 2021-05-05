
function livebutt(org_id){
	v = org_id.replace('_22', '');
	id = org_id.replace('_tips_22', '').replace('_stream_22', '').replace('_facts_22', '').replace('_score_22', '').replace('_preview_22', '');
	if (!document.getElementById(v).classList.contains('active')) {
		
    try{document.getElementById(id+'_tips_22').classList.remove('selected');}catch(err){}
    try{document.getElementById(id+'_facts_22').classList.remove('selected');}catch(err){}
    try{document.getElementById(id+'_stream_22').classList.remove('selected');}catch(err){}
    try{document.getElementById(id+'_score_22').classList.remove('selected');}catch(err){}
    try{document.getElementById(id+'_preview_22').classList.remove('selected');}catch(err){}
    document.getElementById(id+'_tips').classList.remove('show');
    document.getElementById(id+'_facts').classList.remove('show');
    document.getElementById(id+'_stream').classList.remove('show');
    document.getElementById(id+'_score').classList.remove('show');
    document.getElementById(id+'_preview').classList.remove('show');

    document.getElementById(org_id).classList.add('selected');
    document.getElementById(v).classList.add('show');
	}
}
  setTimeout(score_update, 1000);   //update scroe
  setInterval(time_update, 1000);   //update timers
  
  function  time_update(){
    var divs = document.querySelectorAll('[id^=livegame]');
    [].forEach.call(divs, function(div) {
      var id =  div.id.split('||')[1];
      var Time =  div.id.split('||')[3];

      var now = new Date();
      let start = new Date(0); 
      start.setUTCSeconds(Time);

      var minutes = Math.floor(((now.getTime() - start.getTime()) / 1000 / 60));      
      document.getElementById(id+'-timer').innerHTML = 'Live ' + minutes + '\'';

    });
  }

  function returnscore(score,id) {
    try{
       if(score.indexOf(',') > -1){
        var ht_h = parseInt(score.split(',')[0].split('-')[0]);
          var ht_a = parseInt(score.split(',')[0].split('-')[1]);
          var ft_h = parseInt(score.split(',')[1].split('-')[0]);
          var ft_a = parseInt(score.split(',')[1].split('-')[1]);

          var second = (ht_h + ft_h) + '-' + (ht_a + ft_a);

          var first = score.split(',')[0];
          document.getElementById(id+'-htscore').innerHTML = '('+first+')';
          document.getElementById(id+'-ftscore').innerHTML = second;
       } else{
          document.getElementById(id+'-ftscore').innerHTML = score;
       }
      }catch (err) {return ''; }
  }

  function score_update() {
    var now = new Date();
    var dd = now.getDate();
    if(dd.toString().length ==1){dd = '0'+dd; }
    var mm = now.getMonth()+1;
    if(mm.toString().length ==1){mm = '0'+mm; }
    var yyyy = now.getFullYear();
    firebase.database().ref('Live_preds/'+yyyy+'-'+mm+'-'+dd+'/').on('child_changed', (snapshot) => {
       const data = snapshot.val();
       debugger
       returnscore(data.score,data.ID);
    });
  }
