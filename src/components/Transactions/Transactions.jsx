import React, { useState } from 'react';
import './Transactions.css';

const Transactions = () => {
  const booksData = [
    { serialNumber: 'S001', bookName: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald', available: 'Y' },
    { serialNumber: 'S002', bookName: '1984', authorName: 'George Orwell', available: 'N' },
    { serialNumber: 'S003', bookName: 'Moby Dick', authorName: 'Herman Melville', available: 'Y' },
    { serialNumber: 'S004', bookName: 'To Kill a Mockingbird', authorName: 'Harper Lee', available: 'N' },
  ];

  const bookNames = ["The Great Gatsby", "1984", "Moby Dick", "To Kill a Mockingbird"];
  const authors = ["F. Scott Fitzgerald", "George Orwell", "Herman Melville", "Harper Lee"];

  const [selectedBook, setSelectedBook] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedSerialNumber, setSelectedSerialNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [actualReturnDate, setActualReturnDate] = useState("");
  const [fineCalculated, setFineCalculated] = useState(0);
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [showBookDetails, setShowBookDetails] = useState(false);
  const [transactionType, setTransactionType] = useState(null);

  const handleSearch = () => {
    const selectedBookData = booksData.find(book => book.bookName === selectedBook);
    if (selectedBookData) {
      setBookDetails(selectedBookData);
      setShowBookDetails(true);
    } else {
      alert("Book not found.");
    }
  };

  const handleCancel = () => {
    setSelectedBook("");
    setSelectedAuthor("");
    setSelectedSerialNumber("");
    setIssueDate("");
    setReturnDate("");
    setActualReturnDate("");
    setFineCalculated(0);
    setFinePaid(false);
    setRemarks("");
    setBookDetails(null);
    setShowBookDetails(false);
    setTransactionType(null);
  };

  const handleConfirm = () => {
    if (selectedBook && selectedAuthor && issueDate && returnDate) {
      alert(`Book "${selectedBook}" has been processed successfully!`);
    } else {
      alert("Please fill in all the required details.");
    }
  };

  const handleFinePaidChange = () => {
    setFinePaid(!finePaid);
  };

  const handleTransactionTypeChange = (type) => {
    setTransactionType(type);
  };

  return (
    <div className="transactions-section">
      <h2>Transactions</h2>
      
      <div className="form-group">
        <label htmlFor="book-name">Enter Book Name:</label>
        <select
          id="book-name"
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          <option value="">Select a Book</option>
          {bookNames.map((book, index) => (
            <option key={index} value={book}>{book}</option>
          ))}
        </select>

        <label htmlFor="author">Enter Author:</label>
        <input
          type="text"
          id="author"
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
          placeholder="Enter Author Name"
        />

        <label htmlFor="serial-no">Enter Serial Number:</label>
        <input
          type="text"
          id="serial-no"
          value={selectedSerialNumber}
          onChange={(e) => setSelectedSerialNumber(e.target.value)}
          placeholder="Enter Serial Number"
        />
      </div>

      <div className="button-group">
        <button type="button" onClick={handleSearch} className="search-btn">
          Search
        </button>
        <button type="button" onClick={handleCancel} className="back-btn">
          Cancel
        </button>
      </div>

      {showBookDetails && bookDetails && (
        <div className="book-details">
          <h3>Book Details:</h3>
          <p><strong>Book Name:</strong> {bookDetails.bookName}</p>
          <p><strong>Author:</strong> {bookDetails.authorName}</p>
          <p><strong>Availability:</strong> {bookDetails.available === 'Y' ? 'Available' : 'Not Available'}</p>
        </div>
      )}

      <div className="actions">
        <div className="form-group">
          <label>Is book available?</label>
          <p>{bookDetails ? bookDetails.available === 'Y' ? 'Yes' : 'No' : 'N/A'}</p>
        </div>

        <div className="form-group">
          <label>Issue Book?</label>
          <button type="button" className="issue-btn" onClick={() => handleTransactionTypeChange('issue')}>
            Issue
          </button>
        </div>

        <div className="form-group">
          <label>Return Book?</label>
          <button type="button" className="return-btn" onClick={() => handleTransactionTypeChange('return')}>
            Return
          </button>
        </div>

        <div className="form-group">
          <label>Pay Fine?</label>
          <button type="button" className="pay-fine-btn" onClick={() => handleTransactionTypeChange('pay-fine')}>
            Pay Fine
          </button>
        </div>
      </div>

      <div className="transaction-form">
        {transactionType === 'issue' && (
          <div>
            <h3>Issue Book</h3>
            <div className="form-group">
              <label>Enter Book Name:</label>
              <select
                id="book-name-issue"
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
              >
                <option value="">Select a Book</option>
                {bookNames.map((book, index) => (
                  <option key={index} value={book}>{book}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Enter Author:</label>
              <input
                type="text"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Issue Date:</label>
              <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Return Date:</label>
              <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Remarks:</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks (optional)"
              />
            </div>

            <div className="form-group">
              <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
              <button type="button" onClick={handleConfirm} className="confirm-btn">Confirm</button>
            </div>
          </div>
        )}

        {transactionType === 'return' && (
          <div>
            <h3>Return Book</h3>
            <div className="form-group">
              <label>Enter Book Name:</label>
              <select
                id="book-name-return"
                value={selectedBook}
                onChange={(e) => setSelectedBook(e.target.value)}
              >
                <option value="">Select a Book</option>
                {bookNames.map((book, index) => (
                  <option key={index} value={book}>{book}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Enter Author:</label>
              <input
                type="text"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Serial No:</label>
              <input
                type="text"
                value={selectedSerialNumber}
                onChange={(e) => setSelectedSerialNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Issue Date:</label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Return Date:</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Actual Return Date:</label>
              <input
                type="date"
                value={actualReturnDate}
                onChange={(e) => setActualReturnDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Fine Calculated:</label>
              <input
                type="number"
                value={fineCalculated}
                onChange={(e) => setFineCalculated(e.target.value)}
                readOnly
              />
            </div>

            <div className="form-group">
              <label>Fine Paid:</label>
              <input
                type="checkbox"
                checked={finePaid}
                onChange={handleFinePaidChange}
              />
            </div>

            <div className="form-group">
              <label>Remarks:</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks (optional)"
              />
            </div>

            <div className="form-group">
              <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
              <button type="button" onClick={handleConfirm} className="confirm-btn">Confirm</button>
            </div>
          </div>
        )}

        {transactionType === 'pay-fine' && (
          <div>
            <h3>Pay Fine</h3>
            <div className="form-group">
              <label>Fine Amount:</label>
              <input
                type="number"
                value={fineCalculated}
                onChange={(e) => setFineCalculated(e.target.value)}
                readOnly
              />
            </div>

            <div className="form-group">
              <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
              <button type="button" onClick={handleConfirm} className="confirm-btn">Pay Fine</button>
            </div>
          </div>
        )}
      </div>

      <button type="button" id="logout" onClick={() => alert("Logging out")} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Transactions;
