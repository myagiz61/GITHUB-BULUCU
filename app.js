import GitHub from "./github.js";
import UI from "./ui.js";
// github ve ui claslarının örneğini oluşturma
const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", changeTheme);
searchButton.addEventListener("click", handleSearch);
// enter a tıklandığında getirme olayı
searchUser.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        // hata mesajı göster
        ui.showAlert("Aradığınız Kullanıcı Bulunamadı", "alert alert-danger");
      } else {
        //kullanıcıyı göster
        ui.showAlert(" Kullanıcı Başarıyla Bulundu", "alert alert-success");
        ui.showprofile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.showAlert("Lütfen Formu Doldurunuz", "alert alert-info");
    ui.clearProfile();
  }

  searchUser.value = "";
}

function changeTheme(e) {
  if (e.target.classList.contains("the")) {
    document.body.style.backgroundColor = "gray";
    e.target.innerText = "Açık Mod";
    e.target.classList.remove("the");
  } else {
    document.body.style.backgroundColor = "white";
    e.target.innerText = "Koyu Mod";
    e.target.classList.add("the");
  }
}
