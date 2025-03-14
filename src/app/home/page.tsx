import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
  Heart,
  Users,
  Gift,
  Star,
  CheckCircle2,
  Menu,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Heart className="h-6 w-6 text-primary" />
              <span>CreatorFund</span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Discover
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                For Creators
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex w-full max-w-sm items-center">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search creators..."
                className="pl-8 w-[200px] bg-background"
              />
            </div>
            <div className="hidden md:flex gap-2">
              <Button variant="outline">Log in</Button>
              <Button>Sign up</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Support creators you love
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our platform where fans directly support creators with
                    monthly memberships. Get exclusive content and connect with
                    your favorite creators.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Become a member <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Start creating
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Creator and supporters"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Featured Creators */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Creators
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover amazing creators who are building communities and
                  sharing exclusive content with their supporters.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-4"
                >
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=Creator+${i}`}
                      width={160}
                      height={160}
                      alt={`Creator ${i}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Creator Name</h3>
                    <p className="text-sm text-muted-foreground">
                      {i === 1
                        ? "Digital Artist"
                        : i === 2
                        ? "Podcaster"
                        : "Game Developer"}
                    </p>
                    <p className="text-sm">
                      <Users className="inline h-4 w-4 mr-1" />
                      {Math.floor(Math.random() * 5000) + 500} supporters
                    </p>
                  </div>
                  <Button className="w-full">Support</Button>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Discover more creators
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to support creators and get
                  exclusive content.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Discover Creators</h3>
                <p className="text-center text-muted-foreground">
                  Find creators you love and want to support from our diverse
                  community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Become a Member</h3>
                <p className="text-center text-muted-foreground">
                  Choose a membership tier that works for you and support your
                  favorite creators monthly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Gift className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Get Exclusive Content</h3>
                <p className="text-center text-muted-foreground">
                  Enjoy exclusive content, early access, and special perks from
                  creators you support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Membership Tiers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the level of support that works for you and unlock
                  exclusive benefits.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                { name: "Fan", price: "$5", color: "bg-muted" },
                {
                  name: "Supporter",
                  price: "$10",
                  color: "bg-primary",
                  featured: true,
                },
                { name: "Patron", price: "$25", color: "bg-muted" },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`flex flex-col rounded-lg border p-6 ${
                    tier.featured ? "border-primary shadow-lg relative" : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="text-4xl font-bold">
                      {tier.price}
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        /month
                      </span>
                    </p>
                  </div>
                  <ul className="my-6 space-y-2">
                    {[
                      "Access to exclusive posts",
                      i >= 1 ? "Early access to new content" : null,
                      i >= 1 ? "Member-only community" : null,
                      i >= 2 ? "Monthly live Q&A sessions" : null,
                      i >= 2 ? "Name in credits" : null,
                    ]
                      .filter(Boolean)
                      .map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                  <Button
                    className={`mt-auto ${
                      tier.featured
                        ? ""
                        : "bg-muted-foreground/80 hover:bg-muted-foreground"
                    }`}
                    variant={tier.featured ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from creators and supporters who are part of our
                  community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  quote:
                    "This platform has completely changed how I connect with my audience. I can now focus on creating quality content while earning a sustainable income.",
                  name: "Alex Chen",
                  role: "Digital Artist",
                },
                {
                  quote:
                    "I love being able to directly support my favorite creators and get exclusive content. The community aspect makes it feel like I'm part of something special.",
                  name: "Jamie Smith",
                  role: "Supporter",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-4 rounded-lg border bg-background p-6"
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(
                        0
                      )}`}
                      width={40}
                      height={40}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to get started?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of creators and supporters on our platform
                  today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Become a member <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Start creating
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CreatorFund. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
