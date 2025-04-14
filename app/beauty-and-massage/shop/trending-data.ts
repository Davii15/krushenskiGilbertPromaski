import type { ProductRanking } from "@/components/TrendingPopularSection"

// Mock data for trending products in beauty and massage
export const trendingProducts: ProductRanking[] = [
  {
    id: "tr1",
    name: "Organic Shea Butter Moisturizer",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 24.99,
      currency: "KSh",
    },
    rating: 4.9,
    category: "Skincare",
    vendor: "Nairobi Naturals",
    rank: 1,
    url: "/beauty-and-massage/shop/products/shea-butter-moisturizer",
    badges: ["trending", "hot"],
  },
  {
    id: "tr2",
    name: "Kenyan Coffee Body Scrub",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 18.5,
      currency: "KSh",
    },
    rating: 4.7,
    category: "Body Care",
    vendor: "Savannah Beauty",
    rank: 2,
    url: "/beauty-and-massage/shop/products/coffee-body-scrub",
    badges: ["trending"],
  },
  {
    id: "tr3",
    name: "Aloe Vera Hair Mask",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 15.99,
      currency: "KSh",
    },
    rating: 4.8,
    category: "Hair Care",
    vendor: "Nairobi Naturals",
    rank: 3,
    url: "/beauty-and-massage/shop/products/aloe-vera-hair-mask",
    badges: ["trending", "popular"],
  },
  {
    id: "tr4",
    name: "Lavender Essential Oil",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 12.75,
      currency: "KSh",
    },
    rating: 4.6,
    category: "Aromatherapy",
    vendor: "Kenyan Essentials",
    rank: 4,
    url: "/beauty-and-massage/shop/products/lavender-oil",
    badges: ["trending"],
  },
  {
    id: "tr5",
    name: "Bamboo Massage Tool Set",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 35.99,
      currency: "KSh",
    },
    rating: 4.5,
    category: "Massage Tools",
    vendor: "Wellness Kenya",
    rank: 5,
    url: "/beauty-and-massage/shop/products/bamboo-massage-set",
    badges: ["trending", "new"],
  },
]

// Mock data for most popular products in beauty and massage
export const popularProducts: ProductRanking[] = [
  {
    id: "pop1",
    name: "African Black Soap",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 9.99,
      currency: "KSh",
    },
    rating: 4.9,
    category: "Skincare",
    vendor: "Nairobi Naturals",
    rank: 1,
    url: "/beauty-and-massage/shop/products/black-soap",
    badges: ["popular", "hot"],
  },
  {
    id: "pop2",
    name: "Coconut Oil Hair Treatment",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 14.5,
      currency: "KSh",
    },
    rating: 4.8,
    category: "Hair Care",
    vendor: "Savannah Beauty",
    rank: 2,
    url: "/beauty-and-massage/shop/products/coconut-oil-treatment",
    badges: ["popular"],
  },
  {
    id: "pop3",
    name: "Hot Stone Massage Set",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 45.99,
      currency: "KSh",
    },
    rating: 4.7,
    category: "Massage Tools",
    vendor: "Wellness Kenya",
    rank: 3,
    url: "/beauty-and-massage/shop/products/hot-stone-set",
    badges: ["popular", "trending"],
  },
  {
    id: "pop4",
    name: "Moringa Face Mask",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 12.25,
      currency: "KSh",
    },
    rating: 4.6,
    category: "Skincare",
    vendor: "Nairobi Naturals",
    rank: 4,
    url: "/beauty-and-massage/shop/products/moringa-face-mask",
    badges: ["popular"],
  },
  {
    id: "pop5",
    name: "Eucalyptus Massage Oil",
    image: "/placeholder.svg?height=400&width=400",
    price: {
      amount: 16.75,
      currency: "KSh",
    },
    rating: 4.8,
    category: "Massage Oils",
    vendor: "Kenyan Essentials",
    rank: 5,
    url: "/beauty-and-massage/shop/products/eucalyptus-oil",
    badges: ["popular", "hot"],
  },
]

