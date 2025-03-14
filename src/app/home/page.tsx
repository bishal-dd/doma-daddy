import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  Heart,
  Users,
  Gift,
  CheckCircle2,
  Menu,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-7">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Heart className="h-6 w-6 text-primary" />
              <span>BuyMeADoma</span>
            </Link>
            <nav className="hidden md:flex gap-6 ml-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Discover
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden pl-28">
          {/* Colorful background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-blue-50 dark:from-background dark:via-background/80 dark:to-background"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[size:20px_20px] opacity-[0.02]"></div>

          {/* Colorful blobs */}
          <div className="absolute h-72 w-72 rounded-full bg-pink-400/20 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute h-72 w-72 rounded-full bg-blue-400/20 top-1/3 right-10 blur-3xl"></div>
          <div className="absolute h-80 w-80 rounded-full bg-purple-400/20 bottom-0 left-1/4 blur-3xl"></div>
          <div className="absolute h-64 w-64 rounded-full bg-yellow-400/20 bottom-10 right-1/4 blur-3xl"></div>

          {/* Decorative shapes */}
          <div className="absolute top-20 left-[10%] w-24 h-24 rounded-lg border border-primary/20 rotate-12 opacity-70"></div>
          <div className="absolute bottom-20 right-[10%] w-16 h-16 rounded-full border border-primary/20 opacity-70"></div>
          <div className="absolute top-1/3 right-[20%] w-12 h-12 rounded-lg bg-primary/10 rotate-45"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 w-fit shadow-md">
                  ✨ Empowering creators worldwide
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-blue-600">
                    Support creators <br className="hidden sm:inline" />
                    you love
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                    Join our vibrant platform where fans directly support
                    creators with monthly memberships. Get exclusive content and
                    connect with your favorite creators.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-base h-12 px-8 font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 shadow-lg shadow-pink-500/20"
                  >
                    Become a member <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base h-12 px-8 font-medium border-2 border-primary/50 shadow-lg"
                  >
                    Start creating
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-3">
                    {[
                      "/psy.png",
                      "/kinrab.png",
                      "/kelden.png",
                      "/panda.png",
                    ].map((image, i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-background overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image}
                          width={40}
                          height={40}
                          alt={`User ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="font-medium">
                    Join <span className="text-primary font-bold">10,000+</span>{" "}
                    creators and supporters
                  </div>
                </div>
              </div>
              <div className="relative mx-auto lg:mx-0">
                {/* Decorative elements around image */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-500 via-primary to-blue-500 opacity-70 blur-xl"></div>
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-pink-500 via-primary to-blue-500"></div>

                <div className="relative overflow-hidden rounded-xl border-2 border-white/50 bg-background shadow-2xl p-1">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pink-500/10 to-transparent"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={"/hero-image.png"}
                      alt={"hero Image"}
                      width={550}
                      height={550}
                      className={`w-full object-cover aspect-[4/3] rounded-lg transition-opacity duration-300 `}
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">
                          Sarah&apos;s Art Studio
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Digital Artist
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="gap-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0"
                      >
                        <Heart className="h-4 w-4" /> Support
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-4 -top-4 bg-white dark:bg-black rounded-lg shadow-lg p-2 rotate-6 border border-muted">
                  <div className="flex items-center gap-2">
                    <Heart
                      className="h-4 w-4 text-pink-500"
                      fill="currentColor"
                    />
                    <span className="text-xs font-medium">New supporter!</span>
                  </div>
                </div>

                <div className="absolute -left-6 bottom-8 bg-white dark:bg-black rounded-lg shadow-lg p-2 -rotate-3 border border-muted">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-medium">
                      Exclusive content
                    </span>
                  </div>
                </div>

                <div className="absolute -right-2 bottom-20 bg-white dark:bg-black rounded-full shadow-lg p-2 border border-muted">
                  <div className="flex items-center justify-center h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold text-sm">
                    $5
                  </div>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-xl border border-muted shadow-lg">
              {[
                { label: "Creators", value: "10K+" },
                { label: "Supporters", value: "100K+" },
                { label: "Monthly Payouts", value: "$2M+" },
                { label: "Content Pieces", value: "500K+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Creators */}
        <section className="w-full py-12 md:py-24 lg:py-32 justify-center pl-28">
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
              {[
                { image: "/psy.png", name: "Psy", type: "Podcaster" },
                { image: "/kinrab.png", name: "Kinrab", type: "Creator" },
                { image: "/kelden.png", name: "Kelden", type: "Creator" },
              ].map((creatoer, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-4"
                >
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={creatoer.image}
                      width={160}
                      height={160}
                      alt={`Creator ${i}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{creatoer.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {creatoer.type}
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted pl-28">
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
        <section className="w-full py-12 md:py-24 lg:py-32 pl-28">
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
                { name: "Legend", price: "$25", color: "bg-muted" },
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t pl-28">
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
      <footer className="w-full border-t py-6 md:py-0 pl-28">
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
