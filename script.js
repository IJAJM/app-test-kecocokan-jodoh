// Data Lintang berdasarkan total nilai hari lahir
const lintang = {
  7: {
    nama: "Lintang Bintang",
    makna: "Kehidupan penuh kebahagiaan dan kegembiraan.",
    penjelasan: "Lintang Bintang melambangkan keberuntungan dan kebahagiaan. Orang yang memiliki Lintang ini cenderung memiliki kehidupan yang cerah dan penuh sukacita. Mereka mudah bergaul dan membawa energi positif ke sekitarnya. Namun, perlu waspada terhadap kesombongan karena keberuntungan yang berlimpah bisa membuat mereka lupa diri."
  },
  8: {
    nama: "Lintang Kuda",
    makna: "Kehidupan aktif dan dinamis, perlu kehati-hatian.",
    penjelasan: "Lintang Kuda melambangkan semangat dan energi yang tinggi. Orang dengan Lintang ini cenderung aktif, pekerja keras, dan selalu bersemangat. Namun, mereka perlu berhati-hati agar tidak terlalu gegabah atau ceroboh dalam mengambil keputusan. Keseimbangan antara kerja dan istirahat sangat penting."
  },
  9: {
    nama: "Lintang Bulan",
    makna: "Harmoni dan saling melengkapi.",
    penjelasan: "Lintang Bulan melambangkan kedamaian dan keseimbangan. Orang dengan Lintang ini cenderung memiliki hubungan yang harmonis dengan orang lain. Mereka adalah pendengar yang baik dan mampu menciptakan suasana nyaman di sekitarnya. Namun, mereka perlu belajar untuk lebih tegas dalam mengambil keputusan."
  },
  10: {
    nama: "Lintang Bagong",
    makna: "Banyak tantangan, tetapi stabil jika sabar.",
    penjelasan: "Lintang Bagong melambangkan keteguhan dan kesabaran. Orang dengan Lintang ini sering menghadapi tantangan, tetapi mereka memiliki kemampuan untuk bertahan dan mengatasi rintangan. Kesabaran dan ketekunan adalah kunci kesuksesan mereka."
  },
  11: {
    nama: "Lintang Matahari",
    makna: "Keberuntungan besar, hati-hati ego.",
    penjelasan: "Lintang Matahari melambangkan keberuntungan dan kekuatan. Orang dengan Lintang ini cenderung sukses dalam banyak hal, tetapi mereka perlu waspada terhadap ego yang terlalu besar. Kerendahan hati dan empati akan membantu mereka menjaga hubungan dengan orang lain."
  },
  12: {
    nama: "Lintang Andong",
    makna: "Kehidupan seimbang dengan dukungan emosional.",
    penjelasan: "Lintang Andong melambangkan keseimbangan dan stabilitas. Orang dengan Lintang ini cenderung memiliki kehidupan yang teratur dan penuh dukungan dari orang-orang terdekat. Mereka adalah sosok yang dapat diandalkan dan selalu siap membantu."
  },
  13: {
    nama: "Lintang Kembang",
    makna: "Hubungan penuh cinta dan kasih sayang.",
    penjelasan: "Lintang Kembang melambangkan keindahan dan keharmonisan dalam hubungan. Orang dengan Lintang ini cenderung romantis dan penuh kasih sayang. Mereka mampu menciptakan hubungan yang hangat dan penuh pengertian dengan pasangan."
  },
  14: {
    nama: "Lintang Lembu",
    makna: "Kekuatan menghadapi rintangan bersama.",
    penjelasan: "Lintang Lembu melambangkan ketangguhan dan kerja sama. Orang dengan Lintang ini cenderung kuat dan mampu menghadapi rintangan dengan baik. Mereka juga memiliki kemampuan untuk bekerja sama dengan orang lain dalam mencapai tujuan bersama."
  },
  15: {
    nama: "Lintang Naga",
    makna: "Hubungan penuh energi, perlu keseimbangan.",
    penjelasan: "Lintang Naga melambangkan kekuatan dan energi yang besar. Orang dengan Lintang ini cenderung memiliki semangat yang tinggi dan penuh ambisi. Namun, mereka perlu belajar untuk menyeimbangkan energi tersebut agar tidak terlalu dominan dalam hubungan."
  },
  16: {
    nama: "Lintang Singa",
    makna: "Berani dan bertanggung jawab, ada tantangan.",
    penjelasan: "Lintang Singa melambangkan keberanian dan tanggung jawab. Orang dengan Lintang ini cenderung menjadi pemimpin alami dan tidak takut menghadapi tantangan. Namun, mereka perlu belajar untuk lebih fleksibel dan terbuka terhadap pendapat orang lain."
  },
  17: {
    nama: "Lintang Pedati",
    makna: "Stabil dan penuh kedamaian.",
    penjelasan: "Lintang Pedati melambangkan stabilitas dan ketenangan. Orang dengan Lintang ini cenderung memiliki kehidupan yang teratur dan damai. Mereka adalah sosok yang dapat diandalkan dan selalu menjaga harmoni dalam hubungan."
  },
  18: {
    nama: "Lintang Angsa",
    makna: "Hubungan penuh kesetiaan dan keindahan.",
    penjelasan: "Lintang Angsa melambangkan kesetiaan dan keindahan. Orang dengan Lintang ini cenderung setia dan penuh perhatian dalam hubungan. Mereka mampu menciptakan hubungan yang indah dan harmonis dengan pasangan."
  },
  19: {
    nama: "Lintang Macan",
    makna: "Penuh tantangan, tapi bisa positif.",
    penjelasan: "Lintang Macan melambangkan keberanian dan kekuatan. Orang dengan Lintang ini cenderung menghadapi banyak tantangan, tetapi mereka memiliki kemampuan untuk mengubah tantangan tersebut menjadi peluang. Mereka perlu belajar untuk lebih sabar dan bijaksana."
  },
  20: {
    nama: "Lintang Kebo",
    makna: "Tenang dan stabil, perlu keseimbangan.",
    penjelasan: "Lintang Kebo melambangkan ketenangan dan stabilitas. Orang dengan Lintang ini cenderung tenang dan tidak mudah terpengaruh oleh situasi sekitar. Mereka perlu belajar untuk lebih fleksibel dan terbuka terhadap perubahan."
  },
  21: {
    nama: "Lintang Jangkrik",
    makna: "Kreatif dan penuh semangat.",
    penjelasan: "Lintang Jangkrik melambangkan kreativitas dan semangat. Orang dengan Lintang ini cenderung penuh ide dan inovasi. Mereka mampu menciptakan sesuatu yang baru dan bermanfaat bagi orang lain."
  },
  22: {
    nama: "Lintang Ular",
    makna: "Penuh misteri, tetap harmonis.",
    penjelasan: "Lintang Ular melambangkan misteri dan kebijaksanaan. Orang dengan Lintang ini cenderung memiliki aura misterius dan penuh kebijaksanaan. Mereka mampu menjaga harmoni dalam hubungan meskipun memiliki sisi yang sulit dipahami."
  },
  23: {
    nama: "Lintang Celeng",
    makna: "Perlu mengatasi sifat keras kepala.",
    penjelasan: "Lintang Celeng melambangkan keteguhan dan kekerasan hati. Orang dengan Lintang ini cenderung keras kepala dan sulit menerima pendapat orang lain. Mereka perlu belajar untuk lebih fleksibel dan terbuka terhadap perubahan."
  },
  24: {
    nama: "Lintang Kancil",
    makna: "Hubungan ceria dan cerdas.",
    penjelasan: "Lintang Kancil melambangkan kecerdasan dan keceriaan. Orang dengan Lintang ini cenderung cerdas dan penuh humor. Mereka mampu menciptakan suasana ceria dan menyenangkan dalam hubungan."
  },
  25: {
    nama: "Lintang Kuda Lumping",
    makna: "Penuh semangat dan energi positif.",
    penjelasan: "Lintang Kuda Lumping melambangkan semangat dan energi yang tinggi. Orang dengan Lintang ini cenderung penuh semangat dan membawa energi positif ke sekitarnya. Mereka perlu belajar untuk mengarahkan energi tersebut ke hal-hal yang bermanfaat."
  },
  26: {
    nama: "Lintang Elang",
    makna: "Kehidupan tinggi, perlu arah jelas.",
    penjelasan: "Lintang Elang melambangkan kebebasan dan visi yang tinggi. Orang dengan Lintang ini cenderung memiliki cita-cita yang besar dan tidak suka dibatasi. Mereka perlu belajar untuk lebih fokus dan memiliki arah yang jelas dalam hidup."
  },
  27: {
    nama: "Lintang Garuda",
    makna: "Hubungan kuat, perlu kesabaran.",
    penjelasan: "Lintang Garuda melambangkan kekuatan dan kebesaran. Orang dengan Lintang ini cenderung memiliki hubungan yang kuat dan penuh komitmen. Mereka perlu belajar untuk lebih sabar dan memahami pasangan."
  },
  28: {
    nama: "Lintang Merak",
    makna: "Keindahan dan harmoni.",
    penjelasan: "Lintang Merak melambangkan keindahan dan keharmonisan. Orang dengan Lintang ini cenderung memiliki selera yang tinggi dan penuh pesona. Mereka mampu menciptakan hubungan yang indah dan harmonis."
  },
  29: {
    nama: "Lintang Gajah",
    makna: "Penuh tanggung jawab, perlu kerja sama.",
    penjelasan: "Lintang Gajah melambangkan tanggung jawab dan kekuatan. Orang dengan Lintang ini cenderung bertanggung jawab dan dapat diandalkan. Mereka perlu belajar untuk lebih terbuka dan bekerja sama dengan orang lain."
  },
  30: {
    nama: "Lintang Kelapa",
    makna: "Penuh keberuntungan dan kebahagiaan.",
    penjelasan: "Lintang Kelapa melambangkan keberuntungan dan kebahagiaan. Orang dengan Lintang ini cenderung memiliki kehidupan yang penuh berkah dan kebahagiaan. Mereka mampu menciptakan suasana positif di sekitarnya."
  },
};

// Fungsi untuk menghitung kecocokan
function calculate() {
  const hari1 = parseInt(document.getElementById("hari1").value);
  const hari2 = parseInt(document.getElementById("hari2").value);
  const total = hari1 + hari2;

  // Ambil hasil dari data lintang
  const result = lintang[total] || { nama: "Tidak Diketahui", makna: "Hasil tidak ditemukan. Coba periksa data Anda.", penjelasan: "" };
  const resultText = `${result.nama}: ${result.makna}\n\nPenjelasan: ${result.penjelasan}`;
  document.getElementById("resultText").innerText = resultText;

  // Tampilkan hasil
  document.getElementById("result").classList.remove("hidden");
}

// Fungsi untuk mengunduh hasil
function downloadResult() {
  const resultText = document.getElementById("resultText").innerText;
  const blob = new Blob([resultText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "hasil-primbon.txt";
  link.click();
}
