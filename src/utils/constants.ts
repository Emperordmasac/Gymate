//--INTERNAL IMPORTS
import ProgressImg from 'styles/images/who-we-are/progresion.png'
import WorkoutImg from 'styles/images/who-we-are/workout.png'
import NutritionImg from 'styles/images/who-we-are/nutritions.png'
import Trainer1 from 'styles/images/trainers/trainer1.png'
import Trainer2 from 'styles/images/trainers/trainer2.png'
import Trainer3 from 'styles/images/trainers/trainer3.png'
import TestimonialImg from 'styles/images/testimonials/testimonial-new.jpg'
import pricing1 from 'styles/images/pricing/img1.jpg'
import pricing2 from 'styles/images/pricing/img2.jpg'
import pricing3 from 'styles/images/pricing/img3.jpg'

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

export const testimonials = [
  {
    id: 1,
    img: TestimonialImg,
    name: 'Tony Stark',
    job: 'CEO of Stark Industries',
    text:
      "I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.",
  },
  // {
  //   id: 2,
  //   img: TestimonialImg,
  //   name: 'Harry Porter',
  //   job: 'CEO of Hogwarts',
  //   text:
  //     "I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.",
  // },
  // {
  //   id: 3,
  //   img: TestimonialImg,
  //   name: 'Bruce Wayne',
  //   job: 'CEO of Wane Enterprises',
  //   text:
  //     "I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.",
  // },
]

export const pricings = [
  {
    id: 1,
    img: pricing1,
    price: 39,
    title: 'Beginners',
    rate: 'p/m',
    details: [
      {
        id: 1,
        detail: 'Free Hand',
      },
      {
        id: 2,
        detail: 'Gym Fitness',
      },
      {
        id: 3,
        detail: 'Weight Loss',
      },
      {
        id: 4,
        detail: 'Personal Trainer',
      },
      {
        id: 5,
        detail: 'Cycling',
      },
    ],
  },
  {
    id: 2,
    img: pricing2,
    price: 65,
    title: 'Expert',
    rate: 'p/m',
    details: [
      {
        id: 1,
        detail: 'Free Hand',
      },
      {
        id: 2,
        detail: 'Gym Fitness',
      },
      {
        id: 3,
        detail: 'Weight Loss',
      },
      {
        id: 4,
        detail: 'Personal Trainer',
      },
      {
        id: 5,
        detail: 'Cycling',
      },
    ],
  },
  {
    id: 3,
    img: pricing3,
    price: 100,
    title: 'PRO',
    rate: 'p/m',
    details: [
      {
        id: 1,
        detail: 'Free Hand',
      },
      {
        id: 2,
        detail: 'Gym Fitness',
      },
      {
        id: 3,
        detail: 'Weight Loss',
      },
      {
        id: 4,
        detail: 'Personal Trainer',
      },
      {
        id: 5,
        detail: 'Cycling',
      },
    ],
  },
]
