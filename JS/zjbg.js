  function myFunction() {
      var x,xyqz,ljqz,sw,zy;
      var jishu=0;
       var myDate=new Array("1月19日","1月20日","1月21日","1月22日","1月23日","1月24日","1月25日","1月26日","1月27日","1月28日","1月29日","1月30日","1月31日","2月1日","2月2日","2月3日","2月4日","2月5日","2月6日","2月7日","2月8日","2月9日","2月10日","2月11日","2月12日","2月13日","2月14日","2月15日","2月16日","2月17日","2月18日","2月19日","2月20日","2月21日","2月22日","2月23日","2月24日","2月25日","2月26日");
      var xyqzs=new Array(0,0,5,10,42,61,103,127,172,293,424,528,584,638,688,781,832,873,908,921,902,891,867,852,818,788,753,730,701,658,629,566,555,510,475,439,410,390,323);
      var ljqzs=new Array(0,0,5,10,43,62,104,128,173,296,428,537,599,661,724,829,895,954,1006,1048,1075,1092,1117,1131,1145,1155,1162,1167,1171,1172,1173,1175,1203,1205,1205,1205,1205,1205,1205);
      var sws=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1);
      var zys=new Array(0,0,0,0,1,1,1,1,1,3,4,9,15,23,36,48,63,81,98,127,173,201,250,279,327,367,409,437,470,514,544,609,647,694,729,765,794,814,881);
    x = document.getElementById("inputdate").value;
   for(var i=0;i<myDate.length;i++){
    if(x==myDate[i]){
      jishu++;
      xyqz=xyqzs[i];
      ljqz=ljqzs[i];
      sw=sws[i];
      zy=zys[i];
    document.getElementById("现有确诊病例").innerHTML = xyqz;
    document.getElementById("累计确诊病例").innerHTML = ljqz;
    document.getElementById("死亡病例").innerHTML = sw;
    document.getElementById("治愈病例").innerHTML = zy;

    }
   }
   if(jishu==0){
    alert("输入内容不符合要求");
   }  
}