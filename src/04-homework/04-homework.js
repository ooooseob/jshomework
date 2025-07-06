/* global gsap */

(() => {
  textAnimation();
  imageAnimation();

  function textAnimation() {
    const tl = gsap.timeline();
    const textid = document.querySelector('#text-container');
    const badge = textid.querySelector('.badge');
    const headline = textid.querySelector('.headline');
    const subText = textid.querySelector('.sub-text');
    const form = textid.querySelector('.form');

    tl.to('.badge', { opacity: 1, duration: 1 });
    tl.from('.headline', { y: -30, opacity: 0, duration: 1 }, 0.3);
    tl.from(subText, { x: -20, opacity: 0, duration: 0.5 }, 0.6);
    tl.from(form, { y: 30, opacity: 0, duration: 0.5 }, 1.3);
  }

  function imageAnimation() {
    const tl = gsap.timeline();
    const imageid = document.querySelector('#image-container');
    const graph1 = imageid.querySelector('.graph1');
    const graph2 = imageid.querySelector('.graph2');
    const graph3 = imageid.querySelector('.graph3');
    const graph4 = imageid.querySelector('.graph4');
    const graph5 = imageid.querySelector('.graph5');
    const graph6 = imageid.querySelector('.graph6');
    const graph7 = imageid.querySelector('.graph7');
    const graph8 = imageid.querySelector('.graph8');
    const graph9 = imageid.querySelector('.graph9');
    const graph10 = imageid.querySelector('.graph10');
    const graph11 = imageid.querySelector('.graph11');
    const graph12 = imageid.querySelector('.graph12');
    const graph13 = imageid.querySelector('.graph13');
    const graph14 = imageid.querySelector('.graph14');
    const graph15 = imageid.querySelector('.graph15');
    const graph16 = imageid.querySelector('.graph16');
    const image1 = imageid.querySelector('.image1');

    tl.from('.graph1', { rotation: 90, opacity: 0, duration: 1 }, 1);
    tl.set('.graph2', { opacity: 1 }, 1.5);
    tl.from('.graph2', { x: -40, duration: 1 }, 1.5);
    tl.set('.graph3', { opacity: 1 }, 1.5);
    tl.set('.graph3', { y: 0 }, 2.2);
    tl.set('.graph3', { x: 0 }, 1.9);
    tl.set('.graph4', { opacity: 1 }, 1.3);
    tl.set('.graph4', { y: 0 }, 1.4);
    tl.set('.graph4', { x: 0 }, 1.8);
    tl.from('.graph5', { x: -120, opacity: 0, duration: 0.5 }, 1.3);
    tl.set('.graph6', { opacity: 1 }, 2.3);
    tl.from('.graph7', { y: 40, opacity: 0, duration: 1 }, 2.5);
    tl.set('.graph8', { opacity: 1 }, 2.5);
    tl.from('.graph9', { x: 150, opacity: 0, duration: 0.3 }, 1.4);
    tl.from('.graph10', { rotation: 90, opacity: 0, duration: 0.5 }, 1.3);
    tl.set('.graph11', { opacity: 1 }, 1.7);
    tl.set('.graph11', { y: 0 }, 2.1);
    tl.from('.graph12', { y: 50, opacity: 0, duration: 1 }, 1.7);
    tl.from('.graph13', { x: -40, opacity: 0, duration: 0.5 }, 1.8);
    tl.from('.graph14', { rotation: 90, opacity: 0, duration: 1 }, 1);
    tl.from('.graph15', { x: 60, opacity: 0, duration: 1.3 }, 2.7);
    tl.from('.image1', { rotation: -135, opacity: 0, duration: 1 }, 0.8);
  }
})();
