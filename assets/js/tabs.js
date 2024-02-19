window.addEventListener('DOMContentLoaded', () => {
  // Add a click event handler to each tab
  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabs);
  });
  
  // Enable arrow navigation between tabs in the tab list
  const tabList = document.querySelector('[role="tablist"]');
  let tabFocus = 0;
  tabList.addEventListener('keydown', (event) => {
    // Move right
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      tabs[tabFocus].setAttribute('tabindex', -1);
      if (event.key === 'ArrowRight') {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (event.key === 'ArrowLeft') {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }
      tabs[tabFocus].setAttribute('tabindex', 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(event) {
  const tab = event.target;
  const tabList = document.querySelector('[role="tablist"]');
  const tabPanels =  document.querySelectorAll('[role="tabpanel"]')

  // Remove all current selected tabs
  tabList
    .querySelectorAll('[aria-selected="true"]')
    .forEach((tab) => tab.setAttribute('aria-selected', false));

  // Set this tab as selected
  tab.setAttribute('aria-selected', true);

  // Hide all tab panels
  tabPanels.forEach((panel) => panel.classList.add('hidden'));

  // Show the selected panel
  document
    .querySelector(`#${tab.getAttribute('aria-controls')}`)
    .classList.remove('hidden');
}
