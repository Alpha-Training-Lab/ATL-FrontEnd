# **Alpha Training Lab (ATL) Website**  

Welcome to the **Alpha Training Lab (ATL) Website** repository! This project powers the official website of **Alpha Training Lab (ATL)**—an online community dedicated to fostering personal and professional growth through collaboration, mentorship, and financial independence.  

This README serves as a guide for developers, contributors, and users interested in understanding the structure, features, and functionality of the ATL website.  

---

## **📌 Project Overview**  
The **Alpha Training Lab (ATL) Website** is designed to provide a smooth and engaging experience for both new and existing community members. The website includes:  

✅ A **homepage** showcasing ATL’s mission and core values  
✅ A **blog section** featuring insightful articles on various topics  
✅ A **testimonial section** displaying feedback from community members  
✅ A **KYC registration system** for new users to onboard seamlessly  
✅ A **responsive and modern design** optimized for mobile and desktop  
✅ Secure authentication and state management for user interactions  

The project is built using **React** and **TailwindCSS**, ensuring a fast and maintainable frontend experience.  

---

## **🛠️ Technologies Used**  
This project leverages the latest frontend technologies to ensure optimal performance and maintainability:  

### **Frontend**  
- **React.js** – Core library for building UI components  
- **React Router** – For managing navigation between pages  
- **TailwindCSS** – Utility-first CSS framework for styling  
- **Vite** – Development and build tool for fast performance  
- **Markdown & Gray Matter** – For managing and displaying blog content dynamically  

### **State Management & Context**  
- **React Context API** – For managing global authentication state  

### **Other Tools & Integrations**  
- **Git & GitHub** – For version control and collaboration  
- **ESLint & Prettier** – For code formatting and best practices  
- **Node.js & npm** – Package management and local development  

---

## **🚀 Getting Started**  
Follow these steps to set up the project on your local machine.  

### **1️⃣ Clone the Repository**  
To begin, clone this repository using the following command:  
```bash
git clone https://github.com/yourusername/atl-website.git
```
Replace `yourusername` with your actual GitHub username if you have forked the repository.  

### **2️⃣ Install Dependencies**  
Navigate into the project directory and install the necessary dependencies:  
```bash
cd atl-website  
npm install  
```
This will install all the required **npm packages** listed in the `package.json` file.  

### **3️⃣ Run the Development Server**  
Start the local development server with:  
```bash
npm run dev  
```
The website should now be running at **http://localhost:5173/** in your browser.  

### **4️⃣ Building for Production**  
If you want to generate a production build of the website, run:  
```bash
npm run build  
```
This will optimize and compile the project files into a `dist/` folder, which can be deployed to a live server.  

---

## **📂 Project Structure**  
The project follows a clean and organized folder structure:  

```
📦 atl-website
 ┣ 📂 src
 ┃ ┣ 📂 components       # Reusable UI components (buttons, testimonials, blog cards, etc.)
 ┃ ┣ 📂 pages            # Main website pages (Home, Blog, KYC Registration, etc.)
 ┃ ┣ 📂 data             # Static and dynamic content (blog posts, testimonials)
 ┃ ┣ 📂 assets           # Images and other media files
 ┃ ┣ 📂 context          # Authentication and global state management
 ┃ ┗ 📂 styles           # Custom CSS or Tailwind configurations (if any)
 ┣ 📜 README.md          # Project documentation (this file)
 ┣ 📜 package.json       # Project dependencies and scripts
 ┣ 📜 vite.config.js     # Configuration for Vite
 ┣ 📜 tailwind.config.js # TailwindCSS configuration
 ┗ 📜 .gitignore         # Files to be ignored by Git
```

---

## **📖 Features & Functionality**  

### **🏠 Homepage**  
- Showcases ATL’s mission and values  
- Provides clear navigation to all major sections  

### **📝 Blog System**  
- Articles are written in **Markdown** and stored in the `blogcontent/` directory  
- Metadata such as title, date, and category are managed dynamically  
- React dynamically loads and renders each blog post  

### **💬 Testimonials Section**  
- Displays member testimonials  
- Uses a scrolling animation for an interactive user experience  

### **🆔 KYC Registration System**  
- A **multi-step form** that guides new members through the verification process  
- Uses **state management** to maintain user inputs across steps  
- Allows users to upload required documents  

---

## **👨‍💻 How to Contribute**  
This repository follows a Community Source Model, meaning only ATL IT team members are allowed to contribute.


If you're part of ATL's IT team and want to contribute, follow these steps:
1. **Fork this repository** on GitHub.  
2. **Create a new branch** for your feature or fix:  
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes**, test them locally, and commit:  
   ```bash
   git commit -m "Added new feature"
   ```
4. **Push your branch** to your forked repository:  
   ```bash
   git push origin feature-name
   ```
5. **Create a Pull Request (PR)** to merge your changes into the main project.  

---

After building the project (`npm run build`), deploy the `dist/` folder using your preferred hosting provider.  

---

## **📧 Contact & Support**  
If you have any questions or need support, feel free to reach out to us:  

📩 **Email**: support@alphatraininglab.com  
🌐 **Website**: [www.alphatraininglab.com](https://alphatraininglab.com)  
🐦 **Twitter**: [@AlphaTrainingL](https://twitter.com/AlphaTrainingL)  

---

## **📜 License**
This project is licensed under the ATL Community Source License.

The code is publicly accessible for transparency and learning purposes.
Contributions are restricted to ATL IT team members.
Unauthorized modifications, redistribution, or commercial use without ATL’s permission are prohibited.
See the full LICENSE.md file for more details.  


Happy coding! 🚀🔥