// Tab3.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonDatetime,
  IonTextarea,
  IonButton,
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [reminders, setReminders] = useState<Array<{ date: string; time: string; note: string }>>([]);
  const [newReminder, setNewReminder] = useState({ date: '', time: '', note: '' });

  const handleAddReminder = () => {
    // Validate and add the new reminder
    if (newReminder.date && newReminder.time) {
      setReminders([...reminders, newReminder]);
      setNewReminder({ date: '', time: '', note: '' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reminder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {reminders.map((reminder, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{reminder.date}</h2>
                <p>{reminder.time}</p>
                <p>{reminder.note}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonItem>
          <IonLabel position="stacked">Date</IonLabel>
          <IonDatetime
            // @ts-ignore
            format="YYYY-MM-DD"
            value={newReminder.date}
            onIonChange={(e: any) => setNewReminder({ ...newReminder, date: e.detail.value! })}
          ></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Add Note</IonLabel>
          <IonTextarea
            value={newReminder.note}
            onIonChange={(e) => setNewReminder({ ...newReminder, note: e.detail.value! })}
          ></IonTextarea>
        </IonItem>

        <IonButton expand="full" onClick={handleAddReminder}>
          Add Reminder
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
