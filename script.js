const lintang = {
  7: "Lintang Bintang: Kehidupan penuh kebahagiaan dan kegembiraan.",
  8: "Lintang Kuda: Kehidupan aktif dan dinamis, perlu kehati-hatian.",
  9: "Lintang Bulan: Harmoni dan saling melengkapi.",
  10: "Lintang Bagong: Banyak tantangan, tetapi stabil jika sabar.",
  11: "Lintang Matahari: Keberuntungan besar, hati-hati ego.",
  12: "Lintang Andong: Kehidupan seimbang dengan dukungan emosional.",
  13: "Lintang Kembang: Hubungan penuh cinta dan kasih sayang.",
  14: "Lintang Lembu: Kekuatan menghadapi rintangan bersama.",
  15: "Lintang Naga: Hubungan penuh energi, perlu keseimbangan.",
  16: "Lintang Singa: Berani dan bertanggung jawab, ada tantangan.",
  17: "Lintang Pedati: Stabil dan penuh kedamaian.",
  18: "Lintang Angsa: Hubungan penuh kesetiaan dan keindahan.",
  19: "Lintang Macan: Penuh tantangan, tapi bisa positif.",
  20: "Lintang Kebo: Tenang dan stabil, perlu keseimbangan.",
  21: "Lintang Jangkrik: Kreatif dan penuh semangat.",
  22: "Lintang Ular: Penuh misteri, tetap harmonis.",
  23: "Lintang Celeng: Perlu mengatasi sifat keras kepala.",
  24: "Lintang Kancil: Hubungan ceria dan cerdas.",
  25: "Lintang Kuda Lumping: Penuh semangat dan energi positif.",
  26: "Lintang Elang: Kehidupan tinggi, perlu arah jelas.",
  27: "Lintang Garuda: Hubungan kuat, perlu kesabaran.",
  28: "Lintang Merak: Keindahan dan harmoni.",
  29: "Lintang Gajah: Penuh tanggung jawab, perlu kerja sama.",
  30: "Lintang Kelapa: Penuh keberuntungan dan kebahagiaan.",
};

function calculate() {
  const hari1 = parseInt(document.getElementById("hari1").value);
  const hari2 = parseInt(document.getElementById("hari2").value);
  const total = hari1 + hari2;

  const resultText = lintang[total] || "Hasil tidak ditemukan. Coba periksa data Anda.";
  document.getElementById("resultText").innerText = resultText;

  document.getElementById("result").classList.remove("hidden");
}

function downloadResult() {
  const resultText = document.getElementById("resultText").innerText;
  const blob = new Blob([resultText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "hasil-primbon.txt";
  link.click();
}
