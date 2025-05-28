import React, { useState } from 'react';

interface LoginProps {
    onLogin: (token: string) => void;
}

const WavesBackground = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                fill="#2b7a00"
                fillOpacity="1"
                d="M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,144C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            >
                <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="
            M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,144C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,96L60,128C120,160,240,224,360,240C480,256,600,224,720,208C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,144C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
          "
                />
            </path>
            <path
                fill="#3a9b00"
                fillOpacity="0.6"
                d="M0,224L60,197.3C120,171,240,117,360,96C480,75,600,85,720,112C840,139,960,181,1080,202.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            >
                <animate
                    attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    values="
            M0,224L60,197.3C120,171,240,117,360,96C480,75,600,85,720,112C840,139,960,181,1080,202.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,192L60,213.3C120,235,240,277,360,266.7C480,256,600,192,720,176C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
            M0,224L60,197.3C120,171,240,117,360,96C480,75,600,85,720,112C840,139,960,181,1080,202.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
          "
                />
            </path>
        </svg>
    </div>
);

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const fakeToken = 'fake_jwt_token';
        onLogin(fakeToken);
    };

    return (
        <>
            <WavesBackground />

            <div className="flex items-center justify-center h-screen w-screen">
                <div
                    className="w-full max-w-md p-12 rounded-3xl shadow-2xl
            bg-white bg-opacity-30
            backdrop-filter backdrop-blur-xl
            border border-white border-opacity-40
            text-white
            flex flex-col items-center
            animate-fade-in"
                    style={{ minHeight: '480px' }}
                >
                    {/* Espaço pra sua logo */}
                    <div className="mb-6 w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center shadow-lg">
                        <img
                            src="./src/logo.png"
                            alt="SevenGenius Logo"
                            className="rounded-full"
                            draggable="false"
                        />
                    </div>

                    <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-md">
                        SevenGenius - Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-white border-opacity-60 bg-white bg-opacity-20 placeholder-white placeholder-opacity-90 text-white focus:outline-none focus:ring-2 focus:ring-[#47ff01]"
                                autoComplete="off"
                                id="username"
                                type="text"
                                placeholder="Seu nome lindo aqui"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-white border-opacity-60 bg-white bg-opacity-20 placeholder-white placeholder-opacity-90 text-white focus:outline-none focus:ring-2 focus:ring-[#47ff01]"
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full py-3 bg-[#31b200] text-white font-semibold rounded-xl hover:bg-[#47ff01] transition duration-300 shadow-lg"
                            type="submit"
                        >
                            Entrar na nave
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
