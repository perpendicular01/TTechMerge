# 🖥️ TechMerge

A web scraping-based application that fetches **real-time data of PC components** such as **monitors, GPUs, Cpus, Mouse, and RAMs** from popular e-commerce websites. Users can compare products side-by-side, filter based on preferences like price, brand, and specs, and find the best deals available online.

---

## 🚀 Features

- 🔍 **Real-Time Web Scraping**  
  Automatically fetches and updates the latest prices, specifications, and availability of components.

- ⚙️ **Component Categories**  
  - Monitors  
  - Graphics Cards (GPUs)  
  - RAM (Memory)
  - ROM
  - CPU

- 🔄 **Side-by-Side Comparison**  
  Easily compare specs, prices, and ratings between selected products.

- 🎯 **Advanced Filters**  
  Filter by:
  - Price range
  - Brand
  - Memory size / Refresh rate / VRAM (based on category)
  - Ratings and availability

- 🛒 **Direct Buy Links**  
  Instantly navigate to the product’s page on the original e-commerce site.

- 💡 **Responsive UI**  
  Fully responsive design built for both desktop and mobile users.

---

## 🧰 Tech Stack

### 🎨 Frontend
- **HTML**
- **Tailwind CSS**
- **JAVACRIPT**

### 🔧 Backend
- **Node.js + Express.js**
- **SQL** (for caching scraped data, optional)



## Installation & Setup (Local Environment)

### 1. **Clone the repository**

```bash
    git clone https://github.com/perpendicular01/TTechMerge.git
    cd TTechMerge

2. Install frontend dependencies
    cd ../frontend
    npm install

3. PORT=5000
  MONGO_URI=your_mongodb_connection_string
  SCRAPE_TARGET_URL=https://example.com

4. cd frontend
   npm start

5. npm run dev



