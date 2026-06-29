const months = document.GetElementById("months")
const month = document.GetElementById("month")

function hideMonths():
  if months.styles.display == None{months.styles.display = block}
  else
    months.styles.display = None
