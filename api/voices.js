export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.elevenlabs.io/v1/voices', {
      headers: { 'xi-api-key': process.env.ELEVEN_KEY },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'ElevenLabs error' });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
