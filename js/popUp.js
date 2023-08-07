function showSoldOutPopUp() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "This book has been sold out",
  });
}
