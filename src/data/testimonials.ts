import type { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Lee",
    position: "Creative Director ",
    company: "Innovate Corp ",
    message:
      "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    avatar: "/chen.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Tan",
    position: "Product Manager ",
    company: "Finovate",
    message:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    avatar: "/sarah.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Marketing Head ",
    company: "Tech Solutions",
    message:
      "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
    avatar: "/john.png",
    rating: 5,
  },
];

export default testimonials;
