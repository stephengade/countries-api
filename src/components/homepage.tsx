import Link from "next/link"

export const HomepageIndex = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Countries API Documentation</h1>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">API Endpoints</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Get All Countries</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">GET /api/v1/countries</code>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Get Country by Acronym</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <code className="bg-gray-100 px-2 py-1 rounded">GET /api/v1/countries?acronym=US</code>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Contributing Guide</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="text-sm text-gray-500 mb-4">
              We welcome contributions to improve and expand our Countries API. Here's how you can contribute:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-500 space-y-2">
              <li>Fork the repository on GitHub</li>
              <li>Create a new branch for your feature or bug fix</li>
              <li>Make your changes and commit them with a clear commit message</li>
              <li>Push your changes to your fork</li>
              <li>Submit a pull request to the main repository</li>
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              Please ensure your code follows the existing style and includes appropriate tests.
            </p>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            View the source code on{" "}
            <Link href="https://github.com/stephengade/countries-api" className="text-blue-500 hover:underline">
              GitHub
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
