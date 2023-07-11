let panels = document.querySelectorAll(".panel");

function addClass() {
    const clickedPanel = this;
  
    if (clickedPanel.classList.contains('open')) {
      clickedPanel.classList.remove('open');
    } 
    else {
      clickedPanel.classList.add('open');
    }

    panels.forEach(panel => {
        if (panel != this) {
          panel.classList.remove('open');
        }
      });
  
  }
  

function toggleOpenShow(p) {
    // e.propertyName.includes('flex') checks if the value of the propertyName property of the event e contains the substring 'flex'
    if (p.propertyName.includes('flex')) {
      if (this.classList.contains('open-show')) {
        this.classList.remove('open-show');
      } else {
        this.classList.add('open-show');
      }
    }
  }
  


panels.forEach(panel => {
    panel.addEventListener('click', addClass);
    panel.addEventListener('transitionend', toggleOpenShow);
  });