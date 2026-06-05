# Mental Health Chatbot 🧠

A comprehensive web-based mental health support chatbot designed to provide emotional support, wellness resources, coping strategies, and professional guidance.

## Features ✨

- **Conversational AI**: Empathetic, supportive responses powered by OpenAI GPT-4
- **Mood Tracking**: Track your emotional state over time with visual analytics
- **Coping Strategies**: Evidence-based techniques for anxiety, depression, stress, and more
- **Mental Health Resources**: Access crisis helplines, therapist finder, and educational content
- **Professional Referrals**: Get matched with mental health professionals
- **24/7 Availability**: Always available when you need support
- **Privacy First**: End-to-end encrypted conversations
- **Crisis Detection**: Automatic crisis keyword detection with immediate intervention
- **Multi-language Support**: Available in multiple languages
- **Accessibility**: WCAG 2.1 compliant for all users

## Tech Stack 🛠️

### Frontend
- React.js 18 + TypeScript
- Vite
- Tailwind CSS
- Chart.js for analytics
- Socket.io for real-time chat
- Zustand for state management

### Backend
- Node.js + Express
- TypeScript
- PostgreSQL for data storage
- Redis for caching & sessions
- Socket.io for WebSocket support

### AI/ML
- OpenAI GPT-4 API for conversational AI
- Python Flask NLP service
- Sentiment analysis & crisis detection

## Project Structure

```
mental-health-chatbot/
├── frontend/                 # React web application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── stores/          # Zustand stores
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── App.tsx
│   ├── public/
│   └── package.json
│
├── backend/                  # Node.js/Express API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Express middleware
│   │   ├── services/        # Business logic
│   │   ├── config/          # Configuration
│   │   └── app.ts
│   ├── tests/
│   └── package.json
│
├── nlp-service/             # Python NLP/ML service
│   ├── models/              # ML models
│   ├── processors/          # Text processing
│   ├── app.py
│   └── requirements.txt
│
├── docker-compose.yml       # Docker orchestration
├── .env.example             # Environment template
└── docs/                    # Documentation
```

## Installation & Setup

### Prerequisites
- Node.js >= 16
- Python >= 3.8
- PostgreSQL >= 12
- Redis >= 6
- Docker & Docker Compose (optional)

### Quick Start with Docker

```bash
# Clone repository
git clone https://github.com/akashsj452/mental-health-chatbot.git
cd mental-health-chatbot

# Setup environment
cp .env.example .env
# Edit .env with your OpenAI API key and other settings

# Start all services
docker-compose up --build
```

Access the application at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000
- **NLP Service**: http://localhost:5000

### Manual Setup

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env file
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### NLP Service Setup
```bash
cd nlp-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Environment Variables

Copy `.env.example` to `.env` and update:

```env
# Server
NODE_ENV=development
PORT=4000

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/mental_health_db

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_in_production

# OpenAI API
OPENAI_API_KEY=sk-your-api-key-here

# URLs
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:4000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Chat
- `POST /api/chat/message` - Send a message
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/history/:id` - Delete message

### Mood Tracking
- `POST /api/mood/log` - Log mood entry
- `GET /api/mood/history` - Get mood history
- `GET /api/mood/analytics` - Get mood analytics

### Resources
- `GET /api/resources/helplines` - Get crisis helplines
- `GET /api/resources/coping-strategies` - Get coping techniques
- `GET /api/resources/therapists` - Search therapists

## Features in Detail

### 1. Intelligent Conversation
- Powered by OpenAI GPT-4
- Context-aware responses
- Sentiment analysis
- Crisis detection with immediate intervention
- Empathetic & supportive tone

### 2. Mood Tracking Dashboard
- Daily mood logging with emotional categories
- Visual analytics (charts, graphs)
- Mood patterns and trends detection
- Export mood data
- Activity correlations

### 3. Coping Strategies Library
- Categorized by mental health condition
- Step-by-step guided exercises
- Audio-guided meditations
- Breathing exercises
- Progressive muscle relaxation
- CBT techniques

### 4. Resource Hub
- 24/7 crisis hotlines
- Therapist finder with advanced filters
- Mental health apps & tools
- Educational articles
- Support groups
- Mindfulness & meditation resources

### 5. Safety Features
- Crisis keyword detection
- Immediate crisis intervention protocol
- Emergency contact suggestions
- Professional referral recommendations
- HIPAA-compliant data handling

## Security

- SSL/TLS encryption for all connections
- End-to-end encryption for messages
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS protection
- SQL injection prevention
- XSS protection
- Regular security audits

## Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# NLP service tests
cd nlp-service
pytest
```

## Deployment

See deployment guides in `/docs`:
- AWS Deployment
- Heroku Deployment
- DigitalOcean App Platform
- Docker on any cloud provider

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for our community guidelines.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## ⚠️ Important Disclaimer

**This chatbot is NOT a substitute for professional mental health care.**

If you're experiencing a mental health crisis, please contact a mental health professional or crisis hotline immediately.

**Crisis Resources:**
- **National Suicide Prevention Lifeline**: 1-800-273-8255 (US)
- **Crisis Text Line**: Text HOME to 741741
- **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/
- **SAMHSA National Helpline**: 1-800-662-4357

## Support

For support, email support@mentalhealthchatbot.com or open an issue on GitHub.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Voice support
- [ ] Group therapy sessions
- [ ] Integration with wearables
- [ ] Medication reminders
- [ ] Telehealth integration
- [ ] Peer support community
- [ ] Advanced AI personalization
- [ ] Multi-language support
- [ ] Accessibility improvements

## Acknowledgments

- Mental health professionals for guidance
- Open-source community
- Crisis support organizations
- Our users and their feedback

---

Made with ❤️ for mental health support
