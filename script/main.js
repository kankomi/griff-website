const instaGridElem = document.querySelector('.insta-grid');

particlesJS.load('particles', 'script/particles/particles_config.json');

function instagramGrid({ data }) {
  const images = data.filter((x) => x.media_type !== 'VIDEO');

  for (const elem of images) {
    const pic = document.createElement('a');

    pic.className = 'box';
    pic.setAttribute('href', elem.permalink);
    pic.setAttribute('target', '_blank');
    pic.style = `
    background: url(${elem.media_url}) no-repeat;
    background-size: cover;
    `;

    instaGridElem.appendChild(pic);
  }
}
