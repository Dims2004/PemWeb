function puasa() {
    alert("Selamat menunaikan ibadah puasa");
    update();
  }
  
  function update() {
    var element = document.getElementById("anggota");
    element.innerHTML = "Teks Diubah";
  }
  
  var members = ["dimas", "dimas 2", "dimas 3", "dimas 4"];
  members.push("dimas 5", "dimas 6");
  console.log("Anggota sebelum ditambahkan:", members.slice(0, 4));
  console.log("Anggota setelah ditambahkan:", members);