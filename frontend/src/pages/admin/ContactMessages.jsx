import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%', // genişliği artırarak daha fazla alan sağlayabilirsiniz
      maxWidth: '600px',
    },
};

const ContactMessages = () => {
    const [messages, setMessages] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [readMessages, setReadMessages] = useState(() => {
        // localStorage'dan okunan mesajları alın
        const savedReadMessages = localStorage.getItem('readMessages');
        return savedReadMessages ? JSON.parse(savedReadMessages) : [];
    });

    let subtitle;

    function openModal(message) {
      setSelectedMessage(message);
      setIsOpen(true);
      if (!readMessages.includes(message._id)) {
        const newReadMessages = [...readMessages, message._id];
        setReadMessages(newReadMessages);
        // localStorage'a kaydet
        localStorage.setItem('readMessages', JSON.stringify(newReadMessages));
      }
    }

    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
      setSelectedMessage(null);
    }

    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact`);
            setMessages(response.data);
          } catch (error) {
            console.error('Error fetching contacts:', error);
          }
        };

        fetchMessages();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center w-full px-[10%]'>
            <h3 className='text-2xl'>Mesajlar</h3>
            <table className="table-auto w-full border mt-10">
            <thead>
              <tr className='border'>
                <th className='bookings-table-th'>Ad Soyad</th>            
                <th className='bookings-table-th'>Telefon</th>
                <th className='bookings-table-th'>E-Posta</th>
                <th className='bookings-table-th'>Tarih</th>
                <th className='bookings-table-th'>Mesaj</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message._id} className={`border text-sm ${readMessages.includes(message._id) ? 'bg-primary' : ''}`}>
                  <td className='p-2 border-r'>{message.fullname}</td>
                  <td className='p-2 border-r'>{message.phoneNumber}</td>
                  <td className='p-2 border-r'>{message.email}</td>
                  <td className='p-2 border-r'><Moment format="DD.MM.YYYY">{message.createdAt}</Moment></td>
                  <td className='p-2 border-r'>
                    <button onClick={() => openModal(message)}>Görüntüle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Message Modal"
          >
             <div className='min-w-32 max-w-[600px]'>
                <div className='flex justify-between'>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Mesaj</h2>
                <button onClick={closeModal}>X</button>
                </div>
                <div style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {selectedMessage && selectedMessage.message}
                </div>
            </div>
          </Modal>
        </div>
    )
}

export default ContactMessages;
