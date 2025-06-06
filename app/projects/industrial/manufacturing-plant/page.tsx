import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ManufacturingPlantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Manufacturing Plant"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto relative z-10 py-24 md:py-36 px-4">
            <ScrollAnimation type="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Manufacturing Plant
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                A state-of-the-art manufacturing facility featuring durable GLB structural solutions and efficient design.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation type="fade-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-heading">Project Overview</h2>
                  <p className="text-gray-600 mb-4">
                    This manufacturing plant showcases the strength and durability of GLB materials in industrial 
                    construction. The facility features innovative structural solutions that combine functionality 
                    with operational efficiency.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The use of GLB materials throughout the plant provides superior strength and durability while 
                    maintaining a clean, professional environment for manufacturing operations.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Location</h3>
                      <p className="text-gray-600">Industrial Park</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Size</h3>
                      <p className="text-gray-600">150,000 sq ft</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Completion</h3>
                      <p className="text-gray-600">2023</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a3b25]">Category</h3>
                      <p className="text-gray-600">Industrial</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fade-left">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Manufacturing Plant Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Key Features</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">GLB Structural Solutions</h3>
                  <p className="text-gray-600">
                    Innovative GLB structural elements that provide both support and visual appeal.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Production Areas</h3>
                  <p className="text-gray-600">
                    Efficient production spaces with GLB accents and custom fixtures.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Support Facilities</h3>
                  <p className="text-gray-600">
                    Well-designed support facilities with GLB architectural features.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Project Gallery</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Exterior View"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Production Area"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                    alt="Support Facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Background texture"
              width={1920}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
                Ready to Enhance Your Manufacturing Facility?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our GLB solutions can benefit your industrial project.
              </p>
              <Link href="/quote">
                <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white font-medium rounded-sm px-8 py-3">
                  GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 