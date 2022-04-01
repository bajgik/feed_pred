let myChart;
  let button = 'wages';
  let total_data = [];

  function change_state(state){
      button = state;
      const dataset = [];
      for (let i = 0; i < total_data.length; ++i) {
        myChart.data.datasets[i].data = button == 'wages'? total_data[i].wage : (button == 'staff' ? total_data[i].staff : total_data[i].income );
      }
      myChart.update();

      document.getElementById('wages_butt').classList.remove('selec');
      document.getElementById('staff_butt').classList.remove('selec');
      document.getElementById('income_butt').classList.remove('selec');
      document.getElementById(state+'_butt').classList.add('selec');
    }

    //--------sorting---------------
    var getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }

    var comparer = function(idx, asc) { 
        return function(a, b) { 
            return function(v1, v2) {
                  v1 = (v1.replace(/,/g,''));
                v2 =  (v2.replace(/,/g,''));
                  if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2))
                    { 
                      return v1 - v2 }
                    else{
                      return  v1.toString().localeCompare(v2);
                    }
            }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
        }
    };
    Array.prototype.slice.call(document.querySelectorAll('th')).forEach(function(th) { th.addEventListener('click', function() {
            var table = th.parentNode
            while(table.tagName.toUpperCase() != 'TABLE') table = table.parentNode;
            Array.prototype.slice.call(table.querySelectorAll('tr:nth-child(n+2)'))
                .sort(comparer(Array.prototype.slice.call(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                .forEach(function(tr) { table.appendChild(tr) });
        })
    });


    const labels = [
        '2018/19',
        '2019/20',
        '2020/21',
      ];

      total_data.push({name:"Arsenal", staff:[707,694,624], wage:[230463000,227984000,239830000], income:[69342000,83298000,5137000], color:'#fe0002'});
      total_data.push({name:"Aston Villa", staff:[NaN,658,663], wage:[NaN,8317500,70067112], income:[NaN,59467500,310342], color:'#480025'});
      total_data.push({name:"Brighton & Hove Albion", staff:[954,979,NaN], wage:[100581000,101870000,NaN], income:[18537000,13513000,NaN], color:'#0054a6'});
      total_data.push({name:"Burnley", staff:[255,251,NaN], wage:[86619000,100094000,NaN], income:[6323000,4599000,NaN], color:'#6a003a'});
      total_data.push({name:"Chelsea", staff:[409,399,417], wage:[262795000,259450000,309080000], income:[64761000,53211000,7178000], color:'#0a4595'});
      total_data.push({name:"Crystal Palace", staff:[236,279,NaN], wage:[119295000,132643000,NaN], income:[10602000,8574000,NaN], color:'#eb302e'});
      total_data.push({name:"Everton", staff:[456,452,NaN], wage:[160000000,164800000,NaN], income:[14200000,11900000,NaN], color:'#00369c'});
      total_data.push({name:"Fulham", staff:[273,NaN,NaN], wage:[92591000,NaN,NaN], income:[10681000,NaN,NaN], color:'#00000'});
      total_data.push({name:"Leeds United", staff:[NaN,NaN,NaN], wage:[NaN,NaN,NaN], income:[NaN,NaN,NaN], color:'#00000'});
      total_data.push({name:"Leicester City", staff:[320,363,435], wage:[149512000,157479000,192088000], income:[14686000,13081000,552000], color:'#273e8a'});
      total_data.push({name:"Liverpool", staff:[853,880,964], wage:[309917000,325572000,314354000], income:[84208000,70854000,3636000], color:'#e31b23'});
      total_data.push({name:"Manchester City", staff:[463,477,509], wage:[315527000,351412000,354689000], income:[55009000,41694000,732000], color:'#6caee0'});
      total_data.push({name:"Manchester United", staff:[940,992,983], wage:[332356000,284029000,322600000], income:[110819000,89794000,7097000], color:'#d81920'});
      total_data.push({name:"Newcastle United", staff:[274,292,NaN], wage:[96798000,121146000,NaN], income:[24846000,17443000,NaN], color:'#383838'});
      total_data.push({name:"Sheffield United", staff:[NaN,238,NaN], wage:[NaN,77885823,NaN], income:[NaN,6669857,NaN], color:'#ed1c24'});
      total_data.push({name:"Southampton", staff:[385,385,NaN], wage:[109785000,111444000,NaN], income:[16748000,6669857,NaN], color:'#d71920'});
      total_data.push({name:"Tottenham Hotspur", staff:[461,526,541], wage:[175013000,177752000,210085000], income:[92500000,94100000,1900000], color:'#00000'});
      total_data.push({name:"West Bromwich Albion", staff:[NaN,NaN,NaN], wage:[NaN,NaN,NaN], income:[NaN,NaN,NaN], color:'#00000'});
      total_data.push({name:"West Ham United", staff:[542,582,652], wage:[135796000,129949000,128451000], income:[27131000,22431000,275000], color:'#7d2c3b'});
      total_data.push({name:"Wolverhampton Wanderers", staff:[365,380,379], wage:[92131000,94251000,138776000], income:[11539000,12703000,144000], color:'#f9a01b'});

      const dataset = [];
      for (let i = 0; i < total_data.length; ++i) {
        dataset.push({ label: total_data[i].name, backgroundColor: total_data[i].color,  borderColor: total_data[i].color, data: button == 'wages'? total_data[i].wage : (button == 'staff' ? total_data[i].staff : total_data[i].income ), hidden: i < 1 ? false : true });
      }

      const data = {
        labels: labels, //x axis
        datasets: dataset
      };

      const config = {
        type: 'line',
        data: data,
        options: {}
      };

      myChart = new Chart(
        document.getElementById('myChart'), config
      );

    //--------drag to scroll horizontal--------------
    const slider=document.querySelector("#scroll1");let startX,scrollLeft,mouseDown=!1,startDragging=function(e){mouseDown=!0,startX=e.pageX-slider.offsetLeft,scrollLeft=slider.scrollLeft},stopDragging=function(e){mouseDown=!1};slider.addEventListener("mousemove",e=>{if(e.preventDefault(),!mouseDown)return;const t=e.pageX-slider.offsetLeft-startX;slider.scrollLeft=scrollLeft-t}),slider.addEventListener("mousedown",startDragging,!1),slider.addEventListener("mouseup",stopDragging,!1),slider.addEventListener("mouseleave",stopDragging,!1);
    const slider2=document.querySelector("#scroll2");let startX2,scrollLeft2,mouseDown2=!1,startDragging2=function(e){mouseDown2=!0,startX2=e.pageX-slider2.offsetLeft,scrollLeft2=slider2.scrollLeft},stopDragging2=function(e){mouseDown2=!1};slider2.addEventListener("mousemove",e=>{if(e.preventDefault(),!mouseDown2)return;const t=e.pageX-slider2.offsetLeft-startX2;slider2.scrollLeft=scrollLeft2-t}),slider2.addEventListener("mousedown",startDragging2,!1),slider2.addEventListener("mouseup",stopDragging2,!1),slider2.addEventListener("mouseleave",stopDragging2,!1);
    const slider3=document.querySelector("#scroll3");let startX3,scrollLeft3,mouseDown3=!1,startDragging3=function(e){mouseDown3=!0,startX3=e.pageX-slider3.offsetLeft,scrollLeft3=slider3.scrollLeft},stopDragging3=function(e){mouseDown3=!1};slider3.addEventListener("mousemove",e=>{if(e.preventDefault(),!mouseDown3)return;const t=e.pageX-slider3.offsetLeft-startX3;slider3.scrollLeft=scrollLeft3-t}),slider3.addEventListener("mousedown",startDragging3,!1),slider3.addEventListener("mouseup",stopDragging3,!1),slider3.addEventListener("mouseleave",stopDragging3,!1);
