/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) =>{
   const toggle = document.getElementById(toggleId),
         sidebar = document.getElementById(sidebarId),
         header = document.getElementById(headerId),
         main = document.getElementById(mainId)

   if(toggle && sidebar && header && main){
       toggle.addEventListener('click', ()=>{
           /* Show sidebar */
           sidebar.classList.toggle('show-sidebar')
           /* Add padding header */
           header.classList.toggle('left-pd')
           /* Add padding main */
           main.classList.toggle('left-pd')
       })
   }
}
showSidebar('header-toggle','sidebar', 'header', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor));

// Revenue Chart
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Revenue ($)',
      data: [500, 1200, 1800, 1500, 2000, 2400],
      borderColor: '#f39c12',
      backgroundColor: '#f39c12',
      fill: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
    }
  }
});

// Product Chart
const ctxProduct = document.getElementById('productChart').getContext('2d');
new Chart(ctxProduct, {
  type: 'doughnut',
  data: {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
      label: 'Sales',
      data: [30, 20, 25, 25],
      backgroundColor: ['#1abc9c', '#e74c3c', '#f1c40f', '#9b59b6'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
    }
  }
});
