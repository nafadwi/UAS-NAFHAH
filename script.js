function setError(id, message) {
  const el = document.querySelector(`small[data-error-for="${id}"]`);
  if (el) el.textContent = message || "";
}

const formTx = document.getElementById("formTransaksi");
if (formTx) {
  formTx.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("namaTransaksi");
    const jumlah = document.getElementById("jumlah");
    const kategori = document.getElementById("kategori");

    let valid = true;

    setError("namaTransaksi", "");
    setError("jumlah", "");
    setError("kategori", "");

    
    if (!nama.value.trim()) {
      setError("namaTransaksi", "Nama transaksi wajib diisi.");
      valid = false;
    }
    if (!jumlah.value.trim()) {
      setError("jumlah", "Jumlah wajib diisi.");
      valid = false;
    } else if (Number(jumlah.value) < 1) {
      setError("jumlah", "Jumlah minimal 1.");
      valid = false;
    }
    if (!kategori.value.trim()) {
      setError("kategori", "Kategori wajib dipilih.");
      valid = false;
    }

    if (!valid) return;

    
    const tbody = document.getElementById("tBodyTransaksi");
    if (tbody) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${nama.value.trim()}</td>
        <td>${jumlah.value.trim()}</td>
        <td>${kategori.value.trim()}</td>
      `;
      tbody.appendChild(tr);

     
      formTx.reset();
      alert("Transaksi berhasil disimpan.");
    }
  });
}

const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    setError("username", "");
    setError("password", "");

    let valid = true;
    if (!user.value.trim()) { setError("username", "Username wajib diisi."); valid = false; }
    if (!pass.value.trim()) { setError("password", "Password wajib diisi."); valid = false; }

    if (!valid) return;

    alert("Login berhasil.");
    window.location.href = "transaksi.html";
  });
}