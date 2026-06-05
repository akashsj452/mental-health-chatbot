from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import openai
from datetime import datetime

load_dotenv()

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')

# ========== HEALTH CHECK ==========
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'timestamp': datetime.now().isoformat(),
        'service': 'nlp-service'
    })

# ========== CHAT ENDPOINT ==========
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    text = data.get('text')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    try:
        response = openai.ChatCompletion.create(
            model=os.getenv('OPENAI_MODEL', 'gpt-4'),
            messages=[
                {
                    'role': 'system',
                    'content': 'You are MindCare, a compassionate and empathetic mental health support chatbot. Your role is to: 1) Listen actively and validate emotions, 2) Provide emotional support and coping strategies, 3) Offer mental health resources when needed, 4) Detect crisis situations and respond with appropriate urgency, 5) Never provide medical diagnosis or replace professional help. Always be warm, supportive, and non-judgmental.'
                },
                {'role': 'user', 'content': text}
            ],
            temperature=0.7,
            max_tokens=int(os.getenv('OPENAI_MAX_TOKENS', 2000))
        )
        
        return jsonify({
            'reply': response['choices'][0]['message']['content'],
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

# ========== CRISIS DETECTION ENDPOINT ==========
@app.route('/api/analyze/crisis', methods=['POST'])
def analyze_crisis():
    data = request.json
    text = data.get('text')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    crisis_keywords = [
        'suicide', 'kill myself', 'end my life', 'die', 'death',
        'hurt myself', 'self harm', 'overdose', 'jump', 'poison'
    ]
    
    text_lower = text.lower()
    is_crisis = any(keyword in text_lower for keyword in crisis_keywords)
    
    return jsonify({
        'is_crisis': is_crisis,
        'confidence': 0.9 if is_crisis else 0.1,
        'resources': {
            'hotline': '1-800-273-8255',
            'text_line': 'Text HOME to 741741'
        } if is_crisis else {}
    })

# ========== SENTIMENT ANALYSIS ENDPOINT ==========
@app.route('/api/analyze/sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get('text')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    try:
        response = openai.ChatCompletion.create(
            model=os.getenv('OPENAI_MODEL', 'gpt-4'),
            messages=[
                {
                    'role': 'system',
                    'content': 'Analyze the sentiment of the provided text and respond with only a JSON object containing: sentiment (positive/negative/neutral), score (0-1), and explanation (brief).'
                },
                {'role': 'user', 'content': text}
            ],
            temperature=0.3,
            max_tokens=200
        )
        
        analysis = response['choices'][0]['message']['content']
        
        return jsonify({
            'analysis': analysis,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

# ========== ERROR HANDLER ==========
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not Found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal Server Error'}), 500

# ========== MAIN ==========
if __name__ == '__main__':
    port = int(os.getenv('FLASK_PORT', 5000))
    app.run(debug=os.getenv('FLASK_ENV') == 'development', host='0.0.0.0', port=port)
