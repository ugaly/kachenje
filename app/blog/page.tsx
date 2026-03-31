"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, ChevronRight, Calendar, User, Tag, Grid3X3, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts, categories, tags, archives } from "@/lib/blog-data"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
            alt="Blog"
            fill
            loading="eager"
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="font-serif text-4xl lg:text-5xl text-white">
            Blog & Insights
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Stay informed with the latest legal news, insights, and expert analysis from our team of experienced attorneys.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Posts */}
              <div className="space-y-10">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* Post Image */}
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    {/* Post Content */}
                    <div className="p-6 lg:p-8">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            style={{ width: 40, height: 40 }}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs text-muted-foreground">Published On - {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="h-3 w-3" />
                              <span>{post.author.name}</span>
                              <span className="text-border">|</span>
                              <Grid3X3 className="h-3 w-3" />
                              <span>{post.categories.join(", ")}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        <span>Tags: {post.tags.join(", ")}</span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="font-serif text-xl lg:text-2xl text-foreground hover:text-accent transition-colors mb-4">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Button */}
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8">
                          READ MORE
                        </Button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="border-border"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-accent text-accent-foreground" : "border-border"}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="border-border"
                  >
                    NEXT PAGE <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Search */}
              <div className="bg-white border border-border rounded-lg p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(
                          selectedCategory === category.name ? null : category.name
                        )}
                        className={`flex items-center gap-2 text-sm transition-colors w-full text-left ${
                          selectedCategory === category.name
                            ? "text-accent"
                            : "text-muted-foreground hover:text-accent"
                        }`}
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span>{category.name}</span>
                        <span className="ml-auto">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Archives</h3>
                <ul className="space-y-3">
                  {archives.map((archive) => (
                    <li key={archive.month}>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors w-full text-left">
                        <ChevronRight className="h-4 w-4" />
                        <span>{archive.month}</span>
                        <span className="ml-auto">({archive.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 text-xs border border-border rounded hover:border-accent hover:text-accent transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
