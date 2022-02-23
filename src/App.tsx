import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement("#root")

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransacionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransacionModal() {
    setIsNewTransactionModalOpen(false)

  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      />
      <GlobalStyle />
    </>
  );
}
