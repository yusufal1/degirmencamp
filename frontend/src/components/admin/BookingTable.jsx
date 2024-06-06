import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { FaSort } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  }
});

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/booking`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const sortedBookings = React.useMemo(() => {
    let sortableBookings = [...bookings];
    if (sortConfig.key !== null) {
      sortableBookings.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableBookings;
  }, [bookings, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm('Bu rezervasyonu silmek istediğinizden emin misiniz?');
    if (confirmDelete) {
      try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/booking/${id}`);
        setBookings(bookings.filter((booking) => booking._id !== id));
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  return (
    <div>
      <PDFDownloadLink className='border p-2 bg-primary text-white'
        document={
          <Document>
            <Page style={styles.page}>
              <View style={styles.section}>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>Ad Soyad</Text>
                    <Text style={styles.tableHeader}>Giriş Tarihi</Text>
                    <Text style={styles.tableHeader}>Çıkış Tarihi</Text>
                    <Text style={styles.tableHeader}>E-Posta</Text>
                    <Text style={styles.tableHeader}>Telefon</Text>
                    <Text style={styles.tableHeader}>Tip</Text>
                    <Text style={styles.tableHeader}>Rezervasyon Oluşturma Tarihi</Text>
                  </View>
                  {sortedBookings.map((booking) => (
                    <View key={booking._id} style={styles.tableRow}>
                      <Text style={styles.tableCell}>{booking.fullname}</Text>
                      <Text style={styles.tableCell}><Moment format="DD.MM.YYYY">{booking.checkIn}</Moment></Text>
                      <Text style={styles.tableCell}><Moment format="DD.MM.YYYY">{booking.checkOut}</Moment></Text>
                      <Text style={styles.tableCell}>{booking.email}</Text>
                      <Text style={styles.tableCell}>{booking.phoneNumber}</Text>
                      <Text style={styles.tableCell}>{booking.bookingType}</Text>
                      <Text style={styles.tableCell}><Moment format="DD.MM.YYYY">{booking.createdAt}</Moment></Text>
                    </View>
                  ))}
                </View>
              </View>
            </Page>
          </Document>
        }
        fileName="booking-list.pdf"
      >
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>

      <div className='flex flex-col gap-5 mt-10'>
        <div className='flex flex-row gap-4'>
          <span className='w-5 h-5 bg-primary'></span>
          <span>Mevcut</span>
        </div>
        <div className='flex flex-row gap-4'>
          <span className='w-5 h-5 bg-yellow-500'></span>
          <span>Gelecek</span>
        </div>
        <div className='flex flex-row gap-4'>
          <span className='w-5 h-5 bg-red-500'></span>
          <span>Geçmiş</span>
        </div>
      </div>

      {/* Tablo */}
      <table className="table-auto w-full border mt-10">
        <thead>
          <tr className='border'>
            <th className='bookings-table-th' onClick={() => requestSort('fullname')}>Ad Soyad <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('checkIn')}>Giriş Tarihi <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('checkOut')}>Çıkış Tış Tarihi <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('email')}>E-Posta <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('phoneNumber')}>Telefon <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('bookingType')}>Tip <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' onClick={() => requestSort('createdAt')}>Rezervasyon Oluşturma Tarihi <FaSort className='inline-block cursor-pointer'/></th>
            <th className='bookings-table-th' >#</th>
          </tr>
        </thead>
        <tbody>
        {sortedBookings.map((booking) => {
  const today = moment().startOf('day');
  const checkInDate = moment(booking.checkIn).startOf('day');
  let rowClass = '';

  if (checkInDate.isSame(today, 'day')) {
    rowClass = 'bg-primary'; // Bugün gelen rezervasyonlar için
  } else if (checkInDate.isAfter(today, 'day')) {
    rowClass = 'bg-yellow-500'; // Gelecek rezervasyonlar için
  } else if (checkInDate.isBefore(today, 'day')) {
    rowClass = 'bg-red-500'; // Geçmiş rezervasyonlar için
  }

  return (
    <tr key={booking._id} className={`border text-sm ${rowClass}`}>
      <td className='p-2 border-r'>{booking.fullname}</td>
      <td className='p-2 border-r'>
        <Moment format="DD.MM.YYYY">{booking.checkIn}</Moment>
      </td>
      <td className='p-2 border-r'>
        <Moment format="DD.MM.YYYY">{booking.checkOut}</Moment>
      </td>
      <td className='p-2 border-r'>{booking.email}</td>
      <td className='p-2 border-r'>{booking.phoneNumber}</td>
      <td className='p-2 border-r'>{booking.bookingType}</td>
      <td className='p-2 border-r'>
        <Moment format="DD.MM.YYYY">{booking.createdAt}</Moment>
      </td>
      <td className='p-2 border-r'>
        <button onClick={() => deleteBooking(booking._id)}><RiDeleteBin6Fill/></button>
      </td>
    </tr>
  );
})}

        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;

