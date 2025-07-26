import axios from 'axios';
import env from '../../services/environment';

const getEvents = async () => {
  const res = await fetch(`${env.API_BASE}/v1/events`);
  const json = await res.json();
  return json.data.map(item => ({
    id: item.id,
    title: item.attributes.name,
    date: item.attributes.starts_at,
    description: item.attributes.description,
  }));
};

export default getEvents;