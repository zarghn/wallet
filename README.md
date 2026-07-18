💳 My Wallet

A two-page wallet application built with HTML, CSS, and Vanilla JavaScript. The UI design and app logic are inspired by the well-known Bankist project (from Jonas Schmedtmann's JavaScript course), but reimagined with a completely custom, blue-themed UI I designed myself.

<img width="4419" height="2486" alt="design - page 1" src="https://github.com/user-attachments/assets/775967a2-2a55-414b-a63b-21412f7d8987" />
<img width="4419" height="2486" alt="design - page 2" src="https://github.com/user-attachments/assets/c5aad4cf-2d8d-45d6-89be-69477146bb6b" />


✨ Features


🔐 Login with username and password
💰 Display total balance and transaction list (last 9 transactions)
💸 Transfer money between accounts
🏦 Request a loan with a simple approval condition
❌ Close account with identity confirmation
📊 Financial summary: total income (In), expenses (Out), and interest earned
⏱️ Automatic logout timer (5 minutes of inactivity)
💾 Login state persisted across pages using sessionStorage


🛠️ Tech Stack


HTML5
CSS3 (hand-crafted, no frameworks)
JavaScript (Vanilla, no libraries)


📁 Project Structure

my-wallet/
├── index.html         # Login page
├── main.html          # Main wallet page
├── main-style.css     # Stylesheet
├── data.js            # Mock accounts data
├── script.js          # Login logic
└── main.js            # Wallet logic (transactions, transfer, loan, close, timer)

🚀 Getting Started

Since this project has no dependencies or backend, you can run it right away:


Clone the repository:


bash   git clone https://github.com/YOUR-USERNAME/my-wallet.git


Open index.html directly in your browser (or use the Live Server extension in VS Code).


🔑 Demo Accounts

Use one of these mock accounts to try the app:

Username: zarqorbany >>>> Password: 13812002
Username: aydahasankhani >>>> Password: 1380200
Username: kimiamirrezaei >>>> Password: 13892010
Username: parisajamalian >>>> Password: 13822003

⚠️ Current Limitations

This is a front-end only project. Data lives only in browser memory and sessionStorage, which means:


Refreshing the page or closing the tab resets any changes (transfers, closed accounts, etc.).
There is no real database or server behind it.


🗺️ Roadmap


 .Connect to a real backend and database
 .Hash passwords instead of storing them as plain text
 .Reset the logout timer on user activity (Transfer/Loan)
 .Personalized welcome message with the user's name
 .Sortable transaction list


🙏 Inspired By

The app logic is based on the Bankist project from Jonas Schmedtmann's JavaScript course, rebuilt with a fully custom UI and design.

📄 License

This project is for learning purposes and is free to use.
