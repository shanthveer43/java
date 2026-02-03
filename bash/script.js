function openForm() {
  document.getElementById("formBox").style.display = "block";
}

function closeForm() {
  document.getElementById("formBox").style.display = "none";
}

function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let msg = document.getElementById("msg");

  if (name === "" || phone === "" || service === "") {
    msg.innerText = "❌ Please fill all fields";
    msg.style.color = "red";
    return;
  }

  let text =
    "New Booking%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Service: " + service;

  let whatsappNumber = "91XXXXXXXXXX"; // replace

  window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + text,
    "_blank"
  );

  msg.innerText = "✅ Redirecting to WhatsApp...";
  msg.style.color = "green";
}
