# Flask React Project

This is a starter boilerplate for a Flask backend and React frontend project.

## Getting Started (Development Setup)

### 1. Clone the Repository
From your terminal:

```bash
git clone <repo-url>
cd <repo-directory>
```

### 2. Install Python Dependencies
From the **root project directory** (where `Pipfile` and `requirements.txt` are):

```bash
pipenv install -r requirements.txt
```

To regenerate `requirements.txt` from your Pipfile later:

```bash
pipenv lock -r > requirements.txt
```

### 3. Create a `.env` File
Copy from the example if available:

```bash
cp .env.example .env
```

Then set the following values in `.env`:

```env
FLASK_APP=app
FLASK_ENV=development
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///dev.db
SCHEMA=your_flask_schema
```

### 4. Confirm `DATABASE_URL` in `.env`
Example SQLite URL:
```env
DATABASE_URL=sqlite:///dev.db
```

Example PostgreSQL URL:
```env
DATABASE_URL=postgresql://username:password@localhost/db_name
```

### 5. Confirm Schema
Make sure the `SCHEMA` environment variable is a unique **snake_case** name.

## Backend Setup

### 6. Activate Your Virtual Environment

From the root directory:

```bash
pipenv shell
```

### 7. Run Migrations and Seeds

```bash
flask db upgrade
flask seed all
```

### 8. Run Flask App

```bash
flask run
```

## Frontend Setup

From the `react-app` directory:

```bash
cd react-app
npm install
npm start
```

## Deployment with Render.com

### A. Configure Web Service

In the Render dashboard:

- Click **New +** > **Web Service**
- Connect your GitHub repo

Set the following:

- **Environment**: Python 3
- **Root Directory**: (leave blank)
- **Branch**: `main`

### B. Build Command

```bash
npm install --prefix react-app &&
npm run build --prefix react-app &&
pip install -r requirements.txt &&
pip install psycopg2 &&
flask db upgrade &&
flask seed all
```

### C. Start Command

```bash
gunicorn app:app
```

### D. Environment Variables

Add the following in the Render dashboard:

- `FLASK_APP=app`
- `FLASK_ENV=production`
- `SECRET_KEY=your-secret-key`
- `DATABASE_URL=your-database-url`
- `SCHEMA=your_flask_schema`
- `REACT_APP_BASE_URL=https://your-app.onrender.com`

Enable **Auto-Deploy** for automatic updates when pushing to `main`.

## Troubleshooting

- Install missing packages:
```bash
pipenv install package_name
```

- Rebuild virtual environment:
```bash
pipenv --rm
pipenv install -r requirements.txt
```

## Accessing the App

- Flask API: http://localhost:5000  
- React Client: http://localhost:3000

---

Happy coding!
