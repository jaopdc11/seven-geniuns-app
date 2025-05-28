import React from 'react';

interface ResultsProps {
    results: JSON;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
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
                    backgroundImage: 'linear-gradient(270deg, #2b7a00, rgb(48, 213, 59))',
                    backgroundSize: '300% 300%',
                    animation: 'pan 15s ease infinite',
                }}
            >
                <div className="bg-seven-white shadow-2xl rounded-2xl p-10 w-full max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold text-seven-green text-center mb-8">
                        SevenGenius - Resultados
                    </h2>
                    {results ? (
                        <pre className="text-gray-700 whitespace-pre-wrap break-words">{JSON.stringify(results, null, 2)}</pre>
                    ) : (
                        <p className="text-gray-700 text-center">Ainda não tem resultados, seu bosta.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Results;
