import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}
	return (
		<div className="min-h-screen bg-white text-black antialiased">
			<header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					{/* Logo space (left upper corner) */}
					<div className="flex items-center gap-3">
						<Link href="/" className="text-4xl font-bold tracking-tight" style={{ fontFamily: '"Sirivennela", sans-serif' }}>
							La Guera Tacos
						</Link>
					</div>

					<nav aria-label="Primary" className="hidden items-center gap-8 sm:flex text-lg font-medium">
						<Link href="/" className="transition-all duration-300 hover:text-neutral-600 font-semibold text-black relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							Home
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/about" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							About
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/menu" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							Menu
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/contact" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							Contact
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
					</nav>

					<div className="sm:hidden">
						<button 
							aria-label="Open menu" 
							onClick={toggleMobileMenu}
							className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 hover:bg-neutral-50 transition-colors"
						>
							<span className="text-xl" aria-hidden>
								{isMobileMenuOpen ? '✕' : '≡'}
							</span>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm sm:hidden">
					<div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
						<div className="flex items-center justify-between p-6 border-b border-black/10">
							<h2 className="text-xl font-bold" style={{ fontFamily: '"Play", sans-serif' }}>Menu</h2>
							<button 
								onClick={closeMobileMenu}
								className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-100 transition-colors"
							>
								<span className="text-lg">✕</span>
							</button>
						</div>
						<nav className="p-6 space-y-4">
							<Link 
								href="/" 
								onClick={closeMobileMenu}
								className="block py-3 text-lg font-medium hover:text-neutral-600 transition-colors border-b border-neutral-100"
								style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
							>
								Home
							</Link>
							<Link 
								href="/about" 
								onClick={closeMobileMenu}
								className="block py-3 text-lg font-medium hover:text-neutral-600 transition-colors border-b border-neutral-100"
								style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
							>
								About
							</Link>
							<Link 
								href="/menu" 
								onClick={closeMobileMenu}
								className="block py-3 text-lg font-medium hover:text-neutral-600 transition-colors border-b border-neutral-100"
								style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
							>
								Menu
							</Link>
							<Link 
								href="/contact" 
								onClick={closeMobileMenu}
								className="block py-3 text-lg font-medium hover:text-neutral-600 transition-colors border-b border-neutral-100"
								style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
							>
								Contact
							</Link>
						</nav>
					</div>
				</div>
			)}

			<main>
				{/* Hero */}
				<section className="relative overflow-hidden border-b border-black/10 bg-black text-white">
					<div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(800px_circle_at_20%_20%,white,transparent_40%),radial-gradient(600px_circle_at_80%_10%,white,transparent_40%),radial-gradient(700px_circle_at_60%_80%,white,transparent_40%)]" aria-hidden />
					<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-28 md:grid-cols-2">
						<div className="space-y-6">
							<p className="text-sm uppercase tracking-[0.2em] text-white/70">Authentic Mexican Street Food</p>
							<h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
								Bold flavors. Simple ingredients. Always fresh.
							</h1>
							<p className="max-w-lg text-white/80">
								Welcome to La Guera Tacos — your neighborhood spot for tacos, quesadillas, burritos, and tortas made with love. Swing by for quick pickup and good vibes.
							</p>
							<div className="flex flex-wrap gap-3 pt-2">
								<Link href="/menu" className="inline-flex items-center justify-center rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-100" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
									View Menu
								</Link>
								<Link href="#location" className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/60" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
									Visit Us
								</Link>
							</div>
						</div>
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
							<Image src="/Logos/LaGueraLogo(White).jpg" alt="La Guera Tacos white logo" fill priority className="object-cover p-0 rounded-xl" />
						</div>

                        {/* <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
							<Image src="/Logos/LaGueraLogo(White).jpg" alt="La Guera Tacos white logo" fill priority sizes="(min-width: 1024px) 700px, (min-width: 640px) 600px, 100vw" className="object-contain p-0 rounded-2xl" />
						</div> */}
					</div>
				</section>

				{/* Featured items */}
				<section className="mx-auto max-w-7xl px-6 py-16">
					<div className="mb-8 flex items-end justify-between">
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Favorites from the kitchen</h2>
						<Link href="/menu" className="text-sm underline underline-offset-4 hover:text-neutral-700">
							See full menu
						</Link>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 font-medium " style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
						{[
							{ 
								title: 'Tacos', 
								desc: 'La Guera style: warm tortillas, real street flavor, house salsas.',
								image: '/Food items/Tacos.png',
								alt: 'Tacos from La Guera Tacos'
							},
							{ 
								title: 'Quesadillas', 
								desc: 'Crisp outside, stretchy cheese inside—salsa, crema, done.',
								image: '/Food items/Quesadillas.png',
								alt: 'Menu item placeholder'
							},
							{ 
								title: 'Burritos', 
								desc: 'Warm tortilla, hearty fillings—wrapped firm, zero mess.',
								image: '/Food items/burrito.png',
								alt: 'Menu item placeholder'
							},
							{ 
								title: 'Tortas', 
								desc: 'Toasted roll, fresh avocado, tomato slices, choice of protein.',
								image: '/Food items/torta.png',
								alt: 'Menu item placeholder'
							},
						].map((item) => (
							<article key={item.title} className="group overflow-hidden rounded-xl border border-black/10 bg-white transition-transform hover:-translate-y-0.5">
								<div className="relative h-40 w-full bg-neutral-100">
									<Image src={item.image} alt={item.alt} fill className="object-cover" />
								</div>
								<div className="space-y-1 p-4">
									<h3 className="font-medium tracking-tight">{item.title}</h3>
									<p className="text-sm text-neutral-600">{item.desc}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Call to action */}
				<section id="location" className="border-y border-black/10 bg-neutral-50">
					<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-3">
						<div className="md:col-span-2">
							<h2 className="text-2xl font-semibold tracking-tight">Visit us</h2>
							<div className="mt-3 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
								<p>
									<span className="font-medium">Address:</span> 1 Orange Ave, South San Francisco 94080
								</p>
								<p>
									<span className="font-medium">Hours:</span> Mon–Sat 9:00–7:00, Sun Closed
								</p>
								<p>
									<span className="font-medium">Order Ahead:</span> +1 650-834-5348
								</p>
                                <p>
									<span className="font-medium">Business Inquiries / Catering:</span> +1 650-690-4258
								</p>
								
								<p>
									<span className="font-medium">Email:</span> info.lagueratacos@gmail.com
								</p>
							</div>
						</div>
						<div className="flex flex-col items-start gap-3">
							<a href="tel:16506904258" className="inline-flex items-center justify-center rounded-md border border-black bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-900">
								Call Us
							</a>
							<a href="https://www.google.com/maps?q=1+Orange+Ave,+South+San+Francisco+94080" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-black px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-100">
								Directions
							</a>
							<p className="text-xs text-neutral-600">Walk-in and pickup available.</p>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-white">
				<div className="mx-auto max-w-7xl px-6 py-8">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-sm text-neutral-600">© {new Date().getFullYear()} La Guera Tacos</p>
					<div className="flex items-center gap-2 text-sm">
						<a href="https://www.instagram.com/laguera_tacos/" className="flex items-center gap-2 hover:text-neutral-700 transition-colors">
							<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
							Instagram
						</a>
					</div>
				</div>
				</div>
			</footer>
		</div>
	)
}
