// Productivity Tools Service Page
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Productivity Tools - Kodac Solutions | Workflow Automation & Tools',
  description: 'Streamline your business with cutting-edge productivity tools and automation solutions that save time and boost efficiency.',
};

export default function ProductivityToolsPage() {
  const tools = [
    { name: 'Notion', logo: '/tools/notion-placeholder.png', category: 'Project Management' },
    { name: 'Zapier', logo: '/tools/zapier-placeholder.png', category: 'Automation' },
    { name: 'Slack', logo: '/tools/slack-placeholder.png', category: 'Communication' },
    { name: 'Airtable', logo: '/tools/airtable-placeholder.png', category: 'Database' },
    { name: 'Asana', logo: '/tools/asana-placeholder.png', category: 'Task Management' },
    { name: 'Monday.com', logo: '/tools/monday-placeholder.png', category: 'Work OS' },
  ];

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

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We help businesses implement and optimize productivity tools that transform how teams work, communicate, and deliver results.We offer modern productivity tools at discounted prices.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="font-bold text-gray-900 text-center">{tool.name}</h3>
                <p className="text-sm text-gray-500 text-center">{tool.category}</p>
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