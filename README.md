# Angular, FastAPI, and PostgreSQL Application

This project is a full-stack application utilizing an **Angular** frontend, a **FastAPI** backend, and a **PostgreSQL** database.

## 🏗️ Installation and Setup

Follow these steps to set up the project locally:

### Frontend

1. Clone the repository:

```bash

    git clone https://github.com/satyajeet4u2/Angular-FastApi-PostgreSQL

    cd Hosiptal_ANgular
```

2. Install dependencies:

```bash
    npm install
```

3. Start the Angular application:
 
 ```bash
    ng serve
```

4. Navigate to http://localhost:4200

### Backend 
1. Navigate to Backend/Fast_API_Postgresql Folder 

```bash
cd Hosiptal_ANgular/Backend/Fast_API_Postgresql

```

2. Install dependencies:
   
install python

 ```bash

   python -m venv venv

```

3. Install postgresql:

set postgres db password --> admin123

create a database --> fast_api_db

postgresql://postgres:admin123@localhost:5432/fast_api_db


4. Install Dbever:

CREATE DATABASE fast_api_db

5. Create Tables

```bash

    ipython

```

```bash

import db, patientmodels


```

```bash

db.create_tables()


```


6. Start the Backend application:
```bash

uvicorn main:app --reload --host 127.0.0.1 --port 8080


```
