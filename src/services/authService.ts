export async function login(username: string, password: string) {
    const body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);

    const res = await fetch('https://seven-genius-api.onrender.com/auth/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
    });

    if (!res.ok) {
        throw new Error('Login inválido.');
    }

    const data = await res.json();
    console.log('Response data:', data);
    if (!data.access_token) {
        throw new Error('Falha na geração do token.');
    }

    return data.access_token;
}
