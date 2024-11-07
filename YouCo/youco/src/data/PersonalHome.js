export const personalHomeData = {
    // 用户基本信息
    userInfo: {
      id: 1,
      username: "Jackson",
      avatar: require('@/assets/Person.jpg'),
      level: 5,
      joinDate: "2023-01-01",
      location: "天津"
    },
  
    // 用户统计数据
    stats: {
      followers: 4259741,
      following: 256,
      posts: 42,
      likes: 1547492
    },
  
    // 用户成就
    achievements: [
      {
        id: 1,
        title: "探索达人",
        icon: "mdi-compass",
        description: "已探索超过10个城市"
      },
      {
        id: 2,
        title: "社交达人",
        icon: "mdi-account-group",
        description: "已结识超过50位好友"
      }
    ],
  
    // 用户旅行记录
    travelHistory: [
      {
        id: 1,
        destination: "北京",
        date: "2024-02-15",
        photos: 12,
        rating: 4.5
      },
      {
        id: 2,
        destination: "成都",
        date: "2024-01-20",
        photos: 100,
        rating: 10
      },
      {
        id: 3,
        destination: "天津",
        date: "2023-01-20",
        photos: 14,
        rating: 2
      },
      {
        id: 4,
        destination: "东京",
        date: "2022-01-20",
        photos: 21,
        rating: 0.1
      }
    ],
  
    // 用户收藏的目的地
    savedDestinations: [
      {
        id: 1,
        name: "成都",
        type: "幸福之都",
        imageUrl: require('@/assets/pixian.png')
      },
      {
        id: 2,
        name: "三亚",
        type: "海滨度假",
        imageUrl: require('@/assets/sanya.png')
      },
      {
        id: 3,
        name: "丽江",
        type: "古城文化",
        imageUrl: require('@/assets/lijiang.png')
      }
    ]
  }