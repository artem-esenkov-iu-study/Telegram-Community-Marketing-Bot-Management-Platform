# Telegram Community Marketing Bot Management Platform

## Project Description

Telegram Community Marketing Bot Management Platform is a student full-stack web application for managing Telegram marketing bots and Telegram communities from one browser-based interface.

The application allows the user to manage Telegram bots, communities, bot-community relationships, dashboard statistics, and message sending from a selected bot to a selected Telegram community.

The project was developed for the IU course **Project Java and Web Development (DLBCSPJWD01)**.

The main purpose of the application is to demonstrate a working web application with:

- a frontend,
- a backend,
- database persistence,
- dynamic interaction between frontend and backend,
- responsive browser-based UI,
- and integration with Telegram bot functionality.

For demonstration purposes, prepared Telegram bots, bot tokens, demo communities, and chat IDs can be used. These demo credentials do not contain private personal information and were created only for public project demonstration.

## Product Features

The application provides the following main features:

1. **Bot Management**

   The user can create, view, edit, and delete Telegram bot records.

2. **Community Management**

   The user can create, view, edit, and delete Telegram community records.

3. **Bot and Community Assignment**

   Bots can be connected with communities. This makes it possible to define which bot is responsible for which Telegram community.

4. **Dashboard**

   The dashboard displays current statistics based on the data stored in the application, for example:

   - number of active bots,
   - number of active communities,
   - number of subscribers/audience members.

5. **Telegram Message Sending**

   On the Community Details page, the user can select a bot and send a message to the connected Telegram community from that bot.

6. **Responsive Web Interface**

   The application can be used in a browser and adapts to different screen sizes.

## Architecture

The project consists of two main parts:

### Backend

The backend is implemented with **Java Spring Boot**.

It is located in the root project structure:

```
src/main/java
src/main/resources
pom.xml
```

The backend is responsible for:

- REST API endpoints,
- business logic,
- database communication,
- storing bots and communities,
- assigning bots to communities,
- providing dashboard statistics,
- sending Telegram messages through Telegram Bot API.

### Frontend

The frontend is implemented with **React and TypeScript**.

It is located in:

```
frontend/
```

The frontend is responsible for:

- user interface,
- pages and navigation,
- forms for bots and communities,
- dashboard display,
- calling backend REST API endpoints,
- sending user actions to the backend.

### Database

The application uses **PostgreSQL** as a local database.

The backend communicates with PostgreSQL through Spring Data JPA / Hibernate.

### Local Application Flow

```
Browser
   ↓
React Frontend
   ↓
Spring Boot REST API
   ↓
PostgreSQL Database

For Telegram message sending:

React Frontend
   ↓
Spring Boot Backend
   ↓
Telegram Bot API
   ↓
Telegram Community / Chat
```

## Technology Stack

### Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven
- Lombok
- Telegram Bot API / Telegram Bots client

### Frontend

- React
- TypeScript
- Vite
- Axios
- React Router
- CSS / UI components

### Database

- PostgreSQL

## System Requirements

Before running the application, the following software should be installed:

- Java 21 or newer
- Maven or the included Maven Wrapper
- Node.js 18 or newer
- npm
- PostgreSQL
- Git
- A modern web browser, for example Chrome, Firefox, Edge, or Safari

## Project Structure

```
Telegram-Community-Marketing-Bot-Management-Platform/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── src/
│   └── main/
│       ├── java/
│       └── resources/
│           └── application.properties
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## Database Setup

The application uses a local PostgreSQL database.

Create a database with the following name:

```
CREATE DATABASE "Telegram-Community-Marketing-Bot-Management-Platform";
```

The database connection settings are located in:

```
src/main/resources/application.properties
```

Example local configuration:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/Telegram-Community-Marketing-Bot-Management-Platform
spring.datasource.username=postgres
spring.datasource.password=123456
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

If your local PostgreSQL username or password is different, update these values:

```
spring.datasource.username=YOUR_POSTGRES_USERNAME
spring.datasource.password=YOUR_POSTGRES_PASSWORD
```

Hibernate automatically creates and updates the required database tables because the application uses:

```
spring.jpa.hibernate.ddl-auto=update
```

## Telegram Bot and Chat ID Information

To send a message to a Telegram community, the application needs:

1. a Telegram bot token,
2. a Telegram chat ID / audience ID.

New Telegram bot and a new Telegram community can be created manually.

### How to Create a Telegram Bot

1. Open Telegram.
2. Search for **BotFather**.
3. Start a chat with BotFather.
4. Use the command:

```
/newbot
```

5. Follow the instructions from BotFather.
6. BotFather will provide a bot token.
7. Use this token in the application when creating or configuring a bot.

### How to Get a Telegram Chat ID

A chat ID is required so that the backend knows where the selected bot should send the message.

A simple way to get the chat ID is:

1. Create or open a Telegram group/community.
2. Add the created Telegram bot to this group/community.
3. Send at least one test message in the group.
4. Use a Telegram chat ID helper bot or Telegram Bot API request to identify the chat ID.
5. Save this chat ID in the community record inside the web application.

Important: the bot must be added to the Telegram community and must have permission to send messages there.

## Installation and Running the Application

### 1. Clone or Unzip the Project

If using GitHub:

```
git clone https://github.com/artem-esenkov-iu-study/Telegram-Community-Marketing-Bot-Management-Platform.git
```

Then open the project folder:

```
cd Telegram-Community-Marketing-Bot-Management-Platform
```

If using the submitted ZIP file, unzip it and open the project root folder.

### 2. Start PostgreSQL

Make sure PostgreSQL is running locally.

Create the database if it does not already exist:

```
CREATE DATABASE "Telegram-Community-Marketing-Bot-Management-Platform";
```

Check the database username and password in:

```
src/main/resources/application.properties
```

### 3. Start the Backend

From the root project folder, run:

On Windows:

```
mvnw.cmd spring-boot:run
```

On macOS / Linux:

```
./mvnw spring-boot:run
```

Alternatively, if Maven is installed globally:

```
mvn spring-boot:run
```

The backend should start on:

```
http://localhost:8080
```

### 4. Start the Frontend

Open a second terminal and go to the frontend folder:

```
cd frontend
```

Install frontend dependencies:

```
npm install
```

Start the frontend:

```
npm run dev
```

The frontend should start on:

```
http://localhost:5173
```

Open this address in the browser.

## How to Use the Application

1. Start PostgreSQL.
2. Start the Spring Boot backend.
3. Start the React frontend.
4. Open the application in the browser.
5. Create or use demo Telegram bot records.
6. Create or use demo community records.
7. Assign bots to communities.
8. Open the dashboard to view current statistics.
9. Open a community details page.
10. Select a bot and send a test message to the Telegram community.

## Testing Description

The application was tested manually with the following main test scenarios.

### 1. CRUD Functionality for Bots and Communities

This test checks the main create, read, update, and delete functionality.

Test actions:

- create a new bot,
- view the bot in the bot list,
- edit bot information,
- delete the bot,
- create a new community,
- view the community in the community list,
- edit community information,
- delete the community,
- assign a bot to a community,
- check that the relationship between bot and community is displayed correctly.

Expected result:

- New records are saved correctly.
- Existing records are displayed correctly.
- Edited records are updated in the database.
- Deleted records are removed from the application.
- Bot-community assignments are stored and displayed correctly.

### 2. Dashboard Dynamic Functionality

This test checks one of the main dynamic frontend-backend interactions.

The dashboard receives data from the backend and displays actual statistics based on the current database content.

Displayed statistics include, for example:

- number of active bots,
- number of communities,
- number of active subscribers / audience members.

Test actions:

- open the dashboard,
- check the displayed numbers,
- add or delete bot/community data,
- return to the dashboard,
- check whether the dashboard values are updated.

Expected result:

- The dashboard loads actual data from the backend.
- The displayed values reflect the current state of the database.
- Changes in bots or communities-related data affect the dashboard statistics.

### 3. Sending Telegram Messages from Community Details Page

This test checks the Telegram integration.

Test actions:

- open a Community Details page,
- select a Telegram bot,
- enter a message,
- send the message,
- check the Telegram community/chat.

Expected result:

- The frontend sends the message request to the backend.
- The backend uses the selected bot token.
- The message is sent to the chat ID connected with the selected community.
- The message appears in the Telegram community/chat.

Important conditions:

- the bot token must be valid,
- the chat ID must be correct,
- the bot must be added to the Telegram group/community,
- the bot must have permission to send messages,
- the backend must be running.

For demonstration, the prepared demo bots and demo communities can be used. Alternatively, new bots can be created through BotFather and connected to a new Telegram community.

## Local Execution Note

The project is intended to run locally for the portfolio submission.

The examiner can run the application locally by starting:

1. PostgreSQL,
2. the Spring Boot backend,
3. the React frontend.

After that, the application is available in the browser at:

```
http://localhost:5173
```

## Build Commands

### Backend Test Command

From the project root:

```
mvn test
```

or with Maven Wrapper:

```
./mvnw test
```

On Windows:

```
mvnw.cmd test
```

### Frontend Build Command

From the frontend folder:

```
cd frontend
npm run build
```

The production build is generated in:

```
frontend/dist
```

## Troubleshooting

### Backend does not start

Check that:

- Java 21 or newer is installed,
- PostgreSQL is running,
- the database exists,
- the database username and password are correct,
- port 8080 is free.

### Frontend does not start

Check that:

- Node.js and npm are installed,
- you are inside the `frontend` folder,
- `npm install` was executed,
- port 5173 is free.

### Frontend does not load data

Check that:

- backend is running on `http://localhost:8080`,
- frontend is running on `http://localhost:5173`,
- PostgreSQL is running,
- database connection is configured correctly.

### Telegram message is not sent

Check that:

- the bot token is correct,
- the chat ID is correct,
- the bot was added to the Telegram group/community,
- the bot has permission to send messages,
- the backend is running.

## Author

Artem Esenkov,
IU14096930

Course: Project Java and Web Development  
Course Code: DLBCSPJWD01  
International University of Applied Sciences