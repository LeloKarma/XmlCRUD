document.addEventListener("DOMContentLoaded", function() {
   
    // Parse the XML data and generate the table dynamically
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE books SYSTEM "books.dtd">
    <books>
      <!-- book -->
      <book>
        <!-- Title -->
        <Title>50 Shades of Grey</Title>
        <!-- Date of publishment -->
        <datePublished>2015-12-05</datePublished>
        <!-- Author -->
        <author>Christian Grey</author>
      </book>
      <book>
        <Title>The Witcher</Title>
        <datePublished>2017-07-21</datePublished>
        <author>Ann Marie</author>
      </book>
      <book>
        <Title>After II</Title>
        <datePublished>2009-02-09</datePublished>
        <author>Paul John</author>
      </book>
      <book>
        <Title>Fantasie</Title>
        <datePublished>1997-03-28</datePublished>
        <author>Da Vincii</author>
      </book>
    </books>`;
  
    // Parse the XML data into a Document object
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  
    // Access the root element (books)
    const booksElement = xmlDoc.getElementsByTagName("books")[0];
  
    // Create the table HTML
    const table = document.createElement("table");
    table.id = "myTable";
  
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Title", "Date Published", "Author", "Actions"];
  
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement("tbody");
  
    // Iterate over the book elements
    const bookElements = xmlDoc.getElementsByTagName("book");
    for (let i = 0; i < bookElements.length; i++) {
      const bookElement = bookElements[i];
  
      // Access the values of the book attributes
      const title = bookElement.getElementsByTagName("Title")[0].textContent;
      const datePublished = bookElement.getElementsByTagName("datePublished")[0].textContent;
      const author = bookElement.getElementsByTagName("author")[0].textContent;
  
      // Create a new row in the table
      const row = document.createElement("tr");
  
      const titleCell = document.createElement("td");
      titleCell.textContent = title;
      row.appendChild(titleCell);
  
      const datePublishedCell = document.createElement("td");
      datePublishedCell.textContent = datePublished;
      row.appendChild(datePublishedCell);
  
      const authorCell = document.createElement("td");
      authorCell.textContent = author;
      row.appendChild(authorCell);
  
      const actionsCell = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        editBook(i);
      });
      actionsCell.appendChild(editButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteBook(i);
      });
      actionsCell.appendChild(deleteButton);
  
      row.appendChild(actionsCell);
  
      tbody.appendChild(row);
    }
  
    table.appendChild(tbody);
  
    // Append the table to the document body or another container element
    document.body.appendChild(table);
  
    // Function to handle editing a book
    function editBook(index) {
      // Retrieve the book element from the XML document
      const bookElement = bookElements[index];
  
      // Prompt the user to enter a new title
      const newTitle = prompt("Enter a new title:", bookElement.getElementsByTagName("Title")[0].textContent);
  
      if (newTitle !== null) {
        // Update the title in the XML document
        bookElement.getElementsByTagName("Title")[0].textContent = newTitle;
  
        // Update the title in the table cell
        const titleCell = table.rows[index + 1].cells[0];
        titleCell.textContent = newTitle;
      }
    }
  
    // Function to handle deleting a book
    function deleteBook(index) {
      // Remove the book element from the XML document
      booksElement.removeChild(bookElements[index]);
  
      // Remove the row from the table
      table.deleteRow(index + 1);
    }


     /*   // Function to add a new book to the table
    function addBook() {
    // Prompt the user to enter the details of the new book
    const title = prompt("Enter the title of the new book:");
    const datePublished = prompt("Enter the date of publication of the new book:");
    const author = prompt("Enter the author of the new book:");
  
    // Create a new row in the table
    const newRow = document.createElement("tr");
  
    const titleCell = document.createElement("td");
    titleCell.textContent = title;
    newRow.appendChild(titleCell);
  
    const datePublishedCell = document.createElement("td");
    datePublishedCell.textContent = datePublished;
    newRow.appendChild(datePublishedCell);
  
    const authorCell = document.createElement("td");
    authorCell.textContent = author;
    newRow.appendChild(authorCell);
  
    const actionsCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      editBook(table.rows.length - 1);
    });
    actionsCell.appendChild(editButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteBook(table.rows.length - 1);
    });
    actionsCell.appendChild(deleteButton);
  
    newRow.appendChild(actionsCell);
  
    // Append the new row to the table body
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.appendChild(newRow);
  } */
  });
  