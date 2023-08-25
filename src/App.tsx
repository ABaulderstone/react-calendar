import { useState } from 'react';
import Calendar from './containers/Calendar';

import Modal from './components/Modal';
import { MinScreenProvider } from './context/MinScreenProvider';
import { theme } from 'twin.macro';

function App() {
  const currentDate = new Date();

  const [createEventModalShown, setCreateEventModalShown] =
    useState<boolean>(false);

  const onCreateEventModalClose = () => {
    setCreateEventModalShown(false);
  };
  const onCreateEventModalOpen = () => {
    setCreateEventModalShown(true);
  };

  return (
    <MinScreenProvider screens={theme`screens`}>
      <Calendar
        currentDate={currentDate}
        onCellClick={onCreateEventModalOpen}
      />

      {createEventModalShown && (
        <Modal
          title='Create Event'
          onClose={onCreateEventModalClose}
          shown={createEventModalShown}
        >
          Meep
        </Modal>
      )}
    </MinScreenProvider>
  );
}

export default App;
