document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let namaNode = document.getElementById("nama");
    let usernameNode = document.getElementById("username");
    let emailNode = document.getElementById("email");
    let passwordNode = document.getElementById("password");
    let konfirmasiPasswordNode = document.getElementById("konfirmasi_password");
    let noTeleponNode = document.getElementById("no_telepon");
    let jenisKelaminNodePria = document.getElementById("jenis_kelamin_pria");
    let jenisKelaminNodeWanita = document.getElementById(
      "jenis_kelamin_wanita"
    );
    let websiteNode = document.getElementById("website");

    let namaSpanNode = document.getElementById("namaSpan");
    let usernameSpanNode = document.getElementById("usernameSpan");
    let emailSpanNode = document.getElementById("emailSpan");
    let passwordSpanNode = document.getElementById("passwordSpan");
    let konfirmasiPasswordSpanNode = document.getElementById(
      "konfirmasiPasswordSpan"
    );
    let noTeleponSpanNode = document.getElementById("noTeleponSpan");
    let jenisKelaminSpanNode = document.getElementById("jenisKelaminSpan");
    let websiteSpanNode = document.getElementById("websiteSpan");

    let namaError = "";
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let konfirmasiPasswordError = "";
    let noTeleponError = "";
    let jenisKelaminError = "";
    let websiteError = "";

    if (namaNode.value.trim() === "") {
      namaError = "Nama harus diisi";
    }

    if (usernameNode.value.trim() === "") {
      usernameError = "Username harus diisi";
    }

    if (emailNode.value.trim() === "") {
      emailError = "Email harus diisi";
    } else if (!validateEmail(emailNode.value.trim())) {
      emailError = "Email tidak valid";
    }

    if (passwordNode.value.trim() === "") {
      passwordError = "Password harus diisi";
    }

    if (konfirmasiPasswordNode.value.trim() === "") {
      konfirmasiPasswordError = "Konfirmasi password harus diisi";
    } else if (
      konfirmasiPasswordNode.value.trim() !== passwordNode.value.trim()
    ) {
      konfirmasiPasswordError = "Konfirmasi password tidak sesuai";
    }

    if (noTeleponNode.value.trim() === "") {
      noTeleponError = "Nomor telepon harus diisi";
    }

    if (!jenisKelaminNodePria.checked && !jenisKelaminNodeWanita.checked) {
      jenisKelaminError = "Jenis kelamin harus dipilih";
    }

    if (websiteNode.value.trim() === "") {
      websiteError = "Alamat website harus diisi";
    }

    namaSpanNode.innerHTML = "";
    usernameSpanNode.innerHTML = "";
    emailSpanNode.innerHTML = "";
    passwordSpanNode.innerHTML = "";
    konfirmasiPasswordSpanNode.innerHTML = "";
    noTeleponSpanNode.innerHTML = "";
    jenisKelaminSpanNode.innerHTML = "";
    websiteSpanNode.innerHTML = "";

    if (namaError !== "") {
      namaSpanNode.innerHTML = namaError;
      namaSpanNode.className = "error";
      event.preventDefault();
    }

    if (usernameError !== "") {
      usernameSpanNode.innerHTML = usernameError;
      usernameSpanNode.className = "error";
      event.preventDefault();
    }

    if (emailError !== "") {
      emailSpanNode.innerHTML = emailError;
      emailSpanNode.className = "error";
      event.preventDefault();
    }

    if (passwordError !== "") {
      passwordSpanNode.innerHTML = passwordError;
      passwordSpanNode.className = "error";
      event.preventDefault();
    }

    if (konfirmasiPasswordError !== "") {
      konfirmasiPasswordSpanNode.innerHTML = konfirmasiPasswordError;
      konfirmasiPasswordSpanNode.className = "error";
      event.preventDefault();
    }

    if (noTeleponError !== "") {
      noTeleponSpanNode.innerHTML = noTeleponError;
      noTeleponSpanNode.className = "error";
      event.preventDefault();
    }

    if (jenisKelaminError !== "") {
      jenisKelaminSpanNode.innerHTML = jenisKelaminError;
      jenisKelaminSpanNode.className = "error";
      event.preventDefault();
    }

    if (websiteError !== "") {
      websiteSpanNode.innerHTML = websiteError;
      websiteSpanNode.className = "error";
      event.preventDefault();
    }

    if (
      namaError === "" &&
      usernameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      konfirmasiPasswordError === "" &&
      noTeleponError === "" &&
      jenisKelaminError === "" &&
      websiteError === ""
    ) {
      document.getElementById("successMessage").style.display = "block";

      setTimeout(function () {
        document.getElementById("successMessage").style.display = "none";
      }, 3000);

      document.getElementById("registrationForm").reset();

      event.preventDefault();
    }
  });

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
