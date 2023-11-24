
function createSectionTitle({ pretitle, title, children, align }) {
  const container = document.createElement('div');
  container.className = `flex w-full flex-col mt-4 ${align === 'left' ? '' : 'items-center justify-center text-center'}`;

  if (pretitle) {
    const preTitleDiv = document.createElement('div');
    preTitleDiv.className = 'text-sm font-bold tracking-wider text-indigo-600 uppercase';
    preTitleDiv.textContent = pretitle;
    container.appendChild(preTitleDiv);
  }

  if (title) {
    const titleH2 = document.createElement('h2');
    titleH2.className = 'max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white';
    titleH2.textContent = title;
    container.appendChild(titleH2);
  }

  if (children) {
    const childrenP = document.createElement('p');
    childrenP.className = 'max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300';
    childrenP.textContent = children;
    container.appendChild(childrenP);
  }

  return container;
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  const sectionTitle = createSectionTitle({
    pretitle: 'Bienvenidos',
    title: 'Aprende Navegación Web con Nosotros',
    children: 'Descubre todas las herramientas que te ofrecemos para navegar en el mundo digital.',
    align: 'center'
  });

  document.getElementById('section-title-container').appendChild(sectionTitle);
});
