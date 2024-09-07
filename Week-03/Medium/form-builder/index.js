function addNewField() {
  const label = document.getElementById("field-label");
  const type = document.getElementById("field-type");

  if (!label.value || !type.value) {
    alert("All field are required");
    return;
  }

  const previewElt = document.querySelector(".preview");
  const labelElt = document.createElement("label");
  const inputElt = document.createElement("input");

  labelElt.textContent = label.value;
  inputElt.setAttribute("type", type.value);

  if (type.value === "button") {
    inputElt.setAttribute("value", label.value);
  }

  label.value = "";

  previewElt.appendChild(labelElt);
  previewElt.appendChild(inputElt);
}
