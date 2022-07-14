const router = [
  {
    path: '/home',
    component: '@/pages/home'
  },
  {
    path: '/commemoration',
    component: '@/pages/commemoration'
  },
  {
    path: '/material',
    component: '@/pages/material'
  },
  {
    path: '/whisper',
    component: '@/pages/whisper'
  },
  {
    path:'/',
    redirect: '/home'
  }
]
export default router;