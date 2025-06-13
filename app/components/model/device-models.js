import iphone11 from '~/assets/iphone-11.glb';
import macbookPro from '~/assets/macbook-pro.glb';
import krokus from '~/assets/krokus.glb'

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
    tintColor: 0x1f2025,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
    tintColor: 0x1f2025,
  },
  krokus: {
    url: krokus,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
};
