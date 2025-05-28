import React, { useState, useRef } from 'react';

interface UploadProps {
    token: string;
    onResults: (results: any) => void;
}

const Upload: React.FC<UploadProps> = ({ token, onResults }) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            alert('Caralho, escolhe o arquivo primeiro kkkkk');
            return;
        }

        const fakeResults = {
            filename: file.name,
            size: file.size,
            type: file.type,
        };
        onResults(fakeResults);
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <style>
                {`
                    @keyframes pan {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>

            <div
                className="w-screen h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'linear-gradient(270deg, #2b7a00,rgb(48, 213, 59))',
                    backgroundSize: '300% 300%',
                    animation: 'pan 15s ease infinite',
                }}
            >
                <div className="bg-seven-white shadow-2xl rounded-2xl p-10 w-full max-w-lg mx-auto">
                    <h1 className="text-3xl font-bold text-seven-green text-center mb-8">
                        📂 Upload de Arquivo
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Seleciona aí o arquivo:
                            </label>
                            <div
                                className="cursor-pointer border-2 border-dashed border-seven-green rounded-xl p-6 text-center hover:bg-seven-green/10 transition duration-300"
                                onClick={triggerFileInput}
                            >
                                <p className="text-gray-600">
                                    {file ? `📄 ${file.name}` : 'Clique aqui ou arraste o arquivo'}
                                </p>
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-seven-green hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Upload;
