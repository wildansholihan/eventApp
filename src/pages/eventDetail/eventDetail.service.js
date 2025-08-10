import axios from "axios";
import env from "@services/environment";

const eventDetailService = {
  getById: async (id) => {
    const res = await axios.get(`${env.API_BASE}/events/${id}`, {
      params: { apikey: env.API_KEY },
    });

    const event = res.data;

    // Tanggal & waktu
    const startDateTime = event.dates?.start?.dateTime ||
      `${event.dates?.start?.localDate}T${event.dates?.start?.localTime}`;
    const dateObj = new Date(startDateTime);
    const localeDate = dateObj.toLocaleDateString("id-ID", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    const time = dateObj.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Gambar
    const image = event.images?.find(img => img.width >= 640)?.url
      || event.images?.[0]?.url
      || "https://via.placeholder.com/400x200";

    // Deskripsi fallback
    const description =
      event.description || event.info || event.pleaseNote || "Deskripsi tidak tersedia.";


    return {
      id: event.id,
      title: event.name,
      date: localeDate,
      time: time,
      location: event._embedded?.venues?.[0]?.name || "Tempat tidak diketahui",
      city: event._embedded?.venues?.[0]?.city?.name || "",
      country: event._embedded?.venues?.[0]?.country?.name || "",
      description,
      image,
      eventUrl: event.url,
    };
  },
};

export default eventDetailService;