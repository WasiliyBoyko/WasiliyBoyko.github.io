
  function openPage(pageName) {
  let tabContent = document.getElementsByClassName("tab_content");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block"; 

}

// Программно совершает щелчек мыши на елементе который должен быть открыт по умолчанию.
document.getElementById('defaultOpen').click(); 

