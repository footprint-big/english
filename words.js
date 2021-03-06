// 小学所有单词 https://baijiahao.baidu.com/s?id=1598417474555865523&wfr=spider&for=pc

var words = { // all words

	"已背": [
		["exact","adj. 精确的;准确的;严谨的;严格的;","[ɪɡˈzækt]","exactly"],
		["slow","adj. 缓慢的;迟缓的;耗时的;慢的;慢速的;低速的; v. (使)放慢速度，减缓，松劲","[sloʊ]","slowly, slowing, slowed, slowed"],
		["few","det./adj. (与复数名词和复数动词连用)不多，很少;(与复数名词和复数动词连用)有些，几个; pron. 很少人(或事物、地方);有些(人、事物、地方);一些;不和…一般多;少于","[fjuː]","fewer, fewest"],
		
		["just","adv. 正好;恰好;正当…时;不少于;同样; adj. 公正的;正义的;正当的;合理的;正直的人;公正的人;合适的;恰当的","[dʒʌst]",""],
		["across","adv. 从一边到另一边;横过;宽;从…的一边向…;在对面;在对过; prep. 从…一边到另一边;横过;在…对面;在…对过;在(身体某部位)上","[əˈkrɔːs]",""],
				
		["leave","v. 离开(某人或某处);离开居住地点(或群体、工作单位等);遗弃;丢弃","[liːv]","leaves, leaving, leaved, leaved"],
		["believe","v.相信;认为真实;把(某事)当真;认为有可能;认定;看作","[bɪˈliːv]","believes, believing, believed, believed"],
		["wish","v. 希望(不大可能的事)发生;怀着(不可能实现的)愿望;希望(做某事);想要(某事发生);盼望;企求;想要; n. 愿望;希望;想要的东西;希望的事;愿;心愿","[wɪʃ]","wishes, wishes, wishing, wished, wished"],
		
		["shell","n. (蛋、坚果、某些种子和某些动物的)壳;壳状物;炮弹","[ʃel]","shells"],
		["turtle","n. 海龟;(任何种类的)龟;陆龟;水龟;鳖","[ˈtɜːrtl]","turtles"],
		["town","n. 镇;市镇;集镇;(某一市镇的)居民，市民;(城镇的)商业区","[taʊn]","towns"],
		["bridge","n. 桥;起联系作用的事物;桥梁;纽带;(舰船的)驾驶台;船桥;舰桥; v. 在…建桥，架桥于，跨过，度过","[brɪdʒ]"," bridges, bridges, bridging, bridged, bridged"],
		["church","n. (基督教的)教堂，礼拜堂;礼拜;礼拜仪式;基督教教派","[tʃɜːrtʃ]","churches"],
		["hotel","n. 旅馆;旅社;酒吧;酒馆;餐馆","[hoʊˈtel]","hotels"],
		["supermarket","n. 超级市场;超市","[ˈsuːpərmɑːrkɪt]",""],
		["gas","n. 气体;气体燃料;煤气;天然气;(外科手术用)麻醉气;汽油","[ɡæs]","gases"],
		["gas station","加油站","",""],
		["bakery","n. 面包(糕饼)店;面包(糕饼)烘房;面包厂","[ˈbeɪkəri]","bakeries"],
		
		["side","n. (由想象的中线分出的)一边，一侧;(事物左方或右方的) 一旁，一边;侧面","[saɪd]","sides"],
		["river","n.河;江;(液体)涌流","[ˈrɪvər]","rivers"],
		["balloon","n. 气球;热气球","[bəˈluːn]","balloons"],
		["place","n. 位置;地点;场所;地方;城镇(或建筑物等);有某用途的建筑(或土地)；v. (小心或有意)放置，安放;使(人)处于某位置;安置;安顿;以某种态度对待(或看待)","[pleɪs]","places, places, placing, placed"],
		
		["other","adj./pron. 另外;其他;(指两个人或事物中的第二个)那个，另一个;(指一组中其余的人或事物)其余的，另外的","[ˈʌðər]","others"],
		["another","det./pron. 又一;再一;另一(事物或人);另一;不同的(人或事物);类似的(人或事物)","[əˈnʌðər]",""],
		["while","conj. 在…期间;当…的时候;与…同时;(对比两件事物)…而，…然而; n. 一段时间;一会儿","[waɪl]",""],
		["learn","v. 学;学习;学到;学会;听到;得知;获悉;记住;背熟;熟记","[lɜːrn]","learns, learning, learnt/learned, learnt/learned"],
		["forever","adv. 永远;长久地;(与动词进行时连用)老是，没完没了地","[fərˈevər]",""],
		["bring","v. 带…到某处;带来;取来;提供;供给;导致;引起","[brɪŋ]","brings, bringing, brought, brought"],
		["glad","adj. 高兴;愉快;感激;感谢;乐意;情愿;愿意; vt. 使高兴","[ɡlæd]","glads, gladding, gladded, gladded"],
		["sometimes","adv. 有时;间或","[ˈsʌmtaɪmz]",""],
		["nearly","adv. 几乎;差不多;将近","[ˈnɪrli]",""],
		["care","n. 照料;照顾;照看;护理;小心;谨慎;忧虑;焦虑;引起烦恼的事;令人焦虑的事; v. 关注;在意;担忧;关心;关怀;努力做","[ker]","cares, caring, cared, cared"],
		["take care of","处理;应对;照顾;照看;看护","",""],
		["anyone","pron. 任何人;随便哪个人;重要人物","[ˈeniwʌn]",""],
		["someone","pron. 某人;重要人物","[ˈsʌmwʌn]",""],
		["title","n.名称，标题，题目;(书刊的)一种，一本;(人名前表示地位、职业、婚否等的)称号，头衔，职称，称谓; v. (给书籍、乐曲等)加标题，定题目","[ˈtaɪtl]","titles, titles, titling, titled, titled"],
		["street","n. 大街;街道","[striːt]","streets"],
		["around","adv. 大约;周围;四周;围绕;环绕; prep. 围绕;环绕;在那边;到那边;从那边;绕着","[əˈraʊnd]",""],
		["even","adv. (强调出乎意料)甚至，连，即使;(用以加强比较)甚至更，愈加，还;(引出更精确的说法)甚至可以说，其实，实际上; adj. 平滑的;平的;平坦的;(数量、速度等)变化不大的，均匀的，平稳的;相等的;均等的; v. （使）平;（使）相等;（使）变平","[ˈiːvn]","evens, evening, evened, evened"],
		["forget","v. 忘记;遗忘;忘记做(或带、买等);不再想;不再把…放在心上","[fərˈɡet]","forgets, forgetting, forgot, forgotten"],
		["","","",""],
		["","","",""],
		["","","",""],
		["","","",""],
		["","","",""],
	],

	"新": [
		["occupation","职业","",""],
		["receptionist","接待员","",""],
		["pilot","飞行员","",""],
		["mechanic","技工","",""],
		["businessman","商人","",""],
		
		["famous","著名的，有名的","",""],
		["well-known","知名的","",""],
		
		["railroad","铁路","",""],
		["cellphone","手机","",""],
		["sause","酱","",""],
		
		["When will he become the manager?","他什么时候会成为经理？","",""],
		["How long does it take to become a pilot?","成为飞行员花多久？","",""],
	],
	
	"上学前的忙碌-scene 2": [
		["alarm","警报，警报器","[əˈlɑːrm]",""],
		["clock","钟，时钟","[klɒk]",""],
		["alarm clock","闹钟","",""],
		["right away","马上，立刻","[raɪt əˈweɪ]",""],
		["snooze","（尤指在白天）小睡，打盹","[snuːz]",""],
		["go off","（铃，闹钟等）响","",""],
		["last","上一个的，最后的，最末的","[lɑːst]",""],
		["set","设置","[set]",""],
		["set the alarm clock","设闹钟","",""],

		["The alarm clock went off. Get up right away.","闹钟响了，快起床。","",""],
		["Give me five more minutes to snooze.","再让小睡5分钟。","",""],
		["Mom, it’s too late. Did you set the alarm clock last night?","妈妈，太晚了，昨晚你设闹钟了吗？","",""],
		["Yes, I set it for six thirty.","设了呀，我设在6点半了。","",""],
		["Why didn’t the alarm go off?","闹钟怎么没响呢？","",""],
		["I didn’t let it go off. I wanted you to sleep more.","我没让它响，我想让你多睡会儿。","",""],
		["Mom, please set the alarm clock.","妈妈，请设好闹钟。","",""],
		["Mom, please set the alarm clock for six thirty.","妈妈，请把闹铃设到6点半。","",""],
	],
	
	"上学前的忙碌-scene 1": [
		["One more hour.","再多一个小时。",""],
		["One more year.","再多一年。",""],
		
		["wake","v.醒;醒来;唤醒","[weɪk]"],
		["wake up","醒醒",""],
		["get","v.收到;接到;获得;得到;","[ɡet]"],
		["get up","起床",""],
		["sleepyhead","懒鬼，瞌睡虫",""],
		["sleep","v.睡，睡觉；n.睡眠","[sliːp]"],
		["sleepy","困倦的","[ˈsliːpi]"],
		["early","早的","[ˈɜːrli]"],
		["late","迟的，晚的","[leɪt]"],
		["move","v.(使)改变位置，移动;n.行动;移动;活动;","[muːv]"],
		["It's time to ...","该...了,It's可省略",""],
		["It's time to have breakfast.","该吃早饭了。",""],
/*
		["Hurry up. Time is running out.","别磨蹭，没时间了。",""]
		["Wake up, sleepyhead.", "起床了，小懒虫"],
		["One more minute.","再睡一分钟。",""],
		["It's time to get up.","该起床了。",""],
		["It's still early. I want to sleep some more.","还早呢，我想再睡会儿。",""],
		["But you move so slowly.","但是你很磨蹭。",""],
		["Get up, or you'll be late.","起床了，要不就要迟到了。",""],
		["OK, but I'm still sleepy.","好的，可我还困着呢。",""],
*/
	],
	
	"颜色": [
		["color","颜色","[ˈkʌlər]","n.颜色,彩色,脸色,个性; v.为...着色(此为美式,英式写法为colour)"],
		["black","黑色","[blæk]"],
		["blue","蓝色","[bluː]","n.蓝色;天蓝色;蔚蓝色; adj.蓝色的;天蓝色的;蔚蓝色的;忧郁的;悲伤的;"],
		["brown","棕色,褐色","[braʊn]"],
		["gold","金色,金黄色,金,金币","[ɡoʊld]"],
		["gray","灰色","[ɡreɪ]","n.灰色;adj.灰色的;v.变灰白;变花白(此为美式,英式写法为grey)"],
		["green","绿色","[ɡriːn]","adj.绿色的;草绿色的;n.绿色;草绿色;v.绿化;"],
		["orange","橙色,橙子,柑橘","[ˈɔːrɪndʒ]","n.橙子;柑橘;橙汁;橘汁饮料;橙红色;橘黄色;adj.橙红色的;橘黄色的"],
		["pink","粉色,粉红色","[pɪŋk]"],
		["purple","紫色","[ˈpɜːrpl]"],
		["red","红色","[red]","adj.红的;红色的;红肿的;涨红的;通红的;n.红色;红葡萄酒"],
		["silver","银灰色,银,银币,银器","[ˈsɪlvər]"],
		["white","白色","[waɪt]"],
		["yellow","黄色","[ˈjeloʊ]","adj.黄的;黄色的;n.黄;黄色;v.(使)变黄"],
	],
	
	"家": [
		
		["home","n.家;住所;adj.家的;家庭的;adv.到家;向家;v.归巢,回家","[hoʊm]",""],
		["room","n.房间;室;有…室的;v.租房;合住","[ruːm]",""],
		["house","n.房屋;房子;住宅;v.给(某人)提供住处;","[haʊs]",""],
		
		["wall","墙",""],
		["floor","地板","[flɔːr]"],

		["bathroom","浴室，厕所，盥洗室","",""],
		["restroom","(公共场所的)厕所，盥洗室；公共厕所","",""],
		["living room","客厅","",""],
		["bedroom","卧室","",""],
		["kitchen","厨房",""],
		["dining room","餐厅","",""],

	],
	
	"家具": [
		["door","门","",""],
		["window","窗户","",""],
		
		["bed","床",""],
		// ["double bed","双人床","",""],
		// ["single baed","单人床","",""],
		
		["chair","椅子",""],
		["desk","办公桌，书桌，写字台","",""],
		["table","桌子","","广义的table包含desk"],

		["dining table","餐桌","",""],
		// ["dressing table","梳妆台","",""],
		
		// ["drawer","抽屉","",""],
		
		["bookcase","书柜","",""],
		["bookshelf","书架","",""],
		
		["sofa","沙发","",""],
		["couch","长沙发椅","",""],
		
		["curtain","窗帘","",""],

		["go to bed","上床睡觉",""],
	],
	
	"电器": [
	
		["TV","电视机（简写）",""],
		["television","电视机",""],
		["bike","自行车（简写）",""],
		["bicycle","自行车",""],

		["refrigerator","冰箱","",""],
		
		["fan","风扇，扇子；迷，狂热爱好者;","[fæn]",""],
		["electric fan","电扇","",""],
		["stand fan","落地风扇","",""],

		["light","n.电灯,光线;adj.轻的，明亮的",""],
		["lamp","灯","[læmp]",""],
		["desk lamp","台灯","",""],
		["table lamp","台灯","",""],
		
		["bed light","床头灯","",""],
		["bed lamp","床头灯","",""],
		["wall light","壁灯","",""],
		["floor lamp","落地灯","",""],
/*		
		["electric iron","电熨斗","",""],
*/
		
		["turn on the light","打开电灯","",""],
		["turn off the light","关掉电灯","",""],		
	],
	
	"厨房用品": [

		["tableware","餐具","",""],
		
		["spoon","勺子","",""],
		["fork","叉子","",""],
		["chopsticks","筷子","",""],
		["knife","刀","",""],
		["glass","玻璃杯，玻璃","",""],
		["cup","(一般小型带把手的)杯子","",""],
		["dish","(较深的、椭圆形的)碟子","",""],
		["bottle","瓶子","",""],

		["plate","(较浅的)盘子","",""],
		["bowl","碗","",""],
		
		// ["teapot","茶壶","",""],
		
		// ["chopping board","案板","",""],
		// ["table cloth","桌布","",""],
	],
		
	"酒水饮料零食": [

		["milk","牛奶","",""],
		["water","水","",""],
		["juice","果汁","",""],
		["tea","茶","",""],
		["coffee","咖啡，咖啡豆，咖啡色","",""],
	
		["yogurt","酸奶","",""],

		["Coke","可乐",""],
		["Coca-Cola","可口可乐","",""],
		
		["ice cream","冰淇淋","",""],
		// ["sundae","圣代冰淇淋","",""],
		
		["wine","酒","",""],
		["beer","啤酒","",""],
		["red wine","红酒","",""],
		
		["biscuit","饼干","",""],

	],
	
	"食物": [
	
		["food","食物","",""],
		["fruit","水果","",""],
		["vegetable","蔬菜","",""],

		["meat","肉，肉类(食用)","",""],
	],
	
	"食物-主食": [
		["rice","稻，米饭","",""],
		["egg","蛋",""],

		["tea eggs","茶叶蛋","",""],
		["soup","汤","",""],
		["noodle","面条","[ˈnuːdl]",""],
		// ["instant noodle","方便面","",""],
		
		["cookies","饼干","",""],
		["dumpling","水饺","",""],

		["cake","蛋糕","",""],
		["bread","面包","",""],
		["corn","玉米","",""],
		
		["salad","沙拉","",""],
		["pizza","披萨","",""],
		["hamburger","汉堡","[ˈhæmbɜːrɡər]",""],
		["burger","汉堡（简写）","[ˈbɜːrɡər]",""],
		["sandwich","三明治","[ˈsænwɪtʃ]",""],
		["fries","n.炸薯条v.油炸;油煎;油炒","[fraɪz]",""],
		["ham","火腿","",""],
		// ["cheese","奶酪","",""],
	
		["steak","牛排","",""],
		
		["wheat","小麦","",""],
		["flour","面粉","",""],
		["strong flour","高筋面粉","",""],
		
		// ["preserved eggs","皮蛋，松花蛋","",""],

	],
	
	"食物-水果": [
		["apple","苹果","[ˈæpl]",""],
		["orange","橘子","",""],
		["banana","香蕉","",""],

		["peach","桃","",""],
		["grape","葡萄","",""],
		["pear","梨","",""],
		["strawberry","草莓","",""],
		["blueberry","蓝莓","",""],
		["mango","芒果","",""],
		["cherry","樱桃","",""],
		["melon","甜瓜","",""],
		["watermelon","西瓜","",""],
		["pine apple","波萝","",""],
		["kiwi","奇异果","",""],
		["star fruit","杨桃","",""],
		["Chinese date","枣","",""],
	],
	
	"食物-蔬菜": [

		["carrot","胡萝卜","",""],
		["tomato","西红柿","",""],
		["potato","马铃薯","",""],
		["cucumber","黄瓜","",""],
		["mushroom","蘑菇","",""],
		["onion","洋葱","",""],
		["peanut","花生","",""],

	],

	"食物-肉类": [

		["beef","牛肉","",""],

		["chicken","鸡肉","[ˈtʃɪkɪn]",""],

		["mutton","羊肉","",""],

		["pork","猪肉","",""],
	],
	
	"食物-水产类": [
		["fish","鱼，鱼肉","",""],

		["crab","螃蟹，蟹肉","[kræb]",""],
		["prawn","对虾，大虾，明虾","[prɔːn]",""],
		["lobster","龙虾，龙虾肉","[ˈlɑːbstər]",""],

	],
	
	"调料": [

		["sugar","糖","",""],
		["refined sugar","白糖","",""],
		["brown sugar","红糖","",""],
		["salt","盐","",""],
		["oil","油","",""],
		["salad oil","色拉油","",""],
		["vinegar","醋","",""],
		["soy","酱油","",""],
		["ketchup","番茄酱","",""],
		["cooking wine","黄酒","",""],
		["butter","黄油","",""],
		// ["shallot","葱","",""],
		// ["Spring onions","葱","",""],
		// ["ginger","姜","",""],
		// ["garlic","蒜","",""],
		
		["pepper","胡椒粉;甜椒;柿子椒;灯笼椒","[ˈpepər]",""],

	],
		
	"餐类": [

		["breakfast","早餐",""],
		["lunch","中餐",""],
		["supper","晚餐",""],
		["dinner","正餐，晚餐",""],

	],
	
	"餐厅相关": [
		["restaurant","餐馆;餐厅","[ˈrestrɑːnt]",""],
		["menu","菜单","[ˈmenjuː]",""],
		["a table for one","一个一人桌","",""],
		["a table for two","一个双人桌","",""],
		["follow","跟随;跟着;","[ˈfɑːloʊ]",""],
		["Follow me please.","请跟我来。","",""],
	],
	
	"衣服鞋帽": [

		["cap","帽子，无边的便帽，表示职业的帽子，如运动帽、军帽等","",""],
		["clothes","衣服，服装","",""],
		["coat","外套","",""],
		
		["dress","连衣裙","",""],

		["glasses","眼镜","",""],
		["glove","手套","",""],

		["hat","帽子，有边的帽子，礼帽","",""],
		
		["jacket","夹克衫","",""],
		["jeans","牛仔裤","",""],
		
		["pants","裤子，短裤","",""],

		["sandals","凉鞋","英 [ˈsændlz] 美 [ˈsændəlz]",""],
		["shoes","鞋","",""],
		["shirt","(尤指男式)衬衫","英 [ʃɜːt] 美 [ʃɜːrt]",""],
		["shorts","短裤","",""],
		["skirt","短裙","",""],
		["slippers","拖鞋","",""],
		["sneakers","运动鞋","",""],
		["socks","袜子","",""],
		["sweater","毛衣","",""],
		["swimsuit","泳衣","",""],
		
		["T-shirt","T恤衫","",""],

		["underskirt","内衣","",""],
		
		["vest","背心","",""],

	],
	
	"数字-done": [
		["number","数字,数量,编号","[ˈnʌmbər]"],
		["zero","零","[ˈzɪroʊ]"],
		["one","一",""],
		["two","二",""],
		["three","三",""],
		["four","四",""],
		["five","五",""],
		["six","六",""],
		["seven","七",""],
		["eight","八",""],
		["nine","九",""],
		["ten","十",""],
		["eleven","十一",""],
		["twelve","十二",""],
		["thirteen","十三",""],
		["fourteen","十四",""],
		["fifteen","十五",""],
		["eighteen","十八",""],
		["twenty","二十",""],
		["thirty","三十",""],
		["forty","四十",""],
		["one hundred","一百",""],
		["four hundred","四百",""],
		
		["thousand","千","",""],
		["million","百万","",""],
		["billion","十亿","",""],

	],
	
	"序数词":[
		["first","第一","","1st"],
		["second","第二","","2nd"],
		["third","第三","","3rd"],
		["fourth","第四","","4th"],
		["fifth","第五","","5th"],
		["sixth","第六","","6th"],
		["seventh","第七","","7th"],
		["eighth","第八","","8th"],
		["ninth","第九","","9th"],
		["tenth","第十","","10th"],
		["eleventh","第十一","","11th"],
		["twelfth","第十二","","12th"],
		["thirteenth","第十三","","13th"],
		["fourteenth","第十四","","14th"],
		["fifteenth","第十五","","15th"],
		["sixteenth","第十六","","16th"],
		["seventeenth","第十七","","17th"],
		["eighteenth","第十八","","18th"],
		["nineteenth","第十九","","19th"],
		["twentieth","第二十","","20th"],
		["twenty-first","第二十一","","21st"],
		["twenty-second","第二十二","","22nd"],
		["twenty-third","第二十三","","23rd"],
		["twenty-fourth","第二十四","","24th"],
		
	],
	
	"时间日期":[
		["second","秒","",""],
		["minute","分钟","",""],
		["quarter","四分之一,一刻钟","",""],
		["hour","小时","",""],
		["day","一天","",""],

		["week","周，星期","",""],
		["month","月，月份","",""],
		["year","月，月份","",""],

	],
	
	"时间-done":[
		["time","时间,次数","[taɪm]",""],
		["o'clock","...点钟","",""],
		
		// 整点
		["six o'clock","六点整","",""],
		
		["seven fifteen","七点十五分","",""],
		["a quarter past seven","七点十五分","",""],
		["fifteen past seven","七点十五分","",""],
		
		["six forty-five","六点四十五","",""],
		["a quarter to seven","六点四十五","",""],
		["fifteen to seven","六点四十五","",""],
		
		["eleven thirty","十一点半","",""],
		["half past eleven","十一点半","",""],
		["thirty past eleven","十一点半","",""],
		
		["day","白天,白昼","[deɪ]",""],
		// ["dawn","n.黎明","[dɔːn]",""],
		["morning","早晨,上午",""],
		["noon","中午",""],
		["afternoon","下午",""],
		["evening","傍晚",""],
		["night","晚上",""],
		["midnight","半夜",""],
		
		["A:What time is it now? B:It's seven o'clock.","A:现在几点了？B:现在是七点钟。","",""],
		["A:What's the time by your watch? B:It's ten past nine.","A:你的手表现在几点了？B:9点10分。","",""],
	],
	
	"日期-done": [
		["today","今天","[təˈdeɪ]"],
		["tonight","n.今晚；adv.在今晚","[təˈnaɪt]",""],
		["tomorrow","明天",""],
		["yesterday","昨天",""],
		["the day before yesterday","前天",""],
		["the day after tomorrow","后天",""],
		
		["now","现在,目前","[naʊ]"],
		["future","adj.将来的；n.将来","[ˈfjuːtʃər]",""],
		["past","adj.过去的；n.过去","[pæst]",""],
		
		["in the future","在未来","",""],
		["in the past","在过去","",""],
	],
	
	"星期":[

		["weekend","周末","[ˈwiːkend]",""],
		["Monday","周一","[ˈmʌndeɪ]",""],
		["Tuesday","周二","[ˈtuːzdeɪ]",""],
		["Wednesday","周三","[ˈwenzdeɪ]",""],
		["Thursday","周四","[ˈθɜːrzdeɪ]",""],
		["Friday","周五","[ˈfraɪdeɪ]",""],
		["Saturday","周六","[ˈsætərdeɪ]",""],
		["Sunday","周日","[ˈsʌndeɪ]",""],
		
		["A:What day is it today? B:It's Wednesday.","A:今天星期几？B:星期三。","",""],

	],
	
	"月份":[

		["January","一月","",""],
		["February","二月","",""],
		["March","三月","",""],
		["April","四月","",""],
		["May","五月","",""],
		["June","六月","",""],
		["July","七月","",""],
		["August","八月","",""],
		["September","九月","",""],
		["October","十月","",""],
		["November","十一月","",""],
		["December","十二月","",""],

	],

	"季节-done":[
		["season","季节","",""],
		["spring","春季","",""],
		["summer","夏季","",""],
		["fall","n.秋季(美);vi.落下,减弱","",""],
		["winter","冬季","",""],
	],
	
	"方向-done":[
		["direction","方向","",""],
		["east","东方","",""],
		["south","南方","",""],
		["west","西方","",""],
		["north","北方","",""],
		["north-east","东北方","",""],
		["south-east","东南方","",""],
		["south-west","西南方","",""],
		["north-west","西北方","",""],
		
		["front","前面","",""],
		["back","后面;背后的;向后","[bæk]"],
		["center","中间","",""],
		["left","左边的","",""],
		["right","右边的;正确的","",""],
	],
		
	"形状大小": [
		["size","大小","",""],
		["big","大的",""],
		["small","小的;少的；不重要的",""],

		["long","长的","[lɔːŋ]",""],
		["short","矮的，短的；不足的","",""],
		
		["tall","adj.高的，长的","",""],

		["shape","形状","",""],
		["square","正方形","",""],
		["triangle","三角形","",""],
		["circle","圆形","",""],
		["rectangle","矩形","",""],
		["ellipse","椭圆形","",""],
		["star","星型","",""],
		["sector","扇形","",""],
		["heart","心形","",""],
		
		["thin","薄的","",""],
		["thick","厚的，粗的","",""],
		
		["weight","重量","",""],
		["heavy","adj.沉重的，繁重的","",""],
		["light","n.电灯,光线;adj.轻的，明亮的","",""],

	],
	
	"位置": [

		["position","位置，方位","",""],
				
		["in","在...之内","",""],
		["on","在...上,在...旁","",""],
		["under","在...之下","",""],
		["near","靠近;在....附近","",""],
		["behind","在...后面;落后于","",""],
		
		["here","在这里","[hɪr]"],
		["there","在那里","[ðer]"],
		
		["high","adj.高的，高级的","",""],

	],
	
	"天气": [
		
		["cloud","云，云状物，一大群","",""],
		["cloudy","多云的，阴天的","",""],

		["fog","雾","",""],
		["foggy","有雾的","",""],
		
		["ice","冰","",""],
		
		["lightning","闪电","",""],
		
		["rain","v.下雨;n.雨","",""],
		["rainbow","彩虹","",""],
		["rainy","下雨的","",""],
		
		["snow","积雪,下雪","",""],
		["snowstorm","暴风雪","",""],
		["snowy","下雪的，多雪的","",""],
		["storm","暴风雨","",""],
		["sunny","晴朗的","",""],
		["sunshine","阳光","",""],
		
		["weather","天气","",""],
		["wind","风，气流","",""],
		["windy","多风的，有风的","",""],

	],
	
	"温度-done":[
		["cold","冷的,寒冷的","[koʊld]",""],
		["cool","冷静的,凉爽的","[kuːl]",""],
		["hot","热的,烫的","[hɑːt]",""],
		
		["warm","暖和的,温暖的","[wɔːrm]",""],
		
	],
	
	"人相关-almost done":[
	
		["person","人，人员","",""],
		["people","人，人类，民族，公民","",""],
		
		["boy","男孩","[bɔɪ]"],
		["girl","女孩","[ɡɜːrl]"],
		
		["baby","婴儿，婴孩","",""],
		["child","儿童，孩子，子孙","",""],
		["man","男人，人类，人","",""],
		["woman","女性，妇女，成年女子","",""],
		
		["adult","成年人","",""],
		
		// ["kid","","",""],
		// ["young people","年轻人","",""],
		// ["old people","年轻人","",""],
		
		["name","名称","",""],
		["age","年龄","",""],
		["gender","性别","",""],
	],
	
	"人身体部位-done":[

		["arm","胳膊",""],
		
		["body","身体",""],
		["brain","脑袋；头脑，智力","",""],

		["ear","耳朵",""],
		["eye","眼睛",""],
		
		["face","脸",""],
		["finger","手指",""],
		["foot","脚",""],

		["hair","头发",""],
		["hand","手",""],
		["head","头",""],
		
		["leg","腿",""],
		
		["mouth","嘴巴",""],
		
		["neck","脖子，颈","[nek]"],
		["nose","鼻子",""],
		
		["toe","n.脚趾","英 [təʊ] 美 [toʊ]","复数： toes"],
	],
	
	"人的动作-almost done": [
	
		["speak","v.讲话，说话","[spiːk]",""],
		["say","v.说，讲，告诉","",""],
		["ask","v.问，要求","",""],
		["sing","v.唱","",""],
		["cry","v.哭;哭泣;喊叫;n.叫喊，叫声;","[kraɪ]",""],
		["laugh","v.笑;发笑;n.笑声;","[læf]",""],
		
		["drink","喝,饮",""],
		["eat","吃",""],
	
		["smell","闻",""],
		
		["listen","听",""],
		
		["see","看见",""],
		["look","看,注视",""],
		["look at the tree","看着那棵树",""],
		
		["run","奔跑",""],
		["walk","走路,散步",""],
		["jump","跳跃",""],
		
		["sit","v.坐;使坐;使就座;","[sɪt]",""],
		["stand","vi.位于，站立; vt.忍受，使站立","",""],
		["sleep","vi.睡，睡觉;n.睡眠","",""],
		["play","vt.演奏，播放；vi.玩耍","",""],
		
		["go","v.去；走","",""],
		["come","v.来；来到；到达","",""],
		["make","制造,做,组装",""],
		
		["Let's sing a song of joy.","让我们唱一首欢乐的歌。","",""],
	],
	
	"人的感受":[

		["hungry","adj.饥饿的，渴望的","",""],
		["thirsty","渴的","",""],
		["tired","累的，困的","",""],
		["sad","adj.悲哀的;难过的;","[sæd]"],

	],
	
	"电子产品": [

		["phone","n.电话;vt.打电话","",""],
		["computer","电脑，计算机","",""],

	],
	
	"日常用品": [

		["key","钥匙",""],
		["watch","手表",""],
		["towel","毛巾，抹布","[ˈtaʊəl]"],

	],
	
	"亲属": [
	
		["grandson","孙儿子",""],
		["granddaughter","孙女儿",""],
	
		["son","儿子",""],
		["daughter","女儿",""],
		
		["brother","兄,弟",""],
		["sister","姐,妹",""],
		
		["father","父亲",""],
		["dad","爸爸(简写)","",""],
		["mother","母亲",""],
		["mum","妈妈(简写)",""],
		["parent","父母亲；父亲（或母亲）","",""],
		
		["grandma","奶奶（简写）",""],
		["grandpa","爷爷（简写）",""],
		["grandmother","奶奶",""],
		["grandfather","爷爷",""],
		["grandparent","祖父母","",""],
		
		["You are my son.","你是我的儿子。",""],
		["I am your son.","我是你的儿子。",""],
	
		["family","家庭，家族，家属，亲属","[ˈfæməli]",""],
		// ["husband","丈夫","",""],
		// ["wife","妻子","",""],
		// ["uncle","舅父;叔父;伯父;姑父;姨父;(儿童用语，称呼父母的同辈朋友)叔叔，伯伯","",""],
		// ["aunt","姑母;姨母;伯母;婶母;舅母;(儿语)阿姨","",""],
	],

	"学校相关":[

		["art room","美术室","",""],
		
		["blackboard","黑板","[ˈblækbɔːrd]",""],
		["book","n.书籍；vt.登记","",""],
		
		["chalk","粉笔","[tʃɑːk]",""],
		["class","班级，种类，等级","[klæs]",""],
		["classmate","同学","[ˈklæsmeɪt]",""],
		["classroom","教室，课堂","[ˈklæsruːm]",""],
		["computer room","计算机教室",""],
		["crayon","蜡笔",""],
		
		["draw","v.画，绘画;n.抽奖；平局","",""],

		["eraser","橡皮",""],
		
		["first grade","一年级","",""],
		
		["grade","年级，等级，成绩","[ɡreɪd]",""],
		
		["lesson","一节课，课；经验，教训","[ˈlesn]",""],
		["library","图书馆","",""],
		
		["maths","数学(简写)","",""],
		["mathematics","数学","",""],
		["music room","音乐教室","",""],
		
		["pencil","铅笔",""],
		["play ground","操场",""],
		["primary school","小学",""],
		["pupil","学生（尤指）小学生","[ˈpjuːpl]"],
		
		["read","读","[riːd]",""],
		["ruler","尺子",""],
		
		["school","学校","[skuːl]"],
		["science","科学，理科","",""],
		["second grade","二年级","",""],
		["spell","拼写","[spel]",""],
		["sport","运动","",""],
		["student","学生","[ˈstuːdnt]"],
		["study","学习，研究","",""],
		
		["teach","教，教授，教导","[tiːtʃ]",""],
		["teacher","教师","[ˈtiːtʃər]"],
		
		["write","写，写字；写作","[raɪt]",""],

	],
	
	"动物-done": [
		
		["bear","熊",""],
		["bird","鸟",""],
		// ["bull","公牛",""],
		
		["cat","猫",""],
		// ["cattle","牛",""],
		["chick","雏鸟，小鸡","[tʃɪk]"],
		["chicken","鸡","[ˈtʃɪkɪn]"],
		// ["cow","母牛",""],
		
		["deer","鹿","[dɪr]"],
		["milu deer","麋鹿",""],
		
		["dog","狗","",""],
		["duck","鸭子",""],
		
		["elephant","大象",""],
		
		["fox","狐狸","[fɑːks]"],
		["funnel-web spider","漏斗网蜘蛛","[ˈfʌnl web ˈspaɪdər]"],
		
		["giraffe","长颈鹿","英 [dʒəˈrɑːf] 美 [dʒəˈræf]"],
		["goat","山羊",""],
		["goose","n.鹅;鹅肉;雌鹅","[ɡuːs]"],
		
		["horse","马","[hɔːrs]"],
		
		["kangaroo","袋鼠","美 [ˌkæŋɡəˈruː]"],

		// ["leopard","豹子","[ˈlepərd]"],
		["lion","狮子","[ˈlaɪən]",""],

		// ["mammoth","猛犸象，长毛象","[ˈmæməθ]","《冰河世纪》的动画片"],
		["monkey","猴子","[ˈmʌŋki]"],
		["mouse","老鼠","[maʊs]"],
		

		["panda","熊猫",""],
		["pig","猪",""],
		
		["rabbit","兔子","[ˈræbɪt]"],
		
		["sheep","绵羊",""],
		["snake","蛇","[sneɪk]"],
		["spider","蜘蛛","[ˈspaɪdər]"],
		
		["tiger","老虎",""],
		
		["wolf","狼","[wʊlf]"],
		
	],
	
	"运动": [

		["swim","游泳","[swɪm]",""],
		
	],
	
	"职业": [
		["cook","v.烹饪;烹调;煮(或烘烤、煎炸等);n.做饭的人;炊事员;厨师","[kʊk]",""],
		["chef","厨师;(尤指餐馆、饭店等的)主厨，厨师长","[ʃef]",""],
		["doctor","医生；博士","",""],
		["driver","驾驶员","",""],
		["player","演员，演奏者","",""],
		["worker","工人","[ˈwɜːrkər]"],
		["farmer","农场主;农民","[ˈfɑːrmər]"],
		["guard","n.卫兵;警卫员;看守",""],
		["lifeguard","救生员",""],

	],
	
	"地貌": [

		["river","河，江","",""],
		["mountain","大山","",""],
		["hill","小山","",""],

	],
	
	"交通工具": [

		["bike", "自行车", "[baɪk]"],
		["bicycle", "自行车", "[ˈbaɪsɪkl]"],
		["boat", "小船", "[pleɪn]"],
		["bus","公共汽车,巴士","[bʌs]"],
		["bus stop","公交车站",""],
		
		["car","小汽车,轿车","[kɑːr]"],
		
		["motorcycle","摩托车","[ˈmoʊtərsaɪkl]", "也可以叫做moter; motor van; motor bicycle; motorbike"],
		
		["plane", "飞机", "[pleɪn]"],

		["railway","铁路,铁道","[ˈreɪlweɪ]"],
		["railway station","火车站",""],
		
		["ship","(大)船;舰",""],
		["station","车站,站,所","[ˈsteɪʃn]"],
		["subway","地铁","[ˈsʌbweɪ]"],
		
		["taxi","出租车","[ˈtæksi] "],
		["train","火车；训练,培训","[treɪn]"],
		["truck","卡车,载重汽车","[trʌk]"],
		
		["way","方法,手段；路线,道路","[weɪ]"],
	],
	
	"人称代词-主格": [
		["I","我(主格)","",""],
		["you","你，你们(主格)","",""],
		["she","她(主格)","[ʃi]"],
		["he","他(主格)","[hi , hiː]"],
		["it","它(主格)","",""],
		
		["we","我们(主格)","",""],
		["they","他们，它们(主格)","",""],
	],
	
	"人称代词-宾格": [
		["me","我(宾格)","",""],
		["you","你，你们(宾格)","",""],
		["her","她(宾格)",""],
		["him","他(宾格)",""],
		["it","它(宾格)","",""],
		
		["us","我们(宾格)","",""],
		["them","他们，它们(宾格)","",""],
	],
	
	"物主代词-形容词性": [
		["my","我的(形容词性)","",""],
		["your","你的，你们的(形容词性)","",""],
		["her","她的(形容词性)",""],
		["his","他的(形容词性)",""],
		["its","它的(形容词性)","",""],
		
		["our","我们的(形容词性)","",""],
		["their","他们的，它们的(形容词性)","",""],
	],
	
	"物主代词-名词性": [
		["mine","我的(名词性)","",""],
		["yours","你的，你们的(名词性)","",""],
		["hers","她的(名词性)",""],
		["his","他的(名词性)",""],
		["its","它的(名词性)","",""],
		
		["ours","我们的(名词性)","",""],
		["theirs","他们的，它们的(名词性)","",""],
	],
	
	"常见玩具": [
		["ball","球",""],
		["football","足球",""],
		["basketball","篮球","",""],
		["kite","风筝","",""],
		["balloon","气球","",""],
		["doll","玩具娃娃","",""],
		["frisbee","n.（投掷游戏用的）飞盘；飞碟","['frɪzbi]",""],
	],
	
	"三年级下Unit1":[ // this is lesson
		["UK", "英国（简写）", "[ˌjuːˈkeɪ]"], // this is word
		["Canada", "加拿大", "[ˈkænədə]"],
		["USA","美国（简写）",""],
		["China","中国","[ˈtʃaɪnə]"],
		["and","和；与","[ənd,ænd]"],
		["new","新的","[nuː]"],
		["friend","朋友","[frend]"],
		["Where are you from?","你是哪里人？",""],
		["I'm from the UK.","我是英国人。",""],
		["I'm from China.","我是中国人。",""],
	],
	
	"三年级下Unit1扩展":[
		["this", "这,这个", "[ðɪs]"],
		["that", "那,那个", "[ðæt]"],
		["what", "什么", "[wɑːt]"],
		["where", "在哪里", "[wer]"],
		["again", "再一次,又一次", "[əˈɡen]"],
	],
	
	"阅读Week1-2": [
		["tree","树",""],
		["grass","草",""],
		["leaf","树叶",""],
		["garden","花园",""],
		["ant","蚂蚁",""],
		["some","一些",""],
		["all","全部,所有",""],
		["lots of","非常多的",""],
	],
	
	"阅读Week1-3": [
		["love","爱",""],
		["toy","玩具",""],
		["gift","礼物",""],
		["old","年老的,旧的",""],
		["young","年轻的",""],
		["poor","穷的,可怜的",""],
		["rich","富有的",""],
		["good","好的",""],
		["better","更好的",""],
		["best","最好的",""],
		["very","非常",""],
		["much","许多的",""],
	],
	
	"阅读Week1-4": [
		["hen","母鸡;雌禽","[hen]"],
		["cock","公鸡;雄禽","[kɒk]"],
		["ready", "准备好；最好...的准备", "[ˈredi]"],
		["go", "去,走", "[ɡoʊ]"],
		["come", "来,来到,到达", "[kʌm]"],
		["plane", "飞机", "[pleɪn]"],
		["fly", "飞；苍蝇", "[flaɪ]"],
		["fast", "快的,迅速的", "[fæst]"],
		["slow","慢的","[sloʊ]"],
		["rain", "雨,雨水；下雨", "[reɪn]"],
		["wind", "风", "[wɪnd]"],
		["snow", "雪,雪花,积雪；下雪", "[snoʊ]"],
		["web", "网,网状物", "[web]"],
		["get ready to...","准备好做...",""],
		["He gets ready to go.","他准备好出发了。",""],
		["get on","登上",""],
		["get on a bus","登上一辆公交车",""],
	],
	
	"阅读Week1-5": [
		["lake","湖;湖泊","[leɪk]"],
		["skate","(通常指)滑冰，溜冰;滑(滑板)","[skeɪt]"],
		["go home","回家","[ɡoʊ hoʊm]"],
		["bank","银行","[bæŋk]"],
	],
	
	"阅读Week2-1": [
		["cow","母牛","[kaʊ]"],
		["road","路;道路;公路;","[roʊd]"],
		["farmer","农场主;农民","[?fɑ?rm?r]"],
		["farm","n.农场;农舍; v.务农;","[fɑːrm]"],
		["take","v.携带;拿走;取走;运走;带去;","[teɪk]"],
		["happy","adj.快乐的;高兴的;","[ˈhæpi]"],
		["sad","adj.悲哀的;难过的;","[sæd]"],
		
		["get out of","摆脱;逃避",""],
		["Look out! A truck's coming! Get out of the way.","车来了，快闪开！",""],
	],
	
	"句子":[
		
		["This way please.","这边请。请这边走。",""],
		["Don't go back.","不要回去。",""],
		
		["A:Nice to meet you. B:Nice to meet you, too.", "A:很高兴认识你。B:也很高兴认识你。", ""],
		["Nice to see you again.", "很高兴又见到你。", ""],
		["We are friends.", "我们是朋友。", ""],
		["She's my friend.", "她是我的朋友。", ""],
		["You are my friend.", "你是我的朋友。", ""],
		["I'm your friend.", "我是你的朋友。", ""],
		["She's the teacher.", "她是老师。", ""],
		["He's the student.", "他是学生。", ""],
		["Welcome back!", "欢迎回来！", ""],
		
		["He finishes his work at five o'clock.", "他五点下班。", ""],
		["He finishes class at five o'clock.", "他五点下课。", ""],
		["His nationnality is Chinese", "他的国籍是中国。", ""],

		// refer to https://wenku.baidu.com/view/8dfb48d577c66137ee06eff9aef8941ea76e4bb3.html (this is good)
		["A:How do you do? B:How do you do?","A:你好吗？B:你好吗？","",""],
		["A:How are you? B:I'm fine, thank you.","A:你好吗？B:我很好，谢谢。","",""],
		["A:How is your mother? B:She's fine, thanks.","A:你妈妈好吗？B:她很好，谢谢。","",""],
		["A:Thank you. B:You are welcome.","A:谢谢。B:别客气。","",""],
		["A:Sorry. B:It doesn't matter.","A:对不起。B:不要紧。","",""],
		["A:What's that？B:It's a desk.","A:那是什么？B:那是张桌子。","",""],
		["A:What are these? B:These are apples.","A:这些是什么？B:这些是苹果。","",""],
		
	],
	
	"其他":[
		["try","v.试图;想要;设法;努力;n.尝试;试图;努力;","[traɪ]",""],
		["fire","n.火；v.开火，射击","[ˈfaɪər]",""],
		["king","君主，国王","[kɪŋ]",""],
		["start","开始,启动；开头","[stɑːrt]"],
		["end","结局；结束,终止","[end]"],
		["stop","(使)停止；终止,停留,车站","[stɑːp]"],
		["do","做,行动,办（某事）","[duː]"],
		["some","一些,部分","[sʌm]"],
		["bag","包",""],
		["book","书",""],
		["box","盒子",""],
		["bread","面包",""],
		["funny","滑稽的,可笑的",""],
		["your","你的,你们的",""],
		["zoo","动物园",""],
		["please","请",""],
		["sun","太阳",""],
		["moon","月亮",""],
		["star","星星",""],
		["moon walk","月球漫步;太空舞步",""],
		["Let's go for a walk！","让我们去散步吧！",""],
		["We walk back to home.","我们走回家。",""],
		["hard","难的,困难的",""],
		["easy","容易的",""],
		["so","太,非常",""],
		["It is so easy!","这太容易了！",""],
		["It is so hard!","这太难了！",""],
		["Congratulations！","恭喜！",""],
		["bad","坏的",""],
		["welcome","欢迎；受欢迎的",""],
		["beautiful","",""],
		["pretty","",""],
		["nice","",""],
	],
	
};

not_learned = {
	
	"句式": [
		// 参考 https://wenku.baidu.com/view/9226f88adf80d4d8d15abe23482fb4daa58d1daf.html
		
		["There is a boat in the river.","河里有条船。","","There+be+主语+地点状语/时间状语"],
		["What's wrong with our watch?","","","What's wrong with+sb./sth.?"],
		["How do you like China?","你觉得中国怎么样？","","How do you like...?"],
		["What do you like about China?","你喜欢中国什么？","","What do you like about...?"],
		["You'd better ask that policeman over there.","你最好去问问那边的那个警察。","","had better(not)+动词原形"],
		["How cold it is today!","今天多冷啊！","","How+adj./adv.+主语+谓语!"],
		["What a fine picture it is!","多美的一幅图画呀！","","What+a/an+adj.+n.+主语+谓语!"],
		["Thank you for coming to see me.","感谢你来看我。","","Thank+sb.+for (doing) sth."],
		["As soon as I see him, I'll give him the message.","我一见到他，我就把你的消息告诉他。","","... as soon as ...."],
		["I was so tired that I didn't want to speak.","我累得连话也不想说了。","","...so+adj./adv.+that..."],
		["This afternoon I'm going to buy a English book.","今天下午我要去买本英语书。","","be going to"],
		["Welcome back to school!","欢迎回到学校！","","Welcome (back) to..."],
		["We're going to have fun learning and speaking English this term.","这学期我们将兴味盎然地学习和讲英语。","","have fun doing"],
		["They have nothing to do everyday.","他们每天无所事事。","","have nothing to do"],
		["There is a shop between the hospital and the school.","在那家医院和那所学校之间有一家商店。","","between...and..."],
		["What's the weather like in spring in your hometown?","在你们家乡春天天气怎么样？","","What’s the weather like...?"],
		["There was no time to think.","没有时间思考。","","There is no time to do"],
		["I have no time to go home for lunch.","我没有时间回家吃午饭。","","have no time to do"],
		["Help yourself to some some fish.","吃鱼吧。","","Help oneself to..."],
		["I borrowed a English book from him.","我从他那借了一本英语书。","","borrow...from "],
		["He lent me a story book.","他借了本故事书给我。","","lend sb. sth."],
		["He lent a story book to me.","他借了本故事书给我。","","lend sth. to sb."],
		["I hope to see him as soon as possible.","我希望能尽快见到他。","","...as...as possible"],
		["He ran here as fast as he could.","他尽最大努力跑到这儿。","","...as...as sb. can"],
		["It's said that one of the most dangerous shark is the Great White Shark.","据说最危险的鲨鱼之一是大白鲨。","","It's said that..."],
		["Put the tree in the hole so that it is straight.","把树放入洞穴中，让它立直。","","...so that..."],
		["With Tom's help, I've come to America to study further.","在汤姆的帮助下，我来美国深造。","","with one's help..."],
		["I don't think any of them is interesting.","我认为他们中任何一个都无趣。","","I don't think..."],
	],
};
