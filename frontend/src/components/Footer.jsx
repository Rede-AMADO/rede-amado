function Footer() {
	return (
		<footer className="fixed bottom-0 w-full bg-gray-900 bg-opacity-90 text-white text-sm z-40">
			<div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
				<p className="mb-2 sm:mb-0 text-center sm:text-left">
					© {new Date().getFullYear()} Rede AMADO — Todos os direitos
					reservados.
				</p>
				<div className="flex space-x-4">
					<a
						href="#"
						className="hover:text-[var(--color-yellow)] transition"
						aria-label="Instagram"
					>
						Instagram
					</a>
					<a
						href="#"
						className="hover:text-[var(--color-green)] transition"
						aria-label="Twitter"
					>
						Twitter
					</a>
					<a
						href="#"
						className="hover:text-[var(--color-purple)] transition"
						aria-label="E-mail"
					>
						Contato
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
