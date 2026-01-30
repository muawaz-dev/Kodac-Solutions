// Productivity Tools Service Page
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Productivity Tools - Kodac Solutions | Workflow Automation & Tools',
  description: 'Streamline your business with cutting-edge productivity tools and automation solutions that save time and boost efficiency.',
};

export default function ProductivityToolsPage() {
  const tools = [
    { "name": "Capcut Pro", "logo": "/productivity-tools/capcut.png", "category": "Video-Editing", "price": "9.99$", "oldPrice": "12.99$" },
    { "name": "Chatgpt Plus", "logo": "/productivity-tools/chat-gpt.png", "category": "Automation", "price": "9.99$", "oldPrice": "20$" },
    { "name": "Sora 2", "logo": "/productivity-tools/sora-2.png", "category": "Automation", "price": "9.99$", "oldPrice": "34.90$" },
    { "name": "Veo 3", "logo": "/productivity-tools/veo-3.png", "category": "Database", "price": "10.99$", "oldPrice": "30$" },
    { "name": "Canva Pro", "logo": "/productivity-tools/canva.png", "category": "Graphic Design", "price": "10.99$", "oldPrice": "20$" },
    { "name": "Adobe Creative Cloud", "logo": "/productivity-tools/adobe.png", "category": "Creativity", "price": "35$", "oldPrice": "20$" },
    { "name": "Eleven Labs", "logo": "/productivity-tools/eleven-labs.png", "category": "Automation", "price": "15$", "oldPrice": "20$" },
    { "name": "Heygen", "logo": "/productivity-tools/heygen.png", "category": "Automation", "price": "15.99$", "oldPrice": "20$" },
    { "name": "Leonardo AI", "logo": "/productivity-tools/leonardo.png", "category": "Automation", "price": "10.99$", "oldPrice": "20$" },
    { "name": "Claude Code", "logo": "/productivity-tools/claude.png", "category": "Automation", "price": "20$", "oldPrice": "20$" },
    { "name": "Hailuo", "logo": "/productivity-tools/hailuo.png", "category": "Automation", "price": "25$", "oldPrice": "25$" },
    { "name": "Envato Elements", "logo": "/productivity-tools/envato.png", "category": "Design", "price": "15$", "oldPrice": "15$" },
    { "name": "Freepic", "logo": "/productivity-tools/freepik.png", "category": "Automation", "price": "15$", "oldPrice": "15$" }
  ];

  const packs = [
    {
      name: "Starter A.I Pack",
      description: "Perfect for creators that want to utilize the power of AI.",
      tools: [
        { name: "Chatgpt Plus", logo: "/productivity-tools/chat-gpt.png" },
        { name: "Capcut Pro", logo: "/productivity-tools/capcut.png" },
        { name: "Leonardo AI", logo: "/productivity-tools/leonardo.png" },
        { name: "Veo 3", logo: "/productivity-tools/veo-3.png" }
      ],
      price: "29.99$"
    },
    {
      name: "Video Editing Pack",
      description: "Perfect for video editors.",
      tools: [
        { name: "Adobe Creative Cloud", logo: "/productivity-tools/adobe.png" },
        { name: "Envanto Elements", logo: "/productivity-tools/envato.png" },
        { name: "Freepik", logo: "/productivity-tools/freepik.png" }
      ],
      price: "39.99$"
    },
    {
      name: "Graphic Designing Pack",
      description: "Perfect for designers.",
      tools: [
        { name: "Chatgpt Plus", logo: "/productivity-tools/chat-gpt.png" },
        { name: "Canva Pro", logo: "/productivity-tools/canva.png" },
        { name: "Leonardo AI", logo: "/productivity-tools/leonardo.png" }
      ],
      price: "29.99$"
    },
    {
      name: "All In One A.I Pack",
      description: "Perfect for creators that want to maximize their potential with AI.",
      tools: [
        { name: "Chatgpt Plus", logo: "/productivity-tools/chat-gpt.png" },
        { name: "Sora 2", logo: "/productivity-tools/sora-2.png" },
        { name: "Leonardo AI", logo: "/productivity-tools/leonardo.png" },
        { name: "Eleven Labs", logo: "/productivity-tools/eleven-labs.png" },
        { name: "Heygen", logo: "/productivity-tools/heygen.png" },
      ],
      price: "39.99$"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="pb-20 pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Productivity Tools</div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Productivity Tools & Automation</h1>
              <p className="text-xl text-gray-600 mb-8">Streamline your workflow with cutting-edge productivity tools and automation solutions that save time, reduce errors, and boost efficiency across your organization.</p>
              <Link href="/contact" className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">Optimize Your Workflow</Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/services/productivity-tools.webp" alt="Productivity Tools" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We help businesses implement and optimize productivity tools that transform how teams work, communicate, and deliver results.We offer modern productivity tools at discounted prices.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4 justify-items-center">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white rounded-xl w-60 p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-lg mb-3 flex items-center justify-center">
                  <div className="relative w-14 h-14 mb-2">
                    <Image
                      alt={tool.name}
                      src={tool.logo}
                      fill
                      className="object-contain"
                      loading='eager'
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 text-center">{tool.name}</h3>
                <p className="text-sm text-gray-500 text-center">{tool.category}</p>
                <div className='flex gap-2'>
                  {/* <p className="text-sm text-gray-500 line-through decoration-red-500 text-center">{tool.oldPrice}</p> */}
                  <p className="text-sm text-gray-500 text-center">{tool.price}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Packs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get specialized packs for your specific needs.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-8">
            {packs.map((pack, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4 p-6 border border-gray-200"
              >
                {/* Title */}
                <h3 className="font-bold text-2xl text-gray-900 text-center">
                  {pack.name}
                </h3>

                {/* Price */}
                <div className="text-lg font-semibold text-black text-center">
                  {pack.price}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-600 text-center">
                  {pack.description}
                </div>

                {/* Tools list */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {pack.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 flex gap-2 items-center py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200"
                    >
                      <div className="relative w-4 h-4">
                        <Image
                          alt={tool.name}
                          src={tool.logo}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                      {tool.name}
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-xl mb-8">Let's optimize your workflow with the right tools and automation.</p>
          <Link href="/contact" className="inline-block bg-white text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
// End of Productivity Tools Page