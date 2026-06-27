// QiQi Yến Sào — bilingual catalog content (Vietnamese + Chinese).
// Source of truth for the generated catalog. Edit here, then run `node build.mjs`.

export const site = {
  domain: 'qiqiyensao.com',
  phoneVN: '+84 762 936 286',
  phoneCN: '+86 181 2323 4794',
  productFooter: {
    vi: 'QiQi Yến Sào  ·  Hotline +84 762 936 286  ·  qiqiyensao.com',
    cn: 'QiQi 燕窝  ·  热线 +84 762 936 286  ·  qiqiyensao.com',
  },
};

// ── Cover ────────────────────────────────────────────────────────────────
export const cover = {
  vi: {
    kicker: 'CATALOG SẢN PHẨM YẾN SÀO',
    title: 'Báo Giá',
    bullets: [
      'Nhà máy sản xuất yến sào · có giấy chứng nhận',
      'Sản phẩm đạt tiêu chuẩn xuất khẩu',
      'Nhận đơn hàng số lượng lớn',
    ],
    tagline: 'Trao sức khỏe, gửi trọn yêu thương',
    ribbon: 'ĐẶT HÀNG SỐ LƯỢNG LỚN · XUẤT KHẨU · 大量订购 · 可出口',
    footer: 'QiQi Yến Sào · Nhà máy yến sào Việt Nam · qiqiyensao.com',
  },
  cn: {
    kicker: '燕窝产品目录',
    title: '报价单',
    bullets: [
      '燕窝生产工厂 · 具备生产证书',
      '产品达到出口标准',
      '承接大批量订单',
    ],
    tagline: '传递健康 · 满载关爱',
    ribbon: '大量订购 · 支持出口 · 工厂直供',
    footer: 'QiQi 燕窝 · 越南燕窝工厂 · qiqiyensao.com',
  },
};

// ── Letter & Introduction (with certifications) ────────────────────────────
export const intro = {
  vi: {
    kicker: 'QIQI YẾN SÀO',
    letterTitle: 'Thư Ngỏ',
    salutation: 'Kính gửi Quý đối tác,',
    letterBody:
      'Mỗi tổ yến là kết tinh của thiên nhiên và tâm huyết của người làm nghề. Tại QiQi Yến, chúng tôi tin rằng sức khỏe là món quà ý nghĩa nhất — nên mỗi sản phẩm gửi đi đều mang theo sự chuẩn mực, an toàn và trọn vẹn yêu thương, để cùng Quý đối tác đưa tinh hoa yến sào Việt Nam vươn xa.',
    introTitle: 'Giới Thiệu',
    introBody:
      'Công ty TNHH Thương mại và Đầu tư Phát triển Phúc Thịnh, với thương hiệu QiQi Yến, tự hào là đơn vị tiên phong trong ngành yến sào Việt Nam, cam kết mang đến những sản phẩm chất lượng cao, đảm bảo sức khỏe người tiêu dùng.',
    certLabel: 'CHỨNG NHẬN',
    footer:
      'CÔNG TY TNHH TM ĐT PT PHÚC THỊNH  ·  Thương hiệu QiQi Yến  ·  MST 0202247835  ·  qiqiyensao.com',
  },
  cn: {
    kicker: 'QIQI 燕窝',
    letterTitle: '致合作伙伴',
    salutation: '尊敬的合作伙伴：',
    letterBody:
      '每一盏燕窝，都是大自然的馈赠与匠心的凝聚。在 QiQi 燕窝，我们坚信健康是最珍贵的礼物——每一份产品都承载着严谨、安全与满满关爱。愿与您携手，让越南燕窝的精华走向世界，把这份美好送到更多人身边。',
    introTitle: '公司简介',
    introBody:
      '福盛贸易投资发展有限公司，旗下品牌 QiQi 燕窝，自豪地成为越南燕窝行业的先行者，致力于提供高品质产品，保障消费者健康。',
    certLabel: '资质认证',
    footer: '福盛贸易投资发展有限公司  ·  QiQi 燕窝  ·  税号 0202247835  ·  qiqiyensao.com',
  },
  certs: [
    { img: 'cert-fda.jpg', w: 226, boxW: 238, vi: 'Chứng nhận FDA (Hoa Kỳ)', cn: '美国 FDA 注册认证' },
    { img: 'cert-top10.jpg', w: 206, boxW: 218, vi: 'Top 10 Thương hiệu Uy tín Quốc gia 2024', cn: '2024 年越南国家信誉十大品牌' },
    { img: 'cert-cn.jpg', w: 205, boxW: 217, vi: 'Chứng nhận chất lượng (Trung Quốc)', cn: '中国产品质量检验报告' },
  ],
};

// ── Table of contents ──────────────────────────────────────────────────────
export const toc = {
  vi: {
    kicker: 'QIQI YẾN SÀO',
    title: 'Mục Lục',
    subtitle: 'Danh mục sản phẩm yến sào',
    items: [
      { no: '01', name: 'Yến Thô', desc: 'Tổ yến nguyên chất, sơ chế tự nhiên, giữ trọn dưỡng chất' },
      { no: '02', name: 'Yến Tinh Chế', desc: 'Làm sạch lông thủ công, định hình tinh tế' },
      { no: '03', name: 'Yến Chưng Sẵn', desc: 'Yến chưng đường phèn, tiện lợi dùng ngay' },
      { no: '04', name: 'Hộp Quà Yến', desc: 'Hộp quà yến sang trọng, lý tưởng để biếu tặng đối tác' },
    ],
    footer: 'QiQi Yến Sào  ·  Trao sức khỏe, gửi trọn yêu thương  ·  qiqiyensao.com',
  },
  cn: {
    kicker: 'QIQI 燕窝',
    title: '目录',
    subtitle: '燕窝产品分类',
    items: [
      { no: '01', name: '原盏燕窝', desc: '天然原盏，自然初加工，营养完整' },
      { no: '02', name: '精制燕窝', desc: '手工挑毛，精致定形' },
      { no: '03', name: '即食燕窝', desc: '冰糖炖制，开瓶即食' },
      { no: '04', name: '燕窝礼盒', desc: '高档礼盒，馈赠佳选' },
    ],
    footer: 'QiQi 燕窝  ·  传递健康，满载关爱  ·  qiqiyensao.com',
  },
};

// ── Products (pages 4–11) ──────────────────────────────────────────────────
// media: { type:'gallery', hero, heroPos?, thumbs:[{img,pos?}] } or { type:'single', img }
export const products = [
  {
    id: 'yen-tho',
    media: { type: 'gallery', hero: 'yentho-3.jpg', thumbs: [{ img: 'yentho-1.jpg' }, { img: 'yentho-2.jpg' }] },
    vi: {
      kicker: 'SẢN PHẨM 01 · YẾN SÀO NGUYÊN BẢN',
      title: 'Yến Thô', titleSize: 46,
      subtitle: '100% thiên nhiên nguyên chất · 4.9/5 (148 đánh giá)',
      desc: 'Dòng sản phẩm nguyên bản nhất từ thiên nhiên, giữ trọn trạng thái tổ chim nguyên thủy, chưa qua sơ chế nhặt lông. Bề mặt trắng tự nhiên xen lẫn lông yến, mang mùi thơm đặc trưng — lý tưởng cho khách hàng muốn tự tay làm sạch và chế biến yến nguyên chất.',
      nutriLabel: 'GIÁ TRỊ DINH DƯỠNG',
      nutrition: [
        { v: '≥ 48%', l: 'Hàm lượng Protein' }, { v: '44–52 g', l: 'Acid Amin / 100g' },
        { v: '≥ 5,0%', l: 'Sialic Acid' }, { v: '≤ 20%', l: 'Độ ẩm đạt chuẩn' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người sành yến, muốn thưởng thức vị nguyên bản, dai giòn tự nhiên',
        'Nội trợ tỉ mỉ, muốn tự tay nhặt lông làm sạch để an tâm tuyệt đối',
        'Quà biếu sức khỏe ý nghĩa cho người thân và đối tác',
      ],
      specLabel: 'QUY CÁCH', spec: '100g',
      priceLabel: 'ĐƠN GIÁ', price: '2.000.000 ₫',
    },
    cn: {
      kicker: '产品 01 · 天然原盏燕窝',
      title: '原盏燕窝', titleSize: 44,
      subtitle: '100% 纯天然原盏 · 4.9/5（148 条评价）',
      desc: '最天然、最原始的产品，完整保留鸟巢原始形态，未经挑毛加工。表面呈天然白色、间杂燕毛黑色，带有浓郁的天然燕窝香味——非常适合愿意亲手清洗、烹制纯正燕窝的懂行顾客。',
      nutriLabel: '营养价值',
      nutrition: [
        { v: '≥ 48%', l: '蛋白质含量' }, { v: '44–52 g', l: '氨基酸 / 100g' },
        { v: '≥ 5,0%', l: '唾液酸' }, { v: '≤ 20%', l: '标准水分' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '懂行的燕窝爱好者，追求原始、有嚼劲的天然口感',
        '注重细节的家庭主妇，愿意亲手挑毛、清洗，安心放心',
        '馈赠亲友与合作伙伴的健康好礼',
      ],
      specLabel: '规格', spec: '100g',
      priceLabel: '价格', price: '2.000.000 ₫',
    },
  },
  {
    id: 'yen-rut-long',
    media: { type: 'single', img: 'rutlong-box.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 02 · YẾN TINH CHẾ',
      title: 'Yến Rút Lông Nước', titleSize: 43,
      subtitle: 'Làm sạch lông bằng nước · 4.9/5 (153 đánh giá)',
      desc: 'Dòng sản phẩm tiện lợi nhất cho người bận rộn. Tổ yến đã được nhặt sạch lông và tạp chất tỉ mỉ, giữ nguyên hình tổ chim đan kết đẹp mắt, màu trắng tự nhiên — chỉ cần ngâm nở và chưng ngay, không mất công làm sạch.',
      nutriLabel: 'GIÁ TRỊ DINH DƯỠNG',
      nutrition: [
        { v: '≥ 40%', l: 'Hàm lượng Protein' }, { v: '46–50 g', l: 'Acid Amin / 100g' },
        { v: '≥ 5,0%', l: 'Sialic Acid' }, { v: '≤ 15%', l: 'Độ ẩm đạt chuẩn' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người bận rộn, doanh nhân muốn tự chưng yến mà không tốn công nhặt lông',
        'Phụ nữ mang thai, trẻ em, người lớn tuổi cần bồi bổ thường xuyên',
        'Quà biếu sức khỏe sang trọng, tinh tế cho đối tác và người thân',
      ],
      specLabel: 'QUY CÁCH', spec: '100g',
      priceLabel: 'ĐƠN GIÁ', price: '3.400.000 ₫',
    },
    cn: {
      kicker: '产品 02 · 精制燕窝',
      title: '水拔毛燕窝', titleSize: 42,
      subtitle: '水中挑毛清洗 · 4.9/5（153 条评价）',
      desc: '最便捷的产品，专为忙碌人群设计。天然燕窝经精细挑毛、去除杂质，完整保留鸟巢交织的优美形态与天然白色——无需清洗，泡发后即可炖煮。',
      nutriLabel: '营养价值',
      nutrition: [
        { v: '≥ 40%', l: '蛋白质含量' }, { v: '46–50 g', l: '氨基酸 / 100g' },
        { v: '≥ 5,0%', l: '唾液酸' }, { v: '≤ 15%', l: '标准水分' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '忙碌的上班族、商务人士，想亲手炖燕窝又无需挑毛',
        '孕妇、儿童与长辈，需要经常补充营养',
        '馈赠合作伙伴与亲友的高档健康好礼',
      ],
      specLabel: '规格', spec: '100g',
      priceLabel: '价格', price: '3.400.000 ₫',
    },
  },
  {
    id: 'yen-tinh-che',
    media: { type: 'single', img: 'tinhche-box.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 02 · YẾN TINH CHẾ',
      title: 'Yến Tinh Chế', titleSize: 46,
      subtitle: 'Sấy lạnh, sạch tinh khiết · 4.9/5 (174 đánh giá)',
      desc: 'Tổ yến thiên nhiên làm sạch hoàn toàn, cam kết không tạp chất khi soi kính hiển vi. Giữ trọn hình tổ chim đan kết, màu trắng tự nhiên, sấy lạnh giữ dưỡng chất — ngâm nở và chưng ngay, tiện lợi cho người bận rộn.',
      nutriLabel: 'GIÁ TRỊ DINH DƯỠNG',
      nutrition: [
        { v: '≥ 40%', l: 'Protein (tới 54,8%)' }, { v: '46–50 g', l: 'Acid Amin / 100g' },
        { v: '≥ 5,0%', l: 'Sialic Acid' }, { v: '≤ 15%', l: 'Độ ẩm (sấy lạnh)' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Doanh nhân, dân văn phòng bận rộn muốn tự chưng yến mà không tốn công nhặt lông',
        'Phụ nữ mang thai, trẻ em, người ốm và người lớn tuổi cần phục hồi thể trạng',
        'Quà biếu sức khỏe sang trọng, thiết thực cho đối tác và khách hàng',
      ],
      specLabel: 'QUY CÁCH', spec: '100g',
      priceLabel: 'ĐƠN GIÁ', price: '3.100.000 ₫',
    },
    cn: {
      kicker: '产品 02 · 精制燕窝',
      title: '精制燕窝', titleSize: 44,
      subtitle: '低温冷干，纯净无杂质 · 4.9/5（174 条评价）',
      desc: '天然燕窝彻底清洗，显微镜下检测不出杂质。完整保留鸟巢交织形态、天然白色，低温冷干锁住营养——泡发后即可炖煮，方便忙碌人群。',
      nutriLabel: '营养价值',
      nutrition: [
        { v: '≥ 40%', l: '蛋白质（高达54.8%）' }, { v: '46–50 g', l: '氨基酸 / 100g' },
        { v: '≥ 5,0%', l: '唾液酸' }, { v: '≤ 15%', l: '水分（低温冷干）' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '忙碌的商务人士、上班族，想亲手炖燕窝又无需挑毛',
        '孕妇、儿童、病后及长辈，需要恢复体力',
        '馈赠合作伙伴与客户的高档实用健康好礼',
      ],
      specLabel: '规格', spec: '100g',
      priceLabel: '价格', price: '3.100.000 ₫',
    },
  },
  {
    id: 'yen-sam-duong-kieng',
    media: { type: 'single', img: 'yensam-dk-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Sâm Đông Trùng Đường Kiêng', titleSize: 35,
      subtitle: 'Đường ăn kiêng Isomalt · an toàn đường huyết · 4.8/5 (143)',
      desc: 'Giải pháp bồi bổ thượng hạng cho người cần kiểm soát đường huyết. Thay đường phèn bằng đường ăn kiêng Isomalt, tăng cường 7% đông trùng hạ thảo và 2% hồng sâm thật. Nước yến nâu vàng, đượm hương thảo dược — chỉ 9 kcal/100g, không chất béo, an toàn cho người tiểu đường.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '2g', l: 'Tổ yến' }, { v: '7%', l: 'Đông trùng hạ thảo' },
        { v: '2%', l: 'Hồng sâm thật' }, { v: '9 kcal', l: 'Năng lượng / 100g' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người tiểu đường, tiền tiểu đường cần bồi bổ an toàn',
        'Người ăn kiêng, siết cân, kiểm soát calo nghiêm ngặt',
        'Người lớn tuổi có huyết áp, tim mạch cần phục hồi sinh lực',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 75ml · Lốc 5 / 6 / 7 lọ',
      priceLabel: 'ĐƠN GIÁ', price: '33.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '无糖燕窝参虫草', titleSize: 42,
      subtitle: '无糖代糖配方（Isomalt） · 4.8/5（143 条评价）',
      desc: '为需要严格控糖人群研制的高端滋补饮品。以 Isomalt 代糖取代冰糖，强化添加 7% 冬虫夏草与 2% 真红参。燕窝呈天然棕黄色、草本香浓——每 100g 仅 9 千卡、零脂肪，糖尿病人也安心。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '2g', l: '燕窝含量' }, { v: '7%', l: '冬虫夏草' },
        { v: '2%', l: '真红参' }, { v: '9 kcal', l: '热量 / 100g' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '糖尿病、糖尿病前期人群，需安全滋补',
        '节食控重、严格控制热量摄入者',
        '患高血压、心血管疾病的长辈，需恢复体力',
      ],
      specLabel: '规格', spec: '玻璃瓶 75ml · 5 / 6 / 7 瓶礼盒',
      priceLabel: '价格', price: '33.000 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'hoang-yen',
    media: { type: 'single', img: 'hoangyen-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Hoàng Yến Đông Trùng', titleSize: 41,
      subtitle: 'Hàm lượng tổ yến đến 50% · Sâm · Đông trùng · 5.0/5 (147)',
      desc: 'Phiên bản hoàng kim với hàm lượng tổ yến lên đến 50%, kết hợp đông trùng hạ thảo và hồng sâm. Bồi bổ cơ thể toàn diện, tăng cường thể lực và nâng cao sức đề kháng. Dùng trực tiếp, ngon hơn khi ướp lạnh.',
      nutriLabel: 'THÀNH PHẦN & QUY CÁCH',
      nutrition: [
        { v: '4g', l: 'Hàm lượng tổ yến' }, { v: '1%', l: 'Hồng sâm thật' },
        { v: '150ml', l: 'Thể tích thực' }, { v: '24', l: 'Tháng hạn dùng' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người cần bồi bổ toàn diện, phục hồi thể lực nhanh',
        'Người mới ốm dậy, suy nhược, cần tăng sức đề kháng',
        'Quà biếu cao cấp cho đối tác và người thân yêu',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 150ml · Hộp quà 10 lọ',
      priceLabel: 'ĐƠN GIÁ', price: '70.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '皇燕参虫草', titleSize: 42,
      subtitle: '燕窝含量高达 50% · 人参 · 冬虫夏草 · 5.0/5（147）',
      desc: '皇金版本，燕窝含量高达 50%，搭配冬虫夏草与红参。全面滋补身体、增强体力、提升免疫力。可直接饮用，冷藏后风味更佳。',
      nutriLabel: '成分与规格',
      nutrition: [
        { v: '4g', l: '燕窝含量' }, { v: '1%', l: '真红参' },
        { v: '150ml', l: '净含量' }, { v: '24', l: '个月保质期' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '需全面滋补、快速恢复体力的人群',
        '病后初愈、体质虚弱者，需增强免疫力',
        '馈赠合作伙伴与亲友的高档好礼',
      ],
      specLabel: '规格', spec: '玻璃瓶 150ml · 10 瓶礼盒',
      priceLabel: '价格', price: '70.000 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'duong-kieng',
    media: { type: 'single', img: 'duongkieng-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Chưng Đường Kiêng', titleSize: 42,
      subtitle: 'Công thức 3 KHÔNG: không đường · không béo · ít calo · 4.9/5 (116)',
      desc: 'Giữ trọn vị thanh mát của yến sào truyền thống với công thức đường ăn kiêng chuyên biệt — calo siêu thấp (1 kcal/100g), hoàn toàn không đường. "Món quà vô giá từ thiên nhiên" cho người tiểu đường, giảm cân và kiểm soát đường huyết khắt khe.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '2g', l: 'Tổ yến khô / hũ' }, { v: '1 kcal', l: 'Năng lượng / 100g' },
        { v: '0g', l: 'Đường (không đường)' }, { v: '0g', l: 'Chất béo' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người tiểu đường hoặc có nguy cơ tiểu đường cần bồi bổ an toàn',
        'Người đang ăn kiêng, giảm cân, siết mỡ',
        'Người lớn tuổi cần ổn định đường huyết, phòng ngừa tim mạch',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 70ml · Lốc 6 lọ (420ml)',
      priceLabel: 'ĐƠN GIÁ', price: '28.800 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '无糖燕窝', titleSize: 44,
      subtitle: '三无配方：无糖 · 无脂 · 超低热量 · 4.9/5（116）',
      desc: '保留传统燕窝的清润口感，采用专用代糖配方——每 100g 仅 1 千卡、完全无糖。"大自然的无价之礼"，专为糖尿病、减重及需严格控糖人群打造。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '2g', l: '干燕窝 / 瓶' }, { v: '1 kcal', l: '热量 / 100g' },
        { v: '0g', l: '糖分（无糖）' }, { v: '0g', l: '脂肪' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '糖尿病或糖尿病高危人群，需安全滋补',
        '正在节食、减重、控脂的人群',
        '需稳定血糖、预防心血管疾病的长辈',
      ],
      specLabel: '规格', spec: '玻璃瓶 70ml · 6 瓶装（420ml）',
      priceLabel: '价格', price: '28.800 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'duong-phen',
    media: { type: 'single', img: 'duongphen-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Chưng Đường Phèn', titleSize: 42,
      subtitle: 'Hương vị truyền thống · dễ dùng mọi lứa tuổi · 4.9/5 (117)',
      desc: 'Dòng yến chưng truyền thống, nguyên bản nhất — 2g tổ yến khô kết hợp 10,6% đường phèn thanh mát. Dạng sệt, màu trắng đục đặc trưng, vị ngọt dịu thanh, giúp giải nhiệt, bồi bổ và phục hồi sinh lực cho cả gia đình.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '2g', l: 'Tổ yến khô / hũ' }, { v: '~29 kcal', l: 'Năng lượng / 100g' },
        { v: '10,6%', l: 'Đường phèn' }, { v: '0g', l: 'Chất béo' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Trẻ em cần bổ sung dinh dưỡng, tăng cường sức đề kháng',
        'Người bận rộn cần thức uống bồi bổ, phục hồi sinh lực tức thì',
        'Người lớn tuổi cần bồi dưỡng cơ thể hàng ngày',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 70ml · Lốc 6 lọ (420ml)',
      priceLabel: 'ĐƠN GIÁ', price: '28.800 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '冰糖燕窝', titleSize: 44,
      subtitle: '传统口味 · 老少皆宜 · 4.9/5（117）',
      desc: '最传统、最原味的即食燕窝——2g 干燕窝搭配 10.6% 清润冰糖。质地浓稠、燕丝饱满，呈天然乳白色，甜而不腻、回味清甜，清热润燥、滋补养生，适合全家日常享用。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '2g', l: '干燕窝 / 瓶' }, { v: '~29 kcal', l: '热量 / 100g' },
        { v: '10.6%', l: '冰糖' }, { v: '0g', l: '脂肪' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '需补充营养、增强抵抗力的儿童',
        '忙碌人群，需即时滋补、恢复精力',
        '需日常调养身体的长辈',
      ],
      specLabel: '规格', spec: '玻璃瓶 70ml · 6 瓶装（420ml）',
      priceLabel: '价格', price: '28.800 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'yen-sam-dt',
    media: { type: 'single', img: 'yensam-dt-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Sâm Đông Trùng', titleSize: 42,
      subtitle: 'Bộ ba Yến · Sâm · Đông trùng · 4.9/5 (128 đánh giá)',
      desc: '"Món quà vô giá từ thiên nhiên" — hòa quyện đại bổ giữa 35% tổ yến cùng đông trùng hạ thảo và hồng sâm thật. Nước yến dạng sệt, màu vàng cam, hương thảo dược đặc trưng, vị ngọt thanh từ đường phèn, hậu vị mát dịu.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '35%', l: 'Hàm lượng tổ yến' }, { v: '2%', l: 'Đông trùng hạ thảo' },
        { v: '1%', l: 'Hồng sâm thật' }, { v: '0g', l: 'Chất béo' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người lớn tuổi cần bồi bổ, tăng cường trí nhớ và sức đề kháng',
        'Người mới ốm dậy, cần phục hồi thể trạng sau phẫu thuật',
        'Người làm việc trí óc cường độ cao, dễ căng thẳng, suy nhược',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 70ml · Lốc 6 lọ (420ml)',
      priceLabel: 'ĐƠN GIÁ', price: '33.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '燕窝参虫草', titleSize: 44,
      subtitle: '燕窝 · 人参 · 冬虫夏草 · 4.9/5（128 条评价）',
      desc: '"大自然的无价之礼"——35% 燕窝与冬虫夏草、真红参的滋补融合。质地浓稠，呈金黄橙色，草本芳香浓郁，冰糖清甜、回味清润。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '35%', l: '燕窝含量' }, { v: '2%', l: '冬虫夏草' },
        { v: '1%', l: '真红参' }, { v: '0g', l: '脂肪' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '需滋补、增强记忆与免疫力的长辈',
        '病后初愈、术后需恢复体力者',
        '高强度脑力工作、易疲劳人群',
      ],
      specLabel: '规格', spec: '玻璃瓶 70ml · 6 瓶装（420ml）',
      priceLabel: '价格', price: '33.000 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'duong-phen-150',
    media: { type: 'single', img: 'duongphen-150-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Chưng Đường Phèn 150ml', titleSize: 33,
      subtitle: 'Lọ lớn 150ml · hương vị truyền thống · tiện dùng cả nhà',
      desc: 'Phiên bản lọ lớn 150ml của dòng yến chưng truyền thống — tổ yến tươi kết hợp đường phèn thanh mát. Dạng sệt, màu trắng đục đặc trưng, vị ngọt dịu thanh, giúp giải nhiệt, bồi bổ và phục hồi sinh lực, lý tưởng dùng chung cho cả gia đình.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '2g', l: 'Yến tươi / lọ' }, { v: '~29 kcal', l: 'Năng lượng / 100g' },
        { v: '150ml', l: 'Thể tích thực' }, { v: '0g', l: 'Chất béo' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Gia đình muốn dùng chung lọ lớn, tiết kiệm hơn lọ nhỏ',
        'Người bận rộn cần thức uống bồi bổ, phục hồi sinh lực tức thì',
        'Người lớn tuổi cần bồi dưỡng cơ thể hàng ngày',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 150ml · Lốc 6 lọ',
      priceLabel: 'ĐƠN GIÁ', price: '45.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '冰糖燕窝 150ml', titleSize: 40,
      subtitle: '大瓶 150ml · 传统口味 · 全家共享',
      desc: '传统冰糖燕窝的大瓶 150ml 版本——鲜炖燕窝搭配清润冰糖，质地浓稠、呈天然乳白色，甜而不腻、回味清甜，清热润燥、滋补养生，适合全家日常享用。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '2g', l: '鲜燕窝 / 瓶' }, { v: '~29 kcal', l: '热量 / 100g' },
        { v: '150ml', l: '净含量' }, { v: '0g', l: '脂肪' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '希望大瓶共享、更实惠的家庭',
        '忙碌人群，需即时滋补、恢复精力',
        '需日常调养身体的长辈',
      ],
      specLabel: '规格', spec: '玻璃瓶 150ml · 6 瓶装',
      priceLabel: '价格', price: '45.000 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'yen-sam-dk-150',
    media: { type: 'single', img: 'yensam-dk-150-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Sâm Đông Trùng Đường Kiêng 150ml', titleSize: 28,
      subtitle: 'Lọ lớn 150ml · đường ăn kiêng Isomalt · an toàn đường huyết',
      desc: 'Phiên bản lọ lớn 150ml cho người cần kiểm soát đường huyết. Dùng đường ăn kiêng Isomalt thay đường phèn, bổ sung đông trùng hạ thảo và đẳng sâm. Nước yến thơm hương thảo dược, chỉ 9 kcal/100g, không chất béo — an toàn cho người tiểu đường và đang ăn kiêng.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '9 kcal', l: 'Năng lượng / 100g' }, { v: '2g', l: 'Đông trùng hạ thảo' },
        { v: '2g', l: 'Đẳng sâm' }, { v: '150ml', l: 'Thể tích thực' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người tiểu đường, tiền tiểu đường cần bồi bổ an toàn',
        'Người ăn kiêng, siết cân, kiểm soát calo nghiêm ngặt',
        'Người lớn tuổi có huyết áp, tim mạch cần phục hồi sinh lực',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 150ml · Lốc 6 lọ',
      priceLabel: 'ĐƠN GIÁ', price: '48.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '无糖燕窝参虫草 150ml', titleSize: 35,
      subtitle: '大瓶 150ml · Isomalt 代糖 · 控糖安心',
      desc: '为控糖人群打造的大瓶 150ml 版本。以 Isomalt 代糖取代冰糖，强化添加冬虫夏草与党参，草本香浓——每 100g 仅 9 千卡、零脂肪，糖尿病人与节食人群皆可安心享用。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '9 kcal', l: '热量 / 100g' }, { v: '2g', l: '冬虫夏草' },
        { v: '2g', l: '党参' }, { v: '150ml', l: '净含量' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '糖尿病、糖尿病前期人群，需安全滋补',
        '节食控重、严格控制热量摄入者',
        '患高血压、心血管疾病的长辈，需恢复体力',
      ],
      specLabel: '规格', spec: '玻璃瓶 150ml · 6 瓶装',
      priceLabel: '价格', price: '48.000 ₫', priceUnit: '/瓶',
    },
  },
  {
    id: 'yen-chung-dt',
    media: { type: 'single', img: 'yenchung-dongtrung-jar.jpg' },
    vi: {
      kicker: 'SẢN PHẨM 03 · YẾN CHƯNG SẴN',
      title: 'Yến Chưng Đông Trùng Hạ Thảo', titleSize: 33,
      subtitle: 'Hàm lượng tổ yến 30% · Đông trùng hạ thảo · Lọ 70ml',
      desc: 'Yến chưng với hàm lượng tổ yến lên đến 30%, kết hợp đông trùng hạ thảo và đường phèn thanh mát. Bồi bổ cơ thể, tăng cường sinh lực và nâng cao sức đề kháng — dùng trực tiếp tiện lợi, ngon hơn khi ướp lạnh.',
      nutriLabel: 'THÀNH PHẦN & DINH DƯỠNG',
      nutrition: [
        { v: '2g', l: 'Hàm lượng tổ yến' }, { v: '~34 kcal', l: 'Năng lượng / 100g' },
        { v: '70ml', l: 'Thể tích thực' }, { v: '0g', l: 'Chất béo' },
      ],
      suitableLabel: 'PHÙ HỢP VỚI',
      suitable: [
        'Người cần bồi bổ, tăng cường sinh lực và sức đề kháng',
        'Người mới ốm dậy, suy nhược cần phục hồi thể trạng',
        'Quà biếu sức khỏe cho người thân và đối tác',
      ],
      specLabel: 'QUY CÁCH', spec: 'Lọ thủy tinh 70ml · Lốc 6 lọ',
      priceLabel: 'ĐƠN GIÁ', price: '48.000 ₫', priceUnit: '/hũ',
    },
    cn: {
      kicker: '产品 03 · 即食燕窝',
      title: '燕窝冬虫夏草', titleSize: 42,
      subtitle: '燕窝含量 30% · 冬虫夏草 · 70ml',
      desc: '燕窝含量高达 30%，搭配冬虫夏草与清润冰糖。滋补身体、增强体力与免疫力，开瓶即食，冷藏后风味更佳。',
      nutriLabel: '成分与营养',
      nutrition: [
        { v: '2g', l: '燕窝含量' }, { v: '~34 kcal', l: '热量 / 100g' },
        { v: '70ml', l: '净含量' }, { v: '0g', l: '脂肪' },
      ],
      suitableLabel: '适合人群',
      suitable: [
        '需滋补、增强体力与免疫力的人群',
        '病后初愈、体质虚弱者，需恢复体力',
        '馈赠亲友与合作伙伴的健康好礼',
      ],
      specLabel: '规格', spec: '玻璃瓶 70ml · 6 瓶装',
      priceLabel: '价格', price: '48.000 ₫', priceUnit: '/瓶',
    },
  },
];

// ── Gift boxes (pages 12–19) ───────────────────────────────────────────────
// image reuses the matching product's photo (no box photos were provided).
export const gifts = [
  {
    id: 'gift-duong-phen', image: 'gift-duongphen.jpg',
    vi: {
      title: 'Hộp Quà Đường Phèn', titleSize: 42,
      subtitle: 'Hộp quà cao cấp · Lọ thủy tinh 150ml · Yến chưng sẵn',
      nutrition: [
        { v: '2g', l: 'Tổ yến khô / hũ' }, { v: '~29 kcal', l: 'Năng lượng / 100g' },
        { v: '10,6%', l: 'Đường phèn' }, { v: '0g', l: 'Chất béo' },
      ],
      unitNote: 'Đơn giá lẻ 45.000₫/hũ',
      sets: [
        { name: 'Set 6', sub: '6 hũ × 150ml', price: '330.000 ₫' },
        { name: 'Set 8', sub: '8 hũ × 150ml', price: '416.000 ₫', featured: true },
      ],
    },
    cn: {
      title: '冰糖燕窝礼盒', titleSize: 42,
      subtitle: '高档礼盒 · 玻璃瓶 150ml · 即食燕窝',
      nutrition: [
        { v: '2g', l: '干燕窝 / 瓶' }, { v: '~29 kcal', l: '热量 / 100g' },
        { v: '10.6%', l: '冰糖' }, { v: '0g', l: '脂肪' },
      ],
      unitNote: '零售单价 45.000₫/瓶',
      sets: [
        { name: '6 瓶装', sub: '6 瓶 × 150ml', price: '330.000 ₫' },
        { name: '8 瓶装', sub: '8 瓶 × 150ml', price: '416.000 ₫', featured: true },
      ],
    },
  },
  {
    id: 'gift-duong-kieng', image: 'gift-duongkieng.jpg',
    vi: {
      title: 'Hộp Quà Đường Kiêng', titleSize: 42,
      subtitle: 'Hộp quà cao cấp · Lọ thủy tinh 70ml · Yến chưng sẵn',
      nutrition: [
        { v: '2g', l: 'Tổ yến khô / hũ' }, { v: '1 kcal', l: 'Năng lượng / 100g' },
        { v: '0g', l: 'Đường (không đường)' }, { v: '0g', l: 'Chất béo' },
      ],
      unitNote: 'Đơn giá lẻ 28.800₫/hũ',
      sets: [
        { name: 'Set 6', sub: '6 hũ × 70ml', price: '223.000 ₫' },
        { name: 'Set 10', sub: '10 hũ × 70ml', price: '383.000 ₫', featured: true },
      ],
    },
    cn: {
      title: '无糖燕窝礼盒', titleSize: 44,
      subtitle: '高档礼盒 · 玻璃瓶 70ml · 即食燕窝',
      nutrition: [
        { v: '2g', l: '干燕窝 / 瓶' }, { v: '1 kcal', l: '热量 / 100g' },
        { v: '0g', l: '糖分（无糖）' }, { v: '0g', l: '脂肪' },
      ],
      unitNote: '零售单价 28.800₫/瓶',
      sets: [
        { name: '6 瓶装', sub: '6 瓶 × 70ml', price: '223.000 ₫' },
        { name: '10 瓶装', sub: '10 瓶 × 70ml', price: '383.000 ₫', featured: true },
      ],
    },
  },
  {
    id: 'gift-yen-sam', image: null,
    vi: {
      title: 'Hộp Quà Yến Sâm Đông Trùng', titleSize: 36,
      subtitle: 'Hộp quà cao cấp · Lọ thủy tinh 70ml · Yến chưng sẵn',
      nutrition: [
        { v: '35%', l: 'Hàm lượng tổ yến' }, { v: '2%', l: 'Đông trùng hạ thảo' },
        { v: '1%', l: 'Hồng sâm thật' }, { v: '0g', l: 'Chất béo' },
      ],
      unitNote: 'Đơn giá lẻ 33.000₫/hũ',
      sets: [
        { name: 'Set 6', sub: '6 hũ × 70ml', price: '223.000 ₫' },
        { name: 'Set 10', sub: '10 hũ × 70ml', price: '383.000 ₫', featured: true },
      ],
    },
    cn: {
      title: '燕窝参虫草礼盒', titleSize: 42,
      subtitle: '高档礼盒 · 玻璃瓶 70ml · 即食燕窝',
      nutrition: [
        { v: '35%', l: '燕窝含量' }, { v: '2%', l: '冬虫夏草' },
        { v: '1%', l: '真红参' }, { v: '0g', l: '脂肪' },
      ],
      unitNote: '零售单价 33.000₫/瓶',
      sets: [
        { name: '6 瓶装', sub: '6 瓶 × 70ml', price: '223.000 ₫' },
        { name: '10 瓶装', sub: '10 瓶 × 70ml', price: '383.000 ₫', featured: true },
      ],
    },
  },
  {
    id: 'gift-sam-kieng', image: null,
    vi: {
      title: 'Hộp Quà Sâm ĐT Đường Kiêng', titleSize: 32, titleMaxWidth: 420,
      subtitle: 'Hộp quà cao cấp · Lọ thủy tinh 75ml · Đường ăn kiêng Isomalt',
      nutrition: [
        { v: '2g', l: 'Tổ yến' }, { v: '7%', l: 'Đông trùng hạ thảo' },
        { v: '2%', l: 'Hồng sâm thật' }, { v: '9 kcal', l: 'Năng lượng / 100g' },
      ],
      unitNote: 'Đơn giá lẻ 33.000₫/hũ',
      sets: [
        { name: 'Set 6', sub: '6 hũ × 75ml', price: '223.000 ₫' },
        { name: 'Set 10', sub: '10 hũ × 75ml', price: '383.000 ₫', featured: true },
      ],
    },
    cn: {
      title: '无糖燕窝参虫草礼盒', titleSize: 36,
      subtitle: '高档礼盒 · 玻璃瓶 75ml · Isomalt 代糖',
      nutrition: [
        { v: '2g', l: '燕窝含量' }, { v: '7%', l: '冬虫夏草' },
        { v: '2%', l: '真红参' }, { v: '9 kcal', l: '热量 / 100g' },
      ],
      unitNote: '零售单价 33.000₫/瓶',
      sets: [
        { name: '6 瓶装', sub: '6 瓶 × 75ml', price: '223.000 ₫' },
        { name: '10 瓶装', sub: '10 瓶 × 75ml', price: '383.000 ₫', featured: true },
      ],
    },
  },
  {
    id: 'gift-hoang-yen', image: 'gift-hoangyen.jpg',
    vi: {
      title: 'Hộp Quà Hoàng Yến Đông Trùng', titleSize: 34,
      subtitle: 'Hộp quà cao cấp · Lọ thủy tinh 150ml · Yến chưng sẵn',
      nutrition: [
        { v: '4g', l: 'Hàm lượng tổ yến' }, { v: '1%', l: 'Hồng sâm thật' },
        { v: '150ml', l: 'Thể tích thực' }, { v: '24', l: 'Tháng hạn dùng' },
      ],
      unitNote: 'Đơn giá lẻ 70.000₫/hũ',
      sets: [
        { name: 'Set 6', sub: '6 hũ × 150ml', price: '476.000 ₫' },
        { name: 'Set 8', sub: '8 hũ × 150ml', price: '608.000 ₫', featured: true },
      ],
    },
    cn: {
      title: '皇燕参虫草礼盒', titleSize: 42,
      subtitle: '高档礼盒 · 玻璃瓶 150ml · 即食燕窝',
      nutrition: [
        { v: '4g', l: '燕窝含量' }, { v: '1%', l: '真红参' },
        { v: '150ml', l: '净含量' }, { v: '24', l: '个月保质期' },
      ],
      unitNote: '零售单价 70.000₫/瓶',
      sets: [
        { name: '6 瓶装', sub: '6 瓶 × 150ml', price: '476.000 ₫' },
        { name: '8 瓶装', sub: '8 瓶 × 150ml', price: '608.000 ₫', featured: true },
      ],
    },
  },
];

// ── Thank-you / cooperation closing page (page 20) ─────────────────────────
export const thanks = {
  vi: {
    kicker: 'QIQI YẾN SÀO',
    title: 'Lời Cảm Ơn',
    subtitle: 'Rất mong được đồng hành cùng Quý đối tác',
    body:
      'Cảm ơn Quý đối tác đã dành thời gian tìm hiểu bộ sản phẩm yến sào QiQi. Với chúng tôi, mỗi sự hợp tác đều khởi nguồn từ niềm tin và chất lượng — và sẽ là niềm vinh hạnh khi được cùng Quý vị mang tinh hoa yến sào Việt Nam đến với nhiều khách hàng hơn nữa.',
    body2:
      'QiQi Yến luôn sẵn sàng đồng hành và hỗ trợ tận tâm về sản phẩm, chính sách giá sỉ, cùng các đơn hàng số lượng lớn và xuất khẩu. Mọi đề xuất hợp tác, kính mong Quý đối tác liên hệ trực tiếp với chúng tôi.',
    closing: 'Trân trọng cảm ơn và kính chúc hợp tác thành công, thịnh vượng!',
    contactLabel: 'LIÊN HỆ HỢP TÁC',
    footer:
      'CÔNG TY TNHH TM ĐT PT PHÚC THỊNH  ·  Thương hiệu QiQi Yến  ·  MST 0202247835  ·  qiqiyensao.com',
  },
  cn: {
    kicker: 'QIQI 燕窝',
    title: '衷心致谢',
    subtitle: '诚挚期待与您携手共创未来',
    body:
      '感谢您拨冗品阅 QiQi 燕窝产品目录。于我们而言，每一次合作都始于信任与品质——能与您携手，让越南燕窝的精华走向更广阔的市场，将是我们莫大的荣幸。',
    body2:
      '无论是产品咨询、批发价格政策，还是大批量订购与出口业务，QiQi 燕窝都将竭诚为您服务。如有任何合作意向，敬请随时与我们联系。',
    closing: '衷心感谢，期待与您合作共赢、共同繁荣！',
    contactLabel: '合作联系',
    footer: '福盛贸易投资发展有限公司  ·  QiQi 燕窝  ·  税号 0202247835  ·  qiqiyensao.com',
  },
};
