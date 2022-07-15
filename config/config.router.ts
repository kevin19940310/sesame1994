const router = [
  {
    path: '/home',
    component: '@/pages/home',
    animatedTag: 1,
  },
  {
    path: '/commemoration',
    component: '@/pages/commemoration',
    animatedTag: 2,
  },
  {
    path: '/music',
    component: '@/pages/music',
    animatedTag: 3,
  },
  {
    path: '/whisper',
    component: '@/pages/whisper',
    animatedTag: 4,
  },
  {
    path: '/material',
    component: '@/pages/material',
    animatedTag: 5,
  },
  {
    path:'/',
    redirect: '/home',
    animatedTag: 1,
  }
]
export default router;