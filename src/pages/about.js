import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function About() {
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
						<Link href="/" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							Home
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/about" className="transition-all duration-300 hover:text-neutral-600 font-semibold text-black relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
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
							<h2 className="text-xl font-bold" style={{ fontFamily: '"Sirivennela", sans-serif' }}>Menu</h2>
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
					<div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
						<div className="mx-auto max-w-4xl text-center">
							<p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-6">Our Story</p>
							<h1 className="text-4xl font-semibold leading-tight sm:text-6xl mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
								Authentic flavors, family traditions
							</h1>
							<p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
								At La Guera Tacos, we bring the authentic taste of Mexico to South San Francisco. 
								Our recipes have been passed down through generations, combining traditional techniques 
								with fresh, local ingredients to create unforgettable street food experiences.
							</p>
						</div>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className="mx-auto max-w-7xl px-6 py-16">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="space-y-6">
							<h2 className="text-3xl font-semibold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
								Our Mission
							</h2>
							<p className="text-lg text-neutral-700 leading-relaxed">
								To serve authentic Mexican street food that brings families together and celebrates 
								the rich culinary traditions of Mexico. Every dish is prepared with love, using 
								fresh ingredients and time-honored recipes.
							</p>
							<div className="pt-4">
								<h3 className="text-xl font-medium mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
									What makes us different
								</h3>
								<ul className="space-y-2 text-neutral-700">
									<li className="flex items-start gap-3">
										<span className="text-green-600 mt-1">✓</span>
										<span>Same street flavor on-site or off.</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 mt-1">✓</span>
										<span>Salsa with a point of view.</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 mt-1">✓</span>
										<span>Built to travel: hot stays hot, crisp stays crisp.</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 mt-1">✓</span>
										<span>Set, serve, clean — smooth service, every time.</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="space-y-6">
							<h2 className="text-3xl font-semibold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
								Our Vision
							</h2>
							<p className="text-lg text-neutral-700 leading-relaxed">
								To become the neighborhood&apos;s favorite destination for authentic Mexican cuisine, 
								where every customer feels like family and every meal tells a story of tradition, 
								passion, and community.
							</p>
							<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
								<Image src="/Logos/LaGueraLogo(Black).jpg" alt="La Guera Tacos kitchen" fill className="object-cover" />
							</div>
						</div>
					</div>
				</section>

				{/* Values */}
				<section className="border-y border-black/10 bg-neutral-50">
					<div className="mx-auto max-w-7xl px-6 py-16">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
								Our Values
							</h2>
							<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
								The principles that guide everything we do at La Guera Tacos
							</p>
						</div>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{[
								{
									title: 'Authenticity',
									desc: 'We stay true to traditional Mexican recipes and cooking methods, ensuring every dish honors our heritage.'
								},
								{
									title: 'Quality',
									desc: 'Fresh ingredients, careful preparation, and attention to detail in every meal we serve.'
								},
								{
									title: 'Community',
									desc: 'Building connections with our neighbors and creating a welcoming space for everyone.'
								},
								{
									title: 'Family',
									desc: 'Treating every customer like family and maintaining the warm, personal touch that defines us.'
								},
								{
									title: 'Tradition',
									desc: 'Preserving and sharing the culinary traditions that have been passed down through generations.'
								},
								{
									title: 'Innovation',
									desc: 'Balancing tradition with modern techniques to create the best possible dining experience.'
								}
							].map((value) => (
								<div key={value.title} className="bg-white rounded-xl p-6 border border-black/10 shadow-sm">
									<h3 className="text-xl font-semibold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
										{value.title}
									</h3>
									<p className="text-neutral-600 leading-relaxed">
										{value.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Call to action */}
				<section className="mx-auto max-w-7xl px-6 py-16">
					<div className="text-center">
						<h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
							Come taste the difference
						</h2>
						<p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
							Experience authentic Mexican street food made with love and tradition. 
							Visit us at 1 Orange Ave, South San Francisco.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/menu" className="inline-flex items-center justify-center rounded-md border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-900" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
								View Our Menu
							</Link>
							<Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-100" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
								Get In Touch
							</Link>
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
