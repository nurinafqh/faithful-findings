// Tab4.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tab4: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const apiKey = '';
      const city = 'Kuala Lumpur'; 
      const country = 'Malaysia';

      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`,
          {
            headers: {
              'x-api-key': apiKey,
            },
          }
        );

        setPrayerTimes(response.data.timings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div>
      <h1>Prayer Times</h1>
      {loading ? (
        <p>Loading prayer times...</p>
      ) : (
        <ul>
          <li>Fajr: {prayerTimes?.Fajr}</li>
          <li>Dhuhr: {prayerTimes?.Dhuhr}</li>
          <li>Asr: {prayerTimes?.Asr}</li>
          <li>Maghrib: {prayerTimes?.Maghrib}</li>
          <li>Isha: {prayerTimes?.Isha}</li>
        </ul>
      )}
    </div>
  );
};

export default Tab4;
