export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    const quickReplies = [
        {
            id: 'cobertura',
            label: '📍 Cobertura / Ubicación',
            text: '¡Hola! Nosotras somos 100% a domicilio en toda la Región Metropolitana (Santiago). Vamos a tu casa con todo el equipo profesional para que no tengas que moverte. ✨'
        },
        {
            id: 'duracion',
            label: '⏱️ Duración de Aplicación',
            text: 'La aplicación depende de la técnica, pero estima entre 2 a 4 horas para un resultado perfecto, natural y duradero. Preparar tu café favorito mientras tanto es recomendado. ☕'
        },
        {
            id: 'agendamiento',
            label: '📅 Agendamiento / Evaluación',
            text: 'Para agendar, primero necesitamos un diagnóstico capilar gratuito (vía WhatsApp). Envíanos una foto de tu cabello actual y cuéntanos qué largo/volumen buscas. 😍'
        },
        {
            id: 'cuidados',
            label: '🧴 Lavado y Cuidado',
            text: 'Puedes lavar tu cabello normalmente, pero recomendamos usar shampoos sin sulfatos y evitar aplicar acondicionador en la unión de la extensión. ¡Te enviaremos una guía completa al terminar! 🧴'
        }
    ];

    return res.status(200).json(quickReplies);
}
