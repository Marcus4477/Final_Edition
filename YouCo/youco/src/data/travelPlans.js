const travelPlans = {
  budget: {
    free: {
      transportation: {
        percentage: 0.4,
        type: '公共交通',
        details: ['公交车', '共享单车', '步行']
      },
      accommodation: {
        percentage: 0.3,
        type: '免费住宿',
        details: ['沙发客', '帐篷露营', '24小时便利店']
      },
      food: {
        percentage: 0.2,
        type: '经济美食',
        details: ['便利店', '小吃街', '早市夜市']
      },
      activities: {
        percentage: 0.1,
        type: '免费游览',
        details: ['公园', '博物馆', '城市徒步']
      }
    },
    low: {
      transportation: {
        percentage: 0.3,
        type: '经济型交通',
        details: ['公共交通', '共享单车', '拼车']
      },
      accommodation: {
        percentage: 0.3,
        type: '经济型住宿',
        details: ['青年旅舍', '经济型连锁酒店', '民宿']
      },
      food: {
        percentage: 0.2,
        type: '平价美食',
        details: ['当地小吃', '美食街', '大众餐厅']
      },
      activities: {
        percentage: 0.2,
        type: '基础游览',
        details: ['免费点', '公园', '步行街']
      }
    },
    medium: {
      transportation: {
        percentage: 0.3,
        type: '舒适型交通',
        details: ['高铁二等座', '出租车', '短途航班经济舱']
      },
      accommodation: {
        percentage: 0.3,
        type: '舒适型住宿',
        details: ['商务酒店', '精品民宿', '度假公寓']
      },
      food: {
        percentage: 0.2,
        type: '品质餐饮',
        details: ['特色餐厅', '海鲜市场', '网红店']
      },
      activities: {
        percentage: 0.2,
        type: '深度体验',
        details: ['热门景点', '主题公园', '当地体验']
      }
    },
    high: {
      transportation: {
        percentage: 0.3,
        type: '豪华型交通',
        details: ['高铁商务座', '专车接送', '头等舱']
      },
      accommodation: {
        percentage: 0.3,
        type: '豪华型住宿',
        details: ['五星级酒店', '豪华度假村', '特色酒店']
      },
      food: {
        percentage: 0.2,
        type: '高端餐饮',
        details: ['米其林餐厅', '私房菜', '特色美食']
      },
      activities: {
        percentage: 0.2,
        type: '尊享体验',
        details: ['私人导游', 'VIP体验', '高端娱乐']
      }
    }
  },
  destinations: {
    '北京': {
      free: {
        description: '零预算也能玩转北京！这份攻略带你体验最地道的北京免费景点和文化体验。',
        attractions: [
          {
            name: '天安门广场',
            price: 0,
            description: '世界最大城市广场，可观看升旗仪式，体验庄严时刻。',
            link: 'https://baike.baidu.com/item/天安门广场',
            bestTime: '日出前1小时（观看升旗）',
            tips: ['升旗仪式建议提前2小时到达', '请携带身份证']
          },
          {
            name: '国家博物馆',
            price: 0,
            description: '免费参观，了解中国历史文化，需要提前预约。',
            link: 'http://www.chnmuseum.cn',
            bestTime: '周二至周日 9:00-17:00',
            tips: ['需要提前网上预约', '周一闭馆']
          },
          {
            name: '奥林匹克公园',
            price: 0,
            description: '欣赏鸟巢、水立方等标志性建筑，体验奥运氛围。',
            link: 'http://www.bopac.gov.cn',
            bestTime: '傍晚',
            tips: ['建议傍晚前往，可以欣赏夜景', '周边有地铁站']
          }
        ],
        activities: [
          {
            name: '什刹海徒步',
            description: '体验老北京胡同文化',
            priceRange: '免费',
            bestTime: '傍晚',
            duration: '2-3小时',
            tips: ['建议傍晚前往，可以欣赏夕阳']
          },
          {
            name: '南锣鼓巷文化街',
            description: '感受老北京风情',
            priceRange: '免费',
            bestTime: '上午10点后',
            duration: '2-3小时',
            tips: ['周末人流量大', '建议工作日前往']
          }
        ],
        dining: [
          {
            name: '东华门夜市',
            description: '老北京小吃聚集地',
            averagePrice: '￥10-30/人',
            bestTime: '晚上17:00后',
            recommendations: ['豆汁', '煎饼果子', '炒肝'],
            tips: ['建议错峰用餐', '部分商家只收现金']
          },
          {
            name: '护国寺小吃街',
            description: '传统北京小吃',
            averagePrice: '￥15-40/人',
            bestTime: '午餐和晚餐时段',
            recommendations: ['护国寺豆腐脑', '卤煮'],
            tips: ['周末排队时间较长', '建议避开高峰期']
          }
        ],
        accommodation: {
          options: [
            {
              name: '北京国际青年旅舍',
              type: '青旅',
              price: '￥50起/晚',
              location: '西城区',
              features: ['24小时热水', '公共厨房', 'WiFi'],
              tips: ['需提前预订', '携带身份证']
            },
            {
              name: '如家快捷酒店',
              type: '经济连锁',
              price: '￥150起/晚',
              location: '地铁站附近',
              features: ['免费WiFi', '24小时前台', '空调'],
              tips: ['提供行李寄存', '可以开发票']
            }
          ],
          tips: [
            '建议提前3天预订',
            '携带身份证办理入住',
            '注意看退订政策',
            '选择地铁站附近的住宿'
          ]
        },
        tips: [
          '下载北京地铁APP，方便出行',
          '避开早晚高峰期乘坐地铁',
          '准备充足的饮用水',
          '关注免费开放的博物馆信息',
          '建议办理交通一卡通'
        ]
      },
      low: {
        description: '经济实惠的北京深度体验旅通过合理安排，让您最少的预算体验最地道的北京风情。',
        attractions: [
          {
            name: '博物院',
            price: 60,
            description: '世界上规模最大的宫殿建筑群，建议预留半天时间游览。',
            link: 'https://www.dpm.org.cn/Home.html'
          },
          {
            name: '八达岭长城',
            price: 40,
            description: '最受欢迎的长城段落，交通便利，适合半日游。',
            link: 'https://www.badaling.cn/'
          }
        ],
        activities: [
          {
            name: '什刹海划船',
            description: '体验老北京水乡风情',
            priceRange: '￥40-80/小时'
          },
          {
            name: '南锣鼓巷徒步',
            description: '探索老北京胡同文化',
            priceRange: '免费'
          }
        ],
        dining: [
          {
            name: '护国寺小吃',
            description: '百年老字号，品尝地道北京小吃',
            averagePrice: '￥30-50/人'
          }
        ],
        tips: [
          '建议购买一卡通节省交通费用',
          '景点门票建议提前网上预订',
          '避开节假日高峰期'
        ]
      },
      medium: {
        description: '舒适优质的北京文化之旅，体验传统与现代交融的首都魅力。',
        attractions: [
          {
            name: '故VIP',
            price: 400,
            description: '含专业导游讲解，参观珍宝馆等特殊展区。',
            link: 'https://www.dpm.org.cn/Special.html',
            bestTime: '预约时间',
            tips: ['供讲解器', '含快速通道']
          },
          {
            name: '颐和园深度游',
            price: 120,
            description: '含导游讲解和船游昆明湖服务。',
            link: 'https://www.summerpalace-china.com',
            bestTime: '上午9点后',
            tips: ['建议全天游览', '可选择园内餐厅用餐']
          },
          {
            name: '恭王府',
            price: 100,
            description: '代最奢华的亲王府邸。',
            link: 'http://www.pwf.com.cn',
            bestTime: '上午开放后',
            tips: ['建议请讲解', '可以体验茶文化']
          }
        ],
        activities: [
          {
            name: '茶艺体验',
            description: '在老字号茶馆体验中国茶道',
            priceRange: '￥200-300/人',
            bestTime: '下午',
            duration: '2小时',
            tips: ['可以购茶叶', '提供点心']
          },
          {
            name: '京剧表演',
            description: '兰芳大剧院专场演出',
            priceRange: '￥280-580/人',
            bestTime: '晚上7:30',
            duration: '2.5小时',
            tips: ['提供字幕', '可以提前订餐']
          }
        ],
        dining: [
          {
            name: '四季民福烤鸭',
            description: '高档烤鸭餐厅',
            averagePrice: '￥200-300/人',
            bestTime: '午餐或晚餐',
            recommendations: ['特色烤鸭', '宫廷菜', '创新菜品'],
            tips: ['需要提前预约', '有免费接送']
          },
          {
            name: '南府餐厅',
            description: '老字号京菜',
            averagePrice: '￥250-350/人',
            bestTime: '午餐或晚餐',
            recommendations: ['炒肝', '烧羊肉', '炸酱面'],
            tips: ['可以包间', '提供代客泊车']
          }
        ],
        accommodation: {
          options: [
            {
              name: '北京饭店',
              type: '四星级酒店',
              price: '￥800-1200/晚',
              location: '王府井商圈',
              features: ['健身房', '商务中心', '免费早餐'],
              tips: ['地理位置优越', '历史悠久']
            },
            {
              name: '新国贸饭店',
              type: '五星店',
              price: '1000-1500/晚',
              location: '国贸商圈',
              features: ['游泳池', 'SPA', '行政酒廊'],
              tips: ['靠近地铁', '服务一流']
            }
          ],
          tips: [
            '建议提前两周预订',
            '可要求接机服务',
            '认早餐类型',
            '查看停车服务'
          ]
        }
      },
      high: {
        description: '尊享奢华的北京私属之旅，专属定制服务让您尽享顶级体验。',
        attractions: [
          {
            name: '长城直升机游览',
            price: 2000,
            description: '空中俯瞰长城壮美景色，独特视角体验。',
            link: 'https://www.mutianyugreatwall.com/helicopter',
            bestTime: '预约时间',
            tips: ['需提前3天预约', '天气原因可能调整']
          },
          {
            name: '故宫珍宝馆私人导览',
            price: 1500,
            description: '专家讲解故宫珍藏，深入了解文物历史。',
            link: 'https://www.dpm.org.cn/Private.html',
            bestTime: '预约时间',
            tips: ['含VIP通道', '可定制路线']
          },
          {
            name: '颐和园皇家游船',
            price: 800,
            description: '独家包船游览昆明湖，体验皇家待遇。',
            link: 'https://www.summerpalace-china.com/vip',
            bestTime: '傍晚',
            tips: ['含下午茶', '专业摄影服务']
          }
        ],
        activities: [
          {
            name: '私人定制京剧表演',
            description: '梅兰芳大剧包观演',
            priceRange: '￥1000-2000/人',
            bestTime: '晚上',
            duration: '3小时',
            tips: ['含晚宴', '可与演员互动']
          },
          {
            name: '宫廷御厨私菜体验',
            description: '跟随御厨习制作宫廷菜',
            priceRange: '￥1500-2500/人',
            bestTime: '午餐',
            duration: '4小时',
            tips: ['含食材', '可带走成品']
          }
        ],
        dining: [
          {
            name: '京兆尹',
            description: '顶级私房菜',
            averagePrice: '￥1000-1500/人',
            bestTime: '预约时间',
            recommendations: ['宫廷菜', '创新菜品', '定制菜单'],
            tips: ['需提前一周预约', '可定制菜单']
          },
          {
            name: '柏悦酒店中餐厅',
            description: '米其林星级中餐厅',
            averagePrice: '￥800-1200/人',
            bestTime: '餐或晚餐',
            recommendations: ['季节限定菜品', '特色点心', '名贵酒水'],
            tips: ['提供免费代客泊车', '可要求特别餐位']
          }
        ],
        accommodation: {
          options: [
            {
              name: '北京瑰丽酒店',
              type: '奢华酒店',
              price: '￥3000-5000/晚',
              location: '国贸商圈',
              features: ['米其林餐厅', '豪华SPA', '管家服务'],
              tips: ['可安排专车接送', '提供管家服务']
            },
            {
              name: '阿曼颐和酒店',
              type: '顶级度假酒店',
              price: '￥4000-6000/晚',
              location: '颐和园附近',
              features: ['私人泳池', '中式园林', '24小时管家'],
              tips: ['独享园景', '私密性好']
            }
          ],
          tips: [
            '建议提前一个月预订',
            '可安排专车接送机',
            '提供私人管家服务',
            '可定制客房布置'
          ]
        }
      }
    },
    '上海': {
      free: {
        description: '零预算的都探索之旅感受上海的现代与传统交融。',
        attractions: [
          {
            name: '外滩',
            price: 0,
            description: '欣赏黄浦江两岸景色，感受上海十洋场风情。',
            link: 'https://baike.baidu.com/item/外滩',
            bestTime: '傍晚和夜晚',
            tips: ['建议夜晚观赏灯光秀', '周末人流量大', '建议地铁出行']
          },
          {
            name: '人民广场',
            price: 0,
            description: '上海市中心地标，周边汇集商圈和文化设施。',
            link: 'https://baike.baidu.com/item/上海人民广场',
            bestTime: '全天',
            tips: ['地铁枢纽站', '周边购物方便', '建议参观上海博物馆']
          },
          {
            name: '南京路步行街',
            price: 0,
            description: '中国第一商业街，百年商圈。',
            link: 'https://baike.baidu.com/item/南京路步行街',
            bestTime: '下午和晚',
            tips: ['景美', '小吃众多', '注意防扒']
          }
        ],
        activities: [
          {
            name: '田子坊艺术街',
            description: '石库门建筑改造的文艺街区',
            priceRange: '免费',
            bestTime: '下午2点',
            duration: '2-3小时',
            tips: ['合照', '店多', '议往']
          }
        ],
        dining: [
          {
            name: '城隍庙小吃街',
            description: '上海本地特色小吃聚集地',
            averagePrice: '￥30-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['生煎包', '南翔小笼', '蟹黄包'],
            tips: ['现金为主', '早上人少', '注意卫生']
          }
        ],
        accommodation: {
          options: [
            {
              name: '上海青旅舍',
              type: '青旅',
              price: '￥60-80/晚',
              location: '近地铁站',
              features: ['公共厨房', '免费WiFi', '行李寄存'],
              tips: ['提前预订', '准备证件', '床紧张']
            }
          ],
          tips: ['选择地铁沿线住宿', '提前预订', '注意安全']
        }
      },
      medium: {
        description: '舒适优质的上海文化之旅，体验现代与传统交融的魔都魅力。',
        attractions: [
          {
            name: '迪士尼乐园',
            price: 599,
            description: '亚洲最大的迪士尼主题乐园。',
            link: 'https://www.shanghaidisneyresort.com',
            bestTime: '开时间',
            tips: ['提前购票', '避开节假日', '准备晒']
          },
          {
            name: '上海中心观光厅',
            price: 180,
            description: '上海最高建筑，俯瞰整个上海。',
            link: 'https://www.shanghaitower.com',
            bestTime: '傍晚',
            tips: ['建议预订VIP通道', '天气晴朗时去', '可以享用下午茶']
          },
          {
            name: '世博文化公园',
            price: 160,
            description: '世博会遗址改建，现代艺术展示。',
            link: 'https://baike.baidu.com/item/世博文化公园',
            bestTime: '下午',
            tips: ['建筑设计独特', '适合拍照', '周边餐厅众多']
          }
        ],
        activities: [
          {
            name: '豫园购物',
            description: '传统商业区购物体验',
            priceRange: '￥500-1000',
            bestTime: '上午',
            duration: '3-4小时',
            tips: ['讲价技巧', '当地特产', '避开假货']
          }
        ],
        dining: [
          {
            name: '南翔馒头店',
            description: '百年老字号，著名小笼包',
            averagePrice: '￥100-150/人',
            bestTime: '早午餐',
            recommendations: ['蟹黄小笼', '特色点心', '本帮面'],
            tips: ['需要排队', '议避开饭点']
          }
        ],
        accommodation: {
          options: [
            {
              name: '上海万豪酒店',
              type: '商务酒店',
              price: '￥800-1200/晚',
              location: '市中心',
              features: ['健身房', '商务中心', '餐厅'],
              tips: ['提前预订', '会员优惠', '交通便利']
            }
          ],
          tips: ['选择圈位置', '关注惠活动', '提前订房']
        }
      },
      high: {
        description: '奢华尊享的上海之旅，感受顶级魔都生活。',
        attractions: [
          {
            name: '上海中心VIP观光',
            price: 1800,
            description: '上海最高建筑，尊享VIP观光体验。',
            link: 'https://www.shanghaitower.com',
            bestTime: '傍晚',
            tips: ['含VIP专属导览', '享用云端下午茶', '预约专属摄影师']
          },
          {
            name: '浦游览VIP游船',
            price: 3000,
            description: '私人定制游船体验，尽览黄浦江夜景。',
            link: 'https://www.pujiangcruise.com',
            bestTime: '傍晚夜晚',
            tips: ['含香槟晚宴', '专业摄影服务', '可定制行程']
          },
          {
            name: '东方艺术中心VIP包厢',
            price: 2500,
            description: '顶级艺术表演观赏体验。',
            link: 'https://www.shoac.com.cn',
            bestTime: '演出时间',
            tips: ['含VIP专车接送', '享用精致茶点', '专人导览服务']
          }
        ],
        activities: [
          {
            name: '私人定制购物体验',
            description: '奢侈品专属导购服务',
            priceRange: '￥10000起',
            bestTime: '全天',
            duration: '4-8小时',
            tips: ['专车接送', '私人导购', '预约制']
          }
        ],
        dining: [
          {
            name: '米其林三星餐厅',
            description: '顶级法式料理',
            averagePrice: '￥3000-5000/人',
            bestTime: '晚餐',
            recommendations: ['主厨特选套餐', '限量季节菜品', '珍藏名酒'],
            tips: ['提前一月预约', '着装要求严格', '可配专车接送']
          }
        ],
        accommodation: {
          options: [
            {
              name: '上海柏悦酒店',
              type: '奢华酒店',
              price: '￥5000-8000/晚',
              location: '陆家嘴',
              features: ['边泳池', '米其林厅', 'SPA中心'],
              tips: ['行政套房优选', '24小时管家', '专车接送']
            }
          ],
          tips: ['建议入住行政楼层', '预约SPA护理', '享用行政酒廊']
        }
      }
    },
    '广州': {
      free: {
        description: '零预算的广州文化探索之旅，体验岭南文化的独特魅力。',
        attractions: [
          {
            name: '越秀公园',
            price: 0,
            description: '广州最大的公园，拥有丰富的历史遗迹和自然景观。',
            link: 'https://baike.baidu.com/item/越秀公园',
            bestTime: '早上或傍晚',
            tips: ['可以爬山', '适合拍照', '注意防晒']
          },
          {
            name: '北京路步行街',
            price: 0,
            description: '广州的购物和文化中心，历史悠久。',
            link: 'https://baike.baidu.com/item/北京路步行街',
            bestTime: '全天',
            tips: ['适合购物', '品尝地道小吃', '人多注意安全']
          },
          {
            name: '广州图书',
            price: 0,
            description: '现代化的大型图书馆，提供丰富的阅读资源。',
            link: 'https://baike.baidu.com/item/广州图书馆',
            bestTime: '开放时间内',
            tips: ['适合阅读和学习', '可以预约参观', '享受宁静']
          },
          {
            name: '广州塔',
            price: 0,
            description: '广州的地标性建筑，提供城市全景。',
            link: 'https://baike.baidu.com/item/广州塔',
            bestTime: '傍晚',
            tips: ['夜景非常美', '适合拍照', '可能需要排队']
          },
          {
            name: '沙面岛',
            price: 0,
            description: '具有欧洲风情的历史街区，适合散步和拍照。',
            link: 'https://baike.baidu.com/item/沙面岛',
            bestTime: '全天',
            tips: ['建筑风格独特', '适合拍照', '可以品尝咖啡']
          }
        ],
        activities: [
          {
            name: '珠江夜游',
            description: '乘船欣赏珠江两岸的夜景。',
            priceRange: '免费',
            bestTime: '晚上',
            duration: '1-2小时',
            tips: ['带好相机', '穿暖', '提前找好观景位置']
          },
          {
            name: '广州城市探索步行',
            description: '步行探索广州的老城区，了解广州的历史和文化。',
            priceRange: '费',
            bestTime: '白',
            duration: '3-4小时',
            tips: ['穿适的', '准用水', '携带地图或使手机导']
          }
        ],
        dining: [
          {
            name: '地道街边小吃',
            description: '尝试广州的地道街边小吃，如肠粉、烧鹅等。',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['肠粉', '烧鹅', '叉烧包'],
            tips: ['注意卫生', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '广州青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物安全']
          }
        ]
      },
      low: {
        description: '经实惠的广州文化体验之旅，深入了解广州的历史与现代。',
        attractions: [
          {
            name: '白云山',
            price: 20,
            description: '广州著名的山岳景区，空气清新，视野开阔。',
            link: 'https://baike.baidu.com/item/白云山',
            bestTime: '早上',
            tips: ['适合登山', '带足水和食物', '穿舒适的鞋子']
          },
          {
            name: '陈家祠',
            price: 10,
            description: '展示岭南传统建筑艺术和木雕、砖雕的古建筑群。',
            link: 'https://baike.baidu.com/item/陈家祠',
            bestTime: '全天',
            tips: ['了解岭南文化', '适合拍照', '参观历史展览']
          },
          {
            name: '广州动物园',
            price: 20,
            description: '广州中心的大型动物园，拥有多种珍稀动物。',
            link: 'https://baike.baidu.com/item/广州动物园',
            bestTime: '全天',
            tips: ['适合家庭游', '可以近距离接触动物', '注意安全']
          },
          {
            name: '红砖厂当代艺术中心',
            price: 0,
            description: '展示当代艺术作品的文化艺术空间。',
            link: 'https://baike.baidu.com/item/红砖厂当代艺术中心',
            bestTime: '全天',
            tips: ['欣赏艺术作品', '适合文艺青年', '尔有艺术表']
          },
          {
            name: '广州海心沙',
            price: 0,
            description: '位于珠江中心的人工岛，举办各种大型活动。',
            link: 'https://baike.baidu.com/item/广州海沙',
            bestTime: '傍晚',
            tips: ['观看景', '参加节庆活动', '适合散步']
          }
        ],
        activities: [
          {
            name: '广州艺术博物馆参观',
            description: '参观广州艺术博物馆，欣赏各种艺术展览。',
            priceRange: '￥0-50/人',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['适合文化爱好者', '注意开放时间', '可能需排队购票']
          },
          {
            name: '广州历史文化街区游',
            description: '游览广州的历史文化街区，如西关屋、黄埔古港。',
            priceRange: '￥0-50/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['穿舒适的鞋子', '携带相机', '准备小费']
          }
        ],
        dining: [
          {
            name: '广州老字号餐厅',
            description: '在广州的老字号餐厅享用正宗的粤菜。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['白切鸡', '煲仔饭', '蒸鱼'],
            tips: ['提前预订', '尝试当地特色', '注意饮食卫生']
          }
        ],
        accommodation: [
          {
            name: '经济型酒店',
            type: '经济酒店',
            price: '￥200-300/晚',
            location: '近地铁站',
            features: ['免费WiFi', '空调', '24小时前台服务'],
            tips: ['查看用户评价', '比较价格', '注意退房时间']
          },
          {
            name: '广州客栈',
            type: '客栈',
            price: '￥150-250/晚',
            location: '老城区',
            features: ['地道的广州早餐', '亲切的服务', '文化氛围浓厚'],
            tips: ['体验地道广州生活', '预订高峰期可能需提前', '询问否包含早餐']
          }
        ]
      },
      medium: {
        description: '舒适的广州文化体验之旅，平衡成本与舒适度，深入体验广州的现代与传统。',
        attractions: [
          {
            name: '广州塔',
            price: 150,
            description: '登广的地标���建筑，俯瞰城市全景。',
            link: 'https://baike.baidu.com/item/广州塔',
            bestTime: '傍晚',
            tips: ['购买快速通行票', '傍晚观看城市夜景', '尝试塔上的旋转餐厅']
          },
          {
            name: '广州歌剧院',
            price: 200,
            description: '欣赏国内外顶级的表演艺术。',
            link: 'https://baike.baidu.com/item/广州歌剧院',
            bestTime: '根据演出时间',
            tips: ['提前预订门票', '着装正式', '演出结束后可在附近餐厅用餐']
          },
          {
            name: '广州博物馆',
            price: 50,
            description: '了解广州的历史与文化。',
            link: 'https://baike.baidu.com/item/广州博物馆',
            bestTime: '全天',
            tips: ['参加博物馆的导览服务', '适合家庭游', '注意开放时间']
          },
          {
            name: '珠江夜游',
            price: 180,
            description: '坐游船欣赏珠江两岸的夜景。',
            link: 'https://baike.baidu.com/item/珠江夜游',
            bestTime: '晚上',
            tips: ['选择带晚餐的游船', '提前预订', '带上相机']
          },
          {
            name: '广州科学中心',
            price: 100,
            description: '探索科技的奥秘，适合带小孩的家庭。',
            link: 'https://baike.baidu.com/item/广州科学中心',
            bestTime: '全天',
            tips: ['适合亲子活动', '可以体验科技互动展项', '留足够的游玩时间']
          }
        ],
        activities: [
          {
            name: '广州美食探索之旅',
            description: '跟随导游品尝广州的传统美食。',
            priceRange: '￥200-400/',
            bestTime: '全天',
            duration: '半天',
            tips: ['尝试糖水、云吞面、烧腊', '跟团游更省心', '穿着轻便']
          },
          {
            name: '州老城区文化游',
            description: '入广州老城区，探索其丰富的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['聘请当地导游', '穿舒适的鞋子', '准备相机记录美好瞬间']
          }
        ],
        dining: [
          {
            name: '广州名家餐厅',
            description: '在广州知名餐厅享用菜。',
            averagePrice: '￥300-500/人',
            bestTime: '午餐或餐',
            recommendations: ['蒸点心', '煲汤', '海鲜'],
            tips: ['提前预订', '尝试广州的传统糖水', '询问服务员推荐菜']
          }
        ],
        accommodation: [
          {
            name: '广州精品酒店',
            type: '精品酒店',
            price: '￥500-700/晚',
            location: '珠江新城',
            features: ['设计感装潢', '优质服务', '中心地'],
            tips: ['选择有景观的房间', '提前预订获取优惠', '享酒店提供的早餐']
          },
          {
            name: '广州商务酒店',
            type: '商务酒店',
            price: '￥400-600/晚',
            location: '天河区',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的广州文化体验之旅，受顶级的服务和设施，深体验广州的奢华与独特。',
        attractions: [
          {
            name: '广州塔顶级餐厅',
            price: 500,
            description: '在广州塔的顶级餐厅享用晚餐，同时俯瞰城市夜景。',
            link: 'https://baike.baidu.com/item/广州塔',
            bestTime: '晚餐时间',
            tips: ['提前预订窗边位置', '尝试特色鸡尾酒', '穿着正式']
          },
          {
            name: '广州歌剧院VIP包厢',
            price: 1000,
            description: '在广州歌剧院的VIP包厢内观看世界级演出。',
            link: 'https://baike.baidu.com/item/广州歌剧院',
            bestTime: '根据演出时间',
            tips: ['提前预订VIP票', '享受私人服务', '演出结束可参加明星见面会']
          },
          {
            name: '广州国际高尔夫俱乐部',
            price: 800,
            description: '在广州的顶级高尔夫俱乐部打高尔夫。',
            link: 'https://baike.baidu.com/item/广州国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练服务', '租用顶级装备', '享受俱乐部的其他设施']
          },
          {
            name: '珠江豪华游船',
            price: 600,
            description: '乘坐豪华游船在珠江上欣赏广州的夜景。',
            link: 'https://baike.baidu.com/item/珠江夜游',
            bestTime: '晚上',
            tips: ['选择包含晚餐的船票', '提预订', '穿着得体']
          },
          {
            name: '广州私人定制购物体验',
            price: 2000,
            description: '享受私人定制的购物体验，专业顾问陪同。',
            link: 'https://baike.baidu.com/item/广',
            bestTime: '全天',
            tips: ['预约私人顾问', '访问高端品牌店', '享受VIP购物待遇']
          }
        ],
        activities: [
          {
            name: '广州顶级SPA体验',
            description: '在广州的顶级SPA中心享受放松和养生。',
            priceRange: '￥1000-2000/人',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['选择全套服务', '提前预订', '穿着轻松']
          },
          {
            name: '广州直升机市游',
            description: '乘坐直升机俯瞰广州的城市美景。',
            priceRange: '￥3000/人起',
            bestTime: '白天',
            duration: '1小时',
            tips: ['提前预订飞行时间', '检查天气条', '携带相机']
          }
        ],
        dining: [
          {
            name: '广州米其林餐厅',
            description: '在广州的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '广州顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '珠江新城',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '广州豪华精品酒店',
            type: '精品酒店',
            price: '1200-2500/晚',
            location: '天河区',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '深圳': {
      free: {
        description: '零预算的深圳科技文化之旅，体验中国最年轻的一线城市魅力。',
        attractions: [
          {
            name: '圳湾公园',
            price: 0,
            description: '观赏港两岸风光，欣赏海上日落。',
            link: 'https://baike.baidu.com/item/深圳湾公园',
            bestTime: '傍晚5点后',
            tips: ['日落时分风最佳', '建议带相机', '周末人较多']
          },
          {
            name: '莲花山公园',
            price: 0,
            description: '登高望远，俯瞰深圳市全景。',
            link: 'https://baike.baidu.com/item/莲花山公园',
            bestTime: '全天',
            tips: ['适合登山', '带足水和食物', '穿舒适的鞋子']
          },
          {
            name: '东部华侨城',
            price: 0,
            description: '体验深圳的文化和自然风光。',
            link: 'https://baike.baidu.com/item/东部华侨城',
            bestTime: '全天',
            tips: ['适合家庭游', '可以进行徒步', '自备野餐食物']
          },
          {
            name: '深圳市博物馆',
            price: 0,
            description: '了解深圳的历史和发展。',
            link: 'https://baike.baidu.com/item/深圳市博物馆',
            bestTime: '全天',
            tips: ['适合文化爱好者', '注意开放时间', '可预约导览']
          },
          {
            name: '深圳大学',
            price: 0,
            description: '参观具有现代感的校园建筑。',
            link: 'https://baike.baidu.com/item/深圳大学',
            bestTime: '全天',
            tips: ['适合步行', '了解当地教育文化', '注意保持校园整洁']
          }
        ],
        activities: [
          {
            name: '深圳市民心广场音乐喷泉',
            description: '晚上观看免费的音乐喷泉表演。',
            priceRange: '免费',
            bestTime: '晚上',
            duration: '1小时',
            tips: ['带上相机', '找好观看位置', '适合全家']
          },
          {
            name: '深圳海滨栈道骑行',
            description: '沿着深圳海滨栈道骑行，享受海风。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['租借公共自行车', '携带防晒用品', '准备足够的水']
          }
        ],
        dining: [
          {
            name: '深圳地道街边小吃',
            description: '尝试深圳的地道街边小吃，如粥、烧烤',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['牛杂粥', '烧烤', '豆腐花'],
            tips: ['注意卫生', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '深圳青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的深圳探索之旅，体验深圳的现代化与自然美景。',
        attractions: [
          {
            name: '华侨城创意文化园',
            price: 50,
            description: '探索艺术与创意的结合，参观多个创意工作室和艺术展览。',
            link: 'https://baike.baidu.com/item/华侨城创意文化园',
            bestTime: '全天',
            tips: ['适合摄影爱好者', '参加工作坊体验', '穿着休闲']
          },
          {
            name: '深圳野生动物园',
            price: 80,
            description: '近距离观察和了解多种野动物。',
            link: 'https://baike.baidu.com/item/深圳野生动物园',
            bestTime: '全天',
            tips: ['适合家庭游', '带足水和食物', '穿舒适的鞋子']
          },
          {
            name: '深圳市民广场',
            price: 0,
            description: '体验深圳市民的日常生活和休闲方式。',
            link: 'https://baike.baidu.com/item/深圳市民广场',
            bestTime: '全天',
            tips: ['参与市民活动', '适合放松和休息', '观察城市节奏']
          },
          {
            name: '深圳中心公园',
            price: 0,
            description: '在城市中心享受然的绿地。',
            link: 'https://baike.baidu.com/item/深圳中心公园',
            bestTime: '全天',
            tips: ['适合晨跑或散步', '带上阅读材料', '享受宁静时光']
          },
          {
            name: '深圳艺术博物馆',
            price: 20,
            description: '欣赏深圳本地及国际艺术家的作品。',
            link: 'https://baike.baidu.com/item/深圳艺术博物馆',
            bestTime: '全天',
            tips: ['适合艺术爱好者', '注意展览时间', '预约导览']
          }
        ],
        activities: [
          {
            name: '深圳地铁一日游',
            description: '利用深圳的地铁网络探索城市的主要景点。',
            priceRange: '￥20-50/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['购买一日通票', '规划路线', '携带便携充电器']
          },
          {
            name: '深圳市区自行车之旅',
            description: '租借共自行车，行探索深圳的市区。',
            priceRange: '￥0-30/人',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['查找自车租借点', '注意安全', '携带水和小零食']
          }
        ],
        dining: [
          {
            name: '深圳特色快餐',
            description: '快速享用深圳的地方特色快餐。',
            averagePrice: '￥30-60/人',
            bestTime: '午餐或晚餐',
            recommendations: ['潮汕牛肉火锅', '粤式早茶', '海鲜烧烤'],
            tips: ['选择人多的店铺', '尝试多样化美食', '注意卫生']
          }
        ],
        accommodation: [
          {
            name: '圳经济型酒',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近地铁站',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时']
          },
          {
            name: '深圳背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性'],
            tips: ['预订含早餐的选项', '了解周边环境', '使公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的深圳探索之旅，平衡成本与舒适度，体验深圳的现代化与文化。',
        attractions: [
          {
            name: '深圳欢乐谷',
            price: 200,
            description: '深圳著名的大型主题公园，提供多种娱乐设施。',
            link: 'https://baike.baidu.com/item/深圳欢乐谷',
            bestTime: '全天',
            tips: ['提前购票以避免排长队', '穿着舒适的鞋子', '带足够的水和防晒品']
          },
          {
            name: '深圳国际花卉博览园',
            price: 120,
            description: '欣赏各种国内外的花卉植物，享受花海美景。',
            link: 'https://baike.baidu.com/item/深圳国际花卉博览园',
            bestTime: '春季最佳',
            tips: ['适合拍照', '春季花卉盛开', '携带野设备']
          },
          {
            name: '深圳大剧院',
            price: 180,
            description: '观看各种高水平的演出，如歌剧、舞剧等。',
            link: 'https://baike.baidu.com/item/深圳大剧院',
            bestTime: '根据演出间',
            tips: ['提前预订票务', '着装整洁', '演出结束后可在附近餐厅用餐']
          },
          {
            name: '深圳博物馆馆',
            price: 50,
            description: '了解深圳的历史与发展，参观各种展览。',
            link: 'https://baike.baidu.com/item/深圳博物馆',
            bestTime: '全天',
            tips: ['适合家庭游', '参加博物馆的导览服务', '注意开放时间']
          },
          {
            name: '深圳湾体育中心',
            price: 100,
            description: '参与各种体育活动，或观看体育比赛。',
            link: 'https://baike.baidu.com/item/深圳湾体育中心',
            bestTime: '全天',
            tips: ['体验各种体活动', '查看赛事安排', '适合体育爱好者']
          }
        ],
        activities: [
          {
            name: '深圳文化艺术中心参观',
            description: '参观深圳文化艺术中心，欣赏艺术展览。',
            priceRange: '￥100-200/人',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['适合文化爱好者', '注意展览时间', '能需要预约']
          },
          {
            name: '深圳市区历史文化游',
            description: '深入深圳老区，探索其丰富的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['聘请当地导游', '穿舒适的鞋子', '准备相机记录美好瞬间']
          }
        ],
        dining: [
          {
            name: '深圳特色餐厅',
            description: '在深圳的特色餐厅享用地道的浙江菜。',
            averagePrice: '￥200-400/人',
            bestTime: '午餐或晚餐',
            recommendations: ['潮汕牛肉火锅', '粤式点心', '海鲜'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '深圳精品酒店',
            type: '精品酒店',
            price: '￥400-600/晚',
            location: '南山区',
            features: ['设计感装潢', '优服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '深圳商务酒店',
            type: '商务酒店',
            price: '￥300-500/晚',
            location: '福田区',
            features: ['商务中心完善', '交通便利', '近购中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的深圳体验之旅，享受顶级的服务和设施，深入体验深圳的奢华与独特。',
        attractions: [
          {
            name: '深圳湾一号',
            price: 800,
            description: '在深圳湾一号享受顶级的私人会所服务，俯瞰深圳湾美景。',
            link: 'https://baike.baidu.com/item/深圳湾一号',
            bestTime: '全天',
            tips: ['提前预订', '享受高端定制服务', '尝试会所的高级餐饮']
          },
          {
            name: '深圳顶级高尔夫球场',
            price: 1000,
            description: '在深圳的顶级高尔夫球场打球，享受一流的球场设施和服务。',
            link: 'https://baike.baidu.com/item/深圳高尔夫球场',
            bestTime: '全天',
            tips: ['预约球童和教练服务', '租用顶级装备', '享受球场的其他娱乐设施']
          },
          {
            name: '深圳国际会展中心',
            price: 1200,
            description: '参加在深圳国际会展中心举办的各种国际会议和展览。',
            link: 'https://baike.baidu.com/item/深圳国际会展中心',
            bestTime: '根据活动安排',
            tips: ['提前了解展会信息', '预订VIP服务', '穿着商务正装']
          },
          {
            name: '深圳顶级SPA中心',
            price: 1500,
            description: '在深圳的顶级SPA中心享受全套的放松和养生体验。',
            link: 'https://baike.baidu.com/item/深圳SPA中心',
            bestTime: '全天',
            tips: ['预订私人护理套餐', '尝试特色水疗服务', '享受全身按摩']
          },
          {
            name: '深圳直升机城市游',
            price: 3000,
            description: '乘坐直升机俯瞰深圳的城市美景。',
            link: 'https://baike.baidu.com/item/深圳直升机游',
            bestTime: '白天',
            tips: ['提前预订飞行时间', '检查天气条件', '携带相机']
          }
        ],
        activities: [
          {
            name: '深圳豪华游艇体验',
            description: '在深圳海域租赁豪华游艇，享受独特的海上旅行体验。',
            priceRange: '￥5000/人起',
            bestTime: '全天',
            duration: '4-6小时',
            tips: ['提前预订', '选择包含餐饮服务的套餐', '准备防晒措施']
          },
          {
            name: '深圳私人定制购物体验',
            description: '享受私人定制的购物体验，专业顾问陪同访问高端品牌店。',
            priceRange: '￥2000/人起',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约私人顾问', '访问高端品牌店', '享受VIP购物待遇']
          }
        ],
        dining: [
          {
            name: '深圳其林餐厅',
            description: '在深圳米其林餐厅享世界级美食',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '深圳顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/',
            location: '南山区',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '深圳豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '福田区',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '重庆': {
      free: {
        description: '零预算的重庆文化与自然之旅，体验山城的独特魅力。',
        attractions: [
          {
            name: '南山一棵树观景台',
            price: 0,
            description: '俯瞰重庆主城区的绝佳地点，夜景尤为壮观。',
            link: 'https://baike.baidu.com/item/南山一棵树观景台',
            bestTime: '傍晚至夜晚',
            tips: ['带好相机', '晚上人较多', '注意安全']
          },
          {
            name: '洪崖洞',
            price: 0,
            description: '重庆著名的旅游景点，体验吊脚楼的独特建筑风格。',
            link: 'https://baike.baidu.com/item/洪崖洞',
            bestTime: '全天',
            tips: ['合拍照', '晚上灯光秀更美', '人多时注意财物安全']
          },
          {
            name: '磁器口古镇',
            price: 0,
            description: '体验重庆传统的老街文化，品尝地道的重庆小吃。',
            link: 'https://baike.baidu.com/item/磁器口古镇',
            bestTime: '全天',
            tips: ['尝试当地特色小吃', '适合慢慢逛', '周末或节假日人较多']
          },
          {
            name: '长江索道',
            price: 0,
            description: '体验穿越长江的索道，享受城市风光。',
            link: 'https://baike.baidu.com/item/长江索道',
            bestTime: '全天',
            tips: ['非免费项目，但观景免费', '适合摄影', '避开高峰期']
          },
          {
            name: '重庆三峡博物馆',
            price: 0,
            description: '了解三峡文化和重庆历史。',
            link: 'https://baike.baidu.com/item/重庆三峡博物馆',
            bestTime: '全天',
            tips: ['适合文化爱好者', '注意开放时间', '可预约导览']
          }
        ],
        activities: [
          {
            name: '重庆市中心广场音乐喷泉',
            description: '晚上观看免费的音乐喷泉表演。',
            priceRange: '免费',
            bestTime: '晚上',
            duration: '1小时',
            tips: ['带上相机', '找好观看位置', '适合全家']
          },
          {
            name: '重庆海棠溪公园',
            description: '在市中心的公园中散步，享受自然。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '1-2小时',
            tips: ['适合晨练', '带上阅读材料', '享受宁静时光']
          }
        ],
        dining: [
          {
            name: '重庆地道街边小吃',
            description: '尝试重庆的地道街边小吃，如重庆小面、酸辣粉。',
            averagePrice: '￥10-30/人',
            bestTime: '午餐或晚餐',
            recommendations: ['重庆小面', '酸辣粉', '串串香'],
            tips: ['注意卫生', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '重庆青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的重庆探索之旅，体验重庆的自然美景和丰富文化。',
        attractions: [
          {
            name: '歌乐山红岩革命纪念馆',
            price: 20,
            description: '了解中国共产党在重庆的历史。',
            link: 'https://baike.baidu.com/item/歌乐山红岩革命纪念馆',
            bestTime: '全天',
            tips: ['适合历史爱好者', '参加导览了解更多信息', '注意开放时间']
          },
          {
            name: '白公馆',
            price: 15,
            description: '参观重庆历史上的重要地点，了解其背后的故事。',
            link: 'https://baike.baidu.com/item/白公馆',
            bestTime: '全天',
            tips: ['适合文化和历史爱好者', '参加导览了解详细历史', '��意保护文物']
          },
          {
            name: '重庆动物园',
            price: 30,
            description: '观看大熊猫和其他多种动物。',
            link: 'https://baike.baidu.com/item/重庆动物园',
            bestTime: '全天',
            tips: ['早上去动物活跃度更高', '带足够的水和食物', '穿舒适的鞋子']
          },
          {
            name: '重庆科技馆',
            price: 50,
            description: '体验互动式的科学展览，适合家庭游。',
            link: 'https://baike.baidu.com/item/重庆科技馆',
            bestTime: '全天',
            tips: ['适合带小孩', '参与互动展览', '查看特别展览信息']
          },
          {
            name: '解放碑步行街',
            price: 0,
            description: '体验重庆的商业繁华，品尝地道的重庆小吃。',
            link: 'https://baike.baidu.com/item/解放碑步行街',
            bestTime: '全天',
            tips: ['适合购物和吃小吃', '晚上人较多', '注意保管好个人财物']
          }
        ],
        activities: [
          {
            name: '长江夜游',
            description: '乘船游览长江夜景，欣两岸灯光。',
            priceRange: '￥50-100/人',
            bestTime: '晚上',
            duration: '1-2小时',
            tips: ['提前预订船票', '选择有解说的游船', '穿暖']
          },
          {
            name: '重庆市郊徒步',
            description: '探索重庆周边的自然风光，进行一日徒步旅行。',
            priceRange: '￥0-50/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['穿戴适合徒步的装备', '携带足够的水和食物', '了解路线或聘请向导']
          }
        ],
        dining: [
          {
            name: '重庆特色快餐',
            description: '快速享用重庆的地方特色快餐。',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['重庆小面', '辣子鸡', '酸辣粉'],
            tips: ['选择人多的店铺', '尝试多样化美食', '注意卫生']
          }
        ],
        accommodation: [
          {
            name: '重庆经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '重庆背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的重庆探索之旅，平衡成本与舒适度，体验重庆的现代化与文化。',
        attractions: [
          {
            name: '重庆海洋公园',
            price: 150,
            description: '体验海洋生物的奇妙世界，适合家庭游。',
            link: 'https://baike.baidu.com/item/重庆海洋公园',
            bestTime: '全天',
            tips: ['提前购票以避免排长队', '带上防水相机', '适合带小孩']
          },
          {
            name: '四面山国家森林公园',
            price: 100,
            description: '探索重庆郊区的自然风光，进行徒步或露营。',
            link: 'https://baike.baidu.com/item/四面山家森林公园',
            bestTime: '春秋季节',
            tips: ['穿戴适合徒步的装备', '携带足够的水和食物', '了解天气情况']
          },
          {
            name: '重庆中国三峡博物馆',
            price: 50,
            description: '了解三峡地区的历史文化和自然环境。',
            link: 'https://baike.baidu.com/item/重庆中国三峡博物馆',
            bestTime: '全天',
            tips: ['适合文化爱好者', '参加博物馆的导览服务', '注意开放时间']
          },
          {
            name: '鹅岭公园',
            price: 0,
            description: '在市中心的公园中散步，享受城市中的自然。',
            link: 'https://baike.baidu.com/item/鹅岭公园',
            bestTime: '全天',
            tips: ['适合晨练和晚步', '带上阅读材料', '享受宁静时光']
          },
          {
            name: '磁器口夜市',
            price: 0,
            description: '体验重庆夜市的热闹氛围，品尝各种小吃。',
            link: 'https://baike.baidu.com/item/磁器口夜市',
            bestTime: '傍晚至夜晚',
            tips: ['尝试当地特色小吃', '注意保管好个人财物', '体验地道的重庆生活']
          }
        ],
        activities: [
          {
            name: '长江两岸城市观光',
            description: '沿长江两岸进行城市观光，欣赏重庆的城市风光。',
            priceRange: '￥100-200/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['选择有解说的游船', '提前预订', '穿着舒适']
          },
          {
            name: '重庆老街文化探索',
            description: '深入重庆的老街区，探索其丰富的历史和文化。',
            priceRange: '￥50-150/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['聘请当地导游', '穿舒适的鞋子', '准备相机记录美好瞬']
          }
        ],
        dining: [
          {
            name: '重庆特色餐厅',
            description: '在庆的特色餐厅享用川渝美食。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['火锅', '江湖菜', '老鸭汤'],
            tips: ['提前预订', '尝试餐厅推的特色菜', '询问服务食材来源']
          }
        ],
        accommodation: [
          {
            name: '重庆精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '江北区',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '重庆商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '解放碑区',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的重庆体验之旅，享受顶级的服务和设施，深入体验重庆的奢华与独特。',
        attractions: [
          {
            name: '重庆国际会展中心',
            price: 1200,
            description: '参加在重庆国际会展中心举办的各种国际会议和展览。',
            link: 'https://baike.baidu.com/item/重庆国际会展中心',
            bestTime: '根据活动安排',
            tips: ['提前了解展会信息', '预订VIP服务', '穿着商务正装']
          },
          {
            name: '重庆顶级高尔夫球场',
            price: 1000,
            description: '在重庆的顶级高尔夫球场打球，享受一流的球场设施和服务。',
            link: 'https://baike.baidu.com/item/重庆高尔夫球场',
            bestTime: '全天',
            tips: ['预约球童和教练服务', '用顶级装备', '享受球场的其他娱乐设施']
          },
          {
            name: '重庆顶级SPA中心',
            price: 1500,
            description: '在重庆的顶级SPA中心享受全套的放松和养生体验。',
            link: 'https://baike.baidu.com/item/重庆SPA中心',
            bestTime: '全天',
            tips: ['预订私人护理套餐', '尝试特色水疗服务', '享受全身按摩']
          },
          {
            name: '重庆直升机城市游',
            price: 3000,
            description: '乘坐直升机俯瞰重庆的城市美景。',
            link: 'https://baike.baidu.com/item/重庆升机游',
            bestTime: '白天',
            tips: ['提前预订飞行时间', '检查天气条件', '携带相机']
          },
          {
            name: '重庆豪华游艇体验',
            price: 5000,
            description: '在长江上租赁豪华游艇，享受独特的海上旅行体验。',
            link: 'https://baike.baidu.com/item/重庆游艇',
            bestTime: '全天',
            tips: ['提前预订', '选择包含餐饮服务的套餐', '准备防晒措施']
          }
        ],
        activities: [
          {
            name: '重庆私人定制购物体验',
            description: '享受私人定制的购物体验，专业顾问陪同访问高端品牌店。',
            priceRange: '￥2000/人起',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约私人顾问', '访问高端品牌店', '享受VIP购物待遇']
          },
          {
            name: '重庆顶级餐厅美食之旅',
            description: '在重庆的顶级餐厅享用世界级美食。',
            priceRange: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            duration: '1-2小时',
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        dining: [
          {
            name: '重庆米其林餐厅',
            description: '在重庆的米林餐厅享用界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '重庆顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '南岸区',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用店提供的豪设施', '享受定制服务']
          },
          {
            name: '重庆豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '江北区',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '西安': {
      free: {
        description: '零预算的西安文化与自然之旅，体验古城的历史魅力。',
        attractions: [
          {
            name: '大雁塔北广场音乐喷泉',
            price: 0,
            description: '亚洲最大的音乐喷泉，晚上观看喷泉表演。',
            link: 'https://baike.baidu.com/item/大雁塔北广场音乐喷泉',
            bestTime: '晚上',
            tips: ['晚上人较多', '提前占位', '带好相机']
          },
          {
            name: '西安城墙',
            price: 0,
            description: '登上古城墙，感受西安的历史厚重。',
            link: 'https://baike.baidu.com/item/西安城墙',
            bestTime: '全天',
            tips: ['适合骑行和散步', '租借自行车体验更佳', '注意安全']
          },
          {
            name: '大明宫国家遗址公园',
            price: 0,
            description: '探索唐代皇宫的遗址，了解其历史背景。',
            link: 'https://baike.baidu.com/item/大明宫国家遗址公园',
            bestTime: '全天',
            tips: ['适合拍照和散步', '了解公园的历史信息', '穿舒适的鞋子']
          },
          {
            name: '曲江池遗址公园',
            price: 0,
            description: '在曲江池遗址公园中散步，享受自然美景。',
            link: 'https://baike.baidu.com/item/曲江池遗址公园',
            bestTime: '全天',
            tips: ['适合晨练和晚步', '带上阅读材料', '享受宁静时光']
          },
          {
            name: '西安半坡博物馆',
            price: 0,
            description: '了解中国新石器时代的文化遗产。',
            link: 'https://baike.baidu.com/item/西安半坡博物馆',
            bestTime: '全天',
            tips: ['适合文化爱好者', '注意开放时间', '可预约导览']
          }
        ],
        activities: [
          {
            name: '西安古城夜景游',
            description: '晚游览西安古城，欣赏夜景和繁华的街道。',
            priceRange: '免费',
            bestTime: '晚上',
            duration: '1-2小时',
            tips: ['带上相机', '穿舒适的鞋子', '享受夜晚的凉爽']
          },
          {
            name: '西安书门文化街',
            description: '漫步在书院门文化街，感受西安的文化氛围。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '1-2小时',
            tips: ['适合购买文化纪念品', '尝试当地小吃', '了解文化背景']
          }
        ],
        dining: [
          {
            name: '西安街边小吃',
            description: '尝西安的地道街小吃，如肉夹馍、凉皮。',
            averagePrice: '￥10-30/人',
            bestTime: '午餐或晚餐',
            recommendations: ['肉夹馍', '凉皮', '羊肉泡��'],
            tips: ['选择卫生条件好的店铺', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '西安青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的西安探索之旅，体验西安的自然美景和丰富文化。',
        attractions: [
          {
            name: '兵马俑博物馆',
            price: 120,
            description: '参观世界名的兵马俑，了解秦始皇的历史。',
            link: 'https://baike.baidu.com/item/兵马俑博物馆',
            bestTime: '全天',
            tips: ['提前购票以避免长队', '租用语音导览器', '穿舒适的鞋子']
          },
          {
            name: '华清池',
            price: 110,
            description: '体验帝王温泉，了解唐朝皇帝与杨贵妃的爱情故事。',
            link: 'https://baike.baidu.com/item/华清池',
            bestTime: '全天',
            tips: ['适合拍照', '了解历史背景', '注意保护文物']
          },
          {
            name: '西安碑林博物馆',
            price: 50,
            description: '观赏古代碑刻艺术，了解中国书法的发展。',
            link: 'https://baike.baidu.com/item/西安碑林博物馆',
            bestTime: '全天',
            tips: ['适合文化爱好者', '参加导览了解更多信息', '注意开放时间']
          },
          {
            name: '西安古文化街',
            price: 0,
            description: '漫步在古文街，购买手工艺品和传统小吃。',
            link: 'https://baike.baidu.com/item/西安古文化街',
            bestTime: '全天',
            tips: ['适合购物和品尝小吃', '比较商品价格', '体验传统手工艺']
          },
          {
            name: '西安大唐不夜城',
            price: 0,
            description: '体验大唐盛世的文化和艺术表演。',
            link: 'https://baike.baidu.com/item/西安大唐不夜城',
            bestTime: '傍晚至夜晚',
            tips: ['观看免费的文艺表演', '尝试各种美食', '晚上人较多']
          }
        ],
        activities: [
          {
            name: '秦岭徒步探险',
            description: '探索秦岭的自然风光，进行一日徒步旅行。',
            priceRange: '￥0-50/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['穿戴适合徒步的装备', '携带足够的水和食物', '了解路线或聘请向导']
          },
          {
            name: '西安夜市体验',
            description: '西安的夜市中享受地道的小吃和热闹的氛围。',
            priceRange: '￥0-50/人',
            bestTime: '晚上',
            duration: '1-2小时',
            tips: ['尝试多样的小吃', '注意个人财物安全', '体验当地的夜生活']
          }
        ],
        dining: [
          {
            name: '西安特色快餐',
            description: '快速享用西安的地方特色快餐。',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['肉夹馍', '凉皮', '羊肉泡馍'],
            tips: ['选择人多的店铺', '尝试多样化美食', '注意卫生']
          }
        ],
        accommodation: [
          {
            name: '西安经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '西安背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      high: {
        description: '豪华的西安体验之旅，享受顶级的服务和设施，深入体验西安的奢华与独特。',
        attractions: [
          {
            name: '秦始皇帝陵兵马一号坑VIP参观',
            price: 2000,
            description: '享受VIP专属导览，亲近历史的同时享受尊贵体验。',
            link: 'https://baike.baidu.com/item/秦始皇帝陵',
            bestTime: '全天',
            tips: ['享受无人打扰的参观', '提供专属讲解员', '包括专车接送']
          },
          {
            name: '西安直升机城市游',
            price: 3000,
            description: '乘坐直升机俯瞰西安的城市美景和历史遗迹。',
            link: 'https://baike.baidu.com/item/西安直升机游',
            bestTime: '白天',
            tips: ['提前预订飞行时间', '检查天气件', '携带相机']
          },
          {
            name: '西安夜游豪华游艇',
            price: 5000,
            description: '在渭河上享受豪华游艇服务，体验不一样的夜西安。',
            link: 'https://baike.baidu.com/item/西安游艇',
            bestTime: '夜晚',
            tips: ['提前预订', '享受定制晚餐', '准备晚']
          },
          {
            name: '大唐芙蓉园皇家体验',
            price: 1500,
            description: '穿上汉唐服饰，体验一日皇帝和皇后。',
            link: 'https://baike.baidu.com/item/大唐蓉园',
            bestTime: '全天',
            tips: ['提前预订皇家体验套餐', '享受皇家礼遇', '参与皇家宴会']
          },
          {
            name: '西安高端定制购物体验',
            price: 2000,
            description: '专人导购，定制西安传统工艺和现代高端商品。',
            link: 'https://baike.baidu.com/item/西安购物',
            bestTime: '全天',
            tips: ['享受个性化服务', '预约专业导购', '探索高端品牌']
          }
        ],
        activities: [
          {
            name: '西安高端美食之旅',
            description: '在西安顶级餐厅享用精致美食，包括私人厨师定制菜单。',
            priceRange: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            duration: '1-2小时',
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来']
          },
          {
            name: '西安文化私人定制游',
            description: '私人定制的文化深游，包括历遗址和博物馆的深度解析。',
            priceRange: '￥1000-2000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解西安文化']
          }
        ],
        dining: [
          {
            name: '西安米其林餐厅',
            description: '在西安米其林餐厅享用世界级美食',
            averagePrice: '￥1000-2000/',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '西安豪华精品酒店',
            type: '品酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '杭州': {
      free: {
        description: '零预算的杭州文化与自然之旅，体验杭州的自然美景和丰富文化。',
        attractions: [
          {
            name: '西湖',
            price: 0,
            description: '游览杭州的标志性景点西湖，欣赏湖光山色。',
            link: 'https://baike.baidu.com/item/西湖',
            bestTime: '全天',
            tips: ['步行或骑行环湖', '访问湖边的古典园林', '观赏断桥残雪']
          },
          {
            name: '雷峰塔',
            price: 0,
            description: '探访雷峰塔，了解白蛇传说中的历史背景。',
            link: 'https://baike.baidu.com/item/雷峰塔',
            bestTime: '全天',
            tips: ['傍晚时分观赏塔影倒映在湖中', '了解塔内的历史展览', '适合摄影']
          },
          {
            name: '杭州植物园',
            price: 0,
            description: '参观杭州植物园，享受多样的植物景观。',
            link: 'https://baike.baidu.com/item/杭州植物园',
            bestTime: '全天',
            tips: ['春季赏花', '秋季观红叶', '携带野餐设备']
          },
          {
            name: '九溪烟树',
            price: 0,
            description: '漫步九溪烟树，体验杭州的山水田园风光。',
            link: 'https://baike.baidu.com/item/九溪烟树',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '带足够的水和食物', '适合长时间徒步']
          },
          {
            name: '杭州艺术博物馆',
            price: 0,
            description: '参观杭州艺术博物馆，欣赏当地及国际艺术作品。',
            link: 'https://baike.baidu.com/item/杭州艺术博物馆',
            bestTime: '全天',
            tips: ['关注展览时间表', '适合艺术爱好者', '周末可能较为拥挤']
          }
        ],
        activities: [
          {
            name: '西湖夜游',
            description: '夜晚乘船游览西湖，体验不同的湖光山色。',
            priceRange: '免费',
            bestTime: '夜晚',
            duration: '1-2小时',
            tips: ['穿暖', '提前查看船只运营时间', '享受夜晚的宁静']
          },
          {
            name: '杭州历史文化街区漫步',
            description: '漫步在杭州的历史文化区，如清河街。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '1-2小时',
            tips: ['尝试当地小吃', '访问手工艺品店', '了解历史背景']
          }
        ],
        dining: [
          {
            name: '杭州街边小吃',
            description: '尝试杭州的地道街边小吃，如小笼包、炒年糕。',
            averagePrice: '￥10-30/人',
            bestTime: '午餐或晚餐',
            recommendations: ['小笼包', '炒年糕', '豆腐花'],
            tips: ['选择卫生条件好的店铺', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '杭州青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的杭州探索之旅，体验杭州的自然美景和丰富文化。',
        attractions: [
          {
            name: '灵隐寺',
            price: 30,
            description: '参观杭州著名的佛教寺庙，体验宗教文化和建筑美。',
            link: 'https://baike.baidu.com/item/灵隐寺',
            bestTime: '全天',
            tips: ['早上去避开人群', '参加寺庙的打坐或诵经活动', '尊重宗教场所']
          },
          {
            name: '杭州动物园',
            price: 20,
            description: '观看各种动物，适合家庭带小游玩。',
            link: 'https://baike.baidu.com/item/杭州动物园',
            bestTime: '全天',
            tips: ['带足够水和小食', '穿舒适的鞋子', '避开节假日']
          },
          {
            name: '西溪国家湿地公园',
            price: 80,
            description: '探索中国最美的湿地之一，体验自然生态之美。',
            link: 'https://baike.baidu.com/item/西溪国家湿地公园',
            bestTime: '全天',
            tips: ['租借自行车游园', '参加解说团更深入了解', '携带防蚊虫用品']
          },
          {
            name: '杭州宋城',
            price: 100,
            description: '体验宋代文化和历史的主题公园。',
            link: 'https://baike.baidu.com/item/杭州宋城',
            bestTime: '全天',
            tips: ['观看宋城千古情表演', '尝试宋代服装拍照', '购买联票更划算']
          },
          {
            name: '断桥',
            price: 0,
            description: '游览西湖断桥，体验"断桥残雪"的美景。',
            link: 'https://baike.baidu.com/item/断桥',
            bestTime: '全天',
            tips: ['冬季雪后更有韵味', '适合拍照', '结合西湖游览']
          }
        ],
        activities: [
          {
            name: '杭州茶文化体验',
            description: '参观茶园，学习采茶和制茶过程。',
            priceRange: '￥50-100/人',
            bestTime: '春季',
            duration: '半天',
            tips: ['穿舒适的衣服和鞋子', '预约体验', '购买新鲜茶叶']
          },
          {
            name: '西湖夜景游',
            description: '夜晚沿西湖散步，享受湖边的夜景和凉爽。',
            priceRange: '免费',
            bestTime: '夜晚',
            duration: '1-2小时',
            tips: ['穿舒适的鞋子', '携带小零钱', '享受夜晚的宁静']
          }
        ],
        dining: [
          {
            name: '杭州小吃街',
            description: '在杭的小吃街品尝各种地道小吃。',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或晚餐',
            recommendations: ['炒年糕', '龙井虾仁', '叫化鸡'],
            tips: ['尝试不同的小吃摊位', '注意食品安全', '准备现金']
          }
        ],
        accommodation: [
          {
            name: '杭州经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '杭州背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的杭州探索之旅，平衡成本与舒适度，体验杭州的现代化与文化。',
        attractions: [
          {
            name: '西湖游船',
            price: 100,
            description: '乘坐游船深入西湖，近距离欣赏湖上美景。',
            link: 'https://baike.baidu.com/item/西湖游船',
            bestTime: '全天',
            tips: ['选择不同路线的游船', '提前购票避免排队', '携带防晒用品']
          },
          {
            name: '杭州宋城演艺',
            price: 280,
            description: '观看《宋城千古情》演出，体验宋代文化。',
            link: 'https://baike.baidu.com/item/杭州宋城演艺',
            bestTime: '晚上',
            tips: ['提前预订门票', '观看演前的游行', '体验宋城市']
          },
          {
            name: '西溪湿地',
            price: 80,
            description: '探索西溪国家湿地公园的自然美景。',
            link: 'https://baike.baidu.com/item/西溪湿地',
            bestTime: '全天',
            tips: ['租借电瓶车游览', '参加导游解说', '穿舒适的行走鞋']
          },
          {
            name: '杭州博物馆',
            price: 50,
            description: '了解杭州及浙江的历史文化。',
            link: 'https://baike.baidu.com/item/杭州博物馆',
            bestTime: '全天',
            tips: ['关注特展信息', '适合家庭游', '周末人较多']
          },
          {
            name: '六和塔',
            price: 45,
            description: '登高望远，观赏西湖全景。',
            link: 'https://baike.baidu.com/item/六和',
            bestTime: '全天',
            tips: ['适合摄影', '结合访问附的景点', '注意开放时间']
          }
        ],
        activities: [
          {
            name: '杭州茶文化体验',
            description: '在龙井村体验采茶和品茶。',
            priceRange: '￥150-300/人',
            bestTime: '春季',
            duration: '半天',
            tips: ['预约专业茶艺师', '购买当地茶叶', '穿舒适的衣服和鞋子']
          },
          {
            name: '西湖夜景摄影',
            description: '参加摄影团，捕捉西湖夜景的美丽瞬间。',
            priceRange: '￥200-400/人',
            bestTime: '夜晚',
            duration: '2-3小时',
            tips: ['携带三脚架', '学习夜景摄影技巧', '选择有经验的导师']
          }
        ],
        dining: [
          {
            name: '杭州特色餐厅',
            description: '在杭州的特色餐厅享用地道的浙江菜。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['西湖醋鱼', '龙井虾仁', '东坡肉'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '杭州精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '杭州商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的杭州体验之旅，享受顶级的服务和设施，深入体验杭州的奢华与独特。',
        attractions: [
          {
            name: '西湖私人游艇体验',
            price: 3000,
            description: '私人游艇上观赏西湖美景，享受独一无二的湖光山色。',
            link: 'https://baike.baidu.com/item/西湖',
            bestTime: '全天',
            tips: ['提前预订', '享受定制服务', '包括高级餐饮服务']
          },
          {
            name: '杭州国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/杭州国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '西溪湿地豪华SPA体验',
            price: 1500,
            description: '在自然景观中享受顶级SPA服务，放松身心。',
            link: 'https://baike.baidu.com/item/西溪湿地',
            bestTime: '全天',
            tips: ['提前预订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '杭传统丝绸体',
            price: 1000,
            description: '参观丝绸工厂，体验丝绸制作过程，定制个人丝绸制品。',
            link: 'https://baike.baidu.com/item/杭州丝绸',
            bestTime: '全天',
            tips: ['预约专业导览', '了解丝绸文化', '购买高端丝绸产品']
          },
          {
            name: '杭州顶级餐厅美食之旅',
            price: 800,
            description: '在杭州顶级餐厅享用精致的浙江菜和国际美食。',
            link: 'https://baike.baidu.com/item/杭州美食',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '杭州文化私人定制游',
            description: '私人定的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解杭州文化']
          },
          {
            name: '杭州夜游豪华游艇',
            description: '在豪华游艇上体验杭州夜景，享受高端定制晚。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '杭州米其林餐厅',
            description: '在杭州的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '杭州顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '杭州豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '成都': {
      free: {
        description: '零预算的成都文化与自然之旅，体验成都的自然美景和丰富文化。',
        attractions: [
          {
            name: '成都武侯祠',
            price: 0,
            description: '参观历史悠久的武侯祠，了解三国文化。',
            link: 'https://baike.baidu.com/item/成都武侯祠',
            bestTime: '全天',
            tips: ['参加免费的导览解说', '适合历史爱好者', '拍照留念']
          },
          {
            name: '锦里古街',
            price: 0,
            description: '漫步在充满古色古香的锦里古街，体验成都的传统市井生活。',
            link: 'https://baike.baidu.com/item/锦里古街',
            bestTime: '全天',
            tips: ['品尝成都小吃', '购买手工艺品', '体验成都慢生活']
          },
          {
            name: '成都市花园城绿道',
            price: 0,
            description: '在城市绿道中骑行或散步，享受城市中的色空间。',
            link: 'https://baike.baidu.com/item/成都市花园城绿道',
            bestTime: '全天',
            tips: ['租借公共自行车', '携带野餐设备', '观察城市生态']
          },
          {
            name: '成都杜甫草堂',
            price: 0,
            description: '探访杜甫草堂，感受古代诗人的生活环境及其文学成就。',
            link: 'https://baike.baidu.com/item/成都杜甫草堂',
            bestTime: '全天',
            tips: ['了解杜甫的诗歌', '参观古代建筑', '适合文学爱好者']
          },
          {
            name: '成都市博物馆',
            price: 0,
            description: '参观成都市博物馆，了解成都的历史与文化。',
            link: 'https://baike.baidu.com/item/成都市博物馆',
            bestTime: '全天',
            tips: ['关注特展信息', '适合家庭游', '学习都历史']
          }
        ],
        activities: [
          {
            name: '成都市区自行车游',
            description: '骑行探索成都市区的主要景点，体验城市的现代与传统。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['租借公共自行车', '规划路线', '注意安全']
          },
          {
            name: '成都茶馆体验',
            description: '在成都的传统茶馆中体验悠闲的茶文化。',
            priceRange: '免费',
            bestTime: '下午',
            duration: '1-2小时',
            tips: ['选择有地方特色的茶馆', '尝试不同种类的茶', '观察当地人的生活方式']
          }
        ],
        dining: [
          {
            name: '成都街边小吃',
            description: '尝试成都的地道街边小吃，如串串香、担担面。',
            averagePrice: '￥10-30/',
            bestTime: '午餐或晚餐',
            recommendations: ['串串香', '担担面', '麻婆豆腐'],
            tips: ['选择卫生条件好的店铺', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '成都青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的成都探索之旅，体验成都的自然美景和丰富文化。',
        attractions: [
          {
            name: '青城山',
            price: 90,
            description: '游览道教圣地青城山，体验山中清幽和古建筑之美。',
            link: 'https://baike.baidu.com/item/青城山',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带足够的水和食物', '参加导游团更深入了解']
          },
          {
            name: '都江堰',
            price: 90,
            description: '参观世界文化遗产都江堰，了解古代水利工程。',
            link: 'https://baike.baidu.com/item/都江堰',
            bestTime: '全天',
            tips: ['购买联票可节省成本', '秋季景色最佳', '参加解说团了解历史']
          },
          {
            name: '熊猫基地',
            price: 58,
            description: '参观成都大熊猫繁育研究基地，近距离观察大熊猫。',
            link: 'https://baike.baidu.com/item/成都大熊猫繁育研究基地',
            bestTime: '早上',
            tips: ['早上去可以看到熊猫活跃的样子', '预留足够的游览时间', '携带相机']
          },
          {
            name: '锦里古街',
            price: 0,
            description: '漫步在充满古色古香的锦里古街，体验成都的传统市井生活。',
            link: 'https://baike.baidu.com/item/锦里古街',
            bestTime: '全天',
            tips: ['品尝成都小吃', '购买手工艺品', '体验成都慢生活']
          },
          {
            name: '宽窄巷子',
            price: 0,
            description: '游览成都宽窄巷子，感受老成都的生活氛围。',
            link: 'https://baike.baidu.com/item/宽窄巷子',
            bestTime: '全天',
            tips: ['尝试当地茶馆', '了解四川老戏', '拍摄传统建筑']
          }
        ],
        activities: [
          {
            name: '成都市区自行车游',
            description: '骑行探成都的主要景点，体验城市的现代与传统。',
            priceRange: '免费至��费用',
            bestTime: '全天',
            duration: '半天',
            tips: ['租借公共自行车', '规划路线', '注意安全']
          },
          {
            name: '成都茶馆体验',
            description: '在成都的传统茶馆中体验悠闲的茶文化。',
            priceRange: '￥10-30/人',
            bestTime: '下午',
            duration: '1-2小时',
            tips: ['选择有地方特色的茶馆', '尝试不同种类的茶', '观察当地人的生活方式']
          }
        ],
        dining: [
          {
            name: '成都街边小吃',
            description: '尝试成都的地道街边小吃，如串串香、担担面。',
            averagePrice: '￥20-50/人',
            bestTime: '午餐或餐',
            recommendations: ['串串香', '担担面', '麻婆豆腐'],
            tips: ['选择卫生条件好的店铺', '小心', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '成都经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '成都背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的成都文体验之旅，平衡成本与舒适度，深入体验成都的现代与传统。',
        attractions: [
          {
            name: '成都塔',
            price: 150,
            description: '登广的地标性建筑，俯瞰城市全景。',
            link: 'https://baike.baidu.com/item/成都塔',
            bestTime: '傍晚',
            tips: ['购买快速通行票', '傍晚观看城市夜景', '尝试塔上的旋转餐厅']
          },
          {
            name: '成都歌剧院',
            price: 200,
            description: '欣赏国内外顶级的表演艺术。',
            link: 'https://baike.baidu.com/item/成都歌剧院',
            bestTime: '根据演出时间',
            tips: ['提前预订门票', '着装正式', '演出结束后可在附近餐厅用餐']
          },
          {
            name: '成都博物馆',
            price: 50,
            description: '了解成都的历史与文化。',
            link: 'https://baike.baidu.com/item/成都博物馆',
            bestTime: '全天',
            tips: ['参加博物馆的导览服务', '适合家庭游', '注意开放时间']
          },
          {
            name: '锦江夜游',
            price: 180,
            description: '坐游船欣赏锦江两岸的夜景。',
            link: 'https://baike.baidu.com/item/锦江夜游',
            bestTime: '晚上',
            tips: ['选择带晚餐的游船', '提前预订', '带上相机']
          },
          {
            name: '都科学中心',
            price: 100,
            description: '探索科技的奥秘，适合带小孩的家庭。',
            link: 'https://baike.baidu.com/item/成都科学中心',
            bestTime: '全天',
            tips: ['适合亲子活动', '可以体验科技互动展项', '预留足够的游玩时间']
          }
        ],
        activities: [
          {
            name: '成都美食探索之旅',
            description: '跟随导游品尝成都的传统美食。',
            priceRange: '￥200-400/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['尝糖水、云吞面、烧', '跟团游更省心', '穿着轻便']
          },
          {
            name: '成都老城区文化游',
            description: '深入成都老城区，探索其丰富的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '半天',
            tips: ['聘请当地导游', '穿舒适的鞋子', '准备相机记录美好瞬间']
          }
        ],
        dining: [
          {
            name: '成都名家餐厅',
            description: '在成都知名餐厅享用菜。',
            averagePrice: '￥300-500/人',
            bestTime: '午餐或餐',
            recommendations: ['蒸点心', '煲汤', '海鲜'],
            tips: ['提前预订', '尝试成都的传统糖水', '询问服务员推荐菜品']
          }
        ],
        accommodation: [
          {
            name: '成都精品酒店',
            type: '精品酒店',
            price: '￥500-700/晚',
            location: '锦江区',
            features: ['设计感装潢', '优质服务', '中心地'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '成都商务酒店',
            type: '商务酒店',
            price: '￥400-600/晚',
            location: '武侯区',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的成都体验之旅，享受顶级的服务和设施，深入体验成都的奢华与独特。',
        attractions: [
          {
            name: '成都直升机城市游览',
            price: 5000,
            description: '乘坐直升机俯瞰成都市区及周边美景，享受独特的空中游览体验。',
            link: 'https://baike.baidu.com/item/成都直升机游览',
            bestTime: '全天',
            tips: ['提前预订', '选择晴朗的日子', '携带相机']
          },
          {
            name: '成都国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/成都国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '成都顶级SPA体验',
            price: 1500,
            description: '在豪华SPA中心享受全套放松疗程，释放身心压力。',
            link: 'https://baike.baidu.com/item/成都SPA',
            bestTime: '全天',
            tips: ['提前预订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '成都奢华购物体验',
            price: '根据购物预算而定',
            description: '在成都的高端购物中心购买国际品牌产品。',
            link: 'https://baike.baidu.com/item/成都高端购物',
            bestTime: '全天',
            tips: ['享受个性化购物顾问服务', '了解店内特别活动', '利用退税政策']
          },
          {
            name: '成都米其林餐厅美食之旅',
            price: 1000,
            description: '在成都的米其林餐厅享用世界级美食。',
            link: 'https://baike.baidu.com/item/成都米其林餐厅',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '成都文化私人定制游',
            description: '私人定制的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解成都文化']
          },
          {
            name: '成都夜游豪华游艇',
            description: '在豪华游艇上体验成都夜景，享受高端定晚餐。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '成都米其林餐厅',
            description: '在成都的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '成都顶级五星酒店',
            type: '五酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '成都豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '武汉': {
      free: {
        description: '零预算的武汉文化与自然之旅，体验武汉的自然美景和丰富文化。',
        attractions: [
          {
            name: '东湖磨山',
            price: 0,
            description: '游览东湖磨山风景区，享受自然美景和清新空气。',
            link: 'https://baike.baidu.com/item/东湖磨山',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带足够的水和食物', '适合户外活动']
          },
          {
            name: '武汉长江大桥',
            price: 0,
            description: '步行过长江大桥，欣赏长江的壮观景色。',
            link: 'https://baike.baidu.com/item/武汉长江大桥',
            bestTime: '全天',
            tips: ['选择晴朗的日子', '携带相机', '注意安全']
          },
          {
            name: '汉口江滩',
            price: 0,
            description: '漫步汉口江滩，体验长江边的城市风光。',
            link: 'https://baike.baidu.com/item/汉口江滩',
            bestTime: '全天',
            tips: ['适合晨跑或傍晚散步', '观看日落', '参与当地的文化活动']
          },
          {
            name: '黄鹤楼公园',
            price: 0,
            description: '参观历史悠久的黄鹤楼公园，感受古代文化氛围。',
            link: 'https://baike.baidu.com/item/黄鹤楼公园',
            bestTime: '全',
            tips: ['了解黄鹤楼的历史', '拍摄古建筑', '适合文化爱好者']
          },
          {
            name: '武汉博物馆',
            price: 0,
            description: '参观武汉博物馆，了解武汉及湖北的历史与文化。',
            link: 'https://baike.baidu.com/item/武汉博物馆',
            bestTime: '全天',
            tips: ['关注特展信息', '适合家庭游', '学习地方历史']
          }
        ],
        activities: [
          {
            name: '武汉市区自行车游',
            description: '骑行探索武汉市区的主要景点，体验城市的现代与传统。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['租借公共自行车', '规划路线', '注意安全']
          },
          {
            name: '武汉茶馆体验',
            description: '在武汉的传统茶馆中体验悠闲的茶文化。',
            priceRange: '免费',
            bestTime: '下午',
            duration: '1-2小时',
            tips: ['选择有地方特色的茶馆', '尝试不同种类茶', '观察当地人的生活方式']
          }
        ],
        dining: [
          {
            name: '武汉街边小吃',
            description: '尝试武汉的地道街边小吃，如热干面、豆皮。',
            averagePrice: '￥10-30/人',
            bestTime: '午餐或晚餐',
            recommendations: ['热干面', '豆皮', '三鲜豆皮'],
            tips: ['选择卫生条件好的店铺', '小心辣', '现金交易']
          }
        ],
        accommodation: [
          {
            name: '武汉青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的武汉探索之旅，体验武汉的自然美景和丰富文化。',
        attractions: [
          {
            name: '武汉东',
            price: 40,
            description: '游览武汉最大的城市湖泊和周边风景区，享受自然美景。',
            link: 'https://baike.baidu.com/item/武汉东湖',
            bestTime: '全天',
            tips: ['租借自行车环湖', '参观梅园', '游览听涛景区']
          },
          {
            name: '武汉海底世界',
            price: 150,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/武汉海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小孩', '体验海底隧道']
          },
          {
            name: '武汉科技馆',
            price: 50,
            description: '参观武汉科技馆，了解科学知识，体验互动展览。',
            link: 'https://baike.baidu.com/item/武汉科技馆',
            bestTime: '全天',
            tips: ['参与科学实验', '适合家庭活动', '了解最新科技']
          },
          {
            name: '黄鹤楼',
            price: 50,
            description: '参观武汉的标志性建筑黄鹤楼，感受古代文化氛围。',
            link: 'https://baike.baidu.com/item/黄鹤楼',
            bestTime: '全天',
            tips: ['了解黄鹤楼的历史', '拍摄古建筑', '适合文化爱好者']
          },
          {
            name: '汉口江滩',
            price: 0,
            description: '漫步汉口江滩，体验长江边的城市风光。',
            link: 'https://baike.baidu.com/item/汉口江滩',
            bestTime: '全天',
            tips: ['适合晨跑或傍晚散步', '观看日落', '参与当地的文化活动']
          }
        ],
        activities: [
          {
            name: '武汉夜游长江',
            description: '乘坐游船夜游长江，欣赏武汉两岸的夜景。',
            priceRange: '￥100-200/人',
            bestTime: '夜晚',
            duration: '1-2小时',
            tips: ['提前预订', '选择晴朗的夜晚', '携带相机']
          },
          {
            name: '武汉文化历史游',
            description: '参加导游团深入了解武汉的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          }
        ],
        dining: [
          {
            name: '武汉特色餐厅',
            description: '在武汉的特色餐厅享用地道的湖北菜。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['热干面', '鸭脖', '豆皮'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '武汉精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '武汉商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      medium: {
        description: '舒适的武汉探索之旅，平衡成本与舒适度，体验武汉的现代化与文化。',
        attractions: [
          {
            name: '汉东湖',
            price: 40,
            description: '游览武汉最大的城市湖泊和周边风景区，享受自然美景。',
            link: 'https://baike.baidu.com/item/武汉东湖',
            bestTime: '全天',
            tips: ['租借自行车环湖', '参观梅园', '游览听涛景区']
          },
          {
            name: '武汉海底世界',
            price: 150,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/武汉海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小', '体验海底隧道']
          },
          {
            name: '武汉科技馆',
            price: 50,
            description: '参观武汉科技馆，了解科学知识，体验互动展览。',
            link: 'https://baike.baidu.com/item/武汉科技馆',
            bestTime: '全天',
            tips: ['参与科学实验', '适合家庭活动', '了解最新科技']
          },
          {
            name: '黄鹤楼',
            price: 50,
            description: '参观武汉的标志性建筑黄鹤楼，感受古代文化氛围。',
            link: 'https://baike.baidu.com/item/黄鹤楼',
            bestTime: '全天',
            tips: ['了解黄鹤楼的历史', '拍摄古建筑', '适合文化爱好者']
          },
          {
            name: '汉口江滩',
            price: 0,
            description: '漫步汉口江滩，体验长江边的城市风光。',
            link: 'https://baike.baidu.com/item/汉口江滩',
            bestTime: '全天',
            tips: ['适晨跑或傍晚散步', '观看日落', '参与当的文化活动']
          }
        ],
        activities: [
          {
            name: '武汉夜游长江',
            description: '乘坐游船夜游长江，欣赏武汉两岸的夜景。',
            priceRange: '￥100-200/人',
            bestTime: '夜晚',
            duration: '1-2小时',
            tips: ['提前预订', '选择晴朗的夜晚', '携带相机']
          },
          {
            name: '武汉文化历史游',
            description: '参加导游团深入了解武汉的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          }
        ],
        dining: [
          {
            name: '武汉特色餐厅',
            description: '在武汉的特色餐厅享用地道的湖北菜。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['热干面', '鸭脖', '豆皮'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '武汉精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优', '享受酒店提供的早餐']
          },
          {
            name: '武汉商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华武汉体验之旅，享受顶级的服务和设施，深入体验武汉的奢华与独特。',
        attractions: [
          {
            name: '武汉直升机城市游览',
            price: 5000,
            description: '乘坐直升机俯瞰武汉市区及周边美景，享受独特的空中游览体验。',
            link: 'https://baike.baidu.com/item/武汉直升机游览',
            bestTime: '全天',
            tips: ['提前预订', '选择晴朗的日子', '携带相机']
          },
          {
            name: '武汉国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/武汉国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '武汉顶级SPA体验',
            price: 1500,
            description: '在豪华SPA中心享受全套放松疗程，释放身心压力。',
            link: 'https://baike.baidu.com/item/武汉SPA',
            bestTime: '全天',
            tips: ['提前��订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '武汉奢华购物体验',
            price: '根据购物预算而定',
            description: '在武汉的高端购物中心购买国际品牌产品。',
            link: 'https://baike.baidu.com/item/武汉高端购物',
            bestTime: '全天',
            tips: ['享受个性购物顾问服务', '了解店内特别活动', '利用退税政策']
          },
          {
            name: '武汉米其林餐厅美食之旅',
            price: 1000,
            description: '在武汉的米其林餐厅享用世界级美食。',
            link: 'https://baike.baidu.com/item/武汉米其林餐厅',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '武汉文化私人定制游',
            description: '私人定制的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解武汉文化']
          },
          {
            name: '武汉夜游豪华游艇',
            description: '在豪华游艇上体验武汉夜景，享受高端定制晚餐。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '武汉米其林餐厅',
            description: '在武汉的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '武汉顶五酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '武汉豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '青岛': {
      free: {
        description: '零预算的青岛文化与自然之旅，体验青岛的自然美景和丰富文化。',
        attractions: [
          {
            name: '青岛栈桥',
            price: 0,
            description: '游览青岛的标志性景点栈桥，欣赏海港美景。',
            link: 'https://baike.baidu.com/item/青岛栈桥',
            bestTime: '全天',
            tips: ['早晨或傍晚人少，适合拍照', '注意安全', '欣赏周围的老建筑']
          },
          {
            name: '青岛信号山公园',
            price: 0,
            description: '登上信号山顶，全方位观看青岛市区及海港风光。',
            link: 'https://baike.baidu.com/item/信号山公园',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带水和小食', '适合全家游']
          },
          {
            name: '青岛小麦岛公园',
            price: 0,
            description: '探访小麦岛公园，享受海边的自然风光和清新空气。',
            link: 'https://baike.baidu.com/item/小麦岛公园',
            bestTime: '全天',
            tips: ['适合野餐', '可以观看日出和日落', '拍摄海景']
          },
          {
            name: '青岛第一海水浴场',
            price: 0,
            description: '在第一海水浴场游泳或晒太阳，体验青岛的海滨生活。',
            link: 'https://baike.baidu.com/item/第一海水浴场',
            bestTime: '全天',
            tips: ['夏季人多，早去占位', '携带防晒霜', '注意水域安全']
          },
          {
            name: '青岛天主教堂',
            price: 0,
            description: '参观具有德国建筑风格的青岛天主教堂，感受历史的厚重。',
            link: 'https://baike.baidu.com/item/青岛天主教堂',
            bestTime: '全天',
            tips: ['尊重宗教场所', '适合静心', '了解建筑背景']
          }
        ],
        activities: [
          {
            name: '青岛老城区徒步游',
            description: '徒步探索青岛老城区，体验青岛的历史文化和现代生。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['穿舒适的鞋子', '携带相机', '尝试当地小吃']
          },
          {
            name: '青岛海边瑜伽',
            description: '在海边进行瑜伽练习，享受大自然的宁静和海风的拂面。',
            priceRange: '免费',
            bestTime: '早晨或傍晚',
            duration: '1-2小时',
            tips: ['携带瑜伽垫', '选择人少的地方', '注意防晒']
          }
        ],
        dining: [
          {
            name: '青岛街边海鲜烧烤',
            description: '在青岛街边尝试新鲜的海鲜烧烤，体验地道的海边风味。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['烤扇贝', '烤鱿鱼', '啤酒'],
            tips: ['选择新鲜海鲜', '注意卫生', '现场点烤更美味']
          }
        ],
        accommodation: [
          {
            name: '青岛青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物安全']
          }
        ]
      },
      low: {
        description: '经济实惠的青岛探索之旅，体验青岛的自然美景和丰富文化。',
        attractions: [
          {
            name: '青岛海底世界',
            price: 120,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/青岛海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小孩', '体验海底隧道']
          },
          {
            name: '青岛啤酒博物馆',
            price: 50,
            description: '参观青岛啤酒博物馆，了解啤酒的制作过程和历史。',
            link: 'https://baike.baidu.com/item/青岛啤酒博物馆',
            bestTime: '全天',
            tips: ['尝试啤酒鉴', '了解青岛啤的历史', '购买纪念品']
          },
          {
            name: '青八大关景区',
            price: 15,
            description: '游览八大关景区，欣赏不同国家风格的建筑。',
            link: 'https://baike.baidu.com/item/青岛八大关',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带相机', '适合慢步游览']
          },
          {
            name: '青岛栈桥',
            price: 0,
            description: '游览青岛的标志性景点栈桥，欣赏海港美景。',
            link: 'https://baike.baidu.com/item/青岛栈桥',
            bestTime: '全天',
            tips: ['早晨或傍晚人少，适合拍照', '注意安全', '欣赏周围的老建筑']
          },
          {
            name: '青岛天主教堂',
            price: 0,
            description: '参观具有德国建筑风格的青岛天主教堂，感受历史的厚重。',
            link: 'https://baike.baidu.com/item/青岛天主教堂',
            bestTime: '全天',
            tips: ['尊重宗教场所', '适合静心', '了解建筑背景']
          }
        ],
        activities: [
          {
            name: '青岛老城区徒步游',
            description: '徒步探索青岛老城区，体验青岛的历史文化和现代生活。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['穿舒适的鞋子', '携带相机', '尝试当地小吃']
          },
          {
            name: '青岛海边瑜伽',
            description: '在海边进行瑜伽练习，享受大自然的宁静和海风的拂面。',
            priceRange: '免费',
            bestTime: '早晨或傍晚',
            duration: '1-2小时',
            tips: ['携带瑜伽垫', '选择人少的地方', '注意防晒']
          }
        ],
        dining: [
          {
            name: '青岛街边海鲜烧烤',
            description: '在青岛街边尝试新鲜的海鲜烧烤，体验地道的海边风味。',
            averagePrice: '￥30-80/人',
            bestTime: '晚餐',
            recommendations: ['烤扇贝', '烤鱿鱼', '啤酒'],
            tips: ['选择新鲜海鲜', '注意卫生', '现场点烤更美味']
          }
        ],
        accommodation: [
          {
            name: '青岛经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户价', '确认退房时间']
          },
          {
            name: '青岛背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的青岛探索之旅，平衡成本与舒适度，体验青岛的现代化与文化。',
        attractions: [
          {
            name: '青岛海底世界',
            price: 120,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/青岛海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小孩', '体验海底隧道']
          },
          {
            name: '青岛啤酒博物馆',
            price: 50,
            description: '参观青岛啤酒博物馆，了解啤酒的制过程和历史。',
            link: 'https://baike.baidu.com/item/青岛啤酒博物馆',
            bestTime: '全天',
            tips: ['尝试啤酒品鉴', '了解青岛啤酒的历史', '购买纪念品']
          },
          {
            name: '青岛八大关景区',
            price: 15,
            description: '游览八大关景区，欣赏不同国家风格的建筑。',
            link: 'https://baike.baidu.com/item/青岛八大关',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带相机', '适合慢步游览']
          },
          {
            name: '青岛国际帆船中心',
            price: 200,
            description: '体验帆船运动，观赏国际帆船比赛。',
            link: 'https://baike.baidu.com/item/青岛国际帆船中心',
            bestTime: '全天',
            tips: ['预订体验课程', '适合水上运动爱好者', '注意安全']
          },
          {
            name: '青岛极地海洋世界',
            price: 180,
            description: '参观极地海洋世界，近距离观察极地动物。',
            link: 'https://baike.baidu.com/item/青岛极地海洋世界',
            bestTime: '全天',
            tips: ['观看海豚表演', '了解极地生物', '适合家庭游']
          }
        ],
        activities: [
          {
            name: '青岛文化历史游',
            description: '参加导游团深入了解青岛的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '青岛啤酒节体验',
            description: '参加一年一度的青岛啤酒节，享受啤酒与美食。',
            priceRange: '￥100-200/人',
            bestTime: '夏季',
            duration: '1天',
            tips: ['尝试不同品牌的啤酒', '参与现场活动', '注意饮酒量']
          }
        ],
        dining: [
          {
            name: '青岛特色餐厅',
            description: '在青岛的特色餐厅享用地道的海鲜美食。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['海鲜大咖', '炒海蛎子', '扇贝'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '青岛精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提的早餐']
          },
          {
            name: '青岛商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      }
    },
    '厦门': {
      free: {
        description: '零预算的厦门文化与自然之旅，体验厦门的自然美景和丰富文化。',
        attractions: [
          {
            name: '厦门大学',
            price: 0,
            description: '参观中国最美的大学之一，欣赏其独特的建筑和优美的校园环境。',
            link: 'https://baike.baidu.com/item/厦门大学',
            bestTime: '全天',
            tips: ['尊重学校规定', '适合悠闲漫步', '探访芙蓉湖']
          },
          {
            name: '曾厝垵',
            price: 0,
            description: '漫步在充满艺术气息的小巷中，体验厦门的地道生活方式。',
            link: 'https://baike.baidu.com/item/曾厝垵',
            bestTime: '全天',
            tips: ['品尝地道小吃', '适合拍照', '探索手工艺品店']
          },
          {
            name: '环岛路',
            price: 0,
            description: '骑行或散步在环路上，享受海边的美景和清新空气。',
            link: 'https://baike.baidu.com/item/环岛路',
            bestTime: '全天',
            tips: ['租借自行车', '观赏沿途风景', '适合日出或日落时分']
          },
          {
            name: '鼓浪屿风景名胜区',
            price: 0,
            description: '游览世界文化遗产地，感受其独特的历史和文化。',
            link: 'https://baike.baidu.com/item/鼓浪屿',
            bestTime: '全天',
            tips: ['游览历史建筑', '尝试当地美食', '注意保护文化遗产']
          },
          {
            name: '厦门植物园',
            price: 0,
            description: '探索多样的植物种类，享受大自然的宁静。',
            link: 'https://baike.baidu.com/item/厦门植物园',
            bestTime: '全天',
            tips: ['穿舒适的鞋子', '携带相机', '适合家庭游']
          }
        ],
        activities: [
          {
            name: '厦门文化遗产游',
            description: '参加免费的文化遗产导览活动，深入了解厦门的史和文化。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['预约导览', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '厦门海边瑜伽',
            description: '在海边进行瑜伽练习，享受大自然的宁静和海风的拂面。',
            priceRange: '免费',
            bestTime: '早晨或傍晚',
            duration: '1-2小时',
            tips: ['携带瑜伽垫', '选择人少的地方', '注意防晒']
          }
        ],
        dining: [
          {
            name: '厦门街边小吃',
            description: '在厦门街边尝试各种地道小吃，体验地方特色。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['沙茶面', '花生汤', '海蛎煎'],
            tips: ['选择人气店铺', '注意卫生', '现场点餐更新鲜']
          }
        ],
        accommodation: [
          {
            name: '厦门青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的厦门探索之旅，体验厦门的自然美景和丰富文化。',
        attractions: [
          {
            name: '厦门大学',
            price: 0,
            description: '参观中国最美的大学之一，欣赏其独特的建筑和优美的校园环境。',
            link: 'https://baike.baidu.com/item/厦门大学',
            bestTime: '全天',
            tips: ['尊重学校规定', '适合悠闲漫步', '探访芙蓉湖']
          },
          {
            name: '曾厝垵',
            price: 0,
            description: '漫步在充满艺术气息的小巷中，体验厦门的地道生活方式。',
            link: 'https://baike.baidu.com/item/曾厝垵',
            bestTime: '全天',
            tips: ['品尝地道小吃', '适合拍照', '探索手工艺品店']
          },
          {
            name: '环岛路',
            price: 0,
            description: '骑行或散步在环岛路上，享受海边的美景和清新空气。',
            link: 'https://baike.baidu.com/item/环岛路',
            bestTime: '全天',
            tips: ['租借自行车', '观赏沿途风景', '适合日出或日落时分']
          },
          {
            name: '厦门海底世界',
            price: 150,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/厦门海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小孩', '体验海底隧道']
          },
          {
            name: '鼓浪屿音乐厅',
            price: 100,
            description: '在鼓浪屿音乐厅听一场音乐会，感受音乐与海岛的完美结合。',
            link: 'https://baike.baidu.com/item/鼓浪屿音乐厅',
            bestTime: '查看演出时间',
            tips: ['提前购票', '了解演出信息', '享受音乐盛宴']
          }
        ],
        activities: [
          {
            name: '厦门文化遗产游',
            description: '参加免费的文化遗产导览活动，深入了解厦门的历史和文化。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['预约导览', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '厦门海边瑜伽',
            description: '在海边进行瑜伽练习，享受大自然的宁静和海风的拂面。',
            priceRange: '免费',
            bestTime: '早晨或傍晚',
            duration: '1-2小时',
            tips: ['携带瑜伽垫', '选择人少的地方', '注意防晒']
          }
        ],
        dining: [
          {
            name: '厦门街边小吃',
            description: '在厦门街边尝试各种地道小吃，体验地方特色。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['沙茶面', '花生汤', '海蛎煎'],
            tips: ['选择人气店铺', '注意卫生', '现场点餐更新鲜']
          }
        ],
        accommodation: [
          {
            name: '厦门经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '厦门背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的厦门探索之旅，平衡成本与舒适度，体验厦门的现代化与文化。',
        attractions: [
          {
            name: '厦门大学',
            price: 0,
            description: '参观中国最美的大学之一，欣赏其独特的建筑和优美的校园环境。',
            link: 'https://baike.baidu.com/item/厦门大学',
            bestTime: '全天',
            tips: ['尊重学校规定', '适合悠闲漫步', '探访芙蓉湖']
          },
          {
            name: '曾厝垵',
            price: 0,
            description: '漫步在充满艺术气息的小巷中，体验厦门的地道生活方式。',
            link: 'https://baike.baidu.com/item/曾厝垵',
            bestTime: '全天',
            tips: ['品尝地道小吃', '适合拍照', '探索手工艺品店']
          },
          {
            name: '南普陀寺',
            price: 0,
            description: '参观历史悠久的佛教寺庙，体验宗教文化和精神洗礼。',
            link: 'https://baike.baidu.com/item/南普陀寺',
            bestTime: '全天',
            tips: ['尊重宗教场所', '适合静心', '了解佛教文化']
          },
          {
            name: '厦门海底世界',
            price: 150,
            description: '探索海底世界，观看多种海洋生物，适合家庭游。',
            link: 'https://baike.baidu.com/item/厦门海底世界',
            bestTime: '全天',
            tips: ['购买联票可节省', '适合带小孩', '体验海底隧道']
          },
          {
            name: '鼓浪屿音乐厅',
            price: 100,
            description: '在鼓浪屿音乐厅听一场音乐会，感受音乐与海岛的完美结合。',
            link: 'https://baike.baidu.com/item/鼓浪屿音乐厅',
            bestTime: '查看演出时间',
            tips: ['提前购票', '了解演出信息', '享受音乐盛宴']
          }
        ],
        activities: [
          {
            name: '厦门文化历史游',
            description: '参加导游团深入了解厦门的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '厦门夜游',
            description: '参加夜游活动，欣赏厦门的夜景，体验不同的城市风貌。',
            priceRange: '￥100-200/人',
            bestTime: '夜晚',
            duration: '2-3小时',
            tips: ['穿舒适的鞋子', '携带相机', '享受夜晚的凉爽']
          }
        ],
        dining: [
          {
            name: '厦门特色餐厅',
            description: '在厦的特色餐厅享用地道的海鲜美食。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['沙茶面', '花生汤', '海蛎煎'],
            tips: ['提前预订', '尝试餐���推荐的���色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '厦门精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '厦门商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的厦门体验之旅，享受顶级的服务和设施，深入体验厦门的奢华与独特。',
        attractions: [
          {
            name: '厦门直升机城市游览',
            price: 5000,
            description: '乘坐直升机俯瞰厦门市区周边美景，受独特的空中游览验。',
            link: 'https://baike.baidu.com/item/厦门直升机游览',
            bestTime: '全天',
            tips: ['提前预订', '选择��朗的日子', '携带相机']
          },
          {
            name: '厦门国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/厦门国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '厦门顶级SPA体验',
            price: 1500,
            description: '在豪华SPA中心享受全套放松疗程，释放身心压力。',
            link: 'https://baike.baidu.com/item/厦门SPA',
            bestTime: '全天',
            tips: ['提前预订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '厦门奢华购物体验',
            price: '根据购物预算而定',
            description: '在厦门的高端购物中心购买国际品牌产品。',
            link: 'https://baike.baidu.com/item/厦门高端购物',
            bestTime: '全天',
            tips: ['享受个性化购物顾问服务', '了解店内特别活动', '利用退税政策']
          },
          {
            name: '厦门米其林餐厅美食之旅',
            price: 1000,
            description: '在厦门的米其林餐厅享用世界级美食。',
            link: 'https://baike.baidu.com/item/厦门米其林餐厅',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '厦门文化私人定制游',
            description: '私人定制的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解厦门文化']
          },
          {
            name: '厦门夜游豪华游艇',
            description: '在豪华游艇上体验厦门夜景，享受高端定制晚。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '厦门米其林餐厅',
            description: '在厦门的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '厦门顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '厦门豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '大连': {
      free: {
        description: '零预算的大连文化与自然之旅，体验大连的自然美景和丰富文化。',
        attractions: [
          {
            name: '星海广场',
            price: 0,
            description: '参观大连的地标性广场，欣赏周围的现代建筑和广阔的海景。',
            link: 'https://baike.baidu.com/item/星海广场',
            bestTime: '全天',
            tips: ['适合散步', '观看音乐喷泉', '拍摄城市地标']
          },
          {
            name: '老虎滩',
            price: 0,
            description: '游览著名的海滨风景区，体验海边的自然美景和休闲活动。',
            link: 'https://baike.baidu.com/item/老虎滩',
            bestTime: '全天',
            tips: ['参观雕塑公园', '适合家庭游', '海边日出美景']
          },
          {
            name: '大连森林动物园',
            price: 0,
            description: '参观动物园，近距离观察多种野生动物。',
            link: 'https://baike.baidu.com/item/大连森林动物园',
            bestTime: '全天',
            tips: ['尊重动物', '适合带小孩', '穿舒适的鞋子']
          },
          {
            name: '大连市广播电视塔',
            price: 0,
            description: '登上电视塔，俯瞰大连市的全景。',
            link: 'https://baike.baidu.com/item/大连市广播电视塔',
            bestTime: '全天',
            tips: ['适合摄影', '了解大连历史', '体验高空景观']
          },
          {
            name: '大连人民广场',
            price: 0,
            description: '参观大连的政治和文化中心，体验市民生活。',
            link: 'https://baike.baidu.com/item/大连人民广场',
            bestTime: '全天',
            tips: ['观赏喷泉', '了解市政建筑', '参与市民活动']
          }
        ],
        activities: [
          {
            name: '大连文化遗产游',
            description: '参加免费的文化遗产导览活动，深入了解大连的历史和文化。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['预约导览', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '大连海边瑜伽',
            description: '在海边进行瑜伽练习，享受大自然的宁静和海风的拂面。',
            priceRange: '免费',
            bestTime: '早晨或傍晚',
            duration: '1-2小时',
            tips: ['携带瑜伽垫', '选择人少的地方', '注意防晒']
          }
        ],
        dining: [
          {
            name: '大连街边小吃',
            description: '在大连街边试各种地道小吃，体验地方特色。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['烤冷面', '海鲜烧烤', '锅贴'],
            tips: ['选择人气店铺', '注意卫生', '现场点餐更新鲜']
          }
        ],
        accommodation: [
          {
            name: '大连青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      medium: {
        description: '舒适的大连探索之旅，平衡成本与舒适度，体验大连的现代化与文化。',
        attractions: [
          {
            name: '星海广场',
            price: 0,
            description: '参观大连的地标性广场，欣赏周围的现代建筑和广阔的海景。',
            link: 'https://baike.baidu.com/item/星海广场',
            bestTime: '全天',
            tips: ['适合散步', '观看音乐喷泉', '拍摄城市地标']
          },
          {
            name: '老虎滩',
            price: 0,
            description: '游览著名的海滨风景区，体验海边的自然美景和休闲活动。',
            link: 'https://baike.baidu.com/item/老虎滩',
            bestTime: '全天',
            tips: ['参观雕塑公园', '适合家庭游', '海边日出美景']
          },
          {
            name: '大连森林动物园',
            price: 50,
            description: '参观动物园，近距离观察多种野生动物。',
            link: 'https://baike.baidu.com/item/大连森林动物园',
            bestTime: '全天',
            tips: ['尊重动物', '适合带小孩', '穿舒适的鞋子']
          },
          {
            name: '大连市广播电视塔',
            price: 60,
            description: '登上电视塔，俯瞰大连市的全景。',
            link: 'https://baike.baidu.com/item/大连市广播电视塔',
            bestTime: '全天',
            tips: ['适合摄影', '了解大连历史', '体验高空景观']
          },
          {
            name: '大连人民广场',
            price: 0,
            description: '参观大连的政治和文化中心，体验市民生活。',
            link: 'https://baike.baidu.com/item/大连人民广场',
            bestTime: '全天',
            tips: ['观赏喷泉', '了解市政建筑', '参与市民活动']
          }
        ],
        activities: [
          {
            name: '大连文化历史游',
            description: '参加导游团深入了解大连的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '大连夜游',
            description: '参加夜游活动，欣赏大连的夜景，体验不同的城市风貌。',
            priceRange: '￥100-200/人',
            bestTime: '夜晚',
            duration: '2-3小时',
            tips: ['穿舒适的鞋子', '携带相机', '享受夜晚的凉爽']
          }
        ],
        dining: [
          {
            name: '大连特色餐厅',
            description: '在大连的特色餐厅享用地道的海鲜美食。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['烤冷面', '海鲜烧烤', '锅贴'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '大连精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '大连商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的大连体验之旅，享受顶级的服务和设施，深入体验大连的奢华与独特。',
        attractions: [
          {
            name: '大连直升机城市游览',
            price: 5000,
            description: '乘坐直升机俯瞰大连市区及周边美景，享受独特的空中游览体验。',
            link: 'https://baike.baidu.com/item/大连直升机游览',
            bestTime: '全天',
            tips: ['提前预订', '选择晴朗的日子', '携带相机']
          },
          {
            name: '大连国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/大连国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '大连顶级SPA体验',
            price: 1500,
            description: '在豪华SPA中心享受全套放松疗程，释放身心压力。',
            link: 'https://baike.baidu.com/item/大连SPA',
            bestTime: '全天',
            tips: ['提前预订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '大连奢华购物体验',
            price: '根据购物预算而定',
            description: '在大连的高端购物中心购买国际品牌产品。',
            link: 'https://baike.baidu.com/item/大连高端购物',
            bestTime: '全天',
            tips: ['享受个性化购物顾问服务', '了解店内特别活动', '利用退税政策']
          },
          {
            name: '大连米其林餐厅美食之旅',
            price: 1000,
            description: '在大连的米其林餐厅享用世界级美食。',
            link: 'https://baike.baidu.com/item/大连米其林餐厅',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '大连文化私人定制游',
            description: '私人定制的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解大连文化']
          },
          {
            name: '大连夜游豪华游艇',
            description: '在豪华游艇上体验大连夜景，享受高端定制晚餐。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '大连米其林餐厅',
            description: '在大连的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '大连顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '大连豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '哈尔滨': {
      free: {
        description: '零预算的哈尔滨文化与自然之旅，体验哈尔滨的自然美景和丰富文化。',
        attractions: [
          {
            name: '中央大街',
            price: 0,
            description: '漫步在哈尔滨最著名的商业街，欣赏俄罗斯风格的建筑。',
            link: 'https://baike.baidu.com/item/中央大街',
            bestTime: '全天',
            tips: ['适合散步', '品尝地道的俄式冰淇淋', '拍摄建筑']
          },
          {
            name: '松花江畔',
            price: 0,
            description: '沿着松花江散步，享受河畔的自然风光。',
            link: 'https://baike.baidu.com/item/松花江',
            bestTime: '全天',
            tips: ['适合晨跑', '观看日出或日落', '冬季可观赏冰雕']
          },
          {
            name: '哈尔滨市红博园',
            price: 0,
            description: '参观红色主题的文化公园，了解哈尔滨的历史。',
            link: 'https://baike.baidu.com/item/哈尔滨市红博园',
            bestTime: '全天',
            tips: ['了解红色文化', '适合拍照', '参与文化活动']
          },
          {
            name: '哈尔滨工程大学',
            price: 0,
            description: '参观具有历史意义的大学校园，感受学术氛围。',
            link: 'https://baike.baidu.com/item/哈尔滨工程大学',
            bestTime: '全天',
            tips: ['尊重学术环境', '适合散步', '探访科技展览']
          },
          {
            name: '哈尔滨音乐公园',
            price: 0,
            description: '在音乐主题的公园中放松心情，享受户外音乐表演。',
            link: 'https://baike.baidu.com/item/哈尔滨音乐公园',
            bestTime: '全天',
            tips: ['参与免费音乐会', '适合家庭游', '体验户外活动']
          }
        ],
        activities: [
          {
            name: '哈尔滨历史文化游',
            description: '参加免费的历史文化导览活动，深入了解哈尔滨的历史和文化。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['预约导览', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '哈尔滨市区自行车游',
            description: '租用自行车免费游览哈尔滨市区，探索城市的每一个角落。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '1-2小时',
            tips: ['检查自行车状况', '规划路线', '注意安全']
          }
        ],
        dining: [
          {
            name: '哈尔滨街边小吃',
            description: '在哈尔滨街边尝试各种地道小吃，体验地方特色。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['烤冷面', '红肠', '锅包肉'],
            tips: ['选择人气店铺', '注意卫生', '现场点餐更新鲜']
          }
        ],
        accommodation: [
          {
            name: '哈尔滨青年旅社',
            type: '青旅',
            price: '￥50起/晚',
            location: '市中心',
            features: ['免费WiFi', '24小时热水', '行李寄存'],
            tips: ['提前预订', '携带锁', '注意个人物品安全']
          }
        ]
      },
      low: {
        description: '经济实惠的哈尔滨探索之旅，体验哈尔滨的自然美景和丰富文化。',
        attractions: [
          {
            name: '中央大街',
            price: 0,
            description: '漫步在哈尔滨最著名的商业街，欣赏俄罗斯风格的建筑。',
            link: 'https://baike.baidu.com/item/中央大街',
            bestTime: '全天',
            tips: ['适合散步', '品尝地道的俄式冰淇淋', '拍摄建筑']
          },
          {
            name: '松花江畔',
            price: 0,
            description: '沿着松花江散步，享受河畔的自然风光。',
            link: 'https://baike.baidu.com/item/松花江',
            bestTime: '全天',
            tips: ['适合晨跑', '观看日出或日落', '冬季可观赏冰雕']
          },
          {
            name: '哈尔滨市红博园',
            price: 0,
            description: '参观红色主题的文化公园，了解哈尔滨的历史。',
            link: 'https://baike.baidu.com/item/哈尔滨市红博园',
            bestTime: '全天',
            tips: ['了解红色文化', '适合拍照', '参与文化活动']
          },
          {
            name: '哈尔滨工程大学',
            price: 0,
            description: '参观具有历史意义的大学校园，感受学术氛围。',
            link: 'https://baike.baidu.com/item/哈尔滨工程大学',
            bestTime: '全天',
            tips: ['尊重学术环境', '适合散步', '探访科技展览']
          },
          {
            name: '尔滨音乐公园',
            price: 0,
            description: '在音乐主题的公园中放松心情，享受户外音乐表演。',
            link: 'https://baike.baidu.com/item/哈尔滨音乐公园',
            bestTime: '全天',
            tips: ['参与免费音乐会', '适合家庭游', '体验户外活动']
          }
        ],
        activities: [
          {
            name: '哈尔滨历史文化游',
            description: '参加免费的历史文化导览活动，深入了解哈尔滨的历史和文化。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['预约导览', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '哈尔滨市区自行车游',
            description: '租用自行车免费游览哈尔滨市区，探索城市的每一个角落。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '1-2小时',
            tips: ['检查自行车状况', '规划路线', '注意安全']
          }
        ],
        dining: [
          {
            name: '哈尔滨街边小吃',
            description: '在哈尔滨街边尝试各种地道小吃，体验地方特色。',
            averagePrice: '￥20-50/人',
            bestTime: '晚餐',
            recommendations: ['烤冷面', '红肠', '锅包肉'],
            tips: ['选择人气店铺', '注意卫生', '现场点餐更新鲜']
          }
        ],
        accommodation: [
          {
            name: '哈尔滨经济型酒店',
            type: '经济酒店',
            price: '￥100-200/晚',
            location: '近市中心',
            features: ['基本设施齐全', '交通便利', '清洁卫生'],
            tips: ['提前预订', '查看用户评价', '确认退房时间']
          },
          {
            name: '哈尔滨背包客旅馆',
            type: '背包客旅馆',
            price: '￥50-100/晚',
            location: '市中心',
            features: ['社交氛围佳', '提供旅游信息', '安全性高'],
            tips: ['预订含早餐的选项', '了解周边环境', '使用公共区域']
          }
        ]
      },
      medium: {
        description: '舒适的哈尔滨探索之旅，平衡成本与舒适度，体验哈尔滨的现代化与文化。',
        attractions: [
          {
            name: '中央大街',
            price: 0,
            description: '漫步在哈尔滨最著名的商业街，欣赏俄罗斯风格的建筑。',
            link: 'https://baike.baidu.com/item/中央大街',
            bestTime: '全天',
            tips: ['适合散步', '品尝地道的俄式冰淇淋', '拍摄建筑']
          },
          {
            name: '松花江畔',
            price: 0,
            description: '沿着松花江散步，享受河畔的自然风光。',
            link: 'https://baike.baidu.com/item/松花江',
            bestTime: '全天',
            tips: ['适合晨跑', '观看日出或日落', '冬季可观赏冰雕']
          },
          {
            name: '哈尔滨极地馆',
            price: 150,
            description: '探索极地动物的生活环境，近距离观察北极熊、企鹅等。',
            link: 'https://baike.baidu.com/item/哈尔滨极地馆',
            bestTime: '全天',
            tips: ['购买联票优惠', '适合家庭游', '穿暖和的衣服']
          },
          {
            name: '圣索菲亚教堂',
            price: 20,
            description: '参观哈尔滨标志性的俄罗斯建筑，了解其历史背景。',
            link: 'https://baike.baidu.com/item/圣索菲亚教堂',
            bestTime: '全天',
            tips: ['了解教堂历史', '适合摄影', '参观时请保持安静']
          },
          {
            name: '哈尔滨冰雪大世界',
            price: 330,
            description: '体验世界著名的冰雪艺术，享受冰雪游乐设施。',
            link: 'https://baike.baidu.com/item/哈尔滨冰雪大世界',
            bestTime: '冬季',
            tips: ['穿戴保暖', '购票可选择电子票更便捷', '晚上灯光更美']
          }
        ],
        activities: [
          {
            name: '哈尔滨文化历史游',
            description: '参加导游团深入了解哈尔滨的历史和文化。',
            priceRange: '￥150-300/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '穿舒适的鞋子', '携带水和小食']
          },
          {
            name: '哈尔滨夜游',
            description: '参加夜游活动，欣赏哈尔滨的夜景，体验不同的城市风貌。',
            priceRange: '￥100-200/人',
            bestTime: '夜晚',
            duration: '2-3小时',
            tips: ['穿舒适的鞋子', '携带相机', '享受夜晚的凉爽']
          }
        ],
        dining: [
          {
            name: '哈尔滨特色餐厅',
            description: '在哈尔滨的特色餐厅享用地道的东北菜。',
            averagePrice: '￥100-200/人',
            bestTime: '午餐或晚餐',
            recommendations: ['烤冷面', '红肠', '锅包肉'],
            tips: ['提前预订', '尝试餐厅推荐的特色菜', '询问服务员食材来源']
          }
        ],
        accommodation: [
          {
            name: '哈尔滨精品酒店',
            type: '精品酒店',
            price: '￥300-500/晚',
            location: '市中心',
            features: ['设计感装潢', '优质服务', '便利的地理位置'],
            tips: ['选择有景观的房间', '提前预订以获取优惠', '享受酒店提供的早餐']
          },
          {
            name: '哈尔滨商务酒店',
            type: '商务酒店',
            price: '￥200-400/晚',
            location: '近历史景点',
            features: ['商务中心完善', '交通便利', '近购物中心'],
            tips: ['适合商务出行', '检查客房设施', '利用酒店健身房']
          }
        ]
      },
      high: {
        description: '豪华的哈尔滨体验之旅，享受顶级的服务和设施，深入体验哈尔滨的奢华与独特。',
        attractions: [
          {
            name: '哈尔滨直升机城市游览',
            price: 5000,
            description: '乘坐直升机俯瞰哈尔滨市区及周边美景，享受独特的空中游览体验。',
            link: 'https://baike.baidu.com/item/哈尔滨直升机游览',
            bestTime: '全天',
            tips: ['提前预订', '选择晴朗的日子', '携带相机']
          },
          {
            name: '哈尔滨国际高尔夫俱乐部',
            price: 2000,
            description: '在国际标准的高尔夫球场上挥杆，享受高端体育休闲。',
            link: 'https://baike.baidu.com/item/哈尔滨国际高尔夫俱乐部',
            bestTime: '全天',
            tips: ['预约教练', '享受俱乐部设施', '参加社交活动']
          },
          {
            name: '哈尔滨顶级SPA体验',
            price: 1500,
            description: '在豪华SPA中心享受全套放松疗程，释放身心压力。',
            link: 'https://baike.baidu.com/item/哈尔滨SPA',
            bestTime: '全天',
            tips: ['提前预订', '选择多种护理套餐', '享受私密环境']
          },
          {
            name: '哈尔滨奢华购物体验',
            price: '根据购物预算而定',
            description: '在哈尔滨的高端购物中心购买国际品牌产品。',
            link: 'https://baike.baidu.com/item/哈尔滨高端购物',
            bestTime: '全天',
            tips: ['享受个性化购物顾问服务', '了解店内特别活动', '利用退税政策']
          },
          {
            name: '哈尔滨米其林餐厅美食之旅',
            price: 1000,
            description: '在哈尔滨的米其林餐厅享用世界级美食。',
            link: 'https://baike.baidu.com/item/哈尔滨米其林餐厅',
            bestTime: '午餐或晚餐',
            tips: ['提前预订', '尝试名厨特制菜单', '搭配精选葡萄酒']
          }
        ],
        activities: [
          {
            name: '哈尔滨文化私人定制游',
            description: '私人定制的文化深度游，包括历史遗址和博物馆的深度解析。',
            priceRange: '￥2000-4000/人',
            bestTime: '全天',
            duration: '全天',
            tips: ['预约专业导游', '定制行程', '深入了解哈尔滨文化']
          },
          {
            name: '哈尔滨夜游豪华游艇',
            description: '在豪华游艇上体验哈尔滨夜景，享受高端定制晚餐。',
            priceRange: '￥3000-5000/人',
            bestTime: '夜晚',
            duration: '3-4小时',
            tips: ['提前预订', '享受定制晚餐', '穿戴正式']
          }
        ],
        dining: [
          {
            name: '哈尔滨米其林餐厅',
            description: '在哈尔滨的米其林餐厅享用世界级美食。',
            averagePrice: '￥800-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['法式海鲜塔', '松露牛排', '手工甜点'],
            tips: ['提前预订', '尝试餐厅推荐的葡萄酒', '享受慢食']
          }
        ],
        accommodation: [
          {
            name: '哈尔滨顶级五星酒店',
            type: '五星酒店',
            price: '￥1500-3000/晚',
            location: '市中心',
            features: ['豪华装潢', '顶级服务', '绝佳地理位置'],
            tips: ['选择江景房', '利用酒店提供的豪华设施', '享受定制服务']
          },
          {
            name: '哈尔滨豪华精品酒店',
            type: '精品酒店',
            price: '￥1200-2500/晚',
            location: '近历史景点',
            features: ['个性化服务', '设计感装潢', '私密性好'],
            tips: ['预订包含早餐的选项', '询问关于城市活动的信息', '享受酒店的SPA服务']
          }
        ]
      }
    },
    '苏州': {
      free: {
        description: '零预算的苏州文化与园林之旅，体验苏州的江南韵味和历史文化。',
        attractions: [
          {
            name: '平江路历史街区',
            price: 0,
            description: '漫步在千年古街，体验苏州传统民居与市井生活。',
            link: 'https://baike.baidu.com/item/平江路',
            bestTime: '全天',
            tips: ['适合散步', '品尝地道小吃', '拍摄古建筑']
          },
          {
            name: '山塘街',
            price: 0,
            description: '苏州最古老的商业街之一，体验江南水乡风情。',
            link: 'https://baike.baidu.com/item/山塘街',
            bestTime: '全天',
            tips: ['���晚游览最佳', '观赏古建筑', '体验水乡文化']
          },
          {
            name: '金鸡湖景区',
            price: 0,
            description: '欣赏现代苏州的城市景观和湖光山色。',
            link: 'https://baike.baidu.com/item/金鸡湖',
            bestTime: '全天',
            tips: ['适合晨跑', '观看日落', '夜景优美']
          },
          {
            name: '护城河夜景',
            price: 0,
            description: '漫步在古城墙遗址公园，欣赏护城河夜景。',
            link: 'https://baike.baidu.com/item/苏州护城河',
            bestTime: '傍晚和夜晚',
            tips: ['傍晚最佳', '带相机拍摄', '适合散步']
          },
          {
            name: '寒山寺外景',
            price: 0,
            description: '欣赏千年古刹外景，感受"姑苏城外寒山寺"的意境。',
            link: 'https://baike.baidu.com/item/寒山寺',
            bestTime: '全天',
            tips: ['欣赏建筑外观', '听寺院钟声', '拍照留念']
          }
        ],
        activities: [
          {
            name: '苏州园林外围游览',
            description: '在各大园林外围参观，了解苏州园林建筑特色。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['了解园林历史', '观察建筑特色', '拍摄园林外观']
          },
          {
            name: '古城区徒步',
            description: '徒步探索苏州古城区的街巷和历史遗迹。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['准备舒适鞋子', '带水和零食', '规划路线']
          }
        ],
        dining: [
          {
            name: '观前街小吃',
            description: '品尝苏州传统特色小吃。',
            averagePrice: '￥20-50/人',
            bestTime: '全天',
            recommendations: ['松鼠桂鱼', '东山小肉', '苏式汤面'],
            tips: ['选择人气店铺', '注意卫生', '避开用餐高峰']
          },
          {
            name: '平江路美食',
            description: '体验地道的苏州街边小吃。',
            averagePrice: '￥15-40/人',
            bestTime: '下午和晚上',
            recommendations: ['桂花糖芋苗', '鸭血粉丝汤', '苏式点心'],
            tips: ['认准老字号', '适量品尝', '关注性价比']
          }
        ],
        accommodation: {
          options: [
            {
              name: '苏州青年旅舍',
              type: '青旅',
              price: '￥50-80/晚',
              location: '古城区',
              features: ['免费WiFi', '公共厨房', '24小时热水'],
              tips: ['提前预订', '注意安全', '保管好贵重物品']
            },
            {
              name: '苏州经济型住宿',
              type: '经济旅馆',
              price: '￥80-120/晚',
              location: '市中心周边',
              features: ['基础设施', '独立卫浴', '空调'],
              tips: ['查看评价', '确认位置', '保留发票']
            }
          ],
          tips: [
            '建议提前3天预订',
            '携带身份证办理入住',
            '选择交通便利的位置',
            '注意查看退订政策'
          ]
        }
      },
      low: {
        description: '经济实惠的苏州探索之旅，体验苏州的自然美景和丰富文化。',
        attractions: [
          {
            name: '平江路特色民宿',
            price: '￥200-400/晚',
            description: '体验苏州传统民居，感受江南水乡风情。',
            link: 'https://baike.baidu.com/item/苏州特色民宿',
            bestTime: '全年',
            tips: ['提前预订热门房型', '咨询停车位', '了解周边设施']
          },
          {
            name: '苏州快捷酒店',
            price: '￥180-300/晚',
            description: '标准化服务，干净整洁，交通便利。',
            link: 'https://baike.baidu.com/item/苏州快捷酒店',
            bestTime: '全年',
            tips: ['办理会员可享优惠', '建议提前预订', '确认房型']
          }
        ],
        activities: [
          {
            name: '苏州园林外围游览',
            description: '在各大园林外围参观，了解苏州园林建筑特色。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['了解园林历史', '观察建筑特色', '拍摄园林外观']
          },
          {
            name: '古城区徒步',
            description: '徒步探索苏州古城区的街巷和历史遗迹。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['准备舒适鞋子', '带水和零食', '规划路线']
          }
        ],
        dining: [
          {
            name: '观前街小吃',
            description: '品尝苏州传统特色小吃。',
            averagePrice: '￥20-50/人',
            bestTime: '全天',
            recommendations: ['松鼠桂鱼', '东山小肉', '苏式汤面'],
            tips: ['选择人气店铺', '注意卫生', '避开用餐高峰']
          },
          {
            name: '平江路美食',
            description: '体验地道的苏州街边小吃。',
            averagePrice: '￥15-40/人',
            bestTime: '下午和晚上',
            recommendations: ['桂花糖芋苗', '鸭血粉丝汤', '苏式点心'],
            tips: ['认准老字号', '适量品尝', '关注性价比']
          }
        ],
        accommodation: {
          options: [
            {
              name: '苏州青年旅舍',
              type: '青旅',
              price: '￥50-80/晚',
              location: '古城区',
              features: ['免费WiFi', '公共厨房', '24小时热水'],
              tips: ['提前预订', '注意安全', '保管好贵重物品']
            },
            {
              name: '苏州经济型住宿',
              type: '经济旅馆',
              price: '￥80-120/晚',
              location: '市中心周边',
              features: ['基础设施', '独立卫浴', '空调'],
              tips: ['查看评价', '确认位置', '保留发票']
            }
          ],
          tips: [
            '建议提前3天预订',
            '携带身份证办理入住',
            '选择交通便利的位置',
            '注意查看退订政策'
          ]
        }
      },
      medium: {
        description: '舒适的苏州探索之旅，平衡成本与舒适度，体验苏州的现代化与文化。',
        attractions: [
          {
            name: '苏州商务酒店',
            price: '￥500-800/晚',
            description: '商务型酒店，设施完善，自助早餐，预订湖景房，享受行政礼遇，使用酒店接送服务。',
            link: 'https://baike.baidu.com/item/苏州商务酒店',
            bestTime: '全年',
            tips: ['预订湖景房', '享受行政礼遇', '使用酒店接送服务']
          },
          {
            name: '苏州精品民宿',
            price: '￥600-1000/晚',
            description: '高端民宿，私密空间，定制服务，文化体验，提前沟通特殊需求，体验特色服务，预约文化活动。',
            link: 'https://baike.baidu.com/item/苏州精品民宿',
            bestTime: '全年',
            tips: ['提前沟通特殊需求', '体验特色服务', '预约文化活动']
          }
        ],
        activities: [
          {
            name: '苏州园林外围游览',
            description: '在各大园林外围参观，了解苏州园林建筑特色。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '半天',
            tips: ['了解园林历史', '观察建筑特色', '拍摄园林外观']
          },
          {
            name: '古城区徒步',
            description: '徒步探索苏州古城区的街巷和历史遗迹。',
            priceRange: '免费',
            bestTime: '全天',
            duration: '2-3小时',
            tips: ['准备舒适鞋子', '带水和零食', '规划路线']
          }
        ],
        dining: [
          {
            name: '观前街小吃',
            description: '品尝苏州传统特色小吃。',
            averagePrice: '￥20-50/人',
            bestTime: '全天',
            recommendations: ['松鼠桂鱼', '东山小肉', '苏式汤面'],
            tips: ['选择人气店铺', '注意卫生', '避开用餐高峰']
          },
          {
            name: '平江路美食',
            description: '体验地道的苏州街边小吃。',
            averagePrice: '￥15-40/人',
            bestTime: '下午和晚上',
            recommendations: ['桂花糖芋苗', '鸭血粉丝汤', '苏式点心'],
            tips: ['认准老字号', '适量品尝', '关注性价比']
          }
        ],
        accommodation: {
          options: [
            {
              name: '苏州青年旅舍',
              type: '青旅',
              price: '￥50-80/晚',
              location: '古城区',
              features: ['免费WiFi', '公共厨房', '24小时热水'],
              tips: ['提前预订', '注意安全', '保管好贵重物品']
            },
            {
              name: '苏州经济型住宿',
              type: '经济旅馆',
              price: '￥80-120/晚',
              location: '市中心周边',
              features: ['基础设施', '独立卫浴', '空调'],
              tips: ['查看评价', '确认位置', '保留发票']
            }
          ],
          tips: [
            '建议提前3天预订',
            '携带身份证办理入住',
            '选择交通便利的位置',
            '注意查看退订政策'
          ]
        }
      },
      high: {
        description: '豪华的苏州顶级体验之旅，尊享私密定制服务，深度体验苏州园林文化与现代奢华。',
        attractions: [
          {
            name: '苏州园林私家定制游',
            price: 3000,
            description: '专家导游带领，在正常开放时间前独享园林美景，深度解读园林文化。',
            link: 'https://baike.baidu.com/item/苏州园林',
            bestTime: '清晨或傍晚',
            tips: ['预约专家讲解', '特殊时段游览', '专业摄影跟拍']
          },
          {
            name: '直升机俯瞰苏州',
            price: 5000,
            description: '乘坐直升机鸟瞰苏州古城与现代都市的完美融合。',
            link: 'https://baike.baidu.com/item/苏州航空',
            bestTime: '晴朗天气',
            tips: ['提前预约', '选择最佳天气', '准备摄影器材']
          },
          {
            name: '水乡豪华游艇之旅',
            price: 2000,
            description: '包船游览苏州水乡，体验江南水乡的独特魅力。',
            link: 'https://baike.baidu.com/item/苏州水乡',
            bestTime: '下午到傍晚',
            tips: ['定制行程', '享用船上美食', '欣赏日落']
          },
          {
            name: '私人定制文化之旅',
            price: 3500,
            description: '参观私人收藏馆，与艺术家交流，体验传统工艺。',
            link: 'https://baike.baidu.com/item/苏州文化',
            bestTime: '全天',
            tips: ['预约艺术家', '收藏品鉴赏', '工艺品定制']
          },
          {
            name: '高尔夫休闲体验',
            price: 2500,
            description: '在顶级高尔夫球场挥杆，享受运动与休闲。',
            link: 'https://baike.baidu.com/item/苏州高尔夫',
            bestTime: '上午或下午',
            tips: ['预约教练', '选择最佳场地', '享用会所服务']
          }
        ],
        activities: [
          {
            name: '苏州园林私密茶会',
            description: '在私家园林中品茗，聆听古琴，体验传统文化。',
            priceRange: '￥1500-2500/人',
            bestTime: '下午',
            duration: '3-4小时',
            tips: ['预约私人场地', '品鉴名茶', '欣赏传统表演']
          },
          {
            name: '苏绣大师课程',
            description: '跟随苏绣大师学习刺绣艺术，定制专属作品。',
            priceRange: '￥2000-3000/人',
            bestTime: '全天',
            duration: '4-6小时',
            tips: ['预约大师时间', '选择喜爱的主题', '收藏定制作品']
          }
        ],
        dining: [
          {
            name: '米其林星级餐厅',
            description: '享用顶级主厨定制的苏帮菜。',
            averagePrice: '￥1000-1500/人',
            bestTime: '午餐或晚餐',
            recommendations: ['时令山珍', '私房特制', '名贵海鲜'],
            tips: ['提前预订', '选择主厨特餐', '搭配顶级佳酿']
          },
          {
            name: '私家园林晚宴',
            description: '在私密园林环境中享用定制晚宴。',
            averagePrice: '￥1500-2000/人',
            bestTime: '晚餐',
            recommendations: ['定制菜单', '特色演出', '私密空间'],
            tips: ['预约场地', '定制菜单', '安排专场表演']
          }
        ],
        accommodation: {
          options: [
            {
              name: '苏州奢华酒店',
              type: '五星豪华酒店',
              price: '￥2000-3500/晚',
              location: '金鸡湖CBD',
              features: ['豪华套房', '私人管家', '米其林餐厅'],
              tips: ['选择湖景套房', '预约SPA', '享受管家服务']
            },
            {
              name: '苏州古宅精品酒店',
              type: '奢华精品酒店',
              price: '￥1800-3000/晚',
              location: '平江路历史区',
              features: ['私家园林', '古宅改建', '专属管家'],
              tips: ['体验传统建筑', '享受定制服务', '品味江南生活']
            }
          ],
          tips: [
            '建议提前两周预订',
            '可要求专车接送',
            '预约私人管家服务',
            '了解会员特权'
          ]
        }
      }
    }
  }
};

function generatePlan(destination, budget) {
  // 获取预算等级
  let budgetLevel;
  if (budget <= 1000) budgetLevel = 'free';
  else if (budget <= 5000) budgetLevel = 'low';
  else if (budget <= 10000) budgetLevel = 'medium';
  else budgetLevel = 'high';

  // 获取目的地信息
  const destinationInfo = travelPlans.destinations[destination]?.[budgetLevel] || {
    description: '暂无该城市的旅行方案',
    attractions: [],
    activities: [],
    dining: [],
    tips: ['建议提前规划行程']
  };

  // 生成预算分配
  const budgetPlan = travelPlans.budget[budgetLevel];

  return {
    destination,
    budget,
    budgetLevel,
    budgetAllocation: {
      transportation: {
        amount: Math.round(budget * budgetPlan.transportation.percentage),
        ...budgetPlan.transportation
      },
      accommodation: {
        amount: Math.round(budget * budgetPlan.accommodation.percentage),
        ...budgetPlan.accommodation
      },
      food: {
        amount: Math.round(budget * budgetPlan.food.percentage),
        ...budgetPlan.food
      },
      activities: {
        amount: Math.round(budget * budgetPlan.activities.percentage),
        ...budgetPlan.activities
      }
    },
    destinationInfo
  };
}

// 只导出一次
export default travelPlans;
export { generatePlan };