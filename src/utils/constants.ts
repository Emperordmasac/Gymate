//--INTERNAL IMPORTS
import ProgressImg from 'styles/images/who-we-are/progresion.png'
import WorkoutImg from 'styles/images/who-we-are/workout.png'
import NutritionImg from 'styles/images/who-we-are/nutritions.png'
import Trainer1 from 'styles/images/trainers/trainer1.png'
import Trainer2 from 'styles/images/trainers/trainer2.png'
import Trainer3 from 'styles/images/trainers/trainer3.png'

export const mainNavList = [
  {
    id: 1,
    url: '/',
    title: 'Home',
  },
  {
    id: 2,
    url: '/about',
    title: 'About',
  },
  {
    id: 3,
    url: '/gallery/1',
    title: 'Gallery',
  },
  {
    id: 4,
    url: '/schedule/monday',
    title: 'Schedule',
  },
  {
    id: 5,
    url: '/blog',
    title: 'Blog',
  },
  {
    id: 6,
    url: '/pricing',
    title: 'Pricing',
  },
  {
    id: 7,
    url: '/classes',
    title: 'Classes',
  },
  {
    id: 8,
    url: '/contact',
    title: 'Contact',
  },
]

export const cardList = [
  {
    id: 1,
    img: ProgressImg,
    title: 'Progress',
    description:
      'Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.',
  },
  {
    id: 2,
    img: WorkoutImg,
    title: 'Workout',
    description:
      " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    id: 3,
    img: NutritionImg,
    title: 'Nutritions',
    description:
      'Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.',
  },
]

export const trainers = [
  { id: 1, img: Trainer1, name: 'John Lewis', job: 'Yoga Trainer' },
  { id: 2, img: Trainer2, name: 'Jonathan Doe', job: 'Crossfit Trainer' },
  { id: 3, img: Trainer3, name: 'Ana June', job: 'Personal Trainer' },
]
