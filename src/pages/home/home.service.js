import axios from 'axios';
import env from '@services/environment';

const homeService = {
  getEvents: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${env.API_BASE}/events`;
        const params = {
          apikey: env.API_KEY,
          locale: '*',
          size: 16,
          countryCode: 'FR', // ubah ke 'ID' jika untuk Indonesia
        };

        const response = await axios.get(url, { params });
        const rawEvents = response.data._embedded?.events || [];

        const events = rawEvents.map(event => {
          const startDateTime = event.dates?.start?.dateTime || `${event.dates?.start?.localDate}T${event.dates?.start?.localTime}`;
          const dateObj = new Date(startDateTime);

          const localeDate = dateObj.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });
          const time = dateObj.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

          return {
            id: event.id,
            title: event.name,
            date: localeDate,
            time: time,
            location: event._embedded?.venues?.[0]?.name || 'Unknown venue',
            city: event._embedded?.venues?.[0]?.city?.name || '',
            country: event._embedded?.venues?.[0]?.country?.name || '',
            description: event.info || 'No description available',
            image: event.images?.[0]?.url ?? 'https://via.placeholder.com/400x200',
            price: event.priceRanges?.[0]?.min && event.priceRanges?.[0]?.currency
              ? `From ${event.priceRanges[0].currency}${event.priceRanges[0].min.toFixed(2)}`
              : 'Free',
          };
        });

        resolve(events);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        reject(error);
      }
    });
  }
};

export default homeService;