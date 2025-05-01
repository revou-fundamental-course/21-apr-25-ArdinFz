const cInput = document.getElementById("input-c");
const fInput = document.getElementById("input-f");
const explanation = document.getElementById("penjelasan");

// Konversi dari Celcius ke Fahrenheit
function konversi() {
  const cValue = parseFloat(cInput.value);
  if (isNaN(cValue)) {
    alert("Masukkan suhu dalam Celcius terlebih dahulu!");
    return;
  }

  const fValue = (cValue * 9 / 5) + 32;
  fInput.value = fValue.toFixed(2);
  explanation.value = `${cValue}°C × 9/5 + 32 = ${fValue.toFixed(2)}°F`;
}

// Konversi dari Fahrenheit ke Celcius
function reverse() {
  const fValue = parseFloat(fInput.value);
  if (isNaN(fValue)) {
    alert("Masukkan suhu dalam Fahrenheit terlebih dahulu!");
    return;
  }

  const cValue = (fValue - 32) * 5 / 9;
  cInput.value = cValue.toFixed(2);
  explanation.value = `(${fValue}°F - 32) × 5/9 = ${cValue.toFixed(2)}°C`;
}

// Bersihkan semua input
function hapus() {
  cInput.value = "";
  fInput.value = "";
  explanation.value = "";
}
