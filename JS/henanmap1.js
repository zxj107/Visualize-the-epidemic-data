var myChart1 = echarts.init(document.querySelector('#henanmap1'))
      // fetch xmlhttprequest
      // fetchfetch(请求url)不需要引入任何的文件
      fetch('data.json')
        .then(res => res.json()) // 把可读数据流转为json格式
        .then(res => {
          console.log(res) // 获取到的疫情数据
          var gethubei = res.getAreaStat[19].cities
          
          // 将接口返回的数据进行处理 转为echarts认可的数据
          var filterData = []
          console.log(filterData)
          gethubei.forEach(item => {
            filterData.push({
              name: item.cityName,
              value:item.confirmedCount
            })          })        
        myChart1.setOption({
            title:{
                text:'累计确诊病例'
            },
            tooltip: {
                    formatter:function(params){
                        return `地区：${params.name}<br/>累计确诊：${params.value || 0}人<br/>`
                    }//数据格式化
                },
            visualMap: [
              {
                type: 'piecewise', // continuous连续的 piecewise分段
                pieces: [
                  { gte: 10000 }, // (10000, Infinity]
                  { gte: 1000, lte: 9999 }, // (1000, 9999]
                  { gte: 100, lte: 999 }, // (100, 999]
                  { gte: 10, lte: 99 }, // (10, 99]
                  { gte: 0, lte: 9 }, // (0, 9]
                  {value:0}
                ],
                inRange: {
                   color: ['#ffffff','#fdebcf', '#f59e83', '#e55a4e', '#cb2a2f', '#811c24']
                }
              }
            ],
            geo: {
                map: '河南',
                  mapType: 'province',
                roam: false,
                zoom:0.89,
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '确诊人数',
                    type: 'map',
                    geoIndex: 0,
                    data:filterData
              //      data:filterData
                }
            ]
        })
      })