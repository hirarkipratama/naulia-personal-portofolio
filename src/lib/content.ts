import type {
  HeroData,
  AudioTrackItem,
  BookProjectItem,
  StatItem,
  EventHighlightItem,
  ClientPartnerItem,
  AboutData,
  ContactData,
  AvailabilityData
} from '../types/portfolio';

export const availabilityData: AvailabilityData = {
  status: 'Terbuka untuk Proyek 2025',
  location: 'Jakarta & Daring',
  isAvailable: true
};

export const heroData: HeroData = {
  statusGreeting: '✨ Terbuka untuk Proyek 2025',
  location: 'Jakarta & Daring',
  headline: 'Menghidupkan Keajaiban Buku Anak &',
  headlineHighlight: 'Membawa Cerita',
  disciplines: 'Editor Buku (Anak & Sains) • MC Acara & Moderator • Voice Over Karakter & Buku Suara.',
  subdescription:
    'Memadukan ketelitian editorial dengan penceritaan vokal dinamis dan karisma panggung penuh kehangatan bagi anak-anak dan keluarga.',
  primaryCta: {
    label: 'Undang untuk Acara / VO',
    href: '#contact'
  },
  secondaryCta: {
    label: 'Jelajahi Buku & Demo Audio',
    href: '#voice-audio-reel'
  },
  trustBadges: [
    { icon: 'verified', text: 'MC Resmi Gramedia' },
    { icon: 'book_ribbon', text: '15+ Judul Buku Diedit' },
    { icon: 'graphic_eq', text: 'Narator VO Ekspresif' }
  ],
  portraitImage: '/images/hero/naulia_hero.jpeg',
  portraitAlt:
    "Potret hangat dan ceria Naulia Zahra, editor buku anak dan pemandu acara kreatif, tersenyum memegang buku anak berilustrasi.",
  portraitKicker: 'PANGGUNG & STUDIO',
  portraitSubtitle: 'Penata Kata, Pencerita & Moderator Muda'
};

export const audioTracks: AudioTrackItem[] = [
  {
    id: 'audio-track-1',
    title: 'Petualangan Sains Si Kancil',
    category: 'science',
    categoryLabel: 'Buku Cerita',
    categoryVariant: 'secondary',
    description: 'Infus rasa ingin tahu dengan karakter hewan ceria membimbing pendengar cilik menjelajahi keajaiban alam.',
    durationSeconds: 222,
    durationFormatted: '03:42',
    audioPath: '/audio/Audiobook_Aku_Bisa_Jadi_Apa_Hobiku_Bertualang.mp3',
    tags: ['Narasi • 3 Karakter'],
    initialPlaying: true,
    initialProgress: 28,
    initialElapsedFormatted: '00:26'
  },
  {
    id: 'audio-track-2',
    title: 'Misteri Kerajaan Terumbu Karang',
    category: 'science',
    categoryLabel: 'Sains',
    categoryVariant: 'tertiary',
    description: 'Narasi dokumenter yang tenang namun memikat, mengungkap misteri kedalaman laut dan pelestarian karang.',
    durationSeconds: 315,
    durationFormatted: '05:15',
    audioPath: '/audio/LPBD_Charles_Darwin.mp3',
    tags: ['Dokumenter Sains'],
    initialPlaying: false,
    initialProgress: 0,
    initialElapsedFormatted: '00:00'
  },
  {
    id: 'audio-track-3',
    title: 'Robot Sahabat & Bintang Kejora',
    category: 'character',
    categoryLabel: 'Buku Cerita',
    categoryVariant: 'primary',
    description: 'Irama robotik ceria berpadu dengan kehangatan vokal untuk ketenangan malam si kecil.',
    durationSeconds: 260,
    durationFormatted: '04:20',
    audioPath: '/audio/LPBD_Nikola_Tesla.mp3',
    tags: ['Pengantar Tidur & Menenangkan'],
    initialPlaying: false,
    initialProgress: 0,
    initialElapsedFormatted: '00:00'
  },
  {
    id: 'audio-track-4',
    title: 'Dongeng Fabel Nusantara: Kancil & Harimau',
    category: 'storybook',
    categoryLabel: 'VO Karakter',
    categoryVariant: 'secondary',
    description: 'Penampilan teatrikal multi-karakter yang jenaka, cerdik, dan sarat pesan moral luhur.',
    durationSeconds: 170,
    durationFormatted: '02:50',
    audioPath: '/audio/Audiobook_Sepatu_Berkucing.mp3',
    tags: ['Multi-Karakter Teatrikal'],
    initialPlaying: false,
    initialProgress: 0,
    initialElapsedFormatted: '00:00'
  }
];

export const bookProjects: BookProjectItem[] = [
  {
    id: 'book-ocean-secrets',
    title: 'Ensiklopedia Mini: Rahasia Laut Dalam',
    category: 'science',
    categoryLabel: 'Sains',
    categoryBadgeVariant: 'secondary',
    role: 'Editor Pengembangan',
    ageRange: 'Usia 7–12',
    summary: 'Fakta taksonomi laut mendalam diadaptasi ke ilustrasi diagramatik ramah anak.',
    publisher: 'Gramedia Edukasi',
    pageCount: 96,
    coverImage: '/images/projects/books/5_Menit_Mengenal_Laut_Fantastis.jpg',
    altText: "Sampul buku anak Ensiklopedia Mini Rahasia Laut Dalam berilustrasi biota laut bercahaya."
  },
  {
    id: 'book-little-star',
    title: 'Petualangan Bintang Kecil & Robot Sahabat',
    category: 'storybook',
    categoryLabel: 'Buku Cerita',
    categoryBadgeVariant: 'primary',
    role: 'Editor Utama Cerita',
    ageRange: 'Usia 4–8',
    summary: 'Penyelarasan ritme sensorik, pembacaan fonik, dan penataan dialog ramah balita.',
    publisher: 'BIP Gramedia',
    pageCount: 48,
    coverImage: '/images/projects/books/Brain_Power.jpg',
    altText: "Sampul buku cerita anak Petualangan Bintang Kecil & Robot Sahabat berlatar galaksi ceria."
  },
  {
    id: 'book-green-leaves',
    title: 'Sains Menyenangkan: Daun Berwarna Hijau',
    category: 'science',
    categoryLabel: 'Sains',
    categoryBadgeVariant: 'tertiary',
    role: 'Editor Sains STEM',
    ageRange: 'Usia 6–10',
    summary: 'Konsep klorofil dan fotosintesis disederhanakan melalui analogi dapur rumah tangga.',
    publisher: 'Mizan Kids',
    pageCount: 64,
    coverImage: '/images/projects/books/Ensiklopedia_Anak_Hebat_Tumbuhan.png',
    altText: "Sampul buku sains anak tentang tumbuhan dan daun hijau segar ramah anak."
  },
  {
    id: 'book-tropical-fable',
    title: 'Fabel Nusantara: Kisah Rimba Tropis',
    category: 'storybook',
    categoryLabel: 'Cerita Rakyat',
    categoryBadgeVariant: 'primary',
    role: 'Penyunting Cerita Rakyat',
    ageRange: 'Usia 5–9',
    summary: 'Dongeng tradisional dihidupkan kembali dengan pesan budi pekerti yang memberdayakan.',
    publisher: 'Erlangga for Kids',
    pageCount: 80,
    coverImage: '/images/projects/books/Ensiklopedia_Cilik_Nusantara_Permainan_Tradisional.jpg',
    altText: "Sampul buku cerita fabel nusantara rimba tropis dengan ragam satwa ceria."
  },
  {
    id: 'book-dinosaurs',
    title: 'Dunia Dinosaurus & Makhluk Purba',
    category: 'encyclopedia',
    categoryLabel: 'Ensiklopedia',
    categoryBadgeVariant: 'secondary',
    role: 'Pemeriksa Fakta Sains',
    ageRange: 'Usia 8–14',
    summary: 'Standardisasi nomenklatur paleontologi berpadu visual dinosaurus berbulu.',
    publisher: 'Gramedia Pustaka',
    pageCount: 120,
    coverImage: '/images/projects/books/Ensiklopedia_Cilik_Nusantara_Hewan_Ternak.png',
    altText: "Sampul buku ensiklopedia satwa dan dinosaurus purba."
  },
  {
    id: 'book-weather-clouds',
    title: 'Misteri Cuaca & Awan Melayang',
    category: 'science',
    categoryLabel: 'Sains',
    categoryBadgeVariant: 'tertiary',
    role: 'Editor Konten Utama',
    ageRange: 'Usia 6–11',
    summary: 'Mengubah fenomena meteorologi menjadi penjelasan taktil yang seru dipelajari.',
    publisher: 'Gramedia Edukasi',
    pageCount: 72,
    coverImage: '/images/projects/books/Ensiklopedia_Aku_Ingin_Tahu_Alam_Sekitar.jpeg',
    altText: "Sampul buku sains anak tentang cuaca, awan melayang, dan fenomena alam sekitar."
  }
];

export const statItems: StatItem[] = [
  {
    value: '50+',
    label: 'Acara Langsung',
    sublabel: 'Dipandu di Seluruh Indonesia',
    tintVariant: 'surface'
  },
  {
    value: 'Gramedia',
    label: 'Mitra Resmi',
    sublabel: 'Panggung Acara',
    tintVariant: 'secondary'
  },
  {
    value: '10+',
    label: 'Judul Buku Suara',
    sublabel: 'Dinuturkan & Diarahkan',
    tintVariant: 'tertiary'
  },
  {
    value: '98%',
    label: 'Retensi Klien',
    sublabel: 'Kerja Sama Berulang',
    tintVariant: 'surface'
  }
];

export const eventHighlights: EventHighlightItem[] = [
  {
    id: 'event-gramedia-fest',
    title: 'Gramedia Kids Book Fest 2024',
    role: 'Pemandu Panggung Utama & Pencerita',
    date: 'Okt 2024',
    location: 'Jakarta Convention Center',
    audience: 'Audiens: 1.200+',
    description:
      'Jakarta Convention Center • 1.200+ peserta selama 3 hari sesi mendongeng interaktif. Memandu 4 peluncuran buku anak, sesi membaca berkarakter yang dinamis, dan kuis panggung interaktif yang penuh keceriaan.',
    image: '/images/projects/events/MC_Dongeng_&_Aktivitas_Seru_MB_Fair.JPG',
    altText: 'Naulia Zahra memandu acara panggung festival buku anak di hadapan ratusan keluarga di JCC.',
    tags: ['Manajemen Audiens Anak', 'Mendongeng Interaktif', 'Bilingual ID/EN']
  },
  {
    id: 'event-science-talk',
    title: 'Youth Science Talk Series: Future Innovators',
    role: 'Moderator Diskusi Panel',
    date: 'Agu 2024',
    location: 'Auditorium Perpustakaan Nasional',
    audience: 'Siaran Langsung • 5.000+ Penonton',
    description:
      'Auditorium Perpustakaan Nasional • Memandu diskusi robotika dan sains lingkungan untuk pelajar. Merangkum istilah akademik rumit menjadi wawasan segar yang menginspirasi pembelajar muda.',
    image: '/images/projects/events/Moderator_IIBF_Book_Talk_Ensiklopedia_Cilik_Nusantara.jpg',
    altText: 'Naulia Zahra memoderasi diskusi panel sains edukasi di Auditorium Perpustakaan Nasional.',
    tags: ['Penyederhanaan STEM', 'Fasilitasi Panel', 'Standar Siaran TV/Web']
  }
];

export const clientPartners: ClientPartnerItem[] = [
  { name: 'Gramedia', icon: 'local_library', iconColorClass: 'text-primary' },
  { name: 'Kompas Edukasi', icon: 'school', iconColorClass: 'text-secondary' },
  { name: 'Kemendikbud Literacy', icon: 'menu_book', iconColorClass: 'text-tertiary' },
  { name: 'Mizan Kids', icon: 'theater_comedy', iconColorClass: 'text-primary' }
];

export const aboutData: AboutData = {
  kicker: '💡 FILOSOFI EDITORIAL',
  headline: 'Titik Temu Ketelitian Editorial & Kehangatan Ekspresif',
  bioParagraphs: [
    'Berlatar belakang linguistik edukasi dan perkembangan kognitif anak, Naulia ahli mengubah konsep sains rumit menjadi narasi menyenangkan yang memantik rasa ingin tahu seumur hidup.',
    'Sebagai pemandu panggung dan pengisi suara, ia membawa kepekaan yang sama terhadap ritme emosional, menjaga audiens muda terpikat dari kalimat pembuka hingga tepuk tangan penutup.'
  ],
  quote:
    '“Anak-anak dapat merasakan ketidaktulusan dalam sekejap. Baik dalam tulisan, modulasi suara, maupun di atas panggung, antusiasme yang tulus adalah jembatan cerita terbaik.”',
  quoteAuthor: '— Naulia Zahra (Editor Buku Anak & Pemandu Panggung)',
  capabilities: [
    {
      icon: 'draw',
      title: 'Penyuntingan Pengembangan Buku',
      description:
        'Membimbing naskah dari draf awal, ritme penuturan, alur plot, hingga penjenjangan kosakata pembaca usia 3 hingga 12 tahun.',
      colorVariant: 'primary'
    },
    {
      icon: 'biotech',
      title: 'Penyederhanaan Materi Sains & STEM',
      description:
        'Menerjemahkan konsep astronomi, mikrobiologi, dan fisika ke analogi yang nyata tanpa mengurangi akurasi fakta ilmiah.',
      colorVariant: 'secondary'
    },
    {
      icon: 'record_voice_over',
      title: 'Narasi Suara Karakter Ekspresif',
      description:
        'Karakterisasi vokal yang kaya, kontrol tempo suara, dan narasi imersif untuk buku bergambar, animasi, dan seri siniar.',
      colorVariant: 'tertiary'
    },
    {
      icon: 'theater_comedy',
      title: 'MC Panggung Energik & Ceria',
      description:
        'Pemandu acara handal untuk auditorium berskala besar, festival literasi keluarga, kuis interaktif, dan tur edukasi.',
      colorVariant: 'primary'
    },
    {
      icon: 'forum',
      title: 'Moderasi Panel Interaktif Anak & Remaja',
      description:
        'Memfasilitasi dialog bermakna dan seru antara penulis, ilustrator, pendidik, dan inovator muda.',
      colorVariant: 'secondary'
    },
    {
      icon: 'palette',
      title: 'Alur Narasi & Bahasa Visual Anak',
      description:
        'Bekerja berdampingan dengan ilustrator untuk menyelaraskan harmoni teks-gambar dan dinamika pembalikan halaman.',
      colorVariant: 'tertiary'
    }
  ]
};

export const contactData: ContactData = {
  kicker: '✉️ MARI BERKOLABORASI',
  headline: 'Mari Ciptakan Keajaiban Bersama.',
  description:
    'Punya naskah yang ingin disempurnakan, festival yang butuh pemandu panggung, atau buku suara yang siap disuarakan? Kirimkan pesan di bawah ini.',
  directChannels: [
    {
      id: 'whatsapp',
      type: 'whatsapp',
      title: 'WhatsApp Resmi',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890',
      icon: 'chat',
      iconBgClass: 'bg-tertiary text-on-tertiary'
    },
    {
      id: 'email',
      type: 'email',
      title: 'Email Studio',
      value: 'nauliazahra.studio@gmail.com',
      href: 'mailto:nauliazahra.studio@gmail.com',
      icon: 'alternate_email',
      iconBgClass: 'bg-primary text-on-primary'
    }
  ],
  socialLinks: [
    {
      platform: 'Instagram',
      handle: '@nauliazahra',
      href: 'https://instagram.com/nauliazahra',
      icon: 'photo_camera'
    },
    {
      platform: 'LinkedIn',
      handle: 'LinkedIn / Naulia',
      href: 'https://linkedin.com/in/naulia-zahra',
      icon: 'work'
    }
  ],
  serviceOptions: ['Editor Buku', 'MC Acara / Moderator', 'Voice Over Karakter', 'Kolaborasi Lengkap']
};
