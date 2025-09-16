import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		
		const form = e.target
		const formData = new FormData(form)
		
		try {
			const response = await fetch('https://formspree.io/f/xwpndlqe', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			})
			
			if (response.ok) {
				setIsSubmitted(true)
				form.reset()
			} else {
				throw new Error('Form submission failed')
			}
		} catch (error) {
			alert('There was an error submitting your form. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
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
						<Link href="/about" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							About
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/menu" className="transition-all duration-300 hover:text-neutral-600 font-semibold relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
							Menu
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
						</Link>
						<Link href="/contact" className="transition-all duration-300 hover:text-neutral-600 font-semibold text-black relative group" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>
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
							<p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-6">Catering Services</p>
							<h1 className="text-4xl font-semibold leading-tight sm:text-6xl mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
								Bring authentic flavors to your event
							</h1>
							<p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
								From corporate events to family celebrations, let La Guera Tacos bring the authentic taste 
								of Mexico to your special occasion. We cater events of all sizes with fresh, made-to-order dishes.
							</p>
						</div>
					</div>
				</section>

				{/* Contact Form */}
				<section className="mx-auto max-w-7xl px-6 py-16">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
									Request a Quote
								</h2>
								<p className="text-lg text-neutral-700 leading-relaxed">
									Tell us about your event and we&apos;ll provide a customized catering quote. 
									We typically respond within 24 hours.
								</p>
							</div>

							{isSubmitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
									<div className="text-green-600 text-4xl mb-4">✓</div>
									<h3 className="text-lg font-semibold text-green-800 mb-2">Thank you!</h3>
									<p className="text-green-700">
										Your catering request has been sent successfully. We&apos;ll get back to you within 24 hours.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
												Full Name *
											</label>
											<input
												type="text"
												id="name"
												name="name"
												required
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
												placeholder="Your full name"
											/>
										</div>
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
												Email Address *
											</label>
											<input
												type="email"
												id="email"
												name="email"
												required
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
												placeholder="your@email.com"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
												placeholder="(555) 123-4567"
											/>
										</div>
										<div>
											<label htmlFor="eventDate" className="block text-sm font-medium text-neutral-700 mb-2">
												Event Date *
											</label>
											<input
												type="date"
												id="eventDate"
												name="eventDate"
												required
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="guestCount" className="block text-sm font-medium text-neutral-700 mb-2">
												Number of Guests *
											</label>
											<select
												id="guestCount"
												name="guestCount"
												required
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
											>
												<option value="">Select guest count</option>
												<option value="10-25">10-25 guests</option>
												<option value="26-50">26-50 guests</option>
												<option value="51-100">51-100 guests</option>
												<option value="101-200">101-200 guests</option>
												<option value="200+">200+ guests</option>
											</select>
										</div>
										<div>
											<label htmlFor="eventType" className="block text-sm font-medium text-neutral-700 mb-2">
												Event Type *
											</label>
											<select
												id="eventType"
												name="eventType"
												required
												className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
											>
												<option value="">Select event type</option>
												<option value="Corporate Event">Corporate Event</option>
												<option value="Wedding">Wedding</option>
												<option value="Birthday Party">Birthday Party</option>
												<option value="Graduation">Graduation</option>
												<option value="Holiday Party">Holiday Party</option>
												<option value="Community Event">Community Event</option>
												<option value="Other">Other</option>
											</select>
										</div>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
											Event Details & Special Requests
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
											placeholder="Tell us about your event, dietary restrictions, preferred menu items, or any special requests..."
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-black bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
										style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}
									>
										{isSubmitting ? 'Sending...' : 'Send Catering Request'}
									</button>
								</form>
							)}
						</div>

						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-semibold tracking-tight mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
									Contact Information
								</h3>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
											<span className="text-white text-xs">📍</span>
										</div>
										<div>
											<p className="font-medium text-neutral-900">Address</p>
											<p className="text-neutral-600">1 Orange Ave, South San Francisco 94080</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
											<span className="text-white text-xs">📞</span>
										</div>
										<div>
											<p className="font-medium text-neutral-900">Phone</p>
											<a href="tel:16506904258" className="text-neutral-600 hover:text-black transition-colors">
												650-690-4258
											</a>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
											<span className="text-white text-xs">✉️</span>
										</div>
										<div>
											<p className="font-medium text-neutral-900">Email</p>
											<a href="mailto:info.lagueratacos@gmail.com" className="text-neutral-600 hover:text-black transition-colors">
												info.lagueratacos@gmail.com
											</a>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
											<span className="text-white text-xs">🕒</span>
										</div>
										<div>
											<p className="font-medium text-neutral-900">Hours</p>
											<p className="text-neutral-600">Mon–Sat 9:00–7:00, Sun Closed</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-neutral-50 rounded-xl p-6">
								<h4 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
									Catering Services
								</h4>
								<ul className="space-y-2 text-sm text-neutral-700">
									<li className="flex items-start gap-2">
										<span className="text-green-600 mt-1">✓</span>
										<span>Catering for events 10-200+ guests.</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-600 mt-1">✓</span>
										<span>Custom menu planning (taquiza-style or food truck style).</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-600 mt-1">✓</span>
										<span>Drop-off + professional set up</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-600 mt-1">✓</span>
										<span>Competitive, transparent pricing.</span>
									</li>
								</ul>
							</div>
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