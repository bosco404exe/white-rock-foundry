import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const specifications = [
  {
    category: "Physical Properties",
    items: [
      { name: "Density", value: "650-750 kg/m³" },
      { name: "Moisture Content", value: "≤ 12%" },
      { name: "Standard Lengths", value: "3m, 4m, 6m" },
      { name: "Custom Lengths", value: "Up to 8m" }
    ]
  },
  {
    category: "Mechanical Properties",
    items: [
      { name: "Compression Strength", value: "≥ 45 MPa" },
      { name: "Modulus of Elasticity", value: "≥ 12,000 MPa" },
      { name: "Bending Strength", value: "≥ 35 MPa" },
      { name: "Shear Strength", value: "≥ 4.5 MPa" }
    ]
  },
  {
    category: "Environmental Properties",
    items: [
      { name: "Fire Resistance", value: "Class B-s1, d0" },
      { name: "Durability Class", value: "Class 2" },
      { name: "Formaldehyde Emission", value: "E1" },
      { name: "Sustainability", value: "FSC Certified" }
    ]
  }
]

const applications = [
  {
    title: "Structural Support",
    description: "Vertical load-bearing elements in buildings and structures",
    image: "/bamboo pic 5.jpg"
  },
  {
    title: "Architectural Features",
    description: "Decorative and functional columns in modern architecture",
    image: "/bamboo pic 4.jpg"
  },
  {
    title: "Industrial Applications",
    description: "Support columns in industrial facilities and warehouses",
    image: "/bamboo pic 3.jpg"
  },
  {
    title: "Outdoor Structures",
    description: "Columns for pergolas, pavilions, and outdoor spaces",
    image: "/bamboo pic2.jpeg.jpg"
  }
]

const maintenanceProducts = [
  {
    code: "SEALER-05",
    name: "Sealer for ends of boards",
    size: "250 ml",
    description: "Protects end grains from moisture absorption"
  },
  {
    code: "DISK-02",
    name: "16\" Silicon carbide disk",
    size: "N/A",
    description: "For cleaning and smoothing surface"
  },
  {
    code: "BROOM-02",
    name: "Silicon carbide broom",
    size: "N/A",
    description: "For cleaning and removing weathered fibers"
  },
  {
    code: "CLEANER-01",
    name: "Exterior Wood Cleaner",
    size: "2.5 ltr",
    description: "Removes dirt without damaging the surface"
  }
]

export default function GLBColumnsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-[#0a3b25] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                GLB Columns
              </h1>
              <p className="text-lg mb-8">
                Engineered bamboo columns for superior structural support and architectural design
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bamboo pic 4.jpg"
                  alt="GLB Columns"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our GLB (Glued Laminated Bamboo) columns combine structural integrity with aesthetic appeal. 
                  These engineered columns offer exceptional load-bearing capacity while providing a sustainable 
                  and visually striking alternative to traditional materials.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>High compression strength</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Architectural versatility</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Fire resistance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#0a3b25] mr-2">✓</span>
                    <span>Custom sizes available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specifications.map((spec) => (
                <ScrollAnimation key={spec.category} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{spec.category}</h3>
                    <div className="space-y-4">
                      {spec.items.map((item) => (
                        <div key={item.name} className="flex justify-between">
                          <span className="text-gray-600">{item.name}</span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app) => (
                <ScrollAnimation key={app.title} type="fade-up">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="relative h-48">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Products */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Maintenance Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceProducts.map((product) => (
                <ScrollAnimation key={product.code} type="fade-up">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Code: {product.code}</p>
                    <p className="text-sm text-gray-500 mb-4">Size: {product.size}</p>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/bamboo pic.jpg"
              alt="Background texture"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to Use GLB Columns in Your Project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss your requirements and get a quote.
              </p>
              <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 