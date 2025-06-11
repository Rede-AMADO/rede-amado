import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:8000";

async function registerUser(userData) {
	const response = await fetch(`${API_BASE_URL}/usuarios/`, {
		method: 'POST',
		headers: {
			'accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData)
	});
	
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.detail || 'Erro ao cadastrar usuário');
	}
	
	return await response.json();
}

async function loginUser(email) {
	const encodedEmail = encodeURIComponent(email);
	const response = await fetch(`${API_BASE_URL}/usuarios/${encodedEmail}`, {
		method: 'GET',
		headers: {
			'accept': 'application/json',
		},
	});
	
	if (!response.ok) {
		throw new Error('Usuário não encontrado');
	}
	
	return await response.json();
}

function Auth({ isOpen, onClose, onAuthSuccess }) {
	const [isRegister, setIsRegister] = useState(false);

	const [nome, setNome] = useState("");
	const [emailCadastro, setEmailCadastro] = useState("");
	const [senhaCadastro, setSenhaCadastro] = useState("");
	const [confirmSenha, setConfirmSenha] = useState("");
	const [isVoluntario, setIsVoluntario] = useState(false);

	const [emailLogin, setEmailLogin] = useState("");
	const [senhaLogin, setSenhaLogin] = useState("");

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleRegister = async (e) => {
		e.preventDefault();
		
		if (senhaCadastro !== confirmSenha) {
			setError("As senhas não coincidem.");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			const userData = {
				nome,
				email: emailCadastro,
				senha: senhaCadastro,
				tipo: isVoluntario ? "Voluntario" : "Usuario"
			};

			const response = await registerUser(userData);
			console.log("Usuário cadastrado:", response);
			
			onAuthSuccess(emailCadastro);

			setNome("");
			setEmailCadastro("");
			setSenhaCadastro("");
			setConfirmSenha("");
			setIsVoluntario(false);
			
		} catch (error) {
			console.error("Erro no cadastro:", error);
			setError(error.message || "Erro ao cadastrar usuário");
		} finally {
			setIsLoading(false);
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		setIsLoading(true);
		setError("");

		try {
			const user = await loginUser(emailLogin);
			console.log("Dados do usuário:", user);
			
			if (user.senha !== senhaLogin) {
				throw new Error("Senha incorreta");
			}
			
			onAuthSuccess(emailLogin);
			setEmailLogin("");
			setSenhaLogin("");
			
		} catch (error) {
			console.error("Erro no login:", error);
			setError(error.message || "Erro ao fazer login");
		} finally {
			setIsLoading(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center backdrop-grayscale-100 backdrop-blur-sm"
			aria-modal="true"
			role="dialog"
		>
			<div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-md mx-auto">
				<div className="flex justify-between items-center border-b px-6 py-4">
					<h2 className="text-xl font-semibold text-gray-800">
						{isRegister ? "Cadastre-se" : "Faça Login"}
					</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700 focus:outline-none"
						aria-label="Fechar"
					>
						✕
					</button>
				</div>

				<div className="p-6">
					<div className="flex justify-center mb-6">
						<button
							onClick={() => {
								setIsRegister(false);
								setError("");
							}}
							className={`px-4 py-2 font-medium border-b-2 ${
								!isRegister
									? "border-[var(--color-blue)] text-[var(--color-blue)]"
									: "border-transparent text-gray-500 hover:text-gray-700"
							}`}
						>
							Login
						</button>
						<button
							onClick={() => {
								setIsRegister(true);
								setError("");
							}}
							className={`px-4 py-2 font-medium border-b-2 ${
								isRegister
									? "border-[var(--color-blue)] text-[var(--color-blue)]"
									: "border-transparent text-gray-500 hover:text-gray-700"
							}`}
						>
							Cadastro
						</button>
					</div>

					{error && (
						<p className="text-red-500 text-sm mb-4 text-center">{error}</p>
					)}

					{isRegister ? (
						<form onSubmit={handleRegister} className="space-y-4">
							<div>
								<label htmlFor="nome" className="block text-gray-700 font-medium mb-1">
									Nome
								</label>
								<input
									id="nome"
									type="text"
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									required
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="Seu nome completo"
								/>
							</div>

							<div>
								<label htmlFor="emailCadastro" className="block text-gray-700 font-medium mb-1">
									E-mail
								</label>
								<input
									id="emailCadastro"
									type="email"
									value={emailCadastro}
									onChange={(e) => setEmailCadastro(e.target.value)}
									required
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="seuemail@exemplo.com"
								/>
							</div>

							<div>
								<label htmlFor="senhaCadastro" className="block text-gray-700 font-medium mb-1">
									Senha
								</label>
								<input
									id="senhaCadastro"
									type="password"
									value={senhaCadastro}
									onChange={(e) => setSenhaCadastro(e.target.value)}
									required
									minLength={6}
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="Crie uma senha (mínimo 6 caracteres)"
								/>
							</div>

							<div>
								<label htmlFor="confirmSenha" className="block text-gray-700 font-medium mb-1">
									Confirmar Senha
								</label>
								<input
									id="confirmSenha"
									type="password"
									value={confirmSenha}
									onChange={(e) => setConfirmSenha(e.target.value)}
									required
									minLength={6}
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="Repita a senha"
								/>
							</div>

							<div className="flex items-center">
								<input
									id="voluntario"
									type="checkbox"
									checked={isVoluntario}
									onChange={(e) => setIsVoluntario(e.target.checked)}
									className="h-4 w-4 text-[var(--color-blue)] border-gray-300 rounded focus:ring-[var(--color-blue)]"
								/>
								<label htmlFor="voluntario" className="ml-2 text-gray-700 font-medium">
									Cadastrar como voluntário
								</label>
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white font-semibold py-2 rounded-lg transition disabled:opacity-70"
							>
								{isLoading ? "Cadastrando..." : "Criar Conta"}
							</button>
						</form>
					) : (
						<form onSubmit={handleLogin} className="space-y-4">
							<div>
								<label htmlFor="emailLogin" className="block text-gray-700 font-medium mb-1">
									E-mail
								</label>
								<input
									id="emailLogin"
									type="email"
									value={emailLogin}
									onChange={(e) => setEmailLogin(e.target.value)}
									required
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="seuemail@exemplo.com"
								/>
							</div>

							<div>
								<label htmlFor="senhaLogin" className="block text-gray-700 font-medium mb-1">
									Senha
								</label>
								<input
									id="senhaLogin"
									type="password"
									value={senhaLogin}
									onChange={(e) => setSenhaLogin(e.target.value)}
									required
									className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
									placeholder="Sua senha"
								/>
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-[var(--color-blue)] hover:bg-[var(--color-purple)] text-white font-semibold py-2 rounded-lg transition disabled:opacity-70"
							>
								{isLoading ? "Entrando..." : "Entrar"}
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
}

export default Auth;
