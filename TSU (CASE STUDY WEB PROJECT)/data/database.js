// =============================================================
// CENTRALIZED MOVIE DATABASE (Full Catalog)
// =============================================================
/* Source of Truth for:
   - Featured Slider
   - Trending Board (Auto-sorted by Popularity + Rating)
   - Latest Updates (Sorted by Release Date)
   - Category Lists (Smart Genre Filtering)
   - Recommendation Engine
*/

const GLOBAL_MOVIE_DB = [
    // =============================================================
    // =============================================================
    // =============================================================
    // =============================================================
    // INDAY: (Genre: DRAMA, ROMANCE, COMEDY)
    // =============================================================
    // =============================================================
    // =============================================================
    {
        id: "shrek-2",
        title: "Shrek 2",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418194/shrek_2_title_gzf2r9.webp",
        description: "Back in Far Far Away, Shrek and Fiona share news of their marriage. But a sinister plan involving Prince Charming threatens their \"happily ever after.\"",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417845/shrek_2_poster_bh04fa.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/shrek_2_backdrop_tlppoc.webp",
        videoUrl: "https://youtu.be/0d0acu1eRUg",
        tags: { type: "Movie", genres: ["Family Movies, Kids & Family Movies, Comedy Movies, Movies Based on Books, US Movies"], rated: "PG", status: "Released" },
        meta: { release: "2004", releaseDate: "2004-05-21", quality: "HD", duration: "1h 33m" },
        stats: { popularity: 2500, imdb: "7.3/10", popularityChange: "▲ 120" },
        categories: ["kids", "family", "comedy"],
        keywords: ["fairy tale", "talking animals", "magic", "marriage", "adventure", "princess", "fantasy"],
        moods: ["Magical, Witty, Kids, Fairy Tale, US, Golden Globe Nominee, Based on a Book, Imaginative, Comedy, Movie, Love, Award-Winning, Talking Animal"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description", "English [Original]", "Spanish (Latin America)", "Japanese", "Cantonese", "Mandarin"],
            subtitles: ["English", "Spanish (Latin America)", "Chinese (Simplified)", "Chinese (Traditional)"],
            cast: ["Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews, Antonio Banderas, John Cleese, Rupert Everett, Jennifer Saunders"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Shrek 2 Trailer 1",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418114/shrek2_thumbnail_01_pfyrv1.jpg",
                videoUrl: "https://www.youtube.com/watch?v=xBgSfhp5Fxo",
                duration: "1:18"
            }
        ]
    },
    
    {
        id: "love-you-to-the-stars-and-back",
        title: "Love You to the Stars and Back",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418176/love-you-stars_title_a2y641.webp",
        description: "In search of aliens, a young woman's road trip becomes an emotional journey when she finds — and falls for — a charming companion with cancer.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417834/love-you-star_poster_ikzwks.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/love-you-star_backdrop_ondmcx.webp",
        videoUrl: "https://www.youtube.com/watch?v=aoWCjGOuw1k",
        tags: { type: "Movie", genres: ["Filipino, Romantic Comedy Movies, Comedy Movies, Romantic Movies, Teen Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "2017", releaseDate: "2017-08-30", quality: "HD", duration: "1h 51m" },
        stats: { popularity: 450, imdb: "7.2/10", popularityChange: "▲ 35" },
        categories: ["romance", "comedy", "filipino"],
        keywords: ["road trip", "romance", "cancer", "journey", "aliens", "teen", "filipino"],
        moods: ["Bittersweet, Romantic, Teen, Filipino, Critically Acclaimed, Comedy, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["Filipino [Original]"],
            subtitles: ["English", "Filipino"],
            cast: ["Julia Barretto, Joshua Garcia, Carmina Villaroel, Cherry Pie Picache, Ariel Rivera, Maricar Reyes, Edgar Allan Guzman, Jelson Bay, Odette Khan"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Love You to the Stars and Back – Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417969/love-you-stars_thumbnail_01_jkwqme.jpg",
                videoUrl: "https://www.youtube.com/watch?v=aoWCjGOuw1k",
                duration: "2:26"
            }
        ]
    },
    
    {
        id: "big-world",
        title: "Big World",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418149/big-world_title_zqje6t.webp",
        description: "A young man with cerebral palsy tries to help his grandmother achieve her long-held stage dreams, while mending family ties and discovering his own path.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417774/big-world_poster_nnvobx.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417724/big-world_backdrop_toro0d.webp",
        videoUrl: "https://youtu.be/Epxtn_DmTY4",
        tags: { type: "Movie", genres: ["Drama", "Family"], rated: "PG-13", status: "Released" },
        meta: { release: "2024", releaseDate: "2024-12-27", quality: "HD", duration: "2h 11m" },
        stats: { popularity: 820, imdb: "7.4/10", popularityChange: "▲ 150" },
        categories: ["drama", "family", "china"],
        keywords: ["cerebral palsy", "resilience", "family", "coming of age", "hope", "overcoming obstacles"],
        moods: ["Inspiring, Heartfelt, Youth, Coming-of-age, Mainland Chinese, Emotional, Social Issues, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["Mandarin (Original)"],
            subtitles: ["English", "Chinese (Simplified)", "Chinese (Traditional)"],
            cast: ["Jackson Yee", "Diana Lin", "Jiang Qinqin", "Zhou Yutong", "Li Gengyou"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Big World (Official Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417868/big-world_thumbnail_01_kmedsu.jpg",
                videoUrl: "https://www.youtube.com/watch?v=1JVqMj3uv_E",
                duration: "2:03"
            }
        ]
    },
    
    {
        id: "doll-house",
        title: "Doll House",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418150/doll-house_title_tjtgp4.webp",
        description: "A troubled lead singer of a rock band sets out to rekindle the relationship he never had with his long-lost daughter.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417800/doll-house_poster_wnoavq.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417724/doll-house_backdrop_kvgloa.webp",
        videoUrl: "https://youtu.be/w-C-L97f38U",
        tags: { type: "Movie", genres: ["Drama"], rated: "TV-MA", status: "Released" },
        meta: { release: "2022", releaseDate: "2022-10-07", quality: "HD", duration: "1h 46m" },
        stats: { popularity: 610, imdb: "6.8/10", popularityChange: "▲ 40" },
        categories: ["drama", "filipino", "family"],
        keywords: ["father-daughter", "redemption", "addiction", "music", "emotional", "family"],
        moods: ["Sentimental, Understated, Tearjerker, Family Reunion, Filipino, Heartfelt, Keeping Secrets, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["FEnglish, Filipino - Audio Description, Filipino [Original]"],
            subtitles: ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Baron Geisler, Althea Ruedas, Mary Joy Apostol, Phi Palmos, Katreena Beron, Izah Hankammer, Alwyn Uytingco, Ricardo Cepeda"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Doll House (Official Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417883/doll-house_thumbnail_01_ugtd4s.jpg",
                videoUrl: "https://youtu.be/w-C-L97f38U",
                duration: "2:20"
            }
        ]
    },
    
    {
        id: "finding-agnes",
        title: "Finding Agnes",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418152/finding-agnes_title_rfwy1r.webp",
        description: "On an emotional journey in Morocco, an entrepreneur pieces together the turbulent life of his estranged mother and meets her adopted daughter.",
        posterUrl: "https://res.cloudinary.com/dn9qjpjhs/image/upload/v1765424659/finding-agnes_poster_uytkp5.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417729/finding-agnes_backdrop_jnkcki.webp",
        videoUrl: "https://youtu.be/sGYdfvJk0d8",
        tags: { type: "Movie", genres: ["Filipino, Drama Movies"], rated: "TV-PG", status: "Released" },
        meta: { release: "2020", releaseDate: "2020-11-30", quality: "HD", duration: "1h 45m" },
        stats: { popularity: 150, imdb: "5.0/10", popularityChange: "▲ 12" },
        categories: ["family", "emotional", "life‑journey", "romance"],
        keywords: ["mother‑daughter", "family secrets", "self discovery", "grief", "redemption", "identity", "morocco", "journey"],
        moods: ["Sentimental, Understated, Drama, Friendship, Filipino, Critically Acclaimed, Heartfelt, Family Relationship, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["Filipino - Audio Description, Filipino [Original"],
            subtitles: ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Jelson Bay, Sue Ramirez, Sandy Andolong, Roxanne Guinoo, Cheska Iñigo, Hannah Ledesma, Yuan Francisco, Raffa Esplana, Varoon Kessop"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Finding Agnes — Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/finding-agnes_thumbnail_01_aftbpb.jpg",
                videoUrl: "https://www.youtube.com/watch?v=7Gbu2ZE6tZs",
                duration: "2:15"
            }
        ]
    },
    
    {
        id: "the-greatest-showman",
        title: "The Greatest Showman",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-greatest-showman_title_jj95tr.webp",
        description: "Hugh Jackman, Michelle Williams, Zac Efron, Zendaya, Rebecca Ferguson, Keala Settle, Yahya Abdul-Mateen II, Sam Humphrey, Austyn Johnson, Cameron Seely",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-greatest-showman_backdrop_dih37d.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-greatest-showman_backdrop_dih37d.webp",
        videoUrl: "https://youtu.be/R-UlnIamX30",
        tags: { type: "Movie", genres: ["Family Movies, Kids & Family Movies, Musicals, US Movies"], rated: "PG", status: "Released" },
        meta: { release: "2017", releaseDate: "2017-12-20", quality: "HD", duration: "1h 45m" },
        stats: { popularity: 2100, imdb: "7.5/10", popularityChange: "▲ 85" },
        categories: ["musical", "drama", "biography", "family", "music"],
        keywords: ["circus", "P.T. Barnum", "show business", "dreams", "music", "performance", "acceptance", "spectacle"],
        moods: ["Feel-Good, Musical, Notable Soundtrack, Dance, Hollywood Movie, Historical, Showbiz, Family"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Mandarin"],
            subtitles: ["English, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Hugh Jackman, Michelle Williams, Zac Efron, Zendaya, Rebecca Ferguson, Keala Settle, Yahya Abdul-Mateen II, Sam Humphrey, Austyn Johnson, Cameron Seely"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "The Greatest Showman Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418118/the-greatest-showman_thumbnail_01_qjrnrj.jpg",
                videoUrl: "https://www.youtube.com/watch?v=4P9WMQStHjE",
                duration: "2:18"
            }
        ]
    },
    {
        id: "zom-100",
        title: "Zom 100",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418232/zom-100_title_jnlula.webp",
        description: "Bullied by his boss, worked around the clock, he's nothing more than a corporate drone. All it takes is a zombie outbreak for him to finally feel alive!",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417867/zom-100_poster_nntseg.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/zom-100_backdrop_x5ni1b.webp",
        videoUrl: "https://youtu.be/lweiAZKd798",
        tags: { type: "Movie", genres: ["Japanese, Comedy Movies, Horror Movies, Action & Adventure Movie"], rated: "TV-MA", status: "Released" },
        meta: { release: "2023", releaseDate: "2023-08-03", quality: "HD", duration: "2h 9m" },
        stats: { popularity: 850, imdb: "5.6/10", popularityChange: "▼ 20" },
        categories: ["zombie", "apocalypse", "action", "comedy", "thriller"],
        keywords: ["zombie outbreak", "bucket list", "friendship", "humor", "survival"],
        moods: ["Absurd, Offbeat, Horror Comedy, Zombies, Japanese, Award Winner, Based on Manga, Exciting, Survival, Action Comedy, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English, Spanish (Latin America) - Audio Description, Spanish (Latin America), Japanese - Audio Description, Japanese [Original"],
            subtitles: ["English, Spanish (Latin America), Filipino, Japanese, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Eiji Akaso, Mai Shiraishi, Shuntaro Yanagi, Yui Ichikawa, Mayo Kawasaki, Akari Hayami, Miwako Kakei, Kurumi Nakata, Doronz Ishimoto, Mukau Nakamura"]
        },
        trailers: [
            {
                id: "zom-100-trailer-01",
                title: "Zom 100 Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418149/zom-100_thumbnail_01_h7kx0t.jpg",
                videoUrl: "https://www.youtube.com/watch?v=yhbWaJaYDiY",
                duration: "2:15"
            }
        ]
    },
    
    {
        id: "all-quiet-on-the-western-front",
        title: "All Quiet on the Western Front",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418149/all-quiet-on-the-western-front_title_ve6vyr.webp",
        description: "A young German soldier, Paul Bäumer, experiences the horrors of World War I on the front lines, confronting the brutal realities of war, camaraderie, and the loss of innocence.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417768/all-quiet-on-the-western-front_poster_rzxkwc.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417723/all-quiet-on-the-western-front_backdrop_rpvqck.webp",
        videoUrl: "https://youtu.be/NIiIoCh_uvY",
        tags: { type: "Movie", genres: ["German, Military Movies, Drama Movies, Movies Based on Books, Period Pieces"], rated: "R", status: "Released" },
        meta: { release: "2022", releaseDate: "2022-10-28", quality: "HD", duration: "2h 28m" },
        stats: { popularity: 1800, imdb: "7.8/10", popularityChange: "▲ 90" },
        categories: ["war", "historical", "drama", "tragedy", "military"],
        keywords: ["world war i", "soldier", "tragedy", "frontline", "loss", "courage"],
        moods: ["Violent, Dark, Period Piece, Visually Striking, Combat, World War I, German, Golden Globe Nominee, Historical, Military, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["German - Audio Description, German [Original], English - Audio Description, English, Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanes"],
            subtitles: ["German, English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Felix Kammerer, Albrecht Schuch, Aaron Hilmer, Moritz Klaus, Edin Hasanović, Thibault de Montalembert, Daniel Brühl, Devid Striesow, Adrian Grünewald, Andreas Döhler"]
        },
        trailers: [
            {
                id: "all-quiet-on-the-western-front-trailer-01",
                title: "All Quiet on the Western Front Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417868/all-quiet-on-the-western-front_thumbnail_01_lo2rxo.jpg",
                videoUrl: "https://www.youtube.com/watch?v=hf8EYbVxtCY",
                duration: "2:31"
            }
        ]
    },
    
    {
        id: "catch-me-if-you-can",
        title: "Catch Me If You Can",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418149/catch-me-if-you-can_title_mmibif.webp",
        description: "An FBI agent makes it his mission to put cunning con man Frank Abagnale Jr. behind bars. But Frank not only eludes capture, he revels in the pursuit.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417774/catch-me-if-you-can_poster_px125s.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417727/catch-me-if-you-can_backdrop_xiy7fu.webp",
        videoUrl: "https://youtu.be/fzuYBSmjh74",
        tags: { type: "Movie", genres: ["Crime Movies, Drama Movies, Comedy Movies, Movies Based on Books, Movies Based on Real Life, US Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "2002", releaseDate: "2002-12-25", quality: "HD", duration: "2h 21m" },
        stats: { popularity: 2100, imdb: "8.1/10", popularityChange: "▲ 150" },
        categories: ["crime", "drama", "biographical", "thriller", "heist"],
        keywords: ["con artist", "fraud", "forgery", "fbi chase", "impostor", "true story"],
        moods: ["Slick, Nostalgic, Comedy, Sharp Dialogue, Fraud, 1960s, US, Golden Globe Nominee, Historical, Sentimental, Chase, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            subtitles: ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen, Nathalie Baye, Amy Adams, James Brolin, Brian Howe, Frank John Hughes, Steve Eastin"]
        },
        trailers: [
            {
                id: "catch-me-if-you-can-trailer-01",
                title: "Catch Me If You Can Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417876/catch-me-if-you-can_thumbnail_01_adtlea.jpg",
                videoUrl: "https://www.youtube.com/watch?v=s-7pyIxz8Qg",
                duration: "2:11"
            }
        ]
    },
    
    {
        id: "the-boy-who-harnessed-the-wind",
        title: "The Boy Who Harnessed the Wind",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418210/the-boy-who-harnessed-the-wind_title_kcuwxa.webp",
        description: "Inspired by a science book, 13-year-old William Kamkwamba builds a wind turbine to save his Malawian village from famine. Based on a true story.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-boy-who-harnessed-the-wind_poster_c2weew.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-boy-who-harnessed-the-wind_backdrop_bpfdin.webp",
        videoUrl: "https://youtu.be/4VQzg9U27iI",
        tags: { type: "Movie", genres: ["Family Movies, Drama Movies, Independent Movies, Movies Based on Books, Movies Based on Real Life, Social Issue Dramas, US Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "2019", releaseDate: "2019-03-01", quality: "HD", duration: "1h 53m" },
        stats: { popularity: 750, imdb: "7.6/10", popularityChange: "▲ 30" },
        categories: ["drama", "family", "inspirational", "biographical", "survival"],
        keywords: ["windmill", "famine", "hope", "innovation", "true story", "village"],
        moods: ["Inspiring, Heartfelt, Family, Independent, Overcoming the Odds, US, Critically Acclaimed, Based on Real Life, Intimate, Fight the System, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America)"],
            subtitles: ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional"],
            cast: ["Maxwell Simba, Chiwetel Ejiofor, Aïssa Maïga, Lily Banda, Lemogang Tsipa, Philbert Falakeza, Joseph Marcell, Noma Dumezweni"]
        },
        trailers: [
            {
                id: "the-boy-who-harnessed-the-wind-trailer-01",
                title: "The Boy Who Harnessed the Wind Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418115/the-boy-who-harnessed-the-wind_thumbnail_01_nakctv.jpg",
                videoUrl: "https://www.youtube.com/watch?v=qabjqvbFEaQ",
                duration: "2:19"
            }
        ]
    },
    
    {
        id: "robin-hood-prince-of-thieves",
        title: "Robin Hood: Prince of Thieves",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/robin-hood-prince-of-thieves_title_rvgzws.webp",
        description: "When the dastardly Sheriff of Nottingham murders Robin Hood's father, the legendary outlaw vows vengeance and joins a band of exiled villagers.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/robin-hood-prince-of-thieves_poster_lxa6jr.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417752/robin-hood-prince-of-thieves_backdrop_ceirxk.webp",
        videoUrl: "https://youtu.be/MjhhXxn2C3o",
        tags: { type: "Movie", genres: ["Drama Movies, Romantic Movies, Period Pieces, Action & Adventure Movies, US Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "1991", releaseDate: "1991-06-14", quality: "HD", duration: "2h 23m" },
        stats: { popularity: 900, imdb: "6.9/10", popularityChange: "▲ 55" },
        categories: ["adventure", "action", "drama", "historical", "heroic"],
        keywords: ["robin hood", "sherwood forest", "outlaws", "justice", "rescue", "rebellion"],
        moods: ["Rousing, Exciting, Adventure, Forbidden Love, Middle Ages, Critically Acclaimed, Romantic, Myths & Legends, Period Piece, Action, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English [Original], Spanish (Latin America), Japanese"],
            subtitles: ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Kevin Costner, Morgan Freeman, Mary Elizabeth Mastrantonio, Christian Slater, Alan Rickman, Michael McShane, Geraldine McEwan, Nick Brimble, Brian Blessed, Michael Wincott"]
        },
        trailers: [
            {
                id: "robin-hood-prince-of-thieves-trailer-01",
                title: "Robin Hood: Prince of Thieves Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418112/robin-hood-prince-of-thieves_thumbnail_01_q79qju.jpg",
                videoUrl: "https://www.youtube.com/watch?v=SDfWMSNQEJc",
                duration: "2:02"
            }
        ]
    },
    
    {
        id: "cunk-on-life",
        title: "Cunk on Life",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418150/cunk-on-life_title_dav45f.webp",
        description: "An FBI agent makes it his mission to put cunning con man Frank Abagnale Jr. behind bars. But Frank not only eludes capture, he revels in the pursuit.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417800/cunk-on-life_poster_yl7qg7.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417723/cunk-on-life_backdrop_dv6mtx.webp",
        videoUrl: "https://youtu.be/YUOPEcGhYh0",
        tags: { type: "Movie", genres: ["Crime Movies, Drama Movies, Comedy Movies, Movies Based on Books, Movies Based on Real Life, US Movies"], rated: "TV-MA", status: "Released" },
        meta: { release: "2025", releaseDate: "2025-01-02", quality: "HD", duration: "1h 11m" },
        stats: { popularity: 1100, imdb: "8.0/10", popularityChange: "▲ 200" },
        categories: ["comedy", "mockumentary", "satire", "documentary‑style", "philosophical"],
        keywords: ["existential questions", "big bang", "ai", "satire", "humor", "mockumentary"],
        moods: ["Slick, Nostalgic, Comedy, Sharp Dialogue, Fraud, 1960s, US, Golden Globe Nominee, Historical, Sentimental, Chase, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English"],
            subtitles: ["English", "Spanish", "French", "Chinese (Simplified)", "Chinese (Traditional)"],
            cast: ["Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen, Nathalie Baye, Amy Adams, James Brolin, Brian Howe, Frank John Hughes, Steve Eastin"]
        },
        trailers: [
            {
                id: "cunk-on-life-trailer-01",
                title: "Cunk on Life Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417883/cunk-on-life_thumbnail_01_hftx0x.jpg",
                videoUrl: "https://www.youtube.com/watch?v=rFvs5-PH5LA",
                duration: "1:28"
            }
        ]
    },
    
    {
        id: "dont-look-up",
        title: "Don't Look Up",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418150/dont-look-up_title_bswdqn.webp",
        description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417800/dont-look-up_poster_wl8zsn.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417726/dont-look-up_backdrop_ilnqgt.webp",
        videoUrl: "https://youtu.be/MzCIYB_V7Gw",
        tags: { type: "Movie", genres: ["Sci-Fi Movies, Satires, Drama Movies, Comedy Movies, Social Issue Dramas, US Movies"], rated: "R", status: "Released" },
        meta: { release: "2021", releaseDate: "2021-12-24", quality: "HD", duration: "2h 18m" },
        stats: { popularity: 1700, imdb: "7.2/10", popularityChange: "▲ 75" },
        categories: ["comedy", "satire", "drama", "disaster", "sci-fi"],
        keywords: ["comet", "astronomers", "politics", "media", "satire", "social commentary"],
        moods: ["Provocative, Witty, Sci-Fi Drama, Armageddon, Washington D.C., US, Golden Globe Nominee, Irreverent, Deadly Disaster, Satire, Dark Comedy, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese, Mandarin"],
            subtitles: ["English", "Spanish", "French", "Chinese (Simplified)", "Chinese (Traditional)"],
            cast: ["Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep, Cate Blanchett, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ariana Grande"]
        },
        trailers: [
            {
                id: "dont-look-up-trailer-01",
                title: "Don't Look Up Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417883/dont-look-up_thumbnail_01_s8hz6i.jpg",
                videoUrl: "https://www.youtube.com/watch?v=RbIxYm3mKzI",
                duration: "2:35"
            }
        ]
    },
    
    {
        id: "the-half-of-it",
        title: "The Half of It",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-half-of-it_title_fhr92s.webp",
        description: "When smart but cash-strapped teen Ellie Chu agrees to write a love letter for a jock, she doesn't expect to become his friend — or fall for his crush.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-half-of-it_poster_p1mkli.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-half-of-it_backdrop_vhw4r4.webp",
        videoUrl: "https://youtu.be/PJtvz1bYC3M",
        tags: { type: "Movie", genres: ["Romantic Comedy Movies, LGBTQ+ Movies, Drama Movies, Comedy Movies, Romantic Movies, Teen Movies, US Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "2020", releaseDate: "2020-05-01", quality: "HD", duration: "1h 44m" },
        stats: { popularity: 700, imdb: "6.9/10", popularityChange: "▲ 25" },
        categories: ["romantic", "comedy", "drama", "teen", "coming-of-age"],
        keywords: ["high school", "letter writing", "unrequited love", "friendship", "identity", "self discovery"],
        moods: ["Quirky, Heartfelt, Teen, LGBTQ+, First Love, US, Critically Acclaimed, Feel-Good, Coming-of-age, Youth, Comedy, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English", "Spanish", "French", "German", "Japanese", "Portuguese", "Italian"],
            subtitles: ["English", "Spanish", "French", "German", "Chinese (Simplified)", "Chinese (Traditional)", "Japanese", "Korean", "Portuguese", "Italian"],
            cast: ["Leah Lewis, Daniel Diemer, Alexxis Lemire, Wolfgang Novogratz, Collin Chou, Becky Ann Baker, Enrique Murciano, Macintyre Dixon, Catherine Curtin"]
        },
        trailers: [
            {
                id: "the-half-of-it-trailer-01",
                title: "The Half of It Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418118/the-half-of-it_thumbnail_01_urkqbv.jpg",
                videoUrl: "https://www.youtube.com/watch?v=B-yhF7IScUE",
                duration: "2:33"
            }
        ]
    },
    
    {
        id: "the-lost-daughter",
        title: "The Lost Daughter",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-lost-daughter_title_ax6wbf.webp",
        description: "A woman's quiet seaside vacation takes an unsettling turn when her fixation on a young mother staying at a nearby villa awakens memories from her past.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-lost-daughter_poster_nakzmm.jpg",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/the-lost-daughter_backdrop_jwaj3h.webp",
        videoUrl: "https://youtu.be/55vtq--DVOE?si=JZKFhbdlPs4QceEq",
        tags: { type: "Movie", genres: ["Drama Movies, Independent Movies, Movies Based on Books, US Movies"], rated: "R", status: "Released" },
        meta: { release: "2021", releaseDate: "2021-12-31", quality: "HD", duration: "2h 1m" },
        stats: { popularity: 650, imdb: "6.7/10", popularityChange: "▲ 15" },
        categories: ["drama", "psychological", "independent", "family", "intimate"],
        keywords: ["seaside vacation", "motherhood", "guilt", "memory", "psychological drama", "relationships"],
        moods: ["Cerebral, Understated, Drama, Art House, Midlife Crisis, Golden Globe Nominee, Based on a Book, Intimate, Family Relationship, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            subtitles: ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Olivia Colman, Jessie Buckley, Dakota Johnson, Ed Harris, Peter Sarsgaard, Paul Mescal, Dagmara Dominczyk, Alba Rohrwacher, Jack Farthing, Oliver Jackson-Cohen"]
        },
        trailers: [
            {
                id: "the-lost-daughter-trailer-01",
                title: "The Lost Daughter Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418118/the-lost-daughter_thumbnail_01_tb6kdy.jpg",
                videoUrl: "https://www.youtube.com/watch?v=xNq9YOfL0Zs",
                duration: "2:39"
            }
        ]
    },
    
    {
        id: "julie-and-julia",
        title: "Julie & Julia",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417809/julie-and-julia_poster_bw2kxs.webp",
        description: "A young New Yorker craving inspiration gives herself a year to cook through a classic Julia Child cookbook while blogging about her culinary adventures.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417732/julie-and-julia_backdrop_xzus9e.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417732/julie-and-julia_backdrop_xzus9e.webp",
        videoUrl: "https://youtu.be/Q8Lngt5dH80",
        tags: { type: "Movie", genres: ["Drama Movies, Comedy Movies, Movies Based on Books, Movies Based on Real Life, US Movies"], rated: "PG-13", status: "Released" },
        meta: { release: "2009", releaseDate: "2009-08-07", quality: "HD", duration: "2h 3m" },
        stats: { popularity: 950, imdb: "7.0/10", popularityChange: "▲ 50" },
        categories: ["comedy", "drama", "biographical", "food", "inspirational"],
        keywords: ["cooking", "blogging", "french cuisine", "passion", "dual story", "aspiration"],
        moods: ["Nostalgic, Heartfelt, Comedy, Sharp Dialogue, Cooking, US, Oscar Nominee, Based on Real Life, Feel-Good, Food, Drama, Movie"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            subtitles: ["English", "Spanish (Latin America)", "French", "German", "Chinese (Simplified)", "Chinese (Traditional)", "Japanese", "Portuguese", "Italian", "Korean"],
            cast: ["Meryl Streep, Amy Adams, Stanley Tucci, Chris Messina, Linda Emond, Helen Carey, Mary Lynn Rajskub, Jane Lynch, Joan Juliet Buck"]
        },
        trailers: [
            {
                id: "julie-and-julia-trailer-01",
                title: "Julie & Julia Official Trailer",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417967/julie-and-julia_thumbnail_01_vq8kkp.jpg",
                videoUrl: "https://www.youtube.com/watch?v=ozRK7VXQl-k",
                duration: "2:33"
            }
        ]
    },

    
    // =============================================================
    // =============================================================
    // =============================================================
    // =============================================================
    // VON: (Genre: HORROR, BLOOD, DARK)
    // =============================================================
    // =============================================================
    // =============================================================





















    // =============================================================
    // =============================================================
    // =============================================================
    // =============================================================
    // PAU (GENRE: ACTION, FANTASY, SCI-FI)
    // =============================================================
    // =============================================================
    // =============================================================
























    // =============================================================
    // =============================================================
    // =============================================================
    // =============================================================
    // KAI JOTIC (GENRE: KIDS, ANIME, CARTOONS)
    // =============================================================
    // =============================================================
    // =============================================================

    {
        id: "sea-of-love",
        title: "Sea of Love",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/sea-of-love_titlejpg_rvtt5h.webp",
        description: "Four sea-animal friends go on gentle underwater adventures filled with fun and friendship.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/sea-of-love_poster_zcujpj.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/sea-of-love_backdrop_w45bln.webp",
        videoUrl: "https://youtu.be/d80R_f3dwYE",
        tags: { type: "TV Series", genres: ["Kids", "Animation", "Family"], rated: "TV-Y", status: "Released" },
        meta: { release: "2022", releaseDate: "2022-07-19", quality: "HD", duration: "6-8m" },
        stats: { popularity: 840, imdb: "8.2/10", popularityChange: "▲ 45" },
        categories: ["kids", "animation"],
        keywords: ["feel-good", "underwater", "animals"],
        moods: ["Feel-Good, Kids, Deep Sea, Thai, Animals, Short Form, Ocean Adventures, Gentle Stories"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Japanese, Mandarin (Guoyu)"],
            subtitles: ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Guy William Burnett, Anchasa Bhurichayawarodom, Tarakorn Visessintop, Tarit Matt Amatayakul, Athalie de Koning, Kelly B. Jones"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Sea of Love (Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418113/sea-of-love_thumbnail_wvulbu.jpg",
                videoUrl: "https://youtu.be/kCCom7DgeOA?si=rVKwfReyImklz6MJ",
                duration: "1m 40s"
            }
        ]
    },
    {
        id: "spirited-away",
        title: "Spirited Away",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418194/spirited-away_titlemp4_gfsxlk.webp",
        description: "A 10-year-old girl named Chihiro wanders into a mysterious world where a witch rules — and those who disobey her are turned into animals.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417845/spirited-away_poster_er0dbr.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/spirited-away_backdrop_uc6oxn.webp",
        videoUrl: "https://youtu.be/cglTHSfWYiY",
        tags: { type: "Movie", genres: ["Animation", "Fantasy", "Adventure"], rated: "PG", status: "Released" },
        meta: { release: "2001", releaseDate: "2001-07-20", quality: "HD", duration: "2h 5m" },
        stats: { popularity: 980, imdb: "8.6/10", popularityChange: "▲ 15" },
        categories: ["animation", "fantasy", "anime"],
        keywords: ["studio ghibli", "magic", "spirits", "hayao miyazaki", "coming of age"],
        moods: ["Whimsical, Surreal, Anime Movies, Girl Power, Myths & Legends, Japanese, Critically Acclaimed, Imaginative, Ghosts, Fantasy, Classic, Creatures, Spooky"],
        details: {
            watchOffline: "Available to download",
            audio: ["Japanese [Original], English - Audio Description, English, French, Spanish, German, Italian, Mandarin"],
            subtitles: ["English, French, Spanish, Japanese, German, Italian, Chinese (Simplified)"],
            cast: ["Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naito, Yasuko Sawaguchi, Tatsuya Gashuin, Ryunosuke Kamiki, Yumi Tamai, Yo Oizumi, Bunta Sugawara"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Spirited Away (Official Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418114/spirited-away_thumbnail_ugkamh.avif",
                videoUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
                duration: "2m 26s"
            }
        ]
    },
    {
        id: "ponyo",
        title: "Ponyo",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/ponyo_title_exunul.webp",
        description: "A five-year-old boy named Sosuke develops a friendship with Ponyo, a young goldfish princess who longs to become human.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417791/10-ponyo_dizqgd.avif",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417723/ponyo_backdrops_trvayg.avif",
        videoUrl: "https://youtu.be/qV1Mzw9Gir8?si=aJ2rRDB6EJInyWaH",
        tags: { type: "Movie", genres: ["Family Movies", "Kids & Family Movies", "Japanese", "Anime Movies"], rated: "G", status: "Released" },
        meta: { release: "2008", releaseDate: "2008-07-19", quality: "HD", duration: "1h 41m" },
        stats: { popularity: 900, imdb: "7.6/10", popularityChange: "▲ 900" },
        categories: ["latest", "anime", "kids"],
        keywords: ["fish", "magic", "ocean", "friendship", "transformation", "deep sea"],
        moods: ["Whimsical, Surreal, Girl Power, Critically Acclaimed, Magical, Ocean Adventures, Being Brave"],
        details: {
            watchOffline: "Available to download",
            audio: ["English", "Spanish (Latin America)", "Japanese [Original]", "Mandarin"],
            subtitles: ["English", "Spanish (Latin America)", "Filipino", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)"],
            cast: ["Tomoko Yamaguchi", "Kazushige Nagashima", "Yuki Amami", "George Tokoro", "Hiroki Doi", "Yuria Nara", "Akiko Yano", "Kazuko Yoshiyuki", "Tomoko Naraoka"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Ponyo (Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418115/ponyo_thumbnail_fvt9iy.jpg",
                videoUrl: "https://youtu.be/qV1Mzw9Gir8?si=aJ2rRDB6EJInyWaH",
                duration: "1m 17s"
            }
        ]
    },
    {
        id: "duck-duck-goose",
        title: "Duck Duck Goose",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418152/duck-duck-goose-title_ysqalj.webp",
        description: "As his flock's annual migration nears, a carefree goose is grounded with an injury and takes a pair of lost ducklings under his wing.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417775/03-duck-goose_lbjqez.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417723/duck-duck-goose_backdrop_qijsub.webp",
        videoUrl: "https://youtu.be/TSdIQ0d5n20", 
        tags: { type: "Movie", genres: ["Animation", "Family", "Comedy"], rated: "PG", status: "Released" },
        meta: { release: "2018", releaseDate: "2018-07-20", quality: "HD", duration: "1h 31m" },
        stats: { popularity: 400, imdb: "5.7/10", popularityChange: "▼ 10" },
        categories: ["kids"],
        keywords: ["birds", "migration", "family", "animals", "adventure"],
        moods: ["Heartfelt", "Goofy", "Kids", "Animals", "US", "Comedy", "Movie", "Unlikely Friends", "Talking Animal", "Cute"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America), Cantonese, Mandarin"],
            subtitles: ["English, Spanish (Latin America), Chinese (Traditional)"],
            cast: ["Jim Gaffigan, Zendaya, Lance Lim, Greg Proops, Reggie Watts, Carl Reiner, Jennifer Grey, Stephen Fry, Diedrich Bader, Natasha Leggero"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "Duck Duck Goose (Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/duck-duck-goose_thumbnail_retple.avif", 
                videoUrl: "https://www.youtube.com/watch?v=34ClfQttSLA",
                duration: "1m 43s"
            }
        ]
    },
    {
        id: "in-your-dreams",
        title: "In Your Dreams",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418175/in-your-dreams_title_eedykx.webp",
        description: "A sister and brother journey into the wildly absurd landscape of their own dreams to ask the wish-granting Sandman for the perfect family.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417808/in-your-dreams_poster_buwzrq.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417731/in-your-dream_backdrop_sex7f6.webp",
        videoUrl: "https://youtu.be/Jb761ywIY0M",
        tags: { type: "Movie", genres: ["Family Movies, Kids & Family Movies, Comedy Movies, US Movies"], rated: "PG", status: "Released" },
        meta: { release: "2025", releaseDate: "2025-11-14", quality: "HD", duration: "1h 39m" },
        stats: { popularity: 1500, imdb: "7.8/10", popularityChange: "▲ 120" },
        categories: ["kids", "animation", "new releases"],
        keywords: ["dreams", "sandman", "siblings", "family", "magic", "adventure"],
        moods: ["Whimsical, Imaginative, Kids, Girl Power, Family Relationship, US, Critically Acclaimed, Heartfelt, Comedy, Movie, Siblings, Everyday Smarts, Life Lessons"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino - Audio Description, Filipino, Japanese - Audio Description, Japanese, Mandarin (Guoyu)"],
            subtitles: ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Jolie Hoang-Rappaport, Elias Janssen, Craig Robinson, Simu Liu, Cristin Milioti, Omid Djalili, Gia Carides, SungWon Cho, Zachary Noah Pise"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "In Your Dreams (Official Teaser)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417945/in-your-dream_trailer-01_jmco5d.jpg",
                videoUrl: "https://youtu.be/DHqLhLee8Gc?si=ZjptX2xo0h9B-hj-",
                duration: "1m 33s"
            },
            {
                id: "trailer-2",
                title: "In Your Dreams (Official Teaser)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417967/in-your-dream_trailer-02_yadzon.jpg",
                videoUrl: "https://youtu.be/IG1p9fhNIks?si=SOxLE2cgCh9WyBY5",
                duration: "1m 15s"
            }
        ]
    },
    {
        id: "my-fathers-dragon",
        title: "My Father's Dragon",
        titleImage: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418176/my-fathers-dragon_title_ejrllg.webp",
        description: "A young boy leaves the city of Nevergreen and journeys to the mysterious Wild Island, where he finds ferocious beasts — and the friendship of a lifetime.",
        posterUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/my-fathers-dragon_poster_jrxyks.webp",
        backdropUrl: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/my-fathers-dragon_backdrop_xk04pd.webp",
        videoUrl: "https://youtu.be/DMt-sBJ8gA8",
        tags: { type: "Movie", genres: ["Family Movies, Kids & Family Movies, Movies Based on Books, US Movies"], rated: "PG", status: "Released" },
        meta: { release: "2022", releaseDate: "2022-11-11", quality: "HD", duration: "1h 44m" },
        stats: { popularity: 2100, imdb: "7.1/10", popularityChange: "▲ 90" },
        categories: ["kids", "animation", "adventure", "family"],
        keywords: ["dragon", "island", "adventure", "friendship", "boy", "rescue"],
        moods: ["Imaginative, Heartfelt, Kids, Myths & Legends, US, Critically Acclaimed, Based on a Book, Feel-Good, Underdog, Movie, Dragons, Mythical Creatures, Everyday Smarts"],
        details: {
            watchOffline: "Available to download",
            audio: ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese, Mandarin (Guoyu)"],
            subtitles: ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            cast: ["Jacob Tremblay, Gaten Matarazzo, Golshifteh Farahani, Whoopi Goldberg, Ian McShane, Dianne Wiest, Rita Moreno, Chris O'Dowd, Judy Greer, Alan Cumming"]
        },
        trailers: [
            {
                id: "trailer-1",
                title: "My Father's Dragon (Official Trailer)",
                thumbnail: "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417969/my-fathers-dragon_thumbnail_wgbbvf.jpg",
                videoUrl: "https://youtu.be/0giW36Fb69c?si=V4RuRll_Kw0II0Cd",
                duration: "2m 39s"
            }
        ]
    },
    {
        "id": "trolls-holiday",
        "title": "Trolls Holiday",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418231/trolls-holiday_title_ayrrsq.webp",
        "description": "When Queen Poppy realizes that Bridget and the Bergens don't have any holidays, she hatches a plan for Branch and the Snack Pack to help create one.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417866/trolls-holiday_poster_p9bg5q.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/trolls-holiday_backdrop_nlltqs.webp",
        "videoUrl": "https://youtu.be/RiOieGxyxuM",
        "tags": { "type": "Movie", "genres": ["Kids' TV, Kids & Family Movies, Kids Music, Comedy Movies, TV Comedies, TV Cartoons, Musicals, US Movies"], "rated": "TV-Y7", "status": "Released" },
        "meta": { "release": "2017", "releaseDate": "2017-11-24", "quality": "HD", "duration": "26m" },
        "stats": { "popularity": 1500, "imdb": "6.1/10", "popularityChange": "▲ 50" },
        "categories": ["kids", "animation", "musical", "holiday", "family"],
        "keywords": ["trolls", "holiday", "christmas", "singing", "poppy", "branch", "friendship", "bergens"],
        "moods": ["Musical", "Heartwarming", "Colorful", "Kids", "Funny", "Holiday Spirit", "Feel-Good", "Animation"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Cantonese"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Anna Kendrick, Justin Timberlake, Zooey Deschanel, Christopher Mintz-Plasse, James Corden, Ron Funches, Kunal Nayyar, Aino Jawo, Caroline Hjelt, Walt Dohrn"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Trolls Holiday (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418121/trolls-holiday_thumbnail_urfddl.jpg",
                "videoUrl": "https://youtu.be/xyjm5VQ11TQ?si=l5OPNqGU85szRRFW",
                "duration": "59s"
            }
        ]
    },
    {
        "id": "shaun-the-sheep-the-flight-before-christmas",
        "title": "Shaun the Sheep: The Flight Before Christmas",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418194/shaun-the-sheep-the-flight-before-christmas_title_cbur7i.webp",
        "description": "Shaun's seasonal excitement turns to dismay when a farmhouse raid to get bigger stockings for the Flock inadvertently leads to Timmy going missing. It's a race against time for the Flock to get Timmy back before he becomes someone else’s present.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417837/shaun-the-sheep-the-flight-before-christmas_poster_x4nryn.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/shaun-the-sheep-the-flight-before-christmas_backdrop_axtlma.webp",
        "videoUrl": "https://youtu.be/bDsGY6SvYG4?si=f9z1nyH4kuKSmsAz",
        "tags": { "type": "Movie", "genres": ["Family Time TV, Kids' TV, Family Movies, Kids & Family Movies, British, Comedy Movies, TV Comedies, TV Cartoons"], "rated": "TV-Y", "status": "Released" },
        "meta": { "release": "2021", "releaseDate": "2021-12-03", "quality": "HD", "duration": "30m" },
        "stats": { "popularity": 1800, "imdb": "7.3/10", "popularityChange": "▲ 75" },
        "categories": ["kids", "animation", "comedy", "holiday", "family"],
        "keywords": ["sheep", "christmas", "rescue", "farm", "funny", "animals", "claymation", "aardman"],
        "moods": ["Feel-Good, Goofy, Kids, Stop Motion, Animal Friends, British, Annie Award Nominee, Animals, Comedy, TV, Dogs, Pets, Teamwork"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, No Dialogue [Original]"],
            "subtitles": ["English"],
            "cast": ["Justin Fletcher, John Sparkes, Laura Aikman, Marcus Brigstocke, Kate Harbour, Anna Leong-Brophy"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Shaun the Sheep: The Flight Before Christmas (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418115/shaun-the-sheep-the-flight-before-christmas_thumbnail_zusonm.jpg",
                "videoUrl": "https://youtu.be/bM9HfzdH9zU?si=ZoVHRXt5eVMHxHSF",
                "duration": "1m 30s"
            }
        ]
    },
    {
        "id": "a-trash-truck-christmas",
        "title": "A Trash Truck Christmas",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418150/a-trash-truck-christmas_title_kqjb8s.webp",
        "description": "When Santa crash-lands in the junkyard on Christmas Eve, Hank, Trash Truck and their animal friends all have a hand in rescuing the holiday for everyone.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417768/a-trash-truck-christmas_poster_vdrprw.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417721/a-trash-truck-christmas_backdrop_kzlkzo.webp",
        "videoUrl": "https://youtu.be/8JVsC7dBjQk",
        "tags": { "type": "Movie", "genres": ["Kids' TV, Kids & Family Movies, TV Cartoons, US Movies"], "rated": "TV-Y", "status": "Released" },
        "meta": { "release": "2020", "releaseDate": "2020-12-11", "quality": "HD", "duration": "28m" },
        "stats": { "popularity": 1300, "imdb": "6.9/10", "popularityChange": "▲ 40" },
        "categories": ["kids", "animation", "holiday", "family", "adventure"],
        "keywords": ["truck", "garbage truck", "santa", "christmas", "hank", "friendship", "rescue", "animals"],
        "moods": ["Feel-Good, Kids, Animals, US, Friendship, TV, Cars, Trucks & Trains, Everyday Smarts, Life Lessons"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), French, German, Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Henry Keane, Glen Keane, Lucas Neff, Brian Baumgartner, Jackie Loeb, John DiMaggio"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "A Trash Truck Christmas (Clip)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417868/a-trash-truck-christmas_thumbnail_xg64bl.jpg",
                "videoUrl": "https://youtu.be/i2UT4DQUfMg?si=n4VO_7B-8Tpa1L7q",
                "duration": "1m 49s"
            }
        ]
    },
    {
        "id": "sesame-street-the-nutcracker",
        "title": "Sesame Street: The Nutcracker",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418194/sesame-street-the-nutcracker_title_zbf4hb.webp",
        "description": "Elmo is determined to make it the best Christmas ever for his puppy, Tango. When a mischievous mouse takes Tango's new toy, they embark on a fantastical adventure through magical lands to get it back.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417836/sesame-street-the-nutcracker_poster_mvewr2.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/sesame-street-the-nutcracker_backdrop_qfasgb.webp",  
        "videoUrl": "https://youtu.be/uqQyxIoYLRI",
        "tags": { "type": "Special", "genres": ["Kids' TV, Kids & Family Movies, TV Shows Based on Books, Movies Based on Books, TV Cartoons, US Movies"], "rated": "TV-Y", "status": "Released" },
        "meta": { "release": "2022", "releaseDate": "2022-12-01", "quality": "HD", "duration": "26m" },
        "stats": { "popularity": 1400, "imdb": "6.8/10", "popularityChange": "▲ 60" },
        "categories": ["kids", "animation", "musical", "holiday", "family"],
        "keywords": ["elmo", "tango", "nutcracker", "christmas", "adventure", "friendship", "mouse", "sesame street"],
        "moods": ["Feel-Good, Kids, Friendship, US, Based on a Book, TV, PBS, Gentle Stories, Singing & Dancingd"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Ryan Dillon, Leslie Carrara-Rudolph, David Rudman, Eric Jacobson, Matt Vogel, Tyler Bunch, Stephanie D'Abruzzo, Peter Linz, Royina Patel, Donovan Monzon"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Sesame Street: The Nutcracker (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418114/sesame-street-the-nutcracker_thumbnail_rfjqyv.jpg",
                "videoUrl": "https://youtu.be/QuFAMGymsrs?si=TrjasAdqCB_6ux1U",
                "duration": "1m 01s"
            }
        ]
    },
    {
        "id": "the-monkey-king",
        "title": "The Monkey King",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-monkey-king_title_ph0jfb.webp",
        "description": "A rebellious Monkey and his magical stick battle demons, dragons, and gods on an epic quest to become immortal, learning about friendship and humility along the way.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417855/the-monkey-king_poster_q7yykl.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/the-monkey-king_backdrop_udf7sy.webp",
        "videoUrl": "https://youtu.be/2hfcHfedFjo",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Comedy Movies, Movies Based on Books, US Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2023", "releaseDate": "2023-08-18", "quality": "HD", "duration": "1h 32m" },
        "stats": { "popularity": 2250, "imdb": "5.9/10", "popularityChange": "▲ 45" },
        "categories": ["family", "fantasy", "adventure", "animation", "comedy"],
        "keywords": ["monkey king", "journey", "legend", "fantasy", "dragon", "adventure", "action"],
        "moods": ["Imaginative, Action Comedy, Monkeys & Apes, Ancient Times, US, Hollywood Movie, Based on a Book, Animals, Kids, Unlikely Friends, Heroes vs. Villians"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese, Cantonese, Mandarin (Putonghua), Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Jimmy O. Yang, Bowen Yang, Jolie Hoang-Rappaport, Jo Koy, BD Wong, Ron Yuan, Nan Li, Stephanie Hsu"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Monkey King (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418120/the-monkey-king_thumbnail_01_wwi5vp.jpg",
                "videoUrl": "https://youtu.be/-Ao79QJNE-s?si=f3ucI7sngNwP-pUN",
                "duration": "2m 26s"
            }
        ]
    },
    {
        "id": "stand-by-me-doraemon-2",
        "title": "STAND BY ME Doraemon 2",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418195/stand-by-me-doraemon-2_title_b4bg4r.webp",
        "description": "Nobita travels back in time to meet his beloved grandmother once more, but his emotional journey leads to unexpected challenges as he confronts his future and the meaning of true family.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417845/stand-by-me-doraemon-2_poster_abobix.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417753/stand-by-me-doraemon-2_backdrop_noh1ke.webp",
        "videoUrl": "https://youtu.be/3WNAKFCfbdk?si=BB41L6fPe_rbwS8h",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Japanese, Anime Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2020", "releaseDate": "2020-11-20", "quality": "HD", "duration": "1h 36m" },
        "stats": { "popularity": 3100, "imdb": "7.4/10", "popularityChange": "▲ 32" },
        "categories": ["family", "animation", "drama", "sci-fi", "adventure"],
        "keywords": ["doraemon", "nobita", "time travel", "grandmother", "friendship", "future", "family"],
        "moods": ["Imaginative, Heartfelt, Anime Movies, Wedding, Japanese, Fujio F. Fujiko, Feel-Good, Friendship, Kids, Adventure"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America), Filipino, Japanese - Audio Description, Japanese [Original], Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Japanese, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Wasabi Mizuta, Megumi Ohara, Yumi Kakazu, Subaru Kimura, Tomokazu Seki, Nobuko Miyamoto, Satoshi Tsumabuki"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "STAND BY ME Doraemon 2 (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418114/stand-by-me-doraemon-2_thumbnail_01_vd0bje.jpg",
                "videoUrl": "https://youtu.be/A0wg3Zkxq1c?si=pjYhVpAG0Zwl85ZV",
                "duration": "1m 55s"
            },
            {
                "id": "trailer-2",
                "title": "STAND BY ME Doraemon 2 (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418116/stand-by-me-doraemon-2_thumbnail_02_jzfwus.jpg",
                "videoUrl": "https://youtu.be/3WNAKFCfbdk?si=BB41L6fPe_rbwS8h",
                "duration": "4m 29s"
            }
        ]
    },
    {
        "id": "home-2015",
        "title": "Home",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418175/home_title_p0whci.webp",
        "description": "When misfit alien Oh mistakenly sends a party invite to the entire galaxy, he goes on the run to avoid trouble and befriends spunky human girl Tip.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417804/home_poster_mnaodd.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417730/home_backdrop_tvjvrm.webp",
        "videoUrl": "https://youtu.be/C_iQ5aoxO54?si=4Qlf_FcDb4E7zxdL",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Comedy Movies, Movies Based on Books, US Movies"], "rated": "7+", "status": "Released" },
        "meta": { "release": "2015", "releaseDate": "2015-03-27", "quality": "HD", "duration": "1h 34m" },
        "stats": { "popularity": 4200, "imdb": "6.6/10", "popularityChange": "▲ 55" },
        "categories": ["kids", "family", "animation", "comedy", "adventure"],
        "keywords": ["boov", "alien", "friendship", "adventure", "earth", "tip", "oh"],
        "moods": ["Imaginative, Goofy, Sci-Fi Adventure, Friendship, US, Hollywood Movie, Based on a Book, Kids, Comedy, Aliens, Super Team, Unlikely Friends"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Cantonese, Mandarin"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Jim Parsons, Rihanna, Steve Martin, Jennifer Lopez, Matt Jones, Brian Stepanek, April Lawrence"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Home (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417921/home_thumbnail_dhz9zo.jpg",
                "videoUrl": "https://youtu.be/MyqZf8LiWvM?si=HEUoKKDs0hA2Aj7B",
                "duration": "2m 30s"
            }
        ]
    },
    {
        "id": "the-spiderwick-chronicles",
        "title": "The Spiderwick Chronicles",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-spiderwick-chronicles_title_u3rndf.webp",
        "description": "When the city-raised Grace siblings move to a tumbledown country mansion, they discover a hidden world of magical creatures in their own backyard.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417856/the-spiderwick-chronicles_poster_ffvnhe.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/the-spiderwick-chronicles_backdrop_evztam.webp",
        "videoUrl": "https://youtu.be/hWUscM7FTtM",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Movies Based on Books, US Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2008", "releaseDate": "2008-02-14", "quality": "HD", "duration": "1h 36m" },
        "stats": { "popularity": 2800, "imdb": "6.5/10", "popularityChange": "▲ 40" },
        "categories": ["family", "adventure", "fantasy", "kids", "mystical"],
        "keywords": ["spiderwick", "twins", "magic", "fairies", "goblins", "adventure", "fantasy", "book"],
        "moods": ["Whimsical, Magical, Kids, Fairy Tale, US, Hollywood Movie, Based on a Book, Imaginative, Spooky, Nerds Rule, Heroes vs. Villians"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Freddie Highmore, Mary-Louise Parker, Sarah Bolger, Joan Plowright, David Strathairn, Nick Nolte, Seth Rogen, Andrew McCarthy, Martin Short"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Spiderwick Chronicles (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418120/the-spiderwick-chronicles_thumbnail_xmic8g.jpg",
                "videoUrl": "https://youtu.be/blmTkSBxhmE?si=yBVgH96rgNmau4A4",
                "duration": "2m 23s"
            }
        ]
    },
    {
        "id": "howls-moving-castle",
        "title": "Howl’s Moving Castle",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418175/howls-moving-castle_backdrop_title_wrkj7m.webp",
        "description": "Teenager Sophie works in her late father's hat shop in a humdrum town, but things get interesting when she's transformed into an elderly woman.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417808/howls-moving-castle_poster_bq4kri.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417730/howls-moving-castle_backdrop_yakrju.webp",
        "videoUrl": "https://youtu.be/iwROgK94zcM?si=r8J_sdsG6w4ys13L",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Japanese, Anime based on Books, Movies Based on Books, Anime Moviese"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2004", "releaseDate": "2004-11-20", "quality": "HD", "duration": "1h 59m" },
        "stats": { "popularity": 5300, "imdb": "8.2/10", "popularityChange": "▲ 75" },
        "categories": ["animation", "fantasy", "adventure", "family", "romance"],
        "keywords": ["howl", "sophie", "moving castle", "magic", "wizard", "curse", "adventure", "romance"],
        "moods": ["Magical, Imaginative, Anime Movies, Visually Striking, Japanese, Oscar Nominee, Based on a Book, Heartfelt, Fantasy, Spells & Sorcery, Love, Award-Winning"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America), Japanese [Original], Mandarin"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Japanese, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Chieko Baisho, Takuya Kimura, Akihiro Miwa, Tatsuya Gashuin, Ryunosuke Kamiki, Mitsunori Isaki, Yo Oizumi, Akio Otsuka, Daijiro Harada, Haruko Kato"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Howl’s Moving Castle (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417933/howls-moving-castle_thumbnail_stupfj.jpg",
                "videoUrl": "https://youtu.be/iwROgK94zcM?si=r8J_sdsG6w4ys13L",
                "duration": "1m 36s"
            }
        ]
    },

    {
        "id": "the-worst-witch",
        "title": "The Worst Witch",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-worst-witch_title_xyjj3l.webp",
        "description": "After stumbling into a school for witches, a bumbling heroine comes to realize that she just might belong there. Based on Jill Murphy's beloved books.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417856/the-worst-witch_poster_apttkm.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/the-worst-witch_backdrop_bqyfcv.webp",
        "videoUrl": "https://youtu.be/5jL1aDUeKkg",
        "tags": { "type": "TV Series", "genres": ["Kids' TV, British, TV Shows Based on Books"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2017", "releaseDate": "2017-10-01", "quality": "HD", "duration": "45m per episode" },
        "stats": { "popularity": 1850, "imdb": "7.1/10", "popularityChange": "▲ 28" },
        "categories": ["family", "fantasy", "kids", "adventure", "magic"],
        "keywords": ["mildred hubble", "witch", "magic school", "friendship", "adventure", "courage"],
        "moods": ["Magical, Imaginative, Kids, Girl Power, British, Based on a Book, Feel-Good, Friendship, TV, Spells & Sorcery, School, Heroes vs. Villians"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Mandarin"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Bella Ramsey, Lydia Page, Clare Higgins, Raquel Cassidy, Meibh Campbell, Jenny Richardson, Miriam Petche, Tallulah Milligan, Wendy Craig, Shauna Shim"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Worst Witch (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418121/the-worst-witch_thumbnail_01_dxctf6.jpg",
                "videoUrl": "https://youtu.be/Iu4ME62vI8M?si=SqScQstNMWMzQLjZ",
                "duration": "1m 55s"
            },
            {
                "id": "trailer-2",
                "title": "The Worst Witch (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418121/the-worst-witch_thumbnail_02_wifnjz.jpg",
                "videoUrl": "https://youtu.be/vHK44a_MvnM?si=oroJBo-Va6g2jxze",
                "duration": "1m 59s"
            },
            {
                "id": "trailer-3",
                "title": "The Worst Witch (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418122/the-worst-witch_thumbnail_03_lm3rjt.jpg",
                "videoUrl": "https://youtu.be/etqJTKEw-ig?si=13QgpfuaqQHpeuYH",
                "duration": "1m 43s"
            }
        ]
    },
    {
        "id": "winx-club-the-magic-is-back",
        "title": "Winx Club - The Magic is Back",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418231/winx-club-the-magic-is-back-title_wzzegi.webp",
        "description": "16-year-old Bloom finds out that she's a fairy, and enrolls in a magical school where she grows her powers, meets new friends and battles dark forces.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417867/winx-club-the-magic-is-back_poster_d3cgx7.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/winx-club-the-magic-is-back_backdrop_ss9sfn.webp",
        "videoUrl": "https://youtu.be/8EdUy6D1HuI",
        "tags": { "type": "Movie", "genres": ["Kids' TV, Italian, TV Cartoons"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2023", "releaseDate": "2023-05-19", "quality": "HD", "duration": "1h 20m" },
        "stats": { "popularity": 1200, "imdb": "6.3/10", "popularityChange": "▲ 30" },
        "categories": ["animation", "fantasy", "adventure", "kids", "family"],
        "keywords": ["winx club", "fairies", "magic", "adventure", "friendship", "magical dimension", "evil"],
        "moods": ["Magical, Imaginative, Kids, Girl Power, Italian, Heartfelt, Myths & Legends, TV, Spells & Sorcery, Gal Pals, Mythical Creatures"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Mandarin (Guoyu)"],
            "subtitles": ["English"],
            "cast": ["Kate Bristol, Courtney Shaw, Sonia Victoria Werner, Zuri Washington, Jenny Chan, Sarah Faye Beard, Cat Protano, Caroline Spinola, Allen Winter, Nicholas Corda"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Winx Club - The Magic is Back (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418150/winx-club-the-magic-is-back_thumbnail_af4ywo.jpg",
                "videoUrl": "https://youtu.be/VR0i6lthTDM?si=tPlKhU732EWbF_u9",
                "duration": "2m 38s"
            }
        ]
    },
    {
        "id": "avatar-the-last-airbender",
        "title": "Avatar: The Last Airbender",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418148/avatar-the-last-airbender_title_r2yjn5.webp",
        "description": "Siblings Katara and Sokka wake young Aang from a long hibernation and learn he's an Avatar, whose air-bending powers can defeat the evil Fire Nation.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417774/avatar-the-last-airbender_poster_flzdn9.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417722/avatar-the-last-airbender_backdrop_mxccpl.webp",
        "videoUrl": "https://youtu.be/c9d_eA-cOME",
        "tags": { "type": "TV Series", "genres": ["Family Time TV, Kids' TV, TV Cartoons, Fantasy TV Shows"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2005", "releaseDate": "2005-02-21", "quality": "HD", "duration": "23m per episode" },
        "stats": { "popularity": 6500, "imdb": "9.2/10", "popularityChange": "▲ 80" },
        "categories": ["anime", "animation", "adventure", "fantasy", "kids", "action"],
        "keywords": ["aang", "avatar", "airbender", "katara", "sokka", "fire nation", "bending", "friendship"],
        "moods": ["Rousing, Imaginative, Fantasy, Cult Favorite, Superhero, Critically Acclaimed, Exciting, Superpowers, Kids, TV, Classic, Race Against Time, Nickelodeon"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original]"],
            "subtitles": ["English"],
            "cast": ["Zach Tyler, Mae Whitman, Jack De Sena, Dee Bradley Baker, Dante Basco, Jessie Flower, Mako Iwamatsu"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Avatar: The Last Airbender (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417868/avatar-the-last-airbender_thumbnail_ymca3x.webp",
                "videoUrl": "https://youtu.be/ooVvH2IYz0w?si=Y7-j-ALQ1YkiRY1p",
                "duration": "2m 52s"
            }
        ]
    },
    {
        "id": "pokemon-the-series-xy",
        "title": "Pokémon the Series: XY",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/pokemon-the-series-xy_title_vth0w2.webp",
        "description": "Fresh adventures and dreams draw Ash and Pikachu to Kalos, where they make new friends, encounter Pokémon and uncover intriguing mysteries.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/pokemon-the-series-xy_poster_zzamrx.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417752/pokemon-the-series_backdrop_woojrs.webp",
        "videoUrl": "https://youtu.be/2n_3ubi-2PQ?si=_JhdJe88QR5SxhEM",
        "tags": { "type": "TV Series", "genres": ["Kids' TV, Action Anime, Japanese, Anime based on a Video Game, Anime Series"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2013", "releaseDate": "2013-10-17", "quality": "HD", "duration": "22m per episode" },
        "stats": { "popularity": 4800, "imdb": "7.5/10", "popularityChange": "▲ 65" },
        "categories": ["anime", "animation", "adventure", "action", "fantasy", "kids"],
        "keywords": ["ash ketchum", "pokemon", "kalos region", "serena", "battle", "adventure", "friendship"],
        "moods": ["Imaginative, Exciting, Action, Superpowers, Japanese, Based on a Video Game, Anime, Kids, TV, Monsters, Heroes vs. Villians"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Ikue Otani, Sarah Natochenny, Mike Liscio, Haven Paschall, Alyson Leigh Rosenfeld, Rodger Parsons, Jimmy Zoppi, Michele Knotz"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Pokémon the Series: XY (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418113/pokemon-the-series-xy_thumbnail_fz8eet.webp",
                "videoUrl": "https://youtu.be/2n_3ubi-2PQ?si=_JhdJe88QR5SxhEM",
                "duration": "0m 32s"
            }
        ]
    },
    {
        "id": "pokemon-mewtwo-strikes-back-evolution",
        "title": "Pokémon: Mewtwo Strikes Back - Evolution",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/pokemon-mewtwo-strikes-back-evolution_title_v96bfp.webp",
        "description": "After accepting an invitation from a mysterious trainer, Ash, Misty and Brock meet Mewtwo, an artificially created Pokémon who wants to do battle.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/pokemon-mewtwo-strikes-back-evolution_poster_kglcgc.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417752/pokemon-mewtwo-strikes-back-evolution_backdrop_herte0.webp",
        "videoUrl": "https://youtu.be/Ex6l27QQA54",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Japanese, Anime based on a Video Game, Anime Moviesy"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2019", "releaseDate": "2019-07-12", "quality": "HD", "duration": "1h 25m" },
        "stats": { "popularity": 8000, "imdb": "6.5/10", "popularityChange": "▲ 50" },
        "categories": ["anime", "animation", "adventure", "action", "fantasy", "kids"],
        "keywords": ["pokemon", "mewtwo", "ash ketchum", "pikachu", "battle", "friendship", "identity"],
        "moods": ["Imaginative, Exciting, Anime Movies, Superpowers, Japanese, Based on a Video Game, Kids, Monsters, Heroes vs. Villians, Action"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Mandarin"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Japanese, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Sarah Natochenny, Ikue Otani, Dan Green, Bill Rogers, Michele Knotz, Alyson Leigh Rosenfeld, Rodger Parsons"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Pokémon: Mewtwo Strikes Back - Evolution (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418030/pokemon-mewtwo-strikes-back-evolution_thumbnail_ie1ti1.jpg",
                "videoUrl": "https://youtu.be/D0zYJ1RQ-fs?si=00u_UANdH2N7gc_0",
                "duration": "1m 57s"
            }
        ]
    },
    {
        "id": "one-piece",
        "title": "One Piece: Into the Grand Line",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/one-piece-into-the-grand-line_title_lzqsbj.webp",
        "description": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/one-piece-into-the-grand-line_poster_p4cxyx.avif",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/one-piece-into-the-grand-line_backdrop_nmf3gd.webp",
        "videoUrl": "https://youtu.be/c33JPHwhWl4",
        "tags": { "type": "Movie", "genres": ["TV Action & Adventure, US TV Shows, Fantasy TV Shows, TV Shows Based on Manga", "Action"], "rated": "TV-PG", "status": "Upcoming" },
        "meta": { "release": "2026", "releaseDate": "2026-07-15", "quality": "HD", "duration": "N/A" },
        "stats": { "popularity": 1980, "imdb": "8.9/10", "popularityChange": "▲ 120" },
        "categories": ["featured", "anime", "action"],
        "keywords": ["pirates", "treasure", "sea", "superpowers", "friendship"],
        "moods": ["Rousing, Imaginative, Adventure, Epic World, Pirates, Critically Acclaimed, Based on Manga, Irreverent, Treasure Hunt, Fantasy, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino - Audio Description, Filipino, Japanese, Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Iñaki Godoy, Emily Rudd, Mackenyu, Jacob Romero Gibson, Taz Skylar, Vincent Regan, Jeff Ward, Morgan Davies, Michael John Dorman"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "One Piece (Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418005/one-piece-into-the-grand-line_thumbnail_01_appwjw.jpg",
                "videoUrl": "https://youtu.be/5jD2ex6m0T8?si=gOvURp3Ij4Iy1vbO",
                "duration": "1m 31s"
            },
            {
                "id": "trailer-2",
                "title": "One Piece (Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418019/one-piece-into-the-grand-line_thumbnail_02_xh8g8b.jpg",
                "videoUrl": "https://youtu.be/i6KuRq3INgM?si=MgNTjXUJntFNJB_y",
                "duration": "1m 44s"
            }
        ]
    },
    {
        "id": "wednesday",
        "title": "Wednesday Season 2",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418231/wednesday_title_oaubds.webp",
        "description": "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417866/wednesday_poster_nfzbhy.jpg",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417767/wednesday_backdrop_mxoryj.webp",
        "videoUrl": "https://youtu.be/TYLW28_PdRY",
        "tags": { "type": "Series", "genres": ["Teen TV Shows, TV Mysteries, TV Comedies, Crime TV Shows, US TV Shows, Fantasy TV Shows"], "rated": "TV-14", "status": "Upcoming" },
        "meta": { "release": "2025", "releaseDate": "2025-10-31", "quality": "HD", "duration": "1 Season" },
        "stats": { "popularity": 920, "imdb": "8.1/10", "popularityChange": "▲ 85" },
        "categories": ["featured", "horror", "mystery"],
        "keywords": ["high-school", "monster", "investigation", "goth", "supernatural"],
        "moods": ["Deadpan, Chilling, Dark Comedy, Psychic Power, US, Golden Globe Nominee, Imaginative, Amateur Detective, Fantasy, Youth, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese - Audio Description, Japanese"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Jenna Ortega, Gwendoline Christie, Catherine Zeta-Jones, Emma Myers, Luis Guzmán, Christina Ricci, Steve Buscemi, Hunter Doohan, Joy Sunday, Riki Lindhome"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Wednesday S2 (Teaser)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418121/wednesday_thumbnail_01_ur2nct.jpg",
                "videoUrl": "https://youtu.be/Di310WS8zLk?si=4xTLMX5U0_vgJSV4",
                "duration": "2m 13s"
            },
            {
                "id": "trailer-2",
                "title": "Wednesday S2 (Teaser)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418149/wednesday_thumbnail_02_v6r4nw.jpg",
                "videoUrl": "https://youtu.be/-OEfPq7RULM?si=iTgo_ulu-5RVRNhJ",
                "duration": "2m 19s"
            }
        ]
    },
    {
        "id": "frankenstein",
        "title": "Frankenstein",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418174/frankenstein_title_dh3vqi.webp",
        "description": "Oscar winner Guillermo del Toro reimagines Mary Shelley's classic tale of a brilliant scientist and the creature his monstrous ambition brings to life.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417800/frankenstein_poster_blnanz.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417729/frankenstein_backdrop_n6ovjc.webp",
        "videoUrl": "https://youtu.be/NjEv5wcWH90",
        "tags": { "type": "Movie", "genres": ["HSci-Fi Movies, Creature Features, Horror Movies, Movies Based on Books, Period Pieces, Monster Movies, US Movies"], "rated": "PG-13", "status": "Released" },
        "meta": { "release": "1931", "releaseDate": "1931-11-21", "quality": "HD", "duration": "1h 9m" },
        "stats": { "popularity": 2900, "imdb": "7.8/10", "popularityChange": "▲ 35" },
        "categories": ["featured", "horror", "classic", "drama", "sci-fi", "fantasy"],
        "keywords": ["frankenstein", "victor frankenstein", "monster", "experiment", "science", "morality", "tragedy"],
        "moods": ["Gory, Sci-Fi Drama, Visually Striking, Tortured Genius, Victorian Era, Critically Acclaimed, Based on a Book, Monsters, Creature Feature, Movie"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese - Audio Description, Japanese"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Oscar Isaac, Jacob Elordi, Mia Goth, Christoph Waltz, Charles Dance, Felix Kammerer, David Bradley, Lars Mikkelsen, Christian Convery"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Frankenstein (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/frankenstein_thumbnail_01_yevkeu.jpg",
                "videoUrl": "https://youtu.be/x--N03NO130?si=Gshd5Cpx8bqWk1CF",
                "duration": "2m 23s"
            },
            {
                "id": "trailer-2",
                "title": "Frankenstein (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/frankenstein_thumbnail_02_pp1tou.jpg",
                "videoUrl": "https://youtu.be/8aulMPhE12g?si=UsFazw5sbW8lqpgu",
                "duration": "2m 24s"
            },
            {
                "id": "trailer-3",
                "title": "Frankenstein (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/frankenstein_thumbnail_03_khhncy.jpg",
                "videoUrl": "https://youtu.be/9WZllcEgWrM?si=C4fGGLH9DrqGOKB7",
                "duration": "1m 57s"
            }
        ]
    },
    {
        "id": "the-elixir",
        "title": "The Elixir",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-elixir_title_fxbve5.webp",
        "description": "An elixir unleashes the undead in a village. A family at odds with one another must unite and fight to survive as their hometown collapses.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-elixir_poster_f6tkzr.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-elixir_backdrop_fted9u.webp",
        "videoUrl": "https://youtu.be/t-C8EHisasc",
        "tags": { "type": "Movie", "genres": ["Indonesian, Horror Movies, Thriller Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2021", "releaseDate": "2021-06-15", "quality": "HD", "duration": "1h 28m" },
        "stats": { "popularity": 1650, "imdb": "6.7/10", "popularityChange": "▲ 20" },
        "categories": ["featured", "fantasy", "adventure", "family", "magic", "mystery"],
        "keywords": ["elixir", "alchemy", "magic", "adventure", "mystery", "powers", "greed"],
        "moods": ["Gory, Scary, Horror, Ensemble, Zombies, Indonesian, Suspenseful, Post Apocalypse, Thriller, Movie"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America) - Audio Description, Spanish (Latin America), Indonesian - Audio Description, Indonesian [Original], Japanese"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Indonesian, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Mikha Tambayong, Eva Celia, Marthino Lio, Dimas Anggara, Varen Arianda Calief, Ardit Erwandha, Claresta Taufan, Donny Damara, Kiki Narendra, Vonny Anggraini"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Elixir (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418116/the-elixir_thumbnail_01_g3o5hf.jpg",
                "videoUrl": "https://youtu.be/XL48F7LGoig?si=2yu5HZh11ZJNPgP1",
                "duration": "2m 09s"
            },
            {
                "id": "trailer-1",
                "title": "The Elixir (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418117/the-elixir_thumbnail_02_og32sm.jpg",
                "videoUrl": "https://youtu.be/nNABgDUcwew?si=crCW9cbuaH-3veUp",
                "duration": "1m 45s"
            }
        ]
    },
    {
        "id": "the-delivery-rider",
        "title": "The Delivery Rider",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-delivery-rider_title_xauyav.webp",
        "description": "A skilled delivery rider navigates a bustling city, facing unexpected challenges, rival gangs, and personal struggles. Through courage and determination, he learns the true meaning of loyalty, friendship, and perseverance.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-delivery-rider_poster_zfodu1.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417760/the-delivery-rider_backdrop_lmuue3.webp",
        "videoUrl": "https://youtu.be/HxqXva57EsM",
        "tags": { "type": "Movie", "genres": ["Filipino, Drama Movies, Action & Adventure Movies, Social Issue Dramas"], "rated": "PG-13", "status": "Released" },
        "meta": { "release": "2022", "releaseDate": "2022-09-10", "quality": "HD", "duration": "1h 40m" },
        "stats": { "popularity": 1850, "imdb": "6.8/10", "popularityChange": "▲ 25" },
        "categories": ["featured", "action", "adventure", "drama", "family", "thriller"],
        "keywords": ["delivery rider", "city", "adventure", "friendship", "loyalty", "challenge", "perseverance"],
        "moods": ["Violent, Emotional, Family Relationship, Filipino, Action & Adventure, Drama, Movie"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["Filipino [Original]"],
            "subtitles": ["English, Filipino"],
            "cast": ["Baron Geisler, Euwenn Mikaell, Jake Cuenca, Jennica Garcia, JC Alcantara, Malou De Guzman, Christian Vasquez, Joem Bascon, Richard Quan, Manuel Chua"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Delivery Rider (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418120/the-delivery-rider_thumbnail_udgnev.jpg",
                "videoUrl": "https://youtu.be/48THNa-BGl0?si=y3qsa00EiuYU9Pvi",
                "duration": "3m 03s"
            }
        ]
    },
    {
        "id": "stranger-things",
        "title": "Stranger Things",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418199/stranger-things_title_dtm1cl.webp",
        "description": "A group of kids in Hawkins, Indiana, uncover a secret government experiment and a portal to a dark parallel dimension called the Upside Down. Together, they face supernatural threats, unravel mysteries, and battle terrifying creatures while growing up.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/stranger-things_poster_gmrsfs.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417756/stranger-things_backdrop_t1dogy.webp",
        "videoUrl": "https://youtu.be/MkyAhJxJ2Z4",
        "tags": { "type": "TV Series", "genres": ["TV Dramas, Sci-Fi TV, Teen TV Shows, US TV Shows, TV Horror"], "rated": "13+", "status": "Released" },
        "meta": { "release": "2016", "releaseDate": "2016-07-15", "quality": "HD", "duration": "50m per episode" },
        "stats": { "popularity": 1480, "imdb": "8.8/10", "popularityChange": "▲ 95" },
        "categories": ["featured", "drama", "fantasy", "horror", "mystery", "sci-fi"],
        "keywords": ["stranger things", "upsidedown", "demogorgon", "hawkins", "kids", "mystery", "supernatural"],
        "moods": ["Ominous, Nostalgic, Sci-Fi, Notable Soundtrack, Psychic Power, 1980s, Golden Globe Nominee, Scary, Conspiracy, Horror, Teen, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese - Audio Description, Japanese"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Winona Ryder, David Harbour, Millie Bobby Brown, Finn Wolfhard, Gaten Matarazzo, Caleb McLaughlin, Noah Schnapp, Sadie Sink, Natalia Dyer, Charlie Heaton"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Stranger Things (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418116/stranger-things_thumbnail_01_otgxp4.jpg",
                "videoUrl": "https://youtu.be/b9EkMc79ZSU?si=KKitT2-EaACbyCn_",
                "duration": "1m 29s"
            },
            {
                "id": "trailer-2",
                "title": "Stranger Things (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418115/stranger-things_thumbnail_02_gfhlxt.jpg",
                "videoUrl": "https://youtu.be/PssKpzB0Ah0?si=lZ8QOvXlZEnOOXA4",
                "duration": "2m 55s"
            }
        ]
    },
    {
        "id": "ragnarok",
        "title": "Ragnarok",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418193/ragnarok_title_fy3lvf.webp",
        "description": "In a small Norwegian town plagued by climate change, a teenage boy discovers he possesses the powers of Thor. As ancient gods awaken and dark secrets emerge, he must confront his destiny to prevent the town from destruction.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/ragnarok_poster_o014ab.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417752/ragnarok_backdrop_xyiuju.webp",
        "videoUrl": "https://youtu.be/39U19A5iFOs",
        "tags": { "type": "TV Series", "genres": ["TV Dramas, Teen TV Shows, TV Mysteries, Fantasy TV Shows"], "rated": "16+", "status": "Released" },
        "meta": { "release": "2020", "releaseDate": "2020-01-31", "quality": "HD", "duration": "45m per episode" },
        "stats": { "popularity": 4200, "imdb": "6.9/10", "popularityChange": "▲ 40" },
        "categories": ["featured", "drama", "fantasy", "mystery", "teen", "supernatural"],
        "keywords": ["ragnarok", "thor", "norse mythology", "teen", "powers", "climate change", "destiny"],
        "moods": ["Imaginative, Exciting, Sci-Fi Mystery, Epic World, Superpowers, Myths & Legends, Fantasy, Youth, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America) - Audio Description, Spanish (Latin America), Norwegian - Audio Description, Norwegian [Original]"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Norwegian, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["David Stakston, Herman Tømmeraas, Theresa Frostad Eggesbø, Danu Sunth, Jonas Strand Gravli, Emma Bones, Henriette Steenstrup, Gísli Örn Garðarsson, Synnøve Macody Lund, Ylva Bjørkaas Thedin"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Ragnarok (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418112/ragnarok_thumbnail_01_d4ww6o.jpg",
                "videoUrl": "https://youtu.be/7H9AaiBLHCo?si=OeGawD9pBHyqo7z0",
                "duration": "2m 03s"
            },
            {
                "id": "trailer-2",
                "title": "Ragnarok (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418112/ragnarok_thumbnail_02_x5dbke.jpg",
                "videoUrl": "https://youtu.be/7H9AaiBLHCo?si=i-25d7DTuiqUkD6P",
                "duration": "2m 03s"
            },
            {
                "id": "trailer-3",
                "title": "Ragnarok (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418112/ragnarok_thumbnail_03_fkzy8h.jpg",
                "videoUrl": "https://youtu.be/7kSTqNurquY?si=e2f7N9OseB_tTHsj",
                "duration": "1m 42s"
            }
        ]
    },
    {
        "id": "the-irregulars",
        "title": "The Irregulars",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418211/the-irregulars_title_lglm7f.webp",
        "description": "A crew of misfits investigates a series of supernatural crimes in Victorian London for Dr. Watson and his shadowy associate, Sherlock Holmes.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417846/the-irregulars_poster_o67joz.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417761/the-irregulars_backdrop_cwiirr.webp",
        "videoUrl": "https://youtu.be/YU9ERmhLCA0",
        "tags": { "type": "TV Series", "genres": ["TV Dramas, British, Teen TV Shows, TV Mysteries, Period Pieces, Crime TV Shows, TV Thrillers, TV Horror"], "rated": "16+", "status": "Released" },
        "meta": { "release": "2021", "releaseDate": "2021-03-26", "quality": "HD", "duration": "50m per episode" },
        "stats": { "popularity": 3900, "imdb": "6.7/10", "popularityChange": "▲ 30" },
        "categories": ["featured", "drama", "mystery", "supernatural", "teen", "adventure"],
        "keywords": ["the irregulars", "sherlock holmes", "dr. watson", "supernatural crimes", "teenagers", "victorian london"],
        "moods": ["Ominous, Irreverent, Horror, Amateur Detective, Victorian Era, London, British, Bittersweet, Vintage Crime, Teen, Mystery, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America) - Audio Description, Spanish (Latin America), Japanese"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["McKell David, Thaddea Graham, Jojo Macari, Harrison Osterfield, Darci Shaw, Clarke Peters, Royce Pierreson, Henry Lloyd-Hughes"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "The Irregulars (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418119/the-irregulars_thumbnail_01_uoatj7.jpg",
                "videoUrl": "https://youtu.be/lTE5MAGpflw?si=_J63pMd0XqJwsTal",
                "duration": "2m 12s"
            },
            {
                "id": "trailer-2",
                "title": "The Irregulars (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418118/the-irregulars_thumbnail_02_zkhpe3.jpg",
                "videoUrl": "https://youtu.be/1APF6a4m74k?si=OsP8Cq_UbJqnLp3_",
                "duration": "1m 13s"
            }
        ]
    },
    {
        "id": "love-untangled",
        "title": "Love Untangled",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418176/love-untangled_title_q8sizs.webp",
        "description": "A lovestruck teen plans to win the school heartthrob by going from curly to straight hair — until a new transfer student changes everything.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417825/love-untangled_poster_xqlj7b.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/love-untangled_backdrop_yuxulf.webp",
        "videoUrl": "https://youtu.be/8JP4I1vJ0UY",
        "tags": { "type": "Movie", "genres": ["Korean, Romantic Comedy Movies, Drama Movies, Comedy Movies, Romantic Movies, Teen Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2020", "releaseDate": "2020-02-14", "quality": "HD", "duration": "1h 35m" },
        "stats": { "popularity": 1550, "imdb": "6.4/10", "popularityChange": "▲ 18" },
        "categories": ["featured", "romance", "drama", "family", "feel-good", "love story"],
        "keywords": ["love", "romance", "relationship", "heartwarming", "personal growth", "misunderstanding"],
        "moods": ["Kilig, Nostalgic, Teen, High School, Korean, Heartfelt, Coming-of-age, Youth, Comedy, Movie"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English, Spanish (Latin America) - Audio Description, Spanish (Latin America), Filipino, Japanese - Audio Description, Japanese, Korean - Audio Description, Korean [Original]"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Korean, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Gong Myoung, Shin Eun-soo, Cha Woo-min, Youn Sang-hyun, Kang Mi-na"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Love Untangled (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417968/love-untangled_thumbnail_01_mf0nu4.jpg",
                "videoUrl": "https://youtu.be/0HwDE0HXbqc?si=ENWTU3BYDqWwC7yv",
                "duration": "1m 23s"
            },
            {
                "id": "trailer-2",
                "title": "Love Untangled (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417969/love-untangled_thumbnail_02_kqsqou.jpg",
                "videoUrl": "hhttps://youtu.be/yBUI5HEu8NQ?si=d0xDpXUK4mT6Xjr_",
                "duration": "1m 01s"
            }
        ]
    },
    {
        "id": "gachiakuta",
        "title": "Gachiakuta",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418175/gachiakuta_title_dlfqkz.webp",
        "description": "In a futuristic city plagued by chaos, a group of unlikely heroes comes together to confront a mysterious organization threatening society. Through courage, teamwork, and determination, they navigate dangerous missions and uncover hidden truths.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417801/gachiakuta_poster_hhctie.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417730/gachiakuta_backdrop_qagfwj.webp",
        "videoUrl": "https://youtu.be/6Ri06PfkgQo",
        "tags": { "type": "Movie", "genres": ["Shounen Anime, Sci-Fi & Fantasy Anime, Action Anime, Japanese, Anime Series, TV Shows Based on Manga"], "rated": "PG-13", "status": "Released" },
        "meta": { "release": "2021", "releaseDate": "2021-08-20", "quality": "HD", "duration": "1h 42m" },
        "stats": { "popularity": 1350, "imdb": "6.2/10", "popularityChange": "▲ 15" },
        "categories": ["featured", "action", "sci-fi", "adventure", "thriller", "futuristic"],
        "keywords": ["gachiakuta", "futuristic city", "heroes", "adventure", "teamwork", "mystery", "organization"],
        "moods": ["Dystopian, Imaginative, Fantasy, Superpowers, Japanese, Shounen, Exciting, Revenge, Action, Anime, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["Japanese [Original]"],
            "subtitles": ["English, Japanese, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Aoi Ichikawa, Katsuyuki Konishi, Yoshitsugu Matsuoka, Yumiri Hanamori, Toshiyuki Morikawa, Yuuki Shin, Miku Ito"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Gachiakuta (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/gachiakuta_thumbnail_01_zzwjvn.jpg",
                "videoUrl": "https://youtu.be/yeRvDchyo44?si=rAPT_XV-VjTtr8J-",
                "duration": "1m 49s"
            },
            {
                "id": "trailer-2",
                "title": "Gachiakuta (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/gachiakuta_thumbnail_02_dwjn0r.jpg",
                "videoUrl": "https://youtu.be/VtHD9MlW6mA?si=Zsyx-CyftxBXKPXu",
                "duration": "1m 52s"
            },
            {
                "id": "trailer-3",
                "title": "Gachiakuta (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417884/gachiakuta_thumbnail_03_ftvbwk.jpg",
                "videoUrl": "https://youtu.be/wId1ejSTvcA?si=FzbAgRiQgo8e9Zel",
                "duration": "1m 35s"
            }
        ]
    },
    {
        "id": "my-little-pony-a-new-generation",
        "title": "My Little Pony: A New Generation",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418176/my-little-pony-a-new-generation_title_prv3nv.webp",
        "description": "When magic disappears from Equestria, a determined young pony embarks on a mission to reunite Earth Ponies, Unicorns, and Pegasi. Through friendship, courage, and hope, she inspires a new generation to believe in magic again.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417835/my-little-pony-a-new-generation_poster_bn3h9k.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/my-little-pony-a-new-generation_backdrop_o7txqg.webp",
        "videoUrl": "https://youtu.be/xJ8C28RGhWc",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, US Movies"], "rated": "G", "status": "Released" },
        "meta": { "release": "2021", "releaseDate": "2021-09-24", "quality": "HD", "duration": "1h 30m" },
        "stats": { "popularity": 1100, "imdb": "6.8/10", "popularityChange": "▲ 35" },
        "categories": ["kids", "family", "animation", "musical", "fantasy"],
        "keywords": ["my little pony", "friendship", "magic", "equestria", "ponies", "adventure"],
        "moods": ["Magical, Imaginative, Kids, Notable Soundtrack, Horses, US, Hollywood Movie, Feel-Good, Fashion, Super Team, Teamwork"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Mandarin"],
            "subtitles": ["English, Spanish (Latin America), Filipino, Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Vanessa Hudgens, Kimiko Glenn, James Marsden, Sofia Carson, Liza Koshy, Ken Jeong, Elizabeth Perkins, Jane Krakowski, Michael McKean, Phil LaMarr"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "My Little Pony: A New Generation (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417969/my-little-pony-a-new-generation_thumbnail_01_wwsung.jpg",
                "videoUrl": "https://youtu.be/Pa_PRDVpjSk?si=tXIsHwr-mLfwQZqd",
                "duration": "2m 20s"
            },
            {
                "id": "trailer-2",
                "title": "My Little Pony: A New Generation (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417969/my-little-pony-a-new-generation_thumbnail_02_q0hcms.jpg",
                "videoUrl": "https://youtu.be/Q3JPmuW3CiY?si=1zSlRgGrYb0KG7vl",
                "duration": "31s"
            },
            {
                "id": "trailer-3",
                "title": "My Little Pony: A New Generation (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417972/my-little-pony-a-new-generation_thumbnail_03_l8fkqp.jpg",
                "videoUrl": "https://youtu.be/mD1WJMs_oEo?si=imcrBjJqeU0RWBdK",
                "duration": "2m 17s"
            }
        ]
    },
    {
        "id": "inside-job",
        "title": "Inside Job",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418175/inside-job_title_ssybrc.webp",
        "description": "Lizard people? Real. The moon landing? Fake. Managing the world's conspiracies is a full-time job for an awkward genius and her dysfunctional co-workers.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417808/inside-job_poster_btrjbn.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417731/inside-job_backdrop_cfmc08.webp",
        "videoUrl": "https://youtu.be/-zpWqMCKTQQ?si=66UkmKJ7Ctk6FUlW",
        "tags": { "type": "TV Series", "genres": ["TV Comedies, US TV Shows"], "rated": "16+", "status": "Released" },
        "meta": { "release": "2022", "releaseDate": "2022-11-18", "quality": "HD", "duration": "25m per episode" },
        "stats": { "popularity": 4800, "imdb": "7.6/10", "popularityChange": "▲ 50" },
        "categories": ["comedy", "sci-fi", "adult-animation", "satire", "conspiracy"],
        "keywords": ["inside job", "cognito inc", "conspiracies", "shadow government", "animation", "comedy"],
        "moods": ["Witty, Quirky, Adult Animation, Conspiracy, Washington D.C., US, Irreverent, Workplace, Comedy, TV"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["LLizzy Caplan, Christian Slater, Clark Duke, Tisha Campbell, Andrew Daly, Chris Diamantopoulos, John DiMaggio, Bobby Lee, Brett Gelman, Adam Scott"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Inside Job (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417967/inside-job_thumbnail_01_u0otdx.jpg",
                "videoUrl": "https://youtu.be/-aZBIpZY_Fw?si=xAUyUeMoS_bOw0nu",
                "duration": "2m 29s"
            },
            {
                "id": "trailer-2",
                "title": "Inside Job (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417968/inside-job_thumbnail_02_piko7e.jpg",
                "videoUrl": "https://youtu.be/t614hQWO_6M?si=2Blbg6rJPzW2CqLc",
                "duration": "2m 09s"
            }
        ]
    },
    {
        "id": "dora-and-the-lost-city-of-gold",
        "title": "Dora and the Lost City of Gold",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418151/dora-and-the-lost-city-of-gold_title_dyzncb.webp",
        "description": "When her parents disappear during a search for an ancient city of gold, the exuberant teen explorer and her friends head into the jungle to save them.",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417800/dora-and-the-lost-city-of-gold_poster_m2zhyd.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417721/dora-and-the-lost-city-of-gold_backdrop_rniviq.webp",
        "videoUrl": "https://youtu.be/w794Ag8A0l4",
        "tags": { "type": "Movie", "genres": ["Family Movies, Kids & Family Movies, Comedy Movies, US Movies"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2019", "releaseDate": "2019-08-09", "quality": "HD", "duration": "1h 42m" },
        "stats": { "popularity": 3600, "imdb": "6.1/10", "popularityChange": "▲ 32" },
        "categories": ["family", "adventure", "kids", "comedy"],
        "keywords": ["dora", "lost city", "inca", "jungle", "adventure", "family", "boots"],
        "moods": ["Goofy, Exciting, Action Comedy, Girl Power, Treasure Hunt, US, Critically Acclaimed, Friendship, Kids, Movie, Nickelodeon, Science, Fearless Leader"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Isabela Merced, Eugenio Derbez, Michael Peña, Eva Longoria, Danny Trejo, Jeffrey Wahlberg, Nicholas Coombe, Madeleine Madden"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Dora and the Lost City of Gold (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417883/dora-and-the-lost-city-of-gold_thumbnail_awqkwc.jpg",
                "videoUrl": "https://youtu.be/ksj69JaBrAo?si=ECdj3iGtEEm6pODL",
                "duration": "1m 34s"
            }
        ]
    },
    {
        "id": "kung-fu-panda-the-dragon-knight",
        "title": "Kung Fu Panda: The Dragon Knight",
        "titleImage": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765418176/kung-fu-panda-the-dragon-knight_title_uocxz5.webp",
        "description": "Legendary warrior Po teams up with an elite English knight on a global quest to rescue magical weapons, restore his reputation — and save the world!",
        "posterUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417810/kung-fu-panda-the-dragon-knight_poster_zaz6c0.webp",
        "backdropUrl": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417751/kung-fu-panda-the-dragon-knight_backdrop_jgko5e.webp",
        "videoUrl": "https://youtu.be/IqVwBa1Pb9U?si=Ec3gwjj2uiwdUn19",
        "tags": { "type": "TV Series", "genres": ["Kids' TV, TV Comedies, TV Cartoons"], "rated": "PG", "status": "Released" },
        "meta": { "release": "2022", "releaseDate": "2022-07-14", "quality": "HD", "duration": "25m per episode" },
        "stats": { "popularity": 8100, "imdb": "7.4/10", "popularityChange": "▲ 45" },
        "categories": ["animation", "action", "adventure", "kids", "family"],
        "keywords": ["kung fu panda", "po", "dragon warrior", "adventure", "friendship", "heroes", "kung fu"],
        "moods": ["Exciting, Kids, Girl Power, Pirates, US, Annie Award Nominee, Kung Fu, Comedy, TV, Martial Arts, Unlikely Friends, Award-Winning"],
        "details": {
            "watchOffline": "Available to download",
            "audio": ["English - Audio Description, English [Original], Spanish (Latin America), Japanese, Cantonese, Mandarin (Guoyu)"],
            "subtitles": ["English, Spanish (Latin America), Chinese (Simplified), Chinese (Traditional)"],
            "cast": ["Jack Black, Rita Ora, James Hong, Chris Geere, Amy Hill, Nolan North, Della Saba"]
        },
        "trailers": [
            {
                "id": "trailer-1",
                "title": "Kung Fu Panda: The Dragon Knight (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417968/kung-fu-panda-the-dragon-knight_thumbnail_01_sgpsg5.jpg",
                "videoUrl": "https://youtu.be/MYy7oGQiSqI?si=qt_CLmICpXQHsg_f",
                "duration": "2m 34s"
            },
            {
                "id": "trailer-2",
                "title": "Kung Fu Panda: The Dragon Knight (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417968/kung-fu-panda-the-dragon-knight_thumbnail_02_u8s58y.jpg",
                "videoUrl": "https://youtu.be/3SvvTu38SHY?si=qlS8W9hIjsCsDNby",
                "duration": "1m 19s"
            },
            {
                "id": "trailer-3",
                "title": "Kung Fu Panda: The Dragon Knight (Official Trailer)",
                "thumbnail": "https://res.cloudinary.com/dy3hjchnl/image/upload/v1765417968/kung-fu-panda-the-dragon-knight_thumbnail_03_cxw9w4.jpg",
                "videoUrl": "https://youtu.be/IqVwBa1Pb9U?si=Ec3gwjj2uiwdUn19",
                "duration": "1m 42s"
            }
        ]
    },








];


// =============================================================
// DATABASE API (Smart Logic + Path Fixer + Data Normalizer)
// =============================================================

/**
 * PATH RESOLVER FUNCTION
 * Handles loading images/videos whether on Localhost, IP, or File path.
 */
const resolvePath = (path) => {
    if (!path) return "";

    // Ignore external links (YouTube, Web URLs)
    if (path.startsWith("http") || path.startsWith("https")) {
        return path;
    }

    // Normalize path start
    let relativePath = path;
    if (relativePath.startsWith("/")) {
        relativePath = relativePath.substring(1); 
    }
    if (relativePath.startsWith("frontend/")) {
        relativePath = relativePath.replace("frontend/", ""); 
    }

    // Check current browser location to determine folder depth
    const loc = window.location.pathname;
    const isDeepPage = loc.includes("/preview/") || loc.includes("movie-preview.html");
    const isSubPage = loc.includes("/pages/") && !isDeepPage;

    if (isDeepPage) return "../../" + relativePath;
    else if (isSubPage) return "../" + relativePath;

    // Default: We are at root
    return "./" + relativePath;
};

/**
 * 🛠️ DATA PROCESSOR
 * 1. Resolves paths for images/videos.
 * 2. Normalizes comma-separated strings into proper arrays.
 */
const processMovieData = (movie) => {
    if (!movie) return null;

    // --- HELPER: Cleans & Splits Strings ---
    // Turns "Comedy, Action" -> ["Comedy", "Action"]
    // Turns ["Comedy", "Drama, Sci-Fi"] -> ["Comedy", "Drama", "Sci-Fi"]
    const cleanList = (arr) => {
        if (!arr) return []; 
        if (!Array.isArray(arr)) return []; 

        return arr.flatMap(item => {
            if (typeof item === 'string') {
                return item.split(',').map(s => s.trim()).filter(s => s.length > 0);
            }
            return item;
        });
    };

    // Safely access nested objects
    const tags = movie.tags || {};
    const details = movie.details || {};

    return {
        ...movie,
        // Path Fixes
        titleImage: resolvePath(movie.titleImage),
        posterUrl: resolvePath(movie.posterUrl),
        backdropUrl: resolvePath(movie.backdropUrl),
        videoUrl: resolvePath(movie.videoUrl),
        
        // --- ⚡ DATA NORMALIZATION APPLIED HERE ⚡ ---
        categories: cleanList(movie.categories),
        keywords: cleanList(movie.keywords),
        moods: cleanList(movie.moods),
        
        tags: {
            ...tags,
            genres: cleanList(tags.genres) // Fixes filtering issues
        },
        
        details: {
            ...details,
            audio: cleanList(details.audio),
            subtitles: cleanList(details.subtitles),
            cast: cleanList(details.cast) // Fixes search issues
        },

        // Nested Array Path Fixes
        trailers: movie.trailers ? movie.trailers.map(t => ({
            ...t,
            thumbnail: resolvePath(t.thumbnail)
        })) : []
    };
};

// ==========================================
// HELPER FUNCTIONS (Sorting & Formatting)
// ==========================================

const getRating = (movie) => {
    if (!movie.stats || !movie.stats.imdb || movie.stats.imdb === "N/A") return 5.0;
    return parseFloat(movie.stats.imdb.split('/')[0]) || 0;
};

const getPopularity = (movie) => {
    return parseInt(movie.stats?.popularity) || 0;
};

const getDate = (movie) => {
    if (movie.meta?.releaseDate) return new Date(movie.meta.releaseDate);
    if (movie.meta?.release) return new Date(`${movie.meta.release}-01-01`);
    return new Date(0);
};

// ==========================================
// EXPORTED DB OBJECT
// ==========================================

const MovieDB = {
    // 1. Get ALL movies (Processed & Cleaned)
    getAll: () => {
        return GLOBAL_MOVIE_DB.map(processMovieData);
    },
    
    // 2. Find by ID
    getById: (id) => {
        const movie = GLOBAL_MOVIE_DB.find(m => m.id === id);
        return processMovieData(movie);
    },
    
    // 3. FEATURED SLIDER
    getFeatured: () => {
        return GLOBAL_MOVIE_DB
            .map(processMovieData)
            .filter(m => m.categories.includes("featured"))
            .slice(0, 10);
    },
    
    // 4. TRENDING BOARD
    getTrending: (limit = 10) => {
        return GLOBAL_MOVIE_DB
            .map(movie => {
                const pop = getPopularity(movie);
                const rating = getRating(movie);
                const compositeScore = pop + (rating * 20);
                return { ...movie, compositeScore };
            })
            .sort((a, b) => b.compositeScore - a.compositeScore)
            .map(processMovieData)
            .slice(0, limit);
    },

    // 5. LATEST UPDATES
    getLatestUpdates: (limit = 20) => {
        return GLOBAL_MOVIE_DB
            .sort((a, b) => getDate(b) - getDate(a))
            .map(processMovieData)
            .slice(0, limit);
    },

    // 6. CATEGORIES (SMARTER FILTERING)
    getByCategory: (categoryName) => {
        const allMovies = GLOBAL_MOVIE_DB.map(processMovieData);
        
        // Helper: Checks if any item in the array matches the target string (case-insensitive)
        const hasMatch = (arr, target) => {
            if (!arr || !Array.isArray(arr)) return false;
            return arr.some(item => item.toLowerCase().includes(target.toLowerCase()));
        };

        let filtered = [];

        if (categoryName === 'kids') {
            // --- SMART LOGIC FOR KIDS ---
            filtered = allMovies.filter(m => {
                // 1. Explicit Matches
                if (hasMatch(m.tags?.genres, "Kids") || hasMatch(m.tags?.genres, "Family") || hasMatch(m.categories, "kids")) return true;
                
                // 2. Keyword/Mood Inference
                const kidsTriggers = ["cartoon", "disney", "pixar", "child", "toddler", "feel-good", "animated"];
                if (kidsTriggers.some(t => hasMatch(m.keywords, t) || hasMatch(m.moods, t))) return true;

                // 3. Rating Inference (TV-Y/G + Animation usually equals Kids)
                const safeRatings = ["G", "TV-Y", "TV-Y7", "TV-G"]; 
                const isAnimation = hasMatch(m.tags?.genres, "Animation");
                if (safeRatings.includes(m.tags?.rated) && isAnimation) return true;

                return false;
            });
        } 
        else if (categoryName === 'anime') {
            // --- SMART LOGIC FOR ANIME ---
            filtered = allMovies.filter(m => {
                // 1. Explicit Matches
                if (hasMatch(m.tags?.genres, "Anime") || hasMatch(m.categories, "anime")) return true;

                // 2. Logic: Animation + Japanese = Anime (usually)
                const isAnimation = hasMatch(m.tags?.genres, "Animation");
                const isJapanese = hasMatch(m.tags?.genres, "Japanese") || 
                                   hasMatch(m.details?.audio, "Japanese") || 
                                   hasMatch(m.details?.audio, "Japanese [Original]");
                
                if (isAnimation && isJapanese) return true;

                // 3. Keyword/Mood Inference
                const animeTriggers = ["manga", "ghibli", "shounen", "seinen", "isekai", "otaku"];
                if (animeTriggers.some(t => hasMatch(m.keywords, t) || hasMatch(m.moods, t))) return true;

                return false;
            });
        } 
        else {
            // --- DEFAULT FUZZY SEARCH ---
            // Checks Genres, Categories, Moods, and Keywords for the category name
            filtered = allMovies.filter(m => {
                return hasMatch(m.tags?.genres, categoryName) || 
                       hasMatch(m.categories, categoryName) || 
                       hasMatch(m.moods, categoryName) ||
                       hasMatch(m.keywords, categoryName);
            });
        }

        return filtered
            .sort((a, b) => getPopularity(b) - getPopularity(a))
            .slice(0, 24);
    }
};

// Make it available globally
window.MovieDB = MovieDB;