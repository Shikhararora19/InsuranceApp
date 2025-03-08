# 🏦 InsuranceApp
![License](https://img.shields.io/github/license/Shikhararora19/InsuranceApp?style=for-the-badge)

A **full-stack insurance management system** that allows users to manage insurance items and categories.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
![.NET Core](https://img.shields.io/badge/.NET-%23512BD4.svg?style=for-the-badge&logo=dotnet&logoColor=white)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-%237A25A8.svg?style=for-the-badge&logo=entityframework&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-%23003B57.svg?style=for-the-badge&logo=sqlite&logoColor=white)

---

## 📦 Features

✅ **Item Management** – Add, delete, and view insurance items  
✅ **Category Handling** – Categorize items with dynamic filtering  
✅ **Total Value Calculation** – Shows total insured value per category  
✅ **REST API** – Full backend with ASP.NET Core controllers  
✅ **Database Integration** – Uses SQLite with Entity Framework  
✅ **Modern UI** – Built with React & TailwindCSS  

---

## ⚙️ Installation

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/Shikhararora19/InsuranceApp.git
cd InsuranceApp
```

## **2️⃣ Backend Setup (.NET Core API)**

```sh
cd backend
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```

---

## **3️⃣ Frontend Setup (React)**

```sh
cd frontend
npm install
npm run dev
```

---

## **🔌 API Endpoints**

| **Method** | **Endpoint**         | **Description**                  |
|-----------|---------------------|----------------------------------|
| **GET**   | `/api/items`        | Get all insurance items         |
| **POST**  | `/api/items`        | Add a new item                  |
| **DELETE**| `/api/items/{id}`   | Delete an item by ID            |
| **GET**   | `/api/categories`   | Get all categories              |

---

## **🛠 Architecture**

### **Frontend (React)**
- **`ItemList.tsx`** - Displays all items, grouped by category
- **`AddItemForm.tsx`** - Allows users to add new items
- **`ItemContext.tsx`** - Manages state and API calls

### **Backend (.NET Core)**
- **`ItemsController.cs`** - Handles item CRUD operations
- **`CategoriesController.cs`** - Fetches categories
- **`AppDbContext.cs`** - Defines the database schema

---
