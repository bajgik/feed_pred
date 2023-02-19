 // https://cdn.jsdelivr.net/gh/bajgik/feed_pred@main/pred.js
// https://github.com/bajgik/feed_pred/blob/main/pred.js
// https://purge.jsdelivr.net/gh/bajgik/feed_pred@main/pred.js 



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
    try{document.getElementById(id+'_score').classList.remove('show');}catch(err){}
    document.getElementById(id+'_preview').classList.remove('show');

    document.getElementById(org_id).classList.add('selected');
    document.getElementById(v).classList.add('show');
	}
}
  setTimeout(score_update, 10000);   //update scroe
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
      
      if(minutes < 0){
      document.getElementById(id+'-timer').innerHTML = 'starting';
      } else if(minutes > 46 && minutes < 60){
        document.getElementById(id+'-timer').innerHTML = 'HT';
      }  else if(minutes > 108){
      try{document.querySelectorAll('[id^="livegame||'+id+'"]')[0].style.display = "none";}catch(err){}
      }else if(minutes > 106){
        document.getElementById(id+'-timer').innerHTML = 'ending';
      }  else if(minutes < 46){
        document.getElementById(id+'-timer').innerHTML = minutes + '\'';
      } else if(minutes > 60){
        document.getElementById(id+'-timer').innerHTML = minutes - 15 + '\'';
      }  else{
        document.getElementById(id+'-timer').innerHTML = minutes + '\'';
      }

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
          //document.getElementById(id+'-htscore').innerHTML = '('+first+')';
          document.getElementById(id+'-ftscore1').innerHTML = second.split('-')[0];
          document.getElementById(id+'-ftscore2').innerHTML = second.split('-')[1];
       } else{
          document.getElementById(id+'-ftscore1').innerHTML = score.split('-')[0];
          document.getElementById(id+'-ftscore2').innerHTML = score.split('-')[1];
       }
      }catch (err) {return ''; }
  }
  function updatebets(data,id) {
      try{ document.getElementById(id+'-BHP').innerHTML = data.Bet_H.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BHO').innerHTML = data.Bet_H.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BAP').innerHTML = data.Bet_A.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BAO').innerHTML = data.Bet_A.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BDP').innerHTML = data.Bet_D.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BDO').innerHTML = data.Bet_D.split('||')[0]; }catch (err) { }

      try{ document.getElementById(id+'-BHDP').innerHTML = data.Bet_HD.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BHDO').innerHTML = data.Bet_HD.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BADP').innerHTML = data.Bet_AD.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BADO').innerHTML = data.Bet_AD.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BHAP').innerHTML = data.Bet_HA.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BHAO').innerHTML = data.Bet_HA.split('||')[0]; }catch (err) { }

      try{ document.getElementById(id+'-BO1P').innerHTML = data.Bet_O15.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BO1O').innerHTML = data.Bet_O15.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BU1P').innerHTML = data.Bet_U15.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BU1O').innerHTML = data.Bet_U15.split('||')[0]; }catch (err) { }

      try{ document.getElementById(id+'-BO2P').innerHTML = data.Bet_O25.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BO2O').innerHTML = data.Bet_O25.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BU2P').innerHTML = data.Bet_U25.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BU2O').innerHTML = data.Bet_U25.split('||')[0]; }catch (err) { }

      try{ document.getElementById(id+'-BO3P').innerHTML = data.Bet_O35.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BO3O').innerHTML = data.Bet_O35.split('||')[0]; }catch (err) { }
      try{ document.getElementById(id+'-BU3P').innerHTML = data.Bet_U35.split('||')[1]; }catch (err) { }
      try{ document.getElementById(id+'-BU3O').innerHTML = data.Bet_U35.split('||')[0]; }catch (err) { }
    
      var divs = document.querySelectorAll('[id^='+id+'-B]');
          [].forEach.call(divs, function(div) {
            document.getElementById(div.id).classList.remove('bg-warning');
          });

      try{     
        let fullarr = [];
          if(data.Bet_H != undefined){fullarr.push(data.Bet_H.split('||')[0])}
          if(data.Bet_A != undefined){fullarr.push(data.Bet_A.split('||')[0])}
          if(data.Bet_D != undefined){fullarr.push(data.Bet_D.split('||')[0])}
        const min_full = Math.min(...fullarr);
        if(data.Bet_H != undefined &&  min_full == data.Bet_H.split('||')[0]){
          document.getElementById(id+'-BH').classList.add('bg-warning');
        } else if(data.Bet_A != undefined &&  min_full == data.Bet_A.split('||')[0]){
          document.getElementById(id+'-BA').classList.add('bg-warning');
        } else if(data.Bet_D != undefined &&  min_full == data.Bet_D.split('||')[0]){
          document.getElementById(id+'-BD').classList.add('bg-warning');
        }
      }catch(err){}
      try{      
        let fullarr = [];
          if(data.Bet_HD != undefined){fullarr.push(data.Bet_HD.split('||')[0])}
          if(data.Bet_AD != undefined){fullarr.push(data.Bet_AD.split('||')[0])}
          if(data.Bet_HA != undefined){fullarr.push(data.Bet_HA.split('||')[0])}
        const min_full = Math.min(...fullarr);
        if(data.Bet_HD != undefined && min_full == data.Bet_HD.split('||')[0]){
          document.getElementById(id+'-BHD').classList.add('bg-warning');
        } else if(data.Bet_AD != undefined && min_full == data.Bet_AD.split('||')[0]){
          document.getElementById(id+'-BAD').classList.add('bg-warning');
        } else if(data.Bet_HA != undefined && min_full == data.Bet_HA.split('||')[0]){
          document.getElementById(id+'-BHA').classList.add('bg-warning');
        }
      }catch(err){}
      
      try{      
        let fullarr = [];
          if(data.Bet_O != undefined){fullarr.push(data.Bet_O.split('||')[0])}
          if(data.Bet_U != undefined){fullarr.push(data.Bet_U.split('||')[0])}
        const min_full = Math.min(...fullarr);
        if(data.Bet_O != undefined && min_full == data.Bet_O.split('||')[0]){
          document.getElementById(id+'-BO1').classList.add('bg-warning');
        } else if(data.Bet_U != undefined && min_full == data.Bet_U.split('||')[0]){
          document.getElementById(id+'-BU1').classList.add('bg-warning');
        }
      }catch(err){}
     
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
       returnscore(data.score,data.ID);
       updatebets(data,data.ID);
    });
  }
