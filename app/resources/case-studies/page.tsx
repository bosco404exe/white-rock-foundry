import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
              alt="Case studies"
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
                Case Studies
              </h1>
              <p className="text-white text-lg mb-8 max-w-2xl">
                Explore real-world examples of how our GLB solutions have been successfully implemented across various projects.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Featured Case Studies</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <ScrollAnimation type="fade-up">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Commercial building case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Commercial Building Project</h3>
                    <p className="text-gray-600 mb-4">
                      How GLB solutions were implemented in a large-scale commercial development, resulting in improved efficiency and sustainability.
                    </p>
                    <Link href="/resources/case-studies/commercial-building">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Case Study 2 */}
              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Industrial facility case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Industrial Facility Upgrade</h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive case study of how GLB materials transformed an existing industrial facility, enhancing its performance and durability.
                    </p>
                    <Link href="/resources/case-studies/industrial-facility">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Case Study 3 */}
              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
                      alt="Infrastructure project case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Infrastructure Development</h3>
                    <p className="text-gray-600 mb-4">
                      An in-depth look at how GLB solutions were used in a major infrastructure project, showcasing their versatility and reliability.
                    </p>
                    <Link href="/resources/case-studies/infrastructure-development">
                      <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                        Read Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ScrollAnimation type="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12 font-heading">Browse by Category</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation type="fade-up">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Commercial Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Case studies showcasing GLB solutions in commercial buildings, offices, and retail spaces.
                  </p>
                  <Link href="/resources/case-studies/category/commercial">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Industrial Applications</h3>
                  <p className="text-gray-600 mb-4">
                    Real-world examples of GLB solutions in manufacturing plants, warehouses, and industrial facilities.
                  </p>
                  <Link href="/resources/case-studies/category/industrial">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Infrastructure Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Case studies demonstrating GLB solutions in bridges, public facilities, and transportation infrastructure.
                  </p>
                  <Link href="/resources/case-studies/category/infrastructure">
                    <Button className="w-full bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">
                      View Case Studies
                    </Button>
                  </Link>
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
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-[#0a3b25]">
                Contact us today to discuss how our GLB solutions can benefit your next project.
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
