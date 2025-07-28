import axios from 'axios';
import env from '../../services/environment';

const getEvents = async () => {
  try {
    const res = await axios.get(`${env.API_BASE}/events`, {
      params: {
        apikey: env.API_KEY,
        locale: '*', // ambil semua bahasa
        size: 16, // jumlah event
        countryCode: 'ES', // ganti jika ingin wilayah lain
      }
    });

    const events = res.data._embedded?.events || [];

    return events.map(event => ({
      id: event.id,
      title: event.name,
      date: event.dates.start.localDate,
      description: event.info || event.pleaseNote || 'No description available',
      image: event.images?.[0]?.url || null, // ⬅️ ambil gambar pertama
    }));
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
};

export default getEvents;