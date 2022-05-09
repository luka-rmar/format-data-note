const fieldNote = document.getElementById("note")
const fieldSeries = document.getElementById("series")
const keyNote = document.getElementById("key_note")

const resultdNote = document.getElementById("result_note")
const resultSeries = document.getElementById("result_series")
const resutulKey = document.getElementById("result_key")

const restulCoillection = document.getElementsByClassName("field_result")

 

function fomartingData() {
  const formatedFieldNote = fieldNote.value === "" ? "vazio" : ("000000000" + fieldNote.value).slice(-9)
  const formatedFieldSeries = fieldSeries.value === "" ? "vazio" : ("000" + fieldSeries.value).slice(-3)
  const formatedkeyNote = keyNote.value === "" ? "vazio" : keyNote.value.split(" ").join("").trim()
  const restulCollectionValue = [formatedFieldNote, formatedFieldSeries, formatedkeyNote]


  for(let x = 0; x < restulCoillection.length; x++) {
    restulCoillection[x].children[1].value = restulCollectionValue[x]
  }

}


function copyClipboard(fieldId, tooltipId) {
  const fieldText = document.getElementById(fieldId)

  fieldText.select();
  fieldText.setSelectionRange(0, 99999)

  navigator.clipboard.writeText(fieldText.value)

  const tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Copiado";

}
function outCopyClipboard(tooltipId) {
  const tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Copiar área de transferência";
}