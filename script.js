(function () {
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

  // helper parse tanggal "19 Feb 2026"
  function parseMasehi(dateStr) {
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
    let month = parts[1];
    if (month === "Feb") month = "Feb";
    else if (month === "Mar") month = "Mar";
    else if (month === "Apr") month = "Apr";
    else if (month === "Mei") month = "May";
    else if (month === "Jun") month = "Jun";
    else if (month === "Jul") month = "Jul";
    else if (month === "Agu") month = "Aug";
    else if (month === "Sep") month = "Sep";
    else if (month === "Okt") month = "Oct";
    else if (month === "Nov") month = "Nov";
    else if (month === "Des") month = "Dec";
    return new Date(`${parts[0]} ${month} ${parts[2]} GMT+0700`);
  }

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  // render tabel dan countdown
  function refreshUI() {
    const now = new Date();
    const currentTime = now.getTime();
    const year = now.getFullYear(),
      month = now.getMonth(),
      day = now.getDate();

    // cari index hari ini
    let todayIndex = -1;

    scheduleData.forEach((row, idx) => {
      const d = parseMasehi(row.masehi);
      if (
        d.getDate() === day &&
        d.getMonth() === month &&
        d.getFullYear() === year
      )
        todayIndex = idx;
    });

    if (todayIndex !== -1) {
      const todayRamadhan = scheduleData[todayIndex].ramadhan;
      document.getElementById("ramadhanBadge").innerText =
        "🌙 " + todayRamadhan;
    }

    // cari jadwal berikutnya (terdekat)
    let nextPrayer = null; // { name, timeMs }
    let nextTime = Infinity;

    // bangun tabel
    let html =
      "<table><thead><tr><th>Ramadan</th><th>Hari</th><th>Masehi</th><th>Imsak</th><th>Subuh</th><th>Terbit</th><th>Dhuha</th><th>Zuhur</th><th>Ashr</th><th>Maghrib</th><th>Isya</th></tr></thead><tbody>";

    for (let i = 0; i < scheduleData.length; i++) {
      const row = scheduleData[i];
      const rowDate = parseMasehi(row.masehi);
      const rowYear = rowDate.getFullYear(),
        rowMonth = rowDate.getMonth(),
        rowDay = rowDate.getDate();
      const isToday = rowYear === year && rowMonth === month && rowDay === day;
      const rowClass = isToday ? "today-highlight" : "";

      html += `<tr class="${rowClass}"><th class="rowhead">${row.ramadhan}</th><td>${row.hari}</td><td>${row.masehi}</td>`;

      for (let t of timeCols) {
        const timeStr = row[t.key];
        const [hour, minute] = timeStr.split(":").map(Number);
        const prayDate = new Date(rowYear, rowMonth, rowDay, hour, minute, 0);
        const prayMs = prayDate.getTime();

        let cellClass = "";
        if (prayMs < currentTime) cellClass = "past-time";
        else if (prayMs >= currentTime && prayMs < currentTime + 30 * 60 * 1000)
          cellClass = "current-time"; // dalam 30 menit dianggap current
        else if (prayMs > currentTime) cellClass = "upcoming-time";

        // tentukan berikutnya: hanya yang > currentTime dan terdekat
        if (prayMs > currentTime && prayMs < nextTime) {
          nextTime = prayMs;
          nextPrayer = { name: t.label, timeMs: prayMs };
        }

        // jika waktu ini adalah yang terpilih sebagai berikutnya, beri highlight ekstra
        if (
          nextPrayer &&
          nextPrayer.timeMs === prayMs &&
          prayMs > currentTime
        ) {
          cellClass = cellClass + " next-highlight"; // timpa dengan highlight oranye
        }

        html += `<td class="${cellClass}">${timeStr}</td>`;
      }
      html += "</tr>";
    }
    html += "</tbody></table>";
    document.getElementById("modernTableWrapper").innerHTML = html;

    // update countdown panel
    if (nextPrayer) {
      document.getElementById("nextPrayerModern").innerText = nextPrayer.name;
      // hitung mundur realtime
      function updateCdown() {
        const nowMs = new Date().getTime();
        const diff = nextPrayer.timeMs - nowMs;
        if (diff <= 0) {
          refreshUI(); // re-render jika sudah lewat
          return;
        }
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById("countdownDisplayModern").innerText =
          `${pad(h)}:${pad(m)}:${pad(s)}`;
      }
      if (window._intv) clearInterval(window._intv);
      updateCdown();
      window._intv = setInterval(updateCdown, 1000);
    } else {
      document.getElementById("nextPrayerModern").innerText = "—";
      document.getElementById("countdownDisplayModern").innerText = "--:--:--";
    }

    // tanggal hari ini
    const d = new Date();
    document.getElementById("dateChipModern").innerText = d.toLocaleDateString(
      "id-ID",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    );
  }

  refreshUI();
  setInterval(refreshUI, 1000);
})();
