import Header from '../components/Header';
import Footer from '../components/Footer';

interface Insight {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  featured: boolean;
  status: string;
  excerpt: string | null;
  downloadablePdf: string | null;
  coverImage: string | null;
  thumbnail: string | null;
  content: string;
  category: string;
  publishedDate: string | null;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
  SEO: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string | null;
  };
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

async function getInsightsData(): Promise<{ insightData: Insight[]; pagination: Pagination }> {
  
  const insightData = [
    {
      id: "291082c7-5c25-402c-b486-8f3e604c7289",
      slug: "assessing-nigeria-s-current-nationally-determined-contributions-ndc",
      title: "Assessing Nigeria's current Nationally Determined Contributions (NDC)",
      subtitle: null,
      featured: true,
      status: "published",
      excerpt: null,
      downloadablePdf: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748260102/May%2C%202025/Assessing_compressed.pdf",
      coverImage: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748260123/May%2C%202025/Assessing.png",
      thumbnail: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748260123/May%2C%202025/Assessing.png",
      content: "",
      category: "Short-Posts",
      publishedDate: null,
      approved: true,
      createdAt: "2025-05-26T11:50:55.000Z",
      updatedAt: "2025-05-26T11:51:51.000Z",
      userId: "7749d25b-430a-4014-b949-d205865cbf47",
      SEO: {
        title: "Assessing Nigeria's current Nationally Determined Contributions (NDC)",
        description: "Assessing Nigeria's current Nationally Determined Contributions (NDC) reveals the nation's commitment to climate action and its goals under the Paris Agreement.",
        keywords: "[\"Nationally Determined Contributions\"]",
        canonical: "assessing-nigeria-s-current-nationally-determined-contributions-ndc",
        ogImage: null,
      }
    },
    {
      id: "84e7a391-2ba9-4601-8b31-43b6d5c06fd5",
      slug: "the-role-of-result-based-financing-in-driving-nigeria-s-transition",
      title: "The Role of Result Based Financing in Driving Nigeria's Transition",
      subtitle: null,
      featured: false,
      status: "published",
      excerpt: "Results-Based Financing (RBF) is emerging as a transformative tool to accelerate Nigeria's energy transition.",
      downloadablePdf: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748258778/March/1746453745182_compressed.pdf",
      coverImage: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748258792/March/Role_of_Result_Based_financing.png",
      thumbnail: "https://res.cloudinary.com/dijz9ibpt/image/upload/v1748258792/March/Role_of_Result_Based_financing.png",
      content: "",
      category: "Short-Posts",
      publishedDate: null,
      approved: true,
      createdAt: "2025-05-26T11:28:31.000Z",
      updatedAt: "2025-05-26T11:28:59.000Z",
      userId: "7749d25b-430a-4014-b949-d205865cbf47",
      SEO: {
        title: "The Role of Result Based Financing in Driving Nigeria's Transition",
        description: "Results-Based Financing (RBF) is emerging as a transformative tool to accelerate Nigeria's energy transition.",
        keywords: "[\"Results-Based Financing\"]",
        canonical: "the-role-of-result-based-financing-in-driving-nigeria-s-transition",
        ogImage: null,
      }
    },

  ];

  const pagination = {
    currentPage: 1,
    totalPages: 7,
    totalCount: 58
  };

  return { insightData, pagination };
}

export default async function InsightsPage() {
  const { insightData, pagination } = await getInsightsData();
  const featuredInsight = insightData.find(insight => insight.featured);
  const otherInsights = insightData.filter(insight => !insight.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <div className="absolute top-0 right-0 z-20 h-full w-full bg-gradient-to-t from-[#071a24] via-black/60 to-transparent transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 z-10 h-full w-full overflow-hidden">
          <img 
            src="/insights.png" 
            alt="EMRC Insights" 
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 origin-bottom"
          />
        </div>
        <div className="absolute bottom-16 sm:bottom-6 md:bottom-8 z-30 w-full">
          <div className="mx-auto max-w-[1200px] px-4">
            <h1 className="text-sm sm:text-base md:text-lg font-light text-white/80 mb-1 sm:mb-2">
              Read about what is going on in the Energy Sector
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold text-white mb-2 sm:mb-3">
              EMRC Insights
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto p-4 mt-[3rem]">
        {/* Featured Insight */}
        {featuredInsight && (
          <section className="relative w-full h-96 rounded-xl overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            {featuredInsight.coverImage && (
              <img 
                src={featuredInsight.coverImage} 
                alt={featuredInsight.title}
                className="object-cover w-full h-full"
              />
            )}
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-2/3">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow mb-3 bg-primary hover:bg-primary/80 text-gray-500">
                Featured
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {featuredInsight.title}
              </h1>
              <div className="flex items-center text-white/60 text-sm">
                <span className="mx-2">•</span>
                <span>{featuredInsight.category}</span>
              </div>
              <a className="mt-4 inline-block" href={`/insights/${featuredInsight.slug}`}>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-9 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
                  Read More
                </button>
              </a>
            </div>
          </section>
        )}

        {/* All Insights Section */}
        <section className="bg-card p-6 rounded-lg shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="text-2xl font-semibold">All Insights</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input 
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:w-64" 
                placeholder="Search insights..." 
              />
              <button 
                type="button" 
                className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full sm:w-40"
              >
                <span style={{ pointerEvents: 'none' }}>All Categories</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <div className="text-sm text-muted-foreground mb-6">
          Showing {insightData.length} insights
        </div>

        {/* Insights Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 order-2 lg:order-1">
            {/* Categories */}
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 pt-6">
                <div className="font-semibold tracking-tight text-xl mb-4">Categories</div>
                <ul className="space-y-2">
                  <li>
                    <button className="w-full text-left px-2 py-1 rounded hover:bg-muted flex justify-between items-center font-semibold bg-muted/50">
                      <span>All Categories</span>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {insightData.length}
                      </div>
                    </button>
                  </li>
                  {Array.from(new Set(insightData.map(i => i.category))).map(category => (
                    <li key={category}>
                      <button className="w-full text-left px-2 py-1 rounded hover:bg-muted flex justify-between items-center">
                        <span>{category}</span>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          {insightData.filter(i => i.category === category).length}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 pt-6">
                <div className="font-semibold tracking-tight text-xl mb-4">Popular Articles</div>
                <div className="space-y-4">
                  {insightData.slice(0, 3).map(insight => (
                    <div key={insight.id} className="flex gap-3">
                      <div className="h-16 w-16 relative flex-shrink-0 rounded overflow-hidden">
                        {insight.thumbnail && (
                          <img 
                            src={insight.thumbnail} 
                            alt={insight.title}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <a 
                          className="font-medium hover:text-primary transition-colors line-clamp-2 text-sm" 
                          href={`/insights/${insight.slug}`}
                        >
                          {insight.title}
                        </a>
                        <span className="text-xs text-muted-foreground mt-1">
                          {new Date(insight.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 pt-6">
                <div className="font-semibold tracking-tight text-xl mb-4">Newsletter</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to our newsletter to stay updated with the latest insights.
                </p>
                <div className="space-y-2">
                  <input 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                    placeholder="Your email" 
                  />
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherInsights.map(insight => (
                <div 
                  key={insight.id} 
                  className="flex flex-col bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <a className="block h-48 relative bg-neutral-50" href={`/insights/${insight.slug}`}>
                    {insight.coverImage ? (
                      <img 
                        src={insight.coverImage} 
                        alt={insight.title}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </a>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-2">
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs font-medium">
                        {insight.category}
                      </div>
                    </div>
                    <a className="block" href={`/insights/${insight.slug}`}>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                    </a>
                    <div className="text-muted-foreground line-clamp-2 mb-4">
                      {insight.excerpt || (
                        <div className="line-clamp-2"></div>
                      )}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 text-sm text-muted-foreground">
                      <span>
                        {new Date(insight.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <a 
                        className="text-primary hover:underline font-medium" 
                        href={`/insights/${insight.slug}`}
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" 
            disabled={pagination.currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            disabled={pagination.currentPage === pagination.totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}