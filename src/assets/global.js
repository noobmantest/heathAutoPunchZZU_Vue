const host = 'http://81.70.250.230:8889/'
// const host = 'http://127.0.0.1:8081/'
// const host = 'http://192.168.123.175:8081/'
function get_province(province, address) {
  for (let i = 0; i < province.length; i++) {
    if (province[i].address == address) {
      return province.value
    }
  }
}

const province = [{
    "address": "110100",
    "value": "北京市--市辖区"
  },
  {
    "address": "110200",
    "value": "北京市--县"
  },
  {
    "address": "120100",
    "value": "天津市--市辖区"
  }, {
    "address": "120200",
    "value": "天津市--县"
  },
  {
    "address": "130100",
    "value": "石家庄市"
  },
  {
    "address": "130200",
    "value": "唐山市"
  },
  {
    "address": "130300",
    "value": "秦皇岛市"
  },
  {
    "address": "130400",
    "value": "邯郸市"
  },
  {
    "address": "130500",
    "value": "邢台市"
  },
  {
    "address": "130600",
    "value": "保定市"
  },
  {
    "address": "130700",
    "value": "张家口市"
  },
  {
    "address": "130800",
    "value": "承德市"
  },
  {
    "address": "130900",
    "value": "沧州市"
  },
  {
    "address": "131000",
    "value": "廊坊市"
  },
  {
    "address": "131100",
    "value": "衡水市"
  },
  {
    "address": "140100",
    "value": "太原市"
  },
  {
    "address": "140200",
    "value": "大同市"
  },
  {
    "address": "140300",
    "value": "阳泉市"
  },
  {
    "address": "140400",
    "value": "长治市"
  },
  {
    "address": "140500",
    "value": "晋城市"
  },
  {
    "address": "140600",
    "value": "朔州市"
  },
  {
    "address": "140700",
    "value": "晋中市"
  },
  {
    "address": "140800",
    "value": "运城市"
  },
  {
    "address": "140900",
    "value": "忻州市"
  },
  {
    "address": "141000",
    "value": "临汾市"
  },
  {
    "address": "141100",
    "value": "吕梁市"
  },
  {
    "address": "150100",
    "value": "呼和浩特市"
  },
  {
    "address": "150200",
    "value": "包头市"
  },
  {
    "address": "150300",
    "value": "乌海市"
  },
  {
    "address": "150400",
    "value": "赤峰市"
  },
  {
    "address": "150500",
    "value": "通辽市"
  },
  {
    "address": "150600",
    "value": "鄂尔多斯市"
  },
  {
    "address": "150700",
    "value": "呼伦贝尔市"
  },
  {
    "address": "150800",
    "value": "巴彦淖尔市"
  },
  {
    "address": "150900",
    "value": "乌兰察布市"
  },
  {
    "address": "152200",
    "value": "兴安盟"
  },
  {
    "address": "152500",
    "value": "锡林郭勒盟"
  },
  {
    "address": "152900",
    "value": "阿拉善盟"
  },
  {
    "address": "210100",
    "value": "沈阳市"
  },
  {
    "address": "210200",
    "value": "大连市"
  },
  {
    "address": "210300",
    "value": "鞍山市"
  },
  {
    "address": "210400",
    "value": "抚顺市"
  },
  {
    "address": "210500",
    "value": "本溪市"
  },
  {
    "address": "210600",
    "value": "丹东市"
  },
  {
    "address": "210700",
    "value": "锦州市"
  },
  {
    "address": "210800",
    "value": "营口市"
  },
  {
    "address": "210900",
    "value": "阜新市"
  },
  {
    "address": "211000",
    "value": "辽阳市"
  },
  {
    "address": "211100",
    "value": "盘锦市"
  },
  {
    "address": "211200",
    "value": "铁岭市"
  },
  {
    "address": "211300",
    "value": "朝阳市"
  },
  {
    "address": "211400",
    "value": "葫芦岛市"
  },
  {
    "address": "220100",
    "value": "长春市"
  },
  {
    "address": "220200",
    "value": "吉林市"
  },
  {
    "address": "220300",
    "value": "四平市"
  },
  {
    "address": "220400",
    "value": "辽源市"
  },
  {
    "address": "220500",
    "value": "通化市"
  },
  {
    "address": "220600",
    "value": "白山市"
  },
  {
    "address": "220700",
    "value": "松原市"
  },
  {
    "address": "220800",
    "value": "白城市"
  },
  {
    "address": "222400",
    "value": "延边朝鲜族自治州"
  },
  {
    "address": "230100",
    "value": "哈尔滨市"
  },
  {
    "address": "230200",
    "value": "齐齐哈尔市"
  },
  {
    "address": "230300",
    "value": "鸡西市"
  },
  {
    "address": "230400",
    "value": "鹤岗市"
  },
  {
    "address": "230500",
    "value": "双鸭山市"
  },
  {
    "address": "230600",
    "value": "大庆市"
  },
  {
    "address": "230700",
    "value": "伊春市"
  },
  {
    "address": "230800",
    "value": "佳木斯市"
  },
  {
    "address": "230900",
    "value": "七台河市"
  },
  {
    "address": "231000",
    "value": "牡丹江市"
  },
  {
    "address": "231100",
    "value": "黑河市"
  },
  {
    "address": "231200",
    "value": "绥化市"
  },
  {
    "address": "232700",
    "value": "大兴安岭地区"
  },
  {
    "address": "310100",
    "value": "上海市--市辖区"
  },
  {
    "address": "310200",
    "value": "上海市--县"
  },
  {
    "address": "320100",
    "value": "南京市"
  },
  {
    "address": "320200",
    "value": "无锡市"
  },
  {
    "address": "320300",
    "value": "徐州市"
  },
  {
    "address": "320400",
    "value": "常州市"
  },
  {
    "address": "320500",
    "value": "苏州市"
  },
  {
    "address": "320600",
    "value": "南通市"
  },
  {
    "address": "320700",
    "value": "连云港市"
  },
  {
    "address": "320800",
    "value": "淮安市"
  },
  {
    "address": "320900",
    "value": "盐城市"
  },
  {
    "address": "321000",
    "value": "扬州市"
  },
  {
    "address": "321100",
    "value": "镇江市"
  },
  {
    "address": "321200",
    "value": "泰州市"
  },
  {
    "address": "321300",
    "value": "宿迁市"
  },
  {
    "address": "330100",
    "value": "杭州市"
  },
  {
    "address": "330200",
    "value": "宁波市"
  },
  {
    "address": "330300",
    "value": "温州市"
  },
  {
    "address": "330400",
    "value": "嘉兴市"
  },
  {
    "address": "330500",
    "value": "湖州市"
  },
  {
    "address": "330600",
    "value": "绍兴市"
  },
  {
    "address": "330700",
    "value": "金华市"
  },
  {
    "address": "330800",
    "value": "衢州市"
  },
  {
    "address": "330900",
    "value": "舟山市"
  },
  {
    "address": "331000",
    "value": "台州市"
  },
  {
    "address": "331100",
    "value": "丽水市"
  },
  {
    "address": "340100",
    "value": "合肥市"
  },
  {
    "address": "340200",
    "value": "芜湖市"
  },
  {
    "address": "340300",
    "value": "蚌埠市"
  },
  {
    "address": "340400",
    "value": "淮南市"
  },
  {
    "address": "340500",
    "value": "马鞍山市"
  },
  {
    "address": "340600",
    "value": "淮北市"
  },
  {
    "address": "340700",
    "value": "铜陵市"
  },
  {
    "address": "340800",
    "value": "安庆市"
  },
  {
    "address": "341000",
    "value": "黄山市"
  },
  {
    "address": "341100",
    "value": "滁州市"
  },
  {
    "address": "341200",
    "value": "阜阳市"
  },
  {
    "address": "341300",
    "value": "宿州市"
  },
  {
    "address": "341500",
    "value": "六安市"
  },
  {
    "address": "341600",
    "value": "亳州市"
  },
  {
    "address": "341700",
    "value": "池州市"
  },
  {
    "address": "341800",
    "value": "宣城市"
  },
  {
    "address": "350100",
    "value": "福州市"
  },
  {
    "address": "350200",
    "value": "厦门市"
  },
  {
    "address": "350300",
    "value": "莆田市"
  },
  {
    "address": "350400",
    "value": "三明市"
  },
  {
    "address": "350500",
    "value": "泉州市"
  },
  {
    "address": "350600",
    "value": "漳州市"
  },
  {
    "address": "350700",
    "value": "南平市"
  },
  {
    "address": "350800",
    "value": "龙岩市"
  },
  {
    "address": "350900",
    "value": "宁德市"
  },
  {
    "address": "360100",
    "value": "南昌市"
  },
  {
    "address": "360200",
    "value": "景德镇市"
  },
  {
    "address": "360300",
    "value": "萍乡市"
  },
  {
    "address": "360400",
    "value": "九江市"
  },
  {
    "address": "360500",
    "value": "新余市"
  },
  {
    "address": "360600",
    "value": "鹰潭市"
  },
  {
    "address": "360700",
    "value": "赣州市"
  },
  {
    "address": "360800",
    "value": "吉安市"
  },
  {
    "address": "360900",
    "value": "宜春市"
  },
  {
    "address": "361000",
    "value": "抚州市"
  },
  {
    "address": "361100",
    "value": "上饶市"
  },
  {
    "address": "370100",
    "value": "济南市"
  },
  {
    "address": "370200",
    "value": "青岛市"
  },
  {
    "address": "370300",
    "value": "淄博市"
  },
  {
    "address": "370400",
    "value": "枣庄市"
  },
  {
    "address": "370500",
    "value": "东营市"
  },
  {
    "address": "370600",
    "value": "烟台市"
  },
  {
    "address": "370700",
    "value": "潍坊市"
  },
  {
    "address": "370800",
    "value": "济宁市"
  },
  {
    "address": "370900",
    "value": "泰安市"
  },
  {
    "address": "371000",
    "value": "威海市"
  },
  {
    "address": "371100",
    "value": "日照市"
  },
  {
    "address": "371200",
    "value": "莱芜市"
  },
  {
    "address": "371300",
    "value": "临沂市"
  },
  {
    "address": "371400",
    "value": "德州市"
  },
  {
    "address": "371500",
    "value": "聊城市"
  },
  {
    "address": "371600",
    "value": "滨州市"
  },
  {
    "address": "371700",
    "value": "菏泽市"
  },
  {
    "address": "410100",
    "value": "郑州市"
  },
  {
    "address": "410200",
    "value": "开封市"
  },
  {
    "address": "410300",
    "value": "洛阳市"
  },
  {
    "address": "410400",
    "value": "平顶山市"
  },
  {
    "address": "410500",
    "value": "安阳市"
  },
  {
    "address": "410600",
    "value": "鹤壁市"
  },
  {
    "address": "410700",
    "value": "新乡市"
  },
  {
    "address": "410800",
    "value": "焦作市"
  },
  {
    "address": "410900",
    "value": "濮阳市"
  },
  {
    "address": "411000",
    "value": "许昌市"
  },
  {
    "address": "411100",
    "value": "漯河市"
  },
  {
    "address": "411200",
    "value": "三门峡市"
  },
  {
    "address": "411300",
    "value": "南阳市"
  },
  {
    "address": "411400",
    "value": "商丘市"
  },
  {
    "address": "411500",
    "value": "信阳市"
  },
  {
    "address": "411600",
    "value": "周口市"
  },
  {
    "address": "411700",
    "value": "驻马店市"
  },
  {
    "address": "420100",
    "value": "武汉市"
  },
  {
    "address": "420200",
    "value": "黄石市"
  },
  {
    "address": "420300",
    "value": "十堰市"
  },
  {
    "address": "420500",
    "value": "宜昌市"
  },
  {
    "address": "420600",
    "value": "襄樊市"
  },
  {
    "address": "420700",
    "value": "鄂州市"
  },
  {
    "address": "420800",
    "value": "荆门市"
  },
  {
    "address": "420900",
    "value": "孝感市"
  },
  {
    "address": "421000",
    "value": "荆州市"
  },
  {
    "address": "421100",
    "value": "黄冈市"
  },
  {
    "address": "421200",
    "value": "咸宁市"
  },
  {
    "address": "421300",
    "value": "随州市"
  },
  {
    "address": "422800",
    "value": "恩施土家族苗族自治州"
  },
  {
    "address": "430100",
    "value": "长沙市"
  },
  {
    "address": "430200",
    "value": "株洲市"
  },
  {
    "address": "430300",
    "value": "湘潭市"
  },
  {
    "address": "430400",
    "value": "衡阳市"
  },
  {
    "address": "430500",
    "value": "邵阳市"
  },
  {
    "address": "430600",
    "value": "岳阳市"
  },
  {
    "address": "430700",
    "value": "常德市"
  },
  {
    "address": "430800",
    "value": "张家界市"
  },
  {
    "address": "430900",
    "value": "益阳市"
  },
  {
    "address": "431000",
    "value": "郴州市"
  },
  {
    "address": "431100",
    "value": "永州市"
  },
  {
    "address": "431200",
    "value": "怀化市"
  },
  {
    "address": "431300",
    "value": "娄底市"
  },
  {
    "address": "433100",
    "value": "湘西土家族苗族自治州"
  },
  {
    "address": "440100",
    "value": "广州市"
  },
  {
    "address": "440200",
    "value": "韶关市"
  },
  {
    "address": "440300",
    "value": "深圳市"
  },
  {
    "address": "440400",
    "value": "珠海市"
  },
  {
    "address": "440500",
    "value": "汕头市"
  },
  {
    "address": "440600",
    "value": "佛山市"
  },
  {
    "address": "440700",
    "value": "江门市"
  },
  {
    "address": "440800",
    "value": "湛江市"
  },
  {
    "address": "440900",
    "value": "茂名市"
  },
  {
    "address": "441200",
    "value": "肇庆市"
  },
  {
    "address": "441300",
    "value": "惠州市"
  },
  {
    "address": "441400",
    "value": "梅州市"
  },
  {
    "address": "441500",
    "value": "汕尾市"
  },
  {
    "address": "441600",
    "value": "河源市"
  },
  {
    "address": "441700",
    "value": "阳江市"
  },
  {
    "address": "441800",
    "value": "清远市"
  },
  {
    "address": "441900",
    "value": "东莞市"
  },
  {
    "address": "442000",
    "value": "中山市"
  },
  {
    "address": "445100",
    "value": "潮州市"
  },
  {
    "address": "445200",
    "value": "揭阳市"
  },
  {
    "address": "445300",
    "value": "云浮市"
  },
  {
    "address": "450100",
    "value": "南宁市"
  },
  {
    "address": "450200",
    "value": "柳州市"
  },
  {
    "address": "450300",
    "value": "桂林市"
  },
  {
    "address": "450400",
    "value": "梧州市"
  },
  {
    "address": "450500",
    "value": "北海市"
  },
  {
    "address": "450600",
    "value": "防城港市"
  },
  {
    "address": "450700",
    "value": "钦州市"
  },
  {
    "address": "450800",
    "value": "贵港市"
  },
  {
    "address": "450900",
    "value": "玉林市"
  },
  {
    "address": "451000",
    "value": "百色市"
  },
  {
    "address": "451100",
    "value": "贺州市"
  },
  {
    "address": "451200",
    "value": "河池市"
  },
  {
    "address": "451300",
    "value": "来宾市"
  },
  {
    "address": "451400",
    "value": "崇左市"
  },
  {
    "address": "460100",
    "value": "海口市"
  },
  {
    "address": "460200",
    "value": "三亚市"
  },
  {
    "address": "500100",
    "value": "重庆市--市辖区"
  },
  {
    "address": "500200",
    "value": "重庆市--县"
  },
  {
    "address": "510100",
    "value": "成都市"
  },
  {
    "address": "510300",
    "value": "自贡市"
  },
  {
    "address": "510400",
    "value": "攀枝花市"
  },
  {
    "address": "510500",
    "value": "泸州市"
  },
  {
    "address": "510600",
    "value": "德阳市"
  },
  {
    "address": "510700",
    "value": "绵阳市"
  },
  {
    "address": "510800",
    "value": "广元市"
  },
  {
    "address": "510900",
    "value": "遂宁市"
  },
  {
    "address": "511000",
    "value": "内江市"
  },
  {
    "address": "511100",
    "value": "乐山市"
  },
  {
    "address": "511300",
    "value": "南充市"
  },
  {
    "address": "511400",
    "value": "眉山市"
  },
  {
    "address": "511500",
    "value": "宜宾市"
  },
  {
    "address": "511600",
    "value": "广安市"
  },
  {
    "address": "511700",
    "value": "达州市"
  },
  {
    "address": "511800",
    "value": "雅安市"
  },
  {
    "address": "511900",
    "value": "巴中市"
  },
  {
    "address": "512000",
    "value": "资阳市"
  },
  {
    "address": "513200",
    "value": "阿坝藏族羌族自治州"
  },
  {
    "address": "513300",
    "value": "甘孜藏族自治州"
  },
  {
    "address": "513400",
    "value": "凉山彝族自治州"
  },
  {
    "address": "520100",
    "value": "贵阳市"
  },
  {
    "address": "520200",
    "value": "六盘水市"
  },
  {
    "address": "520300",
    "value": "遵义市"
  },
  {
    "address": "520400",
    "value": "安顺市"
  },
  {
    "address": "520500",
    "value": "毕节市"
  },
  {
    "address": "520601",
    "value": "铜仁市"
  },
  {
    "address": "522300",
    "value": "黔西南布依族苗族自治州"
  },
  {
    "address": "522600",
    "value": "黔东南苗族侗族自治州"
  },
  {
    "address": "522700",
    "value": "黔南布依族苗族自治州"
  },
  {
    "address": "530100",
    "value": "昆明市"
  },
  {
    "address": "530300",
    "value": "曲靖市"
  },
  {
    "address": "530400",
    "value": "玉溪市"
  },
  {
    "address": "530500",
    "value": "保山市"
  },
  {
    "address": "530600",
    "value": "昭通市"
  },
  {
    "address": "530700",
    "value": "丽江市"
  },
  {
    "address": "530800",
    "value": "普洱市"
  },
  {
    "address": "530900",
    "value": "临沧市"
  },
  {
    "address": "532300",
    "value": "楚雄彝族自治州"
  },
  {
    "address": "532500",
    "value": "红河哈尼族彝族自治州"
  },
  {
    "address": "532600",
    "value": "文山壮族苗族自治州"
  },
  {
    "address": "532800",
    "value": "西双版纳傣族自治州"
  },
  {
    "address": "532900",
    "value": "大理白族自治州"
  },
  {
    "address": "533100",
    "value": "德宏傣族景颇族自治州"
  },
  {
    "address": "533300",
    "value": "怒江傈僳族自治州"
  },
  {
    "address": "533400",
    "value": "迪庆藏族自治州"
  },
  {
    "address": "540100",
    "value": "拉萨市"
  },
  {
    "address": "542100",
    "value": "昌都地区"
  },
  {
    "address": "542200",
    "value": "山南地区"
  },
  {
    "address": "542300",
    "value": "日喀则地区"
  },
  {
    "address": "542400",
    "value": "那曲地区"
  },
  {
    "address": "542500",
    "value": "阿里地区"
  },
  {
    "address": "542600",
    "value": "林芝地区"
  },
  {
    "address": "610100",
    "value": "西安市"
  },
  {
    "address": "610200",
    "value": "铜川市"
  },
  {
    "address": "610300",
    "value": "宝鸡市"
  },
  {
    "address": "610400",
    "value": "咸阳市"
  },
  {
    "address": "610500",
    "value": "渭南市"
  },
  {
    "address": "610600",
    "value": "延安市"
  },
  {
    "address": "610700",
    "value": "汉中市"
  },
  {
    "address": "610800",
    "value": "榆林市"
  },
  {
    "address": "610900",
    "value": "安康市"
  },
  {
    "address": "611000",
    "value": "商洛市"
  },
  {
    "address": "620100",
    "value": "兰州市"
  },
  {
    "address": "620200",
    "value": "嘉峪关市"
  },
  {
    "address": "620300",
    "value": "金昌市"
  },
  {
    "address": "620400",
    "value": "白银市"
  },
  {
    "address": "620500",
    "value": "天水市"
  },
  {
    "address": "620600",
    "value": "武威市"
  },
  {
    "address": "620700",
    "value": "张掖市"
  },
  {
    "address": "620800",
    "value": "平凉市"
  },
  {
    "address": "620900",
    "value": "酒泉市"
  },
  {
    "address": "621000",
    "value": "庆阳市"
  },
  {
    "address": "621100",
    "value": "定西市"
  },
  {
    "address": "621200",
    "value": "陇南市"
  },
  {
    "address": "622900",
    "value": "临夏回族自治州"
  },
  {
    "address": "623000",
    "value": "甘南藏族自治州"
  },
  {
    "address": "630100",
    "value": "西宁市"
  },
  {
    "address": "632100",
    "value": "海东地区"
  },
  {
    "address": "632200",
    "value": "海北藏族自治州"
  },
  {
    "address": "632300",
    "value": "黄南藏族自治州"
  },
  {
    "address": "632500",
    "value": "海南藏族自治州"
  },
  {
    "address": "632600",
    "value": "果洛藏族自治州"
  },
  {
    "address": "632700",
    "value": "玉树藏族自治州"
  },
  {
    "address": "632800",
    "value": "海西蒙古族藏族自治州"
  },
  {
    "address": "640100",
    "value": "银川市"
  },
  {
    "address": "640200",
    "value": "石嘴山市"
  },
  {
    "address": "640300",
    "value": "吴忠市"
  },
  {
    "address": "640400",
    "value": "固原市"
  },
  {
    "address": "640500",
    "value": "中卫市"
  },
  {
    "address": "650100",
    "value": "乌鲁木齐市"
  },
  {
    "address": "650200",
    "value": "克拉玛依市"
  },
  {
    "address": "652100",
    "value": "吐鲁番地区"
  },
  {
    "address": "652200",
    "value": "哈密地区"
  },
  {
    "address": "652300",
    "value": "昌吉回族自治州"
  },
  {
    "address": "652700",
    "value": "博尔塔拉蒙古自治州"
  },
  {
    "address": "652800",
    "value": "巴音郭楞蒙古自治州"
  },
  {
    "address": "652900",
    "value": "阿克苏地区"
  },
  {
    "address": "653000",
    "value": "克孜勒苏柯尔克孜自治州"
  },
  {
    "address": "653100",
    "value": "喀什地区"
  },
  {
    "address": "653200",
    "value": "和田地区"
  },
  {
    "address": "654000",
    "value": "伊犁哈萨克自治州"
  },
  {
    "address": "654200",
    "value": "塔城地区"
  },
  {
    "address": "654300",
    "value": "阿勒泰地区"
  },


  {
    "address": "110101",
    "value": "东城区"
  },
  {
    "address": "110102",
    "value": "西城区"
  },
  {
    "address": "110105",
    "value": "朝阳区"
  },
  {
    "address": "110106",
    "value": "丰台区"
  },
  {
    "address": "110107",
    "value": "石景山区"
  },
  {
    "address": "110108",
    "value": "海淀区"
  },
  {
    "address": "110109",
    "value": "门头沟区"
  },
  {
    "address": "110111",
    "value": "房山区"
  },
  {
    "address": "110112",
    "value": "通州区"
  },
  {
    "address": "110113",
    "value": "顺义区"
  },
  {
    "address": "110114",
    "value": "昌平区"
  },
  {
    "address": "110115",
    "value": "大兴区"
  },
  {
    "address": "110116",
    "value": "怀柔区"
  },
  {
    "address": "110117",
    "value": "平谷区"
  },
  {
    "address": "110228",
    "value": "密云县"
  },
  {
    "address": "110229",
    "value": "延庆县"
  },
  {
    "address": "120101",
    "value": "和平区"
  },
  {
    "address": "120102",
    "value": "河东区"
  },
  {
    "address": "120103",
    "value": "河西区"
  },
  {
    "address": "120104",
    "value": "南开区"
  },
  {
    "address": "120105",
    "value": "河北区"
  },
  {
    "address": "120106",
    "value": "红桥区"
  },
  {
    "address": "120110",
    "value": "东丽区"
  },
  {
    "address": "120111",
    "value": "西青区"
  },
  {
    "address": "120112",
    "value": "津南区"
  },
  {
    "address": "120113",
    "value": "北辰区"
  },
  {
    "address": "120114",
    "value": "武清区"
  },
  {
    "address": "120115",
    "value": "宝坻区"
  },
  {
    "address": "120116",
    "value": "滨海新区"
  },
  {
    "address": "120221",
    "value": "宁河县"
  },
  {
    "address": "120223",
    "value": "静海县"
  },
  {
    "address": "120225",
    "value": "蓟县"
  },
  {
    "address": "130102",
    "value": "长安区"
  },
  {
    "address": "130103",
    "value": "桥东区"
  },
  {
    "address": "130104",
    "value": "桥西区"
  },
  {
    "address": "130105",
    "value": "新华区"
  },
  {
    "address": "130107",
    "value": "井陉矿区"
  },
  {
    "address": "130108",
    "value": "裕华区"
  },
  {
    "address": "130121",
    "value": "井陉县"
  },
  {
    "address": "130123",
    "value": "正定县"
  },
  {
    "address": "130124",
    "value": "栾城县"
  },
  {
    "address": "130125",
    "value": "行唐县"
  },
  {
    "address": "130126",
    "value": "灵寿县"
  },
  {
    "address": "130127",
    "value": "高邑县"
  },
  {
    "address": "130128",
    "value": "深泽县"
  },
  {
    "address": "130129",
    "value": "赞皇县"
  },
  {
    "address": "130130",
    "value": "无极县"
  },
  {
    "address": "130131",
    "value": "平山县"
  },
  {
    "address": "130132",
    "value": "元氏县"
  },
  {
    "address": "130133",
    "value": "赵县"
  },
  {
    "address": "130181",
    "value": "辛集市"
  },
  {
    "address": "130182",
    "value": "藁城市"
  },
  {
    "address": "130183",
    "value": "晋州市"
  },
  {
    "address": "130184",
    "value": "新乐市"
  },
  {
    "address": "130185",
    "value": "鹿泉市"
  },
  {
    "address": "130202",
    "value": "路南区"
  },
  {
    "address": "130203",
    "value": "路北区"
  },
  {
    "address": "130204",
    "value": "古冶区"
  },
  {
    "address": "130205",
    "value": "开平区"
  },
  {
    "address": "130207",
    "value": "丰南区"
  },
  {
    "address": "130208",
    "value": "丰润区"
  },
  {
    "address": "130223",
    "value": "滦县"
  },
  {
    "address": "130224",
    "value": "滦南县"
  },
  {
    "address": "130225",
    "value": "乐亭县"
  },
  {
    "address": "130227",
    "value": "迁西县"
  },
  {
    "address": "130229",
    "value": "玉田县"
  },
  {
    "address": "130230",
    "value": "唐海县"
  },
  {
    "address": "130281",
    "value": "遵化市"
  },
  {
    "address": "130283",
    "value": "迁安市"
  },
  {
    "address": "130302",
    "value": "海港区"
  },
  {
    "address": "130303",
    "value": "山海关区"
  },
  {
    "address": "130304",
    "value": "北戴河区"
  },
  {
    "address": "130321",
    "value": "青龙满族自治县"
  },
  {
    "address": "130322",
    "value": "昌黎县"
  },
  {
    "address": "130323",
    "value": "抚宁县"
  },
  {
    "address": "130324",
    "value": "卢龙县"
  },
  {
    "address": "130402",
    "value": "邯山区"
  },
  {
    "address": "130403",
    "value": "丛台区"
  },
  {
    "address": "130404",
    "value": "复兴区"
  },
  {
    "address": "130406",
    "value": "峰峰矿区"
  },
  {
    "address": "130421",
    "value": "邯郸县"
  },
  {
    "address": "130423",
    "value": "临漳县"
  },
  {
    "address": "130424",
    "value": "成安县"
  },
  {
    "address": "130425",
    "value": "大名县"
  },
  {
    "address": "130426",
    "value": "涉县"
  },
  {
    "address": "130427",
    "value": "磁县"
  },
  {
    "address": "130428",
    "value": "肥乡县"
  },
  {
    "address": "130429",
    "value": "永年县"
  },
  {
    "address": "130430",
    "value": "邱县"
  },
  {
    "address": "130431",
    "value": "鸡泽县"
  },
  {
    "address": "130432",
    "value": "广平县"
  },
  {
    "address": "130433",
    "value": "馆陶县"
  },
  {
    "address": "130434",
    "value": "魏县"
  },
  {
    "address": "130435",
    "value": "曲周县"
  },
  {
    "address": "130481",
    "value": "武安市"
  },
  {
    "address": "130502",
    "value": "桥东区"
  },
  {
    "address": "130503",
    "value": "桥西区"
  },
  {
    "address": "130521",
    "value": "邢台县"
  },
  {
    "address": "130522",
    "value": "临城县"
  },
  {
    "address": "130523",
    "value": "内丘县"
  },
  {
    "address": "130524",
    "value": "柏乡县"
  },
  {
    "address": "130525",
    "value": "隆尧县"
  },
  {
    "address": "130526",
    "value": "任县"
  },
  {
    "address": "130527",
    "value": "南和县"
  },
  {
    "address": "130528",
    "value": "宁晋县"
  },
  {
    "address": "130529",
    "value": "巨鹿县"
  },
  {
    "address": "130530",
    "value": "新河县"
  },
  {
    "address": "130531",
    "value": "广宗县"
  },
  {
    "address": "130532",
    "value": "平乡县"
  },
  {
    "address": "130533",
    "value": "威县"
  },
  {
    "address": "130534",
    "value": "清河县"
  },
  {
    "address": "130535",
    "value": "临西县"
  },
  {
    "address": "130581",
    "value": "南宫市"
  },
  {
    "address": "130582",
    "value": "沙河市"
  },
  {
    "address": "130502",
    "value": "桥东区"
  },
  {
    "address": "130503",
    "value": "桥西区"
  },
  {
    "address": "130521",
    "value": "邢台县"
  },
  {
    "address": "130522",
    "value": "临城县"
  },
  {
    "address": "130523",
    "value": "内丘县"
  },
  {
    "address": "130524",
    "value": "柏乡县"
  },
  {
    "address": "130525",
    "value": "隆尧县"
  },
  {
    "address": "130526",
    "value": "任县"
  },
  {
    "address": "130527",
    "value": "南和县"
  },
  {
    "address": "130528",
    "value": "宁晋县"
  },
  {
    "address": "130529",
    "value": "巨鹿县"
  },
  {
    "address": "130530",
    "value": "新河县"
  },
  {
    "address": "130531",
    "value": "广宗县"
  },
  {
    "address": "130532",
    "value": "平乡县"
  },
  {
    "address": "130533",
    "value": "威县"
  },
  {
    "address": "130534",
    "value": "清河县"
  },
  {
    "address": "130535",
    "value": "临西县"
  },
  {
    "address": "130581",
    "value": "南宫市"
  },
  {
    "address": "130582",
    "value": "沙河市"
  },
  {
    "address": "130602",
    "value": "新市区"
  },
  {
    "address": "130603",
    "value": "北市区"
  },
  {
    "address": "130604",
    "value": "南市区"
  },
  {
    "address": "130621",
    "value": "满城县"
  },
  {
    "address": "130622",
    "value": "清苑县"
  },
  {
    "address": "130623",
    "value": "涞水县"
  },
  {
    "address": "130624",
    "value": "阜平县"
  },
  {
    "address": "130625",
    "value": "徐水县"
  },
  {
    "address": "130626",
    "value": "定兴县"
  },
  {
    "address": "130627",
    "value": "唐县"
  },
  {
    "address": "130628",
    "value": "高阳县"
  },
  {
    "address": "130629",
    "value": "容城县"
  },
  {
    "address": "130630",
    "value": "涞源县"
  },
  {
    "address": "130631",
    "value": "望都县"
  },
  {
    "address": "130632",
    "value": "安新县"
  },
  {
    "address": "130633",
    "value": "易县"
  },
  {
    "address": "130634",
    "value": "曲阳县"
  },
  {
    "address": "130635",
    "value": "蠡县"
  },
  {
    "address": "130636",
    "value": "顺平县"
  },
  {
    "address": "130637",
    "value": "博野县"
  },
  {
    "address": "130638",
    "value": "雄县"
  },
  {
    "address": "130681",
    "value": "涿州市"
  },
  {
    "address": "130682",
    "value": "定州市"
  },
  {
    "address": "130683",
    "value": "安国市"
  },
  {
    "address": "130684",
    "value": "高碑店市"
  },
  {
    "address": "130702",
    "value": "桥东区"
  },
  {
    "address": "130703",
    "value": "桥西区"
  },
  {
    "address": "130705",
    "value": "宣化区"
  },
  {
    "address": "130706",
    "value": "下花园区"
  },
  {
    "address": "130721",
    "value": "宣化县"
  },
  {
    "address": "130722",
    "value": "张北县"
  },
  {
    "address": "130723",
    "value": "康保县"
  },
  {
    "address": "130724",
    "value": "沽源县"
  },
  {
    "address": "130725",
    "value": "尚义县"
  },
  {
    "address": "130726",
    "value": "蔚县"
  },
  {
    "address": "130727",
    "value": "阳原县"
  },
  {
    "address": "130728",
    "value": "怀安县"
  },
  {
    "address": "130729",
    "value": "万全县"
  },
  {
    "address": "130730",
    "value": "怀来县"
  },
  {
    "address": "130731",
    "value": "涿鹿县"
  },
  {
    "address": "130732",
    "value": "赤城县"
  },
  {
    "address": "130733",
    "value": "崇礼县"
  },
  {
    "address": "130802",
    "value": "双桥区"
  },
  {
    "address": "130803",
    "value": "双滦区"
  },
  {
    "address": "130804",
    "value": "鹰手营子矿区"
  },
  {
    "address": "130821",
    "value": "承德县"
  },
  {
    "address": "130822",
    "value": "兴隆县"
  },
  {
    "address": "130823",
    "value": "平泉县"
  },
  {
    "address": "130824",
    "value": "滦平县"
  },
  {
    "address": "130825",
    "value": "隆化县"
  },
  {
    "address": "130826",
    "value": "丰宁满族自治县"
  },
  {
    "address": "130827",
    "value": "宽城满族自治县"
  },
  {
    "address": "130828",
    "value": "围场满族蒙古族自治县"
  },
  {
    "address": "130902",
    "value": "新华区"
  },
  {
    "address": "130903",
    "value": "运河区"
  },
  {
    "address": "130921",
    "value": "沧县"
  },
  {
    "address": "130922",
    "value": "青县"
  },
  {
    "address": "130923",
    "value": "东光县"
  },
  {
    "address": "130924",
    "value": "海兴县"
  },
  {
    "address": "130925",
    "value": "盐山县"
  },
  {
    "address": "130926",
    "value": "肃宁县"
  },
  {
    "address": "130927",
    "value": "南皮县"
  },
  {
    "address": "130928",
    "value": "吴桥县"
  },
  {
    "address": "130929",
    "value": "献县"
  },
  {
    "address": "130930",
    "value": "孟村回族自治县"
  },
  {
    "address": "130981",
    "value": "泊头市"
  },
  {
    "address": "130982",
    "value": "任丘市"
  },
  {
    "address": "130983",
    "value": "黄骅市"
  },
  {
    "address": "130984",
    "value": "河间市"
  },
  {
    "address": "131002",
    "value": "安次区"
  },
  {
    "address": "131003",
    "value": "广阳区"
  },
  {
    "address": "131022",
    "value": "固安县"
  },
  {
    "address": "131023",
    "value": "永清县"
  },
  {
    "address": "131024",
    "value": "香河县"
  },
  {
    "address": "131025",
    "value": "大城县"
  },
  {
    "address": "131026",
    "value": "文安县"
  },
  {
    "address": "131028",
    "value": "大厂回族自治县"
  },
  {
    "address": "131081",
    "value": "霸州市"
  },
  {
    "address": "131082",
    "value": "三河市"
  },
  {
    "address": "131102",
    "value": "桃城区"
  },
  {
    "address": "131121",
    "value": "枣强县"
  },
  {
    "address": "131122",
    "value": "武邑县"
  },
  {
    "address": "131123",
    "value": "武强县"
  },
  {
    "address": "131124",
    "value": "饶阳县"
  },
  {
    "address": "131125",
    "value": "安平县"
  },
  {
    "address": "131126",
    "value": "故城县"
  },
  {
    "address": "131127",
    "value": "景县"
  },
  {
    "address": "131128",
    "value": "阜城县"
  },
  {
    "address": "131181",
    "value": "冀州市"
  },
  {
    "address": "131182",
    "value": "深州市"
  },
  {
    "address": "140105",
    "value": "小店区"
  },
  {
    "address": "140106",
    "value": "迎泽区"
  },
  {
    "address": "140107",
    "value": "杏花岭区"
  },
  {
    "address": "140108",
    "value": "尖草坪区"
  },
  {
    "address": "140109",
    "value": "万柏林区"
  },
  {
    "address": "140110",
    "value": "晋源区"
  },
  {
    "address": "140121",
    "value": "清徐县"
  },
  {
    "address": "140122",
    "value": "阳曲县"
  },
  {
    "address": "140123",
    "value": "娄烦县"
  },
  {
    "address": "140181",
    "value": "古交市"
  },
  {
    "address": "140202",
    "value": "城区"
  },
  {
    "address": "140203",
    "value": "矿区"
  },
  {
    "address": "140211",
    "value": "南郊区"
  },
  {
    "address": "140212",
    "value": "新荣区"
  },
  {
    "address": "140221",
    "value": "阳高县"
  },
  {
    "address": "140222",
    "value": "天镇县"
  },
  {
    "address": "140223",
    "value": "广灵县"
  },
  {
    "address": "140224",
    "value": "灵丘县"
  },
  {
    "address": "140225",
    "value": "浑源县"
  },
  {
    "address": "140226",
    "value": "左云县"
  },
  {
    "address": "140227",
    "value": "大同县"
  },
  {
    "address": "140302",
    "value": "城区"
  },
  {
    "address": "140303",
    "value": "矿区"
  },
  {
    "address": "140311",
    "value": "郊区"
  },
  {
    "address": "140321",
    "value": "平定县"
  },
  {
    "address": "140322",
    "value": "盂县"
  },
  {
    "address": "140402",
    "value": "城区"
  },
  {
    "address": "140411",
    "value": "郊区"
  },
  {
    "address": "140421",
    "value": "长治县"
  },
  {
    "address": "140423",
    "value": "襄垣县"
  },
  {
    "address": "140424",
    "value": "屯留县"
  },
  {
    "address": "140425",
    "value": "平顺县"
  },
  {
    "address": "140426",
    "value": "黎城县"
  },
  {
    "address": "140427",
    "value": "壶关县"
  },
  {
    "address": "140428",
    "value": "长子县"
  },
  {
    "address": "140429",
    "value": "武乡县"
  },
  {
    "address": "140430",
    "value": "沁县"
  },
  {
    "address": "140431",
    "value": "沁源县"
  },
  {
    "address": "140481",
    "value": "潞城市"
  },
  {
    "address": "140502",
    "value": "城区"
  },
  {
    "address": "140521",
    "value": "沁水县"
  },
  {
    "address": "140522",
    "value": "阳城县"
  },
  {
    "address": "140524",
    "value": "陵川县"
  },
  {
    "address": "140525",
    "value": "泽州县"
  },
  {
    "address": "140581",
    "value": "高平市"
  },
  {
    "address": "140602",
    "value": "朔城区"
  },
  {
    "address": "140603",
    "value": "平鲁区"
  },
  {
    "address": "140621",
    "value": "山阴县"
  },
  {
    "address": "140622",
    "value": "应县"
  },
  {
    "address": "140623",
    "value": "右玉县"
  },
  {
    "address": "140624",
    "value": "怀仁县"
  },
  {
    "address": "140702",
    "value": "榆次区"
  },
  {
    "address": "140721",
    "value": "榆社县"
  },
  {
    "address": "140722",
    "value": "左权县"
  },
  {
    "address": "140723",
    "value": "和顺县"
  },
  {
    "address": "140724",
    "value": "昔阳县"
  },
  {
    "address": "140725",
    "value": "寿阳县"
  },
  {
    "address": "140726",
    "value": "太谷县"
  },
  {
    "address": "140727",
    "value": "祁县"
  },
  {
    "address": "140728",
    "value": "平遥县"
  },
  {
    "address": "140729",
    "value": "灵石县"
  },
  {
    "address": "140781",
    "value": "介休市"
  },
  {
    "address": "140802",
    "value": "盐湖区"
  },
  {
    "address": "140821",
    "value": "临猗县"
  },
  {
    "address": "140822",
    "value": "万荣县"
  },
  {
    "address": "140823",
    "value": "闻喜县"
  },
  {
    "address": "140824",
    "value": "稷山县"
  },
  {
    "address": "140825",
    "value": "新绛县"
  },
  {
    "address": "140826",
    "value": "绛县"
  },
  {
    "address": "140827",
    "value": "垣曲县"
  },
  {
    "address": "140828",
    "value": "夏县"
  },
  {
    "address": "140829",
    "value": "平陆县"
  },
  {
    "address": "140830",
    "value": "芮城县"
  },
  {
    "address": "140881",
    "value": "永济市"
  },
  {
    "address": "140882",
    "value": "河津市"
  },
  {
    "address": "140902",
    "value": "忻府区"
  },
  {
    "address": "140921",
    "value": "定襄县"
  },
  {
    "address": "140922",
    "value": "五台县"
  },
  {
    "address": "140923",
    "value": "代县"
  },
  {
    "address": "140924",
    "value": "繁峙县"
  },
  {
    "address": "140925",
    "value": "宁武县"
  },
  {
    "address": "140926",
    "value": "静乐县"
  },
  {
    "address": "140927",
    "value": "神池县"
  },
  {
    "address": "140928",
    "value": "五寨县"
  },
  {
    "address": "140929",
    "value": "岢岚县"
  },
  {
    "address": "140930",
    "value": "河曲县"
  },
  {
    "address": "140931",
    "value": "保德县"
  },
  {
    "address": "140932",
    "value": "偏关县"
  },
  {
    "address": "140981",
    "value": "原平市"
  },
  {
    "address": "141002",
    "value": "尧都区"
  },
  {
    "address": "141021",
    "value": "曲沃县"
  },
  {
    "address": "141022",
    "value": "翼城县"
  },
  {
    "address": "141023",
    "value": "襄汾县"
  },
  {
    "address": "141024",
    "value": "洪洞县"
  },
  {
    "address": "141025",
    "value": "古县"
  },
  {
    "address": "141026",
    "value": "安泽县"
  },
  {
    "address": "141027",
    "value": "浮山县"
  },
  {
    "address": "141028",
    "value": "吉县"
  },
  {
    "address": "141029",
    "value": "乡宁县"
  },
  {
    "address": "141030",
    "value": "大宁县"
  },
  {
    "address": "141031",
    "value": "隰县"
  },
  {
    "address": "141032",
    "value": "永和县"
  },
  {
    "address": "141033",
    "value": "蒲县"
  },
  {
    "address": "141034",
    "value": "汾西县"
  },
  {
    "address": "141081",
    "value": "侯马市"
  },
  {
    "address": "141082",
    "value": "霍州市"
  },
  {
    "address": "141102",
    "value": "离石区"
  },
  {
    "address": "141121",
    "value": "文水县"
  },
  {
    "address": "141122",
    "value": "交城县"
  },
  {
    "address": "141123",
    "value": "兴县"
  },
  {
    "address": "141124",
    "value": "临县"
  },
  {
    "address": "141125",
    "value": "柳林县"
  },
  {
    "address": "141126",
    "value": "石楼县"
  },
  {
    "address": "141127",
    "value": "岚县"
  },
  {
    "address": "141128",
    "value": "方山县"
  },
  {
    "address": "141129",
    "value": "中阳县"
  },
  {
    "address": "141130",
    "value": "交口县"
  },
  {
    "address": "141181",
    "value": "孝义市"
  },
  {
    "address": "141182",
    "value": "汾阳市"
  },
  {
    "address": "150102",
    "value": "新城区"
  },
  {
    "address": "150103",
    "value": "回民区"
  },
  {
    "address": "150104",
    "value": "玉泉区"
  },
  {
    "address": "150105",
    "value": "赛罕区"
  },
  {
    "address": "150121",
    "value": "土默特左旗"
  },
  {
    "address": "150122",
    "value": "托克托县"
  },
  {
    "address": "150123",
    "value": "和林格尔县"
  },
  {
    "address": "150124",
    "value": "清水河县"
  },
  {
    "address": "150125",
    "value": "武川县"
  },
  {
    "address": "150202",
    "value": "东河区"
  },
  {
    "address": "150203",
    "value": "昆都仑区"
  },
  {
    "address": "150204",
    "value": "青山区"
  },
  {
    "address": "150205",
    "value": "石拐区"
  },
  {
    "address": "150206",
    "value": "白云鄂博矿区"
  },
  {
    "address": "150207",
    "value": "九原区"
  },
  {
    "address": "150221",
    "value": "土默特右旗"
  },
  {
    "address": "150222",
    "value": "固阳县"
  },
  {
    "address": "150223",
    "value": "达尔罕茂明安联合旗"
  },
  {
    "address": "150302",
    "value": "海勃湾区"
  },
  {
    "address": "150303",
    "value": "海南区"
  },
  {
    "address": "150304",
    "value": "乌达区"
  },
  {
    "address": "150402",
    "value": "红山区"
  },
  {
    "address": "150403",
    "value": "元宝山区"
  },
  {
    "address": "150404",
    "value": "松山区"
  },
  {
    "address": "150421",
    "value": "阿鲁科尔沁旗"
  },
  {
    "address": "150422",
    "value": "巴林左旗"
  },
  {
    "address": "150423",
    "value": "巴林右旗"
  },
  {
    "address": "150424",
    "value": "林西县"
  },
  {
    "address": "150425",
    "value": "克什克腾旗"
  },
  {
    "address": "150426",
    "value": "翁牛特旗"
  },
  {
    "address": "150428",
    "value": "喀喇沁旗"
  },
  {
    "address": "150429",
    "value": "宁城县"
  },
  {
    "address": "150430",
    "value": "敖汉旗"
  },
  {
    "address": "150502",
    "value": "科尔沁区"
  },
  {
    "address": "150521",
    "value": "科尔沁左翼中旗"
  },
  {
    "address": "150522",
    "value": "科尔沁左翼后旗"
  },
  {
    "address": "150523",
    "value": "开鲁县"
  },
  {
    "address": "150524",
    "value": "库伦旗"
  },
  {
    "address": "150525",
    "value": "奈曼旗"
  },
  {
    "address": "150526",
    "value": "扎鲁特旗"
  },
  {
    "address": "150581",
    "value": "霍林郭勒市"
  },
  {
    "address": "150602",
    "value": "东胜区"
  },
  {
    "address": "150621",
    "value": "达拉特旗"
  },
  {
    "address": "150622",
    "value": "准格尔旗"
  },
  {
    "address": "150623",
    "value": "鄂托克前旗"
  },
  {
    "address": "150624",
    "value": "鄂托克旗"
  },
  {
    "address": "150625",
    "value": "杭锦旗"
  },
  {
    "address": "150626",
    "value": "乌审旗"
  },
  {
    "address": "150627",
    "value": "伊金霍洛旗"
  },
  {
    "address": "150702",
    "value": "海拉尔区"
  },
  {
    "address": "150721",
    "value": "阿荣旗"
  },
  {
    "address": "150722",
    "value": "莫力达瓦达斡尔族自治旗"
  },
  {
    "address": "150723",
    "value": "鄂伦春自治旗"
  },
  {
    "address": "150724",
    "value": "鄂温克族自治旗"
  },
  {
    "address": "150725",
    "value": "陈巴尔虎旗"
  },
  {
    "address": "150726",
    "value": "新巴尔虎左旗"
  },
  {
    "address": "150727",
    "value": "新巴尔虎右旗"
  },
  {
    "address": "150781",
    "value": "满洲里市"
  },
  {
    "address": "150782",
    "value": "牙克石市"
  },
  {
    "address": "150783",
    "value": "扎兰屯市"
  },
  {
    "address": "150784",
    "value": "额尔古纳市"
  },
  {
    "address": "150785",
    "value": "根河市"
  },
  {
    "address": "150802",
    "value": "临河区"
  },
  {
    "address": "150821",
    "value": "五原县"
  },
  {
    "address": "150822",
    "value": "磴口县"
  },
  {
    "address": "150823",
    "value": "乌拉特前旗"
  },
  {
    "address": "150824",
    "value": "乌拉特中旗"
  },
  {
    "address": "150825",
    "value": "乌拉特后旗"
  },
  {
    "address": "150826",
    "value": "杭锦后旗"
  },
  {
    "address": "150902",
    "value": "集宁区"
  },
  {
    "address": "150921",
    "value": "卓资县"
  },
  {
    "address": "150922",
    "value": "化德县"
  },
  {
    "address": "150923",
    "value": "商都县"
  },
  {
    "address": "150924",
    "value": "兴和县"
  },
  {
    "address": "150925",
    "value": "凉城县"
  },
  {
    "address": "150926",
    "value": "察哈尔右翼前旗"
  },
  {
    "address": "150927",
    "value": "察哈尔右翼中旗"
  },
  {
    "address": "150928",
    "value": "察哈尔右翼后旗"
  },
  {
    "address": "150929",
    "value": "四子王旗"
  },
  {
    "address": "150981",
    "value": "丰镇市"
  },
  {
    "address": "152201",
    "value": "乌兰浩特市"
  },
  {
    "address": "152202",
    "value": "阿尔山市"
  },
  {
    "address": "152221",
    "value": "科尔沁右翼前旗"
  },
  {
    "address": "152222",
    "value": "科尔沁右翼中旗"
  },
  {
    "address": "152223",
    "value": "扎赉特旗"
  },
  {
    "address": "152224",
    "value": "突泉县"
  },
  {
    "address": "152501",
    "value": "二连浩特市"
  },
  {
    "address": "152502",
    "value": "锡林浩特市"
  },
  {
    "address": "152522",
    "value": "阿巴嘎旗"
  },
  {
    "address": "152523",
    "value": "苏尼特左旗"
  },
  {
    "address": "152524",
    "value": "苏尼特右旗"
  },
  {
    "address": "152525",
    "value": "东乌珠穆沁旗"
  },
  {
    "address": "152526",
    "value": "西乌珠穆沁旗"
  },
  {
    "address": "152527",
    "value": "太仆寺旗"
  },
  {
    "address": "152528",
    "value": "镶黄旗"
  },
  {
    "address": "152529",
    "value": "正镶白旗"
  },
  {
    "address": "152530",
    "value": "正蓝旗"
  },
  {
    "address": "152531",
    "value": "多伦县"
  },
  {
    "address": "152921",
    "value": "阿拉善左旗"
  },
  {
    "address": "152922",
    "value": "阿拉善右旗"
  },
  {
    "address": "152923",
    "value": "额济纳旗"
  },
  {
    "address": "210102",
    "value": "和平区"
  },
  {
    "address": "210103",
    "value": "沈河区"
  },
  {
    "address": "210104",
    "value": "大东区"
  },
  {
    "address": "210105",
    "value": "皇姑区"
  },
  {
    "address": "210106",
    "value": "铁西区"
  },
  {
    "address": "210111",
    "value": "苏家屯区"
  },
  {
    "address": "210112",
    "value": "东陵区"
  },
  {
    "address": "210113",
    "value": "沈北新区"
  },
  {
    "address": "210114",
    "value": "于洪区"
  },
  {
    "address": "210122",
    "value": "辽中县"
  },
  {
    "address": "210123",
    "value": "康平县"
  },
  {
    "address": "210124",
    "value": "法库县"
  },
  {
    "address": "210181",
    "value": "新民市"
  },
  {
    "address": "210202",
    "value": "中山区"
  },
  {
    "address": "210203",
    "value": "西岗区"
  },
  {
    "address": "210204",
    "value": "沙河口区"
  },
  {
    "address": "210211",
    "value": "甘井子区"
  },
  {
    "address": "210212",
    "value": "旅顺口区"
  },
  {
    "address": "210213",
    "value": "金州区"
  },
  {
    "address": "210224",
    "value": "长海县"
  },
  {
    "address": "210281",
    "value": "瓦房店市"
  },
  {
    "address": "210282",
    "value": "普兰店市"
  },
  {
    "address": "210283",
    "value": "庄河市"
  },
  {
    "address": "210302",
    "value": "铁东区"
  },
  {
    "address": "210303",
    "value": "铁西区"
  },
  {
    "address": "210304",
    "value": "立山区"
  },
  {
    "address": "210311",
    "value": "千山区"
  },
  {
    "address": "210321",
    "value": "台安县"
  },
  {
    "address": "210323",
    "value": "岫岩满族自治县"
  },
  {
    "address": "210381",
    "value": "海城市"
  },
  {
    "address": "210402",
    "value": "新抚区"
  },
  {
    "address": "210403",
    "value": "东洲区"
  },
  {
    "address": "210404",
    "value": "望花区"
  },
  {
    "address": "210411",
    "value": "顺城区"
  },
  {
    "address": "210421",
    "value": "抚顺县"
  },
  {
    "address": "210422",
    "value": "新宾满族自治县"
  },
  {
    "address": "210423",
    "value": "清原满族自治县"
  },
  {
    "address": "210502",
    "value": "平山区"
  },
  {
    "address": "210503",
    "value": "溪湖区"
  },
  {
    "address": "210504",
    "value": "明山区"
  },
  {
    "address": "210505",
    "value": "南芬区"
  },
  {
    "address": "210521",
    "value": "本溪满族自治县"
  },
  {
    "address": "210522",
    "value": "桓仁满族自治县"
  },
  {
    "address": "210602",
    "value": "元宝区"
  },
  {
    "address": "210603",
    "value": "振兴区"
  },
  {
    "address": "210604",
    "value": "振安区"
  },
  {
    "address": "210624",
    "value": "宽甸满族自治县"
  },
  {
    "address": "210681",
    "value": "东港市"
  },
  {
    "address": "210682",
    "value": "凤城市"
  },
  {
    "address": "210702",
    "value": "古塔区"
  },
  {
    "address": "210703",
    "value": "凌河区"
  },
  {
    "address": "210711",
    "value": "太和区"
  },
  {
    "address": "210726",
    "value": "黑山县"
  },
  {
    "address": "210727",
    "value": "义县"
  },
  {
    "address": "210781",
    "value": "凌海市"
  },
  {
    "address": "210782",
    "value": "北镇市"
  },
  {
    "address": "210802",
    "value": "站前区"
  },
  {
    "address": "210803",
    "value": "西市区"
  },
  {
    "address": "210804",
    "value": "鲅鱼圈区"
  },
  {
    "address": "210811",
    "value": "老边区"
  },
  {
    "address": "210881",
    "value": "盖州市"
  },
  {
    "address": "210882",
    "value": "大石桥市"
  },
  {
    "address": "210902",
    "value": "海州区"
  },
  {
    "address": "210903",
    "value": "新邱区"
  },
  {
    "address": "210904",
    "value": "太平区"
  },
  {
    "address": "210905",
    "value": "清河门区"
  },
  {
    "address": "210911",
    "value": "细河区"
  },
  {
    "address": "210921",
    "value": "阜新蒙古族自治县"
  },
  {
    "address": "210922",
    "value": "彰武县"
  },
  {
    "address": "211002",
    "value": "白塔区"
  },
  {
    "address": "211003",
    "value": "文圣区"
  },
  {
    "address": "211004",
    "value": "宏伟区"
  },
  {
    "address": "211005",
    "value": "弓长岭区"
  },
  {
    "address": "211011",
    "value": "太子河区"
  },
  {
    "address": "211021",
    "value": "辽阳县"
  },
  {
    "address": "211081",
    "value": "灯塔市"
  },
  {
    "address": "211102",
    "value": "双台子区"
  },
  {
    "address": "211103",
    "value": "兴隆台区"
  },
  {
    "address": "211121",
    "value": "大洼县"
  },
  {
    "address": "211122",
    "value": "盘山县"
  },
  {
    "address": "211202",
    "value": "银州区"
  },
  {
    "address": "211204",
    "value": "清河区"
  },
  {
    "address": "211221",
    "value": "铁岭县"
  },
  {
    "address": "211223",
    "value": "西丰县"
  },
  {
    "address": "211224",
    "value": "昌图县"
  },
  {
    "address": "211281",
    "value": "调兵山市"
  },
  {
    "address": "211282",
    "value": "开原市"
  },
  {
    "address": "211302",
    "value": "双塔区"
  },
  {
    "address": "211303",
    "value": "龙城区"
  },
  {
    "address": "211321",
    "value": "朝阳县"
  },
  {
    "address": "211322",
    "value": "建平县"
  },
  {
    "address": "211324",
    "value": "喀喇沁左翼蒙古族自治县"
  },
  {
    "address": "211381",
    "value": "北票市"
  },
  {
    "address": "211382",
    "value": "凌源市"
  },
  {
    "address": "211402",
    "value": "连山区"
  },
  {
    "address": "211403",
    "value": "龙港区"
  },
  {
    "address": "211404",
    "value": "南票区"
  },
  {
    "address": "211421",
    "value": "绥中县"
  },
  {
    "address": "211422",
    "value": "建昌县"
  },
  {
    "address": "211481",
    "value": "兴城市"
  },
  {
    "address": "220102",
    "value": "南关区"
  },
  {
    "address": "220103",
    "value": "宽城区"
  },
  {
    "address": "220104",
    "value": "朝阳区"
  },
  {
    "address": "220105",
    "value": "二道区"
  },
  {
    "address": "220106",
    "value": "绿园区"
  },
  {
    "address": "220112",
    "value": "双阳区"
  },
  {
    "address": "220122",
    "value": "农安县"
  },
  {
    "address": "220181",
    "value": "九台市"
  },
  {
    "address": "220182",
    "value": "榆树市"
  },
  {
    "address": "220183",
    "value": "德惠市"
  },
  {
    "address": "220202",
    "value": "昌邑区"
  },
  {
    "address": "220203",
    "value": "龙潭区"
  },
  {
    "address": "220204",
    "value": "船营区"
  },
  {
    "address": "220211",
    "value": "丰满区"
  },
  {
    "address": "220221",
    "value": "永吉县"
  },
  {
    "address": "220281",
    "value": "蛟河市"
  },
  {
    "address": "220282",
    "value": "桦甸市"
  },
  {
    "address": "220283",
    "value": "舒兰市"
  },
  {
    "address": "220284",
    "value": "磐石市"
  },
  {
    "address": "220302",
    "value": "铁西区"
  },
  {
    "address": "220303",
    "value": "铁东区"
  },
  {
    "address": "220322",
    "value": "梨树县"
  },
  {
    "address": "220323",
    "value": "伊通满族自治县"
  },
  {
    "address": "220381",
    "value": "公主岭市"
  },
  {
    "address": "220382",
    "value": "双辽市"
  },
  {
    "address": "220402",
    "value": "龙山区"
  },
  {
    "address": "220403",
    "value": "西安区"
  },
  {
    "address": "220421",
    "value": "东丰县"
  },
  {
    "address": "220422",
    "value": "东辽县"
  },
  {
    "address": "220502",
    "value": "东昌区"
  },
  {
    "address": "220503",
    "value": "二道江区"
  },
  {
    "address": "220521",
    "value": "通化县"
  },
  {
    "address": "220523",
    "value": "辉南县"
  },
  {
    "address": "220524",
    "value": "柳河县"
  },
  {
    "address": "220581",
    "value": "梅河口市"
  },
  {
    "address": "220582",
    "value": "集安市"
  },
  {
    "address": "220602",
    "value": "八道江区"
  },
  {
    "address": "220605",
    "value": "江源区"
  },
  {
    "address": "220621",
    "value": "抚松县"
  },
  {
    "address": "220622",
    "value": "靖宇县"
  },
  {
    "address": "220623",
    "value": "长白朝鲜族自治县"
  },
  {
    "address": "220681",
    "value": "临江市"
  },
  {
    "address": "220702",
    "value": "宁江区"
  },
  {
    "address": "220721",
    "value": "前郭尔罗斯蒙古族自治县"
  },
  {
    "address": "220722",
    "value": "长岭县"
  },
  {
    "address": "220723",
    "value": "乾安县"
  },
  {
    "address": "220724",
    "value": "扶余县"
  },
  {
    "address": "220802",
    "value": "洮北区"
  },
  {
    "address": "220821",
    "value": "镇赉县"
  },
  {
    "address": "220822",
    "value": "通榆县"
  },
  {
    "address": "220881",
    "value": "洮南市"
  },
  {
    "address": "220882",
    "value": "大安市"
  },
  {
    "address": "222401",
    "value": "延吉市"
  },
  {
    "address": "222402",
    "value": "图们市"
  },
  {
    "address": "222403",
    "value": "敦化市"
  },
  {
    "address": "222404",
    "value": "珲春市"
  },
  {
    "address": "222405",
    "value": "龙井市"
  },
  {
    "address": "222406",
    "value": "和龙市"
  },
  {
    "address": "222424",
    "value": "汪清县"
  },
  {
    "address": "222426",
    "value": "安图县"
  },
  {
    "address": "230102",
    "value": "道里区"
  },
  {
    "address": "230103",
    "value": "南岗区"
  },
  {
    "address": "230104",
    "value": "道外区"
  },
  {
    "address": "230108",
    "value": "平房区"
  },
  {
    "address": "230109",
    "value": "松北区"
  },
  {
    "address": "230110",
    "value": "香坊区"
  },
  {
    "address": "230111",
    "value": "呼兰区"
  },
  {
    "address": "230112",
    "value": "阿城区"
  },
  {
    "address": "230123",
    "value": "依兰县"
  },
  {
    "address": "230124",
    "value": "方正县"
  },
  {
    "address": "230125",
    "value": "宾县"
  },
  {
    "address": "230126",
    "value": "巴彦县"
  },
  {
    "address": "230127",
    "value": "木兰县"
  },
  {
    "address": "230128",
    "value": "通河县"
  },
  {
    "address": "230129",
    "value": "延寿县"
  },
  {
    "address": "230182",
    "value": "双城市"
  },
  {
    "address": "230183",
    "value": "尚志市"
  },
  {
    "address": "230184",
    "value": "五常市"
  },
  {
    "address": "230202",
    "value": "龙沙区"
  },
  {
    "address": "230203",
    "value": "建华区"
  },
  {
    "address": "230204",
    "value": "铁锋区"
  },
  {
    "address": "230205",
    "value": "昂昂溪区"
  },
  {
    "address": "230206",
    "value": "富拉尔基区"
  },
  {
    "address": "230207",
    "value": "碾子山区"
  },
  {
    "address": "230208",
    "value": "梅里斯达斡尔族区"
  },
  {
    "address": "230221",
    "value": "龙江县"
  },
  {
    "address": "230223",
    "value": "依安县"
  },
  {
    "address": "230224",
    "value": "泰来县"
  },
  {
    "address": "230225",
    "value": "甘南县"
  },
  {
    "address": "230227",
    "value": "富裕县"
  },
  {
    "address": "230229",
    "value": "克山县"
  },
  {
    "address": "230230",
    "value": "克东县"
  },
  {
    "address": "230231",
    "value": "拜泉县"
  },
  {
    "address": "230281",
    "value": "讷河市"
  },
  {
    "address": "230302",
    "value": "鸡冠区"
  },
  {
    "address": "230303",
    "value": "恒山区"
  },
  {
    "address": "230304",
    "value": "滴道区"
  },
  {
    "address": "230305",
    "value": "梨树区"
  },
  {
    "address": "230306",
    "value": "城子河区"
  },
  {
    "address": "230307",
    "value": "麻山区"
  },
  {
    "address": "230321",
    "value": "鸡东县"
  },
  {
    "address": "230381",
    "value": "虎林市"
  },
  {
    "address": "230382",
    "value": "密山市"
  },
  {
    "address": "230402",
    "value": "向阳区"
  },
  {
    "address": "230403",
    "value": "工农区"
  },
  {
    "address": "230404",
    "value": "南山区"
  },
  {
    "address": "230405",
    "value": "兴安区"
  },
  {
    "address": "230406",
    "value": "东山区"
  },
  {
    "address": "230407",
    "value": "兴山区"
  },
  {
    "address": "230421",
    "value": "萝北县"
  },
  {
    "address": "230422",
    "value": "绥滨县"
  },
  {
    "address": "230502",
    "value": "尖山区"
  },
  {
    "address": "230503",
    "value": "岭东区"
  },
  {
    "address": "230505",
    "value": "四方台区"
  },
  {
    "address": "230506",
    "value": "宝山区"
  },
  {
    "address": "230521",
    "value": "集贤县"
  },
  {
    "address": "230522",
    "value": "友谊县"
  },
  {
    "address": "230523",
    "value": "宝清县"
  },
  {
    "address": "230524",
    "value": "饶河县"
  },
  {
    "address": "230602",
    "value": "萨尔图区"
  },
  {
    "address": "230603",
    "value": "龙凤区"
  },
  {
    "address": "230604",
    "value": "让胡路区"
  },
  {
    "address": "230605",
    "value": "红岗区"
  },
  {
    "address": "230606",
    "value": "大同区"
  },
  {
    "address": "230621",
    "value": "肇州县"
  },
  {
    "address": "230622",
    "value": "肇源县"
  },
  {
    "address": "230623",
    "value": "林甸县"
  },
  {
    "address": "230624",
    "value": "杜尔伯特蒙古族自治县"
  },
  {
    "address": "230702",
    "value": "伊春区"
  },
  {
    "address": "230703",
    "value": "南岔区"
  },
  {
    "address": "230704",
    "value": "友好区"
  },
  {
    "address": "230705",
    "value": "西林区"
  },
  {
    "address": "230706",
    "value": "翠峦区"
  },
  {
    "address": "230707",
    "value": "新青区"
  },
  {
    "address": "230708",
    "value": "美溪区"
  },
  {
    "address": "230709",
    "value": "金山屯区"
  },
  {
    "address": "230710",
    "value": "五营区"
  },
  {
    "address": "230711",
    "value": "乌马河区"
  },
  {
    "address": "230712",
    "value": "汤旺河区"
  },
  {
    "address": "230713",
    "value": "带岭区"
  },
  {
    "address": "230714",
    "value": "乌伊岭区"
  },
  {
    "address": "230715",
    "value": "红星区"
  },
  {
    "address": "230716",
    "value": "上甘岭区"
  },
  {
    "address": "230722",
    "value": "嘉荫县"
  },
  {
    "address": "230781",
    "value": "铁力市"
  },
  {
    "address": "230803",
    "value": "向阳区"
  },
  {
    "address": "230804",
    "value": "前进区"
  },
  {
    "address": "230805",
    "value": "东风区"
  },
  {
    "address": "230811",
    "value": "郊区"
  },
  {
    "address": "230822",
    "value": "桦南县"
  },
  {
    "address": "230826",
    "value": "桦川县"
  },
  {
    "address": "230828",
    "value": "汤原县"
  },
  {
    "address": "230833",
    "value": "抚远县"
  },
  {
    "address": "230881",
    "value": "同江市"
  },
  {
    "address": "230882",
    "value": "富锦市"
  },
  {
    "address": "230902",
    "value": "新兴区"
  },
  {
    "address": "230903",
    "value": "桃山区"
  },
  {
    "address": "230904",
    "value": "茄子河区"
  },
  {
    "address": "230921",
    "value": "勃利县"
  },
  {
    "address": "231002",
    "value": "东安区"
  },
  {
    "address": "231003",
    "value": "阳明区"
  },
  {
    "address": "231004",
    "value": "爱民区"
  },
  {
    "address": "231005",
    "value": "西安区"
  },
  {
    "address": "231024",
    "value": "东宁县"
  },
  {
    "address": "231025",
    "value": "林口县"
  },
  {
    "address": "231081",
    "value": "绥芬河市"
  },
  {
    "address": "231083",
    "value": "海林市"
  },
  {
    "address": "231084",
    "value": "宁安市"
  },
  {
    "address": "231085",
    "value": "穆棱市"
  },
  {
    "address": "231102",
    "value": "爱辉区"
  },
  {
    "address": "231121",
    "value": "嫩江县"
  },
  {
    "address": "231123",
    "value": "逊克县"
  },
  {
    "address": "231124",
    "value": "孙吴县"
  },
  {
    "address": "231181",
    "value": "北安市"
  },
  {
    "address": "231182",
    "value": "五大连池市"
  },
  {
    "address": "231202",
    "value": "北林区"
  },
  {
    "address": "231221",
    "value": "望奎县"
  },
  {
    "address": "231222",
    "value": "兰西县"
  },
  {
    "address": "231223",
    "value": "青冈县"
  },
  {
    "address": "231224",
    "value": "庆安县"
  },
  {
    "address": "231225",
    "value": "明水县"
  },
  {
    "address": "231226",
    "value": "绥棱县"
  },
  {
    "address": "231281",
    "value": "安达市"
  },
  {
    "address": "231282",
    "value": "肇东市"
  },
  {
    "address": "231283",
    "value": "海伦市"
  },
  {
    "address": "232721",
    "value": "呼玛县"
  },
  {
    "address": "232722",
    "value": "塔河县"
  },
  {
    "address": "232723",
    "value": "漠河县"
  },
  {
    "address": "310101",
    "value": "黄浦区"
  },
  {
    "address": "310104",
    "value": "徐汇区"
  },
  {
    "address": "310105",
    "value": "长宁区"
  },
  {
    "address": "310106",
    "value": "静安区"
  },
  {
    "address": "310107",
    "value": "普陀区"
  },
  {
    "address": "310108",
    "value": "闸北区"
  },
  {
    "address": "310109",
    "value": "虹口区"
  },
  {
    "address": "310110",
    "value": "杨浦区"
  },
  {
    "address": "310112",
    "value": "闵行区"
  },
  {
    "address": "310113",
    "value": "宝山区"
  },
  {
    "address": "310114",
    "value": "嘉定区"
  },
  {
    "address": "310115",
    "value": "浦东新区"
  },
  {
    "address": "310116",
    "value": "金山区"
  },
  {
    "address": "310117",
    "value": "松江区"
  },
  {
    "address": "310118",
    "value": "青浦区"
  },
  {
    "address": "310120",
    "value": "奉贤区"
  },
  {
    "address": "310230",
    "value": "崇明县"
  },
  {
    "address": "320102",
    "value": "玄武区"
  },
  {
    "address": "320103",
    "value": "白下区"
  },
  {
    "address": "320104",
    "value": "秦淮区"
  },
  {
    "address": "320105",
    "value": "建邺区"
  },
  {
    "address": "320106",
    "value": "鼓楼区"
  },
  {
    "address": "320107",
    "value": "下关区"
  },
  {
    "address": "320111",
    "value": "浦口区"
  },
  {
    "address": "320113",
    "value": "栖霞区"
  },
  {
    "address": "320114",
    "value": "雨花台区"
  },
  {
    "address": "320115",
    "value": "江宁区"
  },
  {
    "address": "320116",
    "value": "六合区"
  },
  {
    "address": "320124",
    "value": "溧水县"
  },
  {
    "address": "320125",
    "value": "高淳县"
  },
  {
    "address": "320202",
    "value": "崇安区"
  },
  {
    "address": "320203",
    "value": "南长区"
  },
  {
    "address": "320204",
    "value": "北塘区"
  },
  {
    "address": "320205",
    "value": "锡山区"
  },
  {
    "address": "320206",
    "value": "惠山区"
  },
  {
    "address": "320211",
    "value": "滨湖区"
  },
  {
    "address": "320281",
    "value": "江阴市"
  },
  {
    "address": "320282",
    "value": "宜兴市"
  },
  {
    "address": "320302",
    "value": "鼓楼区"
  },
  {
    "address": "320303",
    "value": "云龙区"
  },
  {
    "address": "320305",
    "value": "贾汪区"
  },
  {
    "address": "320311",
    "value": "泉山区"
  },
  {
    "address": "320312",
    "value": "铜山区"
  },
  {
    "address": "320321",
    "value": "丰县"
  },
  {
    "address": "320322",
    "value": "沛县"
  },
  {
    "address": "320324",
    "value": "睢宁县"
  },
  {
    "address": "320381",
    "value": "新沂市"
  },
  {
    "address": "320382",
    "value": "邳州市"
  },
  {
    "address": "320402",
    "value": "天宁区"
  },
  {
    "address": "320404",
    "value": "钟楼区"
  },
  {
    "address": "320405",
    "value": "戚墅堰区"
  },
  {
    "address": "320411",
    "value": "新北区"
  },
  {
    "address": "320412",
    "value": "武进区"
  },
  {
    "address": "320481",
    "value": "溧阳市"
  },
  {
    "address": "320482",
    "value": "金坛市"
  },
  {
    "address": "320502",
    "value": "沧浪区"
  },
  {
    "address": "320503",
    "value": "平江区"
  },
  {
    "address": "320504",
    "value": "金阊区"
  },
  {
    "address": "320505",
    "value": "虎丘区"
  },
  {
    "address": "320506",
    "value": "吴中区"
  },
  {
    "address": "320507",
    "value": "相城区"
  },
  {
    "address": "320581",
    "value": "常熟市"
  },
  {
    "address": "320582",
    "value": "张家港市"
  },
  {
    "address": "320583",
    "value": "昆山市"
  },
  {
    "address": "320584",
    "value": "吴江市"
  },
  {
    "address": "320585",
    "value": "太仓市"
  },
  {
    "address": "320602",
    "value": "崇川区"
  },
  {
    "address": "320611",
    "value": "港闸区"
  },
  {
    "address": "320612",
    "value": "通州区"
  },
  {
    "address": "320621",
    "value": "海安县"
  },
  {
    "address": "320623",
    "value": "如东县"
  },
  {
    "address": "320681",
    "value": "启东市"
  },
  {
    "address": "320682",
    "value": "如皋市"
  },
  {
    "address": "320684",
    "value": "海门市"
  },
  {
    "address": "320703",
    "value": "连云区"
  },
  {
    "address": "320705",
    "value": "新浦区"
  },
  {
    "address": "320706",
    "value": "海州区"
  },
  {
    "address": "320721",
    "value": "赣榆县"
  },
  {
    "address": "320722",
    "value": "东海县"
  },
  {
    "address": "320723",
    "value": "灌云县"
  },
  {
    "address": "320724",
    "value": "灌南县"
  },
  {
    "address": "320802",
    "value": "清河区"
  },
  {
    "address": "320803",
    "value": "楚州区"
  },
  {
    "address": "320804",
    "value": "淮阴区"
  },
  {
    "address": "320811",
    "value": "清浦区"
  },
  {
    "address": "320826",
    "value": "涟水县"
  },
  {
    "address": "320829",
    "value": "洪泽县"
  },
  {
    "address": "320830",
    "value": "盱眙县"
  },
  {
    "address": "320831",
    "value": "金湖县"
  },
  {
    "address": "320902",
    "value": "亭湖区"
  },
  {
    "address": "320903",
    "value": "盐都区"
  },
  {
    "address": "320921",
    "value": "响水县"
  },
  {
    "address": "320922",
    "value": "滨海县"
  },
  {
    "address": "320923",
    "value": "阜宁县"
  },
  {
    "address": "320924",
    "value": "射阳县"
  },
  {
    "address": "320925",
    "value": "建湖县"
  },
  {
    "address": "320981",
    "value": "东台市"
  },
  {
    "address": "320982",
    "value": "大丰市"
  },
  {
    "address": "321002",
    "value": "广陵区"
  },
  {
    "address": "321003",
    "value": "邗江区"
  },
  {
    "address": "321012",
    "value": "江都区"
  },
  {
    "address": "321023",
    "value": "宝应县"
  },
  {
    "address": "321081",
    "value": "仪征市"
  },
  {
    "address": "321084",
    "value": "高邮市"
  },
  {
    "address": "321102",
    "value": "京口区"
  },
  {
    "address": "321111",
    "value": "润州区"
  },
  {
    "address": "321112",
    "value": "丹徒区"
  },
  {
    "address": "321181",
    "value": "丹阳市"
  },
  {
    "address": "321182",
    "value": "扬中市"
  },
  {
    "address": "321183",
    "value": "句容市"
  },
  {
    "address": "321202",
    "value": "海陵区"
  },
  {
    "address": "321203",
    "value": "高港区"
  },
  {
    "address": "321281",
    "value": "兴化市"
  },
  {
    "address": "321282",
    "value": "靖江市"
  },
  {
    "address": "321283",
    "value": "泰兴市"
  },
  {
    "address": "321284",
    "value": "姜堰市"
  },
  {
    "address": "321302",
    "value": "宿城区"
  },
  {
    "address": "321311",
    "value": "宿豫区"
  },
  {
    "address": "321322",
    "value": "沭阳县"
  },
  {
    "address": "321323",
    "value": "泗阳县"
  },
  {
    "address": "321324",
    "value": "泗洪县"
  },
  {
    "address": "330102",
    "value": "上城区"
  },
  {
    "address": "330103",
    "value": "下城区"
  },
  {
    "address": "330104",
    "value": "江干区"
  },
  {
    "address": "330105",
    "value": "拱墅区"
  },
  {
    "address": "330106",
    "value": "西湖区"
  },
  {
    "address": "330108",
    "value": "滨江区"
  },
  {
    "address": "330109",
    "value": "萧山区"
  },
  {
    "address": "330110",
    "value": "余杭区"
  },
  {
    "address": "330122",
    "value": "桐庐县"
  },
  {
    "address": "330127",
    "value": "淳安县"
  },
  {
    "address": "330182",
    "value": "建德市"
  },
  {
    "address": "330183",
    "value": "富阳市"
  },
  {
    "address": "330185",
    "value": "临安市"
  },
  {
    "address": "330203",
    "value": "海曙区"
  },
  {
    "address": "330204",
    "value": "江东区"
  },
  {
    "address": "330205",
    "value": "江北区"
  },
  {
    "address": "330206",
    "value": "北仑区"
  },
  {
    "address": "330211",
    "value": "镇海区"
  },
  {
    "address": "330212",
    "value": "鄞州区"
  },
  {
    "address": "330225",
    "value": "象山县"
  },
  {
    "address": "330226",
    "value": "宁海县"
  },
  {
    "address": "330281",
    "value": "余姚市"
  },
  {
    "address": "330282",
    "value": "慈溪市"
  },
  {
    "address": "330283",
    "value": "奉化市"
  },
  {
    "address": "330302",
    "value": "鹿城区"
  },
  {
    "address": "330303",
    "value": "龙湾区"
  },
  {
    "address": "330304",
    "value": "瓯海区"
  },
  {
    "address": "330322",
    "value": "洞头县"
  },
  {
    "address": "330324",
    "value": "永嘉县"
  },
  {
    "address": "330326",
    "value": "平阳县"
  },
  {
    "address": "330327",
    "value": "苍南县"
  },
  {
    "address": "330328",
    "value": "文成县"
  },
  {
    "address": "330329",
    "value": "泰顺县"
  },
  {
    "address": "330381",
    "value": "瑞安市"
  },
  {
    "address": "330382",
    "value": "乐清市"
  },
  {
    "address": "330402",
    "value": "南湖区"
  },
  {
    "address": "330411",
    "value": "秀洲区"
  },
  {
    "address": "330421",
    "value": "嘉善县"
  },
  {
    "address": "330424",
    "value": "海盐县"
  },
  {
    "address": "330481",
    "value": "海宁市"
  },
  {
    "address": "330482",
    "value": "平湖市"
  },
  {
    "address": "330483",
    "value": "桐乡市"
  },
  {
    "address": "330502",
    "value": "吴兴区"
  },
  {
    "address": "330503",
    "value": "南浔区"
  },
  {
    "address": "330521",
    "value": "德清县"
  },
  {
    "address": "330522",
    "value": "长兴县"
  },
  {
    "address": "330523",
    "value": "安吉县"
  },
  {
    "address": "330602",
    "value": "越城区"
  },
  {
    "address": "330621",
    "value": "绍兴县"
  },
  {
    "address": "330624",
    "value": "新昌县"
  },
  {
    "address": "330681",
    "value": "诸暨市"
  },
  {
    "address": "330682",
    "value": "上虞市"
  },
  {
    "address": "330683",
    "value": "嵊州市"
  },
  {
    "address": "330702",
    "value": "婺城区"
  },
  {
    "address": "330703",
    "value": "金东区"
  },
  {
    "address": "330723",
    "value": "武义县"
  },
  {
    "address": "330726",
    "value": "浦江县"
  },
  {
    "address": "330727",
    "value": "磐安县"
  },
  {
    "address": "330781",
    "value": "兰溪市"
  },
  {
    "address": "330782",
    "value": "义乌市"
  },
  {
    "address": "330783",
    "value": "东阳市"
  },
  {
    "address": "330784",
    "value": "永康市"
  },
  {
    "address": "330802",
    "value": "柯城区"
  },
  {
    "address": "330803",
    "value": "衢江区"
  },
  {
    "address": "330822",
    "value": "常山县"
  },
  {
    "address": "330824",
    "value": "开化县"
  },
  {
    "address": "330825",
    "value": "龙游县"
  },
  {
    "address": "330881",
    "value": "江山市"
  },
  {
    "address": "330902",
    "value": "定海区"
  },
  {
    "address": "330903",
    "value": "普陀区"
  },
  {
    "address": "330921",
    "value": "岱山县"
  },
  {
    "address": "330922",
    "value": "嵊泗县"
  },
  {
    "address": "331002",
    "value": "椒江区"
  },
  {
    "address": "331003",
    "value": "黄岩区"
  },
  {
    "address": "331004",
    "value": "路桥区"
  },
  {
    "address": "331021",
    "value": "玉环县"
  },
  {
    "address": "331022",
    "value": "三门县"
  },
  {
    "address": "331023",
    "value": "天台县"
  },
  {
    "address": "331024",
    "value": "仙居县"
  },
  {
    "address": "331081",
    "value": "温岭市"
  },
  {
    "address": "331082",
    "value": "临海市"
  },
  {
    "address": "331102",
    "value": "莲都区"
  },
  {
    "address": "331121",
    "value": "青田县"
  },
  {
    "address": "331122",
    "value": "缙云县"
  },
  {
    "address": "331123",
    "value": "遂昌县"
  },
  {
    "address": "331124",
    "value": "松阳县"
  },
  {
    "address": "331125",
    "value": "云和县"
  },
  {
    "address": "331126",
    "value": "庆元县"
  },
  {
    "address": "331127",
    "value": "景宁畲族自治县"
  },
  {
    "address": "331181",
    "value": "龙泉市"
  },
  {
    "address": "340102",
    "value": "瑶海区"
  },
  {
    "address": "340103",
    "value": "庐阳区"
  },
  {
    "address": "340104",
    "value": "蜀山区"
  },
  {
    "address": "340111",
    "value": "包河区"
  },
  {
    "address": "340121",
    "value": "长丰县"
  },
  {
    "address": "340122",
    "value": "肥东县"
  },
  {
    "address": "340123",
    "value": "肥西县"
  },
  {
    "address": "340124",
    "value": "庐江县"
  },
  {
    "address": "340181",
    "value": "巢湖市"
  },
  {
    "address": "340202",
    "value": "镜湖区"
  },
  {
    "address": "340203",
    "value": "弋江区"
  },
  {
    "address": "340207",
    "value": "鸠江区"
  },
  {
    "address": "340208",
    "value": "三山区"
  },
  {
    "address": "340221",
    "value": "芜湖县"
  },
  {
    "address": "340222",
    "value": "繁昌县"
  },
  {
    "address": "340223",
    "value": "南陵县"
  },
  {
    "address": "340225",
    "value": "无为县"
  },
  {
    "address": "340302",
    "value": "龙子湖区"
  },
  {
    "address": "340303",
    "value": "蚌山区"
  },
  {
    "address": "340304",
    "value": "禹会区"
  },
  {
    "address": "340311",
    "value": "淮上区"
  },
  {
    "address": "340321",
    "value": "怀远县"
  },
  {
    "address": "340322",
    "value": "五河县"
  },
  {
    "address": "340323",
    "value": "固镇县"
  },
  {
    "address": "340402",
    "value": "大通区"
  },
  {
    "address": "340403",
    "value": "田家庵区"
  },
  {
    "address": "340404",
    "value": "谢家集区"
  },
  {
    "address": "340405",
    "value": "八公山区"
  },
  {
    "address": "340406",
    "value": "潘集区"
  },
  {
    "address": "340421",
    "value": "凤台县"
  },
  {
    "address": "340502",
    "value": "金家庄区"
  },
  {
    "address": "340503",
    "value": "花山区"
  },
  {
    "address": "340504",
    "value": "雨山区"
  },
  {
    "address": "340521",
    "value": "当涂县"
  },
  {
    "address": "340522",
    "value": "含山县"
  },
  {
    "address": "340523",
    "value": "和县"
  },
  {
    "address": "340602",
    "value": "杜集区"
  },
  {
    "address": "340603",
    "value": "相山区"
  },
  {
    "address": "340604",
    "value": "烈山区"
  },
  {
    "address": "340621",
    "value": "濉溪县"
  },
  {
    "address": "340702",
    "value": "铜官山区"
  },
  {
    "address": "340703",
    "value": "狮子山区"
  },
  {
    "address": "340711",
    "value": "郊区"
  },
  {
    "address": "340721",
    "value": "铜陵县"
  },
  {
    "address": "340802",
    "value": "迎江区"
  },
  {
    "address": "340803",
    "value": "大观区"
  },
  {
    "address": "340811",
    "value": "宜秀区"
  },
  {
    "address": "340822",
    "value": "怀宁县"
  },
  {
    "address": "340823",
    "value": "枞阳县"
  },
  {
    "address": "340824",
    "value": "潜山县"
  },
  {
    "address": "340825",
    "value": "太湖县"
  },
  {
    "address": "340826",
    "value": "宿松县"
  },
  {
    "address": "340827",
    "value": "望江县"
  },
  {
    "address": "340828",
    "value": "岳西县"
  },
  {
    "address": "340881",
    "value": "桐城市"
  },
  {
    "address": "341002",
    "value": "屯溪区"
  },
  {
    "address": "341003",
    "value": "黄山区"
  },
  {
    "address": "341004",
    "value": "徽州区"
  },
  {
    "address": "341021",
    "value": "歙县"
  },
  {
    "address": "341022",
    "value": "休宁县"
  },
  {
    "address": "341023",
    "value": "黟县"
  },
  {
    "address": "341024",
    "value": "祁门县"
  },
  {
    "address": "341102",
    "value": "琅琊区"
  },
  {
    "address": "341103",
    "value": "南谯区"
  },
  {
    "address": "341122",
    "value": "来安县"
  },
  {
    "address": "341124",
    "value": "全椒县"
  },
  {
    "address": "341125",
    "value": "定远县"
  },
  {
    "address": "341126",
    "value": "凤阳县"
  },
  {
    "address": "341181",
    "value": "天长市"
  },
  {
    "address": "341182",
    "value": "明光市"
  },
  {
    "address": "341202",
    "value": "颍州区"
  },
  {
    "address": "341203",
    "value": "颍东区"
  },
  {
    "address": "341204",
    "value": "颍泉区"
  },
  {
    "address": "341221",
    "value": "临泉县"
  },
  {
    "address": "341222",
    "value": "太和县"
  },
  {
    "address": "341225",
    "value": "阜南县"
  },
  {
    "address": "341226",
    "value": "颍上县"
  },
  {
    "address": "341282",
    "value": "界首市"
  },
  {
    "address": "341302",
    "value": "埇桥区"
  },
  {
    "address": "341321",
    "value": "砀山县"
  },
  {
    "address": "341322",
    "value": "萧县"
  },
  {
    "address": "341323",
    "value": "灵璧县"
  },
  {
    "address": "341324",
    "value": "泗县"
  },
  {
    "address": "341502",
    "value": "金安区"
  },
  {
    "address": "341503",
    "value": "裕安区"
  },
  {
    "address": "341521",
    "value": "寿县"
  },
  {
    "address": "341522",
    "value": "霍邱县"
  },
  {
    "address": "341523",
    "value": "舒城县"
  },
  {
    "address": "341524",
    "value": "金寨县"
  },
  {
    "address": "341525",
    "value": "霍山县"
  },
  {
    "address": "341602",
    "value": "谯城区"
  },
  {
    "address": "341621",
    "value": "涡阳县"
  },
  {
    "address": "341622",
    "value": "蒙城县"
  },
  {
    "address": "341623",
    "value": "利辛县"
  },
  {
    "address": "341702",
    "value": "贵池区"
  },
  {
    "address": "341721",
    "value": "东至县"
  },
  {
    "address": "341722",
    "value": "石台县"
  },
  {
    "address": "341723",
    "value": "青阳县"
  },
  {
    "address": "341802",
    "value": "宣州区"
  },
  {
    "address": "341821",
    "value": "郎溪县"
  },
  {
    "address": "341822",
    "value": "广德县"
  },
  {
    "address": "341823",
    "value": "泾县"
  },
  {
    "address": "341824",
    "value": "绩溪县"
  },
  {
    "address": "341825",
    "value": "旌德县"
  },
  {
    "address": "341881",
    "value": "宁国市"
  },
  {
    "address": "350102",
    "value": "鼓楼区"
  },
  {
    "address": "350103",
    "value": "台江区"
  },
  {
    "address": "350104",
    "value": "仓山区"
  },
  {
    "address": "350105",
    "value": "马尾区"
  },
  {
    "address": "350111",
    "value": "晋安区"
  },
  {
    "address": "350121",
    "value": "闽侯县"
  },
  {
    "address": "350122",
    "value": "连江县"
  },
  {
    "address": "350123",
    "value": "罗源县"
  },
  {
    "address": "350124",
    "value": "闽清县"
  },
  {
    "address": "350125",
    "value": "永泰县"
  },
  {
    "address": "350128",
    "value": "平潭县"
  },
  {
    "address": "350181",
    "value": "福清市"
  },
  {
    "address": "350182",
    "value": "长乐市"
  },
  {
    "address": "350203",
    "value": "思明区"
  },
  {
    "address": "350205",
    "value": "海沧区"
  },
  {
    "address": "350206",
    "value": "湖里区"
  },
  {
    "address": "350211",
    "value": "集美区"
  },
  {
    "address": "350212",
    "value": "同安区"
  },
  {
    "address": "350213",
    "value": "翔安区"
  },
  {
    "address": "350302",
    "value": "城厢区"
  },
  {
    "address": "350303",
    "value": "涵江区"
  },
  {
    "address": "350304",
    "value": "荔城区"
  },
  {
    "address": "350305",
    "value": "秀屿区"
  },
  {
    "address": "350322",
    "value": "仙游县"
  },
  {
    "address": "350402",
    "value": "梅列区"
  },
  {
    "address": "350403",
    "value": "三元区"
  },
  {
    "address": "350421",
    "value": "明溪县"
  },
  {
    "address": "350423",
    "value": "清流县"
  },
  {
    "address": "350424",
    "value": "宁化县"
  },
  {
    "address": "350425",
    "value": "大田县"
  },
  {
    "address": "350426",
    "value": "尤溪县"
  },
  {
    "address": "350427",
    "value": "沙县"
  },
  {
    "address": "350428",
    "value": "将乐县"
  },
  {
    "address": "350429",
    "value": "泰宁县"
  },
  {
    "address": "350430",
    "value": "建宁县"
  },
  {
    "address": "350481",
    "value": "永安市"
  },
  {
    "address": "350502",
    "value": "鲤城区"
  },
  {
    "address": "350503",
    "value": "丰泽区"
  },
  {
    "address": "350504",
    "value": "洛江区"
  },
  {
    "address": "350505",
    "value": "泉港区"
  },
  {
    "address": "350521",
    "value": "惠安县"
  },
  {
    "address": "350524",
    "value": "安溪县"
  },
  {
    "address": "350525",
    "value": "永春县"
  },
  {
    "address": "350526",
    "value": "德化县"
  },
  {
    "address": "350527",
    "value": "金门县"
  },
  {
    "address": "350581",
    "value": "石狮市"
  },
  {
    "address": "350582",
    "value": "晋江市"
  },
  {
    "address": "350583",
    "value": "南安市"
  },
  {
    "address": "350602",
    "value": "芗城区"
  },
  {
    "address": "350603",
    "value": "龙文区"
  },
  {
    "address": "350622",
    "value": "云霄县"
  },
  {
    "address": "350623",
    "value": "漳浦县"
  },
  {
    "address": "350624",
    "value": "诏安县"
  },
  {
    "address": "350625",
    "value": "长泰县"
  },
  {
    "address": "350626",
    "value": "东山县"
  },
  {
    "address": "350627",
    "value": "南靖县"
  },
  {
    "address": "350628",
    "value": "平和县"
  },
  {
    "address": "350629",
    "value": "华安县"
  },
  {
    "address": "350681",
    "value": "龙海市"
  },
  {
    "address": "350702",
    "value": "延平区"
  },
  {
    "address": "350721",
    "value": "顺昌县"
  },
  {
    "address": "350722",
    "value": "浦城县"
  },
  {
    "address": "350723",
    "value": "光泽县"
  },
  {
    "address": "350724",
    "value": "松溪县"
  },
  {
    "address": "350725",
    "value": "政和县"
  },
  {
    "address": "350781",
    "value": "邵武市"
  },
  {
    "address": "350782",
    "value": "武夷山市"
  },
  {
    "address": "350783",
    "value": "建瓯市"
  },
  {
    "address": "350784",
    "value": "建阳市"
  },
  {
    "address": "350802",
    "value": "新罗区"
  },
  {
    "address": "350821",
    "value": "长汀县"
  },
  {
    "address": "350822",
    "value": "永定县"
  },
  {
    "address": "350823",
    "value": "上杭县"
  },
  {
    "address": "350824",
    "value": "武平县"
  },
  {
    "address": "350825",
    "value": "连城县"
  },
  {
    "address": "350881",
    "value": "漳平市"
  },
  {
    "address": "350902",
    "value": "蕉城区"
  },
  {
    "address": "350921",
    "value": "霞浦县"
  },
  {
    "address": "350922",
    "value": "古田县"
  },
  {
    "address": "350923",
    "value": "屏南县"
  },
  {
    "address": "350924",
    "value": "寿宁县"
  },
  {
    "address": "350925",
    "value": "周宁县"
  },
  {
    "address": "350926",
    "value": "柘荣县"
  },
  {
    "address": "350981",
    "value": "福安市"
  },
  {
    "address": "350982",
    "value": "福鼎市"
  },
  {
    "address": "360102",
    "value": "东湖区"
  },
  {
    "address": "360103",
    "value": "西湖区"
  },
  {
    "address": "360104",
    "value": "青云谱区"
  },
  {
    "address": "360105",
    "value": "湾里区"
  },
  {
    "address": "360111",
    "value": "青山湖区"
  },
  {
    "address": "360121",
    "value": "南昌县"
  },
  {
    "address": "360122",
    "value": "新建县"
  },
  {
    "address": "360123",
    "value": "安义县"
  },
  {
    "address": "360124",
    "value": "进贤县"
  },
  {
    "address": "360202",
    "value": "昌江区"
  },
  {
    "address": "360203",
    "value": "珠山区"
  },
  {
    "address": "360222",
    "value": "浮梁县"
  },
  {
    "address": "360281",
    "value": "乐平市"
  },
  {
    "address": "360302",
    "value": "安源区"
  },
  {
    "address": "360313",
    "value": "湘东区"
  },
  {
    "address": "360321",
    "value": "莲花县"
  },
  {
    "address": "360322",
    "value": "上栗县"
  },
  {
    "address": "360323",
    "value": "芦溪县"
  },
  {
    "address": "360402",
    "value": "庐山区"
  },
  {
    "address": "360403",
    "value": "浔阳区"
  },
  {
    "address": "360421",
    "value": "九江县"
  },
  {
    "address": "360423",
    "value": "武宁县"
  },
  {
    "address": "360424",
    "value": "修水县"
  },
  {
    "address": "360425",
    "value": "永修县"
  },
  {
    "address": "360426",
    "value": "德安县"
  },
  {
    "address": "360427",
    "value": "星子县"
  },
  {
    "address": "360428",
    "value": "都昌县"
  },
  {
    "address": "360429",
    "value": "湖口县"
  },
  {
    "address": "360430",
    "value": "彭泽县"
  },
  {
    "address": "360481",
    "value": "瑞昌市"
  },
  {
    "address": "360482",
    "value": "共青城市"
  },
  {
    "address": "360502",
    "value": "渝水区"
  },
  {
    "address": "360521",
    "value": "分宜县"
  },
  {
    "address": "360602",
    "value": "月湖区"
  },
  {
    "address": "360622",
    "value": "余江县"
  },
  {
    "address": "360681",
    "value": "贵溪市"
  },
  {
    "address": "360702",
    "value": "章贡区"
  },
  {
    "address": "360721",
    "value": "赣县"
  },
  {
    "address": "360722",
    "value": "信丰县"
  },
  {
    "address": "360723",
    "value": "大余县"
  },
  {
    "address": "360724",
    "value": "上犹县"
  },
  {
    "address": "360725",
    "value": "崇义县"
  },
  {
    "address": "360726",
    "value": "安远县"
  },
  {
    "address": "360727",
    "value": "龙南县"
  },
  {
    "address": "360728",
    "value": "定南县"
  },
  {
    "address": "360729",
    "value": "全南县"
  },
  {
    "address": "360730",
    "value": "宁都县"
  },
  {
    "address": "360731",
    "value": "于都县"
  },
  {
    "address": "360732",
    "value": "兴国县"
  },
  {
    "address": "360733",
    "value": "会昌县"
  },
  {
    "address": "360734",
    "value": "寻乌县"
  },
  {
    "address": "360735",
    "value": "石城县"
  },
  {
    "address": "360781",
    "value": "瑞金市"
  },
  {
    "address": "360782",
    "value": "南康市"
  },
  {
    "address": "360802",
    "value": "吉州区"
  },
  {
    "address": "360803",
    "value": "青原区"
  },
  {
    "address": "360821",
    "value": "吉安县"
  },
  {
    "address": "360822",
    "value": "吉水县"
  },
  {
    "address": "360823",
    "value": "峡江县"
  },
  {
    "address": "360824",
    "value": "新干县"
  },
  {
    "address": "360825",
    "value": "永丰县"
  },
  {
    "address": "360826",
    "value": "泰和县"
  },
  {
    "address": "360827",
    "value": "遂川县"
  },
  {
    "address": "360828",
    "value": "万安县"
  },
  {
    "address": "360829",
    "value": "安福县"
  },
  {
    "address": "360830",
    "value": "永新县"
  },
  {
    "address": "360881",
    "value": "井冈山市"
  },
  {
    "address": "360902",
    "value": "袁州区"
  },
  {
    "address": "360921",
    "value": "奉新县"
  },
  {
    "address": "360922",
    "value": "万载县"
  },
  {
    "address": "360923",
    "value": "上高县"
  },
  {
    "address": "360924",
    "value": "宜丰县"
  },
  {
    "address": "360925",
    "value": "靖安县"
  },
  {
    "address": "360926",
    "value": "铜鼓县"
  },
  {
    "address": "360981",
    "value": "丰城市"
  },
  {
    "address": "360982",
    "value": "樟树市"
  },
  {
    "address": "360983",
    "value": "高安市"
  },
  {
    "address": "361002",
    "value": "临川区"
  },
  {
    "address": "361021",
    "value": "南城县"
  },
  {
    "address": "361022",
    "value": "黎川县"
  },
  {
    "address": "361023",
    "value": "南丰县"
  },
  {
    "address": "361024",
    "value": "崇仁县"
  },
  {
    "address": "361025",
    "value": "乐安县"
  },
  {
    "address": "361026",
    "value": "宜黄县"
  },
  {
    "address": "361027",
    "value": "金溪县"
  },
  {
    "address": "361028",
    "value": "资溪县"
  },
  {
    "address": "361029",
    "value": "东乡县"
  },
  {
    "address": "361030",
    "value": "广昌县"
  },
  {
    "address": "361102",
    "value": "信州区"
  },
  {
    "address": "361121",
    "value": "上饶县"
  },
  {
    "address": "361122",
    "value": "广丰县"
  },
  {
    "address": "361123",
    "value": "玉山县"
  },
  {
    "address": "361124",
    "value": "铅山县"
  },
  {
    "address": "361125",
    "value": "横峰县"
  },
  {
    "address": "361126",
    "value": "弋阳县"
  },
  {
    "address": "361127",
    "value": "余干县"
  },
  {
    "address": "361128",
    "value": "鄱阳县"
  },
  {
    "address": "361129",
    "value": "万年县"
  },
  {
    "address": "361130",
    "value": "婺源县"
  },
  {
    "address": "361181",
    "value": "德兴市"
  },
  {
    "address": "370102",
    "value": "历下区"
  },
  {
    "address": "370103",
    "value": "市中区"
  },
  {
    "address": "370104",
    "value": "槐荫区"
  },
  {
    "address": "370105",
    "value": "天桥区"
  },
  {
    "address": "370112",
    "value": "历城区"
  },
  {
    "address": "370113",
    "value": "长清区"
  },
  {
    "address": "370124",
    "value": "平阴县"
  },
  {
    "address": "370125",
    "value": "济阳县"
  },
  {
    "address": "370126",
    "value": "商河县"
  },
  {
    "address": "370181",
    "value": "章丘市"
  },
  {
    "address": "370202",
    "value": "市南区"
  },
  {
    "address": "370203",
    "value": "市北区"
  },
  {
    "address": "370205",
    "value": "四方区"
  },
  {
    "address": "370211",
    "value": "黄岛区"
  },
  {
    "address": "370212",
    "value": "崂山区"
  },
  {
    "address": "370213",
    "value": "李沧区"
  },
  {
    "address": "370214",
    "value": "城阳区"
  },
  {
    "address": "370281",
    "value": "胶州市"
  },
  {
    "address": "370282",
    "value": "即墨市"
  },
  {
    "address": "370283",
    "value": "平度市"
  },
  {
    "address": "370284",
    "value": "胶南市"
  },
  {
    "address": "370285",
    "value": "莱西市"
  },
  {
    "address": "370302",
    "value": "淄川区"
  },
  {
    "address": "370303",
    "value": "张店区"
  },
  {
    "address": "370304",
    "value": "博山区"
  },
  {
    "address": "370305",
    "value": "临淄区"
  },
  {
    "address": "370306",
    "value": "周村区"
  },
  {
    "address": "370321",
    "value": "桓台县"
  },
  {
    "address": "370322",
    "value": "高青县"
  },
  {
    "address": "370323",
    "value": "沂源县"
  },
  {
    "address": "370402",
    "value": "市中区"
  },
  {
    "address": "370403",
    "value": "薛城区"
  },
  {
    "address": "370404",
    "value": "峄城区"
  },
  {
    "address": "370405",
    "value": "台儿庄区"
  },
  {
    "address": "370406",
    "value": "山亭区"
  },
  {
    "address": "370481",
    "value": "滕州市"
  },
  {
    "address": "370502",
    "value": "东营区"
  },
  {
    "address": "370503",
    "value": "河口区"
  },
  {
    "address": "370521",
    "value": "垦利县"
  },
  {
    "address": "370522",
    "value": "利津县"
  },
  {
    "address": "370523",
    "value": "广饶县"
  },
  {
    "address": "370602",
    "value": "芝罘区"
  },
  {
    "address": "370611",
    "value": "福山区"
  },
  {
    "address": "370612",
    "value": "牟平区"
  },
  {
    "address": "370613",
    "value": "莱山区"
  },
  {
    "address": "370634",
    "value": "长岛县"
  },
  {
    "address": "370681",
    "value": "龙口市"
  },
  {
    "address": "370682",
    "value": "莱阳市"
  },
  {
    "address": "370683",
    "value": "莱州市"
  },
  {
    "address": "370684",
    "value": "蓬莱市"
  },
  {
    "address": "370685",
    "value": "招远市"
  },
  {
    "address": "370686",
    "value": "栖霞市"
  },
  {
    "address": "370687",
    "value": "海阳市"
  },
  {
    "address": "370702",
    "value": "潍城区"
  },
  {
    "address": "370703",
    "value": "寒亭区"
  },
  {
    "address": "370704",
    "value": "坊子区"
  },
  {
    "address": "370705",
    "value": "奎文区"
  },
  {
    "address": "370724",
    "value": "临朐县"
  },
  {
    "address": "370725",
    "value": "昌乐县"
  },
  {
    "address": "370781",
    "value": "青州市"
  },
  {
    "address": "370782",
    "value": "诸城市"
  },
  {
    "address": "370783",
    "value": "寿光市"
  },
  {
    "address": "370784",
    "value": "安丘市"
  },
  {
    "address": "370785",
    "value": "高密市"
  },
  {
    "address": "370786",
    "value": "昌邑市"
  },
  {
    "address": "370802",
    "value": "市中区"
  },
  {
    "address": "370811",
    "value": "任城区"
  },
  {
    "address": "370826",
    "value": "微山县"
  },
  {
    "address": "370827",
    "value": "鱼台县"
  },
  {
    "address": "370828",
    "value": "金乡县"
  },
  {
    "address": "370829",
    "value": "嘉祥县"
  },
  {
    "address": "370830",
    "value": "汶上县"
  },
  {
    "address": "370831",
    "value": "泗水县"
  },
  {
    "address": "370832",
    "value": "梁山县"
  },
  {
    "address": "370881",
    "value": "曲阜市"
  },
  {
    "address": "370882",
    "value": "兖州市"
  },
  {
    "address": "370883",
    "value": "邹城市"
  },
  {
    "address": "370902",
    "value": "泰山区"
  },
  {
    "address": "370911",
    "value": "岱岳区"
  },
  {
    "address": "370921",
    "value": "宁阳县"
  },
  {
    "address": "370923",
    "value": "东平县"
  },
  {
    "address": "370982",
    "value": "新泰市"
  },
  {
    "address": "370983",
    "value": "肥城市"
  },
  {
    "address": "371002",
    "value": "环翠区"
  },
  {
    "address": "371081",
    "value": "文登市"
  },
  {
    "address": "371082",
    "value": "荣成市"
  },
  {
    "address": "371083",
    "value": "乳山市"
  },
  {
    "address": "371102",
    "value": "东港区"
  },
  {
    "address": "371103",
    "value": "岚山区"
  },
  {
    "address": "371121",
    "value": "五莲县"
  },
  {
    "address": "371122",
    "value": "莒县"
  },
  {
    "address": "371202",
    "value": "莱城区"
  },
  {
    "address": "371203",
    "value": "钢城区"
  },
  {
    "address": "371302",
    "value": "兰山区"
  },
  {
    "address": "371311",
    "value": "罗庄区"
  },
  {
    "address": "371312",
    "value": "河东区"
  },
  {
    "address": "371321",
    "value": "沂南县"
  },
  {
    "address": "371322",
    "value": "郯城县"
  },
  {
    "address": "371323",
    "value": "沂水县"
  },
  {
    "address": "371324",
    "value": "苍山县"
  },
  {
    "address": "371325",
    "value": "费县"
  },
  {
    "address": "371326",
    "value": "平邑县"
  },
  {
    "address": "371327",
    "value": "莒南县"
  },
  {
    "address": "371328",
    "value": "蒙阴县"
  },
  {
    "address": "371329",
    "value": "临沭县"
  },
  {
    "address": "371402",
    "value": "德城区"
  },
  {
    "address": "371421",
    "value": "陵县"
  },
  {
    "address": "371422",
    "value": "宁津县"
  },
  {
    "address": "371423",
    "value": "庆云县"
  },
  {
    "address": "371424",
    "value": "临邑县"
  },
  {
    "address": "371425",
    "value": "齐河县"
  },
  {
    "address": "371426",
    "value": "平原县"
  },
  {
    "address": "371427",
    "value": "夏津县"
  },
  {
    "address": "371428",
    "value": "武城县"
  },
  {
    "address": "371481",
    "value": "乐陵市"
  },
  {
    "address": "371482",
    "value": "禹城市"
  },
  {
    "address": "371502",
    "value": "东昌府区"
  },
  {
    "address": "371521",
    "value": "阳谷县"
  },
  {
    "address": "371522",
    "value": "莘县"
  },
  {
    "address": "371523",
    "value": "茌平县"
  },
  {
    "address": "371524",
    "value": "东阿县"
  },
  {
    "address": "371525",
    "value": "冠县"
  },
  {
    "address": "371526",
    "value": "高唐县"
  },
  {
    "address": "371581",
    "value": "临清市"
  },
  {
    "address": "371602",
    "value": "滨城区"
  },
  {
    "address": "371621",
    "value": "惠民县"
  },
  {
    "address": "371622",
    "value": "阳信县"
  },
  {
    "address": "371623",
    "value": "无棣县"
  },
  {
    "address": "371624",
    "value": "沾化县"
  },
  {
    "address": "371625",
    "value": "博兴县"
  },
  {
    "address": "371626",
    "value": "邹平县"
  },
  {
    "address": "371702",
    "value": "牡丹区"
  },
  {
    "address": "371721",
    "value": "曹县"
  },
  {
    "address": "371722",
    "value": "单县"
  },
  {
    "address": "371723",
    "value": "成武县"
  },
  {
    "address": "371724",
    "value": "巨野县"
  },
  {
    "address": "371725",
    "value": "郓城县"
  },
  {
    "address": "371726",
    "value": "鄄城县"
  },
  {
    "address": "371727",
    "value": "定陶县"
  },
  {
    "address": "371728",
    "value": "东明县"
  },
  {
    "address": "410102",
    "value": "中原区"
  },
  {
    "address": "410103",
    "value": "二七区"
  },
  {
    "address": "410104",
    "value": "管城回族区"
  },
  {
    "address": "410105",
    "value": "金水区"
  },
  {
    "address": "410106",
    "value": "上街区"
  },
  {
    "address": "410108",
    "value": "惠济区"
  },
  {
    "address": "410122",
    "value": "中牟县"
  },
  {
    "address": "410181",
    "value": "巩义市"
  },
  {
    "address": "410182",
    "value": "荥阳市"
  },
  {
    "address": "410183",
    "value": "新密市"
  },
  {
    "address": "410184",
    "value": "新郑市"
  },
  {
    "address": "410185",
    "value": "登封市"
  },
  {
    "address": "410202",
    "value": "龙亭区"
  },
  {
    "address": "410203",
    "value": "顺河回族区"
  },
  {
    "address": "410204",
    "value": "鼓楼区"
  },
  {
    "address": "410205",
    "value": "禹王台区"
  },
  {
    "address": "410211",
    "value": "金明区"
  },
  {
    "address": "410221",
    "value": "杞县"
  },
  {
    "address": "410222",
    "value": "通许县"
  },
  {
    "address": "410223",
    "value": "尉氏县"
  },
  {
    "address": "410224",
    "value": "开封县"
  },
  {
    "address": "410225",
    "value": "兰考县"
  },
  {
    "address": "410302",
    "value": "老城区"
  },
  {
    "address": "410303",
    "value": "西工区"
  },
  {
    "address": "410304",
    "value": "瀍河回族区"
  },
  {
    "address": "410305",
    "value": "涧西区"
  },
  {
    "address": "410306",
    "value": "吉利区"
  },
  {
    "address": "410311",
    "value": "洛龙区"
  },
  {
    "address": "410322",
    "value": "孟津县"
  },
  {
    "address": "410323",
    "value": "新安县"
  },
  {
    "address": "410324",
    "value": "栾川县"
  },
  {
    "address": "410325",
    "value": "嵩县"
  },
  {
    "address": "410326",
    "value": "汝阳县"
  },
  {
    "address": "410327",
    "value": "宜阳县"
  },
  {
    "address": "410328",
    "value": "洛宁县"
  },
  {
    "address": "410329",
    "value": "伊川县"
  },
  {
    "address": "410381",
    "value": "偃师市"
  },
  {
    "address": "410402",
    "value": "新华区"
  },
  {
    "address": "410403",
    "value": "卫东区"
  },
  {
    "address": "410404",
    "value": "石龙区"
  },
  {
    "address": "410411",
    "value": "湛河区"
  },
  {
    "address": "410421",
    "value": "宝丰县"
  },
  {
    "address": "410422",
    "value": "叶县"
  },
  {
    "address": "410423",
    "value": "鲁山县"
  },
  {
    "address": "410425",
    "value": "郏县"
  },
  {
    "address": "410481",
    "value": "舞钢市"
  },
  {
    "address": "410482",
    "value": "汝州市"
  },
  {
    "address": "410502",
    "value": "文峰区"
  },
  {
    "address": "410503",
    "value": "北关区"
  },
  {
    "address": "410505",
    "value": "殷都区"
  },
  {
    "address": "410506",
    "value": "龙安区"
  },
  {
    "address": "410522",
    "value": "安阳县"
  },
  {
    "address": "410523",
    "value": "汤阴县"
  },
  {
    "address": "410526",
    "value": "滑县"
  },
  {
    "address": "410527",
    "value": "内黄县"
  },
  {
    "address": "410581",
    "value": "林州市"
  },
  {
    "address": "410602",
    "value": "鹤山区"
  },
  {
    "address": "410603",
    "value": "山城区"
  },
  {
    "address": "410611",
    "value": "淇滨区"
  },
  {
    "address": "410621",
    "value": "浚县"
  },
  {
    "address": "410622",
    "value": "淇县"
  },
  {
    "address": "410702",
    "value": "红旗区"
  },
  {
    "address": "410703",
    "value": "卫滨区"
  },
  {
    "address": "410704",
    "value": "凤泉区"
  },
  {
    "address": "410711",
    "value": "牧野区"
  },
  {
    "address": "410721",
    "value": "新乡县"
  },
  {
    "address": "410724",
    "value": "获嘉县"
  },
  {
    "address": "410725",
    "value": "原阳县"
  },
  {
    "address": "410726",
    "value": "延津县"
  },
  {
    "address": "410727",
    "value": "封丘县"
  },
  {
    "address": "410728",
    "value": "长垣县"
  },
  {
    "address": "410781",
    "value": "卫辉市"
  },
  {
    "address": "410782",
    "value": "辉县市"
  },
  {
    "address": "410802",
    "value": "解放区"
  },
  {
    "address": "410803",
    "value": "中站区"
  },
  {
    "address": "410804",
    "value": "马村区"
  },
  {
    "address": "410811",
    "value": "山阳区"
  },
  {
    "address": "410821",
    "value": "修武县"
  },
  {
    "address": "410822",
    "value": "博爱县"
  },
  {
    "address": "410823",
    "value": "武陟县"
  },
  {
    "address": "410825",
    "value": "温县"
  },
  {
    "address": "410882",
    "value": "沁阳市"
  },
  {
    "address": "410883",
    "value": "孟州市"
  },
  {
    "address": "410902",
    "value": "华龙区"
  },
  {
    "address": "410922",
    "value": "清丰县"
  },
  {
    "address": "410923",
    "value": "南乐县"
  },
  {
    "address": "410926",
    "value": "范县"
  },
  {
    "address": "410927",
    "value": "台前县"
  },
  {
    "address": "410928",
    "value": "濮阳县"
  },
  {
    "address": "411002",
    "value": "魏都区"
  },
  {
    "address": "411023",
    "value": "许昌县"
  },
  {
    "address": "411024",
    "value": "鄢陵县"
  },
  {
    "address": "411025",
    "value": "襄城县"
  },
  {
    "address": "411081",
    "value": "禹州市"
  },
  {
    "address": "411082",
    "value": "长葛市"
  },
  {
    "address": "411102",
    "value": "源汇区"
  },
  {
    "address": "411103",
    "value": "郾城区"
  },
  {
    "address": "411104",
    "value": "召陵区"
  },
  {
    "address": "411121",
    "value": "舞阳县"
  },
  {
    "address": "411122",
    "value": "临颍县"
  },
  {
    "address": "411202",
    "value": "湖滨区"
  },
  {
    "address": "411221",
    "value": "渑池县"
  },
  {
    "address": "411222",
    "value": "陕县"
  },
  {
    "address": "411224",
    "value": "卢氏县"
  },
  {
    "address": "411281",
    "value": "义马市"
  },
  {
    "address": "411282",
    "value": "灵宝市"
  },
  {
    "address": "411302",
    "value": "宛城区"
  },
  {
    "address": "411303",
    "value": "卧龙区"
  },
  {
    "address": "411321",
    "value": "南召县"
  },
  {
    "address": "411322",
    "value": "方城县"
  },
  {
    "address": "411323",
    "value": "西峡县"
  },
  {
    "address": "411324",
    "value": "镇平县"
  },
  {
    "address": "411325",
    "value": "内乡县"
  },
  {
    "address": "411326",
    "value": "淅川县"
  },
  {
    "address": "411327",
    "value": "社旗县"
  },
  {
    "address": "411328",
    "value": "唐河县"
  },
  {
    "address": "411329",
    "value": "新野县"
  },
  {
    "address": "411330",
    "value": "桐柏县"
  },
  {
    "address": "411381",
    "value": "邓州市"
  },
  {
    "address": "411402",
    "value": "梁园区"
  },
  {
    "address": "411403",
    "value": "睢阳区"
  },
  {
    "address": "411421",
    "value": "民权县"
  },
  {
    "address": "411422",
    "value": "睢县"
  },
  {
    "address": "411423",
    "value": "宁陵县"
  },
  {
    "address": "411424",
    "value": "柘城县"
  },
  {
    "address": "411425",
    "value": "虞城县"
  },
  {
    "address": "411426",
    "value": "夏邑县"
  },
  {
    "address": "411481",
    "value": "永城市"
  },
  {
    "address": "411502",
    "value": "浉河区"
  },
  {
    "address": "411503",
    "value": "平桥区"
  },
  {
    "address": "411521",
    "value": "罗山县"
  },
  {
    "address": "411522",
    "value": "光山县"
  },
  {
    "address": "411523",
    "value": "新县"
  },
  {
    "address": "411524",
    "value": "商城县"
  },
  {
    "address": "411525",
    "value": "固始县"
  },
  {
    "address": "411526",
    "value": "潢川县"
  },
  {
    "address": "411527",
    "value": "淮滨县"
  },
  {
    "address": "411528",
    "value": "息县"
  },
  {
    "address": "411602",
    "value": "川汇区"
  },
  {
    "address": "411621",
    "value": "扶沟县"
  },
  {
    "address": "411622",
    "value": "西华县"
  },
  {
    "address": "411623",
    "value": "商水县"
  },
  {
    "address": "411624",
    "value": "沈丘县"
  },
  {
    "address": "411625",
    "value": "郸城县"
  },
  {
    "address": "411626",
    "value": "淮阳县"
  },
  {
    "address": "411627",
    "value": "太康县"
  },
  {
    "address": "411628",
    "value": "鹿邑县"
  },
  {
    "address": "411681",
    "value": "项城市"
  },
  {
    "address": "411702",
    "value": "驿城区"
  },
  {
    "address": "411721",
    "value": "西平县"
  },
  {
    "address": "411722",
    "value": "上蔡县"
  },
  {
    "address": "411723",
    "value": "平舆县"
  },
  {
    "address": "411724",
    "value": "正阳县"
  },
  {
    "address": "411725",
    "value": "确山县"
  },
  {
    "address": "411726",
    "value": "泌阳县"
  },
  {
    "address": "411727",
    "value": "汝南县"
  },
  {
    "address": "411728",
    "value": "遂平县"
  },
  {
    "address": "411729",
    "value": "新蔡县"
  },
  {
    "address": "419001",
    "value": "济源市"
  },
  {
    "address": "420102",
    "value": "江岸区"
  },
  {
    "address": "420103",
    "value": "江汉区"
  },
  {
    "address": "420104",
    "value": "硚口区"
  },
  {
    "address": "420105",
    "value": "汉阳区"
  },
  {
    "address": "420106",
    "value": "武昌区"
  },
  {
    "address": "420107",
    "value": "青山区"
  },
  {
    "address": "420111",
    "value": "洪山区"
  },
  {
    "address": "420112",
    "value": "东西湖区"
  },
  {
    "address": "420113",
    "value": "汉南区"
  },
  {
    "address": "420114",
    "value": "蔡甸区"
  },
  {
    "address": "420115",
    "value": "江夏区"
  },
  {
    "address": "420116",
    "value": "黄陂区"
  },
  {
    "address": "420117",
    "value": "新洲区"
  },
  {
    "address": "420202",
    "value": "黄石港区"
  },
  {
    "address": "420203",
    "value": "西塞山区"
  },
  {
    "address": "420204",
    "value": "下陆区"
  },
  {
    "address": "420205",
    "value": "铁山区"
  },
  {
    "address": "420222",
    "value": "阳新县"
  },
  {
    "address": "420281",
    "value": "大冶市"
  },
  {
    "address": "420302",
    "value": "茅箭区"
  },
  {
    "address": "420303",
    "value": "张湾区"
  },
  {
    "address": "420321",
    "value": "郧县"
  },
  {
    "address": "420322",
    "value": "郧西县"
  },
  {
    "address": "420323",
    "value": "竹山县"
  },
  {
    "address": "420324",
    "value": "竹溪县"
  },
  {
    "address": "420325",
    "value": "房县"
  },
  {
    "address": "420381",
    "value": "丹江口市"
  },
  {
    "address": "420502",
    "value": "西陵区"
  },
  {
    "address": "420503",
    "value": "伍家岗区"
  },
  {
    "address": "420504",
    "value": "点军区"
  },
  {
    "address": "420505",
    "value": "猇亭区"
  },
  {
    "address": "420506",
    "value": "夷陵区"
  },
  {
    "address": "420525",
    "value": "远安县"
  },
  {
    "address": "420526",
    "value": "兴山县"
  },
  {
    "address": "420527",
    "value": "秭归县"
  },
  {
    "address": "420528",
    "value": "长阳土家族自治县"
  },
  {
    "address": "420529",
    "value": "五峰土家族自治县"
  },
  {
    "address": "420581",
    "value": "宜都市"
  },
  {
    "address": "420582",
    "value": "当阳市"
  },
  {
    "address": "420583",
    "value": "枝江市"
  },
  {
    "address": "420602",
    "value": "襄城区"
  },
  {
    "address": "420606",
    "value": "樊城区"
  },
  {
    "address": "420607",
    "value": "襄州区"
  },
  {
    "address": "420624",
    "value": "南漳县"
  },
  {
    "address": "420625",
    "value": "谷城县"
  },
  {
    "address": "420626",
    "value": "保康县"
  },
  {
    "address": "420682",
    "value": "老河口市"
  },
  {
    "address": "420683",
    "value": "枣阳市"
  },
  {
    "address": "420684",
    "value": "宜城市"
  },
  {
    "address": "420702",
    "value": "梁子湖区"
  },
  {
    "address": "420703",
    "value": "华容区"
  },
  {
    "address": "420704",
    "value": "鄂城区"
  },
  {
    "address": "420802",
    "value": "东宝区"
  },
  {
    "address": "420804",
    "value": "掇刀区"
  },
  {
    "address": "420821",
    "value": "京山县"
  },
  {
    "address": "420822",
    "value": "沙洋县"
  },
  {
    "address": "420881",
    "value": "钟祥市"
  },
  {
    "address": "420902",
    "value": "孝南区"
  },
  {
    "address": "420921",
    "value": "孝昌县"
  },
  {
    "address": "420922",
    "value": "大悟县"
  },
  {
    "address": "420923",
    "value": "云梦县"
  },
  {
    "address": "420981",
    "value": "应城市"
  },
  {
    "address": "420982",
    "value": "安陆市"
  },
  {
    "address": "420984",
    "value": "汉川市"
  },
  {
    "address": "421002",
    "value": "沙市区"
  },
  {
    "address": "421003",
    "value": "荆州区"
  },
  {
    "address": "421022",
    "value": "公安县"
  },
  {
    "address": "421023",
    "value": "监利县"
  },
  {
    "address": "421024",
    "value": "江陵县"
  },
  {
    "address": "421081",
    "value": "石首市"
  },
  {
    "address": "421083",
    "value": "洪湖市"
  },
  {
    "address": "421087",
    "value": "松滋市"
  },
  {
    "address": "421102",
    "value": "黄州区"
  },
  {
    "address": "421121",
    "value": "团风县"
  },
  {
    "address": "421122",
    "value": "红安县"
  },
  {
    "address": "421123",
    "value": "罗田县"
  },
  {
    "address": "421124",
    "value": "英山县"
  },
  {
    "address": "421125",
    "value": "浠水县"
  },
  {
    "address": "421126",
    "value": "蕲春县"
  },
  {
    "address": "421127",
    "value": "黄梅县"
  },
  {
    "address": "421181",
    "value": "麻城市"
  },
  {
    "address": "421182",
    "value": "武穴市"
  },
  {
    "address": "421202",
    "value": "咸安区"
  },
  {
    "address": "421221",
    "value": "嘉鱼县"
  },
  {
    "address": "421222",
    "value": "通城县"
  },
  {
    "address": "421223",
    "value": "崇阳县"
  },
  {
    "address": "421224",
    "value": "通山县"
  },
  {
    "address": "421281",
    "value": "赤壁市"
  },
  {
    "address": "421303",
    "value": "曾都区"
  },
  {
    "address": "421321",
    "value": "随县"
  },
  {
    "address": "421381",
    "value": "广水市"
  },
  {
    "address": "422801",
    "value": "恩施市"
  },
  {
    "address": "422802",
    "value": "利川市"
  },
  {
    "address": "422822",
    "value": "建始县"
  },
  {
    "address": "422823",
    "value": "巴东县"
  },
  {
    "address": "422825",
    "value": "宣恩县"
  },
  {
    "address": "422826",
    "value": "咸丰县"
  },
  {
    "address": "422827",
    "value": "来凤县"
  },
  {
    "address": "422828",
    "value": "鹤峰县"
  },
  {
    "address": "429004",
    "value": "仙桃市"
  },
  {
    "address": "429005",
    "value": "潜江市"
  },
  {
    "address": "429006",
    "value": "天门市"
  },
  {
    "address": "429021",
    "value": "神农架林区"
  },
  {
    "address": "430102",
    "value": "芙蓉区"
  },
  {
    "address": "430103",
    "value": "天心区"
  },
  {
    "address": "430104",
    "value": "岳麓区"
  },
  {
    "address": "430105",
    "value": "开福区"
  },
  {
    "address": "430111",
    "value": "雨花区"
  },
  {
    "address": "430112",
    "value": "望城区"
  },
  {
    "address": "430121",
    "value": "长沙县"
  },
  {
    "address": "430124",
    "value": "宁乡县"
  },
  {
    "address": "430181",
    "value": "浏阳市"
  },
  {
    "address": "430202",
    "value": "荷塘区"
  },
  {
    "address": "430203",
    "value": "芦淞区"
  },
  {
    "address": "430204",
    "value": "石峰区"
  },
  {
    "address": "430211",
    "value": "天元区"
  },
  {
    "address": "430221",
    "value": "株洲县"
  },
  {
    "address": "430223",
    "value": "攸县"
  },
  {
    "address": "430224",
    "value": "茶陵县"
  },
  {
    "address": "430225",
    "value": "炎陵县"
  },
  {
    "address": "430281",
    "value": "醴陵市"
  },
  {
    "address": "430302",
    "value": "雨湖区"
  },
  {
    "address": "430304",
    "value": "岳塘区"
  },
  {
    "address": "430321",
    "value": "湘潭县"
  },
  {
    "address": "430381",
    "value": "湘乡市"
  },
  {
    "address": "430382",
    "value": "韶山市"
  },
  {
    "address": "430405",
    "value": "珠晖区"
  },
  {
    "address": "430406",
    "value": "雁峰区"
  },
  {
    "address": "430407",
    "value": "石鼓区"
  },
  {
    "address": "430408",
    "value": "蒸湘区"
  },
  {
    "address": "430412",
    "value": "南岳区"
  },
  {
    "address": "430421",
    "value": "衡阳县"
  },
  {
    "address": "430422",
    "value": "衡南县"
  },
  {
    "address": "430423",
    "value": "衡山县"
  },
  {
    "address": "430424",
    "value": "衡东县"
  },
  {
    "address": "430426",
    "value": "祁东县"
  },
  {
    "address": "430481",
    "value": "耒阳市"
  },
  {
    "address": "430482",
    "value": "常宁市"
  },
  {
    "address": "430502",
    "value": "双清区"
  },
  {
    "address": "430503",
    "value": "大祥区"
  },
  {
    "address": "430511",
    "value": "北塔区"
  },
  {
    "address": "430521",
    "value": "邵东县"
  },
  {
    "address": "430522",
    "value": "新邵县"
  },
  {
    "address": "430523",
    "value": "邵阳县"
  },
  {
    "address": "430524",
    "value": "隆回县"
  },
  {
    "address": "430525",
    "value": "洞口县"
  },
  {
    "address": "430527",
    "value": "绥宁县"
  },
  {
    "address": "430528",
    "value": "新宁县"
  },
  {
    "address": "430529",
    "value": "城步苗族自治县"
  },
  {
    "address": "430581",
    "value": "武冈市"
  },
  {
    "address": "430602",
    "value": "岳阳楼区"
  },
  {
    "address": "430603",
    "value": "云溪区"
  },
  {
    "address": "430611",
    "value": "君山区"
  },
  {
    "address": "430621",
    "value": "岳阳县"
  },
  {
    "address": "430623",
    "value": "华容县"
  },
  {
    "address": "430624",
    "value": "湘阴县"
  },
  {
    "address": "430626",
    "value": "平江县"
  },
  {
    "address": "430681",
    "value": "汨罗市"
  },
  {
    "address": "430682",
    "value": "临湘市"
  },
  {
    "address": "430702",
    "value": "武陵区"
  },
  {
    "address": "430703",
    "value": "鼎城区"
  },
  {
    "address": "430721",
    "value": "安乡县"
  },
  {
    "address": "430722",
    "value": "汉寿县"
  },
  {
    "address": "430723",
    "value": "澧县"
  },
  {
    "address": "430724",
    "value": "临澧县"
  },
  {
    "address": "430725",
    "value": "桃源县"
  },
  {
    "address": "430726",
    "value": "石门县"
  },
  {
    "address": "430781",
    "value": "津市市"
  },
  {
    "address": "430802",
    "value": "永定区"
  },
  {
    "address": "430811",
    "value": "武陵源区"
  },
  {
    "address": "430821",
    "value": "慈利县"
  },
  {
    "address": "430822",
    "value": "桑植县"
  },
  {
    "address": "430902",
    "value": "资阳区"
  },
  {
    "address": "430903",
    "value": "赫山区"
  },
  {
    "address": "430921",
    "value": "南县"
  },
  {
    "address": "430922",
    "value": "桃江县"
  },
  {
    "address": "430923",
    "value": "安化县"
  },
  {
    "address": "430981",
    "value": "沅江市"
  },
  {
    "address": "431002",
    "value": "北湖区"
  },
  {
    "address": "431003",
    "value": "苏仙区"
  },
  {
    "address": "431021",
    "value": "桂阳县"
  },
  {
    "address": "431022",
    "value": "宜章县"
  },
  {
    "address": "431023",
    "value": "永兴县"
  },
  {
    "address": "431024",
    "value": "嘉禾县"
  },
  {
    "address": "431025",
    "value": "临武县"
  },
  {
    "address": "431026",
    "value": "汝城县"
  },
  {
    "address": "431027",
    "value": "桂东县"
  },
  {
    "address": "431028",
    "value": "安仁县"
  },
  {
    "address": "431081",
    "value": "资兴市"
  },
  {
    "address": "431102",
    "value": "零陵区"
  },
  {
    "address": "431103",
    "value": "冷水滩区"
  },
  {
    "address": "431121",
    "value": "祁阳县"
  },
  {
    "address": "431122",
    "value": "东安县"
  },
  {
    "address": "431123",
    "value": "双牌县"
  },
  {
    "address": "431124",
    "value": "道县"
  },
  {
    "address": "431125",
    "value": "江永县"
  },
  {
    "address": "431126",
    "value": "宁远县"
  },
  {
    "address": "431127",
    "value": "蓝山县"
  },
  {
    "address": "431128",
    "value": "新田县"
  },
  {
    "address": "431129",
    "value": "江华瑶族自治县"
  },
  {
    "address": "431202",
    "value": "鹤城区"
  },
  {
    "address": "431221",
    "value": "中方县"
  },
  {
    "address": "431222",
    "value": "沅陵县"
  },
  {
    "address": "431223",
    "value": "辰溪县"
  },
  {
    "address": "431224",
    "value": "溆浦县"
  },
  {
    "address": "431225",
    "value": "会同县"
  },
  {
    "address": "431226",
    "value": "麻阳苗族自治县"
  },
  {
    "address": "431227",
    "value": "新晃侗族自治县"
  },
  {
    "address": "431228",
    "value": "芷江侗族自治县"
  },
  {
    "address": "431229",
    "value": "靖州苗族侗族自治县"
  },
  {
    "address": "431230",
    "value": "通道侗族自治县"
  },
  {
    "address": "431281",
    "value": "洪江市"
  },
  {
    "address": "431302",
    "value": "娄星区"
  },
  {
    "address": "431321",
    "value": "双峰县"
  },
  {
    "address": "431322",
    "value": "新化县"
  },
  {
    "address": "431381",
    "value": "冷水江市"
  },
  {
    "address": "431382",
    "value": "涟源市"
  },
  {
    "address": "433101",
    "value": "吉首市"
  },
  {
    "address": "433122",
    "value": "泸溪县"
  },
  {
    "address": "433123",
    "value": "凤凰县"
  },
  {
    "address": "433124",
    "value": "花垣县"
  },
  {
    "address": "433125",
    "value": "保靖县"
  },
  {
    "address": "433126",
    "value": "古丈县"
  },
  {
    "address": "433127",
    "value": "永顺县"
  },
  {
    "address": "433130",
    "value": "龙山县"
  },
  {
    "address": "440103",
    "value": "荔湾区"
  },
  {
    "address": "440104",
    "value": "越秀区"
  },
  {
    "address": "440105",
    "value": "海珠区"
  },
  {
    "address": "440106",
    "value": "天河区"
  },
  {
    "address": "440111",
    "value": "白云区"
  },
  {
    "address": "440112",
    "value": "黄埔区"
  },
  {
    "address": "440113",
    "value": "番禺区"
  },
  {
    "address": "440114",
    "value": "花都区"
  },
  {
    "address": "440115",
    "value": "南沙区"
  },
  {
    "address": "440116",
    "value": "萝岗区"
  },
  {
    "address": "440183",
    "value": "增城市"
  },
  {
    "address": "440184",
    "value": "从化市"
  },
  {
    "address": "440203",
    "value": "武江区"
  },
  {
    "address": "440204",
    "value": "浈江区"
  },
  {
    "address": "440205",
    "value": "曲江区"
  },
  {
    "address": "440222",
    "value": "始兴县"
  },
  {
    "address": "440224",
    "value": "仁化县"
  },
  {
    "address": "440229",
    "value": "翁源县"
  },
  {
    "address": "440232",
    "value": "乳源瑶族自治县"
  },
  {
    "address": "440233",
    "value": "新丰县"
  },
  {
    "address": "440281",
    "value": "乐昌市"
  },
  {
    "address": "440282",
    "value": "南雄市"
  },
  {
    "address": "440303",
    "value": "罗湖区"
  },
  {
    "address": "440304",
    "value": "福田区"
  },
  {
    "address": "440305",
    "value": "南山区"
  },
  {
    "address": "440306",
    "value": "宝安区"
  },
  {
    "address": "440307",
    "value": "龙岗区"
  },
  {
    "address": "440308",
    "value": "盐田区"
  },
  {
    "address": "440402",
    "value": "香洲区"
  },
  {
    "address": "440403",
    "value": "斗门区"
  },
  {
    "address": "440404",
    "value": "金湾区"
  },
  {
    "address": "440507",
    "value": "龙湖区"
  },
  {
    "address": "440511",
    "value": "金平区"
  },
  {
    "address": "440512",
    "value": "濠江区"
  },
  {
    "address": "440513",
    "value": "潮阳区"
  },
  {
    "address": "440514",
    "value": "潮南区"
  },
  {
    "address": "440515",
    "value": "澄海区"
  },
  {
    "address": "440523",
    "value": "南澳县"
  },
  {
    "address": "440604",
    "value": "禅城区"
  },
  {
    "address": "440605",
    "value": "南海区"
  },
  {
    "address": "440606",
    "value": "顺德区"
  },
  {
    "address": "440607",
    "value": "三水区"
  },
  {
    "address": "440608",
    "value": "高明区"
  },
  {
    "address": "440703",
    "value": "蓬江区"
  },
  {
    "address": "440704",
    "value": "江海区"
  },
  {
    "address": "440705",
    "value": "新会区"
  },
  {
    "address": "440781",
    "value": "台山市"
  },
  {
    "address": "440783",
    "value": "开平市"
  },
  {
    "address": "440784",
    "value": "鹤山市"
  },
  {
    "address": "440785",
    "value": "恩平市"
  },
  {
    "address": "440802",
    "value": "赤坎区"
  },
  {
    "address": "440803",
    "value": "霞山区"
  },
  {
    "address": "440804",
    "value": "坡头区"
  },
  {
    "address": "440811",
    "value": "麻章区"
  },
  {
    "address": "440823",
    "value": "遂溪县"
  },
  {
    "address": "440825",
    "value": "徐闻县"
  },
  {
    "address": "440881",
    "value": "廉江市"
  },
  {
    "address": "440882",
    "value": "雷州市"
  },
  {
    "address": "440883",
    "value": "吴川市"
  },
  {
    "address": "440902",
    "value": "茂南区"
  },
  {
    "address": "440903",
    "value": "茂港区"
  },
  {
    "address": "440923",
    "value": "电白县"
  },
  {
    "address": "440981",
    "value": "高州市"
  },
  {
    "address": "440982",
    "value": "化州市"
  },
  {
    "address": "440983",
    "value": "信宜市"
  },
  {
    "address": "441202",
    "value": "端州区"
  },
  {
    "address": "441203",
    "value": "鼎湖区"
  },
  {
    "address": "441223",
    "value": "广宁县"
  },
  {
    "address": "441224",
    "value": "怀集县"
  },
  {
    "address": "441225",
    "value": "封开县"
  },
  {
    "address": "441226",
    "value": "德庆县"
  },
  {
    "address": "441283",
    "value": "高要市"
  },
  {
    "address": "441284",
    "value": "四会市"
  },
  {
    "address": "441302",
    "value": "惠城区"
  },
  {
    "address": "441303",
    "value": "惠阳区"
  },
  {
    "address": "441322",
    "value": "博罗县"
  },
  {
    "address": "441323",
    "value": "惠东县"
  },
  {
    "address": "441324",
    "value": "龙门县"
  },
  {
    "address": "441402",
    "value": "梅江区"
  },
  {
    "address": "441421",
    "value": "梅县"
  },
  {
    "address": "441422",
    "value": "大埔县"
  },
  {
    "address": "441423",
    "value": "丰顺县"
  },
  {
    "address": "441424",
    "value": "五华县"
  },
  {
    "address": "441426",
    "value": "平远县"
  },
  {
    "address": "441427",
    "value": "蕉岭县"
  },
  {
    "address": "441481",
    "value": "兴宁市"
  },
  {
    "address": "441502",
    "value": "城区"
  },
  {
    "address": "441521",
    "value": "海丰县"
  },
  {
    "address": "441523",
    "value": "陆河县"
  },
  {
    "address": "441581",
    "value": "陆丰市"
  },
  {
    "address": "441602",
    "value": "源城区"
  },
  {
    "address": "441621",
    "value": "紫金县"
  },
  {
    "address": "441622",
    "value": "龙川县"
  },
  {
    "address": "441623",
    "value": "连平县"
  },
  {
    "address": "441624",
    "value": "和平县"
  },
  {
    "address": "441625",
    "value": "东源县"
  },
  {
    "address": "441702",
    "value": "江城区"
  },
  {
    "address": "441721",
    "value": "阳西县"
  },
  {
    "address": "441723",
    "value": "阳东县"
  },
  {
    "address": "441781",
    "value": "阳春市"
  },
  {
    "address": "441802",
    "value": "清城区"
  },
  {
    "address": "441821",
    "value": "佛冈县"
  },
  {
    "address": "441823",
    "value": "阳山县"
  },
  {
    "address": "441825",
    "value": "连山壮族瑶族自治县"
  },
  {
    "address": "441826",
    "value": "连南瑶族自治县"
  },
  {
    "address": "441827",
    "value": "清新县"
  },
  {
    "address": "441881",
    "value": "英德市"
  },
  {
    "address": "441882",
    "value": "连州市"
  },
  {
    "address": "445102",
    "value": "湘桥区"
  },
  {
    "address": "445121",
    "value": "潮安县"
  },
  {
    "address": "445122",
    "value": "饶平县"
  },
  {
    "address": "445202",
    "value": "榕城区"
  },
  {
    "address": "445221",
    "value": "揭东县"
  },
  {
    "address": "445222",
    "value": "揭西县"
  },
  {
    "address": "445224",
    "value": "惠来县"
  },
  {
    "address": "445281",
    "value": "普宁市"
  },
  {
    "address": "445302",
    "value": "云城区"
  },
  {
    "address": "445321",
    "value": "新兴县"
  },
  {
    "address": "445322",
    "value": "郁南县"
  },
  {
    "address": "445323",
    "value": "云安县"
  },
  {
    "address": "445381",
    "value": "罗定市"
  },
  {
    "address": "450102",
    "value": "兴宁区"
  },
  {
    "address": "450103",
    "value": "青秀区"
  },
  {
    "address": "450105",
    "value": "江南区"
  },
  {
    "address": "450107",
    "value": "西乡塘区"
  },
  {
    "address": "450108",
    "value": "良庆区"
  },
  {
    "address": "450109",
    "value": "邕宁区"
  },
  {
    "address": "450122",
    "value": "武鸣县"
  },
  {
    "address": "450123",
    "value": "隆安县"
  },
  {
    "address": "450124",
    "value": "马山县"
  },
  {
    "address": "450125",
    "value": "上林县"
  },
  {
    "address": "450126",
    "value": "宾阳县"
  },
  {
    "address": "450127",
    "value": "横县"
  },
  {
    "address": "450202",
    "value": "城中区"
  },
  {
    "address": "450203",
    "value": "鱼峰区"
  },
  {
    "address": "450204",
    "value": "柳南区"
  },
  {
    "address": "450205",
    "value": "柳北区"
  },
  {
    "address": "450221",
    "value": "柳江县"
  },
  {
    "address": "450222",
    "value": "柳城县"
  },
  {
    "address": "450223",
    "value": "鹿寨县"
  },
  {
    "address": "450224",
    "value": "融安县"
  },
  {
    "address": "450225",
    "value": "融水苗族自治县"
  },
  {
    "address": "450226",
    "value": "三江侗族自治县"
  },
  {
    "address": "450302",
    "value": "秀峰区"
  },
  {
    "address": "450303",
    "value": "叠彩区"
  },
  {
    "address": "450304",
    "value": "象山区"
  },
  {
    "address": "450305",
    "value": "七星区"
  },
  {
    "address": "450311",
    "value": "雁山区"
  },
  {
    "address": "450321",
    "value": "阳朔县"
  },
  {
    "address": "450322",
    "value": "临桂县"
  },
  {
    "address": "450323",
    "value": "灵川县"
  },
  {
    "address": "450324",
    "value": "全州县"
  },
  {
    "address": "450325",
    "value": "兴安县"
  },
  {
    "address": "450326",
    "value": "永福县"
  },
  {
    "address": "450327",
    "value": "灌阳县"
  },
  {
    "address": "450328",
    "value": "龙胜各族自治县"
  },
  {
    "address": "450329",
    "value": "资源县"
  },
  {
    "address": "450330",
    "value": "平乐县"
  },
  {
    "address": "450331",
    "value": "荔蒲县"
  },
  {
    "address": "450332",
    "value": "恭城瑶族自治县"
  },
  {
    "address": "450403",
    "value": "万秀区"
  },
  {
    "address": "450404",
    "value": "蝶山区"
  },
  {
    "address": "450405",
    "value": "长洲区"
  },
  {
    "address": "450421",
    "value": "苍梧县"
  },
  {
    "address": "450422",
    "value": "藤县"
  },
  {
    "address": "450423",
    "value": "蒙山县"
  },
  {
    "address": "450481",
    "value": "岑溪市"
  },
  {
    "address": "450502",
    "value": "海城区"
  },
  {
    "address": "450503",
    "value": "银海区"
  },
  {
    "address": "450512",
    "value": "铁山港区"
  },
  {
    "address": "450521",
    "value": "合浦县"
  },
  {
    "address": "450602",
    "value": "港口区"
  },
  {
    "address": "450603",
    "value": "防城区"
  },
  {
    "address": "450621",
    "value": "上思县"
  },
  {
    "address": "450681",
    "value": "东兴市"
  },
  {
    "address": "450702",
    "value": "钦南区"
  },
  {
    "address": "450703",
    "value": "钦北区"
  },
  {
    "address": "450721",
    "value": "灵山县"
  },
  {
    "address": "450722",
    "value": "浦北县"
  },
  {
    "address": "450802",
    "value": "港北区"
  },
  {
    "address": "450803",
    "value": "港南区"
  },
  {
    "address": "450804",
    "value": "覃塘区"
  },
  {
    "address": "450821",
    "value": "平南县"
  },
  {
    "address": "450881",
    "value": "桂平市"
  },
  {
    "address": "450902",
    "value": "玉州区"
  },
  {
    "address": "450921",
    "value": "容县"
  },
  {
    "address": "450922",
    "value": "陆川县"
  },
  {
    "address": "450923",
    "value": "博白县"
  },
  {
    "address": "450924",
    "value": "兴业县"
  },
  {
    "address": "450981",
    "value": "北流市"
  },
  {
    "address": "451002",
    "value": "右江区"
  },
  {
    "address": "451021",
    "value": "田阳县"
  },
  {
    "address": "451022",
    "value": "田东县"
  },
  {
    "address": "451023",
    "value": "平果县"
  },
  {
    "address": "451024",
    "value": "德保县"
  },
  {
    "address": "451025",
    "value": "靖西县"
  },
  {
    "address": "451026",
    "value": "那坡县"
  },
  {
    "address": "451027",
    "value": "凌云县"
  },
  {
    "address": "451028",
    "value": "乐业县"
  },
  {
    "address": "451029",
    "value": "田林县"
  },
  {
    "address": "451030",
    "value": "西林县"
  },
  {
    "address": "451031",
    "value": "隆林各族自治县"
  },
  {
    "address": "451102",
    "value": "八步区"
  },
  {
    "address": "451121",
    "value": "昭平县"
  },
  {
    "address": "451122",
    "value": "钟山县"
  },
  {
    "address": "451123",
    "value": "富川瑶族自治县"
  },
  {
    "address": "451202",
    "value": "金城江区"
  },
  {
    "address": "451221",
    "value": "南丹县"
  },
  {
    "address": "451222",
    "value": "天峨县"
  },
  {
    "address": "451223",
    "value": "凤山县"
  },
  {
    "address": "451224",
    "value": "东兰县"
  },
  {
    "address": "451225",
    "value": "罗城仫佬族自治县"
  },
  {
    "address": "451226",
    "value": "环江毛南族自治县"
  },
  {
    "address": "451227",
    "value": "巴马瑶族自治县"
  },
  {
    "address": "451228",
    "value": "都安瑶族自治县"
  },
  {
    "address": "451229",
    "value": "大化瑶族自治县"
  },
  {
    "address": "451281",
    "value": "宜州市"
  },
  {
    "address": "451302",
    "value": "兴宾区"
  },
  {
    "address": "451321",
    "value": "忻城县"
  },
  {
    "address": "451322",
    "value": "象州县"
  },
  {
    "address": "451323",
    "value": "武宣县"
  },
  {
    "address": "451324",
    "value": "金秀瑶族自治县"
  },
  {
    "address": "451381",
    "value": "合山市"
  },
  {
    "address": "451402",
    "value": "江洲区"
  },
  {
    "address": "451421",
    "value": "扶绥县"
  },
  {
    "address": "451422",
    "value": "宁明县"
  },
  {
    "address": "451423",
    "value": "龙州县"
  },
  {
    "address": "451424",
    "value": "大新县"
  },
  {
    "address": "451425",
    "value": "天等县"
  },
  {
    "address": "451481",
    "value": "凭祥市"
  },
  {
    "address": "460105",
    "value": "秀英区"
  },
  {
    "address": "460106",
    "value": "龙华区"
  },
  {
    "address": "460107",
    "value": "琼山区"
  },
  {
    "address": "460108",
    "value": "美兰区"
  },
  {
    "address": "469001",
    "value": "五指山市"
  },
  {
    "address": "469002",
    "value": "琼海市"
  },
  {
    "address": "469003",
    "value": "儋州市"
  },
  {
    "address": "469005",
    "value": "文昌市"
  },
  {
    "address": "469006",
    "value": "万宁市"
  },
  {
    "address": "469007",
    "value": "东方市"
  },
  {
    "address": "469021",
    "value": "定安县"
  },
  {
    "address": "469022",
    "value": "屯昌县"
  },
  {
    "address": "469023",
    "value": "澄迈县"
  },
  {
    "address": "469024",
    "value": "临高县"
  },
  {
    "address": "469025",
    "value": "白沙黎族自治县"
  },
  {
    "address": "469026",
    "value": "昌江黎族自治县"
  },
  {
    "address": "469027",
    "value": "乐东黎族自治县"
  },
  {
    "address": "469028",
    "value": "陵水黎族自治县"
  },
  {
    "address": "469029",
    "value": "保亭黎族苗族自治县"
  },
  {
    "address": "469030",
    "value": "琼中黎族苗族自治县"
  },
  {
    "address": "469031",
    "value": "西沙群岛"
  },
  {
    "address": "469032",
    "value": "南沙群岛"
  },
  {
    "address": "469033",
    "value": "中沙群岛的岛礁及其海域"
  },
  {
    "address": "500101",
    "value": "万州区"
  },
  {
    "address": "500102",
    "value": "涪陵区"
  },
  {
    "address": "500103",
    "value": "渝中区"
  },
  {
    "address": "500104",
    "value": "大渡口区"
  },
  {
    "address": "500105",
    "value": "江北区"
  },
  {
    "address": "500106",
    "value": "沙坪坝区"
  },
  {
    "address": "500107",
    "value": "九龙坡区"
  },
  {
    "address": "500108",
    "value": "南岸区"
  },
  {
    "address": "500109",
    "value": "北碚区"
  },
  {
    "address": "500110",
    "value": "綦江区"
  },
  {
    "address": "500111",
    "value": "大足区"
  },
  {
    "address": "500112",
    "value": "渝北区"
  },
  {
    "address": "500113",
    "value": "巴南区"
  },
  {
    "address": "500114",
    "value": "黔江区"
  },
  {
    "address": "500115",
    "value": "长寿区"
  },
  {
    "address": "500116",
    "value": "江津区"
  },
  {
    "address": "500117",
    "value": "合川区"
  },
  {
    "address": "500118",
    "value": "永川区"
  },
  {
    "address": "500119",
    "value": "南川区"
  },
  {
    "address": "500223",
    "value": "潼南县"
  },
  {
    "address": "500224",
    "value": "铜梁县"
  },
  {
    "address": "500226",
    "value": "荣昌县"
  },
  {
    "address": "500227",
    "value": "璧山县"
  },
  {
    "address": "500228",
    "value": "梁平县"
  },
  {
    "address": "500229",
    "value": "城口县"
  },
  {
    "address": "500230",
    "value": "丰都县"
  },
  {
    "address": "500231",
    "value": "垫江县"
  },
  {
    "address": "500232",
    "value": "武隆县"
  },
  {
    "address": "500233",
    "value": "忠县"
  },
  {
    "address": "500234",
    "value": "开县"
  },
  {
    "address": "500235",
    "value": "云阳县"
  },
  {
    "address": "500236",
    "value": "奉节县"
  },
  {
    "address": "500237",
    "value": "巫山县"
  },
  {
    "address": "500238",
    "value": "巫溪县"
  },
  {
    "address": "500240",
    "value": "石柱土家族自治县"
  },
  {
    "address": "500241",
    "value": "秀山土家族苗族自治县"
  },
  {
    "address": "500242",
    "value": "酉阳土家族苗族自治县"
  },
  {
    "address": "500243",
    "value": "彭水苗族土家族自治县"
  },
  {
    "address": "510104",
    "value": "锦江区"
  },
  {
    "address": "510105",
    "value": "青羊区"
  },
  {
    "address": "510106",
    "value": "金牛区"
  },
  {
    "address": "510107",
    "value": "武侯区"
  },
  {
    "address": "510108",
    "value": "成华区"
  },
  {
    "address": "510112",
    "value": "龙泉驿区"
  },
  {
    "address": "510113",
    "value": "青白江区"
  },
  {
    "address": "510114",
    "value": "新都区"
  },
  {
    "address": "510115",
    "value": "温江区"
  },
  {
    "address": "510121",
    "value": "金堂县"
  },
  {
    "address": "510122",
    "value": "双流县"
  },
  {
    "address": "510124",
    "value": "郫县"
  },
  {
    "address": "510129",
    "value": "大邑县"
  },
  {
    "address": "510131",
    "value": "蒲江县"
  },
  {
    "address": "510132",
    "value": "新津县"
  },
  {
    "address": "510181",
    "value": "都江堰市"
  },
  {
    "address": "510182",
    "value": "彭州市"
  },
  {
    "address": "510183",
    "value": "邛崃市"
  },
  {
    "address": "510184",
    "value": "崇州市"
  },
  {
    "address": "510302",
    "value": "自流井区"
  },
  {
    "address": "510303",
    "value": "贡井区"
  },
  {
    "address": "510304",
    "value": "大安区"
  },
  {
    "address": "510311",
    "value": "沿滩区"
  },
  {
    "address": "510321",
    "value": "荣县"
  },
  {
    "address": "510322",
    "value": "富顺县"
  },
  {
    "address": "510402",
    "value": "东区"
  },
  {
    "address": "510403",
    "value": "西区"
  },
  {
    "address": "510411",
    "value": "仁和区"
  },
  {
    "address": "510421",
    "value": "米易县"
  },
  {
    "address": "510422",
    "value": "盐边县"
  },
  {
    "address": "510502",
    "value": "江阳区"
  },
  {
    "address": "510503",
    "value": "纳溪区"
  },
  {
    "address": "510504",
    "value": "龙马潭区"
  },
  {
    "address": "510521",
    "value": "泸县"
  },
  {
    "address": "510522",
    "value": "合江县"
  },
  {
    "address": "510524",
    "value": "叙永县"
  },
  {
    "address": "510525",
    "value": "古蔺县"
  },
  {
    "address": "510603",
    "value": "旌阳区"
  },
  {
    "address": "510623",
    "value": "中江县"
  },
  {
    "address": "510626",
    "value": "罗江县"
  },
  {
    "address": "510681",
    "value": "广汉市"
  },
  {
    "address": "510682",
    "value": "什邡市"
  },
  {
    "address": "510683",
    "value": "绵竹市"
  },
  {
    "address": "510703",
    "value": "涪城区"
  },
  {
    "address": "510704",
    "value": "游仙区"
  },
  {
    "address": "510722",
    "value": "三台县"
  },
  {
    "address": "510723",
    "value": "盐亭县"
  },
  {
    "address": "510724",
    "value": "安县"
  },
  {
    "address": "510725",
    "value": "梓潼县"
  },
  {
    "address": "510726",
    "value": "北川羌族自治县"
  },
  {
    "address": "510727",
    "value": "平武县"
  },
  {
    "address": "510781",
    "value": "江油市"
  },
  {
    "address": "510802",
    "value": "利州区"
  },
  {
    "address": "510811",
    "value": "元坝区"
  },
  {
    "address": "510812",
    "value": "朝天区"
  },
  {
    "address": "510821",
    "value": "旺苍县"
  },
  {
    "address": "510822",
    "value": "青川县"
  },
  {
    "address": "510823",
    "value": "剑阁县"
  },
  {
    "address": "510824",
    "value": "苍溪县"
  },
  {
    "address": "510903",
    "value": "船山区"
  },
  {
    "address": "510904",
    "value": "安居区"
  },
  {
    "address": "510921",
    "value": "蓬溪县"
  },
  {
    "address": "510922",
    "value": "射洪县"
  },
  {
    "address": "510923",
    "value": "大英县"
  },
  {
    "address": "511002",
    "value": "市中区"
  },
  {
    "address": "511011",
    "value": "东兴区"
  },
  {
    "address": "511024",
    "value": "威远县"
  },
  {
    "address": "511025",
    "value": "资中县"
  },
  {
    "address": "511028",
    "value": "隆昌县"
  },
  {
    "address": "511102",
    "value": "市中区"
  },
  {
    "address": "511111",
    "value": "沙湾区"
  },
  {
    "address": "511112",
    "value": "五通桥区"
  },
  {
    "address": "511113",
    "value": "金口河区"
  },
  {
    "address": "511123",
    "value": "犍为县"
  },
  {
    "address": "511124",
    "value": "井研县"
  },
  {
    "address": "511126",
    "value": "夹江县"
  },
  {
    "address": "511129",
    "value": "沐川县"
  },
  {
    "address": "511132",
    "value": "峨边彝族自治县"
  },
  {
    "address": "511133",
    "value": "马边彝族自治县"
  },
  {
    "address": "511181",
    "value": "峨眉山市"
  },
  {
    "address": "511302",
    "value": "顺庆区"
  },
  {
    "address": "511303",
    "value": "高坪区"
  },
  {
    "address": "511304",
    "value": "嘉陵区"
  },
  {
    "address": "511321",
    "value": "南部县"
  },
  {
    "address": "511322",
    "value": "营山县"
  },
  {
    "address": "511323",
    "value": "蓬安县"
  },
  {
    "address": "511324",
    "value": "仪陇县"
  },
  {
    "address": "511325",
    "value": "西充县"
  },
  {
    "address": "511381",
    "value": "阆中市"
  },
  {
    "address": "511402",
    "value": "东坡区"
  },
  {
    "address": "511421",
    "value": "仁寿县"
  },
  {
    "address": "511422",
    "value": "彭山县"
  },
  {
    "address": "511423",
    "value": "洪雅县"
  },
  {
    "address": "511424",
    "value": "丹棱县"
  },
  {
    "address": "511425",
    "value": "青神县"
  },
  {
    "address": "511502",
    "value": "翠屏区"
  },
  {
    "address": "511503",
    "value": "南溪区"
  },
  {
    "address": "511521",
    "value": "宜宾县"
  },
  {
    "address": "511523",
    "value": "江安县"
  },
  {
    "address": "511524",
    "value": "长宁县"
  },
  {
    "address": "511525",
    "value": "高县"
  },
  {
    "address": "511526",
    "value": "珙县"
  },
  {
    "address": "511527",
    "value": "筠连县"
  },
  {
    "address": "511528",
    "value": "兴文县"
  },
  {
    "address": "511529",
    "value": "屏山县"
  },
  {
    "address": "511602",
    "value": "广安区"
  },
  {
    "address": "511621",
    "value": "岳池县"
  },
  {
    "address": "511622",
    "value": "武胜县"
  },
  {
    "address": "511623",
    "value": "邻水县"
  },
  {
    "address": "511681",
    "value": "华蓥市"
  },
  {
    "address": "511702",
    "value": "通川区"
  },
  {
    "address": "511721",
    "value": "达县"
  },
  {
    "address": "511722",
    "value": "宣汉县"
  },
  {
    "address": "511723",
    "value": "开江县"
  },
  {
    "address": "511724",
    "value": "大竹县"
  },
  {
    "address": "511725",
    "value": "渠县"
  },
  {
    "address": "511781",
    "value": "万源市"
  },
  {
    "address": "511802",
    "value": "雨城区"
  },
  {
    "address": "511821",
    "value": "名山县"
  },
  {
    "address": "511822",
    "value": "荥经县"
  },
  {
    "address": "511823",
    "value": "汉源县"
  },
  {
    "address": "511824",
    "value": "石棉县"
  },
  {
    "address": "511825",
    "value": "天全县"
  },
  {
    "address": "511826",
    "value": "芦山县"
  },
  {
    "address": "511827",
    "value": "宝兴县"
  },
  {
    "address": "511902",
    "value": "巴州区"
  },
  {
    "address": "511921",
    "value": "通江县"
  },
  {
    "address": "511922",
    "value": "南江县"
  },
  {
    "address": "511923",
    "value": "平昌县"
  },
  {
    "address": "512002",
    "value": "雁江区"
  },
  {
    "address": "512021",
    "value": "安岳县"
  },
  {
    "address": "512022",
    "value": "乐至县"
  },
  {
    "address": "512081",
    "value": "简阳市"
  },
  {
    "address": "513221",
    "value": "汶川县"
  },
  {
    "address": "513222",
    "value": "理县"
  },
  {
    "address": "513223",
    "value": "茂县"
  },
  {
    "address": "513224",
    "value": "松潘县"
  },
  {
    "address": "513225",
    "value": "九寨沟县"
  },
  {
    "address": "513226",
    "value": "金川县"
  },
  {
    "address": "513227",
    "value": "小金县"
  },
  {
    "address": "513228",
    "value": "黑水县"
  },
  {
    "address": "513229",
    "value": "马尔康县"
  },
  {
    "address": "513230",
    "value": "壤塘县"
  },
  {
    "address": "513231",
    "value": "阿坝县"
  },
  {
    "address": "513232",
    "value": "若尔盖县"
  },
  {
    "address": "513233",
    "value": "红原县"
  },
  {
    "address": "513321",
    "value": "康定县"
  },
  {
    "address": "513322",
    "value": "泸定县"
  },
  {
    "address": "513323",
    "value": "丹巴县"
  },
  {
    "address": "513324",
    "value": "九龙县"
  },
  {
    "address": "513325",
    "value": "雅江县"
  },
  {
    "address": "513326",
    "value": "道孚县"
  },
  {
    "address": "513327",
    "value": "炉霍县"
  },
  {
    "address": "513328",
    "value": "甘孜县"
  },
  {
    "address": "513329",
    "value": "新龙县"
  },
  {
    "address": "513330",
    "value": "德格县"
  },
  {
    "address": "513331",
    "value": "白玉县"
  },
  {
    "address": "513332",
    "value": "石渠县"
  },
  {
    "address": "513333",
    "value": "色达县"
  },
  {
    "address": "513334",
    "value": "理塘县"
  },
  {
    "address": "513335",
    "value": "巴塘县"
  },
  {
    "address": "513336",
    "value": "乡城县"
  },
  {
    "address": "513337",
    "value": "稻城县"
  },
  {
    "address": "513338",
    "value": "得荣县"
  },
  {
    "address": "513401",
    "value": "西昌市"
  },
  {
    "address": "513422",
    "value": "木里藏族自治县"
  },
  {
    "address": "513423",
    "value": "盐源县"
  },
  {
    "address": "513424",
    "value": "德昌县"
  },
  {
    "address": "513425",
    "value": "会理县"
  },
  {
    "address": "513426",
    "value": "会东县"
  },
  {
    "address": "513427",
    "value": "宁南县"
  },
  {
    "address": "513428",
    "value": "普格县"
  },
  {
    "address": "513429",
    "value": "布拖县"
  },
  {
    "address": "513430",
    "value": "金阳县"
  },
  {
    "address": "513431",
    "value": "昭觉县"
  },
  {
    "address": "513432",
    "value": "喜德县"
  },
  {
    "address": "513433",
    "value": "冕宁县"
  },
  {
    "address": "513434",
    "value": "越西县"
  },
  {
    "address": "513435",
    "value": "甘洛县"
  },
  {
    "address": "513436",
    "value": "美姑县"
  },
  {
    "address": "513437",
    "value": "雷波县"
  },
  {
    "address": "520102",
    "value": "南明区"
  },
  {
    "address": "520103",
    "value": "云岩区"
  },
  {
    "address": "520111",
    "value": "花溪区"
  },
  {
    "address": "520112",
    "value": "乌当区"
  },
  {
    "address": "520113",
    "value": "白云区"
  },
  {
    "address": "520114",
    "value": "小河区"
  },
  {
    "address": "520121",
    "value": "开阳县"
  },
  {
    "address": "520122",
    "value": "息烽县"
  },
  {
    "address": "520123",
    "value": "修文县"
  },
  {
    "address": "520181",
    "value": "清镇市"
  },
  {
    "address": "520201",
    "value": "钟山区"
  },
  {
    "address": "520203",
    "value": "六枝特区"
  },
  {
    "address": "520221",
    "value": "水城县"
  },
  {
    "address": "520222",
    "value": "盘县"
  },
  {
    "address": "520302",
    "value": "红花岗区"
  },
  {
    "address": "520303",
    "value": "汇川区"
  },
  {
    "address": "520321",
    "value": "遵义县"
  },
  {
    "address": "520322",
    "value": "桐梓县"
  },
  {
    "address": "520323",
    "value": "绥阳县"
  },
  {
    "address": "520324",
    "value": "正安县"
  },
  {
    "address": "520325",
    "value": "道真仡佬族苗族自治县"
  },
  {
    "address": "520326",
    "value": "务川仡佬族苗族自治县"
  },
  {
    "address": "520327",
    "value": "凤冈县"
  },
  {
    "address": "520328",
    "value": "湄潭县"
  },
  {
    "address": "520329",
    "value": "余庆县"
  },
  {
    "address": "520330",
    "value": "习水县"
  },
  {
    "address": "520381",
    "value": "赤水市"
  },
  {
    "address": "520382",
    "value": "仁怀市"
  },
  {
    "address": "520402",
    "value": "西秀区"
  },
  {
    "address": "520421",
    "value": "平坝县"
  },
  {
    "address": "520422",
    "value": "普定县"
  },
  {
    "address": "520423",
    "value": "镇宁布依族苗族自治县"
  },
  {
    "address": "520424",
    "value": "关岭布依族苗族自治县"
  },
  {
    "address": "520425",
    "value": "紫云苗族布依族自治县"
  },
  {
    "address": "520502",
    "value": "七星关区"
  },
  {
    "address": "520521",
    "value": "大方县"
  },
  {
    "address": "520522",
    "value": "黔西县"
  },
  {
    "address": "520523",
    "value": "金沙县"
  },
  {
    "address": "520524",
    "value": "织金县"
  },
  {
    "address": "520525",
    "value": "纳雍县"
  },
  {
    "address": "520526",
    "value": "威宁彝族回族苗族自治县"
  },
  {
    "address": "520527",
    "value": "赫章县"
  },
  {
    "address": "520602",
    "value": "碧江区"
  },
  {
    "address": "520603",
    "value": "万山区"
  },
  {
    "address": "520621",
    "value": "江口县"
  },
  {
    "address": "520622",
    "value": "玉屏侗族自治县"
  },
  {
    "address": "520623",
    "value": "石阡县"
  },
  {
    "address": "520624",
    "value": "思南县"
  },
  {
    "address": "520625",
    "value": "印江土家族苗族自治县"
  },
  {
    "address": "520626",
    "value": "德江县"
  },
  {
    "address": "520627",
    "value": "沿河土家族自治县"
  },
  {
    "address": "520628",
    "value": "松桃苗族自治县"
  },
  {
    "address": "522301",
    "value": "兴义市"
  },
  {
    "address": "522322",
    "value": "兴仁县"
  },
  {
    "address": "522323",
    "value": "普安县"
  },
  {
    "address": "522324",
    "value": "晴隆县"
  },
  {
    "address": "522325",
    "value": "贞丰县"
  },
  {
    "address": "522326",
    "value": "望谟县"
  },
  {
    "address": "522327",
    "value": "册亨县"
  },
  {
    "address": "522328",
    "value": "安龙县"
  },
  {
    "address": "522601",
    "value": "凯里市"
  },
  {
    "address": "522622",
    "value": "黄平县"
  },
  {
    "address": "522623",
    "value": "施秉县"
  },
  {
    "address": "522624",
    "value": "三穗县"
  },
  {
    "address": "522625",
    "value": "镇远县"
  },
  {
    "address": "522626",
    "value": "岑巩县"
  },
  {
    "address": "522627",
    "value": "天柱县"
  },
  {
    "address": "522628",
    "value": "锦屏县"
  },
  {
    "address": "522629",
    "value": "剑河县"
  },
  {
    "address": "522630",
    "value": "台江县"
  },
  {
    "address": "522631",
    "value": "黎平县"
  },
  {
    "address": "522632",
    "value": "榕江县"
  },
  {
    "address": "522633",
    "value": "从江县"
  },
  {
    "address": "522634",
    "value": "雷山县"
  },
  {
    "address": "522635",
    "value": "麻江县"
  },
  {
    "address": "522636",
    "value": "丹寨县"
  },
  {
    "address": "522701",
    "value": "都匀市"
  },
  {
    "address": "522702",
    "value": "福泉市"
  },
  {
    "address": "522722",
    "value": "荔波县"
  },
  {
    "address": "522723",
    "value": "贵定县"
  },
  {
    "address": "522725",
    "value": "瓮安县"
  },
  {
    "address": "522726",
    "value": "独山县"
  },
  {
    "address": "522727",
    "value": "平塘县"
  },
  {
    "address": "522728",
    "value": "罗甸县"
  },
  {
    "address": "522729",
    "value": "长顺县"
  },
  {
    "address": "522730",
    "value": "龙里县"
  },
  {
    "address": "522731",
    "value": "惠水县"
  },
  {
    "address": "522732",
    "value": "三都水族自治县"
  },
  {
    "address": "530102",
    "value": "五华区"
  },
  {
    "address": "530103",
    "value": "盘龙区"
  },
  {
    "address": "530111",
    "value": "官渡区"
  },
  {
    "address": "530112",
    "value": "西山区"
  },
  {
    "address": "530113",
    "value": "东川区"
  },
  {
    "address": "530114",
    "value": "呈贡区"
  },
  {
    "address": "530122",
    "value": "晋宁县"
  },
  {
    "address": "530124",
    "value": "富民县"
  },
  {
    "address": "530125",
    "value": "宜良县"
  },
  {
    "address": "530126",
    "value": "石林彝族自治县"
  },
  {
    "address": "530127",
    "value": "嵩明县"
  },
  {
    "address": "530128",
    "value": "禄劝彝族苗族自治县"
  },
  {
    "address": "530129",
    "value": "寻甸回族彝族自治县"
  },
  {
    "address": "530181",
    "value": "安宁市"
  },
  {
    "address": "530302",
    "value": "麒麟区"
  },
  {
    "address": "530321",
    "value": "马龙县"
  },
  {
    "address": "530322",
    "value": "陆良县"
  },
  {
    "address": "530323",
    "value": "师宗县"
  },
  {
    "address": "530324",
    "value": "罗平县"
  },
  {
    "address": "530325",
    "value": "富源县"
  },
  {
    "address": "530326",
    "value": "会泽县"
  },
  {
    "address": "530328",
    "value": "沾益县"
  },
  {
    "address": "530381",
    "value": "宣威市"
  },
  {
    "address": "530402",
    "value": "红塔区"
  },
  {
    "address": "530421",
    "value": "江川县"
  },
  {
    "address": "530422",
    "value": "澄江县"
  },
  {
    "address": "530423",
    "value": "通海县"
  },
  {
    "address": "530424",
    "value": "华宁县"
  },
  {
    "address": "530425",
    "value": "易门县"
  },
  {
    "address": "530426",
    "value": "峨山彝族自治县"
  },
  {
    "address": "530427",
    "value": "新平彝族傣族自治县"
  },
  {
    "address": "530428",
    "value": "元江哈尼族彝族傣族自治县"
  },
  {
    "address": "530502",
    "value": "隆阳区"
  },
  {
    "address": "530521",
    "value": "施甸县"
  },
  {
    "address": "530522",
    "value": "腾冲县"
  },
  {
    "address": "530523",
    "value": "龙陵县"
  },
  {
    "address": "530524",
    "value": "昌宁县"
  },
  {
    "address": "530602",
    "value": "昭阳区"
  },
  {
    "address": "530621",
    "value": "鲁甸县"
  },
  {
    "address": "530622",
    "value": "巧家县"
  },
  {
    "address": "530623",
    "value": "盐津县"
  },
  {
    "address": "530624",
    "value": "大关县"
  },
  {
    "address": "530625",
    "value": "永善县"
  },
  {
    "address": "530626",
    "value": "绥江县"
  },
  {
    "address": "530627",
    "value": "镇雄县"
  },
  {
    "address": "530628",
    "value": "彝良县"
  },
  {
    "address": "530629",
    "value": "威信县"
  },
  {
    "address": "530630",
    "value": "水富县"
  },
  {
    "address": "530702",
    "value": "古城区"
  },
  {
    "address": "530721",
    "value": "玉龙纳西族自治县"
  },
  {
    "address": "530722",
    "value": "永胜县"
  },
  {
    "address": "530723",
    "value": "华坪县"
  },
  {
    "address": "530724",
    "value": "宁蒗彝族自治县"
  },
  {
    "address": "530802",
    "value": "思茅区"
  },
  {
    "address": "530821",
    "value": "宁洱哈尼族彝族自治县"
  },
  {
    "address": "530822",
    "value": "墨江哈尼族自治县"
  },
  {
    "address": "530823",
    "value": "景东彝族自治县"
  },
  {
    "address": "530824",
    "value": "景谷傣族彝族自治县"
  },
  {
    "address": "530825",
    "value": "镇沅彝族哈尼族拉祜族自治县"
  },
  {
    "address": "530826",
    "value": "江城哈尼族彝族自治县"
  },
  {
    "address": "530827",
    "value": "孟连傣族拉祜族佤族自治县"
  },
  {
    "address": "530828",
    "value": "澜沧拉祜族自治县"
  },
  {
    "address": "530829",
    "value": "西盟佤族自治县"
  },
  {
    "address": "530902",
    "value": "临翔区"
  },
  {
    "address": "530921",
    "value": "凤庆县"
  },
  {
    "address": "530922",
    "value": "云县"
  },
  {
    "address": "530923",
    "value": "永德县"
  },
  {
    "address": "530924",
    "value": "镇康县"
  },
  {
    "address": "530925",
    "value": "双江拉祜族佤族布朗族傣族自治县"
  },
  {
    "address": "530926",
    "value": "耿马傣族佤族自治县"
  },
  {
    "address": "530927",
    "value": "沧源佤族自治县"
  },
  {
    "address": "532301",
    "value": "楚雄市"
  },
  {
    "address": "532322",
    "value": "双柏县"
  },
  {
    "address": "532323",
    "value": "牟定县"
  },
  {
    "address": "532324",
    "value": "南华县"
  },
  {
    "address": "532325",
    "value": "姚安县"
  },
  {
    "address": "532326",
    "value": "大姚县"
  },
  {
    "address": "532327",
    "value": "永仁县"
  },
  {
    "address": "532328",
    "value": "元谋县"
  },
  {
    "address": "532329",
    "value": "武定县"
  },
  {
    "address": "532331",
    "value": "禄丰县"
  },
  {
    "address": "532501",
    "value": "个旧市"
  },
  {
    "address": "532502",
    "value": "开远市"
  },
  {
    "address": "532503",
    "value": "蒙自市"
  },
  {
    "address": "532523",
    "value": "屏边苗族自治县"
  },
  {
    "address": "532524",
    "value": "建水县"
  },
  {
    "address": "532525",
    "value": "石屏县"
  },
  {
    "address": "532526",
    "value": "弥勒县"
  },
  {
    "address": "532527",
    "value": "泸西县"
  },
  {
    "address": "532528",
    "value": "元阳县"
  },
  {
    "address": "532529",
    "value": "红河县"
  },
  {
    "address": "532530",
    "value": "金平苗族瑶族傣族自治县"
  },
  {
    "address": "532531",
    "value": "绿春县"
  },
  {
    "address": "532532",
    "value": "河口瑶族自治县"
  },
  {
    "address": "532601",
    "value": "文山市"
  },
  {
    "address": "532622",
    "value": "砚山县"
  },
  {
    "address": "532623",
    "value": "西畴县"
  },
  {
    "address": "532624",
    "value": "麻栗坡县"
  },
  {
    "address": "532625",
    "value": "马关县"
  },
  {
    "address": "532626",
    "value": "丘北县"
  },
  {
    "address": "532627",
    "value": "广南县"
  },
  {
    "address": "532628",
    "value": "富宁县"
  },
  {
    "address": "532801",
    "value": "景洪市"
  },
  {
    "address": "532822",
    "value": "勐海县"
  },
  {
    "address": "532823",
    "value": "勐腊县"
  },
  {
    "address": "532901",
    "value": "大理市"
  },
  {
    "address": "532922",
    "value": "漾濞彝族自治县"
  },
  {
    "address": "532923",
    "value": "祥云县"
  },
  {
    "address": "532924",
    "value": "宾川县"
  },
  {
    "address": "532925",
    "value": "弥渡县"
  },
  {
    "address": "532926",
    "value": "南涧彝族自治县"
  },
  {
    "address": "532927",
    "value": "巍山彝族回族自治县"
  },
  {
    "address": "532928",
    "value": "永平县"
  },
  {
    "address": "532929",
    "value": "云龙县"
  },
  {
    "address": "532930",
    "value": "洱源县"
  },
  {
    "address": "532931",
    "value": "剑川县"
  },
  {
    "address": "532932",
    "value": "鹤庆县"
  },
  {
    "address": "533102",
    "value": "瑞丽市"
  },
  {
    "address": "533103",
    "value": "芒市"
  },
  {
    "address": "533122",
    "value": "梁河县"
  },
  {
    "address": "533123",
    "value": "盈江县"
  },
  {
    "address": "533124",
    "value": "陇川县"
  },
  {
    "address": "533321",
    "value": "泸水县"
  },
  {
    "address": "533323",
    "value": "福贡县"
  },
  {
    "address": "533324",
    "value": "贡山独龙族怒族自治县"
  },
  {
    "address": "533325",
    "value": "兰坪白族普米族自治县"
  },
  {
    "address": "533421",
    "value": "香格里拉县"
  },
  {
    "address": "533422",
    "value": "德钦县"
  },
  {
    "address": "533423",
    "value": "维西傈僳族自治县"
  },
  {
    "address": "540102",
    "value": "城关区"
  },
  {
    "address": "540121",
    "value": "林周县"
  },
  {
    "address": "540122",
    "value": "当雄县"
  },
  {
    "address": "540123",
    "value": "尼木县"
  },
  {
    "address": "540124",
    "value": "曲水县"
  },
  {
    "address": "540125",
    "value": "堆龙德庆县"
  },
  {
    "address": "540126",
    "value": "达孜县"
  },
  {
    "address": "540127",
    "value": "墨竹工卡县"
  },
  {
    "address": "542121",
    "value": "昌都县"
  },
  {
    "address": "542122",
    "value": "江达县"
  },
  {
    "address": "542123",
    "value": "贡觉县"
  },
  {
    "address": "542124",
    "value": "类乌齐县"
  },
  {
    "address": "542125",
    "value": "丁青县"
  },
  {
    "address": "542126",
    "value": "察雅县"
  },
  {
    "address": "542127",
    "value": "八宿县"
  },
  {
    "address": "542128",
    "value": "左贡县"
  },
  {
    "address": "542129",
    "value": "芒康县"
  },
  {
    "address": "542132",
    "value": "洛隆县"
  },
  {
    "address": "542133",
    "value": "边坝县"
  },
  {
    "address": "542221",
    "value": "乃东县"
  },
  {
    "address": "542222",
    "value": "扎囊县"
  },
  {
    "address": "542223",
    "value": "贡嘎县"
  },
  {
    "address": "542224",
    "value": "桑日县"
  },
  {
    "address": "542225",
    "value": "琼结县"
  },
  {
    "address": "542226",
    "value": "曲松县"
  },
  {
    "address": "542227",
    "value": "措美县"
  },
  {
    "address": "542228",
    "value": "洛扎县"
  },
  {
    "address": "542229",
    "value": "加查县"
  },
  {
    "address": "542231",
    "value": "隆子县"
  },
  {
    "address": "542232",
    "value": "错那县"
  },
  {
    "address": "542233",
    "value": "浪卡子县"
  },
  {
    "address": "542301",
    "value": "日喀则市"
  },
  {
    "address": "542322",
    "value": "南木林县"
  },
  {
    "address": "542323",
    "value": "江孜县"
  },
  {
    "address": "542324",
    "value": "定日县"
  },
  {
    "address": "542325",
    "value": "萨迦县"
  },
  {
    "address": "542326",
    "value": "拉孜县"
  },
  {
    "address": "542327",
    "value": "昂仁县"
  },
  {
    "address": "542328",
    "value": "谢通门县"
  },
  {
    "address": "542329",
    "value": "白朗县"
  },
  {
    "address": "542330",
    "value": "仁布县"
  },
  {
    "address": "542331",
    "value": "康马县"
  },
  {
    "address": "542332",
    "value": "定结县"
  },
  {
    "address": "542333",
    "value": "仲巴县"
  },
  {
    "address": "542334",
    "value": "亚东县"
  },
  {
    "address": "542335",
    "value": "吉隆县"
  },
  {
    "address": "542336",
    "value": "聂拉木县"
  },
  {
    "address": "542337",
    "value": "萨嘎县"
  },
  {
    "address": "542338",
    "value": "岗巴县"
  },
  {
    "address": "542421",
    "value": "那曲县"
  },
  {
    "address": "542422",
    "value": "嘉黎县"
  },
  {
    "address": "542423",
    "value": "比如县"
  },
  {
    "address": "542424",
    "value": "聂荣县"
  },
  {
    "address": "542425",
    "value": "安多县"
  },
  {
    "address": "542426",
    "value": "申扎县"
  },
  {
    "address": "542427",
    "value": "索县"
  },
  {
    "address": "542428",
    "value": "班戈县"
  },
  {
    "address": "542429",
    "value": "巴青县"
  },
  {
    "address": "542430",
    "value": "尼玛县"
  },
  {
    "address": "542521",
    "value": "普兰县"
  },
  {
    "address": "542522",
    "value": "札达县"
  },
  {
    "address": "542523",
    "value": "噶尔县"
  },
  {
    "address": "542524",
    "value": "日土县"
  },
  {
    "address": "542525",
    "value": "革吉县"
  },
  {
    "address": "542526",
    "value": "改则县"
  },
  {
    "address": "542527",
    "value": "措勤县"
  },
  {
    "address": "542621",
    "value": "林芝县"
  },
  {
    "address": "542622",
    "value": "工布江达县"
  },
  {
    "address": "542623",
    "value": "米林县"
  },
  {
    "address": "542624",
    "value": "墨脱县"
  },
  {
    "address": "542625",
    "value": "波密县"
  },
  {
    "address": "542626",
    "value": "察隅县"
  },
  {
    "address": "542627",
    "value": "朗县"
  },
  {
    "address": "610102",
    "value": "新城区"
  },
  {
    "address": "610103",
    "value": "碑林区"
  },
  {
    "address": "610104",
    "value": "莲湖区"
  },
  {
    "address": "610111",
    "value": "灞桥区"
  },
  {
    "address": "610112",
    "value": "未央区"
  },
  {
    "address": "610113",
    "value": "雁塔区"
  },
  {
    "address": "610114",
    "value": "阎良区"
  },
  {
    "address": "610115",
    "value": "临潼区"
  },
  {
    "address": "610116",
    "value": "长安区"
  },
  {
    "address": "610122",
    "value": "蓝田县"
  },
  {
    "address": "610124",
    "value": "周至县"
  },
  {
    "address": "610125",
    "value": "户县"
  },
  {
    "address": "610126",
    "value": "高陵县"
  },
  {
    "address": "610202",
    "value": "王益区"
  },
  {
    "address": "610203",
    "value": "印台区"
  },
  {
    "address": "610204",
    "value": "耀州区"
  },
  {
    "address": "610222",
    "value": "宜君县"
  },
  {
    "address": "610302",
    "value": "渭滨区"
  },
  {
    "address": "610303",
    "value": "金台区"
  },
  {
    "address": "610304",
    "value": "陈仓区"
  },
  {
    "address": "610322",
    "value": "凤翔县"
  },
  {
    "address": "610323",
    "value": "岐山县"
  },
  {
    "address": "610324",
    "value": "扶风县"
  },
  {
    "address": "610326",
    "value": "眉县"
  },
  {
    "address": "610327",
    "value": "陇县"
  },
  {
    "address": "610328",
    "value": "千阳县"
  },
  {
    "address": "610329",
    "value": "麟游县"
  },
  {
    "address": "610330",
    "value": "凤县"
  },
  {
    "address": "610331",
    "value": "太白县"
  },
  {
    "address": "610402",
    "value": "秦都区"
  },
  {
    "address": "610403",
    "value": "杨陵区"
  },
  {
    "address": "610404",
    "value": "渭城区"
  },
  {
    "address": "610422",
    "value": "三原县"
  },
  {
    "address": "610423",
    "value": "泾阳县"
  },
  {
    "address": "610424",
    "value": "乾县"
  },
  {
    "address": "610425",
    "value": "礼泉县"
  },
  {
    "address": "610426",
    "value": "永寿县"
  },
  {
    "address": "610427",
    "value": "彬县"
  },
  {
    "address": "610428",
    "value": "长武县"
  },
  {
    "address": "610429",
    "value": "旬邑县"
  },
  {
    "address": "610430",
    "value": "淳化县"
  },
  {
    "address": "610431",
    "value": "武功县"
  },
  {
    "address": "610481",
    "value": "兴平市"
  },
  {
    "address": "610502",
    "value": "临渭区"
  },
  {
    "address": "610521",
    "value": "华县"
  },
  {
    "address": "610522",
    "value": "潼关县"
  },
  {
    "address": "610523",
    "value": "大荔县"
  },
  {
    "address": "610524",
    "value": "合阳县"
  },
  {
    "address": "610525",
    "value": "澄城县"
  },
  {
    "address": "610526",
    "value": "蒲城县"
  },
  {
    "address": "610527",
    "value": "白水县"
  },
  {
    "address": "610528",
    "value": "富平县"
  },
  {
    "address": "610581",
    "value": "韩城市"
  },
  {
    "address": "610582",
    "value": "华阴市"
  },
  {
    "address": "610602",
    "value": "宝塔区"
  },
  {
    "address": "610621",
    "value": "延长县"
  },
  {
    "address": "610622",
    "value": "延川县"
  },
  {
    "address": "610623",
    "value": "子长县"
  },
  {
    "address": "610624",
    "value": "安塞县"
  },
  {
    "address": "610625",
    "value": "志丹县"
  },
  {
    "address": "610626",
    "value": "吴起县"
  },
  {
    "address": "610627",
    "value": "甘泉县"
  },
  {
    "address": "610628",
    "value": "富县"
  },
  {
    "address": "610629",
    "value": "洛川县"
  },
  {
    "address": "610630",
    "value": "宜川县"
  },
  {
    "address": "610631",
    "value": "黄龙县"
  },
  {
    "address": "610632",
    "value": "黄陵县"
  },
  {
    "address": "610702",
    "value": "汉台区"
  },
  {
    "address": "610721",
    "value": "南郑县"
  },
  {
    "address": "610722",
    "value": "城固县"
  },
  {
    "address": "610723",
    "value": "洋县"
  },
  {
    "address": "610724",
    "value": "西乡县"
  },
  {
    "address": "610725",
    "value": "勉县"
  },
  {
    "address": "610726",
    "value": "宁强县"
  },
  {
    "address": "610727",
    "value": "略阳县"
  },
  {
    "address": "610728",
    "value": "镇巴县"
  },
  {
    "address": "610729",
    "value": "留坝县"
  },
  {
    "address": "610730",
    "value": "佛坪县"
  },
  {
    "address": "610802",
    "value": "榆阳区"
  },
  {
    "address": "610821",
    "value": "神木县"
  },
  {
    "address": "610822",
    "value": "府谷县"
  },
  {
    "address": "610823",
    "value": "横山县"
  },
  {
    "address": "610824",
    "value": "靖边县"
  },
  {
    "address": "610825",
    "value": "定边县"
  },
  {
    "address": "610826",
    "value": "绥德县"
  },
  {
    "address": "610827",
    "value": "米脂县"
  },
  {
    "address": "610828",
    "value": "佳县"
  },
  {
    "address": "610829",
    "value": "吴堡县"
  },
  {
    "address": "610830",
    "value": "清涧县"
  },
  {
    "address": "610831",
    "value": "子洲县"
  },
  {
    "address": "610902",
    "value": "汉滨区"
  },
  {
    "address": "610921",
    "value": "汉阴县"
  },
  {
    "address": "610922",
    "value": "石泉县"
  },
  {
    "address": "610923",
    "value": "宁陕县"
  },
  {
    "address": "610924",
    "value": "紫阳县"
  },
  {
    "address": "610925",
    "value": "岚皋县"
  },
  {
    "address": "610926",
    "value": "平利县"
  },
  {
    "address": "610927",
    "value": "镇坪县"
  },
  {
    "address": "610928",
    "value": "旬阳县"
  },
  {
    "address": "610929",
    "value": "白河县"
  },
  {
    "address": "611002",
    "value": "商州区"
  },
  {
    "address": "611021",
    "value": "洛南县"
  },
  {
    "address": "611022",
    "value": "丹凤县"
  },
  {
    "address": "611023",
    "value": "商南县"
  },
  {
    "address": "611024",
    "value": "山阳县"
  },
  {
    "address": "611025",
    "value": "镇安县"
  },
  {
    "address": "611026",
    "value": "柞水县"
  },
  {
    "address": "620102",
    "value": "城关区"
  },
  {
    "address": "620103",
    "value": "七里河区"
  },
  {
    "address": "620104",
    "value": "西固区"
  },
  {
    "address": "620105",
    "value": "安宁区"
  },
  {
    "address": "620111",
    "value": "红古区"
  },
  {
    "address": "620121",
    "value": "永登县"
  },
  {
    "address": "620122",
    "value": "皋兰县"
  },
  {
    "address": "620123",
    "value": "榆中县"
  },
  {
    "address": "620302",
    "value": "金川区"
  },
  {
    "address": "620321",
    "value": "永昌县"
  },
  {
    "address": "620402",
    "value": "白银区"
  },
  {
    "address": "620403",
    "value": "平川区"
  },
  {
    "address": "620421",
    "value": "靖远县"
  },
  {
    "address": "620422",
    "value": "会宁县"
  },
  {
    "address": "620423",
    "value": "景泰县"
  },
  {
    "address": "620502",
    "value": "秦州区"
  },
  {
    "address": "620503",
    "value": "麦积区"
  },
  {
    "address": "620521",
    "value": "清水县"
  },
  {
    "address": "620522",
    "value": "秦安县"
  },
  {
    "address": "620523",
    "value": "甘谷县"
  },
  {
    "address": "620524",
    "value": "武山县"
  },
  {
    "address": "620525",
    "value": "张家川回族自治县"
  },
  {
    "address": "620602",
    "value": "凉州区"
  },
  {
    "address": "620621",
    "value": "民勤县"
  },
  {
    "address": "620622",
    "value": "古浪县"
  },
  {
    "address": "620623",
    "value": "天祝藏族自治县"
  },
  {
    "address": "620702",
    "value": "甘州区"
  },
  {
    "address": "620721",
    "value": "肃南裕固族自治县"
  },
  {
    "address": "620722",
    "value": "民乐县"
  },
  {
    "address": "620723",
    "value": "临泽县"
  },
  {
    "address": "620724",
    "value": "高台县"
  },
  {
    "address": "620725",
    "value": "山丹县"
  },
  {
    "address": "620802",
    "value": "崆峒区"
  },
  {
    "address": "620821",
    "value": "泾川县"
  },
  {
    "address": "620822",
    "value": "灵台县"
  },
  {
    "address": "620823",
    "value": "崇信县"
  },
  {
    "address": "620824",
    "value": "华亭县"
  },
  {
    "address": "620825",
    "value": "庄浪县"
  },
  {
    "address": "620826",
    "value": "静宁县"
  },
  {
    "address": "620902",
    "value": "肃州区"
  },
  {
    "address": "620921",
    "value": "金塔县"
  },
  {
    "address": "620922",
    "value": "瓜州县"
  },
  {
    "address": "620923",
    "value": "肃北蒙古族自治县"
  },
  {
    "address": "620924",
    "value": "阿克塞哈萨克族自治县"
  },
  {
    "address": "620981",
    "value": "玉门市"
  },
  {
    "address": "620982",
    "value": "敦煌市"
  },
  {
    "address": "621002",
    "value": "西峰区"
  },
  {
    "address": "621021",
    "value": "庆城县"
  },
  {
    "address": "621022",
    "value": "环县"
  },
  {
    "address": "621023",
    "value": "华池县"
  },
  {
    "address": "621024",
    "value": "合水县"
  },
  {
    "address": "621025",
    "value": "正宁县"
  },
  {
    "address": "621026",
    "value": "宁县"
  },
  {
    "address": "621027",
    "value": "镇原县"
  },
  {
    "address": "621102",
    "value": "安定区"
  },
  {
    "address": "621121",
    "value": "通渭县"
  },
  {
    "address": "621122",
    "value": "陇西县"
  },
  {
    "address": "621123",
    "value": "渭源县"
  },
  {
    "address": "621124",
    "value": "临洮县"
  },
  {
    "address": "621125",
    "value": "漳县"
  },
  {
    "address": "621126",
    "value": "岷县"
  },
  {
    "address": "621202",
    "value": "武都区"
  },
  {
    "address": "621221",
    "value": "成县"
  },
  {
    "address": "621222",
    "value": "文县"
  },
  {
    "address": "621223",
    "value": "宕昌县"
  },
  {
    "address": "621224",
    "value": "康县"
  },
  {
    "address": "621225",
    "value": "西和县"
  },
  {
    "address": "621226",
    "value": "礼县"
  },
  {
    "address": "621227",
    "value": "徽县"
  },
  {
    "address": "621228",
    "value": "两当县"
  },
  {
    "address": "622901",
    "value": "临夏市"
  },
  {
    "address": "622921",
    "value": "临夏县"
  },
  {
    "address": "622922",
    "value": "康乐县"
  },
  {
    "address": "622923",
    "value": "永靖县"
  },
  {
    "address": "622924",
    "value": "广河县"
  },
  {
    "address": "622925",
    "value": "和政县"
  },
  {
    "address": "622926",
    "value": "东乡族自治县"
  },
  {
    "address": "622927",
    "value": "积石山保安族东乡族撒拉族自治县"
  },
  {
    "address": "623001",
    "value": "合作市"
  },
  {
    "address": "623021",
    "value": "临潭县"
  },
  {
    "address": "623022",
    "value": "卓尼县"
  },
  {
    "address": "623023",
    "value": "舟曲县"
  },
  {
    "address": "623024",
    "value": "迭部县"
  },
  {
    "address": "623025",
    "value": "玛曲县"
  },
  {
    "address": "623026",
    "value": "碌曲县"
  },
  {
    "address": "623027",
    "value": "夏河县"
  },
  {
    "address": "630102",
    "value": "城东区"
  },
  {
    "address": "630103",
    "value": "城中区"
  },
  {
    "address": "630104",
    "value": "城西区"
  },
  {
    "address": "630105",
    "value": "城北区"
  },
  {
    "address": "630121",
    "value": "大通回族土族自治县"
  },
  {
    "address": "630122",
    "value": "湟中县"
  },
  {
    "address": "630123",
    "value": "湟源县"
  },
  {
    "address": "632121",
    "value": "平安县"
  },
  {
    "address": "632122",
    "value": "民和回族土族自治县"
  },
  {
    "address": "632123",
    "value": "乐都县"
  },
  {
    "address": "632126",
    "value": "互助土族自治县"
  },
  {
    "address": "632127",
    "value": "化隆回族自治县"
  },
  {
    "address": "632128",
    "value": "循化撒拉族自治县"
  },
  {
    "address": "632221",
    "value": "门源回族自治县"
  },
  {
    "address": "632222",
    "value": "祁连县"
  },
  {
    "address": "632223",
    "value": "海晏县"
  },
  {
    "address": "632224",
    "value": "刚察县"
  },
  {
    "address": "632321",
    "value": "同仁县"
  },
  {
    "address": "632322",
    "value": "尖扎县"
  },
  {
    "address": "632323",
    "value": "泽库县"
  },
  {
    "address": "632324",
    "value": "河南蒙古族自治县"
  },
  {
    "address": "632521",
    "value": "共和县"
  },
  {
    "address": "632522",
    "value": "同德县"
  },
  {
    "address": "632523",
    "value": "贵德县"
  },
  {
    "address": "632524",
    "value": "兴海县"
  },
  {
    "address": "632525",
    "value": "贵南县"
  },
  {
    "address": "632621",
    "value": "玛沁县"
  },
  {
    "address": "632622",
    "value": "班玛县"
  },
  {
    "address": "632623",
    "value": "甘德县"
  },
  {
    "address": "632624",
    "value": "达日县"
  },
  {
    "address": "632625",
    "value": "久治县"
  },
  {
    "address": "632626",
    "value": "玛多县"
  },
  {
    "address": "632721",
    "value": "玉树县"
  },
  {
    "address": "632722",
    "value": "杂多县"
  },
  {
    "address": "632723",
    "value": "称多县"
  },
  {
    "address": "632724",
    "value": "治多县"
  },
  {
    "address": "632725",
    "value": "囊谦县"
  },
  {
    "address": "632726",
    "value": "曲麻莱县"
  },
  {
    "address": "632801",
    "value": "格尔木市"
  },
  {
    "address": "632802",
    "value": "德令哈市"
  },
  {
    "address": "632821",
    "value": "乌兰县"
  },
  {
    "address": "632822",
    "value": "都兰县"
  },
  {
    "address": "632823",
    "value": "天峻县"
  },
  {
    "address": "640104",
    "value": "兴庆区"
  },
  {
    "address": "640105",
    "value": "西夏区"
  },
  {
    "address": "640106",
    "value": "金凤区"
  },
  {
    "address": "640121",
    "value": "永宁县"
  },
  {
    "address": "640122",
    "value": "贺兰县"
  },
  {
    "address": "640181",
    "value": "灵武市"
  },
  {
    "address": "640202",
    "value": "大武口区"
  },
  {
    "address": "640205",
    "value": "惠农区"
  },
  {
    "address": "640221",
    "value": "平罗县"
  },
  {
    "address": "640302",
    "value": "利通区"
  },
  {
    "address": "640303",
    "value": "红寺堡区"
  },
  {
    "address": "640323",
    "value": "盐池县"
  },
  {
    "address": "640324",
    "value": "同心县"
  },
  {
    "address": "640381",
    "value": "青铜峡市"
  },
  {
    "address": "640402",
    "value": "原州区"
  },
  {
    "address": "640422",
    "value": "西吉县"
  },
  {
    "address": "640423",
    "value": "隆德县"
  },
  {
    "address": "640424",
    "value": "泾源县"
  },
  {
    "address": "640425",
    "value": "彭阳县"
  },
  {
    "address": "640502",
    "value": "沙坡头区"
  },
  {
    "address": "640521",
    "value": "中宁县"
  },
  {
    "address": "640522",
    "value": "海原县"
  },
  {
    "address": "650102",
    "value": "天山区"
  },
  {
    "address": "650103",
    "value": "沙依巴克区"
  },
  {
    "address": "650104",
    "value": "新市区"
  },
  {
    "address": "650105",
    "value": "水磨沟区"
  },
  {
    "address": "650106",
    "value": "头屯河区"
  },
  {
    "address": "650107",
    "value": "达坂城区"
  },
  {
    "address": "650109",
    "value": "米东区"
  },
  {
    "address": "650121",
    "value": "乌鲁木齐县"
  },
  {
    "address": "650202",
    "value": "独山子区"
  },
  {
    "address": "650203",
    "value": "克拉玛依区"
  },
  {
    "address": "650204",
    "value": "白碱滩区"
  },
  {
    "address": "650205",
    "value": "乌尔禾区"
  },
  {
    "address": "652101",
    "value": "吐鲁番市"
  },
  {
    "address": "652122",
    "value": "鄯善县"
  },
  {
    "address": "652123",
    "value": "托克逊县"
  },
  {
    "address": "652201",
    "value": "哈密市"
  },
  {
    "address": "652222",
    "value": "巴里坤哈萨克自治县"
  },
  {
    "address": "652223",
    "value": "伊吾县"
  },
  {
    "address": "652301",
    "value": "昌吉市"
  },
  {
    "address": "652302",
    "value": "阜康市"
  },
  {
    "address": "652323",
    "value": "呼图壁县"
  },
  {
    "address": "652324",
    "value": "玛纳斯县"
  },
  {
    "address": "652325",
    "value": "奇台县"
  },
  {
    "address": "652327",
    "value": "吉木萨尔县"
  },
  {
    "address": "652328",
    "value": "木垒哈萨克自治县"
  },
  {
    "address": "652701",
    "value": "博乐市"
  },
  {
    "address": "652722",
    "value": "精河县"
  },
  {
    "address": "652723",
    "value": "温泉县"
  },
  {
    "address": "652801",
    "value": "库尔勒市"
  },
  {
    "address": "652822",
    "value": "轮台县"
  },
  {
    "address": "652823",
    "value": "尉犁县"
  },
  {
    "address": "652824",
    "value": "若羌县"
  },
  {
    "address": "652825",
    "value": "且末县"
  },
  {
    "address": "652826",
    "value": "焉耆回族自治县"
  },
  {
    "address": "652827",
    "value": "和静县"
  },
  {
    "address": "652828",
    "value": "和硕县"
  },
  {
    "address": "652829",
    "value": "博湖县"
  },
  {
    "address": "652901",
    "value": "阿克苏市"
  },
  {
    "address": "652922",
    "value": "温宿县"
  },
  {
    "address": "652923",
    "value": "库车县"
  },
  {
    "address": "652924",
    "value": "沙雅县"
  },
  {
    "address": "652925",
    "value": "新和县"
  },
  {
    "address": "652926",
    "value": "拜城县"
  },
  {
    "address": "652927",
    "value": "乌什县"
  },
  {
    "address": "652928",
    "value": "阿瓦提县"
  },
  {
    "address": "652929",
    "value": "柯坪县"
  },
  {
    "address": "653001",
    "value": "阿图什市"
  },
  {
    "address": "653022",
    "value": "阿克陶县"
  },
  {
    "address": "653023",
    "value": "阿合奇县"
  },
  {
    "address": "653024",
    "value": "乌恰县"
  },
  {
    "address": "653101",
    "value": "喀什市"
  },
  {
    "address": "653121",
    "value": "疏附县"
  },
  {
    "address": "653122",
    "value": "疏勒县"
  },
  {
    "address": "653123",
    "value": "英吉沙县"
  },
  {
    "address": "653124",
    "value": "泽普县"
  },
  {
    "address": "653125",
    "value": "莎车县"
  },
  {
    "address": "653126",
    "value": "叶城县"
  },
  {
    "address": "653127",
    "value": "麦盖提县"
  },
  {
    "address": "653128",
    "value": "岳普湖县"
  },
  {
    "address": "653129",
    "value": "伽师县"
  },
  {
    "address": "653130",
    "value": "巴楚县"
  },
  {
    "address": "653131",
    "value": "塔什库尔干塔吉克自治县"
  },
  {
    "address": "653201",
    "value": "和田市"
  },
  {
    "address": "653221",
    "value": "和田县"
  },
  {
    "address": "653222",
    "value": "墨玉县"
  },
  {
    "address": "653223",
    "value": "皮山县"
  },
  {
    "address": "653224",
    "value": "洛浦县"
  },
  {
    "address": "653225",
    "value": "策勒县"
  },
  {
    "address": "653226",
    "value": "于田县"
  },
  {
    "address": "653227",
    "value": "民丰县"
  },
  {
    "address": "654002",
    "value": "伊宁市"
  },
  {
    "address": "654003",
    "value": "奎屯市"
  },
  {
    "address": "654021",
    "value": "伊宁县"
  },
  {
    "address": "654022",
    "value": "察布查尔锡伯自治县"
  },
  {
    "address": "654023",
    "value": "霍城县"
  },
  {
    "address": "654024",
    "value": "巩留县"
  },
  {
    "address": "654025",
    "value": "新源县"
  },
  {
    "address": "654026",
    "value": "昭苏县"
  },
  {
    "address": "654027",
    "value": "特克斯县"
  },
  {
    "address": "654028",
    "value": "尼勒克县"
  },
  {
    "address": "654201",
    "value": "塔城市"
  },
  {
    "address": "654202",
    "value": "乌苏市"
  },
  {
    "address": "654221",
    "value": "额敏县"
  },
  {
    "address": "654223",
    "value": "沙湾县"
  },
  {
    "address": "654224",
    "value": "托里县"
  },
  {
    "address": "654225",
    "value": "裕民县"
  },
  {
    "address": "654226",
    "value": "和布克赛尔蒙古自治县"
  },
  {
    "address": "654301",
    "value": "阿勒泰市"
  },
  {
    "address": "654321",
    "value": "布尔津县"
  },
  {
    "address": "654322",
    "value": "富蕴县"
  },
  {
    "address": "654323",
    "value": "福海县"
  },
  {
    "address": "654324",
    "value": "哈巴河县"
  },
  {
    "address": "654325",
    "value": "青河县"
  },
  {
    "address": "654326",
    "value": "吉木乃县"
  },
  {
    "address": "659001",
    "value": "石河子市"
  },
  {
    "address": "659002",
    "value": "阿拉尔市"
  },
  {
    "address": "659003",
    "value": "图木舒克市"
  },
  {
    "address": "659004",
    "value": "五家渠市"
  }
]

export default {
  host,
  province,
  get_province
}
