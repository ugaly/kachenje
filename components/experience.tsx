export function Experience() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">Firm Overview</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight italic">
              A Duly Registered &amp; Licensed Law Firm in Tanzania
            </h2>
          </div>
          <div className="lg:border-l border-border lg:pl-12 xl:pl-16">
            <p className="text-muted-foreground leading-relaxed mb-4 lg:text-lg">
              Our firm comprises highly experienced legal practitioners who have come together to establish a dynamic boutique law firm distinguished within its jurisdiction. Equipped with the requisite expertise, practical skills, and professional dedication, our lawyers are well positioned to deliver effective, innovative, and client-focused legal solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed lg:text-lg">
              Within a relatively short period since our establishment, we have earned a strong reputation in the corporate legal sector and have been recognized for providing tailored, results-oriented solutions that meet the specific needs of our esteemed clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
