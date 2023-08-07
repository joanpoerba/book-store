function showSoldOutPopUp() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "The book has been sold out",
  });
}
