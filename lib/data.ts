import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck2,
  Clock3,
  CreditCard,
  Gem,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldPlus,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  UsersRound,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Our Team", href: "#team", id: "team" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "General dental care",
    description:
      "We are excited to meet you and provide the best dental care for your family.",
    icon: Stethoscope,
  },
  {
    title: "Dental implants",
    description:
      "Precision implant planning with restorative outcomes designed to feel natural.",
    icon: Gem,
  },
  {
    title: "Cosmetic dentistry",
    description:
      "Smile design, veneers, and contouring tailored to facial balance and confidence.",
    icon: Sparkles,
  },
  {
    title: "Teeth whitening",
    description:
      "Professional whitening treatments for a brighter smile with safe enamel care.",
    icon: Syringe,
  },
];

export const reasons: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Experienced doctor",
    description:
      "Friendly, highly trained clinicians with a modern preventive approach.",
    icon: Stethoscope,
  },
  {
    title: "Personalized care",
    description:
      "Every treatment plan is adapted to your comfort, history, and dental goals.",
    icon: HeartPulse,
  },
  {
    title: "Flexible payment options",
    description:
      "Transparent costs and practical financing designed for long-term care.",
    icon: CreditCard,
  },
  {
    title: "Emergency services",
    description:
      "Fast support for urgent dental pain, broken teeth, and unexpected trauma.",
    icon: ShieldPlus,
  },
  {
    title: "Positive patient reviews",
    description:
      "Consistent 5-star feedback focused on care quality, comfort, and trust.",
    icon: Star,
  },
  {
    title: "Latest technology",
    description:
      "Digital diagnostics, guided planning, and efficient in-clinic workflows.",
    icon: UsersRound,
  },
];

export const processSteps: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Book an appointment",
    description:
      "Choose your date, time, and treatment needs through our smooth booking flow.",
    icon: CalendarCheck2,
  },
  {
    title: "Dental checkups",
    description:
      "Comprehensive exams, diagnostics, and planning for every stage of care.",
    icon: Stethoscope,
  },
  {
    title: "Expert care",
    description:
      "Personalized treatment delivered with comfort-first methods and modern tools.",
    icon: ShieldPlus,
  },
];

export const doctors = [
  { name: "Dr. Aiman", role: "Lead Dentist", image: "/dr-aiman-hero.png" },
  { name: "Dr. Sara Malik", role: "Senior Dentist", image: "/photos/doctor-2.jpg" },
  { name: "Dr. Emily Stone", role: "Orthodontist", image: "/photos/doctor-3.jpg" },
  { name: "Dr. Hina Yusuf", role: "Periodontist", image: "/photos/doctor-2.jpg" },
];

export const testimonials = [
  {
    rating: "4.7/5",
    quote:
      "I want to say thank you to my doctor Steve. Thank you for helping me overcome my fear of the dentist. Every step felt calm, clear, and genuinely caring.",
    name: "Robert Lee",
    role: "Software Engineer",
    image: "/photos/doctor-2.jpg",
  },
  {
    rating: "4.8/5",
    quote:
      "The best dental experience I've ever had. The team was professional and friendly, and the results were amazing. I felt comfortable from the moment I walked in.",
    name: "Banson Doe",
    role: "Teacher",
    image: "/photos/doctor-3.jpg",
  },
  {
    rating: "4.9/5",
    quote:
      "Excellent service and care. The staff is knowledgeable, patient, and always willing to answer questions. I would not go anywhere else for my dental needs.",
    name: "Thomas Linda",
    role: "Designer",
    image: "/dr-aiman-hero.png",
  },
];

export const articles = [
  {
    title: "The Importance of Regular Dental Check-Ups",
    description:
      "Our waiting room features a variety of plants that help purify the air and create a calmer visit.",
    date: "May 12, 2024",
    image: "/photos/clinic-room.jpg",
  },
  {
    title: "Top 5 Benefits of Professional Teeth Whitening",
    description:
      "We believe in promoting health and wellness in every aspect of our clinic and treatment planning.",
    date: "May 16, 2024",
    image: "/photos/visit-treatment.jpg",
  },
  {
    title: "Understanding Dental Implants: What You Need to Know",
    description:
      "Our clinic donates dental care services to underprivileged families through community outreach.",
    date: "May 22, 2024",
    image: "/photos/about-patient.jpg",
  },
];

export const contactDetails = [
  {
    label: "Address",
    value: "24/11 Robert Road, New York, USA",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+(123) 698-5245",
    icon: Phone,
  },
  {
    label: "Email",
    value: "info@domain.com",
    icon: Mail,
  },
  {
    label: "Hours",
    value: "Mon to Sat 9:00AM to 9:00PM",
    icon: Clock3,
  },
];

export const stats = [
  { value: 75, suffix: "+", label: "Insurance covered" },
  { value: 2, suffix: "K", label: "Realized projects" },
  { value: 22, suffix: "K", label: "Happy customers" },
  { value: 18, suffix: "+", label: "Experience doctors" },
];
