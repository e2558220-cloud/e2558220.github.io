// 12バンドのデータベース
const bandsData = [
  {
    name: "X JAPAN",
    kana: "エックスジャパン",
    genre: "Symphonic Metal / Speed Metal",
    desc: "日本のヴィジュアル系の祖であり、世界的な影響力を持つ伝説的ロックバンド。超高速のメタルサウンドと哀愁漂う美しいバラード、過激なパフォーマンスで時代を創り上げた。",
    tags: ["レジェンド", "メタル", "シンフォニック"]
  },
  {
    name: "LUNA SEA",
    kana: "ルナシー",
    genre: "Post-Punk / Alternative Rock",
    desc: "緻密に構築された5人のアンサンブルと漆黒のダークな世界観で90年代V系シーンの頂点に立ったモンスターバンド。圧倒的なライブパフォーマンスで知られる。",
    tags: ["レジェンド", "オルタナティヴ", "漆黒"]
  },
  {
    name: "GLAY",
    kana: "グレイ",
    genre: "Pop Rock / Rock",
    desc: "キャッチーで美しいメロディと親しみやすいポップセンスで数々のミリオンセラーを連発。日本音楽史に残る動員記録を持つ国民的ロックバンド。",
    tags: ["ポップ", "メロディック", "国民的"]
  },
  {
    name: "HYDE",
    kana: "ハイド",
    genre: "Alternative Rock / Hard Rock",
    desc: "L'Arc〜en〜CielやVAMPSのフロントマンであり、唯一無二の歌声と洗練されたビジュアルで世界中にファンを持つカリスマアーティスト。",
    tags: ["ソロ", "カリスマ", "世界進出"]
  },
  {
    name: "DIR EN GREY",
    kana: "ディル アン グレイ",
    genre: "Avant-Garde Metal / Extreme Metal",
    desc: "人間の感情の深淵や「痛み」を徹底的に追求する世界観。ヘヴィかつ前衛的なサウンドで全米・欧州ツアーを精力的に行う孤高のアーティスト。",
    tags: ["ラウド", "エクストリーム", "世界評価"]
  },
  {
    name: "the GazettE",
    kana: "ガゼット",
    genre: "Heavy Rock / Nu Metal",
    desc: "2000年代以降のV系シーンを牽引し続ける異端児。アグレッシブな重低音と美麗なメロディラインを融合させ、日本武道館や東京ドーム公演を成功させた。",
    tags: ["ネオV系", "ヘヴィ", "ヘドバン"]
  },
  {
    name: "SID",
    kana: "シド",
    genre: "Pop Rock / Kayō Rock",
    desc: "昭和歌謡の情感漂うメロディと巧みな歌詞表現、高い技術力で魅了する人気バンド。アニメテーマソングも数多く手掛け、幅広い層から支持される。",
    tags: ["歌謡ロック", "ポップ", "キャッチー"]
  },
  {
    name: "摩天楼オペラ",
    kana: "マテンロウオペラ",
    genre: "Symphonic Power Metal",
    desc: "圧倒的なハイトーンボーカルと重厚なパイプオルガン・クラシック要素を融合させた、美しくも過激なシンフォニック・メタルを展開する。",
    tags: ["シンフォニック", "美旋律", "メタル"]
  },
  {
    name: "Versailles",
    kana: "ヴェルサイユ",
    genre: "Symphonic Metal / Gothic Rock",
    desc: "「薔薇の末裔」をコンセプトに、華麗な中世ヨーロッパ調の衣装とツインギターによる超絶技巧の叙情美メタルサウンドで構築された美の究極形。",
    tags: ["ゴシック", "薔薇", "超絶技巧"]
  },
  {
    name: "girugamesh",
    kana: "ギルガメッシュ",
    genre: "Industrial / Metalcore",
    desc: "骨太でアグレッシブなメタルコア・ラウドロックにデジタルエレクトロを取り入れた重厚なサウンドで、国内のみならず海外でも熱狂的な人気を集めた。",
    tags: ["ラウド", "メタルコア", "インダストリアル"]
  },
  {
    name: "Sadie",
    kana: "サディ",
    genre: "Heavy / Dark Gothic",
    desc: "ダークかつ重厚なヘヴィサウンドと狂気・グロテスクさを孕んだ世界観で、コテ系・ダーク系V系シーンの中心的存在として絶大な支持を得た。",
    tags: ["ダーク", "重厚", "コテ系"]
  },
  {
    name: "lynch.",
    kana: "リンチ",
    genre: "Alternative Metal / Metalcore",
    desc: "「ヘヴィ＆ビューティー」を提示し、洗練された重低音と叙情的な旋律を高次元で両立。名古屋系V系の系譜を継ぐ実力派ロックバンド。",
    tags: ["名古屋系", "ヘヴィ", "シャウト"]
  }
];

// DOM要素の取得
const bandGrid = document.getElementById('bandGrid');
const searchInput = document.getElementById('searchInput');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalKana = document.getElementById('modalKana');
const modalGenre = document.getElementById('modalGenre');
const modalBody = document.getElementById('modalBody');
const modalTags = document.getElementById('modalTags');

// バンドカード一覧を描画する関数
function renderBands(list) {
  bandGrid.innerHTML = '';
  if (list.length === 0) {
    bandGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-sub);">該当するバンドが見つかりません。</p>';
    return;
  }

  list.forEach(band => {
    const card = document.createElement('div');
    card.className = 'band-card';
    card.innerHTML = `
      <h2 class="band-name">${band.name}</h2>
      <div class="band-kana">${band.kana}</div>
      <span class="band-genre">${band.genre}</span>
      <p class="band-desc">${band.desc}</p>
    `;

    // カードクリックでモーダルを開く
    card.addEventListener('click', () => openModal(band));
    bandGrid.appendChild(card);
  });
}

// モーダルを開く処理
function openModal(band) {
  modalTitle.textContent = band.name;
  modalKana.textContent = band.kana;
  modalGenre.textContent = band.genre;
  modalBody.textContent = band.desc;
  
  modalTags.innerHTML = band.tags.map(tag => `<span class="tag">#${tag}</span>`).join('');
  modalOverlay.classList.add('active');
}

// モーダルを閉じる処理
modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

// 検索フィルター処理
searchInput.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase().trim();
  const filtered = bandsData.filter(band => 
    band.name.toLowerCase().includes(keyword) ||
    band.kana.includes(keyword) ||
    band.genre.toLowerCase().includes(keyword) ||
    band.tags.some(tag => tag.toLowerCase().includes(keyword))
  );
  renderBands(filtered);
});

// 初期描画
renderBands(bandsData);
