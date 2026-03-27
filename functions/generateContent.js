import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { source_image_url, hair_technique, content_type } = req.body;

    // 1. Validar datos
    if (!source_image_url || !hair_technique || !content_type) {
        return res.status(400).json({ error: 'Faltan datos obligatorios: source_image_url, hair_technique, content_type' });
    }

    try {
        // 2. Llamada a OpenAI
        const systemPrompt = `
        Actúa como Social Media Manager Senior para '¡Qué Glam!'. 
        Tono: Cercano, empático, profesional (amiga experta). 
        Contexto: Servicio premium a domicilio en Santiago de Chile. 
        Si content_type es 'Carousel', genera una respuesta JSON con 4-5 slides, cada una con textoImagen, descripcion y sugerenciaFoto. 
        Si es 'Reel', genera hook, cuerpo, cta y sugerenciaAudio. 
        Para todos los casos, genera un captionRedes largo con emojis y hashtags locales (#QueGlam #ExtensionesSantiago).
        Responde exclusivamente en formato JSON válido.
        `.trim();

        const userPrompt = `
        Crea contenido para:
        Imagen: ${source_image_url}
        Técnica: ${hair_technique}
        Tipo de Contenido: ${content_type}
        `.trim();

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: [
                    { type: "text", text: userPrompt },
                    { type: "image_url", image_url: { url: source_image_url } }
                ]}
            ],
            response_format: { type: "json_object" }
        });

        const generated_content = JSON.parse(response.choices[0].message.content);

        // 3. Guardar en MarketingCampaigns
        const { data, error } = await supabase
            .from('MarketingCampaigns')
            .insert([{
                source_image_url,
                hair_technique,
                content_type,
                generated_content,
                status: 'Generated'
            }])
            .select();

        if (error) throw error;

        // 4. Retornar al frontend
        return res.status(200).json(generated_content);

    } catch (error) {
        console.error('Error generating content:', error);
        return res.status(500).json({ error: 'Error interno al generar contenido con IA.' });
    }
}
