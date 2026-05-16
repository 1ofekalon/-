const videos = [
  {
    category: "עידן 2000",
    title: "עידן 2000.MP4",
    path: "עידן 2000/עידן 2000.MP4",
  },
  {
    category: "עידן 2000",
    title: "v14044g50000cqae3q7og65l0ubg3bbg.MP4",
    path: "עידן 2000/v14044g50000cqae3q7og65l0ubg3bbg.MP4",
  },
  {
    category: "סופר קארפור",
    title: "קארפור.MOV",
    path: "סופר קארפור/קארפור.MOV",
  },
  {
    category: "בורגר סאלון",
    title: "בורגר סאלון.MP4",
    path: "בורגר סאלון/בורגר סאלון.MP4",
  },
  {
    category: "סופר טוי- צעצועים ומשחקים",
    title: "סופר טוי (4).MP4",
    path: "סופר טוי- צעצועים ומשחקים/סופר טוי (4).MP4",
  },
  {
    category: "סופר טוי- צעצועים ומשחקים",
    title: "סופר טוי (15).mp4",
    path: "סופר טוי- צעצועים ומשחקים/סופר טוי (15).mp4",
  },
  {
    category: "סופר טוי- צעצועים ומשחקים",
    title: "סופר טוי (12).mp4",
    path: "סופר טוי- צעצועים ומשחקים/סופר טוי (12).mp4",
  },
  {
    category: "חנות צעצועים בחיפה",
    title: "IMG_5142.MP4",
    path: "חנות צעצועים בחיפה/IMG_5142.MP4",
  },
  {
    category: "חנות צעצועים בחיפה",
    title: "IMG_4437.MP4",
    path: "חנות צעצועים בחיפה/IMG_4437.MP4",
  },
  {
    category: "חנות צעצועים בחיפה",
    title: "IMG_4436.MOV",
    path: "חנות צעצועים בחיפה/IMG_4436.MOV",
  },
  {
    category: "חנות צעצועים בחיפה",
    title: "IMG_4430.MP4",
    path: "חנות צעצועים בחיפה/IMG_4430.MP4",
  },
  {
    category: "אלפיט טויס - ייבוא ושיווק צעצועים",
    title: "Captions_8AB1F0.MP4",
    path: "אלפיט טויס - ייבוא ושיווק צעצועים/Captions_8AB1F0.MP4",
  },
  {
    category: "אלפיט טויס - ייבוא ושיווק צעצועים",
    title: "Captions_63ADC0.MP4",
    path: "אלפיט טויס - ייבוא ושיווק צעצועים/Captions_63ADC0.MP4",
  },
  {
    category: "אלפיט טויס - ייבוא ושיווק צעצועים",
    title: "Captions_C20AF7.MP4",
    path: "אלפיט טויס - ייבוא ושיווק צעצועים/Captions_C20AF7.MP4",
  },
  {
    category: "אפליקצית לימוד אנגלית",
    title: "Captions_1EE25F.MP4",
    path: "אפליקצית לימוד אנגלית/Captions_1EE25F.MP4",
  },
  {
    category: "אפליקצית לימוד אנגלית",
    title: "Captions_9721D1.MP4",
    path: "אפליקצית לימוד אנגלית/Captions_9721D1.MP4",
  },
  {
    category: "אפליקצית לימוד אנגלית",
    title: "Captions_8E1CCB.MP4",
    path: "אפליקצית לימוד אנגלית/Captions_8E1CCB.MP4",
  },
  {
    category: "אפליקצית לימוד אנגלית",
    title: "5211165925294859388.mp4",
    path: "אפליקצית לימוד אנגלית/5211165925294859388.mp4",
  },
  {
    category: "אפליקצית לימוד אנגלית",
    title: "4.mp4",
    path: "אפליקצית לימוד אנגלית/4.mp4",
  },
  {
    category: "אגד (אפליקצית egg)",
    title: "אגד.MP4",
    path: "אגד (אפליקצית egg)/אגד.MP4",
  },
  {
    category: "מנדלה דאפו",
    title: "v10044g50000cb44vvjc77u2lqhun59g.MP4",
    path: "מנדלה דאפו/v10044g50000cb44vvjc77u2lqhun59g.MP4",
  },
  {
    category: "מנדלה דאפו",
    title: "v10044g50000capk94bc77uagae7jkrg.MP4",
    path: "מנדלה דאפו/v10044g50000capk94bc77uagae7jkrg.MP4",
  },
  {
    category: "מנדלה דאפו",
    title: "IMG_5143.MP4",
    path: "מנדלה דאפו/IMG_5143.MP4",
  },
  {
    category: "מנדלה דאפו",
    title: "v10044g50000ces4sb3c77uevkisika0.MP4",
    path: "מנדלה דאפו/v10044g50000ces4sb3c77uevkisika0.MP4",
  },
  {
    category: "מנדלה דאפו",
    title: "v14044g50000cgtdrp3c77u7logkba40.MP4",
    path: "מנדלה דאפו/v14044g50000cgtdrp3c77u7logkba40.MP4",
  },
];

const grid = document.getElementById("videoGrid");
const buttons = document.querySelectorAll(".filter-btn");

function normalizePath(path) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function renderVideos(category = "all") {
  grid.innerHTML = "";
  const filtered = category === "all" ? videos : videos.filter((video) => video.category === category);

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">לא נמצאו סרטונים לקטגוריה זו.</div>`;
    return;
  }

  filtered.forEach((video) => {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = video.title;

    const wrapper = document.createElement("div");
    wrapper.className = "video-wrapper";

    const player = document.createElement("video");
    player.setAttribute("controls", "");
    player.setAttribute("preload", "metadata");
    player.setAttribute("playsinline", "");
    player.src = normalizePath(video.path);
    player.innerHTML = "Your browser does not support the video tag.";

    wrapper.appendChild(player);
    card.append(title, wrapper);
    grid.appendChild(card);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderVideos(button.dataset.category);
  });
});

renderVideos();

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbxVYQLDwWKgz1e1PWLWGS8Selw_jG40QqmQqqWAqM7ZhH1WFqYHSEjDBky96P5r-CCb/exec";

document.getElementById("leadsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  if (!name || !phone) {
    if (!name) this.name.focus();
    else this.phone.focus();
    return;
  }

  const btn = this.querySelector(".submit-btn");
  btn.disabled = true;
  btn.textContent = "שולח...";

  const payload = {
    name,
    phone,
    email: this.email.value.trim(),
    message: this.message.value.trim(),
  };

  const params = new URLSearchParams(payload);
  fetch(`${SHEETS_URL}?${params}`, { mode: "no-cors" })
    .then(() => {
      this.querySelectorAll("input, textarea, button").forEach((el) => (el.disabled = true));
      document.getElementById("formSuccess").hidden = false;
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = "שלח פנייה";
      alert("שגיאה בשליחה, נסה שוב.");
    });
});
