import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "prod_1",
    name: "Classic Bob Wig",
    description:
      "Sleek, shoulder-length bob wig with a natural-looking hairline. Made with premium synthetic fibers for a realistic appearance.",
    price: 89900,
    image: "/image1.jpeg?height=300&width=300",
    inStock: true,
    category: "Synthetic Wigs",
    specifications: {
      length: "Shoulder Length",
      material: "Premium Synthetic Fiber",
      color: "Natural Black",
      capSize: "Average",
      heatResistant: true
    }
  },
  {
    id: "prod_2",
    name: "Curly Lace Front Wig",
    description:
      "Medium-length curly wig with a pre-plucked lace front for a natural hairline. Heat resistant up to 180°C.",
    price: 129900,
    image: "/image2.jpeg",
    inStock: true,
    category: "Lace Front Wigs",
    specifications: {
      length: "Medium Length",
      material: "Synthetic Fiber",
      color: "Dark Brown",
      capSize: "Adjustable",
      heatResistant: true
    }
  },
  {
    id: "prod_3",
    name: "Long Straight Human Hair Wig",
    description:
      "Premium 100% human hair wig with a silky straight texture. Can be dyed, bleached, and styled with heat tools.",
    price: 249900,
    image: "/image3.jpeg",
    inStock: true,
    category: "Human Hair Wigs",
    specifications: {
      length: "Long",
      material: "100% Human Hair",
      color: "Natural Black",
      capSize: "Average",
      heatResistant: true
    }
  },
  {
    id: "prod_4",
    name: "Pixie Cut Wig",
    description: "Short pixie cut wig with side-swept bangs. Perfect for a chic, low-maintenance look.",
    price: 69900,
    image: "/image4.jpeg",
    inStock: true,
    category: "Short Wigs",
    specifications: {
      length: "Pixie Cut",
      material: "Synthetic Fiber",
      color: "Dark Brown",
      capSize: "Average",
      heatResistant: true
    }
  },
  {
    id: "prod_5",
    name: "Ombré Wavy Wig",
    description:
      "Shoulder-length wavy wig with a stunning ombré color effect. Features adjustable straps for a secure fit.",
    price: 149900,
    image: "/image5.jpeg",
    inStock: true,
    category: "Synthetic Wigs",
    specifications: {
      length: "Shoulder Length",
      material: "Premium Synthetic Fiber",
      color: "Ombré Brown to Blonde",
      capSize: "Adjustable",
      heatResistant: true
    }
  },
  {
    id: "prod_6",
    name: "Braided Lace Front Wig",
    description: "Pre-braided box braid wig with a natural-looking lace front. Saves hours of styling time.",
    price: 179900,
    image: "/image6.jpeg",
    inStock: true,
    category: "Braided Wigs",
    specifications: {
      length: "Medium Length",
      material: "Synthetic Fiber",
      color: "Black",
      capSize: "Average",
      heatResistant: false
    }
  },
  {
    id: "prod_7",
    name: "Afro Kinky Curly Wig",
    description:
      "Full and voluminous afro kinky curly wig. Made with heat-resistant synthetic fibers that mimic natural hair texture.",
    price: 159900,
    image: "/image7.jpeg",
    inStock: true,
    category: "Textured Wigs",
    specifications: {
      length: "Medium Length",
      material: "Heat Resistant Synthetic Fiber",
      color: "Natural Black",
      capSize: "Average",
      heatResistant: true
    }
  },
  {
    id: "prod_8",
    name: "Blonde Bombshell Wig",
    description:
      "Long, platinum blonde wig with subtle waves. Includes a comfortable breathable cap with adjustable straps.",
    price: 119900,
    image: "/image8.jpeg",
    inStock: true,
    category: "Synthetic Wigs",
    specifications: {
      length: "Long",
      material: "Premium Synthetic Fiber",
      color: "Platinum Blonde",
      capSize: "Adjustable",
      heatResistant: true
    }
  },
  {
    id: "prod_9",
    name: "Synthetic Dreadlock Wig",
    description:
      "Medium-length synthetic dreadlock wig with a natural-looking scalp. Lightweight and comfortable for all-day wear.",
    price: 189900,
    image: "/image9.jpeg",
    inStock: true,
    category: "Dreadlock Wigs",
    specifications: {
      length: "Medium Length",
      material: "Synthetic Fiber",
      color: "Black",
      capSize: "Average",
      heatResistant: false
    }
  },
  {
    id: "prod_10",
    name: "Wig Care Kit",
    description:
      "Complete wig maintenance kit including a stand, brush, shampoo, conditioner, and storage bag to keep your wigs looking their best.",
    price: 59900,
    image: "/image10.jpeg",
    inStock: true,
    category: "Accessories",
    specifications: {
      material: "Various"
    }
  },
]

