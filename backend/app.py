from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "PrepMind Backend Running"
    })

@app.route("/question")
def question():
    return jsonify({
        "question": "Explain the difference between SQL and NoSQL databases."
    })

if __name__ == "__main__":
    app.run(debug=True)