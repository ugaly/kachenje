import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, User, Tag, Grid3X3, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts, categories, tags } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <h1 className="font-serif text-3xl lg:text-5xl text-white max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={50}
                    height={50}
                    style={{ width: 50, height: 50 }}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                      <span className="text-border">|</span>
                      <Grid3X3 className="h-4 w-4" />
                      <span>{post.categories.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex items-center gap-3 py-6 border-t border-b border-border">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-foreground rounded hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center justify-between py-6 border-b border-border">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share this article:
                </span>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary transition-colors"
                  >
                    <ArrowLeft className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                    <div>
                      <span className="text-xs text-muted-foreground group-hover:text-white/60">Previous Post</span>
                      <h4 className="text-sm font-medium text-foreground group-hover:text-white line-clamp-1">
                        {prevPost.title}
                      </h4>
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-center justify-end gap-4 p-4 bg-secondary rounded-lg hover:bg-primary transition-colors text-right"
                  >
                    <div>
                      <span className="text-xs text-muted-foreground group-hover:text-white/60">Next Post</span>
                      <h4 className="text-sm font-medium text-foreground group-hover:text-white line-clamp-1">
                        {nextPost.title}
                      </h4>
                    </div>
                    <ArrowRight className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                  </Link>
                )}
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="py-8">
                  <h3 className="font-serif text-2xl text-foreground mb-6">Related Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="group"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author Card */}
              <div className="bg-white border border-border rounded-lg p-6 text-center">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  style={{ width: 80, height: 80 }}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-lg text-foreground">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">Legal Counsel at Kachenje Law Firm</p>
              </div>

              {/* Categories */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog?category=${category.name}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span>{category.name}</span>
                        <span className="ml-auto">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-serif text-xl text-foreground mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs border border-border rounded hover:border-accent hover:text-accent transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary rounded-lg p-6 text-center">
                <h3 className="font-serif text-xl text-white mb-4">Need Legal Advice?</h3>
                <p className="text-white/70 text-sm mb-6">
                  Contact our team of experienced attorneys for professional legal guidance.
                </p>
                <Link href="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
