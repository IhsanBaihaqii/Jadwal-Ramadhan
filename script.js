(function () {
  // ==================== DATA JADWAL (dari tabel HTML) =====================
  const scheduleData = [
    {
      ramadhan: "1 Ramadan 1447",
      hari: "Kamis",
      masehi: "19 Feb 2026",
      imsak: "05:12",
      subuh: "05:22",
      terbit: "06:37",
      dhuha: "07:02",
      zuhur: "12:43",
      ashr: "16:00",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "2 Ramadan 1447",
      hari: "Jum'at",
      masehi: "20 Feb 2026",
      imsak: "05:12",
      subuh: "05:22",
      terbit: "06:37",
      dhuha: "07:02",
      zuhur: "12:43",
      ashr: "15:59",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "3 Ramadan 1447",
      hari: "Sabtu",
      masehi: "21 Feb 2026",
      imsak: "05:12",
      subuh: "05:22",
      terbit: "06:37",
      dhuha: "07:02",
      zuhur: "12:42",
      ashr: "15:59",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "4 Ramadan 1447",
      hari: "Ahad",
      masehi: "22 Feb 2026",
      imsak: "05:12",
      subuh: "05:22",
      terbit: "06:37",
      dhuha: "07:01",
      zuhur: "12:42",
      ashr: "15:59",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "5 Ramadan 1447",
      hari: "Senin",
      masehi: "23 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:36",
      dhuha: "07:01",
      zuhur: "12:42",
      ashr: "15:58",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "6 Ramadan 1447",
      hari: "Selasa",
      masehi: "24 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:36",
      dhuha: "07:01",
      zuhur: "12:42",
      ashr: "15:58",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "7 Ramadan 1447",
      hari: "Rabu",
      masehi: "25 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:36",
      dhuha: "07:01",
      zuhur: "12:42",
      ashr: "15:57",
      maghrib: "18:42",
      isya: "19:51",
    },
    {
      ramadhan: "8 Ramadan 1447",
      hari: "Kamis",
      masehi: "26 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:36",
      dhuha: "07:00",
      zuhur: "12:42",
      ashr: "15:57",
      maghrib: "18:42",
      isya: "19:50",
    },
    {
      ramadhan: "9 Ramadan 1447",
      hari: "Jum'at",
      masehi: "27 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:35",
      dhuha: "07:00",
      zuhur: "12:42",
      ashr: "15:56",
      maghrib: "18:42",
      isya: "19:50",
    },
    {
      ramadhan: "10 Ramadan 1447",
      hari: "Sabtu",
      masehi: "28 Feb 2026",
      imsak: "05:11",
      subuh: "05:21",
      terbit: "06:35",
      dhuha: "07:00",
      zuhur: "12:41",
      ashr: "15:56",
      maghrib: "18:42",
      isya: "19:50",
    },
    {
      ramadhan: "11 Ramadan 1447",
      hari: "Ahad",
      masehi: "1 Mar 2026",
      imsak: "05:10",
      subuh: "05:20",
      terbit: "06:35",
      dhuha: "06:59",
      zuhur: "12:41",
      ashr: "15:55",
      maghrib: "18:42",
      isya: "19:50",
    },
    {
      ramadhan: "12 Ramadan 1447",
      hari: "Senin",
      masehi: "2 Mar 2026",
      imsak: "05:10",
      subuh: "05:20",
      terbit: "06:35",
      dhuha: "06:59",
      zuhur: "12:41",
      ashr: "15:55",
      maghrib: "18:42",
      isya: "19:50",
    },
    {
      ramadhan: "13 Ramadan 1447",
      hari: "Selasa",
      masehi: "3 Mar 2026",
      imsak: "05:10",
      subuh: "05:20",
      terbit: "06:34",
      dhuha: "06:59",
      zuhur: "12:41",
      ashr: "15:54",
      maghrib: "18:41",
      isya: "19:50",
    },
    {
      ramadhan: "14 Ramadan 1447",
      hari: "Rabu",
      masehi: "4 Mar 2026",
      imsak: "05:10",
      subuh: "05:20",
      terbit: "06:34",
      dhuha: "06:58",
      zuhur: "12:41",
      ashr: "15:54",
      maghrib: "18:41",
      isya: "19:50",
    },
    {
      ramadhan: "15 Ramadan 1447",
      hari: "Kamis",
      masehi: "5 Mar 2026",
      imsak: "05:09",
      subuh: "05:19",
      terbit: "06:34",
      dhuha: "06:58",
      zuhur: "12:40",
      ashr: "15:53",
      maghrib: "18:41",
      isya: "19:49",
    },
    {
      ramadhan: "16 Ramadan 1447",
      hari: "Jum'at",
      masehi: "6 Mar 2026",
      imsak: "05:09",
      subuh: "05:19",
      terbit: "06:33",
      dhuha: "06:58",
      zuhur: "12:40",
      ashr: "15:52",
      maghrib: "18:41",
      isya: "19:49",
    },
    {
      ramadhan: "17 Ramadan 1447",
      hari: "Sabtu",
      masehi: "7 Mar 2026",
      imsak: "05:09",
      subuh: "05:19",
      terbit: "06:33",
      dhuha: "06:57",
      zuhur: "12:40",
      ashr: "15:52",
      maghrib: "18:41",
      isya: "19:49",
    },
    {
      ramadhan: "18 Ramadan 1447",
      hari: "Ahad",
      masehi: "8 Mar 2026",
      imsak: "05:09",
      subuh: "05:19",
      terbit: "06:33",
      dhuha: "06:57",
      zuhur: "12:40",
      ashr: "15:51",
      maghrib: "18:41",
      isya: "19:49",
    },
    {
      ramadhan: "19 Ramadan 1447",
      hari: "Senin",
      masehi: "9 Mar 2026",
      imsak: "05:08",
      subuh: "05:18",
      terbit: "06:32",
      dhuha: "06:57",
      zuhur: "12:39",
      ashr: "15:50",
      maghrib: "18:41",
      isya: "19:49",
    },
    {
      ramadhan: "20 Ramadan 1447",
      hari: "Selasa",
      masehi: "10 Mar 2026",
      imsak: "05:08",
      subuh: "05:18",
      terbit: "06:32",
      dhuha: "06:56",
      zuhur: "12:39",
      ashr: "15:49",
      maghrib: "18:41",
      isya: "19:48",
    },
    {
      ramadhan: "21 Ramadan 1447",
      hari: "Rabu",
      masehi: "11 Mar 2026",
      imsak: "05:08",
      subuh: "05:18",
      terbit: "06:32",
      dhuha: "06:56",
      zuhur: "12:39",
      ashr: "15:49",
      maghrib: "18:40",
      isya: "19:48",
    },
    {
      ramadhan: "22 Ramadan 1447",
      hari: "Kamis",
      masehi: "12 Mar 2026",
      imsak: "05:07",
      subuh: "05:17",
      terbit: "06:31",
      dhuha: "06:56",
      zuhur: "12:39",
      ashr: "15:48",
      maghrib: "18:40",
      isya: "19:48",
    },
    {
      ramadhan: "23 Ramadan 1447",
      hari: "Jum'at",
      masehi: "13 Mar 2026",
      imsak: "05:07",
      subuh: "05:17",
      terbit: "06:31",
      dhuha: "06:55",
      zuhur: "12:38",
      ashr: "15:47",
      maghrib: "18:40",
      isya: "19:48",
    },
    {
      ramadhan: "24 Ramadan 1447",
      hari: "Sabtu",
      masehi: "14 Mar 2026",
      imsak: "05:07",
      subuh: "05:17",
      terbit: "06:30",
      dhuha: "06:55",
      zuhur: "12:38",
      ashr: "15:46",
      maghrib: "18:40",
      isya: "19:48",
    },
    {
      ramadhan: "25 Ramadan 1447",
      hari: "Ahad",
      masehi: "15 Mar 2026",
      imsak: "05:06",
      subuh: "05:16",
      terbit: "06:30",
      dhuha: "06:54",
      zuhur: "12:38",
      ashr: "15:46",
      maghrib: "18:40",
      isya: "19:47",
    },
    {
      ramadhan: "26 Ramadan 1447",
      hari: "Senin",
      masehi: "16 Mar 2026",
      imsak: "05:06",
      subuh: "05:16",
      terbit: "06:30",
      dhuha: "06:54",
      zuhur: "12:38",
      ashr: "15:45",
      maghrib: "18:39",
      isya: "19:47",
    },
    {
      ramadhan: "27 Ramadan 1447",
      hari: "Selasa",
      masehi: "17 Mar 2026",
      imsak: "05:06",
      subuh: "05:16",
      terbit: "06:29",
      dhuha: "06:54",
      zuhur: "12:37",
      ashr: "15:44",
      maghrib: "18:39",
      isya: "19:47",
    },
    {
      ramadhan: "28 Ramadan 1447",
      hari: "Rabu",
      masehi: "18 Mar 2026",
      imsak: "05:05",
      subuh: "05:15",
      terbit: "06:29",
      dhuha: "06:53",
      zuhur: "12:37",
      ashr: "15:43",
      maghrib: "18:39",
      isya: "19:47",
    },
    {
      ramadhan: "29 Ramadan 1447",
      hari: "Kamis",
      masehi: "19 Mar 2026",
      imsak: "05:05",
      subuh: "05:15",
      terbit: "06:29",
      dhuha: "06:53",
      zuhur: "12:37",
      ashr: "15:42",
      maghrib: "18:39",
      isya: "19:47",
    },
    {
      ramadhan: "30 Ramadan 1447",
      hari: "Jum'at",
      masehi: "20 Mar 2026",
      imsak: "05:04",
      subuh: "05:14",
      terbit: "06:28",
      dhuha: "06:53",
      zuhur: "12:36",
      ashr: "15:41",
      maghrib: "18:39",
      isya: "19:47",
    },
  ];

  // daftar waktu shalat (kolom) sesuai urutan tampilan
  const timeCols = [
    { key: "imsak", label: "Imsak" },
    { key: "subuh", label: "Subuh" },
    { key: "terbit", label: "Terbit" },
    { key: "dhuha", label: "Dhuha" },
    { key: "zuhur", label: "Zuhur" },
    { key: "ashr", label: "Ashr" },
    { key: "maghrib", label: "Maghrib" },
    { key: "isya", label: "Isya" },
  ];

  // ========== HELPER TANGGAL ==========
  function parseDateMasehi(dateStr) {
    // dateStr: "19 Feb 2026"
    const months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      Mei: 4,
      Jun: 5,
      Jul: 6,
      Agu: 7,
      Sep: 8,
      Okt: 9,
      Nov: 10,
      Des: 11,
    };
    const parts = dateStr.split(" ");
    if (parts.length !== 3) return new Date();
    const day = parseInt(parts[0], 10);
    let monthStr = parts[1];
    // handling singkatan indonesia
    if (monthStr === "Feb") monthStr = "Feb";
    if (monthStr === "Mar") monthStr = "Mar";
    if (monthStr === "Apr") monthStr = "Apr";
    if (monthStr === "Mei") monthStr = "May";
    if (monthStr === "Jun") monthStr = "Jun";
    if (monthStr === "Jul") monthStr = "Jul";
    if (monthStr === "Agu") monthStr = "Aug";
    if (monthStr === "Sep") monthStr = "Sep";
    if (monthStr === "Okt") monthStr = "Oct";
    if (monthStr === "Nov") monthStr = "Nov";
    if (monthStr === "Des") monthStr = "Dec";
    const year = parseInt(parts[2], 10);
    return new Date(`${day} ${monthStr} ${year} GMT+0700`); // asumsi WIB
  }

  function addLeadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  // mendapatkan today tanpa waktu (00:00 WIB)
  function getTodayDate() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return new Date(d.getTime() + 7 * 60 * 60 * 1000); // sesuaikan ke WIB
  }

  // render tabel + update status
  function renderTableAndCountdown() {
    const now = new Date();
    const currentTime = now.getTime();
    const year = now.getFullYear();
    const month = now.getMonth();
    const dayDate = now.getDate();

    // hitung index jadwal hari ini berdasarkan masehi
    let todayRowIndex = -1;
    const todayDateStr = `${addLeadingZero(dayDate)} ${now.toLocaleString("id", { month: "short" })} ${year}`;
    // tapi kita cocokkan dengan data.masehi

    // untuk setiap baris, tentukan apakah hari ini
    scheduleData.forEach((row, idx) => {
      const rowDate = parseDateMasehi(row.masehi);
      if (
        rowDate.getDate() === dayDate &&
        rowDate.getMonth() === month &&
        rowDate.getFullYear() === year
      ) {
        todayRowIndex = idx;
      }
    });

    // bangun tabel
    let html = `
                <table align="center" style="overflow-x:auto; text-align:center; margin:5px auto;">
                    <thead>
                        <tr>
                            <th>Ramadan</th><th>Hari</th><th>Masehi</th><th>Imsak</th><th>Subuh</th><th>Terbit</th><th>Dhuha</th><th>Zuhur</th><th>'Ashr</th><th>Maghrib</th><th>'Isya'</th>
                        </tr>
                    </thead>
                    <tbody>
                `;

    // cari jadwal berikutnya (untuk countdown)
    let nextPrayerItem = null; // obj {timeInMs, name, typeKey}
    let nextPrayerTimeMs = Infinity;

    for (let i = 0; i < scheduleData.length; i++) {
      const row = scheduleData[i];
      const rowDate = parseDateMasehi(row.masehi);
      rowDate.setHours(0, 0, 0, 0);
      const rowYear = rowDate.getFullYear();
      const rowMonth = rowDate.getMonth();
      const rowDay = rowDate.getDate();

      const isToday =
        rowYear === year && rowMonth === month && rowDay === dayDate;

      let rowClass = isToday ? "today-row" : "";

      html += `<tr class="${rowClass}">`;
      html += `<th class="rowhead">${row.ramadhan}</th><td>${row.hari}</td><td>${row.masehi}</td>`;

      // loop timeCols
      for (let t of timeCols) {
        let timeStr = row[t.key];
        // buat date object waktu spesifik (set jam menit)
        const [hour, minute] = timeStr.split(":").map(Number);
        const prayDateTime = new Date(
          rowYear,
          rowMonth,
          rowDay,
          hour,
          minute,
          0,
          0,
        );
        const prayTimeMs = prayDateTime.getTime();

        let additionalClass = "";
        // bandingkan dengan now
        if (prayTimeMs < currentTime) {
          additionalClass = "past-time"; // lewat
        } else if (
          prayTimeMs >= currentTime &&
          prayTimeMs < currentTime + 60 * 60 * 1000
        ) {
          // dalam satu jam ke depan (anggap current)
          // kita anggap "sedang waktu ini" jika current di antara start dan (start+30 menit) sederhananya
          // untuk contoh, kita kasih current jika selisih kurang dari 30 menit kedepan
          if (
            prayTimeMs <= currentTime &&
            currentTime < prayTimeMs + 30 * 60 * 1000
          )
            additionalClass = "current-time";
          else additionalClass = "upcoming-time";
        } else if (prayTimeMs > currentTime) {
          additionalClass = "upcoming-time";
        }

        // khusus baris hari ini, kita tandai juga yg mendekat
        if (
          isToday &&
          prayTimeMs > currentTime &&
          prayTimeMs < nextPrayerTimeMs
        ) {
          nextPrayerTimeMs = prayTimeMs;
          nextPrayerItem = { name: t.label, timeMs: prayTimeMs, key: t.key };
          document.getElementById("title").innerText =
            scheduleData[i].ramadhan + " - " + rowYear;
        }

        // jika bukan hari ini tetapi masih lebih besar dan lebih kecil dari nextPrayerTimeMs (misal besok) -> hitung mundur tetap muncul besok, tapi kita prioritaskan yang terdekat
        if (prayTimeMs > currentTime && prayTimeMs < nextPrayerTimeMs) {
          nextPrayerTimeMs = prayTimeMs;
          nextPrayerItem = { name: t.label, timeMs: prayTimeMs, key: t.key };
        }

        html += `<td class="${additionalClass}">${timeStr}</td>`;
      }
      html += `</tr>`;
    }

    html += `</tbody></table>`;
    document.getElementById("tableWrapper").innerHTML = html;

    // update countdown & next prayer
    if (nextPrayerItem) {
      document.getElementById("nextPrayerName").innerText = nextPrayerItem.name;
      // hitung mundur
      function updateCountdown() {
        const nowMs = new Date().getTime();
        const diff = nextPrayerItem.timeMs - nowMs;
        if (diff <= 0) {
          // waktu sudah lewat, refresh page logic
          renderTableAndCountdown(); // re-render
          return;
        }
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdownDisplay").innerText =
          `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
      }
      // clear interval sebelumnya jika ada
      if (window._countdownInterval) clearInterval(window._countdownInterval);
      updateCountdown();
      window._countdownInterval = setInterval(updateCountdown, 1000);
    } else {
      document.getElementById("nextPrayerName").innerText = "-";
      document.getElementById("countdownDisplay").innerText = "--:--:--";
    }

    // info tanggal
    const today = new Date();
    document.getElementById("infoDateNow").innerText = today.toLocaleDateString(
      "id-ID",
      { day: "numeric", month: "short", year: "numeric" },
    );
  }

  // init
  renderTableAndCountdown();
  setInterval(() => {
    renderTableAndCountdown();
  }, 1000); // refresh tiap detik untuk update status warna dan countdown
})();
